import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

// Parse JSON and urlencoded bodies with increased limits for larger portfolios/transaction lists
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Initialize Google Gen AI client with robust api key selection
const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("WARNING: GEMINI_API_KEY environment variable is not defined. AI functionality will return fallback warnings.");
}

// Helper to check and get the AI client
function getAiClient(referer?: string) {
  const freshKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!freshKey) {
    throw new Error("Serviciul AI nu este configurat. Cheia GEMINI_API_KEY lipsește în setări.");
  }
  
  const headers: Record<string, string> = {
    'User-Agent': 'aistudio-build',
  };
  
  if (referer) {
    headers['Referer'] = referer;
    try {
      const url = new URL(referer);
      headers['Origin'] = url.origin;
    } catch (e) {
      // ignore invalid URLs, just forward referer as is
    }
  }

  return new GoogleGenAI({
    apiKey: freshKey,
    httpOptions: {
      headers: headers
    }
  });
}

// Helper to call Gemini with exponential backoff and automatic lightweight model fallback on transient errors (503/429)
async function generateContentWithRetry(client: any, params: any, maxRetries = 3, initialDelay = 1500) {
  const originalModel = params.model || 'gemini-2.5-flash';
  // Use lightweight cost-efficient models only (no pro/thinking models, no deprecated 1.5 models, no googleSearch grounding)
  const modelsToTry = [originalModel, 'gemini-2.5-flash', 'gemini-2.5-flash-lite'];
  const uniqueModels = Array.from(new Set(modelsToTry));

  for (let m = 0; m < uniqueModels.length; m++) {
    const modelCandidate = uniqueModels[m];
    let attempt = 0;
    while (attempt <= maxRetries) {
      try {
        const baseConfig = { ...(params.config || {}) };
        // Explicitly ensure googleSearch grounding tools are disabled
        delete baseConfig.tools;
        // Disable thinking tokens on gemini-2.5-flash so maxOutputTokens (800) goes 100% to concise output at minimum cost
        if (modelCandidate === 'gemini-2.5-flash') {
          baseConfig.thinkingConfig = { thinkingBudget: 0 };
        } else {
          delete baseConfig.thinkingConfig;
        }

        const currentParams = {
          ...params,
          model: modelCandidate,
          config: baseConfig
        };
        return await client.models.generateContent(currentParams);
      } catch (error: any) {
        attempt++;
        const errorMessage = String(error?.message || "");
        const errorStatus = String(error?.status || "");
        const errorCode = error?.code || error?.status_code || 0;
        
        const isTransient = 
          errorMessage.includes("503") || 
          errorMessage.includes("UNAVAILABLE") || 
          errorMessage.includes("429") || 
          errorMessage.includes("RESOURCE_EXHAUSTED") || 
          errorStatus.includes("UNAVAILABLE") || 
          errorStatus.includes("RESOURCE_EXHAUSTED") || 
          errorCode === 503 || 
          errorCode === 429;

        if (isTransient) {
          if (attempt <= maxRetries) {
            const delay = initialDelay * Math.pow(2, attempt - 1);
            console.warn(`[Gemini API Warning] Attempt ${attempt} failed with transient error using model ${modelCandidate}: ${errorMessage}. Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          } else if (m < uniqueModels.length - 1) {
            console.warn(`[Gemini API Info] Switching from model ${modelCandidate} to fallback model ${uniqueModels[m + 1]} due to persistent load errors.`);
            break;
          }
        }
        throw error;
      }
    }
  }
}

// --- API ENDPOINTS ---

// Exchange Rates endpoint
app.get("/api/exchange-rates", async (req, res) => {
  try {
    const tickers = ['EURRON=X', 'USDRON=X', 'EURUSD=X'];
    const results = await Promise.allSettled(
      tickers.map(t => fetchYahooTickerServer(t))
    );

    const eurData = results[0].status === 'fulfilled' ? results[0].value : null;
    const usdData = results[1].status === 'fulfilled' ? results[1].value : null;
    const eurUsdData = results[2].status === 'fulfilled' ? results[2].value : null;

    if (eurData && usdData) {
      const finalEurUsd = eurUsdData || {
        price: eurData.price / usdData.price,
        previousClose: eurData.previousClose / usdData.previousClose,
        success: true
      };

      return res.json({
        eur: eurData,
        usd: usdData,
        eurUsd: finalEurUsd
      });
    }

    res.status(500).json({ error: "Nu s-au putut prelua cursurile valutare." });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Eroare la preluarea cursurilor." });
  }
});

// Helper for Yahoo Ticker on server
const SERVER_TICKER_MAP: Record<string, string> = {
  'ETH': 'ETH-USD',
  'BTC': 'BTC-USD',
  'GOLD': 'EGLN.L',
  'SXR8': 'SXR8.DE',
  'EUNL': 'EUNL.DE',
  'IS3N': 'IS3N.DE',
  'IUSN': 'IUSN.DE',
  'DFEN': 'DFEN.DE',
  'EUDF': 'EUDF.DE',
  'LYP6': 'LYP6.DE',
  'IS0E': 'IS0E.DE',
  'VWCE': 'VWCE.DE',
  'VUAA': 'VUAA.L',
  'TVBETETF': 'TVBETETF.RO',
  'TEL': 'TEL.RO',
  'SNP': 'SNP.RO',
  'TLV': 'TLV.RO',
  'SNG': 'SNG.RO',
  'H2O': 'H2O.RO',
  'DIGI': 'DIGI.RO',
  'BRD': 'BRD.RO',
  'TGN': 'TGN.RO',
  'FP': 'FP.RO',
  'M': 'M.RO',
  'WINE': 'WINE.RO',
  'AQ': 'AQ.RO',
  'TTS': 'TTS.RO',
  'IB01': 'IB01.L',
  'IBTA': 'IBTA.L',
  'FLOA': 'FLOA.L',
  'BB3M': 'BB3M.L',
  'C3M': 'C3M.PA',
  'EGLN': 'EGLN.L'
};

const CG_MAP: Record<string, string> = {
  'BTC': 'bitcoin',
  'ETH': 'ethereum',
  'SOL': 'solana',
  'ADA': 'cardano',
  'XRP': 'ripple',
  'DOT': 'polkadot',
  'DOGE': 'dogecoin',
  'AVAX': 'avalanche-2',
  'LINK': 'chainlink',
  'NEAR': 'near',
  'SUI': 'sui',
  'APT': 'aptos',
  'LTC': 'litecoin',
  'MATIC': 'polygon-ecosystem-token',
  'POL': 'polygon-ecosystem-token',
  'SHIB': 'shiba-inu',
  'PEPE': 'pepe',
  'RENDER': 'render-token',
  'FET': 'fetch-ai',
  'ICP': 'internet-computer',
  'ATOM': 'cosmos',
  'XLM': 'stellar',
  'UNI': 'uniswap',
  'TRX': 'tron',
  'BNB': 'binancecoin',
  'ALGO': 'algorand',
  'HBAR': 'hedera-hashgraph'
};

const BVB_SYMBOLS = new Set([
  'TLV', 'FP', 'SNP', 'H2O', 'BRD', 'SNG', 'TGN', 'DIGI', 'EL', 'M',
  'WINE', 'AQ', 'TTS', 'ONE', 'TEL', 'COTE', 'TRP', 'EBS', 'TVBETETF', 'ATB', 'SOCP'
]);

// In-memory cache for ticker prices (90 seconds TTL)
const priceCache = new Map<string, { price: number; previousClose: number; timestamp: number }>();
const CACHE_TTL = 90 * 1000;

/**
 * Free Public Crypto Provider (CoinGecko + Binance API)
 */
async function fetchCryptoDedicated(symbol: string, currency: string = 'usd') {
  const cleanSym = symbol.toUpperCase().trim();
  const baseCrypto = cleanSym.replace(/[-_/.](USD|EUR|RON|USDT)$/i, '');
  const cgId = CG_MAP[cleanSym] || CG_MAP[baseCrypto];

  if (cgId) {
    try {
      const cgRes = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cgId}&vs_currencies=usd,eur,ron&include_24hr_change=true`, {
        headers: { 'Accept': 'application/json' },
        signal: AbortSignal.timeout(3500)
      });
      if (cgRes.ok) {
        const data = await cgRes.json();
        const cur = currency.toLowerCase();
        if (data[cgId] && data[cgId][cur]) {
          const price = data[cgId][cur];
          const change = data[cgId][`${cur}_24h_change`] || 0;
          return {
            price,
            previousClose: price / (1 + (change / 100)),
            success: true
          };
        }
      }
    } catch (e) {}
  }

  try {
    const pair = `${baseCrypto}USDT`;
    const bRes = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${pair}`, {
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(3000)
    });
    if (bRes.ok) {
      const bData = await bRes.json();
      if (bData && bData.lastPrice) {
        const price = parseFloat(bData.lastPrice);
        const prevClose = parseFloat(bData.openPrice) || price;
        if (price > 0) {
          return { price, previousClose: prevClose, success: true };
        }
      }
    }
  } catch (e) {}

  return null;
}

function getServerTickerCandidates(symbol: string, customTicker?: string, type?: string): string[] {
  const candidates: string[] = [];
  const rawSym = String(symbol || '').trim().toUpperCase();
  const rawCustom = String(customTicker || '').trim().toUpperCase();
  const assetType = String(type || '').toLowerCase();

  const inputs = [rawCustom, rawSym].filter(Boolean);

  for (const item of inputs) {
    candidates.push(item);

    if (SERVER_TICKER_MAP[item]) {
      candidates.push(SERVER_TICKER_MAP[item]);
    }

    const baseWithoutDot = item.replace(/\.(US|UK|DE|RO|L|PA|AS|LS|MI|MC)$/i, '');
    if (baseWithoutDot !== item) {
      if (SERVER_TICKER_MAP[baseWithoutDot]) {
        candidates.push(SERVER_TICKER_MAP[baseWithoutDot]);
      }
      candidates.push(baseWithoutDot);
      if (item.endsWith('.UK')) {
        candidates.push(`${baseWithoutDot}.L`);
      }
    }

    const base = item.replace(/\.[A-Z0-9]{1,4}$/, '');
    if (SERVER_TICKER_MAP[base]) {
      candidates.push(SERVER_TICKER_MAP[base]);
    }

    if (assetType.includes('crypto') || assetType.includes('cripto') || CG_MAP[item] || CG_MAP[base]) {
      const baseCrypto = base.replace(/[-_/.](USD|EUR|RON|USDT)$/, '');
      candidates.push(`${baseCrypto}-USD`);
      candidates.push(`${baseCrypto}-EUR`);
      candidates.push(baseCrypto);
    }

    if (!item.includes('.') && !item.includes('-')) {
      candidates.push(`${base}.DE`);
      candidates.push(`${base}.RO`);
      candidates.push(`${base}.L`);
    }
  }

  return [...new Set(candidates)].slice(0, 4);
}

/**
 * Yahoo Finance + Free Stooq Ticker Fetcher
 */
async function fetchYahooTickerServer(ticker: string) {
  const cached = priceCache.get(ticker);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return { price: cached.price, previousClose: cached.previousClose, success: true };
  }

  const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

  // 1. Yahoo Finance v7 Quote API (Fastest and supports global tickers including .DE, .RO, .L, US)
  try {
    const quoteUrl = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(ticker)}`;
    const res = await fetch(quoteUrl, {
      headers: { 'User-Agent': USER_AGENT, 'Accept': 'application/json' },
      signal: AbortSignal.timeout(3500)
    });
    if (res.ok) {
      const json = await res.json();
      const item = json.quoteResponse?.result?.[0];
      if (item && typeof item.regularMarketPrice === 'number' && item.regularMarketPrice > 0) {
        const price = item.regularMarketPrice;
        const prevClose = item.regularMarketPreviousClose || price;
        const data = { price, previousClose: prevClose, success: true };
        priceCache.set(ticker, { price, previousClose: prevClose, timestamp: Date.now() });
        return data;
      }
    }
  } catch (e) {}

  // 2. Yahoo Finance v8 Chart API
  const yahooServers = [
    'https://query1.finance.yahoo.com',
    'https://query2.finance.yahoo.com'
  ];

  for (const server of yahooServers) {
    try {
      const url = `${server}/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=5d`;
      const res = await fetch(url, {
        headers: {
          'User-Agent': USER_AGENT,
          'Accept': 'application/json'
        },
        signal: AbortSignal.timeout(3500)
      });
      if (!res.ok) continue;

      const json = await res.json();
      const result = json.chart?.result?.[0];
      if (result) {
        const meta = result.meta;
        let price = meta.regularMarketPrice;
        if (!price || typeof price !== 'number') {
          if (result.indicators?.quote?.[0]?.close) {
            const closePrices = result.indicators.quote[0].close;
            for (let i = closePrices.length - 1; i >= 0; i--) {
              if (closePrices[i] !== null && typeof closePrices[i] === 'number') {
                price = closePrices[i];
                break;
              }
            }
          }
        }

        const prevClose = meta.chartPreviousClose || meta.previousClose || price;

        if (price && typeof price === 'number' && price > 0) {
          const data = { price, previousClose: prevClose, success: true };
          priceCache.set(ticker, { price, previousClose: prevClose, timestamp: Date.now() });
          return data;
        }
      }
    } catch (e: any) {
      continue;
    }
  }

  // 3. Stooq Free Public API Fallback
  try {
    const stooqTicker = ticker.toLowerCase().replace(/\.uk$/, '.uk').replace(/\.de$/, '.de').replace(/\.ro$/, '.ro');
    const stooqRes = await fetch(`https://stooq.com/q/l/?s=${encodeURIComponent(stooqTicker)}&f=sdogl1&e=json`, {
      signal: AbortSignal.timeout(3500)
    });
    if (stooqRes.ok) {
      const stooqData = await stooqRes.json();
      const item = stooqData.symbols?.[0];
      if (item && item.close && typeof item.close === 'number' && item.close > 0) {
        const data = {
          price: item.close,
          previousClose: item.open || item.close,
          success: true
        };
        priceCache.set(ticker, { price: data.price, previousClose: data.previousClose, timestamp: Date.now() });
        return data;
      }
    }
  } catch (e) {}

  return null;
}

/**
 * Main Asset Fetcher:
 * 1. CoinGecko/Binance for Crypto
 * 2. Yahoo Finance (with candidate fallback) for Stocks & ETFs
 */
async function fetchAssetWithCascadingFallback(symbol: string, customTicker: string, type: string, currency: string = 'USD') {
  const cleanSym = symbol.toUpperCase().trim();
  const cleanCustom = customTicker.toUpperCase().trim();
  const searchSym = cleanCustom || cleanSym;
  const assetType = type.toLowerCase();

  // Crypto
  if (assetType.includes('crypto') || assetType.includes('cripto') || CG_MAP[searchSym] || CG_MAP[cleanSym]) {
    const cryptoData = await fetchCryptoDedicated(searchSym, currency);
    if (cryptoData) {
      return cryptoData;
    }
  }

  // Stocks & ETFs via Yahoo Finance + Stooq
  const candidates = getServerTickerCandidates(symbol, customTicker, type);
  for (const cand of candidates) {
    const yahooData = await fetchYahooTickerServer(cand);
    if (yahooData) {
      return yahooData;
    }
  }

  return null;
}

function isManualAssetServer(a: any): boolean {
  const type = String(a.type || '').toLowerCase();
  const symbol = String(a.symbol || '').toLowerCase();
  const name = String(a.name || '').toLowerCase();

  if (type.includes('cash') || type.includes('numerar') || type.includes('disponibil')) return true;
  if (type.includes('deposit') || type.includes('depozit')) return true;
  if (type.includes('real_estate') || type.includes('imobiliare') || type.includes('imobil')) return true;
  if ((type.includes('bond') || type.includes('obligați') || type.includes('titluri')) && !a.customTicker) return true;
  
  if (name.includes('dobanda') || name.includes('dobandă') || symbol.includes('dobanda')) return true;
  if (name.includes('titluri de stat') || name.includes('fidelis') || name.includes('tezaur')) return true;

  return false;
}

// Single ticker endpoint for instant client queries or single asset refresh
app.get("/api/price-single", async (req, res) => {
  const ticker = String(req.query.ticker || '').trim();
  const custom = String(req.query.custom || '').trim();
  const type = String(req.query.type || '').trim();
  if (!ticker && !custom) return res.status(400).json({ error: "Ticker lipsă." });

  const data = await fetchAssetWithCascadingFallback(ticker, custom, type);
  if (data) return res.json(data);

  return res.status(404).json({ error: "Prețul nu a fost găsit la niciun furnizor." });
});

// Cache for historical daily data (1 hour TTL)
const benchmarkHistoryCache = new Map<string, { data: { date: string; close: number }[]; currency: string; timestamp: number }>();

async function fetchYahooHistoryWithMeta(
  ticker: string,
  range: string = '5y',
  forceRefresh: boolean = false
): Promise<{ data: { date: string; close: number }[]; currency: string } | null> {
  const cacheKey = `${ticker.toUpperCase()}_${range}`;
  if (!forceRefresh) {
    const cached = benchmarkHistoryCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < 3600 * 1000) {
      return { data: cached.data, currency: cached.currency };
    }
  }

  const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
  const yahooServers = [
    'https://query1.finance.yahoo.com',
    'https://query2.finance.yahoo.com'
  ];

  for (const server of yahooServers) {
    try {
      const url = `${server}/v8/finance/chart/${encodeURIComponent(ticker)}?range=${encodeURIComponent(range)}&interval=1d`;
      const response = await fetch(url, {
        headers: { 'User-Agent': USER_AGENT, 'Accept': 'application/json' },
        signal: AbortSignal.timeout(7000)
      });
      if (!response.ok) continue;

      const json = await response.json();
      const result = json?.chart?.result?.[0];
      if (!result) continue;

      const rawCurr: string = String(result.meta?.currency || '').trim();
      const isPence = rawCurr === 'GBp' || rawCurr === 'GBX';
      const currency = isPence ? 'GBP' : rawCurr.toUpperCase();
      const divisor = isPence ? 100 : 1;

      const timestamps: number[] = result.timestamp || [];
      const closes: (number | null)[] = result.indicators?.quote?.[0]?.close || [];

      const byDate = new Map<string, number>();
      let lastValidClose = 0;

      for (let i = 0; i < timestamps.length; i++) {
        const ts = timestamps[i];
        const close = closes[i];
        if (close !== null && typeof close === 'number' && close > 0) {
          lastValidClose = close / divisor;
        }
        if (lastValidClose > 0) {
          const dateStr = new Date(ts * 1000).toISOString().split('T')[0];
          byDate.set(dateStr, lastValidClose);
        }
      }

      const points = Array.from(byDate.entries())
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([date, close]) => ({ date, close }));

      if (points.length > 0) {
        benchmarkHistoryCache.set(cacheKey, { data: points, currency, timestamp: Date.now() });
        return { data: points, currency };
      }
    } catch (e) {
      continue;
    }
  }

  return null;
}

async function fetchYahooHistoryServer(
  ticker: string,
  range: string = '5y',
  forceRefresh: boolean = false
): Promise<{ date: string; close: number }[] | null> {
  const res = await fetchYahooHistoryWithMeta(ticker, range, forceRefresh);
  return res ? res.data : null;
}

app.get("/api/benchmark-history", async (req, res) => {
  try {
    const symbol = String(req.query.symbol || '^GSPC').trim();
    const range = String(req.query.range || '5y').trim();
    const forceRefresh = req.query.refresh === '1' || req.query.refresh === 'true';

    let points = await fetchYahooHistoryServer(symbol, range, forceRefresh);
    if (!points && range !== '5y') {
      points = await fetchYahooHistoryServer(symbol, '5y', forceRefresh);
    }

    if (points && points.length > 0) {
      return res.json({ success: true, symbol, data: points });
    }

    return res.status(404).json({ success: false, error: `Nu s-au găsit date istorice pentru simbolul ${symbol}` });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error?.message || "Eroare la obținerea datelor de benchmark." });
  }
});

