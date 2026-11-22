import { AssetType, Portfolio } from './types';

export const INITIAL_PORTFOLIOS: Portfolio[] = [
  {
    id: 'p1',
    name: 'P1 - Casa',
    description: 'Capital conservator pentru achiziție imobiliară (Titluri de Stat & Depozite).',
    color: 'bg-blue-500',
    currency: 'RON',
    assets: [],
    transactions: []
  },
  {
    id: 'p2',
    name: 'P2 - Sara 2035',
    description: 'Portofoliu diversificat de creștere (ETF-uri Mixte & Aur).',
    color: 'bg-emerald-500',
    currency: 'EUR',
    assets: [],
    transactions: []
  },
  {
    id: 'p3',
    name: 'P3 - Plan Venituri Pasive',
    description: 'Mix agresiv pentru cashflow: Dividende, Aur, Crypto & Obligațiuni.',
    color: 'bg-purple-500',
    currency: 'EUR',
    assets: [],
    transactions: []
  }
];

export const EXCHANGE_RATES: Record<string, number> = {
  'EUR_RON': 4.97,
  'USD_RON': 4.60,
  'USD_EUR': 0.92,
  'RON_EUR': 0.20,
  'EUR_USD': 1.09,
  'RON_USD': 0.22,
  'EUR_EUR': 1,
  'USD_USD': 1,
  'RON_RON': 1
};

export const ASSET_TYPE_COLORS: Record<AssetType, string> = {
  [AssetType.STOCK]: '#3b82f6',
  [AssetType.ETF]: '#10b981',
  [AssetType.CRYPTO]: '#8b5cf6',
  [AssetType.BOND]: '#06b6d4',
  [AssetType.BANK_DEPOSIT]: '#475569',
  [AssetType.CASH]: '#94a3b8',
  [AssetType.REAL_ESTATE]: '#f43f5e',
  [AssetType.COMMODITY]: '#eab308',
};