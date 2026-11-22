// Complete holdings dataset for iShares Core MSCI World UCITS ETF (EUNL.DE / SWDA / IWDA)
// Official BlackRock / iShares reporting data with full weightings, sectors, asset classes and geographic locations.

export interface ETFHolding {
  symbol: string;
  name: string;
  sector: string;
  assetClass: string;
  weight: number;
  location: string;
  currency: string;
}

export const EUNL_SECTOR_ALLOCATIONS = [
  {
    "name": "Information Technology",
    "weight": 29.46
  },
  {
    "name": "Financials",
    "weight": 16.48
  },
  {
    "name": "Industrials",
    "weight": 11.29
  },
  {
    "name": "Health Care",
    "weight": 9.07
  },
  {
    "name": "Consumer Discretionary",
    "weight": 8.88
  },
  {
    "name": "Communication Services",
    "weight": 8.15
  },
  {
    "name": "Consumer Staples",
    "weight": 5.07
  },
  {
    "name": "Energy",
    "weight": 3.92
  },
  {
    "name": "Materials",
    "weight": 3.21
  },
  {
    "name": "Utilities",
    "weight": 2.48
  },
  {
    "name": "Real Estate",
    "weight": 1.79
  },
  {
    "name": "Cash & Derivatives",
    "weight": 0.31
  }
];

export const EUNL_COUNTRY_ALLOCATIONS = [
  {
    "name": "United States",
    "weight": 72.35
  },
  {
    "name": "Japan",
    "weight": 5.71
  },
  {
    "name": "United Kingdom",
    "weight": 3.52
  },
  {
    "name": "Canada",
    "weight": 3.43
  },
  {
    "name": "France",
    "weight": 2.37
  },
  {
    "name": "Switzerland",
    "weight": 2.27
  },
  {
    "name": "Germany",
    "weight": 2.13
  },
  {
    "name": "Australia",
    "weight": 1.63
  },
  {
    "name": "Netherlands",
    "weight": 1.49
  },
  {
    "name": "Spain",
    "weight": 0.99
  },
  {
    "name": "Sweden",
    "weight": 0.85
  },
  {
    "name": "Italy",
    "weight": 0.78
  },
  {
    "name": "Hong Kong",
    "weight": 0.47
  },
  {
    "name": "Singapore",
    "weight": 0.45
  },
  {
    "name": "Denmark",
    "weight": 0.42
  },
  {
    "name": "Finland",
    "weight": 0.3
  },
  {
    "name": "Belgium",
    "weight": 0.26
  },
  {
    "name": "Israel",
    "weight": 0.24
  },
  {
    "name": "Norway",
    "weight": 0.15
  },
  {
    "name": "Ireland",
    "weight": 0.1
  },
  {
    "name": "Austria",
    "weight": 0.09
  },
  {
    "name": "Portugal",
    "weight": 0.05
  },
  {
    "name": "New Zealand",
    "weight": 0.04
  },
  {
    "name": "European Union",
    "weight": 0.02
  },
  {
    "name": "Other",
    "weight": 0.0
  }
];

