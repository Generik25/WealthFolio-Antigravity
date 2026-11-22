import { Portfolio, Asset } from '../types';

/**
 * Serviciu client de proxy către API-ul server-side securizat WealthFolio.
 * Pre-calculează totalurile, ponderile procentuale și P/L în TypeScript pentru
 * un consum minim de tokeni (fără istoric de tranzacții sau câmpuri inutile).
 */

export interface CompactPosition {
  sym: string;
  tip: string;
  valuta: string;
  pondere: number; // % din total
  profit: number;  // % P/L nerealizat
  tinta?: number;  // % alocare țintă (doar dacă e setată)
}

export interface CompactPortfolioSummary {
  context: string;
  moneda: string;
  valoareTotala: number;
  profitTotalPct: number;
  cashPct?: number;
  xirrPct?: number;
  cagrPct?: number;
  clase: Record<string, number>;
  valute: Record<string, number>;
  pozitii: CompactPosition[];
}

export interface CachedAnalysis {
  text: string;
  updatedAt: string; // ISO string
  model: string;
}

const REPORT_CACHE_PREFIX = 'wealthfolio_ai_report_cache_';
const CHAT_CACHE_PREFIX = 'wealthfolio_ai_chat_cache_';

const DEFAULT_RATES_TO_EUR: Record<string, number> = {
  EUR: 1,
  USD: 0.92,
  RON: 0.201,
  GBP: 1.18,
};

const defaultConvert = (amount: number, from: string, to: string): number => {
  if (!amount || from === to) return amount;
  const inEur = amount * (DEFAULT_RATES_TO_EUR[from] ?? 1);
  const toRate = DEFAULT_RATES_TO_EUR[to] ?? 1;
  return toRate > 0 ? inEur / toRate : inEur;
};

const round1 = (n: number): number => Math.round(n * 10) / 10;

/**
 * Comprimă și pre-calculează datele portofoliului în TypeScript înainte de apelul Gemini.
 * Elimină istoricul complet de tranzacții, activele închise și metadatele inutile.
 */
export const buildCompactPortfolioSummary = (
  portfolios: Portfolio[],
  context: 'all' | string,
  reportingCurrency: string = 'EUR',
  convertValue?: (amount: number, from: string, to: string) => number,
  macroStats?: any
): CompactPortfolioSummary => {
  const convert = convertValue || defaultConvert;
  const targetPortfolios =
    context === 'all'
      ? portfolios
      : portfolios.filter((p) => p.id === context);

  const contextName =
    context === 'all'
      ? 'Toate Portofoliile'
      : targetPortfolios[0]?.name || 'Portofoliu';

  const openAssets: Asset[] = targetPortfolios
    .flatMap((p) => p.assets || [])
    .filter((a) => (Number(a.quantity) || 0) >= 0.001);

  // Agregă pozițiile identice (ex: același simbol în portofolii diferite)
  const aggregated = new Map<
    string,
    {
      sym: string;
      tip: string;
      valuta: string;
      marketValRep: number;
      costBasisRep: number;
      tinta: number;
    }
  >();

  let totalAssetsVal = 0;
  let totalCostBasis = 0;
  const byTypeVal: Record<string, number> = {};
  const byCurrVal: Record<string, number> = {};

  for (const asset of openAssets) {
    const qty = Number(asset.quantity) || 0;
    const curPrice = Number(asset.currentPrice) || 0;
    const buyPrice = Number(asset.buyPrice) || 0;
    const curr = asset.currency || reportingCurrency;

    const marketValRep = convert(qty * curPrice, curr, reportingCurrency);
    const costBasisRep = convert(qty * buyPrice, curr, reportingCurrency);

    totalAssetsVal += marketValRep;
    totalCostBasis += costBasisRep;

    const typeKey = String(asset.type || 'Altul');
    byTypeVal[typeKey] = (byTypeVal[typeKey] || 0) + marketValRep;
    byCurrVal[curr] = (byCurrVal[curr] || 0) + marketValRep;

    const symKey = (asset.symbol || asset.name || 'N/A').trim().toUpperCase();
    const existing = aggregated.get(symKey);
    if (existing) {
      existing.marketValRep += marketValRep;
      existing.costBasisRep += costBasisRep;
      existing.tinta += Number(asset.targetAllocation) || 0;
    } else {
      aggregated.set(symKey, {
        sym: symKey,
        tip: typeKey,
        valuta: curr,
        marketValRep,
        costBasisRep,
        tinta: Number(asset.targetAllocation) || 0,
      });
    }
  }

  const cashBalance = Number(macroStats?.cashBalance) || 0;
  const totalValue =
    Number(macroStats?.netWorth) > 0
      ? Number(macroStats.netWorth)
      : totalAssetsVal + cashBalance;

  const denom = totalValue > 0 ? totalValue : 1;

  if (cashBalance > 0) {
    byTypeVal['Cash'] = (byTypeVal['Cash'] || 0) + cashBalance;
  }

  const clase: Record<string, number> = {};
  Object.entries(byTypeVal)
    .sort((a, b) => b[1] - a[1])
    .forEach(([k, v]) => {
      const pct = round1((v / denom) * 100);
      if (pct > 0) clase[k] = pct;
    });

  const valute: Record<string, number> = {};
  Object.entries(byCurrVal)
    .sort((a, b) => b[1] - a[1])
    .forEach(([k, v]) => {
      const pct = round1((v / denom) * 100);
      if (pct > 0) valute[k] = pct;
    });

  const pozitii: CompactPosition[] = Array.from(aggregated.values())
    .sort((a, b) => b.marketValRep - a.marketValRep)
    .map((item) => {
      const pondere = round1((item.marketValRep / denom) * 100);
      const profit =
        item.costBasisRep > 0
          ? round1(((item.marketValRep - item.costBasisRep) / item.costBasisRep) * 100)
          : 0;
      const row: CompactPosition = {
        sym: item.sym,
        tip: item.tip,
        valuta: item.valuta,
        pondere,
        profit,
      };
      if (item.tinta > 0) {
        row.tinta = round1(item.tinta);
      }
      return row;
    });

  const profitTotalPct =
    totalCostBasis > 0
      ? round1(((totalAssetsVal - totalCostBasis) / totalCostBasis) * 100)
      : 0;

  const summary: CompactPortfolioSummary = {
    context: contextName,
    moneda: reportingCurrency,
    valoareTotala: Math.round(totalValue),
    profitTotalPct,
    clase,
    valute,
    pozitii,
  };

  if (cashBalance > 0) {
    summary.cashPct = round1((cashBalance / denom) * 100);
  }
  if (typeof macroStats?.xirr === 'number' && Number.isFinite(macroStats.xirr)) {
    summary.xirrPct = round1(macroStats.xirr);
  }
  if (typeof macroStats?.cagr === 'number' && Number.isFinite(macroStats.cagr)) {
    summary.cagrPct = round1(macroStats.cagr);
  }

  return summary;
};

