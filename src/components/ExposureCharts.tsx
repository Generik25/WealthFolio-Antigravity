import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Asset, AssetType } from '../types';
import { Globe, Layers } from 'lucide-react';
import { DEFAULT_ETF_DATABASE, ETFCoverageData, normalizeYahooTicker, findEtfDatabaseKey } from './ETFOverlapAnalysis';
import { getAssetClassification } from '../services/sectorService';

interface ExposureChartsProps {
  assets: Asset[];
  currency: string;
  cashBalance: number;
  convertValue: (amount: number, from: string, to: string) => number;
}

// --- FULL MAPPING FOR USER TICKERS ---
const ASSET_MAPPING: Record<string, { region: string; sector: string }> = {
  // ROMANIA (BVB)
  'TLV.RO': { region: 'Romania', sector: 'Financial Services' },
  'DIGI.RO': { region: 'Romania', sector: 'Communication Services' },
  'H2O.RO': { region: 'Romania', sector: 'Utilities' },
  'ATB.RO': { region: 'Romania', sector: 'Healthcare' },
  'TVBETETF.RO': { region: 'Romania', sector: 'Diversified Equities' },
  'SNP.RO': { region: 'Romania', sector: 'Energy' },
  'SNG.RO': { region: 'Romania', sector: 'Energy' },
  'M.RO': { region: 'Romania', sector: 'Healthcare' },
  'TGN.RO': { region: 'Romania', sector: 'Utilities' },
  'EL.RO': { region: 'Romania', sector: 'Utilities' },
  'SNN.RO': { region: 'Romania', sector: 'Utilities' },
  'TEL.RO': { region: 'Romania', sector: 'Utilities' },
  'ONE.RO': { region: 'Romania', sector: 'Real Estate' },
  'FP.RO': { region: 'Romania', sector: 'Financial Services' },
  'AQ.RO': { region: 'Romania', sector: 'Consumer Staples' },
  'TTS.RO': { region: 'Romania', sector: 'Industrials' },
  'TRP.RO': { region: 'Romania', sector: 'Materials' },
  'SFG.RO': { region: 'Romania', sector: 'Consumer Discretionary' },

  // CRYPTO
  'ETH-USD': { region: 'Decentralized', sector: 'Crypto Assets' },
  'BTC-USD': { region: 'Decentralized', sector: 'Crypto Assets' },
  'VBTC.DE': { region: 'Decentralized', sector: 'Crypto Assets' },
  'VETH.DE': { region: 'Decentralized', sector: 'Crypto Assets' },

  // US STOCKS & TECH
  'CEG': { region: 'North America', sector: 'Utilities' },
  'MU': { region: 'North America', sector: 'Information Technology' },
  'CCJ': { region: 'North America', sector: 'Energy' },
  'UNH': { region: 'North America', sector: 'Healthcare' },
  'UBER': { region: 'North America', sector: 'Information Technology' },
  'TSM': { region: 'North America', sector: 'Information Technology' },
  'TSLA': { region: 'North America', sector: 'Consumer Discretionary' },
  'SPGI': { region: 'North America', sector: 'Financial Services' },
  'SMR': { region: 'North America', sector: 'Energy' },
  'QUBT': { region: 'North America', sector: 'Information Technology' },
  'QBTS': { region: 'North America', sector: 'Information Technology' },
  'PLTR': { region: 'North America', sector: 'Information Technology' },
  'ORCL': { region: 'North America', sector: 'Information Technology' },
  'OKLO': { region: 'North America', sector: 'Energy' },
  'NVO': { region: 'Europe', sector: 'Healthcare' },
  'NVDA': { region: 'North America', sector: 'Information Technology' },
  'NNE': { region: 'North America', sector: 'Energy' },
  'NFLX': { region: 'North America', sector: 'Communication Services' },
  'MSFT': { region: 'North America', sector: 'Information Technology' },
  'META': { region: 'North America', sector: 'Communication Services' },
  'JPM': { region: 'North America', sector: 'Financial Services' },
  'HOOD': { region: 'North America', sector: 'Financial Services' },
  'GOOGL': { region: 'North America', sector: 'Information Technology' },
  'BABA': { region: 'Emerging Markets', sector: 'Consumer Discretionary' },
  'AVGO': { region: 'North America', sector: 'Information Technology' },
  'AMZN': { region: 'North America', sector: 'Consumer Discretionary' },
  'AMD': { region: 'North America', sector: 'Information Technology' },
  'AAPL': { region: 'North America', sector: 'Information Technology' },

  // FIXED INCOME & CASH EQUIVALENTS
  'IBTA.L': { region: 'North America', sector: 'Bonds & Fixed Income' },
  'IB01.L': { region: 'North America', sector: 'Bonds & Fixed Income' },
  'CBU7.L': { region: 'North America', sector: 'Bonds & Fixed Income' },
  'CBU0.L': { region: 'North America', sector: 'Bonds & Fixed Income' },
  'IBTE.L': { region: 'North America', sector: 'Bonds & Fixed Income' },
  'EUNA.DE': { region: 'Global Market', sector: 'Bonds & Fixed Income' },
  'XHYA.DE': { region: 'Global Market', sector: 'Bonds & Fixed Income' },
  'DBZB.DE': { region: 'Global Market', sector: 'Bonds & Fixed Income' },

  // ETFs (GLOBAL & REGIONAL)
  'DFEN.DE': { region: 'North America', sector: 'Aerospace & Defense' },
  'DFEN': { region: 'North America', sector: 'Aerospace & Defense' },
  'DFNS.DE': { region: 'North America', sector: 'Aerospace & Defense' },
  'DFNS': { region: 'North America', sector: 'Aerospace & Defense' },
  'XAIX.DE': { region: 'North America', sector: 'Information Technology' },
  'VVSM.DE': { region: 'North America', sector: 'Information Technology' },
  'SMH': { region: 'North America', sector: 'Information Technology' },
  'SMH.L': { region: 'North America', sector: 'Information Technology' },
  'XDWU.DE': { region: 'Global Market', sector: 'Diversified Equities' },
  'W1TB.DE': { region: 'Global Market', sector: 'Bonds & Fixed Income' },
  'SXR8.DE': { region: 'North America', sector: 'Diversified Equities' },
  'EXV1.DE': { region: 'Europe', sector: 'Financial Services' },
  'EXH4.DE': { region: 'Europe', sector: 'Financial Services' },
  'EUNL.DE': { region: 'Global Market', sector: 'Diversified Equities' },
  'EUDF.DE': { region: 'Europe', sector: 'Aerospace & Defense' },
  'EUDF': { region: 'Europe', sector: 'Aerospace & Defense' },
  'WDEF': { region: 'Europe', sector: 'Aerospace & Defense' },
  'ESIS.DE': { region: 'Global Market', sector: 'Diversified Equities' },
  'EGLN.L': { region: 'Global Market', sector: 'Commodities' },
  'CBE3.L': { region: 'Global Market', sector: 'Bonds & Fixed Income' },
  'BNXG.DE': { region: 'Global Market', sector: 'Information Technology' },
  'ASWC.DE': { region: 'Global Market', sector: 'Diversified Equities' },
  'BNKE.PA': { region: 'Europe', sector: 'Financial Services' },
  'LSMC.DE': { region: 'Global Market', sector: 'Diversified Equities' },
  'VWCE.DE': { region: 'Global Market', sector: 'Diversified Equities' },
  'IS3Q.DE': { region: 'Global Market', sector: 'Diversified Equities' },
  'VWCG.DE': { region: 'Europe', sector: 'Diversified Equities' },
  'VBTC': { region: 'Decentralized', sector: 'Crypto Assets' },
  'VETH': { region: 'Decentralized', sector: 'Crypto Assets' },
  'CRWV': { region: 'US', sector: 'Information Technology' },
  'CRDO': { region: 'US', sector: 'Information Technology' },
  'MTDR': { region: 'US', sector: 'Energy' },
  'VRT': { region: 'US', sector: 'Industrials' },
  'LLY': { region: 'US', sector: 'Healthcare' },
  'STRL': { region: 'US', sector: 'Industrials' },
  'CLS': { region: 'North America', sector: 'Information Technology' },
  'PANW': { region: 'US', sector: 'Information Technology' },
  'MA': { region: 'US', sector: 'Financial Services' },
  'V': { region: 'US', sector: 'Financial Services' },
  'CVX': { region: 'US', sector: 'Energy' },
  'CRM': { region: 'US', sector: 'Information Technology' },
  'EQIX': { region: 'US', sector: 'Real Estate' },
};