export const EUNL_FULL_HOLDINGS: ETFHolding[] = [
  {
    "symbol": "AAPL",
    "name": "APPLE INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 5.37,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NVDA",
    "name": "NVIDIA CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 5.34,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MSFT",
    "name": "MICROSOFT CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 3.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AMZN",
    "name": "AMAZON.COM INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 2.68,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GOOGL",
    "name": "ALPHABET INC CLASS A",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 2.26,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AVGO",
    "name": "BROADCOM INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 1.94,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GOOG",
    "name": "ALPHABET INC CLASS C",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 1.79,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "META",
    "name": "META PLATFORMS INC CLASS A",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 1.58,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MU",
    "name": "MICRON TECHNOLOGY INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 1.22,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TSLA",
    "name": "TESLA INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 1.19,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LLY",
    "name": "ELI LILLY",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 1.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "JPM",
    "name": "JPMORGAN CHASE & CO",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 1.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AMD",
    "name": "ADVANCED MICRO DEVICES INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.99,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ASML",
    "name": "ASML HOLDING NV",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.79,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "BRKB",
    "name": "BERKSHIRE HATHAWAY INC CLASS B",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.76,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "XOM",
    "name": "EXXONMOBIL HOLDINGS CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.71,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "JNJ",
    "name": "JOHNSON & JOHNSON",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.67,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "V",
    "name": "VISA INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.67,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WMT",
    "name": "WALMART INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.54,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "INTC",
    "name": "INTEL CORPORATION",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.52,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ABBV",
    "name": "ABBVIE INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.51,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AMAT",
    "name": "APPLIED MATERIAL INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.5,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CSCO",
    "name": "CISCO SYSTEMS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.49,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MA",
    "name": "MASTERCARD INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.49,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CAT",
    "name": "CATERPILLAR INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.46,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BAC",
    "name": "BANK OF AMERICA CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.46,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "COST",
    "name": "COSTCO WHOLESALE CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.46,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LRCX",
    "name": "LAM RESEARCH CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.45,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "UNH",
    "name": "UNITEDHEALTH GROUP INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.44,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GE",
    "name": "GE AEROSPACE",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.39,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CVX",
    "name": "CHEVRON CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.39,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PG",
    "name": "PROCTER & GAMBLE",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.38,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HSBA",
    "name": "HSBC HOLDINGS PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.38,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "HD",
    "name": "HOME DEPOT INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.37,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GS",
    "name": "GOLDMAN SACHS GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.36,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KO",
    "name": "COCA-COLA",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.35,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MRK",
    "name": "MERCK & CO INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.35,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RY",
    "name": "ROYAL BANK OF CANADA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.33,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "PM",
    "name": "PHILIP MORRIS INTERNATIONAL INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.33,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GEV",
    "name": "GE VERNOVA INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.33,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NFLX",
    "name": "NETFLIX INC",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.32,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ROP",
    "name": "ROCHE PS PAR AG",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.32,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "PLTR",
    "name": "PALANTIR TECHNOLOGIES INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.32,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NOVN",
    "name": "NOVARTIS AG",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.32,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "KLAC",
    "name": "KLA CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.32,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PANW",
    "name": "PALO ALTO NETWORKS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.31,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WFC",
    "name": "WELLS FARGO",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.3,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TXN",
    "name": "TEXAS INSTRUMENT INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.3,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NESN",
    "name": "NESTLE SA",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.3,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "RTX",
    "name": "RTX CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.29,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MS",
    "name": "MORGAN STANLEY",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.28,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AZN",
    "name": "ASTRAZENECA PLC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.28,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "SHEL",
    "name": "SHELL PLC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.28,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "8306",
    "name": "MITSUBISHI UFJ FINANCIAL GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.26,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "LIN",
    "name": "LINDE PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.26,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "C",
    "name": "CITIGROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.25,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SIE",
    "name": "SIEMENS N AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.25,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "ORCL",
    "name": "ORACLE CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.24,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BHP",
    "name": "BHP GROUP LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.23,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "TD",
    "name": "TORONTO DOMINION",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.22,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "CBA",
    "name": "COMMONWEALTH BANK OF AUSTRALIA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.22,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "AMGN",
    "name": "AMGEN INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.22,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IBM",
    "name": "INTERNATIONAL BUSINESS MACHINES CO",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.22,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "STX",
    "name": "SEAGATE TECHNOLOGY HOLDINGS PLC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.22,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SAN",
    "name": "BANCO SANTANDER SA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.22,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "TMO",
    "name": "THERMO FISHER SCIENTIFIC INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.22,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "APH",
    "name": "AMPHENOL CORP CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.22,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WDC",
    "name": "WESTERN DIGITAL CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.21,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ANET",
    "name": "ARISTA NETWORKS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.21,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CRWD",
    "name": "CROWDSTRIKE HOLDINGS INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.21,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ADI",
    "name": "ANALOG DEVICES INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.21,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MCD",
    "name": "MCDONALDS CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.21,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AXP",
    "name": "AMERICAN EXPRESS",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.21,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "QCOM",
    "name": "QUALCOMM INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.21,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PEP",
    "name": "PEPSICO INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.21,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NEE",
    "name": "NEXTERA ENERGY INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.2,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ALV",
    "name": "ALLIANZ",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.2,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "VZ",
    "name": "VERIZON COMMUNICATIONS INC",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.2,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "USD",
    "name": "USD CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.2,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8035",
    "name": "TOKYO ELECTRON LTD",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.2,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "MRVL",
    "name": "MARVELL TECHNOLOGY INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.2,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ABT",
    "name": "ABBOTT LABORATORIES",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.19,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WELL",
    "name": "WELLTOWER INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.19,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "UNP",
    "name": "UNION PACIFIC CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.19,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DIS",
    "name": "WALT DISNEY",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.19,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TJX",
    "name": "TJX INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.19,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "UBSG",
    "name": "UBS GROUP AG",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.19,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "7203",
    "name": "TOYOTA MOTOR CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.19,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "TTE",
    "name": "TOTALENERGIES",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.18,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "SCHW",
    "name": "CHARLES SCHWAB CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.18,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SU",
    "name": "SCHNEIDER ELECTRIC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.18,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "GILD",
    "name": "GILEAD SCIENCES INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.18,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SAP",
    "name": "SAP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.18,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "NOVO",
    "name": "B NOVO NORDISK CLASS B",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.18,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "ETN",
    "name": "EATON PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.18,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "T",
    "name": "AT&T INC",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.17,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8316",
    "name": "SUMITOMO MITSUI FINANCIAL GROUP IN",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.17,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ABBN",
    "name": "ABB LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.17,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "BLK",
    "name": "BLACKROCK INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.17,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BA",
    "name": "BOEING",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.17,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RR.",
    "name": "ROLLS-ROYCE HOLDINGS PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.17,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "IBE",
    "name": "IBERDROLA SA",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.17,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "SHOP",
    "name": "SHOPIFY SUBORDINATE VOTING INC CLA",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.16,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "DE",
    "name": "DEERE",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.16,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BKNG",
    "name": "BOOKING HOLDINGS INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.16,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "COP",
    "name": "CONOCOPHILLIPS",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.16,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BBVA",
    "name": "BANCO BILBAO VIZCAYA ARGENTARIA SA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.16,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "CVS",
    "name": "CVS HEALTH CORP",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.16,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PLD",
    "name": "PROLOGIS REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.16,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PFE",
    "name": "PFIZER INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.16,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6857",
    "name": "ADVANTEST CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ENR",
    "name": "SIEMENS ENERGY N AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "CRM",
    "name": "SALESFORCE INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MC",
    "name": "LVMH",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "SPGI",
    "name": "S&P GLOBAL INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ULVR",
    "name": "UNILEVER PLC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "6501",
    "name": "HITACHI LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "9984",
    "name": "SOFTBANK GROUP CORP",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "CFR",
    "name": "COMPAGNIE FINANCIERE RICHEMONT SA",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "GLW",
    "name": "CORNING INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SAF",
    "name": "SAFRAN SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "UCG",
    "name": "UNICREDIT",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "UBER",
    "name": "UBER TECHNOLOGIES INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "COF",
    "name": "CAPITAL ONE FINANCIAL CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AIR",
    "name": "AIRBUS GROUP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "6758",
    "name": "SONY GROUP CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "BMY",
    "name": "BRISTOL MYERS SQUIBB",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ISRG",
    "name": "INTUITIVE SURGICAL INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AI",
    "name": "LAIR LIQUIDE SOCIETE ANONYME POUR",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "BMO",
    "name": "BANK OF MONTREAL",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "CB",
    "name": "CHUBB",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BATS",
    "name": "BRITISH AMERICAN TOBACCO",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "DELL",
    "name": "DELL TECHNOLOGIES INC CLASS C",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ENB",
    "name": "ENBRIDGE INC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "MO",
    "name": "ALTRIA GROUP INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8411",
    "name": "MIZUHO FINANCIAL GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "PH",
    "name": "PARKER-HANNIFIN CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VRTX",
    "name": "VERTEX PHARMACEUTICALS INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BNP",
    "name": "BNP PARIBAS SA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "SBUX",
    "name": "STARBUCKS CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "285A",
    "name": "KIOXIA HOLDINGS CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "PGR",
    "name": "PROGRESSIVE CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LOW",
    "name": "LOWES COMPANIES INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BNY",
    "name": "BANK OF NEW YORK MELLON CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "D05",
    "name": "DBS GROUP HOLDINGS LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "Singapore",
    "currency": "SGD"
  },
  {
    "symbol": "VRT",
    "name": "VERTIV HOLDINGS CLASS A",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HWM",
    "name": "HOWMET AEROSPACE INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DHR",
    "name": "DANAHER CORP",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BP.",
    "name": "BP PLC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "CM",
    "name": "CANADIAN IMPERIAL BANK OF COMMERCE",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "ZURN",
    "name": "ZURICH INSURANCE GROUP AG",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "BNS",
    "name": "BANK OF NOVA SCOTIA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "6098",
    "name": "RECRUIT HOLDINGS LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "SYK",
    "name": "STRYKER CORP",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MDT",
    "name": "MEDTRONIC PLC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SO",
    "name": "SOUTHERN",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NOW",
    "name": "SERVICENOW INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DTE",
    "name": "DEUTSCHE TELEKOM N AG",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "MCK",
    "name": "MCKESSON CORP",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LMT",
    "name": "LOCKHEED MARTIN CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EQIX",
    "name": "EQUINIX REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PNC",
    "name": "PNC FINANCIAL SERVICES GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "1299",
    "name": "AIA GROUP LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "ISP",
    "name": "INTESA SANPAOLO",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "TT",
    "name": "TRANE TECHNOLOGIES PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "USB",
    "name": "US BANCORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FTNT",
    "name": "FORTINET INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "OR",
    "name": "LOREAL SA",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "GSK",
    "name": "GLAXOSMITHKLINE",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "VLO",
    "name": "VALERO ENERGY CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NEM",
    "name": "NEWMONT",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ADP",
    "name": "AUTOMATIC DATA PROCESSING INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "INGA",
    "name": "ING GROEP NV",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "DUK",
    "name": "DUKE ENERGY CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IFX",
    "name": "INFINEON TECHNOLOGIES AG",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "APP",
    "name": "APPLOVIN CORP CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RIO",
    "name": "RIO TINTO PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "PWR",
    "name": "QUANTA SERVICES INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SAN",
    "name": "SANOFI SA",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "TMUS",
    "name": "T MOBILE US INC",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MPC",
    "name": "MARATHON PETROLEUM CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CDNS",
    "name": "CADENCE DESIGN SYSTEMS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BARC",
    "name": "BARCLAYS PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "CSX",
    "name": "CSX CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WM",
    "name": "WASTE MANAGEMENT INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ADBE",
    "name": "ADOBE INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "9983",
    "name": "FAST RETAILING LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "BX",
    "name": "BLACKSTONE INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CMI",
    "name": "CUMMINS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CNQ",
    "name": "CANADIAN NATURAL RESOURCES LTD",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "SNOW",
    "name": "SNOWFLAKE INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MMM",
    "name": "3M",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FCX",
    "name": "FREEPORT MCMORAN INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WMB",
    "name": "WILLIAMS INC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ENEL",
    "name": "ENEL",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "ELV",
    "name": "ELEVANCE HEALTH INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8766",
    "name": "TOKIO MARINE HOLDINGS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "WBC",
    "name": "WESTPAC BANKING CORPORATION",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "8058",
    "name": "MITSUBISHI CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "MRSH",
    "name": "MARSH INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LLOY",
    "name": "LLOYDS BANKING GROUP PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "JCI",
    "name": "JOHNSON CONTROLS INTERNATIONAL PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BN",
    "name": "BROOKFIELD CORP CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "CMCSA",
    "name": "COMCAST CORP CLASS A",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ACN",
    "name": "ACCENTURE PLC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "UPS",
    "name": "UNITED PARCEL SERVICE INC CLASS B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NET",
    "name": "CLOUDFLARE INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MAR",
    "name": "MARRIOTT INTERNATIONAL INC CLASS A",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CS",
    "name": "AXA SA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "PSX",
    "name": "PHILLIPS 66",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CME",
    "name": "CME GROUP INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6861",
    "name": "KEYENCE CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "CP",
    "name": "CANADIAN PACIFIC KANSAS CITY LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "GD",
    "name": "GENERAL DYNAMICS CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NAB",
    "name": "NATIONAL AUSTRALIA BANK LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "CEG",
    "name": "CONSTELLATION ENERGY CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MELI",
    "name": "MERCADOLIBRE INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EOG",
    "name": "EOG RESOURCES INC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NG.",
    "name": "NATIONAL GRID PLC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "DDOG",
    "name": "DATADOG INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TRV",
    "name": "TRAVELERS COMPANIES INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "INTU",
    "name": "INTUIT INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6981",
    "name": "MURATA MANUFACTURING LTD",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "CI",
    "name": "CIGNA",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MCO",
    "name": "MOODYS CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AMT",
    "name": "AMERICAN TOWER REIT CORP",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MDLZ",
    "name": "MONDELEZ INTERNATIONAL INC CLASS A",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HLT",
    "name": "HILTON WORLDWIDE HOLDINGS INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ICE",
    "name": "INTERCONTINENTAL EXCHANGE INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EMR",
    "name": "EMERSON ELECTRIC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HOOD",
    "name": "ROBINHOOD MARKETS INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SU",
    "name": "SUNCOR ENERGY INC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "SPOT",
    "name": "SPOTIFY TECHNOLOGY SA",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Sweden",
    "currency": "USD"
  },
  {
    "symbol": "ORLY",
    "name": "OREILLY AUTOMOTIVE INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ROST",
    "name": "ROSS STORES INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GM",
    "name": "GENERAL MOTORS",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "7011",
    "name": "MITSUBISHI HEAVY INDUSTRIES LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "MUV2",
    "name": "MUENCHENER RUECKVERSICHERUNGS-GESE",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "ITW",
    "name": "ILLINOIS TOOL INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SNPS",
    "name": "SYNOPSYS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MFC",
    "name": "MANULIFE FINANCIAL CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "SHW",
    "name": "SHERWIN WILLIAMS",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "4063",
    "name": "SHIN ETSU CHEMICAL LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ABI",
    "name": "ANHEUSER-BUSCH INBEV SA",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Belgium",
    "currency": "EUR"
  },
  {
    "symbol": "RCL",
    "name": "ROYAL CARIBBEAN GROUP LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HON",
    "name": "HONEYWELL INTERNATIONAL INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "INVE",
    "name": "B INVESTOR CLASS B",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "ANZ",
    "name": "ANZ GROUP HOLDINGS LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "BA.",
    "name": "BAE SYSTEMS PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "FDX",
    "name": "FEDEX CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8031",
    "name": "MITSUI LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "NSC",
    "name": "NORFOLK SOUTHERN CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NWG",
    "name": "NATWEST GROUP PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "O39",
    "name": "OVERSEA-CHINESE BANKING LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Singapore",
    "currency": "SGD"
  },
  {
    "symbol": "SPG",
    "name": "SIMON PROPERTY GROUP REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AEM",
    "name": "AGNICO EAGLE MINES LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "DASH",
    "name": "DOORDASH INC CLASS A",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NOC",
    "name": "NORTHROP GRUMMAN CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TRP",
    "name": "TC ENERGY CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "CTAS",
    "name": "CINTAS CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WES",
    "name": "WESFARMERS LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "SLB",
    "name": "SLB NV",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AON",
    "name": "AON PLC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "REGN",
    "name": "REGENERON PHARMACEUTICALS INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CL",
    "name": "COLGATE-PALMOLIVE",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ITX",
    "name": "INDUSTRIA DE DISENO TEXTIL SA",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "AEP",
    "name": "AMERICAN ELECTRIC POWER INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CNR",
    "name": "CANADIAN NATIONAL RAILWAY",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "TFC",
    "name": "TRUIST FINANCIAL CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NXPI",
    "name": "NXP SEMICONDUCTORS NV",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DG",
    "name": "VINCI SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "GLEN",
    "name": "GLENCORE PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "8001",
    "name": "ITOCHU CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "CRH",
    "name": "CRH PUBLIC LIMITED PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MNST",
    "name": "MONSTER BEVERAGE CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ECL",
    "name": "ECOLAB INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MSI",
    "name": "MOTOROLA SOLUTIONS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MQG",
    "name": "MACQUARIE GROUP LTD DEF",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "TDG",
    "name": "TRANSDIGM GROUP INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "URI",
    "name": "UNITED RENTALS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SPCX",
    "name": "SPACE EXPLORATION TECHNOLOGIES COR",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ALL",
    "name": "ALLSTATE CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HONA",
    "name": "HONEYWELL AEROSPACE INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PCAR",
    "name": "PACCAR INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DBK",
    "name": "DEUTSCHE BANK AG",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "MPWR",
    "name": "MONOLITHIC POWER SYSTEMS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WBD",
    "name": "WARNER BROS. DISCOVERY INC SERIES",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TEL",
    "name": "TE CONNECTIVITY PLC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BSX",
    "name": "BOSTON SCIENTIFIC CORP",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KMI",
    "name": "KINDER MORGAN INC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6503",
    "name": "MITSUBISHI ELECTRIC CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "HPE",
    "name": "HEWLETT PACKARD ENTERPRISE",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NDA",
    "name": "FI NORDEA BANK",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "Finland",
    "currency": "EUR"
  },
  {
    "symbol": "AJG",
    "name": "ARTHUR J GALLAGHER",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "APD",
    "name": "AIR PRODUCTS AND CHEMICALS INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ABNB",
    "name": "AIRBNB INC CLASS A",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "D",
    "name": "DOMINION ENERGY INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TGT",
    "name": "TARGET CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NA",
    "name": "NATIONAL BANK OF CANADA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "FIX",
    "name": "COMFORT SYSTEMS USA INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BE",
    "name": "BLOOM ENERGY CLASS A CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GWW",
    "name": "WW GRAINGER INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CTVA",
    "name": "CORTEVA INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KKR",
    "name": "KKR AND CO INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TER",
    "name": "TERADYNE INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HCA",
    "name": "HCA HEALTHCARE INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DLR",
    "name": "DIGITAL REALTY TRUST REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GLE",
    "name": "SOCIETE GENERALE SA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "ABX",
    "name": "BARRICK MINING CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "DHL",
    "name": "DEUTSCHE POST AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "COHR",
    "name": "COHERENT CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "REL",
    "name": "RELX PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "O",
    "name": "REALTY INCOME REIT CORP",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LITE",
    "name": "LUMENTUM HOLDINGS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PRX",
    "name": "PROSUS NV CLASS N",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "AFL",
    "name": "AFLAC INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6752",
    "name": "PANASONIC HOLDINGS CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "LNG",
    "name": "CHENIERE ENERGY INC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EL",
    "name": "ESSILORLUXOTTICA SA",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "CIEN",
    "name": "CIENA CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VST",
    "name": "VISTRA CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KEYS",
    "name": "KEYSIGHT TECHNOLOGIES INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NOKIA",
    "name": "NOKIA",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Finland",
    "currency": "EUR"
  },
  {
    "symbol": "TRGP",
    "name": "TARGA RESOURCES CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SRE",
    "name": "SEMPRA",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ENGI",
    "name": "ENGIE SA",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "OKE",
    "name": "ONEOK INC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "STT",
    "name": "STATE STREET CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "F",
    "name": "FORD MOTOR CO",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "7741",
    "name": "HOYA CORP",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ATCO",
    "name": "A ATLAS COPCO CLASS A",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "VOLV",
    "name": "B VOLVO CLASS B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "BKR",
    "name": "BAKER HUGHES CLASS A",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DB1",
    "name": "DEUTSCHE BOERSE AG",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "BAYN",
    "name": "BAYER AG",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "ARGX",
    "name": "ARGENX",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Belgium",
    "currency": "EUR"
  },
  {
    "symbol": "AME",
    "name": "AMETEK INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "388",
    "name": "HONG KONG EXCHANGES AND CLEARING L",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "CAH",
    "name": "CARDINAL HEALTH INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "COR",
    "name": "CENCORA INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LSEG",
    "name": "LONDON STOCK EXCHANGE GROUP PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "9433",
    "name": "KDDI CORP",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "LHX",
    "name": "L3HARRIS TECHNOLOGIES INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MET",
    "name": "METLIFE INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BN",
    "name": "DANONE SA",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "NUE",
    "name": "NUCOR CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RHM",
    "name": "RHEINMETALL AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "CABK",
    "name": "CAIXABANK SA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "AZO",
    "name": "AUTOZONE INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ROK",
    "name": "ROCKWELL AUTOMATION INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CARR",
    "name": "CARRIER GLOBAL CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "APO",
    "name": "APOLLO GLOBAL MANAGEMENT INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LONN",
    "name": "LONZA GROUP AG",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "EBAY",
    "name": "EBAY INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FITB",
    "name": "FIFTH THIRD BANCORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "4502",
    "name": "TAKEDA PHARMACEUTICAL LTD",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "XEL",
    "name": "XCEL ENERGY INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "STAN",
    "name": "STANDARD CHARTERED PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "NKE",
    "name": "NIKE INC CLASS B",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CPG",
    "name": "COMPASS GROUP PLC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United Kingdom",
    "currency": "USD"
  },
  {
    "symbol": "DSV",
    "name": "DSV",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "FAST",
    "name": "FASTENAL",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PYPL",
    "name": "PAYPAL HOLDINGS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RMS",
    "name": "HERMES INTERNATIONAL",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "ETR",
    "name": "ENTERGY CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EOAN",
    "name": "E.ON N",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "ASM",
    "name": "ASM INTERNATIONAL NV",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "BAS",
    "name": "BASF N",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "DVN",
    "name": "DEVON ENERGY CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EA",
    "name": "ELECTRONIC ARTS INC",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WPM",
    "name": "WHEATON PRECIOUS METALS CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "EXC",
    "name": "EXELON CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AAL",
    "name": "ANGLO AMERICAN PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "EW",
    "name": "EDWARDS LIFESCIENCES CORP",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SREN",
    "name": "SWISS RE AG",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "FLEX",
    "name": "FLEX LTD",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AMP",
    "name": "AMERIPRISE FINANCE INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "2914",
    "name": "JAPAN TOBACCO INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ATD",
    "name": "ALIMENTATION COUCHE TARD INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "HUM",
    "name": "HUMANA INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PSA",
    "name": "PUBLIC STORAGE REIT",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8591",
    "name": "ORIX CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "RACE",
    "name": "FERRARI NV",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "AIG",
    "name": "AMERICAN INTERNATIONAL GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VTR",
    "name": "VENTAS REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ENI",
    "name": "ENI",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "HOLN",
    "name": "HOLCIM LTD AG",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "FERG",
    "name": "FERGUSON ENTERPRISES INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "7974",
    "name": "NINTENDO LTD",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "RSG",
    "name": "REPUBLIC SERVICES INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WAB",
    "name": "WESTINGHOUSE AIR BRAKE TECHNOLOGIE",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NBIS",
    "name": "NEBIUS NV CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Netherlands",
    "currency": "USD"
  },
  {
    "symbol": "BDX",
    "name": "BECTON DICKINSON",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DGE",
    "name": "DIAGEO PLC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "6723",
    "name": "RENESAS ELECTRONICS CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "HLN",
    "name": "HALEON PLC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "CVNA",
    "name": "CARVANA CLASS A",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IDXX",
    "name": "IDEXX LABORATORIES INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CMG",
    "name": "CHIPOTLE MEXICAN GRILL INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ADM",
    "name": "ARCHER DANIELS MIDLAND",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6367",
    "name": "DAIKIN INDUSTRIES LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ADSK",
    "name": "AUTODESK INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ODFL",
    "name": "OLD DOMINION FREIGHT LINE INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SE",
    "name": "SEA ADS REPRESENTING LTD CLASS A",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Singapore",
    "currency": "USD"
  },
  {
    "symbol": "XYZ",
    "name": "BLOCK INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SLF",
    "name": "SUN LIFE FINANCIAL INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "TTWO",
    "name": "TAKE TWO INTERACTIVE SOFTWARE INC",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MCHP",
    "name": "MICROCHIP TECHNOLOGY INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "5803",
    "name": "FUJIKURA LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "NDAQ",
    "name": "NASDAQ INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8002",
    "name": "MARUBENI CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "HIG",
    "name": "HARTFORD INSURANCE GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8750",
    "name": "DAIICHI LIFE GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "MSCI",
    "name": "MSCI INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TSCO",
    "name": "TESCO PLC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "WCN",
    "name": "WASTE CONNECTIONS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RIO",
    "name": "RIO TINTO LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "8053",
    "name": "SUMITOMO CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ALAB",
    "name": "ASTERA LABS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "STMPA",
    "name": "STMICROELECTRONICS NV",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "CBRE",
    "name": "CBRE GROUP INC CLASS A",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MTB",
    "name": "M&T BANK",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "U11",
    "name": "UNITED OVERSEAS BANK LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Singapore",
    "currency": "SGD"
  },
  {
    "symbol": "FNV",
    "name": "FRANCO NEVADA CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "G",
    "name": "ASSICURAZIONI GENERALI",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "GMG",
    "name": "GOODMAN GROUP UNITS",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "OXY",
    "name": "OCCIDENTAL PETROLEUM CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "5802",
    "name": "SUMITOMO ELECTRIC INDUSTRIES LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "RKT",
    "name": "RECKITT BENCKISER GROUP PLC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "SYY",
    "name": "SYSCO CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CVE",
    "name": "CENOVUS ENERGY",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "LR",
    "name": "LEGRAND SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "WDS",
    "name": "WOODSIDE ENERGY GROUP LTD",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "IBKR",
    "name": "INTERACTIVE BROKERS GROUP INC CLAS",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PRU",
    "name": "PRUDENTIAL FINANCIAL INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8725",
    "name": "MS&AD INSURANCE GROUP HOLDINGS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "KDP",
    "name": "KEURIG DR PEPPER INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EBS",
    "name": "ERSTE GROUP BANK AG",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Austria",
    "currency": "EUR"
  },
  {
    "symbol": "YUM",
    "name": "YUM BRANDS INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CSL",
    "name": "CSL LTD",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "PRY",
    "name": "PRYSMIAN",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "PRU",
    "name": "PRUDENTIAL PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "RWE",
    "name": "RWE AG",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "COIN",
    "name": "COINBASE GLOBAL INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AD",
    "name": "KONINKLIJKE AHOLD DELHAIZE NV",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "GRMN",
    "name": "GARMIN LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MBG",
    "name": "MERCEDES-BENZ GROUP N AG",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "A",
    "name": "AGILENT TECHNOLOGIES INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CLS",
    "name": "CELESTICA INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "8630",
    "name": "SOMPO HOLDINGS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ED",
    "name": "CONSOLIDATED EDISON INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GALD",
    "name": "GALDERMA GROUP N AG",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "AXON",
    "name": "AXON ENTERPRISE INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CCO",
    "name": "CAMECO CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "PEG",
    "name": "PUBLIC SERVICE ENTERPRISE GROUP IN",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GIVN",
    "name": "GIVAUDAN SA",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "PCG",
    "name": "PG&E CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "9434",
    "name": "SOFTBANK CORP",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "SSE",
    "name": "SSE PLC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "6301",
    "name": "KOMATSU LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "DHI",
    "name": "D R HORTON INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "UCB",
    "name": "UCB SA",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Belgium",
    "currency": "EUR"
  },
  {
    "symbol": "7267",
    "name": "HONDA MOTOR LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "SAND",
    "name": "SANDVIK",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "TEVA",
    "name": "TEVA PHARMACEUTICAL INDUSTRIES ADR",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Israel",
    "currency": "USD"
  },
  {
    "symbol": "6146",
    "name": "DISCO CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ON",
    "name": "ON SEMICONDUCTOR CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6954",
    "name": "FANUC CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "SGO",
    "name": "COMPAGNIE DE SAINT GOBAIN SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "CSU",
    "name": "CONSTELLATION SOFTWARE INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "HBAN",
    "name": "HUNTINGTON BANCSHARES INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "7182",
    "name": "JAPAN POST BANK LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ROP",
    "name": "ROPER TECHNOLOGIES INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RKLB",
    "name": "ROCKET LAB CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IRM",
    "name": "IRON MOUNTAIN INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ORA",
    "name": "ORANGE SA",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "STLD",
    "name": "STEEL DYNAMICS INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ALNY",
    "name": "ALNYLAM PHARMACEUTICALS INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IQV",
    "name": "IQVIA HOLDINGS INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KR",
    "name": "KROGER",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IFC",
    "name": "INTACT FINANCIAL CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "ACGL",
    "name": "ARCH CAPITAL GROUP LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PAYX",
    "name": "PAYCHEX INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KVUE",
    "name": "KENVUE INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EXPE",
    "name": "EXPEDIA GROUP INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6702",
    "name": "FUJITSU LTD",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ALC",
    "name": "ALCON AG",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "FANG",
    "name": "DIAMONDBACK ENERGY INC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CNC",
    "name": "CENTENE CORP",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NTRS",
    "name": "NORTHERN TRUST CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EME",
    "name": "EMCOR GROUP INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LUMI",
    "name": "BANK LEUMI LE ISRAEL",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Israel",
    "currency": "ILS"
  },
  {
    "symbol": "WAT",
    "name": "WATERS CORP",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KMB",
    "name": "KIMBERLY CLARK CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DOL",
    "name": "DOLLARAMA INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "CRDO",
    "name": "CREDO TECHNOLOGY GROUP HOLDING LTD",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VMC",
    "name": "VULCAN MATERIALS",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "REP",
    "name": "REPSOL SA",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "POW",
    "name": "POWER CORPORATION OF CANADA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "DANSKE",
    "name": "DANSKE BANK",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "ADS",
    "name": "ADIDAS N AG",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "FER",
    "name": "FERROVIAL NV",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "JBL",
    "name": "JABIL INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CCL",
    "name": "CARNIVAL CORP LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WEC",
    "name": "WEC ENERGY GROUP INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6762",
    "name": "TDK CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "SEB",
    "name": "A SKANDINAVISKA ENSKILDA BANKEN",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "MLM",
    "name": "MARTIN MARIETTA MATERIALS INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6701",
    "name": "NEC CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ASSA",
    "name": "B ASSA ABLOY B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "ZTS",
    "name": "ZOETIS INC CLASS A",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "III",
    "name": "3I GROUP PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "CCI",
    "name": "CROWN CASTLE INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NTRA",
    "name": "NATERA INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SDZ",
    "name": "SANDOZ GROUP AG",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "CBK",
    "name": "COMMERZBANK AG",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "SLHN",
    "name": "SWISS LIFE HOLDING AG",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "NTR",
    "name": "NUTRIEN LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "SWED",
    "name": "A SWEDBANK",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "FFH",
    "name": "FAIRFAX FINANCIAL HOLDINGS SUB VOT",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "WOW",
    "name": "WOOLWORTHS GROUP LTD",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "CASY",
    "name": "CASEYS GENERAL STORES INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KBC",
    "name": "KBC GROEP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Belgium",
    "currency": "EUR"
  },
  {
    "symbol": "TCL",
    "name": "TRANSURBAN GROUP STAPLED UNITS",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "EXPN",
    "name": "EXPERIAN PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "NTAP",
    "name": "NETAPP INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IR",
    "name": "INGERSOLL RAND INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RJF",
    "name": "RAYMOND JAMES INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AEE",
    "name": "AMEREN CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TWLO",
    "name": "TWILIO INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EQT",
    "name": "EQT CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "4568",
    "name": "DAIICHI SANKYO LTD",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "DOV",
    "name": "DOVER CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "4519",
    "name": "CHUGAI PHARMACEUTICAL LTD",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "WDAY",
    "name": "WORKDAY INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ILMN",
    "name": "ILLUMINA INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FTI",
    "name": "TECHNIPFMC PLC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "Q",
    "name": "QNITY ELECTRONICS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FTS",
    "name": "FORTIS INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "L",
    "name": "LOBLAW COMPANIES LTD",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "K",
    "name": "KINROSS GOLD CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "DTE",
    "name": "DTE ENERGY",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CFG",
    "name": "CITIZENS FINANCIAL GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RBLX",
    "name": "ROBLOX CORP CLASS A",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EIX",
    "name": "EDISON INTERNATIONAL",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SIKA",
    "name": "SIKA AG",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "TPR",
    "name": "TAPESTRY INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EXR",
    "name": "EXTRA SPACE STORAGE REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VEEV",
    "name": "VEEVA SYSTEMS INC CLASS A",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6971",
    "name": "KYOCERA CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "AER",
    "name": "AERCAP HOLDINGS NV",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Netherlands",
    "currency": "USD"
  },
  {
    "symbol": "FICO",
    "name": "FAIR ISAAC CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "POLI",
    "name": "BANK HAPOALIM BM",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Israel",
    "currency": "ILS"
  },
  {
    "symbol": "5108",
    "name": "BRIDGESTONE CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "RF",
    "name": "REGIONS FINANCIAL CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8802",
    "name": "MITSUBISHI ESTATE CO LTD",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "VOD",
    "name": "VODAFONE GROUP PLC",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "4578",
    "name": "OTSUKA HOLDINGS LTD",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "SUNB",
    "name": "SUNBELT RENTALS HOLDINGS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "FISV",
    "name": "FISERV INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ATCO",
    "name": "B ATLAS COPCO CLASS B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "WTW",
    "name": "WILLIS TOWERS WATSON PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DXCM",
    "name": "DEXCOM INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CHRW",
    "name": "CH ROBINSON WORLDWIDE INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RMD",
    "name": "RESMED INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "OTIS",
    "name": "OTIS WORLDWIDE CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8604",
    "name": "NOMURA HOLDINGS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "2802",
    "name": "AJINOMOTO INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "PPL",
    "name": "PEMBINA PIPELINE CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "SYF",
    "name": "SYNCHRONY FINANCIAL",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MT",
    "name": "ARCELORMITTAL SA",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "IMB",
    "name": "IMPERIAL BRANDS PLC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "FE",
    "name": "FIRSTENERGY CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6178",
    "name": "JAPAN POST HOLDINGS LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "VRSK",
    "name": "VERISK ANALYTICS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LYV",
    "name": "LIVE NATION ENTERTAINMENT INC",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VICI",
    "name": "VICI PPTYS INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NRG",
    "name": "NRG ENERGY INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BIIB",
    "name": "BIOGEN INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "9432",
    "name": "NTT INC",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "VIE",
    "name": "VEOLIA ENVIRON. SA",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "TSEM",
    "name": "TOWER SEMICONDUCTOR LTD",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Israel",
    "currency": "ILS"
  },
  {
    "symbol": "LPLA",
    "name": "LPL FINANCIAL HOLDINGS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TDY",
    "name": "TELEDYNE TECHNOLOGIES INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8015",
    "name": "TOYOTA TSUSHO CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "CBOE",
    "name": "CBOE GLOBAL MARKETS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VWS",
    "name": "VESTAS WIND SYSTEMS",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "HAL",
    "name": "HALLIBURTON",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AV.",
    "name": "AVIVA PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "ALL",
    "name": "ARISTOCRAT LEISURE LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "EQNR",
    "name": "EQUINOR",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Norway",
    "currency": "NOK"
  },
  {
    "symbol": "GEHC",
    "name": "GE HEALTHCARE TECHNOLOGIES INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "Z74",
    "name": "SINGAPORE TELECOMMUNICATIONS LTD",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Singapore",
    "currency": "SGD"
  },
  {
    "symbol": "PFG",
    "name": "PRINCIPAL FINANCIAL GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DG",
    "name": "DOLLAR GENERAL CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "QBE",
    "name": "QBE INSURANCE GROUP LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "XYL",
    "name": "XYLEM INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AVB",
    "name": "AVALONBAY COMMUNITIES REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CW",
    "name": "CURTISS WRIGHT CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RVMD",
    "name": "REVOLUTION MEDICINES INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ES",
    "name": "EVERSOURCE ENERGY",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "669",
    "name": "TECHTRONIC INDUSTRIES LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "PPG",
    "name": "PPG INDUSTRIES INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MSTR",
    "name": "STRATEGY INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WST",
    "name": "WEST PHARMACEUTICAL SERVICES INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HO",
    "name": "THALES SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "PHM",
    "name": "PULTEGROUP INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8801",
    "name": "MITSUI FUDOSAN LTD",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "CINF",
    "name": "CINCINNATI FINANCIAL CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WSM",
    "name": "WILLIAMS SONOMA INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MDB",
    "name": "MONGODB INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MKL",
    "name": "MARKEL GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8308",
    "name": "RESONA HOLDINGS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "CPAY",
    "name": "CORPAY INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ATO",
    "name": "ATMOS ENERGY CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "4062",
    "name": "IBIDEN LTD",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "DLTR",
    "name": "DOLLAR TREE INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ARES",
    "name": "ARES MANAGEMENT CORP CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "7751",
    "name": "CANON INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "HEI",
    "name": "HEIDELBERG MATERIALS AG",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "AMS",
    "name": "AMADEUS IT GROUP SA",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "CNP",
    "name": "CENTERPOINT ENERGY INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DNB",
    "name": "DNB BANK",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Norway",
    "currency": "NOK"
  },
  {
    "symbol": "SAMPO",
    "name": "SAMPO CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Finland",
    "currency": "EUR"
  },
  {
    "symbol": "BMPS",
    "name": "BANCA MONTE DEI PASCHI DI SIENA SP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "ABN",
    "name": "ABN AMRO BANK NV",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "ERIC",
    "name": "B ERICSSON B",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "LH",
    "name": "LABCORP HOLDINGS INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MTD",
    "name": "METTLER TOLEDO INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RPRX",
    "name": "ROYALTY PHARMA PLC CLASS A",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AWK",
    "name": "AMERICAN WATER WORKS INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ML",
    "name": "MICHELIN",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "XPO",
    "name": "XPO INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "OMC",
    "name": "OMNICOM GROUP INC",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TECK.B",
    "name": "TECK RESOURCES SUBORDINATE VOTING",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "1",
    "name": "CK HUTCHISON HOLDINGS LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "2388",
    "name": "BOC HONG KONG HOLDINGS LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "CPRT",
    "name": "COPART INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PPL",
    "name": "PPL CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FFIV",
    "name": "F5 INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NXT",
    "name": "NEXT PLC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "AMRZ",
    "name": "AMRIZE AG",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HUBB",
    "name": "HUBBELL INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8309",
    "name": "SUMITOMO MITSUI TRUST GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "IHG",
    "name": "INTERCONTINENTAL HOTELS GROUP PLC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United Kingdom",
    "currency": "USD"
  },
  {
    "symbol": "CCEP",
    "name": "COCA COLA EUROPACIFIC PARTNERS PLC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Netherlands",
    "currency": "USD"
  },
  {
    "symbol": "JBHT",
    "name": "JB HUNT TRANSPORT SERVICES INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "4503",
    "name": "ASTELLAS PHARMA INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "HEIA",
    "name": "HEINEKEN NV",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "TPL",
    "name": "TEXAS PACIFIC LAND CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EQR",
    "name": "EQUITY RESIDENTIAL REIT",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ACS",
    "name": "ACS ACTIVIDADES DE CONSTRUCCION Y",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "HPQ",
    "name": "HP INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NN",
    "name": "NN GROUP NV",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "4901",
    "name": "FUJIFILM HOLDINGS CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "CHD",
    "name": "CHURCH AND DWIGHT INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EXPD",
    "name": "EXPEDITORS INTERNATIONAL OF WASHIN",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DGX",
    "name": "QUEST DIAGNOSTICS INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HSY",
    "name": "HERSHEY FOODS",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "UTHR",
    "name": "UNITED THERAPEUTICS CORP",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ADYEN",
    "name": "ADYEN NV",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "KHC",
    "name": "KRAFT HEINZ",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "OKTA",
    "name": "OKTA INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "5020",
    "name": "ENEOS HOLDINGS INC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ESLT",
    "name": "ELBIT SYSTEMS LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Israel",
    "currency": "ILS"
  },
  {
    "symbol": "ULTA",
    "name": "ULTA BEAUTY INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6902",
    "name": "DENSO CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "UMG",
    "name": "UNIVERSAL MUSIC GROUP NV",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "16",
    "name": "SUN HUNG KAI PROPERTIES LTD",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "AENA",
    "name": "AENA SME SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "6273",
    "name": "SMC (JAPAN) CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "INSM",
    "name": "INSMED INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PUB",
    "name": "PUBLICIS GROUPE SA",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "BMW",
    "name": "BMW AG",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "BPE",
    "name": "BPER BANCA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "LDO",
    "name": "LEONARDO FINMECCANICA SPA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "DTG",
    "name": "DAIMLER TRUCK HOLDING E AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "P",
    "name": "EVERPURE INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "3382",
    "name": "SEVEN & I HOLDINGS LTD",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "TROW",
    "name": "T ROWE PRICE GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BURL",
    "name": "BURLINGTON STORES INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DRI",
    "name": "DARDEN RESTAURANTS INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VRSN",
    "name": "VERISIGN INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FIS",
    "name": "FIDELITY NATIONAL INFORMATION SERV",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FMG",
    "name": "FORTESCUE LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "A5G",
    "name": "AIB GROUP PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Ireland",
    "currency": "EUR"
  },
  {
    "symbol": "CMS",
    "name": "CMS ENERGY CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CRWV",
    "name": "COREWEAVE INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VLTO",
    "name": "VERALTO CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BBD.B",
    "name": "BOMBARDIER INC CLASS B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "MTZ",
    "name": "MASTEC INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LGEN",
    "name": "LEGAL AND GENERAL GROUP PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "MTX",
    "name": "MTU AERO ENGINES HOLDING AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "ENTG",
    "name": "ENTEGRIS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FTV",
    "name": "FORTIVE CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FRE",
    "name": "FRESENIUS SE AND CO KGAA",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "SW",
    "name": "SMURFIT WESTROCK PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "STZ",
    "name": "CONSTELLATION BRANDS INC CLASS A",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FTAI",
    "name": "FTAI AVIATION LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KEY",
    "name": "KEYCORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IMO",
    "name": "IMPERIAL OIL LTD",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "DOW",
    "name": "DOW INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FM",
    "name": "FIRST QUANTUM MINERALS LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "ICSUAGD",
    "name": "BLK ICS USD LIQ AGENCY DIS",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Money Market",
    "weight": 0.02,
    "location": "Ireland",
    "currency": "USD"
  },
  {
    "symbol": "CF",
    "name": "CF INDUSTRIES HOLDINGS INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RS",
    "name": "RELIANCE STEEL & ALUMINUM",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "QSR",
    "name": "RESTAURANTS BRANDS INTERNATIONAL I",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "ACA",
    "name": "CREDIT AGRICOLE SA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "NSIS",
    "name": "B NOVOZYMES B",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "FSLR",
    "name": "FIRST SOLAR INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ZM",
    "name": "ZOOM COMMUNICATIONS INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EXE",
    "name": "EXPAND ENERGY CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VACN",
    "name": "VAT GROUP AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "6920",
    "name": "LASERTEC CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "BAMI",
    "name": "BANCO BPM",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "NI",
    "name": "NISOURCE INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "COL",
    "name": "COLES GROUP LTD",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "BIRG",
    "name": "BANK OF IRELAND GROUP PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Ireland",
    "currency": "EUR"
  },
  {
    "symbol": "EFX",
    "name": "EQUIFAX INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HBAN",
    "name": "HELVETIA BALOISE HOLDING N AG",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "GIS",
    "name": "GENERAL MILLS INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PHIA",
    "name": "KONINKLIJKE PHILIPS NV",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "SNA",
    "name": "SNAP ON INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SHB",
    "name": "A SVENSKA HANDELSBANKEN-A SHS",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "CTSH",
    "name": "COGNIZANT TECHNOLOGY SOLUTIONS COR",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "9020",
    "name": "EAST JAPAN RAILWAY",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "HLMA",
    "name": "HALMA PLC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "GBP",
    "name": "GBP CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.02,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "GEBN",
    "name": "GEBERIT AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "1605",
    "name": "INPEX CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "KER",
    "name": "KERING SA",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "L",
    "name": "LOEWS CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PKG",
    "name": "PACKAGING CORP OF AMERICA",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "STE",
    "name": "STERIS",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DD",
    "name": "DUPONT DE NEMOURS INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PAAS",
    "name": "PAN AMERICAN SILVER CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "GPN",
    "name": "GLOBAL PAYMENTS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AFRM",
    "name": "AFFIRM HOLDINGS INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BESI",
    "name": "BE SEMICONDUCTOR INDUSTRIES NV",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "NBIX",
    "name": "NEUROCRINE BIOSCIENCES INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LNT",
    "name": "ALLIANT ENERGY CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BRO",
    "name": "BROWN & BROWN INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AMCR",
    "name": "AMCOR PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RBA",
    "name": "RB GLOBAL INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "KPN",
    "name": "KONINKLIJKE KPN NV",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "INCY",
    "name": "INCYTE CORP",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "7269",
    "name": "SUZUKI MOTOR CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "SOFI",
    "name": "SOFI TECHNOLOGIES INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KNEBV",
    "name": "KONE",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Finland",
    "currency": "EUR"
  },
  {
    "symbol": "SAB",
    "name": "BANCO DE SABADELL",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "RDDT",
    "name": "REDDIT INC CLASS A",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FN",
    "name": "FABRINET",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DSFIR",
    "name": "DSM FIRMENICH AG",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "FWONK",
    "name": "LIBERTY MEDIA FORMULA ONE SERIES C",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ALFA",
    "name": "ALFA LAVAL",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "BAER",
    "name": "JULIUS BAER GRUPPE AG",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "PGHN",
    "name": "PARTNERS GROUP HOLDING AG",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "MRK",
    "name": "MERCK",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "BAM",
    "name": "BROOKFIELD ASSET MANAGEMENT VOTING",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "INF",
    "name": "INFORMA PLC",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "BALL",
    "name": "BALL CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EVRG",
    "name": "EVERGY INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TXT",
    "name": "TEXTRON INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "9022",
    "name": "CENTRAL JAPAN RAILWAY",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "LEN",
    "name": "LENNAR A CORP CLASS A",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GMAB",
    "name": "GENMAB",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "8267",
    "name": "AEON LTD",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "SBAC",
    "name": "SBA COMMUNICATIONS REIT CORP CLASS",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FLUT",
    "name": "FLUTTER ENTERTAINMENT PLC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NST",
    "name": "NORTHERN STAR RESOURCES LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "5401",
    "name": "NIPPON STEEL CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "BT.A",
    "name": "BT GROUP PLC",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "NVR",
    "name": "NVR INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "4452",
    "name": "KAO CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "HEIA",
    "name": "HEICO CORP CLASS A",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IFF",
    "name": "INTERNATIONAL FLAVORS & FRAGRANCES",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SAAB",
    "name": "B SAAB CLASS B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "IP",
    "name": "INTERNATIONAL PAPER",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EL",
    "name": "ESTEE LAUDER INC CLASS A",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FBK",
    "name": "FINECOBANK BANCA FINECO",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "ZBH",
    "name": "ZIMMER BIOMET HOLDINGS INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LII",
    "name": "LENNOX INTERNATIONAL INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BG",
    "name": "BUNGE GLOBAL SA",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "4543",
    "name": "TERUMO CORP",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "MG",
    "name": "MAGNA INTERNATIONAL INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "BXB",
    "name": "BRAMBLES LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "VNA",
    "name": "VONOVIA SE",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "SGSN",
    "name": "SGS SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "FDXF",
    "name": "FEDEX FREIGHT HOLDING COMPANY INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HEXA",
    "name": "B HEXAGON CLASS B",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "SCMN",
    "name": "SWISSCOM AG",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "7936",
    "name": "ASICS CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "TOU",
    "name": "TOURMALINE OIL CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "2",
    "name": "CLP HOLDINGS LTD",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "EPI",
    "name": "A EPIROC CLASS A",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "BZFUT",
    "name": "CASH COLLATERAL USD BZFUT",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash Collateral and Margins",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "INVH",
    "name": "INVITATION HOMES INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TSN",
    "name": "TYSON FOODS INC CLASS A",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ESS",
    "name": "ESSEX PROPERTY TRUST REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "9735",
    "name": "SECOM LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ANTO",
    "name": "ANTOFAGASTA PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "4661",
    "name": "ORIENTAL LAND LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ESSITY",
    "name": "B ESSITY CLASS B",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "MAA",
    "name": "MID AMERICA APARTMENT COMMUNITIES",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CCH",
    "name": "COCA COLA HBC AG",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "STO",
    "name": "SANTOS LTD",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "MAS",
    "name": "MASCO CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PST",
    "name": "POSTE ITALIANE",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "WRT1V",
    "name": "WARTSILA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Finland",
    "currency": "EUR"
  },
  {
    "symbol": "7013",
    "name": "IHI CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "BBY",
    "name": "BEST BUY INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WY",
    "name": "WEYERHAEUSER REIT",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CDW",
    "name": "CDW CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EQT",
    "name": "EQT",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "WSP",
    "name": "WSP GLOBAL INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "J",
    "name": "JACOBS SOLUTIONS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GPC",
    "name": "GENUINE PARTS",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TEF",
    "name": "TELEFONICA SA",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "REG",
    "name": "REGENCY CENTERS REIT CORP",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KIM",
    "name": "KIMCO REALTY REIT CORP",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EUR",
    "name": "EUR CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.02,
    "location": "European Union",
    "currency": "EUR"
  },
  {
    "symbol": "VOW3",
    "name": "VOLKSWAGEN NON-VOTING PREF AG",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "HNR1",
    "name": "HANNOVER RUECK",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "FCNCA",
    "name": "FIRST CITIZENS BANCSHARES INC CLAS",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SCG",
    "name": "SCENTRE GROUP",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "MRU",
    "name": "METRO INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "NESTE",
    "name": "NESTE",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Finland",
    "currency": "EUR"
  },
  {
    "symbol": "CAP",
    "name": "CAPGEMINI",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "GWO",
    "name": "GREAT WEST LIFECO INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "CDE",
    "name": "COEUR MINING INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "4004",
    "name": "RESONAC HOLDINGS",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "EG",
    "name": "EVEREST GROUP LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WRB",
    "name": "WR BERKLEY CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6361",
    "name": "EBARA CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "WKL",
    "name": "WOLTERS KLUWER NV",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "WN",
    "name": "GEORGE WESTON LTD",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "LOGN",
    "name": "LOGITECH INTERNATIONAL SA",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "WPC",
    "name": "W. P. CAREY REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CSL",
    "name": "CARLISLE COMPANIES INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BR",
    "name": "BROADRIDGE FINANCIAL SOLUTIONS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "8830",
    "name": "SUMITOMO REALTY & DEVELOPMENT LTD",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "LUN",
    "name": "LUNDIN MINING CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "7832",
    "name": "BANDAI NAMCO HOLDINGS INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "IEX",
    "name": "IDEX CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6326",
    "name": "KUBOTA CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "2503",
    "name": "KIRIN HOLDINGS LTD",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "BOL",
    "name": "BOLIDEN",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "URW",
    "name": "UNIBAIL RODAMCO WE STAPLED UNITS",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "ZS",
    "name": "ZSCALER INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ARX",
    "name": "ARC RESOURCES LTD",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "9503",
    "name": "KANSAI ELECTRIC POWER INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "DECK",
    "name": "DECKERS OUTDOOR CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EMA",
    "name": "EMERA INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "BG",
    "name": "BAWAG GROUP AG",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Austria",
    "currency": "EUR"
  },
  {
    "symbol": "SUN",
    "name": "SUNCORP GROUP LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "1925",
    "name": "DAIWA HOUSE INDUSTRY LTD",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "NDSN",
    "name": "NORDSON CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GEN",
    "name": "GEN DIGITAL INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FPH",
    "name": "FISHER AND PAYKEL HEALTHCARE CORPO",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "New Zealand",
    "currency": "NZD"
  },
  {
    "symbol": "FOXA",
    "name": "FOX CORP CLASS A",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SSNC",
    "name": "SS AND C TECHNOLOGIES HOLDINGS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HEN3",
    "name": "HENKEL & KGAA PREF AG",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "TRI",
    "name": "THOMSON REUTERS CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "EVN",
    "name": "EVOLUTION MINING LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "8795",
    "name": "T&D HOLDINGS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "3407",
    "name": "ASAHI KASEI CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "9101",
    "name": "NIPPON YUSEN",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "EDP",
    "name": "EDP ENERGIAS DE PORTUGAL SA",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Portugal",
    "currency": "EUR"
  },
  {
    "symbol": "TRU",
    "name": "TRANSUNION",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PTC",
    "name": "PTC INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "UPM",
    "name": "UPM-KYMMENE",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Finland",
    "currency": "EUR"
  },
  {
    "symbol": "8601",
    "name": "DAIWA SECURITIES GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ORG",
    "name": "ORIGIN ENERGY LTD",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "HEI",
    "name": "HEICO CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LYB",
    "name": "LYONDELLBASELL INDUSTRIES CLASS A",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TRN",
    "name": "TERNA RETE ELETTRICA NAZIONALE",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "GIB.A",
    "name": "CGI INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "S63",
    "name": "SINGAPORE TECHNOLOGIES ENGINEERING",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Singapore",
    "currency": "SGD"
  },
  {
    "symbol": "TSCO",
    "name": "TRACTOR SUPPLY",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MDLN",
    "name": "MEDLINE INC CLASS A",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NLY",
    "name": "ANNALY CAPITAL MANAGEMENT REIT INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KNIN",
    "name": "KUEHNE UND NAGEL INTERNATIONAL AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "PNFP",
    "name": "PINNACLE FINANCIAL PARTNERS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RI",
    "name": "PERNOD RICARD SA",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "COO",
    "name": "COOPER INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CLNX",
    "name": "CELLNEX TELECOM",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "KRZ",
    "name": "KERRY GROUP PLC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Ireland",
    "currency": "EUR"
  },
  {
    "symbol": "DSY",
    "name": "DASSAULT SYSTEMES",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "SPSN",
    "name": "SWISS PRIME SITE AG",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "6383",
    "name": "DAIFUKU LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "TEAM",
    "name": "ATLASSIAN CORP CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LDOS",
    "name": "LEIDOS HOLDINGS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AGN",
    "name": "AEGON LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "SUI",
    "name": "SUN COMMUNITIES REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ASTS",
    "name": "AST SPACEMOBILE INC CLASS A",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "823",
    "name": "LINK REAL ESTATE INVESTMENT TRUST",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "SHL",
    "name": "SIEMENS HEALTHINEERS AG",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "4507",
    "name": "SHIONOGI LTD",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "WCP",
    "name": "WHITECAP RESOURCES INC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "CPU",
    "name": "COMPUTERSHARE LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "1812",
    "name": "KAJIMA CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "LVS",
    "name": "LAS VEGAS SANDS CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "9104",
    "name": "MITSUI OSK LINES LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "IAG",
    "name": "INSURANCE AUSTRALIA GROUP LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "5801",
    "name": "FURUKAWA ELECTRIC LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "TRMB",
    "name": "TRIMBLE INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ROL",
    "name": "ROLLINS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "9532",
    "name": "OSAKA GAS LTD",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "8697",
    "name": "JAPAN EXCHANGE GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "RTO",
    "name": "RENTOKIL INITIAL PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "S32",
    "name": "SOUTH32 LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "RCI.B",
    "name": "ROGERS COMMUNICATIONS NON-VOTING I",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "UU.",
    "name": "UNITED UTILITIES GROUP PLC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "1113",
    "name": "CK ASSET HOLDINGS LTD",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "SGRO",
    "name": "SEGRO REIT PLC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "2502",
    "name": "ASAHI GROUP HOLDINGS LTD",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "IREN",
    "name": "IREN LTD",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "6594",
    "name": "NIDEC CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "TOST",
    "name": "TOAST INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SMCI",
    "name": "SUPER MICRO COMPUTER INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AGS",
    "name": "AGEAS SA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Belgium",
    "currency": "EUR"
  },
  {
    "symbol": "6",
    "name": "POWER ASSETS HOLDINGS LTD",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "ECHO",
    "name": "ECHOSTAR CORP CLASS A",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "STMN",
    "name": "STRAUMANN HOLDING AG",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "TLS",
    "name": "TELSTRA GROUP LTD",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "IOT",
    "name": "SAMSARA INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "1801",
    "name": "TAISEI CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "SRG",
    "name": "SNAM",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "7453",
    "name": "RYOHIN KEIKAKU LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "LULU",
    "name": "LULULEMON ATHLETICA INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NVMI",
    "name": "NOVA LTD",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Israel",
    "currency": "ILS"
  },
  {
    "symbol": "FNF",
    "name": "FIDELITY NATIONAL FINANCIAL INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RPM",
    "name": "RPM INTERNATIONAL INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MKC",
    "name": "MCCORMICK & CO NON-VOTING INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ELE",
    "name": "ENDESA SA",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "DAL",
    "name": "DELTA AIR LINES INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SN",
    "name": "SHARKNINJA INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AVY",
    "name": "AVERY DENNISON CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SY1",
    "name": "SYMRISE AG",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "TYL",
    "name": "TYLER TECHNOLOGIES INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ENLT",
    "name": "ENLIGHT RENEWABLE ENERGY LTD",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Israel",
    "currency": "ILS"
  },
  {
    "symbol": "APTV",
    "name": "APTIV PLC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "H",
    "name": "HYDRO ONE LTD",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "BNZL",
    "name": "BUNZL",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "TIT",
    "name": "TELECOM ITALIA",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "CNA",
    "name": "CENTRICA PLC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "MONC",
    "name": "MONCLER",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "APA",
    "name": "APA GROUP UNITS",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "5016",
    "name": "JX ADVANCED METALS CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "SMIN",
    "name": "SMITHS GROUP PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "METSO",
    "name": "METSO CORPORATION",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Finland",
    "currency": "EUR"
  },
  {
    "symbol": "DKS",
    "name": "DICKS SPORTING INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RKT",
    "name": "ROCKET COMPANIES INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AGI",
    "name": "ALAMOS GOLD INC CLASS A",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "TIH",
    "name": "TOROMONT INDUSTRIES LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "PHOE",
    "name": "PHOENIX FINANCIAL LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Israel",
    "currency": "ILS"
  },
  {
    "symbol": "4307",
    "name": "NOMURA RESEARCH INSTITUTE LTD",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "CHKP",
    "name": "CHECK POINT SOFTWARE TECHNOLOGIES",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Israel",
    "currency": "USD"
  },
  {
    "symbol": "1928",
    "name": "SEKISUI HOUSE LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "RYA",
    "name": "RYANAIR HOLDINGS PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Ireland",
    "currency": "EUR"
  },
  {
    "symbol": "6988",
    "name": "NITTO DENKO CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ASRNL",
    "name": "ASR NEDERLAND NV",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "9531",
    "name": "TOKYO GAS LTD",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "1802",
    "name": "OBAYASHI CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ORSTED",
    "name": "ORSTED A/S",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "7735",
    "name": "SCREEN HOLDINGS LTD",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "CARL",
    "name": "B CARLSBERG AS CL B",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "DSCT",
    "name": "ISRAEL DISCOUNT BANK LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Israel",
    "currency": "ILS"
  },
  {
    "symbol": "GGG",
    "name": "GRACO INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BKT",
    "name": "BANKINTER SA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "RO",
    "name": "ROCHE HOLDING AG",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "NHY",
    "name": "NORSK HYDRO",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Norway",
    "currency": "NOK"
  },
  {
    "symbol": "CHTR",
    "name": "CHARTER COMMUNICATIONS INC CLASS A",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "7012",
    "name": "KAWASAKI HEAVY INDUSTRIES LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "KRX",
    "name": "KINGSPAN GROUP PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Ireland",
    "currency": "EUR"
  },
  {
    "symbol": "WSO",
    "name": "WATSCO INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TFII",
    "name": "TFI INTERNATIONAL INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "ADM",
    "name": "ADMIRAL GROUP PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "TEN",
    "name": "TENARIS SA",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "KOG",
    "name": "KONGSBERG GRUPPEN",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Norway",
    "currency": "NOK"
  },
  {
    "symbol": "6504",
    "name": "FUJI ELECTRIC LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "BN4",
    "name": "KEPPEL LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Singapore",
    "currency": "SGD"
  },
  {
    "symbol": "CLX",
    "name": "CLOROX",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "9502",
    "name": "CHUBU ELECTRIC POWER INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "LISN",
    "name": "CHOCOLADEFABRIKEN LINDT & SPRUENGL",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "GALP",
    "name": "GALP ENERGIA SGPS SA CLASS B",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Portugal",
    "currency": "EUR"
  },
  {
    "symbol": "UNI",
    "name": "UNIPOL ASSICURAZIONI SPA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "SOON",
    "name": "SONOVA HOLDING AG",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "MAERSK",
    "name": "B A P MOLLER MAERSK B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "ALLE",
    "name": "ALLEGION PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SCHP",
    "name": "SCHINDLER HOLDING PAR AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "MNG",
    "name": "M&G PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "SN.",
    "name": "SMITH AND NEPHEW PLC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "PNDORA",
    "name": "PANDORA",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "7733",
    "name": "OLYMPUS CORP",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "IAG",
    "name": "IA FINANCIAL INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "8473",
    "name": "SBI HOLDINGS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "PSON",
    "name": "PEARSON PLC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "EN",
    "name": "BOUYGUES SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "CSGP",
    "name": "COSTAR GROUP INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RIVN",
    "name": "RIVIAN AUTOMOTIVE INC CLASS A",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "G1A",
    "name": "GEA GROUP AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "5713",
    "name": "SUMITOMO METAL MINING LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "GFL",
    "name": "GFL ENVIRONMENTAL SUBORDINATE VOTI",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "STLAM",
    "name": "STELLANTIS NV",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "S68",
    "name": "SINGAPORE EXCHANGE LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Singapore",
    "currency": "SGD"
  },
  {
    "symbol": "SVT",
    "name": "SEVERN TRENT PLC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "GLPI",
    "name": "GAMING AND LEISURE PROPERTIES REIT",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ENX",
    "name": "EURONEXT NV",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "AKRBP",
    "name": "AKER BP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Norway",
    "currency": "NOK"
  },
  {
    "symbol": "DPZ",
    "name": "DOMINOS PIZZA INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PNR",
    "name": "PENTAIR",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "7532",
    "name": "PAN PACIFIC INTERNATIONAL HOLDINGS",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "TELIA",
    "name": "TELIA COMPANY",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "CRCL",
    "name": "CIRCLE INTERNET GROUP INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BVI",
    "name": "BUREAU VERITAS SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "TEL2",
    "name": "B TELE2 B",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "PODD",
    "name": "INSULET CORP",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FORTUM",
    "name": "FORTUM",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Finland",
    "currency": "EUR"
  },
  {
    "symbol": "AKZA",
    "name": "AKZO NOBEL NV",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "MKS",
    "name": "MARKS AND SPENCER GROUP PLC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "5706",
    "name": "MITSUI KINZOKU LIMITED LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "7186",
    "name": "YOKOHAMA FINANCIAL GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "IONQ",
    "name": "IONQ INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TLC",
    "name": "THE LOTTERY CORPORATION LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "ALA",
    "name": "ALTAGAS LTD",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "ATRL",
    "name": "ATKINSREALIS GROUP INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "CG",
    "name": "CARLYLE GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TW",
    "name": "TRADEWEB MARKETS INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MAERSK",
    "name": "A A P MOLLER MAERSK",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "HM",
    "name": "B HENNES & MAURITZ",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "J36",
    "name": "JARDINE MATHESON HOLDINGS LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Hong Kong",
    "currency": "USD"
  },
  {
    "symbol": "GIL",
    "name": "GILDAN ACTIVEWEAR INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "FME",
    "name": "FRESENIUS MEDICAL CARE AG",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "ITRK",
    "name": "INTERTEK GROUP PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "EVO",
    "name": "EVOLUTION",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "LISP",
    "name": "CHOCOLADEFABRIKEN LINDT & SPRUENGL",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "LYC",
    "name": "LYNAS RARE EARTHS LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "SGE",
    "name": "THE SAGE GROUP PLC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "CA",
    "name": "CARREFOUR SA",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "BCP",
    "name": "BANCO COMERCIAL PORTUGUES SA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Portugal",
    "currency": "EUR"
  },
  {
    "symbol": "BEAN",
    "name": "BELIMO N AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "9766",
    "name": "KONAMI GROUP CORP",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "4188",
    "name": "MITSUBISHI CHEMICAL GROUP CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "9042",
    "name": "HANKYU HANSHIN HOLDINGS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ERF",
    "name": "EUROFINS SCIENTIFIC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "NWSA",
    "name": "NEWS CORP CLASS A",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FGR",
    "name": "EIFFAGE SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "CICT",
    "name": "CAPITALAND INTEGRATED COMMERCIAL T",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Singapore",
    "currency": "SGD"
  },
  {
    "symbol": "6479",
    "name": "MINEBEA MITSUMI INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "MOWI",
    "name": "MOWI",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Norway",
    "currency": "NOK"
  },
  {
    "symbol": "RXL",
    "name": "REXEL SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "UAL",
    "name": "UNITED AIRLINES HOLDINGS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "OMV",
    "name": "OMV AG",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Austria",
    "currency": "EUR"
  },
  {
    "symbol": "KEY",
    "name": "KEYERA CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "3402",
    "name": "TORAY INDUSTRIES INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "CAD",
    "name": "CAD CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "CNH",
    "name": "CNH INDUSTRIAL N.V. NV",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MZTF",
    "name": "MIZRAHI TEFAHOT BANK LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Israel",
    "currency": "ILS"
  },
  {
    "symbol": "HEIO",
    "name": "HEINEKEN HOLDING NV",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "YAR",
    "name": "YARA INTERNATIONAL",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Norway",
    "currency": "NOK"
  },
  {
    "symbol": "TIGO",
    "name": "MILLICOM INTERNATIONAL CELLULAR SA",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "USD"
  },
  {
    "symbol": "X",
    "name": "TMX GROUP LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "QIA",
    "name": "QIAGEN NV",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "SIG",
    "name": "SIGMA HEALTHCARE LTD",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "PLS",
    "name": "PLS GROUP LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "GRAB",
    "name": "GRAB HOLDINGS LTD CLASS A",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Singapore",
    "currency": "USD"
  },
  {
    "symbol": "EDV",
    "name": "ENDEAVOUR MINING",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "SKF",
    "name": "B SKF B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "KGF",
    "name": "KINGFISHER PLC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "TREL",
    "name": "B TRELLEBORG B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "TEL",
    "name": "TELENOR",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Norway",
    "currency": "NOK"
  },
  {
    "symbol": "LI",
    "name": "KLEPIERRE REIT SA",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "MICC",
    "name": "MAGNUM ICE CREAM NV",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "H",
    "name": "HYATT HOTELS CORP CLASS A",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EMSN",
    "name": "EMS-CHEMIE HOLDING AG",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "ADDT",
    "name": "B ADDTECH CLASS B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "LIFCO",
    "name": "B LIFCO CLASS B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "NTGY",
    "name": "NATURGY ENERGY GROUP SA",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "7911",
    "name": "TOPPAN HOLDINGS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "MPL",
    "name": "MEDIBANK PRIVATE LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "4684",
    "name": "OBIC LTD",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "AC",
    "name": "ACCOR SA",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "66",
    "name": "MTR CORPORATION CORP LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "4523",
    "name": "EISAI LTD",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "C6L",
    "name": "SINGAPORE AIRLINES LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Singapore",
    "currency": "SGD"
  },
  {
    "symbol": "SOBI",
    "name": "SWEDISH ORPHAN BIOVITRUM",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "4911",
    "name": "SHISEIDO LTD",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "BEI",
    "name": "BEIERSDORF AG",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "BNR",
    "name": "BRENNTAG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "3",
    "name": "HONG KONG AND CHINA GAS LTD",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "ABF",
    "name": "ASSOCIATED BRITISH FOODS PLC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "EXO",
    "name": "EXOR NV",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "RBI",
    "name": "RAIFFEISEN BANK INTERNATIONAL AG",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Austria",
    "currency": "EUR"
  },
  {
    "symbol": "8331",
    "name": "CHIBA BANK LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "HOT",
    "name": "HOCHTIEF AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "HEN",
    "name": "HENKEL AG",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "MRO",
    "name": "MELROSE INDUSTRIES PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "CCL.B",
    "name": "CCL INDUSTRIES INC CLASS B",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "EFN",
    "name": "ELEMENT FLEET MANAGEMENT CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "SKA",
    "name": "B SKANSKA B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "SGH",
    "name": "SGH LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "7270",
    "name": "SUBARU CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "IFT",
    "name": "INFRATIL LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "New Zealand",
    "currency": "NZD"
  },
  {
    "symbol": "TRYG",
    "name": "TRYG",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "8593",
    "name": "MITSUBISHI HC CAPITAL INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "9697",
    "name": "CAPCOM LTD",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "KBX",
    "name": "KNORR BREMSE AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "AUD",
    "name": "AUD CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "ORNBV",
    "name": "ORION CLASS B",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Finland",
    "currency": "EUR"
  },
  {
    "symbol": "CON",
    "name": "CONTINENTAL AG",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "GBLB",
    "name": "GROUPE BRUXELLES LAMBERT NV",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Belgium",
    "currency": "EUR"
  },
  {
    "symbol": "SHL",
    "name": "SONIC HEALTHCARE LTD",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "CRBG",
    "name": "COREBRIDGE FINANCIAL INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "5019",
    "name": "IDEMITSU KOSAN LTD",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "2801",
    "name": "KIKKOMAN CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "ELI",
    "name": "ELIA GROUP SA",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Belgium",
    "currency": "EUR"
  },
  {
    "symbol": "7912",
    "name": "DAI NIPPON PRINTING LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "LHA",
    "name": "DEUTSCHE LUFTHANSA AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "TLX",
    "name": "TALANX AG",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "1803",
    "name": "SHIMIZU CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "COLO",
    "name": "B COLOPLAST B",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "8113",
    "name": "UNICHARM CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "FRES",
    "name": "FRESNILLO PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "XRO",
    "name": "XERO LTD",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "288",
    "name": "WH GROUP LTD",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "GET",
    "name": "GETLINK",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "FOX",
    "name": "FOX CORP CLASS B",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IAG",
    "name": "INTERNATIONAL AIRLINES GROUP SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "9021",
    "name": "WEST JAPAN RAILWAY",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "WISE",
    "name": "WISE PLC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "4755",
    "name": "RAKUTEN GROUP INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "SOL",
    "name": "WASHINGTON H SOUL PATTINSON & COMP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "INDU",
    "name": "A INDUSTRIVARDEN A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "STN",
    "name": "STANTEC INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "ZAL",
    "name": "ZALANDO",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "BS6",
    "name": "YANGZIJIANG SHIPBUILDING (HOLDINGS",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Singapore",
    "currency": "SGD"
  },
  {
    "symbol": "REA",
    "name": "REA GROUP LTD",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "CTC.A",
    "name": "CANADIAN TIRE LTD CLASS A",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "7272",
    "name": "YAMAHA MOTOR LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "H78",
    "name": "HONGKONG LAND HOLDINGS LTD",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Hong Kong",
    "currency": "USD"
  },
  {
    "symbol": "SBRY",
    "name": "SAINSBURY(J) PLC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "PME",
    "name": "PRO MEDICUS LTD",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "SECU",
    "name": "B SECURITAS B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "INDU",
    "name": "C INDUSTRIVARDEN SERIES",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "EQX",
    "name": "EQUINOX GOLD CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "7202",
    "name": "ISUZU MOTORS LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "IG",
    "name": "ITALGAS",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "7309",
    "name": "SHIMANO INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "BCE",
    "name": "BCE INC",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "ORK",
    "name": "ORKLA",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Norway",
    "currency": "NOK"
  },
  {
    "symbol": "4689",
    "name": "LY CORP",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "EPI",
    "name": "B EPIROC CLASS B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "CLAR",
    "name": "CAPITALAND ASCENDAS REIT",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Singapore",
    "currency": "SGD"
  },
  {
    "symbol": "SYENS",
    "name": "SYENSQO NV",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Belgium",
    "currency": "EUR"
  },
  {
    "symbol": "ANA",
    "name": "ACCIONA SA",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "4151",
    "name": "KYOWA KIRIN LTD",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "6823",
    "name": "HKT TRUST AND HKT UNITS LTD",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "8951",
    "name": "NIPPON BUILDING FUND REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "FUTU",
    "name": "FUTU HOLDINGS ADR LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Hong Kong",
    "currency": "USD"
  },
  {
    "symbol": "DHER",
    "name": "DELIVERY HERO",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "HKD",
    "name": "HKD CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.01,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "ASX",
    "name": "ASX LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "9843",
    "name": "NITORI HOLDINGS LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "SDLF",
    "name": "STANDARD LIFE PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "INDT",
    "name": "INDUTRADE",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "CAR",
    "name": "CAR GROUP LTD",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "AM",
    "name": "DASSAULT AVIATION SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "9107",
    "name": "KAWASAKI KISEN LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "DSG",
    "name": "DESCARTES SYSTEMS GROUP INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "4612",
    "name": "NIPPON PAINT HOLDINGS LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "27",
    "name": "GALAXY ENTERTAINMENT GROUP LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "7259",
    "name": "AISIN CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "5411",
    "name": "JFE HOLDINGS INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "SGP",
    "name": "STOCKLAND STAPLED UNITS LTD",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "5201",
    "name": "AGC INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "3659",
    "name": "NEXON LTD",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "LUG",
    "name": "LUNDIN GOLD INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "12",
    "name": "HENDERSON LAND DEVELOPMENT LTD",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "SCA",
    "name": "B SVENSKA CELLULOSA B",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "CAE",
    "name": "CAE INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "FSV",
    "name": "FIRSTSERVICE SUBORDINATE VOTING CO",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "IPN",
    "name": "IPSEN SA",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "8136",
    "name": "SANRIO LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "LAND",
    "name": "LAND SECURITIES GROUP REIT PLC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "GJF",
    "name": "GJENSIDIGE FORSIKRING",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Norway",
    "currency": "NOK"
  },
  {
    "symbol": "ERIE",
    "name": "ERIE INDEMNITY CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SW",
    "name": "SODEXO SA",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "SAP",
    "name": "SAPUTO INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "ALO",
    "name": "ALSTOM SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "AIA",
    "name": "AUCKLAND INTERNATIONAL AIRPORT LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "New Zealand",
    "currency": "NZD"
  },
  {
    "symbol": "VCX",
    "name": "VICINITY CENTRES",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "SRT3",
    "name": "SARTORIUS PREF AG",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "KESKOB",
    "name": "KESKO CLASS B",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Finland",
    "currency": "EUR"
  },
  {
    "symbol": "UHR",
    "name": "THE SWATCH GROUP AG",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "BMED",
    "name": "BANCA MEDIOLANUM",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "RNO",
    "name": "RENAULT SA",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "SPX",
    "name": "SPIRAX GROUP PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "COH",
    "name": "COCHLEAR LTD",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "AVOL",
    "name": "AVOLTA AG",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "AMUN",
    "name": "AMUNDI SA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "7201",
    "name": "NISSAN MOTOR LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "HAG",
    "name": "HENSOLDT AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "F34",
    "name": "WILMAR INTERNATIONAL LTD",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Singapore",
    "currency": "SGD"
  },
  {
    "symbol": "REC",
    "name": "RECORDATI INDUSTRIA CHIMICA E FARM",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "WTC",
    "name": "WISETECH GLOBAL LTD",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "IGM",
    "name": "IGM FINANCIAL INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "JMT",
    "name": "JERONIMO MARTINS SA",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Portugal",
    "currency": "EUR"
  },
  {
    "symbol": "P911",
    "name": "DR ING HC F PORSCHE PRF AG",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "CU",
    "name": "CANADIAN UTILITIES LTD CLASS A",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "BARN",
    "name": "BARRY CALLEBAUT AG",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "SCHN",
    "name": "SCHINDLER HOLDING AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "VER",
    "name": "VERBUND AG",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Austria",
    "currency": "EUR"
  },
  {
    "symbol": "PAH3",
    "name": "PORSCHE AUTOMOBIL HOLDING PREF",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "6586",
    "name": "MAKITA CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "1878",
    "name": "DAITO TRUST CONSTRUCTION LTD",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "STERV",
    "name": "STORA ENSO CLASS R",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Finland",
    "currency": "EUR"
  },
  {
    "symbol": "G24",
    "name": "SCOUT24 N",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "QAN",
    "name": "QANTAS AIRWAYS LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "ELISA",
    "name": "ELISA",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Finland",
    "currency": "EUR"
  },
  {
    "symbol": "EVK",
    "name": "EVONIK INDUSTRIES AG",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "6841",
    "name": "YOKOGAWA ELECTRIC CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "EMP.A",
    "name": "EMPIRE LTD CLASS A",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "83",
    "name": "SINO LAND LTD",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "SDR",
    "name": "SCHRODERS PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "9CI",
    "name": "CAPITALAND INVESTMENT LTD",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Singapore",
    "currency": "SGD"
  },
  {
    "symbol": "NEM",
    "name": "NEMETSCHEK",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "TUB",
    "name": "FINANCIERE DE TUBIZE SA",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Belgium",
    "currency": "EUR"
  },
  {
    "symbol": "MAP",
    "name": "MAPFRE SA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "DIM",
    "name": "SARTORIUS STEDIM BIOTECH SA",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "AYV",
    "name": "AYVENS SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "3003",
    "name": "HULIC LTD",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "4091",
    "name": "NIPPON SANSO HOLDINGS CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "NIBE",
    "name": "B NIBE INDUSTRIER CLASS B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "BEIJ",
    "name": "B BEIJER REF CLASS B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "AZRG",
    "name": "AZRIELI GROUP LTD",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Israel",
    "currency": "ILS"
  },
  {
    "symbol": "VAR",
    "name": "VAR ENERGI",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Norway",
    "currency": "NOK"
  },
  {
    "symbol": "IDR",
    "name": "INDRA SISTEMAS SA",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "9024",
    "name": "SEIBU HOLDINGS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "DIE",
    "name": "DIETEREN (D) SA",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Belgium",
    "currency": "EUR"
  },
  {
    "symbol": "EDPR",
    "name": "EDP RENEWABLES SA",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Portugal",
    "currency": "EUR"
  },
  {
    "symbol": "9602",
    "name": "TOHO (TOKYO) LTD",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "IVN",
    "name": "IVANHOE MINES LTD CLASS A",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "LUND",
    "name": "B LUNDBERGFORETAGEN CLASS B",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "DEMANT",
    "name": "DEMANT",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "CEN",
    "name": "CONTACT ENERGY LTD",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "New Zealand",
    "currency": "NZD"
  },
  {
    "symbol": "1038",
    "name": "CHEUNG KONG INFRASTRUCTURE HOLDING",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "AAF",
    "name": "AIRTEL AFRICA PLC",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "T",
    "name": "TELUS",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "EVD",
    "name": "CTS EVENTIM AG",
    "sector": "Communication",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "SOF",
    "name": "SOFINA SA",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Belgium",
    "currency": "EUR"
  },
  {
    "symbol": "BCVN",
    "name": "BC VAUD N",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "SAGA",
    "name": "B SAGAX CLASS B",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "1997",
    "name": "WHARF REAL ESTATE INVESTMENT COMPA",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "9435",
    "name": "HIKARI TSUSHIN INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "7181",
    "name": "JAPAN POST INSURANCE LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "U96",
    "name": "SEMBCORP INDUSTRIES LTD",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Singapore",
    "currency": "SGD"
  },
  {
    "symbol": "BZU",
    "name": "BUZZI",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "BOL",
    "name": "BOLLORE",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "COV",
    "name": "COVIVIO SA",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "ICL",
    "name": "ICL GROUP LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Israel",
    "currency": "ILS"
  },
  {
    "symbol": "INPST",
    "name": "INPOST SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "1928",
    "name": "SANDS CHINA LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "OCTV",
    "name": "SDB OCTAVE INTELLIGENCE SDR PLC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "CVC",
    "name": "CVC CAPITAL PARTNERS PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "CPR",
    "name": "DAVIDE CAMPARI MILANO NV",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Italy",
    "currency": "EUR"
  },
  {
    "symbol": "CSG",
    "name": "CSG CLASS A NV",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Netherlands",
    "currency": "EUR"
  },
  {
    "symbol": "MEL",
    "name": "MERIDIAN ENERGY LTD",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "New Zealand",
    "currency": "NZD"
  },
  {
    "symbol": "7550",
    "name": "ZENSHO HOLDINGS LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "GFC",
    "name": "GECINA SA",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "DKK",
    "name": "DKK CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.0,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "BEPC",
    "name": "BROOKFIELD RENEWABLE SUBORDINATE V",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "LOTB",
    "name": "LOTUS BAKERIES NV",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Belgium",
    "currency": "EUR"
  },
  {
    "symbol": "RAA",
    "name": "RATIONAL AG",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Germany",
    "currency": "EUR"
  },
  {
    "symbol": "BKW",
    "name": "BKW N AG",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "IBE.D",
    "name": "IBERDROLA S A RIGHTS SA",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "BIM",
    "name": "BIOMERIEUX SA",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "LATO",
    "name": "B LATOUR INVESTMENT CLASS B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "SALM",
    "name": "SALMAR",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Norway",
    "currency": "NOK"
  },
  {
    "symbol": "1308",
    "name": "SITC INTERNATIONAL HOLDINGS LTD",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "ADP",
    "name": "AEROPORTS DE PARIS SA",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "France",
    "currency": "EUR"
  },
  {
    "symbol": "4768",
    "name": "OTSUKA CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "19",
    "name": "SWIRE PACIFIC LTD A",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "BALD",
    "name": "B FASTIGHETS BALDER CLASS B",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "ROCK",
    "name": "B ROCKWOOL CLASS B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Denmark",
    "currency": "DKK"
  },
  {
    "symbol": "2587",
    "name": "SUNTORY BEVERAGE & FOOD LTD",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "--",
    "name": "CYBERARK SOFTWARE CONTRA",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Israel",
    "currency": "USD"
  },
  {
    "symbol": "9202",
    "name": "ANA HOLDINGS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "NOK",
    "name": "NOK CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.0,
    "location": "Norway",
    "currency": "NOK"
  },
  {
    "symbol": "RED",
    "name": "REDEIA CORPORACION SA",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "NZD",
    "name": "NZD CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.0,
    "location": "New Zealand",
    "currency": "NZD"
  },
  {
    "symbol": "ILS",
    "name": "ILS CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.0,
    "location": "Israel",
    "currency": "ILS"
  },
  {
    "symbol": "CHF",
    "name": "CHF CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.0,
    "location": "Switzerland",
    "currency": "CHF"
  },
  {
    "symbol": "SGD",
    "name": "SGD CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.0,
    "location": "Singapore",
    "currency": "SGD"
  },
  {
    "symbol": "2665236D",
    "name": "ACS ACTIVIDADES DE CONSTRUCCION Y",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Spain",
    "currency": "EUR"
  },
  {
    "symbol": "SEK",
    "name": "SEK CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.0,
    "location": "Sweden",
    "currency": "SEK"
  },
  {
    "symbol": "ETD_JPY",
    "name": "ETD JPY BALANCE WITH 06738C",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.0,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "HOLX",
    "name": "HOLOGIC INC",
    "sector": "Health Care",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "JPY",
    "name": "JPY/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GBP",
    "name": "GBP/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CHF",
    "name": "CHF/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CHF",
    "name": "CHF/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SEK",
    "name": "SEK/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EUR",
    "name": "EUR/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SEK",
    "name": "SEK/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EUR",
    "name": "EUR/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NZD",
    "name": "NZD/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NZD",
    "name": "NZD/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DKK",
    "name": "DKK/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SGD",
    "name": "SGD/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HKD",
    "name": "HKD/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DKK",
    "name": "DKK/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SGD",
    "name": "SGD/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HKD",
    "name": "HKD/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ILS",
    "name": "ILS/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ILS",
    "name": "ILS/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NOK",
    "name": "NOK/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AUD",
    "name": "AUD/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NOK",
    "name": "NOK/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AUD",
    "name": "AUD/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "2299955D",
    "name": "CONSTELLATION SOFTWARE INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "TPU6",
    "name": "TOPIX INDEX SEP 26",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Futures",
    "weight": 0.0,
    "location": "--",
    "currency": "JPY"
  },
  {
    "symbol": "VGU6",
    "name": "EURO STOXX 50 SEP 26",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Futures",
    "weight": 0.0,
    "location": "European Union",
    "currency": "EUR"
  },
  {
    "symbol": "Z",
    "name": "U6 FTSE 100 INDEX SEP 26",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Futures",
    "weight": 0.0,
    "location": "--",
    "currency": "GBP"
  },
  {
    "symbol": "ESU6",
    "name": "S&P500 EMINI SEP 26",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Futures",
    "weight": 0.0,
    "location": "--",
    "currency": "USD"
  },
  {
    "symbol": "JPY",
    "name": "JPY/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GBP",
    "name": "GBP/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "JPY",
    "name": "JPY/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "JPY",
    "name": "JPY/USD",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "JPY",
    "name": "JPY CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.0,
    "location": "Japan",
    "currency": "JPY"
  }
];
