import { Asset, Portfolio, Transaction, TransactionType } from '../types';

export interface HistoricalPricePoint {
  d: string;
  c: number;
}

export interface HistoricalMarketData {
  prices: Record<string, HistoricalPricePoint[]>;
  priceCurrencies?: Record<string, string>;
  fx: {
    EURRON: HistoricalPricePoint[];
    USDRON: HistoricalPricePoint[];
  };
  fetchedAt: number;
}

export interface LiveRates {
  eur: number;
  usd: number;
  eurUsd: number;
}

export interface DailySnapshot {
  date: string;
  netWorth: number;
  cashBalance: number;
  assetsValue: number;
  netInvested: number;
  dailyExternalFlow: number;
  unitPrice: number;
  twrCumulativePct: number;
}

export interface CapitalFlowEvent {
  date: string;
  amount: number; // positive = inflow (deposit or direct buy funding), negative = withdrawal
  type: 'deposit' | 'direct_buy' | 'withdrawal';
  description: string;
  portfolioName: string;
}

export interface PortfolioHistoryResult {
  daily: DailySnapshot[];
  capitalFlows: CapitalFlowEvent[];
  xirrFlows: { amount: number; date: Date }[];
  totalDeposits: number;
  totalWithdrawals: number;
  netInvestedCapital: number;
  finalCashByCurrency: Record<string, number>;
  twrAnnualizedPct: number | null;
  totalDays: number;
  usedLiveHistoryCount: number;
  totalNonManualAssets: number;
}

const HISTORY_CACHE_KEY = 'wealthfolio_hist_market_v2';
const HISTORY_CACHE_TTL_MS = 2 * 3600 * 1000; // 2 hours

/**
 * Fetch real historical daily closing prices from Yahoo Finance via /api/history-batch
 * for all non-manual assets (sending currency & currentPrice for exact exchange matching).
 */
export async function fetchHistoricalMarketData(
  assets: Asset[],
  earliestTxDate?: string,
  forceRefresh: boolean = false
): Promise<HistoricalMarketData | null> {
  const uniqueSymbols = Array.from(
    new Set(
      assets
        .map(a => (a.symbol || '').toUpperCase().trim())
        .filter(Boolean)
    )
  ).sort();

  if (uniqueSymbols.length === 0) return null;

  let range: '5y' | '10y' = '5y';
  if (earliestTxDate) {
    const yearsAgo = (Date.now() - new Date(earliestTxDate + 'T00:00:00Z').getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    if (yearsAgo > 4.5) range = '10y';
  }

  const signature = `${range}:${uniqueSymbols.join(',')}`;

  if (!forceRefresh) {
    try {
      const raw = localStorage.getItem(HISTORY_CACHE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (
          parsed.signature === signature &&
          parsed.data &&
          Date.now() - parsed.data.fetchedAt < HISTORY_CACHE_TTL_MS
        ) {
          return parsed.data as HistoricalMarketData;
        }
      }
    } catch (e) {}
  }

  try {
    const response = await fetch('/api/history-batch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        assets: assets.map(a => ({
          symbol: a.symbol,
          customTicker: a.customTicker,
          type: a.type,
          currency: a.currency,
          currentPrice: a.currentPrice,
          name: a.name
        })),
        range,
        refresh: forceRefresh
      }),
      signal: AbortSignal.timeout(25000)
    });

    if (response.ok) {
      const json = await response.json();
      if (json && json.success) {
        const data: HistoricalMarketData = {
          prices: json.prices || {},
          priceCurrencies: json.priceCurrencies || {},
          fx: {
            EURRON: json.fx?.EURRON || [],
            USDRON: json.fx?.USDRON || []
          },
          fetchedAt: Date.now()
        };
        try {
          localStorage.setItem(HISTORY_CACHE_KEY, JSON.stringify({ signature, data }));
        } catch (e) {}
        return data;
      }
    }
  } catch (err) {
    console.warn('[PortfolioEngine] Historical batch fetch failed:', err);
  }

  return null;
}