// Standardized Continent Mapping
export const normalizeContinent = (regionOrCountry: string): string => {
  if (!regionOrCountry) return 'Altele / Nedefinit';
  const r = regionOrCountry.trim();
  const lower = r.toLowerCase();

  // Physical Gold / Commodity vaults are global commodities, not UK country exposure
  if (lower.includes('gold vault') || lower.includes('bullion') || lower.includes('physical gold')) {
    return 'Diversificat / Global';
  }

  if (lower.includes('decentralized') || lower.includes('crypto')) {
    return 'Crypto / Decentralizat';
  }

  if (
    lower.includes('local liquidity') ||
    lower.includes('cash') ||
    lower.includes('lichidit')
  ) {
    return 'Lichidități';
  }

  if (
    lower.includes('romania') ||
    lower.includes('germany') ||
    lower.includes('france') ||
    lower.includes('united kingdom') ||
    /\buk\b/.test(lower) ||
    lower.includes('netherlands') ||
    lower.includes('switzerland') ||
    lower.includes('italy') ||
    lower.includes('spain') ||
    lower.includes('sweden') ||
    lower.includes('denmark') ||
    lower.includes('finland') ||
    lower.includes('norway') ||
    lower.includes('belgium') ||
    lower.includes('austria') ||
    lower.includes('ireland') ||
    lower.includes('poland') ||
    lower.includes('czech') ||
    lower.includes('greece') ||
    lower.includes('portugal') ||
    lower.includes('hungary') ||
    lower.includes('luxembourg') ||
    lower.includes('cyprus') ||
    lower.includes('iceland') ||
    lower.includes('slovakia') ||
    lower.includes('slovenia') ||
    lower.includes('croatia') ||
    lower.includes('bulgaria') ||
    lower.includes('malta') ||
    lower.includes('estonia') ||
    lower.includes('latvia') ||
    lower.includes('lithuania') ||
    lower.includes('jersey') ||
    lower.includes('guernsey') ||
    lower.includes('liechtenstein') ||
    lower.includes('european union') ||
    lower.includes('eurozone') ||
    lower.includes('russia') ||
    lower === 'europe'
  ) {
    return 'Europa';
  }

  if (
    lower.includes('united states') ||
    /\bus\b/.test(lower) ||
    /\busa\b/.test(lower) ||
    lower.includes('u.s.') ||
    lower.includes('canada') ||
    lower.includes('mexico') ||
    lower.includes('north america')
  ) {
    return 'America de Nord';
  }

  if (
    lower.includes('taiwan') ||
    lower.includes('japan') ||
    lower.includes('china') ||
    lower.includes('south korea') ||
    lower.includes('korea') ||
    lower.includes('india') ||
    lower.includes('singapore') ||
    lower.includes('hong kong') ||
    lower.includes('australia') ||
    lower.includes('new zealand') ||
    lower.includes('indonesia') ||
    lower.includes('thailand') ||
    lower.includes('malaysia') ||
    lower.includes('vietnam') ||
    lower.includes('philippines') ||
    lower.includes('asia') ||
    lower.includes('emerging markets')
  ) {
    return 'Asia & Emerging Markets';
  }

  if (
    lower.includes('brazil') ||
    lower.includes('argentina') ||
    lower.includes('chile') ||
    lower.includes('colombia') ||
    lower.includes('peru') ||
    lower.includes('south america') ||
    lower.includes('latin america')
  ) {
    return 'America de Sud';
  }

  if (
    lower.includes('south africa') ||
    lower.includes('israel') ||
    lower.includes('saudi') ||
    lower.includes('united arab emirates') ||
    /\buae\b/.test(lower) ||
    lower.includes('qatar') ||
    lower.includes('kuwait') ||
    lower.includes('turkey') ||
    lower.includes('türkiye') ||
    lower.includes('oman') ||
    lower.includes('bahrain') ||
    lower.includes('egypt') ||
    lower.includes('africa') ||
    lower.includes('middle east')
  ) {
    return 'Africa & Orientul Mijlociu';
  }

  return 'Diversificat / Global';
};