// Batch Historical Daily Prices endpoint for real Mark-to-Market portfolio valuation
app.post("/api/history-batch", async (req, res) => {
  try {
    const { assets, range = '5y', refresh = false } = req.body || {};
    if (!Array.isArray(assets)) {
      return res.status(400).json({ success: false, error: "Lista de active este invalidă." });
    }

    const forceRefresh = Boolean(refresh);
    const validRange = ['1y', '2y', '5y', '10y', 'max'].includes(String(range)) ? String(range) : '5y';

    // Deduplicate non-manual assets by uppercase symbol + currency
    const uniqueAssets = new Map<string, any>();
    assets.forEach((a: any) => {
      if (!a || isManualAssetServer(a)) return;
      const sym = String(a.symbol || '').toUpperCase().trim();
      if (!sym) return;
      if (!uniqueAssets.has(sym)) {
        uniqueAssets.set(sym, a);
      }
    });

    const prices: Record<string, { d: string; c: number }[]> = {};
    const priceCurrencies: Record<string, string> = {};

    // Helper with concurrency limit (6 parallel requests)
    const tasks = Array.from(uniqueAssets.entries());
    const CONCURRENCY = 6;
    let idx = 0;

    async function worker() {
      while (idx < tasks.length) {
        const current = tasks[idx++];
        const [sym, asset] = current;
        const expectedCurr = String(asset.currency || '').toUpperCase().trim();
        const expectedPrice = Number(asset.currentPrice) || 0;

        // Prioritize exchange suffix matching the asset's currency (e.g. RON -> .RO first so M -> M.RO, not Macy's USD!)
        const rawCandidates = getServerTickerCandidates(
          String(asset.symbol || ''),
          String(asset.customTicker || ''),
          String(asset.type || '')
        );
        const candidates = [...rawCandidates].sort((a, b) => {
          const score = (t: string) => {
            if (expectedCurr === 'RON' && t.endsWith('.RO')) return 0;
            if (expectedCurr === 'EUR' && (t.endsWith('.DE') || t.endsWith('.PA') || t.endsWith('.AS') || t.endsWith('-EUR'))) return 0;
            if (expectedCurr === 'USD' && (!t.includes('.') || t.endsWith('-USD'))) return 0;
            return 1;
          };
          return score(a) - score(b);
        });

        let bestMatch: { data: { date: string; close: number }[]; currency: string } | null = null;

        for (const cand of candidates) {
          let result = await fetchYahooHistoryWithMeta(cand, validRange, forceRefresh);
          if (!result && validRange !== '5y') {
            result = await fetchYahooHistoryWithMeta(cand, '5y', forceRefresh);
          }
          if (!result || result.data.length === 0) continue;

          const lastClose = result.data[result.data.length - 1].close;
          const currMatches = !expectedCurr || result.currency === expectedCurr;
          const priceCloseEnough = expectedPrice <= 0 || Math.abs(lastClose - expectedPrice) / expectedPrice <= 0.15;

          if (currMatches && priceCloseEnough) {
            bestMatch = result;
            break;
          }
          if (!bestMatch && currMatches) {
            bestMatch = result;
          }
          if (!bestMatch) {
            bestMatch = result;
          }
        }

        if (bestMatch) {
          prices[sym] = bestMatch.data.map(p => ({ d: p.date, c: p.close }));
          priceCurrencies[sym] = bestMatch.currency;
        }
      }
    }

    const workers = Array.from({ length: Math.min(CONCURRENCY, Math.max(1, tasks.length)) }, () => worker());
    const fxPromise = Promise.all([
      fetchYahooHistoryServer('EURRON=X', validRange, forceRefresh),
      fetchYahooHistoryServer('USDRON=X', validRange, forceRefresh)
    ]);

    const [, [eurRonPts, usdRonPts]] = await Promise.all([
      Promise.all(workers),
      fxPromise
    ]);

    return res.json({
      success: true,
      prices,
      priceCurrencies,
      fx: {
        EURRON: (eurRonPts || []).map(p => ({ d: p.date, c: p.close })),
        USDRON: (usdRonPts || []).map(p => ({ d: p.date, c: p.close }))
      }
    });
  } catch (error: any) {
    console.error("History Batch Error:", error);
    return res.status(500).json({ success: false, error: error?.message || "Eroare la obținerea istoricului de prețuri." });
  }
});