export function invalidateHistoricalMarketCache() {
  try {
    localStorage.removeItem(HISTORY_CACHE_KEY);
    localStorage.removeItem('wealthfolio_hist_market_v1');
  } catch (e) {}
}

/**
 * Binary search lookup: returns the latest close on or before `dateStr`, or null if none exists yet.
 */
function lookupPriceOnOrBefore(series: HistoricalPricePoint[] | undefined, dateStr: string): number | null {
  if (!series || series.length === 0) return null;
  if (dateStr < series[0].d) return null;
  let lo = 0;
  let hi = series.length - 1;
  let ans = 0;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (series[mid].d <= dateStr) {
      ans = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return series[ans].c;
}

function convertAmount(
  amount: number,
  from: string,
  to: string,
  eurRon: number,
  usdRon: number
): number {
  if (from === to) return amount;
  let inRon = amount;
  if (from === 'EUR') inRon = amount * eurRon;
  else if (from === 'USD') inRon = amount * usdRon;
  else if (from === 'RON') inRon = amount;
  else return amount;

  if (to === 'RON') return inRon;
  if (to === 'EUR') return eurRon > 0 ? inRon / eurRon : inRon;
  if (to === 'USD') return usdRon > 0 ? inRon / usdRon : inRon;
  return amount;
}

/**
 * Official Excel-compatible XIRR (365-day year) with Newton-Raphson + Bisection fallback.
 */
export function calculateOfficialXIRR(
  transactions: { amount: number; date: Date }[],
  currentValue: number,
  valuationDate: Date = new Date()
): number | null {
  if (transactions.length === 0 || currentValue < 0) return null;

  const cashFlows = [
    ...transactions,
    { amount: currentValue, date: valuationDate }
  ].sort((a, b) => a.date.getTime() - b.date.getTime());

  const hasNegative = cashFlows.some(cf => cf.amount < -1e-6);
  const hasPositive = cashFlows.some(cf => cf.amount > 1e-6);
  if (!hasNegative || !hasPositive) return null;

  const t0 = cashFlows[0].date.getTime();
  const totalDays = (valuationDate.getTime() - t0) / (1000 * 60 * 60 * 24);
  if (totalDays < 1) return null;

  const npv = (rate: number): number => {
    let sum = 0;
    for (const cf of cashFlows) {
      const years = (cf.date.getTime() - t0) / (1000 * 60 * 60 * 24 * 365);
      sum += cf.amount / Math.pow(1 + rate, years);
    }
    return sum;
  };

  const dNpv = (rate: number): number => {
    let sum = 0;
    for (const cf of cashFlows) {
      const years = (cf.date.getTime() - t0) / (1000 * 60 * 60 * 24 * 365);
      sum -= (years * cf.amount) / Math.pow(1 + rate, years + 1);
    }
    return sum;
  };

  const guesses = [0.1, 0.0, 0.25, -0.2];
  for (const startGuess of guesses) {
    let rate = startGuess;
    for (let i = 0; i < 60; i++) {
      if (rate <= -0.99999 || !isFinite(rate)) break;
      const f = npv(rate);
      if (!isFinite(f)) break;
      if (Math.abs(f) < 1e-6) {
        return rate * 100;
      }
      const df = dNpv(rate);
      if (!isFinite(df) || Math.abs(df) < 1e-12) break;
      const nextRate = rate - f / df;
      if (Math.abs(nextRate - rate) < 1e-7 && Math.abs(npv(nextRate)) < 1e-3) {
        return nextRate * 100;
      }
      rate = nextRate;
    }
  }

  let low = -0.999;
  let high = 10.0;
  let fLow = npv(low);
  let fHigh = npv(high);
  while (fLow * fHigh > 0 && high < 1000) {
    high *= 2;
    fHigh = npv(high);
  }
  if (fLow * fHigh <= 0) {
    for (let i = 0; i < 100; i++) {
      const mid = (low + high) / 2;
      const fMid = npv(mid);
      if (Math.abs(fMid) < 1e-5 || (high - low) < 1e-7) {
        return mid * 100;
      }
      if (fLow * fMid <= 0) {
        high = mid;
        fHigh = fMid;
      } else {
        low = mid;
        fLow = fMid;
      }
    }
    return ((low + high) / 2) * 100;
  }

  return null;
}

interface PortfolioTxTagged {
  portfolioId: string;
  portfolioName: string;
  portfolioCurrency: string;
  tx: Transaction;
}

interface HoldingLot {
  qty: number;
  costPerUnitNative: number;
}

interface HoldingState {
  qty: number;
  lots: HoldingLot[];
  currency: string;
  lastTradePriceNative: number;
  yahooAnchorScale: number; // 1.0 normally; automatically adjusts for unsplit historical tx vs Yahoo split-adjusted close (e.g. DIGI.RO, TLV.RO, NFLX)
}

/**
 * Authoritative daily portfolio simulation engine.
 * - Isolates cash ledgers per portfolio (in each portfolio's base currency, supporting multi-currency buys from that portfolio's cash without double-counting).
 * - Uses exact FIFO cost accounting matching App.tsx.
 * - Validates every Yahoo Finance historical price series against currency & live price before using it
 *   (prevents wrong-exchange, GBX/GBP, or unadjusted-split distortion).
 * - Guarantees 0.00 discrepancy on today's Net Worth vs KPI cards.
 * - Computes official GIPS Daily Unitized NAV (True Time-Weighted Return / TWR).
 */
export function buildPortfolioHistory(params: {
  portfolios: Portfolio[];
  reportingCurrency: string;
  liveRates: LiveRates;
  marketData: HistoricalMarketData | null;
}): PortfolioHistoryResult {
  const { portfolios, reportingCurrency, liveRates, marketData } = params;

  const taggedTxs: PortfolioTxTagged[] = [];
  const assetLiveByPortfolio = new Map<string, Asset>();
  const assetLiveBySymbol = new Map<string, Asset>();
  const portfolioCurrencyById = new Map<string, string>();

  portfolios.forEach(p => {
    const pCurr = p.currency || reportingCurrency;
    portfolioCurrencyById.set(p.id, pCurr);

    (p.assets || []).forEach(a => {
      const sym = (a.symbol || '').toUpperCase().trim();
      if (!sym) return;
      assetLiveByPortfolio.set(`${p.id}::${sym}`, a);
      if (!assetLiveBySymbol.has(sym)) {
        assetLiveBySymbol.set(sym, a);
      }
    });

    (p.transactions || []).forEach(tx => {
      if (tx && tx.date) {
        taggedTxs.push({
          portfolioId: p.id,
          portfolioName: p.name,
          portfolioCurrency: pCurr,
          tx
        });
      }
    });
  });

  if (taggedTxs.length === 0) {
    return {
      daily: [],
      capitalFlows: [],
      xirrFlows: [],
      totalDeposits: 0,
      totalWithdrawals: 0,
      netInvestedCapital: 0,
      finalCashByCurrency: {},
      twrAnnualizedPct: null,
      totalDays: 0,
      usedLiveHistoryCount: 0,
      totalNonManualAssets: 0
    };
  }

  // Sort chronologically; preserve original index for tie-breaking on the same day
  const indexedTxs = taggedTxs.map((item, origIdx) => ({ ...item, origIdx }));
  indexedTxs.sort((a, b) => {
    const cmp = a.tx.date.localeCompare(b.tx.date);
    if (cmp !== 0) return cmp;
    // Always process DEPOSIT and INTEREST first on the same day so cash is available
    const prio = (t: TransactionType) => {
      if (t === TransactionType.DEPOSIT) return 0;
      if (t === TransactionType.INTEREST) return 1;
      if (t === TransactionType.TAX) return 4;
      if (t === TransactionType.WITHDRAWAL) return 5;
      return 2; // BUY and SELL resolved dynamically per holding below
    };
    const pDiff = prio(a.tx.type) - prio(b.tx.type);
    if (pDiff !== 0) return pDiff;
    return a.origIdx - b.origIdx;
  });

  const firstTxDateStr = indexedTxs[0].tx.date.slice(0, 10);
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];

  const txsByDate = new Map<string, PortfolioTxTagged[]>();
  indexedTxs.forEach(item => {
    const d = item.tx.date.slice(0, 10);
    if (!txsByDate.has(d)) txsByDate.set(d, []);
    txsByDate.get(d)!.push(item);
  });

  // Pre-validate Yahoo historical series for each symbol (currency & scale consistency check against live asset.currentPrice)
  const validatedSeries = new Map<string, { series: HistoricalPricePoint[]; scaleToAssetCurr: number }>();
  const allNonManualSymbols = new Set<string>();

  assetLiveBySymbol.forEach((a, sym) => {
    const t = String(a.type || '').toLowerCase();
    const n = String(a.name || '').toLowerCase();
    const isManual =
      t.includes('cash') || t.includes('numerar') || t.includes('depozit') || t.includes('imobiliar') ||
      n.includes('fidelis') || n.includes('tezaur') || n.includes('doband') ||
      ((t.includes('bond') || t.includes('obligați') || t.includes('titluri')) && !a.customTicker);
    if (isManual) return;

    allNonManualSymbols.add(sym);
    const rawSeries = marketData?.prices?.[sym];
    if (!rawSeries || rawSeries.length === 0) return;

    const histCurr = (marketData?.priceCurrencies?.[sym] || a.currency || '').toUpperCase().trim();
    const assetCurr = (a.currency || '').toUpperCase().trim();
    const lastHistClose = rawSeries[rawSeries.length - 1].c;
    const livePrice = Number(a.currentPrice) || 0;

    if (lastHistClose <= 0) return;

    // Convert last historical close from Yahoo's currency into asset's currency at live rates
    const convertedLastClose =
      histCurr && assetCurr && histCurr !== assetCurr
        ? convertAmount(lastHistClose, histCurr, assetCurr, liveRates.eur, liveRates.usd)
        : lastHistClose;

    const fxFactor = convertedLastClose / lastHistClose;

    // Sanity check: only accept historical series if its latest converted close matches asset's live price within +-15%
    // (rejects wrong-exchange collisions like M vs M.RO or unadjusted stock splits!)
    if (livePrice <= 0 || Math.abs(convertedLastClose - livePrice) / livePrice <= 0.15) {
      validatedSeries.set(sym, { series: rawSeries, scaleToAssetCurr: fxFactor });
    }
  });

  // Per-portfolio cash ledger (single pool in portfolio.currency — handles multi-currency BUY from portfolio cash cleanly!)
  const cashByPortfolio = new Map<string, number>();
  // Per-portfolio, per-symbol FIFO holdings
  const portfolioHoldings = new Map<string, Map<string, HoldingState>>();

  const getCash = (pId: string): number => cashByPortfolio.get(pId) || 0;
  const setCash = (pId: string, val: number) => cashByPortfolio.set(pId, val);

  const getHoldingsMap = (pId: string): Map<string, HoldingState> => {
    let map = portfolioHoldings.get(pId);
    if (!map) {
      map = new Map();
      portfolioHoldings.set(pId, map);
    }
    return map;
  };

  let units = 0;
  let unitPrice = 100;
  let totalDeposits = 0;
  let totalWithdrawals = 0;
  const capitalFlows: CapitalFlowEvent[] = [];
  const xirrFlows: { amount: number; date: Date }[] = [];
  const daily: DailySnapshot[] = [];

  const iterDate = new Date(firstTxDateStr + 'T00:00:00Z');
  iterDate.setUTCDate(iterDate.getUTCDate() - 1);
  const endDate = new Date(todayStr + 'T00:00:00Z');

  while (iterDate <= endDate) {
    const dateStr = iterDate.toISOString().split('T')[0];
    const isToday = dateStr === todayStr;

    const eurRon = liveRates.eur;
    const usdRon = liveRates.usd;

    const rawDailyTxs = txsByDate.get(dateStr) || [];
    // Order same-day trades accurately:
    // 1) DEPOSIT & INTEREST first
    // 2) SELL of already-held positions (frees cash for same-day buys!)
    // 3) BUY
    // 4) SELL of same-day bought positions (day-trades, prevents ghost shares!)
    // 5) TAX & WITHDRAWAL
    const dailyTxs = rawDailyTxs.length <= 1 ? rawDailyTxs : (() => {
      const inflows: PortfolioTxTagged[] = [];
      const heldSells: PortfolioTxTagged[] = [];
      const buys: PortfolioTxTagged[] = [];
      const dayTradeSells: PortfolioTxTagged[] = [];
      const outflows: PortfolioTxTagged[] = [];
      for (const item of rawDailyTxs) {
        const t = item.tx.type;
        if (t === TransactionType.DEPOSIT || t === TransactionType.INTEREST) {
          inflows.push(item);
        } else if (t === TransactionType.SELL) {
          const sym = (item.tx.symbol || '').toUpperCase().trim();
          const curQty = getHoldingsMap(item.portfolioId).get(sym)?.qty || 0;
          const sellQty = Number(item.tx.quantity) || 0;
          if (curQty + 1e-6 >= sellQty) {
            heldSells.push(item);
          } else {
            dayTradeSells.push(item);
          }
        } else if (t === TransactionType.BUY) {
          buys.push(item);
        } else {
          outflows.push(item);
        }
      }
      return [...inflows, ...heldSells, ...buys, ...dayTradeSells, ...outflows];
    })();
    // Track effective external flow that actually changes portfolio NAV (for TWR unitization)
    let effectiveTwrFlowReporting = 0;

    for (const { portfolioId, portfolioName, portfolioCurrency, tx } of dailyTxs) {
      const txCurr = tx.currency || portfolioCurrency;
      const txAmount = Number(tx.amount) || 0;
      const txTax = Number(tx.tax) || 0;
      const txQty = Number(tx.quantity) || 0;
      const sym = (tx.symbol || '').toUpperCase().trim();

      const amountInPortCurr = convertAmount(txAmount, txCurr, portfolioCurrency, eurRon, usdRon);
      const taxInPortCurr = convertAmount(txTax, txCurr, portfolioCurrency, eurRon, usdRon);
      const amountReporting = convertAmount(txAmount, txCurr, reportingCurrency, eurRon, usdRon);
      const txDateObj = new Date(dateStr + 'T00:00:00Z');

      switch (tx.type) {
        case TransactionType.DEPOSIT: {
          setCash(portfolioId, getCash(portfolioId) + amountInPortCurr);
          totalDeposits += amountReporting;
          effectiveTwrFlowReporting += amountReporting;
          xirrFlows.push({ amount: -amountReporting, date: txDateObj });
          capitalFlows.push({
            date: dateStr,
            amount: amountReporting,
            type: 'deposit',
            description: tx.description || 'Depunere',
            portfolioName
          });
          break;
        }
        case TransactionType.WITHDRAWAL: {
          const prevCash = getCash(portfolioId);
          // Only deduct up to available cash; keep TWR unit reduction strictly matched to actual NAV outflow
          const deductedInPortCurr = Math.min(Math.max(0, prevCash), amountInPortCurr);
          const deductedReporting = convertAmount(deductedInPortCurr, portfolioCurrency, reportingCurrency, eurRon, usdRon);
          setCash(portfolioId, Math.max(0, prevCash - amountInPortCurr));
          totalWithdrawals += amountReporting;
          effectiveTwrFlowReporting -= deductedReporting;
          xirrFlows.push({ amount: amountReporting, date: txDateObj });
          capitalFlows.push({
            date: dateStr,
            amount: -amountReporting,
            type: 'withdrawal',
            description: tx.description || 'Retragere',
            portfolioName
          });
          break;
        }
        case TransactionType.INTEREST: {
          const netInt = amountInPortCurr - taxInPortCurr;
          setCash(portfolioId, Math.max(0, getCash(portfolioId) + netInt));
          break;
        }
        case TransactionType.TAX: {
          setCash(portfolioId, Math.max(0, getCash(portfolioId) - amountInPortCurr));
          break;
        }
        case TransactionType.BUY: {
          const totalCostInPortCurr = amountInPortCurr + taxInPortCurr;
          const availCash = getCash(portfolioId);
          if (availCash >= totalCostInPortCurr) {
            setCash(portfolioId, availCash - totalCostInPortCurr);
          } else {
            const externalNeededInPortCurr = totalCostInPortCurr - Math.max(0, availCash);
            const externalNeededReporting = convertAmount(externalNeededInPortCurr, portfolioCurrency, reportingCurrency, eurRon, usdRon);
            setCash(portfolioId, 0);
            totalDeposits += externalNeededReporting;
            effectiveTwrFlowReporting += externalNeededReporting;
            xirrFlows.push({ amount: -externalNeededReporting, date: txDateObj });
            capitalFlows.push({
              date: dateStr,
              amount: externalNeededReporting,
              type: 'direct_buy',
              description: tx.description || `Achiziție directă ${sym}`,
              portfolioName
            });
          }

          if (sym && txQty > 0) {
            const totalCostNative = txAmount + txTax;
            const hMap = getHoldingsMap(portfolioId);
            const existing = hMap.get(sym) || {
              qty: 0,
              lots: [],
              currency: txCurr,
              lastTradePriceNative: 0,
              yahooAnchorScale: 1.0
            };
            const costPerUnit = totalCostNative / txQty;
            const tradePrice = (Number(tx.price) || 0) > 0 ? Number(tx.price) : (txAmount / txQty);
            existing.lots.push({ qty: txQty, costPerUnitNative: costPerUnit });
            existing.qty += txQty;
            existing.currency = txCurr;
            existing.lastTradePriceNative = tradePrice;

            // Detect corporate split / bonus-share scale mismatch between actual broker tx.price and Yahoo split-adjusted close
            const valid = validatedSeries.get(sym);
            const histRaw = valid ? lookupPriceOnOrBefore(valid.series, dateStr) : null;
            if (valid && histRaw && histRaw > 0 && tradePrice > 0) {
              const yahooPriceAtTx = histRaw * valid.scaleToAssetCurr;
              const relDiff = Math.abs(tradePrice - yahooPriceAtTx) / yahooPriceAtTx;
              if (relDiff > 0.12) {
                existing.yahooAnchorScale = tradePrice / yahooPriceAtTx;
              } else {
                existing.yahooAnchorScale = 1.0;
              }
            }

            hMap.set(sym, existing);
          }
          break;
        }
        case TransactionType.SELL: {
          const netProceedsInPortCurr = amountInPortCurr - taxInPortCurr;
          setCash(portfolioId, getCash(portfolioId) + netProceedsInPortCurr);

          if (sym && txQty > 0) {
            const hMap = getHoldingsMap(portfolioId);
            const existing = hMap.get(sym);
            if (existing && existing.qty > 0) {
              let toSell = txQty;
              while (toSell > 1e-8 && existing.lots.length > 0) {
                const lot = existing.lots[0];
                if (lot.qty > toSell) {
                  lot.qty -= toSell;
                  toSell = 0;
                } else {
                  toSell -= lot.qty;
                  existing.lots.shift();
                }
              }
              existing.qty = Math.max(0, existing.qty - txQty);
              if (existing.qty <= 1e-6) {
                existing.yahooAnchorScale = 1.0;
              }
              if ((Number(tx.price) || 0) > 0) {
                existing.lastTradePriceNative = Number(tx.price);
              }
              hMap.set(sym, existing);
            }
          }
          break;
        }
      }
    }

    // Apply external cash flows to TWR unit count at pre-flow unitPrice
    if (Math.abs(effectiveTwrFlowReporting) > 1e-8 && unitPrice > 1e-6) {
      if (effectiveTwrFlowReporting > 0) {
        units += effectiveTwrFlowReporting / unitPrice;
      } else {
        const unitsOut = Math.abs(effectiveTwrFlowReporting) / unitPrice;
        units = Math.max(0, units - unitsOut);
      }
    }

    // Compute end-of-day Cash (converted from each portfolio's currency to reportingCurrency)
    let totalCashReporting = 0;
    cashByPortfolio.forEach((bal, pId) => {
      if (bal > 0) {
        const pCurr = portfolioCurrencyById.get(pId) || reportingCurrency;
        totalCashReporting += convertAmount(bal, pCurr, reportingCurrency, eurRon, usdRon);
      }
    });

    // Compute end-of-day Mark-to-Market Assets Value
    let totalAssetsReporting = 0;
    portfolioHoldings.forEach((hMap, pId) => {
      hMap.forEach((holding, sym) => {
        if (holding.qty <= 1e-6) return;
        const liveAsset = assetLiveByPortfolio.get(`${pId}::${sym}`) || assetLiveBySymbol.get(sym);

        let remCost = 0;
        let remQty = 0;
        for (const lot of holding.lots) {
          remCost += lot.qty * lot.costPerUnitNative;
          remQty += lot.qty;
        }
        const fifoAvgCost = remQty > 0 ? remCost / remQty : holding.lastTradePriceNative;

        let priceNative: number;
        if (isToday && liveAsset && Number(liveAsset.currentPrice) > 0) {
          priceNative = Number(liveAsset.currentPrice);
        } else {
          const valid = validatedSeries.get(sym);
          const histRaw = valid ? lookupPriceOnOrBefore(valid.series, dateStr) : null;
          if (histRaw !== null && histRaw > 0 && valid) {
            priceNative = histRaw * valid.scaleToAssetCurr * (holding.yahooAnchorScale || 1.0);
          } else if (holding.lastTradePriceNative > 0) {
            priceNative = holding.lastTradePriceNative;
          } else if (fifoAvgCost > 0) {
            priceNative = fifoAvgCost;
          } else if (liveAsset && Number(liveAsset.currentPrice) > 0) {
            priceNative = Number(liveAsset.currentPrice);
          } else {
            priceNative = 0;
          }
        }

        const assetCurr = liveAsset?.currency || holding.currency || reportingCurrency;
        totalAssetsReporting += convertAmount(holding.qty * priceNative, assetCurr, reportingCurrency, eurRon, usdRon);
      });
    });

    const netWorth = totalCashReporting + totalAssetsReporting;
    const netInvested = Math.max(0, totalDeposits - totalWithdrawals);

    if (units > 1e-6 && netWorth > 0) {
      unitPrice = netWorth / units;
    }

    daily.push({
      date: dateStr,
      netWorth,
      cashBalance: totalCashReporting,
      assetsValue: totalAssetsReporting,
      netInvested,
      dailyExternalFlow: effectiveTwrFlowReporting,
      unitPrice,
      twrCumulativePct: ((unitPrice / 100) - 1) * 100
    });

    iterDate.setUTCDate(iterDate.getUTCDate() + 1);
  }

  // Official Annualized TWR (Portfolio CAGR, independent of deposit timing)
  const totalDays = Math.max(
    0,
    (new Date(todayStr + 'T00:00:00Z').getTime() - new Date(firstTxDateStr + 'T00:00:00Z').getTime()) /
      (1000 * 60 * 60 * 24)
  );
  let twrAnnualizedPct: number | null = null;
  if (totalDays >= 15 && unitPrice > 0) {
    const years = totalDays / 365.25;
    const ann = (Math.pow(unitPrice / 100, 1 / years) - 1) * 100;
    if (isFinite(ann)) {
      twrAnnualizedPct = ann;
    }
  }

  const finalCashByCurrency: Record<string, number> = {};
  cashByPortfolio.forEach((bal, pId) => {
    if (bal > 0) {
      const pCurr = portfolioCurrencyById.get(pId) || reportingCurrency;
      finalCashByCurrency[pCurr] = (finalCashByCurrency[pCurr] || 0) + bal;
    }
  });

  return {
    daily,
    capitalFlows,
    xirrFlows,
    totalDeposits,
    totalWithdrawals,
    netInvestedCapital: Math.max(0, totalDeposits - totalWithdrawals),
    finalCashByCurrency,
    twrAnnualizedPct,
    totalDays,
    usedLiveHistoryCount: validatedSeries.size,
    totalNonManualAssets: allNonManualSymbols.size
  };
}
