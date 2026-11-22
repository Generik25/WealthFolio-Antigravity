import React, { useState, useMemo, useEffect } from 'react';
import { 
  Layers, 
  PieChart as PieIcon, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle2, 
  DollarSign, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ArrowRight, 
  Search,
  Sliders,
  Maximize2,
  RefreshCw,
  Plus,
  Trash2,
  BarChart2,
  Filter,
  ExternalLink,
  Globe,
  FileText,
  Link as LinkIcon,
  Download,
  Upload,
  FileJson,
  Check,
  ShieldCheck,
  X,
  ArrowUpDown,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  Legend 
} from 'recharts';
import { Asset, AssetType, Portfolio } from '../types';
import { EUNL_FULL_HOLDINGS, EUNL_SECTOR_ALLOCATIONS, EUNL_COUNTRY_ALLOCATIONS } from '../data/eunlHoldings';
import { IS0E_FULL_HOLDINGS, IS0E_SECTOR_ALLOCATIONS, IS0E_COUNTRY_ALLOCATIONS } from '../data/is0eHoldings';
import { IUSN_FULL_HOLDINGS, IUSN_SECTOR_ALLOCATIONS, IUSN_COUNTRY_ALLOCATIONS } from '../data/iusnHoldings';
import { MEUD_FULL_HOLDINGS, MEUD_SECTOR_ALLOCATIONS, MEUD_COUNTRY_ALLOCATIONS } from '../data/meudHoldings';
import { IS3N_HOLDINGS, IS3N_SECTOR_ALLOCATIONS, IS3N_COUNTRY_ALLOCATIONS } from '../data/is3nHoldings';
import { EXH4_FULL_HOLDINGS, EXH4_SECTOR_ALLOCATIONS, EXH4_COUNTRY_ALLOCATIONS } from '../data/exh4Holdings';
import { SXR8_FULL_HOLDINGS, SXR8_SECTOR_ALLOCATIONS, SXR8_COUNTRY_ALLOCATIONS } from '../data/sxr8Holdings';
import { XAIX_FULL_HOLDINGS, XAIX_SECTOR_ALLOCATIONS, XAIX_COUNTRY_ALLOCATIONS } from '../data/xaixHoldings';
import { VVSM_FULL_HOLDINGS, VVSM_SECTOR_ALLOCATIONS, VVSM_COUNTRY_ALLOCATIONS } from '../data/vvsmHoldings';
import { TVBET_FULL_HOLDINGS, TVBET_SECTOR_ALLOCATIONS, TVBET_COUNTRY_ALLOCATIONS } from '../data/tvbetHoldings';
import { VWCE_FULL_HOLDINGS, VWCE_SECTOR_ALLOCATIONS, VWCE_COUNTRY_ALLOCATIONS } from '../data/vwceHoldings';
import { VWCG_FULL_HOLDINGS, VWCG_SECTOR_ALLOCATIONS, VWCG_COUNTRY_ALLOCATIONS } from '../data/vwcgHoldings';
import { VBTC_FULL_HOLDINGS, VBTC_SECTOR_ALLOCATIONS, VBTC_COUNTRY_ALLOCATIONS } from '../data/vbtcHoldings';
import { VETH_FULL_HOLDINGS, VETH_SECTOR_ALLOCATIONS, VETH_COUNTRY_ALLOCATIONS } from '../data/vethHoldings';
import { IS3Q_FULL_HOLDINGS, IS3Q_SECTOR_ALLOCATIONS, IS3Q_COUNTRY_ALLOCATIONS } from '../data/is3qHoldings';
import { BNKE_FULL_HOLDINGS, BNKE_SECTOR_ALLOCATIONS, BNKE_COUNTRY_ALLOCATIONS } from '../data/bnkeHoldings';
import { LSMC_FULL_HOLDINGS, LSMC_SECTOR_ALLOCATIONS, LSMC_COUNTRY_ALLOCATIONS } from '../data/lsmcHoldings';
import { ERNX_FULL_HOLDINGS, ERNX_SECTOR_ALLOCATIONS, ERNX_COUNTRY_ALLOCATIONS } from '../data/ernxHoldings';
import { EGLN_FULL_HOLDINGS, EGLN_SECTOR_ALLOCATIONS, EGLN_COUNTRY_ALLOCATIONS } from '../data/eglnHoldings';
import { XHYA_FULL_HOLDINGS, XHYA_SECTOR_ALLOCATIONS, XHYA_COUNTRY_ALLOCATIONS } from '../data/xhyaHoldings';
import { BB3M_FULL_HOLDINGS, BB3M_SECTOR_ALLOCATIONS, BB3M_COUNTRY_ALLOCATIONS } from '../data/bb3mHoldings';
import { C3M_FULL_HOLDINGS, C3M_SECTOR_ALLOCATIONS, C3M_COUNTRY_ALLOCATIONS } from '../data/c3mHoldings';
import { FLOA_FULL_HOLDINGS, FLOA_SECTOR_ALLOCATIONS, FLOA_COUNTRY_ALLOCATIONS } from '../data/floaHoldings';
import { IB01_FULL_HOLDINGS, IB01_SECTOR_ALLOCATIONS, IB01_COUNTRY_ALLOCATIONS } from '../data/ib01Holdings';
import { IBTA_FULL_HOLDINGS, IBTA_SECTOR_ALLOCATIONS, IBTA_COUNTRY_ALLOCATIONS } from '../data/ibtaHoldings';

interface ETFOverlapAnalysisProps {
  assets: Asset[];
  portfolios: Portfolio[];
  activePortfolioId: string;
  currency: string;
  convertValue: (amount: number, from: string, to: string) => number;
}

export interface ETFCoverageData {
  symbol: string;
  name: string;
  ter: number; // e.g. 0.55 for 0.55%
  category: string;
  isin?: string;
  officialSourceUrl?: string; // e.g. https://www.vaneck.com/ucits/en/dfns/
  lastUpdated?: string;
  sectors?: { name: string; weight: number }[];
  countries?: { name: string; weight: number }[];
  holdings: { symbol: string; name: string; weight: number }[]; // weight e.g. 6.8 = 6.8%
}

// Utility function to normalize Yahoo Finance Tickers cleanly
// Maps 'META.US', 'META', 'META-US' -> 'META'
// Maps 'TLV.RO', 'TLV' -> 'TLV'
// Maps 'SXR8.DE', 'SXR8' -> 'SXR8'
export const normalizeYahooTicker = (sym: string): string => {
  if (!sym) return '';
  let clean = sym.toUpperCase().trim();

  // Crypto pairs
  if (clean === 'BTC-USD' || clean === 'BTCUSD') return 'BTC';
  if (clean === 'ETH-USD' || clean === 'ETHUSD') return 'ETH';

  // Strip exchange suffix if present (e.g., .US, .RO, .DE, .L, .PA, .SW, .MC)
  if (clean.includes('.')) {
    const parts = clean.split('.');
    const lastPart = parts[parts.length - 1];
    const exchangeSuffixes = [
      'US', 'RO', 'DE', 'L', 'PA', 'SW', 'MC', 'AS', 'MI', 'TO', 
      'WA', 'NV', 'F', 'BE', 'SA', 'IS', 'AX', 'SG', 'HK', 'KS'
    ];
    if (exchangeSuffixes.includes(lastPart)) {
      clean = parts.slice(0, parts.length - 1).join('.');
    }
  }

  // Strip suffix separator like META-US or META_US
  clean = clean.replace(/[-_.](US|RO|DE|L|PA|SW|MC)$/i, '');

  return clean;
};

// Utility function to format purely numeric tickers (e.g. '1530' -> '1530.HK', '8341' -> '8341.T')
export const formatNumericTicker = (sym?: string, location?: string, name?: string): string => {
  if (!sym) return '';
  const clean = sym.trim().toUpperCase();

  // If not purely numeric digits, return standard normalized ticker
  if (!/^\d+$/.test(clean)) {
    return normalizeYahooTicker(clean);
  }

  // Check global company aliases dictionary first
  if (GLOBAL_COMPANY_ALIASES[clean]) {
    return GLOBAL_COMPANY_ALIASES[clean].symbol;
  }

  const loc = (location || '').toUpperCase().trim();

  if (['JAPAN', 'JP', 'TOKYO', 'TSE'].includes(loc)) {
    return `${clean}.T`;
  }
  if (['HONG KONG', 'CHINA', 'HK', 'CN', 'HKEX'].includes(loc)) {
    return `${clean}.HK`;
  }
  if (['TAIWAN', 'TW', 'TAIPEI', 'TWSE'].includes(loc)) {
    return `${clean}.TW`;
  }
  if (['SOUTH KOREA', 'KOREA', 'KR', 'REPUBLIC OF KOREA', 'KRX'].includes(loc)) {
    return `${clean.padStart(6, '0')}.KS`;
  }
  if (['SAUDI ARABIA', 'SA', 'KSA', 'TADAWUL'].includes(loc)) {
    return `${clean}.SR`;
  }
  if (['INDIA', 'IN', 'NSE', 'BSE'].includes(loc)) {
    return `${clean}.NS`;
  }

  // Fallbacks by digit length
  if (clean.length === 6 && clean.startsWith('0')) {
    return `${clean}.KS`;
  }
  if (clean.length === 4) {
    return `${clean}.HK`;
  }

  return clean;
};

// Helper to normalize company names for fallback matching when tickers/ISINs are absent
export const normalizeCompanyName = (name?: string): string => {
  if (!name) return '';
  return name
    .toUpperCase()
    .replace(/\b(INC|INCORPORATED|CORP|CORPORATION|PLC|S\.A\.|SA|AG|LTD|LIMITED|N\.V\.|NV|CLASS A|CLASS B|ORD|SHS|COMMON STOCK)\b/gi, '')
    .replace(/[^A-Z0-9]/g, '')
    .trim();
};

// Global company aliases dictionary mapping dual-listed ADRs, regional tickers, and ISINs to canonical entity keys
export const GLOBAL_COMPANY_ALIASES: Record<string, { key: string; symbol: string; name: string }> = {
  // Taiwan Semiconductor (TSMC)
  'TSM': { key: 'TSMC', symbol: 'TSM', name: 'Taiwan Semiconductor Manufacturing Co' },
  '2330': { key: 'TSMC', symbol: 'TSM', name: 'Taiwan Semiconductor Manufacturing Co' },
  '2330.TW': { key: 'TSMC', symbol: 'TSM', name: 'Taiwan Semiconductor Manufacturing Co' },
  '2330.TT': { key: 'TSMC', symbol: 'TSM', name: 'Taiwan Semiconductor Manufacturing Co' },
  'US8740391003': { key: 'TSMC', symbol: 'TSM', name: 'Taiwan Semiconductor Manufacturing Co' },
  'TW0002330008': { key: 'TSMC', symbol: 'TSM', name: 'Taiwan Semiconductor Manufacturing Co' },

  // ASML
  'ASML': { key: 'ASML', symbol: 'ASML', name: 'ASML Holding NV' },
  'ASML.AS': { key: 'ASML', symbol: 'ASML', name: 'ASML Holding NV' },
  '5301': { key: 'ASML', symbol: 'ASML', name: 'ASML Holding NV' },
  'NL0010273215': { key: 'ASML', symbol: 'ASML', name: 'ASML Holding NV' },
  'US0021241008': { key: 'ASML', symbol: 'ASML', name: 'ASML Holding NV' },

  // Alibaba
  'BABA': { key: 'BABA', symbol: 'BABA', name: 'Alibaba Group Holding Ltd' },
  '9988': { key: 'BABA', symbol: 'BABA', name: 'Alibaba Group Holding Ltd' },
  '9988.HK': { key: 'BABA', symbol: 'BABA', name: 'Alibaba Group Holding Ltd' },
  'US01609W1027': { key: 'BABA', symbol: 'BABA', name: 'Alibaba Group Holding Ltd' },
  'KYG017191142': { key: 'BABA', symbol: 'BABA', name: 'Alibaba Group Holding Ltd' },

  // Tencent
  'TCEHY': { key: 'TENCENT', symbol: 'TCEHY', name: 'Tencent Holdings Ltd' },
  '0700': { key: 'TENCENT', symbol: 'TCEHY', name: 'Tencent Holdings Ltd' },
  '700': { key: 'TENCENT', symbol: 'TCEHY', name: 'Tencent Holdings Ltd' },
  '700.HK': { key: 'TENCENT', symbol: 'TCEHY', name: 'Tencent Holdings Ltd' },
  'KYG875721634': { key: 'TENCENT', symbol: 'TCEHY', name: 'Tencent Holdings Ltd' },

  // Shell
  'SHEL': { key: 'SHELL', symbol: 'SHEL', name: 'Shell PLC' },
  'SHEL.L': { key: 'SHELL', symbol: 'SHEL', name: 'Shell PLC' },
  'SHEL.AS': { key: 'SHELL', symbol: 'SHEL', name: 'Shell PLC' },
  'RDSA': { key: 'SHELL', symbol: 'SHEL', name: 'Shell PLC' },
  'RDSB': { key: 'SHELL', symbol: 'SHEL', name: 'Shell PLC' },
  'GB00BP6MXD84': { key: 'SHELL', symbol: 'SHEL', name: 'Shell PLC' },

  // Novo Nordisk
  'NVO': { key: 'NOVO_NORDISK', symbol: 'NVO', name: 'Novo Nordisk A/S' },
  'NOVO': { key: 'NOVO_NORDISK', symbol: 'NVO', name: 'Novo Nordisk A/S' },
  'NOVOB': { key: 'NOVO_NORDISK', symbol: 'NVO', name: 'Novo Nordisk A/S' },
  'NOVO-B': { key: 'NOVO_NORDISK', symbol: 'NVO', name: 'Novo Nordisk A/S' },
  'NOVO B': { key: 'NOVO_NORDISK', symbol: 'NVO', name: 'Novo Nordisk A/S' },
  'NOVO.CO': { key: 'NOVO_NORDISK', symbol: 'NVO', name: 'Novo Nordisk A/S' },
  'NOVOB.CO': { key: 'NOVO_NORDISK', symbol: 'NVO', name: 'Novo Nordisk A/S' },
  'NOVO-B.CO': { key: 'NOVO_NORDISK', symbol: 'NVO', name: 'Novo Nordisk A/S' },
  'DK0060534915': { key: 'NOVO_NORDISK', symbol: 'NVO', name: 'Novo Nordisk A/S' },
  'US6701002056': { key: 'NOVO_NORDISK', symbol: 'NVO', name: 'Novo Nordisk A/S' },

  // Toyota Motor
  'TM': { key: 'TOYOTA', symbol: 'TM', name: 'Toyota Motor Corp' },
  '7203': { key: 'TOYOTA', symbol: 'TM', name: 'Toyota Motor Corp' },
  '7203.T': { key: 'TOYOTA', symbol: 'TM', name: 'Toyota Motor Corp' },
  'JP3633400001': { key: 'TOYOTA', symbol: 'TM', name: 'Toyota Motor Corp' },

  // Sony
  'SONY': { key: 'SONY', symbol: 'SONY', name: 'Sony Group Corp' },
  '6758': { key: 'SONY', symbol: 'SONY', name: 'Sony Group Corp' },
  '6758.T': { key: 'SONY', symbol: 'SONY', name: 'Sony Group Corp' },
  'JP3435000009': { key: 'SONY', symbol: 'SONY', name: 'Sony Group Corp' },

  // Samsung Electronics
  'SSNLF': { key: 'SAMSUNG_ELEC', symbol: 'SSNLF', name: 'Samsung Electronics Co Ltd' },
  '005930': { key: 'SAMSUNG_ELEC', symbol: 'SSNLF', name: 'Samsung Electronics Co Ltd' },
  '5930': { key: 'SAMSUNG_ELEC', symbol: 'SSNLF', name: 'Samsung Electronics Co Ltd' },
  '005930.KS': { key: 'SAMSUNG_ELEC', symbol: 'SSNLF', name: 'Samsung Electronics Co Ltd' },
  'KR7005930003': { key: 'SAMSUNG_ELEC', symbol: 'SSNLF', name: 'Samsung Electronics Co Ltd' },

  // SK Hynix
  '000660': { key: 'SK_HYNIX', symbol: '000660.KS', name: 'SK Hynix Inc' },
  '660': { key: 'SK_HYNIX', symbol: '000660.KS', name: 'SK Hynix Inc' },
  '000660.KS': { key: 'SK_HYNIX', symbol: '000660.KS', name: 'SK Hynix Inc' },
  'KR7000660001': { key: 'SK_HYNIX', symbol: '000660.KS', name: 'SK Hynix Inc' },

  // 3SBio Inc
  '1530': { key: '3SBIO', symbol: '1530.HK', name: '3SBio Inc' },
  '1530.HK': { key: '3SBIO', symbol: '1530.HK', name: '3SBio Inc' },

  // 77 Bank Ltd
  '8341': { key: '77_BANK', symbol: '8341.T', name: 'The 77 Bank Ltd' },
  '8341.T': { key: '77_BANK', symbol: '8341.T', name: 'The 77 Bank Ltd' },

  // Baidu
  'BIDU': { key: 'BAIDU', symbol: 'BIDU', name: 'Baidu Inc' },
  '9888': { key: 'BAIDU', symbol: 'BIDU', name: 'Baidu Inc' },
  '9888.HK': { key: 'BAIDU', symbol: 'BIDU', name: 'Baidu Inc' },

  // JD.com
  'JD': { key: 'JD_COM', symbol: 'JD', name: 'JD.com Inc' },
  '9618': { key: 'JD_COM', symbol: 'JD', name: 'JD.com Inc' },
  '9618.HK': { key: 'JD_COM', symbol: 'JD', name: 'JD.com Inc' },

  // Xiaomi
  'XIACY': { key: 'XIAOMI', symbol: '1810.HK', name: 'Xiaomi Corp' },
  '1810': { key: 'XIAOMI', symbol: '1810.HK', name: 'Xiaomi Corp' },
  '1810.HK': { key: 'XIAOMI', symbol: '1810.HK', name: 'Xiaomi Corp' },

  // Meituan
  'MPNGF': { key: 'MEITUAN', symbol: '3690.HK', name: 'Meituan' },
  '3690': { key: 'MEITUAN', symbol: '3690.HK', name: 'Meituan' },
  '3690.HK': { key: 'MEITUAN', symbol: '3690.HK', name: 'Meituan' },

  // BYD
  'BYDDY': { key: 'BYD', symbol: '1211.HK', name: 'BYD Co Ltd' },
  '1211': { key: 'BYD', symbol: '1211.HK', name: 'BYD Co Ltd' },
  '1211.HK': { key: 'BYD', symbol: '1211.HK', name: 'BYD Co Ltd' },

  // China Construction Bank
  'CICHY': { key: 'CCB', symbol: '0939.HK', name: 'China Construction Bank Corp' },
  '939': { key: 'CCB', symbol: '0939.HK', name: 'China Construction Bank Corp' },
  '0939': { key: 'CCB', symbol: '0939.HK', name: 'China Construction Bank Corp' },
  '0939.HK': { key: 'CCB', symbol: '0939.HK', name: 'China Construction Bank Corp' },

  // ICBC
  'IDCBY': { key: 'ICBC', symbol: '1398.HK', name: 'Industrial and Commercial Bank of China' },
  '1398': { key: 'ICBC', symbol: '1398.HK', name: 'Industrial and Commercial Bank of China' },
  '1398.HK': { key: 'ICBC', symbol: '1398.HK', name: 'Industrial and Commercial Bank of China' },

  // SAP
  'SAP': { key: 'SAP', symbol: 'SAP', name: 'SAP SE' },
  'SAP.DE': { key: 'SAP', symbol: 'SAP', name: 'SAP SE' },
  'DE0007164600': { key: 'SAP', symbol: 'SAP', name: 'SAP SE' },

  // AstraZeneca
  'AZN': { key: 'ASTRAZENECA', symbol: 'AZN', name: 'AstraZeneca PLC' },
  'AZN.L': { key: 'ASTRAZENECA', symbol: 'AZN', name: 'AstraZeneca PLC' },
  'GB0009895292': { key: 'ASTRAZENECA', symbol: 'AZN', name: 'AstraZeneca PLC' },

  // Novartis
  'NVS': { key: 'NOVARTIS', symbol: 'NVS', name: 'Novartis AG' },
  'NOVN.SW': { key: 'NOVARTIS', symbol: 'NVS', name: 'Novartis AG' },
  'CH0012005267': { key: 'NOVARTIS', symbol: 'NVS', name: 'Novartis AG' },

  // Roche
  'RHHBY': { key: 'ROCHE', symbol: 'RHHBY', name: 'Roche Holding AG' },
  'ROG.SW': { key: 'ROCHE', symbol: 'RHHBY', name: 'Roche Holding AG' },
  'CH0012032048': { key: 'ROCHE', symbol: 'RHHBY', name: 'Roche Holding AG' },

  // Sanofi
  'SNY': { key: 'SANOFI', symbol: 'SNY', name: 'Sanofi SA' },
  'SAN.PA': { key: 'SANOFI', symbol: 'SNY', name: 'Sanofi SA' },
  'FR0000120578': { key: 'SANOFI', symbol: 'SNY', name: 'Sanofi SA' },

  // LVMH
  'LVMUY': { key: 'LVMH', symbol: 'MC.PA', name: 'LVMH Moët Hennessy Louis Vuitton' },
  'MC.PA': { key: 'LVMH', symbol: 'MC.PA', name: 'LVMH Moët Hennessy Louis Vuitton' },
  'FR0000121014': { key: 'LVMH', symbol: 'MC.PA', name: 'LVMH Moët Hennessy Louis Vuitton' },

  // TotalEnergies
  'TTE': { key: 'TOTALENERGIES', symbol: 'TTE', name: 'TotalEnergies SE' },
  'TTE.PA': { key: 'TOTALENERGIES', symbol: 'TTE', name: 'TotalEnergies SE' },
  'FR0000120271': { key: 'TOTALENERGIES', symbol: 'TTE', name: 'TotalEnergies SE' },

  // BHP Group
  'BHP': { key: 'BHP', symbol: 'BHP', name: 'BHP Group Ltd' },
  'BHP.AX': { key: 'BHP', symbol: 'BHP', name: 'BHP Group Ltd' },
  'BHP.L': { key: 'BHP', symbol: 'BHP', name: 'BHP Group Ltd' },
  'AU000000BHP4': { key: 'BHP', symbol: 'BHP', name: 'BHP Group Ltd' },

  // Rio Tinto
  'RIO': { key: 'RIO_TINTO', symbol: 'RIO', name: 'Rio Tinto PLC' },
  'RIO.L': { key: 'RIO_TINTO', symbol: 'RIO', name: 'Rio Tinto PLC' },
  'RIO.AX': { key: 'RIO_TINTO', symbol: 'RIO', name: 'Rio Tinto PLC' },
  'GB0007188757': { key: 'RIO_TINTO', symbol: 'RIO', name: 'Rio Tinto PLC' },
};

