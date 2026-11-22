// Complete holdings dataset for iShares Core S&P 500 UCITS ETF USD (Acc) (SXR8.DE / CSPX / CSP1 / ISIN: IE00B5BMR087)
// Official BlackRock / iShares reporting data with full weightings, sectors, asset classes and geographic locations (511 holdings).

import { ETFHolding } from './meudHoldings';

export type { ETFHolding };

export const SXR8_SECTOR_ALLOCATIONS = [
  {
    "name": "Information Technology",
    "weight": 37.98
  },
  {
    "name": "Financials",
    "weight": 11.74
  },
  {
    "name": "Communication Services",
    "weight": 9.67
  },
  {
    "name": "Consumer Discretionary",
    "weight": 9.3
  },
  {
    "name": "Industrials",
    "weight": 8.92
  },
  {
    "name": "Healthcare",
    "weight": 8.88
  },
  {
    "name": "Consumer Staples",
    "weight": 4.56
  },
  {
    "name": "Energy",
    "weight": 2.98
  },
  {
    "name": "Utilities",
    "weight": 2.19
  },
  {
    "name": "Real Estate",
    "weight": 1.83
  },
  {
    "name": "Materials / Other",
    "weight": 1.95
  }
];

export const SXR8_COUNTRY_ALLOCATIONS = [
  {
    "name": "United States",
    "weight": 99.85
  },
  {
    "name": "Other / Cash",
    "weight": 0.15
  }
];

