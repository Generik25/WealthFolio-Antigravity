import { Asset, AssetType } from '../types';

export interface AssetClassification {
  sector: string;
  subSector: string;
  region: string;
}

export const GICS_SECTORS = [
  'Information Technology',
  'Healthcare',
  'Financial Services',
  'Communication Services',
  'Consumer Discretionary',
  'Industrials',
  'Energy',
  'Utilities',
  'Consumer Staples',
  'Real Estate',
  'Materials',
] as const;

export type GicsSector = typeof GICS_SECTORS[number];

export const SECTOR_META: Record<string, { labelRo: string; dotColor: string; badgeClass: string; hex: string }> = {
  'Information Technology': {
    labelRo: 'Tehnologie (IT)',
    dotColor: 'bg-blue-500',
    badgeClass: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
    hex: '#3b82f6',
  },
  'Healthcare': {
    labelRo: 'Sănătate (Healthcare)',
    dotColor: 'bg-emerald-500',
    badgeClass: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    hex: '#10b981',
  },
  'Financial Services': {
    labelRo: 'Servicii Financiare',
    dotColor: 'bg-indigo-500',
    badgeClass: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    hex: '#6366f1',
  },
  'Communication Services': {
    labelRo: 'Comunicații & Media',
    dotColor: 'bg-purple-500',
    badgeClass: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    hex: '#8b5cf6',
  },
  'Consumer Discretionary': {
    labelRo: 'Consum Discreționar',
    dotColor: 'bg-pink-500',
    badgeClass: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
    hex: '#ec4899',
  },
  'Industrials': {
    labelRo: 'Industrie & Infrastructură',
    dotColor: 'bg-cyan-500',
    badgeClass: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    hex: '#06b6d4',
  },
  'Energy': {
    labelRo: 'Energie',
    dotColor: 'bg-amber-500',
    badgeClass: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    hex: '#f59e0b',
  },
  'Utilities': {
    labelRo: 'Utilități & Energie Electrică',
    dotColor: 'bg-teal-500',
    badgeClass: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
    hex: '#14b8a6',
  },
  'Consumer Staples': {
    labelRo: 'Bunuri de Consum de Bază',
    dotColor: 'bg-lime-500',
    badgeClass: 'bg-lime-500/15 text-lime-300 border-lime-500/30',
    hex: '#84cc16',
  },
  'Real Estate': {
    labelRo: 'Imobiliare (REIT)',
    dotColor: 'bg-rose-500',
    badgeClass: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    hex: '#f43f5e',
  },
  'Materials': {
    labelRo: 'Materiale & Resurse',
    dotColor: 'bg-orange-500',
    badgeClass: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    hex: '#f97316',
  },
};

export const getSectorMeta = (sector: string) => {
  return (
    SECTOR_META[sector] || {
      labelRo: sector || 'Neclasificat',
      dotColor: 'bg-slate-500',
      badgeClass: 'bg-slate-700/40 text-slate-300 border-slate-600/40',
      hex: '#64748b',
    }
  );
};