// Uniquely identifies a company across global exchanges and local markets (e.g. BVB Romania vs US/EU)
// Prevents collisions like Transelectrica (TEL.RO) vs TE Connectivity (TEL) or Electrica (EL.RO) vs Estée Lauder (EL)
export const getCompanyUniqueKey = (item: {
  symbol?: string;
  name?: string;
  isin?: string;
  location?: string;
  currency?: string;
}): string => {
  if (!item) return '';

  const rawSymbol = (item.symbol || '').toUpperCase().trim();
  const name = (item.name || '').toUpperCase().trim();
  const location = (item.location || '').toUpperCase().trim();
  const currency = (item.currency || '').toUpperCase().trim();
  const isin = (item.isin || '').toUpperCase().trim();

  // 0. Check ISIN first against global alias dictionary
  if (isin && GLOBAL_COMPANY_ALIASES[isin]) {
    return GLOBAL_COMPANY_ALIASES[isin].key;
  }

  // 1. Check exact Symbol / baseSymbol in global alias dictionary
  const baseSymbol = normalizeYahooTicker(rawSymbol);
  if (rawSymbol && GLOBAL_COMPANY_ALIASES[rawSymbol]) {
    return GLOBAL_COMPANY_ALIASES[rawSymbol].key;
  }
  if (baseSymbol && GLOBAL_COMPANY_ALIASES[baseSymbol]) {
    return GLOBAL_COMPANY_ALIASES[baseSymbol].key;
  }

  // 2. Name-based pattern matching for dual-listed multinationals
  if (name) {
    if (name.includes('TAIWAN SEMICONDUCTOR') || name.includes('TSMC')) return 'TSMC';
    if (name.includes('ASML HOLDING') || name.includes('ASML NV')) return 'ASML';
    if (name.includes('ALIBABA GROUP') || name.includes('ALIBABA SPON')) return 'BABA';
    if (name.includes('TENCENT HOLDINGS') || name.includes('TENCENT TECH')) return 'TENCENT';
    if (name.includes('ROYAL DUTCH SHELL') || name.includes('SHELL PLC') || name.includes('SHELL ORD')) return 'SHELL';
    if (name.includes('NOVO NORDISK')) return 'NOVO_NORDISK';
    if (name.includes('TOYOTA MOTOR')) return 'TOYOTA';
    if (name.includes('SONY GROUP') || name.includes('SONY CORP')) return 'SONY';
    if (name.includes('SAMSUNG ELECTRONICS')) return 'SAMSUNG_ELEC';
    if (name.includes('SK HYNIX')) return 'SK_HYNIX';
    if (name.includes('ASTRAZENECA')) return 'ASTRAZENECA';
    if (name.includes('NOVARTIS')) return 'NOVARTIS';
    if (name.includes('ROCHE HOLDING') || name.includes('ROCHE HLDG')) return 'ROCHE';
    if (name.includes('SANOFI')) return 'SANOFI';
    if (name.includes('MOET HENNESSY') || name.includes('LVMH')) return 'LVMH';
    if (name.includes('TOTALENERGIES') || name.includes('TOTAL SA')) return 'TOTALENERGIES';
    if (name.includes('RIO TINTO')) return 'RIO_TINTO';
  }

  // List of Bucharest Stock Exchange (BVB) symbols
  const bvbSymbols = [
    'TLV', 'SNP', 'SNG', 'H2O', 'BRD', 'TGN', 'EL', 'DIGI', 'M', 'SNN',
    'TEL', 'PE', 'ONE', 'FP', 'AQ', 'CFT', 'TTS', 'ATB', 'TRP', 'SFG',
    'WINE', 'BVB', 'ALR', 'ROCE', 'CMCM', 'SOCP', 'RRC', 'BIO', 'COTE'
  ];

  const isRomanianContext =
    rawSymbol.endsWith('.RO') ||
    currency === 'RON' ||
    location === 'ROMANIA' ||
    location === 'RO' ||
    isin.startsWith('RO') ||
    name.includes('TRANSELECTRICA') ||
    name.includes('BANCA TRANSILVANIA') ||
    name.includes('OMV PETROM') ||
    name.includes('ROMGAZ') ||
    name.includes('HIDROELECTRICA') ||
    name.includes('ELECTRICA') ||
    name.includes('MEDLIFE') ||
    name.includes('NUCLEARELECTRICA') ||
    name.includes('TRANSGAZ') ||
    name.includes('ONE UNITED') ||
    name.includes('FONDUL PROPRIETATEA') ||
    name.includes('TERAPLAST') ||
    name.includes('AQUILA') ||
    name.includes('SPHERA') ||
    name.includes('TRANSPORT TRADE SERVICES');

  // 3. Romanian BVB Market Context
  if (isRomanianContext || (bvbSymbols.includes(baseSymbol) && (currency === 'RON' || rawSymbol.endsWith('.RO') || location === 'ROMANIA'))) {
    return `BVB:${baseSymbol}`;
  }

  // 4. Standardized Symbol Matching (e.g., AAPL, MSFT, NVDA, TSLA, 360ONE, 000720.KS, etc.)
  if (baseSymbol && baseSymbol.length > 0) {
    return baseSymbol;
  }

  // 5. Fallback to ISIN if symbol is absent
  if (isin && isin.length >= 10 && !isin.startsWith('CASH')) {
    return `ISIN:${isin}`;
  }

  // 6. Fallback to Normalized Name if symbol & ISIN are absent
  if (name) {
    const normName = normalizeCompanyName(name);
    if (normName) return `NAME:${normName}`;
  }

  return rawSymbol || 'UNKNOWN';
};

// Preset database of popular ETFs and their top holdings + TER (Yahoo Finance standardized tickers + Official ISINs & JustETF links)
const VANECK_DEFENSE_DATA: ETFCoverageData = {
  symbol: 'DFEN.DE',
  name: 'VanEck Defense UCITS ETF',
  isin: 'IE000YYE6WK5',
  ter: 0.55,
  category: 'Sector Defense & Aerospace',
  officialSourceUrl: 'https://www.vaneck.com/ucits/en/dfns/',
  lastUpdated: '2026-07-24',
  sectors: [
    { name: 'Industrials', weight: 88.1 },
    { name: 'Information Technology', weight: 11.9 }
  ],
  countries: [
    { name: 'United States', weight: 50.25 },
    { name: 'South Korea', weight: 9.70 },
    { name: 'France', weight: 9.09 },
    { name: 'Israel', weight: 7.00 },
    { name: 'Italy', weight: 6.05 },
    { name: 'Sweden', weight: 4.86 },
    { name: 'Singapore', weight: 3.42 },
    { name: 'Norway', weight: 3.25 },
    { name: 'Other/Cash', weight: 6.38 }
  ],
  holdings: [
    { symbol: 'RTX', name: 'RTX Corp', weight: 9.67 },
    { symbol: 'PLTR', name: 'Palantir Technologies Inc', weight: 7.61 },
    { symbol: 'HO', name: 'Thales SA', weight: 6.95 },
    { symbol: 'LDO', name: 'Leonardo SpA', weight: 6.42 },
    { symbol: 'ESLT', name: 'Elbit Systems Ltd', weight: 5.95 },
    { symbol: 'CW', name: 'Curtiss-Wright Corp', weight: 5.84 },
    { symbol: 'SAAB', name: 'Saab AB', weight: 5.43 },
    { symbol: '012450', name: 'Hanwha Aerospace Co Ltd', weight: 5.24 },
    { symbol: 'STE', name: 'Singapore Technologies Engineering Ltd', weight: 3.35 },
    { symbol: 'KOG', name: 'Kongsberg Gruppen ASA', weight: 3.13 },
    { symbol: 'LDOS', name: 'Leidos Holdings Inc', weight: 3.01 },
    { symbol: 'CACI', name: 'CACI International Inc', weight: 2.15 },
    { symbol: 'MOG-A', name: 'Moog Inc', weight: 2.05 },
    { symbol: 'HII', name: 'Huntington Ingalls Industries Inc', weight: 1.94 },
    { symbol: 'KTOS', name: 'Kratos Defense & Security Solutions Inc', weight: 1.90 },
    { symbol: 'BAB', name: 'Babcock International Group PLC', weight: 1.84 },
    { symbol: '064350', name: 'Hyundai Rotem Co Ltd', weight: 1.83 },
    { symbol: '047810', name: 'Korea Aerospace Industries Ltd', weight: 1.63 },
    { symbol: 'BAH', name: 'Booz Allen Hamilton Holding Corp', weight: 1.58 },
    { symbol: 'KRMN', name: 'Karman Holdings Inc', weight: 1.56 },
    { symbol: 'AM', name: 'Dassault Aviation SA', weight: 1.55 },
    { symbol: 'HAG', name: 'Hensoldt AG', weight: 1.46 },
    { symbol: 'PL', name: 'Planet Labs PBC', weight: 1.42 },
    { symbol: 'NXSN', name: 'Next Vision Stabilized Systems Ltd', weight: 1.27 },
    { symbol: 'AVAV', name: 'AeroVironment Inc', weight: 1.23 },
    { symbol: 'MRCY', name: 'Mercury Systems Inc', weight: 1.06 },
    { symbol: 'ONDS', name: 'Ondas Holdings Inc', weight: 1.06 },
    { symbol: 'R3NK', name: 'Renk Group AG', weight: 1.03 },
    { symbol: 'DRS', name: 'Leonardo DRS Inc', weight: 0.99 },
    { symbol: 'SAIC', name: 'Science Applications International Corp', weight: 0.98 },
    { symbol: '272210', name: 'Hanwha Systems Co Ltd', weight: 0.94 },
    { symbol: 'PSN', name: 'Parsons Corp', weight: 0.89 },
    { symbol: 'LASR', name: 'nLIGHT Inc', weight: 0.87 },
    { symbol: 'KBR', name: 'KBR Inc', weight: 0.82 },
    { symbol: 'CSG', name: 'CSG NV', weight: 0.71 },
    { symbol: 'QQ', name: 'QinetiQ Group PLC', weight: 0.63 },
    { symbol: 'EXENS', name: 'Exosens SAS', weight: 0.62 },
    { symbol: 'TKMS', name: 'TKMS AG & Co KGaA', weight: 0.61 },
    { symbol: 'AMTM', name: 'Amentum Holdings Inc', weight: 0.60 },
    { symbol: 'OSIS', name: 'OSI Systems Inc', weight: 0.58 },
    { symbol: 'VEC', name: 'Vectrus Inc', weight: 0.50 },
    { symbol: 'VOYG', name: 'Voyager Technologies Inc', weight: 0.31 },
    { symbol: 'BBAI', name: 'BigBear.ai Holdings Inc', weight: 0.30 },
    { symbol: 'RCAT', name: 'Red Cat Holdings Inc', weight: 0.26 },
    { symbol: 'DRO', name: 'DroneShield Ltd', weight: 0.24 }
  ]
};

const WISDOMTREE_DEFENSE_DATA: ETFCoverageData = {
  symbol: 'EUDF.DE',
  name: 'WisdomTree Europe Defence UCITS ETF',
  isin: 'IE0002Y8CX98',
  ter: 0.40,
  category: 'Sector Defense & Aerospace (Europe)',
  officialSourceUrl: 'https://www.wisdomtree.eu/en-gb/etfs/equities/wdef',
  lastUpdated: '2026-07-21',
  sectors: [
    { name: 'Industrials', weight: 97.51 },
    { name: 'Information Technology', weight: 1.86 },
    { name: 'Communication Services', weight: 0.63 }
  ],
  countries: [
    { name: 'France', weight: 36.65 },
    { name: 'United Kingdom', weight: 25.97 },
    { name: 'Germany', weight: 15.67 },
    { name: 'Italy', weight: 7.16 },
    { name: 'Sweden', weight: 6.54 },
    { name: 'Norway', weight: 4.57 },
    { name: 'Spain', weight: 1.34 },
    { name: 'Czech Republic', weight: 0.75 },
    { name: 'Cyprus', weight: 0.57 },
    { name: 'Finland', weight: 0.30 }
  ],
  holdings: [
    { symbol: 'BA', name: 'BAE Systems PLC', weight: 12.66 },
    { symbol: 'HO', name: 'Thales SA', weight: 12.03 },
    { symbol: 'RHM', name: 'Rheinmetall AG', weight: 10.37 },
    { symbol: 'AIR', name: 'Airbus SE', weight: 8.47 },
    { symbol: 'RR', name: 'Rolls-Royce Holdings PLC', weight: 8.46 },
    { symbol: 'SAF', name: 'Safran SA', weight: 8.34 },
    { symbol: 'SAAB', name: 'Saab AB', weight: 6.98 },
    { symbol: 'LDO', name: 'Leonardo SpA', weight: 6.82 },
    { symbol: 'AM', name: 'Dassault Aviation SA', weight: 4.85 },
    { symbol: 'KOG', name: 'Kongsberg Gruppen ASA', weight: 3.79 },
    { symbol: 'HAG', name: 'Hensoldt AG', weight: 2.31 },
    { symbol: 'BAB', name: 'Babcock International Group PLC', weight: 1.56 },
    { symbol: 'TKMS', name: 'TKMS AG & Co KGaA', weight: 1.41 },
    { symbol: 'IDR', name: 'Indra Sistemas SA', weight: 1.39 },
    { symbol: 'R3NK', name: 'Renk Group AG', weight: 1.16 },
    { symbol: 'MRO', name: 'Melrose Industries PLC', weight: 1.12 },
    { symbol: 'EXENS', name: 'Exosens SAS', weight: 0.79 },
    { symbol: 'FCT', name: 'Fincantieri SpA', weight: 0.74 },
    { symbol: 'QQ', name: 'QinetiQ Group PLC', weight: 0.69 },
    { symbol: 'CSG', name: 'CSG NV', weight: 0.63 },
    { symbol: 'THEON', name: 'Theon International PLC', weight: 0.62 },
    { symbol: 'EXA', name: 'Exail Technologies SA', weight: 0.61 },
    { symbol: 'SRP', name: 'Serco Group PLC', weight: 0.45 },
    { symbol: 'CHG', name: 'Chemring Group PLC', weight: 0.44 },
    { symbol: 'KOGM', name: 'Kongsberg Maritime AS', weight: 0.36 },
    { symbol: 'OHB', name: 'OHB SE', weight: 0.31 },
    { symbol: 'ETL', name: 'Eutelsat Communications SA', weight: 0.26 },
    { symbol: 'GDWN', name: 'Goodwin PLC', weight: 0.25 },
    { symbol: 'VINC', name: 'Vincorion SE', weight: 0.25 },
    { symbol: 'BITTI', name: 'Bittium Oyj', weight: 0.25 },
    { symbol: 'IVSO', name: 'INVISIO AB', weight: 0.22 },
    { symbol: 'MILDEF', name: 'MilDef Group AB', weight: 0.21 },
    { symbol: 'SESG', name: 'SES SA', weight: 0.19 },
    { symbol: 'COLT', name: 'Colt CZ Group SE', weight: 0.18 },
    { symbol: 'CHRT', name: 'Cohort PLC', weight: 0.17 },
    { symbol: 'KIT', name: 'Kitron ASA', weight: 0.14 },
    { symbol: 'AVON', name: 'Avon Protection PLC', weight: 0.14 },
    { symbol: 'AVIO', name: 'Avio SpA', weight: 0.12 },
    { symbol: 'OVZON', name: 'Ovzon AB', weight: 0.11 },
    { symbol: 'SNR', name: 'Senior PLC', weight: 0.11 },
    { symbol: 'CICN', name: 'Cicor Technologies Ltd', weight: 0.05 }
  ]
};

