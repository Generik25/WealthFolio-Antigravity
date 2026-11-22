// Complete holdings dataset for Amundi Core Stoxx Europe 600 UCITS ETF Acc (MEUD.PA / MEUD.DE / LYP6.DE / LU0908500753)
// Official Amundi reporting data with full 614 constituents, sector allocations, and geographic breakdown.

export interface ETFHolding {
  symbol: string;
  name: string;
  weight: number;
  sector: string;
  location: string;
}

export const MEUD_SECTOR_ALLOCATIONS = [
  {
    "name": "Financials",
    "weight": 25.72
  },
  {
    "name": "Industrials",
    "weight": 18.76
  },
  {
    "name": "Health Care",
    "weight": 12.21
  },
  {
    "name": "Information Technology",
    "weight": 8.65
  },
  {
    "name": "Consumer Staples",
    "weight": 8.13
  },
  {
    "name": "Consumer Discretionary",
    "weight": 6.7
  },
  {
    "name": "Materials",
    "weight": 5.41
  },
  {
    "name": "Energy",
    "weight": 5.35
  },
  {
    "name": "Utilities",
    "weight": 4.89
  },
  {
    "name": "Communication Services",
    "weight": 2.75
  },
  {
    "name": "Real Estate",
    "weight": 1.1
  },
  {
    "name": "Cash & Derivatives",
    "weight": 0.31
  }
];

export const MEUD_COUNTRY_ALLOCATIONS = [
  {
    "name": "United Kingdom",
    "weight": 22.83
  },
  {
    "name": "France",
    "weight": 15.19
  },
  {
    "name": "Switzerland",
    "weight": 13.92
  },
  {
    "name": "Germany",
    "weight": 12.78
  },
  {
    "name": "Netherlands",
    "weight": 8.28
  },
  {
    "name": "Spain",
    "weight": 5.88
  },
  {
    "name": "Italy",
    "weight": 5.78
  },
  {
    "name": "Sweden",
    "weight": 4.72
  },
  {
    "name": "Denmark",
    "weight": 2.7
  },
  {
    "name": "Finland",
    "weight": 1.94
  },
  {
    "name": "Belgium",
    "weight": 1.83
  },
  {
    "name": "Norway",
    "weight": 1.29
  },
  {
    "name": "Poland",
    "weight": 0.92
  },
  {
    "name": "Ireland",
    "weight": 0.67
  },
  {
    "name": "Austria",
    "weight": 0.64
  },
  {
    "name": "Europe",
    "weight": 0.31
  },
  {
    "name": "Portugal",
    "weight": 0.3
  },
  {
    "name": "UAE",
    "weight": 0.0
  }
];

