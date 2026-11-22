import { Asset, AssetType } from '../types';

// Mapări de siguranță pentru a asigura tickerele corecte în format Yahoo
const TICKER_MAP: Record<string, string> = {
  'ETH': 'ETH-USD',
  'BTC': 'BTC-USD',
  'GOLD': 'EGLN.L',
  'EGLN': 'EGLN.L',
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
  'C3M': 'C3M.PA'
};

const getClientCandidates = (symbol: string, customTicker?: string, type?: string): string[] => {
  const candidates: string[] = [];
  const rawSym = (symbol || '').trim().toUpperCase();
  const rawCustom = (customTicker || '').trim().toUpperCase();
  const assetType = (type || '').toLowerCase();

  const inputs = [rawCustom, rawSym].filter(Boolean);

  for (const item of inputs) {
    if (TICKER_MAP[item]) candidates.push(TICKER_MAP[item]);

    const baseWithoutDot = item.replace(/\.(US|UK|DE|RO|L|PA|AS|LS|MI|MC)$/i, '');
    if (baseWithoutDot !== item) {
      if (TICKER_MAP[baseWithoutDot]) candidates.push(TICKER_MAP[baseWithoutDot]);
      candidates.push(baseWithoutDot);
      if (item.endsWith('.UK')) candidates.push(`${baseWithoutDot}.L`);
    }

    candidates.push(item);

    const base = item.replace(/\.[A-Z0-9]{1,4}$/, '');
    if (TICKER_MAP[base]) candidates.push(TICKER_MAP[base]);

    if (!item.includes('.') && !item.includes('-')) {
      candidates.push(`${base}.DE`);
      candidates.push(`${base}.RO`);
      candidates.push(`${base}.L`);
    }
  }

  return [...new Set(candidates)].slice(0, 3);
};