// Unified catalog for individual stocks, BVB, ETFs, Bonds, Commodities, Crypto
export const ASSET_METADATA_CATALOG: Record<string, AssetClassification> = {
  // --- US & GLOBAL INDIVIDUAL STOCKS ---
  'AAPL': { sector: 'Information Technology', subSector: 'Consumer Electronics & Hardware', region: 'US' },
  'MSFT': { sector: 'Information Technology', subSector: 'Cloud Infrastructure & Enterprise Software', region: 'US' },
  'NVDA': { sector: 'Information Technology', subSector: 'Semiconductors & AI Accelerators', region: 'US' },
  'AVGO': { sector: 'Information Technology', subSector: 'Semiconductors & Infrastructure Software', region: 'US' },
  'AMD': { sector: 'Information Technology', subSector: 'Semiconductors (CPU / GPU)', region: 'US' },
  'TSM': { sector: 'Information Technology', subSector: 'Semiconductor Foundry (Global Leader)', region: 'Taiwan' },
  'MU': { sector: 'Information Technology', subSector: 'Memory Semiconductors (DRAM / HBM)', region: 'US' },
  'CRDO': { sector: 'Information Technology', subSector: 'High-Speed AI Connectivity & SerDes', region: 'US' },
  'CLS': { sector: 'Information Technology', subSector: 'AI Data Center Hardware & EMS', region: 'Canada' },
  'ORCL': { sector: 'Information Technology', subSector: 'Enterprise Database & Cloud Infrastructure', region: 'US' },
  'CRM': { sector: 'Information Technology', subSector: 'Enterprise Cloud SaaS (CRM)', region: 'US' },
  'PANW': { sector: 'Information Technology', subSector: 'Cybersecurity Platforms', region: 'US' },
  'PLTR': { sector: 'Information Technology', subSector: 'AI Data Analytics & Defense Software', region: 'US' },
  'QUBT': { sector: 'Information Technology', subSector: 'Quantum Computing & Photonics', region: 'US' },
  'QBTS': { sector: 'Information Technology', subSector: 'Quantum Computing Systems', region: 'US' },
  'CRWV': { sector: 'Information Technology', subSector: 'AI Cloud GPU Infrastructure', region: 'US' },
  'ASML': { sector: 'Information Technology', subSector: 'Semiconductor Lithography Equipment', region: 'Netherlands' },
  'SAP': { sector: 'Information Technology', subSector: 'Enterprise ERP & Cloud Software', region: 'Germany' },

  'GOOGL': { sector: 'Communication Services', subSector: 'Interactive Media, Search & AI Cloud', region: 'US' },
  'GOOG': { sector: 'Communication Services', subSector: 'Interactive Media, Search & AI Cloud', region: 'US' },
  'META': { sector: 'Communication Services', subSector: 'Social Media & Digital Advertising', region: 'US' },
  'NFLX': { sector: 'Communication Services', subSector: 'Streaming Entertainment', region: 'US' },

  'AMZN': { sector: 'Consumer Discretionary', subSector: 'E-Commerce & Cloud Computing (AWS)', region: 'US' },
  'TSLA': { sector: 'Consumer Discretionary', subSector: 'Electric Vehicles, Energy & Robotics', region: 'US' },
  'BABA': { sector: 'Consumer Discretionary', subSector: 'E-Commerce & Cloud (China)', region: 'China' },

  'LLY': { sector: 'Healthcare', subSector: 'Pharmaceuticals (GLP-1 & Biotech)', region: 'US' },
  'UNH': { sector: 'Healthcare', subSector: 'Managed Healthcare & Health Insurance', region: 'US' },
  'NVO': { sector: 'Healthcare', subSector: 'Pharmaceuticals (Diabetes & Obesity)', region: 'Denmark' },
  'JNJ': { sector: 'Healthcare', subSector: 'Pharmaceuticals & MedTech', region: 'US' },
  'ABBV': { sector: 'Healthcare', subSector: 'Biopharmaceuticals', region: 'US' },
  'TMO': { sector: 'Healthcare', subSector: 'Life Sciences Tools & Diagnostics', region: 'US' },

  'JPM': { sector: 'Financial Services', subSector: 'Diversified Banking & Investment Banking', region: 'US' },
  'MA': { sector: 'Financial Services', subSector: 'Global Payment Networks', region: 'US' },
  'V': { sector: 'Financial Services', subSector: 'Global Payment Networks', region: 'US' },
  'SPGI': { sector: 'Financial Services', subSector: 'Financial Data, Ratings & Indices', region: 'US' },
  'HOOD': { sector: 'Financial Services', subSector: 'Digital Brokerage & FinTech', region: 'US' },
  'BRK.B': { sector: 'Financial Services', subSector: 'Multi-Sector Conglomerate & Insurance', region: 'US' },

  'VRT': { sector: 'Industrials', subSector: 'Data Center Thermal & Power Management', region: 'US' },
  'STRL': { sector: 'Industrials', subSector: 'E-Infrastructure & Data Center Construction', region: 'US' },
  'UBER': { sector: 'Industrials', subSector: 'Mobility & Delivery Platforms', region: 'US' },
  'GEV': { sector: 'Industrials', subSector: 'Power Generation & Grid Equipment', region: 'US' },
  'ETN': { sector: 'Industrials', subSector: 'Electrical & Power Management', region: 'US' },

  'CVX': { sector: 'Energy', subSector: 'Integrated Oil & Gas', region: 'US' },
  'MTDR': { sector: 'Energy', subSector: 'Oil & Gas Exploration & Production', region: 'US' },
  'CCJ': { sector: 'Energy', subSector: 'Uranium Mining & Nuclear Fuel', region: 'Canada' },
  'OKLO': { sector: 'Energy', subSector: 'Advanced Nuclear Fission (SMR)', region: 'US' },
  'SMR': { sector: 'Energy', subSector: 'Small Modular Nuclear Reactors', region: 'US' },
  'NNE': { sector: 'Energy', subSector: 'Micro Nuclear Reactors & Fuel', region: 'US' },
  'XOM': { sector: 'Energy', subSector: 'Integrated Oil & Gas', region: 'US' },

  'CEG': { sector: 'Utilities', subSector: 'Nuclear & Clean Power Generation', region: 'US' },
  'VST': { sector: 'Utilities', subSector: 'Independent Power Producers', region: 'US' },
  'NEE': { sector: 'Utilities', subSector: 'Renewable Energy & Electric Utilities', region: 'US' },

  'EQIX': { sector: 'Real Estate', subSector: 'Data Center REIT', region: 'US' },
  'O': { sector: 'Real Estate', subSector: 'Retail Net-Lease REIT', region: 'US' },
  'DLR': { sector: 'Real Estate', subSector: 'Data Center REIT', region: 'US' },

  'COST': { sector: 'Consumer Staples', subSector: 'Membership Warehouse Retail', region: 'US' },
  'PG': { sector: 'Consumer Staples', subSector: 'Household & Personal Products', region: 'US' },
  'KO': { sector: 'Consumer Staples', subSector: 'Beverages', region: 'US' },
  'WMT': { sector: 'Consumer Staples', subSector: 'Consumer Staples Retail', region: 'US' },

  'LIN': { sector: 'Materials', subSector: 'Industrial Gases', region: 'US' },
  'FCX': { sector: 'Materials', subSector: 'Copper & Gold Mining', region: 'US' },
  'NEM': { sector: 'Materials', subSector: 'Gold Mining', region: 'US' },

  // --- ROMANIA (BVB) ---
  'TLV.RO': { sector: 'Financial Services', subSector: 'Bănci Comerciale (BVB)', region: 'Romania' },
  'BRD.RO': { sector: 'Financial Services', subSector: 'Bănci Comerciale (BVB)', region: 'Romania' },
  'FP.RO': { sector: 'Financial Services', subSector: 'Fond de Investiții (BVB)', region: 'Romania' },
  'DIGI.RO': { sector: 'Communication Services', subSector: 'Telecomunicații & Media (BVB)', region: 'Romania' },
  'H2O.RO': { sector: 'Utilities', subSector: 'Energie Hidroelectrică (BVB)', region: 'Romania' },
  'TGN.RO': { sector: 'Utilities', subSector: 'Transport Gaze Naturale (BVB)', region: 'Romania' },
  'EL.RO': { sector: 'Utilities', subSector: 'Distribuție & Furnizare Energie (BVB)', region: 'Romania' },
  'SNN.RO': { sector: 'Utilities', subSector: 'Energie Nucleară (BVB)', region: 'Romania' },
  'TEL.RO': { sector: 'Utilities', subSector: 'Transport Energie Electrică (BVB)', region: 'Romania' },
  'SNP.RO': { sector: 'Energy', subSector: 'Petrol & Gaze Integrate (BVB)', region: 'Romania' },
  'SNG.RO': { sector: 'Energy', subSector: 'Producție Gaze Naturale (BVB)', region: 'Romania' },
  'ATB.RO': { sector: 'Healthcare', subSector: 'Industrie Farmaceutică (BVB)', region: 'Romania' },
  'M.RO': { sector: 'Healthcare', subSector: 'Servicii Medicale Private (BVB)', region: 'Romania' },
  'ONE.RO': { sector: 'Real Estate', subSector: 'Dezvoltare Imobiliară (BVB)', region: 'Romania' },
  'AQ.RO': { sector: 'Consumer Staples', subSector: 'Distribuție & Logistică FMCG (BVB)', region: 'Romania' },
  'TTS.RO': { sector: 'Industrials', subSector: 'Transport Naval & Logistică (BVB)', region: 'Romania' },
  'TRP.RO': { sector: 'Materials', subSector: 'Materiale de Construcții & Polimeri (BVB)', region: 'Romania' },
  'SFG.RO': { sector: 'Consumer Discretionary', subSector: 'Restaurante & HoReCa (BVB)', region: 'Romania' },

  // --- EQUITY ETFs ---
  'EUNL.DE': { sector: 'Diversified Equities', subSector: 'MSCI World (Piețe Dezvoltate)', region: 'Global Market' },
  'VWCE.DE': { sector: 'Diversified Equities', subSector: 'FTSE All-World (Global Total)', region: 'Global Market' },
  'VWCG.DE': { sector: 'Diversified Equities', subSector: 'FTSE Developed Europe', region: 'Europe' },
  'SXR8.DE': { sector: 'Diversified Equities', subSector: 'S&P 500 (US Large Cap)', region: 'North America' },
  'VUAA.L': { sector: 'Diversified Equities', subSector: 'S&P 500 (US Large Cap)', region: 'North America' },
  'IS3N.DE': { sector: 'Diversified Equities', subSector: 'MSCI Emerging Markets IMI', region: 'Emerging Markets' },
  'IS3Q.DE': { sector: 'Diversified Equities', subSector: 'MSCI World Quality Factor', region: 'Global Market' },
  'IUSN.DE': { sector: 'Diversified Equities', subSector: 'MSCI World Small Cap', region: 'Global Market' },
  'LYP6.DE': { sector: 'Diversified Equities', subSector: 'STOXX Europe 600', region: 'Europe' },
  'MEUD.PA': { sector: 'Diversified Equities', subSector: 'STOXX Europe 600', region: 'Europe' },
  'TVBETETF.RO': { sector: 'Diversified Equities', subSector: 'Indicele BET (Bursa de Valori București)', region: 'Romania' },
  'TVBETETF': { sector: 'Diversified Equities', subSector: 'Indicele BET (Bursa de Valori București)', region: 'Romania' },
  'VVSM.DE': { sector: 'Information Technology', subSector: 'ETF Tematic Semiconductori', region: 'North America' },
  'LSMC.DE': { sector: 'Information Technology', subSector: 'ETF Tematic MSCI Semiconductors', region: 'Global Market' },
  'XAIX.DE': { sector: 'Information Technology', subSector: 'ETF Tematic AI & Big Data', region: 'North America' },
  'EXV1.DE': { sector: 'Financial Services', subSector: 'ETF Sectorial Bănci Europa', region: 'Europe' },
  'BNKE.PA': { sector: 'Financial Services', subSector: 'ETF Sectorial Euro Stoxx Banks', region: 'Europe' },
  'DFEN.DE': { sector: 'Aerospace & Defense', subSector: 'ETF Tematic Apărare Globală', region: 'North America' },
  'EUDF.DE': { sector: 'Aerospace & Defense', subSector: 'ETF Tematic Apărare Europa', region: 'Europe' },
  'XDWT.DE': { sector: 'Information Technology', subSector: 'ETF Sectorial MSCI World IT', region: 'Global Market' },
  'QDVE.DE': { sector: 'Information Technology', subSector: 'ETF Sectorial S&P 500 IT', region: 'North America' },
  'W1TB.DE': { sector: 'Information Technology', subSector: 'ETF Tematic Cybersecurity', region: 'Global Market' },
  'SEC0.DE': { sector: 'Information Technology', subSector: 'ETF Tematic Global Semiconductors', region: 'Global Market' },
  'BNXG.DE': { sector: 'Information Technology', subSector: 'ETF Tematic Global Blockchain', region: 'Global Market' },
  'XSNR.DE': { sector: 'Industrials', subSector: 'ETF Sectorial Europe Industrials', region: 'Europe' },
  'IS0E.DE': { sector: 'Materials', subSector: 'ETF Sectorial Gold Producers', region: 'Global Market' },
  'IUHC.L': { sector: 'Healthcare', subSector: 'ETF Sectorial S&P 500 Health Care', region: 'North America' },
  'XDWH.DE': { sector: 'Healthcare', subSector: 'ETF Sectorial MSCI World Health Care', region: 'Global Market' },
  'EXV4.DE': { sector: 'Healthcare', subSector: 'ETF Sectorial Europe Health Care', region: 'Europe' },
  'IUES.L': { sector: 'Energy', subSector: 'ETF Sectorial S&P 500 Energy', region: 'North America' },
  'XDEW.DE': { sector: 'Energy', subSector: 'ETF Sectorial MSCI World Energy', region: 'Global Market' },
  'EXH1.DE': { sector: 'Energy', subSector: 'ETF Sectorial Europe Oil & Gas', region: 'Europe' },

  // --- BOND ETFs, SOVEREIGN BONDS & DEPOSITS ---
  'ERNX.DE': { sector: 'Bonds & Fixed Income', subSector: 'Obligațiuni Corporative EUR Ultra-Short', region: 'Europe' },
  'C3MGR.DE': { sector: 'Bonds & Fixed Income', subSector: 'Titluri de Stat Zona Euro 0-6 Luni', region: 'Europe' },
  'C3M.PA': { sector: 'Bonds & Fixed Income', subSector: 'Titluri de Stat Zona Euro 0-6 Luni', region: 'Europe' },
  'XHYA.DE': { sector: 'Bonds & Fixed Income', subSector: 'Obligațiuni Corporative EUR High Yield', region: 'Europe' },
  'BB3M.L': { sector: 'Bonds & Fixed Income', subSector: 'US Treasury Bills 0-3 Luni (USD)', region: 'North America' },
  'IB01.L': { sector: 'Bonds & Fixed Income', subSector: 'US Treasury Bills 0-1 An (USD)', region: 'North America' },
  'IBTA.L': { sector: 'Bonds & Fixed Income', subSector: 'US Treasury Bonds 1-3 Ani (USD)', region: 'North America' },
  'FLOA.L': { sector: 'Bonds & Fixed Income', subSector: 'Obligațiuni USD Rată Variabilă (Floating)', region: 'Global Market' },
  'R2803A': { sector: 'Bonds & Fixed Income', subSector: 'Titluri de Stat Fidelis (România)', region: 'Romania' },
  'DEP_BT': { sector: 'Cash & Liquidities', subSector: 'Depozit Bancar la Termen (Banca Transilvania)', region: 'Romania' },

  // --- COMMODITIES & CRYPTO ---
  'EGLN.L': { sector: 'Materials & Commodities', subSector: 'Aur Fizic (LBMA Physical Gold ETC)', region: 'Global Market' },
  'BTC': { sector: 'Crypto Assets', subSector: 'Bitcoin (Layer-1 Digital Store of Value)', region: 'Decentralized' },
  'BTC-USD': { sector: 'Crypto Assets', subSector: 'Bitcoin (Layer-1 Digital Store of Value)', region: 'Decentralized' },
  'ETH': { sector: 'Crypto Assets', subSector: 'Ethereum (Smart Contracts Layer-1)', region: 'Decentralized' },
  'ETH-USD': { sector: 'Crypto Assets', subSector: 'Ethereum (Smart Contracts Layer-1)', region: 'Decentralized' },
  'VBTC.DE': { sector: 'Crypto Assets', subSector: 'Bitcoin ETN (UCITS)', region: 'Decentralized' },
  'VETH.DE': { sector: 'Crypto Assets', subSector: 'Ethereum ETN (UCITS)', region: 'Decentralized' },
};