export const GERMAN_ETF_ALIASES: Record<string, string> = {
  'DFEN.DE': 'DFEN.DE',
  'DFEN': 'DFEN.DE',
  'DFNS': 'DFEN.DE',
  'DFNS.DE': 'DFEN.DE',
  'EUDF': 'EUDF.DE',
  'WDEF.DE': 'EUDF.DE',
  'WDEF.L': 'EUDF.DE',
  'WDEF': 'EUDF.DE',
  'SXR8': 'SXR8.DE',
  'SXR8.DE': 'SXR8.DE',
  'CSPX': 'SXR8.DE',
  'CSPX.L': 'SXR8.DE',
  'CSPX.AS': 'SXR8.DE',
  'CSP1': 'SXR8.DE',
  'CSP1.L': 'SXR8.DE',
  'IE00B5BMR087': 'SXR8.DE',
  'EUNL': 'EUNL.DE',
  'IWDA': 'EUNL.DE',
  'SWDA': 'EUNL.DE',
  'IWDA.AS': 'EUNL.DE',
  'SWDA.L': 'EUNL.DE',
  'IWDA.L': 'EUNL.DE',
  'IS3N': 'IS3N.DE',
  'IS3N.DE': 'IS3N.DE',
  'EIMI': 'IS3N.DE',
  'EIMI.L': 'IS3N.DE',
  'EMIM': 'IS3N.DE',
  'EMIM.L': 'IS3N.DE',
  'EMIM.AS': 'IS3N.DE',
  'IS3Q': 'IS3Q.DE',
  'IS3Q.DE': 'IS3Q.DE',
  'IWQU': 'IS3Q.DE',
  'IWQU.L': 'IS3Q.DE',
  'IWFQ': 'IS3Q.DE',
  'IWFQ.L': 'IS3Q.DE',
  'IE00BP3QZ601': 'IS3Q.DE',
  'QDVE': 'QDVE.DE',
  'EXXT': 'EXXT.DE',
  'IUSQ': 'IUSQ.DE',
  'VWCE': 'VWCE.DE',
  'VWCG': 'VWCG.DE',
  'VWCG.DE': 'VWCG.DE',
  'VEUA': 'VWCG.DE',
  'VEUA.L': 'VWCG.DE',
  'VWCG.L': 'VWCG.DE',
  'IE00BK5BQX27': 'VWCG.DE',
  'VBTC': 'VBTC.DE',
  'VBTC.DE': 'VBTC.DE',
  'VBTCCHF': 'VBTC.DE',
  'DE00A28M8D0': 'VBTC.DE',
  'VETH': 'VETH.DE',
  'VETH.DE': 'VETH.DE',
  'VETHCHF': 'VETH.DE',
  'DE00A3GPSP7': 'VETH.DE',
  'VAGF': 'VAGF.DE',
  'DBX0': 'DBX0.DE',
  'EUNA': 'EUNA.DE',
  'IUIT': 'IUIT.DE',
  'XAIX': 'XAIX.DE',
  'XAIX.DE': 'XAIX.DE',
  'XAIX.MI': 'XAIX.DE',
  'XAIX.S': 'XAIX.DE',
  'XAIX.ST': 'XAIX.DE',
  'XAID': 'XAIX.DE',
  'XAID.L': 'XAIX.DE',
  'XAIX.LN': 'XAIX.DE',
  'IE00BGV5VN51': 'XAIX.DE',
  'VVSM': 'VVSM.DE',
  'VVSM.DE': 'VVSM.DE',
  'SMH': 'VVSM.DE',
  'SMH.L': 'VVSM.DE',
  'SMGB': 'VVSM.DE',
  'SMGB.L': 'VVSM.DE',
  'IE00BMC38736': 'VVSM.DE',
  'TVBET': 'TVBETETF.RO',
  'TVBETETF': 'TVBETETF.RO',
  'TVBETETF.RO': 'TVBETETF.RO',
  'ROETF0000019': 'TVBETETF.RO',
  'ROETFBET0007': 'TVBETETF.RO',
  'IS0E': 'IS0E.DE',
  'SPGP': 'IS0E.DE',
  'SPGP.L': 'IS0E.DE',
  'IAUP': 'IS0E.DE',
  'IAUP.L': 'IS0E.DE',
  'ISOE.DE': 'IS0E.DE',
  'ISOE': 'IS0E.DE',
  'ISOE.AS': 'IS0E.DE',
  'MEUD': 'MEUD.PA',
  'MEUD.PA': 'MEUD.PA',
  'MEUD.DE': 'MEUD.PA',
  'MEUD.MI': 'MEUD.PA',
  'MEUD.L': 'MEUD.PA',
  'LYP6': 'MEUD.PA',
  'LYP6.DE': 'MEUD.PA',
  'LU0908500753': 'MEUD.PA',
  'EXH4': 'EXV1.DE',
  'EXH4.DE': 'EXV1.DE',
  'SX7PEX': 'EXV1.DE',
  'SX7PEX.DE': 'EXV1.DE',
  'EXV1': 'EXV1.DE',
  'EXV1.DE': 'EXV1.DE',
  'DE000A0F5UJ7': 'EXV1.DE',
  'DE0006289309': 'EXV1.DE',
  'BNKE': 'BNKE.PA',
  'BNKE.PA': 'BNKE.PA',
  'BNKE.DE': 'BNKE.PA',
  'BNKE.FP': 'BNKE.PA',
  'BNKE.LN': 'BNKE.PA',
  'BNKE.MI': 'BNKE.PA',
  'BNKE.BN': 'BNKE.PA',
  'LYBK': 'BNKE.PA',
  'LYBK.DE': 'BNKE.PA',
  'BNKEEUIV': 'BNKE.PA',
  'LU1829219390': 'BNKE.PA',
  'LSMC': 'LSMC.DE',
  'LSMC.DE': 'LSMC.DE',
  'CHIP': 'LSMC.DE',
  'CHIP.PA': 'LSMC.DE',
  'CHIP.SW': 'LSMC.DE',
  'CHIP.FP': 'LSMC.DE',
  'CHIPM.PA': 'LSMC.DE',
  'SEMU.L': 'LSMC.DE',
  'SEMG.L': 'LSMC.DE',
  'LU1900066033': 'LSMC.DE',
  'ERNX': 'ERNX.DE',
  'ERNX.DE': 'ERNX.DE',
  'ERNE': 'ERNX.DE',
  'ERNE.L': 'ERNX.DE',
  'ERNE.NA': 'ERNX.DE',
  'ERN1.L': 'ERNX.DE',
  'IE00BCRY6557': 'ERNX.DE',
  'EGLN': 'EGLN.L',
  'EGLN.L': 'EGLN.L',
  'EGLN.LN': 'EGLN.L',
  'SGLN': 'EGLN.L',
  'SGLN.L': 'EGLN.L',
  'SGLN.LN': 'EGLN.L',
  'IGLN': 'EGLN.L',
  'IGLN.L': 'EGLN.L',
  'PPFB': 'EGLN.L',
  'PPFB.DE': 'EGLN.L',
  'PPFB.GY': 'EGLN.L',
  'IE00B4ND3602': 'EGLN.L',
  'XHYA': 'XHYA.DE',
  'XHYA.DE': 'XHYA.DE',
  'XHYA.GY': 'XHYA.DE',
  'XHYA.L': 'XHYA.DE',
  'LU1109942653': 'XHYA.DE',
  'BB3M': 'BB3M.L',
  'BB3M.L': 'BB3M.L',
  'BB3M.LN': 'BB3M.L',
  'BBM3': 'BB3M.L',
  'BBM3.L': 'BB3M.L',
  'BB3MN': 'BB3M.L',
  'IE00BMD8KM66': 'BB3M.L',
  'C3M': 'C3M.PA',
  'C3M.PA': 'C3M.PA',
  'C3M.FP': 'C3M.PA',
  'FR0010754200': 'C3M.PA',
  'FLOA': 'FLOA.L',
  'FLOA.L': 'FLOA.L',
  'FLOA.LN': 'FLOA.L',
  'FLOACO': 'FLOA.L',
  'FLOA.BW': 'FLOA.L',
  'FLOA.BN': 'FLOA.L',
  'IE00BDFGJ627': 'FLOA.L',
  'IB01': 'IB01.L',
  'IB01.L': 'IB01.L',
  'IB01.LN': 'IB01.L',
  'IB01CO': 'IB01.L',
  'IB01N.MX': 'IB01.L',
  'IE00BGSF1X88': 'IB01.L',
  'IBTA': 'IBTA.L',
  'IBTA.L': 'IBTA.L',
  'IBTA.LN': 'IBTA.L',
  'CBU3': 'IBTA.L',
  'CBU3.L': 'IBTA.L',
  'CBU3.LN': 'IBTA.L',
  'CSBGU3': 'IBTA.L',
  'CU31': 'IBTA.L',
  'CU31.L': 'IBTA.L',
  'IE00B3VWN179': 'IBTA.L',
};

export const findEtfDatabaseKey = (
  rawSym: string,
  db: Record<string, ETFCoverageData>
): string => {
  if (!rawSym || !db) return rawSym;
  const sym = rawSym.trim().toUpperCase();

  // 1. Direct match in db
  if (db[sym]) return sym;

  // 2. German ETF Alias lookup
  const normSym = normalizeYahooTicker ? normalizeYahooTicker(sym) : sym;
  const aliasTarget = GERMAN_ETF_ALIASES[sym] || GERMAN_ETF_ALIASES[normSym];
  if (aliasTarget && db[aliasTarget]) {
    return aliasTarget;
  }

  // 3. Match by ISIN if available
  const isinMatch = Object.keys(db).find((k) => {
    const etf = db[k];
    if (!etf) return false;
    if (etf.isin === 'IE000YYE6WK5' && (sym.includes('DFEN') || sym.includes('DFNS') || sym.includes('VANECK'))) return true;
    if (etf.isin === 'IE0002Y8CX98' && (sym.includes('EUDF') || sym.includes('WDEF') || sym.includes('WISDOMTREE'))) return true;
    if (etf.isin === 'IE00B4L5Y983' && (sym.includes('EUNL') || sym.includes('IWDA') || sym.includes('SWDA') || sym.includes('WORLD'))) return true;
    if (etf.isin === 'IE00B6R52036' && (sym.includes('IS0E') || sym.includes('ISOE') || sym.includes('SPGP') || sym.includes('IAUP') || sym.includes('GOLD PRODUCERS'))) return true;
    if (etf.isin === 'LU0908500753' && (sym.includes('MEUD') || sym.includes('LYP6') || sym.includes('AMUNDI') || sym.includes('STOXX 600') || sym.includes('EUROPE 600'))) return true;
    if (etf.isin === 'IE00BKM4GZ66' && (sym.includes('IS3N') || sym.includes('EIMI') || sym.includes('EMIM') || sym.includes('EMERGING'))) return true;
    if (etf.isin === 'IE00BP3QZ601' && (sym.includes('IS3Q') || sym.includes('IWQU') || sym.includes('IWFQ') || sym.includes('QUALITY'))) return true;
    if (etf.isin === 'LU1829219390' && (sym.includes('BNKE') || sym.includes('LYBK') || sym.includes('EURO STOXX BANKS') || sym.includes('STX BANKS'))) return true;
    if (etf.isin === 'LU1900066033' && (sym.includes('LSMC') || sym.includes('CHIP') || sym.includes('SEMU') || sym.includes('SEMICONDUCTOR'))) return true;
    if (etf.isin === 'IE00BCRY6557' && (sym.includes('ERNX') || sym.includes('ERNE') || sym.includes('ERN1') || sym.includes('ULTRASHORT'))) return true;
    if (etf.isin === 'IE00B4ND3602' && (sym.includes('EGLN') || sym.includes('SGLN') || sym.includes('IGLN') || sym.includes('PPFB') || sym.includes('GOLD'))) return true;
    if (etf.isin === 'LU1109942653' && (sym.includes('XHYA') || sym.includes('HIGH YIELD') || sym.includes('XTRACKERS'))) return true;
    if (etf.isin === 'IE00BMD8KM66' && (sym.includes('BB3M') || sym.includes('BBM3') || sym.includes('BETABUILDERS') || sym.includes('TREASURY 0-3'))) return true;
    if (etf.isin === 'FR0010754200' && (sym.includes('C3M') || sym.includes('AMUNDI') || sym.includes('GOVERNMENT BOND 0-6') || sym.includes('EURO GOVT'))) return true;
    if (etf.isin === 'IE00BDFGJ627' && (sym.includes('FLOA') || sym.includes('FLOATING') || sym.includes('USD FLOATING'))) return true;
    if (etf.isin === 'IE00BGSF1X88' && (sym.includes('IB01') || sym.includes('TREASURY 0-1') || sym.includes('TREASURY BOND 0-1'))) return true;
    if (etf.isin === 'IE00B3VWN179' && (sym.includes('IBTA') || sym.includes('CBU3') || sym.includes('CSBGU3') || sym.includes('TREASURY 1-3') || sym.includes('TREASURY BOND 1-3'))) return true;
    if ((etf.isin === 'DE000A0F5UJ7' || etf.isin === 'DE0006289309') && (sym.includes('EXH4') || sym.includes('SX7PEX') || sym.includes('BANKS') || sym.includes('EXV1'))) return true;
    return false;
  });
  if (isinMatch) return isinMatch;

  // 4. Prefix or normalized fallback
  const fallback = Object.keys(db).find((k) => {
    const kNorm = normalizeYahooTicker ? normalizeYahooTicker(k) : k;
    return k.toUpperCase() === sym ||
           kNorm === normSym ||
           k.toUpperCase().startsWith(normSym + '.') ||
           sym.startsWith(kNorm + '.');
  });

  return fallback || sym;
};

