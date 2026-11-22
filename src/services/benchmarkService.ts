import baselineData from '../data/benchmarkBaselines.json';

export type BenchmarkId = 'none' | 'strategic' | 'sp500' | 'bet' | 'msci_world' | 'nasdaq100';

export interface BenchmarkOption {
  id: BenchmarkId;
  label: string;
  shortLabel: string;
  description: string;
}

export const BENCHMARK_OPTIONS: BenchmarkOption[] = [
  { id: 'none', label: 'Fără Benchmark', shortLabel: 'Fără', description: 'Afișează doar performanța portofoliului' },
  { id: 'strategic', label: 'Strategic (Mix 60/40 Global)', shortLabel: 'Strategic 60/40', description: 'Portofoliu clasic: 60% Acțiuni Globale (S&P 500) + 40% Obligațiuni (BND)' },
  { id: 'sp500', label: 'S&P 500 (SUA)', shortLabel: 'S&P 500', description: 'Indicele celor mai mari 500 de companii americane' },
  { id: 'bet', label: 'BET (BVB România)', shortLabel: 'BET (BVB)', description: 'Indicele de referință al Bursei de Valori București (via TVBETETF)' },
  { id: 'msci_world', label: 'MSCI World (Global)', shortLabel: 'MSCI World', description: 'Acțiuni din piețele dezvoltate globale (URTH)' },
  { id: 'nasdaq100', label: 'NASDAQ 100 (Tech)', shortLabel: 'NASDAQ 100', description: 'Top 100 companii tehnologice și de creștere (QQQ)' },
];

const memoryCache = new Map<string, Map<string, number>>();

function getTickerSymbol(id: BenchmarkId): string {
  switch (id) {
    case 'sp500': return '^GSPC';
    case 'bet': return 'TVBETETF.RO';
    case 'msci_world': return 'URTH';
    case 'nasdaq100': return 'QQQ';
    default: return '^GSPC';
  }
}

/**
 * Fills every calendar day between start and end date using forward-fill
 * to ensure that any portfolio date (including weekends/holidays) has an exact continuous benchmark price.
 */
function buildDailyFilledMap(list: Array<{ d: string, c: number }>): Map<string, number> {
  const map = new Map<string, number>();
  if (!list || list.length === 0) return map;

  const sorted = [...list].sort((a, b) => a.d.localeCompare(b.d));
  const startDate = new Date(sorted[0].d + 'T00:00:00Z');
  const todayStr = new Date().toISOString().split('T')[0];
  const lastDataDate = sorted[sorted.length - 1].d;
  const endDateStr = todayStr > lastDataDate ? todayStr : lastDataDate;
  const endDate = new Date(endDateStr + 'T00:00:00Z');

  let currentVal = sorted[0].c;
  let idx = 0;

  const iter = new Date(startDate);
  while (iter <= endDate) {
    const dStr = iter.toISOString().split('T')[0];
    while (idx < sorted.length && sorted[idx].d <= dStr) {
      currentVal = sorted[idx].c;
      idx++;
    }
    map.set(dStr, currentVal);
    iter.setUTCDate(iter.getUTCDate() + 1);
  }
  return map;
}

/**
 * Build baseline map from bundled data
 */
function buildBaselineMap(symbol: string): Map<string, number> {
  const list = (baselineData as Record<string, Array<{ d: string, c: number }>>)[symbol];
  if (Array.isArray(list) && list.length > 0) {
    return buildDailyFilledMap(list);
  }
  return new Map();
}

/**
 * Builds blended 60/40 strategic portfolio map synchronously from two maps
 */
function blendStrategic(spMap: Map<string, number>, bndMap: Map<string, number>): Map<string, number> {
  const strategicMap = new Map<string, number>();
  const dates = Array.from(spMap.keys()).sort();
  if (dates.length === 0) return strategicMap;

  const firstSp = spMap.get(dates[0]) || 1;
  let firstBnd = 1;
  for (const d of dates) {
    if (bndMap.has(d)) {
      firstBnd = bndMap.get(d) || 1;
      break;
    }
  }

  let lastBndPrice = firstBnd;
  dates.forEach(d => {
    const spPrice = spMap.get(d) || firstSp;
    if (bndMap.has(d)) {
      lastBndPrice = bndMap.get(d) || lastBndPrice;
    }
    const spReturnRatio = spPrice / firstSp;
    const bndReturnRatio = lastBndPrice / firstBnd;
    
    // Index starting at 100
    const blendedIndex = (0.60 * spReturnRatio + 0.40 * bndReturnRatio) * 100;
    strategicMap.set(d, blendedIndex);
  });

  return strategicMap;
}

/**
 * Synchronous getter to guarantee that data is NEVER empty on initial render (0ms latency).
 */