const stripTickerExchange = (sym: string): string => {
  const clean = (sym || '').trim().toUpperCase();
  if (!clean) return '';
  if (clean === 'BTC-USD') return 'BTC';
  if (clean === 'ETH-USD') return 'ETH';
  return clean.replace(/\.(US|RO|DE|L|PA|SW|MC|AS|MI|TO)$/i, '');
};

export const normalizeToGicsSector = (rawSector?: string): string => {
  if (!rawSector) return 'Altele / Neclasificat';
  const lower = rawSector.trim().toLowerCase();

  if (lower.includes('technology') || lower === 'tech' || lower.includes('semiconductor') || lower.includes('software')) {
    return 'Information Technology';
  }
  if (lower.includes('health') || lower.includes('pharma') || lower.includes('biotech') || lower.includes('sănătate')) {
    return 'Healthcare';
  }
  if (lower.includes('financial') || lower.includes('bank') || lower.includes('fintech') || lower.includes('insurance')) {
    return 'Financial Services';
  }
  if (lower.includes('communication') || lower.includes('telecom') || lower.includes('media')) {
    return 'Communication Services';
  }
  if (lower.includes('consumer disc') || lower.includes('cyclical') || lower.includes('retail') || lower.includes('auto')) {
    return 'Consumer Discretionary';
  }
  if (lower.includes('consumer staple') || lower.includes('non-cyclical') || lower.includes('staple') || lower.includes('defensive')) {
    return 'Consumer Staples';
  }
  if (lower.includes('industrial') || lower.includes('defense') || lower.includes('aerospace') || lower.includes('transport') || lower.includes('infrastructure')) {
    return 'Industrials';
  }
  if (lower.includes('energy') || lower.includes('oil') || lower.includes('uranium') || lower.includes('nuclear')) {
    return 'Energy';
  }
  if (lower.includes('utilit') || lower.includes('electric') || lower.includes('power')) {
    return 'Utilities';
  }
  if (lower.includes('real estate') || lower.includes('reit') || lower.includes('imobiliar')) {
    return 'Real Estate';
  }
  if (lower.includes('material') || lower.includes('mining') || lower.includes('chemical') || lower.includes('metal')) {
    return 'Materials';
  }
  return rawSector.trim();
};

