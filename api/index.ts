import express from "express";
import { GoogleGenAI } from "@google/genai";

const app = express();

// Parse JSON and urlencoded bodies with increased limits for larger portfolios/transaction lists
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Health check endpoint (instant check for Vercel serverless status)
app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    runtime: process.env.VERCEL ? "vercel" : "local",
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY || process.env.API_KEY),
    timestamp: new Date().toISOString()
  });
});

// Helper to check and get the AI client
function getAiClient(referer?: string) {
  const freshKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!freshKey) {
    throw new Error("Serviciul AI nu este configurat. Cheia GEMINI_API_KEY lipsește în setări.");
  }

  const headers: Record<string, string> = {
    "User-Agent": "aistudio-build",
  };

  if (referer) {
    headers["Referer"] = referer;
    try {
      const url = new URL(referer);
      headers["Origin"] = url.origin;
    } catch (_e) {}
  }

  return new GoogleGenAI({
    apiKey: freshKey,
    httpOptions: {
      headers
    }
  });
}

// Helper to call Gemini with per-attempt timeout, exponential backoff, and automatic model fallback (503/429/404/timeout)
const DEFAULT_GEMINI_MODEL = "gemini-flash-lite-latest";

async function generateContentWithRetry(client: any, params: any, maxRetries = 1, initialDelay = 800) {
  const originalModel = params.model || DEFAULT_GEMINI_MODEL;
  const modelsToTry = [originalModel, "gemini-flash-lite-latest", "gemini-3.5-flash-lite", "gemini-3.1-flash-lite", "gemini-flash-latest"];
  const uniqueModels = Array.from(new Set(modelsToTry));

  for (let m = 0; m < uniqueModels.length; m++) {
    const modelCandidate = uniqueModels[m];
    let attempt = 0;
    while (attempt <= maxRetries) {
      try {
        const baseConfig = { ...(params.config || {}) };
        delete baseConfig.tools;
        delete baseConfig.thinkingConfig;

        const timeoutMs = 20000;
        return await Promise.race([
          client.models.generateContent({
            ...params,
            model: modelCandidate,
            config: baseConfig
          }),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error(`TIMEOUT_${timeoutMs}ms`)), timeoutMs)
          )
        ]);
      } catch (error: any) {
        attempt++;
        const errorMessage = String(error?.message || "");
        const errorStatus = String(error?.status || "");
        const errorCode = error?.code || error?.status_code || 0;

        const isNotFoundOrTimeout =
          errorMessage.includes("404") ||
          errorMessage.includes("NOT_FOUND") ||
          errorStatus.includes("NOT_FOUND") ||
          errorCode === 404 ||
          errorMessage.includes("TIMEOUT_") ||
          errorMessage.includes("fetch failed");

        // If model is unavailable/deprecated or hung, immediately try the next fallback model
        if (isNotFoundOrTimeout && m < uniqueModels.length - 1) {
          break;
        }

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
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          } else if (m < uniqueModels.length - 1) {
            break;
          }
        }
        throw error;
      }
    }
  }
}

// --- TICKER & CACHE CONFIGURATION ---
const SERVER_TICKER_MAP: Record<string, string> = {
  "ETH": "ETH-USD",
  "BTC": "BTC-USD",
  "GOLD": "EGLN.L",
  "SXR8": "SXR8.DE",
  "EUNL": "EUNL.DE",
  "IS3N": "IS3N.DE",
  "IUSN": "IUSN.DE",
  "DFEN": "DFEN.DE",
  "EUDF": "EUDF.DE",
  "LYP6": "LYP6.DE",
  "IS0E": "IS0E.DE",
  "VWCE": "VWCE.DE",
  "VUAA": "VUAA.L",
  "TVBETETF": "TVBETETF.RO",
  "TEL": "TEL.RO",
  "SNP": "SNP.RO",
  "TLV": "TLV.RO",
  "SNG": "SNG.RO",
  "H2O": "H2O.RO",
  "DIGI": "DIGI.RO",
  "BRD": "BRD.RO",
  "TGN": "TGN.RO",
  "FP": "FP.RO",
  "M": "M.RO",
  "WINE": "WINE.RO",
  "AQ": "AQ.RO",
  "TTS": "TTS.RO",
  "IB01": "IB01.L",
  "IBTA": "IBTA.L",
  "FLOA": "FLOA.L",
  "BB3M": "BB3M.L",
  "C3M": "C3M.PA",
  "EGLN": "EGLN.L"
};