// Standardized Sector Mapping
export const normalizeSector = (sector: string): string => {
  if (!sector) return 'Altele / Neclasificat';
  const s = sector.trim();
  const lower = s.toLowerCase();

  // Aerospace & Defense (Separat de Industrie)
  if (
    lower.includes('defense') ||
    lower.includes('aerospace') ||
    lower.includes('apărare') ||
    lower.includes('aparare')
  ) {
    return 'Aerospace & Defense';
  }

  // Industrials (General - Industrie, Transport, Producție)
  if (
    lower.includes('industrial') ||
    lower.includes('industrie') ||
    lower.includes('machinery') ||
    lower.includes('transport')
  ) {
    return 'Industrials';
  }

  // Financials
  if (
    lower.includes('financial') ||
    lower.includes('bank') ||
    lower.includes('bancă') ||
    lower.includes('bancar')
  ) {
    return 'Financial Services';
  }

  // Technology
  if (
    lower.includes('technology') ||
    lower.includes('semis') ||
    lower.includes('semiconductor') ||
    /\bai\b/.test(lower) ||
    lower.includes('quantum') ||
    lower.includes('cloud') ||
    lower.includes('nextgen') ||
    lower.includes('nasdaq') ||
    lower === 'tech'
  ) {
    return 'Information Technology';
  }

  // Communication Services
  if (
    lower.includes('communication') ||
    lower.includes('comunicati') ||
    lower.includes('telecom')
  ) {
    return 'Communication Services';
  }

  // Energy
  if (
    lower.includes('energy') ||
    lower.includes('energie') ||
    lower.includes('uranium') ||
    lower.includes('nuclear')
  ) {
    return 'Energy';
  }

  // Utilities (KEPT SEPARATE from Bonds!)
  if (
    lower.includes('utilities') ||
    lower.includes('utilit') ||
    lower.includes('utilități')
  ) {
    return 'Utilities';
  }

  // Consumer Discretionary
  if (
    lower.includes('consumer disc') ||
    lower.includes('consumer discretion') ||
    lower.includes('discreționar')
  ) {
    return 'Consumer Discretionary';
  }

  // Consumer Staples
  if (
    lower.includes('consumer staple') ||
    lower.includes('staple') ||
    lower.includes('bunuri de consum')
  ) {
    return 'Consumer Staples';
  }

  // Healthcare
  if (
    lower.includes('healthcare') ||
    lower.includes('health') ||
    lower.includes('sănătate') ||
    lower.includes('sanatate')
  ) {
    return 'Healthcare';
  }

  // Real Estate
  if (lower.includes('real estate') || lower.includes('imobiliar')) {
    return 'Real Estate';
  }

  // Materials & Commodities (Comasat într-un singur sector)
  if (
    lower.includes('material') ||
    lower.includes('commodit') ||
    lower.includes('gold') ||
    lower.includes('aur')
  ) {
    return 'Materials & Commodities';
  }

  // Fixed Income & Bonds
  if (
    lower.includes('fixed income') ||
    lower.includes('bond') ||
    lower.includes('treasury') ||
    lower.includes('t-bill') ||
    lower.includes('sovereign') ||
    lower.includes('government') ||
    lower.includes('supranational') ||
    lower.includes('titluri de stat')
  ) {
    return 'Bonds & Fixed Income';
  }

  // Crypto
  if (lower.includes('crypto')) {
    return 'Crypto Assets';
  }

  // Cash & Liquidities (includes Money, Cash, Numerar, Lei, etc.)
  if (
    lower.includes('cash') ||
    lower.includes('liquidity') ||
    lower.includes('money') ||
    lower.includes('lei') ||
    lower.includes('numerar')
  ) {
    return 'Cash & Liquidities';
  }

  // Diversified Equities & Altele (includes Other, Others, Diversified, Small Cap, World, etc.)
  if (
    lower.includes('other') ||
    lower.includes('altele') ||
    lower.includes('diversified') ||
    lower.includes('small cap') ||
    lower.includes('world') ||
    lower.includes('s&p500') ||
    lower.includes('etf')
  ) {
    return 'Diversified Equities & Altele';
  }

  return 'Diversified Equities & Altele';
};