const fetchSingleAssetClientFallback = async (asset: Asset) => {
  const candidates = getClientCandidates(asset.symbol, asset.customTicker, asset.type);
  const yahooServers = ['https://query1.finance.yahoo.com', 'https://query2.finance.yahoo.com'];
  const proxies = [
    (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
    (url: string) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}&_=${Date.now()}`
  ];

  for (const ticker of candidates) {
    for (const server of yahooServers) {
      const yahooUrl = `${server}/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=5d`;
      try {
        const res = await fetch(yahooUrl, { signal: AbortSignal.timeout(2500) });
        if (res.ok) {
          const json = await res.json();
          const result = json.chart?.result?.[0];
          if (result && result.meta?.regularMarketPrice) {
            return {
              price: result.meta.regularMarketPrice,
              previousClose: result.meta.chartPreviousClose || result.meta.previousClose || result.meta.regularMarketPrice,
              success: true
            };
          }
        }
      } catch (e) {}

      for (const getProxyUrl of proxies) {
        try {
          const res = await fetch(getProxyUrl(yahooUrl), { signal: AbortSignal.timeout(3000) });
          if (res.ok) {
            const raw = await res.json();
            const json = typeof raw.contents === 'string' ? JSON.parse(raw.contents) : raw;
            const result = json.chart?.result?.[0];
            if (result && result.meta?.regularMarketPrice) {
              return {
                price: result.meta.regularMarketPrice,
                previousClose: result.meta.chartPreviousClose || result.meta.previousClose || result.meta.regularMarketPrice,
                success: true
              };
            }
          }
        } catch (e) {}
      }
    }
  }
  return null;
};

/**
 * Serviciu de prețuri ultra-rapid cu apel API de server și fallback paralel pe client.
 */
export const fetchLatestPrices = async (assets: Asset[]): Promise<Record<string, { price: number, previousClose: number, success: boolean }>> => {
  if (!assets || assets.length === 0) return {};

  let serverResults: Record<string, { price: number, previousClose: number, success: boolean }> = {};

  // 1. Apelăm API-ul dedicat de pe server
  try {
    const response = await fetch('/api/prices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ assets }),
      signal: AbortSignal.timeout(15000)
    });

    if (response.ok) {
      const data = await response.json();
      if (data && typeof data === 'object') {
        serverResults = data;
      }
    }
  } catch (serverErr) {
    console.warn("[PriceService] Eroare la endpoint-ul colectiv /api/prices:", serverErr);
  }

  const results: Record<string, { price: number, previousClose: number, success: boolean }> = { ...serverResults };

  // 2. Pentru orice activ ce nu a primit raspuns sau a avut success=false pe server, facem apel single server apoi fallback client
  const failedAssets = assets.filter(a => !results[a.id] || !results[a.id].success);

  if (failedAssets.length > 0) {
    await Promise.allSettled(
      failedAssets.map(async (asset) => {
        // a) Încercăm /api/price-single
        try {
          const ticker = asset.symbol || '';
          const custom = asset.customTicker || '';
          const type = asset.type || '';
          const url = `/api/price-single?ticker=${encodeURIComponent(ticker)}&custom=${encodeURIComponent(custom)}&type=${encodeURIComponent(type)}`;
          
          const singleRes = await fetch(url, { signal: AbortSignal.timeout(4000) });
          if (singleRes.ok) {
            const singleData = await singleRes.json();
            if (singleData && singleData.price) {
              results[asset.id] = singleData;
              return;
            }
          }
        } catch (e) {}

        // b) Dacă /api/price-single a eșuat, încercăm fallback direct din browser / CORS proxies
        const clientData = await fetchSingleAssetClientFallback(asset);
        if (clientData) {
          results[asset.id] = clientData;
          return;
        }

        // Dacă tot nu avem preț, păstrăm prețul existent
        results[asset.id] = results[asset.id] || {
          price: Number(asset.currentPrice) || 0,
          previousClose: Number(asset.previousClose || asset.currentPrice) || 0,
          success: false
        };
      })
    );
  }

  return results;
};

/**
 * Preia prețul actualizat pentru un singur activ live de pe Yahoo Finance / API.
 */
export const fetchSingleAssetPrice = async (asset: Asset): Promise<{ price: number; previousClose: number; success: boolean } | null> => {
  try {
    const ticker = asset.symbol || '';
    const custom = asset.customTicker || '';
    const type = asset.type || '';
    const url = `/api/price-single?ticker=${encodeURIComponent(ticker)}&custom=${encodeURIComponent(custom)}&type=${encodeURIComponent(type)}`;
    
    const singleRes = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (singleRes.ok) {
      const singleData = await singleRes.json();
      if (singleData && singleData.price) {
        return singleData;
      }
    }
  } catch (e) {}

  const clientData = await fetchSingleAssetClientFallback(asset);
  if (clientData) {
    return clientData;
  }

  return null;
};

/**
 * Fetches EUR/RON, USD/RON and EUR/USD rates rapidly from server or fallbacks.
 */
export const fetchYahooExchangeRates = async (): Promise<{
  eur: { price: number; previousClose: number };
  usd: { price: number; previousClose: number };
  eurUsd: { price: number; previousClose: number };
} | null> => {
  // 1. Încercăm mai întâi prin API-ul de server
  try {
    const res = await fetch('/api/exchange-rates', { signal: AbortSignal.timeout(4000) });
    if (res.ok) {
      const data = await res.json();
      if (data && data.eur && data.usd) {
        return data;
      }
    }
  } catch (e) {
    console.warn("[PriceService] Backend exchange rates endpoint failed, using client fallback...");
  }

  // 2. Client-side parallel fallback
  const yahooServers = [
    'https://query1.finance.yahoo.com',
    'https://query2.finance.yahoo.com'
  ];
  
  const proxies = [
    (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
    (url: string) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}&_=${Date.now()}`
  ];

  const fetchTicker = async (ticker: string) => {
    for (const server of yahooServers) {
      const yahooUrl = `${server}/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=7d&_cb=${Date.now()}`;
      for (const getProxyUrl of proxies) {
        try {
          const response = await fetch(getProxyUrl(yahooUrl), { signal: AbortSignal.timeout(3500) });
          if (!response.ok) continue;

          const json = await response.json();
          const data = typeof json.contents === 'string' ? JSON.parse(json.contents) : json;
          const result = data.chart?.result?.[0];
          
          if (result) {
            const meta = result.meta;
            let lastValidPrice = meta.regularMarketPrice;
            
            if (result.indicators?.quote?.[0]?.close) {
              const closePrices = result.indicators.quote[0].close;
              for (let i = closePrices.length - 1; i >= 0; i--) {
                if (closePrices[i] !== null && typeof closePrices[i] === 'number') {
                  lastValidPrice = closePrices[i];
                  break;
                }
              }
            }

            if (lastValidPrice && typeof lastValidPrice === 'number') {
              return {
                price: lastValidPrice,
                previousClose: meta.chartPreviousClose || meta.previousClose || lastValidPrice,
              };
            }
          }
        } catch (e) {
          continue;
        }
      }
    }
    return null;
  };

  try {
    const [eurData, usdData, eurUsdData] = await Promise.all([
      fetchTicker('EURRON=X'),
      fetchTicker('USDRON=X'),
      fetchTicker('EURUSD=X')
    ]);

    if (eurData && usdData) {
      const finalEurUsd = eurUsdData || {
        price: eurData.price / usdData.price,
        previousClose: eurData.previousClose / usdData.previousClose
      };

      return {
        eur: eurData,
        usd: usdData,
        eurUsd: finalEurUsd
      };
    }
  } catch (e) {
    console.error("Failed to fetch yahoo exchange rates", e);
  }
  return null;
};