const CG_MAP: Record<string, string> = {
  "BTC": "bitcoin",
  "ETH": "ethereum",
  "SOL": "solana",
  "ADA": "cardano",
  "XRP": "ripple",
  "DOT": "polkadot",
  "DOGE": "dogecoin",
  "AVAX": "avalanche-2",
  "LINK": "chainlink",
  "NEAR": "near",
  "SUI": "sui",
  "APT": "aptos",
  "LTC": "litecoin",
  "MATIC": "polygon-ecosystem-token",
  "POL": "polygon-ecosystem-token",
  "SHIB": "shiba-inu",
  "PEPE": "pepe",
  "RENDER": "render-token",
  "FET": "fetch-ai",
  "ICP": "internet-computer",
  "ATOM": "cosmos",
  "XLM": "stellar",
  "UNI": "uniswap",
  "TRX": "tron",
  "BNB": "binancecoin",
  "ALGO": "algorand",
  "HBAR": "hedera-hashgraph"
};

const YAHOO_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  "Accept": "application/json,text/plain,*/*",
  "Accept-Language": "en-US,en;q=0.9"
};

// In-memory cache for ticker prices (90 seconds TTL)
const priceCache = new Map<string, { price: number; previousClose: number; timestamp: number }>();
const CACHE_TTL = 90 * 1000;

// Cache for historical daily data (1 hour TTL)
const benchmarkHistoryCache = new Map<string, { data: { date: string; close: number }[]; currency: string; timestamp: number }>();