export const getAssetClassification = (asset: Asset): AssetClassification => {
  const sym = (asset.symbol || '').trim().toUpperCase();
  const base = stripTickerExchange(sym);

  const catalogHit =
    ASSET_METADATA_CATALOG[sym] ||
    ASSET_METADATA_CATALOG[base] ||
    ASSET_METADATA_CATALOG[`${sym}.RO`] ||
    ASSET_METADATA_CATALOG[`${sym}.DE`] ||
    ASSET_METADATA_CATALOG[`${sym}.L`] ||
    ASSET_METADATA_CATALOG[`${base}.RO`] ||
    ASSET_METADATA_CATALOG[`${base}.DE`];

  const defaultSector = (() => {
    if (catalogHit) return catalogHit.sector;
    if (asset.type === AssetType.CASH || asset.type === AssetType.BANK_DEPOSIT) return 'Cash & Liquidities';
    if (asset.type === AssetType.CRYPTO) return 'Crypto Assets';
    if (asset.type === AssetType.COMMODITY) return 'Materials & Commodities';
    if (asset.type === AssetType.BOND) return 'Bonds & Fixed Income';
    if (asset.type === AssetType.REAL_ESTATE) return 'Real Estate';
    if (asset.type === AssetType.ETF) return 'Diversified Equities';
    return 'Altele / Neclasificat';
  })();

  const defaultSubSector = (() => {
    if (catalogHit) return catalogHit.subSector;
    if (asset.type === AssetType.BOND) return asset.currency === 'RON' ? 'Titluri de Stat / Obligațiuni RON' : 'Obligațiuni / Venit Fix';
    if (asset.type === AssetType.BANK_DEPOSIT) return 'Depozit Bancar';
    if (asset.type === AssetType.ETF) return 'Fond Index / ETF';
    if (asset.type === AssetType.CRYPTO) return 'Activ Digital';
    if (asset.type === AssetType.COMMODITY) return 'Mărfuri / Metale Prețioase';
    return 'Acțiune Individuală';
  })();

  const defaultRegion = (() => {
    if (catalogHit) return catalogHit.region;
    if (asset.type === AssetType.CRYPTO) return 'Decentralized';
    if (asset.currency === 'RON' || sym.endsWith('.RO')) return 'Romania';
    if (sym.endsWith('.DE') || sym.endsWith('.PA') || sym.endsWith('.AS') || sym.endsWith('.SW')) return 'Europe';
    if (asset.currency === 'USD') return 'US';
    return 'Global Market';
  })();

  return {
    sector: (asset.sector && asset.sector.trim()) ? asset.sector.trim() : defaultSector,
    subSector: (asset.subSector && asset.subSector.trim()) ? asset.subSector.trim() : defaultSubSector,
    region: defaultRegion,
  };
};