export const SXR8_FULL_HOLDINGS: ETFHolding[] = [
  {
    "symbol": "NVDA",
    "name": "NVIDIA CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 7.93,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AAPL",
    "name": "APPLE INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 7.41,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MSFT",
    "name": "MICROSOFT CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 4.44,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AMZN",
    "name": "AMAZON.COM INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 3.59,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GOOGL",
    "name": "ALPHABET INC CLASS A",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 2.92,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AVGO",
    "name": "BROADCOM INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 2.91,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GOOG",
    "name": "ALPHABET INC CLASS C",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 2.36,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "META",
    "name": "META PLATFORMS INC CLASS A",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 2.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MU",
    "name": "MICRON TECHNOLOGY INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 1.75,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LLY",
    "name": "ELI LILLY",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 1.47,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "JPM",
    "name": "JPMORGAN CHASE & CO",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 1.47,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TSLA",
    "name": "TESLA INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 1.41,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BRKB",
    "name": "BERKSHIRE HATHAWAY INC CLASS B",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 1.41,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AMD",
    "name": "ADVANCED MICRO DEVICES INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 1.38,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "XOM",
    "name": "EXXONMOBIL HOLDINGS CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 1.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "JNJ",
    "name": "JOHNSON & JOHNSON",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.98,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "V",
    "name": "VISA INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.91,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WMT",
    "name": "WALMART INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.74,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "INTC",
    "name": "INTEL CORPORATION",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.74,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ABBV",
    "name": "ABBVIE INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.71,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AMAT",
    "name": "APPLIED MATERIAL INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.7,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CSCO",
    "name": "CISCO SYSTEMS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.7,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MA",
    "name": "MASTERCARD INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.67,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CAT",
    "name": "CATERPILLAR INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.65,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "COST",
    "name": "COSTCO WHOLESALE CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.64,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LRCX",
    "name": "LAM RESEARCH CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.63,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BAC",
    "name": "BANK OF AMERICA CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.63,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "UNH",
    "name": "UNITEDHEALTH GROUP INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.6,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CVX",
    "name": "CHEVRON CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.57,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GE",
    "name": "GE AEROSPACE",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.57,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PG",
    "name": "PROCTER & GAMBLE",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.54,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HD",
    "name": "HOME DEPOT INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.51,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MRK",
    "name": "MERCK & CO INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.51,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GS",
    "name": "GOLDMAN SACHS GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.5,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KO",
    "name": "COCA-COLA",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.49,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PM",
    "name": "PHILIP MORRIS INTERNATIONAL INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.47,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NFLX",
    "name": "NETFLIX INC",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.45,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KLAC",
    "name": "KLA CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.45,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PLTR",
    "name": "PALANTIR TECHNOLOGIES INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.44,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RTX",
    "name": "RTX CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.44,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GEV",
    "name": "GE VERNOVA INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.43,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PANW",
    "name": "PALO ALTO NETWORKS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.41,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WFC",
    "name": "WELLS FARGO",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.41,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TXN",
    "name": "TEXAS INSTRUMENT INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.41,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MS",
    "name": "MORGAN STANLEY",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.4,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SNDK",
    "name": "SANDISK CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.37,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LIN",
    "name": "LINDE PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.37,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "C",
    "name": "CITIGROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.35,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TMO",
    "name": "THERMO FISHER SCIENTIFIC INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.33,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "STX",
    "name": "SEAGATE TECHNOLOGY HOLDINGS PLC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.32,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ORCL",
    "name": "ORACLE CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.32,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AMGN",
    "name": "AMGEN INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.31,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IBM",
    "name": "INTERNATIONAL BUSINESS MACHINES CO",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.3,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "APH",
    "name": "AMPHENOL CORP CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.3,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WDC",
    "name": "WESTERN DIGITAL CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.3,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NEE",
    "name": "NEXTERA ENERGY INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.29,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CRWD",
    "name": "CROWDSTRIKE HOLDINGS INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.29,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MCD",
    "name": "MCDONALDS CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.29,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ADI",
    "name": "ANALOG DEVICES INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.29,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PEP",
    "name": "PEPSICO INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.29,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MRVL",
    "name": "MARVELL TECHNOLOGY INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.29,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VZ",
    "name": "VERIZON COMMUNICATIONS INC",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.29,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ANET",
    "name": "ARISTA NETWORKS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.29,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AXP",
    "name": "AMERICAN EXPRESS",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.28,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "UNP",
    "name": "UNION PACIFIC CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.28,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "QCOM",
    "name": "QUALCOMM INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.28,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ABT",
    "name": "ABBOTT LABORATORIES",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.28,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WELL",
    "name": "WELLTOWER INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.27,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TJX",
    "name": "TJX INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.27,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SCHW",
    "name": "CHARLES SCHWAB CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.26,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BA",
    "name": "BOEING",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.26,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GILD",
    "name": "GILEAD SCIENCES INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.26,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DIS",
    "name": "WALT DISNEY",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.25,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ETN",
    "name": "EATON PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.25,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "T",
    "name": "AT&T INC",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.25,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DE",
    "name": "DEERE",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.24,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BLK",
    "name": "BLACKROCK INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.23,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "COP",
    "name": "CONOCOPHILLIPS",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.23,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PFE",
    "name": "PFIZER INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.22,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "UBER",
    "name": "UBER TECHNOLOGIES INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.22,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CVS",
    "name": "CVS HEALTH CORP",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.21,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PLD",
    "name": "PROLOGIS REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.21,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BKNG",
    "name": "BOOKING HOLDINGS INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.21,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CRM",
    "name": "SALESFORCE INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.2,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SPGI",
    "name": "S&P GLOBAL INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.2,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CB",
    "name": "CHUBB",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.2,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DELL",
    "name": "DELL TECHNOLOGIES INC CLASS C",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.2,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BMY",
    "name": "BRISTOL MYERS SQUIBB",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.2,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "COF",
    "name": "CAPITAL ONE FINANCIAL CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.2,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PH",
    "name": "PARKER-HANNIFIN CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.19,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GLW",
    "name": "CORNING INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.19,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DHR",
    "name": "DANAHER CORP",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.19,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PGR",
    "name": "PROGRESSIVE CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.19,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MO",
    "name": "ALTRIA GROUP INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.19,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VRTX",
    "name": "VERTEX PHARMACEUTICALS INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.19,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ISRG",
    "name": "INTUITIVE SURGICAL INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.18,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SBUX",
    "name": "STARBUCKS CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.18,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VRT",
    "name": "VERTIV HOLDINGS CLASS A",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.18,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LMT",
    "name": "LOCKHEED MARTIN CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.18,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HWM",
    "name": "HOWMET AEROSPACE INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.18,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LOW",
    "name": "LOWES COMPANIES INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.18,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SYK",
    "name": "STRYKER CORP",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.17,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BNY",
    "name": "BANK OF NEW YORK MELLON CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.17,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SO",
    "name": "SOUTHERN",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.17,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "APP",
    "name": "APPLOVIN CORP CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.17,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TT",
    "name": "TRANE TECHNOLOGIES PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.17,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MDT",
    "name": "MEDTRONIC PLC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.17,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EQIX",
    "name": "EQUINIX REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.16,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NEM",
    "name": "NEWMONT",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.16,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DUK",
    "name": "DUKE ENERGY CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.16,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PNC",
    "name": "PNC FINANCIAL SERVICES GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.16,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MCK",
    "name": "MCKESSON CORP",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.16,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "USB",
    "name": "US BANCORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CSX",
    "name": "CSX CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PWR",
    "name": "QUANTA SERVICES INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ADP",
    "name": "AUTOMATIC DATA PROCESSING INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GD",
    "name": "GENERAL DYNAMICS CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NOW",
    "name": "SERVICENOW INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FTNT",
    "name": "FORTINET INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BX",
    "name": "BLACKSTONE INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WMB",
    "name": "WILLIAMS INC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CME",
    "name": "CME GROUP INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CMI",
    "name": "CUMMINS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FCX",
    "name": "FREEPORT MCMORAN INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MPC",
    "name": "MARATHON PETROLEUM CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CDNS",
    "name": "CADENCE DESIGN SYSTEMS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VLO",
    "name": "VALERO ENERGY CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MMM",
    "name": "3M",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CEG",
    "name": "CONSTELLATION ENERGY CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WM",
    "name": "WASTE MANAGEMENT INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "JCI",
    "name": "JOHNSON CONTROLS INTERNATIONAL PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ADBE",
    "name": "ADOBE INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ACN",
    "name": "ACCENTURE PLC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "UPS",
    "name": "UNITED PARCEL SERVICE INC CLASS B",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MRSH",
    "name": "MARSH INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PSX",
    "name": "PHILLIPS 66",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ELV",
    "name": "ELEVANCE HEALTH INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EMR",
    "name": "EMERSON ELECTRIC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ICE",
    "name": "INTERCONTINENTAL EXCHANGE INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DDOG",
    "name": "DATADOG INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HOOD",
    "name": "ROBINHOOD MARKETS INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TRV",
    "name": "TRAVELERS COMPANIES INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MAR",
    "name": "MARRIOTT INTERNATIONAL INC CLASS A",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TMUS",
    "name": "T MOBILE US INC",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NSC",
    "name": "NORFOLK SOUTHERN CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CMCSA",
    "name": "COMCAST CORP CLASS A",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HON",
    "name": "HONEYWELL INTERNATIONAL INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "INTU",
    "name": "INTUIT INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EOG",
    "name": "EOG RESOURCES INC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MDLZ",
    "name": "MONDELEZ INTERNATIONAL INC CLASS A",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AMT",
    "name": "AMERICAN TOWER REIT CORP",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AON",
    "name": "AON PLC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "USD",
    "name": "USD CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CI",
    "name": "CIGNA",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ROST",
    "name": "ROSS STORES INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AEP",
    "name": "AMERICAN ELECTRIC POWER INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SPG",
    "name": "SIMON PROPERTY GROUP REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HLT",
    "name": "HILTON WORLDWIDE HOLDINGS INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GM",
    "name": "GENERAL MOTORS",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ITW",
    "name": "ILLINOIS TOOL INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CL",
    "name": "COLGATE-PALMOLIVE",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SNPS",
    "name": "SYNOPSYS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "URI",
    "name": "UNITED RENTALS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ORLY",
    "name": "OREILLY AUTOMOTIVE INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SHW",
    "name": "SHERWIN WILLIAMS",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NOC",
    "name": "NORTHROP GRUMMAN CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MCO",
    "name": "MOODYS CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RCL",
    "name": "ROYAL CARIBBEAN GROUP LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SLB",
    "name": "SLB NV",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NXPI",
    "name": "NXP SEMICONDUCTORS NV",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FDX",
    "name": "FEDEX CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CTAS",
    "name": "CINTAS CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PCAR",
    "name": "PACCAR INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MPWR",
    "name": "MONOLITHIC POWER SYSTEMS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TDG",
    "name": "TRANSDIGM GROUP INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MSI",
    "name": "MOTOROLA SOLUTIONS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MNST",
    "name": "MONSTER BEVERAGE CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ECL",
    "name": "ECOLAB INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KKR",
    "name": "KKR AND CO INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "APD",
    "name": "AIR PRODUCTS AND CHEMICALS INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ALL",
    "name": "ALLSTATE CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CRH",
    "name": "CRH PUBLIC LIMITED PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "REGN",
    "name": "REGENERON PHARMACEUTICALS INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LITE",
    "name": "LUMENTUM HOLDINGS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BSX",
    "name": "BOSTON SCIENTIFIC CORP",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WBD",
    "name": "WARNER BROS. DISCOVERY INC SERIES",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FIX",
    "name": "COMFORT SYSTEMS USA INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KMI",
    "name": "KINDER MORGAN INC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DASH",
    "name": "DOORDASH INC CLASS A",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TFC",
    "name": "TRUIST FINANCIAL CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HPE",
    "name": "HEWLETT PACKARD ENTERPRISE",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "D",
    "name": "DOMINION ENERGY INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DLR",
    "name": "DIGITAL REALTY TRUST REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AJG",
    "name": "ARTHUR J GALLAGHER",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HONA",
    "name": "HONEYWELL AEROSPACE INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "COHR",
    "name": "COHERENT CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TRGP",
    "name": "TARGA RESOURCES CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SRE",
    "name": "SEMPRA",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TGT",
    "name": "TARGET CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "O",
    "name": "REALTY INCOME REIT CORP",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "COR",
    "name": "CENCORA INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GWW",
    "name": "WW GRAINGER INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CTVA",
    "name": "CORTEVA INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TER",
    "name": "TERADYNE INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "OKE",
    "name": "ONEOK INC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HCA",
    "name": "HCA HEALTHCARE INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TEL",
    "name": "TE CONNECTIVITY PLC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CIEN",
    "name": "CIENA CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ABNB",
    "name": "AIRBNB INC CLASS A",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AFL",
    "name": "AFLAC INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LHX",
    "name": "L3HARRIS TECHNOLOGIES INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KEYS",
    "name": "KEYSIGHT TECHNOLOGIES INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BKR",
    "name": "BAKER HUGHES CLASS A",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AME",
    "name": "AMETEK INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "F",
    "name": "FORD MOTOR CO",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NUE",
    "name": "NUCOR CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "APO",
    "name": "APOLLO GLOBAL MANAGEMENT INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CARR",
    "name": "CARRIER GLOBAL CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DAL",
    "name": "DELTA AIR LINES INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VST",
    "name": "VISTRA CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ETR",
    "name": "ENTERGY CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FAST",
    "name": "FASTENAL",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CAH",
    "name": "CARDINAL HEALTH INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PSA",
    "name": "PUBLIC STORAGE REIT",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DVN",
    "name": "DEVON ENERGY CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FITB",
    "name": "FIFTH THIRD BANCORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ROK",
    "name": "ROCKWELL AUTOMATION INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "STT",
    "name": "STATE STREET CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "XEL",
    "name": "XCEL ENERGY INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WAB",
    "name": "WESTINGHOUSE AIR BRAKE TECHNOLOGIE",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MET",
    "name": "METLIFE INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PYPL",
    "name": "PAYPAL HOLDINGS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NKE",
    "name": "NIKE INC CLASS B",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EBAY",
    "name": "EBAY INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EXC",
    "name": "EXELON CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AZO",
    "name": "AUTOZONE INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EW",
    "name": "EDWARDS LIFESCIENCES CORP",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.08,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VTR",
    "name": "VENTAS REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HUM",
    "name": "HUMANA INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EA",
    "name": "ELECTRONIC ARTS INC",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FLEX",
    "name": "FLEX LTD",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AMP",
    "name": "AMERIPRISE FINANCE INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MCHP",
    "name": "MICROCHIP TECHNOLOGY INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RSG",
    "name": "REPUBLIC SERVICES INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ADSK",
    "name": "AUTODESK INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CVNA",
    "name": "CARVANA CLASS A",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IDXX",
    "name": "IDEXX LABORATORIES INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ODFL",
    "name": "OLD DOMINION FREIGHT LINE INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BDX",
    "name": "BECTON DICKINSON",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ED",
    "name": "CONSOLIDATED EDISON INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "OXY",
    "name": "OCCIDENTAL PETROLEUM CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AIG",
    "name": "AMERICAN INTERNATIONAL GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ADM",
    "name": "ARCHER DANIELS MIDLAND",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CMG",
    "name": "CHIPOTLE MEXICAN GRILL INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "XYZ",
    "name": "BLOCK INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IBKR",
    "name": "INTERACTIVE BROKERS GROUP INC CLAS",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PRU",
    "name": "PRUDENTIAL FINANCIAL INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "YUM",
    "name": "YUM BRANDS INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KDP",
    "name": "KEURIG DR PEPPER INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NDAQ",
    "name": "NASDAQ INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MSCI",
    "name": "MSCI INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TTWO",
    "name": "TAKE TWO INTERACTIVE SOFTWARE INC",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FANG",
    "name": "DIAMONDBACK ENERGY INC",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PEG",
    "name": "PUBLIC SERVICE ENTERPRISE GROUP IN",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AXON",
    "name": "AXON ENTERPRISE INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CBRE",
    "name": "CBRE GROUP INC CLASS A",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "A",
    "name": "AGILENT TECHNOLOGIES INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GRMN",
    "name": "GARMIN LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SYY",
    "name": "SYSCO CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HIG",
    "name": "HARTFORD INSURANCE GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PCG",
    "name": "PG&E CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DHI",
    "name": "D R HORTON INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WAT",
    "name": "WATERS CORP",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WEC",
    "name": "WEC ENERGY GROUP INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "UAL",
    "name": "UNITED AIRLINES HOLDINGS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IRM",
    "name": "IRON MOUNTAIN INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KVUE",
    "name": "KENVUE INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MTB",
    "name": "M&T BANK",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "COIN",
    "name": "COINBASE GLOBAL INC CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ROP",
    "name": "ROPER TECHNOLOGIES INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KMB",
    "name": "KIMBERLY CLARK CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VMC",
    "name": "VULCAN MATERIALS",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PAYX",
    "name": "PAYCHEX INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ON",
    "name": "ON SEMICONDUCTOR CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HBAN",
    "name": "HUNTINGTON BANCSHARES INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ACGL",
    "name": "ARCH CAPITAL GROUP LTD",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IQV",
    "name": "IQVIA HOLDINGS INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EME",
    "name": "EMCOR GROUP INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "JBL",
    "name": "JABIL INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EQT",
    "name": "EQT CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MLM",
    "name": "MARTIN MARIETTA MATERIALS INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NTRS",
    "name": "NORTHERN TRUST CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "STLD",
    "name": "STEEL DYNAMICS INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CCL",
    "name": "CARNIVAL CORP LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NTAP",
    "name": "NETAPP INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CCI",
    "name": "CROWN CASTLE INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CASY",
    "name": "CASEYS GENERAL STORES INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KR",
    "name": "KROGER",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AEE",
    "name": "AMEREN CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ZTS",
    "name": "ZOETIS INC CLASS A",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DTE",
    "name": "DTE ENERGY",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EXR",
    "name": "EXTRA SPACE STORAGE REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EIX",
    "name": "EDISON INTERNATIONAL",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CFG",
    "name": "CITIZENS FINANCIAL GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TDY",
    "name": "TELEDYNE TECHNOLOGIES INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NRG",
    "name": "NRG ENERGY INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IR",
    "name": "INGERSOLL RAND INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CNC",
    "name": "CENTENE CORP",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BIIB",
    "name": "BIOGEN INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CBOE",
    "name": "CBOE GLOBAL MARKETS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EXPE",
    "name": "EXPEDIA GROUP INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ATO",
    "name": "ATMOS ENERGY CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "Q",
    "name": "QNITY ELECTRONICS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CNP",
    "name": "CENTERPOINT ENERGY INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RJF",
    "name": "RAYMOND JAMES INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VICI",
    "name": "VICI PPTYS INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.05,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GEHC",
    "name": "GE HEALTHCARE TECHNOLOGIES INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TPR",
    "name": "TAPESTRY INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ES",
    "name": "EVERSOURCE ENERGY",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FICO",
    "name": "FAIR ISAAC CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RMD",
    "name": "RESMED INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CINF",
    "name": "CINCINNATI FINANCIAL CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "XYL",
    "name": "XYLEM INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LYV",
    "name": "LIVE NATION ENTERTAINMENT INC",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WTW",
    "name": "WILLIS TOWERS WATSON PLC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HAL",
    "name": "HALLIBURTON",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PPL",
    "name": "PPL CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DXCM",
    "name": "DEXCOM INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "OTIS",
    "name": "OTIS WORLDWIDE CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VEEV",
    "name": "VEEVA SYSTEMS INC CLASS A",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MTD",
    "name": "METTLER TOLEDO INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DOV",
    "name": "DOVER CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FISV",
    "name": "FISERV INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AVB",
    "name": "AVALONBAY COMMUNITIES REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AWK",
    "name": "AMERICAN WATER WORKS INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RF",
    "name": "REGIONS FINANCIAL CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WDAY",
    "name": "WORKDAY INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HUBB",
    "name": "HUBBELL INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FE",
    "name": "FIRSTENERGY CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WSM",
    "name": "WILLIAMS SONOMA INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ARES",
    "name": "ARES MANAGEMENT CORP CLASS A",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DG",
    "name": "DOLLAR GENERAL CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HSY",
    "name": "HERSHEY FOODS",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PPG",
    "name": "PPG INDUSTRIES INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VRSK",
    "name": "VERISK ANALYTICS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WST",
    "name": "WEST PHARMACEUTICAL SERVICES INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DGX",
    "name": "QUEST DIAGNOSTICS INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TPL",
    "name": "TEXAS PACIFIC LAND CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TROW",
    "name": "T ROWE PRICE GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CHRW",
    "name": "CH ROBINSON WORLDWIDE INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SYF",
    "name": "SYNCHRONY FINANCIAL",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CPRT",
    "name": "COPART INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CPAY",
    "name": "CORPAY INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LH",
    "name": "LABCORP HOLDINGS INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PHM",
    "name": "PULTEGROUP INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EQR",
    "name": "EQUITY RESIDENTIAL REIT",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EXPD",
    "name": "EXPEDITORS INTERNATIONAL OF WASHIN",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SW",
    "name": "SMURFIT WESTROCK PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CHD",
    "name": "CHURCH AND DWIGHT INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CMS",
    "name": "CMS ENERGY CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VLTO",
    "name": "VERALTO CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HPQ",
    "name": "HP INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NI",
    "name": "NISOURCE INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DRI",
    "name": "DARDEN RESTAURANTS INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.04,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DOW",
    "name": "DOW INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "OMC",
    "name": "OMNICOM GROUP INC",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FSLR",
    "name": "FIRST SOLAR INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LUV",
    "name": "SOUTHWEST AIRLINES",
    "sector": "Industrials",
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
    "symbol": "EXE",
    "name": "EXPAND ENERGY CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
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
    "symbol": "KHC",
    "name": "KRAFT HEINZ",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WRB",
    "name": "WR BERKLEY CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VRSN",
    "name": "VERISIGN INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
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
    "symbol": "PFG",
    "name": "PRINCIPAL FINANCIAL GROUP INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KEY",
    "name": "KEYCORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "STE",
    "name": "STERIS",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
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
    "symbol": "FIS",
    "name": "FIDELITY NATIONAL INFORMATION SERV",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PKG",
    "name": "PACKAGING CORP OF AMERICA",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CTSH",
    "name": "COGNIZANT TECHNOLOGY SOLUTIONS COR",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SNA",
    "name": "SNAP ON INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "VTRS",
    "name": "VIATRIS INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MRNA",
    "name": "MODERNA INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IP",
    "name": "INTERNATIONAL PAPER",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EVRG",
    "name": "EVERGY INC",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EFX",
    "name": "EQUIFAX INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "L",
    "name": "LOEWS CORP",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "EL",
    "name": "ESTEE LAUDER INC CLASS A",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AMCR",
    "name": "AMCOR PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CF",
    "name": "CF INDUSTRIES HOLDINGS INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BRO",
    "name": "BROWN & BROWN INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "INCY",
    "name": "INCYTE CORP",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LNT",
    "name": "ALLIANT ENERGY CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GIS",
    "name": "GENERAL MILLS INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ESS",
    "name": "ESSEX PROPERTY TRUST REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IFF",
    "name": "INTERNATIONAL FLAVORS & FRAGRANCES",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DD",
    "name": "DUPONT DE NEMOURS INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SBAC",
    "name": "SBA COMMUNICATIONS REIT CORP CLASS",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FTV",
    "name": "FORTIVE CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GPN",
    "name": "GLOBAL PAYMENTS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "STZ",
    "name": "CONSTELLATION BRANDS INC CLASS A",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LEN",
    "name": "LENNAR A CORP CLASS A",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SMCI",
    "name": "SUPER MICRO COMPUTER INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KIM",
    "name": "KIMCO REALTY REIT CORP",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ZBH",
    "name": "ZIMMER BIOMET HOLDINGS INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MXN",
    "name": "MXN CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.03,
    "location": "Mexico",
    "currency": "MXN"
  },
  {
    "symbol": "WY",
    "name": "WEYERHAEUSER REIT",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LII",
    "name": "LENNOX INTERNATIONAL INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AKAM",
    "name": "AKAMAI TECHNOLOGIES INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FDXF",
    "name": "FEDEX FREIGHT HOLDING COMPANY INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GPC",
    "name": "GENUINE PARTS",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BALL",
    "name": "BALL CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CDW",
    "name": "CDW CORP",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BR",
    "name": "BROADRIDGE FINANCIAL SOLUTIONS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BG",
    "name": "BUNGE GLOBAL SA",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IEX",
    "name": "IDEX CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NVR",
    "name": "NVR INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BBY",
    "name": "BEST BUY INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TXT",
    "name": "TEXTRON INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TSN",
    "name": "TYSON FOODS INC CLASS A",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "INVH",
    "name": "INVITATION HOMES INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LYB",
    "name": "LYONDELLBASELL INDUSTRIES CLASS A",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.03,
    "location": "United States",
    "currency": "USD"
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
    "symbol": "MAS",
    "name": "MASCO CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
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
    "symbol": "MAA",
    "name": "MID AMERICA APARTMENT COMMUNITIES",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
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
    "symbol": "HST",
    "name": "HOST HOTELS & RESORTS REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DOC",
    "name": "HEALTHPEAK PROPERTIES INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
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
    "symbol": "RL",
    "name": "RALPH LAUREN CORP CLASS A",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ALB",
    "name": "ALBEMARLE CORP",
    "sector": "Materials",
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
    "symbol": "GEN",
    "name": "GEN DIGITAL INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
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
    "symbol": "DECK",
    "name": "DECKERS OUTDOOR CORP",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "COO",
    "name": "COOPER INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AIZ",
    "name": "ASSURANT INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
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
    "symbol": "SWK",
    "name": "STANLEY BLACK & DECKER INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ALLE",
    "name": "ALLEGION PLC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GL",
    "name": "GLOBE LIFE INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IVZ",
    "name": "INVESCO LTD",
    "sector": "Financials",
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
    "symbol": "APA",
    "name": "APA CORP",
    "sector": "Energy",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "RVTY",
    "name": "REVVITY INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PNW",
    "name": "PINNACLE WEST CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MKC",
    "name": "MCCORMICK & CO NON-VOTING INC",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ECHO",
    "name": "ECHOSTAR CORP CLASS A",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GNRC",
    "name": "GENERAC HOLDINGS INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SJM",
    "name": "JM SMUCKER",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ZBRA",
    "name": "ZEBRA TECHNOLOGIES CORP CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TYL",
    "name": "TYLER TECHNOLOGIES INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "APTV",
    "name": "APTIV PLC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "UDR",
    "name": "UDR REIT INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AVY",
    "name": "AVERY DENNISON CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
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
    "symbol": "HAS",
    "name": "HASBRO INC",
    "sector": "Consumer Discretionary",
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
    "symbol": "LULU",
    "name": "LULULEMON ATHLETICA INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GDDY",
    "name": "GODADDY INC CLASS A",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SOLV",
    "name": "SOLVENTUM CORP",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TECH",
    "name": "BIO TECHNE CORP",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CPT",
    "name": "CAMDEN PROPERTY TRUST REIT",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CLX",
    "name": "CLOROX",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TKO",
    "name": "TKO GROUP HOLDINGS INC CLASS A",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ALGN",
    "name": "ALIGN TECHNOLOGY INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HII",
    "name": "HUNTINGTON INGALLS INDUSTRIES INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BAX",
    "name": "BAXTER INTERNATIONAL INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PODD",
    "name": "INSULET CORP",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CSGP",
    "name": "COSTAR GROUP INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FOXA",
    "name": "FOX CORP CLASS A",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CRL",
    "name": "CHARLES RIVER LABORATORIES INTERNA",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "JKHY",
    "name": "JACK HENRY AND ASSOCIATES INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CHTR",
    "name": "CHARTER COMMUNICATIONS INC CLASS A",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AES",
    "name": "AES CORP",
    "sector": "Utilities",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PNR",
    "name": "PENTAIR",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BXP",
    "name": "BXP INC",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BEN",
    "name": "FRANKLIN RESOURCES INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DPZ",
    "name": "DOMINOS PIZZA INC",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NWSA",
    "name": "NEWS CORP CLASS A",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FRT",
    "name": "FEDERAL REALTY INVESTMENT TRUST RE",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SWKS",
    "name": "SKYWORKS SOLUTIONS INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "IT",
    "name": "GARTNER INC",
    "sector": "Information Technology",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FDS",
    "name": "FACTSET RESEARCH SYSTEMS INC",
    "sector": "Financials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MGM",
    "name": "MGM RESORTS INTERNATIONAL",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NCLH",
    "name": "NORWEGIAN CRUISE LINE HOLDINGS LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "WYNN",
    "name": "WYNN RESORTS LTD",
    "sector": "Consumer Discretionary",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HSIC",
    "name": "HENRY SCHEIN INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "UHS",
    "name": "UNIVERSAL HEALTH SERVICES INC CLAS",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ARE",
    "name": "ALEXANDRIA REAL ESTATE EQUITIES RE",
    "sector": "Real Estate",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "BLDR",
    "name": "BUILDERS FIRSTSOURCE INC",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "DVA",
    "name": "DAVITA INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "HRL",
    "name": "HORMEL FOODS CORP",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TTD",
    "name": "TRADE DESK INC CLASS A",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MOS",
    "name": "MOSAIC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "FOX",
    "name": "FOX CORP CLASS B",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AOS",
    "name": "A O SMITH CORP",
    "sector": "Industrials",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MLIFT",
    "name": "CASH COLLATERAL USD MLIFT",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash Collateral and Margins",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TAP",
    "name": "MOLSON COORS BREWING CLASS B",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
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
    "symbol": "BFB",
    "name": "BROWN FORMAN CORP CLASS B",
    "sector": "Consumer Staples",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NWS",
    "name": "NEWS CORP CLASS B",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "PSKY",
    "name": "PARAMOUNT SKYDANCE CORP CLASS B",
    "sector": "Communication Services",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "GBP",
    "name": "GBP CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.0,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "EUR",
    "name": "EUR CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.0,
    "location": "European Union",
    "currency": "EUR"
  },
  {
    "symbol": "HOLX",
    "name": "HOLOGIC INC",
    "sector": "Healthcare",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "USD",
    "name": "USD/MXN",
    "sector": "Cash and/or Derivatives",
    "assetClass": "FX",
    "weight": 0.0,
    "location": "Mexico",
    "currency": "MXN"
  },
  {
    "symbol": "ESU6",
    "name": "S&P500 EMINI SEP 26",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Futures",
    "weight": 0.0,
    "location": "--",
    "currency": "USD"
  }
];