// Asset Prices endpoint
app.post("/api/prices", async (req, res) => {
  try {
    const { assets } = req.body;
    if (!Array.isArray(assets)) {
      return res.status(400).json({ error: "Lista de active este invalidă." });
    }

    const results: Record<string, { price: number, previousClose: number, success: boolean }> = {};

    // 1. Separate manual and fetchable assets
    const fetchableAssets: any[] = [];
    assets.forEach((a: any) => {
      if (isManualAssetServer(a)) {
        results[a.id] = {
          price: Number(a.currentPrice) || 0,
          previousClose: Number(a.previousClose || a.currentPrice) || 0,
          success: true
        };
      } else {
        fetchableAssets.push(a);
      }
    });

    if (fetchableAssets.length === 0) {
      return res.json(results);
    }

    // 2. Fetch CoinGecko crypto batch first
    let cryptoBatch: any = null;
    try {
      const cgRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,ripple,polkadot,dogecoin,avalanche-2,chainlink,near,sui,aptos,litecoin,shiba-inu,pepe,polygon-ecosystem-token,cosmos,stellar,uniswap,tron,binancecoin,algorand,hedera-hashgraph&vs_currencies=usd,eur,ron&include_24hr_change=true', {
        headers: { 'Accept': 'application/json' },
        signal: AbortSignal.timeout(3500)
      });
      if (cgRes.ok) {
        cryptoBatch = await cgRes.json();
      }
    } catch (e) {}

    // 3. Process fetchable assets using cascading fallback logic
    for (const asset of fetchableAssets) {
      const symbol = String(asset.symbol || '').toUpperCase().trim();
      const currency = String(asset.currency || 'USD').toLowerCase();
      const customTicker = String(asset.customTicker || '').toUpperCase().trim();
      const type = String(asset.type || '').toLowerCase();
      const searchSym = customTicker || symbol;

      // Check batch CoinGecko first
      const cgId = CG_MAP[searchSym] || CG_MAP[symbol];
      if (cryptoBatch && cgId && cryptoBatch[cgId] && cryptoBatch[cgId][currency]) {
        const price = cryptoBatch[cgId][currency];
        const change = cryptoBatch[cgId][`${currency}_24h_change`] || 0;
        results[asset.id] = {
          price: price,
          previousClose: price / (1 + (change / 100)),
          success: true
        };
        continue;
      }

      // Execute cascading fallback (Dedicated -> Finnhub/AlphaVantage/Stooq -> Yahoo Finance)
      const data = await fetchAssetWithCascadingFallback(symbol, customTicker, type, currency);
      if (data) {
        results[asset.id] = data;
      } else {
        results[asset.id] = {
          price: Number(asset.currentPrice) || 0,
          previousClose: Number(asset.previousClose || asset.currentPrice) || 0,
          success: false
        };
      }

      await new Promise(r => setTimeout(r, 60));
    }

    res.json(results);
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Eroare la procesarea prețurilor." });
  }
});