const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f43f5e', '#f59e0b', '#06b6d4', '#6366f1', '#ec4899', '#84cc16', '#64748b', '#0284c7', '#d97706'];

export const ExposureCharts: React.FC<ExposureChartsProps> = React.memo(({ assets, currency, cashBalance, convertValue }) => {
  const getAssetInfo = (asset: Asset) => {
    const cls = getAssetClassification(asset);
    const symbol = asset.symbol.toUpperCase();
    const normSymbol = normalizeYahooTicker(symbol);
    const match = ASSET_MAPPING[symbol] || 
                  ASSET_MAPPING[normSymbol] || 
                  ASSET_MAPPING[symbol + '.RO'] || 
                  ASSET_MAPPING[symbol + '.DE'] || 
                  ASSET_MAPPING[symbol + '.L'] ||
                  ASSET_MAPPING[normSymbol + '.RO'] ||
                  ASSET_MAPPING[normSymbol + '.DE'];

    // Explicit user-chosen asset.sector always takes highest priority so ExposureCharts stays 100% synchronized with Sector Targets
    if (asset.sector && asset.sector.trim()) {
      return {
        region: match?.region || cls.region,
        sector: asset.sector.trim()
      };
    }

    if (cls.sector !== 'Altele / Neclasificat') {
      return { region: cls.region, sector: cls.sector };
    }
    if (match) return match;

    if (asset.type === AssetType.CASH) return { region: 'Lichidități', sector: 'Cash & Liquidities' };
    if (asset.type === AssetType.BANK_DEPOSIT) return { region: 'Lichidități', sector: 'Cash & Liquidities' };
    if (asset.type === AssetType.CRYPTO) return { region: 'Decentralized', sector: 'Crypto Assets' };
    if (asset.type === AssetType.COMMODITY) return { region: 'Global Market', sector: 'Commodities' };
    if (asset.type === AssetType.BOND) {
       if (asset.currency === 'RON') return { region: 'Romania', sector: 'Bonds & Fixed Income' };
       return { region: 'Global Market', sector: 'Bonds & Fixed Income' };
    }
    return { region: asset.currency === 'RON' ? 'Romania' : 'Global Market', sector: 'Others' };
  };

  const { regionData, sectorData } = React.useMemo(() => {
    // Get custom ETF database if saved in localStorage
    let activeEtfDb = DEFAULT_ETF_DATABASE;
    try {
      const saved = localStorage.getItem('investai_etf_db_v2') || localStorage.getItem('investai_custom_etf_db');
      if (saved) {
        const parsed = JSON.parse(saved);
        activeEtfDb = { ...DEFAULT_ETF_DATABASE, ...parsed };
        Object.keys(DEFAULT_ETF_DATABASE).forEach(k => {
          const defaultEtf = DEFAULT_ETF_DATABASE[k];
          const savedEtf = parsed[k];
          const hasDummy = savedEtf && savedEtf.holdings &&
            (savedEtf.holdings.some((h: any) => h.symbol === 'AAPL' && h.weight === 10) ||
             (savedEtf.holdings.length === 2 && savedEtf.holdings[0]?.symbol === 'AAPL'));
          const isIncomplete = savedEtf && savedEtf.holdings && defaultEtf.holdings && (savedEtf.holdings.length < defaultEtf.holdings.length);
          const hasLegacySchema = savedEtf && (
            (savedEtf.sectors && savedEtf.sectors.some((s: any) => !s.name)) ||
            (savedEtf.countries && savedEtf.countries.some((c: any) => !c.name)) ||
            (savedEtf.holdings && savedEtf.holdings.some((h: any) => !h.symbol))
          );
          if (!savedEtf || hasDummy || isIncomplete || hasLegacySchema || (defaultEtf.lastUpdated && (!savedEtf.lastUpdated || defaultEtf.lastUpdated >= savedEtf.lastUpdated))) {
            activeEtfDb[k] = defaultEtf;
          }
        });
      }
    } catch (e) {
      console.error(e);
    }

    const rMap: Record<string, number> = {};
    const sMap: Record<string, number> = {};

    assets.forEach(asset => {
       const value = convertValue(asset.quantity * asset.currentPrice, asset.currency, currency);
       if (value <= 0.01) return;

       const symbol = asset.symbol.toUpperCase();

       // Check if this asset matches an ETF in the ETF database with explicit breakdowns
       const matchKey = findEtfDatabaseKey(symbol, activeEtfDb);

       const etfData: ETFCoverageData | undefined = matchKey ? activeEtfDb[matchKey] : undefined;

       // Sector calculation: keep BOND assets strictly in Bonds & Fixed Income (never mix bond issuers into equity sectors)
       if (asset.type === AssetType.BOND) {
         sMap['Bonds & Fixed Income'] = (sMap['Bonds & Fixed Income'] || 0) + value;
       } else if (etfData && etfData.sectors && etfData.sectors.length > 0) {
         const validSectors = etfData.sectors
           .map((sec: any) => ({ name: sec.name ?? sec.sector ?? '', weight: Number(sec.weight) || 0 }))
           .filter(sec => sec.weight > 0);
         const totalSecWeight = validSectors.reduce((sum, sec) => sum + sec.weight, 0);
         if (totalSecWeight > 0) {
           validSectors.forEach(sec => {
             const normSec = normalizeSector(sec.name);
             const secValue = (value * sec.weight) / totalSecWeight;
             sMap[normSec] = (sMap[normSec] || 0) + secValue;
           });
         } else {
           const info = getAssetInfo(asset);
           const normSec = normalizeSector(info.sector);
           sMap[normSec] = (sMap[normSec] || 0) + value;
         }
       } else {
         const info = getAssetInfo(asset);
         const normSec = normalizeSector(info.sector);
         sMap[normSec] = (sMap[normSec] || 0) + value;
       }

       // Region calculation: use normalized positive weights so each ETF totals exact 100% of its value
       if (etfData && etfData.countries && etfData.countries.length > 0) {
         const validCountries = etfData.countries
           .map((cntry: any) => ({ name: cntry.name ?? cntry.country ?? '', weight: Number(cntry.weight) || 0 }))
           .filter(cntry => cntry.weight > 0);
         const totalCntryWeight = validCountries.reduce((sum, cntry) => sum + cntry.weight, 0);
         if (totalCntryWeight > 0) {
           validCountries.forEach(cntry => {
             const normRegion = normalizeContinent(cntry.name);
             const cntryValue = (value * cntry.weight) / totalCntryWeight;
             rMap[normRegion] = (rMap[normRegion] || 0) + cntryValue;
           });
         } else {
           const info = getAssetInfo(asset);
           const normRegion = normalizeContinent(info.region);
           rMap[normRegion] = (rMap[normRegion] || 0) + value;
         }
       } else {
         const info = getAssetInfo(asset);
         const normRegion = normalizeContinent(info.region);
         rMap[normRegion] = (rMap[normRegion] || 0) + value;
       }
    });

    if (cashBalance > 0.01) {
        const normRegion = normalizeContinent('Local Liquidity');
        const normSec = normalizeSector('Cash');
        rMap[normRegion] = (rMap[normRegion] || 0) + cashBalance;
        sMap[normSec] = (sMap[normSec] || 0) + cashBalance;
    }

    const rArray = Object.keys(rMap).map(k => ({ name: k, value: rMap[k] })).sort((a,b) => b.value - a.value);
    const sArray = Object.keys(sMap).map(k => ({ name: k, value: sMap[k] })).sort((a,b) => b.value - a.value);

    return { regionData: rArray, sectorData: sArray };
  }, [assets, currency, cashBalance, convertValue]);

  const renderChart = (title: string, icon: React.ReactNode, data: any[]) => (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col h-[460px]">
      <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wide shrink-0">
        {icon} {title}
      </h3>
      <div className="flex-1 min-h-0 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
            <Pie 
              data={data} 
              cx="30%" 
              cy="50%" 
              innerRadius={45} 
              outerRadius={75} 
              paddingAngle={2} 
              dataKey="value"
              stroke="none"
              animationDuration={1000}
            >
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const dataItem = payload[0].payload;
                  const total = data.reduce((a: number, b: any) => a + b.value, 0);
                  const percent = total > 0 ? ((dataItem.value / total) * 100).toFixed(1) : "0.0";
                  return (
                    <div className="bg-slate-950/95 border border-slate-700 p-3 rounded-lg shadow-xl text-xs font-sans">
                      <div className="font-bold text-emerald-400 text-sm mb-1.5 flex items-center gap-1.5 border-b border-slate-800 pb-1">
                        <span>{dataItem.name}</span>
                      </div>
                      <div className="text-white font-mono flex items-center justify-between gap-4">
                        <span className="text-slate-400 font-sans">Valoare:</span>
                        <span className="font-bold text-white">{dataItem.value.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {currency}</span>
                      </div>
                      <div className="text-white font-mono flex items-center justify-between gap-4 mt-1">
                        <span className="text-slate-400 font-sans">Pondere:</span>
                        <span className="font-bold text-blue-400">{percent}%</span>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend 
               layout="vertical" 
               verticalAlign="middle" 
               align="right" 
               iconType="circle" 
               iconSize={7} 
               wrapperStyle={{ fontSize: '11px', paddingLeft: '8px', right: 0, maxWidth: '58%', maxHeight: '360px', overflowY: 'auto' }} 
               formatter={(value, entry: any) => {
                  const total = data.reduce((a,b)=>a+b.value,0);
                  const percent = total > 0 ? ((entry.payload.value / total) * 100).toFixed(1) : "0.0";
                  return (
                    <span className="text-slate-300 text-xs inline-flex items-center gap-1.5 py-0.5 leading-snug">
                      <span className="font-medium text-slate-200 truncate max-w-[130px]" title={value}>{value}</span>
                      <span className="text-slate-400 font-semibold text-[11px]">({percent}%)</span>
                    </span>
                  );
               }} 
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
       {renderChart('Expunere Geografică', <Globe size={16} className="text-blue-400"/>, regionData)}
       {renderChart('Expunere Sectorială', <Layers size={16} className="text-purple-400"/>, sectorData)}
    </div>
  );
});