export const DEFAULT_ETF_DATABASE: Record<string, ETFCoverageData> = {
  'EUDF.DE': WISDOMTREE_DEFENSE_DATA,
  'DFEN.DE': VANECK_DEFENSE_DATA,
  'SXR8.DE': {
    symbol: 'SXR8.DE',
    name: 'iShares Core S&P 500 UCITS ETF USD (Acc)',
    isin: 'IE00B5BMR087',
    ter: 0.07,
    category: 'US Large Cap (S&P 500)',
    officialSourceUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00B5BMR087',
    lastUpdated: '2026-07-25',
    sectors: SXR8_SECTOR_ALLOCATIONS,
    countries: SXR8_COUNTRY_ALLOCATIONS,
    holdings: SXR8_FULL_HOLDINGS
  },
  'VUAA.L': {
    symbol: 'VUAA.L',
    name: 'Vanguard S&P 500 UCITS ETF USD Acc',
    isin: 'IE00BFMXXD85',
    ter: 0.07,
    category: 'US Large Cap (S&P 500)',
    officialSourceUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00BFMXXD85',
    lastUpdated: '2026-07-25',
    sectors: SXR8_SECTOR_ALLOCATIONS,
    countries: SXR8_COUNTRY_ALLOCATIONS,
    holdings: SXR8_FULL_HOLDINGS
  },
  'NQSE.DE': {
    symbol: 'NQSE.DE',
    name: 'iShares Nasdaq 100 UCITS ETF USD (Acc)',
    isin: 'IE00B53SZB19',
    ter: 0.33,
    category: 'US Tech / Growth (Nasdaq 100)',
    officialSourceUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00B53SZB19',
    lastUpdated: '2026-07-25',
    sectors: [
      { name: 'Information Technology', weight: 51.2 },
      { name: 'Communication Services', weight: 15.4 },
      { name: 'Consumer Discretionary', weight: 13.1 },
      { name: 'Healthcare', weight: 6.5 },
      { name: 'Consumer Staples', weight: 5.8 },
      { name: 'Industrials', weight: 4.2 },
      { name: 'Utilities', weight: 1.8 }
    ],
    countries: [
      { name: 'United States', weight: 100.0 }
    ],
    holdings: [
      { symbol: 'AAPL', name: 'Apple Inc', weight: 8.7 },
      { symbol: 'NVDA', name: 'NVIDIA Corp', weight: 8.5 },
      { symbol: 'MSFT', name: 'Microsoft Corp', weight: 8.1 },
      { symbol: 'AMZN', name: 'Amazon.com Inc', weight: 5.2 },
      { symbol: 'META', name: 'Meta Platforms Inc', weight: 4.8 },
      { symbol: 'AVGO', name: 'Broadcom Inc', weight: 4.2 },
      { symbol: 'TSLA', name: 'Tesla Inc', weight: 3.1 },
      { symbol: 'GOOGL', name: 'Alphabet Inc', weight: 2.8 },
      { symbol: 'AMD', name: 'Advanced Micro Devices', weight: 2.1 },
      { symbol: 'COST', name: 'Costco Wholesale', weight: 2.0 }
    ]
  },
  'QDVE.DE': {
    symbol: 'QDVE.DE',
    name: 'iShares S&P 500 Information Technology Sector UCITS ETF',
    isin: 'IE00B3WJKG14',
    ter: 0.15,
    category: 'US Sector Tech',
    officialSourceUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00B3WJKG14',
    lastUpdated: '2026-07-25',
    sectors: [
      { name: 'Information Technology', weight: 100.0 }
    ],
    countries: [
      { name: 'United States', weight: 100.0 }
    ],
    holdings: [
      { symbol: 'NVDA', name: 'NVIDIA Corp', weight: 28.5 },
      { symbol: 'MSFT', name: 'Microsoft Corp', weight: 22.0 },
      { symbol: 'AAPL', name: 'Apple Inc', weight: 16.5 },
      { symbol: 'AVGO', name: 'Broadcom Inc', weight: 6.2 },
      { symbol: 'AMD', name: 'Advanced Micro Devices', weight: 3.1 },
      { symbol: 'ORCL', name: 'Oracle Corp', weight: 2.8 },
      { symbol: 'CRM', name: 'Salesforce Inc', weight: 2.5 },
      { symbol: 'CSCO', name: 'Cisco Systems', weight: 2.1 },
      { symbol: 'ACN', name: 'Accenture PLC', weight: 1.9 },
      { symbol: 'IBM', name: 'International Business Machines', weight: 1.8 }
    ]
  },
  'VWCE.DE': {
    symbol: 'VWCE.DE',
    name: 'Vanguard FTSE All-World UCITS ETF USD Accumulating',
    isin: 'IE00BK5BQT80',
    ter: 0.22,
    category: 'Global All-World',
    officialSourceUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00BK5BQT80',
    lastUpdated: '2026-07-26',
    sectors: VWCE_SECTOR_ALLOCATIONS,
    countries: VWCE_COUNTRY_ALLOCATIONS,
    holdings: VWCE_FULL_HOLDINGS
  },
  'VWCG.DE': {
    symbol: 'VWCG.DE',
    name: 'Vanguard FTSE Developed Europe UCITS ETF EUR Accumulating',
    isin: 'IE00BK5BQX27',
    ter: 0.10,
    category: 'Europe Developed Equities (FTSE Developed Europe)',
    officialSourceUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00BK5BQX27',
    lastUpdated: '2026-07-26',
    sectors: VWCG_SECTOR_ALLOCATIONS,
    countries: VWCG_COUNTRY_ALLOCATIONS,
    holdings: VWCG_FULL_HOLDINGS
  },
  'VBTC.DE': {
    symbol: 'VBTC.DE',
    name: 'VanEck Bitcoin ETN',
    isin: 'DE00A28M8D0',
    ter: 1.00,
    category: 'Digital Assets / Crypto ETN',
    officialSourceUrl: 'https://www.vaneck.com/ucits/en/etf/vbtc/',
    lastUpdated: '2026-07-26',
    sectors: VBTC_SECTOR_ALLOCATIONS,
    countries: VBTC_COUNTRY_ALLOCATIONS,
    holdings: VBTC_FULL_HOLDINGS
  },
  'VETH.DE': {
    symbol: 'VETH.DE',
    name: 'VanEck Ethereum ETN',
    isin: 'DE00A3GPSP7',
    ter: 1.00,
    category: 'Digital Assets / Crypto ETN',
    officialSourceUrl: 'https://www.vaneck.com/ucits/en/etf/veth/',
    lastUpdated: '2026-07-26',
    sectors: VETH_SECTOR_ALLOCATIONS,
    countries: VETH_COUNTRY_ALLOCATIONS,
    holdings: VETH_FULL_HOLDINGS
  },
  'EUNL.DE': {
    symbol: 'EUNL.DE',
    name: 'iShares Core MSCI World UCITS ETF USD (Acc)',
    isin: 'IE00B4L5Y983',
    ter: 0.20,
    category: 'Global Developed World (MSCI World)',
    officialSourceUrl: 'https://www.ishares.com/uk/individual/en/products/251882/ishares-msci-world-ucits-etf-acc-fund',
    lastUpdated: '2026-07-27',
    sectors: EUNL_SECTOR_ALLOCATIONS,
    countries: EUNL_COUNTRY_ALLOCATIONS,
    holdings: EUNL_FULL_HOLDINGS
  },
  'XAIX.DE': {
    symbol: 'XAIX.DE',
    name: 'Xtrackers Artificial Intelligence & Big Data UCITS ETF 1C',
    isin: 'IE00BGV5VN51',
    ter: 0.35,
    category: 'Sector Tech (AI)',
    officialSourceUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00BGV5VN51',
    lastUpdated: '2026-07-25',
    sectors: XAIX_SECTOR_ALLOCATIONS,
    countries: XAIX_COUNTRY_ALLOCATIONS,
    holdings: XAIX_FULL_HOLDINGS
  },
  'VVSM.DE': {
    symbol: 'VVSM.DE',
    name: 'VanEck Semiconductor UCITS ETF',
    isin: 'IE00BMC38736',
    ter: 0.35,
    category: 'Sector Tech (Semiconductors)',
    officialSourceUrl: 'https://www.vaneck.com/ucits/en/smh/',
    lastUpdated: '2026-07-25',
    sectors: VVSM_SECTOR_ALLOCATIONS,
    countries: VVSM_COUNTRY_ALLOCATIONS,
    holdings: VVSM_FULL_HOLDINGS
  },
  'TVBETETF.RO': {
    symbol: 'TVBETETF.RO',
    name: 'Patria Bank ETF BET Patria-Tradeville (Bursa de Valori București)',
    isin: 'ROETF0000019',
    ter: 1.45,
    category: 'Romania BET Index',
    officialSourceUrl: 'https://patriafonduri.ro/fonduri/etf-bet-patria-tradeville',
    lastUpdated: '2026-07-25',
    sectors: TVBET_SECTOR_ALLOCATIONS,
    countries: TVBET_COUNTRY_ALLOCATIONS,
    holdings: TVBET_FULL_HOLDINGS
  },
  'IS3N.DE': {
    symbol: 'IS3N.DE',
    name: 'iShares Core MSCI EM IMI UCITS ETF USD (Acc)',
    isin: 'IE00BKM4GZ66',
    ter: 0.18,
    category: 'Emerging Markets',
    officialSourceUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00BKM4GZ66',
    lastUpdated: '2026-07-25',
    sectors: IS3N_SECTOR_ALLOCATIONS,
    countries: IS3N_COUNTRY_ALLOCATIONS,
    holdings: IS3N_HOLDINGS
  },
  'EXW1.DE': {
    symbol: 'EXW1.DE',
    name: 'iShares STOXX Europe 600 UCITS ETF (DE)',
    isin: 'DE0002635307',
    ter: 0.20,
    category: 'Europe Equities',
    officialSourceUrl: 'https://www.justetf.com/en/etf-profile.html?isin=DE0002635307',
    lastUpdated: '2026-07-25',
    sectors: [
      { name: 'Financials', weight: 18.5 },
      { name: 'Healthcare', weight: 15.2 },
      { name: 'Industrials', weight: 15.0 },
      { name: 'Consumer Staples', weight: 10.5 }
    ],
    countries: [
      { name: 'United Kingdom', weight: 22.5 },
      { name: 'France', weight: 17.8 },
      { name: 'Switzerland', weight: 14.5 },
      { name: 'Germany', weight: 13.2 },
      { name: 'Netherlands', weight: 7.0 },
      { name: 'Other/Cash', weight: 24.5 }
    ],
    holdings: [
      { symbol: 'NVO', name: 'Novo Nordisk', weight: 3.8 },
      { symbol: 'ASML', name: 'ASML Holding', weight: 3.5 },
      { symbol: 'NESN', name: 'Nestle SA', weight: 2.8 },
      { symbol: 'SAP', name: 'SAP SE', weight: 2.5 },
      { symbol: 'AZN', name: 'AstraZeneca PLC', weight: 2.2 },
      { symbol: 'MC', name: 'LVMH Moet Hennessy', weight: 2.1 }
    ]
  },
  'EXV1.DE': {
    symbol: 'EXV1.DE',
    name: 'iShares STOXX Europe 600 Banks UCITS ETF (DE)',
    isin: 'DE000A0F5UJ7',
    ter: 0.46,
    category: 'Sector Financials (Europe)',
    officialSourceUrl: 'https://www.justetf.com/en/etf-profile.html?isin=DE000A0F5UJ7',
    lastUpdated: '2026-07-25',
    sectors: EXH4_SECTOR_ALLOCATIONS,
    countries: EXH4_COUNTRY_ALLOCATIONS,
    holdings: EXH4_FULL_HOLDINGS
  },
  'IS0E.DE': {
    symbol: 'IS0E.DE',
    name: 'iShares Gold Producers UCITS ETF USD (Acc)',
    isin: 'IE00B6R52036',
    ter: 0.55,
    category: 'Sector Commodity (Gold Producers)',
    officialSourceUrl: 'https://www.ishares.com/uk/individual/en/products/264649/ishares-gold-producers-ucits-etf',
    lastUpdated: '2026-07-26',
    sectors: IS0E_SECTOR_ALLOCATIONS,
    countries: IS0E_COUNTRY_ALLOCATIONS,
    holdings: IS0E_FULL_HOLDINGS
  },
  'IUSN.DE': {
    symbol: 'IUSN.DE',
    name: 'iShares MSCI World Small Cap UCITS ETF',
    isin: 'IE00BF4RFH31',
    ter: 0.35,
    category: 'Global Small Cap Equities',
    officialSourceUrl: 'https://www.ishares.com/uk/individual/en/products/296582/ishares-msci-world-small-cap-ucits-etf',
    lastUpdated: '2026-07-26',
    sectors: IUSN_SECTOR_ALLOCATIONS,
    countries: IUSN_COUNTRY_ALLOCATIONS,
    holdings: IUSN_FULL_HOLDINGS
  },
  'MEUD.PA': {
    symbol: 'MEUD.PA',
    name: 'Amundi Core Stoxx Europe 600 UCITS ETF Acc',
    isin: 'LU0908500753',
    ter: 0.07,
    category: 'Europe Equities (STOXX Europe 600)',
    officialSourceUrl: 'https://www.amundietf.com/en/individual/products/equity/amundi-core-stoxx-europe-600-ucits-etf-acc/lu0908500753',
    lastUpdated: '2026-07-26',
    sectors: MEUD_SECTOR_ALLOCATIONS,
    countries: MEUD_COUNTRY_ALLOCATIONS,
    holdings: MEUD_FULL_HOLDINGS
  },
  'IS3Q.DE': {
    symbol: 'IS3Q.DE',
    name: 'iShares Edge MSCI World Quality Factor UCITS ETF',
    isin: 'IE00BP3QZ601',
    ter: 0.30,
    category: 'Global Factor Equities (Quality)',
    officialSourceUrl: 'https://www.ishares.com/uk/individual/en/products/264633/ishares-msci-world-quality-factor-ucits-etf',
    lastUpdated: '2026-07-27',
    sectors: IS3Q_SECTOR_ALLOCATIONS,
    countries: IS3Q_COUNTRY_ALLOCATIONS,
    holdings: IS3Q_FULL_HOLDINGS
  },
  'BNKE.PA': {
    symbol: 'BNKE.PA',
    name: 'Amundi Euro Stoxx Banks UCITS ETF Acc',
    isin: 'LU1829219390',
    ter: 0.30,
    category: 'Eurozone Sector Banks (Euro Stoxx Banks)',
    officialSourceUrl: 'https://www.amundietf.com/en/individual/products/equity/amundi-euro-stoxx-banks-ucits-etf-acc/lu1829219390',
    lastUpdated: '2026-07-28',
    sectors: BNKE_SECTOR_ALLOCATIONS,
    countries: BNKE_COUNTRY_ALLOCATIONS,
    holdings: BNKE_FULL_HOLDINGS
  },
  'LSMC.DE': {
    symbol: 'LSMC.DE',
    name: 'Amundi MSCI Semiconductors UCITS ETF Acc',
    isin: 'LU1900066033',
    ter: 0.35,
    category: 'Global Sector Semiconductors (MSCI ACWI Semiconductors)',
    officialSourceUrl: 'https://www.amundietf.com/en/individual/products/equity/amundi-msci-semiconductors-ucits-etf-acc/lu1900066033',
    lastUpdated: '2026-07-28',
    sectors: LSMC_SECTOR_ALLOCATIONS,
    countries: LSMC_COUNTRY_ALLOCATIONS,
    holdings: LSMC_FULL_HOLDINGS
  },
  'ERNX.DE': {
    symbol: 'ERNX.DE',
    name: 'iShares € Ultrashort Bond UCITS ETF',
    isin: 'IE00BCRY6557',
    ter: 0.09,
    category: 'Euro Ultra-Short Fixed Income / Investment Grade Bonds',
    officialSourceUrl: 'https://www.ishares.com/uk/individual/en/products/258116/ishares-euro-ultrashort-bond-ucits-etf',
    lastUpdated: '2026-07-28',
    sectors: ERNX_SECTOR_ALLOCATIONS,
    countries: ERNX_COUNTRY_ALLOCATIONS,
    holdings: ERNX_FULL_HOLDINGS
  },
  'EGLN.L': {
    symbol: 'EGLN.L',
    name: 'iShares Physical Gold ETC',
    isin: 'IE00B4ND3602',
    ter: 0.12,
    category: 'Commodities (Precious Metals / Physical Gold)',
    officialSourceUrl: 'https://www.ishares.com/uk/individual/en/products/258116/ishares-physical-gold-etc-fund',
    lastUpdated: '2026-07-29',
    sectors: EGLN_SECTOR_ALLOCATIONS,
    countries: EGLN_COUNTRY_ALLOCATIONS,
    holdings: EGLN_FULL_HOLDINGS
  },
  'XHYA.DE': {
    symbol: 'XHYA.DE',
    name: 'Xtrackers II EUR High Yield Corporate Bond UCITS ETF 1C',
    isin: 'LU1109942653',
    ter: 0.20,
    category: 'Fixed Income (Euro High Yield Corporate Bonds)',
    officialSourceUrl: 'https://etf.dws.com/en-gb/LU1109942653-eur-high-yield-corporate-bond-ucits-etf-1c/',
    lastUpdated: '2026-07-29',
    sectors: XHYA_SECTOR_ALLOCATIONS,
    countries: XHYA_COUNTRY_ALLOCATIONS,
    holdings: XHYA_FULL_HOLDINGS
  },
  'BB3M.L': {
    symbol: 'BB3M.L',
    name: 'JPMorgan BetaBuilders US Treasury Bond 0-3 Months UCITS ETF USD Acc',
    isin: 'IE00BMD8KM66',
    ter: 0.07,
    category: 'Fixed Income (US Treasury Bills 0-3 Months)',
    officialSourceUrl: 'https://am.jpmorgan.com/lu/en/asset-management/per/products/d/jpm-betabuilders-us-treasury-bond-0-3-months-ucits-etf-usd-acc-ie00bmd8km66',
    lastUpdated: '2026-06-30',
    sectors: BB3M_SECTOR_ALLOCATIONS,
    countries: BB3M_COUNTRY_ALLOCATIONS,
    holdings: BB3M_FULL_HOLDINGS
  },
  'C3M.PA': {
    symbol: 'C3M.PA',
    name: 'Amundi Euro Government Bond 0-6 M UCITS ETF Acc',
    isin: 'FR0010754200',
    ter: 0.14,
    category: 'Fixed Income (Eurozone Government Bills 0-6 Months)',
    officialSourceUrl: 'https://www.amundietf.fr/fr/professionnels/produits/fixed-income/amundi-euro-government-bond-06-m-ucits-etf-acc/fr0010754200',
    lastUpdated: '2026-07-27',
    sectors: C3M_SECTOR_ALLOCATIONS,
    countries: C3M_COUNTRY_ALLOCATIONS,
    holdings: C3M_FULL_HOLDINGS
  },
  'FLOA.L': {
    symbol: 'FLOA.L',
    name: 'iShares $ Floating Rate Bond UCITS ETF USD (Acc)',
    isin: 'IE00BDFGJ627',
    ter: 0.10,
    category: 'Fixed Income (USD Floating Rate Bonds)',
    officialSourceUrl: 'https://www.ishares.com/uk/individual/en/products/290638/',
    lastUpdated: '2026-06-30',
    sectors: FLOA_SECTOR_ALLOCATIONS,
    countries: FLOA_COUNTRY_ALLOCATIONS,
    holdings: FLOA_FULL_HOLDINGS
  },
  'IB01.L': {
    symbol: 'IB01.L',
    name: 'iShares $ Treasury Bond 0-1yr UCITS ETF',
    isin: 'IE00BGSF1X88',
    ter: 0.07,
    category: 'Fixed Income (US Treasury Bills 0-1 Year)',
    officialSourceUrl: 'https://www.ishares.com/uk/individual/en/products/307243/',
    lastUpdated: '2026-07-27',
    sectors: IB01_SECTOR_ALLOCATIONS,
    countries: IB01_COUNTRY_ALLOCATIONS,
    holdings: IB01_FULL_HOLDINGS
  },
  'IBTA.L': {
    symbol: 'IBTA.L',
    name: 'iShares $ Treasury Bond 1-3yr UCITS ETF',
    isin: 'IE00B3VWN179',
    ter: 0.07,
    category: 'Fixed Income (US Treasury Bonds 1-3 Years)',
    officialSourceUrl: 'https://www.ishares.com/uk/individual/en/products/251717/',
    lastUpdated: '2026-07-27',
    sectors: IBTA_SECTOR_ALLOCATIONS,
    countries: IBTA_COUNTRY_ALLOCATIONS,
    holdings: IBTA_FULL_HOLDINGS
  }
};

// --- ETF DATABASE CONFIGURATOR SUBCOMPONENT ---
interface EtfDatabaseConfiguratorProps {
  etfDatabase: Record<string, ETFCoverageData>;
  updateEtfDb: (newDb: Record<string, ETFCoverageData>) => void;
  currency: string;
  userEtfAssets: Asset[];
  convertValue: (val: number, fromCurr: string, toCurr: string) => number;
}