// Shared strict conciseness instruction & server-side portfolio compressor (defense-in-depth)
const CONCISE_SYSTEM_RULE =
  "Răspunde în limba Română STRICT concis, direct la obiect, fără introduceri, saluturi, concluzii sau text de umplutură. Folosește maxim 3-4 puncte scurte per categorie și bazează-te exclusiv pe cifrele primite.";

function compressRawPortfoliosServer(raw: any, context?: string, reportingCurrency: string = 'EUR') {
  const list = Array.isArray(raw) ? raw : raw ? [raw] : [];
  const filtered =
    context && context !== 'all'
      ? list.filter((p: any) => p?.id === context)
      : list;
  const openAssets = filtered
    .flatMap((p: any) => p?.assets || [])
    .filter((a: any) => (Number(a?.quantity) || 0) >= 0.001);

  const agg = new Map<string, { sym: string; tip: string; valuta: string; val: number; cost: number }>();
  let totalVal = 0;
  let totalCost = 0;

  for (const a of openAssets) {
    const qty = Number(a.quantity) || 0;
    const val = qty * (Number(a.currentPrice) || 0);
    const cost = qty * (Number(a.buyPrice) || 0);
    totalVal += val;
    totalCost += cost;
    const sym = String(a.symbol || 'N/A').toUpperCase();
    const prev = agg.get(sym);
    if (prev) {
      prev.val += val;
      prev.cost += cost;
    } else {
      agg.set(sym, { sym, tip: String(a.type || 'Altul'), valuta: String(a.currency || reportingCurrency), val, cost });
    }
  }

  const denom = totalVal > 0 ? totalVal : 1;
  const pozitii = Array.from(agg.values())
    .sort((a, b) => b.val - a.val)
    .map((x) => ({
      sym: x.sym,
      tip: x.tip,
      valuta: x.valuta,
      pondere: Math.round((x.val / denom) * 1000) / 10,
      profit: x.cost > 0 ? Math.round(((x.val - x.cost) / x.cost) * 1000) / 10 : 0,
    }));

  return {
    moneda: reportingCurrency,
    valoareTotala: Math.round(totalVal),
    profitTotalPct: totalCost > 0 ? Math.round(((totalVal - totalCost) / totalCost) * 1000) / 10 : 0,
    pozitii,
  };
}