export const MEUD_FULL_HOLDINGS: ETFHolding[] = [
  {
    "symbol": "ASML",
    "name": "ASML HOLDING NV",
    "weight": 4.59,
    "sector": "Information Technology",
    "location": "Netherlands"
  },
  {
    "symbol": "HSBC",
    "name": "HSBC HOLDINGS PLC",
    "weight": 2.31,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "NOVN",
    "name": "NOVARTIS AG-REG",
    "weight": 1.91,
    "sector": "Health Care",
    "location": "Switzerland"
  },
  {
    "symbol": "ROG",
    "name": "ROCHE HOLDING AG - GENUSSS CHF",
    "weight": 1.87,
    "sector": "Health Care",
    "location": "Switzerland"
  },
  {
    "symbol": "NESN",
    "name": "NESTLE SA-REG",
    "weight": 1.78,
    "sector": "Consumer Staples",
    "location": "Switzerland"
  },
  {
    "symbol": "AZN",
    "name": "ASTRAZENECA GBP",
    "weight": 1.72,
    "sector": "Health Care",
    "location": "United Kingdom"
  },
  {
    "symbol": "SHEL",
    "name": "SHELL PLC EUR",
    "weight": 1.61,
    "sector": "Energy",
    "location": "United Kingdom"
  },
  {
    "symbol": "SIE",
    "name": "SIEMENS AG-REG",
    "weight": 1.48,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "SAN",
    "name": "BANCO SANTANDER SA MADRID",
    "weight": 1.32,
    "sector": "Financials",
    "location": "Spain"
  },
  {
    "symbol": "TTE",
    "name": "TOTALENERGIES SE PARIS",
    "weight": 1.26,
    "sector": "Energy",
    "location": "France"
  },
  {
    "symbol": "ALV",
    "name": "ALLIANZ SE-REG",
    "weight": 1.21,
    "sector": "Financials",
    "location": "Germany"
  },
  {
    "symbol": "SU",
    "name": "SCHNEIDER ELECT SE",
    "weight": 1.16,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "UBSG",
    "name": "UBS GROUP AG",
    "weight": 1.06,
    "sector": "Financials",
    "location": "Switzerland"
  },
  {
    "symbol": "NOVO-B",
    "name": "NOVO NORDISK A/S-B",
    "weight": 1.02,
    "sector": "Health Care",
    "location": "Denmark"
  },
  {
    "symbol": "RR",
    "name": "ROLLS-ROYCE HOLDINGS PLC",
    "weight": 1.02,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "ABBN",
    "name": "ABB LTD-REG",
    "weight": 1.01,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "IBE",
    "name": "IBERDROLA SA",
    "weight": 0.99,
    "sector": "Utilities",
    "location": "Spain"
  },
  {
    "symbol": "SAP",
    "name": "SAP SE / XETRA",
    "weight": 0.99,
    "sector": "Information Technology",
    "location": "Germany"
  },
  {
    "symbol": "BBVA",
    "name": "BANCO BILBAO VIZCAYA ARGENTA",
    "weight": 0.96,
    "sector": "Financials",
    "location": "Spain"
  },
  {
    "symbol": "UCG",
    "name": "UNICREDIT SPA",
    "weight": 0.93,
    "sector": "Financials",
    "location": "Italy"
  },
  {
    "symbol": "ENR",
    "name": "SIEMENS ENERGY AG",
    "weight": 0.92,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "AIR",
    "name": "AIRBUS SE PARIS",
    "weight": 0.91,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "SAF",
    "name": "SAFRAN SA",
    "weight": 0.9,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "ULVR",
    "name": "UNILEVER PLC LONDON",
    "weight": 0.88,
    "sector": "Consumer Staples",
    "location": "United Kingdom"
  },
  {
    "symbol": "BATS",
    "name": "BRITISH AMERICAN TOBACCO",
    "weight": 0.87,
    "sector": "Consumer Staples",
    "location": "United Kingdom"
  },
  {
    "symbol": "MC",
    "name": "LVMH MOET HENNESSY LOUIS VUI",
    "weight": 0.87,
    "sector": "Consumer Discretionary",
    "location": "France"
  },
  {
    "symbol": "CFR",
    "name": "CIE FINANCIERE RICHEMO-A REG",
    "weight": 0.84,
    "sector": "Consumer Discretionary",
    "location": "Switzerland"
  },
  {
    "symbol": "BNP",
    "name": "BNP PARIBAS",
    "weight": 0.83,
    "sector": "Financials",
    "location": "France"
  },
  {
    "symbol": "BP",
    "name": "BP PLC",
    "weight": 0.78,
    "sector": "Energy",
    "location": "United Kingdom"
  },
  {
    "symbol": "ZURN",
    "name": "ZURICH INSURANCE GROUP AG",
    "weight": 0.76,
    "sector": "Financials",
    "location": "Switzerland"
  },
  {
    "symbol": "ISP",
    "name": "INTESA SANPAOLO",
    "weight": 0.74,
    "sector": "Financials",
    "location": "Italy"
  },
  {
    "symbol": "DTE",
    "name": "DEUTSCHE TELEKOM NAMEN (XETRA)",
    "weight": 0.7,
    "sector": "Communication Services",
    "location": "Germany"
  },
  {
    "symbol": "IFX",
    "name": "INFINEON TECHNOLOGIES AG",
    "weight": 0.68,
    "sector": "Information Technology",
    "location": "Germany"
  },
  {
    "symbol": "GSK",
    "name": "GSK PLC",
    "weight": 0.68,
    "sector": "Health Care",
    "location": "United Kingdom"
  },
  {
    "symbol": "RIO",
    "name": "RIO TINTO PLC (GBR)",
    "weight": 0.65,
    "sector": "Materials",
    "location": "United Kingdom"
  },
  {
    "symbol": "SAN",
    "name": "SANOFI - PARIS",
    "weight": 0.64,
    "sector": "Health Care",
    "location": "France"
  },
  {
    "symbol": "INGA",
    "name": "ING GROEP NV",
    "weight": 0.63,
    "sector": "Financials",
    "location": "Netherlands"
  },
  {
    "symbol": "BARC",
    "name": "BARCLAYS PLC",
    "weight": 0.62,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "CS",
    "name": "AXA SA",
    "weight": 0.59,
    "sector": "Financials",
    "location": "France"
  },
  {
    "symbol": "LLOY",
    "name": "LLOYDS BANKING GROUP PLC",
    "weight": 0.58,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "ENEL",
    "name": "ENEL SPA",
    "weight": 0.58,
    "sector": "Utilities",
    "location": "Italy"
  },
  {
    "symbol": "NG",
    "name": "NATIONAL GRID PLC",
    "weight": 0.57,
    "sector": "Utilities",
    "location": "United Kingdom"
  },
  {
    "symbol": "ABI",
    "name": "ANHEUSER-BUSCH INBEV SA/NV BRUXELLES",
    "weight": 0.55,
    "sector": "Consumer Staples",
    "location": "Belgium"
  },
  {
    "symbol": "BA",
    "name": "BAE SYSTEMS PLC GBP",
    "weight": 0.53,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "DG",
    "name": "VINCI SA (PARIS)",
    "weight": 0.52,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "INVE-B",
    "name": "INVESTOR AB-B SHS",
    "weight": 0.49,
    "sector": "Financials",
    "location": "Sweden"
  },
  {
    "symbol": "NWG",
    "name": "NATWEST GROUP PLC",
    "weight": 0.49,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "MUV2",
    "name": "MUENCHENER RUECKVER AG-REG",
    "weight": 0.48,
    "sector": "Financials",
    "location": "Germany"
  },
  {
    "symbol": "ITX",
    "name": "INDUSTRIA DE DISENO TEXTIL",
    "weight": 0.45,
    "sector": "Consumer Discretionary",
    "location": "Spain"
  },
  {
    "symbol": "GLEN",
    "name": "GLENCORE PLC GBP",
    "weight": 0.45,
    "sector": "Materials",
    "location": "United Kingdom"
  },
  {
    "symbol": "DBK",
    "name": "DEUTSCHE BANK AG NAMEN",
    "weight": 0.44,
    "sector": "Financials",
    "location": "Germany"
  },
  {
    "symbol": "NDA-FI",
    "name": "NORDEA BANK ABP",
    "weight": 0.44,
    "sector": "Financials",
    "location": "Finland"
  },
  {
    "symbol": "RMS",
    "name": "HERMES INTERNATIONAL",
    "weight": 0.44,
    "sector": "Consumer Discretionary",
    "location": "France"
  },
  {
    "symbol": "GLE",
    "name": "SOCIETE GENERALE",
    "weight": 0.43,
    "sector": "Financials",
    "location": "France"
  },
  {
    "symbol": "DHL",
    "name": "DHL GROUP (XETRA)",
    "weight": 0.4,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "REL",
    "name": "RELX PLC",
    "weight": 0.39,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "EL",
    "name": "ESSILORLUXOTTICA",
    "weight": 0.38,
    "sector": "Health Care",
    "location": "France"
  },
  {
    "symbol": "VOLV-B",
    "name": "VOLVO AB-B SHS",
    "weight": 0.37,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "NOKIA",
    "name": "NOKIA OYJ HELSINKI",
    "weight": 0.37,
    "sector": "Information Technology",
    "location": "Finland"
  },
  {
    "symbol": "LSEG",
    "name": "LONDON STOCK EXCHANGE GROUP GBP",
    "weight": 0.36,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "CPG",
    "name": "COMPASS GROUP PLC",
    "weight": 0.36,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "DB1",
    "name": "DEUTSCHE BOERSE AG",
    "weight": 0.35,
    "sector": "Financials",
    "location": "Germany"
  },
  {
    "symbol": "ARGX",
    "name": "ARGENX SE",
    "weight": 0.35,
    "sector": "Health Care",
    "location": "Belgium"
  },
  {
    "symbol": "PRX",
    "name": "PROSUS NV",
    "weight": 0.35,
    "sector": "Consumer Discretionary",
    "location": "Netherlands"
  },
  {
    "symbol": "RHM",
    "name": "RHEINMETALL ORD",
    "weight": 0.35,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "ATCO-A",
    "name": "ATLAS COPCO AB-A SHS",
    "weight": 0.35,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "BAYN",
    "name": "BAYER AG-REG",
    "weight": 0.34,
    "sector": "Health Care",
    "location": "Germany"
  },
  {
    "symbol": "G",
    "name": "GENERALI MILAN",
    "weight": 0.34,
    "sector": "Financials",
    "location": "Italy"
  },
  {
    "symbol": "CABK",
    "name": "CAIXABANK SA",
    "weight": 0.34,
    "sector": "Financials",
    "location": "Spain"
  },
  {
    "symbol": "AAL",
    "name": "ANGLO AMERICAN PLC GBP",
    "weight": 0.34,
    "sector": "Materials",
    "location": "United Kingdom"
  },
  {
    "symbol": "STANC",
    "name": "STANDARD CHARTERED PLC",
    "weight": 0.34,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "ENI",
    "name": "ENI SPA MILAN",
    "weight": 0.34,
    "sector": "Energy",
    "location": "Italy"
  },
  {
    "symbol": "DANON",
    "name": "DANONE",
    "weight": 0.33,
    "sector": "Consumer Staples",
    "location": "France"
  },
  {
    "symbol": "ASMI",
    "name": "ASM INTERNATIONAL NV",
    "weight": 0.33,
    "sector": "Information Technology",
    "location": "Netherlands"
  },
  {
    "symbol": "E.ON",
    "name": "E.ON SE",
    "weight": 0.33,
    "sector": "Utilities",
    "location": "Germany"
  },
  {
    "symbol": "BASF",
    "name": "BASF SE XETRA",
    "weight": 0.33,
    "sector": "Materials",
    "location": "Germany"
  },
  {
    "symbol": "HOLCI",
    "name": "HOLCIM LTD",
    "weight": 0.32,
    "sector": "Materials",
    "location": "Switzerland"
  },
  {
    "symbol": "SWISR",
    "name": "SWISS RE AG",
    "weight": 0.31,
    "sector": "Financials",
    "location": "Switzerland"
  },
  {
    "symbol": "CASH",
    "name": "Cash & Derivatives (EUR)",
    "weight": 0.31,
    "sector": "Cash & Derivatives",
    "location": "Europe"
  },
  {
    "symbol": "DIAGG",
    "name": "DIAGEO PLC GBP",
    "weight": 0.31,
    "sector": "Consumer Staples",
    "location": "United Kingdom"
  },
  {
    "symbol": "AIRL",
    "name": "AIR LIQUIDE PRIME DE FIDELITE 2027",
    "weight": 0.3,
    "sector": "Materials",
    "location": "France"
  },
  {
    "symbol": "LONZ-",
    "name": "LONZA GROUP AG-REG",
    "weight": 0.3,
    "sector": "Health Care",
    "location": "Switzerland"
  },
  {
    "symbol": "FERRA",
    "name": "FERRARI NV MILAN",
    "weight": 0.29,
    "sector": "Consumer Discretionary",
    "location": "Italy"
  },
  {
    "symbol": "STMIC",
    "name": "STMICROELECTRONICS/MILAN",
    "weight": 0.29,
    "sector": "Information Technology",
    "location": "Italy"
  },
  {
    "symbol": "HALEO",
    "name": "HALEON PLC",
    "weight": 0.28,
    "sector": "Health Care",
    "location": "United Kingdom"
  },
  {
    "symbol": "PRYSM",
    "name": "PRYSMIAN SPA",
    "weight": 0.28,
    "sector": "Industrials",
    "location": "Italy"
  },
  {
    "symbol": "DSVA",
    "name": "DSV A/S (DKK)",
    "weight": 0.28,
    "sector": "Industrials",
    "location": "Denmark"
  },
  {
    "symbol": "RWE",
    "name": "RWE AG",
    "weight": 0.28,
    "sector": "Utilities",
    "location": "Germany"
  },
  {
    "symbol": "RECKB",
    "name": "RECKITT BENCKISER GROUP PLC GBP",
    "weight": 0.28,
    "sector": "Consumer Staples",
    "location": "United Kingdom"
  },
  {
    "symbol": "COMPD",
    "name": "COMPAGNIE DE SAINT GOBAIN",
    "weight": 0.28,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "SSE",
    "name": "SSE PLC",
    "weight": 0.27,
    "sector": "Utilities",
    "location": "United Kingdom"
  },
  {
    "symbol": "LEGRA",
    "name": "LEGRAND SA",
    "weight": 0.27,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "GALDE",
    "name": "GALDERMA GROUP AG",
    "weight": 0.27,
    "sector": "Health Care",
    "location": "Switzerland"
  },
  {
    "symbol": "TESCO",
    "name": "TESCO PLC",
    "weight": 0.26,
    "sector": "Consumer Staples",
    "location": "United Kingdom"
  },
  {
    "symbol": "ERSTB",
    "name": "ERSTE GROUP BANK",
    "weight": 0.26,
    "sector": "Financials",
    "location": "Austria"
  },
  {
    "symbol": "AIRL",
    "name": "AIR LIQUIDE SA",
    "weight": 0.26,
    "sector": "Materials",
    "location": "France"
  },
  {
    "symbol": "SANDV",
    "name": "SANDVIK AB",
    "weight": 0.25,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "LO",
    "name": "L OREAL PRIME DE FIDELITE 2027",
    "weight": 0.25,
    "sector": "Consumer Staples",
    "location": "France"
  },
  {
    "symbol": "ORANG",
    "name": "ORANGE",
    "weight": 0.24,
    "sector": "Communication Services",
    "location": "France"
  },
  {
    "symbol": "PRUDE",
    "name": "PRUDENTIAL PLC",
    "weight": 0.24,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "ADIDA",
    "name": "ADIDAS AG",
    "weight": 0.24,
    "sector": "Consumer Discretionary",
    "location": "Germany"
  },
  {
    "symbol": "MERCE",
    "name": "MERCEDES-BENZ GROUP AG",
    "weight": 0.24,
    "sector": "Consumer Discretionary",
    "location": "Germany"
  },
  {
    "symbol": "KONIA",
    "name": "KONINKLIJKE AHOLD DELHAIZE",
    "weight": 0.24,
    "sector": "Consumer Staples",
    "location": "Netherlands"
  },
  {
    "symbol": "DANSB",
    "name": "DANSKE BANK A/S",
    "weight": 0.23,
    "sector": "Financials",
    "location": "Denmark"
  },
  {
    "symbol": "SWEDB",
    "name": "SWEDBANK AB",
    "weight": 0.23,
    "sector": "Financials",
    "location": "Sweden"
  },
  {
    "symbol": "ASSAA",
    "name": "ASSA ABLOY AB -B",
    "weight": 0.23,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "SANDO",
    "name": "SANDOZ GROUP AG",
    "weight": 0.23,
    "sector": "Health Care",
    "location": "Switzerland"
  },
  {
    "symbol": "UCB",
    "name": "UCB SA",
    "weight": 0.22,
    "sector": "Health Care",
    "location": "Belgium"
  },
  {
    "symbol": "SKANE",
    "name": "SKANDINAVISKA ENSKILDA BANKEN A",
    "weight": 0.22,
    "sector": "Financials",
    "location": "Sweden"
  },
  {
    "symbol": "ENGIE",
    "name": "ENGIE",
    "weight": 0.22,
    "sector": "Utilities",
    "location": "France"
  },
  {
    "symbol": "ALCO-",
    "name": "ALCON INC - CHF",
    "weight": 0.22,
    "sector": "Health Care",
    "location": "Switzerland"
  },
  {
    "symbol": "EQUIA",
    "name": "EQUINOR ASA",
    "weight": 0.22,
    "sector": "Energy",
    "location": "Norway"
  },
  {
    "symbol": "SWISL",
    "name": "SWISS LIFE HOLDINGS AG",
    "weight": 0.22,
    "sector": "Financials",
    "location": "Switzerland"
  },
  {
    "symbol": "3I",
    "name": "3I GROUP PLC",
    "weight": 0.22,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "LO",
    "name": "L OREAL",
    "weight": 0.21,
    "sector": "Consumer Staples",
    "location": "France"
  },
  {
    "symbol": "EXPER",
    "name": "EXPERIAN PLC",
    "weight": 0.21,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "REPSO",
    "name": "REPSOL SA",
    "weight": 0.21,
    "sector": "Energy",
    "location": "Spain"
  },
  {
    "symbol": "GIVAU",
    "name": "GIVAUDAN-REG",
    "weight": 0.21,
    "sector": "Materials",
    "location": "Switzerland"
  },
  {
    "symbol": "FERRO",
    "name": "FERROVIAL SE MADRID",
    "weight": 0.2,
    "sector": "Industrials",
    "location": "Spain"
  },
  {
    "symbol": "SIKA-",
    "name": "SIKA AG-REG",
    "weight": 0.2,
    "sector": "Materials",
    "location": "Switzerland"
  },
  {
    "symbol": "KBC",
    "name": "KBC GROUP NV",
    "weight": 0.2,
    "sector": "Financials",
    "location": "Belgium"
  },
  {
    "symbol": "VODAF",
    "name": "VODAFONE GROUP PLC",
    "weight": 0.19,
    "sector": "Communication Services",
    "location": "United Kingdom"
  },
  {
    "symbol": "ADYEN",
    "name": "ADYEN NV",
    "weight": 0.19,
    "sector": "Financials",
    "location": "Netherlands"
  },
  {
    "symbol": "ARCEA",
    "name": "ARCELORMITTAL SA AMSTERDAM",
    "weight": 0.19,
    "sector": "Materials",
    "location": "France"
  },
  {
    "symbol": "IMPEB",
    "name": "IMPERIAL BRANDS PLC",
    "weight": 0.19,
    "sector": "Consumer Staples",
    "location": "United Kingdom"
  },
  {
    "symbol": "BANCM",
    "name": "BANCA MONTE DEI PASCHI SIENA REGR",
    "weight": 0.19,
    "sector": "Financials",
    "location": "Italy"
  },
  {
    "symbol": "AIRL",
    "name": "AIR LIQUIDE PRIME DE FIDELITE 2028",
    "weight": 0.19,
    "sector": "Materials",
    "location": "France"
  },
  {
    "symbol": "VEOLE",
    "name": "VEOLIA ENVIRONNEMENT",
    "weight": 0.18,
    "sector": "Utilities",
    "location": "France"
  },
  {
    "symbol": "ABNA",
    "name": "ABN AMRO BANK NV-CVA",
    "weight": 0.18,
    "sector": "Financials",
    "location": "Netherlands"
  },
  {
    "symbol": "ERICL",
    "name": "ERICSSON LM-B SHS",
    "weight": 0.18,
    "sector": "Information Technology",
    "location": "Sweden"
  },
  {
    "symbol": "AVIVA",
    "name": "AVIVA PLC",
    "weight": 0.18,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "ENGIP",
    "name": "ENGIE PRIME DE FIDELITE 2027",
    "weight": 0.18,
    "sector": "Utilities",
    "location": "France"
  },
  {
    "symbol": "ACSA",
    "name": "ACS ACTIVIDADES CONS Y SERV",
    "weight": 0.18,
    "sector": "Industrials",
    "location": "Spain"
  },
  {
    "symbol": "SAMP-",
    "name": "SAMPO OYJ-A SHS",
    "weight": 0.18,
    "sector": "Financials",
    "location": "Finland"
  },
  {
    "symbol": "MICH(",
    "name": "MICHELIN (CGDE)",
    "weight": 0.18,
    "sector": "Consumer Discretionary",
    "location": "France"
  },
  {
    "symbol": "EQT",
    "name": "EQT AB",
    "weight": 0.18,
    "sector": "Financials",
    "location": "Sweden"
  },
  {
    "symbol": "VESTW",
    "name": "VESTAS WIND SYSTEMS A/S",
    "weight": 0.17,
    "sector": "Industrials",
    "location": "Denmark"
  },
  {
    "symbol": "AIB",
    "name": "AIB GROUP PLC",
    "weight": 0.17,
    "sector": "Financials",
    "location": "Ireland"
  },
  {
    "symbol": "DAIMT",
    "name": "DAIMLER TRUCK HOLDING AG",
    "weight": 0.17,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "DNBB",
    "name": "DNB BANK ASA",
    "weight": 0.17,
    "sector": "Financials",
    "location": "Norway"
  },
  {
    "symbol": "THALE",
    "name": "THALES SA",
    "weight": 0.16,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "PKOB",
    "name": "PKO BANK POLSKI",
    "weight": 0.16,
    "sector": "Financials",
    "location": "Poland"
  },
  {
    "symbol": "HEIDE",
    "name": "HEIDELBERGCEMENT AG",
    "weight": 0.16,
    "sector": "Materials",
    "location": "Germany"
  },
  {
    "symbol": "HEINE",
    "name": "HEINEKEN NV",
    "weight": 0.16,
    "sector": "Consumer Staples",
    "location": "Netherlands"
  },
  {
    "symbol": "NN",
    "name": "NN GROUP NV",
    "weight": 0.16,
    "sector": "Financials",
    "location": "Netherlands"
  },
  {
    "symbol": "BPERB",
    "name": "BPER BANCA SPA",
    "weight": 0.16,
    "sector": "Financials",
    "location": "Italy"
  },
  {
    "symbol": "LEONA",
    "name": "LEONARDO SPA",
    "weight": 0.15,
    "sector": "Industrials",
    "location": "Italy"
  },
  {
    "symbol": "PUBLG",
    "name": "PUBLICIS GROUPE SA",
    "weight": 0.15,
    "sector": "Communication Services",
    "location": "France"
  },
  {
    "symbol": "AMADI",
    "name": "AMADEUS IT GROUP SA",
    "weight": 0.15,
    "sector": "Consumer Discretionary",
    "location": "Spain"
  },
  {
    "symbol": "RYANI",
    "name": "RYANAIR HOLDINGS PLC IRL",
    "weight": 0.15,
    "sector": "Industrials",
    "location": "Ireland"
  },
  {
    "symbol": "ORLEN",
    "name": "ORLEN SA",
    "weight": 0.15,
    "sector": "Energy",
    "location": "Poland"
  },
  {
    "symbol": "UNIVM",
    "name": "UNIVERSAL MUSIC GROUP NV",
    "weight": 0.15,
    "sector": "Communication Services",
    "location": "Netherlands"
  },
  {
    "symbol": "SVENH",
    "name": "SVENSKA HANDELSBKN SER A",
    "weight": 0.15,
    "sector": "Financials",
    "location": "Sweden"
  },
  {
    "symbol": "CREDA",
    "name": "CREDIT AGRICOLE SA",
    "weight": 0.15,
    "sector": "Financials",
    "location": "France"
  },
  {
    "symbol": "INTEH",
    "name": "INTERCONTINENTAL HOTELS GROU",
    "weight": 0.15,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "NOVO(",
    "name": "NOVONESIS (NOVOZYMES) B",
    "weight": 0.15,
    "sector": "Materials",
    "location": "Denmark"
  },
  {
    "symbol": "NEXT",
    "name": "NEXT PLC",
    "weight": 0.15,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "LO",
    "name": "L OREAL PRIME DE FIDELITE 2028",
    "weight": 0.15,
    "sector": "Consumer Staples",
    "location": "France"
  },
  {
    "symbol": "AENAS",
    "name": "AENA SME SA",
    "weight": 0.14,
    "sector": "Industrials",
    "location": "Spain"
  },
  {
    "symbol": "BAYEM",
    "name": "BAYERISCHE MOTOREN WERKE AG",
    "weight": 0.14,
    "sector": "Consumer Discretionary",
    "location": "Germany"
  },
  {
    "symbol": "GEBE-",
    "name": "GEBERIT AG-REG",
    "weight": 0.14,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "VAT",
    "name": "VAT GROUP AG",
    "weight": 0.14,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "KONE-",
    "name": "KONE OYJ-B",
    "weight": 0.14,
    "sector": "Industrials",
    "location": "Finland"
  },
  {
    "symbol": "LEGA&",
    "name": "LEGAL & GENERAL GROUP PLC",
    "weight": 0.14,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "MTUA",
    "name": "MTU AERO ENGINES AG",
    "weight": 0.14,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "BES",
    "name": "BE SEMICONDUCTOR INDUSTRIES",
    "weight": 0.14,
    "sector": "Information Technology",
    "location": "Netherlands"
  },
  {
    "symbol": "KONIP",
    "name": "KONINKLIJKE PHILIPS NV",
    "weight": 0.14,
    "sector": "Health Care",
    "location": "Netherlands"
  },
  {
    "symbol": "HELVB",
    "name": "HELVETIA BALOISE HOLDING AG",
    "weight": 0.13,
    "sector": "Financials",
    "location": "Switzerland"
  },
  {
    "symbol": "FRES&",
    "name": "FRESENIUS SE & CO KGAA",
    "weight": 0.13,
    "sector": "Health Care",
    "location": "Germany"
  },
  {
    "symbol": "KERIN",
    "name": "KERING PARIS",
    "weight": 0.13,
    "sector": "Consumer Discretionary",
    "location": "France"
  },
  {
    "symbol": "MERCK",
    "name": "MERCK KGAA",
    "weight": 0.13,
    "sector": "Health Care",
    "location": "Germany"
  },
  {
    "symbol": "SAAB-",
    "name": "SAAB AB-B",
    "weight": 0.13,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "SGS-",
    "name": "SGS SA-REG",
    "weight": 0.13,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "BANCB",
    "name": "BANCO BPM SPA",
    "weight": 0.13,
    "sector": "Financials",
    "location": "Italy"
  },
  {
    "symbol": "BANKO",
    "name": "BANK OF IRELAND GROUP PLC DUBLIN",
    "weight": 0.13,
    "sector": "Financials",
    "location": "Ireland"
  },
  {
    "symbol": "ANTOF",
    "name": "ANTOFAGASTA PLC",
    "weight": 0.13,
    "sector": "Materials",
    "location": "United Kingdom"
  },
  {
    "symbol": "COMME",
    "name": "COMMERZBANK AG",
    "weight": 0.13,
    "sector": "Financials",
    "location": "Germany"
  },
  {
    "symbol": "SWIS-",
    "name": "SWISSCOM AG-REG",
    "weight": 0.13,
    "sector": "Communication Services",
    "location": "Switzerland"
  },
  {
    "symbol": "BANCD",
    "name": "BANCO DE SABADELL SA",
    "weight": 0.12,
    "sector": "Financials",
    "location": "Spain"
  },
  {
    "symbol": "PARTN",
    "name": "PARTNERS GROUP AG",
    "weight": 0.12,
    "sector": "Financials",
    "location": "Switzerland"
  },
  {
    "symbol": "HALMA",
    "name": "HALMA PLC",
    "weight": 0.12,
    "sector": "Information Technology",
    "location": "United Kingdom"
  },
  {
    "symbol": "KONIK",
    "name": "KONINKLIJKE KPN NV",
    "weight": 0.12,
    "sector": "Communication Services",
    "location": "Netherlands"
  },
  {
    "symbol": "GENMA",
    "name": "GENMAB A/S",
    "weight": 0.12,
    "sector": "Health Care",
    "location": "Denmark"
  },
  {
    "symbol": "JULIB",
    "name": "JULIUS BAER GROUP LTD",
    "weight": 0.12,
    "sector": "Financials",
    "location": "Switzerland"
  },
  {
    "symbol": "HEXA-",
    "name": "HEXAGON AB-B SHS",
    "weight": 0.11,
    "sector": "Information Technology",
    "location": "Sweden"
  },
  {
    "symbol": "VONOV",
    "name": "VONOVIA SE",
    "weight": 0.11,
    "sector": "Real Estate",
    "location": "Germany"
  },
  {
    "symbol": "CAPGE",
    "name": "CAPGEMINI SE",
    "weight": 0.11,
    "sector": "Information Technology",
    "location": "France"
  },
  {
    "symbol": "VOLK-",
    "name": "VOLKSWAGEN AG-PFD",
    "weight": 0.11,
    "sector": "Consumer Discretionary",
    "location": "Germany"
  },
  {
    "symbol": "ALFAL",
    "name": "ALFA LAVAL AB",
    "weight": 0.11,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "WARTS",
    "name": "WARTSILA OYJ",
    "weight": 0.11,
    "sector": "Industrials",
    "location": "Finland"
  },
  {
    "symbol": "HANNR",
    "name": "HANNOVER RUECK SE",
    "weight": 0.11,
    "sector": "Financials",
    "location": "Germany"
  },
  {
    "symbol": "FINEC",
    "name": "FINECOBANK SPA",
    "weight": 0.11,
    "sector": "Financials",
    "location": "Italy"
  },
  {
    "symbol": "ESSIA",
    "name": "ESSITY AKTIEBOLAG - B",
    "weight": 0.11,
    "sector": "Consumer Staples",
    "location": "Sweden"
  },
  {
    "symbol": "TERNE",
    "name": "TERNA-RETE ELETTRICA NAZIONA",
    "weight": 0.11,
    "sector": "Utilities",
    "location": "Italy"
  },
  {
    "symbol": "DSM-A",
    "name": "DSM-FIRMENICH AG AMSTERDAM",
    "weight": 0.11,
    "sector": "Materials",
    "location": "Netherlands"
  },
  {
    "symbol": "BT",
    "name": "BT GROUP PLC",
    "weight": 0.11,
    "sector": "Communication Services",
    "location": "United Kingdom"
  },
  {
    "symbol": "NESTE",
    "name": "NESTE OYJ",
    "weight": 0.11,
    "sector": "Energy",
    "location": "Finland"
  },
  {
    "symbol": "WOLTK",
    "name": "WOLTERS KLUWER",
    "weight": 0.1,
    "sector": "Industrials",
    "location": "Netherlands"
  },
  {
    "symbol": "EDP",
    "name": "EDP SA",
    "weight": 0.1,
    "sector": "Utilities",
    "location": "Portugal"
  },
  {
    "symbol": "EPIR-",
    "name": "EPIROC AB-A",
    "weight": 0.1,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "BAWAG",
    "name": "BAWAG GROUP AG",
    "weight": 0.1,
    "sector": "Financials",
    "location": "Austria"
  },
  {
    "symbol": "BOUYG",
    "name": "BOUYGUES SA",
    "weight": 0.1,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "TELEF",
    "name": "TELEFONICA SA",
    "weight": 0.1,
    "sector": "Communication Services",
    "location": "Spain"
  },
  {
    "symbol": "LOGII",
    "name": "LOGITECH INTERNATIONAL-REG",
    "weight": 0.1,
    "sector": "Information Technology",
    "location": "Switzerland"
  },
  {
    "symbol": "RENTI",
    "name": "RENTOKIL INITIAL 05",
    "weight": 0.1,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "KERR-",
    "name": "KERRY GROUP PLC-A",
    "weight": 0.1,
    "sector": "Consumer Staples",
    "location": "Ireland"
  },
  {
    "symbol": "SEGRO",
    "name": "SEGRO PLC",
    "weight": 0.1,
    "sector": "Real Estate",
    "location": "United Kingdom"
  },
  {
    "symbol": "TELEI",
    "name": "TELECOM ITALIA SPA",
    "weight": 0.1,
    "sector": "Communication Services",
    "location": "Italy"
  },
  {
    "symbol": "INFOR",
    "name": "INFORMA PLC",
    "weight": 0.1,
    "sector": "Communication Services",
    "location": "United Kingdom"
  },
  {
    "symbol": "DASSS",
    "name": "DASSAULT SYSTEMES SE",
    "weight": 0.1,
    "sector": "Information Technology",
    "location": "France"
  },
  {
    "symbol": "SIEMH",
    "name": "SIEMENS HEALTHINEERS AG",
    "weight": 0.1,
    "sector": "Health Care",
    "location": "Germany"
  },
  {
    "symbol": "POSTI",
    "name": "POSTE ITALIANE SPA",
    "weight": 0.1,
    "sector": "Financials",
    "location": "Italy"
  },
  {
    "symbol": "UPM-K",
    "name": "UPM-KYMMENE OYJ",
    "weight": 0.1,
    "sector": "Materials",
    "location": "Finland"
  },
  {
    "symbol": "ENDES",
    "name": "ENDESA SA",
    "weight": 0.1,
    "sector": "Utilities",
    "location": "Spain"
  },
  {
    "symbol": "SNAM",
    "name": "SNAM SPA",
    "weight": 0.09,
    "sector": "Utilities",
    "location": "Italy"
  },
  {
    "symbol": "BOLID",
    "name": "BOLIDEN AB",
    "weight": 0.09,
    "sector": "Materials",
    "location": "Sweden"
  },
  {
    "symbol": "PERNR",
    "name": "PERNOD RICARD",
    "weight": 0.09,
    "sector": "Consumer Staples",
    "location": "France"
  },
  {
    "symbol": "STRA-",
    "name": "STRAUMANN HOLDING AG-REG",
    "weight": 0.09,
    "sector": "Health Care",
    "location": "Switzerland"
  },
  {
    "symbol": "CELLT",
    "name": "CELLNEX TELECOM SA",
    "weight": 0.09,
    "sector": "Communication Services",
    "location": "Spain"
  },
  {
    "symbol": "COCAH",
    "name": "COCA-COLA HBC AG-DI - LDN",
    "weight": 0.09,
    "sector": "Consumer Staples",
    "location": "United Kingdom"
  },
  {
    "symbol": "AIRL",
    "name": "AIR LIQUIDE PRIME FIDELITE",
    "weight": 0.09,
    "sector": "Materials",
    "location": "France"
  },
  {
    "symbol": "KUEH+",
    "name": "KUEHNE + NAGEL INTL AG-REG",
    "weight": 0.09,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "UNITU",
    "name": "UNITED UTILITIES GROUP PLC NEW",
    "weight": 0.09,
    "sector": "Utilities",
    "location": "United Kingdom"
  },
  {
    "symbol": "INTLC",
    "name": "INTL CONSOLD AIRLINES GRP SA GBP",
    "weight": 0.09,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "EIFFA",
    "name": "EIFFAGE",
    "weight": 0.09,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "EURON",
    "name": "EURONEXT NV PARIS",
    "weight": 0.09,
    "sector": "Financials",
    "location": "France"
  },
  {
    "symbol": "DIPLO",
    "name": "DIPLOMA PLC",
    "weight": 0.09,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "KINGS",
    "name": "KINGSPAN GROUP",
    "weight": 0.09,
    "sector": "Industrials",
    "location": "Ireland"
  },
  {
    "symbol": "SYMRI",
    "name": "SYMRISE AG XETRA",
    "weight": 0.09,
    "sector": "Materials",
    "location": "Germany"
  },
  {
    "symbol": "CARLA",
    "name": "CARLSBERG AS-B",
    "weight": 0.09,
    "sector": "Consumer Staples",
    "location": "Denmark"
  },
  {
    "symbol": "SWISP",
    "name": "SWISS PRIME SITE",
    "weight": 0.09,
    "sector": "Real Estate",
    "location": "Switzerland"
  },
  {
    "symbol": "MONCL",
    "name": "MONCLER SPA",
    "weight": 0.08,
    "sector": "Consumer Discretionary",
    "location": "Italy"
  },
  {
    "symbol": "SMIT&",
    "name": "SMITH & NEPHEW PLC",
    "weight": 0.08,
    "sector": "Health Care",
    "location": "United Kingdom"
  },
  {
    "symbol": "KONGG",
    "name": "KONGSBERG GRUPPEN ASA",
    "weight": 0.08,
    "sector": "Industrials",
    "location": "Norway"
  },
  {
    "symbol": "ADMIR",
    "name": "ADMIRAL GROUP PLC",
    "weight": 0.08,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "SONOC",
    "name": "SONOVA HOLDING CHF",
    "weight": 0.08,
    "sector": "Health Care",
    "location": "Switzerland"
  },
  {
    "symbol": "HENK&",
    "name": "HENKEL AG & CO KGAA VOR-PFD",
    "weight": 0.08,
    "sector": "Consumer Staples",
    "location": "Germany"
  },
  {
    "symbol": "UNIB/",
    "name": "UNIBAIL-RODAMCO-WESTFIELD /PARIS",
    "weight": 0.08,
    "sector": "Real Estate",
    "location": "France"
  },
  {
    "symbol": "AGEAS",
    "name": "AGEAS",
    "weight": 0.08,
    "sector": "Financials",
    "location": "Belgium"
  },
  {
    "symbol": "UNIPA",
    "name": "UNIPOL ASSICURAZIONI SPA",
    "weight": 0.08,
    "sector": "Financials",
    "location": "Italy"
  },
  {
    "symbol": "SCHI-",
    "name": "SCHINDLER HOLDING-PART CERT",
    "weight": 0.08,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "NATUE",
    "name": "NATURGY ENERGY GROUP SA",
    "weight": 0.08,
    "sector": "Utilities",
    "location": "Spain"
  },
  {
    "symbol": "ASRN",
    "name": "ASR NEDERLAND NV",
    "weight": 0.08,
    "sector": "Financials",
    "location": "Netherlands"
  },
  {
    "symbol": "STELL",
    "name": "STELLANTIS MILAN",
    "weight": 0.08,
    "sector": "Consumer Discretionary",
    "location": "Italy"
  },
  {
    "symbol": "INTER",
    "name": "INTERTEK GROUP PLC",
    "weight": 0.08,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "CARRE",
    "name": "CARREFOUR SA",
    "weight": 0.08,
    "sector": "Consumer Staples",
    "location": "France"
  },
  {
    "symbol": "BUNZL",
    "name": "BUNZL PLC",
    "weight": 0.08,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "NORSH",
    "name": "NORSK HYDRO ASA NOK20",
    "weight": 0.08,
    "sector": "Materials",
    "location": "Norway"
  },
  {
    "symbol": "LO",
    "name": "L OREAL PRIME FIDELITE",
    "weight": 0.08,
    "sector": "Consumer Staples",
    "location": "France"
  },
  {
    "symbol": "METSO",
    "name": "METSO CORP",
    "weight": 0.08,
    "sector": "Industrials",
    "location": "Finland"
  },
  {
    "symbol": "BANKI",
    "name": "BANKINTER SA",
    "weight": 0.07,
    "sector": "Financials",
    "location": "Spain"
  },
  {
    "symbol": "CHOCL",
    "name": "CHOCOLADEFABRIKEN LINDT-PC CHF",
    "weight": 0.07,
    "sector": "Consumer Staples",
    "location": "Switzerland"
  },
  {
    "symbol": "SWEDO",
    "name": "SWEDISH ORPHAN BIOVITRUM AB",
    "weight": 0.07,
    "sector": "Health Care",
    "location": "Sweden"
  },
  {
    "symbol": "AKZON",
    "name": "AKZO NOBEL N.V.",
    "weight": 0.07,
    "sector": "Materials",
    "location": "Netherlands"
  },
  {
    "symbol": "KGHMP",
    "name": "KGHM POLSKA MIEDZ S.A.",
    "weight": 0.07,
    "sector": "Materials",
    "location": "Poland"
  },
  {
    "symbol": "AEGOA",
    "name": "AEGON LTD AMSTERDAM",
    "weight": 0.07,
    "sector": "Financials",
    "location": "Netherlands"
  },
  {
    "symbol": "AKERB",
    "name": "AKER BP ASA",
    "weight": 0.07,
    "sector": "Energy",
    "location": "Norway"
  },
  {
    "symbol": "ALLEG",
    "name": "ALLEGRO.EU SA",
    "weight": 0.07,
    "sector": "Consumer Discretionary",
    "location": "Poland"
  },
  {
    "symbol": "CENTR",
    "name": "CENTRICA PLC",
    "weight": 0.07,
    "sector": "Utilities",
    "location": "United Kingdom"
  },
  {
    "symbol": "BUREV",
    "name": "BUREAU VERITAS",
    "weight": 0.07,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "MARK&",
    "name": "MARKS & SPENCER GROUP PLC",
    "weight": 0.07,
    "sector": "Consumer Staples",
    "location": "United Kingdom"
  },
  {
    "symbol": "BANCC",
    "name": "BANCO COMERCIAL PORTUGUES",
    "weight": 0.07,
    "sector": "Financials",
    "location": "Portugal"
  },
  {
    "symbol": "BANKP",
    "name": "BANK PEKAO SA",
    "weight": 0.07,
    "sector": "Financials",
    "location": "Poland"
  },
  {
    "symbol": "ORSTA",
    "name": "ORSTED A/S",
    "weight": 0.07,
    "sector": "Utilities",
    "location": "Denmark"
  },
  {
    "symbol": "SEVET",
    "name": "SEVERN TRENT PLC",
    "weight": 0.07,
    "sector": "Utilities",
    "location": "United Kingdom"
  },
  {
    "symbol": "SMITH",
    "name": "SMITHS GROUP PLC",
    "weight": 0.07,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "ACCOR",
    "name": "ACCOR SA",
    "weight": 0.07,
    "sector": "Consumer Discretionary",
    "location": "France"
  },
  {
    "symbol": "POWSZ",
    "name": "POWSZECHNY ZAKLAD UBEZPIECZEN",
    "weight": 0.07,
    "sector": "Financials",
    "location": "Poland"
  },
  {
    "symbol": "TELIC",
    "name": "TELIA CO AB / SEK",
    "weight": 0.07,
    "sector": "Communication Services",
    "location": "Sweden"
  },
  {
    "symbol": "GEAE",
    "name": "GEA GROUP AG EX MG TECHNOLOGIE",
    "weight": 0.07,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "OMV",
    "name": "OMV AG",
    "weight": 0.07,
    "sector": "Energy",
    "location": "Austria"
  },
  {
    "symbol": "WISE-",
    "name": "WISE GROUP PLC-CL A GBP",
    "weight": 0.07,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "FORTU",
    "name": "FORTUM OYJ",
    "weight": 0.07,
    "sector": "Utilities",
    "location": "Finland"
  },
  {
    "symbol": "BEAZ/",
    "name": "BEAZLEY PLC/UK",
    "weight": 0.07,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "BELI-",
    "name": "BELIMO HOLDING AG-REG",
    "weight": 0.07,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "SAGE",
    "name": "SAGE GROUP PLC",
    "weight": 0.06,
    "sector": "Information Technology",
    "location": "United Kingdom"
  },
  {
    "symbol": "REXEL",
    "name": "REXEL SA",
    "weight": 0.06,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "SKAN-",
    "name": "SKANSKA AB-B SHS",
    "weight": 0.06,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "COLOP",
    "name": "COLOPLAST-B",
    "weight": 0.06,
    "sector": "Health Care",
    "location": "Denmark"
  },
  {
    "symbol": "ORIO-",
    "name": "ORION OYJ-CLASS B",
    "weight": 0.06,
    "sector": "Health Care",
    "location": "Finland"
  },
  {
    "symbol": "KLEPI",
    "name": "KLEPIERRE",
    "weight": 0.06,
    "sector": "Real Estate",
    "location": "France"
  },
  {
    "symbol": "PEARG",
    "name": "PEARSON PLC GBP",
    "weight": 0.06,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "M&G",
    "name": "M&G PLC",
    "weight": 0.06,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "IMI",
    "name": "IMI PLC",
    "weight": 0.06,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "TENAR",
    "name": "TENARIS SA",
    "weight": 0.06,
    "sector": "Energy",
    "location": "Italy"
  },
  {
    "symbol": "FRESM",
    "name": "FRESENIUS MED CARE AG CO",
    "weight": 0.06,
    "sector": "Health Care",
    "location": "Germany"
  },
  {
    "symbol": "MOWIA",
    "name": "MOWI ASA",
    "weight": 0.06,
    "sector": "Consumer Staples",
    "location": "Norway"
  },
  {
    "symbol": "HEINE",
    "name": "HEINEKEN HOLDING NV",
    "weight": 0.06,
    "sector": "Consumer Staples",
    "location": "Netherlands"
  },
  {
    "symbol": "GALPE",
    "name": "GALP ENERGIA -B",
    "weight": 0.06,
    "sector": "Energy",
    "location": "Portugal"
  },
  {
    "symbol": "SPIE",
    "name": "SPIE SA",
    "weight": 0.06,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "EVOLU",
    "name": "EVOLUTION AB",
    "weight": 0.06,
    "sector": "Consumer Discretionary",
    "location": "Sweden"
  },
  {
    "symbol": "STORA",
    "name": "STOREBRAND ASA",
    "weight": 0.06,
    "sector": "Financials",
    "location": "Norway"
  },
  {
    "symbol": "ADDT-",
    "name": "ADDTECH AB-B SHARES",
    "weight": 0.06,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "INDU-",
    "name": "INDUSTRIVARDEN AB-C SHS",
    "weight": 0.06,
    "sector": "Financials",
    "location": "Sweden"
  },
  {
    "symbol": "STANL",
    "name": "STANDARD LIFE PLC",
    "weight": 0.06,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "HOCHD",
    "name": "HOCHTIEF AG DM50",
    "weight": 0.06,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "ABIVA",
    "name": "ABIVAX SA",
    "weight": 0.06,
    "sector": "Health Care",
    "location": "France"
  },
  {
    "symbol": "SECU-",
    "name": "SECURITAS AB -B-SEK5",
    "weight": 0.06,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "PANDA",
    "name": "PANDORA A/S (DKK)",
    "weight": 0.06,
    "sector": "Consumer Discretionary",
    "location": "Denmark"
  },
  {
    "symbol": "ACCEI",
    "name": "ACCELLERON INDUSTRIES AG",
    "weight": 0.06,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "TELE-",
    "name": "TELE2 AB-B SHS NEW",
    "weight": 0.06,
    "sector": "Communication Services",
    "location": "Sweden"
  },
  {
    "symbol": "SKF-",
    "name": "SKF AB-B SHARES",
    "weight": 0.06,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "TELEA",
    "name": "TELENOR ASA",
    "weight": 0.06,
    "sector": "Communication Services",
    "location": "Norway"
  },
  {
    "symbol": "EUROS",
    "name": "EUROFINS SCIENTIFIC",
    "weight": 0.06,
    "sector": "Health Care",
    "location": "France"
  },
  {
    "symbol": "MAGNI",
    "name": "MAGNUM ICE CREAM CO NV/THE",
    "weight": 0.06,
    "sector": "Consumer Staples",
    "location": "Netherlands"
  },
  {
    "symbol": "CONTI",
    "name": "CONTINENTAL AG",
    "weight": 0.06,
    "sector": "Consumer Discretionary",
    "location": "Germany"
  },
  {
    "symbol": "GAMEW",
    "name": "GAMES WORKSHOP",
    "weight": 0.06,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "APM",
    "name": "AP MOLLER-MAERSK A/S-B",
    "weight": 0.06,
    "sector": "Industrials",
    "location": "Denmark"
  },
  {
    "symbol": "WEIR/",
    "name": "WEIR GROUP PLC/THE",
    "weight": 0.06,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "TRELL",
    "name": "TRELLEBORG AB",
    "weight": 0.06,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "DELIH",
    "name": "DELIVERY HERO",
    "weight": 0.06,
    "sector": "Consumer Discretionary",
    "location": "Germany"
  },
  {
    "symbol": "PSPS",
    "name": "PSP SWISS PROPERTY",
    "weight": 0.05,
    "sector": "Real Estate",
    "location": "Switzerland"
  },
  {
    "symbol": "RAIFB",
    "name": "RAIFFEISEN BANK INTL",
    "weight": 0.05,
    "sector": "Financials",
    "location": "Austria"
  },
  {
    "symbol": "QIAGN",
    "name": "QIAGEN N.V.XETRA",
    "weight": 0.05,
    "sector": "Health Care",
    "location": "Germany"
  },
  {
    "symbol": "ORKLA",
    "name": "ORKLA ASA",
    "weight": 0.05,
    "sector": "Consumer Staples",
    "location": "Norway"
  },
  {
    "symbol": "HISCO",
    "name": "HISCOX LTD",
    "weight": 0.05,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "SAIN(",
    "name": "SAINSBURY (J) PLC",
    "weight": 0.05,
    "sector": "Consumer Staples",
    "location": "United Kingdom"
  },
  {
    "symbol": "BEIER",
    "name": "BEIERSDORF AG",
    "weight": 0.05,
    "sector": "Consumer Staples",
    "location": "Germany"
  },
  {
    "symbol": "GAZTE",
    "name": "GAZTRANSPORT ET TECHNIGAZ SA",
    "weight": 0.05,
    "sector": "Energy",
    "location": "France"
  },
  {
    "symbol": "ELIA/",
    "name": "ELIA GROUP SA/NV",
    "weight": 0.05,
    "sector": "Utilities",
    "location": "Belgium"
  },
  {
    "symbol": "KNORR",
    "name": "KNORR-BREMSE AG",
    "weight": 0.05,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "SUBS7",
    "name": "SUBSEA 7 SA",
    "weight": 0.05,
    "sector": "Energy",
    "location": "Norway"
  },
  {
    "symbol": "MELRI",
    "name": "MELROSE INDUSTRIES PLC",
    "weight": 0.05,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "TALAN",
    "name": "TALANX AG",
    "weight": 0.05,
    "sector": "Financials",
    "location": "Germany"
  },
  {
    "symbol": "BRENN",
    "name": "BRENNTAG SE",
    "weight": 0.05,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "ZALAN",
    "name": "ZALANDO SE",
    "weight": 0.05,
    "sector": "Consumer Discretionary",
    "location": "Germany"
  },
  {
    "symbol": "HENN&",
    "name": "HENNES & MAURITZ AB-B SHS",
    "weight": 0.05,
    "sector": "Consumer Discretionary",
    "location": "Sweden"
  },
  {
    "symbol": "YARAI",
    "name": "YARA INTERNATIONAL ASA",
    "weight": 0.05,
    "sector": "Materials",
    "location": "Norway"
  },
  {
    "symbol": "TRYGA",
    "name": "TRYG A/S",
    "weight": 0.05,
    "sector": "Financials",
    "location": "Denmark"
  },
  {
    "symbol": "IG",
    "name": "IG GROUP HOLDINGS PLC",
    "weight": 0.05,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "ASSOB",
    "name": "ASSOCIATED BRITISH FOODS PLC",
    "weight": 0.05,
    "sector": "Consumer Staples",
    "location": "United Kingdom"
  },
  {
    "symbol": "BABCI",
    "name": "BABCOCK INTL GRP",
    "weight": 0.05,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "SCHRO",
    "name": "SCHRODERS PLC",
    "weight": 0.05,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "AEDIF",
    "name": "AEDIFICA",
    "weight": 0.05,
    "sector": "Real Estate",
    "location": "Belgium"
  },
  {
    "symbol": "LIFC-",
    "name": "LIFCO AB-B SHS",
    "weight": 0.05,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "NKTA",
    "name": "NKT A/S",
    "weight": 0.05,
    "sector": "Industrials",
    "location": "Denmark"
  },
  {
    "symbol": "EXORA",
    "name": "EXOR NV AMSTERDAM",
    "weight": 0.05,
    "sector": "Financials",
    "location": "Netherlands"
  },
  {
    "symbol": "ERSTB",
    "name": "ERSTE BANK POLSKA SA",
    "weight": 0.05,
    "sector": "Financials",
    "location": "Poland"
  },
  {
    "symbol": "DCCE",
    "name": "DCC ENERGY PLC",
    "weight": 0.05,
    "sector": "Energy",
    "location": "United Kingdom"
  },
  {
    "symbol": "STJ",
    "name": "ST JAMES S PLACE CAPITAL",
    "weight": 0.05,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "ITALG",
    "name": "ITALGAS SPA",
    "weight": 0.05,
    "sector": "Utilities",
    "location": "Italy"
  },
  {
    "symbol": "ICGG",
    "name": "ICG PLC GBP",
    "weight": 0.05,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "REDEI",
    "name": "REDEIA CORP SA",
    "weight": 0.05,
    "sector": "Utilities",
    "location": "Spain"
  },
  {
    "symbol": "STORE",
    "name": "STORA ENSO OYJ-R SHS",
    "weight": 0.05,
    "sector": "Materials",
    "location": "Finland"
  },
  {
    "symbol": "MERLP",
    "name": "MERLIN PROPERTIES SOCIMI",
    "weight": 0.05,
    "sector": "Real Estate",
    "location": "Spain"
  },
  {
    "symbol": "LANDS",
    "name": "LAND SECURITIES GROUP PLC",
    "weight": 0.05,
    "sector": "Real Estate",
    "location": "United Kingdom"
  },
  {
    "symbol": "SPIRA",
    "name": "SPIRAX GROUP PLC",
    "weight": 0.05,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "KONEC",
    "name": "KONECRANES OYJ",
    "weight": 0.05,
    "sector": "Industrials",
    "location": "Finland"
  },
  {
    "symbol": "THYSK",
    "name": "THYSSEN KRUPP AG",
    "weight": 0.05,
    "sector": "Materials",
    "location": "Germany"
  },
  {
    "symbol": "ACCIO",
    "name": "ACCIONA SA",
    "weight": 0.05,
    "sector": "Utilities",
    "location": "Spain"
  },
  {
    "symbol": "EDENR",
    "name": "EDENRED",
    "weight": 0.04,
    "sector": "Financials",
    "location": "France"
  },
  {
    "symbol": "INDUT",
    "name": "INDUTRADE AB",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "LPP",
    "name": "LPP SA",
    "weight": 0.04,
    "sector": "Consumer Discretionary",
    "location": "Poland"
  },
  {
    "symbol": "ACKE&",
    "name": "ACKERMANS & VAN HAAREN",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "Belgium"
  },
  {
    "symbol": "KINGF",
    "name": "KINGFISHER PLC",
    "weight": 0.04,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "IPSEN",
    "name": "IPSEN",
    "weight": 0.04,
    "sector": "Health Care",
    "location": "France"
  },
  {
    "symbol": "GROUL",
    "name": "GROUPE BRUXELLES LAMBERT SA",
    "weight": 0.04,
    "sector": "Financials",
    "location": "Belgium"
  },
  {
    "symbol": "EMS--",
    "name": "EMS-CHEMIE HOLDING AG-REG",
    "weight": 0.04,
    "sector": "Materials",
    "location": "Switzerland"
  },
  {
    "symbol": "KESK-",
    "name": "KESKO OYJ-B SHS",
    "weight": 0.04,
    "sector": "Consumer Staples",
    "location": "Finland"
  },
  {
    "symbol": "SAIPE",
    "name": "SAIPEM SPA",
    "weight": 0.04,
    "sector": "Energy",
    "location": "Italy"
  },
  {
    "symbol": "RINGL",
    "name": "RINGKJOEBING LANDBOBANK",
    "weight": 0.04,
    "sector": "Financials",
    "location": "Denmark"
  },
  {
    "symbol": "ALS",
    "name": "AL SYDBANK",
    "weight": 0.04,
    "sector": "Financials",
    "location": "Denmark"
  },
  {
    "symbol": "LOTTO",
    "name": "LOTTOMATICA GROUP SPA",
    "weight": 0.04,
    "sector": "Consumer Discretionary",
    "location": "Italy"
  },
  {
    "symbol": "FRESN",
    "name": "FRESNILLO PLC",
    "weight": 0.04,
    "sector": "Materials",
    "location": "United Kingdom"
  },
  {
    "symbol": "AMUND",
    "name": "AMUNDI SA",
    "weight": 0.04,
    "sector": "Financials",
    "location": "France"
  },
  {
    "symbol": "RECOI",
    "name": "RECORDATI INDUSTRIA CHIMICA",
    "weight": 0.04,
    "sector": "Health Care",
    "location": "Italy"
  },
  {
    "symbol": "SWAT/",
    "name": "SWATCH GROUP AG/THE-BR",
    "weight": 0.04,
    "sector": "Consumer Discretionary",
    "location": "Switzerland"
  },
  {
    "symbol": "ALSTO",
    "name": "ALSTOM",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "SARTO",
    "name": "SARTORIUS PFD",
    "weight": 0.04,
    "sector": "Health Care",
    "location": "Germany"
  },
  {
    "symbol": "NORDP",
    "name": "NORDNET AB PUBL",
    "weight": 0.04,
    "sector": "Financials",
    "location": "Sweden"
  },
  {
    "symbol": "ISSA",
    "name": "ISS A/S",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "Denmark"
  },
  {
    "symbol": "NEXAN",
    "name": "NEXANS SA",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "RENAU",
    "name": "RENAULT SA",
    "weight": 0.04,
    "sector": "Consumer Discretionary",
    "location": "France"
  },
  {
    "symbol": "JYSKB",
    "name": "JYSKE BANK-REG",
    "weight": 0.04,
    "sector": "Financials",
    "location": "Denmark"
  },
  {
    "symbol": "ABERD",
    "name": "ABERDEEN GROUP PLC",
    "weight": 0.04,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "SWIS-",
    "name": "SWISSQUOTE GROUP HOLDING-REG",
    "weight": 0.04,
    "sector": "Financials",
    "location": "Switzerland"
  },
  {
    "symbol": "SSAB-",
    "name": "SSAB AB - B SHARES",
    "weight": 0.04,
    "sector": "Materials",
    "location": "Sweden"
  },
  {
    "symbol": "SCOR",
    "name": "SCOR SE",
    "weight": 0.04,
    "sector": "Financials",
    "location": "France"
  },
  {
    "symbol": "BRITL",
    "name": "BRITISH LAND CO ORD 25P",
    "weight": 0.04,
    "sector": "Real Estate",
    "location": "United Kingdom"
  },
  {
    "symbol": "DEUTL",
    "name": "DEUTSCHE LUFTHANSA NOMINATIVE",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "BEIJR",
    "name": "BEIJER REF AB",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "SCOUT",
    "name": "SCOUT24 SE",
    "weight": 0.04,
    "sector": "Communication Services",
    "location": "Germany"
  },
  {
    "symbol": "SVENC",
    "name": "SVENSKA CELLULOSA AB",
    "weight": 0.04,
    "sector": "Materials",
    "location": "Sweden"
  },
  {
    "symbol": "ELISA",
    "name": "ELISA OYJ",
    "weight": 0.04,
    "sector": "Communication Services",
    "location": "Finland"
  },
  {
    "symbol": "NORDE",
    "name": "NORDEX SE",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "CONVA",
    "name": "CONVATEC GROUP PLC",
    "weight": 0.04,
    "sector": "Health Care",
    "location": "United Kingdom"
  },
  {
    "symbol": "INDRS",
    "name": "INDRA SISTEMAS SA",
    "weight": 0.04,
    "sector": "Information Technology",
    "location": "Spain"
  },
  {
    "symbol": "VOEST",
    "name": "VOESTALPINE AG",
    "weight": 0.04,
    "sector": "Materials",
    "location": "Austria"
  },
  {
    "symbol": "TECHN",
    "name": "TECHNOPROBE SPA",
    "weight": 0.04,
    "sector": "Information Technology",
    "location": "Italy"
  },
  {
    "symbol": "DRI",
    "name": "DR ING HC F PORSCHE AG",
    "weight": 0.04,
    "sector": "Consumer Discretionary",
    "location": "Germany"
  },
  {
    "symbol": "BANCM",
    "name": "BANCA MEDIOLANUM SPA",
    "weight": 0.04,
    "sector": "Financials",
    "location": "Italy"
  },
  {
    "symbol": "BALFB",
    "name": "BALFOUR BEATTY PLC",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "SYENS",
    "name": "SYENSQO SA",
    "weight": 0.04,
    "sector": "Materials",
    "location": "Belgium"
  },
  {
    "symbol": "DASSA",
    "name": "DASSAULT AVIATION SA",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "GJENF",
    "name": "GJENSIDIGE FORSIKRING ASA",
    "weight": 0.04,
    "sector": "Financials",
    "location": "Norway"
  },
  {
    "symbol": "NIBEI",
    "name": "NIBE INDUSTRIER AB-B SHS",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "FRONT",
    "name": "FRONTLINE PLC",
    "weight": 0.04,
    "sector": "Energy",
    "location": "Norway"
  },
  {
    "symbol": "LONDP",
    "name": "LONDONMETRIC PROPERTY PLC",
    "weight": 0.04,
    "sector": "Real Estate",
    "location": "United Kingdom"
  },
  {
    "symbol": "IMCD",
    "name": "IMCD NV",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "Netherlands"
  },
  {
    "symbol": "MYCRO",
    "name": "MYCRONIC AB",
    "weight": 0.04,
    "sector": "Information Technology",
    "location": "Sweden"
  },
  {
    "symbol": "ANDRI",
    "name": "ANDRITZ AG",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "Austria"
  },
  {
    "symbol": "HOWDJ",
    "name": "HOWDEN JOINERY GRP PLC",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "JEROM",
    "name": "JERONIMO MARTINS",
    "weight": 0.04,
    "sector": "Consumer Staples",
    "location": "Portugal"
  },
  {
    "symbol": "FLUGZ",
    "name": "FLUGHAFEN ZUERICH REG",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "LIONF",
    "name": "LION FINANCE GROUP PLC",
    "weight": 0.04,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "SARTS",
    "name": "SARTORIUS STEDIM BIOTECH",
    "weight": 0.04,
    "sector": "Health Care",
    "location": "France"
  },
  {
    "symbol": "BARRR",
    "name": "BARRATT REDROW PLC",
    "weight": 0.04,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "WHITB",
    "name": "WHITBREAD PLC",
    "weight": 0.04,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "GALEN",
    "name": "GALENICA AG",
    "weight": 0.04,
    "sector": "Health Care",
    "location": "Switzerland"
  },
  {
    "symbol": "HENSO",
    "name": "HENSOLDT AG",
    "weight": 0.04,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "AIXTR",
    "name": "AIXTRON SE",
    "weight": 0.03,
    "sector": "Information Technology",
    "location": "Germany"
  },
  {
    "symbol": "AUTOT",
    "name": "AUTOTRADER GROUP PLC",
    "weight": 0.03,
    "sector": "Communication Services",
    "location": "United Kingdom"
  },
  {
    "symbol": "GETI-",
    "name": "GETINGE AB-B SHS",
    "weight": 0.03,
    "sector": "Health Care",
    "location": "Sweden"
  },
  {
    "symbol": "AVOLT",
    "name": "AVOLTA AG",
    "weight": 0.03,
    "sector": "Consumer Discretionary",
    "location": "Switzerland"
  },
  {
    "symbol": "TECHE",
    "name": "TECHNIP ENERGIES NV",
    "weight": 0.03,
    "sector": "Energy",
    "location": "France"
  },
  {
    "symbol": "GETLI",
    "name": "GETLINK SE",
    "weight": 0.03,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "ROTOR",
    "name": "ROTORK PLC",
    "weight": 0.03,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "AVANB",
    "name": "AVANZA BANK HOLDING AB",
    "weight": 0.03,
    "sector": "Financials",
    "location": "Sweden"
  },
  {
    "symbol": "FINAD",
    "name": "FINANCIERE DE TUBIZE",
    "weight": 0.03,
    "sector": "Health Care",
    "location": "Belgium"
  },
  {
    "symbol": "SPAR1",
    "name": "SPAREBANK 1 SOR-NORGE ASA",
    "weight": 0.03,
    "sector": "Financials",
    "location": "Norway"
  },
  {
    "symbol": "AUSTT",
    "name": "AUSTRIA TECHNOLOGY & SYSTEM(AUT)",
    "weight": 0.03,
    "sector": "Information Technology",
    "location": "Austria"
  },
  {
    "symbol": "SIG",
    "name": "SIG GROUP AG",
    "weight": 0.03,
    "sector": "Materials",
    "location": "Switzerland"
  },
  {
    "symbol": "CRODI",
    "name": "CRODA INTERNATIONAL PLC",
    "weight": 0.03,
    "sector": "Materials",
    "location": "United Kingdom"
  },
  {
    "symbol": "UMICO",
    "name": "UMICORE",
    "weight": 0.03,
    "sector": "Materials",
    "location": "Belgium"
  },
  {
    "symbol": "GLANB",
    "name": "GLANBIA PLC",
    "weight": 0.03,
    "sector": "Consumer Staples",
    "location": "Ireland"
  },
  {
    "symbol": "BURBE",
    "name": "BURBERRY GROUP PLC",
    "weight": 0.03,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "LOTUB",
    "name": "LOTUS BAKERIES",
    "weight": 0.03,
    "sector": "Consumer Staples",
    "location": "Belgium"
  },
  {
    "symbol": "TRITB",
    "name": "TRITAX BIG BOX REIT PLC",
    "weight": 0.03,
    "sector": "Real Estate",
    "location": "United Kingdom"
  },
  {
    "symbol": "AURUB",
    "name": "AURUBIS AG",
    "weight": 0.03,
    "sector": "Materials",
    "location": "Germany"
  },
  {
    "symbol": "FISC(",
    "name": "FISCHER (GEORG)-REG",
    "weight": 0.03,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "EDPR",
    "name": "EDP RENOVAVEIS",
    "weight": 0.03,
    "sector": "Utilities",
    "location": "Portugal"
  },
  {
    "symbol": "PORSA",
    "name": "PORSCHE AUTOMOBIL HLDG-PFD",
    "weight": 0.03,
    "sector": "Consumer Discretionary",
    "location": "Germany"
  },
  {
    "symbol": "WARED",
    "name": "WAREHOUSES DE PAUW SCA EUR",
    "weight": 0.03,
    "sector": "Real Estate",
    "location": "Belgium"
  },
  {
    "symbol": "BARRC",
    "name": "BARRY CALLEBAUT AG",
    "weight": 0.03,
    "sector": "Consumer Staples",
    "location": "Switzerland"
  },
  {
    "symbol": "ALK-A",
    "name": "ALK-ABELLO A/S",
    "weight": 0.03,
    "sector": "Health Care",
    "location": "Denmark"
  },
  {
    "symbol": "SBMO",
    "name": "SBM OFFSHORE NV",
    "weight": 0.03,
    "sector": "Energy",
    "location": "Netherlands"
  },
  {
    "symbol": "ELIS",
    "name": "ELIS SA",
    "weight": 0.03,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "ENTAI",
    "name": "ENTAIN PLC",
    "weight": 0.03,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "MAPFR",
    "name": "MAPFRE SA",
    "weight": 0.03,
    "sector": "Financials",
    "location": "Spain"
  },
  {
    "symbol": "ADEC-",
    "name": "ADECCO GROUP AG-REG",
    "weight": 0.03,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "AYVEN",
    "name": "AYVENS SA",
    "weight": 0.03,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "CASTG",
    "name": "CASTELLUM AB GOTHENBURG",
    "weight": 0.03,
    "sector": "Real Estate",
    "location": "Sweden"
  },
  {
    "symbol": "EVONI",
    "name": "EVONIK INDUSTRIES AG",
    "weight": 0.03,
    "sector": "Materials",
    "location": "Germany"
  },
  {
    "symbol": "INVEG",
    "name": "INVESTEC PLC GBP",
    "weight": 0.03,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "BANQC",
    "name": "BANQUE CANTONALE VAUDOIS REG",
    "weight": 0.03,
    "sector": "Financials",
    "location": "Switzerland"
  },
  {
    "symbol": "RANDS",
    "name": "RANDSTAD NV",
    "weight": 0.03,
    "sector": "Industrials",
    "location": "Netherlands"
  },
  {
    "symbol": "MBANK",
    "name": "MBANK SA",
    "weight": 0.03,
    "sector": "Financials",
    "location": "Poland"
  },
  {
    "symbol": "AALBE",
    "name": "AALBERTS NV",
    "weight": 0.03,
    "sector": "Industrials",
    "location": "Netherlands"
  },
  {
    "symbol": "MAN/",
    "name": "MAN GROUP PLC/JERSEY",
    "weight": 0.03,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "PERSI",
    "name": "PERSIMMON PLC",
    "weight": 0.03,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "ENAGA",
    "name": "ENAGAS SA",
    "weight": 0.03,
    "sector": "Utilities",
    "location": "Spain"
  },
  {
    "symbol": "VARE",
    "name": "VAR ENERGI ASA",
    "weight": 0.03,
    "sector": "Energy",
    "location": "Norway"
  },
  {
    "symbol": "LEGI",
    "name": "LEG IMMOBILIEN AG",
    "weight": 0.03,
    "sector": "Real Estate",
    "location": "Germany"
  },
  {
    "symbol": "LAGE-",
    "name": "LAGERCRANTZ GROUP AB-B SHS",
    "weight": 0.03,
    "sector": "Information Technology",
    "location": "Sweden"
  },
  {
    "symbol": "VERBU",
    "name": "VERBUND AG",
    "weight": 0.03,
    "sector": "Utilities",
    "location": "Austria"
  },
  {
    "symbol": "DI",
    "name": "D IETEREN GROUP",
    "weight": 0.03,
    "sector": "Consumer Discretionary",
    "location": "Belgium"
  },
  {
    "symbol": "ZABKA",
    "name": "ZABKA GROUP SA",
    "weight": 0.03,
    "sector": "Consumer Staples",
    "location": "Poland"
  },
  {
    "symbol": "AZIMU",
    "name": "AZIMUT HOLDING SPA",
    "weight": 0.03,
    "sector": "Financials",
    "location": "Italy"
  },
  {
    "symbol": "SOFIN",
    "name": "SOFINA",
    "weight": 0.03,
    "sector": "Financials",
    "location": "Belgium"
  },
  {
    "symbol": "VENDM",
    "name": "VEND MARKETPLACES ASA CL",
    "weight": 0.03,
    "sector": "Communication Services",
    "location": "Norway"
  },
  {
    "symbol": "RENK",
    "name": "RENK GROUP AG",
    "weight": 0.03,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "RIGHT",
    "name": "RIGHTMOVE PLC",
    "weight": 0.03,
    "sector": "Communication Services",
    "location": "United Kingdom"
  },
  {
    "symbol": "RS",
    "name": "RS GROUP PLC",
    "weight": 0.03,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "BANCG",
    "name": "BANCA GENERALI SPA",
    "weight": 0.03,
    "sector": "Financials",
    "location": "Italy"
  },
  {
    "symbol": "JOHNM",
    "name": "JOHNSON MATTHEY PLC",
    "weight": 0.03,
    "sector": "Materials",
    "location": "United Kingdom"
  },
  {
    "symbol": "CDP",
    "name": "CD PROJEKT SA",
    "weight": 0.03,
    "sector": "Communication Services",
    "location": "Poland"
  },
  {
    "symbol": "UNICB",
    "name": "UNICAJA BANCO S.A.",
    "weight": 0.03,
    "sector": "Financials",
    "location": "Spain"
  },
  {
    "symbol": "INPOS",
    "name": "INPOST SA",
    "weight": 0.03,
    "sector": "Industrials",
    "location": "Netherlands"
  },
  {
    "symbol": "SECT-",
    "name": "SECTRA AB-B SHS SEK",
    "weight": 0.03,
    "sector": "Health Care",
    "location": "Sweden"
  },
  {
    "symbol": "BERK/",
    "name": "BERKELEY GROUP HOLDINGS/THE",
    "weight": 0.03,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "WPP",
    "name": "WPP PLC",
    "weight": 0.03,
    "sector": "Communication Services",
    "location": "United Kingdom"
  },
  {
    "symbol": "BENES",
    "name": "BENEFIT SYSTEMS SA",
    "weight": 0.03,
    "sector": "Industrials",
    "location": "Poland"
  },
  {
    "symbol": "LUND-",
    "name": "LUNDBERGS AB-B SHS",
    "weight": 0.03,
    "sector": "Financials",
    "location": "Sweden"
  },
  {
    "symbol": "A2A",
    "name": "A2A SPA",
    "weight": 0.03,
    "sector": "Utilities",
    "location": "Italy"
  },
  {
    "symbol": "TEME-",
    "name": "TEMENOS AG - REG",
    "weight": 0.03,
    "sector": "Information Technology",
    "location": "Switzerland"
  },
  {
    "symbol": "VALLO",
    "name": "VALLOUREC SA",
    "weight": 0.03,
    "sector": "Energy",
    "location": "France"
  },
  {
    "symbol": "COMPU",
    "name": "COMPUTACENTER PLC",
    "weight": 0.03,
    "sector": "Information Technology",
    "location": "United Kingdom"
  },
  {
    "symbol": "DAVIC",
    "name": "DAVIDE CAMPARI-MILANO NV",
    "weight": 0.03,
    "sector": "Consumer Staples",
    "location": "Italy"
  },
  {
    "symbol": "ALLR-",
    "name": "ALLREAL HOLDING AG-REG",
    "weight": 0.03,
    "sector": "Real Estate",
    "location": "Switzerland"
  },
  {
    "symbol": "SALMA",
    "name": "SALMAR ASA",
    "weight": 0.03,
    "sector": "Consumer Staples",
    "location": "Norway"
  },
  {
    "symbol": "GECIN",
    "name": "GECINA SA",
    "weight": 0.03,
    "sector": "Real Estate",
    "location": "France"
  },
  {
    "symbol": "ARKEM",
    "name": "ARKEMA",
    "weight": 0.03,
    "sector": "Materials",
    "location": "France"
  },
  {
    "symbol": "PLUS5",
    "name": "PLUS500 LTD",
    "weight": 0.03,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "CRANS",
    "name": "CRANSWICK PLC",
    "weight": 0.03,
    "sector": "Consumer Staples",
    "location": "United Kingdom"
  },
  {
    "symbol": "CTSE",
    "name": "CTS EVENTIM",
    "weight": 0.03,
    "sector": "Communication Services",
    "location": "Germany"
  },
  {
    "symbol": "KBCA",
    "name": "KBC ANCORA",
    "weight": 0.03,
    "sector": "Financials",
    "location": "Belgium"
  },
  {
    "symbol": "CVCC",
    "name": "CVC CAPITAL PARTNERS PLC",
    "weight": 0.03,
    "sector": "Financials",
    "location": "Netherlands"
  },
  {
    "symbol": "SAGA-",
    "name": "SAGAX AB-B",
    "weight": 0.03,
    "sector": "Real Estate",
    "location": "Sweden"
  },
  {
    "symbol": "NEMET",
    "name": "NEMETSCHEK AG",
    "weight": 0.03,
    "sector": "Information Technology",
    "location": "Germany"
  },
  {
    "symbol": "MONDG",
    "name": "MONDI PLC GBP",
    "weight": 0.03,
    "sector": "Materials",
    "location": "United Kingdom"
  },
  {
    "symbol": "INCHC",
    "name": "INCHCAPE PLC",
    "weight": 0.03,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "BIOME",
    "name": "BIOMERIEUX",
    "weight": 0.03,
    "sector": "Health Care",
    "location": "France"
  },
  {
    "symbol": "RATIO",
    "name": "RATIONAL AG",
    "weight": 0.03,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "AUTO1",
    "name": "AUTO1 GROUP SE",
    "weight": 0.02,
    "sector": "Consumer Discretionary",
    "location": "Germany"
  },
  {
    "symbol": "TAYLW",
    "name": "TAYLOR WIMPEY",
    "weight": 0.02,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "DEMAA",
    "name": "DEMANT A/S",
    "weight": 0.02,
    "sector": "Health Care",
    "location": "Denmark"
  },
  {
    "symbol": "AAK",
    "name": "AAK AB",
    "weight": 0.02,
    "sector": "Consumer Staples",
    "location": "Sweden"
  },
  {
    "symbol": "FLATE",
    "name": "FLATEXDEGIRO SE",
    "weight": 0.02,
    "sector": "Financials",
    "location": "Germany"
  },
  {
    "symbol": "ITV",
    "name": "ITV PLC",
    "weight": 0.02,
    "sector": "Communication Services",
    "location": "United Kingdom"
  },
  {
    "symbol": "DINOP",
    "name": "DINO POLSKA SA",
    "weight": 0.02,
    "sector": "Consumer Staples",
    "location": "Poland"
  },
  {
    "symbol": "INGB",
    "name": "ING BANK SLASKI SA",
    "weight": 0.02,
    "sector": "Financials",
    "location": "Poland"
  },
  {
    "symbol": "HUBE+",
    "name": "HUBER + SUHNER AG-REG",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "VERIS",
    "name": "VERISURE PLC",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "VALME",
    "name": "VALMET OYJ",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Finland"
  },
  {
    "symbol": "BUZZI",
    "name": "BUZZI SPA",
    "weight": 0.02,
    "sector": "Materials",
    "location": "Italy"
  },
  {
    "symbol": "MITIE",
    "name": "MITIE GROUP PLC",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "FASTB",
    "name": "FASTIGHETS AB BALDER-B SHRS",
    "weight": 0.02,
    "sector": "Real Estate",
    "location": "Sweden"
  },
  {
    "symbol": "COME-",
    "name": "COMET HOLDING AG-REG",
    "weight": 0.02,
    "sector": "Information Technology",
    "location": "Switzerland"
  },
  {
    "symbol": "INFI-",
    "name": "INFICON HOLDING AG-REG",
    "weight": 0.02,
    "sector": "Information Technology",
    "location": "Switzerland"
  },
  {
    "symbol": "HERA",
    "name": "HERA SPA",
    "weight": 0.02,
    "sector": "Utilities",
    "location": "Italy"
  },
  {
    "symbol": "AIRTA",
    "name": "AIRTEL AFRICA PLC",
    "weight": 0.02,
    "sector": "Communication Services",
    "location": "United Kingdom"
  },
  {
    "symbol": "TPI",
    "name": "TP ICAP GROUP PLC",
    "weight": 0.02,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "PUMA",
    "name": "PUMA SE",
    "weight": 0.02,
    "sector": "Consumer Discretionary",
    "location": "Germany"
  },
  {
    "symbol": "ZEGOC",
    "name": "ZEGONA COMMUNICATIONS PLC",
    "weight": 0.02,
    "sector": "Communication Services",
    "location": "United Kingdom"
  },
  {
    "symbol": "DRAX",
    "name": "DRAX GROUP PLC",
    "weight": 0.02,
    "sector": "Utilities",
    "location": "United Kingdom"
  },
  {
    "symbol": "ACERI",
    "name": "ACERINOX SA",
    "weight": 0.02,
    "sector": "Materials",
    "location": "Spain"
  },
  {
    "symbol": "TUI",
    "name": "TUI AG XETRA",
    "weight": 0.02,
    "sector": "Consumer Discretionary",
    "location": "Germany"
  },
  {
    "symbol": "SIEG-",
    "name": "SIEGFRIED HOLDING AG-REG",
    "weight": 0.02,
    "sector": "Health Care",
    "location": "Switzerland"
  },
  {
    "symbol": "KONIB",
    "name": "KONINKLIJKE BAM GROEP NV",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Netherlands"
  },
  {
    "symbol": "CEMBM",
    "name": "CEMBRA MONEY BANK AG",
    "weight": 0.02,
    "sector": "Financials",
    "location": "Switzerland"
  },
  {
    "symbol": "KION",
    "name": "KION GROUP AG",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "GRUPK",
    "name": "GRUPA KETY SA(ZAKLADY METALLIL.)",
    "weight": 0.02,
    "sector": "Materials",
    "location": "Poland"
  },
  {
    "symbol": "SUNRC",
    "name": "SUNRISE COMMUNICATIONS AG A",
    "weight": 0.02,
    "sector": "Communication Services",
    "location": "Switzerland"
  },
  {
    "symbol": "LOOMI",
    "name": "LOOMIS AB",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "ADP",
    "name": "ADP",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "MANDA",
    "name": "MANDATUM OYJ",
    "weight": 0.02,
    "sector": "Financials",
    "location": "Finland"
  },
  {
    "symbol": "VALIA",
    "name": "VALIANT HOLDING AG",
    "weight": 0.02,
    "sector": "Financials",
    "location": "Switzerland"
  },
  {
    "symbol": "BKW",
    "name": "BKW AG",
    "weight": 0.02,
    "sector": "Utilities",
    "location": "Switzerland"
  },
  {
    "symbol": "NORDS",
    "name": "NORDIC SEMICONDUCTOR ASA",
    "weight": 0.02,
    "sector": "Information Technology",
    "location": "Norway"
  },
  {
    "symbol": "IVECO",
    "name": "IVECO GROUP NV",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Italy"
  },
  {
    "symbol": "VALEO",
    "name": "VALEO",
    "weight": 0.02,
    "sector": "Consumer Discretionary",
    "location": "France"
  },
  {
    "symbol": "INTER",
    "name": "INTERPUMP GROUP",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Italy"
  },
  {
    "symbol": "OCTAI",
    "name": "OCTAVE INTELLIGENCE PLC-SDR",
    "weight": 0.02,
    "sector": "Information Technology",
    "location": "Sweden"
  },
  {
    "symbol": "FREEN",
    "name": "FREENET AG",
    "weight": 0.02,
    "sector": "Communication Services",
    "location": "Germany"
  },
  {
    "symbol": "NEXI",
    "name": "NEXI SPA",
    "weight": 0.02,
    "sector": "Financials",
    "location": "Italy"
  },
  {
    "symbol": "PRIMH",
    "name": "PRIMARY HEALTH PROPERTIES PLC",
    "weight": 0.02,
    "sector": "Real Estate",
    "location": "United Kingdom"
  },
  {
    "symbol": "COVIV",
    "name": "COVIVIO",
    "weight": 0.02,
    "sector": "Real Estate",
    "location": "France"
  },
  {
    "symbol": "ROYAU",
    "name": "ROYAL UNIBREW",
    "weight": 0.02,
    "sector": "Consumer Staples",
    "location": "Denmark"
  },
  {
    "symbol": "GRIFO",
    "name": "GRIFOLS SA",
    "weight": 0.02,
    "sector": "Health Care",
    "location": "Spain"
  },
  {
    "symbol": "BILFI",
    "name": "BILFINGER SE",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "HIKMP",
    "name": "HIKMA PHARMACEUTICALS",
    "weight": 0.02,
    "sector": "Health Care",
    "location": "United Kingdom"
  },
  {
    "symbol": "SACYR",
    "name": "SACYR SA",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Spain"
  },
  {
    "symbol": "QUILT",
    "name": "QUILTER PLC",
    "weight": 0.02,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "SERCO",
    "name": "SERCO GROUP ORD 2P",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "MOBIM",
    "name": "MOBIMO HOLDINGS AG",
    "weight": 0.02,
    "sector": "Real Estate",
    "location": "Switzerland"
  },
  {
    "symbol": "BRUNC",
    "name": "BRUNELLO CUCINELLI SPA",
    "weight": 0.02,
    "sector": "Consumer Discretionary",
    "location": "Italy"
  },
  {
    "symbol": "BANKM",
    "name": "BANK MILLENNIUM SA",
    "weight": 0.02,
    "sector": "Financials",
    "location": "Poland"
  },
  {
    "symbol": "S.O.I",
    "name": "S.O.I.T.E.C.",
    "weight": 0.02,
    "sector": "Information Technology",
    "location": "France"
  },
  {
    "symbol": "PIRE&",
    "name": "PIRELLI & C SPA",
    "weight": 0.02,
    "sector": "Consumer Discretionary",
    "location": "Italy"
  },
  {
    "symbol": "SFS",
    "name": "SFS GROUP AG",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "BRIDG",
    "name": "BRIDGEPOINT GROUP",
    "weight": 0.02,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "PENNO",
    "name": "PENNON GROUP PLC",
    "weight": 0.02,
    "sector": "Utilities",
    "location": "United Kingdom"
  },
  {
    "symbol": "HUHTA",
    "name": "HUHTAMAKI OYJ",
    "weight": 0.02,
    "sector": "Materials",
    "location": "Finland"
  },
  {
    "symbol": "SES",
    "name": "SES PARIS",
    "weight": 0.02,
    "sector": "Communication Services",
    "location": "France"
  },
  {
    "symbol": "DEL",
    "name": "DE LONGHI SPA",
    "weight": 0.02,
    "sector": "Consumer Discretionary",
    "location": "Italy"
  },
  {
    "symbol": "SODEX",
    "name": "SODEXO SA",
    "weight": 0.02,
    "sector": "Consumer Discretionary",
    "location": "France"
  },
  {
    "symbol": "VZ",
    "name": "VZ HOLDING AG",
    "weight": 0.02,
    "sector": "Financials",
    "location": "Switzerland"
  },
  {
    "symbol": "RUBIS",
    "name": "RUBIS",
    "weight": 0.02,
    "sector": "Utilities",
    "location": "France"
  },
  {
    "symbol": "TBCB",
    "name": "TBC BANK GROUP PLC",
    "weight": 0.02,
    "sector": "Financials",
    "location": "United Kingdom"
  },
  {
    "symbol": "AKERA",
    "name": "AKER ASA-A SHARES",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Norway"
  },
  {
    "symbol": "BELLW",
    "name": "BELLWAY PLC",
    "weight": 0.02,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "FDJU",
    "name": "FDJ UNITED",
    "weight": 0.02,
    "sector": "Consumer Discretionary",
    "location": "France"
  },
  {
    "symbol": "FLSM&",
    "name": "FLSMIDTH & CO A/S",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Denmark"
  },
  {
    "symbol": "UNITE",
    "name": "UNITE GROUP",
    "weight": 0.02,
    "sector": "Real Estate",
    "location": "United Kingdom"
  },
  {
    "symbol": "SULZ-",
    "name": "SULZER AG-REG",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "CSGE",
    "name": "CSG NV EUR",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Netherlands"
  },
  {
    "symbol": "TGSA",
    "name": "TGS ASA",
    "weight": 0.02,
    "sector": "Energy",
    "location": "Norway"
  },
  {
    "symbol": "TELEP",
    "name": "TELEPERFORMANCE PARIS",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "France"
  },
  {
    "symbol": "SPARN",
    "name": "SPAREBANKEN NORGE",
    "weight": 0.02,
    "sector": "Financials",
    "location": "Norway"
  },
  {
    "symbol": "BOLLO",
    "name": "BOLLORE SE",
    "weight": 0.02,
    "sector": "Energy",
    "location": "France"
  },
  {
    "symbol": "FUCH-",
    "name": "FUCHS SE-PFD",
    "weight": 0.02,
    "sector": "Materials",
    "location": "Germany"
  },
  {
    "symbol": "INVEL",
    "name": "INVESTMENT AB LATOUR-B SHS",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "VOPAK",
    "name": "VOPAK",
    "weight": 0.02,
    "sector": "Energy",
    "location": "Netherlands"
  },
  {
    "symbol": "ALLFU",
    "name": "ALLFUNDS GROUP PLC",
    "weight": 0.02,
    "sector": "Financials",
    "location": "Netherlands"
  },
  {
    "symbol": "ROCKA",
    "name": "ROCKWOOL A/S-B SHS",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Denmark"
  },
  {
    "symbol": "ARCAD",
    "name": "ARCADIS NV",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Netherlands"
  },
  {
    "symbol": "ZEALP",
    "name": "ZEALAND PHARMA A/S",
    "weight": 0.02,
    "sector": "Health Care",
    "location": "Denmark"
  },
  {
    "symbol": "BECHT",
    "name": "BECHTLE AG",
    "weight": 0.02,
    "sector": "Information Technology",
    "location": "Germany"
  },
  {
    "symbol": "DERWE",
    "name": "DERWENT LONDON PLC",
    "weight": 0.02,
    "sector": "Real Estate",
    "location": "United Kingdom"
  },
  {
    "symbol": "QINET",
    "name": "QINETIQ GROUP PLC",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "United Kingdom"
  },
  {
    "symbol": "SHAFC",
    "name": "SHAFTESBURY CAPITAL PLC",
    "weight": 0.02,
    "sector": "Real Estate",
    "location": "United Kingdom"
  },
  {
    "symbol": "TAGI",
    "name": "TAG IMMOBILIEN AG",
    "weight": 0.02,
    "sector": "Real Estate",
    "location": "Germany"
  },
  {
    "symbol": "DKSH",
    "name": "DKSH HOLDING AG",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "SWEC-",
    "name": "SWECO AB-B SHS",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Sweden"
  },
  {
    "symbol": "FRAPA",
    "name": "FRAPORT AG FRANKFURT AIRPORT",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "HIAB",
    "name": "HIAB OYJ",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Finland"
  },
  {
    "symbol": "ASSEP",
    "name": "ASSECO POLAND SA",
    "weight": 0.02,
    "sector": "Information Technology",
    "location": "Poland"
  },
  {
    "symbol": "WIENE",
    "name": "WIENERBERGER AG",
    "weight": 0.02,
    "sector": "Materials",
    "location": "Austria"
  },
  {
    "symbol": "K+S-",
    "name": "K+S AG-REG",
    "weight": 0.02,
    "sector": "Materials",
    "location": "Germany"
  },
  {
    "symbol": "TAURP",
    "name": "TAURON POLSKA ENERGIA SA",
    "weight": 0.02,
    "sector": "Utilities",
    "location": "Poland"
  },
  {
    "symbol": "AXFOO",
    "name": "AXFOOD AB",
    "weight": 0.02,
    "sector": "Consumer Staples",
    "location": "Sweden"
  },
  {
    "symbol": "BUCHI",
    "name": "BUCHER INDUSTRIES AG REG",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Switzerland"
  },
  {
    "symbol": "PUIGB",
    "name": "PUIG BRANDS SA-B",
    "weight": 0.02,
    "sector": "Consumer Staples",
    "location": "Spain"
  },
  {
    "symbol": "THULE",
    "name": "THULE GROUP AB",
    "weight": 0.02,
    "sector": "Consumer Discretionary",
    "location": "Sweden"
  },
  {
    "symbol": "REPLY",
    "name": "REPLY SPA",
    "weight": 0.02,
    "sector": "Information Technology",
    "location": "Italy"
  },
  {
    "symbol": "TOMRS",
    "name": "TOMRA SYSTEMS ASA",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Norway"
  },
  {
    "symbol": "KONGM",
    "name": "KONGSBERG MARITIME AS",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "Norway"
  },
  {
    "symbol": "BAKKP",
    "name": "BAKKAFROST P/F",
    "weight": 0.02,
    "sector": "Consumer Staples",
    "location": "Norway"
  },
  {
    "symbol": "SOPRS",
    "name": "SOPRA STERIA GROUP",
    "weight": 0.02,
    "sector": "Information Technology",
    "location": "France"
  },
  {
    "symbol": "JDS",
    "name": "JD SPORTS FASHION PLC",
    "weight": 0.02,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom"
  },
  {
    "symbol": "HOLM-",
    "name": "HOLMEN AB- B SHARES",
    "weight": 0.02,
    "sector": "Materials",
    "location": "Sweden"
  },
  {
    "symbol": "KEMIR",
    "name": "KEMIRA OYJ",
    "weight": 0.02,
    "sector": "Materials",
    "location": "Finland"
  },
  {
    "symbol": "VISCO",
    "name": "VISCOFAN SA",
    "weight": 0.02,
    "sector": "Consumer Staples",
    "location": "Spain"
  },
  {
    "symbol": "PANA",
    "name": "PAN AFRICAN RESOURCES PLC",
    "weight": 0.01,
    "sector": "Materials",
    "location": "United Kingdom"
  },
  {
    "symbol": "SIGNI",
    "name": "SIGNIFY NV",
    "weight": 0.01,
    "sector": "Industrials",
    "location": "Netherlands"
  },
  {
    "symbol": "AUMOV",
    "name": "AUMOVIO SE",
    "weight": 0.01,
    "sector": "Consumer Discretionary",
    "location": "Germany"
  },
  {
    "symbol": "WIHLF",
    "name": "WIHLBORGS FASTIGHETER AB",
    "weight": 0.01,
    "sector": "Real Estate",
    "location": "Sweden"
  },
  {
    "symbol": "HOCHM",
    "name": "HOCHSCHILD MINING PLC",
    "weight": 0.01,
    "sector": "Materials",
    "location": "United Kingdom"
  },
  {
    "symbol": "SODEP",
    "name": "SODEXO PRIME FIDELITE 2029",
    "weight": 0.01,
    "sector": "Consumer Discretionary",
    "location": "France"
  },
  {
    "symbol": "SODEP",
    "name": "SODEXO-ACT PROV PRIME DE FIDELITE",
    "weight": 0.01,
    "sector": "Consumer Discretionary",
    "location": "France"
  },
  {
    "symbol": "TKMS&",
    "name": "TKMS AG& CO KGAA",
    "weight": 0.0,
    "sector": "Industrials",
    "location": "Germany"
  },
  {
    "symbol": "NORIB",
    "name": "NORION BANK AB",
    "weight": 0.0,
    "sector": "Financials",
    "location": "Sweden"
  },
  {
    "symbol": "NMCH",
    "name": "NMC HEALTH PLC DLST",
    "weight": 0.0,
    "sector": "Health Care",
    "location": "UAE"
  }
];