async function fetchCryptoDedicated(symbol: string, currency: string = "usd") {
  const cleanSym = symbol.toUpperCase().trim();
  const baseCrypto = cleanSym.replace(/[-_/.](USD|EUR|RON|USDT)$/i, "");
  const cgId = CG_MAP[cleanSym] || CG_MAP[baseCrypto];

  if (cgId) {
    try {
      const cgRes = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${cgId}&vs_currencies=usd,eur,ron&include_24hr_change=true`,
        { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(3500) }
      );
      if (cgRes.ok) {
        const data = await cgRes.json();
        const cur = currency.toLowerCase();
        if (data[cgId] && data[cgId][cur]) {
          const price = data[cgId][cur];
          const change = data[cgId][`${cur}_24h_change`] || 0;
          return {
            price,
            previousClose: price / (1 + change / 100),
            success: true
          };
        }
      }
    } catch (_e) {}
  }

  try {
    const pair = `${baseCrypto}USDT`;
    const bRes = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${pair}`, {
      headers: { Accept: "application/json" },
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
  } catch (_e) {}

  return null;
}

function getServerTickerCandidates(symbol: string, customTicker?: string, type?: string): string[] {
  const candidates: string[] = [];
  const rawSym = String(symbol || "").trim().toUpperCase();
  const rawCustom = String(customTicker || "").trim().toUpperCase();
  const assetType = String(type || "").toLowerCase();

  const inputs = [rawCustom, rawSym].filter(Boolean);

  for (const item of inputs) {
    if (SERVER_TICKER_MAP[item]) {
      candidates.push(SERVER_TICKER_MAP[item]);
    }
    candidates.push(item);

    const baseWithoutDot = item.replace(/\.(US|UK|DE|RO|L|PA|AS|LS|MI|MC)$/i, "");
    if (baseWithoutDot !== item) {
      if (SERVER_TICKER_MAP[baseWithoutDot]) {
        candidates.push(SERVER_TICKER_MAP[baseWithoutDot]);
      }
      candidates.push(baseWithoutDot);
      if (item.endsWith(".UK")) {
        candidates.push(`${baseWithoutDot}.L`);
      }
    }

    const base = item.replace(/\.[A-Z0-9]{1,4}$/, "");
    if (SERVER_TICKER_MAP[base]) {
      candidates.push(SERVER_TICKER_MAP[base]);
    }

    if (assetType.includes("crypto") || assetType.includes("cripto") || CG_MAP[item] || CG_MAP[base]) {
      const baseCrypto = base.replace(/[-_/.](USD|EUR|RON|USDT)$/, "");
      candidates.push(`${baseCrypto}-USD`);
      candidates.push(`${baseCrypto}-EUR`);
      candidates.push(baseCrypto);
    }

    if (!item.includes(".") && !item.includes("-")) {
      candidates.push(`${base}.DE`);
      candidates.push(`${base}.RO`);
      candidates.push(`${base}.L`);
    }
  }

  return [...new Set(candidates)].slice(0, 4);
}

/**
 * Yahoo Finance v8 Chart (reliable on Vercel & serverless IPs!) + Stooq Fallback
 */
async function fetchYahooTickerServer(ticker: string) {
  const cached = priceCache.get(ticker);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return { price: cached.price, previousClose: cached.previousClose, success: true };
  }

  // 1. Yahoo Finance v8 Chart API (most reliable on Vercel cloud IPs — v7 quote often returns 401 from datacenter IPs)
  const yahooServers = [
    "https://query1.finance.yahoo.com",
    "https://query2.finance.yahoo.com"
  ];

  for (const server of yahooServers) {
    try {
      const url = `${server}/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=5d`;
      const res = await fetch(url, {
        headers: YAHOO_HEADERS,
        signal: AbortSignal.timeout(4000)
      });
      if (!res.ok) continue;

      const json = await res.json();
      const result = json.chart?.result?.[0];
      if (result) {
        const meta = result.meta || {};
        const rawCurr = String(meta.currency || "");
        const divisor = rawCurr === "GBp" || rawCurr === "GBX" ? 100 : 1;

        let price = meta.regularMarketPrice;
        if (!price || typeof price !== "number") {
          const closePrices = result.indicators?.quote?.[0]?.close;
          if (Array.isArray(closePrices)) {
            for (let i = closePrices.length - 1; i >= 0; i--) {
              if (closePrices[i] !== null && typeof closePrices[i] === "number") {
                price = closePrices[i];
                break;
              }
            }
          }
        }

        const prevClose = meta.chartPreviousClose || meta.previousClose || price;

        if (price && typeof price === "number" && price > 0) {
          const finalPrice = price / divisor;
          const finalPrev = (prevClose || price) / divisor;
          const data = { price: finalPrice, previousClose: finalPrev, success: true };
          priceCache.set(ticker, { price: finalPrice, previousClose: finalPrev, timestamp: Date.now() });
          return data;
        }
      }
    } catch (_e) {
      continue;
    }
  }

  // 2. Stooq Free Public API Fallback
  try {
    const stooqTicker = ticker.toLowerCase();
    const stooqRes = await fetch(
      `https://stooq.com/q/l/?s=${encodeURIComponent(stooqTicker)}&f=sdogl1&e=json`,
      { signal: AbortSignal.timeout(3500) }
    );
    if (stooqRes.ok) {
      const stooqData = await stooqRes.json();
      const item = stooqData.symbols?.[0];
      if (item && item.close && typeof item.close === "number" && item.close > 0) {
        const data = {
          price: item.close,
          previousClose: item.open || item.close,
          success: true
        };
        priceCache.set(ticker, { price: data.price, previousClose: data.previousClose, timestamp: Date.now() });
        return data;
      }
    }
  } catch (_e) {}

  return null;
}

async function fetchAssetWithCascadingFallback(symbol: string, customTicker: string, type: string, currency: string = "USD") {
  const cleanSym = symbol.toUpperCase().trim();
  const cleanCustom = customTicker.toUpperCase().trim();
  const searchSym = cleanCustom || cleanSym;
  const assetType = type.toLowerCase();

  if (assetType.includes("crypto") || assetType.includes("cripto") || CG_MAP[searchSym] || CG_MAP[cleanSym]) {
    const cryptoData = await fetchCryptoDedicated(searchSym, currency);
    if (cryptoData) {
      return cryptoData;
    }
  }

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
  const type = String(a.type || "").toLowerCase();
  const symbol = String(a.symbol || "").toLowerCase();
  const name = String(a.name || "").toLowerCase();

  if (type.includes("cash") || type.includes("numerar") || type.includes("disponibil")) return true;
  if (type.includes("deposit") || type.includes("depozit")) return true;
  if (type.includes("real_estate") || type.includes("imobiliare") || type.includes("imobil")) return true;
  if ((type.includes("bond") || type.includes("obligați") || type.includes("titluri")) && !a.customTicker) return true;

  if (name.includes("dobanda") || name.includes("dobandă") || symbol.includes("dobanda")) return true;
  if (name.includes("titluri de stat") || name.includes("fidelis") || name.includes("tezaur")) return true;

  return false;
}

async function fetchYahooHistoryWithMeta(
  ticker: string,
  range: string = "5y",
  forceRefresh: boolean = false
): Promise<{ data: { date: string; close: number }[]; currency: string } | null> {
  const cacheKey = `${ticker.toUpperCase()}_${range}`;
  if (!forceRefresh) {
    const cached = benchmarkHistoryCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < 3600 * 1000) {
      return { data: cached.data, currency: cached.currency };
    }
  }

  const yahooServers = [
    "https://query1.finance.yahoo.com",
    "https://query2.finance.yahoo.com"
  ];

  for (const server of yahooServers) {
    try {
      const url = `${server}/v8/finance/chart/${encodeURIComponent(ticker)}?range=${encodeURIComponent(range)}&interval=1d`;
      const response = await fetch(url, {
        headers: YAHOO_HEADERS,
        signal: AbortSignal.timeout(7000)
      });
      if (!response.ok) continue;

      const json = await response.json();
      const result = json?.chart?.result?.[0];
      if (!result) continue;

      const rawCurr: string = String(result.meta?.currency || "").trim();
      const isPence = rawCurr === "GBp" || rawCurr === "GBX";
      const currency = isPence ? "GBP" : rawCurr.toUpperCase();
      const divisor = isPence ? 100 : 1;

      const timestamps: number[] = result.timestamp || [];
      const closes: (number | null)[] = result.indicators?.quote?.[0]?.close || [];

      const byDate = new Map<string, number>();
      let lastValidClose = 0;

      for (let i = 0; i < timestamps.length; i++) {
        const ts = timestamps[i];
        const close = closes[i];
        if (close !== null && typeof close === "number" && close > 0) {
          lastValidClose = close / divisor;
        }
        if (lastValidClose > 0) {
          const dateStr = new Date(ts * 1000).toISOString().split("T")[0];
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
    } catch (_e) {
      continue;
    }
  }

  return null;
}

async function fetchYahooHistoryServer(
  ticker: string,
  range: string = "5y",
  forceRefresh: boolean = false
): Promise<{ date: string; close: number }[] | null> {
  const res = await fetchYahooHistoryWithMeta(ticker, range, forceRefresh);
  return res ? res.data : null;
}

// --- API ENDPOINTS ---

// Exchange Rates endpoint (Yahoo Finance + Frankfurter ECB server-side fallback)
app.get("/api/exchange-rates", async (_req, res) => {
  try {
    const tickers = ["EURRON=X", "USDRON=X", "EURUSD=X"];
    const results = await Promise.allSettled(
      tickers.map(t => fetchYahooTickerServer(t))
    );

    const eurData = results[0].status === "fulfilled" ? results[0].value : null;
    const usdData = results[1].status === "fulfilled" ? results[1].value : null;
    const eurUsdData = results[2].status === "fulfilled" ? results[2].value : null;

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

    // Fallback: Frankfurter (ECB official rates) directly from server
    try {
      const fRes = await fetch("https://api.frankfurter.app/latest?from=EUR&to=RON,USD", {
        signal: AbortSignal.timeout(4500)
      });
      if (fRes.ok) {
        const fJson = await fRes.json();
        const eurRon = fJson?.rates?.RON;
        const eurUsd = fJson?.rates?.USD;
        if (eurRon && eurUsd) {
          const usdRon = eurRon / eurUsd;
          return res.json({
            eur: { price: eurRon, previousClose: eurRon, success: true },
            usd: { price: usdRon, previousClose: usdRon, success: true },
            eurUsd: { price: eurUsd, previousClose: eurUsd, success: true }
          });
        }
      }
    } catch (_e) {}

    res.status(500).json({ error: "Nu s-au putut prelua cursurile valutare." });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Eroare la preluarea cursurilor." });
  }
});

app.get("/api/price-single", async (req, res) => {
  const ticker = String(req.query.ticker || "").trim();
  const custom = String(req.query.custom || "").trim();
  const type = String(req.query.type || "").trim();
  if (!ticker && !custom) return res.status(400).json({ error: "Ticker lipsă." });

  const data = await fetchAssetWithCascadingFallback(ticker, custom, type);
  if (data) return res.json(data);

  return res.status(404).json({ error: "Prețul nu a fost găsit la niciun furnizor." });
});

app.get("/api/benchmark-history", async (req, res) => {
  try {
    const symbol = String(req.query.symbol || "^GSPC").trim();
    const range = String(req.query.range || "5y").trim();
    const forceRefresh = req.query.refresh === "1" || req.query.refresh === "true";

    let points = await fetchYahooHistoryServer(symbol, range, forceRefresh);
    if (!points && range !== "5y") {
      points = await fetchYahooHistoryServer(symbol, "5y", forceRefresh);
    }

    if (points && points.length > 0) {
      return res.json({ success: true, symbol, data: points });
    }

    return res.status(404).json({ success: false, error: `Nu s-au găsit date istorice pentru simbolul ${symbol}` });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error?.message || "Eroare la obținerea datelor de benchmark." });
  }
});