const EtfDatabaseConfigurator: React.FC<EtfDatabaseConfiguratorProps> = ({
  etfDatabase,
  updateEtfDb,
  currency,
  userEtfAssets,
  convertValue
}) => {
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<ETFCoverageData | null>(null);
  const [factsheetText, setFactsheetText] = useState<string>('');
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [filterSearch, setFilterSearch] = useState<string>('');
  const [showOnlyHeld, setShowOnlyHeld] = useState<boolean>(true); // Default strictly held ETFs
  const [jsonTextModal, setJsonTextModal] = useState<boolean>(false);
  const [jsonInputText, setJsonInputText] = useState<string>('');
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  // Group held ETF assets by symbol
  const heldEtfMap = useMemo(() => {
    const map: Record<string, {
      symbol: string;
      totalQuantity: number;
      totalValue: number;
      avgPrice: number;
      assets: Asset[];
    }> = {};

    (userEtfAssets || []).forEach(a => {
      if (!a || !a.symbol) return;
      const rawSym = a.symbol.trim().toUpperCase();
      const matchedKey = findEtfDatabaseKey(rawSym, etfDatabase) || rawSym;

      const key = matchedKey;
      const val = typeof convertValue === 'function' 
        ? convertValue(a.quantity * a.currentPrice, a.currency || currency, currency) 
        : (a.quantity * a.currentPrice);

      if (!map[key]) {
        map[key] = {
          symbol: key,
          totalQuantity: 0,
          totalValue: 0,
          avgPrice: a.currentPrice,
          assets: []
        };
      }
      map[key].totalQuantity += a.quantity;
      map[key].totalValue += val;
      map[key].assets.push(a);
    });

    return map;
  }, [userEtfAssets, etfDatabase, convertValue, currency]);

  // Keys to render based on view mode
  const keysToRender = useMemo(() => {
    let keys: string[] = [];
    if (showOnlyHeld) {
      keys = Object.keys(heldEtfMap);
    } else {
      keys = Object.keys(etfDatabase);
    }

    if (!filterSearch.trim()) return keys;

    const term = filterSearch.toLowerCase();
    return keys.filter(k => {
      const etf = etfDatabase[k];
      const held = heldEtfMap[k];
      const name = etf?.name || held?.assets[0]?.name || '';
      const isin = etf?.isin || '';
      return k.toLowerCase().includes(term) || name.toLowerCase().includes(term) || isin.toLowerCase().includes(term);
    });
  }, [showOnlyHeld, heldEtfMap, etfDatabase, filterSearch]);

  // Start editing existing ETF or create a new one
  const handleStartEdit = (key?: string) => {
    if (key && etfDatabase[key]) {
      setEditingKey(key);
      setEditForm(JSON.parse(JSON.stringify(etfDatabase[key])));
    } else {
      const newKey = key || 'NEW.ETF';
      setEditingKey(newKey);
      setEditForm({
        symbol: newKey,
        name: key ? `ETF ${key}` : 'ETF Nou',
        ter: 0.20,
        category: 'Personalizat',
        isin: '',
        officialSourceUrl: '',
        lastUpdated: new Date().toISOString().split('T')[0],
        holdings: [
          { symbol: 'AAPL', name: 'Apple Inc', weight: 10.0 },
          { symbol: 'MSFT', name: 'Microsoft Corp', weight: 8.0 }
        ]
      });
    }
    setFactsheetText('');
    setImportStatus(null);
  };

  // Save ETF changes
  const handleSaveEdit = () => {
    if (!editForm || !editForm.symbol) return;
    const cleanSym = editForm.symbol.trim().toUpperCase();
    const updatedDb = { ...etfDatabase };

    if (editingKey && editingKey !== cleanSym) {
      delete updatedDb[editingKey];
    }

    updatedDb[cleanSym] = {
      ...editForm,
      symbol: cleanSym,
      ter: Number(editForm.ter) || 0,
      lastUpdated: new Date().toISOString().split('T')[0],
      holdings: editForm.holdings.map(h => ({
        ...h,
        symbol: (h.symbol || '').trim().toUpperCase(),
        weight: Number(h.weight) || 0
      }))
    };

    updateEtfDb(updatedDb);
    setEditingKey(null);
    setEditForm(null);
    setImportStatus(`ETF-ul ${cleanSym} a fost salvat și sincronizat cu succes!`);
  };

  // Delete ETF
  const handleDeleteEtf = (key: string) => {
    if (window.confirm(`Ești sigur că vrei ștergi datele pentru ${key}?`)) {
      const updatedDb = { ...etfDatabase };
      delete updatedDb[key];
      updateEtfDb(updatedDb);
    }
  };

  // Add a new holding line
  const handleAddHoldingRow = () => {
    if (!editForm) return;
    setEditForm({
      ...editForm,
      holdings: [...editForm.holdings, { symbol: '', name: '', weight: 1.0 }]
    });
  };

  // Remove a holding line
  const handleRemoveHoldingRow = (index: number) => {
    if (!editForm) return;
    const newHoldings = [...editForm.holdings];
    newHoldings.splice(index, 1);
    setEditForm({ ...editForm, holdings: newHoldings });
  };

  // Export ETF Database to JSON File
  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(etfDatabase, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `InvestAI_ETF_Database_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setImportStatus("Fișierul JSON a fost descărcat cu succes!");
  };

  // Apply JSON Object or Array
  const applyImportedJson = (parsed: any) => {
    if (typeof parsed !== 'object' || parsed === null) {
      setImportStatus('Eroare: Structură JSON nevalidă.');
      return;
    }
    const newDb: Record<string, ETFCoverageData> = { ...etfDatabase };
    let count = 0;

    if (Array.isArray(parsed)) {
      parsed.forEach((item) => {
        if (item && item.symbol) {
          const sym = item.symbol.trim().toUpperCase();
          newDb[sym] = {
            symbol: sym,
            name: item.name || sym,
            ter: Number(item.ter) || 0,
            category: item.category || 'Importat',
            isin: item.isin || '',
            officialSourceUrl: item.officialSourceUrl || '',
            lastUpdated: item.lastUpdated || new Date().toISOString().split('T')[0],
            sectors: Array.isArray(item.sectors) ? item.sectors.map((s: any) => ({ name: String(s.name || ''), weight: Number(s.weight) || 0 })) : undefined,
            countries: Array.isArray(item.countries) ? item.countries.map((c: any) => ({ name: String(c.name || ''), weight: Number(c.weight) || 0 })) : undefined,
            holdings: Array.isArray(item.holdings) ? item.holdings.map((h: any) => ({
              symbol: (h.symbol || '').trim().toUpperCase(),
              name: h.name || '',
              weight: Number(h.weight) || 0
            })) : []
          };
          count++;
        }
      });
    } else {
      Object.keys(parsed).forEach((key) => {
        const item = parsed[key];
        if (item && typeof item === 'object') {
          const sym = (item.symbol || key).trim().toUpperCase();
          newDb[sym] = {
            symbol: sym,
            name: item.name || sym,
            ter: Number(item.ter) || 0,
            category: item.category || 'Importat',
            isin: item.isin || '',
            officialSourceUrl: item.officialSourceUrl || '',
            lastUpdated: item.lastUpdated || new Date().toISOString().split('T')[0],
            sectors: Array.isArray(item.sectors) ? item.sectors.map((s: any) => ({ name: String(s.name || ''), weight: Number(s.weight) || 0 })) : undefined,
            countries: Array.isArray(item.countries) ? item.countries.map((c: any) => ({ name: String(c.name || ''), weight: Number(c.weight) || 0 })) : undefined,
            holdings: Array.isArray(item.holdings) ? item.holdings.map((h: any) => ({
              symbol: (h.symbol || '').trim().toUpperCase(),
              name: h.name || '',
              weight: Number(h.weight) || 0
            })) : []
          };
          count++;
        }
      });
    }

    updateEtfDb(newDb);
    setImportStatus(`Baza de date a fost importată cu succes (${count} ETF-uri actualizate)!`);
  };

  // Handle file input upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const parsed = JSON.parse(evt.target?.result as string);
        applyImportedJson(parsed);
      } catch (err) {
        setImportStatus('Eroare: Fișierul selectat nu este un JSON valid.');
      }
    };
    reader.readAsText(file);
    if (e.target) e.target.value = '';
  };

  // Parse raw text pasted from official PDF Factsheet or KID
  const handleParseFactsheetText = () => {
    if (!factsheetText || !editForm) return;

    let extractedTer = editForm.ter;
    const holdings: { symbol: string; name: string; weight: number }[] = [];

    const terMatch = factsheetText.match(/(?:TER|Total\s+Expense\s+Ratio|Comision\s+de\s+administrare|Costuri\s+totale)\D*(\d+[,.]\d+)\s*%/i);
    if (terMatch && terMatch[1]) {
      extractedTer = parseFloat(terMatch[1].replace(',', '.'));
    }

    const lines = factsheetText.split('\n');
    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;

      const weightMatch = trimmed.match(/(\d+[,.]\d+)\s*%/);
      if (weightMatch) {
        const weightVal = parseFloat(weightMatch[1].replace(',', '.'));
        const textPart = trimmed.replace(weightMatch[0], '').trim();
        if (textPart.length >= 2) {
          const words = textPart.split(/\s+/);
          let sym = words[0].toUpperCase().replace(/[^A-Z0-9.-]/g, '');
          let name = words.slice(1).join(' ') || sym;

          if (sym.length > 8 || !/^[A-Z0-9.-]+$/.test(sym)) {
            name = textPart;
            sym = textPart.slice(0, 5).toUpperCase().replace(/[^A-Z0-9]/g, '');
          }

          if (weightVal > 0 && weightVal <= 100) {
            holdings.push({ symbol: sym, name: name, weight: weightVal });
          }
        }
      }
    });

    if (holdings.length > 0 || terMatch) {
      setEditForm({
        ...editForm,
        ter: extractedTer,
        holdings: holdings.length > 0 ? holdings : editForm.holdings
      });
      setImportStatus(`S-au extras cu succes ${holdings.length} componente și TER (${extractedTer}%) din text!`);
    } else {
      setImportStatus('Nu s-au putut identifica automat ponderi în % din textul furnizat. Puteți adăuga manual randurile mai jos.');
    }
  };

  return (
    <div className="space-y-6">
      {/* HIDDEN FILE INPUT FOR JSON IMPORT */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept=".json"
        className="hidden"
      />

      {/* BANNER FOR OFFICIAL PDF / JSON IMPORT & INSTRUCTIONS */}
      <div className="bg-gradient-to-r from-blue-950/90 via-slate-900 to-emerald-950/90 border border-blue-800/60 p-5 rounded-xl space-y-3 shadow-lg">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500/20 p-2 rounded-lg border border-blue-500/30 text-blue-400 shrink-0 mt-0.5">
              <FileJson size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-base flex items-center gap-2">
                Configurator Bază de Date ETF-uri & Import / Export JSON
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-1">
                Puteți gestiona și actualiza oficial compoziția fiecărui ETF deținut din surse precum <strong>JustETF.com</strong> sau <strong>BVB.ro</strong>.
              </p>
            </div>
          </div>

          {/* JSON EXPORT & IMPORT ACTIONS BAR */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleExportJson}
              className="bg-slate-800 hover:bg-slate-700 text-emerald-300 text-xs font-bold px-3.5 py-2 rounded-lg border border-emerald-500/40 flex items-center gap-1.5 transition-colors shadow"
              title="Descarcă întreaga bază de date cu ETF-uri ca fișier JSON"
            >
              <Download size={15} /> Exportă Bază Date JSON
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow"
              title="Încarcă un fișier JSON cu compozițiile ETF-urilor"
            >
              <Upload size={15} /> Importă Fișier JSON
            </button>
            <button
              onClick={() => setJsonTextModal(!jsonTextModal)}
              className="bg-slate-800 hover:bg-slate-700 text-blue-300 text-xs font-bold px-3 py-2 rounded-lg border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <FileText size={15} /> Lipește Text JSON
            </button>
            <button
              onClick={() => {
                if (window.confirm("Restabilești baza de date la componentele și ponderile oficiale predefinite pentru bursele din Germania?")) {
                  try {
                    localStorage.removeItem('investai_etf_db_v2');
                    localStorage.removeItem('investai_custom_etf_db');
                  } catch (e) {}
                  updateEtfDb(DEFAULT_ETF_DATABASE);
                  setImportStatus("Baza de date a fost restabilită la valorile oficiale predefinite (EUDF.DE, DFEN.DE, EXV1.DE etc.)!");
                }
              }}
              className="bg-amber-950/80 hover:bg-amber-900/90 text-amber-300 text-xs font-bold px-3 py-2 rounded-lg border border-amber-500/40 flex items-center gap-1.5 transition-colors shadow"
              title="Resetează baza de date la datele oficiale din Factshet-uri (inclusiv EUDF.DE, DFEN.DE, EXV1.DE etc.)"
            >
              <RefreshCw size={14} /> Restabilește Datele Oficiale
            </button>
          </div>
        </div>

        {importStatus && (
          <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs p-2.5 rounded-lg font-medium flex items-center gap-2">
            <CheckCircle2 size={16} /> {importStatus}
          </div>
        )}
      </div>

      {/* PASTE JSON MODAL */}
      {jsonTextModal && (
        <div className="bg-slate-950 border border-blue-500/60 rounded-xl p-4 space-y-3 shadow-2xl">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <h4 className="text-xs font-bold text-white flex items-center gap-2">
              <FileJson size={16} className="text-blue-400" />
              Lipește Date JSON pentru ETF-uri
            </h4>
            <button
              onClick={() => setJsonTextModal(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              Închide
            </button>
          </div>
          <textarea
            rows={5}
            value={jsonInputText}
            onChange={(e) => setJsonInputText(e.target.value)}
            placeholder='Lipește structura JSON aici (ex: { "SXR8.DE": { "symbol": "SXR8.DE", "name": "...", "ter": 0.07, "holdings": [...] } })...'
            className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-xs text-slate-200 font-mono outline-none focus:ring-1 focus:ring-blue-500"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setJsonTextModal(false)}
              className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded"
            >
              Anulează
            </button>
            <button
              onClick={() => {
                try {
                  const parsed = JSON.parse(jsonInputText);
                  applyImportedJson(parsed);
                  setJsonTextModal(false);
                  setJsonInputText('');
                } catch (e) {
                  alert('Textul furnizat nu este un JSON valid.');
                }
              }}
              className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-1.5 rounded shadow"
            >
              Aplică & Actualizează Baza
            </button>
          </div>
        </div>
      )}

      {/* HEADER FILTER TABS & SEARCH */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
        {/* STRICTLY HELD vs ALL TOGGLE */}
        <div className="flex items-center bg-slate-900 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setShowOnlyHeld(true)}
            className={`text-xs font-bold px-3.5 py-1.5 rounded-md transition-all flex items-center gap-2 ${
              showOnlyHeld
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck size={15} />
            Strict ETF-uri în Portofoliu ({Object.keys(heldEtfMap).length})
          </button>
          <button
            onClick={() => setShowOnlyHeld(false)}
            className={`text-xs font-bold px-3.5 py-1.5 rounded-md transition-all flex items-center gap-2 ${
              !showOnlyHeld
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers size={15} />
            Toate ETF-urile Bazei ({Object.keys(etfDatabase).length})
          </button>
        </div>

        {/* SEARCH & ADD NEW */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <div className="relative w-full sm:w-60">
            <Search size={15} className="absolute left-3 top-2.5 text-slate-500" />
            <input
              type="text"
              placeholder="Căutare Ticker / ISIN..."
              value={filterSearch}
              onChange={(e) => setFilterSearch(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:ring-1 focus:ring-emerald-500 outline-none"
            />
          </div>

          <button
            onClick={() => handleStartEdit()}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3 py-2 rounded-lg flex items-center gap-1.5 shadow transition-colors shrink-0"
          >
            <Plus size={15} /> Adaugă ETF Nou
          </button>
        </div>
      </div>

      {/* EDIT MODAL / FORM */}
      {editForm && (
        <div className="bg-slate-950 border-2 border-emerald-500/60 rounded-xl p-6 shadow-2xl space-y-5">
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sliders size={18} className="text-emerald-400" />
              {editingKey && etfDatabase[editingKey] ? `Editare ETF: ${editingKey}` : 'Adăugare / Import ETF Nou'}
            </h3>
            <button
              onClick={() => { setEditingKey(null); setEditForm(null); }}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-400 px-2.5 py-1 rounded"
            >
              Anulează
            </button>
          </div>

          {/* BASIC METRICS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-3">
            <div className="col-span-1">
              <label className="block text-[11px] font-bold text-slate-400 mb-1">Ticker / Simbol</label>
              <input
                type="text"
                value={editForm.symbol}
                onChange={(e) => setEditForm({ ...editForm, symbol: e.target.value })}
                placeholder="ex: SXR8.DE"
                className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white font-mono font-bold focus:ring-1 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-[11px] font-bold text-slate-400 mb-1">Nume Complet ETF</label>
              <input
                type="text"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                placeholder="ex: iShares Core S&P 500"
                className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white focus:ring-1 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-1">Cod ISIN Oficial</label>
              <input
                type="text"
                value={editForm.isin || ''}
                onChange={(e) => setEditForm({ ...editForm, isin: e.target.value.trim().toUpperCase() })}
                placeholder="ex: IE00B5BMR087"
                className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-blue-400 font-mono font-bold focus:ring-1 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-1">Comision TER (%)</label>
              <input
                type="number"
                step="0.01"
                value={editForm.ter}
                onChange={(e) => setEditForm({ ...editForm, ter: parseFloat(e.target.value) || 0 })}
                placeholder="ex: 0.07"
                className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-amber-400 font-mono font-bold focus:ring-1 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-1">Categorie / Sector</label>
              <input
                type="text"
                value={editForm.category}
                onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                placeholder="ex: US Large Cap"
                className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white focus:ring-1 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          {/* OFFICIAL SOURCE LINK CONFIGURATOR */}
          <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-2">
            <label className="block text-xs font-bold text-emerald-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Globe size={14} /> Link Sursă Oficială (JustETF / BVB / iShares / Vanguard)
              </span>
              {editForm.isin && (
                <a
                  href={`https://www.justetf.com/en/search.html?search=${editForm.isin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-blue-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={12} /> Caută ISIN pe JustETF
                </a>
              )}
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={editForm.officialSourceUrl || ''}
                onChange={(e) => setEditForm({ ...editForm, officialSourceUrl: e.target.value })}
                placeholder="https://www.justetf.com/en/etf-profile.html?isin=IE00B5BMR087..."
                className="flex-1 bg-slate-950 border border-slate-700 rounded p-2 text-xs text-blue-300 font-mono outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {editForm.officialSourceUrl && (
                <a
                  href={editForm.officialSourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-3 py-2 rounded flex items-center gap-1 shrink-0"
                >
                  <ExternalLink size={13} /> Deschide Link
                </a>
              )}
            </div>
          </div>

          {/* PARSER BOX FOR FACTSHEET / KID TEXT */}
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
            <label className="block text-xs font-bold text-blue-400 flex items-center justify-between">
              <span>Import Rapid din Text Factsheet / KID (Copy/Paste)</span>
              <span className="text-[10px] text-slate-500 font-normal">Extrage TER & % holdings automat</span>
            </label>
            <textarea
              rows={3}
              value={factsheetText}
              onChange={(e) => setFactsheetText(e.target.value)}
              placeholder="Lipește aici textul extras din PDF-ul Factsheet/KID (ex: NVIDIA Corp 6.8%, Microsoft Corp 6.5%, TER: 0.07%)..."
              className="w-full bg-slate-950 border border-slate-700 rounded p-2.5 text-xs text-slate-200 outline-none focus:ring-1 focus:ring-blue-500"
            />
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={handleParseFactsheetText}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors"
              >
                <Sparkles size={14} /> Extrage & Populează automat
              </button>
            </div>
          </div>

          {/* HOLDINGS TABLE EDITOR */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Componente Top ({editForm.holdings.length} acțiuni, Pondere Totală: {editForm.holdings.reduce((sum, h) => sum + (Number(h.weight) || 0), 0).toFixed(1)}%)
              </span>
              <button
                type="button"
                onClick={handleAddHoldingRow}
                className="bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1"
              >
                <Plus size={14} /> Adaugă Componentă
              </button>
            </div>

            <div className="max-h-60 overflow-y-auto space-y-2 pr-1 border border-slate-800 p-2 rounded-xl bg-slate-900">
              {editForm.holdings.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-slate-950 p-2 rounded border border-slate-800">
                  <input
                    type="text"
                    value={h.symbol}
                    onChange={(e) => {
                      const newH = [...editForm.holdings];
                      newH[idx].symbol = e.target.value;
                      setEditForm({ ...editForm, holdings: newH });
                    }}
                    placeholder="Ticker (ex: NVDA)"
                    className="w-24 bg-slate-900 border border-slate-700 rounded p-1.5 text-xs font-mono font-bold text-emerald-400 uppercase outline-none"
                  />
                  <input
                    type="text"
                    value={h.name}
                    onChange={(e) => {
                      const newH = [...editForm.holdings];
                      newH[idx].name = e.target.value;
                      setEditForm({ ...editForm, holdings: newH });
                    }}
                    placeholder="Nume Companie (ex: NVIDIA Corp)"
                    className="flex-1 bg-slate-900 border border-slate-700 rounded p-1.5 text-xs text-white outline-none"
                  />
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      step="0.1"
                      value={h.weight}
                      onChange={(e) => {
                        const newH = [...editForm.holdings];
                        newH[idx].weight = parseFloat(e.target.value) || 0;
                        setEditForm({ ...editForm, holdings: newH });
                      }}
                      placeholder="%"
                      className="w-20 bg-slate-900 border border-slate-700 rounded p-1.5 text-xs text-right font-mono text-white outline-none"
                    />
                    <span className="text-xs text-slate-400 font-mono">%</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveHoldingRow(idx)}
                    className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* SAVE BUTTONS */}
          <div className="flex justify-end gap-3 border-t border-slate-800 pt-3">
            <button
              onClick={() => { setEditingKey(null); setEditForm(null); }}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-4 py-2 rounded-lg"
            >
              Anulează
            </button>
            <button
              onClick={handleSaveEdit}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-2 rounded-lg shadow"
            >
              Salvează ETF în Baza de Date
            </button>
          </div>
        </div>
      )}

      {/* ETF CARDS LIST */}
      {keysToRender.length === 0 ? (
        <div className="p-8 text-center bg-slate-950 rounded-xl border border-slate-800 text-slate-400 space-y-2">
          <AlertCircle size={28} className="mx-auto text-amber-400" />
          <p className="text-sm font-medium">
            {showOnlyHeld
              ? 'Nu a fost găsit niciun ETF în portofoliul tău actual.'
              : 'Nu există ETF-uri potrivite criteriilor de căutare.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keysToRender.map((key) => {
            const etf = etfDatabase[key];
            const held = heldEtfMap[key];

            // If shown in held mode and ETF is NOT configured yet
            if (!etf && held) {
              return (
                <div key={key} className="bg-slate-950 border-2 border-amber-500/60 rounded-xl p-5 space-y-3 shadow-lg">
                  <div className="flex justify-between items-start border-b border-slate-800 pb-3">
                    <div>
                      <h4 className="font-bold text-amber-400 text-base font-mono flex items-center gap-2">
                        {key}
                        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
                          Neconfigurat
                        </span>
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5 font-medium">
                        {held.assets[0]?.name || 'ETF din Portofoliu'}
                      </p>
                    </div>

                    <button
                      onClick={() => handleStartEdit(key)}
                      className="bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 shadow transition-colors"
                    >
                      <Plus size={14} /> Configurează Factsheet
                    </button>
                  </div>

                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-xs font-mono space-y-1">
                    <div className="text-slate-400 flex justify-between">
                      <span>Deținere în Portofoliu:</span>
                      <span className="text-white font-bold">{held.totalQuantity.toFixed(2)} u</span>
                    </div>
                    <div className="text-slate-400 flex justify-between">
                      <span>Valoare Investită Actuală:</span>
                      <span className="text-emerald-400 font-bold">
                        {held.totalValue.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} {currency}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 italic">
                    Acest ETF există în portofoliul tău dar nu are componentele adăugate în baza de date. Apasă pe butonul de mai sus pentru a-i adăuga ISIN, TER și componentele top de pe JustETF sau BVB!
                  </p>
                </div>
              );
            }

            if (!etf) return null;

            return (
              <div key={key} className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3 hover:border-slate-700 transition-all shadow-md">
                {/* CARD HEADER */}
                <div className="flex justify-between items-start border-b border-slate-800 pb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-white text-base font-mono">{etf.symbol}</h4>
                      <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30 font-mono font-bold">
                        TER: {etf.ter}%
                      </span>
                      {etf.isin && (
                        <span className="text-[11px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30 font-mono">
                          ISIN: {etf.isin}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 font-medium">{etf.name}</p>

                    {/* OFFICIAL SOURCE LINK */}
                    {etf.officialSourceUrl ? (
                      <a
                        href={etf.officialSourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 transition-colors font-medium mt-1"
                      >
                        <Globe size={13} /> Sursă Oficială Factsheet / JustETF <ExternalLink size={11} />
                      </a>
                    ) : etf.isin ? (
                      <a
                        href={`https://www.justetf.com/en/search.html?search=${etf.isin}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300 transition-colors mt-1"
                      >
                        <Globe size={13} /> Caută pe JustETF ({etf.isin}) <ExternalLink size={11} />
                      </a>
                    ) : null}
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleStartEdit(key)}
                      className="text-xs bg-slate-800 hover:bg-slate-700 text-blue-300 px-2.5 py-1.5 rounded border border-slate-700 transition-colors font-medium"
                    >
                      Editează
                    </button>
                    <button
                      onClick={() => handleDeleteEtf(key)}
                      className="text-slate-500 hover:text-rose-400 p-1.5 transition-colors"
                      title="Șterge ETF"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                {/* REAL TIME PORTFOLIO METRICS IF HELD */}
                {held && (
                  <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 text-xs font-mono flex justify-between items-center gap-2">
                    <span className="text-slate-400">
                      Deținere Portofoliu: <strong className="text-white">{held.totalQuantity.toFixed(2)} u</strong>
                    </span>
                    <span className="text-slate-400">
                      Valoare Investită: <strong className="text-emerald-400">{held.totalValue.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} {currency}</strong>
                    </span>
                  </div>
                )}

                {/* HOLDINGS TABLE */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] text-slate-400 uppercase font-bold">
                    <span>Top Componente ({etf.holdings.length})</span>
                    <span>Pondere %</span>
                  </div>
                  <div className="max-h-44 overflow-y-auto space-y-1 pr-1">
                    {etf.holdings.map((h, i) => (
                      <div key={i} className="flex justify-between items-center text-xs bg-slate-900 p-2 rounded border border-slate-800/80">
                        <span className="font-mono font-bold text-emerald-400">
                          {h.symbol} <span className="font-normal text-slate-300">({h.name})</span>
                        </span>
                        <span className="font-mono font-bold text-white">{h.weight}%</span>
                      </div>
                    ))}
                  </div>

                  {/* TOTAL SUM ROW */}
                  <div className="flex flex-col gap-1 text-xs bg-slate-900 p-2 rounded border border-amber-500/30 font-mono bg-gradient-to-r from-amber-950/40 to-slate-900">
                    <div className="flex justify-between items-center font-bold">
                      <span className="text-amber-400 flex items-center gap-1.5">
                        TOTAL ({etf.holdings.length} componente)
                      </span>
                      <span className="text-amber-300 font-bold">
                        {etf.holdings.reduce((sum, h) => sum + (Number(h.weight) || 0), 0).toFixed(2)}%
                      </span>
                    </div>
                    {etf.holdings.reduce((sum, h) => sum + (Number(h.weight) || 0), 0) < 98 && (
                      <p className="text-[10px] text-amber-200/70 font-sans font-normal leading-tight pt-1 border-t border-amber-500/20">
                        * Ponderile brute sunt preluate direct din raportul oficial iShares/BlackRock, unde rotunjirea la 2-3 zecimale pentru cele {etf.holdings.length} de poziții small-cap acumulează o diferență matematică față de 100%.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const ETFOverlapAnalysis: React.FC<ETFOverlapAnalysisProps> = ({
  assets,
  portfolios,
  activePortfolioId,
  currency,
  convertValue
}) => {
  const [activeTab, setActiveTab] = useState<'exposure' | 'chart' | 'overlap' | 'ter' | 'config'>('exposure');
  const [searchTerm, setSearchTerm] = useState('');
  const [tableSortOption, setTableSortOption] = useState<'alpha-asc' | 'alpha-desc' | 'name-asc' | 'val-desc' | 'val-asc'>('alpha-asc');
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [portfolioFilter, setPortfolioFilter] = useState<string>('all'); // 'all' or portfolio ID
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Custom ETF database state loaded from local storage if available
  const [etfDatabase, setEtfDatabase] = useState<Record<string, ETFCoverageData>>(() => {
    try {
      const saved = localStorage.getItem('investai_etf_db_v2') || localStorage.getItem('investai_custom_etf_db');
      if (saved) {
        const parsed = JSON.parse(saved);

        // Delete old redundant alias tickers if present in saved state
        const redundantKeys = ['EUDF', 'WDEF', 'WDEF.L', 'DFNS', 'DFNS.DE', 'EXH4', 'EXH4.DE'];
        redundantKeys.forEach(rk => {
          delete parsed[rk];
        });

        const merged = { ...DEFAULT_ETF_DATABASE, ...parsed };

        // Overwrite entries in parsed that are dummy stubs, incomplete, or outdated compared to DEFAULT_ETF_DATABASE
        Object.keys(DEFAULT_ETF_DATABASE).forEach(k => {
          const defaultEtf = DEFAULT_ETF_DATABASE[k];
          const savedEtf = parsed[k];

          const hasDummyHoldings = savedEtf && savedEtf.holdings && 
            (savedEtf.holdings.some((h: any) => h.symbol === 'AAPL' && h.weight === 10) ||
             savedEtf.holdings.some((h: any) => h.symbol === 'MSFT' && h.weight === 8) ||
             (savedEtf.holdings.length === 2 && savedEtf.holdings[0]?.symbol === 'AAPL'));

          const isIncompleteHoldings = savedEtf && savedEtf.holdings && defaultEtf.holdings &&
            (savedEtf.holdings.length < defaultEtf.holdings.length);

          if (
            !savedEtf ||
            hasDummyHoldings ||
            isIncompleteHoldings ||
            (defaultEtf.lastUpdated && (!savedEtf.lastUpdated || defaultEtf.lastUpdated >= savedEtf.lastUpdated)) ||
            (defaultEtf.sectors && defaultEtf.sectors.length > 0 && (!savedEtf.sectors || savedEtf.sectors.length === 0))
          ) {
            merged[k] = defaultEtf;
          }
        });

        // Persist refreshed merged db back to localStorage
        try {
          localStorage.setItem('investai_etf_db_v2', JSON.stringify(merged));
          localStorage.removeItem('investai_custom_etf_db');
        } catch (err) {
          console.error(err);
        }

        return merged;
      }
    } catch (e) {
      console.error('Failed to load custom ETF DB', e);
    }
    return DEFAULT_ETF_DATABASE;
  });

  // Save ETF DB changes
  const updateEtfDb = (newDb: Record<string, ETFCoverageData>) => {
    setEtfDatabase(newDb);
    try {
      localStorage.setItem('investai_etf_db_v2', JSON.stringify(newDb));
    } catch (e) {
      console.error('Failed to save ETF DB', e);
    }
  };

  // Filter assets to open positions with value > 0 and portfolio filter
  const openAssets = useMemo(() => {
    return assets.filter(a => {
      const hasQty = Number(a.quantity) >= 0.0001;
      if (!hasQty) return false;
      if (portfolioFilter === 'all') return true;
      // Check if asset belongs to selected portfolio
      const p = portfolios.find(item => item.id === portfolioFilter);
      return p?.assets.some(pa => pa.id === a.id);
    });
  }, [assets, portfolioFilter, portfolios]);

  // Total Portfolio Net Worth for allocation percentages
  const totalPortfolioValue = useMemo(() => {
    return openAssets.reduce((sum, a) => {
      const val = convertValue(a.quantity * a.currentPrice, a.currency, currency);
      return sum + val;
    }, 0);
  }, [openAssets, convertValue, currency]);

  // Identify ETF / ETN assets in user's portfolio (either marked as ETF or present in etfDatabase)
  const userEtfAssets = useMemo(() => {
    return openAssets.filter(a => {
      if (!a) return false;
      if (a.type === AssetType.ETF) return true;
      if (a.symbol) {
        const matchedKey = findEtfDatabaseKey(a.symbol, etfDatabase);
        if (matchedKey && etfDatabase[matchedKey]) return true;
      }
      return false;
    });
  }, [openAssets, etfDatabase]);

  // Identify direct stock assets in user's portfolio
  const userStockAssets = useMemo(() => {
    return openAssets.filter(a => {
      if (!a) return false;
      const isEtf = userEtfAssets.some(e => e.id === a.id);
      if (isEtf) return false;
      if (a.type === AssetType.CASH || a.type === AssetType.BANK_DEPOSIT) return false;
      return true;
    });
  }, [openAssets, userEtfAssets]);

  // --- LOOK-THROUGH CALCULATION ---
  // Calculates cumulative exposure for every underlying company with clean Yahoo Finance Tickers
  const companyExposures = useMemo(() => {
    if (totalPortfolioValue <= 0) return [];

    const map: Record<string, {
      uniqueKey: string;
      normalizedSymbol: string;
      displayName: string;
      directValue: number; // Value in reporting currency
      indirectValue: number; // Value in reporting currency via ETFs
      totalValue: number;
      directSources: { portfolioName: string; rawSymbol: string; quantity: number; buyPrice: number; currentPrice: number; currency: string }[];
      etfSources: { etfSymbol: string; etfName: string; etfValue: number; companyWeightInEtf: number; companyValueFromEtf: number }[];
    }> = {};

    // 1. Process Direct Stocks
    userStockAssets.forEach(asset => {
      const uniqueKey = getCompanyUniqueKey(asset);
      const normSym = formatNumericTicker(asset.symbol, asset.location, asset.name);
      const val = convertValue(asset.quantity * asset.currentPrice, asset.currency, currency);
      
      const rawSym = (asset.symbol || '').toUpperCase().trim();
      const aliasMatch =
        GLOBAL_COMPANY_ALIASES[rawSym] ||
        GLOBAL_COMPANY_ALIASES[normSym] ||
        (asset.isin ? GLOBAL_COMPANY_ALIASES[asset.isin.toUpperCase().trim()] : null);

      const prefSymbol = aliasMatch ? aliasMatch.symbol : normSym;
      const prefName = aliasMatch ? aliasMatch.name : (asset.name || normSym);

      if (!map[uniqueKey]) {
        map[uniqueKey] = {
          uniqueKey,
          normalizedSymbol: prefSymbol,
          displayName: prefName,
          directValue: 0,
          indirectValue: 0,
          totalValue: 0,
          directSources: [],
          etfSources: []
        };
      } else {
        if (aliasMatch && map[uniqueKey].normalizedSymbol !== aliasMatch.symbol) {
          map[uniqueKey].normalizedSymbol = aliasMatch.symbol;
          map[uniqueKey].displayName = aliasMatch.name;
        }
      }
      
      map[uniqueKey].directValue += val;
      map[uniqueKey].totalValue += val;

      const pName = portfolios.find(p => p.assets.some(pa => pa.id === asset.id))?.name || 'Portofoliu';
      const existingDirect = map[uniqueKey].directSources.find(ds => ds.portfolioName === pName && ds.rawSymbol === asset.symbol);
      if (existingDirect) {
        existingDirect.quantity += asset.quantity;
      } else {
        map[uniqueKey].directSources.push({
          portfolioName: pName,
          rawSymbol: asset.symbol,
          quantity: asset.quantity,
          buyPrice: asset.buyPrice,
          currentPrice: asset.currentPrice,
          currency: asset.currency
        });
      }
    });

    // 2. Process ETFs (Look-Through)
    userEtfAssets.forEach(asset => {
      const matchKey = findEtfDatabaseKey(asset.symbol, etfDatabase);
      const etfData = matchKey ? etfDatabase[matchKey] : null;

      const etfVal = convertValue(asset.quantity * asset.currentPrice, asset.currency, currency);

      if (etfData && etfData.holdings && etfData.holdings.length > 0) {
        // Track seen holdings inside this specific ETF to avoid processing duplicate holding records within the same ETF dataset
        const seenHoldingsInEtf = new Set<string>();

        etfData.holdings.forEach(h => {
          const uniqueKey = getCompanyUniqueKey(h);
          if (seenHoldingsInEtf.has(uniqueKey)) return;
          seenHoldingsInEtf.add(uniqueKey);

          const normSym = formatNumericTicker(h.symbol, h.location, h.name);
          const compVal = etfVal * (h.weight / 100);

          const rawHSym = (h.symbol || '').toUpperCase().trim();
          const aliasMatch =
            GLOBAL_COMPANY_ALIASES[rawHSym] ||
            GLOBAL_COMPANY_ALIASES[normSym] ||
            (h.isin ? GLOBAL_COMPANY_ALIASES[h.isin.toUpperCase().trim()] : null);

          const prefSymbol = aliasMatch ? aliasMatch.symbol : normSym;
          const prefName = aliasMatch ? aliasMatch.name : (h.name || normSym);

          if (!map[uniqueKey]) {
            map[uniqueKey] = {
              uniqueKey,
              normalizedSymbol: prefSymbol,
              displayName: prefName,
              directValue: 0,
              indirectValue: 0,
              totalValue: 0,
              directSources: [],
              etfSources: []
            };
          } else {
            if (aliasMatch && map[uniqueKey].normalizedSymbol !== aliasMatch.symbol) {
              map[uniqueKey].normalizedSymbol = aliasMatch.symbol;
              map[uniqueKey].displayName = aliasMatch.name;
            }
          }

          map[uniqueKey].indirectValue += compVal;
          map[uniqueKey].totalValue += compVal;

          // Consolidate ETF source to prevent duplicate ETF rows (e.g. IS3N.DE appearing twice for the same company)
          const existingSource = map[uniqueKey].etfSources.find(s => s.etfSymbol === asset.symbol);
          if (existingSource) {
            existingSource.companyValueFromEtf += compVal;
          } else {
            map[uniqueKey].etfSources.push({
              etfSymbol: asset.symbol,
              etfName: asset.name || etfData.name,
              etfValue: etfVal,
              companyWeightInEtf: h.weight,
              companyValueFromEtf: compVal
            });
          }
        });
      }
    });

    // Precompute Map for fast O(1) asset lookup instead of repeated O(N) array finds
    const assetsByNormSymbolMap = new Map<string, Asset>();
    openAssets.forEach(a => {
      if (a && a.symbol) assetsByNormSymbolMap.set(normalizeYahooTicker(a.symbol), a);
    });
    assets.forEach(a => {
      if (a && a.symbol && !assetsByNormSymbolMap.has(normalizeYahooTicker(a.symbol))) {
        assetsByNormSymbolMap.set(normalizeYahooTicker(a.symbol), a);
      }
    });

    // Secondary consolidation step: Merge entries by uniqueKey to guarantee zero duplicate company rows while keeping distinct entities (e.g. BVB:TEL vs TE Connectivity TEL) separated
    const consolidatedMap: Record<string, typeof map[string]> = {};
    for (const item of Object.values(map)) {
      const symKey = (item.uniqueKey || item.normalizedSymbol || 'UNKNOWN').trim().toUpperCase();
      if (!consolidatedMap[symKey]) {
        consolidatedMap[symKey] = { ...item };
      } else {
        const existing = consolidatedMap[symKey];
        existing.directValue += item.directValue;
        existing.indirectValue += item.indirectValue;
        existing.totalValue += item.totalValue;

        item.directSources.forEach(ds => {
          const match = existing.directSources.find(s => s.portfolioName === ds.portfolioName && s.rawSymbol === ds.rawSymbol);
          if (match) {
            match.quantity += ds.quantity;
          } else {
            existing.directSources.push(ds);
          }
        });

        item.etfSources.forEach(es => {
          const match = existing.etfSources.find(s => s.etfSymbol === es.etfSymbol);
          if (match) {
            match.companyValueFromEtf += es.companyValueFromEtf;
          } else {
            existing.etfSources.push(es);
          }
        });
      }
    }

    // Convert map to array & calculate percentages, unit share prices, and cumulative share quantities
    return Object.values(consolidatedMap)
      .map(item => {
        // Direct shares count
        const directShares = item.directSources.reduce((sum, ds) => sum + ds.quantity, 0);

        // Find unit share price in reporting currency
        let unitPriceInReportingCurrency = 0;
        if (directShares > 0 && item.directValue > 0) {
          unitPriceInReportingCurrency = item.directValue / directShares;
        } else {
          // Check if asset exists in openAssets or assets via fast O(1) Map lookup
          const matchAsset = assetsByNormSymbolMap.get(item.normalizedSymbol);
          if (matchAsset && matchAsset.currentPrice > 0) {
            unitPriceInReportingCurrency = convertValue(matchAsset.currentPrice, matchAsset.currency, currency);
          } else {
            // Reference prices for popular global tickers
            const POPULAR_PRICES: Record<string, { price: number; curr: string }> = {
              'NVDA': { price: 120, curr: 'USD' },
              'AAPL': { price: 225, curr: 'USD' },
              'MSFT': { price: 440, curr: 'USD' },
              'AMZN': { price: 185, curr: 'USD' },
              'GOOGL': { price: 175, curr: 'USD' },
              'GOOG': { price: 175, curr: 'USD' },
              'META': { price: 500, curr: 'USD' },
              'TSLA': { price: 220, curr: 'USD' },
              'AVGO': { price: 160, curr: 'USD' },
              'LLY': { price: 800, curr: 'USD' },
              'JPM': { price: 210, curr: 'USD' },
              'PLTR': { price: 28, curr: 'USD' },
              'RTX': { price: 120, curr: 'USD' },
              'LMT': { price: 550, curr: 'USD' },
              'RHM': { price: 500, curr: 'EUR' },
              'BA': { price: 580, curr: 'GBP' },
              'HO': { price: 160, curr: 'EUR' },
              'LDO': { price: 22, curr: 'EUR' },
              'AIR': { price: 135, curr: 'EUR' },
              'SAF': { price: 200, curr: 'EUR' },
              'SAAB': { price: 240, curr: 'SEK' },
              'ESLT': { price: 200, curr: 'USD' },
              'CW': { price: 290, curr: 'USD' },
              'TLV': { price: 28, curr: 'RON' },
              'SNP': { price: 0.70, curr: 'RON' },
              'SNG': { price: 6.0, curr: 'RON' },
              'H2O': { price: 120, curr: 'RON' },
              'DIGI': { price: 65, curr: 'RON' },
            };
            if (POPULAR_PRICES[item.normalizedSymbol]) {
              unitPriceInReportingCurrency = convertValue(
                POPULAR_PRICES[item.normalizedSymbol].price,
                POPULAR_PRICES[item.normalizedSymbol].curr,
                currency
              );
            } else {
              // General fallback
              unitPriceInReportingCurrency = convertValue(100, 'USD', currency);
            }
          }
        }

        // Calculate indirect shares from each ETF source
        const enrichedEtfSources = item.etfSources.map(es => {
          const sharesFromEtf = unitPriceInReportingCurrency > 0 ? es.companyValueFromEtf / unitPriceInReportingCurrency : 0;
          return {
            ...es,
            sharesFromEtf
          };
        });

        const indirectShares = enrichedEtfSources.reduce((sum, es) => sum + es.sharesFromEtf, 0);
        const totalShares = directShares + indirectShares;

        return {
          ...item,
          etfSources: enrichedEtfSources,
          unitPriceInReportingCurrency,
          directShares,
          indirectShares,
          totalShares,
          totalPercentage: totalPortfolioValue > 0 ? (item.totalValue / totalPortfolioValue) * 100 : 0,
          directPercentage: totalPortfolioValue > 0 ? (item.directValue / totalPortfolioValue) * 100 : 0,
          indirectPercentage: totalPortfolioValue > 0 ? (item.indirectValue / totalPortfolioValue) * 100 : 0,
          sourceCount: item.directSources.length + item.etfSources.length
        };
      })
      .sort((a, b) => b.totalValue - a.totalValue);
  }, [userStockAssets, userEtfAssets, totalPortfolioValue, etfDatabase, convertValue, currency, portfolios, openAssets, assets]);

  // Filtered and sorted companies for the exposure table
  const filteredCompanies = useMemo(() => {
    let list = companyExposures;

    if (searchTerm && searchTerm.trim()) {
      const rawTerm = searchTerm.trim().toLowerCase();
      const normTerm = normalizeYahooTicker(rawTerm).toLowerCase();

      list = companyExposures.filter(c => {
        const sym = (c.normalizedSymbol || '').toLowerCase();
        const name = (c.displayName || '').toLowerCase();
        const key = (c.uniqueKey || '').toLowerCase();

        // 1. Direct match on ticker symbol, display name, or unique key
        if (sym.includes(rawTerm) || sym.includes(normTerm) || name.includes(rawTerm) || key.includes(rawTerm)) {
          return true;
        }

        // 2. Direct sources match (rawSymbol or portfolioName)
        if (c.directSources && c.directSources.some(ds => 
          ds.rawSymbol.toLowerCase().includes(rawTerm) || ds.portfolioName.toLowerCase().includes(rawTerm)
        )) {
          return true;
        }

        // 3. ETF sources match (etfSymbol or etfName)
        if (c.etfSources && c.etfSources.some(es => 
          es.etfSymbol.toLowerCase().includes(rawTerm) || es.etfName.toLowerCase().includes(rawTerm)
        )) {
          return true;
        }

        // 4. Search in global aliases for this company
        for (const [aliasKey, aliasData] of Object.entries(GLOBAL_COMPANY_ALIASES)) {
          if (aliasData.key === c.uniqueKey || aliasData.symbol.toLowerCase() === sym) {
            if (
              aliasKey.toLowerCase().includes(rawTerm) ||
              aliasData.symbol.toLowerCase().includes(rawTerm) ||
              aliasData.name.toLowerCase().includes(rawTerm)
            ) {
              return true;
            }
          }
        }

        return false;
      });
    }

    return [...list].sort((a, b) => {
      const symA = (a.normalizedSymbol || '').trim().toUpperCase();
      const symB = (b.normalizedSymbol || '').trim().toUpperCase();
      const nameA = (a.displayName || a.normalizedSymbol || '').trim();
      const nameB = (b.displayName || b.normalizedSymbol || '').trim();

      if (tableSortOption === 'alpha-asc') {
        return symA.localeCompare(symB, 'en', { numeric: true, sensitivity: 'base' });
      }
      if (tableSortOption === 'alpha-desc') {
        return symB.localeCompare(symA, 'en', { numeric: true, sensitivity: 'base' });
      }
      if (tableSortOption === 'name-asc') {
        return nameA.localeCompare(nameB, 'ro', { numeric: true, sensitivity: 'base' });
      }
      if (tableSortOption === 'val-desc') {
        return b.totalValue - a.totalValue;
      }
      if (tableSortOption === 'val-asc') {
        return a.totalValue - b.totalValue;
      }
      return 0;
    });
  }, [companyExposures, searchTerm, tableSortOption]);

  // Top 10 Data for Chart (always sorted by highest total value)
  const topCompaniesChartData = useMemo(() => {
    return [...companyExposures]
      .sort((a, b) => b.totalValue - a.totalValue)
      .slice(0, 10)
      .map(c => ({
        name: c.normalizedSymbol,
        fullName: c.displayName,
        Direct: Number(c.directPercentage.toFixed(2)),
        ETF: Number(c.indirectPercentage.toFixed(2)),
        Total: Number(c.totalPercentage.toFixed(2)),
        valueTotal: c.totalValue,
        totalShares: c.totalShares
      }));
  }, [companyExposures]);

  // --- ETF OVERLAP MATRIX CALCULATION ---
  const etfOverlapData = useMemo(() => {
    const list: {
      etf1: { symbol: string; name: string; value: number };
      etf2: { symbol: string; name: string; value: number };
      sharedHoldings: { symbol: string; name: string; weightInEtf1: number; weightInEtf2: number }[];
      overlapPercent: number; // sum of min shared weights
    }[] = [];

    const etfAssetList = userEtfAssets.map(a => {
      const matchKey = findEtfDatabaseKey(a.symbol, etfDatabase);
      const etfData = matchKey ? etfDatabase[matchKey] : null;
      return {
        asset: a,
        data: etfData,
        value: convertValue(a.quantity * a.currentPrice, a.currency, currency)
      };
    }).filter(e => e.data && e.data.holdings);

    for (let i = 0; i < etfAssetList.length; i++) {
      for (let j = i + 1; j < etfAssetList.length; j++) {
        const e1 = etfAssetList[i];
        const e2 = etfAssetList[j];

        const shared: { symbol: string; name: string; weightInEtf1: number; weightInEtf2: number }[] = [];
        let totalSharedWeight = 0;

        const e2HoldingsMap = new Map<string, typeof e2.data.holdings[0]>();
        e2.data!.holdings.forEach(x => {
          e2HoldingsMap.set(getCompanyUniqueKey(x), x);
        });

        e1.data!.holdings.forEach(h1 => {
          const key1 = getCompanyUniqueKey(h1);
          const h2 = e2HoldingsMap.get(key1);
          if (h2) {
            shared.push({
              symbol: normalizeYahooTicker(h1.symbol),
              name: h1.name,
              weightInEtf1: h1.weight,
              weightInEtf2: h2.weight
            });
            totalSharedWeight += Math.min(h1.weight, h2.weight);
          }
        });

        list.push({
          etf1: { symbol: e1.asset.symbol, name: e1.asset.name || e1.data!.name, value: e1.value },
          etf2: { symbol: e2.asset.symbol, name: e2.asset.name || e2.data!.name, value: e2.value },
          sharedHoldings: shared.sort((a,b) => Math.max(b.weightInEtf1, b.weightInEtf2) - Math.max(a.weightInEtf1, a.weightInEtf2)),
          overlapPercent: totalSharedWeight
        });
      }
    }

    return list.sort((a,b) => b.overlapPercent - a.overlapPercent);
  }, [userEtfAssets, etfDatabase, convertValue, currency]);

  // --- TER COST & OPTIMIZATION CALCULATION ---
  const terAnalysis = useMemo(() => {
    let totalEtfValue = 0;
    let totalWeightedTerCost = 0;

    const etfBreakdown = userEtfAssets.map(a => {
      const matchKey = findEtfDatabaseKey(a.symbol, etfDatabase);
      const etfData = matchKey ? etfDatabase[matchKey] : null;
      
      const ter = etfData ? etfData.ter : 0.20; // default 0.20% if unknown
      const val = convertValue(a.quantity * a.currentPrice, a.currency, currency);
      const yearlyCost = val * (ter / 100);

      totalEtfValue += val;
      totalWeightedTerCost += yearlyCost;

      const pName = portfolios.find(p => p.assets.some(pa => pa.id === a.id))?.name || 'Portofoliu';

      return {
        id: a.id,
        symbol: a.symbol,
        name: a.name || (etfData ? etfData.name : 'ETF'),
        category: etfData ? etfData.category : 'General',
        portfolioName: pName,
        value: val,
        ter: ter,
        yearlyCost: yearlyCost,
        currency: currency
      };
    }).sort((a,b) => b.yearlyCost - a.yearlyCost);

    const averageWeightedTer = totalEtfValue > 0 ? (totalWeightedTerCost / totalEtfValue) * 100 : 0;

    // Recommendations Engine
    const recommendations: { title: string; type: 'warning' | 'info' | 'success'; description: string; potentialSavings: number }[] = [];

    // Check high TER ETFs (e.g. BVB TVBETETF with 1.45%)
    const highTerEtfs = etfBreakdown.filter(e => e.ter >= 0.80);
    highTerEtfs.forEach(e => {
      if (e.value > 1000) {
        const potentialSave = e.yearlyCost * 0.85; // Savings if buying direct top stocks
        recommendations.push({
          title: `TER ridicat la ETF ${e.symbol} (${e.ter}%)`,
          type: 'warning',
          description: `ETF-ul ${e.symbol} are un comision anual de administrare de ${e.ter}% (${e.yearlyCost.toFixed(2)} ${currency}/an). Pentru o valoare de ${e.value.toFixed(0)} ${currency}, poți lua în considerare achiziția directă a primelor 3-4 acțiuni din indice (ex: TLV, SNP, H2O pe BVB) pentru a elimina comisionul de administrare.`,
          potentialSavings: potentialSave
        });
      }
    });

    // Check US Tech Overlap (e.g., SXR8 + NQSE + XAIX + VVSM)
    const usTechEtfs = etfBreakdown.filter(e => {
      const s = e.symbol.toUpperCase();
      return s.includes('SXR8') || s.includes('NQSE') || s.includes('XAIX') || s.includes('QDVE') || s.includes('VVSM') || s.includes('SMH') || s.includes('VWCE');
    });

    if (usTechEtfs.length >= 2) {
      const expensiveTech = usTechEtfs.find(e => e.ter > 0.25);
      const cheapTech = usTechEtfs.find(e => e.ter <= 0.15);

      if (expensiveTech && cheapTech) {
        const potentialSave = expensiveTech.value * ((expensiveTech.ter - cheapTech.ter) / 100);
        recommendations.push({
          title: `Suprapunere de active US Tech / S&P500 (${expensiveTech.symbol} vs ${cheapTech.symbol})`,
          type: 'info',
          description: `Deții atât ${cheapTech.symbol} (TER ${cheapTech.ter}%) cât și ${expensiveTech.symbol} (TER ${expensiveTech.ter}%). Deținerile lor principale (NVDA, MSFT, AAPL, AMZN) se suprapun în proporție ridicată. Consolidarea poziției din ${expensiveTech.symbol} în ${cheapTech.symbol} îți va optimiza costurile anuale.`,
          potentialSavings: potentialSave
        });
      }
    }

    // Check overall portfolio optimization
    if (totalWeightedTerCost > 50) {
      recommendations.push({
        title: `Eficiență generală costuri TER`,
        type: 'info',
        description: `Plătești în total ${totalWeightedTerCost.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency} pe an în comisioane de administrare ale ETF-urilor (${averageWeightedTer.toFixed(2)}% medie ponderată). Prin reducerea ETF-urilor cu TER > 0.30% poți reține mai mult din randamentul compus pe termen lung.`,
        potentialSavings: totalWeightedTerCost * 0.3
      });
    }

    return {
      totalEtfValue,
      totalWeightedTerCost,
      averageWeightedTer,
      etfBreakdown,
      recommendations
    };
  }, [userEtfAssets, etfDatabase, convertValue, currency, portfolios]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
      {/* HEADER SECTION ON MAIN PAGE */}
      <div className="p-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500/20 p-2.5 rounded-xl border border-emerald-500/30">
              <Layers size={22} className="text-emerald-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                Analiză Micro-Active & Optimizări Portofoliu
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Calculează expunerea reală cumulată (Individual + ETF)
              </p>
            </div>
          </div>
        </div>

        {/* PORTFOLIO FILTER & QUICK METRICS - SINGLE ROW */}
        <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
          {/* Portfolio Selector Filter */}
          <div className="bg-slate-950 border border-slate-800 p-2 rounded-xl flex items-center gap-2 text-xs shadow-inner">
            <Filter size={14} className="text-slate-400 ml-1 shrink-0" />
            <span className="text-slate-400 font-medium hidden sm:inline">Portofoliu:</span>
            <select
              value={portfolioFilter}
              onChange={(e) => setPortfolioFilter(e.target.value)}
              className="bg-slate-900 text-white font-bold px-2.5 py-1 rounded-lg border border-slate-700 outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="all">Toate cele {portfolios.length} portofolii (Cumulat)</option>
              {portfolios.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>

          <div className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl text-left shrink-0 shadow-inner">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">Valoare Totală ETF-uri</span>
            <span className="text-sm font-bold font-mono text-emerald-400">
              {terAnalysis.totalEtfValue.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {currency}
            </span>
          </div>

          <div className="bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl text-left shrink-0 shadow-inner">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">Cost Anual TER</span>
            <span className="text-sm font-bold font-mono text-amber-400 flex items-baseline gap-1">
              <span>{terAnalysis.totalWeightedTerCost.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {currency}/an</span>
              <span className="text-[10px] text-slate-400 font-normal">({terAnalysis.averageWeightedTer.toFixed(2)}% mediu)</span>
            </span>
          </div>
        </div>
      </div>

      {/* SUMMARY CONTENT AREA ON MAIN PAGE */}
      <div className="p-6 space-y-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles size={16} className="text-emerald-400" />
              Diagrame, Tabel & Subcapitole Analiză Detaliată
            </h3>
            <p className="text-xs text-slate-400">
              Accesează raportul complet de expunere cumulată, graficul top 10 active, matricea de suprapunere ETF, recomandările de optimizare TER și configuratorul de bază.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 shrink-0 group"
          >
            <span>Deschide Analiza Detaliată (5 Subcapitole)</span>
            <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 5 SUBCHAPTER SHORTCUT / TAB BUTTONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <button
            onClick={() => { setActiveTab('exposure'); setIsModalOpen(true); }}
            className="p-3.5 bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 rounded-xl text-left transition-all group"
          >
            <div className="text-[10px] uppercase font-bold text-slate-500 group-hover:text-emerald-400 flex items-center justify-between mb-1">
              <span className="flex items-center gap-1.5"><PieIcon size={12} /> Subcapitol 1</span>
              <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-xs font-bold text-white truncate">Tabel Expunere Cumulată</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">{companyExposures.length} companii identificate</div>
          </button>

          <button
            onClick={() => { setActiveTab('chart'); setIsModalOpen(true); }}
            className="p-3.5 bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 rounded-xl text-left transition-all group"
          >
            <div className="text-[10px] uppercase font-bold text-slate-500 group-hover:text-emerald-400 flex items-center justify-between mb-1">
              <span className="flex items-center gap-1.5"><BarChart2 size={12} /> Subcapitol 2</span>
              <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-xs font-bold text-white truncate">Grafic Top 10 Active</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">Defalcare vizuală Direct vs ETF</div>
          </button>

          <button
            onClick={() => { setActiveTab('overlap'); setIsModalOpen(true); }}
            className="p-3.5 bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 rounded-xl text-left transition-all group"
          >
            <div className="text-[10px] uppercase font-bold text-slate-500 group-hover:text-emerald-400 flex items-center justify-between mb-1">
              <span className="flex items-center gap-1.5"><Maximize2 size={12} /> Subcapitol 3</span>
              <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-xs font-bold text-white truncate">Matrice Suprapunere ETF</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">{etfOverlapData.length} perechi comparate</div>
          </button>

          <button
            onClick={() => { setActiveTab('ter'); setIsModalOpen(true); }}
            className="p-3.5 bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 rounded-xl text-left transition-all group"
          >
            <div className="text-[10px] uppercase font-bold text-amber-500 flex items-center justify-between mb-1">
              <span className="flex items-center gap-1.5"><Sparkles size={12} /> Subcapitol 4</span>
              <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-xs font-bold text-white truncate">Optimizare TER</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">{terAnalysis.recommendations.length} recomandări costuri</div>
          </button>

          <button
            onClick={() => { setActiveTab('config'); setIsModalOpen(true); }}
            className="p-3.5 bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 rounded-xl text-left transition-all group sm:col-span-2 lg:col-span-1"
          >
            <div className="text-[10px] uppercase font-bold text-slate-500 group-hover:text-emerald-400 flex items-center justify-between mb-1">
              <span className="flex items-center gap-1.5"><Sliders size={12} /> Subcapitol 5</span>
              <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-xs font-bold text-white truncate">Configurator Bază ETF</div>
            <div className="text-[10px] text-slate-400 font-mono mt-1">Management dețineri & ISIN</div>
          </button>
        </div>
      </div>

      {/* FULL PAGE MODAL FOR THE 5 SUBCHAPTERS */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-7xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto">
            {/* MODAL HEADER */}
            <div className="p-5 border-b border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-500/20 p-2.5 rounded-xl border border-emerald-500/30">
                  <Layers size={22} className="text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    Analiză Micro-Active & Optimizări Portofoliu
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Calculează expunerea reală cumulată (Individual + ETF)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Selector inside modal header */}
                <div className="bg-slate-900 border border-slate-800 p-1.5 rounded-lg flex items-center gap-2 text-xs">
                  <Filter size={14} className="text-slate-400 ml-1" />
                  <select
                    value={portfolioFilter}
                    onChange={(e) => setPortfolioFilter(e.target.value)}
                    className="bg-slate-800 text-white font-medium px-2 py-1 rounded border border-slate-700 outline-none focus:ring-1 focus:ring-emerald-500 text-xs"
                  >
                    <option value="all">Toate cele {portfolios.length} portofolii (Cumulat)</option>
                    {portfolios.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl transition-colors border border-slate-700"
                  title="Închide fereastra"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* NAVIGATION TABS INSIDE MODAL */}
            <div className="bg-slate-950 border-b border-slate-800 px-6 flex overflow-x-auto gap-2 shrink-0">
              <button
                onClick={() => setActiveTab('exposure')}
                className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'exposure'
                    ? 'border-emerald-500 text-emerald-400 bg-slate-900/50'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
                }`}
              >
                <PieIcon size={15} />
                Tabel Expunere Cumulată
                <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full text-[10px]">
                  {companyExposures.length} companii
                </span>
              </button>

              <button
                onClick={() => setActiveTab('chart')}
                className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'chart'
                    ? 'border-emerald-500 text-emerald-400 bg-slate-900/50'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
                }`}
              >
                <BarChart2 size={15} />
                Grafic Top 10 Expuneri
              </button>

              <button
                onClick={() => setActiveTab('overlap')}
                className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'overlap'
                    ? 'border-emerald-500 text-emerald-400 bg-slate-900/50'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
                }`}
              >
                <Maximize2 size={15} />
                Matrice Suprapunere ETF-uri ({etfOverlapData.length})
              </button>

              <button
                onClick={() => setActiveTab('ter')}
                className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'ter'
                    ? 'border-emerald-500 text-emerald-400 bg-slate-900/50'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
                }`}
              >
                <Sparkles size={15} className="text-amber-400" />
                Optimizare TER & Recomandări Comisioane
                {terAnalysis.recommendations.length > 0 && (
                  <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    {terAnalysis.recommendations.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setActiveTab('config')}
                className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === 'config'
                    ? 'border-emerald-500 text-emerald-400 bg-slate-900/50'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
                }`}
              >
                <Sliders size={15} />
                Configurator Bază ETF
              </button>
            </div>

            {/* TAB CONTENT AREA INSIDE MODAL */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {/* TAB 1: CUMULATIVE EXPOSURE LOOK-THROUGH TABLE */}
              {activeTab === 'exposure' && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                      <div className="relative w-full sm:w-80">
                        <Search size={16} className="absolute left-3 top-2.5 text-slate-500" />
                        <input
                          type="text"
                          placeholder="Caută companie (ex: NVDA, MSFT, TLV)..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-8 py-1.5 text-sm text-white focus:ring-1 focus:ring-emerald-500 outline-none"
                        />
                        {searchTerm && (
                          <button
                            onClick={() => setSearchTerm('')}
                            className="absolute right-2.5 top-2.5 text-slate-500 hover:text-white transition-colors"
                            title="Șterge căutarea"
                          >
                            <X size={14} />
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <span className="text-xs text-slate-400 whitespace-nowrap hidden md:inline">Sortare:</span>
                        <select
                          value={tableSortOption}
                          onChange={(e) => setTableSortOption(e.target.value as any)}
                          className="bg-slate-900 border border-slate-700 text-xs text-white rounded-lg px-3 py-1.5 focus:ring-1 focus:ring-emerald-500 outline-none cursor-pointer w-full sm:w-auto"
                        >
                          <option value="alpha-asc">🔤 Ticker (A - Z)</option>
                          <option value="alpha-desc">🔤 Ticker (Z - A)</option>
                          <option value="name-asc">🏢 Nume Companie (A - Z)</option>
                          <option value="val-desc">💰 Valoare (Descrescător)</option>
                          <option value="val-asc">💰 Valoare (Crescător)</option>
                        </select>
                      </div>
                    </div>

                    <div className="text-xs text-slate-400 flex items-center gap-2">
                      <Info size={14} className="text-blue-400 shrink-0" />
                      <span>
                        Procentul și numărul total de acțiuni reflectă expunerea cumulată din achiziții directe + echivalentul de acțiuni deținute indirect prin ETF-uri.
                      </span>
                    </div>
                  </div>

                  {/* COMPANY EXPOSURE TABLE */}
                  <div className="overflow-x-auto rounded-xl border border-slate-800">
                    <table className="min-w-full text-left border-collapse">
                      <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-semibold">
                        <tr>
                          <th 
                            onClick={() => setTableSortOption(prev => prev === 'alpha-asc' ? 'alpha-desc' : 'alpha-asc')}
                            className="p-4 cursor-pointer hover:text-emerald-400 select-none transition-colors"
                          >
                            <div className="flex items-center gap-1.5">
                              <span>Companie (Ticker Yahoo)</span>
                              {tableSortOption === 'alpha-asc' && <ArrowUp size={14} className="text-emerald-400" />}
                              {tableSortOption === 'alpha-desc' && <ArrowDown size={14} className="text-emerald-400" />}
                              {tableSortOption !== 'alpha-asc' && tableSortOption !== 'alpha-desc' && <ArrowUpDown size={13} className="text-slate-600" />}
                            </div>
                          </th>
                          <th 
                            onClick={() => setTableSortOption(prev => prev === 'val-desc' ? 'val-asc' : 'val-desc')}
                            className="p-4 text-right cursor-pointer hover:text-emerald-400 select-none transition-colors"
                          >
                            <div className="flex items-center justify-end gap-1.5">
                              <span>Valoare Totală & Nr. Acțiuni Cumulate</span>
                              {tableSortOption === 'val-desc' && <ArrowDown size={14} className="text-emerald-400" />}
                              {tableSortOption === 'val-asc' && <ArrowUp size={14} className="text-emerald-400" />}
                              {tableSortOption !== 'val-desc' && tableSortOption !== 'val-asc' && <ArrowUpDown size={13} className="text-slate-600" />}
                            </div>
                          </th>
                          <th 
                            onClick={() => setTableSortOption(prev => prev === 'val-desc' ? 'val-asc' : 'val-desc')}
                            className="p-4 text-right w-44 cursor-pointer hover:text-emerald-400 select-none transition-colors"
                          >
                            <div className="flex items-center justify-end gap-1.5">
                              <span>% din Portofoliu</span>
                              {tableSortOption === 'val-desc' && <ArrowDown size={14} className="text-emerald-400" />}
                              {tableSortOption === 'val-asc' && <ArrowUp size={14} className="text-emerald-400" />}
                              {tableSortOption !== 'val-desc' && tableSortOption !== 'val-asc' && <ArrowUpDown size={13} className="text-slate-600" />}
                            </div>
                          </th>
                          <th className="p-4 text-center">Structură Expunere (Direct vs. ETF)</th>
                          <th className="p-4 text-center">Sursă dețineri</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-sm">
                        {filteredCompanies.length === 0 && (
                          <tr>
                            <td colSpan={5} className="p-8 text-center text-slate-400">
                              <Search size={24} className="mx-auto mb-2 text-slate-600" />
                              Nu s-au găsit companii care să se potrivească cu căutarea „<span className="text-white font-medium">{searchTerm}</span>”.
                            </td>
                          </tr>
                        )}
                        {filteredCompanies.map((comp) => {
                          const isSelected = selectedCompany === comp.normalizedSymbol;
                          return (
                            <React.Fragment key={comp.normalizedSymbol}>
                              <tr
                                onClick={() => setSelectedCompany(isSelected ? null : comp.normalizedSymbol)}
                                className={`hover:bg-slate-800/60 transition-colors cursor-pointer ${
                                  isSelected ? 'bg-slate-800/80 border-l-4 border-l-emerald-500' : ''
                                }`}
                              >
                                <td className="p-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-emerald-400 font-mono shrink-0">
                                      {comp.normalizedSymbol}
                                    </div>
                                    <div>
                                      <div className="font-bold text-white flex items-center gap-2">
                                        {comp.normalizedSymbol}
                                        {comp.directValue > 0 && comp.indirectValue > 0 && (
                                          <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded font-normal">
                                            Dublă Expunere (Direct + ETF)
                                          </span>
                                        )}
                                      </div>
                                      <div className="text-xs text-slate-400">{comp.displayName}</div>
                                    </div>
                                  </div>
                                </td>

                                <td className="p-4 text-right font-mono">
                                  <div className="font-bold text-emerald-400 text-sm">
                                    {comp.totalValue.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {currency}
                                  </div>
                                  <div className="text-xs text-slate-300 font-semibold mt-0.5 flex items-center justify-end gap-1">
                                    <span className="text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                                      ~{comp.totalShares < 10 ? comp.totalShares.toFixed(3) : comp.totalShares.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} acțiuni
                                    </span>
                                  </div>
                                </td>

                                <td className="p-4 text-right">
                                  <div className="font-bold font-mono text-white text-base">
                                    {comp.totalPercentage.toFixed(2)}%
                                  </div>
                                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                                    ({comp.totalShares < 10 ? comp.totalShares.toFixed(3) : comp.totalShares.toFixed(2)} acțiuni)
                                  </div>
                                </td>

                                <td className="p-4">
                                  <div className="w-full max-w-xs mx-auto">
                                    <div className="flex justify-between text-[10px] text-slate-300 mb-1 font-mono">
                                      <span className="text-blue-400 font-medium">Direct: {comp.directPercentage.toFixed(2)}% ({comp.directShares.toFixed(2)} acțiuni)</span>
                                      <span className="text-emerald-400 font-medium">via ETF: {comp.indirectPercentage.toFixed(2)}% ({comp.indirectShares < 10 ? comp.indirectShares.toFixed(3) : comp.indirectShares.toFixed(2)} acțiuni)</span>
                                    </div>
                                    <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden flex border border-slate-700/50">
                                      <div
                                        style={{ width: `${(comp.directValue / comp.totalValue) * 100}%` }}
                                        className="bg-blue-500 h-full"
                                        title={`Direct: ${comp.directValue.toFixed(2)} ${currency} (${comp.directShares.toFixed(2)} acțiuni)`}
                                      />
                                      <div
                                        style={{ width: `${(comp.indirectValue / comp.totalValue) * 100}%` }}
                                        className="bg-emerald-500 h-full"
                                        title={`Indirect via ETF: ${comp.indirectValue.toFixed(2)} ${currency} (~${comp.indirectShares.toFixed(2)} acțiuni)`}
                                      />
                                    </div>
                                  </div>
                                </td>

                                <td className="p-4 text-center">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedCompany(isSelected ? null : comp.normalizedSymbol);
                                    }}
                                    className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 px-2.5 py-1 rounded-md transition-colors inline-flex items-center gap-1"
                                  >
                                    <span>{comp.sourceCount} surse</span>
                                    {isSelected ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                  </button>
                                </td>
                              </tr>

                              {/* EXPANDED DETAILED BREAKDOWN */}
                              {isSelected && (
                                <tr className="bg-slate-950/90 border-b border-slate-800">
                                  <td colSpan={5} className="p-5">
                                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-4">
                                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                                        <Info size={14} /> Detaliere surse dețineri pentru {comp.displayName} ({comp.normalizedSymbol})
                                      </h4>

                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Direct Sources */}
                                        <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
                                          <h5 className="text-xs font-semibold text-blue-400 mb-2 flex items-center justify-between">
                                            <span className="flex items-center gap-2">
                                              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                              Achiziții Directe de Acțiuni ({comp.directValue.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} {currency})
                                            </span>
                                            <span className="text-blue-300 font-mono font-bold bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/80">
                                              {comp.directShares.toFixed(2)} acțiuni
                                            </span>
                                          </h5>
                                          {comp.directSources.length > 0 ? (
                                            <ul className="space-y-1.5 text-xs text-slate-300">
                                              {comp.directSources.map((ds, idx) => (
                                                <li key={idx} className="flex justify-between border-b border-slate-800/60 pb-1">
                                                  <span className="text-slate-400">{ds.portfolioName} ({ds.rawSymbol}):</span>
                                                  <span className="font-mono text-white font-medium">
                                                    {ds.quantity} acțiuni @ {ds.currentPrice} {ds.currency}
                                                  </span>
                                                </li>
                                              ))}
                                            </ul>
                                          ) : (
                                            <p className="text-xs text-slate-500 italic">Nu deții acțiuni cumpărate direct din această companie.</p>
                                          )}
                                        </div>

                                        {/* ETF Sources */}
                                        <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 space-y-2">
                                          <h5 className="text-xs font-semibold text-emerald-400 mb-2 flex items-center justify-between">
                                            <span className="flex items-center gap-2">
                                              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                              Dețineri Indirecte via ETF-uri ({comp.indirectValue.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} {currency})
                                            </span>
                                            <span className="text-emerald-300 font-mono font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                                              ~{comp.indirectShares < 10 ? comp.indirectShares.toFixed(3) : comp.indirectShares.toFixed(2)} acțiuni
                                            </span>
                                          </h5>
                                          {comp.etfSources.length > 0 ? (
                                            <ul className="space-y-2 text-xs text-slate-300">
                                              {comp.etfSources.map((es, idx) => {
                                                const etfData = etfDatabase[es.etfSymbol] || etfDatabase[normalizeYahooTicker(es.etfSymbol)];
                                                const officialUrl = etfData?.officialSourceUrl || (etfData?.isin ? `https://www.justetf.com/en/search.html?search=${etfData.isin}` : null);
                                                return (
                                                  <li key={idx} className="flex flex-col border-b border-slate-800/60 pb-2 space-y-1">
                                                    <div className="flex justify-between font-medium items-center">
                                                      <div className="flex items-center gap-1.5 flex-wrap">
                                                        <span className="text-emerald-300 font-bold font-mono">{es.etfSymbol}</span>
                                                        <span className="text-slate-400 text-[11px]">({es.etfName})</span>
                                                        {officialUrl && (
                                                          <a
                                                            href={officialUrl}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-[10px] bg-slate-800 hover:bg-slate-700 text-blue-300 px-1.5 py-0.5 rounded border border-slate-700 flex items-center gap-1 transition-colors"
                                                            title="Verifică fișa oficială și componenta ETF-ului pe JustETF / BVB"
                                                          >
                                                            <Globe size={10} /> JustETF / BVB <ExternalLink size={9} />
                                                          </a>
                                                        )}
                                                      </div>
                                                      <div className="text-right font-mono">
                                                        <span className="text-white font-bold block">
                                                          {es.companyValueFromEtf.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} {currency}
                                                        </span>
                                                        <span className="text-[10px] text-emerald-400 font-semibold block">
                                                          ~{es.sharesFromEtf < 10 ? es.sharesFromEtf.toFixed(3) : es.sharesFromEtf.toFixed(2)} acțiuni
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div className="text-[10px] text-slate-400 flex justify-between bg-slate-900/80 p-1.5 rounded font-mono">
                                                      <span>Pondere oficială în ETF: <strong className="text-emerald-400">{es.companyWeightInEtf}%</strong></span>
                                                      <span>Echivalent acțiuni: <strong className="text-emerald-300">~{es.sharesFromEtf < 10 ? es.sharesFromEtf.toFixed(3) : es.sharesFromEtf.toFixed(2)} acțiuni</strong></span>
                                                    </div>
                                                  </li>
                                                );
                                              })}
                                            </ul>
                                          ) : (
                                            <p className="text-xs text-slate-500 italic">Această companie nu a fost găsită în ETF-urile din portofoliul tău.</p>
                                          )}
                                        </div>
                                      </div>

                                      {/* FORMULĂ MATEMATICĂ DE CALCUL TRANSPARENTĂ */}
                                      <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800/80 text-[11px] font-mono text-slate-300 space-y-2">
                                        <div className="text-amber-400 font-bold flex items-center gap-1.5">
                                          <Sparkles size={13} /> Formulă de Calcul Real (Valoare & Unități de Acțiuni Cumulate):
                                        </div>
                                        <div className="text-slate-300 leading-relaxed flex flex-wrap items-center gap-1.5">
                                          <span className="text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/60">
                                            Direct: {comp.directValue.toFixed(2)} {currency} ({comp.directShares.toFixed(2)} acțiuni)
                                          </span>
                                          {comp.etfSources.map((es, i) => (
                                            <span key={i} className="flex items-center gap-1">
                                              <span>+</span>
                                              <span className="text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/60">
                                                {es.etfSymbol}: {es.companyValueFromEtf.toFixed(2)} {currency} (~{es.sharesFromEtf < 10 ? es.sharesFromEtf.toFixed(3) : es.sharesFromEtf.toFixed(2)} acțiuni)
                                              </span>
                                            </span>
                                          ))}
                                          <span>=</span>
                                          <strong className="text-white bg-emerald-950 px-2.5 py-1 rounded border border-emerald-500/50 text-xs font-bold shadow-sm">
                                            {comp.totalValue.toFixed(2)} {currency} ({comp.totalPercentage.toFixed(2)}% din Portofoliu | ~{comp.totalShares < 10 ? comp.totalShares.toFixed(3) : comp.totalShares.toFixed(2)} acțiuni cumulate)
                                          </strong>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          );
                        })}

                        {filteredCompanies.length === 0 && (
                          <tr>
                            <td colSpan={5} className="p-8 text-center text-slate-500 italic">
                              Nu s-au găsit dețineri directe sau indirecte conform filtrelor selectate.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 2: VISUAL GRAPHIC FOR TOP 10 EXPOSURES */}
              {activeTab === 'chart' && (
                <div className="space-y-6">
                  <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <BarChart2 size={18} className="text-emerald-400" />
                      Grafic Top 10 Companii cu cele mai mari expuneri (% din Portofoliu Total)
                    </h3>
                    <p className="text-xs text-slate-400">
                      Afișează defalcarea vizuală între acțiuni cumpărate Direct (albastru) și expunerea cumpărată indirect via ETF-uri (verde).
                    </p>

                    <div className="h-[420px] w-full pt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={topCompaniesChartData}
                          layout="vertical"
                          margin={{ top: 10, right: 30, left: 40, bottom: 20 }}
                        >
                          <XAxis type="number" unit="%" stroke="#64748b" fontSize={11} />
                          <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} fontWeight="bold" />
                          <Tooltip
                            formatter={(value: number, name: string) => [`${value}%`, name === 'Direct' ? 'Direct (Acțiuni)' : 'Indirect (via ETF)']}
                            labelFormatter={(label) => {
                              const item = topCompaniesChartData.find(x => x.name === label);
                              const sharesText = item?.totalShares ? ` | ~${item.totalShares < 10 ? item.totalShares.toFixed(3) : item.totalShares.toFixed(2)} acțiuni` : '';
                              return `${label} - ${item?.fullName || ''} (Total: ${item?.Total}% / ${item?.valueTotal.toLocaleString('ro-RO', {maximumFractionDigits:0})} ${currency}${sharesText})`;
                            }}
                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px' }}
                          />
                          <Legend />
                          <Bar dataKey="Direct" name="Cumpărat Direct (Acțiuni)" stackId="a" fill="#3b82f6" radius={[0, 0, 0, 0]} />
                          <Bar dataKey="ETF" name="Indirect via ETF-uri" stackId="a" fill="#10b981" radius={[0, 4, 4, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: OVERLAP MATRIX */}
              {activeTab === 'overlap' && (
                <div className="space-y-6">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                    <h4 className="font-bold text-white mb-1 flex items-center gap-2 text-sm">
                      <Maximize2 size={16} className="text-emerald-400" />
                      Matricea de Suprapunere între ETF-uri
                    </h4>
                    Analizează ce companii din primele dețineri sunt comune între fondurile din portofoliul tău. O suprapunere mare (&gt; 40-50%) indică faptul că cumperi aceleași companii prin fonduri diferite, plătind comisioane TER multiple.
                  </div>

                  {etfOverlapData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {etfOverlapData.map((pair, idx) => (
                        <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4 hover:border-slate-700 transition-colors">
                          <div className="flex justify-between items-start border-b border-slate-800 pb-3">
                            <div>
                              <div className="text-sm font-bold text-white flex items-center gap-2">
                                <span className="text-emerald-400">{pair.etf1.symbol}</span>
                                <span className="text-slate-500 text-xs">vs</span>
                                <span className="text-blue-400">{pair.etf2.symbol}</span>
                              </div>
                              <p className="text-[11px] text-slate-400 mt-0.5">
                                Valoare cumulatâ: {(pair.etf1.value + pair.etf2.value).toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {currency}
                              </p>
                            </div>

                            <div className="text-right">
                              <span className={`text-base font-bold font-mono px-2.5 py-1 rounded-lg border ${
                                pair.overlapPercent > 40
                                  ? 'bg-rose-950/60 text-rose-300 border-rose-800/60'
                                  : pair.overlapPercent > 20
                                  ? 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                                  : 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
                              }`}>
                                {pair.overlapPercent.toFixed(1)}% suprapunere
                              </span>
                            </div>
                          </div>

                          {/* SHARED HOLDINGS LIST */}
                          <div>
                            <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                              Top companii comune ({pair.sharedHoldings.length})
                            </h5>
                            {pair.sharedHoldings.length > 0 ? (
                              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                                {pair.sharedHoldings.map((sh) => (
                                  <div key={sh.symbol} className="flex justify-between items-center text-xs bg-slate-900 p-2 rounded border border-slate-800">
                                    <span className="font-bold text-white">{sh.symbol} <span className="text-slate-400 font-normal">({sh.name})</span></span>
                                    <div className="font-mono text-[11px] text-slate-300">
                                      <span className="text-emerald-400">{sh.weightInEtf1}%</span> în {pair.etf1.symbol} | <span className="text-blue-400">{sh.weightInEtf2}%</span> în {pair.etf2.symbol}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-xs text-slate-500 italic">Nu s-au identificat companii comune în primele dețineri ale celor două ETF-uri.</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-12 text-center text-slate-500 italic bg-slate-950 rounded-xl border border-slate-800">
                      Ai nevoie de cel puțin 2 ETF-uri cu dețineri configurate în portofoliu pentru a calcula suprapunerea.
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: TER OPTIMIZATION & RECOMMENDATIONS */}
              {activeTab === 'ter' && (
                <div className="space-y-6">
                  {/* RECOMMENDATIONS CARDS */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Sparkles size={16} className="text-amber-400" /> Recomandări Automate de Reducere a Comisioanelor TER
                    </h3>

                    {terAnalysis.recommendations.length > 0 ? (
                      terAnalysis.recommendations.map((rec, idx) => (
                        <div
                          key={idx}
                          className={`p-5 rounded-xl border flex items-start gap-4 transition-all ${
                            rec.type === 'warning'
                              ? 'bg-amber-950/20 border-amber-800/40 text-amber-200'
                              : rec.type === 'info'
                              ? 'bg-blue-950/20 border-blue-800/40 text-blue-200'
                              : 'bg-emerald-950/20 border-emerald-800/40 text-emerald-200'
                          }`}
                        >
                          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0 mt-0.5">
                            {rec.type === 'warning' ? (
                              <AlertCircle className="text-amber-400" size={20} />
                            ) : (
                              <Info className="text-blue-400" size={20} />
                            )}
                          </div>

                          <div className="flex-1 space-y-1">
                            <div className="flex justify-between items-start">
                              <h4 className="font-bold text-white text-sm">{rec.title}</h4>
                              {rec.potentialSavings > 0 && (
                                <span className="text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                                  Economie estimată: ~{rec.potentialSavings.toFixed(0)} {currency}/an
                                </span>
                              )}
                            </div>
                            <p className="text-xs leading-relaxed opacity-90">{rec.description}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-6 bg-emerald-950/20 border border-emerald-800/40 rounded-xl text-emerald-300 text-xs flex items-center gap-3">
                        <CheckCircle2 size={20} />
                        Structura ETF-urilor tale este optimizată excelent! Nu au fost detectate comisioane TER exagerate sau dublări redundante de fonduri.
                      </div>
                    )}
                  </div>

                  {/* DETAILED ETF TER COST TABLE */}
                  <div className="space-y-3 pt-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      Defalcare Comisioane TER per ETF ({terAnalysis.etfBreakdown.length} fonduri)
                    </h3>

                    <div className="overflow-x-auto rounded-xl border border-slate-800">
                      <table className="min-w-full text-left border-collapse">
                        <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-semibold">
                          <tr>
                            <th className="p-4">Simbol ETF</th>
                            <th className="p-4">Portofoliu</th>
                            <th className="p-4">Categorie</th>
                            <th className="p-4 text-right">Valoare Investită</th>
                            <th className="p-4 text-right">Rată TER Anuală</th>
                            <th className="p-4 text-right">Cost Anual Estimat</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-sm">
                          {terAnalysis.etfBreakdown.map((e) => (
                            <tr key={e.id} className="hover:bg-slate-800/50 transition-colors">
                              <td className="p-4 font-bold text-white">
                                {e.symbol} <span className="text-slate-400 font-normal text-xs">({e.name})</span>
                              </td>
                              <td className="p-4 text-xs text-slate-300">{e.portfolioName}</td>
                              <td className="p-4 text-xs text-slate-400">{e.category}</td>
                              <td className="p-4 text-right font-mono text-white">
                                {e.value.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} {currency}
                              </td>
                              <td className="p-4 text-right font-mono font-bold">
                                <span className={`px-2 py-0.5 rounded text-xs ${
                                  e.ter >= 0.8 ? 'bg-rose-900/40 text-rose-300' : e.ter >= 0.3 ? 'bg-amber-900/40 text-amber-300' : 'bg-emerald-900/40 text-emerald-300'
                                }`}>
                                  {e.ter.toFixed(2)}%
                                </span>
                              </td>
                              <td className="p-4 text-right font-mono font-bold text-amber-400">
                                {e.yearlyCost.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {currency}/an
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: CONFIGURATOR FOR ETF HOLDINGS & TER */}
              {activeTab === 'config' && (
                <EtfDatabaseConfigurator 
                  etfDatabase={etfDatabase}
                  updateEtfDb={updateEtfDb}
                  currency={currency}
                  userEtfAssets={userEtfAssets}
                  convertValue={convertValue}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(ETFOverlapAnalysis);