// --- LOCALSTORAGE CACHE HELPERS ---

export const getCachedFullReport = (contextId: string): CachedAnalysis | null => {
  try {
    const raw = localStorage.getItem(`${REPORT_CACHE_PREFIX}${contextId}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.text === 'string' && parsed.updatedAt) {
      return parsed as CachedAnalysis;
    }
    return null;
  } catch {
    return null;
  }
};

export const saveCachedFullReport = (
  contextId: string,
  text: string,
  model: string = 'gemini-2.5-flash'
): CachedAnalysis => {
  const entry: CachedAnalysis = {
    text,
    updatedAt: new Date().toISOString(),
    model,
  };
  try {
    localStorage.setItem(`${REPORT_CACHE_PREFIX}${contextId}`, JSON.stringify(entry));
  } catch (e) {
    console.warn('Could not save AI report cache to localStorage:', e);
  }
  return entry;
};

export const getCachedChatMessages = (contextId: string, expertId: string): { messages: any[]; updatedAt: string } | null => {
  try {
    const raw = localStorage.getItem(`${CHAT_CACHE_PREFIX}${contextId}_${expertId}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.messages)) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
};

export const saveCachedChatMessages = (contextId: string, expertId: string, messages: any[]): void => {
  try {
    localStorage.setItem(
      `${CHAT_CACHE_PREFIX}${contextId}_${expertId}`,
      JSON.stringify({ messages, updatedAt: new Date().toISOString() })
    );
  } catch (e) {
    console.warn('Could not save AI chat cache to localStorage:', e);
  }
};

export const clearCachedChatMessages = (contextId: string, expertId: string): void => {
  try {
    localStorage.removeItem(`${CHAT_CACHE_PREFIX}${contextId}_${expertId}`);
  } catch {}
};

export const formatCacheTimestamp = (isoDate?: string | null): string => {
  if (!isoDate) return '';
  try {
    const d = new Date(isoDate);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleString('ro-RO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return '';
  }
};

// --- API PROXY CALLS (SEND ONLY COMPACT PRE-CALCULATED JSON) ---

export const analyzePortfolios = async (
  portfolios: Portfolio[],
  context: 'all' | string,
  reportingCurrency: string = 'EUR',
  convertValue?: (amount: number, from: string, to: string) => number,
  macroStats?: any
): Promise<string> => {
  try {
    const compactPortfolio = buildCompactPortfolioSummary(
      portfolios,
      context,
      reportingCurrency,
      convertValue,
      macroStats
    );

    const response = await fetch("/api/gemini/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ compactPortfolio, context })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `Server returned status ${response.status}`);
    }

    const data = await response.json();
    return data.text;
  } catch (error: any) {
    console.error("Gemini Analysis Client Error:", error);
    return `Eroare AI: ${error.message || "Nu s-a putut conecta la serverul de analiză."}`;
  }
};

export const askFinancialAssistant = async (
  question: string,
  compactPortfolio: CompactPortfolioSummary,
  expertInstruction?: string
): Promise<string> => {
  try {
    const response = await fetch("/api/gemini/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question, compactPortfolio, expertInstruction })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `Server returned status ${response.status}`);
    }

    const data = await response.json();
    return data.text;
  } catch (error: any) {
    console.error("Gemini Assistant Client Error:", error);
    return `Eroare AI: ${error.message || "Asistentul nu a putut fi contactat."}`;
  }
};

/**
 * Generează un raport complet concis, analizat de toți experții AI pe baza JSON-ului comprimat.
 */
export const generateFullPortfolioReport = async (
  portfolios: Portfolio[],
  context: 'all' | string,
  reportingCurrency: string,
  macroStats?: any,
  convertValue?: (amount: number, from: string, to: string) => number
): Promise<string> => {
  try {
    const compactPortfolio = buildCompactPortfolioSummary(
      portfolios,
      context,
      reportingCurrency,
      convertValue,
      macroStats
    );

    const response = await fetch("/api/gemini/generate-full-report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ compactPortfolio, context, reportingCurrency })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `Server returned status ${response.status}`);
    }

    const data = await response.json();
    return data.text;
  } catch (error: any) {
    console.error("Gemini Full Report Client Error:", error);
    return `Eroare la generarea raportului AI: ${error.message || "Conexiunea cu serverul de raportare a eșuat."}`;
  }
};