export const getStockSector = (asset: Asset): string => {
  const cls = getAssetClassification(asset);
  return normalizeToGicsSector(cls.sector);
};

const GICS_SECTOR_SET = new Set<string>(GICS_SECTORS);

/**
 * Determines whether an ETF is a Core (Broad Market) ETF or a Satellite (Sector / Thematic) ETF.
 * Priority:
 * 1. Explicit user override (`asset.etfRole`)
 * 2. Explicit or catalog sector mapping cleanly to a single GICS sector (not Diversified Equities / Fixed Income)
 * 3. Look-through ETF database top GICS sector >= 65%
 */
export const getEtfRole = (
  asset: Asset,
  etfSectors?: Array<{ name?: string; sector?: string; weight: number }>
): 'core' | 'satellite' => {
  if (asset.type !== AssetType.ETF) return 'core';
  if (asset.etfRole === 'satellite' || asset.etfRole === 'core') {
    return asset.etfRole;
  }

  const cls = getAssetClassification(asset);
  const norm = normalizeToGicsSector(cls.sector);
  if (GICS_SECTOR_SET.has(norm)) {
    return 'satellite';
  }

  if (etfSectors && etfSectors.length > 0) {
    const grouped: Record<string, number> = {};
    let totalW = 0;
    etfSectors.forEach(s => {
      const w = Number(s.weight) || 0;
      if (w <= 0) return;
      const g = normalizeToGicsSector(s.name ?? s.sector ?? '');
      grouped[g] = (grouped[g] || 0) + w;
      totalW += w;
    });
    if (totalW > 0) {
      const top = Object.entries(grouped).sort((a, b) => b[1] - a[1])[0];
      if (top && GICS_SECTOR_SET.has(top[0]) && (top[1] / totalW) >= 0.65) {
        return 'satellite';
      }
    }
  }

  return 'core';
};

