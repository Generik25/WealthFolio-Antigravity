// Complete holdings dataset for Vanguard FTSE Developed Europe UCITS ETF EUR Acc (VWCG.DE / ISIN: IE00BK5BQX27)
// Official Vanguard reporting data with full 534 constituents, sector allocations, and geographic breakdown.

import { ETFHolding } from './meudHoldings';

export type { ETFHolding };

export const VWCG_SECTOR_ALLOCATIONS = [
  {
    "name": "Financials",
    "weight": 24.72
  },
  {
    "name": "Industrials",
    "weight": 18.58
  },
  {
    "name": "Health Care",
    "weight": 13.06
  },
  {
    "name": "Information Technology",
    "weight": 9.69
  },
  {
    "name": "Consumer Staples",
    "weight": 7.62
  },
  {
    "name": "Consumer Discretionary",
    "weight": 7.59
  },
  {
    "name": "Energy",
    "weight": 5.64
  },
  {
    "name": "Utilities",
    "weight": 4.91
  },
  {
    "name": "Materials",
    "weight": 4.51
  },
  {
    "name": "Communication Services",
    "weight": 2.75
  },
  {
    "name": "Real Estate",
    "weight": 0.93
  }
];

export const VWCG_COUNTRY_ALLOCATIONS = [
  {
    "name": "United Kingdom",
    "weight": 22.47
  },
  {
    "name": "Switzerland",
    "weight": 14.65
  },
  {
    "name": "France",
    "weight": 14.58
  },
  {
    "name": "Germany",
    "weight": 13.13
  },
  {
    "name": "Netherlands",
    "weight": 9.04
  },
  {
    "name": "Spain",
    "weight": 6.12
  },
  {
    "name": "Italy",
    "weight": 5.72
  },
  {
    "name": "Sweden",
    "weight": 4.98
  },
  {
    "name": "Denmark",
    "weight": 2.52
  },
  {
    "name": "Finland",
    "weight": 1.85
  },
  {
    "name": "Belgium",
    "weight": 1.85
  },
  {
    "name": "Norway",
    "weight": 0.91
  },
  {
    "name": "Poland",
    "weight": 0.74
  },
  {
    "name": "Austria",
    "weight": 0.59
  },
  {
    "name": "Ireland",
    "weight": 0.56
  },
  {
    "name": "Portugal",
    "weight": 0.31
  },
  {
    "name": "United States",
    "weight": 0.0
  }
];