// 1. Portfolio Analysis endpoint (optimized: gemini-2.5-flash, maxOutputTokens: 800, compact JSON)
app.post("/api/gemini/analyze", async (req, res) => {
  try {
    const { compactPortfolio, portfolios, context } = req.body;
    const compactData = compactPortfolio || (portfolios ? compressRawPortfoliosServer(portfolios, context) : null);

    if (!compactData) {
      return res.status(400).json({ error: "Datele portofoliilor lipsesc." });
    }

    const referer = (req.headers.referer || req.headers.origin) as string | undefined;
    const client = getAiClient(referer);
    const prompt = `Date portofoliu:${JSON.stringify(compactData)}\nFormat Markdown:\n### Scor: X/10\n### Riscuri (max 3)\n### Rebalansare (max 3)`;

    const response = await generateContentWithRetry(client, {
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `Analist financiar de portofoliu. ${CONCISE_SYSTEM_RULE}`,
        maxOutputTokens: 800,
        temperature: 0.4,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Analysis Endpoint Error:", error);
    res.status(500).json({ error: error.message || "Eroare la generarea analizei." });
  }
});

// 2. Chat Financial Assistant endpoint (optimized: gemini-2.5-flash, maxOutputTokens: 800, compact JSON)
app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { question, compactPortfolio, currentContextData, expertInstruction } = req.body;
    if (!question) {
      return res.status(400).json({ error: "Întrebarea lipsește." });
    }

    const compactData =
      compactPortfolio ||
      (currentContextData ? compressRawPortfoliosServer(currentContextData) : {});

    const referer = (req.headers.referer || req.headers.origin) as string | undefined;
    const client = getAiClient(referer);

    const systemInstruction = `${expertInstruction || "Asistent financiar profesionist specializat în piețe bursiere."}\n${CONCISE_SYSTEM_RULE}`;
    const prompt = `Portofoliu:${JSON.stringify(compactData)}\nÎntrebare:${question}`;

    const response = await generateContentWithRetry(client, {
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        maxOutputTokens: 800,
        temperature: 0.4,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Chat Endpoint Error:", error);
    res.status(500).json({ error: error.message || "Eroare la generarea răspunsului." });
  }
});

// 3. Multi-Agent Comprehensive Portfolio Report endpoint (optimized: gemini-2.5-flash, maxOutputTokens: 800, compact JSON)
app.post("/api/gemini/generate-full-report", async (req, res) => {
  try {
    const { compactPortfolio, portfolios, context, reportingCurrency } = req.body;
    const compactData =
      compactPortfolio ||
      (portfolios ? compressRawPortfoliosServer(portfolios, context, reportingCurrency || 'EUR') : null);

    if (!compactData) {
      return res.status(400).json({ error: "Datele portofoliilor lipsesc pentru raport." });
    }

    const referer = (req.headers.referer || req.headers.origin) as string | undefined;
    const client = getAiClient(referer);

    const systemInstruction = `Comitet de 6 experți financiari (Elena-ETF, Victor-Growth, Andrei-Defensiv, Diana-Macro/FX, Warren-Value, Adrian-Fiscal/BNR RO). ${CONCISE_SYSTEM_RULE}`;

    const prompt = `Portofoliu:${JSON.stringify(compactData)}
Generează raportul Markdown exact în structura:
## Scor Sănătate: XX/100
### Puncte de vedere Comitet (câte 1 bullet scurt per expert: Elena, Victor, Andrei, Diana, Warren, Adrian)
### Riscuri Principale (max 3 puncte scurte)
### Acțiuni Rebalansare (max 3-4 puncte concrete cu simboluri)`;

    const response = await generateContentWithRetry(client, {
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        maxOutputTokens: 800,
        temperature: 0.4,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Full Report Endpoint Error:", error);
    res.status(500).json({ error: error.message || "Eroare la generarea raportului complex." });
  }
});

// --- VITE MIDDLEWARE SETUP ---
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    try {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } catch (e: any) {
      console.warn("Could not start Vite dev server middleware:", e);
    }
  } else if (!process.env.VERCEL) {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  if (!process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}

startServer();

export default app;