export const isSatelliteEtf = (
  asset: Asset,
  etfSectors?: Array<{ name?: string; sector?: string; weight: number }>
): boolean => {
  return asset.type === AssetType.ETF && getEtfRole(asset, etfSectors) === 'satellite';
};

/**
 * Returns the primary GICS sector for an individual stock or a satellite sector ETF.
 */
export const getSatelliteSector = (
  asset: Asset,
  etfSectors?: Array<{ name?: string; sector?: string; weight: number }>
): string | null => {
  if (asset.type === AssetType.STOCK) {
    return getStockSector(asset);
  }
  if (asset.type === AssetType.ETF && isSatelliteEtf(asset, etfSectors)) {
    const cls = getAssetClassification(asset);
    const norm = normalizeToGicsSector(cls.sector);
    if (GICS_SECTOR_SET.has(norm)) return norm;

    if (etfSectors && etfSectors.length > 0) {
      const grouped: Record<string, number> = {};
      etfSectors.forEach(s => {
        const w = Number(s.weight) || 0;
        if (w <= 0) return;
        const g = normalizeToGicsSector(s.name ?? s.sector ?? '');
        if (GICS_SECTOR_SET.has(g)) {
          grouped[g] = (grouped[g] || 0) + w;
        }
      });
      const top = Object.entries(grouped).sort((a, b) => b[1] - a[1])[0];
      if (top) return top[0];
    }
    return 'Information Technology';
  }
  return null;
};