export const VWCG_FULL_HOLDINGS: ETFHolding[] = [
  {
    "symbol": "ASML",
    "name": "ASML Holding NV",
    "weight": 5.198,
    "sector": "Information Technology",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HSBA",
    "name": "HSBC Holdings PLC",
    "weight": 2.2291,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NOVN",
    "name": "Novartis AG",
    "weight": 2.006,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ROP",
    "name": "Roche Holding AG",
    "weight": 1.9856,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AZN",
    "name": "AstraZeneca PLC",
    "weight": 1.9199,
    "sector": "Health Care",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NESN",
    "name": "Nestle SA",
    "weight": 1.8136,
    "sector": "Consumer Staples",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SIE",
    "name": "Siemens AG",
    "weight": 1.6136,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SHEL",
    "name": "Shell PLC",
    "weight": 1.4962,
    "sector": "Energy",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SAN",
    "name": "Banco Santander SA",
    "weight": 1.3684,
    "sector": "Financials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ALV",
    "name": "Allianz SE",
    "weight": 1.2319,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SU",
    "name": "Schneider Electric SE",
    "weight": 1.2115,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ABBN",
    "name": "ABB Ltd",
    "weight": 1.1522,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "IBE",
    "name": "Iberdrola SA",
    "weight": 1.1512,
    "sector": "Utilities",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RR/",
    "name": "Rolls-Royce Holdings PLC",
    "weight": 1.1015,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SAP",
    "name": "SAP SE",
    "weight": 1.0791,
    "sector": "Information Technology",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "UBSG",
    "name": "UBS Group AG",
    "weight": 1.0624,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NOVOB",
    "name": "Novo Nordisk A/S",
    "weight": 1.048,
    "sector": "Health Care",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TTE",
    "name": "TotalEnergies SE",
    "weight": 1.0228,
    "sector": "Energy",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ENR",
    "name": "Siemens Energy AG",
    "weight": 0.9801,
    "sector": "Energy",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BBVA",
    "name": "Banco Bilbao Vizcaya Argentaria SA",
    "weight": 0.9634,
    "sector": "Financials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MC",
    "name": "LVMH Moet Hennessy Louis Vuitton SE",
    "weight": 0.9357,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SAF",
    "name": "Safran SA",
    "weight": 0.9307,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "UCG",
    "name": "UniCredit SpA",
    "weight": 0.9234,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AIR",
    "name": "Airbus SE",
    "weight": 0.8887,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ULVR",
    "name": "Unilever PLC",
    "weight": 0.8681,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BATS",
    "name": "British American Tobacco PLC",
    "weight": 0.8632,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CFR",
    "name": "Cie Financiere Richemont SA",
    "weight": 0.8412,
    "sector": "Consumer Discretionary",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "IFX",
    "name": "Infineon Technologies AG",
    "weight": 0.8337,
    "sector": "Information Technology",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BNP",
    "name": "BNP Paribas SA",
    "weight": 0.7816,
    "sector": "Financials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ZURN",
    "name": "Zurich Insurance Group AG",
    "weight": 0.7572,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GSK",
    "name": "GSK PLC",
    "weight": 0.7175,
    "sector": "Health Care",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ISP",
    "name": "Intesa Sanpaolo SpA",
    "weight": 0.7155,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RIO",
    "name": "Rio Tinto PLC",
    "weight": 0.6691,
    "sector": "Materials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BP/",
    "name": "BP PLC",
    "weight": 0.665,
    "sector": "Energy",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DTE",
    "name": "Deutsche Telekom AG",
    "weight": 0.6405,
    "sector": "Communication Services",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SAN_1",
    "name": "Sanofi SA",
    "weight": 0.632,
    "sector": "Health Care",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BARC",
    "name": "Barclays PLC",
    "weight": 0.6285,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "INGA",
    "name": "ING Groep NV",
    "weight": 0.6237,
    "sector": "Financials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ENEL",
    "name": "Enel SpA",
    "weight": 0.5942,
    "sector": "Utilities",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LLOY",
    "name": "Lloyds Banking Group PLC",
    "weight": 0.5915,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NG/",
    "name": "National Grid PLC",
    "weight": 0.5614,
    "sector": "Utilities",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CS",
    "name": "AXA SA",
    "weight": 0.5565,
    "sector": "Financials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ABI",
    "name": "Anheuser-Busch InBev SA/NV",
    "weight": 0.5388,
    "sector": "Consumer Staples",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BA/",
    "name": "BAE Systems PLC",
    "weight": 0.4918,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MUV2",
    "name": "Muenchener Rueckversicherungs-Gesellschaft AG in Muenchen",
    "weight": 0.4907,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DG",
    "name": "Vinci SA",
    "weight": 0.488,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NWG",
    "name": "NatWest Group PLC",
    "weight": 0.4828,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AI",
    "name": "Air Liquide SA",
    "weight": 0.4823,
    "sector": "Materials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ITX",
    "name": "Industria de Diseno Textil SA",
    "weight": 0.4783,
    "sector": "Consumer Discretionary",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GLEN",
    "name": "Glencore PLC",
    "weight": 0.4731,
    "sector": "Materials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "INVEB",
    "name": "Investor AB",
    "weight": 0.4702,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NOKIA",
    "name": "Nokia Oyj",
    "weight": 0.453,
    "sector": "Communication Services",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RMS",
    "name": "Hermes International SCA",
    "weight": 0.4267,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NDA",
    "name": "Nordea Bank Abp",
    "weight": 0.4184,
    "sector": "Financials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GLE",
    "name": "Societe Generale SA",
    "weight": 0.4073,
    "sector": "Financials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DBK",
    "name": "Deutsche Bank AG",
    "weight": 0.3991,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ARGX",
    "name": "Argenx SE",
    "weight": 0.393,
    "sector": "Health Care",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "OR",
    "name": "L'Oreal SA",
    "weight": 0.3863,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DHL",
    "name": "Deutsche Post AG",
    "weight": 0.3829,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "REL",
    "name": "RELX PLC",
    "weight": 0.3823,
    "sector": "Information Technology",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CPG",
    "name": "Compass Group PLC",
    "weight": 0.3752,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EL",
    "name": "EssilorLuxottica SA",
    "weight": 0.3741,
    "sector": "Health Care",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BAYN",
    "name": "Bayer AG",
    "weight": 0.3725,
    "sector": "Health Care",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AAL",
    "name": "Anglo American PLC",
    "weight": 0.368,
    "sector": "Materials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ASM",
    "name": "ASM International NV",
    "weight": 0.3646,
    "sector": "Information Technology",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VOLVB",
    "name": "Volvo AB",
    "weight": 0.3634,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PRX",
    "name": "Prosus NV",
    "weight": 0.3592,
    "sector": "Information Technology",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CABK",
    "name": "CaixaBank SA",
    "weight": 0.3588,
    "sector": "Financials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RHM",
    "name": "Rheinmetall AG",
    "weight": 0.3548,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BN",
    "name": "Danone SA",
    "weight": 0.3543,
    "sector": "Consumer Staples",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ATCOA",
    "name": "Atlas Copco AB",
    "weight": 0.3496,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LSEG",
    "name": "London Stock Exchange Group PLC",
    "weight": 0.349,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DB1",
    "name": "Deutsche Boerse AG",
    "weight": 0.3416,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "STAN",
    "name": "Standard Chartered PLC",
    "weight": 0.332,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PRY",
    "name": "Prysmian SpA",
    "weight": 0.3277,
    "sector": "Industrials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BAS",
    "name": "BASF SE",
    "weight": 0.3249,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LONN",
    "name": "Lonza Group AG",
    "weight": 0.3236,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "STMMI",
    "name": "STMicroelectronics NV",
    "weight": 0.3228,
    "sector": "Information Technology",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SREN",
    "name": "Swiss Re AG",
    "weight": 0.3209,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "G",
    "name": "Generali",
    "weight": 0.3191,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DSV",
    "name": "DSV A/S",
    "weight": 0.3153,
    "sector": "Industrials",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EOAN",
    "name": "E.ON SE",
    "weight": 0.313,
    "sector": "Utilities",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RWE",
    "name": "RWE AG",
    "weight": 0.3127,
    "sector": "Utilities",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HOLN",
    "name": "Holcim AG",
    "weight": 0.3112,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DGE",
    "name": "Diageo PLC",
    "weight": 0.3077,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ENI",
    "name": "Eni SpA",
    "weight": 0.2978,
    "sector": "Energy",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RACE",
    "name": "Ferrari NV",
    "weight": 0.297,
    "sector": "Consumer Discretionary",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LR",
    "name": "Legrand SA",
    "weight": 0.2933,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SAND",
    "name": "Sandvik AB",
    "weight": 0.2901,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GALD",
    "name": "Galderma Group AG",
    "weight": 0.2881,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RKT",
    "name": "Reckitt Benckiser Group PLC",
    "weight": 0.2864,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HLN",
    "name": "Haleon PLC",
    "weight": 0.2802,
    "sector": "Health Care",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SGO",
    "name": "Cie de Saint-Gobain SA",
    "weight": 0.2795,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ORA",
    "name": "Orange SA",
    "weight": 0.269,
    "sector": "Communication Services",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SSE",
    "name": "SSE PLC",
    "weight": 0.2675,
    "sector": "Utilities",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TSCO",
    "name": "Tesco PLC",
    "weight": 0.26,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MBG",
    "name": "Mercedes-Benz Group AG",
    "weight": 0.2598,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SDZ",
    "name": "Sandoz Group AG",
    "weight": 0.2571,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EBS",
    "name": "Erste Group Bank AG",
    "weight": 0.2565,
    "sector": "Financials",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AIRB",
    "name": "Air Liquide SA",
    "weight": 0.2542,
    "sector": "Materials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AD",
    "name": "Koninklijke Ahold Delhaize NV",
    "weight": 0.2455,
    "sector": "Consumer Staples",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "UCB",
    "name": "UCB SA",
    "weight": 0.2454,
    "sector": "Health Care",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ASSAB",
    "name": "Assa Abloy AB",
    "weight": 0.2347,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ADS",
    "name": "adidas AG",
    "weight": 0.2334,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DANSKE",
    "name": "Danske Bank A/S",
    "weight": 0.2314,
    "sector": "Financials",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PRU",
    "name": "Prudential PLC",
    "weight": 0.2298,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ENGI",
    "name": "Engie SA",
    "weight": 0.2294,
    "sector": "Utilities",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ALC",
    "name": "Alcon AG",
    "weight": 0.2267,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SIKA",
    "name": "Sika AG",
    "weight": 0.2263,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "III",
    "name": "3i Group PLC",
    "weight": 0.2246,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GIVN",
    "name": "Givaudan SA",
    "weight": 0.2228,
    "sector": "Materials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "FER",
    "name": "Ferrovial NV",
    "weight": 0.2143,
    "sector": "Industrials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SLHN",
    "name": "Swiss Life Holding AG",
    "weight": 0.2127,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ERICB",
    "name": "Telefonaktiebolaget LM Ericsson",
    "weight": 0.2087,
    "sector": "Communication Services",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EXPN",
    "name": "Experian PLC",
    "weight": 0.2084,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "KBC",
    "name": "KBC Group NV",
    "weight": 0.2081,
    "sector": "Financials",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SWEDA",
    "name": "Swedbank AB",
    "weight": 0.2077,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "L'Oreal",
    "name": "SA",
    "weight": 0.2062,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SUNB",
    "name": "Sunbelt Rentals Holdings Inc",
    "weight": 0.2048,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SEBA",
    "name": "Skandinaviska Enskilda Banken AB",
    "weight": 0.1925,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VWS",
    "name": "Vestas Wind Systems A/S",
    "weight": 0.1919,
    "sector": "Energy",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CBK",
    "name": "Commerzbank AG",
    "weight": 0.1889,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "IMB",
    "name": "Imperial Brands PLC",
    "weight": 0.1881,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "REP",
    "name": "Repsol SA",
    "weight": 0.1873,
    "sector": "Energy",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AMRZ",
    "name": "Amrize Ltd",
    "weight": 0.1863,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ATCOB",
    "name": "Atlas Copco AB",
    "weight": 0.1853,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ACS",
    "name": "ACS Actividades de Construccion y Servicios SA",
    "weight": 0.1795,
    "sector": "Industrials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AV/",
    "name": "Aviva PLC",
    "weight": 0.1791,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SAMPO",
    "name": "Sampo Oyj",
    "weight": 0.1778,
    "sector": "Financials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VIE",
    "name": "Veolia Environnement SA",
    "weight": 0.1774,
    "sector": "Utilities",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MT",
    "name": "ArcelorMittal SA",
    "weight": 0.1745,
    "sector": "Materials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BAMI",
    "name": "Banco BPM SpA",
    "weight": 0.1737,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ABN",
    "name": "ABN AMRO Bank NV",
    "weight": 0.1732,
    "sector": "Financials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AMS",
    "name": "Amadeus IT Group SA",
    "weight": 0.172,
    "sector": "Information Technology",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ADYEN",
    "name": "Adyen NV",
    "weight": 0.171,
    "sector": "Industrials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AIBG",
    "name": "AIB Group PLC",
    "weight": 0.1707,
    "sector": "Financials",
    "location": "Ireland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ML",
    "name": "Cie Generale des Etablissements Michelin SCA",
    "weight": 0.1692,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "IHG",
    "name": "InterContinental Hotels Group PLC",
    "weight": 0.1672,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BMPS",
    "name": "Banca Monte dei Paschi di Siena SpA",
    "weight": 0.1667,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VOD",
    "name": "Vodafone Group PLC",
    "weight": 0.1652,
    "sector": "Communication Services",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HEI",
    "name": "Heidelberg Materials AG",
    "weight": 0.165,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DNB",
    "name": "DNB Bank ASA",
    "weight": 0.1646,
    "sector": "Financials",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DTG",
    "name": "Daimler Truck Holding AG",
    "weight": 0.1638,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "INVEA",
    "name": "Investor AB",
    "weight": 0.1633,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BPE",
    "name": "BPER Banca SPA",
    "weight": 0.1631,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VACN",
    "name": "VAT Group AG",
    "weight": 0.1617,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PKO",
    "name": "Powszechna Kasa Oszczednosci Bank Polski SA",
    "weight": 0.1612,
    "sector": "Financials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BESI",
    "name": "BE Semiconductor Industries NV",
    "weight": 0.1588,
    "sector": "Information Technology",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HO",
    "name": "Thales SA",
    "weight": 0.1579,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NN",
    "name": "NN Group NV",
    "weight": 0.1574,
    "sector": "Financials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PUB",
    "name": "Publicis Groupe SA",
    "weight": 0.1568,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EQNR",
    "name": "Equinor ASA",
    "weight": 0.1555,
    "sector": "Energy",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HEIA",
    "name": "Heineken NV",
    "weight": 0.1543,
    "sector": "Consumer Staples",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MTX",
    "name": "MTU Aero Engines AG",
    "weight": 0.1536,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NSISB",
    "name": "Novonesis (Novozymes) B",
    "weight": 0.1502,
    "sector": "Health Care",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GEBN",
    "name": "Geberit AG",
    "weight": 0.1502,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NXT",
    "name": "Next PLC",
    "weight": 0.15,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MRK",
    "name": "Merck KGaA",
    "weight": 0.1484,
    "sector": "Health Care",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PHIA",
    "name": "Koninklijke Philips NV",
    "weight": 0.1479,
    "sector": "Health Care",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LDO",
    "name": "Leonardo SpA",
    "weight": 0.1473,
    "sector": "Industrials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "UMG",
    "name": "Universal Music Group NV",
    "weight": 0.1461,
    "sector": "Consumer Discretionary",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AENA",
    "name": "Aena SME SA",
    "weight": 0.1447,
    "sector": "Industrials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LGEN",
    "name": "Legal & General Group PLC",
    "weight": 0.1446,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SHBA",
    "name": "Svenska Handelsbanken AB",
    "weight": 0.1415,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CCEP",
    "name": "Coca-Cola Europacific Partners PLC",
    "weight": 0.138,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "KER",
    "name": "Kering SA",
    "weight": 0.1358,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HBAN",
    "name": "Helvetia Baloise Holding AG",
    "weight": 0.1353,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PKN",
    "name": "ORLEN SA",
    "weight": 0.1344,
    "sector": "Energy",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SCMN",
    "name": "Swisscom AG",
    "weight": 0.1336,
    "sector": "Communication Services",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HLMA",
    "name": "Halma PLC",
    "weight": 0.1334,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SGSN",
    "name": "SGS SA",
    "weight": 0.1312,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BIRG",
    "name": "Bank of Ireland Group PLC",
    "weight": 0.13,
    "sector": "Financials",
    "location": "Ireland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "FRE",
    "name": "Fresenius SE & Co KGaA",
    "weight": 0.1289,
    "sector": "Health Care",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "KPN",
    "name": "Koninklijke KPN NV",
    "weight": 0.1277,
    "sector": "Communication Services",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ACA",
    "name": "Credit Agricole SA",
    "weight": 0.1259,
    "sector": "Financials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BMW",
    "name": "Bayerische Motoren Werke AG",
    "weight": 0.1231,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VNA",
    "name": "Vonovia SE",
    "weight": 0.1231,
    "sector": "Real Estate",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "WRT1V",
    "name": "Wartsila OYJ Abp",
    "weight": 0.1224,
    "sector": "Industrials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "KNEBV",
    "name": "Kone Oyj",
    "weight": 0.1222,
    "sector": "Industrials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BAER",
    "name": "Julius Baer Group Ltd",
    "weight": 0.1207,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PGHN",
    "name": "Partners Group Holding AG",
    "weight": 0.1204,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DSFIR",
    "name": "DSM-Firmenich AG",
    "weight": 0.1196,
    "sector": "Consumer Staples",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HEXAB",
    "name": "Hexagon AB",
    "weight": 0.1191,
    "sector": "Information Technology",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ANTO",
    "name": "Antofagasta PLC",
    "weight": 0.1181,
    "sector": "Materials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CLNX",
    "name": "Cellnex Telecom SA",
    "weight": 0.1157,
    "sector": "Communication Services",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ALFA",
    "name": "Alfa Laval AB",
    "weight": 0.1141,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SAB",
    "name": "Banco de Sabadell SA",
    "weight": 0.1136,
    "sector": "Financials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EPIA",
    "name": "Epiroc AB",
    "weight": 0.1135,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HNR1",
    "name": "Hannover Rueck SE",
    "weight": 0.113,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GMAB",
    "name": "Genmab A/S",
    "weight": 0.1126,
    "sector": "Health Care",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ESSITYB",
    "name": "Essity AB",
    "weight": 0.1125,
    "sector": "Consumer Staples",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TRN",
    "name": "Terna - Rete Elettrica Nazionale",
    "weight": 0.1114,
    "sector": "Utilities",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VOW3",
    "name": "Volkswagen AG",
    "weight": 0.1106,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SAABB",
    "name": "Saab AB",
    "weight": 0.1102,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BOL",
    "name": "Boliden AB",
    "weight": 0.108,
    "sector": "Materials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "Air",
    "name": "Liquide SA",
    "weight": 0.1077,
    "sector": "Materials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CAP",
    "name": "Capgemini SE",
    "weight": 0.1069,
    "sector": "Information Technology",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "Engie",
    "name": "SA",
    "weight": 0.1065,
    "sector": "Utilities",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EDP",
    "name": "EDP SA",
    "weight": 0.1064,
    "sector": "Utilities",
    "location": "Portugal",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SGRO",
    "name": "Segro PLC",
    "weight": 0.1064,
    "sector": "Real Estate",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TIT",
    "name": "Telecom Italia SpA/Milano",
    "weight": 0.1056,
    "sector": "Communication Services",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AGS",
    "name": "Ageas SA/NV",
    "weight": 0.1049,
    "sector": "Financials",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "INF",
    "name": "Informa PLC",
    "weight": 0.1045,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "FBK",
    "name": "FinecoBank Banca Fineco SpA",
    "weight": 0.1042,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BG",
    "name": "BAWAG Group AG",
    "weight": 0.104,
    "sector": "Financials",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EQT",
    "name": "EQT AB",
    "weight": 0.1019,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SRG",
    "name": "Snam SpA",
    "weight": 0.1015,
    "sector": "Energy",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "WKL",
    "name": "Wolters Kluwer NV",
    "weight": 0.1013,
    "sector": "Industrials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "KYGA",
    "name": "Kerry Group PLC",
    "weight": 0.1013,
    "sector": "Consumer Staples",
    "location": "Ireland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TEF",
    "name": "Telefonica SA",
    "weight": 0.1013,
    "sector": "Communication Services",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PST",
    "name": "Poste Italiane SpA",
    "weight": 0.1012,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NTGY",
    "name": "Naturgy Energy Group SA",
    "weight": 0.0987,
    "sector": "Utilities",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SHL",
    "name": "Siemens Healthineers AG",
    "weight": 0.0985,
    "sector": "Health Care",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "STMN",
    "name": "Straumann Holding AG",
    "weight": 0.0979,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "URW",
    "name": "Unibail-Rodamco-Westfield",
    "weight": 0.0978,
    "sector": "Real Estate",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BT/A",
    "name": "BT Group PLC",
    "weight": 0.0964,
    "sector": "Communication Services",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ELE",
    "name": "Endesa SA",
    "weight": 0.096,
    "sector": "Utilities",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RTO",
    "name": "Rentokil Initial PLC",
    "weight": 0.0959,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ENX",
    "name": "Euronext NV",
    "weight": 0.0953,
    "sector": "Financials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LOGN",
    "name": "Logitech International SA",
    "weight": 0.0947,
    "sector": "Information Technology",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "KSP",
    "name": "Kingspan Group PLC",
    "weight": 0.0947,
    "sector": "Industrials",
    "location": "Ireland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RI",
    "name": "Pernod Ricard SA",
    "weight": 0.0934,
    "sector": "Consumer Staples",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "UPM",
    "name": "UPM-Kymmene Oyj",
    "weight": 0.0934,
    "sector": "Materials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "IAG",
    "name": "International Consolidated Airlines Group SA",
    "weight": 0.0927,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NESTE",
    "name": "Neste Oyj",
    "weight": 0.0921,
    "sector": "Energy",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DSY",
    "name": "Dassault Systemes SE",
    "weight": 0.0919,
    "sector": "Information Technology",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SY1",
    "name": "Symrise AG",
    "weight": 0.0916,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SCHP",
    "name": "Schindler Holding AG",
    "weight": 0.0897,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LISP",
    "name": "Chocoladefabriken Lindt & Spruengli AG",
    "weight": 0.0895,
    "sector": "Consumer Staples",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SPSN",
    "name": "Swiss Prime Site AG",
    "weight": 0.0889,
    "sector": "Real Estate",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MONC",
    "name": "Moncler SpA",
    "weight": 0.0884,
    "sector": "Consumer Discretionary",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "UU/",
    "name": "United Utilities Group PLC",
    "weight": 0.0883,
    "sector": "Utilities",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HEN3",
    "name": "Henkel AG & Co KGaA",
    "weight": 0.0881,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CCH",
    "name": "Coca-Cola HBC AG",
    "weight": 0.088,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DPLM",
    "name": "Diploma PLC",
    "weight": 0.0861,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "STLAM",
    "name": "Stellantis NV",
    "weight": 0.0857,
    "sector": "Consumer Discretionary",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AC",
    "name": "Accor SA",
    "weight": 0.0851,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RO",
    "name": "Roche Holding AG",
    "weight": 0.0843,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SN/",
    "name": "Smith & Nephew PLC",
    "weight": 0.0842,
    "sector": "Health Care",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "KOG",
    "name": "Kongsberg Gruppen ASA",
    "weight": 0.0841,
    "sector": "Industrials",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "KGH",
    "name": "KGHM Polska Miedz SA",
    "weight": 0.0825,
    "sector": "Materials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CARLB",
    "name": "Carlsberg AS",
    "weight": 0.0814,
    "sector": "Consumer Staples",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ASRNL",
    "name": "ASR Nederland NV",
    "weight": 0.0813,
    "sector": "Financials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "METSO",
    "name": "Metso Oyj",
    "weight": 0.0812,
    "sector": "Industrials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "L'Oreal_1",
    "name": "SA",
    "weight": 0.0806,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SOON",
    "name": "Sonova Holding AG",
    "weight": 0.0806,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ADM",
    "name": "Admiral Group PLC",
    "weight": 0.0805,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ITRK",
    "name": "Intertek Group PLC",
    "weight": 0.0803,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NHY",
    "name": "Norsk Hydro ASA",
    "weight": 0.0803,
    "sector": "Materials",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AKZA",
    "name": "Akzo Nobel NV",
    "weight": 0.0794,
    "sector": "Materials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BNZL",
    "name": "Bunzl PLC",
    "weight": 0.0773,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "KNIN",
    "name": "Kuehne + Nagel International AG",
    "weight": 0.0763,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EN",
    "name": "Bouygues SA",
    "weight": 0.0761,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TELIA",
    "name": "Telia Co AB",
    "weight": 0.0757,
    "sector": "Communication Services",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BEAN",
    "name": "Belimo Holding AG",
    "weight": 0.0755,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AGN",
    "name": "Aegon Ltd",
    "weight": 0.0749,
    "sector": "Financials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LISN",
    "name": "Chocoladefabriken Lindt & Spruengli AG",
    "weight": 0.0743,
    "sector": "Consumer Staples",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PEO",
    "name": "Bank Polska Kasa Opieki SA",
    "weight": 0.0738,
    "sector": "Financials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CA",
    "name": "Carrefour SA",
    "weight": 0.0729,
    "sector": "Consumer Staples",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "FGR",
    "name": "Eiffage SA",
    "weight": 0.0728,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BKT",
    "name": "Bankinter SA",
    "weight": 0.0726,
    "sector": "Financials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "UNI",
    "name": "Unipol Gruppo SpA",
    "weight": 0.0722,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BVI",
    "name": "Bureau Veritas SA",
    "weight": 0.0719,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BCP",
    "name": "Banco Comercial Portugues SA",
    "weight": 0.0719,
    "sector": "Financials",
    "location": "Portugal",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SVT",
    "name": "Severn Trent PLC",
    "weight": 0.0716,
    "sector": "Utilities",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EDV",
    "name": "Endeavour Mining PLC",
    "weight": 0.0712,
    "sector": "Materials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ORSTED",
    "name": "Orsted AS",
    "weight": 0.071,
    "sector": "Utilities",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CNA",
    "name": "Centrica PLC",
    "weight": 0.0709,
    "sector": "Utilities",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SMIN",
    "name": "Smiths Group PLC",
    "weight": 0.0708,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MKS",
    "name": "Marks & Spencer Group PLC",
    "weight": 0.0684,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "G1A",
    "name": "GEA Group AG",
    "weight": 0.0683,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SGE",
    "name": "Sage Group PLC/The",
    "weight": 0.068,
    "sector": "Information Technology",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BEZ",
    "name": "Beazley PLC",
    "weight": 0.0674,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "FORTUM",
    "name": "Fortum Oyj",
    "weight": 0.0671,
    "sector": "Utilities",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PZU",
    "name": "Powszechny Zaklad Ubezpieczen SA",
    "weight": 0.0671,
    "sector": "Financials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PSON",
    "name": "Pearson PLC",
    "weight": 0.0663,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RXL",
    "name": "Rexel SA",
    "weight": 0.0659,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "IMI",
    "name": "IMI PLC",
    "weight": 0.065,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AKRBP",
    "name": "Aker BP ASA",
    "weight": 0.0645,
    "sector": "Energy",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ALE",
    "name": "Allegro.eu SA",
    "weight": 0.0645,
    "sector": "Consumer Discretionary",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EPIB",
    "name": "Epiroc AB",
    "weight": 0.0645,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TEL2B",
    "name": "Tele2 AB",
    "weight": 0.0644,
    "sector": "Communication Services",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DHER",
    "name": "Delivery Hero SE",
    "weight": 0.0635,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ABVX",
    "name": "Abivax SA",
    "weight": 0.063,
    "sector": "Health Care",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LI",
    "name": "Klepierre SA",
    "weight": 0.0628,
    "sector": "Real Estate",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MNG",
    "name": "M&G PLC",
    "weight": 0.0625,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "FME",
    "name": "Fresenius Medical Care AG",
    "weight": 0.0622,
    "sector": "Health Care",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ERF",
    "name": "Eurofins Scientific SE",
    "weight": 0.0616,
    "sector": "Health Care",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TEL",
    "name": "Telenor ASA",
    "weight": 0.0614,
    "sector": "Communication Services",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "INDUC",
    "name": "Industrivarden AB",
    "weight": 0.0611,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "OMV",
    "name": "OMV AG",
    "weight": 0.061,
    "sector": "Energy",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BEI",
    "name": "Beiersdorf AG",
    "weight": 0.0608,
    "sector": "Consumer Staples",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SPIE",
    "name": "SPIE SA",
    "weight": 0.0607,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CON",
    "name": "Continental AG",
    "weight": 0.0605,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SOBI",
    "name": "Swedish Orphan Biovitrum AB",
    "weight": 0.0604,
    "sector": "Health Care",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TEN",
    "name": "Tenaris SA",
    "weight": 0.0603,
    "sector": "Energy",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SKAB",
    "name": "Skanska AB",
    "weight": 0.0598,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "WISE",
    "name": "Wise Group PLC",
    "weight": 0.0595,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ORNBV",
    "name": "Orion Oyj",
    "weight": 0.0594,
    "sector": "Health Care",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SKFB",
    "name": "SKF AB",
    "weight": 0.0591,
    "sector": "Materials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HOT",
    "name": "HOCHTIEF AG",
    "weight": 0.0587,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PNDORA",
    "name": "Pandora A/S",
    "weight": 0.0581,
    "sector": "Consumer Discretionary",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GALP",
    "name": "Galp Energia SGPS SA",
    "weight": 0.0574,
    "sector": "Energy",
    "location": "Portugal",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ADDTB",
    "name": "AddTech AB",
    "weight": 0.0566,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EVO",
    "name": "Evolution AB",
    "weight": 0.0563,
    "sector": "Consumer Discretionary",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "WEIR",
    "name": "Weir Group PLC",
    "weight": 0.0561,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SDLF",
    "name": "Standard Life PLC",
    "weight": 0.0558,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PSPN",
    "name": "PSP Swiss Property AG",
    "weight": 0.0554,
    "sector": "Real Estate",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RYA",
    "name": "Ryanair Holdings PLC",
    "weight": 0.0552,
    "sector": "Consumer Discretionary",
    "location": "Ireland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TRELB",
    "name": "Trelleborg AB",
    "weight": 0.0552,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MOWI",
    "name": "Mowi ASA",
    "weight": 0.0552,
    "sector": "Consumer Staples",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RBI",
    "name": "Raiffeisen Bank International AG",
    "weight": 0.0549,
    "sector": "Financials",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HEIO",
    "name": "Heineken Holding NV",
    "weight": 0.0549,
    "sector": "Consumer Staples",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SBRY",
    "name": "J Sainsbury PLC",
    "weight": 0.0548,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HSX",
    "name": "Hiscox Ltd",
    "weight": 0.0548,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "STJ",
    "name": "St James's Place PLC",
    "weight": 0.0544,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "QIA",
    "name": "QIAGEN NV",
    "weight": 0.0543,
    "sector": "Health Care",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SECUB",
    "name": "Securitas AB",
    "weight": 0.0535,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MRO",
    "name": "Melrose Industries PLC",
    "weight": 0.0532,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "KBX",
    "name": "Knorr-Bremse AG",
    "weight": 0.0532,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TLX",
    "name": "Talanx AG",
    "weight": 0.0527,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "COLOB",
    "name": "Coloplast A/S",
    "weight": 0.052,
    "sector": "Health Care",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ANA",
    "name": "Acciona SA",
    "weight": 0.0518,
    "sector": "Industrials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MAERSKB",
    "name": "AP Moller - Maersk A/S",
    "weight": 0.0516,
    "sector": "Industrials",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MICC",
    "name": "Magnum Ice Cream Co NV/The",
    "weight": 0.0513,
    "sector": "Consumer Staples",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HEN",
    "name": "Henkel AG & Co KGaA",
    "weight": 0.0512,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HMB",
    "name": "H & M Hennes & Mauritz AB",
    "weight": 0.0512,
    "sector": "Consumer Discretionary",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MRL",
    "name": "Merlin Properties Socimi SA",
    "weight": 0.0512,
    "sector": "Real Estate",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ABF",
    "name": "Associated British Foods PLC",
    "weight": 0.0505,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LIFCOB",
    "name": "Lifco AB",
    "weight": 0.0494,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "YAR",
    "name": "Yara International ASA",
    "weight": 0.0485,
    "sector": "Materials",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DCC",
    "name": "DCC PLC",
    "weight": 0.0484,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EBP",
    "name": "Erste Bank Polska SA",
    "weight": 0.0484,
    "sector": "Financials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "IG",
    "name": "Italgas SpA",
    "weight": 0.0483,
    "sector": "Utilities",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ELI",
    "name": "Elia Group SA/NV",
    "weight": 0.048,
    "sector": "Utilities",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GBLB",
    "name": "Groupe Bruxelles Lambert NV",
    "weight": 0.0477,
    "sector": "Financials",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BEIJB",
    "name": "Beijer Ref AB",
    "weight": 0.0476,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BNR",
    "name": "Brenntag SE",
    "weight": 0.0474,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "Engie_1",
    "name": "SA",
    "weight": 0.0471,
    "sector": "Utilities",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ORK",
    "name": "Orkla ASA",
    "weight": 0.047,
    "sector": "Consumer Staples",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TRYG",
    "name": "Tryg A/S",
    "weight": 0.047,
    "sector": "Financials",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RED",
    "name": "Redeia Corp SA",
    "weight": 0.047,
    "sector": "Utilities",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ACKB",
    "name": "Ackermans & van Haaren NV",
    "weight": 0.0469,
    "sector": "Industrials",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LHA",
    "name": "Deutsche Lufthansa AG",
    "weight": 0.0466,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "FRES",
    "name": "Fresnillo PLC",
    "weight": 0.0463,
    "sector": "Materials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ZAL",
    "name": "Zalando SE",
    "weight": 0.0462,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "IPN",
    "name": "Ipsen SA",
    "weight": 0.0457,
    "sector": "Health Care",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SPX",
    "name": "Spirax Group PLC",
    "weight": 0.0456,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "UHR",
    "name": "Swatch Group AG/The",
    "weight": 0.0453,
    "sector": "Consumer Discretionary",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SCHN",
    "name": "Schindler Holding AG",
    "weight": 0.0452,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EXO",
    "name": "EXOR NV",
    "weight": 0.0451,
    "sector": "Financials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VOLVA",
    "name": "Volvo AB",
    "weight": 0.0449,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AVOL",
    "name": "Avolta AG",
    "weight": 0.0439,
    "sector": "Consumer Discretionary",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "KGF",
    "name": "Kingfisher PLC",
    "weight": 0.0438,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LAND",
    "name": "Land Securities Group PLC",
    "weight": 0.0435,
    "sector": "Real Estate",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "REC",
    "name": "Recordati Industria Chimica e Farmaceutica SpA",
    "weight": 0.0435,
    "sector": "Health Care",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LPP",
    "name": "LPP SA",
    "weight": 0.0427,
    "sector": "Consumer Discretionary",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SCR",
    "name": "SCOR SE",
    "weight": 0.0425,
    "sector": "Financials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "STERV",
    "name": "Stora Enso Oyj",
    "weight": 0.0419,
    "sector": "Industrials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ICG",
    "name": "ICG PLC",
    "weight": 0.0416,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GET",
    "name": "Getlink SE",
    "weight": 0.0412,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TPRO",
    "name": "Technoprobe SpA",
    "weight": 0.0412,
    "sector": "Information Technology",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HWDN",
    "name": "Howden Joinery Group PLC",
    "weight": 0.0408,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SCAB",
    "name": "Svenska Cellulosa AB SCA",
    "weight": 0.0405,
    "sector": "Materials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "KESKOB",
    "name": "Kesko Oyj",
    "weight": 0.0402,
    "sector": "Consumer Staples",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SDR",
    "name": "Schroders PLC",
    "weight": 0.04,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "FHZN",
    "name": "Flughafen Zurich AG",
    "weight": 0.0398,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ELISA",
    "name": "Elisa Oyj",
    "weight": 0.0398,
    "sector": "Communication Services",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EMSN",
    "name": "EMS-Chemie Holding AG",
    "weight": 0.0397,
    "sector": "Materials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ALO",
    "name": "Alstom SA",
    "weight": 0.0396,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DIM",
    "name": "Sartorius Stedim Biotech",
    "weight": 0.0391,
    "sector": "Health Care",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "INDUA",
    "name": "Industrivarden AB",
    "weight": 0.0389,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EDEN",
    "name": "Edenred SE",
    "weight": 0.0389,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "G24",
    "name": "Scout24 SE",
    "weight": 0.0388,
    "sector": "Information Technology",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ANDR",
    "name": "ANDRITZ AG",
    "weight": 0.0381,
    "sector": "Industrials",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AMUN",
    "name": "Amundi SA",
    "weight": 0.038,
    "sector": "Financials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CRDA",
    "name": "Croda International PLC",
    "weight": 0.038,
    "sector": "Materials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BLND",
    "name": "British Land Co PLC/The",
    "weight": 0.038,
    "sector": "Real Estate",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AM",
    "name": "Dassault Aviation SA",
    "weight": 0.0377,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "INDT",
    "name": "Indutrade AB",
    "weight": 0.0375,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SIGN",
    "name": "SIG Group AG",
    "weight": 0.0374,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CTEC",
    "name": "Convatec Group PLC",
    "weight": 0.0374,
    "sector": "Health Care",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SQN",
    "name": "Swissquote Group Holding SA",
    "weight": 0.0372,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LOTB",
    "name": "Lotus Bakeries NV",
    "weight": 0.0371,
    "sector": "Consumer Staples",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TUB",
    "name": "Financiere de Tubize SA",
    "weight": 0.0371,
    "sector": "Health Care",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BMED",
    "name": "Banca Mediolanum SpA",
    "weight": 0.037,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AUTO",
    "name": "Autotrader Group PLC",
    "weight": 0.037,
    "sector": "Information Technology",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "WTB",
    "name": "Whitbread PLC",
    "weight": 0.0366,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NIBEB",
    "name": "Nibe Industrier AB",
    "weight": 0.0364,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RNO",
    "name": "Renault SA",
    "weight": 0.0362,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "IMCD",
    "name": "IMCD NV",
    "weight": 0.0358,
    "sector": "Materials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "JMT",
    "name": "Jeronimo Martins SGPS SA",
    "weight": 0.0357,
    "sector": "Consumer Staples",
    "location": "Portugal",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MTLN",
    "name": "Metlen Energy & Metals PLC",
    "weight": 0.0354,
    "sector": "Utilities",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ADP",
    "name": "Aeroports de Paris SA",
    "weight": 0.035,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SYENS",
    "name": "Syensqo SA",
    "weight": 0.0349,
    "sector": "Materials",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BRBY",
    "name": "Burberry Group PLC",
    "weight": 0.0347,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EDPR",
    "name": "EDP Renewables SA",
    "weight": 0.0344,
    "sector": "Utilities",
    "location": "Portugal",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GJF",
    "name": "Gjensidige Forsikring ASA",
    "weight": 0.0342,
    "sector": "Financials",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MAERSKA",
    "name": "AP Moller - Maersk A/S",
    "weight": 0.0338,
    "sector": "Industrials",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BTRW",
    "name": "Barratt Redrow PLC",
    "weight": 0.0338,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BARN",
    "name": "Barry Callebaut AG",
    "weight": 0.0336,
    "sector": "Consumer Staples",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "WDP",
    "name": "Warehouses De Pauw CVA",
    "weight": 0.0328,
    "sector": "Real Estate",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LEG",
    "name": "LEG Immobilien SE",
    "weight": 0.0327,
    "sector": "Real Estate",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "IDR",
    "name": "Indra Sistemas SA",
    "weight": 0.0321,
    "sector": "Information Technology",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MBK",
    "name": "mBank SA",
    "weight": 0.032,
    "sector": "Financials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HAG",
    "name": "Hensoldt AG",
    "weight": 0.0319,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EVK",
    "name": "Evonik Industries AG",
    "weight": 0.0316,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AYV",
    "name": "Ayvens SA",
    "weight": 0.0315,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "INPST",
    "name": "InPost SA",
    "weight": 0.0315,
    "sector": "Industrials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GETIB",
    "name": "Getinge AB",
    "weight": 0.0311,
    "sector": "Health Care",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MAP",
    "name": "Mapfre SA",
    "weight": 0.031,
    "sector": "Financials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CAST",
    "name": "Castellum AB",
    "weight": 0.0309,
    "sector": "Real Estate",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ENT",
    "name": "Entain PLC",
    "weight": 0.0305,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RMV",
    "name": "Rightmove PLC",
    "weight": 0.0305,
    "sector": "Real Estate",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PSN",
    "name": "Persimmon PLC",
    "weight": 0.0298,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "R3NK",
    "name": "RENK Group AG",
    "weight": 0.0296,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TEMN",
    "name": "Temenos AG",
    "weight": 0.0295,
    "sector": "Information Technology",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AAK",
    "name": "AAK AB",
    "weight": 0.0291,
    "sector": "Consumer Staples",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GFC",
    "name": "Gecina SA",
    "weight": 0.029,
    "sector": "Real Estate",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BZU",
    "name": "Buzzi SpA",
    "weight": 0.0288,
    "sector": "Industrials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VER",
    "name": "Verbund AG",
    "weight": 0.0286,
    "sector": "Utilities",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BKG",
    "name": "Berkeley Group Holdings PLC",
    "weight": 0.0285,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "A2A",
    "name": "A2A SpA",
    "weight": 0.0284,
    "sector": "Utilities",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BCVN",
    "name": "Banque Cantonale Vaudoise",
    "weight": 0.0282,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LUNDB",
    "name": "L E Lundbergforetagen AB",
    "weight": 0.0281,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SSABB",
    "name": "SSAB AB",
    "weight": 0.0277,
    "sector": "Materials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DIE",
    "name": "D'ieteren Group",
    "weight": 0.0275,
    "sector": "Consumer Discretionary",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GF",
    "name": "Georg Fischer AG",
    "weight": 0.0275,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VEND",
    "name": "Schibsted ASA",
    "weight": 0.0268,
    "sector": "Information Technology",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SOF",
    "name": "Sofina SA",
    "weight": 0.0267,
    "sector": "Financials",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MNDI",
    "name": "Mondi PLC",
    "weight": 0.0265,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RAA",
    "name": "Rational AG",
    "weight": 0.0258,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ZEG",
    "name": "Zegona Communications plc",
    "weight": 0.0256,
    "sector": "Communication Services",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BALDB",
    "name": "Fastighets AB Balder",
    "weight": 0.0252,
    "sector": "Real Estate",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TW/",
    "name": "Taylor Wimpey PLC",
    "weight": 0.0252,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DNP",
    "name": "Dino Polska SA",
    "weight": 0.0251,
    "sector": "Consumer Staples",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CPR",
    "name": "Davide Campari-Milano NV",
    "weight": 0.0248,
    "sector": "Consumer Staples",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SSABA",
    "name": "SSAB AB",
    "weight": 0.0247,
    "sector": "Materials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VAR",
    "name": "Var Energi ASA",
    "weight": 0.0242,
    "sector": "Energy",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NEM",
    "name": "Nemetschek SE",
    "weight": 0.0237,
    "sector": "Information Technology",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DEMANT",
    "name": "Demant A/S",
    "weight": 0.0237,
    "sector": "Health Care",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BMW3",
    "name": "Bayerische Motoren Werke AG",
    "weight": 0.0234,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EVD",
    "name": "CTS Eventim AG & Co KGaA",
    "weight": 0.0231,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VALMT",
    "name": "Valmet Oyj",
    "weight": 0.023,
    "sector": "Industrials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SAGAB",
    "name": "Sagax AB",
    "weight": 0.0228,
    "sector": "Real Estate",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VSURE",
    "name": "Verisure Group Topholding AB",
    "weight": 0.0224,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BKW",
    "name": "BKW AG",
    "weight": 0.0223,
    "sector": "Utilities",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "COV",
    "name": "Covivio SA/France",
    "weight": 0.0222,
    "sector": "Real Estate",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SALM",
    "name": "Salmar ASA",
    "weight": 0.0221,
    "sector": "Consumer Staples",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BC",
    "name": "Brunello Cucinelli SpA",
    "weight": 0.0218,
    "sector": "Consumer Discretionary",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BOL_1",
    "name": "Bollore SE",
    "weight": 0.0218,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BIM",
    "name": "BioMerieux",
    "weight": 0.0218,
    "sector": "Health Care",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PIRC",
    "name": "Pirelli & C SpA",
    "weight": 0.0218,
    "sector": "Consumer Discretionary",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HER",
    "name": "Hera SpA",
    "weight": 0.0217,
    "sector": "Utilities",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RAND",
    "name": "Randstad NV",
    "weight": 0.0216,
    "sector": "Industrials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HAL",
    "name": "HAL Trust",
    "weight": 0.0216,
    "sector": "Financials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "KGX",
    "name": "KION Group AG",
    "weight": 0.021,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "FRA",
    "name": "Fraport AG Frankfurt Airport Services Worldwide",
    "weight": 0.0209,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CVC",
    "name": "CVC Capital Partners PLC",
    "weight": 0.0208,
    "sector": "Financials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GRF",
    "name": "Grifols SA",
    "weight": 0.0205,
    "sector": "Health Care",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "FPE3",
    "name": "FUCHS SE",
    "weight": 0.02,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BC8",
    "name": "Bechtle AG",
    "weight": 0.0199,
    "sector": "Information Technology",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "BANB",
    "name": "Bachem Holding AG",
    "weight": 0.0197,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "IP",
    "name": "Interpump Group SpA",
    "weight": 0.0197,
    "sector": "Industrials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AXFO",
    "name": "Axfood AB",
    "weight": 0.0192,
    "sector": "Consumer Staples",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AAF",
    "name": "Airtel Africa PLC",
    "weight": 0.0189,
    "sector": "Communication Services",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "FDJU",
    "name": "La Francaise des Jeux SAEM",
    "weight": 0.0188,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VOW",
    "name": "Volkswagen AG",
    "weight": 0.0188,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VZN",
    "name": "VZ Holding AG",
    "weight": 0.0188,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SW",
    "name": "Sodexo SA",
    "weight": 0.0182,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LATOB",
    "name": "Investment AB Latour",
    "weight": 0.0181,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "STR",
    "name": "Strabag SE",
    "weight": 0.018,
    "sector": "Industrials",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ROCKB",
    "name": "ROCKWOOL A/S",
    "weight": 0.0177,
    "sector": "Industrials",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SWECB",
    "name": "Sweco AB",
    "weight": 0.0176,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "MB",
    "name": "Mediobanca Banca di Credito Finanziario SpA",
    "weight": 0.0175,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VIG",
    "name": "Vienna Insurance Group AG Wiener Versicherung Gruppe",
    "weight": 0.0175,
    "sector": "Financials",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AKER",
    "name": "Aker ASA",
    "weight": 0.017,
    "sector": "Financials",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "JD/",
    "name": "JD Sports Fashion PLC",
    "weight": 0.017,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CTPNV",
    "name": "CTP NV",
    "weight": 0.0165,
    "sector": "Real Estate",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "REY",
    "name": "Reply SpA",
    "weight": 0.0165,
    "sector": "Information Technology",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "8TRA",
    "name": "Traton SE",
    "weight": 0.016,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DWS",
    "name": "DWS Group GmbH & Co KGaA",
    "weight": 0.0157,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "Air_1",
    "name": "Liquide SA",
    "weight": 0.0155,
    "sector": "Materials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "INW",
    "name": "Infrastrutture Wireless Italiane SpA",
    "weight": 0.0153,
    "sector": "Communication Services",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "KMAR",
    "name": "Kongsberg Maritime AS",
    "weight": 0.0153,
    "sector": "Industrials",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CSG",
    "name": "CSG NV",
    "weight": 0.0147,
    "sector": "Industrials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HOLMB",
    "name": "Holmen AB",
    "weight": 0.0146,
    "sector": "Materials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "UHRN",
    "name": "Swatch Group AG/The",
    "weight": 0.0145,
    "sector": "Consumer Discretionary",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AMV0",
    "name": "Aumovio SE",
    "weight": 0.0141,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "L'Oreal_2",
    "name": "SA",
    "weight": 0.0136,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SEBC",
    "name": "Skandinaviska Enskilda Banken AB",
    "weight": 0.0135,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "Engie_2",
    "name": "SA",
    "weight": 0.0132,
    "sector": "Utilities",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "GRF/P",
    "name": "Grifols SA",
    "weight": 0.0131,
    "sector": "Health Care",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SHA0",
    "name": "Schaeffler AG",
    "weight": 0.013,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NEXI",
    "name": "Nexi SpA",
    "weight": 0.0118,
    "sector": "Industrials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HLUNB",
    "name": "H Lundbeck A/S",
    "weight": 0.0117,
    "sector": "Health Care",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "RRTL",
    "name": "RTL Group SA",
    "weight": 0.0093,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VOLCARB",
    "name": "Volvo Car AB",
    "weight": 0.0088,
    "sector": "Consumer Discretionary",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SHBB",
    "name": "Svenska Handelsbanken AB",
    "weight": 0.0087,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "Sodexo",
    "name": "SA",
    "weight": 0.0086,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DWNI",
    "name": "Deutsche Wohnen SE",
    "weight": 0.0077,
    "sector": "Real Estate",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "1COV",
    "name": "Covestro AG",
    "weight": 0.0058,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TKA",
    "name": "Telekom Austria AG",
    "weight": 0.0054,
    "sector": "Communication Services",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "FPE",
    "name": "FUCHS SE",
    "weight": 0.0053,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ANE",
    "name": "Corp ACCIONA Energias Renovables SA",
    "weight": 0.005,
    "sector": "Utilities",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ACS/D",
    "name": "ACS Actividades de Construccion y Servicios SA",
    "weight": 0.0026,
    "sector": "Industrials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "Sodexo_1",
    "name": "SA",
    "weight": 0.0024,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SAGAD",
    "name": "Sagax AB",
    "weight": 0.0023,
    "sector": "Real Estate",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HLUNA",
    "name": "H Lundbeck A/S",
    "weight": 0.0018,
    "sector": "Health Care",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ABVX_1",
    "name": "Abivax SA",
    "weight": 0.0018,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "Sodexo_2",
    "name": "SA",
    "weight": 0.0014,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SCAA",
    "name": "Svenska Cellulosa AB SCA",
    "weight": 0.001,
    "sector": "Materials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "Sodexo_3",
    "name": "SA",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "UTG",
    "name": "UNITE Group PLC/The",
    "weight": 0.0005,
    "sector": "Real Estate",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "1FRVIA",
    "name": "Forvia SE",
    "weight": 0.0005,
    "sector": "Consumer Discretionary",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "NMC",
    "name": "NMC Health PLC",
    "weight": 0.0005,
    "sector": "Health Care",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "CRH",
    "name": "CRH PLC",
    "weight": 0.0005,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SOLB",
    "name": "Solvay SA",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "PROX",
    "name": "Proximus SADP",
    "weight": 0.0005,
    "sector": "Communication Services",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "DLN",
    "name": "Derwent London PLC",
    "weight": 0.0005,
    "sector": "Real Estate",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "LUMO",
    "name": "Lumo Kodit Oyj",
    "weight": 0.0005,
    "sector": "Real Estate",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "EVR",
    "name": "Evraz PLC",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TUI",
    "name": "TUI AG",
    "weight": 0.0005,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HMSO",
    "name": "Hammerson PLC",
    "weight": 0.0005,
    "sector": "Real Estate",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ENG",
    "name": "Enagas SA",
    "weight": 0.0005,
    "sector": "Energy",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TYRES",
    "name": "Nokian Renkaat Oyj",
    "weight": 0.0005,
    "sector": "Consumer Discretionary",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "UMI",
    "name": "Umicore SA",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "HUH1V",
    "name": "Huhtamaki Oyj",
    "weight": 0.0005,
    "sector": "Industrials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "TNET",
    "name": "Telenet Group Holding NV",
    "weight": 0.0005,
    "sector": "Communication Services",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "ROCKWOOL",
    "name": "A/S",
    "weight": 0.0005,
    "sector": "Industrials",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "SAMPO_1",
    "name": "Sampo Oyj",
    "weight": 0.0005,
    "sector": "Financials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "VOE",
    "name": "voestalpine AG",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "AENA_1",
    "name": "Aena SME SA",
    "weight": 0.0005,
    "sector": "Industrials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "EUR"
  },
  {
    "symbol": "COLR",
    "name": "Colruyt Group N.V",
    "weight": 0.0005,
    "sector": "Consumer Staples",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "EUR"
  }
];

export const VWCG_HOLDINGS = VWCG_FULL_HOLDINGS;
