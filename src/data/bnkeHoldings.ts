// Complete holdings dataset for Amundi Euro Stoxx Banks UCITS ETF Acc (BNKE.PA / LYBK.DE / ISIN: LU1829219390)
// Official Amundi report holdings with full weights, sectors, ISINs and locations.

import { ETFHolding } from './exh4Holdings';

export const BNKE_SECTOR_ALLOCATIONS = [
  {
    name: "Financials",
    weight: 99.37
  },
  {
    name: "Cash and/or Derivatives",
    weight: 0.63
  }
];

export const BNKE_COUNTRY_ALLOCATIONS = [
  {
    name: "Spain",
    weight: 30.69
  },
  {
    name: "Italy",
    weight: 23.69
  },
  {
    name: "France",
    weight: 15.08
  },
  {
    name: "Netherlands",
    weight: 8.59
  },
  {
    name: "Germany",
    weight: 6.33
  },
  {
    name: "Finland",
    weight: 4.65
  },
  {
    name: "Austria",
    weight: 4.58
  },
  {
    name: "Ireland",
    weight: 3.21
  },
  {
    name: "Belgium",
    weight: 2.43
  },
  {
    name: "Portugal",
    weight: 0.75
  },
  {
    name: "Cash/Others",
    weight: 0.63
  }
];

export const BNKE_FULL_HOLDINGS: ETFHolding[] = [
  {
    symbol: "SAN.MC",
    name: "Banco Santander SA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 13.98,
    location: "Spain",
    currency: "EUR"
  },
  {
    symbol: "BBVA.MC",
    name: "Banco Bilbao Vizcaya Argentaria SA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 10.23,
    location: "Spain",
    currency: "EUR"
  },
  {
    symbol: "UCG.MI",
    name: "UniCredit SpA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 9.64,
    location: "Italy",
    currency: "EUR"
  },
  {
    symbol: "BNP.PA",
    name: "BNP Paribas SA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 8.74,
    location: "France",
    currency: "EUR"
  },
  {
    symbol: "ISP.MI",
    name: "Intesa Sanpaolo SpA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 7.86,
    location: "Italy",
    currency: "EUR"
  },
  {
    symbol: "INGA.AS",
    name: "ING Groep NV",
    sector: "Financials",
    assetClass: "Equity",
    weight: 6.72,
    location: "Netherlands",
    currency: "EUR"
  },
  {
    symbol: "NDA-FI.HE",
    name: "Nordea Bank Abp",
    sector: "Financials",
    assetClass: "Equity",
    weight: 4.67,
    location: "Finland",
    currency: "EUR"
  },
  {
    symbol: "DBK.DE",
    name: "Deutsche Bank AG",
    sector: "Financials",
    assetClass: "Equity",
    weight: 4.64,
    location: "Germany",
    currency: "EUR"
  },
  {
    symbol: "GLE.PA",
    name: "Societe Generale SA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 4.56,
    location: "France",
    currency: "EUR"
  },
  {
    symbol: "CABK.MC",
    name: "CaixaBank SA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 3.71,
    location: "Spain",
    currency: "EUR"
  },
  {
    symbol: "EBS.VI",
    name: "Erste Group Bank AG",
    sector: "Financials",
    assetClass: "Equity",
    weight: 2.76,
    location: "Austria",
    currency: "EUR"
  },
  {
    symbol: "KBC.BR",
    name: "KBC Group NV",
    sector: "Financials",
    assetClass: "Equity",
    weight: 2.15,
    location: "Belgium",
    currency: "EUR"
  },
  {
    symbol: "BMPS.MI",
    name: "Banca Monte dei Paschi di Siena SpA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 2.03,
    location: "Italy",
    currency: "EUR"
  },
  {
    symbol: "ABN.AS",
    name: "ABN AMRO Bank NV",
    sector: "Financials",
    assetClass: "Equity",
    weight: 1.91,
    location: "Netherlands",
    currency: "EUR"
  },
  {
    symbol: "A3G.IR",
    name: "AIB Group PLC",
    sector: "Financials",
    assetClass: "Equity",
    weight: 1.81,
    location: "Ireland",
    currency: "EUR"
  },
  {
    symbol: "BPE.MI",
    name: "BPER Banca SpA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 1.68,
    location: "Italy",
    currency: "EUR"
  },
  {
    symbol: "ACA.PA",
    name: "Credit Agricole SA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 1.62,
    location: "France",
    currency: "EUR"
  },
  {
    symbol: "BAMI.MI",
    name: "Banco BPM SpA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 1.39,
    location: "Italy",
    currency: "EUR"
  },
  {
    symbol: "BIRG.IR",
    name: "Bank of Ireland Group PLC",
    sector: "Financials",
    assetClass: "Equity",
    weight: 1.39,
    location: "Ireland",
    currency: "EUR"
  },
  {
    symbol: "SAB.MC",
    name: "Banco de Sabadell SA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 1.34,
    location: "Spain",
    currency: "EUR"
  },
  {
    symbol: "CBK.DE",
    name: "Commerzbank AG",
    sector: "Financials",
    assetClass: "Equity",
    weight: 1.31,
    location: "Germany",
    currency: "EUR"
  },
  {
    symbol: "FBK.MI",
    name: "FinecoBank SpA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 1.15,
    location: "Italy",
    currency: "EUR"
  },
  {
    symbol: "BG.VI",
    name: "BAWAG Group AG",
    sector: "Financials",
    assetClass: "Equity",
    weight: 1.05,
    location: "Austria",
    currency: "EUR"
  },
  {
    symbol: "BKT.MC",
    name: "Bankinter SA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 0.82,
    location: "Spain",
    currency: "EUR"
  },
  {
    symbol: "BCP.LS",
    name: "Banco Comercial Portugues SA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 0.75,
    location: "Portugal",
    currency: "EUR"
  },
  {
    symbol: "RBI.VI",
    name: "Raiffeisen Bank International AG",
    sector: "Financials",
    assetClass: "Equity",
    weight: 0.57,
    location: "Austria",
    currency: "EUR"
  },
  {
    symbol: "BGN.MI",
    name: "Banca Generali SpA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 0.30,
    location: "Italy",
    currency: "EUR"
  },
  {
    symbol: "UNI.MC",
    name: "Unicaja Banco SA",
    sector: "Financials",
    assetClass: "Equity",
    weight: 0.30,
    location: "Spain",
    currency: "EUR"
  },
  {
    symbol: "KBCA.BR",
    name: "KBC Ancora NV",
    sector: "Financials",
    assetClass: "Equity",
    weight: 0.26,
    location: "Belgium",
    currency: "EUR"
  }
];