export type SectorBenchmarkId = 'manual' | 'msci_world' | 'balanced' | 'defensive' | 'growth';

export interface SectorBenchmarkProfile {
  id: SectorBenchmarkId;
  name: string;
  shortDesc: string;
  /** Weights as % of total equity exposure (sum = 100) */
  weights: Record<GicsSector, number>;
}

export const SECTOR_BENCHMARKS: Record<SectorBenchmarkId, SectorBenchmarkProfile> = {
  manual: {
    id: 'manual',
    name: 'Manual (Personalizat)',
    shortDesc: 'Setezi liber ținta totală pe fiecare sector peste podeaua ETF-urilor Core.',
    weights: {
      'Information Technology': 22,
      'Financial Services': 14,
      'Healthcare': 12,
      'Industrials': 11,
      'Consumer Discretionary': 10,
      'Communication Services': 8,
      'Consumer Staples': 7,
      'Energy': 6,
      'Utilities': 4,
      'Materials': 3.5,
      'Real Estate': 2.5,
    },
  },
  msci_world: {
    id: 'msci_world',
    name: 'MSCI World (Neutral de Piață)',
    shortDesc: 'Aliniază expunerea combinată Core + Satelit cu ponderea globală a pieței dezvoltate.',
    weights: {
      'Information Technology': 25.0,
      'Financial Services': 16.0,
      'Industrials': 11.0,
      'Healthcare': 11.0,
      'Consumer Discretionary': 10.5,
      'Communication Services': 8.0,
      'Consumer Staples': 6.0,
      'Energy': 4.0,
      'Materials': 3.5,
      'Utilities': 2.5,
      'Real Estate': 2.5,
    },
  },
  balanced: {
    id: 'balanced',
    name: 'Echilibrat (Anti-Concentrare)',
    shortDesc: 'Plafonează IT și Financials și redistribuie sateliții spre Healthcare, Industrials, Staples și Energy.',
    weights: {
      'Information Technology': 18.0,
      'Healthcare': 14.0,
      'Financial Services': 13.0,
      'Industrials': 13.0,
      'Consumer Staples': 9.0,
      'Energy': 8.0,
      'Communication Services': 8.0,
      'Consumer Discretionary': 7.0,
      'Utilities': 4.0,
      'Materials': 3.5,
      'Real Estate': 2.5,
    },
  },
  defensive: {
    id: 'defensive',
    name: 'Defensiv / Calitate & Venit',
    shortDesc: 'Supraponderează sectoarele reziliente (Healthcare, Staples, Utilities, Energy) pentru volatilitate redusă.',
    weights: {
      'Healthcare': 18.0,
      'Information Technology': 15.0,
      'Consumer Staples': 14.0,
      'Financial Services': 11.0,
      'Industrials': 11.0,
      'Utilities': 9.0,
      'Energy': 8.0,
      'Communication Services': 6.0,
      'Consumer Discretionary': 4.0,
      'Materials': 2.0,
      'Real Estate': 2.0,
    },
  },
  growth: {
    id: 'growth',
    name: 'Growth & Tehnologie',
    shortDesc: 'Supraponderează IT, AI/Semiconductori, Comunicații și Industrials/Defense.',
    weights: {
      'Information Technology': 30.0,
      'Communication Services': 12.0,
      'Consumer Discretionary': 12.0,
      'Healthcare': 12.0,
      'Industrials': 12.0,
      'Financial Services': 10.0,
      'Energy': 4.0,
      'Consumer Staples': 3.0,
      'Utilities': 2.0,
      'Materials': 2.0,
      'Real Estate': 1.0,
    },
  },
};