export function getBenchmarkDataSync(id: BenchmarkId): Map<string, number> {
  if (id === 'none') {
    return new Map();
  }

  if (memoryCache.has(id)) {
    return memoryCache.get(id)!;
  }

  if (id === 'strategic') {
    const spBaseline = buildBaselineMap('^GSPC');
    const bndBaseline = buildBaselineMap('BND');
    const blended = blendStrategic(spBaseline, bndBaseline);
    memoryCache.set('strategic', blended);
    return blended;
  }

  const symbol = getTickerSymbol(id);
  const baseline = buildBaselineMap(symbol);
  memoryCache.set(id, baseline);
  return baseline;
}

export function invalidateBenchmarkCache() {
  memoryCache.clear();
  try {
    ['^GSPC', 'TVBETETF.RO', 'URTH', 'QQQ', 'BND'].forEach(sym => {
      localStorage.removeItem(`benchmark_hist_${sym}`);
    });
  } catch (e) {}
}

async function fetchTickerHistory(symbol: string, forceRefresh: boolean = false): Promise<Map<string, number>> {
  const cacheKey = `benchmark_hist_${symbol}`;
  const todayStr = new Date().toISOString().split('T')[0];

  // Check localStorage cache (TTL 2 hours, and reject if last live point is >4 days old)
  if (!forceRefresh) {
    try {
      const raw = localStorage.getItem(cacheKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        const lastLiveDate: string = parsed.lastLiveDate || (Array.isArray(parsed.points) && parsed.points.length > 0 ? parsed.points[parsed.points.length - 1].date : '');
        const daysOld = lastLiveDate ? (new Date(todayStr).getTime() - new Date(lastLiveDate).getTime()) / (1000 * 60 * 60 * 24) : 999;
        if (Date.now() - parsed.timestamp < 2 * 3600 * 1000 && daysOld <= 4 && Array.isArray(parsed.points) && parsed.points.length > 0) {
          const map = buildDailyFilledMap(parsed.points.map((p: { date: string; close: number }) => ({ d: p.date, c: p.close })));
          memoryCache.set(symbol, map);
          return map;
        }
      }
    } catch (e) {}
  }

  try {
    const refreshParam = forceRefresh ? '&refresh=1' : '';
    const res = await fetch(`/api/benchmark-history?symbol=${encodeURIComponent(symbol)}&range=10y${refreshParam}`);
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        const rawPoints: Array<{ d: string, c: number }> = json.data.map((p: any) => ({ d: p.date, c: p.close }));
        const lastLiveDate = rawPoints[rawPoints.length - 1].d;

        // For TVBETETF.RO, merge with pre-2024 backfill if needed
        if (symbol === 'TVBETETF.RO') {
          const list = (baselineData as Record<string, Array<{ d: string, c: number }>>)['TVBETETF.RO'] || [];
          const existingDates = new Set(rawPoints.map(p => p.d));
          list.forEach(item => {
            if (!existingDates.has(item.d)) {
              rawPoints.push(item);
            }
          });
        }

        const map = buildDailyFilledMap(rawPoints);
        memoryCache.set(symbol, map);
        try {
          localStorage.setItem(cacheKey, JSON.stringify({
            timestamp: Date.now(),
            lastLiveDate,
            points: rawPoints.map(p => ({ date: p.d, close: p.c }))
          }));
        } catch (e) {}
        return map;
      }
    }
  } catch (e) {
    console.warn(`[Benchmark] Live fetch for ${symbol} failed, using baseline:`, e);
  }

  // Fallback to baseline
  const baseline = buildBaselineMap(symbol);
  memoryCache.set(symbol, baseline);
  return baseline;
}

/**
 * Returns a map of Date (YYYY-MM-DD) -> Benchmark Price/Index value
 */
export async function getBenchmarkHistory(id: BenchmarkId, forceRefresh: boolean = false): Promise<Map<string, number>> {
  if (id === 'none') {
    return new Map();
  }

  if (id === 'strategic') {
    // 60% S&P 500 + 40% Bonds (BND)
    const [spMap, bndMap] = await Promise.all([
      fetchTickerHistory('^GSPC', forceRefresh),
      fetchTickerHistory('BND', forceRefresh)
    ]);

    const blended = blendStrategic(spMap, bndMap);
    memoryCache.set('strategic', blended);
    return blended;
  }

  const symbol = getTickerSymbol(id);
  const map = await fetchTickerHistory(symbol, forceRefresh);
  memoryCache.set(id, map);
  return map;
}

export function getBenchmarkOption(id: BenchmarkId): BenchmarkOption {
  return BENCHMARK_OPTIONS.find(b => b.id === id) || BENCHMARK_OPTIONS[0];
}