// Batch Historical Daily Prices endpoint (high concurrency for fast serverless completion)
app.post("/api/history-batch", async (req, res) => {
  try {
    const { assets, range = "5y", refresh = false } = req.body || {};
    if (!Array.isArray(assets)) {
      return res.status(400).json({ success: false, error: "Lista de active este invalidă." });
    }

    const forceRefresh = Boolean(refresh);
    const validRange = ["1y", "2y", "5y", "10y", "max"].includes(String(range)) ? String(range) : "5y";

    const uniqueAssets = new Map<string, any>();
    assets.forEach((a: any) => {
      if (!a || isManualAssetServer(a)) return;
      const sym = String(a.symbol || "").toUpperCase().trim();
      if (!sym) return;
      if (!uniqueAssets.has(sym)) {
        uniqueAssets.set(sym, a);
      }
    });

    const prices: Record<string, { d: string; c: number }[]> = {};
    const priceCurrencies: Record<string, string> = {};

    const tasks = Array.from(uniqueAssets.entries());
    const CONCURRENCY = 12;
    let idx = 0;

    async function worker() {
      while (idx < tasks.length) {
        const current = tasks[idx++];
        const [sym, asset] = current;
        const expectedCurr = String(asset.currency || "").toUpperCase().trim();
        const expectedPrice = Number(asset.currentPrice) || 0;

        const rawCandidates = getServerTickerCandidates(
          String(asset.symbol || ""),
          String(asset.customTicker || ""),
          String(asset.type || "")
        );
        const candidates = [...rawCandidates].sort((a, b) => {
          const score = (t: string) => {
            if (expectedCurr === "RON" && t.endsWith(".RO")) return 0;
            if (expectedCurr === "EUR" && (t.endsWith(".DE") || t.endsWith(".PA") || t.endsWith(".AS") || t.endsWith("-EUR"))) return 0;
            if (expectedCurr === "USD" && (!t.includes(".") || t.endsWith("-USD"))) return 0;
            return 1;
          };
          return score(a) - score(b);
        });

        let bestMatch: { data: { date: string; close: number }[]; currency: string } | null = null;

        for (const cand of candidates) {
          let result = await fetchYahooHistoryWithMeta(cand, validRange, forceRefresh);
          if (!result && validRange !== "5y") {
            result = await fetchYahooHistoryWithMeta(cand, "5y", forceRefresh);
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
      fetchYahooHistoryServer("EURRON=X", validRange, forceRefresh),
      fetchYahooHistoryServer("USDRON=X", validRange, forceRefresh)
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

// Asset Prices endpoint (PARALLEL + deduplicated + skips closed assets -> finishes in ~2s on Vercel!)
app.post("/api/prices", async (req, res) => {
  try {
    const { assets } = req.body;
    if (!Array.isArray(assets)) {
      return res.status(400).json({ error: "Lista de active este invalidă." });
    }

    const results: Record<string, { price: number; previousClose: number; success: boolean }> = {};

    // 1. Separate manual / closed vs open fetchable assets
    const fetchableAssets: any[] = [];
    assets.forEach((a: any) => {
      const qty = Number(a.quantity);
      const isClosed = typeof a.quantity === "number" && qty < 0.0001;
      if (isManualAssetServer(a) || isClosed) {
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
      const cgRes = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,ripple,polkadot,dogecoin,avalanche-2,chainlink,near,sui,aptos,litecoin,shiba-inu,pepe,polygon-ecosystem-token,cosmos,stellar,uniswap,tron,binancecoin,algorand,hedera-hashgraph&vs_currencies=usd,eur,ron&include_24hr_change=true",
        { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(3500) }
      );
      if (cgRes.ok) {
        cryptoBatch = await cgRes.json();
      }
    } catch (_e) {}

    // 3. Deduplicate fetchable symbols across portfolios & fetch concurrently (12 parallel workers)
    const symbolGroups = new Map<string, any[]>();
    for (const asset of fetchableAssets) {
      const symbol = String(asset.symbol || "").toUpperCase().trim();
      const currency = String(asset.currency || "USD").toLowerCase();
      const customTicker = String(asset.customTicker || "").toUpperCase().trim();
      const searchSym = customTicker || symbol;

      const cgId = CG_MAP[searchSym] || CG_MAP[symbol];
      if (cryptoBatch && cgId && cryptoBatch[cgId] && cryptoBatch[cgId][currency]) {
        const price = cryptoBatch[cgId][currency];
        const change = cryptoBatch[cgId][`${currency}_24h_change`] || 0;
        results[asset.id] = {
          price,
          previousClose: price / (1 + change / 100),
          success: true
        };
        continue;
      }

      const groupKey = `${searchSym}::${symbol}::${currency}`;
      if (!symbolGroups.has(groupKey)) symbolGroups.set(groupKey, []);
      symbolGroups.get(groupKey)!.push(asset);
    }

    const groupList = Array.from(symbolGroups.values());
    const CONCURRENCY = 12;
    let idx = 0;

    async function priceWorker() {
      while (idx < groupList.length) {
        const group = groupList[idx++];
        const rep = group[0];
        const symbol = String(rep.symbol || "").toUpperCase().trim();
        const customTicker = String(rep.customTicker || "").toUpperCase().trim();
        const type = String(rep.type || "").toLowerCase();
        const currency = String(rep.currency || "USD").toLowerCase();

        const data = await fetchAssetWithCascadingFallback(symbol, customTicker, type, currency);
        for (const asset of group) {
          if (data) {
            results[asset.id] = data;
          } else {
            results[asset.id] = {
              price: Number(asset.currentPrice) || 0,
              previousClose: Number(asset.previousClose || asset.currentPrice) || 0,
              success: false
            };
          }
        }
      }
    }

    const workers = Array.from({ length: Math.min(CONCURRENCY, Math.max(1, groupList.length)) }, () => priceWorker());
    await Promise.all(workers);

    res.json(results);
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Eroare la procesarea prețurilor." });
  }
});

// Shared strict conciseness instruction & server-side portfolio compressor
const CONCISE_SYSTEM_RULE =
  "Răspunde în limba Română STRICT concis, direct la obiect, fără introduceri, saluturi, concluzii sau text de umplutură. Folosește maxim 3-4 puncte scurte per categorie și bazează-te exclusiv pe cifrele primite.";

function compressRawPortfoliosServer(raw: any, context?: string, reportingCurrency: string = "EUR") {
  const list = Array.isArray(raw) ? raw : raw ? [raw] : [];
  const filtered =
    context && context !== "all"
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
    const sym = String(a.symbol || "N/A").toUpperCase();
    const prev = agg.get(sym);
    if (prev) {
      prev.val += val;
      prev.cost += cost;
    } else {
      agg.set(sym, { sym, tip: String(a.type || "Altul"), valuta: String(a.currency || reportingCurrency), val, cost });
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
      model: DEFAULT_GEMINI_MODEL,
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
      model: DEFAULT_GEMINI_MODEL,
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

app.post("/api/gemini/generate-full-report", async (req, res) => {
  try {
    const { compactPortfolio, portfolios, context, reportingCurrency } = req.body;
    const compactData =
      compactPortfolio ||
      (portfolios ? compressRawPortfoliosServer(portfolios, context, reportingCurrency || "EUR") : null);

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
      model: DEFAULT_GEMINI_MODEL,
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

export default app;
