
export enum AssetType {
  STOCK = 'Acțiuni',
  CRYPTO = 'Criptomonede',
  ETF = 'ETF',
  BOND = 'Obligațiuni/Titluri Stat',
  BANK_DEPOSIT = 'Depozit Bancar',
  CASH = 'Numerar/Disponibil',
  REAL_ESTATE = 'Imobiliare',
  COMMODITY = 'Mărfuri (Aur)'
}

export enum TransactionType {
  DEPOSIT = 'Depunere',
  BUY = 'Cumpărare Activ',
  INTEREST = 'Dobândă Încasată',
  WITHDRAWAL = 'Retragere',
  SELL = 'Vânzare Activ',
  TAX = 'Comision/Impozit'
}

export interface Transaction {
  id: string;
  date: string;
  type: TransactionType;
  symbol?: string;
  description: string;
  amount: number;
  quantity?: number;
  price?: number;
  tax?: number;
  isin?: string;
  currency: string;
}

export interface Asset {
  id: string;
  symbol: string;
  name: string;
  type: AssetType;
  isin?: string;
  quantity: number;
  buyPrice: number;
  currentPrice: number;
  previousClose?: number;
  realizedPL?: number;
  targetAllocation?: number;
  currency: string;
  customTicker?: string;
  lastRefreshSuccess?: boolean;
  lastRefreshTime?: string;
}

export interface Portfolio {
  id: string;
  name: string;
  description: string;
  assets: Asset[];
  transactions: Transaction[];
  color: string;
  currency: string; 
}

export interface PortfolioStats {
  totalValue: number;
  totalCost: number;
  totalProfitLoss: number;
  percentageProfitLoss: number;
}

export interface PlanningCategoryGroup {
  rank: number;
  id: string;
  name: string;
  badgeColor: string;
}

export const getAssetCategoryGroup = (asset: Asset): PlanningCategoryGroup => {
  const symbolUpper = (asset.symbol || '').toUpperCase().trim();
  const nameUpper = (asset.name || '').toUpperCase().trim();
  const isinUpper = (asset.isin || '').toUpperCase().trim();
  const currencyUpper = (asset.currency || '').toUpperCase().trim();
  const type = asset.type;

  // 5. Crypto (ETH, BTC, SOL, etc. - wallet coins)
  const isEtnOrEtf = type === AssetType.ETF || nameUpper.includes('ETN') || symbolUpper.includes('VBTC') || symbolUpper.includes('VETH');
  if (
    !isEtnOrEtf &&
    (type === AssetType.CRYPTO ||
     ['BTC', 'ETH', 'SOL', 'ADA', 'XRP', 'DOT', 'DOGE', 'AVAX', 'LINK'].includes(symbolUpper) ||
     nameUpper.includes('BITCOIN') || nameUpper.includes('ETHEREUM') || nameUpper.includes('CRYPTO'))
  ) {
    return { 
      rank: 5, 
      id: 'crypto', 
      name: 'Crypto (ETH, BTC)',
      badgeColor: 'bg-amber-950/40 text-amber-400 border-amber-500/20' 
    };
  }

  // 2. Bond ETFs / Titluri de Stat / Obligațiuni
  const isBondKeyword =
    symbolUpper.includes('AGGH') || symbolUpper.includes('EUNA') || symbolUpper.includes('IB01') ||
    symbolUpper.includes('VAGF') || symbolUpper.includes('DTLA') || symbolUpper.includes('CBU0') ||
    symbolUpper.includes('DBZB') || symbolUpper.includes('BND') ||
    nameUpper.includes('BOND') || nameUpper.includes('OBLIGAȚIUN') || nameUpper.includes('OBLIGATIUN') ||
    nameUpper.includes('TREASURY') || nameUpper.includes('TITLURI') || nameUpper.includes('FIDELIS') ||
    nameUpper.includes('TEZAUR') || nameUpper.includes('GOVERNMENT') || nameUpper.includes('CORPORATE BOND');

  if (type === AssetType.BOND || (type === AssetType.ETF && isBondKeyword)) {
    return { 
      rank: 2, 
      id: 'bond_etf', 
      name: 'ETF-uri de Obligațiuni',
      badgeColor: 'bg-emerald-950/40 text-emerald-400 border-emerald-500/20'
    };
  }

  // 1. Stock ETFs (ETF-uri de acțiuni)
  if (type === AssetType.ETF) {
    return { 
      rank: 1, 
      id: 'stock_etf', 
      name: 'ETF-uri de Acțiuni',
      badgeColor: 'bg-blue-950/40 text-blue-400 border-blue-500/20'
    };
  }

  // 3 & 4. Stocks (Acțiuni RO vs Acțiuni Internaționale)
  if (type === AssetType.STOCK) {
    const isRomanianStock =
      currencyUpper === 'RON' ||
      isinUpper.startsWith('RO') ||
      ['TLV', 'SNP', 'SNN', 'H2O', 'DIGI', 'BRD', 'M', 'TGN', 'EL', 'COOTE', 'TEL', 'FP', 'BVB', 'WNS', 'ONE', 'TTS', 'AQ', 'SFG', 'IAR', 'CMF', 'SOCP', 'TRP', 'ATB', 'ROCE'].includes(symbolUpper);

    if (isRomanianStock) {
      return { 
        rank: 3, 
        id: 'ro_stock', 
        name: 'Acțiuni RO',
        badgeColor: 'bg-yellow-950/40 text-yellow-400 border-yellow-500/20'
      };
    } else {
      return { 
        rank: 4, 
        id: 'intl_stock', 
        name: 'Acțiuni Internaționale',
        badgeColor: 'bg-indigo-950/40 text-indigo-400 border-indigo-500/20'
      };
    }
  }

  // Fallback / Other Active (Cash, Depozite, Aur, etc.)
  return { 
    rank: 6, 
    id: 'other', 
    name: 'Alte Active',
    badgeColor: 'bg-slate-800 text-slate-300 border-slate-700'
  };
};

export interface AIAnalysisResult {
  summary: string;
  risks: string[];
  opportunities: string[];
  allocationScore: number;
}
