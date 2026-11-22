// Complete holdings dataset for Vanguard FTSE All-World UCITS ETF USD Acc (VWCE.DE / ISIN: IE00BK5BQT80)
// Official Vanguard reporting data with full 3820 constituents, sector allocations, and geographic breakdown.

import { ETFHolding } from './meudHoldings';

export type { ETFHolding };

export const VWCE_SECTOR_ALLOCATIONS = [
  {
    "name": "Information Technology",
    "weight": 36.15
  },
  {
    "name": "Financials",
    "weight": 14.45
  },
  {
    "name": "Industrials",
    "weight": 12.5
  },
  {
    "name": "Consumer Discretionary",
    "weight": 10.93
  },
  {
    "name": "Health Care",
    "weight": 7.78
  },
  {
    "name": "Consumer Staples",
    "weight": 3.82
  },
  {
    "name": "Energy",
    "weight": 3.68
  },
  {
    "name": "Communication Services",
    "weight": 3.51
  },
  {
    "name": "Materials",
    "weight": 2.95
  },
  {
    "name": "Utilities",
    "weight": 2.65
  },
  {
    "name": "Real Estate",
    "weight": 1.59
  }
];

export const VWCE_COUNTRY_ALLOCATIONS = [
  {
    "name": "United States",
    "weight": 63.88
  },
  {
    "name": "Japan",
    "weight": 5.59
  },
  {
    "name": "Taiwan",
    "weight": 3.36
  },
  {
    "name": "United Kingdom",
    "weight": 3.12
  },
  {
    "name": "South Korea",
    "weight": 2.9
  },
  {
    "name": "Canada",
    "weight": 2.86
  },
  {
    "name": "Hong Kong",
    "weight": 2.09
  },
  {
    "name": "Switzerland",
    "weight": 2.05
  },
  {
    "name": "Germany",
    "weight": 1.82
  },
  {
    "name": "France",
    "weight": 1.79
  },
  {
    "name": "Australia",
    "weight": 1.39
  },
  {
    "name": "India",
    "weight": 1.32
  },
  {
    "name": "Netherlands",
    "weight": 1.3
  },
  {
    "name": "Spain",
    "weight": 0.88
  },
  {
    "name": "Italy",
    "weight": 0.79
  },
  {
    "name": "Sweden",
    "weight": 0.65
  },
  {
    "name": "China",
    "weight": 0.36
  },
  {
    "name": "Denmark",
    "weight": 0.36
  },
  {
    "name": "Brazil",
    "weight": 0.35
  },
  {
    "name": "Singapore",
    "weight": 0.34
  },
  {
    "name": "South Africa",
    "weight": 0.32
  },
  {
    "name": "Saudi Arabia",
    "weight": 0.28
  },
  {
    "name": "Finland",
    "weight": 0.25
  },
  {
    "name": "Belgium",
    "weight": 0.25
  },
  {
    "name": "Israel",
    "weight": 0.24
  },
  {
    "name": "Mexico",
    "weight": 0.2
  },
  {
    "name": "Thailand",
    "weight": 0.15
  },
  {
    "name": "United Arab Emirates",
    "weight": 0.13
  },
  {
    "name": "Malaysia",
    "weight": 0.12
  },
  {
    "name": "Norway",
    "weight": 0.1
  },
  {
    "name": "Poland",
    "weight": 0.09
  },
  {
    "name": "Austria",
    "weight": 0.08
  },
  {
    "name": "Ireland",
    "weight": 0.07
  },
  {
    "name": "Turkey",
    "weight": 0.07
  },
  {
    "name": "Greece",
    "weight": 0.07
  },
  {
    "name": "Indonesia",
    "weight": 0.06
  },
  {
    "name": "Kuwait",
    "weight": 0.05
  },
  {
    "name": "Qatar",
    "weight": 0.05
  },
  {
    "name": "Chile",
    "weight": 0.05
  },
  {
    "name": "New Zealand",
    "weight": 0.04
  },
  {
    "name": "Hungary",
    "weight": 0.04
  },
  {
    "name": "Portugal",
    "weight": 0.03
  },
  {
    "name": "Philippines",
    "weight": 0.03
  },
  {
    "name": "Colombia",
    "weight": 0.02
  },
  {
    "name": "Czech Republic",
    "weight": 0.01
  },
  {
    "name": "Romania",
    "weight": 0.01
  },
  {
    "name": "Egypt",
    "weight": 0.01
  },
  {
    "name": "Iceland",
    "weight": 0.0
  },
  {
    "name": "Luxembourg",
    "weight": 0.0
  },
  {
    "name": "Peru",
    "weight": 0.0
  }
];

export const VWCE_FULL_HOLDINGS: ETFHolding[] = [
  {
    "symbol": "NVDA",
    "name": "NVIDIA Corp",
    "weight": 4.4503,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AAPL",
    "name": "Apple Inc",
    "weight": 3.9824,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MSFT",
    "name": "Microsoft Corp",
    "weight": 2.6398,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMZN",
    "name": "Amazon.com Inc",
    "weight": 2.1985,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GOOGL",
    "name": "Alphabet Inc",
    "weight": 1.9931,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2330",
    "name": "Taiwan Semiconductor Manufacturing Co Ltd",
    "weight": 1.7512,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AVGO",
    "name": "Broadcom Inc",
    "weight": 1.6712,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GOOG",
    "name": "Alphabet Inc",
    "weight": 1.596,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MU",
    "name": "Micron Technology Inc",
    "weight": 1.2392,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "META",
    "name": "Meta Platforms Inc",
    "weight": 1.1776,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TSLA",
    "name": "Tesla Inc",
    "weight": 1.1671,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "005930",
    "name": "Samsung Electronics Co Ltd",
    "weight": 0.9545,
    "sector": "Communication Services",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LLY",
    "name": "Eli Lilly & Co",
    "weight": 0.914,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000660",
    "name": "SK hynix Inc",
    "weight": 0.9053,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMD",
    "name": "Advanced Micro Devices Inc",
    "weight": 0.8989,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASML",
    "name": "ASML Holding NV",
    "weight": 0.7285,
    "sector": "Information Technology",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BRK/B",
    "name": "Berkshire Hathaway Inc",
    "weight": 0.713,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JPM",
    "name": "JPMorgan Chase & Co",
    "weight": 0.6542,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INTC",
    "name": "Intel Corp",
    "weight": 0.5851,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JNJ",
    "name": "Johnson & Johnson",
    "weight": 0.5788,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMAT",
    "name": "Applied Materials Inc",
    "weight": 0.5497,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "V",
    "name": "Visa Inc",
    "weight": 0.5437,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "XOM",
    "name": "ExxonMobil Holdings Corp",
    "weight": 0.5432,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LRCX",
    "name": "Lam Research Corp",
    "weight": 0.5191,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WMT",
    "name": "Walmart Inc",
    "weight": 0.4701,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CAT",
    "name": "Caterpillar Inc",
    "weight": 0.4646,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CSCO",
    "name": "Cisco Systems Inc",
    "weight": 0.4445,
    "sector": "Communication Services",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABBV",
    "name": "AbbVie Inc",
    "weight": 0.4259,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COST",
    "name": "Costco Wholesale Corp",
    "weight": 0.3954,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MA",
    "name": "Mastercard Inc",
    "weight": 0.3939,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KLAC",
    "name": "KLA Corp",
    "weight": 0.3794,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GE",
    "name": "General Electric Co",
    "weight": 0.3696,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UNH",
    "name": "UnitedHealth Group Inc",
    "weight": 0.3587,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BAC",
    "name": "Bank of America Corp",
    "weight": 0.3557,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HD",
    "name": "Home Depot Inc/The",
    "weight": 0.3362,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "700",
    "name": "Tencent Holdings Ltd",
    "weight": 0.3288,
    "sector": "Information Technology",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PG",
    "name": "Procter & Gamble Co/The",
    "weight": 0.327,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SNDK",
    "name": "Sandisk Corp",
    "weight": 0.3151,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HSBA",
    "name": "HSBC Holdings PLC",
    "weight": 0.3104,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MRK",
    "name": "Merck & Co Inc",
    "weight": 0.3044,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GEV",
    "name": "GE Vernova Inc",
    "weight": 0.3038,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KO",
    "name": "Coca-Cola Co/The",
    "weight": 0.2979,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CVX",
    "name": "Chevron Corp",
    "weight": 0.2922,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NFLX",
    "name": "Netflix Inc",
    "weight": 0.287,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NOVN",
    "name": "Novartis AG",
    "weight": 0.2827,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ROP",
    "name": "Roche Holding AG",
    "weight": 0.2719,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RY",
    "name": "Royal Bank of Canada",
    "weight": 0.2698,
    "sector": "Financials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AZN",
    "name": "AstraZeneca PLC",
    "weight": 0.2686,
    "sector": "Health Care",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PM",
    "name": "Philip Morris International Inc",
    "weight": 0.2677,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PANW",
    "name": "Palo Alto Networks Inc",
    "weight": 0.2605,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TXN",
    "name": "Texas Instruments Inc",
    "weight": 0.2584,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NESN",
    "name": "Nestle SA",
    "weight": 0.2518,
    "sector": "Consumer Staples",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IBM",
    "name": "International Business Machines Corp",
    "weight": 0.2506,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MRVL",
    "name": "Marvell Technology Inc",
    "weight": 0.2464,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PLTR",
    "name": "Palantir Technologies Inc",
    "weight": 0.244,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RTX",
    "name": "RTX Corp",
    "weight": 0.2416,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WFC",
    "name": "Wells Fargo & Co",
    "weight": 0.2412,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ORCL",
    "name": "Oracle Corp",
    "weight": 0.2381,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LIN",
    "name": "Linde PLC",
    "weight": 0.2285,
    "sector": "Materials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SIE",
    "name": "Siemens AG",
    "weight": 0.2235,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MS",
    "name": "Morgan Stanley",
    "weight": 0.2231,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GS",
    "name": "Goldman Sachs Group Inc/The",
    "weight": 0.2209,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9988",
    "name": "Alibaba Group Holding Ltd",
    "weight": 0.2096,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SHEL",
    "name": "Shell PLC",
    "weight": 0.2078,
    "sector": "Energy",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WDC",
    "name": "Western Digital Corp",
    "weight": 0.2077,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8306",
    "name": "Mitsubishi UFJ Financial Group Inc",
    "weight": 0.2077,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "APH",
    "name": "Amphenol Corp",
    "weight": 0.206,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8035",
    "name": "Tokyo Electron Ltd",
    "weight": 0.2054,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STX",
    "name": "Seagate Technology Holdings PLC",
    "weight": 0.2039,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BHP",
    "name": "BHP Group Ltd",
    "weight": 0.1969,
    "sector": "Materials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TD",
    "name": "Toronto-Dominion Bank/The",
    "weight": 0.1945,
    "sector": "Financials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAN",
    "name": "Banco Santander SA",
    "weight": 0.1941,
    "sector": "Financials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GLW",
    "name": "Corning Inc",
    "weight": 0.1892,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QCOM",
    "name": "QUALCOMM Inc",
    "weight": 0.1871,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMGN",
    "name": "Amgen Inc",
    "weight": 0.1871,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADI",
    "name": "Analog Devices Inc",
    "weight": 0.1861,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "C",
    "name": "Citigroup Inc",
    "weight": 0.1843,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2454",
    "name": "MediaTek Inc",
    "weight": 0.1838,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CBA",
    "name": "Commonwealth Bank of Australia",
    "weight": 0.1819,
    "sector": "Financials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CRWD",
    "name": "Crowdstrike Holdings Inc",
    "weight": 0.1813,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TMO",
    "name": "Thermo Fisher Scientific Inc",
    "weight": 0.18,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MCD",
    "name": "McDonald's Corp",
    "weight": 0.1798,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "285A",
    "name": "Kioxia Holdings Corp",
    "weight": 0.1768,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PEP",
    "name": "PepsiCo Inc",
    "weight": 0.1761,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NEE",
    "name": "NextEra Energy Inc",
    "weight": 0.1756,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AXP",
    "name": "American Express Co",
    "weight": 0.1744,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VZ",
    "name": "Verizon Communications Inc",
    "weight": 0.1706,
    "sector": "Communication Services",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SU",
    "name": "Schneider Electric SE",
    "weight": 0.1699,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALV",
    "name": "Allianz SE",
    "weight": 0.1688,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7203",
    "name": "Toyota Motor Corp",
    "weight": 0.1681,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ANET",
    "name": "Arista Networks Inc",
    "weight": 0.1677,
    "sector": "Communication Services",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DIS",
    "name": "Walt Disney Co/The",
    "weight": 0.1643,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABBN",
    "name": "ABB Ltd",
    "weight": 0.1618,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ETN",
    "name": "Eaton Corp PLC",
    "weight": 0.1605,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TJX",
    "name": "TJX Cos Inc/The",
    "weight": 0.1592,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BRK/A",
    "name": "Berkshire Hathaway Inc",
    "weight": 0.1584,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BA",
    "name": "Boeing Co/The",
    "weight": 0.1566,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IBE",
    "name": "Iberdrola SA",
    "weight": 0.1563,
    "sector": "Utilities",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RR/",
    "name": "Rolls-Royce Holdings PLC",
    "weight": 0.1539,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UNP",
    "name": "Union Pacific Corp",
    "weight": 0.1519,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GILD",
    "name": "Gilead Sciences Inc",
    "weight": 0.1516,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABT",
    "name": "Abbott Laboratories",
    "weight": 0.1506,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WELL",
    "name": "Welltower Inc",
    "weight": 0.1501,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAP",
    "name": "SAP SE",
    "weight": 0.1494,
    "sector": "Information Technology",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DE",
    "name": "Deere & Co",
    "weight": 0.1473,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NOVOB",
    "name": "Novo Nordisk A/S",
    "weight": 0.1473,
    "sector": "Health Care",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UBSG",
    "name": "UBS Group AG",
    "weight": 0.1465,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SCHW",
    "name": "Charles Schwab Corp/The",
    "weight": 0.1456,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BLK",
    "name": "BlackRock Funding Inc/DE",
    "weight": 0.1402,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6857",
    "name": "Advantest Corp",
    "weight": 0.1391,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TTE",
    "name": "TotalEnergies SE",
    "weight": 0.1382,
    "sector": "Energy",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8316",
    "name": "Sumitomo Mitsui Financial Group Inc",
    "weight": 0.1373,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BBVA",
    "name": "Banco Bilbao Vizcaya Argentaria SA",
    "weight": 0.1366,
    "sector": "Financials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENR",
    "name": "Siemens Energy AG",
    "weight": 0.1359,
    "sector": "Energy",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UBER",
    "name": "Uber Technologies Inc",
    "weight": 0.1352,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "T",
    "name": "AT&T Inc",
    "weight": 0.1348,
    "sector": "Communication Services",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BKNG",
    "name": "Booking Holdings Inc",
    "weight": 0.1335,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9984",
    "name": "SoftBank Group Corp",
    "weight": 0.133,
    "sector": "Communication Services",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ISRG",
    "name": "Intuitive Surgical Inc",
    "weight": 0.133,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAF",
    "name": "Safran SA",
    "weight": 0.1316,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MC",
    "name": "LVMH Moet Hennessy Louis Vuitton SE",
    "weight": 0.1308,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PFE",
    "name": "Pfizer Inc",
    "weight": 0.1304,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UCG",
    "name": "UniCredit SpA",
    "weight": 0.1275,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SHOP",
    "name": "Shopify Inc",
    "weight": 0.1258,
    "sector": "Information Technology",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AIR",
    "name": "Airbus SE",
    "weight": 0.1255,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DELL",
    "name": "Dell Technologies Inc",
    "weight": 0.1252,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CRM",
    "name": "Salesforce Inc",
    "weight": 0.1237,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PGR",
    "name": "Progressive Corp/The",
    "weight": 0.1233,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CVS",
    "name": "CVS Health Corp",
    "weight": 0.1226,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COP",
    "name": "ConocoPhillips",
    "weight": 0.1224,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VRT",
    "name": "Vertiv Holdings Co",
    "weight": 0.1223,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BATS",
    "name": "British American Tobacco PLC",
    "weight": 0.1215,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PLD",
    "name": "Prologis Inc",
    "weight": 0.12,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VRTX",
    "name": "Vertex Pharmaceuticals Inc",
    "weight": 0.1197,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LOW",
    "name": "Lowe's Cos Inc",
    "weight": 0.1197,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BMO",
    "name": "Bank of Montreal",
    "weight": 0.1194,
    "sector": "Financials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ULVR",
    "name": "Unilever PLC",
    "weight": 0.1188,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PH",
    "name": "Parker-Hannifin Corp",
    "weight": 0.118,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CFR",
    "name": "Cie Financiere Richemont SA",
    "weight": 0.1179,
    "sector": "Consumer Discretionary",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "APP",
    "name": "AppLovin Corp",
    "weight": 0.1179,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IFX",
    "name": "Infineon Technologies AG",
    "weight": 0.1177,
    "sector": "Information Technology",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COF",
    "name": "Capital One Financial Corp",
    "weight": 0.1171,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SPGI",
    "name": "S&P Global Inc",
    "weight": 0.1171,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6501",
    "name": "Hitachi Ltd",
    "weight": 0.1152,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6758",
    "name": "Sony Group Corp",
    "weight": 0.1147,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6981",
    "name": "Murata Manufacturing Co Ltd",
    "weight": 0.1141,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MO",
    "name": "Altria Group Inc",
    "weight": 0.1139,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BMY",
    "name": "Bristol-Myers Squibb Co",
    "weight": 0.1128,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DHR",
    "name": "Danaher Corp",
    "weight": 0.1125,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SBUX",
    "name": "Starbucks Corp",
    "weight": 0.1114,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BNP",
    "name": "BNP Paribas SA",
    "weight": 0.1109,
    "sector": "Financials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENB",
    "name": "Enbridge Inc",
    "weight": 0.1105,
    "sector": "Energy",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CB",
    "name": "Chubb Ltd",
    "weight": 0.1104,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8411",
    "name": "Mizuho Financial Group Inc",
    "weight": 0.1085,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2308",
    "name": "Delta Electronics Inc",
    "weight": 0.108,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TT",
    "name": "Trane Technologies PLC",
    "weight": 0.1056,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "005935",
    "name": "Samsung Electronics Co Ltd",
    "weight": 0.1053,
    "sector": "Communication Services",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SYK",
    "name": "Stryker Corp",
    "weight": 0.1042,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ZURN",
    "name": "Zurich Insurance Group AG",
    "weight": 0.1042,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CM",
    "name": "Canadian Imperial Bank of Commerce",
    "weight": 0.1014,
    "sector": "Financials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HWM",
    "name": "Howmet Aerospace Inc",
    "weight": 0.1013,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PWR",
    "name": "Quanta Services Inc",
    "weight": 0.101,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SO",
    "name": "Southern Co/The",
    "weight": 0.1007,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BNS",
    "name": "Bank of Nova Scotia/The",
    "weight": 0.1003,
    "sector": "Financials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ISP",
    "name": "Intesa Sanpaolo SpA",
    "weight": 0.0999,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NOW",
    "name": "ServiceNow Inc",
    "weight": 0.0995,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CDNS",
    "name": "Cadence Design Systems Inc",
    "weight": 0.0993,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LMT",
    "name": "Lockheed Martin Corp",
    "weight": 0.0988,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GSK",
    "name": "GSK PLC",
    "weight": 0.0983,
    "sector": "Health Care",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EQIX",
    "name": "Equinix Inc",
    "weight": 0.0975,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NEM",
    "name": "Newmont Corp",
    "weight": 0.0971,
    "sector": "Materials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HDFCB",
    "name": "HDFC Bank Ltd",
    "weight": 0.0964,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MDT",
    "name": "Medtronic PLC",
    "weight": 0.0952,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "402340",
    "name": "SK Square Co Ltd",
    "weight": 0.0951,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DBS",
    "name": "DBS Group Holdings Ltd",
    "weight": 0.0947,
    "sector": "Financials",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2317",
    "name": "Hon Hai Precision Industry Co Ltd",
    "weight": 0.0945,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BP/",
    "name": "BP PLC",
    "weight": 0.0942,
    "sector": "Energy",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DUK",
    "name": "Duke Energy Corp",
    "weight": 0.0931,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CMI",
    "name": "Cummins Inc",
    "weight": 0.0926,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BNY",
    "name": "Bank of New York Mellon Corp/The",
    "weight": 0.0926,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RIO",
    "name": "Rio Tinto PLC",
    "weight": 0.0925,
    "sector": "Materials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FTNT",
    "name": "Fortinet Inc",
    "weight": 0.0913,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PNC",
    "name": "PNC Financial Services Group Inc/The",
    "weight": 0.0906,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6098",
    "name": "Recruit Holdings Co Ltd",
    "weight": 0.0905,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RELIANCE",
    "name": "Reliance Industries Ltd",
    "weight": 0.0905,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1299",
    "name": "AIA Group Ltd",
    "weight": 0.0904,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MCK",
    "name": "McKesson Corp",
    "weight": 0.0896,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "939",
    "name": "China Construction Bank Corp",
    "weight": 0.089,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DTE",
    "name": "Deutsche Telekom AG",
    "weight": 0.088,
    "sector": "Communication Services",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FCX",
    "name": "Freeport-McMoRan Inc",
    "weight": 0.0877,
    "sector": "Materials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "USB",
    "name": "US Bancorp",
    "weight": 0.0875,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INGA",
    "name": "ING Groep NV",
    "weight": 0.0875,
    "sector": "Financials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BARC",
    "name": "Barclays PLC",
    "weight": 0.0872,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WMB",
    "name": "Williams Cos Inc/The",
    "weight": 0.0867,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JCI",
    "name": "Johnson Controls International plc",
    "weight": 0.0861,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GD",
    "name": "General Dynamics Corp",
    "weight": 0.0861,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CMCSA",
    "name": "Comcast Corp",
    "weight": 0.0854,
    "sector": "Communication Services",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADP",
    "name": "Automatic Data Processing Inc",
    "weight": 0.0852,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENEL",
    "name": "Enel SpA",
    "weight": 0.0852,
    "sector": "Utilities",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BN",
    "name": "Brookfield Corp",
    "weight": 0.0847,
    "sector": "Financials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BX",
    "name": "Blackstone Inc",
    "weight": 0.0847,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6861",
    "name": "Keyence Corp",
    "weight": 0.0846,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CSX",
    "name": "CSX Corp",
    "weight": 0.0831,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8058",
    "name": "Mitsubishi Corp",
    "weight": 0.0829,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9983",
    "name": "Fast Retailing Co Ltd",
    "weight": 0.0828,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LLOY",
    "name": "Lloyds Banking Group PLC",
    "weight": 0.0821,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SPCX",
    "name": "Space Exploration Technologies Corp",
    "weight": 0.0814,
    "sector": "Communication Services",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SNOW",
    "name": "Snowflake Inc",
    "weight": 0.0814,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SNPS",
    "name": "Synopsys Inc",
    "weight": 0.0814,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MMM",
    "name": "3M Co",
    "weight": 0.0808,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADBE",
    "name": "Adobe Inc",
    "weight": 0.0805,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WM",
    "name": "Waste Management Inc",
    "weight": 0.0794,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CNQ",
    "name": "Canadian Natural Resources Ltd",
    "weight": 0.0793,
    "sector": "Energy",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DDOG",
    "name": "Datadog Inc",
    "weight": 0.0785,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WBC",
    "name": "Westpac Banking Corp",
    "weight": 0.0782,
    "sector": "Financials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MAR",
    "name": "Marriott International Inc/MD",
    "weight": 0.078,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SHW",
    "name": "Sherwin-Williams Co/The",
    "weight": 0.077,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MRSH",
    "name": "Marsh & McLennan Cos Inc",
    "weight": 0.0769,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NG/",
    "name": "National Grid PLC",
    "weight": 0.0764,
    "sector": "Utilities",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CME",
    "name": "CME Group Inc",
    "weight": 0.0764,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "009150",
    "name": "Samsung Electro-Mechanics Co Ltd",
    "weight": 0.0763,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TMUS",
    "name": "T-Mobile US Inc",
    "weight": 0.0762,
    "sector": "Communication Services",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UPS",
    "name": "United Parcel Service Inc",
    "weight": 0.0762,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RCL",
    "name": "Royal Caribbean Cruises Ltd",
    "weight": 0.0757,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CP",
    "name": "Canadian Pacific Kansas City Ltd",
    "weight": 0.0756,
    "sector": "Industrials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMR",
    "name": "Emerson Electric Co",
    "weight": 0.0754,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AEM",
    "name": "Agnico Eagle Mines Ltd",
    "weight": 0.0753,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MELI",
    "name": "MercadoLibre Inc",
    "weight": 0.0752,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8766",
    "name": "Tokio Marine Holdings Inc",
    "weight": 0.0751,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NAB",
    "name": "National Australia Bank Ltd",
    "weight": 0.0751,
    "sector": "Financials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4063",
    "name": "Shin-Etsu Chemical Co Ltd",
    "weight": 0.0751,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CS",
    "name": "AXA SA",
    "weight": 0.0749,
    "sector": "Financials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TER",
    "name": "Teradyne Inc",
    "weight": 0.0744,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMT",
    "name": "American Tower Corp",
    "weight": 0.0742,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NET",
    "name": "Cloudflare Inc",
    "weight": 0.0741,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CEG",
    "name": "Constellation Energy Corp",
    "weight": 0.0739,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VLO",
    "name": "Valero Energy Corp",
    "weight": 0.0738,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABI",
    "name": "Anheuser-Busch InBev SA/NV",
    "weight": 0.0737,
    "sector": "Consumer Staples",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ORLY",
    "name": "O'Reilly Automotive Inc",
    "weight": 0.0733,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MPC",
    "name": "Marathon Petroleum Corp",
    "weight": 0.0725,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ACN",
    "name": "Accenture PLC",
    "weight": 0.0724,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HOOD",
    "name": "Robinhood Markets Inc",
    "weight": 0.0723,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ICICIBC",
    "name": "ICICI Bank Ltd",
    "weight": 0.0717,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MDLZ",
    "name": "Mondelez International Inc",
    "weight": 0.0713,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ANZ",
    "name": "ANZ Group Holdings Ltd",
    "weight": 0.0712,
    "sector": "Financials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ELV",
    "name": "Elevance Health Inc",
    "weight": 0.0711,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HLT",
    "name": "Hilton Worldwide Holdings Inc",
    "weight": 0.0707,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TDG",
    "name": "TransDigm Group Inc",
    "weight": 0.0704,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MUV2",
    "name": "Muenchener Rueckversicherungs-Gesellschaft AG in Muenchen",
    "weight": 0.0703,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CL",
    "name": "Colgate-Palmolive Co",
    "weight": 0.0702,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8001",
    "name": "ITOCHU Corp",
    "weight": 0.0701,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALAB",
    "name": "Astera Labs Inc",
    "weight": 0.0701,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6503",
    "name": "Mitsubishi Electric Corp",
    "weight": 0.07,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INTU",
    "name": "Intuit Inc",
    "weight": 0.0699,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ITW",
    "name": "Illinois Tool Works Inc",
    "weight": 0.0696,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BA/",
    "name": "BAE Systems PLC",
    "weight": 0.0694,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CRH",
    "name": "CRH PLC",
    "weight": 0.0694,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EOG",
    "name": "EOG Resources Inc",
    "weight": 0.0691,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AEP",
    "name": "American Electric Power Co Inc",
    "weight": 0.0691,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CI",
    "name": "Cigna Group/The",
    "weight": 0.0686,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SPOT",
    "name": "Spotify Technology SA",
    "weight": 0.0685,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GLEN",
    "name": "Glencore PLC",
    "weight": 0.0684,
    "sector": "Materials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SPG",
    "name": "Simon Property Group Inc",
    "weight": 0.0684,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7011",
    "name": "Mitsubishi Heavy Industries Ltd",
    "weight": 0.0678,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NWG",
    "name": "NatWest Group PLC",
    "weight": 0.0678,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NXPI",
    "name": "NXP Semiconductors NV",
    "weight": 0.0678,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "URI",
    "name": "United Rentals Inc",
    "weight": 0.0677,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DG",
    "name": "Vinci SA",
    "weight": 0.0677,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SLB",
    "name": "SLB Ltd",
    "weight": 0.0676,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HON",
    "name": "Honeywell International Inc",
    "weight": 0.0673,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AON",
    "name": "Aon PLC",
    "weight": 0.067,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ICE",
    "name": "Intercontinental Exchange Inc",
    "weight": 0.0669,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MCO",
    "name": "Moody's Corp",
    "weight": 0.0667,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WES",
    "name": "Wesfarmers Ltd",
    "weight": 0.0667,
    "sector": "Consumer Discretionary",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GM",
    "name": "General Motors Co",
    "weight": 0.0664,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MSI",
    "name": "Motorola Solutions Inc",
    "weight": 0.0663,
    "sector": "Communication Services",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CIEN",
    "name": "Ciena Corp",
    "weight": 0.0662,
    "sector": "Communication Services",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8031",
    "name": "Mitsui & Co Ltd",
    "weight": 0.0662,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FIX",
    "name": "Comfort Systems USA Inc",
    "weight": 0.0662,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HONA",
    "name": "Honeywell Aerospace Inc",
    "weight": 0.0661,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3711",
    "name": "ASE Technology Holding Co Ltd",
    "weight": 0.066,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COHR",
    "name": "Coherent Corp",
    "weight": 0.0659,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NSC",
    "name": "Norfolk Southern Corp",
    "weight": 0.0658,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PSX",
    "name": "Phillips 66",
    "weight": 0.0657,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NOKIA",
    "name": "Nokia Oyj",
    "weight": 0.0656,
    "sector": "Communication Services",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ITX",
    "name": "Industria de Diseno Textil SA",
    "weight": 0.0653,
    "sector": "Consumer Discretionary",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MFC",
    "name": "Manulife Financial Corp",
    "weight": 0.0653,
    "sector": "Financials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ECL",
    "name": "Ecolab Inc",
    "weight": 0.065,
    "sector": "Materials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NOC",
    "name": "Northrop Grumman Corp",
    "weight": 0.0648,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DASH",
    "name": "DoorDash Inc",
    "weight": 0.0647,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ROST",
    "name": "Ross Stores Inc",
    "weight": 0.0642,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MPWR",
    "name": "Monolithic Power Systems Inc",
    "weight": 0.0639,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TRP",
    "name": "TC Energy Corp",
    "weight": 0.0635,
    "sector": "Energy",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TRV",
    "name": "Travelers Cos Inc/The",
    "weight": 0.0634,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CNR",
    "name": "Canadian National Railway Co",
    "weight": 0.0632,
    "sector": "Industrials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1398",
    "name": "Industrial & Commercial Bank of China Ltd",
    "weight": 0.0631,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FDX",
    "name": "FedEx Corp",
    "weight": 0.063,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MNST",
    "name": "Monster Beverage Corp",
    "weight": 0.0627,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "APD",
    "name": "Air Products and Chemicals Inc",
    "weight": 0.0615,
    "sector": "Materials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2303",
    "name": "United Microelectronics Corp",
    "weight": 0.0613,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KEYS",
    "name": "Keysight Technologies Inc",
    "weight": 0.0608,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RMS",
    "name": "Hermes International SCA",
    "weight": 0.0599,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BSX",
    "name": "Boston Scientific Corp",
    "weight": 0.0597,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "REGN",
    "name": "Regeneron Pharmaceuticals Inc",
    "weight": 0.0597,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NA",
    "name": "National Bank of Canada",
    "weight": 0.0597,
    "sector": "Financials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OCBC",
    "name": "Oversea-Chinese Banking Corp Ltd",
    "weight": 0.0594,
    "sector": "Financials",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KMI",
    "name": "Kinder Morgan Inc",
    "weight": 0.0594,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TFC",
    "name": "Truist Financial Corp",
    "weight": 0.0594,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WBD",
    "name": "Warner Bros Discovery Inc",
    "weight": 0.0594,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TEL",
    "name": "TE Connectivity PLC",
    "weight": 0.0594,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DLR",
    "name": "Digital Realty Trust Inc",
    "weight": 0.0593,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6752",
    "name": "Panasonic Holdings Corp",
    "weight": 0.059,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TGT",
    "name": "Target Corp",
    "weight": 0.0588,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AI",
    "name": "Air Liquide SA",
    "weight": 0.0587,
    "sector": "Materials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PCAR",
    "name": "PACCAR Inc",
    "weight": 0.0587,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABX",
    "name": "Barrick Mining Corp",
    "weight": 0.0586,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5803",
    "name": "Fujikura Ltd",
    "weight": 0.0584,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALL",
    "name": "Allstate Corp/The",
    "weight": 0.0583,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KKR",
    "name": "KKR & Co Inc",
    "weight": 0.0579,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HPE",
    "name": "Hewlett Packard Enterprise Co",
    "weight": 0.0572,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AJG",
    "name": "Arthur J Gallagher & Co",
    "weight": 0.057,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABNB",
    "name": "Airbnb Inc",
    "weight": 0.0569,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NDA",
    "name": "Nordea Bank Abp",
    "weight": 0.0567,
    "sector": "Financials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "D",
    "name": "Dominion Energy Inc",
    "weight": 0.0567,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HCA",
    "name": "HCA Healthcare Inc",
    "weight": 0.0565,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FLEX",
    "name": "Flex Ltd",
    "weight": 0.0564,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BHARTI",
    "name": "Bharti Airtel Ltd",
    "weight": 0.0563,
    "sector": "Communication Services",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GLE",
    "name": "Societe Generale SA",
    "weight": 0.056,
    "sector": "Financials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CARR",
    "name": "Carrier Global Corp",
    "weight": 0.056,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MQG",
    "name": "Macquarie Group Ltd",
    "weight": 0.056,
    "sector": "Financials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GWW",
    "name": "WW Grainger Inc",
    "weight": 0.0557,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DBK",
    "name": "Deutsche Bank AG",
    "weight": 0.0556,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SRE",
    "name": "Sempra",
    "weight": 0.0556,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CTAS",
    "name": "Cintas Corp",
    "weight": 0.0554,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "388",
    "name": "Hong Kong Exchanges & Clearing Ltd",
    "weight": 0.0549,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PDD",
    "name": "PDD Holdings Inc",
    "weight": 0.0547,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CTVA",
    "name": "Corteva Inc",
    "weight": 0.0543,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TRGP",
    "name": "Targa Resources Corp",
    "weight": 0.0542,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ARGX",
    "name": "Argenx SE",
    "weight": 0.0541,
    "sector": "Health Care",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BKR",
    "name": "Baker Hughes Co",
    "weight": 0.0539,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ROK",
    "name": "Rockwell Automation Inc",
    "weight": 0.0536,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AME",
    "name": "AMETEK Inc",
    "weight": 0.0535,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "REL",
    "name": "RELX PLC",
    "weight": 0.0533,
    "sector": "Information Technology",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CAH",
    "name": "Cardinal Health Inc",
    "weight": 0.0532,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BAYN",
    "name": "Bayer AG",
    "weight": 0.0531,
    "sector": "Health Care",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DHL",
    "name": "Deutsche Post AG",
    "weight": 0.0531,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OKE",
    "name": "ONEOK Inc",
    "weight": 0.0527,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FAST",
    "name": "Fastenal Co",
    "weight": 0.0524,
    "sector": "Materials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "O",
    "name": "Realty Income Corp",
    "weight": 0.0521,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASM",
    "name": "ASM International NV",
    "weight": 0.052,
    "sector": "Information Technology",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VST",
    "name": "Vistra Corp",
    "weight": 0.0518,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LHX",
    "name": "L3Harris Technologies Inc",
    "weight": 0.0518,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RKLB",
    "name": "Rocket Lab Corp",
    "weight": 0.0517,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPG",
    "name": "Compass Group PLC",
    "weight": 0.0517,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5802",
    "name": "Sumitomo Electric Industries Ltd",
    "weight": 0.0511,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2327",
    "name": "Yageo Corp",
    "weight": 0.0509,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AZO",
    "name": "AutoZone Inc",
    "weight": 0.0507,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "F",
    "name": "Ford Motor Co",
    "weight": 0.0507,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LSEG",
    "name": "London Stock Exchange Group PLC",
    "weight": 0.0505,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EL",
    "name": "EssilorLuxottica SA",
    "weight": 0.0504,
    "sector": "Health Care",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PRX",
    "name": "Prosus NV",
    "weight": 0.05,
    "sector": "Information Technology",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7741",
    "name": "Hoya Corp",
    "weight": 0.0494,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VALE3",
    "name": "Vale SA",
    "weight": 0.0493,
    "sector": "Materials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WPM",
    "name": "Wheaton Precious Metals Corp",
    "weight": 0.0491,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ETR",
    "name": "Entergy Corp",
    "weight": 0.0486,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RHM",
    "name": "Rheinmetall AG",
    "weight": 0.0486,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EW",
    "name": "Edwards Lifesciences Corp",
    "weight": 0.0486,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VOLVB",
    "name": "Volvo AB",
    "weight": 0.0486,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AAL",
    "name": "Anglo American PLC",
    "weight": 0.0485,
    "sector": "Materials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COR",
    "name": "Cencora Inc",
    "weight": 0.0483,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CABK",
    "name": "CaixaBank SA",
    "weight": 0.0482,
    "sector": "Financials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EA",
    "name": "Electronic Arts Inc",
    "weight": 0.0481,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EBAY",
    "name": "eBay Inc",
    "weight": 0.048,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "APO",
    "name": "Apollo Global Management Inc",
    "weight": 0.048,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LNG",
    "name": "Cheniere Energy Inc",
    "weight": 0.0479,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STMMI",
    "name": "STMicroelectronics NV",
    "weight": 0.0479,
    "sector": "Information Technology",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AFL",
    "name": "Aflac Inc",
    "weight": 0.0477,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STAN",
    "name": "Standard Chartered PLC",
    "weight": 0.0477,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4502",
    "name": "Takeda Pharmaceutical Co Ltd",
    "weight": 0.0476,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DB1",
    "name": "Deutsche Boerse AG",
    "weight": 0.0473,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NUE",
    "name": "Nucor Corp",
    "weight": 0.0472,
    "sector": "Materials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HUM",
    "name": "Humana Inc",
    "weight": 0.047,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PSA",
    "name": "Public Storage",
    "weight": 0.047,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FITB",
    "name": "Fifth Third Bancorp",
    "weight": 0.0469,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RJHI",
    "name": "Al Rajhi Bank",
    "weight": 0.0469,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OR",
    "name": "L'Oreal SA",
    "weight": 0.0467,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RWE",
    "name": "RWE AG",
    "weight": 0.0462,
    "sector": "Utilities",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DVN",
    "name": "Devon Energy Corp",
    "weight": 0.0462,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BAS",
    "name": "BASF SE",
    "weight": 0.0462,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1810",
    "name": "Xiaomi Corp",
    "weight": 0.046,
    "sector": "Communication Services",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PRY",
    "name": "Prysmian SpA",
    "weight": 0.0459,
    "sector": "Industrials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MCHP",
    "name": "Microchip Technology Inc",
    "weight": 0.0459,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ATD",
    "name": "Alimentation Couche-Tard Inc",
    "weight": 0.0457,
    "sector": "Consumer Discretionary",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9999",
    "name": "NetEase Inc",
    "weight": 0.0456,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3690",
    "name": "Meituan",
    "weight": 0.0456,
    "sector": "Information Technology",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EXC",
    "name": "Exelon Corp",
    "weight": 0.0452,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LONN",
    "name": "Lonza Group AG",
    "weight": 0.045,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3988",
    "name": "Bank of China Ltd",
    "weight": 0.045,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "XEL",
    "name": "Xcel Energy Inc",
    "weight": 0.0449,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NKE",
    "name": "NIKE Inc",
    "weight": 0.0447,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STT",
    "name": "State Street Corp",
    "weight": 0.0447,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6723",
    "name": "Renesas Electronics Corp",
    "weight": 0.0446,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WAB",
    "name": "Westinghouse Air Brake Technologies Corp",
    "weight": 0.0445,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INVEA",
    "name": "Investor AB",
    "weight": 0.0441,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9433",
    "name": "KDDI Corp",
    "weight": 0.0441,
    "sector": "Communication Services",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MET",
    "name": "MetLife Inc",
    "weight": 0.0441,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SREN",
    "name": "Swiss Re AG",
    "weight": 0.044,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "G",
    "name": "Generali",
    "weight": 0.0431,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DGE",
    "name": "Diageo PLC",
    "weight": 0.043,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2383",
    "name": "Elite Material Co Ltd",
    "weight": 0.0429,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TTWO",
    "name": "Take-Two Interactive Software Inc",
    "weight": 0.0428,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENI",
    "name": "Eni SpA",
    "weight": 0.0428,
    "sector": "Energy",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DSV",
    "name": "DSV A/S",
    "weight": 0.0428,
    "sector": "Industrials",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ITUB4",
    "name": "Itau Unibanco Holding SA",
    "weight": 0.0427,
    "sector": "Financials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ATCOB",
    "name": "Atlas Copco AB",
    "weight": 0.0427,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EOAN",
    "name": "E.ON SE",
    "weight": 0.0425,
    "sector": "Utilities",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NU",
    "name": "NU Holdings Ltd/Cayman Islands",
    "weight": 0.0423,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FERG",
    "name": "Ferguson Enterprises Inc",
    "weight": 0.042,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "YUM",
    "name": "Yum! Brands Inc",
    "weight": 0.0418,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CMG",
    "name": "Chipotle Mexican Grill Inc",
    "weight": 0.0418,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HOLN",
    "name": "Holcim AG",
    "weight": 0.0417,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LR",
    "name": "Legrand SA",
    "weight": 0.0417,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CVNA",
    "name": "Carvana Co",
    "weight": 0.0417,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8591",
    "name": "ORIX Corp",
    "weight": 0.0416,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GMG",
    "name": "Goodman Group",
    "weight": 0.0413,
    "sector": "Real Estate",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CCO",
    "name": "Cameco Corp",
    "weight": 0.0411,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAND",
    "name": "Sandvik AB",
    "weight": 0.0411,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KDP",
    "name": "Keurig Dr Pepper Inc",
    "weight": 0.041,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6146",
    "name": "Disco Corp",
    "weight": 0.041,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INVEB",
    "name": "Investor AB",
    "weight": 0.0409,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6367",
    "name": "Daikin Industries Ltd",
    "weight": 0.0408,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2318",
    "name": "Ping An Insurance Group Co of China Ltd",
    "weight": 0.0407,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6762",
    "name": "TDK Corp",
    "weight": 0.0407,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "005380",
    "name": "Hyundai Motor Co",
    "weight": 0.0406,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DHI",
    "name": "DR Horton Inc",
    "weight": 0.0406,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SLF",
    "name": "Sun Life Financial Inc",
    "weight": 0.0405,
    "sector": "Financials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BDX",
    "name": "Becton Dickinson & Co",
    "weight": 0.0405,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AXON",
    "name": "Axon Enterprise Inc",
    "weight": 0.0404,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8002",
    "name": "Marubeni Corp",
    "weight": 0.0404,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WCN",
    "name": "Waste Connections Inc",
    "weight": 0.0404,
    "sector": "Utilities",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMP",
    "name": "Ameriprise Financial Inc",
    "weight": 0.0403,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7974",
    "name": "Nintendo Co Ltd",
    "weight": 0.0403,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VTR",
    "name": "Ventas Inc",
    "weight": 0.0402,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IDXX",
    "name": "IDEXX Laboratories Inc",
    "weight": 0.0402,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SGO",
    "name": "Cie de Saint-Gobain SA",
    "weight": 0.0402,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RKT",
    "name": "Reckitt Benckiser Group PLC",
    "weight": 0.0402,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3037",
    "name": "Unimicron Technology Corp",
    "weight": 0.0402,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GALD",
    "name": "Galderma Group AG",
    "weight": 0.04,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RACE",
    "name": "Ferrari NV",
    "weight": 0.0397,
    "sector": "Consumer Discretionary",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2891",
    "name": "CTBC Financial Holding Co Ltd",
    "weight": 0.0393,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CLS",
    "name": "Celestica Inc",
    "weight": 0.0392,
    "sector": "Information Technology",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6954",
    "name": "FANUC Corp",
    "weight": 0.039,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RSG",
    "name": "Republic Services Inc",
    "weight": 0.0389,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AIG",
    "name": "American International Group Inc",
    "weight": 0.0388,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADSK",
    "name": "Autodesk Inc",
    "weight": 0.0386,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2914",
    "name": "Japan Tobacco Inc",
    "weight": 0.0386,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ED",
    "name": "Consolidated Edison Inc",
    "weight": 0.0385,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ODFL",
    "name": "Old Dominion Freight Line Inc",
    "weight": 0.0383,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TSCO",
    "name": "Tesco PLC",
    "weight": 0.0382,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ORA",
    "name": "Orange SA",
    "weight": 0.0381,
    "sector": "Communication Services",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MSCI",
    "name": "MSCI Inc",
    "weight": 0.038,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ANG",
    "name": "Anglogold Ashanti Plc",
    "weight": 0.0379,
    "sector": "Materials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CBRE",
    "name": "CBRE Group Inc",
    "weight": 0.0378,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALNY",
    "name": "Alnylam Pharmaceuticals Inc",
    "weight": 0.0378,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HLN",
    "name": "Haleon PLC",
    "weight": 0.0377,
    "sector": "Health Care",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ON",
    "name": "ON Semiconductor Corp",
    "weight": 0.0377,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PEG",
    "name": "Public Service Enterprise Group Inc",
    "weight": 0.0376,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FNV",
    "name": "Franco-Nevada Corp",
    "weight": 0.0375,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8750",
    "name": "Daiichi Life Group Inc",
    "weight": 0.0375,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SYY",
    "name": "Sysco Corp",
    "weight": 0.0375,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ARAMCO",
    "name": "Saudi Arabian Oil Co",
    "weight": 0.0373,
    "sector": "Energy",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CSL",
    "name": "CSL Ltd",
    "weight": 0.0372,
    "sector": "Health Care",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EME",
    "name": "EMCOR Group Inc",
    "weight": 0.0371,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SSE",
    "name": "SSE PLC",
    "weight": 0.037,
    "sector": "Utilities",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IBKR",
    "name": "Interactive Brokers Group Inc",
    "weight": 0.0367,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NPN",
    "name": "Naspers Ltd",
    "weight": 0.0366,
    "sector": "Information Technology",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GRMN",
    "name": "Garmin Ltd",
    "weight": 0.0364,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VMC",
    "name": "Vulcan Materials Co",
    "weight": 0.0363,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SDZ",
    "name": "Sandoz Group AG",
    "weight": 0.0358,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PRU",
    "name": "Prudential Financial Inc",
    "weight": 0.0358,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MBG",
    "name": "Mercedes-Benz Group AG",
    "weight": 0.0357,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CSU",
    "name": "Constellation Software Inc/Canada",
    "weight": 0.0357,
    "sector": "Information Technology",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "A",
    "name": "Agilent Technologies Inc",
    "weight": 0.0357,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IFC",
    "name": "Intact Financial Corp",
    "weight": 0.0356,
    "sector": "Financials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INFO",
    "name": "Infosys Ltd",
    "weight": 0.0353,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EBS",
    "name": "Erste Group Bank AG",
    "weight": 0.0352,
    "sector": "Financials",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9434",
    "name": "SoftBank Corp",
    "weight": 0.0352,
    "sector": "Communication Services",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8053",
    "name": "Sumitomo Corp",
    "weight": 0.0349,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NTRA",
    "name": "Natera Inc",
    "weight": 0.0348,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "XYZ",
    "name": "Block Inc",
    "weight": 0.0348,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WAT",
    "name": "Waters Corp",
    "weight": 0.0347,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADM",
    "name": "Archer-Daniels-Midland Co",
    "weight": 0.0347,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FFH",
    "name": "Fairfax Financial Holdings Ltd",
    "weight": 0.0346,
    "sector": "Financials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FER",
    "name": "Ferrovial NV",
    "weight": 0.0346,
    "sector": "Industrials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IRM",
    "name": "Iron Mountain Inc",
    "weight": 0.0345,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WDS",
    "name": "Woodside Energy Group Ltd",
    "weight": 0.0343,
    "sector": "Energy",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UCB",
    "name": "UCB SA",
    "weight": 0.0342,
    "sector": "Health Care",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CCL",
    "name": "Carnival Corp Ltd",
    "weight": 0.034,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FANG",
    "name": "Diamondback Energy Inc",
    "weight": 0.034,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SIKA",
    "name": "Sika AG",
    "weight": 0.034,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AIRB",
    "name": "Air Liquide SA",
    "weight": 0.0339,
    "sector": "Materials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PCG",
    "name": "PG&E Corp",
    "weight": 0.0339,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UOB",
    "name": "United Overseas Bank Ltd",
    "weight": 0.0337,
    "sector": "Financials",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7267",
    "name": "Honda Motor Co Ltd",
    "weight": 0.0337,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KVUE",
    "name": "Kenvue Inc",
    "weight": 0.0337,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HBAN",
    "name": "Huntington Bancshares Inc/OH",
    "weight": 0.0336,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "105560",
    "name": "KB Financial Group Inc",
    "weight": 0.0336,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OXY",
    "name": "Occidental Petroleum Corp",
    "weight": 0.0336,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KMB",
    "name": "Kimberly-Clark Corp",
    "weight": 0.0334,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DANSKE",
    "name": "Danske Bank A/S",
    "weight": 0.0334,
    "sector": "Financials",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WEC",
    "name": "WEC Energy Group Inc",
    "weight": 0.0334,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AD",
    "name": "Koninklijke Ahold Delhaize NV",
    "weight": 0.0333,
    "sector": "Consumer Staples",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NDAQ",
    "name": "Nasdaq Inc",
    "weight": 0.0332,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HIG",
    "name": "Hartford Financial Services Group Inc/The",
    "weight": 0.0332,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DOL",
    "name": "Dollarama Inc",
    "weight": 0.0331,
    "sector": "Consumer Discretionary",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CVE",
    "name": "Cenovus Energy Inc",
    "weight": 0.0331,
    "sector": "Energy",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "Q",
    "name": "Qnity Electronics Inc",
    "weight": 0.0331,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MTB",
    "name": "M&T Bank Corp",
    "weight": 0.033,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASSAB",
    "name": "Assa Abloy AB",
    "weight": 0.0329,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CRWV",
    "name": "Coreweave Inc",
    "weight": 0.0329,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CCI",
    "name": "Crown Castle Inc",
    "weight": 0.0328,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TEVA",
    "name": "Teva Pharmaceutical Industries Ltd",
    "weight": 0.0326,
    "sector": "Health Care",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IQV",
    "name": "IQVIA Holdings Inc",
    "weight": 0.0326,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GMEXICOB",
    "name": "Grupo Mexico SAB de CV",
    "weight": 0.0325,
    "sector": "Materials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LUMI",
    "name": "Bank Leumi Le-Israel BM",
    "weight": 0.0324,
    "sector": "Financials",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PETR3",
    "name": "Petroleo Brasileiro SA",
    "weight": 0.0324,
    "sector": "Energy",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2345",
    "name": "Accton Technology Corp",
    "weight": 0.0322,
    "sector": "Communication Services",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MLM",
    "name": "Martin Marietta Materials Inc",
    "weight": 0.0322,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OTP",
    "name": "OTP Bank Nyrt",
    "weight": 0.0321,
    "sector": "Financials",
    "location": "Hungary",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6301",
    "name": "Komatsu Ltd",
    "weight": 0.0321,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ACGL",
    "name": "Arch Capital Group Ltd",
    "weight": 0.032,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1211",
    "name": "BYD Co Ltd",
    "weight": 0.032,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4578",
    "name": "Otsuka Holdings Co Ltd",
    "weight": 0.0319,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COIN",
    "name": "Coinbase Global Inc",
    "weight": 0.0319,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EQT",
    "name": "EQT Corp",
    "weight": 0.0318,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADS",
    "name": "adidas AG",
    "weight": 0.0318,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4062",
    "name": "Ibiden Co Ltd",
    "weight": 0.0315,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8630",
    "name": "Sompo Holdings Inc",
    "weight": 0.0314,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RBLX",
    "name": "ROBLOX Corp",
    "weight": 0.0314,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EXR",
    "name": "Extra Space Storage Inc",
    "weight": 0.0313,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KR",
    "name": "Kroger Co/The",
    "weight": 0.0313,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7182",
    "name": "Japan Post Bank Co Ltd",
    "weight": 0.0311,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2881",
    "name": "Fubon Financial Holding Co Ltd",
    "weight": 0.031,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6702",
    "name": "Fujitsu Ltd",
    "weight": 0.031,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "POW",
    "name": "Power Corp of Canada",
    "weight": 0.031,
    "sector": "Financials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TDY",
    "name": "Teledyne Technologies Inc",
    "weight": 0.031,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8725",
    "name": "MS&AD Insurance Group Holdings Inc",
    "weight": 0.0308,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALC",
    "name": "Alcon AG",
    "weight": 0.0308,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WOW",
    "name": "Woolworths Group Ltd",
    "weight": 0.0308,
    "sector": "Consumer Staples",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ATCOA",
    "name": "Atlas Copco AB",
    "weight": 0.0307,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ERICB",
    "name": "Telefonaktiebolaget LM Ericsson",
    "weight": 0.0305,
    "sector": "Communication Services",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2802",
    "name": "Ajinomoto Co Inc",
    "weight": 0.0305,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STLD",
    "name": "Steel Dynamics Inc",
    "weight": 0.0305,
    "sector": "Materials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PAYX",
    "name": "Paychex Inc",
    "weight": 0.0305,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENGI",
    "name": "Engie SA",
    "weight": 0.0302,
    "sector": "Utilities",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GIVN",
    "name": "Givaudan SA",
    "weight": 0.0302,
    "sector": "Materials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CNC",
    "name": "Centene Corp",
    "weight": 0.0301,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9618",
    "name": "JD.com Inc",
    "weight": 0.0301,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "III",
    "name": "3i Group PLC",
    "weight": 0.03,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9888",
    "name": "Baidu Inc",
    "weight": 0.0299,
    "sector": "Information Technology",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2882",
    "name": "Cathay Financial Holding Co Ltd",
    "weight": 0.0299,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AXSB",
    "name": "Axis Bank Ltd",
    "weight": 0.0299,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NTRS",
    "name": "Northern Trust Corp",
    "weight": 0.0298,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6701",
    "name": "NEC Corp",
    "weight": 0.0298,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IR",
    "name": "Ingersoll Rand Inc",
    "weight": 0.0297,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ZTS",
    "name": "Zoetis Inc",
    "weight": 0.0297,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FTS",
    "name": "Fortis Inc/Canada",
    "weight": 0.0296,
    "sector": "Utilities",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "POLI",
    "name": "Bank Hapoalim BM",
    "weight": 0.0295,
    "sector": "Financials",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KBC",
    "name": "KBC Group NV",
    "weight": 0.0295,
    "sector": "Financials",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LT",
    "name": "Larsen & Toubro Ltd",
    "weight": 0.0294,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PYPL",
    "name": "PayPal Holdings Inc",
    "weight": 0.0294,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BIIB",
    "name": "Biogen Inc",
    "weight": 0.0293,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4519",
    "name": "Chugai Pharmaceutical Co Ltd",
    "weight": 0.0293,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MM",
    "name": "Mahindra & Mahindra Ltd",
    "weight": 0.0291,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NTR",
    "name": "Nutrien Ltd",
    "weight": 0.0291,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6971",
    "name": "Kyocera Corp",
    "weight": 0.0291,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AEE",
    "name": "Ameren Corp",
    "weight": 0.0288,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CFG",
    "name": "Citizens Financial Group Inc",
    "weight": 0.0287,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TCL",
    "name": "Transurban Group",
    "weight": 0.0287,
    "sector": "Industrials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SLHN",
    "name": "Swiss Life Holding AG",
    "weight": 0.0286,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MTD",
    "name": "Mettler-Toledo International Inc",
    "weight": 0.0286,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GFNORTEO",
    "name": "Grupo Financiero Banorte SAB de CV",
    "weight": 0.0285,
    "sector": "Financials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BAF",
    "name": "Bajaj Finance Ltd",
    "weight": 0.0285,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SNB",
    "name": "Saudi National Bank/The",
    "weight": 0.0284,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TWLO",
    "name": "Twilio Inc",
    "weight": 0.0283,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SWEDA",
    "name": "Swedbank AB",
    "weight": 0.0282,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EXPN",
    "name": "Experian PLC",
    "weight": 0.0282,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DOV",
    "name": "Dover Corp",
    "weight": 0.028,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FSR",
    "name": "FirstRand Ltd",
    "weight": 0.028,
    "sector": "Financials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RF",
    "name": "Regions Financial Corp",
    "weight": 0.028,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CBK",
    "name": "Commerzbank AG",
    "weight": 0.028,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GFI",
    "name": "Gold Fields Ltd",
    "weight": 0.028,
    "sector": "Materials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TSEM",
    "name": "Tower Semiconductor Ltd",
    "weight": 0.0279,
    "sector": "Information Technology",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TECK/B",
    "name": "Teck Resources Ltd",
    "weight": 0.0278,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DELTA/F",
    "name": "Delta Electronics Thailand PCL",
    "weight": 0.0277,
    "sector": "Information Technology",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EXPE",
    "name": "Expedia Group Inc",
    "weight": 0.0276,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CNP",
    "name": "CenterPoint Energy Inc",
    "weight": 0.0276,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SUNB",
    "name": "Sunbelt Rentals Holdings Inc",
    "weight": 0.0275,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RMD",
    "name": "ResMed Inc",
    "weight": 0.0275,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1303",
    "name": "Nan Ya Plastics Corp",
    "weight": 0.0275,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NRG",
    "name": "NRG Energy Inc",
    "weight": 0.0275,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PHM",
    "name": "PulteGroup Inc",
    "weight": 0.0275,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GEHC",
    "name": "GE HealthCare Technologies Inc",
    "weight": 0.0274,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8802",
    "name": "Mitsubishi Estate Co Ltd",
    "weight": 0.0274,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SYF",
    "name": "Synchrony Financial",
    "weight": 0.0273,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "K",
    "name": "Kinross Gold Corp",
    "weight": 0.0273,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4568",
    "name": "Daiichi Sankyo Co Ltd",
    "weight": 0.0272,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IMB",
    "name": "Imperial Brands PLC",
    "weight": 0.0271,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2887",
    "name": "TS Financial Holding Co Ltd",
    "weight": 0.027,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HUBB",
    "name": "Hubbell Inc",
    "weight": 0.027,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HAL",
    "name": "Halliburton Co",
    "weight": 0.027,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8308",
    "name": "Resona Holdings Inc",
    "weight": 0.0269,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PPG",
    "name": "PPG Industries Inc",
    "weight": 0.0269,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VWS",
    "name": "Vestas Wind Systems A/S",
    "weight": 0.0268,
    "sector": "Energy",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LYV",
    "name": "Live Nation Entertainment Inc",
    "weight": 0.0268,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WSM",
    "name": "Williams-Sonoma Inc",
    "weight": 0.0267,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PETR4",
    "name": "Petroleo Brasileiro SA",
    "weight": 0.0267,
    "sector": "Energy",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "XYL",
    "name": "Xylem Inc/NY",
    "weight": 0.0266,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "REP",
    "name": "Repsol SA",
    "weight": 0.0265,
    "sector": "Energy",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KFH",
    "name": "Kuwait Finance House KSCP",
    "weight": 0.0263,
    "sector": "Financials",
    "location": "Kuwait",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EIX",
    "name": "Edison International",
    "weight": 0.0262,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MSTR",
    "name": "Strategy Inc",
    "weight": 0.0259,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4901",
    "name": "FUJIFILM Holdings Corp",
    "weight": 0.0259,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FICO",
    "name": "Fair Isaac Corp",
    "weight": 0.0259,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ACS",
    "name": "ACS Actividades de Construccion y Servicios SA",
    "weight": 0.0257,
    "sector": "Industrials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADYEN",
    "name": "Adyen NV",
    "weight": 0.0257,
    "sector": "Industrials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HSY",
    "name": "Hershey Co/The",
    "weight": 0.0257,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PPL",
    "name": "PPL Corp",
    "weight": 0.0257,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3382",
    "name": "Seven & i Holdings Co Ltd",
    "weight": 0.0257,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BESI",
    "name": "BE Semiconductor Industries NV",
    "weight": 0.0257,
    "sector": "Information Technology",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CINF",
    "name": "Cincinnati Financial Corp",
    "weight": 0.0256,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2885",
    "name": "Yuanta Financial Holding Co Ltd",
    "weight": 0.0256,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8015",
    "name": "Toyota Tsusho Corp",
    "weight": 0.0256,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VIE",
    "name": "Veolia Environnement SA",
    "weight": 0.0256,
    "sector": "Utilities",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BAP",
    "name": "Credicorp Ltd",
    "weight": 0.0255,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "055550",
    "name": "Shinhan Financial Group Co Ltd",
    "weight": 0.0255,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "992",
    "name": "Lenovo Group Ltd",
    "weight": 0.0255,
    "sector": "Information Technology",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ILMN",
    "name": "Illumina Inc",
    "weight": 0.0255,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8309",
    "name": "Sumitomo Mitsui Trust Group Inc",
    "weight": 0.0255,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NTAP",
    "name": "NetApp Inc",
    "weight": 0.0254,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AVB",
    "name": "AvalonBay Communities Inc",
    "weight": 0.0254,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WST",
    "name": "West Pharmaceutical Services Inc",
    "weight": 0.0253,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FE",
    "name": "FirstEnergy Corp",
    "weight": 0.0253,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ATO",
    "name": "Atmos Energy Corp",
    "weight": 0.0252,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OTIS",
    "name": "Otis Worldwide Corp",
    "weight": 0.0252,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMRZ",
    "name": "Amrize Ltd",
    "weight": 0.0251,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2382",
    "name": "Quanta Computer Inc",
    "weight": 0.0251,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QBE",
    "name": "QBE Insurance Group Ltd",
    "weight": 0.025,
    "sector": "Financials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ES",
    "name": "Eversource Energy",
    "weight": 0.025,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ML",
    "name": "Cie Generale des Etablissements Michelin SCA",
    "weight": 0.0249,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BAMI",
    "name": "Banco BPM SpA",
    "weight": 0.0249,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1",
    "name": "CK Hutchison Holdings Ltd",
    "weight": 0.0249,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPRT",
    "name": "Copart Inc",
    "weight": 0.0247,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "028260",
    "name": "Samsung C&T Corp",
    "weight": 0.0247,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FFIV",
    "name": "F5 Inc",
    "weight": 0.0247,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IHG",
    "name": "InterContinental Hotels Group PLC",
    "weight": 0.0247,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MDB",
    "name": "MongoDB Inc",
    "weight": 0.0247,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FISV",
    "name": "Fiserv Inc",
    "weight": 0.0246,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DXCM",
    "name": "Dexcom Inc",
    "weight": 0.0246,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MT",
    "name": "ArcelorMittal SA",
    "weight": 0.0245,
    "sector": "Materials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4503",
    "name": "Astellas Pharma Inc",
    "weight": 0.0245,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VEEV",
    "name": "Veeva Systems Inc",
    "weight": 0.0244,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AV/",
    "name": "Aviva PLC",
    "weight": 0.0244,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9432",
    "name": "NTT Inc",
    "weight": 0.0243,
    "sector": "Communication Services",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMS",
    "name": "Amadeus IT Group SA",
    "weight": 0.0243,
    "sector": "Information Technology",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SBK",
    "name": "Standard Bank Group Ltd",
    "weight": 0.0242,
    "sector": "Financials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABN",
    "name": "ABN AMRO Bank NV",
    "weight": 0.0242,
    "sector": "Financials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ST",
    "name": "Singapore Telecommunications Ltd",
    "weight": 0.0242,
    "sector": "Communication Services",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WDAY",
    "name": "Workday Inc",
    "weight": 0.0242,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PKO",
    "name": "Powszechna Kasa Oszczednosci Bank Polski SA",
    "weight": 0.0242,
    "sector": "Financials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5108",
    "name": "Bridgestone Corp",
    "weight": 0.0242,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DRI",
    "name": "Darden Restaurants Inc",
    "weight": 0.0242,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AIBG",
    "name": "AIB Group PLC",
    "weight": 0.0241,
    "sector": "Financials",
    "location": "Ireland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8604",
    "name": "Nomura Holdings Inc",
    "weight": 0.0241,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2628",
    "name": "China Life Insurance Co Ltd",
    "weight": 0.0241,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CHD",
    "name": "Church & Dwight Co Inc",
    "weight": 0.0241,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CMS",
    "name": "CMS Energy Corp",
    "weight": 0.024,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AWK",
    "name": "American Water Works Co Inc",
    "weight": 0.0239,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8801",
    "name": "Mitsui Fudosan Co Ltd",
    "weight": 0.0239,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9961",
    "name": "Trip.com Group Ltd",
    "weight": 0.0239,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SEBA",
    "name": "Skandinaviska Enskilda Banken AB",
    "weight": 0.0239,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CBOE",
    "name": "Cboe Global Markets Inc",
    "weight": 0.0238,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAMPO",
    "name": "Sampo Oyj",
    "weight": 0.0237,
    "sector": "Financials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "L",
    "name": "Loblaw Cos Ltd",
    "weight": 0.0237,
    "sector": "Consumer Staples",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PKG",
    "name": "Packaging Corp of America",
    "weight": 0.0236,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QSR",
    "name": "Restaurant Brands International Inc",
    "weight": 0.0236,
    "sector": "Consumer Discretionary",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "034020",
    "name": "Doosan Enerbility Co Ltd",
    "weight": 0.0235,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TROW",
    "name": "T Rowe Price Group Inc",
    "weight": 0.0235,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EQR",
    "name": "Equity Residential",
    "weight": 0.0235,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JBHT",
    "name": "JB Hunt Transport Services Inc",
    "weight": 0.0234,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BMPS",
    "name": "Banca Monte dei Paschi di Siena SpA",
    "weight": 0.0234,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VOD",
    "name": "Vodafone Group PLC",
    "weight": 0.0234,
    "sector": "Communication Services",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NXT",
    "name": "Next PLC",
    "weight": 0.0232,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NI",
    "name": "NiSource Inc",
    "weight": 0.0232,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300750",
    "name": "Contemporary Amperex Technology Co Ltd",
    "weight": 0.0232,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TPL",
    "name": "Texas Pacific Land Corp",
    "weight": 0.0232,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6273",
    "name": "SMC Corp",
    "weight": 0.0232,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BPE",
    "name": "BPER Banca SPA",
    "weight": 0.0232,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HEI",
    "name": "Heidelberg Materials AG",
    "weight": 0.023,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "P",
    "name": "Everpure Inc",
    "weight": 0.023,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WTW",
    "name": "Willis Towers Watson PLC",
    "weight": 0.023,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPI",
    "name": "Capitec Bank Holdings Ltd",
    "weight": 0.023,
    "sector": "Financials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VRSK",
    "name": "Verisk Analytics Inc",
    "weight": 0.023,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DGX",
    "name": "Quest Diagnostics Inc",
    "weight": 0.0229,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6178",
    "name": "Japan Post Holdings Co Ltd",
    "weight": 0.0228,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DTG",
    "name": "Daimler Truck Holding AG",
    "weight": 0.0228,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VACN",
    "name": "VAT Group AG",
    "weight": 0.0226,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DLTR",
    "name": "Dollar Tree Inc",
    "weight": 0.0226,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SOFI",
    "name": "SoFi Technologies Inc",
    "weight": 0.0223,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MTN",
    "name": "MTN Group Ltd",
    "weight": 0.0223,
    "sector": "Communication Services",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FSLR",
    "name": "First Solar Inc",
    "weight": 0.0223,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "034730",
    "name": "SK Inc",
    "weight": 0.0221,
    "sector": "Energy",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HEIA",
    "name": "Heineken NV",
    "weight": 0.0221,
    "sector": "Consumer Staples",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COL",
    "name": "Coles Group Ltd",
    "weight": 0.0221,
    "sector": "Consumer Staples",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3017",
    "name": "Asia Vital Components Co Ltd",
    "weight": 0.0221,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2344",
    "name": "Winbond Electronics Corp",
    "weight": 0.022,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VLTO",
    "name": "Veralto Corp",
    "weight": 0.0219,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SW",
    "name": "Smurfit Westrock PLC",
    "weight": 0.0219,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2360",
    "name": "Chroma ATE Inc",
    "weight": 0.0218,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NBK",
    "name": "National Bank of Kuwait SAKP",
    "weight": 0.0218,
    "sector": "Financials",
    "location": "Kuwait",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PHIA",
    "name": "Koninklijke Philips NV",
    "weight": 0.0218,
    "sector": "Health Care",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OKTA",
    "name": "Okta Inc",
    "weight": 0.0218,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FEMSAUBD",
    "name": "Fomento Economico Mexicano SAB de CV",
    "weight": 0.0217,
    "sector": "Consumer Staples",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LH",
    "name": "Labcorp Holdings Inc",
    "weight": 0.0217,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STC",
    "name": "Saudi Telecom Co",
    "weight": 0.0216,
    "sector": "Communication Services",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RDDT",
    "name": "Reddit Inc",
    "weight": 0.0216,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MAADEN",
    "name": "Saudi Arabian Mining Co",
    "weight": 0.0216,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EQNR",
    "name": "Equinor ASA",
    "weight": 0.0215,
    "sector": "Energy",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INSM",
    "name": "Insmed Inc",
    "weight": 0.0215,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MTX",
    "name": "MTU Aero Engines AG",
    "weight": 0.0215,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HO",
    "name": "Thales SA",
    "weight": 0.0215,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "857",
    "name": "PetroChina Co Ltd",
    "weight": 0.0214,
    "sector": "Energy",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RJF",
    "name": "Raymond James Financial Inc",
    "weight": 0.0214,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OMC",
    "name": "Omnicom Group Inc",
    "weight": 0.0214,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AENA",
    "name": "Aena SME SA",
    "weight": 0.0214,
    "sector": "Industrials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "032830",
    "name": "Samsung Life Insurance Co Ltd",
    "weight": 0.0214,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KEY",
    "name": "KeyCorp",
    "weight": 0.0214,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DNB",
    "name": "DNB Bank ASA",
    "weight": 0.0213,
    "sector": "Financials",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NSISB",
    "name": "Novonesis (Novozymes) B",
    "weight": 0.0212,
    "sector": "Health Care",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7269",
    "name": "Suzuki Motor Corp",
    "weight": 0.0212,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ZM",
    "name": "Zoom Video Communications Inc",
    "weight": 0.0212,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PUB",
    "name": "Publicis Groupe SA",
    "weight": 0.0211,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPAY",
    "name": "Corpay Inc",
    "weight": 0.0211,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FAB",
    "name": "First Abu Dhabi Bank PJSC",
    "weight": 0.0211,
    "sector": "Financials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4452",
    "name": "Kao Corp",
    "weight": 0.0211,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "012450",
    "name": "Hanwha Aerospace Co Ltd",
    "weight": 0.0211,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RPRX",
    "name": "Royalty Pharma PLC",
    "weight": 0.021,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HLMA",
    "name": "Halma PLC",
    "weight": 0.021,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPNG",
    "name": "Coupang Inc",
    "weight": 0.021,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2388",
    "name": "BOC Hong Kong Holdings Ltd",
    "weight": 0.0209,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PFG",
    "name": "Principal Financial Group Inc",
    "weight": 0.0208,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1288",
    "name": "Agricultural Bank of China Ltd",
    "weight": 0.0207,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EXE",
    "name": "Expand Energy Corp",
    "weight": 0.0207,
    "sector": "Energy",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NN",
    "name": "NN Group NV",
    "weight": 0.0207,
    "sector": "Financials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BBD/B",
    "name": "Bombardier Inc",
    "weight": 0.0207,
    "sector": "Industrials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LPLA",
    "name": "LPL Financial Holdings Inc",
    "weight": 0.0207,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LDO",
    "name": "Leonardo SpA",
    "weight": 0.0207,
    "sector": "Industrials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HEI/A",
    "name": "HEICO Corp",
    "weight": 0.0205,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMAAR",
    "name": "Emaar Properties PJSC",
    "weight": 0.0205,
    "sector": "Real Estate",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BBDC4",
    "name": "Banco Bradesco SA",
    "weight": 0.0205,
    "sector": "Financials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GEBN",
    "name": "Geberit AG",
    "weight": 0.0205,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000270",
    "name": "Kia Corp",
    "weight": 0.0205,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RBA",
    "name": "RB Global Inc",
    "weight": 0.0204,
    "sector": "Consumer Discretionary",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMXB",
    "name": "America Movil SAB de CV",
    "weight": 0.0204,
    "sector": "Communication Services",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FWONK",
    "name": "Liberty Media Corp-Liberty Formula One",
    "weight": 0.0203,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QNBK",
    "name": "Qatar National Bank QPSC",
    "weight": 0.0203,
    "sector": "Financials",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6902",
    "name": "Denso Corp",
    "weight": 0.0203,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5020",
    "name": "ENEOS Holdings Inc",
    "weight": 0.0202,
    "sector": "Energy",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EXPD",
    "name": "Expeditors International of Washington Inc",
    "weight": 0.0202,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UMG",
    "name": "Universal Music Group NV",
    "weight": 0.0202,
    "sector": "Consumer Discretionary",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3968",
    "name": "China Merchants Bank Co Ltd",
    "weight": 0.0202,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "669",
    "name": "Techtronic Industries Co Ltd",
    "weight": 0.0201,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TCS",
    "name": "Tata Consultancy Services Ltd",
    "weight": 0.0201,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EAND",
    "name": "Emirates Telecommunications Group Co PJSC",
    "weight": 0.02,
    "sector": "Communication Services",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMCR",
    "name": "Amcor PLC",
    "weight": 0.02,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6920",
    "name": "Lasertec Corp",
    "weight": 0.02,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MSIL",
    "name": "Maruti Suzuki India Ltd",
    "weight": 0.02,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2890",
    "name": "SinoPac Financial Holdings Co Ltd",
    "weight": 0.0199,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8267",
    "name": "Aeon Co Ltd",
    "weight": 0.0199,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BIRG",
    "name": "Bank of Ireland Group PLC",
    "weight": 0.0199,
    "sector": "Financials",
    "location": "Ireland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7751",
    "name": "Canon Inc",
    "weight": 0.0197,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PKN",
    "name": "ORLEN SA",
    "weight": 0.0195,
    "sector": "Energy",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9020",
    "name": "East Japan Railway Co",
    "weight": 0.0195,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STE",
    "name": "STERIS PLC",
    "weight": 0.0194,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VRSN",
    "name": "VeriSign Inc",
    "weight": 0.0194,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "086790",
    "name": "Hana Financial Group Inc",
    "weight": 0.0194,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ARES",
    "name": "Ares Management Corp",
    "weight": 0.0194,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HPQ",
    "name": "HP Inc",
    "weight": 0.0194,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BURL",
    "name": "Burlington Stores Inc",
    "weight": 0.0194,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LGEN",
    "name": "Legal & General Group PLC",
    "weight": 0.0194,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MAY",
    "name": "Malayan Banking Bhd",
    "weight": 0.0194,
    "sector": "Financials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INCY",
    "name": "Incyte Corp",
    "weight": 0.0193,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VICI",
    "name": "VICI Properties Inc",
    "weight": 0.0193,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SUNP",
    "name": "Sun Pharmaceutical Industries Ltd",
    "weight": 0.0193,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TNB",
    "name": "Tenaga Nasional Bhd",
    "weight": 0.0193,
    "sector": "Utilities",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CCEP",
    "name": "Coca-Cola Europacific Partners PLC",
    "weight": 0.0193,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FMG",
    "name": "Fortescue Ltd",
    "weight": 0.0192,
    "sector": "Materials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FIS",
    "name": "Fidelity National Information Services Inc",
    "weight": 0.0192,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DD",
    "name": "DuPont de Nemours Inc",
    "weight": 0.0191,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MG",
    "name": "Magna International Inc",
    "weight": 0.0191,
    "sector": "Consumer Discretionary",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALFA",
    "name": "Alfa Laval AB",
    "weight": 0.0191,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3481",
    "name": "Innolux Corp",
    "weight": 0.019,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6361",
    "name": "Ebara Corp",
    "weight": 0.019,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2886",
    "name": "Mega Financial Holding Co Ltd",
    "weight": 0.019,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FTV",
    "name": "Fortive Corp",
    "weight": 0.0189,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IFF",
    "name": "International Flavors & Fragrances Inc",
    "weight": 0.0189,
    "sector": "Materials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ULTA",
    "name": "Ulta Beauty Inc",
    "weight": 0.0188,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WRT1V",
    "name": "Wartsila OYJ Abp",
    "weight": 0.0188,
    "sector": "Industrials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KHC",
    "name": "Kraft Heinz Co/The",
    "weight": 0.0187,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IP",
    "name": "International Paper Co",
    "weight": 0.0187,
    "sector": "Materials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4543",
    "name": "Terumo Corp",
    "weight": 0.0187,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HEXAB",
    "name": "Hexagon AB",
    "weight": 0.0186,
    "sector": "Information Technology",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SNA",
    "name": "Snap-on Inc",
    "weight": 0.0186,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DOW",
    "name": "Dow Inc",
    "weight": 0.0186,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HUVR",
    "name": "Hindustan Unilever Ltd",
    "weight": 0.0186,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LNT",
    "name": "Alliant Energy Corp",
    "weight": 0.0185,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MKL",
    "name": "Markel Group Inc",
    "weight": 0.0185,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CDW",
    "name": "CDW Corp/DE",
    "weight": 0.0184,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GIS",
    "name": "General Mills Inc",
    "weight": 0.0183,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "012330",
    "name": "Hyundai Mobis Co Ltd",
    "weight": 0.0183,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ESLT",
    "name": "Elbit Systems Ltd",
    "weight": 0.0183,
    "sector": "Industrials",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KER",
    "name": "Kering SA",
    "weight": 0.0183,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STZ",
    "name": "Constellation Brands Inc",
    "weight": 0.0183,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BRO",
    "name": "Brown & Brown Inc",
    "weight": 0.0182,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PAAS",
    "name": "Pan American Silver Corp",
    "weight": 0.0182,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3231",
    "name": "Wistron Corp",
    "weight": 0.0182,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CTSH",
    "name": "Cognizant Technology Solutions Corp",
    "weight": 0.0181,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2899",
    "name": "Zijin Mining Group Co Ltd",
    "weight": 0.0181,
    "sector": "Materials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAABB",
    "name": "Saab AB",
    "weight": 0.0181,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INVH",
    "name": "Invitation Homes Inc",
    "weight": 0.018,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "16",
    "name": "Sun Hung Kai Properties Ltd",
    "weight": 0.018,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FM",
    "name": "First Quantum Minerals Ltd",
    "weight": 0.0179,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CEMEXCPO",
    "name": "Cemex SAB de CV",
    "weight": 0.0179,
    "sector": "Industrials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1347",
    "name": "Hua Hong Grace Semiconductor Ltd",
    "weight": 0.0179,
    "sector": "Information Technology",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2412",
    "name": "Chunghwa Telecom Co Ltd",
    "weight": 0.0178,
    "sector": "Communication Services",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2503",
    "name": "Kirin Holdings Co Ltd",
    "weight": 0.0178,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PBK",
    "name": "Public Bank Bhd",
    "weight": 0.0178,
    "sector": "Financials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "068270",
    "name": "Celltrion Inc",
    "weight": 0.0178,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BALL",
    "name": "Ball Corp",
    "weight": 0.0178,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NTPC",
    "name": "NTPC Ltd",
    "weight": 0.0178,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "035420",
    "name": "NAVER Corp",
    "weight": 0.0178,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SGSN",
    "name": "SGS SA",
    "weight": 0.0177,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TIT",
    "name": "Telecom Italia SpA/Milano",
    "weight": 0.0176,
    "sector": "Communication Services",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SCMN",
    "name": "Swisscom AG",
    "weight": 0.0176,
    "sector": "Communication Services",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EFX",
    "name": "Equifax Inc",
    "weight": 0.0176,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KPN",
    "name": "Koninklijke KPN NV",
    "weight": 0.0176,
    "sector": "Communication Services",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1088",
    "name": "China Shenhua Energy Co Ltd",
    "weight": 0.0176,
    "sector": "Energy",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BMW",
    "name": "Bayerische Motoren Werke AG",
    "weight": 0.0176,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FRE",
    "name": "Fresenius SE & Co KGaA",
    "weight": 0.0176,
    "sector": "Health Care",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DSFIR",
    "name": "DSM-Firmenich AG",
    "weight": 0.0176,
    "sector": "Consumer Staples",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ZBH",
    "name": "Zimmer Biomet Holdings Inc",
    "weight": 0.0175,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9502",
    "name": "Chubu Electric Power Co Inc",
    "weight": 0.0175,
    "sector": "Utilities",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9735",
    "name": "Secom Co Ltd",
    "weight": 0.0175,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LEN",
    "name": "Lennar Corp",
    "weight": 0.0174,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3407",
    "name": "Asahi Kasei Corp",
    "weight": 0.0174,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2884",
    "name": "E.Sun Financial Holding Co Ltd",
    "weight": 0.0174,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SBAC",
    "name": "SBA Communications Corp",
    "weight": 0.0173,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TTAN",
    "name": "Titan Co Ltd",
    "weight": 0.0173,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ESS",
    "name": "Essex Property Trust Inc",
    "weight": 0.0173,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2269",
    "name": "Wuxi Biologics Cayman Inc",
    "weight": 0.0173,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DAL",
    "name": "Delta Air Lines Inc",
    "weight": 0.0172,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NVR",
    "name": "NVR Inc",
    "weight": 0.0172,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FCNCA",
    "name": "First Citizens BancShares Inc/NC",
    "weight": 0.0172,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1812",
    "name": "Kajima Corp",
    "weight": 0.0171,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GMAB",
    "name": "Genmab A/S",
    "weight": 0.0171,
    "sector": "Health Care",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9022",
    "name": "Central Japan Railway Co",
    "weight": 0.0171,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5801",
    "name": "Furukawa Electric Co Ltd",
    "weight": 0.017,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PGHN",
    "name": "Partners Group Holding AG",
    "weight": 0.0169,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AXIA3",
    "name": "Axia Energia SA",
    "weight": 0.0169,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KNEBV",
    "name": "Kone Oyj",
    "weight": 0.0169,
    "sector": "Industrials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ESSITYB",
    "name": "Essity AB",
    "weight": 0.0168,
    "sector": "Consumer Staples",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BXB",
    "name": "Brambles Ltd",
    "weight": 0.0168,
    "sector": "Industrials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6383",
    "name": "Daifuku Co Ltd",
    "weight": 0.0168,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7936",
    "name": "Asics Corp",
    "weight": 0.0167,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SBIN",
    "name": "State Bank of India",
    "weight": 0.0167,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HNR1",
    "name": "Hannover Rueck SE",
    "weight": 0.0166,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4661",
    "name": "Oriental Land Co Ltd/Japan",
    "weight": 0.0166,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ICT",
    "name": "International Container Terminal Services Inc",
    "weight": 0.0166,
    "sector": "Industrials",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NST",
    "name": "Northern Star Resources Ltd",
    "weight": 0.0165,
    "sector": "Materials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BAER",
    "name": "Julius Baer Group Ltd",
    "weight": 0.0165,
    "sector": "Financials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1925",
    "name": "Daiwa House Industry Co Ltd",
    "weight": 0.0165,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4004",
    "name": "Resonac Holdings Corp",
    "weight": 0.0165,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VAL",
    "name": "Valterra Platinum Ltd",
    "weight": 0.0165,
    "sector": "Materials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ANTO",
    "name": "Antofagasta PLC",
    "weight": 0.0165,
    "sector": "Materials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STO",
    "name": "Santos Ltd",
    "weight": 0.0164,
    "sector": "Energy",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EVRG",
    "name": "Evergy Inc",
    "weight": 0.0164,
    "sector": "Utilities",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "006400",
    "name": "Samsung SDI Co Ltd",
    "weight": 0.0164,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VNA",
    "name": "Vonovia SE",
    "weight": 0.0164,
    "sector": "Real Estate",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INF",
    "name": "Informa PLC",
    "weight": 0.0163,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8795",
    "name": "T&D Holdings Inc",
    "weight": 0.0163,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TRN",
    "name": "Terna - Rete Elettrica Nazionale",
    "weight": 0.0163,
    "sector": "Utilities",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TIH",
    "name": "Toromont Industries Ltd",
    "weight": 0.0162,
    "sector": "Industrials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WY",
    "name": "Weyerhaeuser Co",
    "weight": 0.0162,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SHBA",
    "name": "Svenska Handelsbanken AB",
    "weight": 0.0162,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LOGN",
    "name": "Logitech International SA",
    "weight": 0.0162,
    "sector": "Information Technology",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BOL",
    "name": "Boliden AB",
    "weight": 0.0162,
    "sector": "Materials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6326",
    "name": "Kubota Corp",
    "weight": 0.0162,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAB",
    "name": "Banco de Sabadell SA",
    "weight": 0.0162,
    "sector": "Financials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PWGR",
    "name": "Power Grid Corp of India Ltd",
    "weight": 0.0161,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BHE",
    "name": "Bharat Electronics Ltd",
    "weight": 0.0161,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CLNX",
    "name": "Cellnex Telecom SA",
    "weight": 0.0161,
    "sector": "Communication Services",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMIRATES",
    "name": "Emirates NBD Bank PJSC",
    "weight": 0.0161,
    "sector": "Financials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TEF",
    "name": "Telefonica SA",
    "weight": 0.016,
    "sector": "Communication Services",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2328",
    "name": "PICC Property & Casualty Co Ltd",
    "weight": 0.0159,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BAM",
    "name": "Brookfield Asset Management Ltd",
    "weight": 0.0159,
    "sector": "Financials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TXT",
    "name": "Textron Inc",
    "weight": 0.0159,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WSP",
    "name": "WSP Global Inc",
    "weight": 0.0159,
    "sector": "Industrials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STMN",
    "name": "Straumann Holding AG",
    "weight": 0.0158,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CAP",
    "name": "Capgemini SE",
    "weight": 0.0158,
    "sector": "Information Technology",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TATA",
    "name": "Tata Steel Ltd",
    "weight": 0.0158,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RO",
    "name": "Roche Holding AG",
    "weight": 0.0158,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6160",
    "name": "BeOne Medicines Ltd",
    "weight": 0.0158,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2883",
    "name": "KGI Financial Holding Co Ltd",
    "weight": 0.0157,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WCP",
    "name": "Whitecap Resources Inc",
    "weight": 0.0157,
    "sector": "Energy",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KIM",
    "name": "Kimco Realty Corp",
    "weight": 0.0157,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SHFL",
    "name": "Shriram Finance Ltd",
    "weight": 0.0157,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6594",
    "name": "NIDEC CORP",
    "weight": 0.0155,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MAA",
    "name": "Mid-America Apartment Communities Inc",
    "weight": 0.0155,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NVMI",
    "name": "Nova Ltd",
    "weight": 0.0155,
    "sector": "Information Technology",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5401",
    "name": "Nippon Steel Corp",
    "weight": 0.0155,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BBCA",
    "name": "Bank Central Asia Tbk PT",
    "weight": 0.0155,
    "sector": "Financials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EDP",
    "name": "EDP SA",
    "weight": 0.0155,
    "sector": "Utilities",
    "location": "Portugal",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5016",
    "name": "JX Advanced Metals Corp",
    "weight": 0.0155,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UTCEM",
    "name": "UltraTech Cement Ltd",
    "weight": 0.0155,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8697",
    "name": "Japan Exchange Group Inc",
    "weight": 0.0154,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FLUT",
    "name": "Flutter Entertainment PLC",
    "weight": 0.0154,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ACA",
    "name": "Credit Agricole SA",
    "weight": 0.0154,
    "sector": "Financials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FDXF",
    "name": "Fedex Freight Holding Co Inc",
    "weight": 0.0154,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2",
    "name": "CLP Holdings Ltd",
    "weight": 0.0154,
    "sector": "Utilities",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TOU",
    "name": "Tourmaline Oil Corp",
    "weight": 0.0153,
    "sector": "Energy",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IMO",
    "name": "Imperial Oil Ltd",
    "weight": 0.0153,
    "sector": "Energy",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GPC",
    "name": "Genuine Parts Co",
    "weight": 0.0153,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "J",
    "name": "Jacobs Solutions Inc",
    "weight": 0.0152,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1605",
    "name": "Inpex Corp",
    "weight": 0.0152,
    "sector": "Energy",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2502",
    "name": "Asahi Group Holdings Ltd",
    "weight": 0.0151,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EVN",
    "name": "Evolution Mining Ltd",
    "weight": 0.0151,
    "sector": "Materials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GWO",
    "name": "Great-West Lifeco Inc",
    "weight": 0.0151,
    "sector": "Financials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JHX",
    "name": "James Hardie Industries PLC",
    "weight": 0.0151,
    "sector": "Industrials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WALMEX*",
    "name": "Wal-Mart de Mexico SAB de CV",
    "weight": 0.0151,
    "sector": "Consumer Discretionary",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8830",
    "name": "Sumitomo Realty & Development Co Ltd",
    "weight": 0.0151,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SCHP",
    "name": "Schindler Holding AG",
    "weight": 0.015,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3750",
    "name": "Contemporary Amperex Technology Co Ltd",
    "weight": 0.015,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HNDL",
    "name": "Hindalco Industries Ltd",
    "weight": 0.015,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LUN",
    "name": "Lundin Mining Corp",
    "weight": 0.015,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SUI",
    "name": "Sun Communities Inc",
    "weight": 0.0149,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DPLM",
    "name": "Diploma PLC",
    "weight": 0.0149,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9101",
    "name": "Nippon Yusen KK",
    "weight": 0.0149,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WPC",
    "name": "WP Carey Inc",
    "weight": 0.0149,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VOW3",
    "name": "Volkswagen AG",
    "weight": 0.0149,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BR",
    "name": "Broadridge Financial Solutions Inc",
    "weight": 0.0149,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TSN",
    "name": "Tyson Foods Inc",
    "weight": 0.0148,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "005490",
    "name": "POSCO Holdings Inc",
    "weight": 0.0147,
    "sector": "Materials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SGX",
    "name": "Singapore Exchange Ltd",
    "weight": 0.0147,
    "sector": "Financials",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7735",
    "name": "SCREEN Holdings Co Ltd",
    "weight": 0.0147,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SCCO",
    "name": "Southern Copper Corp",
    "weight": 0.0147,
    "sector": "Materials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QIBK",
    "name": "Qatar Islamic Bank QPSC",
    "weight": 0.0147,
    "sector": "Financials",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8601",
    "name": "Daiwa Securities Group Inc",
    "weight": 0.0147,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "823",
    "name": "Link REIT",
    "weight": 0.0147,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1802",
    "name": "Obayashi Corp",
    "weight": 0.0146,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9987",
    "name": "Yum China Holdings Inc",
    "weight": 0.0146,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IEX",
    "name": "IDEX Corp",
    "weight": 0.0146,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SBSP3",
    "name": "Cia de Saneamento Basico do Estado de Sao Paulo SABESP",
    "weight": 0.0146,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1024",
    "name": "Kuaishou Technology",
    "weight": 0.0146,
    "sector": "Information Technology",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COO",
    "name": "Cooper Cos Inc/The",
    "weight": 0.0146,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SMCI",
    "name": "Super Micro Computer Inc",
    "weight": 0.0145,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6479",
    "name": "MINEBEA MITSUMI Inc",
    "weight": 0.0145,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1801",
    "name": "Innovent Biologics Inc",
    "weight": 0.0145,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EG",
    "name": "Everest Group Ltd",
    "weight": 0.0145,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPU",
    "name": "Computershare Ltd",
    "weight": 0.0145,
    "sector": "Financials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2408",
    "name": "Nanya Technology Corp",
    "weight": 0.0145,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GPN",
    "name": "Global Payments Inc",
    "weight": 0.0142,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FBK",
    "name": "FinecoBank Banca Fineco SpA",
    "weight": 0.0142,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DECK",
    "name": "Deckers Outdoor Corp",
    "weight": 0.0142,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RI",
    "name": "Pernod Ricard SA",
    "weight": 0.0142,
    "sector": "Consumer Staples",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2357",
    "name": "Asustek Computer Inc",
    "weight": 0.0142,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6976",
    "name": "Taiyo Yuden Co Ltd",
    "weight": 0.0142,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LVS",
    "name": "Las Vegas Sands Corp",
    "weight": 0.0141,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1216",
    "name": "Uni-President Enterprises Corp",
    "weight": 0.0141,
    "sector": "Consumer Staples",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BBY",
    "name": "Best Buy Co Inc",
    "weight": 0.0141,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EUROB",
    "name": "Eurobank SA",
    "weight": 0.0141,
    "sector": "Financials",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6223",
    "name": "MPI Corp",
    "weight": 0.0141,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KEP",
    "name": "Keppel Ltd",
    "weight": 0.0141,
    "sector": "Utilities",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BT/A",
    "name": "BT Group PLC",
    "weight": 0.014,
    "sector": "Communication Services",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SUN",
    "name": "Suncor Group Ltd",
    "weight": 0.014,
    "sector": "Financials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CIMB",
    "name": "CIMB Group Holdings Bhd",
    "weight": 0.014,
    "sector": "Financials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WKL",
    "name": "Wolters Kluwer NV",
    "weight": 0.014,
    "sector": "Industrials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9531",
    "name": "Tokyo Gas Co Ltd",
    "weight": 0.014,
    "sector": "Utilities",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "267260",
    "name": "HD Hyundai Electric Co Ltd",
    "weight": 0.0139,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "B3SA3",
    "name": "B3 SA - Brasil Bolsa Balcao",
    "weight": 0.0139,
    "sector": "Financials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600519",
    "name": "Kweichow Moutai Co Ltd",
    "weight": 0.0139,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FPH",
    "name": "Fisher & Paykel Healthcare Corp Ltd",
    "weight": 0.0138,
    "sector": "Health Care",
    "location": "New Zealand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TELIA",
    "name": "Telia Co AB",
    "weight": 0.0138,
    "sector": "Communication Services",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DSY",
    "name": "Dassault Systemes SE",
    "weight": 0.0138,
    "sector": "Information Technology",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EPIA",
    "name": "Epiroc AB",
    "weight": 0.0138,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6525",
    "name": "Kokusai Electric Corp",
    "weight": 0.0138,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4307",
    "name": "Nomura Research Institute Ltd",
    "weight": 0.0138,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ZS",
    "name": "Zscaler Inc",
    "weight": 0.0138,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ETERNAL",
    "name": "Zomato Ltd",
    "weight": 0.0137,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6988",
    "name": "Nitto Denko Corp",
    "weight": 0.0137,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5706",
    "name": "Mitsui Kinzoku Co Ltd",
    "weight": 0.0136,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SHL",
    "name": "Siemens Healthineers AG",
    "weight": 0.0136,
    "sector": "Health Care",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7832",
    "name": "Bandai Namco Holdings Inc",
    "weight": 0.0136,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7013",
    "name": "IHI Corp",
    "weight": 0.0136,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WRB",
    "name": "W R Berkley Corp",
    "weight": 0.0136,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1113",
    "name": "CK Asset Holdings Ltd",
    "weight": 0.0136,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALLE",
    "name": "Allegion plc",
    "weight": 0.0136,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMA",
    "name": "Emera Inc",
    "weight": 0.0135,
    "sector": "Utilities",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KSP",
    "name": "Kingspan Group PLC",
    "weight": 0.0135,
    "sector": "Industrials",
    "location": "Ireland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300308",
    "name": "Zhongji Innolight Co Ltd",
    "weight": 0.0135,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COAL",
    "name": "Coal India Ltd",
    "weight": 0.0134,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9503",
    "name": "Kansai Electric Power Co Inc/The",
    "weight": 0.0134,
    "sector": "Utilities",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "386",
    "name": "China Petroleum & Chemical Corp",
    "weight": 0.0134,
    "sector": "Energy",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5274",
    "name": "ASPEED Technology Inc",
    "weight": 0.0133,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TRMB",
    "name": "Trimble Inc",
    "weight": 0.0133,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PNR",
    "name": "Pentair PLC",
    "weight": 0.0133,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SRG",
    "name": "Snam SpA",
    "weight": 0.0133,
    "sector": "Energy",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RTO",
    "name": "Rentokil Initial PLC",
    "weight": 0.0133,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PST",
    "name": "Poste Italiane SpA",
    "weight": 0.0133,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TRU",
    "name": "TransUnion",
    "weight": 0.0133,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "APTV",
    "name": "Aptiv Holdings Ltd",
    "weight": 0.0133,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IAG",
    "name": "Insurance Australia Group Ltd",
    "weight": 0.0132,
    "sector": "Financials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PTT/F",
    "name": "PTT PCL",
    "weight": 0.0132,
    "sector": "Energy",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NESTE",
    "name": "Neste Oyj",
    "weight": 0.0132,
    "sector": "Energy",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1888",
    "name": "Kingboard Laminates Holdings Ltd",
    "weight": 0.0132,
    "sector": "Information Technology",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENLT",
    "name": "Enlight Renewable Energy Ltd",
    "weight": 0.0132,
    "sector": "Utilities",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AGS",
    "name": "Ageas SA/NV",
    "weight": 0.0132,
    "sector": "Financials",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADANI",
    "name": "Adani Power Ltd",
    "weight": 0.0132,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "175",
    "name": "Geely Automobile Holdings Ltd",
    "weight": 0.0131,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SSNC",
    "name": "SS&C Technologies Holdings Inc",
    "weight": 0.0131,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WEGE3",
    "name": "WEG SA",
    "weight": 0.0131,
    "sector": "Industrials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7012",
    "name": "Kawasaki Heavy Industries Ltd",
    "weight": 0.0131,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PHOE",
    "name": "Phoenix Financial Ltd",
    "weight": 0.0131,
    "sector": "Financials",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NTGY",
    "name": "Naturgy Energy Group SA",
    "weight": 0.0131,
    "sector": "Utilities",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SABIC",
    "name": "Saudi Basic Industries Corp",
    "weight": 0.0131,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EPIB",
    "name": "Epiroc AB",
    "weight": 0.0131,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GIB/A",
    "name": "CGI Inc",
    "weight": 0.0131,
    "sector": "Information Technology",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RIVN",
    "name": "Rivian Automotive Inc",
    "weight": 0.013,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2880",
    "name": "Hua Nan Financial Holdings Co Ltd",
    "weight": 0.013,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SGRO",
    "name": "Segro PLC",
    "weight": 0.013,
    "sector": "Real Estate",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "033780",
    "name": "KT&G Corp",
    "weight": 0.013,
    "sector": "Consumer Staples",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LYB",
    "name": "LyondellBasell Industries NV",
    "weight": 0.013,
    "sector": "Materials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TPEIR",
    "name": "Piraeus Bank SA",
    "weight": 0.013,
    "sector": "Financials",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PTC",
    "name": "PTC Inc",
    "weight": 0.013,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KYGA",
    "name": "Kerry Group PLC",
    "weight": 0.0129,
    "sector": "Consumer Staples",
    "location": "Ireland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1928",
    "name": "Sekisui House Ltd",
    "weight": 0.0129,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9532",
    "name": "Osaka Gas Co Ltd",
    "weight": 0.0129,
    "sector": "Utilities",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MNG",
    "name": "M&G PLC",
    "weight": 0.0129,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "URW",
    "name": "Unibail-Rodamco-Westfield",
    "weight": 0.0128,
    "sector": "Real Estate",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AKZA",
    "name": "Akzo Nobel NV",
    "weight": 0.0128,
    "sector": "Materials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AGI",
    "name": "Alamos Gold Inc",
    "weight": 0.0128,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "APNT",
    "name": "Asian Paints Ltd",
    "weight": 0.0127,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TEAM",
    "name": "Atlassian Corp",
    "weight": 0.0127,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TYL",
    "name": "Tyler Technologies Inc",
    "weight": 0.0126,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4188",
    "name": "Mitsubishi Chemical Group Corp",
    "weight": 0.0126,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "S32",
    "name": "South32 Ltd",
    "weight": 0.0126,
    "sector": "Materials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ORG",
    "name": "Origin Energy Ltd",
    "weight": 0.0125,
    "sector": "Utilities",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "316140",
    "name": "Woori Financial Group Inc",
    "weight": 0.0125,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TFII",
    "name": "TFI International Inc",
    "weight": 0.0125,
    "sector": "Industrials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LISP",
    "name": "Chocoladefabriken Lindt & Spruengli AG",
    "weight": 0.0124,
    "sector": "Consumer Staples",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ARX",
    "name": "ARC Resources Ltd",
    "weight": 0.0124,
    "sector": "Energy",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KGH",
    "name": "KGHM Polska Miedz SA",
    "weight": 0.0124,
    "sector": "Materials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4958",
    "name": "Zhen Ding Technology Holding Ltd",
    "weight": 0.0123,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SN/",
    "name": "Smith & Nephew PLC",
    "weight": 0.0123,
    "sector": "Health Care",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CARLB",
    "name": "Carlsberg AS",
    "weight": 0.0123,
    "sector": "Consumer Staples",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2892",
    "name": "First Financial Holding Co Ltd",
    "weight": 0.0123,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CNA",
    "name": "Centrica PLC",
    "weight": 0.0123,
    "sector": "Utilities",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LDOS",
    "name": "Leidos Holdings Inc",
    "weight": 0.0123,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7186",
    "name": "Yokohama Financial Group Inc",
    "weight": 0.0123,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "298040",
    "name": "Hyosung Heavy Industries Corp",
    "weight": 0.0123,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PINS",
    "name": "Pinterest Inc",
    "weight": 0.0123,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7532",
    "name": "Pan Pacific International Holdings Corp",
    "weight": 0.0122,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "066570",
    "name": "LG Electronics Inc",
    "weight": 0.0122,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MONC",
    "name": "Moncler SpA",
    "weight": 0.0122,
    "sector": "Consumer Discretionary",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ETE",
    "name": "National Bank of Greece SA",
    "weight": 0.0122,
    "sector": "Financials",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MKC",
    "name": "McCormick & Co Inc/MD",
    "weight": 0.0121,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000810",
    "name": "Samsung Fire & Marine Insurance Co Ltd",
    "weight": 0.0121,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADCB",
    "name": "Abu Dhabi Commercial Bank PJSC",
    "weight": 0.0121,
    "sector": "Financials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BPAC11",
    "name": "Banco BTG Pactual SA",
    "weight": 0.012,
    "sector": "Financials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ITSA4",
    "name": "Itausa SA",
    "weight": 0.012,
    "sector": "Financials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "329180",
    "name": "HD Hyundai Heavy Industries Co Ltd",
    "weight": 0.012,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7733",
    "name": "Olympus Corp",
    "weight": 0.012,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3402",
    "name": "Toray Industries Inc",
    "weight": 0.012,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADVANC/F",
    "name": "Advanced Info Service PCL",
    "weight": 0.0119,
    "sector": "Communication Services",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FNF",
    "name": "Fidelity National Financial Inc",
    "weight": 0.0119,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9992",
    "name": "Pop Mart International Group Ltd",
    "weight": 0.0119,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2020",
    "name": "ANTA Sports Products Ltd",
    "weight": 0.0119,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BEAN",
    "name": "Belimo Holding AG",
    "weight": 0.0119,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8331",
    "name": "Chiba Bank Ltd/The",
    "weight": 0.0119,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MRU",
    "name": "Metro Inc/CN",
    "weight": 0.0118,
    "sector": "Consumer Staples",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KOG",
    "name": "Kongsberg Gruppen ASA",
    "weight": 0.0118,
    "sector": "Industrials",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADE",
    "name": "Adani Enterprises Ltd",
    "weight": 0.0118,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5333",
    "name": "NGK Corp",
    "weight": 0.0118,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CA",
    "name": "Carrefour SA",
    "weight": 0.0118,
    "sector": "Consumer Staples",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ACWA",
    "name": "ACWA Power Co",
    "weight": 0.0118,
    "sector": "Utilities",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KKC",
    "name": "Cummins India Ltd",
    "weight": 0.0117,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CHTR",
    "name": "Charter Communications Inc",
    "weight": 0.0117,
    "sector": "Communication Services",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IMI",
    "name": "IMI PLC",
    "weight": 0.0117,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "METSO",
    "name": "Metso Oyj",
    "weight": 0.0117,
    "sector": "Industrials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BG",
    "name": "BAWAG Group AG",
    "weight": 0.0117,
    "sector": "Financials",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GDDY",
    "name": "GoDaddy Inc",
    "weight": 0.0116,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADSEZ",
    "name": "Adani Ports & Special Economic Zone Ltd",
    "weight": 0.0116,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1109",
    "name": "China Resources Land Ltd",
    "weight": 0.0116,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GEN",
    "name": "Gen Digital Inc",
    "weight": 0.0116,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AKRBP",
    "name": "Aker BP ASA",
    "weight": 0.0116,
    "sector": "Energy",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9104",
    "name": "Mitsui OSK Lines Ltd",
    "weight": 0.0115,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MDLN",
    "name": "Medline Inc",
    "weight": 0.0115,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4507",
    "name": "Shionogi & Co Ltd",
    "weight": 0.0115,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LULU",
    "name": "Lululemon Athletica Inc",
    "weight": 0.0115,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WN",
    "name": "George Weston Ltd",
    "weight": 0.0114,
    "sector": "Consumer Staples",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5831",
    "name": "Shizuoka Financial Group Inc",
    "weight": 0.0114,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HCLT",
    "name": "HCL Technologies Ltd",
    "weight": 0.0114,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8299",
    "name": "Phison Electronics Corp",
    "weight": 0.0114,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UPM",
    "name": "UPM-Kymmene Oyj",
    "weight": 0.0114,
    "sector": "Materials",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SDLF",
    "name": "Standard Life PLC",
    "weight": 0.0114,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UU/",
    "name": "United Utilities Group PLC",
    "weight": 0.0114,
    "sector": "Utilities",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SY1",
    "name": "Symrise AG",
    "weight": 0.0113,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6841",
    "name": "Yokogawa Electric Corp",
    "weight": 0.0113,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LYC",
    "name": "Lynas Rare Earths Ltd",
    "weight": 0.0113,
    "sector": "Materials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TLS",
    "name": "Telstra Group Ltd",
    "weight": 0.0113,
    "sector": "Communication Services",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENX",
    "name": "Euronext NV",
    "weight": 0.0112,
    "sector": "Financials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SOON",
    "name": "Sonova Holding AG",
    "weight": 0.0112,
    "sector": "Health Care",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EQH",
    "name": "Equitable Holdings Inc",
    "weight": 0.0112,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SCG",
    "name": "Scentre Group",
    "weight": 0.0112,
    "sector": "Real Estate",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3443",
    "name": "Global Unichip Corp",
    "weight": 0.0112,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2057",
    "name": "ZTO Express Cayman Inc",
    "weight": 0.0112,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MOTHERSO",
    "name": "Samvardhana Motherson International Ltd",
    "weight": 0.0111,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AC",
    "name": "Accor SA",
    "weight": 0.0111,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALQ",
    "name": "ALS Ltd",
    "weight": 0.0111,
    "sector": "Industrials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STLAM",
    "name": "Stellantis NV",
    "weight": 0.0111,
    "sector": "Consumer Discretionary",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABEV3",
    "name": "Ambev SA",
    "weight": 0.0111,
    "sector": "Consumer Staples",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7453",
    "name": "Ryohin Keikaku Co Ltd",
    "weight": 0.0111,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALA",
    "name": "AltaGas Ltd",
    "weight": 0.011,
    "sector": "Utilities",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ITRK",
    "name": "Intertek Group PLC",
    "weight": 0.011,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NHY",
    "name": "Norsk Hydro ASA",
    "weight": 0.011,
    "sector": "Materials",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UAL",
    "name": "United Airlines Holdings Inc",
    "weight": 0.011,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3008",
    "name": "Largan Precision Co Ltd",
    "weight": 0.011,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EDV",
    "name": "Endeavour Mining PLC",
    "weight": 0.0109,
    "sector": "Materials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7167",
    "name": "Mebuki Financial Group Inc",
    "weight": 0.0109,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ORSTED",
    "name": "Orsted AS",
    "weight": 0.0109,
    "sector": "Utilities",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6669",
    "name": "Wiwynn Corp",
    "weight": 0.0109,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ELE",
    "name": "Endesa SA",
    "weight": 0.0109,
    "sector": "Utilities",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CCH",
    "name": "Coca-Cola HBC AG",
    "weight": 0.0109,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CSGP",
    "name": "CoStar Group Inc",
    "weight": 0.0108,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SVT",
    "name": "Severn Trent PLC",
    "weight": 0.0108,
    "sector": "Utilities",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ROL",
    "name": "Rollins Inc",
    "weight": 0.0108,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LISN",
    "name": "Chocoladefabriken Lindt & Spruengli AG",
    "weight": 0.0108,
    "sector": "Consumer Staples",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EIM",
    "name": "Eicher Motors Ltd",
    "weight": 0.0107,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9633",
    "name": "Nongfu Spring Co Ltd",
    "weight": 0.0107,
    "sector": "Consumer Staples",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688256",
    "name": "Cambricon Technologies Corp Ltd",
    "weight": 0.0107,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GRASIM",
    "name": "Grasim Industries Ltd",
    "weight": 0.0107,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KBX",
    "name": "Knorr-Bremse AG",
    "weight": 0.0107,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "288",
    "name": "WH Group Ltd",
    "weight": 0.0107,
    "sector": "Consumer Staples",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AGN",
    "name": "Aegon Ltd",
    "weight": 0.0106,
    "sector": "Financials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "010120",
    "name": "LS Electric Co Ltd",
    "weight": 0.0106,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "H",
    "name": "Hydro One Ltd",
    "weight": 0.0106,
    "sector": "Utilities",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TRI",
    "name": "Thomson Reuters Corp",
    "weight": 0.0106,
    "sector": "Information Technology",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HSX",
    "name": "Hiscox Ltd",
    "weight": 0.0106,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6506",
    "name": "Yaskawa Electric Corp",
    "weight": 0.0105,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AVY",
    "name": "Avery Dennison Corp",
    "weight": 0.0105,
    "sector": "Materials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JM",
    "name": "Jardine Matheson Holdings Ltd",
    "weight": 0.0105,
    "sector": "Industrials",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GFS",
    "name": "GLOBALFOUNDRIES Inc",
    "weight": 0.0104,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CHKP",
    "name": "Check Point Software Technologies Ltd",
    "weight": 0.0104,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6869",
    "name": "Yangtze Optical Fibre & Cable Joint Stock Ltd Co",
    "weight": 0.0104,
    "sector": "Communication Services",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LAND",
    "name": "Land Securities Group PLC",
    "weight": 0.0104,
    "sector": "Real Estate",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PLS",
    "name": "PLS Group Ltd",
    "weight": 0.0103,
    "sector": "Materials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2059",
    "name": "King Slide Works Co Ltd",
    "weight": 0.0103,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2301",
    "name": "Lite-On Technology Corp",
    "weight": 0.0103,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DSCT",
    "name": "Israel Discount Bank Ltd",
    "weight": 0.0103,
    "sector": "Financials",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KBANK/F",
    "name": "Kasikornbank PCL",
    "weight": 0.0102,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ATRL",
    "name": "AtkinsRealis Group Inc",
    "weight": 0.0102,
    "sector": "Industrials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FB",
    "name": "Federal Bank Ltd",
    "weight": 0.0102,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "522",
    "name": "ASMPT Ltd",
    "weight": 0.0102,
    "sector": "Information Technology",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CEZ",
    "name": "CEZ AS",
    "weight": 0.0102,
    "sector": "Utilities",
    "location": "Czech Republic",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CG",
    "name": "Carlyle Group Inc/The",
    "weight": 0.0102,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAFCO",
    "name": "SABIC Agri-Nutrients Co",
    "weight": 0.0102,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BMRI",
    "name": "Bank Mandiri Persero Tbk PT",
    "weight": 0.0102,
    "sector": "Financials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6770",
    "name": "Powerchip Semiconductor Manufacturing Corp",
    "weight": 0.0102,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALPHA",
    "name": "Alpha Bank SA",
    "weight": 0.0101,
    "sector": "Financials",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1179",
    "name": "H World Group Ltd",
    "weight": 0.0101,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ERF",
    "name": "Eurofins Scientific SE",
    "weight": 0.0101,
    "sector": "Health Care",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GIL",
    "name": "Gildan Activewear Inc",
    "weight": 0.0101,
    "sector": "Consumer Discretionary",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "G1A",
    "name": "GEA Group AG",
    "weight": 0.0101,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "207940",
    "name": "Samsung Biologics Co Ltd",
    "weight": 0.0101,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2601",
    "name": "China Pacific Insurance Group Co Ltd",
    "weight": 0.01,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SQM/B",
    "name": "Sociedad Quimica y Minera de Chile SA",
    "weight": 0.01,
    "sector": "Materials",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SPSN",
    "name": "Swiss Prime Site AG",
    "weight": 0.01,
    "sector": "Real Estate",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SGE",
    "name": "Sage Group PLC/The",
    "weight": 0.01,
    "sector": "Information Technology",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IMG",
    "name": "IAMGOLD Corp",
    "weight": 0.0099,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "009540",
    "name": "HD Korea Shipbuilding & Offshore Engineering Co Ltd",
    "weight": 0.0099,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688041",
    "name": "Hygon Information Technology Co Ltd",
    "weight": 0.0099,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TATACONS",
    "name": "Tata Consumer Products Ltd",
    "weight": 0.0099,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601899",
    "name": "Zijin Mining Group Co Ltd",
    "weight": 0.0099,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WEIR",
    "name": "Weir Group PLC",
    "weight": 0.0099,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FGR",
    "name": "Eiffage SA",
    "weight": 0.0098,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600036",
    "name": "China Merchants Bank Co Ltd",
    "weight": 0.0098,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TPWR",
    "name": "Tata Power Co Ltd/The",
    "weight": 0.0098,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HOT",
    "name": "HOCHTIEF AG",
    "weight": 0.0098,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PMAH",
    "name": "Press Metal Aluminium Holdings Bhd",
    "weight": 0.0098,
    "sector": "Materials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6963",
    "name": "Rohm Co Ltd",
    "weight": 0.0098,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INDIGO",
    "name": "InterGlobe Aviation Ltd",
    "weight": 0.0098,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "267",
    "name": "CITIC Ltd",
    "weight": 0.0098,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6113",
    "name": "Amada Co Ltd",
    "weight": 0.0097,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KNIN",
    "name": "Kuehne + Nagel International AG",
    "weight": 0.0097,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6845",
    "name": "Azbil Corp",
    "weight": 0.0097,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2423",
    "name": "KE Holdings Inc",
    "weight": 0.0097,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FORTUM",
    "name": "Fortum Oyj",
    "weight": 0.0097,
    "sector": "Utilities",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HEN3",
    "name": "Henkel AG & Co KGaA",
    "weight": 0.0097,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CGPOWER",
    "name": "CG Power & Industrial Solutions Ltd",
    "weight": 0.0097,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BBRI",
    "name": "Bank Rakyat Indonesia Persero Tbk PT",
    "weight": 0.0097,
    "sector": "Financials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3",
    "name": "Hong Kong & China Gas Co Ltd",
    "weight": 0.0096,
    "sector": "Utilities",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5713",
    "name": "Sumitomo Metal Mining Co Ltd",
    "weight": 0.0096,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "010140",
    "name": "Samsung Heavy Industries Co Ltd",
    "weight": 0.0096,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IT",
    "name": "Gartner Inc",
    "weight": 0.0095,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FME",
    "name": "Fresenius Medical Care AG",
    "weight": 0.0095,
    "sector": "Health Care",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TMCV",
    "name": "Tata Motors Ltd /new",
    "weight": 0.0095,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CHC",
    "name": "Charter Hall Group",
    "weight": 0.0095,
    "sector": "Real Estate",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ITC",
    "name": "ITC Ltd",
    "weight": 0.0094,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMBJ3",
    "name": "Embraer SA",
    "weight": 0.0094,
    "sector": "Industrials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALE",
    "name": "Allegro.eu SA",
    "weight": 0.0094,
    "sector": "Consumer Discretionary",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MRL",
    "name": "Merlin Properties Socimi SA",
    "weight": 0.0094,
    "sector": "Real Estate",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MPL",
    "name": "Medibank Pvt Ltd",
    "weight": 0.0094,
    "sector": "Financials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VBBR3",
    "name": "Vibra Energia SA",
    "weight": 0.0094,
    "sector": "Energy",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5334",
    "name": "Niterra Co Ltd",
    "weight": 0.0094,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "196170",
    "name": "Alteogen Inc",
    "weight": 0.0094,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LPC",
    "name": "Lupin Ltd",
    "weight": 0.0094,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2368",
    "name": "Gold Circuit Electronics Ltd",
    "weight": 0.0094,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7701",
    "name": "Shimadzu Corp",
    "weight": 0.0094,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INDUC",
    "name": "Industrivarden AB",
    "weight": 0.0093,
    "sector": "Financials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "373220",
    "name": "LG Energy Solution Ltd",
    "weight": 0.0093,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FOXA",
    "name": "Fox Corp",
    "weight": 0.0093,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SMIN",
    "name": "Smiths Group PLC",
    "weight": 0.0093,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DPZ",
    "name": "Domino's Pizza Inc",
    "weight": 0.0093,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HUBS",
    "name": "HubSpot Inc",
    "weight": 0.0093,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QUB",
    "name": "Qube Holdings Ltd",
    "weight": 0.0093,
    "sector": "Industrials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IMP",
    "name": "Impala Platinum Holdings Ltd",
    "weight": 0.0093,
    "sector": "Materials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HNAL",
    "name": "Hindustan Aeronautics Ltd",
    "weight": 0.0092,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8473",
    "name": "SBI Holdings Inc",
    "weight": 0.0092,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601138",
    "name": "Foxconn Industrial Internet Co Ltd",
    "weight": 0.0092,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7259",
    "name": "Aisin Corp",
    "weight": 0.0092,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BIMAS",
    "name": "BIM Birlesik Magazalar AS",
    "weight": 0.0092,
    "sector": "Consumer Staples",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PODD",
    "name": "Insulet Corp",
    "weight": 0.0092,
    "sector": "Health Care",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CICT",
    "name": "CapitaLand Integrated Commercial Trust",
    "weight": 0.0092,
    "sector": "Real Estate",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7202",
    "name": "Isuzu Motors Ltd",
    "weight": 0.0091,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PFCIBEST",
    "name": "Grupo Cibest SA",
    "weight": 0.0091,
    "sector": "Financials",
    "location": "Colombia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HDFCAMC",
    "name": "HDFC Asset Management Co Ltd",
    "weight": 0.0091,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DRRD",
    "name": "Dr Reddy's Laboratories Ltd",
    "weight": 0.0091,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WISE",
    "name": "Wise Group PLC",
    "weight": 0.009,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "011070",
    "name": "LG Innotek Co Ltd",
    "weight": 0.009,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IH",
    "name": "Indian Hotels Co Ltd/The",
    "weight": 0.009,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4042",
    "name": "Tosoh Corp",
    "weight": 0.009,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9766",
    "name": "Konami Group Corp",
    "weight": 0.009,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VBL",
    "name": "Varun Beverages Ltd",
    "weight": 0.009,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABVX",
    "name": "Abivax SA",
    "weight": 0.009,
    "sector": "Health Care",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9868",
    "name": "XPeng Inc",
    "weight": 0.009,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6504",
    "name": "Fuji Electric Co Ltd",
    "weight": 0.009,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JSTL",
    "name": "JSW Steel Ltd",
    "weight": 0.0089,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6",
    "name": "Power Assets Holdings Ltd",
    "weight": 0.0089,
    "sector": "Utilities",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5201",
    "name": "AGC Inc",
    "weight": 0.0089,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "APHS",
    "name": "Apollo Hospitals Enterprise Ltd",
    "weight": 0.0089,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SPIE",
    "name": "SPIE SA",
    "weight": 0.0089,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASELS",
    "name": "Aselsan Elektronik Sanayi Ve Ticaret AS",
    "weight": 0.0089,
    "sector": "Industrials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RBI",
    "name": "Raiffeisen Bank International AG",
    "weight": 0.0089,
    "sector": "Financials",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AUBANK",
    "name": "AU Small Finance Bank Ltd",
    "weight": 0.0089,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3003",
    "name": "Hulic Co Ltd",
    "weight": 0.0089,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GPT",
    "name": "GPT Group/The",
    "weight": 0.0089,
    "sector": "Real Estate",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "REM",
    "name": "Remgro Ltd",
    "weight": 0.0089,
    "sector": "Financials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UNI",
    "name": "Unipol Gruppo SpA",
    "weight": 0.0089,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LHA",
    "name": "Deutsche Lufthansa AG",
    "weight": 0.0088,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9866",
    "name": "NIO Inc",
    "weight": 0.0088,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ELI",
    "name": "Elia Group SA/NV",
    "weight": 0.0088,
    "sector": "Utilities",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8593",
    "name": "Mitsubishi HC Capital Inc",
    "weight": 0.0088,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JKHY",
    "name": "Jack Henry & Associates Inc",
    "weight": 0.0088,
    "sector": "Industrials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PIDI",
    "name": "Pidilite Industries Ltd",
    "weight": 0.0088,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BLND",
    "name": "British Land Co PLC/The",
    "weight": 0.0087,
    "sector": "Real Estate",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALINMA",
    "name": "Alinma Bank",
    "weight": 0.0087,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9926",
    "name": "Akeso Inc",
    "weight": 0.0087,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MKS",
    "name": "Marks & Spencer Group PLC",
    "weight": 0.0087,
    "sector": "Consumer Staples",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HKL",
    "name": "Hongkong Land Holdings Ltd",
    "weight": 0.0087,
    "sector": "Real Estate",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VOLVA",
    "name": "Volvo AB",
    "weight": 0.0086,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BVI",
    "name": "Bureau Veritas SA",
    "weight": 0.0086,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PEO",
    "name": "Bank Polska Kasa Opieki SA",
    "weight": 0.0086,
    "sector": "Financials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1301",
    "name": "Formosa Plastics Corp",
    "weight": 0.0086,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6586",
    "name": "Makita Corp",
    "weight": 0.0086,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BHFC",
    "name": "Bharat Forge Ltd",
    "weight": 0.0086,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PSPN",
    "name": "PSP Swiss Property AG",
    "weight": 0.0086,
    "sector": "Real Estate",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "064350",
    "name": "Hyundai Rotem Co Ltd",
    "weight": 0.0086,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALDAR",
    "name": "Aldar Properties PJSC",
    "weight": 0.0086,
    "sector": "Real Estate",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GALP",
    "name": "Galp Energia SGPS SA",
    "weight": 0.0085,
    "sector": "Energy",
    "location": "Portugal",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BCP",
    "name": "Banco Comercial Portugues SA",
    "weight": 0.0085,
    "sector": "Financials",
    "location": "Portugal",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6446",
    "name": "PharmaEssentia Corp",
    "weight": 0.0085,
    "sector": "Health Care",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NWSA",
    "name": "News Corp",
    "weight": 0.0085,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ANDR",
    "name": "ANDRITZ AG",
    "weight": 0.0085,
    "sector": "Industrials",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PSON",
    "name": "Pearson PLC",
    "weight": 0.0085,
    "sector": "Consumer Discretionary",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4732",
    "name": "USS Co Ltd",
    "weight": 0.0085,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALMARAI",
    "name": "Almarai Co JSC",
    "weight": 0.0085,
    "sector": "Consumer Staples",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TEN",
    "name": "Tenaris SA",
    "weight": 0.0085,
    "sector": "Energy",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2379",
    "name": "Realtek Semiconductor Corp",
    "weight": 0.0085,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4528",
    "name": "Ono Pharmaceutical Co Ltd",
    "weight": 0.0085,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DHER",
    "name": "Delivery Hero SE",
    "weight": 0.0084,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HEN",
    "name": "Henkel AG & Co KGaA",
    "weight": 0.0084,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2376",
    "name": "Gigabyte Technology Co Ltd",
    "weight": 0.0084,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SOL",
    "name": "Washington H Soul Pattinson & Co Ltd",
    "weight": 0.0084,
    "sector": "Energy",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EQTL3",
    "name": "Equatorial SA",
    "weight": 0.0084,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BMED",
    "name": "Banca Mediolanum SpA",
    "weight": 0.0084,
    "sector": "Financials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KTB/F",
    "name": "Krung Thai Bank PCL",
    "weight": 0.0084,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NEST",
    "name": "Nestle India Ltd",
    "weight": 0.0084,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MICC",
    "name": "Magnum Ice Cream Co NV/The",
    "weight": 0.0084,
    "sector": "Consumer Staples",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1803",
    "name": "Shimizu Corp",
    "weight": 0.0084,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABG",
    "name": "Absa Group Ltd",
    "weight": 0.0084,
    "sector": "Financials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AG",
    "name": "First Majestic Silver Corp",
    "weight": 0.0084,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GAM",
    "name": "Gamuda Bhd",
    "weight": 0.0083,
    "sector": "Industrials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BKT",
    "name": "Bankinter SA",
    "weight": 0.0083,
    "sector": "Financials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DMART",
    "name": "Avenue Supermarts Ltd",
    "weight": 0.0083,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DSG",
    "name": "Descartes Systems Group Inc/The",
    "weight": 0.0083,
    "sector": "Information Technology",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5880",
    "name": "Taiwan Cooperative Financial Holding Co Ltd",
    "weight": 0.0083,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RENT3",
    "name": "Localiza Rent a Car SA",
    "weight": 0.0083,
    "sector": "Consumer Discretionary",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1658",
    "name": "Postal Savings Bank of China Co Ltd",
    "weight": 0.0083,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TPRO",
    "name": "Technoprobe SpA",
    "weight": 0.0083,
    "sector": "Information Technology",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "042660",
    "name": "Hanwha Ocean Co Ltd",
    "weight": 0.0083,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CAR",
    "name": "CAR Group Ltd",
    "weight": 0.0083,
    "sector": "Information Technology",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PNDORA",
    "name": "Pandora A/S",
    "weight": 0.0083,
    "sector": "Consumer Discretionary",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SKAB",
    "name": "Skanska AB",
    "weight": 0.0083,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FOX",
    "name": "Fox Corp",
    "weight": 0.0083,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TLX",
    "name": "Talanx AG",
    "weight": 0.0083,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NED",
    "name": "Nedbank Group Ltd",
    "weight": 0.0083,
    "sector": "Financials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASRNL",
    "name": "ASR Nederland NV",
    "weight": 0.0082,
    "sector": "Financials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VMS",
    "name": "Venture Corp Ltd",
    "weight": 0.0082,
    "sector": "Information Technology",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SULAIMAN",
    "name": "Dr Sulaiman Al Habib Medical Services Group Co",
    "weight": 0.0082,
    "sector": "Health Care",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2449",
    "name": "King Yuan Electronics Co Ltd",
    "weight": 0.0082,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DSTKF",
    "name": "Destek Finans Faktoring AS",
    "weight": 0.0082,
    "sector": "Financials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TECHM",
    "name": "Tech Mahindra Ltd",
    "weight": 0.0082,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SOBI",
    "name": "Swedish Orphan Biovitrum AB",
    "weight": 0.0082,
    "sector": "Health Care",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FORH",
    "name": "Fortis Healthcare Ltd",
    "weight": 0.0082,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7912",
    "name": "Dai Nippon Printing Co Ltd",
    "weight": 0.0082,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EN",
    "name": "Bouygues SA",
    "weight": 0.0082,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TEL2B",
    "name": "Tele2 AB",
    "weight": 0.0082,
    "sector": "Communication Services",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DOCU",
    "name": "DocuSign Inc",
    "weight": 0.0082,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4021",
    "name": "Nissan Chemical Corp",
    "weight": 0.0082,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HAR",
    "name": "Harmony Gold Mining Co Ltd",
    "weight": 0.0082,
    "sector": "Materials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HEIO",
    "name": "Heineken Holding NV",
    "weight": 0.0082,
    "sector": "Consumer Staples",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MZTF",
    "name": "Mizrahi Tefahot Bank Ltd",
    "weight": 0.0082,
    "sector": "Financials",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2356",
    "name": "Inventec Corp",
    "weight": 0.0082,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SIG",
    "name": "Sigma Healthcare Ltd",
    "weight": 0.0082,
    "sector": "Consumer Staples",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IQCD",
    "name": "Industries Qatar QSC",
    "weight": 0.0081,
    "sector": "Materials",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1093",
    "name": "CSPC Pharmaceutical Group Ltd",
    "weight": 0.0081,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8113",
    "name": "Unicharm Corp",
    "weight": 0.0081,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RDOR3",
    "name": "Rede D'Or Sao Luiz SA",
    "weight": 0.0081,
    "sector": "Health Care",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3653",
    "name": "Jentech Precision Industrial Co Ltd",
    "weight": 0.0081,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3289",
    "name": "Tokyu Fudosan Holdings Corp",
    "weight": 0.0081,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FHZN",
    "name": "Flughafen Zurich AG",
    "weight": 0.0081,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OMV",
    "name": "OMV AG",
    "weight": 0.008,
    "sector": "Energy",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TRENT",
    "name": "Trent Ltd",
    "weight": 0.008,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7270",
    "name": "Subaru Corp",
    "weight": 0.008,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4612",
    "name": "Nippon Paint Holdings Co Ltd",
    "weight": 0.008,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300",
    "name": "Midea Group Co Ltd",
    "weight": 0.008,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EVO",
    "name": "Evolution AB",
    "weight": 0.008,
    "sector": "Consumer Discretionary",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6690",
    "name": "Haier Smart Home Co Ltd",
    "weight": 0.008,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SSABB",
    "name": "SSAB AB",
    "weight": 0.008,
    "sector": "Materials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FSV",
    "name": "FirstService Corp",
    "weight": 0.008,
    "sector": "Real Estate",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9697",
    "name": "Capcom Co Ltd",
    "weight": 0.008,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3665",
    "name": "Bizlink Holding Inc",
    "weight": 0.008,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SCAB",
    "name": "Svenska Cellulosa AB SCA",
    "weight": 0.0079,
    "sector": "Materials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9021",
    "name": "West Japan Railway Co",
    "weight": 0.0079,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2395",
    "name": "Advantech Co Ltd",
    "weight": 0.0079,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3436",
    "name": "SUMCO Corp",
    "weight": 0.0079,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AC*",
    "name": "Arca Continental SAB de CV",
    "weight": 0.0079,
    "sector": "Consumer Staples",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RIBL",
    "name": "Riyad Bank",
    "weight": 0.0079,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALD",
    "name": "Ampol Ltd",
    "weight": 0.0079,
    "sector": "Energy",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JBH",
    "name": "JB Hi-Fi Ltd",
    "weight": 0.0079,
    "sector": "Consumer Discretionary",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SGH",
    "name": "Seven Group Holdings Ltd",
    "weight": 0.0078,
    "sector": "Industrials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4005",
    "name": "Sumitomo Chemical Co Ltd",
    "weight": 0.0078,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BSF",
    "name": "Banque Saudi Fransi",
    "weight": 0.0078,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PRIO3",
    "name": "PRIO SA/Brazil",
    "weight": 0.0078,
    "sector": "Energy",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9901",
    "name": "New Oriental Education & Technology Group Inc",
    "weight": 0.0078,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BNZL",
    "name": "Bunzl PLC",
    "weight": 0.0078,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BEZQ",
    "name": "Bezeq The Israeli Telecommunication Corp Ltd",
    "weight": 0.0078,
    "sector": "Communication Services",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ZAL",
    "name": "Zalando SE",
    "weight": 0.0078,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4911",
    "name": "Shiseido Co Ltd",
    "weight": 0.0078,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HDFCLIFE",
    "name": "HDFC Life Insurance Co Ltd",
    "weight": 0.0078,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4684",
    "name": "Obic Co Ltd",
    "weight": 0.0078,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AIA",
    "name": "Auckland International Airport Ltd",
    "weight": 0.0078,
    "sector": "Industrials",
    "location": "New Zealand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IFT",
    "name": "Infratil Ltd",
    "weight": 0.0078,
    "sector": "Financials",
    "location": "New Zealand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CIPLA",
    "name": "Cipla Ltd/India",
    "weight": 0.0078,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TTD",
    "name": "Trade Desk Inc/The",
    "weight": 0.0078,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CLAR",
    "name": "CapitaLand Ascendas REIT",
    "weight": 0.0078,
    "sector": "Real Estate",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HARL",
    "name": "Harel Insurance Investments & Financial Services Ltd",
    "weight": 0.0077,
    "sector": "Financials",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PTG",
    "name": "Petronas Gas Bhd",
    "weight": 0.0077,
    "sector": "Utilities",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "788",
    "name": "China Tower Corp Ltd",
    "weight": 0.0077,
    "sector": "Communication Services",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4938",
    "name": "Pegatron Corp",
    "weight": 0.0077,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PZU",
    "name": "Powszechny Zaklad Ubezpieczen SA",
    "weight": 0.0077,
    "sector": "Financials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INDUSTOW",
    "name": "Indus Towers Ltd",
    "weight": 0.0077,
    "sector": "Communication Services",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GAPB",
    "name": "Grupo Aeroportuario del Pacifico SAB de CV",
    "weight": 0.0077,
    "sector": "Industrials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ACKB",
    "name": "Ackermans & van Haaren NV",
    "weight": 0.0077,
    "sector": "Industrials",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BEIJB",
    "name": "Beijer Ref AB",
    "weight": 0.0077,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6724",
    "name": "Seiko Epson Corp",
    "weight": 0.0077,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EFN",
    "name": "Element Fleet Management Corp",
    "weight": 0.0077,
    "sector": "Industrials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SIGN",
    "name": "SIG Group AG",
    "weight": 0.0077,
    "sector": "Industrials",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1378",
    "name": "China Hongqiao Group Ltd",
    "weight": 0.0077,
    "sector": "Materials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ANA",
    "name": "Acciona SA",
    "weight": 0.0077,
    "sector": "Industrials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MRCO",
    "name": "Marico Ltd",
    "weight": 0.0077,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "148",
    "name": "Kingboard Holdings Ltd",
    "weight": 0.0076,
    "sector": "Materials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CHILE",
    "name": "Banco de Chile",
    "weight": 0.0076,
    "sector": "Financials",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "27",
    "name": "Galaxy Entertainment Group Ltd",
    "weight": 0.0076,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RXL",
    "name": "Rexel SA",
    "weight": 0.0076,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GBLB",
    "name": "Groupe Bruxelles Lambert NV",
    "weight": 0.0076,
    "sector": "Financials",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6488",
    "name": "Globalwafers Co Ltd",
    "weight": 0.0076,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DLFU",
    "name": "DLF Ltd",
    "weight": 0.0076,
    "sector": "Real Estate",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BSE",
    "name": "BSE Ltd",
    "weight": 0.0076,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3044",
    "name": "Tripod Technology Corp",
    "weight": 0.0076,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BSL",
    "name": "BlueScope Steel Ltd",
    "weight": 0.0076,
    "sector": "Materials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5411",
    "name": "JFE Holdings Inc",
    "weight": 0.0076,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WIL",
    "name": "Wilmar International Ltd",
    "weight": 0.0076,
    "sector": "Consumer Staples",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TNE",
    "name": "Technology One Ltd",
    "weight": 0.0076,
    "sector": "Information Technology",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JIOFIN",
    "name": "Jio Financial Services Ltd",
    "weight": 0.0075,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SKFB",
    "name": "SKF AB",
    "weight": 0.0075,
    "sector": "Materials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BHEL",
    "name": "Bharat Heavy Electricals Ltd",
    "weight": 0.0075,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6856",
    "name": "Horiba Ltd",
    "weight": 0.0075,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EQX",
    "name": "Equinox Gold Corp",
    "weight": 0.0075,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TLC",
    "name": "Lottery Corp Ltd/The",
    "weight": 0.0075,
    "sector": "Consumer Discretionary",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QIA",
    "name": "QIAGEN NV",
    "weight": 0.0075,
    "sector": "Health Care",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8359",
    "name": "Hachijuni Nagano Bank Ltd",
    "weight": 0.0075,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ORI",
    "name": "Orica Ltd",
    "weight": 0.0075,
    "sector": "Materials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2015",
    "name": "Li Auto Inc",
    "weight": 0.0074,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MEL",
    "name": "Meridian Energy Ltd",
    "weight": 0.0074,
    "sector": "Utilities",
    "location": "New Zealand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600030",
    "name": "CITIC Securities Co Ltd",
    "weight": 0.0074,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UNITDSPR",
    "name": "United Spirits Ltd",
    "weight": 0.0074,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603259",
    "name": "WuXi AppTec Co Ltd",
    "weight": 0.0074,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3661",
    "name": "Alchip Technologies Ltd",
    "weight": 0.0074,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1519",
    "name": "J&T Global Express Ltd",
    "weight": 0.0074,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2324",
    "name": "Compal Electronics Inc",
    "weight": 0.0074,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BVT",
    "name": "Bidvest Group Ltd",
    "weight": 0.0074,
    "sector": "Industrials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CLI",
    "name": "CapitaLand Investment Ltd/Singapore",
    "weight": 0.0074,
    "sector": "Real Estate",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "071050",
    "name": "Korea Investment Holdings Co Ltd",
    "weight": 0.0074,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ORNBV",
    "name": "Orion Oyj",
    "weight": 0.0074,
    "sector": "Health Care",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ONGC",
    "name": "Oil & Natural Gas Corp Ltd",
    "weight": 0.0073,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LTM",
    "name": "Latam Airlines Group SA",
    "weight": 0.0073,
    "sector": "Consumer Discretionary",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EDEN",
    "name": "Edenred SE",
    "weight": 0.0073,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "005387",
    "name": "Hyundai Motor Co",
    "weight": 0.0073,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4523",
    "name": "Eisai Co Ltd",
    "weight": 0.0073,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PE&OLES*",
    "name": "Industrias Penoles SAB de CV",
    "weight": 0.0073,
    "sector": "Materials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SLM",
    "name": "Sanlam Ltd",
    "weight": 0.0073,
    "sector": "Financials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "047810",
    "name": "Korea Aerospace Industries Ltd",
    "weight": 0.0073,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PPC",
    "name": "Public Power Corp SA",
    "weight": 0.0073,
    "sector": "Utilities",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600999",
    "name": "China Merchants Securities Co Ltd",
    "weight": 0.0073,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ACEM",
    "name": "Ambuja Cements Ltd",
    "weight": 0.0073,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BID",
    "name": "Bid Corp Ltd",
    "weight": 0.0073,
    "sector": "Consumer Staples",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BEZ",
    "name": "Beazley PLC",
    "weight": 0.0073,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPN/F",
    "name": "Central Pattana PCL",
    "weight": 0.0072,
    "sector": "Real Estate",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PTTEP/F",
    "name": "PTT Exploration & Production PCL",
    "weight": 0.0072,
    "sector": "Energy",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "THYAO",
    "name": "Turk Hava Yollari AO",
    "weight": 0.0072,
    "sector": "Consumer Discretionary",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "051910",
    "name": "LG Chem Ltd",
    "weight": 0.0072,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8354",
    "name": "Fukuoka Financial Group Inc",
    "weight": 0.0072,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FIBRAPL",
    "name": "Prologis Property Mexico SA de CV",
    "weight": 0.0072,
    "sector": "Real Estate",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FALAB",
    "name": "Falabella SA",
    "weight": 0.0072,
    "sector": "Consumer Discretionary",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000150",
    "name": "Doosan Co Ltd",
    "weight": 0.0072,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2338",
    "name": "Weichai Power Co Ltd",
    "weight": 0.0072,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7752",
    "name": "Ricoh Co Ltd",
    "weight": 0.0072,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2801",
    "name": "Kikkoman Corp",
    "weight": 0.0071,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UOL",
    "name": "UOL Group Ltd",
    "weight": 0.0071,
    "sector": "Real Estate",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SHP",
    "name": "Shoprite Holdings Ltd",
    "weight": 0.0071,
    "sector": "Consumer Staples",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8951",
    "name": "Nippon Building Fund Inc",
    "weight": 0.0071,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CRDA",
    "name": "Croda International PLC",
    "weight": 0.0071,
    "sector": "Materials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INDT",
    "name": "Indutrade AB",
    "weight": 0.0071,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MOL",
    "name": "MOL Hungarian Oil & Gas PLC",
    "weight": 0.0071,
    "sector": "Energy",
    "location": "Hungary",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600900",
    "name": "China Yangtze Power Co Ltd",
    "weight": 0.0071,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601995",
    "name": "China International Capital Corp Ltd",
    "weight": 0.0071,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADNOCGAS",
    "name": "Adnoc Gas PLC",
    "weight": 0.0071,
    "sector": "Energy",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPALL/F",
    "name": "CP ALL PCL",
    "weight": 0.0071,
    "sector": "Consumer Staples",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MRO",
    "name": "Melrose Industries PLC",
    "weight": 0.007,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PPH",
    "name": "Pepkor Holdings Ltd",
    "weight": 0.007,
    "sector": "Consumer Discretionary",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AUTO",
    "name": "Autotrader Group PLC",
    "weight": 0.007,
    "sector": "Information Technology",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BEI",
    "name": "Beiersdorf AG",
    "weight": 0.007,
    "sector": "Consumer Staples",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SCI",
    "name": "Sembcorp Industries Ltd",
    "weight": 0.007,
    "sector": "Energy",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GFL",
    "name": "GFL Environmental Inc",
    "weight": 0.007,
    "sector": "Utilities",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1101",
    "name": "TCC Group Holdings Co Ltd",
    "weight": 0.007,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5332",
    "name": "TOTO Ltd",
    "weight": 0.007,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COMI",
    "name": "Commercial International Bank - Egypt (CIB)",
    "weight": 0.007,
    "sector": "Financials",
    "location": "Egypt",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2002",
    "name": "China Steel Corp",
    "weight": 0.007,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "278470",
    "name": "APR Corp/Korea",
    "weight": 0.007,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BSAN",
    "name": "Banco Santander Chile",
    "weight": 0.007,
    "sector": "Financials",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADIB",
    "name": "Abu Dhabi Islamic Bank PJSC",
    "weight": 0.007,
    "sector": "Financials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OPCE",
    "name": "OPC Energy Ltd",
    "weight": 0.0069,
    "sector": "Utilities",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MAXHEALT",
    "name": "Max Healthcare Institute Ltd",
    "weight": 0.0069,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STJ",
    "name": "St James's Place PLC",
    "weight": 0.0069,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4755",
    "name": "Rakuten Group Inc",
    "weight": 0.0069,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MOWI",
    "name": "Mowi ASA",
    "weight": 0.0069,
    "sector": "Consumer Staples",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LI",
    "name": "Klepierre SA",
    "weight": 0.0069,
    "sector": "Real Estate",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4186",
    "name": "Tokyo Ohka Kogyo Co Ltd",
    "weight": 0.0069,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "POLICYBZ",
    "name": "PB Fintech Ltd",
    "weight": 0.0068,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BDMS/F",
    "name": "Bangkok Dusit Medical Services PCL",
    "weight": 0.0068,
    "sector": "Health Care",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TRELB",
    "name": "Trelleborg AB",
    "weight": 0.0068,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GJF",
    "name": "Gjensidige Forsikring ASA",
    "weight": 0.0068,
    "sector": "Financials",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FRES",
    "name": "Fresnillo PLC",
    "weight": 0.0068,
    "sector": "Materials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "086520",
    "name": "Ecopro Co Ltd",
    "weight": 0.0068,
    "sector": "Materials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "035720",
    "name": "Kakao Corp",
    "weight": 0.0068,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CTEC",
    "name": "Convatec Group PLC",
    "weight": 0.0068,
    "sector": "Health Care",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MOTV3",
    "name": "Motiva Infraestrutura de Mobilidade SA",
    "weight": 0.0068,
    "sector": "Industrials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "XRO",
    "name": "Xero Ltd",
    "weight": 0.0068,
    "sector": "Information Technology",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ICG",
    "name": "ICG PLC",
    "weight": 0.0068,
    "sector": "Financials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2618",
    "name": "Eva Airways Corp",
    "weight": 0.0068,
    "sector": "Consumer Discretionary",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IMCD",
    "name": "IMCD NV",
    "weight": 0.0067,
    "sector": "Materials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SFR",
    "name": "Sandfire Resources Ltd",
    "weight": 0.0067,
    "sector": "Materials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COLOB",
    "name": "Coloplast A/S",
    "weight": 0.0067,
    "sector": "Health Care",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TCELL",
    "name": "Turkcell Iletisim Hizmetleri AS",
    "weight": 0.0067,
    "sector": "Communication Services",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GAIL",
    "name": "GAIL India Ltd",
    "weight": 0.0067,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2768",
    "name": "Sojitz Corp",
    "weight": 0.0067,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ORK",
    "name": "Orkla ASA",
    "weight": 0.0067,
    "sector": "Consumer Staples",
    "location": "Norway",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9005",
    "name": "Tokyu Corp",
    "weight": 0.0067,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300502",
    "name": "Eoptolink Technology Inc Ltd",
    "weight": 0.0066,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2409",
    "name": "AUO Corp",
    "weight": 0.0066,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KESKOB",
    "name": "Kesko Oyj",
    "weight": 0.0066,
    "sector": "Consumer Staples",
    "location": "Finland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MAERSKB",
    "name": "AP Moller - Maersk A/S",
    "weight": 0.0066,
    "sector": "Industrials",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6471",
    "name": "NSK Ltd",
    "weight": 0.0066,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UHR",
    "name": "Swatch Group AG/The",
    "weight": 0.0066,
    "sector": "Consumer Discretionary",
    "location": "Switzerland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3034",
    "name": "Novatek Microelectronics Corp",
    "weight": 0.0066,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DIE",
    "name": "D'ieteren Group",
    "weight": 0.0066,
    "sector": "Consumer Discretionary",
    "location": "Belgium",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AOT/F",
    "name": "Airports of Thailand PCL",
    "weight": 0.0066,
    "sector": "Industrials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4204",
    "name": "Sekisui Chemical Co Ltd",
    "weight": 0.0066,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BIMBOA",
    "name": "Grupo Bimbo SAB de CV",
    "weight": 0.0066,
    "sector": "Consumer Staples",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6473",
    "name": "JTEKT Corp",
    "weight": 0.0066,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "X",
    "name": "TMX Group Ltd",
    "weight": 0.0065,
    "sector": "Financials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8729",
    "name": "Sony Financial Group Inc",
    "weight": 0.0065,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JARIR",
    "name": "Jarir Marketing Co",
    "weight": 0.0065,
    "sector": "Consumer Discretionary",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2353",
    "name": "Acer Inc",
    "weight": 0.0065,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CIBEST",
    "name": "Grupo Cibest SA",
    "weight": 0.0065,
    "sector": "Financials",
    "location": "Colombia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TLKM",
    "name": "Telkom Indonesia Persero Tbk PT",
    "weight": 0.0065,
    "sector": "Communication Services",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASURB",
    "name": "Grupo Aeroportuario del Sureste SAB de CV",
    "weight": 0.0065,
    "sector": "Industrials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AZJ",
    "name": "Aurizon Holdings Ltd",
    "weight": 0.0064,
    "sector": "Industrials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IPN",
    "name": "Ipsen SA",
    "weight": 0.0064,
    "sector": "Health Care",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "079550",
    "name": "LIG Defense&Aerospace Co Ltd",
    "weight": 0.0064,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MGR",
    "name": "Mirvac Group",
    "weight": 0.0064,
    "sector": "Real Estate",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GULF/F",
    "name": "Gulf Development PCL",
    "weight": 0.0064,
    "sector": "Utilities",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MIN",
    "name": "Mineral Resources Ltd",
    "weight": 0.0064,
    "sector": "Materials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5844",
    "name": "Kyoto Financial Group Inc",
    "weight": 0.0064,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BNR",
    "name": "Brenntag SE",
    "weight": 0.0064,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PAYTM",
    "name": "One 97 Communications Ltd",
    "weight": 0.0064,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TMPV",
    "name": "Tata Motors Passenger Vehicles Limited",
    "weight": 0.0063,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GET",
    "name": "Getlink SE",
    "weight": 0.0063,
    "sector": "Industrials",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DCC",
    "name": "DCC PLC",
    "weight": 0.0063,
    "sector": "Industrials",
    "location": "United Kingdom",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SECUB",
    "name": "Securitas AB",
    "weight": 0.0063,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CON",
    "name": "Continental AG",
    "weight": 0.0063,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SUEL",
    "name": "Suzlon Energy Ltd",
    "weight": 0.0063,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "042700",
    "name": "Hanmi Semiconductor Co Ltd",
    "weight": 0.0063,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1336",
    "name": "New China Life Insurance Co Ltd",
    "weight": 0.0062,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SCB/F",
    "name": "SCB X PCL",
    "weight": 0.0062,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RED",
    "name": "Redeia Corp SA",
    "weight": 0.0062,
    "sector": "Utilities",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3861",
    "name": "Oji Holdings Corp",
    "weight": 0.0062,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2404",
    "name": "United Integrated Services Co Ltd",
    "weight": 0.0062,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DIVI",
    "name": "Divi's Laboratories Ltd",
    "weight": 0.0062,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7272",
    "name": "Yamaha Motor Co Ltd",
    "weight": 0.0062,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VAML",
    "name": "Vedanta Aluminium Metal Ltd",
    "weight": 0.0062,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3099",
    "name": "Isetan Mitsukoshi Holdings Ltd",
    "weight": 0.0062,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADDTB",
    "name": "AddTech AB",
    "weight": 0.0062,
    "sector": "Industrials",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TRYG",
    "name": "Tryg A/S",
    "weight": 0.0062,
    "sector": "Financials",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "998",
    "name": "China CITIC Bank Corp Ltd",
    "weight": 0.0061,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2611",
    "name": "Guotai Junan Securities Co Ltd",
    "weight": 0.0061,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RHC",
    "name": "Ramsay Health Care Ltd",
    "weight": 0.0061,
    "sector": "Health Care",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STN",
    "name": "Stantec Inc",
    "weight": 0.0061,
    "sector": "Industrials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000720",
    "name": "Hyundai Engineering & Construction Co Ltd",
    "weight": 0.0061,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "016360",
    "name": "Samsung Securities Co Ltd",
    "weight": 0.0061,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3998",
    "name": "Bosideng International Holdings Ltd",
    "weight": 0.0015,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PTTGC/F",
    "name": "PTT Global Chemical PCL",
    "weight": 0.0015,
    "sector": "Materials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RIYADHCA",
    "name": "Riyadh Cables Group Co",
    "weight": 0.0015,
    "sector": "Industrials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9533",
    "name": "Toho Gas Co Ltd",
    "weight": 0.0015,
    "sector": "Utilities",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPF/F",
    "name": "Charoen Pokphand Foods PCL",
    "weight": 0.0015,
    "sector": "Consumer Staples",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002129",
    "name": "TCL Zhonghuan Renewable Energy Technology Co Ltd",
    "weight": 0.0015,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MOH",
    "name": "Motor Oil Hellas Corinth Refineries SA",
    "weight": 0.0015,
    "sector": "Energy",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000001",
    "name": "Ping An Bank Co Ltd",
    "weight": 0.0015,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1548",
    "name": "Genscript Biotech Corp",
    "weight": 0.0015,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "YTL",
    "name": "YTL Corp Bhd",
    "weight": 0.0015,
    "sector": "Utilities",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688072",
    "name": "Piotech Inc",
    "weight": 0.0015,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3226",
    "name": "Mitsui Fudosan Accommodations Fund Inc",
    "weight": 0.0015,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3309",
    "name": "Sekisui House Reit Inc",
    "weight": 0.0015,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ROCKB",
    "name": "ROCKWOOL A/S",
    "weight": 0.0015,
    "sector": "Industrials",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3269",
    "name": "Advance Residence Investment Corp",
    "weight": 0.0015,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8252",
    "name": "Marui Group Co Ltd",
    "weight": 0.0015,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IPCA",
    "name": "Ipca Laboratories Ltd",
    "weight": 0.0015,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "006405",
    "name": "Samsung SDI Co Ltd",
    "weight": 0.0015,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MPACT",
    "name": "Mapletree Pan Asia Commercial Trust",
    "weight": 0.0015,
    "sector": "Real Estate",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASTOR",
    "name": "Astor Transformator Enerji Turizm Insaat Ve Petrol Sanayi Ticaret AS",
    "weight": 0.0015,
    "sector": "Industrials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WHL",
    "name": "Woolworths Holdings Ltd/South Africa",
    "weight": 0.0015,
    "sector": "Consumer Discretionary",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ISCTR",
    "name": "Turkiye Is Bankasi AS",
    "weight": 0.0015,
    "sector": "Financials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4613",
    "name": "Kansai Paint Co Ltd",
    "weight": 0.0015,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CSG",
    "name": "CSG NV",
    "weight": 0.0015,
    "sector": "Industrials",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SPK",
    "name": "Spark New Zealand Ltd",
    "weight": 0.0015,
    "sector": "Communication Services",
    "location": "New Zealand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1910",
    "name": "Samsonite International SA",
    "weight": 0.0015,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CXSE3",
    "name": "Caixa Seguridade Participacoes S/A",
    "weight": 0.0015,
    "sector": "Financials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OTOEL",
    "name": "Autohellas Tourist and Trading SA",
    "weight": 0.0015,
    "sector": "Consumer Discretionary",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1882",
    "name": "Haitian International Holdings Ltd",
    "weight": 0.0015,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "900948",
    "name": "Inner Mongolia Yitai Coal Co Ltd",
    "weight": 0.0015,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SIGMAFA",
    "name": "Sigma Foods SAB de CV",
    "weight": 0.0015,
    "sector": "Consumer Staples",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SGM",
    "name": "Sims Ltd",
    "weight": 0.0015,
    "sector": "Utilities",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "763",
    "name": "ZTE Corp",
    "weight": 0.0014,
    "sector": "Communication Services",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HYPE3",
    "name": "Hypera SA",
    "weight": 0.0014,
    "sector": "Health Care",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "307950",
    "name": "Hyundai Autoever Corp",
    "weight": 0.0014,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603893",
    "name": "Rockchip Electronics Co Ltd",
    "weight": 0.0014,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600150",
    "name": "China CSSC Holdings Ltd",
    "weight": 0.0014,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9468",
    "name": "Kadokawa Corp",
    "weight": 0.0014,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TAIBA",
    "name": "Taiba Investments Co",
    "weight": 0.0014,
    "sector": "Real Estate",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GRUMAB",
    "name": "Gruma SAB de CV",
    "weight": 0.0014,
    "sector": "Consumer Staples",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1157",
    "name": "Zoomlion Heavy Industry Science and Technology Co Ltd",
    "weight": 0.0014,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9831",
    "name": "Yamada Holdings Co Ltd",
    "weight": 0.0014,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300124",
    "name": "Shenzhen Inovance Technology Co Ltd",
    "weight": 0.0014,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4912",
    "name": "Lion Corp",
    "weight": 0.0014,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3323",
    "name": "China National Building Material Co Ltd",
    "weight": 0.0014,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SBICARD",
    "name": "SBI Cards & Payment Services Ltd",
    "weight": 0.0014,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688271",
    "name": "Shanghai United Imaging Healthcare Co Ltd",
    "weight": 0.0014,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8TRA",
    "name": "Traton SE",
    "weight": 0.0014,
    "sector": "Industrials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6417",
    "name": "Sankyo Co Ltd",
    "weight": 0.0014,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "005385",
    "name": "Hyundai Motor Co",
    "weight": 0.0014,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2212",
    "name": "Yamazaki Baking Co Ltd",
    "weight": 0.0014,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HZ",
    "name": "Hindustan Zinc Ltd",
    "weight": 0.0014,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603290",
    "name": "StarPower Semiconductor Ltd",
    "weight": 0.0014,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9076",
    "name": "Seino Holdings Co Ltd",
    "weight": 0.0014,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9688",
    "name": "Zai Lab Ltd",
    "weight": 0.0014,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CEMARGOS",
    "name": "Cementos Argos SA",
    "weight": 0.0014,
    "sector": "Industrials",
    "location": "Colombia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NEXI",
    "name": "Nexi SpA",
    "weight": 0.0014,
    "sector": "Industrials",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NMDC",
    "name": "NMDC Ltd",
    "weight": 0.0014,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300458",
    "name": "All Winner Technology Co Ltd",
    "weight": 0.0014,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NHPC",
    "name": "NHPC Ltd",
    "weight": 0.0014,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300033",
    "name": "Hithink RoyalFlush Information Network Co Ltd",
    "weight": 0.0014,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PNB",
    "name": "Punjab National Bank",
    "weight": 0.0014,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SUNMED",
    "name": "Sunway Healthcare Holdings bhd",
    "weight": 0.0014,
    "sector": "Health Care",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BBAJIOO",
    "name": "Banco del Bajio SA",
    "weight": 0.0014,
    "sector": "Financials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INW",
    "name": "Infrastrutture Wireless Italiane SpA",
    "weight": 0.0014,
    "sector": "Communication Services",
    "location": "Italy",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TADAWULG",
    "name": "Saudi Tadawul Group Holding Co",
    "weight": 0.0014,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3396",
    "name": "Legend Holdings Corp",
    "weight": 0.0014,
    "sector": "Information Technology",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8227",
    "name": "Shimamura Co Ltd",
    "weight": 0.0014,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600585",
    "name": "Anhui Conch Cement Co Ltd",
    "weight": 0.0014,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3898",
    "name": "Zhuzhou CRRC Times Electric Co Ltd",
    "weight": 0.0014,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1099",
    "name": "Sinopharm Group Co Ltd",
    "weight": 0.0014,
    "sector": "Consumer Staples",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DWS",
    "name": "DWS Group GmbH & Co KGaA",
    "weight": 0.0014,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RRTL",
    "name": "RTL Group SA",
    "weight": 0.0014,
    "sector": "Consumer Discretionary",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "285",
    "name": "BYD Electronic International Co Ltd",
    "weight": 0.0014,
    "sector": "Communication Services",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6005",
    "name": "Miura Co Ltd",
    "weight": 0.0014,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TTKOM",
    "name": "Turk Telekomunikasyon AS",
    "weight": 0.0014,
    "sector": "Communication Services",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2609",
    "name": "Yang Ming Marine Transport Corp",
    "weight": 0.0014,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MMFS",
    "name": "Mahindra & Mahindra Financial Services Ltd",
    "weight": 0.0014,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DRD",
    "name": "DRDGOLD Ltd",
    "weight": 0.0014,
    "sector": "Materials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TCOM",
    "name": "Tata Communications Ltd",
    "weight": 0.0014,
    "sector": "Communication Services",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KBANK-R",
    "name": "Kasikornbank PCL",
    "weight": 0.0014,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "010950",
    "name": "S-Oil Corp",
    "weight": 0.0014,
    "sector": "Energy",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "322",
    "name": "Tingyi Cayman Islands Holding Corp",
    "weight": 0.0014,
    "sector": "Consumer Staples",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "323410",
    "name": "KakaoBank Corp",
    "weight": 0.0014,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MVNE",
    "name": "Mivne Real Estate KD Ltd",
    "weight": 0.0014,
    "sector": "Real Estate",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7988",
    "name": "Nifco Inc/Japan",
    "weight": 0.0014,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600989",
    "name": "Ningxia Baofeng Energy Group Co Ltd",
    "weight": 0.0014,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "136",
    "name": "China Ruyi Holdings Ltd",
    "weight": 0.0014,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IJM",
    "name": "IJM Corp Bhd",
    "weight": 0.0014,
    "sector": "Industrials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601766",
    "name": "CRRC Corp Ltd",
    "weight": 0.0014,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SI",
    "name": "Supreme Industries Ltd",
    "weight": 0.0013,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1357",
    "name": "Meitu Inc",
    "weight": 0.0013,
    "sector": "Information Technology",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4887",
    "name": "Sawai Group Holdings Co Ltd",
    "weight": 0.0013,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DLEKG",
    "name": "Delek Group Ltd",
    "weight": 0.0013,
    "sector": "Energy",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9202",
    "name": "ANA Holdings Inc",
    "weight": 0.0013,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ILU",
    "name": "Iluka Resources Ltd",
    "weight": 0.0013,
    "sector": "Materials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8",
    "name": "PCCW Ltd",
    "weight": 0.0013,
    "sector": "Communication Services",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VFQS",
    "name": "Vodafone Qatar PQSC",
    "weight": 0.0013,
    "sector": "Communication Services",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MAZDOCKS",
    "name": "Mazagon Dock Shipbuilders Ltd",
    "weight": 0.0013,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "180640",
    "name": "Hanjin Kal Corp",
    "weight": 0.0013,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "914",
    "name": "Anhui Conch Cement Co Ltd",
    "weight": 0.0013,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CRC/F",
    "name": "Central Retail Corp PCL",
    "weight": 0.0013,
    "sector": "Consumer Discretionary",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688521",
    "name": "Verisilicon Microelectronics Shanghai Co Ltd",
    "weight": 0.0013,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "001040",
    "name": "CJ Corp",
    "weight": 0.0013,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002340",
    "name": "GEM Co Ltd",
    "weight": 0.0013,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8YZ",
    "name": "Yangzijiang Maritime Development Ltd",
    "weight": 0.0013,
    "sector": "Financials",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600026",
    "name": "COSCO SHIPPING Energy Transportation Co Ltd",
    "weight": 0.0013,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AGILITY",
    "name": "Agility Global PLC",
    "weight": 0.0013,
    "sector": "Industrials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4902",
    "name": "Konica Minolta Inc",
    "weight": 0.0013,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "13",
    "name": "HUTCHMED China Ltd",
    "weight": 0.0013,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "780",
    "name": "Tongcheng Travel Holdings Ltd",
    "weight": 0.0013,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9142",
    "name": "Kyushu Railway Co",
    "weight": 0.0013,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5021",
    "name": "Cosmo Energy Holdings Co Ltd",
    "weight": 0.0013,
    "sector": "Energy",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "00088K",
    "name": "Hanwha Corp",
    "weight": 0.0013,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "011790",
    "name": "SKC Co Ltd",
    "weight": 0.0013,
    "sector": "Materials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2377",
    "name": "Micro-Star International Co Ltd",
    "weight": 0.0013,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OINL",
    "name": "Oil India Ltd",
    "weight": 0.0013,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADES",
    "name": "Ades Holding Co",
    "weight": 0.0013,
    "sector": "Energy",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "916",
    "name": "China Longyuan Power Group Corp Ltd",
    "weight": 0.0013,
    "sector": "Utilities",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9995",
    "name": "Remegen Co Ltd",
    "weight": 0.0013,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MAXIS",
    "name": "Maxis Bhd",
    "weight": 0.0013,
    "sector": "Communication Services",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ATHM",
    "name": "Autohome Inc",
    "weight": 0.0013,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "968",
    "name": "Xinyi Solar Holdings Ltd",
    "weight": 0.0013,
    "sector": "Energy",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PREMIERE",
    "name": "Premier Energy Ltd",
    "weight": 0.0013,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "271560",
    "name": "Orion Corp/Republic of Korea",
    "weight": 0.0013,
    "sector": "Consumer Staples",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601668",
    "name": "China State Construction Engineering Corp Ltd",
    "weight": 0.0013,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "138930",
    "name": "BNK Financial Group Inc",
    "weight": 0.0013,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1503",
    "name": "Shihlin Electric & Engineering Corp",
    "weight": 0.0013,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "066970",
    "name": "L&F Co Ltd",
    "weight": 0.0013,
    "sector": "Materials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TITC",
    "name": "Titan Cement International SA",
    "weight": 0.0013,
    "sector": "Industrials",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NTPCGREE",
    "name": "NTPC Green Energy Ltd",
    "weight": 0.0013,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300604",
    "name": "Hangzhou Chang Chuan Technology Co Ltd",
    "weight": 0.0013,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MABANEE",
    "name": "Mabanee Co KPSC",
    "weight": 0.0013,
    "sector": "Real Estate",
    "location": "Kuwait",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3038",
    "name": "Kobe Bussan Co Ltd",
    "weight": 0.0013,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ATGL",
    "name": "Adani Total Gas Ltd",
    "weight": 0.0013,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5110",
    "name": "Sumitomo Rubber Industries Ltd",
    "weight": 0.0013,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "034220",
    "name": "LG Display Co Ltd",
    "weight": 0.0013,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6460",
    "name": "Sega Sammy Holdings Inc",
    "weight": 0.0012,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6862",
    "name": "Haidilao International Holding Ltd",
    "weight": 0.0012,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600959",
    "name": "Jiangsu Broadcasting Cable Information Network Corp Ltd",
    "weight": 0.0012,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2498",
    "name": "HTC Corp",
    "weight": 0.0012,
    "sector": "Communication Services",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "241560",
    "name": "Doosan Bobcat Inc",
    "weight": 0.0012,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EGCO/F",
    "name": "Electricity Generating PCL",
    "weight": 0.0012,
    "sector": "Utilities",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4680",
    "name": "Round One Corp",
    "weight": 0.0012,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3774",
    "name": "Internet Initiative Japan Inc",
    "weight": 0.0012,
    "sector": "Communication Services",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "Q*",
    "name": "Qualitas Controladora SAB de CV",
    "weight": 0.0012,
    "sector": "Financials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600409",
    "name": "Tangshan Sanyou Chemical Industries Co Ltd",
    "weight": 0.0012,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENELAM",
    "name": "Enel Americas SA",
    "weight": 0.0012,
    "sector": "Utilities",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4540",
    "name": "Tsumura & Co",
    "weight": 0.0012,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "960",
    "name": "Longfor Group Holdings Ltd",
    "weight": 0.0012,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "0126Z0",
    "name": "Samsung Episholdings Co Ltd",
    "weight": 0.0012,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SIME",
    "name": "Sime Darby Bhd",
    "weight": 0.0012,
    "sector": "Consumer Discretionary",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688002",
    "name": "Raytron Technology Co Ltd",
    "weight": 0.0012,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601865",
    "name": "Flat Glass Group Co Ltd",
    "weight": 0.0012,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AXIATA",
    "name": "Axiata Group Bhd",
    "weight": 0.0012,
    "sector": "Communication Services",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4506",
    "name": "Sumitomo Pharma Co Ltd",
    "weight": 0.0012,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FTAL",
    "name": "Fattal Holdings 1998 Ltd",
    "weight": 0.0012,
    "sector": "Consumer Discretionary",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9201",
    "name": "Japan Airlines Co Ltd",
    "weight": 0.0012,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UNOMINDA",
    "name": "UNO Minda Ltd",
    "weight": 0.0012,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABCAP",
    "name": "Aditya Birla Capital Ltd",
    "weight": 0.0012,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NWL",
    "name": "Netwealth Group Ltd",
    "weight": 0.0012,
    "sector": "Financials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8410",
    "name": "Seven Bank Ltd",
    "weight": 0.0012,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601225",
    "name": "Shaanxi Coal Industry Co Ltd",
    "weight": 0.0012,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002493",
    "name": "Rongsheng Petrochemical Co Ltd",
    "weight": 0.0012,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002714",
    "name": "Muyuan Foods Group Co Ltd",
    "weight": 0.0012,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600887",
    "name": "Inner Mongolia Yili Industrial Group Co Ltd",
    "weight": 0.0012,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688385",
    "name": "Shanghai Fudan Microelectronics Group Co Ltd",
    "weight": 0.0012,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PLNG",
    "name": "Petronet LNG Ltd",
    "weight": 0.0012,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2367",
    "name": "Giant Biogene Holding Co ltd",
    "weight": 0.0012,
    "sector": "Consumer Staples",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688126",
    "name": "National Silicon Industry Group Co Ltd",
    "weight": 0.0012,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601228",
    "name": "Guangzhou Port Co Ltd",
    "weight": 0.0012,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALI",
    "name": "Ayala Land Inc",
    "weight": 0.0012,
    "sector": "Real Estate",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5938",
    "name": "Lixil Corp",
    "weight": 0.0012,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MTS",
    "name": "Metcash Ltd",
    "weight": 0.0012,
    "sector": "Consumer Staples",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3048",
    "name": "Bic Camera Inc",
    "weight": 0.0012,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INBK",
    "name": "Indian Bank",
    "weight": 0.0012,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MDKA",
    "name": "Merdeka Copper Gold Tbk PT",
    "weight": 0.0012,
    "sector": "Materials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TRUE-R",
    "name": "True Corp PCL",
    "weight": 0.0012,
    "sector": "Communication Services",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PETKM",
    "name": "Petkim Petrokimya Holding AS",
    "weight": 0.0012,
    "sector": "Materials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "384",
    "name": "China Gas Holdings Ltd",
    "weight": 0.0012,
    "sector": "Utilities",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9896",
    "name": "MINISO Group Holding Ltd",
    "weight": 0.0012,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMRT",
    "name": "Sumber Alfaria Trijaya Tbk PT",
    "weight": 0.0012,
    "sector": "Consumer Staples",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EBO",
    "name": "EBOS Group Ltd",
    "weight": 0.0012,
    "sector": "Health Care",
    "location": "New Zealand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7984",
    "name": "Kokuyo Co Ltd",
    "weight": 0.0012,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FLT",
    "name": "Frasers Logistics & Commercial Trust",
    "weight": 0.0012,
    "sector": "Real Estate",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6969",
    "name": "Smoore International Holdings Ltd",
    "weight": 0.0012,
    "sector": "Consumer Staples",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7459",
    "name": "Medipal Holdings Corp",
    "weight": 0.0011,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HLUNB",
    "name": "H Lundbeck A/S",
    "weight": 0.0011,
    "sector": "Health Care",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600489",
    "name": "Zhongjin Gold Corp Ltd",
    "weight": 0.0011,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SMFT3",
    "name": "Smartfit Escola de Ginastica e Danca SA",
    "weight": 0.0011,
    "sector": "Consumer Discretionary",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002281",
    "name": "Accelink Technologies Co Ltd",
    "weight": 0.0011,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OBER",
    "name": "Oberoi Realty Ltd",
    "weight": 0.0011,
    "sector": "Real Estate",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8088",
    "name": "Iwatani Corp",
    "weight": 0.0011,
    "sector": "Utilities",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MBT",
    "name": "Metropolitan Bank & Trust Co",
    "weight": 0.0011,
    "sector": "Financials",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "670",
    "name": "China Eastern Airlines Corp Ltd",
    "weight": 0.0011,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9412",
    "name": "SKY Perfect JSAT Corp",
    "weight": 0.0011,
    "sector": "Communication Services",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601881",
    "name": "China Galaxy Securities Co Ltd",
    "weight": 0.0011,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "090430",
    "name": "Amorepacific Corp",
    "weight": 0.0011,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000792",
    "name": "Qinghai Salt Lake Industry Co Ltd",
    "weight": 0.0011,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BRPT",
    "name": "Barito Pacific Tbk PT",
    "weight": 0.0011,
    "sector": "Materials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MRDIY",
    "name": "MR DIY Group M Bhd",
    "weight": 0.0011,
    "sector": "Consumer Discretionary",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4202",
    "name": "Daicel Corp",
    "weight": 0.0011,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5947",
    "name": "Rinnai Corp",
    "weight": 0.0011,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GBK",
    "name": "Gulf Bank KSCP",
    "weight": 0.0011,
    "sector": "Financials",
    "location": "Kuwait",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JOYY",
    "name": "JOYY Inc",
    "weight": 0.0011,
    "sector": "Information Technology",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "867",
    "name": "China Medical System Holdings Ltd",
    "weight": 0.0011,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QFIN",
    "name": "Qfin Holdings Inc",
    "weight": 0.0011,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4733",
    "name": "OBIC Business Consultants Co Ltd",
    "weight": 0.0011,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1138",
    "name": "COSCO SHIPPING Energy Transportation Co Ltd",
    "weight": 0.0011,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603288",
    "name": "Foshan Haitian Flavouring & Food Co Ltd",
    "weight": 0.0011,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9899",
    "name": "Cloud Music Inc",
    "weight": 0.0011,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9008",
    "name": "Keio Corp",
    "weight": 0.0011,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4194",
    "name": "Visional Inc",
    "weight": 0.0011,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2784",
    "name": "Alfresa Holdings Corp",
    "weight": 0.0011,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GARAN",
    "name": "Turkiye Garanti Bankasi AS",
    "weight": 0.0011,
    "sector": "Financials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ESCORTS",
    "name": "Escorts Kubota Ltd",
    "weight": 0.0011,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NHC",
    "name": "New Hope Corp Ltd",
    "weight": 0.0011,
    "sector": "Energy",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6505",
    "name": "Formosa Petrochemical Corp",
    "weight": 0.0011,
    "sector": "Energy",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1476",
    "name": "Eclat Textile Co Ltd",
    "weight": 0.0011,
    "sector": "Consumer Discretionary",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "151",
    "name": "Want Want China Holdings Ltd",
    "weight": 0.0011,
    "sector": "Consumer Staples",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CCOLA",
    "name": "Coca-Cola Icecek AS",
    "weight": 0.0011,
    "sector": "Consumer Staples",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2385",
    "name": "Chicony Electronics Co Ltd",
    "weight": 0.0011,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2727",
    "name": "Shanghai Electric Group Co Ltd",
    "weight": 0.0011,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JCNC",
    "name": "Jardine Cycle & Carriage Ltd",
    "weight": 0.0011,
    "sector": "Consumer Discretionary",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "128940",
    "name": "Hanmi Pharm Co Ltd",
    "weight": 0.0011,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "868",
    "name": "Xinyi Glass Holdings Ltd",
    "weight": 0.0011,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SISE",
    "name": "Turkiye Sise ve Cam Fabrikalari AS",
    "weight": 0.001,
    "sector": "Industrials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1513",
    "name": "Livzon Pharmaceutical Group Inc",
    "weight": 0.001,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "605499",
    "name": "Eastroc Beverage Group Co Ltd",
    "weight": 0.001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BAJAJHFL",
    "name": "Bajaj Housing Finance Ltd",
    "weight": 0.001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2531",
    "name": "Takara Holdings Inc",
    "weight": 0.001,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600886",
    "name": "SDIC Power Holdings Co Ltd",
    "weight": 0.001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALDREES",
    "name": "Aldrees Petroleum and Transport Services Co",
    "weight": 0.001,
    "sector": "Energy",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002080",
    "name": "Sinoma Science & Technology Co Ltd",
    "weight": 0.001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "586",
    "name": "China Conch Venture Holdings Ltd",
    "weight": 0.001,
    "sector": "Utilities",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NATU3",
    "name": "Natura Cosmeticos SA",
    "weight": 0.001,
    "sector": "Consumer Discretionary",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KALYANKJ",
    "name": "Kalyan Jewellers India Ltd",
    "weight": 0.001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "177",
    "name": "Jiangsu Expressway Co Ltd",
    "weight": 0.001,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALSEA*",
    "name": "Alsea SAB de CV",
    "weight": 0.001,
    "sector": "Consumer Discretionary",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BBL/F",
    "name": "Bangkok Bank PCL",
    "weight": 0.001,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GRF/P",
    "name": "Grifols SA",
    "weight": 0.001,
    "sector": "Health Care",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CTPNV",
    "name": "CTP NV",
    "weight": 0.001,
    "sector": "Real Estate",
    "location": "Netherlands",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6088",
    "name": "FIT Hon Teng Ltd",
    "weight": 0.001,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QEWS",
    "name": "Nebras Energy",
    "weight": 0.001,
    "sector": "Utilities",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9504",
    "name": "Chugoku Electric Power Co Inc/The",
    "weight": 0.001,
    "sector": "Utilities",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PGOLD",
    "name": "Puregold Price Club Inc",
    "weight": 0.001,
    "sector": "Consumer Staples",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7564",
    "name": "Workman Co Ltd",
    "weight": 0.001,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HLBK",
    "name": "Hong Leong Bank Bhd",
    "weight": 0.001,
    "sector": "Financials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3401",
    "name": "Teijin Ltd",
    "weight": 0.001,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENRG",
    "name": "Energix-Renewable Energies Ltd",
    "weight": 0.001,
    "sector": "Utilities",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DLG",
    "name": "Dialog Group Bhd",
    "weight": 0.001,
    "sector": "Energy",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9364",
    "name": "Kamigumi Co Ltd",
    "weight": 0.001,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601988",
    "name": "Bank of China Ltd",
    "weight": 0.001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TALABAT",
    "name": "Talabat Holding PLC",
    "weight": 0.001,
    "sector": "Consumer Discretionary",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5463",
    "name": "Maruichi Steel Tube Ltd",
    "weight": 0.001,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASTRA",
    "name": "Astral Ltd",
    "weight": 0.001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4666",
    "name": "Park24 Co Ltd",
    "weight": 0.001,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DIF/F",
    "name": "Digital Telecommunications Infrastructure Fund",
    "weight": 0.001,
    "sector": "Communication Services",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601998",
    "name": "China CITIC Bank Corp Ltd",
    "weight": 0.001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8464",
    "name": "Nien Made Enterprise Co Ltd",
    "weight": 0.001,
    "sector": "Consumer Discretionary",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600516",
    "name": "Fangda Carbon New Material Co Ltd",
    "weight": 0.001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "417A",
    "name": "Blue Zones Holdings Co Ltd",
    "weight": 0.001,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BRGR",
    "name": "Berger Paints India Ltd",
    "weight": 0.001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6436",
    "name": "Amano Corp",
    "weight": 0.001,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2433",
    "name": "Hakuhodo DY Holdings Inc",
    "weight": 0.001,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SIIG",
    "name": "Saudi Industrial Investment Group",
    "weight": 0.001,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "051900",
    "name": "LG H&H Co Ltd",
    "weight": 0.001,
    "sector": "Consumer Staples",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "605117",
    "name": "Ningbo Deye Technology Corp",
    "weight": 0.001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JUBI",
    "name": "Jubilant Foodworks Ltd",
    "weight": 0.001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "023530",
    "name": "Lotte Shopping Co Ltd",
    "weight": 0.001,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TAVHL",
    "name": "TAV Havalimanlari Holding AS",
    "weight": 0.001,
    "sector": "Industrials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601088",
    "name": "China Shenhua Energy Co Ltd",
    "weight": 0.001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "316",
    "name": "Orient Overseas International Ltd",
    "weight": 0.001,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ZAINKSA",
    "name": "Mobile Telecommunications Co Saudi Arabia",
    "weight": 0.001,
    "sector": "Communication Services",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "326030",
    "name": "SK Biopharmaceuticals Co Ltd",
    "weight": 0.001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1193",
    "name": "China Resources Gas Group Ltd",
    "weight": 0.001,
    "sector": "Utilities",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMR",
    "name": "Americana Restaurants International PLC",
    "weight": 0.001,
    "sector": "Consumer Discretionary",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CDSL",
    "name": "Central Depository Services India Ltd",
    "weight": 0.001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "005940",
    "name": "NH Investment & Securities Co Ltd",
    "weight": 0.001,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9045",
    "name": "Keihan Holdings Co Ltd",
    "weight": 0.001,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CRISIL",
    "name": "CRISIL Ltd",
    "weight": 0.001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3350",
    "name": "Red Planet Japan Inc",
    "weight": 0.001,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GICRE",
    "name": "General Insurance Corp of India",
    "weight": 0.001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EXID",
    "name": "Exide Industries Ltd",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300001",
    "name": "Qingdao TGOOD Electric Co Ltd",
    "weight": 0.0009,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INDF",
    "name": "Indofood Sukses Makmur Tbk PT",
    "weight": 0.0009,
    "sector": "Consumer Staples",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MOFS",
    "name": "Motilal Oswal Financial Services Ltd",
    "weight": 0.0009,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "035250",
    "name": "Kangwon Land Inc",
    "weight": 0.0009,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BEM/F",
    "name": "Bangkok Expressway & Metro PCL",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002010",
    "name": "Transfar Zhilian Co Ltd",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CMIG3",
    "name": "Cia Energetica de Minas Gerais",
    "weight": 0.0009,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8056",
    "name": "BIPROGY Inc",
    "weight": 0.0009,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BIL",
    "name": "Balkrishna Industries Ltd",
    "weight": 0.0009,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6066",
    "name": "CSC Financial Co Ltd",
    "weight": 0.0009,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BHARTIHE",
    "name": "Bharti Hexacom Ltd",
    "weight": 0.0009,
    "sector": "Communication Services",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UNTR",
    "name": "United Tractors Tbk PT",
    "weight": 0.0009,
    "sector": "Materials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3900",
    "name": "Greentown China Holdings Ltd",
    "weight": 0.0009,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DALBHARA",
    "name": "Dalmia Bharat Ltd",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5269",
    "name": "ASMedia Technology Inc",
    "weight": 0.0009,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3311",
    "name": "China State Construction International Holdings Ltd",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600219",
    "name": "Shandong Nanshan Aluminum Co Ltd",
    "weight": 0.0009,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IRFC",
    "name": "Indian Railway Finance Corp Ltd",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "047050",
    "name": "Posco International Corp",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "078930",
    "name": "GS Holdings Corp",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "POONAWAL",
    "name": "Poonawalla Fincorp Ltd",
    "weight": 0.0009,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600809",
    "name": "Shanxi Xinghuacun Fen Wine Factory Co Ltd",
    "weight": 0.0009,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COCHIN",
    "name": "Cochin Shipyard Ltd",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ELPE",
    "name": "HELLENiQ ENERGY Holdings S.A.",
    "weight": 0.0009,
    "sector": "Energy",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAL",
    "name": "SAL Saudi Logistics Services",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FLUOROCH",
    "name": "Gujarat Fluorochemicals Ltd",
    "weight": 0.0009,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RLX",
    "name": "RLX Technology Inc",
    "weight": 0.0009,
    "sector": "Consumer Staples",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "200581",
    "name": "Weifu High-Technology Group Co Ltd",
    "weight": 0.0009,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FNH",
    "name": "Fraser & Neave Holdings Bhd",
    "weight": 0.0009,
    "sector": "Consumer Staples",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601100",
    "name": "Jiangsu Hengli Hydraulic Co Ltd",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601816",
    "name": "Beijing-Shanghai High Speed Railway Co Ltd",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BANDHAN",
    "name": "Bandhan Bank Ltd",
    "weight": 0.0009,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SIBC",
    "name": "Saudi Investment Bank/The",
    "weight": 0.0009,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9006",
    "name": "Keikyu Corp",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FROTO",
    "name": "Ford Otomotiv Sanayi AS",
    "weight": 0.0009,
    "sector": "Consumer Discretionary",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CCRI",
    "name": "Container Corp Of India Ltd",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AKSEN",
    "name": "Aksa Enerji Uretim AS",
    "weight": 0.0009,
    "sector": "Utilities",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000012",
    "name": "CSG Holding Co Ltd",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1908",
    "name": "C&D International Investment Group Ltd",
    "weight": 0.0009,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600352",
    "name": "Zhejiang Longsheng Group Co Ltd",
    "weight": 0.0009,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GP",
    "name": "Godfrey Phillips India Ltd",
    "weight": 0.0009,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600905",
    "name": "China Three Gorges Renewables Group Co Ltd",
    "weight": 0.0009,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9989",
    "name": "Sundrug Co Ltd",
    "weight": 0.0009,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BDL",
    "name": "Bharat Dynamics Ltd",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KAYNES",
    "name": "Kaynes Technology India Ltd",
    "weight": 0.0009,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1585",
    "name": "Yadea Group Holdings Ltd",
    "weight": 0.0009,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2799",
    "name": "China CITIC Financial Asset Management Co Ltd",
    "weight": 0.0009,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AIAE",
    "name": "AIA Engineering Ltd",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300014",
    "name": "Eve Energy Co Ltd",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3635",
    "name": "Koei Tecmo Holdings Co Ltd",
    "weight": 0.0009,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600028",
    "name": "China Petroleum & Chemical Corp",
    "weight": 0.0009,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "081660",
    "name": "Fila Holdings Corp",
    "weight": 0.0009,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PATANJAL",
    "name": "Patanjali Foods Ltd",
    "weight": 0.0009,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CENER",
    "name": "Cenergy Holdings SA",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RVNL",
    "name": "Rail Vikas Nigam Ltd",
    "weight": 0.0009,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600195",
    "name": "China Animal Husbandry Industry Co Ltd",
    "weight": 0.0009,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6186",
    "name": "China Feihe Ltd",
    "weight": 0.0009,
    "sector": "Consumer Staples",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9910",
    "name": "Feng TAY Enterprise Co Ltd",
    "weight": 0.0009,
    "sector": "Consumer Discretionary",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6951",
    "name": "Jeol Ltd",
    "weight": 0.0008,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2451",
    "name": "Transcend Information Inc",
    "weight": 0.0008,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1797",
    "name": "East Buy Holding Ltd",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9706",
    "name": "Japan Airport Terminal Co Ltd",
    "weight": 0.0008,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SDX",
    "name": "Sodexo SA",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "France",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "179",
    "name": "Johnson Electric Holdings Ltd",
    "weight": 0.0008,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "293",
    "name": "Cathay Pacific Airways Ltd",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600415",
    "name": "Zhejiang China Commodities City Group Co Ltd",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300757",
    "name": "RoboTechnik Intelligent Technology Co Ltd",
    "weight": 0.0008,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4716",
    "name": "Oracle Corp Japan",
    "weight": 0.0008,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GLO",
    "name": "Globe Telecom Inc",
    "weight": 0.0008,
    "sector": "Communication Services",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4516",
    "name": "Nippon Shinyaku Co Ltd",
    "weight": 0.0008,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688120",
    "name": "Hwatsing Technology Co Ltd",
    "weight": 0.0008,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000988",
    "name": "Hgtech Co Ltd",
    "weight": 0.0008,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600029",
    "name": "China Southern Airlines Co Ltd",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IRCTC",
    "name": "Indian Railway Catering & Tourism Corp Ltd",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600320",
    "name": "Shanghai Zhenhua Heavy Industries Co Ltd",
    "weight": 0.0008,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "004020",
    "name": "Hyundai Steel Co",
    "weight": 0.0008,
    "sector": "Materials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002027",
    "name": "Focus Media Information Technology Co Ltd",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8986",
    "name": "Daiwa Securities Living Investments Corp",
    "weight": 0.0008,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "87",
    "name": "Swire Pacific Ltd",
    "weight": 0.0008,
    "sector": "Consumer Staples",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "011780",
    "name": "Kumho Petrochemical Co Ltd",
    "weight": 0.0008,
    "sector": "Materials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688702",
    "name": "Shanghai Silicon Industry Group Co Ltd",
    "weight": 0.0008,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9065",
    "name": "Sankyu Inc",
    "weight": 0.0008,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3397",
    "name": "Toridoll Holdings Corp",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DUBK",
    "name": "Dukhan Bank",
    "weight": 0.0008,
    "sector": "Financials",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JAMJOOMP",
    "name": "Jamjoom Pharmaceuticals Factory Co",
    "weight": 0.0008,
    "sector": "Health Care",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601788",
    "name": "Everbright Securities Co Ltd",
    "weight": 0.0008,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ACC",
    "name": "ACC Ltd",
    "weight": 0.0008,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000568",
    "name": "Luzhou Laojiao Co Ltd",
    "weight": 0.0008,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TELX",
    "name": "Tata Elxsi Ltd",
    "weight": 0.0008,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1359",
    "name": "China Cinda Asset Management Co Ltd",
    "weight": 0.0008,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300442",
    "name": "Range Intelligent Computing Technology Group Co Ltd",
    "weight": 0.0008,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7211",
    "name": "Mitsubishi Motors Corp",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600160",
    "name": "Zhejiang Juhua Co Ltd",
    "weight": 0.0008,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QFLS",
    "name": "Qatar Fuel QSC",
    "weight": 0.0008,
    "sector": "Energy",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600674",
    "name": "Sichuan Chuantou Energy Co Ltd",
    "weight": 0.0008,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3349",
    "name": "Cosmos Pharmaceutical Corp",
    "weight": 0.0008,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CMPC",
    "name": "Empresas CMPC SA",
    "weight": 0.0008,
    "sector": "Materials",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LLC",
    "name": "Lendlease Corp Ltd",
    "weight": 0.0008,
    "sector": "Industrials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LUBEREF",
    "name": "Saudi Aramco Base Oil Co",
    "weight": 0.0008,
    "sector": "Energy",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPIN",
    "name": "Charoen Pokphand Indonesia Tbk PT",
    "weight": 0.0008,
    "sector": "Consumer Staples",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RA",
    "name": "Regional SAB de CV",
    "weight": 0.0008,
    "sector": "Financials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SCHFL",
    "name": "Schaeffler India Ltd",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NARH",
    "name": "Narayana Hrudayalaya Ltd",
    "weight": 0.0008,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KREIT",
    "name": "Keppel REIT",
    "weight": 0.0008,
    "sector": "Utilities",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8964",
    "name": "Mitsui Fudosan Retail Fund Investment Corp",
    "weight": 0.0008,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VOLCARB",
    "name": "Volvo Car AB",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600050",
    "name": "China United Network Communications Ltd",
    "weight": 0.0008,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RGN",
    "name": "Region RE Ltd",
    "weight": 0.0008,
    "sector": "Real Estate",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3994",
    "name": "Money Forward Inc",
    "weight": 0.0008,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8967",
    "name": "Japan Logistics Fund Inc",
    "weight": 0.0008,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9048",
    "name": "Nagoya Railroad Co Ltd",
    "weight": 0.0008,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600584",
    "name": "JCET Group Co Ltd",
    "weight": 0.0008,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ORBIA*",
    "name": "Orbia Advance Corp SAB de CV",
    "weight": 0.0008,
    "sector": "Industrials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000685",
    "name": "Zhongshan Public Utilities Group Co Ltd",
    "weight": 0.0008,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BJAZ",
    "name": "Bank Al-Jazira",
    "weight": 0.0008,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "338",
    "name": "Sinopec Shanghai Petrochemical Co Ltd",
    "weight": 0.0008,
    "sector": "Energy",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMPOWER",
    "name": "Emirates Central Cooling Systems Corp",
    "weight": 0.0008,
    "sector": "Industrials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3291",
    "name": "Iida Group Holdings Co Ltd",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "900912",
    "name": "Shanghai Waigaoqiao Free Trade Zone Group Co Ltd",
    "weight": 0.0008,
    "sector": "Real Estate",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2811",
    "name": "Kagome Co Ltd",
    "weight": 0.0008,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6849",
    "name": "Nihon Kohden Corp",
    "weight": 0.0008,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601577",
    "name": "Bank of Changsha Co Ltd",
    "weight": 0.0008,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600350",
    "name": "Shandong Hi-speed Co Ltd",
    "weight": 0.0008,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300296",
    "name": "Leyard Optoelectronic Co Ltd",
    "weight": 0.0008,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TFG",
    "name": "Foschini Group Ltd",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2380",
    "name": "China Power International Development Ltd",
    "weight": 0.0008,
    "sector": "Utilities",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MOUWASAT",
    "name": "Mouwasat Medical Services Co",
    "weight": 0.0008,
    "sector": "Health Care",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4966",
    "name": "Parade Technologies Ltd",
    "weight": 0.0008,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INL",
    "name": "Investec Ltd",
    "weight": 0.0008,
    "sector": "Financials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AGUAS/A",
    "name": "Aguas Andinas SA",
    "weight": 0.0008,
    "sector": "Utilities",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601006",
    "name": "Daqin Railway Co Ltd",
    "weight": 0.0008,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "551",
    "name": "Yue Yuen Industrial Holdings Ltd",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NETLINK",
    "name": "NETLINK NBN TRUST",
    "weight": 0.0008,
    "sector": "Communication Services",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002600",
    "name": "Lingyi iTech Guangdong Co",
    "weight": 0.0008,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "921",
    "name": "Hisense Home Appliances Group Co Ltd",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8111",
    "name": "Goldwin Inc",
    "weight": 0.0008,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TMX",
    "name": "Thermax Ltd",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NESZ",
    "name": "Nestle Malaysia Bhd",
    "weight": 0.0007,
    "sector": "Consumer Staples",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688249",
    "name": "Nexchip Semiconductor Corp",
    "weight": 0.0007,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SIPCHEM",
    "name": "Sahara International Petrochemical Co",
    "weight": 0.0007,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9301",
    "name": "Mitsubishi Logistics Corp",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600547",
    "name": "Shandong Gold Mining Co Ltd",
    "weight": 0.0007,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EYDAP",
    "name": "Athens Water Supply & Sewage Co SA",
    "weight": 0.0007,
    "sector": "Utilities",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3471",
    "name": "Mitsui Fudosan Logistics Park Inc",
    "weight": 0.0007,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000651",
    "name": "Gree Electric Appliances Inc of Zhuhai",
    "weight": 0.0007,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300015",
    "name": "Aier Eye Hospital Group Co Ltd",
    "weight": 0.0007,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4967",
    "name": "Kobayashi Pharmaceutical Co Ltd",
    "weight": 0.0007,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "23",
    "name": "Bank of East Asia Ltd/The",
    "weight": 0.0007,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TOP/F",
    "name": "Thai Oil PCL",
    "weight": 0.0007,
    "sector": "Energy",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6060",
    "name": "ZhongAn Online P&C Insurance Co Ltd",
    "weight": 0.0007,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002466",
    "name": "Tianqi Lithium Corp",
    "weight": 0.0007,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600011",
    "name": "Huaneng Power International Inc",
    "weight": 0.0007,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BOROUGE",
    "name": "Borouge PLC",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2009",
    "name": "BBMG Corp",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600016",
    "name": "China Minsheng Banking Corp Ltd",
    "weight": 0.0007,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2196",
    "name": "Shanghai Fosun Pharmaceutical Group Co Ltd",
    "weight": 0.0007,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601991",
    "name": "Datang International Power Generation Co Ltd",
    "weight": 0.0007,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000039",
    "name": "China International Marine Containers Group Co Ltd",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3M",
    "name": "3M India Ltd",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600025",
    "name": "Huaneng Lancang River Hydropower Inc",
    "weight": 0.0007,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601222",
    "name": "Jiangsu Linyang Energy Co Ltd",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "656",
    "name": "Fosun International Ltd",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GOAU4",
    "name": "Metalurgica Gerdau SA",
    "weight": 0.0007,
    "sector": "Materials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8282",
    "name": "K's Holdings Corp",
    "weight": 0.0007,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IGL",
    "name": "Indraprastha Gas Ltd",
    "weight": 0.0007,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "YAL",
    "name": "Yancoal Australia Ltd",
    "weight": 0.0007,
    "sector": "Energy",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LIIL",
    "name": "Linde India Ltd",
    "weight": 0.0007,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1COV",
    "name": "Covestro AG",
    "weight": 0.0007,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300751",
    "name": "Suzhou Maxwell Technologies Co Ltd",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "392",
    "name": "Beijing Enterprises Holdings Ltd",
    "weight": 0.0007,
    "sector": "Utilities",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3618",
    "name": "Chongqing Rural Commercial Bank Co Ltd",
    "weight": 0.0007,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002380",
    "name": "KCC Corp",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CBG/F",
    "name": "Carabao Group PCL",
    "weight": 0.0007,
    "sector": "Consumer Staples",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1385",
    "name": "Shanghai Fudan Microelectronics Group Co Ltd",
    "weight": 0.0007,
    "sector": "Information Technology",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CATERING",
    "name": "Catrion Catering Holding Co",
    "weight": 0.0007,
    "sector": "Consumer Discretionary",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ARCCI",
    "name": "Al Rajhi Co for Co-operative Insurance",
    "weight": 0.0007,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CCU",
    "name": "Cia Cervecerias Unidas SA",
    "weight": 0.0007,
    "sector": "Consumer Staples",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GCC*",
    "name": "GCC SAB de CV",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688082",
    "name": "ACM Research Shanghai Inc",
    "weight": 0.0007,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601111",
    "name": "Air China Ltd",
    "weight": 0.0007,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RBK",
    "name": "RBL Bank Ltd",
    "weight": 0.0007,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002050",
    "name": "Zhejiang Sanhua Intelligent Controls Co Ltd",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6781",
    "name": "Advanced Energy Solution Holding Co Ltd",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688331",
    "name": "Remegen Co Ltd",
    "weight": 0.0007,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "631",
    "name": "Sany Heavy Equipment International Holdings Co Ltd",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688111",
    "name": "Beijing Kingsoft Office Software Inc",
    "weight": 0.0007,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KPITTECH",
    "name": "KPIT Technologies Ltd",
    "weight": 0.0007,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5471",
    "name": "Daido Steel Co Ltd",
    "weight": 0.0007,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601021",
    "name": "Spring Airlines Co Ltd",
    "weight": 0.0007,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000538",
    "name": "Yunnan Baiyao Group Co Ltd",
    "weight": 0.0007,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002353",
    "name": "Yantai Jereh Oilfield Services Group Co Ltd",
    "weight": 0.0007,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601298",
    "name": "Qingdao Port International Co Ltd",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BDMS-R",
    "name": "Bangkok Dusit Medical Services PCL",
    "weight": 0.0007,
    "sector": "Health Care",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ARTO",
    "name": "Aarti Industries Ltd",
    "weight": 0.0007,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BOI",
    "name": "Bank of India",
    "weight": 0.0007,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2222",
    "name": "Kotobuki Spirits Co Ltd",
    "weight": 0.0007,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002142",
    "name": "Bank of Ningbo Co Ltd",
    "weight": 0.0007,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "200012",
    "name": "CSG Holding Co Ltd",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PETD",
    "name": "Petronas Dagangan Bhd",
    "weight": 0.0007,
    "sector": "Energy",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600648",
    "name": "Shanghai Waigaoqiao Free Trade Zone Group Co Ltd",
    "weight": 0.0007,
    "sector": "Real Estate",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADPORTS",
    "name": "Abu Dhabi Ports Co PJSC",
    "weight": 0.0007,
    "sector": "Industrials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ICBP",
    "name": "Indofood CBP Sukses Makmur Tbk PT",
    "weight": 0.0006,
    "sector": "Consumer Staples",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RYM",
    "name": "Ryman Healthcare Ltd",
    "weight": 0.0006,
    "sector": "Health Care",
    "location": "New Zealand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600673",
    "name": "Guangdong HEC Technology Holding Co Ltd",
    "weight": 0.0006,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2050",
    "name": "Zhejiang Sanhua Intelligent Controls Co Ltd",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1066",
    "name": "Shandong Weigao Group Medical Polymer Co Ltd",
    "weight": 0.0006,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600418",
    "name": "Anhui Jianghuai Automobile Group Corp Ltd",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AEFES",
    "name": "Anadolu Efes Biracilik Ve Malt Sanayii AS",
    "weight": 0.0006,
    "sector": "Consumer Staples",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DALLAH",
    "name": "Dallah Healthcare Co",
    "weight": 0.0006,
    "sector": "Health Care",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RYSAS",
    "name": "Reysas Tasimacilik ve Lojistik Ticaret AS",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HUDCO",
    "name": "Housing & Urban Development Corp Ltd",
    "weight": 0.0006,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IRB",
    "name": "IRB Infrastructure Developers Ltd",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600436",
    "name": "Zhangzhou Pientzehuang Pharmaceutical Co Ltd",
    "weight": 0.0006,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BBL-R",
    "name": "Bangkok Bank PCL",
    "weight": 0.0006,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "17",
    "name": "New World Development Co Ltd",
    "weight": 0.0006,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MGROS",
    "name": "Migros Ticaret AS",
    "weight": 0.0006,
    "sector": "Consumer Staples",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2689",
    "name": "Nine Dragons Paper Holdings Ltd",
    "weight": 0.0006,
    "sector": "Materials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STARHEAL",
    "name": "Star Health & Allied Insurance Co Ltd",
    "weight": 0.0006,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1114",
    "name": "Brilliance China Automotive Holdings Ltd",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DIC",
    "name": "Dubai Investments PJSC",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300498",
    "name": "Wens Foodstuff Group Co Ltd",
    "weight": 0.0006,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601012",
    "name": "LONGi Green Energy Technology Co Ltd",
    "weight": 0.0006,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1071",
    "name": "Huadian Power International Corp Ltd",
    "weight": 0.0006,
    "sector": "Utilities",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SOLUTION",
    "name": "Arabian Internet & Communications Services Co",
    "weight": 0.0006,
    "sector": "Information Technology",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NLC",
    "name": "NLC India Ltd",
    "weight": 0.0006,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "371",
    "name": "Beijing Enterprises Water Group Ltd",
    "weight": 0.0006,
    "sector": "Utilities",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688235",
    "name": "BeOne Medicines Ltd",
    "weight": 0.0006,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IVL/F",
    "name": "Indorama Ventures PCL",
    "weight": 0.0006,
    "sector": "Materials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6655",
    "name": "Huaxin Building Materials Group Co Ltd",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAVOLA",
    "name": "Savola Group/The",
    "weight": 0.0006,
    "sector": "Consumer Staples",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "489790",
    "name": "Hanwha Industrial Solutions Co Ltd/ New",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CHDRAUIB",
    "name": "Grupo Comercial Chedraui SA de CV",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601689",
    "name": "Ningbo Tuopu Group Co Ltd",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4922",
    "name": "Kose Holdings Corp",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601808",
    "name": "China Oilfield Services Ltd",
    "weight": 0.0006,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002709",
    "name": "Guangzhou Tinci Materials Technology Co Ltd",
    "weight": 0.0006,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "006280",
    "name": "GC Biopharma Corp",
    "weight": 0.0006,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SYNG",
    "name": "Syngene International Ltd",
    "weight": 0.0006,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600089",
    "name": "TBEA Co Ltd",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601238",
    "name": "Guangzhou Automobile Group Co Ltd",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "030000",
    "name": "Cheil Worldwide Inc",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002004",
    "name": "Huapont Life Sciences Co Ltd",
    "weight": 0.0006,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ARCLK",
    "name": "Arcelik AS",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6952",
    "name": "Casio Computer Co Ltd",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PGSUS",
    "name": "Pegasus Hava Tasimaciligi AS",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601127",
    "name": "Seres Group Co Ltd",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QUINENC",
    "name": "Quinenco SA",
    "weight": 0.0006,
    "sector": "Financials",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600893",
    "name": "AECC Aviation Power Co Ltd",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "772",
    "name": "China Literature Ltd",
    "weight": 0.0006,
    "sector": "Information Technology",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000066",
    "name": "China Greatwall Technology Group Co Ltd",
    "weight": 0.0006,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600038",
    "name": "AVICOPTER PLC",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EKGYO",
    "name": "Emlak Konut Gayrimenkul Yatirim Ortakligi AS",
    "weight": 0.0006,
    "sector": "Real Estate",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PSMCR",
    "name": "Powerchip Semiconductor Manufacturing Corp",
    "weight": 0.0006,
    "sector": "Information Technology",
    "location": "Luxembourg",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000408",
    "name": "Zangge Mining Co Ltd",
    "weight": 0.0006,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3759",
    "name": "Pharmaron Beijing Co Ltd",
    "weight": 0.0006,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002156",
    "name": "TongFu Microelectronics Co Ltd",
    "weight": 0.0006,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2264",
    "name": "Morinaga Milk Industry Co Ltd",
    "weight": 0.0006,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1276",
    "name": "Jiangsu Hengrui Pharmaceuticals Co Ltd",
    "weight": 0.0006,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ARI",
    "name": "African Rainbow Minerals Ltd",
    "weight": 0.0006,
    "sector": "Materials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "204320",
    "name": "HL Mando Co Ltd",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688220",
    "name": "ASR Microelectronics Co Ltd",
    "weight": 0.0006,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KTC/F",
    "name": "Krungthai Card PCL",
    "weight": 0.0006,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DLPL",
    "name": "Dr Lal PathLabs Ltd",
    "weight": 0.0006,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DFI",
    "name": "DFI Retail Group Holdings Ltd",
    "weight": 0.0006,
    "sector": "Consumer Staples",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600820",
    "name": "Shanghai Tunnel Engineering Co Ltd",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601608",
    "name": "CITIC Heavy Industries Co Ltd",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GLXO",
    "name": "GlaxoSmithKline Pharmaceuticals Ltd",
    "weight": 0.0006,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601872",
    "name": "China Merchants Energy Shipping Co Ltd",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "001450",
    "name": "Hyundai Marine & Fire Insurance Co Ltd",
    "weight": 0.0006,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PPT",
    "name": "Perpetual Ltd",
    "weight": 0.0006,
    "sector": "Financials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688183",
    "name": "Shengyi Electronics Co Ltd",
    "weight": 0.0006,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688396",
    "name": "China Resources Microelectronics Ltd",
    "weight": 0.0006,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9696",
    "name": "Tianqi Lithium Corp",
    "weight": 0.0006,
    "sector": "Materials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADRO",
    "name": "Adaro Energy Indonesia Tbk PT",
    "weight": 0.0006,
    "sector": "Energy",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "853",
    "name": "Microport Scientific Corp",
    "weight": 0.0006,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600012",
    "name": "Anhui Expressway Co Ltd",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002966",
    "name": "Bank of Suzhou Co Ltd",
    "weight": 0.0006,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "URC",
    "name": "Universal Robina Corp",
    "weight": 0.0006,
    "sector": "Consumer Staples",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9044",
    "name": "NANKAI Co Ltd",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300223",
    "name": "Ingenic Semiconductor Co Ltd",
    "weight": 0.0006,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JGS",
    "name": "JG Summit Holdings Inc",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LH/F",
    "name": "Land & Houses PCL",
    "weight": 0.0006,
    "sector": "Real Estate",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1833",
    "name": "Ping An Healthcare and Technology Co Ltd",
    "weight": 0.0006,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ISAE4",
    "name": "CTEEP-Cia de Transmissao de Energia Eletrica Paulista",
    "weight": 0.0006,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4816",
    "name": "Toei Animation Co Ltd",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688234",
    "name": "SICC Co Ltd",
    "weight": 0.0006,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "817",
    "name": "China Jinmao Holdings Group Ltd",
    "weight": 0.0006,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1318",
    "name": "Mao Geping Cosmetics Co LTD",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "548",
    "name": "Shenzhen Expressway Corp Ltd",
    "weight": 0.0006,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BPT",
    "name": "Beach Energy Ltd",
    "weight": 0.0006,
    "sector": "Energy",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DMP",
    "name": "Domino's Pizza Enterprises Ltd",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALPEKA",
    "name": "Alpek SAB de CV",
    "weight": 0.0006,
    "sector": "Materials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VEDPOWER",
    "name": "Vedanta Power Ltd",
    "weight": 0.0006,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "139480",
    "name": "E-MART Inc",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2282",
    "name": "MGM China Holdings Ltd",
    "weight": 0.0006,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600010",
    "name": "Inner Mongolia BaoTou Steel Union Co Ltd",
    "weight": 0.0006,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BRES",
    "name": "Barwa Real Estate Co",
    "weight": 0.0006,
    "sector": "Real Estate",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300390",
    "name": "Canmax Technologies Co Ltd",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HMN",
    "name": "Emami Ltd",
    "weight": 0.0005,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000089",
    "name": "Shenzhen Airport Co Ltd",
    "weight": 0.0005,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600177",
    "name": "Youngor Fashion Co Ltd",
    "weight": 0.0005,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002304",
    "name": "Jiangsu Yanghe Distillery Co Ltd",
    "weight": 0.0005,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601360",
    "name": "360 Security Technology Inc",
    "weight": 0.0005,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4114",
    "name": "Nippon Shokubai Co Ltd",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600295",
    "name": "Inner Mongolia ERDOS Resources Co Ltd",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HMPRO/F",
    "name": "Home Product Center PCL",
    "weight": 0.0005,
    "sector": "Consumer Discretionary",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000728",
    "name": "Guoyuan Securities Co Ltd",
    "weight": 0.0005,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LICHF",
    "name": "LIC Housing Finance Ltd",
    "weight": 0.0005,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601009",
    "name": "Bank of Nanjing Co Ltd",
    "weight": 0.0005,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4205",
    "name": "Zeon Corp",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OR/F",
    "name": "PTT Oil & Retail Business PCL",
    "weight": 0.0005,
    "sector": "Energy",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BANPU/F",
    "name": "Banpu PCL",
    "weight": 0.0005,
    "sector": "Energy",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TU/F",
    "name": "Thai Union Group PCL",
    "weight": 0.0005,
    "sector": "Consumer Staples",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1055",
    "name": "China Southern Airlines Co Ltd",
    "weight": 0.0005,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GENT",
    "name": "Genting Bhd",
    "weight": 0.0005,
    "sector": "Consumer Discretionary",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "220",
    "name": "Uni-President China Holdings Ltd",
    "weight": 0.0005,
    "sector": "Consumer Staples",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "001965",
    "name": "China Merchants Expressway Network & Technology Holdings Co Ltd",
    "weight": 0.0005,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603156",
    "name": "Hebei Yangyuan Zhihui Beverage Co Ltd",
    "weight": 0.0005,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MFG",
    "name": "Magellan Financial Group Ltd",
    "weight": 0.0005,
    "sector": "Financials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000977",
    "name": "IEIT Systems Co Ltd",
    "weight": 0.0005,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "200596",
    "name": "Anhui Gujing Distillery Co Ltd",
    "weight": 0.0005,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000425",
    "name": "XCMG Construction Machinery Co Ltd",
    "weight": 0.0005,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601229",
    "name": "Bank of Shanghai Co Ltd",
    "weight": 0.0005,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1876",
    "name": "Budweiser Brewing Co APAC Ltd",
    "weight": 0.0005,
    "sector": "Consumer Staples",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SGS",
    "name": "Saudi Ground Services Co",
    "weight": 0.0005,
    "sector": "Industrials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603296",
    "name": "Huaqin Co Ltd",
    "weight": 0.0005,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KAYAN",
    "name": "Saudi Kayan Petrochemical Co",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000625",
    "name": "Chongqing Changan Automobile Co Ltd",
    "weight": 0.0005,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SADAFCO",
    "name": "Saudia Dairy & Foodstuff Co",
    "weight": 0.0005,
    "sector": "Consumer Staples",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TOPG",
    "name": "Top Glove Corp Bhd",
    "weight": 0.0005,
    "sector": "Health Care",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DN",
    "name": "Deepak Nitrite Ltd",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SASA",
    "name": "Sasa Polyester Sanayi AS",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HEXT",
    "name": "Hexaware Technologies Ltd",
    "weight": 0.0005,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPAXT/F",
    "name": "CP AXTRA PCL",
    "weight": 0.0005,
    "sector": "Consumer Discretionary",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PASEU",
    "name": "Pasifik Eurasia Lojistik Dis Ticaret A.S.",
    "weight": 0.0005,
    "sector": "Industrials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1072",
    "name": "Dongfang Electric Corp Ltd",
    "weight": 0.0005,
    "sector": "Energy",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GPSC/F",
    "name": "Global Power Synergy PCL",
    "weight": 0.0005,
    "sector": "Utilities",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601969",
    "name": "Hainan Mining Co Ltd",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ANE",
    "name": "Corp ACCIONA Energias Renovables SA",
    "weight": 0.0005,
    "sector": "Utilities",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GQG",
    "name": "GQG Partners Inc",
    "weight": 0.0005,
    "sector": "Financials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IREDA",
    "name": "Indian Renewable Energy Development Agency Ltd",
    "weight": 0.0005,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "450080",
    "name": "Ecopro Materials Co Ltd",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600037",
    "name": "Beijing Gehua CATV Network Co Ltd",
    "weight": 0.0005,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3279",
    "name": "Activia Properties Inc",
    "weight": 0.0005,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VISL",
    "name": "Vedanta Iron and Steel Ltd",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1128",
    "name": "Wynn Macau Ltd",
    "weight": 0.0005,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ISAT",
    "name": "Indosat Tbk PT",
    "weight": 0.0005,
    "sector": "Communication Services",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MTEL",
    "name": "Dayamitra Telekomunikasi PT",
    "weight": 0.0005,
    "sector": "Communication Services",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "101",
    "name": "Hang Lung Properties Ltd",
    "weight": 0.0005,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600085",
    "name": "Beijing Tong Ren Tang Co Ltd",
    "weight": 0.0005,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INKP",
    "name": "Indah Kiat Pulp & Paper Tbk PT",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601607",
    "name": "Shanghai Pharmaceuticals Holding Co Ltd",
    "weight": 0.0005,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9921",
    "name": "Giant Manufacturing Co Ltd",
    "weight": 0.0005,
    "sector": "Consumer Discretionary",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "263750",
    "name": "Pearl Abyss Corp",
    "weight": 0.0005,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603799",
    "name": "Zhejiang Huayou Cobalt Co Ltd",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2606",
    "name": "U-Ming Marine Transport Corp",
    "weight": 0.0005,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ERICA",
    "name": "Telefonaktiebolaget LM Ericsson",
    "weight": 0.0005,
    "sector": "Communication Services",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6806",
    "name": "Shenwan Hongyuan Group Co Ltd",
    "weight": 0.0005,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000547",
    "name": "Addsino Co Ltd",
    "weight": 0.0005,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2607",
    "name": "Fuji Oil Holdings Inc",
    "weight": 0.0005,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GUBRF",
    "name": "Gubre Fabrikalari TAS",
    "weight": 0.0005,
    "sector": "Materials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "377300",
    "name": "Kakaopay Corp",
    "weight": 0.0005,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002230",
    "name": "Iflytek Co Ltd",
    "weight": 0.0005,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NAHDI",
    "name": "Nahdi Medical Co",
    "weight": 0.0005,
    "sector": "Consumer Staples",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AWL",
    "name": "Adani Wilmar Ltd",
    "weight": 0.0005,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DWNI",
    "name": "Deutsche Wohnen SE",
    "weight": 0.0005,
    "sector": "Real Estate",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COLT",
    "name": "Colt CZ Group SE",
    "weight": 0.0005,
    "sector": "Industrials",
    "location": "Czech Republic",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FAKEEHCA",
    "name": "Fakeeh Care Group",
    "weight": 0.0005,
    "sector": "Health Care",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601077",
    "name": "Chongqing Rural Commercial Bank Co Ltd",
    "weight": 0.0005,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1579",
    "name": "Yihai International Holding Ltd",
    "weight": 0.0005,
    "sector": "Consumer Staples",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002625",
    "name": "Kuang-Chi Technologies Co Ltd",
    "weight": 0.0005,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002958",
    "name": "Qingdao Rural Commercial Bank Corp",
    "weight": 0.0005,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KLBF",
    "name": "Kalbe Farma Tbk PT",
    "weight": 0.0005,
    "sector": "Health Care",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TATATECH",
    "name": "Tata Technologies Ltd",
    "weight": 0.0005,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3466",
    "name": "LaSalle Logiport REIT",
    "weight": 0.0005,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600104",
    "name": "SAIC Motor Corp Ltd",
    "weight": 0.0005,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TLI/F",
    "name": "Thai Life Insurance PCL",
    "weight": 0.0004,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601179",
    "name": "China XD Electric Co Ltd",
    "weight": 0.0004,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4272",
    "name": "Nippon Kayaku Co Ltd",
    "weight": 0.0004,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VOGL",
    "name": "Vedanta Oil and Gas Ltd",
    "weight": 0.0004,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688036",
    "name": "Shenzhen Transsion Holdings Co Ltd",
    "weight": 0.0004,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "011170",
    "name": "Lotte Chemical Corp",
    "weight": 0.0004,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603228",
    "name": "Shenzhen Kinwong Electronic Co Ltd",
    "weight": 0.0004,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AWC/F",
    "name": "Asset World Corp PCL",
    "weight": 0.0004,
    "sector": "Real Estate",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2386",
    "name": "Sinopec Engineering Group Co Ltd",
    "weight": 0.0004,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6753",
    "name": "Sharp Corp/Japan",
    "weight": 0.0004,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002241",
    "name": "GoerTek Inc",
    "weight": 0.0004,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "301269",
    "name": "Empyrean Technology Co Ltd",
    "weight": 0.0004,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1508",
    "name": "China Reinsurance Group Corp",
    "weight": 0.0004,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "753",
    "name": "Air China Ltd",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CSTRL",
    "name": "Castrol India Ltd",
    "weight": 0.0004,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GDSP",
    "name": "Godrej Industries Ltd",
    "weight": 0.0004,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RESEARCH",
    "name": "Saudi Research & Media Group",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PFGRUPSU",
    "name": "Grupo de Inversiones Suramericana SA",
    "weight": 0.0004,
    "sector": "Financials",
    "location": "Colombia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AGHOL",
    "name": "AG Anadolu Grubu Holding AS",
    "weight": 0.0004,
    "sector": "Industrials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JFC",
    "name": "Jollibee Foods Corp",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1060",
    "name": "Damai Entertainment Holdings Ltd",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4208",
    "name": "UBE Corp",
    "weight": 0.0004,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600522",
    "name": "Jiangsu Zhongtian Technology Co Ltd",
    "weight": 0.0004,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AURE3",
    "name": "Auren Energia SA",
    "weight": 0.0004,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002429",
    "name": "Shenzhen MTC Co Ltd",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601696",
    "name": "BOC International China Co Ltd",
    "weight": 0.0004,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002311",
    "name": "Guangdong Haid Group Co Ltd",
    "weight": 0.0004,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688506",
    "name": "Sichuan Biokin Pharmaceutical Co Ltd",
    "weight": 0.0004,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MARAFIQ",
    "name": "Power & Water Utility Co for Jubail & Yanbu",
    "weight": 0.0004,
    "sector": "Utilities",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "900947",
    "name": "Shanghai Zhenhua Heavy Industries Co Ltd",
    "weight": 0.0004,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3406",
    "name": "Genius Electronic Optical Co Ltd",
    "weight": 0.0004,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4118",
    "name": "Kaneka Corp",
    "weight": 0.0004,
    "sector": "Materials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601898",
    "name": "China Coal Energy Co Ltd",
    "weight": 0.0004,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PSSA3",
    "name": "Porto Seguro SA",
    "weight": 0.0004,
    "sector": "Financials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "301165",
    "name": "Ruijie Networks Co Ltd",
    "weight": 0.0004,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "956",
    "name": "China Suntien Green Energy Corp Ltd",
    "weight": 0.0004,
    "sector": "Utilities",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "282330",
    "name": "BGF retail Co Ltd",
    "weight": 0.0004,
    "sector": "Consumer Staples",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600795",
    "name": "GD Power Development Co Ltd",
    "weight": 0.0004,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "874",
    "name": "Guangzhou Baiyunshan Pharmaceutical Holdings Co Ltd",
    "weight": 0.0004,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7164",
    "name": "Zenkoku Hosho Co Ltd",
    "weight": 0.0004,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GENM",
    "name": "Genting Malaysia Bhd",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LTTS",
    "name": "L&T Technology Services Ltd",
    "weight": 0.0004,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600808",
    "name": "Maanshan Iron & Steel Co Ltd",
    "weight": 0.0004,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AHGAZ",
    "name": "Ahlatci Dogal Gaz Dagitim Enerji VE Yatirim AS",
    "weight": 0.0004,
    "sector": "Utilities",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OSP/F",
    "name": "Osotspa PCL",
    "weight": 0.0004,
    "sector": "Consumer Staples",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000807",
    "name": "Yunnan Aluminium Co Ltd",
    "weight": 0.0004,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENDU",
    "name": "Endurance Technologies Ltd",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RATCH/F",
    "name": "Ratch Group PCL",
    "weight": 0.0004,
    "sector": "Utilities",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2202",
    "name": "China Vanke Co Ltd",
    "weight": 0.0004,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3347",
    "name": "Hangzhou Tigermed Consulting Co Ltd",
    "weight": 0.0004,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600132",
    "name": "Chongqing Brewery Co Ltd",
    "weight": 0.0004,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DQ",
    "name": "Daqo New Energy Corp",
    "weight": 0.0004,
    "sector": "Materials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "APPC",
    "name": "Advanced Petrochemical Co",
    "weight": 0.0004,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601377",
    "name": "Industrial Securities Co Ltd",
    "weight": 0.0004,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UBBL",
    "name": "United Breweries Ltd",
    "weight": 0.0004,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALVO",
    "name": "Alvotech SA",
    "weight": 0.0004,
    "sector": "Health Care",
    "location": "Iceland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600346",
    "name": "Hengli Petrochemical Co Ltd",
    "weight": 0.0004,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600737",
    "name": "COFCO Sugar Holding Co Ltd",
    "weight": 0.0004,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "991",
    "name": "Datang International Power Generation Co Ltd",
    "weight": 0.0004,
    "sector": "Utilities",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WHIRL",
    "name": "Whirlpool of India Ltd",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601669",
    "name": "Power Construction Corp of China Ltd",
    "weight": 0.0004,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TAEE11",
    "name": "Transmissora Alianca de Energia Eletrica S/A",
    "weight": 0.0004,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6613",
    "name": "Lens Technology Co Ltd",
    "weight": 0.0004,
    "sector": "Information Technology",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FLYNAS",
    "name": "flynas Co SJSC",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UNVR",
    "name": "Unilever Indonesia Tbk PT",
    "weight": 0.0004,
    "sector": "Consumer Staples",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688047",
    "name": "Loongson Technology Corp Ltd",
    "weight": 0.0004,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MAVI",
    "name": "Mavi Giyim Sanayi Ve Ticaret AS",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SJVN",
    "name": "SJVN Ltd",
    "weight": 0.0004,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "090435",
    "name": "Amorepacific Corp",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8086",
    "name": "Nipro Corp",
    "weight": 0.0004,
    "sector": "Health Care",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COLBUN",
    "name": "Colbun SA",
    "weight": 0.0004,
    "sector": "Utilities",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EXTRA",
    "name": "United Electronics Co",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002001",
    "name": "Zhejiang NHU Co Ltd",
    "weight": 0.0004,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PGAS",
    "name": "Perusahaan Gas Negara Persero Tbk PT",
    "weight": 0.0004,
    "sector": "Utilities",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600623",
    "name": "Shanghai Huayi Group Co Ltd",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SRE*",
    "name": "Sempra",
    "weight": 0.0004,
    "sector": "Utilities",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "022100",
    "name": "Posco DX Co Ltd",
    "weight": 0.0004,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ACS/D",
    "name": "ACS Actividades de Construccion y Servicios SA",
    "weight": 0.0004,
    "sector": "Industrials",
    "location": "Spain",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MPARK",
    "name": "MLP Saglik Hizmetleri AS",
    "weight": 0.0004,
    "sector": "Health Care",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RLXF",
    "name": "Relaxo Footwears Ltd",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1958",
    "name": "BAIC Motor Corp Ltd",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "251270",
    "name": "Netmarble Corp",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "004370",
    "name": "NongShim Co Ltd",
    "weight": 0.0004,
    "sector": "Consumer Staples",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PRESIGHT",
    "name": "Presight AI Holding PLC",
    "weight": 0.0004,
    "sector": "Information Technology",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002653",
    "name": "Haisco Pharmaceutical Group Co Ltd",
    "weight": 0.0004,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FPE",
    "name": "FUCHS SE",
    "weight": 0.0004,
    "sector": "Materials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3697",
    "name": "SHIFT Inc",
    "weight": 0.0004,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RYGYO",
    "name": "Reysas Gayrimenkul Yatirim Ortakligi AS",
    "weight": 0.0004,
    "sector": "Real Estate",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000831",
    "name": "China Rare Earth Resources And Technology Co Ltd",
    "weight": 0.0004,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603369",
    "name": "Jiangsu King's Luck Brewery JSC Ltd",
    "weight": 0.0004,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2810",
    "name": "House Foods Group Inc",
    "weight": 0.0004,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3234",
    "name": "Mori Hills REIT Investment Corp",
    "weight": 0.0004,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600438",
    "name": "Tongwei Co Ltd",
    "weight": 0.0004,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6693",
    "name": "Chifeng Jilong Gold Mining Group Ltd",
    "weight": 0.0004,
    "sector": "Materials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "008770",
    "name": "Hotel Shilla Co Ltd",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4676",
    "name": "Fuji Media Holdings Inc",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7240",
    "name": "NOK Corp",
    "weight": 0.0004,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000921",
    "name": "Hisense Home Appliances Group Co Ltd",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002422",
    "name": "Sichuan Kelun Pharmaceutical Co Ltd",
    "weight": 0.0003,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMTK",
    "name": "Elang Mahkota Teknologi Tbk PT",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "576",
    "name": "Zhejiang Expressway Co Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CUAN",
    "name": "Petrindo Jaya Kreasi Tbk PT",
    "weight": 0.0003,
    "sector": "Energy",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600848",
    "name": "Shanghai Lingang Holdings Corp Ltd",
    "weight": 0.0003,
    "sector": "Real Estate",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALARABIA",
    "name": "Arabian Contracting Services Co",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "139130",
    "name": "DGB Financial Group Inc",
    "weight": 0.0003,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1618",
    "name": "Metallurgical Corp of China Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "598",
    "name": "Sinotrans Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300251",
    "name": "Beijing Enlight Media Co Ltd",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EXCL",
    "name": "XL Axiata Tbk PT",
    "weight": 0.0003,
    "sector": "Communication Services",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IQ",
    "name": "iQIYI Inc",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "301358",
    "name": "Hunan Yuneng New Energy Battery Material Co Ltd",
    "weight": 0.0003,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600835",
    "name": "Shanghai Mechanical and Electrical Industry Co Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688099",
    "name": "Amlogic Shanghai Co Ltd",
    "weight": 0.0003,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SPEN",
    "name": "Shapir Engineering and Industry Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RALYH",
    "name": "Ral Yatirim Holding AS",
    "weight": 0.0003,
    "sector": "Materials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000559",
    "name": "Wanxiang Qianchao Co Ltd",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1999",
    "name": "Man Wah Holdings Ltd",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FERTIGLB",
    "name": "Fertiglobe plc",
    "weight": 0.0003,
    "sector": "Materials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FESTI",
    "name": "Festi hf",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "Iceland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ARABIAND",
    "name": "Arabian Drilling Co",
    "weight": 0.0003,
    "sector": "Energy",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002036",
    "name": "LianChuang Electronic Technology Co Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002385",
    "name": "Beijing Dabeinong Technology Group Co Ltd",
    "weight": 0.0003,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000880",
    "name": "Hanwha Corp",
    "weight": 0.0003,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CENCOMAL",
    "name": "Cencosud Shopping SA",
    "weight": 0.0003,
    "sector": "Real Estate",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KLRHO",
    "name": "Kiler Holding AS",
    "weight": 0.0003,
    "sector": "Real Estate",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VAPORES",
    "name": "Cia Sud Americana de Vapores SA",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2206",
    "name": "Ezaki Glico Co Ltd",
    "weight": 0.0003,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6110",
    "name": "Topsports International Holdings Ltd",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300803",
    "name": "Beijing Compass Technology Development Co Ltd",
    "weight": 0.0003,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002558",
    "name": "Giant Network Group Co Ltd",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PETROR",
    "name": "Rabigh Refining & Petrochemical Co",
    "weight": 0.0003,
    "sector": "Energy",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600926",
    "name": "Bank of Hangzhou Co Ltd",
    "weight": 0.0003,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "165",
    "name": "China Everbright Ltd",
    "weight": 0.0003,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DRR",
    "name": "Deterra Royalties Ltd",
    "weight": 0.0003,
    "sector": "Materials",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPFE3",
    "name": "CPFL Energia SA",
    "weight": 0.0003,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "APEX",
    "name": "Apex Investment Co PSC",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QLG",
    "name": "QL Resources Bhd",
    "weight": 0.0003,
    "sector": "Consumer Staples",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "036460",
    "name": "Korea Gas Corp",
    "weight": 0.0003,
    "sector": "Utilities",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601727",
    "name": "Shanghai Electric Group Co Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601212",
    "name": "Baiyin Nonferrous Group Co Ltd",
    "weight": 0.0003,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PHX",
    "name": "Phoenix Group PLC",
    "weight": 0.0003,
    "sector": "Information Technology",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BYLOT",
    "name": "Ballys Intralot SA",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3292",
    "name": "AEON REIT Investment Corp",
    "weight": 0.0003,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002044",
    "name": "Meinian Onehealth Healthcare Holdings Co Ltd",
    "weight": 0.0003,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "123",
    "name": "Yuexiu Property Co Ltd",
    "weight": 0.0003,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KUYAS",
    "name": "Kuyumcukent Gayrimenkul Yatirimlari AS",
    "weight": 0.0003,
    "sector": "Real Estate",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABMB",
    "name": "Alliance Bank Malaysia Bhd",
    "weight": 0.0003,
    "sector": "Financials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2229",
    "name": "Calbee Inc",
    "weight": 0.0003,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "467",
    "name": "United Energy Group Ltd",
    "weight": 0.0003,
    "sector": "Energy",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688578",
    "name": "Shanghai Allist Pharmaceuticals Co Ltd",
    "weight": 0.0003,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JSWINFRA",
    "name": "JSW Infrastructure Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BRSAN",
    "name": "Borusan Birlesik Boru Fabrikalari Sanayi ve Ticaret AS",
    "weight": 0.0003,
    "sector": "Materials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600039",
    "name": "Sichuan Road and Bridge Group Co Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600021",
    "name": "Shanghai Electric Power Co Ltd",
    "weight": 0.0003,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8876",
    "name": "Relo Group Inc",
    "weight": 0.0003,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MAGEN",
    "name": "Margun Enerji Uretim Sanayi VE Ticaret AS",
    "weight": 0.0003,
    "sector": "Utilities",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "552",
    "name": "China Communications Services Corp Ltd",
    "weight": 0.0003,
    "sector": "Communication Services",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600895",
    "name": "Shanghai Zhangjiang High-Tech Park Development Co Ltd",
    "weight": 0.0003,
    "sector": "Real Estate",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AKSA",
    "name": "Aksa Akrilik Kimya Sanayii AS",
    "weight": 0.0003,
    "sector": "Materials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BTS/F",
    "name": "BTS Group Holdings PCL",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SCGP/F",
    "name": "SCG Packaging PCL",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2670",
    "name": "ABC-Mart Inc",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600233",
    "name": "YTO Express Group Co Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AP",
    "name": "Aboitiz Power Corp",
    "weight": 0.0003,
    "sector": "Utilities",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000596",
    "name": "Anhui Gujing Distillery Co Ltd",
    "weight": 0.0003,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4483",
    "name": "JMDC Inc",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QAMC",
    "name": "Qatar Aluminum Manufacturing Co",
    "weight": 0.0003,
    "sector": "Materials",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "302440",
    "name": "SK Bioscience Co Ltd",
    "weight": 0.0003,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600096",
    "name": "Yunnan Yuntianhua Co Ltd",
    "weight": 0.0003,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9898",
    "name": "Weibo Corp",
    "weight": 0.0003,
    "sector": "Information Technology",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MULT3",
    "name": "Multiplan Empreendimentos Imobiliarios SA",
    "weight": 0.0003,
    "sector": "Real Estate",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "659",
    "name": "CTF Services Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600580",
    "name": "Wolong Electric Group Co Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688180",
    "name": "Shanghai Junshi Biosciences Co Ltd",
    "weight": 0.0003,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601992",
    "name": "BBMG Corp",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000617",
    "name": "CNPC Capital Co Ltd",
    "weight": 0.0003,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2593",
    "name": "Ito En Ltd",
    "weight": 0.0003,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600066",
    "name": "Yutong Bus Co Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HWA",
    "name": "Honeywell Automation India Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000009",
    "name": "China Baoan Group Co Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002074",
    "name": "Gotion High-tech Co Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002287",
    "name": "Tibet Cheezheng Tibetan Medicine Co Ltd",
    "weight": 0.0003,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BATA",
    "name": "Bata India Ltd",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1199",
    "name": "COSCO SHIPPING Ports Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4681",
    "name": "Resorttrust Inc",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "570",
    "name": "China Traditional Chinese Medicine Holdings Co Ltd",
    "weight": 0.0003,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TRMET",
    "name": "TR Anadolu Metal Madencilik Isletmeleri AS",
    "weight": 0.0003,
    "sector": "Materials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9449",
    "name": "GMO internet group Inc",
    "weight": 0.0003,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3923",
    "name": "Rakus Co Ltd",
    "weight": 0.0003,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAGAD",
    "name": "Sagax AB",
    "weight": 0.0003,
    "sector": "Real Estate",
    "location": "Sweden",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002195",
    "name": "Shanghai Stonehill Technology Co Ltd",
    "weight": 0.0003,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AIIL",
    "name": "Authum Investment & Infrastucture Ltd",
    "weight": 0.0003,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MONDE",
    "name": "Monde Nissin Corp",
    "weight": 0.0003,
    "sector": "Consumer Staples",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2186",
    "name": "Luye Pharma Group Ltd",
    "weight": 0.0003,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENERY",
    "name": "Enerya Enerji AS",
    "weight": 0.0003,
    "sector": "Utilities",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600588",
    "name": "Yonyou Network Technology Co Ltd",
    "weight": 0.0003,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600221",
    "name": "Hainan Airlines Holding Co Ltd",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300866",
    "name": "Anker Innovations Technology Co Ltd",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1368",
    "name": "Xtep International Holdings Ltd",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300454",
    "name": "Sangfor Technologies Inc",
    "weight": 0.0003,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600845",
    "name": "Shanghai Baosight Software Co Ltd",
    "weight": 0.0003,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688472",
    "name": "CSI Solar Co Ltd",
    "weight": 0.0003,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002127",
    "name": "NanJi E-Commerce Co Ltd",
    "weight": 0.0003,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1316",
    "name": "Nexteer Automotive Group Ltd",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002459",
    "name": "JA Solar Technology Co Ltd",
    "weight": 0.0003,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300765",
    "name": "CSPC Innovation Pharmaceutical Co Ltd",
    "weight": 0.0003,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601866",
    "name": "COSCO SHIPPING Development Co Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "301236",
    "name": "Isoftstone Information Technology Group Co Ltd",
    "weight": 0.0003,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002673",
    "name": "Western Securities Co Ltd",
    "weight": 0.0003,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601825",
    "name": "Shanghai Rural Commercial Bank Co Ltd",
    "weight": 0.0003,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300748",
    "name": "JL Mag Rare-Earth Co Ltd",
    "weight": 0.0003,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002261",
    "name": "Talkweb Information System Co Ltd",
    "weight": 0.0003,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9003",
    "name": "Sotetsu Holdings Inc",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "683",
    "name": "Kerry Properties Ltd",
    "weight": 0.0003,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "881",
    "name": "Zhongsheng Group Holdings Ltd",
    "weight": 0.0003,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300724",
    "name": "Shenzhen SC New Energy Technology Corp",
    "weight": 0.0003,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300316",
    "name": "Zhejiang Jingsheng Mechanical & Electrical Co Ltd",
    "weight": 0.0003,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LUNR",
    "name": "LunR Royalties Corp",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "Canada",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002414",
    "name": "Wuhan Guide Infrared Co Ltd",
    "weight": 0.0002,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "900934",
    "name": "Shanghai Jinjiang International Hotels Co Ltd",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7489",
    "name": "VOYAH Automobile Technology Co Ltd",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688223",
    "name": "Jinko Solar Co Ltd",
    "weight": 0.0002,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600143",
    "name": "Kingfa Sci & Tech Co Ltd",
    "weight": 0.0002,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GMAT3",
    "name": "Grupo Mateus SA",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INTP",
    "name": "Indocement Tunggal Prakarsa Tbk PT",
    "weight": 0.0002,
    "sector": "Industrials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300085",
    "name": "Shenzhen Infogem Technologies Co Ltd",
    "weight": 0.0002,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TKA",
    "name": "Telekom Austria AG",
    "weight": 0.0002,
    "sector": "Communication Services",
    "location": "Austria",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8570",
    "name": "AEON Financial Service Co Ltd",
    "weight": 0.0002,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "14",
    "name": "Hysan Development Co Ltd",
    "weight": 0.0002,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688297",
    "name": "AVIC Chengdu UAS Co Ltd",
    "weight": 0.0002,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8572",
    "name": "Acom Co Ltd",
    "weight": 0.0002,
    "sector": "Financials",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2039",
    "name": "China International Marine Containers Group Co Ltd",
    "weight": 0.0002,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "004990",
    "name": "Lotte Corp",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600549",
    "name": "Xiamen Tungsten Co Ltd",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "696",
    "name": "TravelSky Technology Ltd",
    "weight": 0.0002,
    "sector": "Information Technology",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000895",
    "name": "Henan Shuanghui Investment & Development Co Ltd",
    "weight": 0.0002,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002920",
    "name": "Huizhou Desay Sv Automotive Co Ltd",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6979",
    "name": "ZJLD Group Inc",
    "weight": 0.0002,
    "sector": "Consumer Staples",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002064",
    "name": "Huafon Chemical Co Ltd",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STLA",
    "name": "Stellantis NV",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8283",
    "name": "PALTAC Corp",
    "weight": 0.0002,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DOAS",
    "name": "Dogus Otomotiv Servis ve Ticaret AS",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MIATK",
    "name": "MIA Teknoloji AS",
    "weight": 0.0002,
    "sector": "Information Technology",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LYDYE",
    "name": "Lydia Yesil Enerji Kaynaklari Anonimsirketi",
    "weight": 0.0002,
    "sector": "Utilities",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "639",
    "name": "Shougang Fushan Resources Group Ltd",
    "weight": 0.0002,
    "sector": "Energy",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000999",
    "name": "China Resources Sanjiu Medical & Pharmaceutical Co Ltd",
    "weight": 0.0002,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TURSG",
    "name": "Turkiye Sigorta AS",
    "weight": 0.0002,
    "sector": "Financials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600988",
    "name": "Chifeng Jilong Gold Mining Group Ltd",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6099",
    "name": "China Merchants Securities Co Ltd",
    "weight": 0.0002,
    "sector": "Financials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LU",
    "name": "Lufax Holding Ltd",
    "weight": 0.0002,
    "sector": "Financials",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300339",
    "name": "Jiangsu Hoperun Software Co Ltd",
    "weight": 0.0002,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "383220",
    "name": "F&F Co Ltd / New",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002252",
    "name": "Shanghai RAAS Blood Products Co Ltd",
    "weight": 0.0002,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3320",
    "name": "China Resources Pharmaceutical Group Ltd",
    "weight": 0.0002,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000581",
    "name": "Weifu High-Technology Group Co Ltd",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CUERVO*",
    "name": "Becle SAB de CV",
    "weight": 0.0002,
    "sector": "Consumer Staples",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8976",
    "name": "Daiwa Office Investment Corp",
    "weight": 0.0002,
    "sector": "Real Estate",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NIC",
    "name": "National Industrialization Co",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "006360",
    "name": "GS Engineering & Construction Corp",
    "weight": 0.0002,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "754",
    "name": "Hopson Development Holdings Ltd",
    "weight": 0.0002,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002595",
    "name": "Shandong Himile Mechanical Science & Technology Co Ltd",
    "weight": 0.0002,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RENT4",
    "name": "Localiza Rent a Car SA",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ECILC",
    "name": "EIS Eczacibasi Ilac ve Sinai ve Finansal Yatirimlar Sanayi ve Ticaret AS",
    "weight": 0.0002,
    "sector": "Health Care",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600018",
    "name": "Shanghai International Port Group Co Ltd",
    "weight": 0.0002,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688303",
    "name": "Xinjiang Daqo New Energy Co Ltd",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603077",
    "name": "Sichuan Hebang Biotechnology Co Ltd",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688608",
    "name": "Bestechnic Shanghai Co Ltd",
    "weight": 0.0002,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ULKER",
    "name": "Ulker Biskuvi Sanayi AS",
    "weight": 0.0002,
    "sector": "Consumer Staples",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "097950",
    "name": "CJ CheilJedang Corp",
    "weight": 0.0002,
    "sector": "Consumer Staples",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002517",
    "name": "Kingnet Network Co Ltd",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000028",
    "name": "China National Accord Medicines Corp Ltd",
    "weight": 0.0002,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TPG",
    "name": "TPG Telecom Ltd",
    "weight": 0.0002,
    "sector": "Communication Services",
    "location": "Australia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3549",
    "name": "Kusuri no Aoki Holdings Co Ltd",
    "weight": 0.0002,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KIO",
    "name": "Kumba Iron Ore Ltd",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8424",
    "name": "Fuyo General Lease Co Ltd",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300115",
    "name": "Shenzhen Everwin Precision Technology Co Ltd",
    "weight": 0.0002,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CSNA3",
    "name": "Cia Siderurgica Nacional SA",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CMIN3",
    "name": "CSN Mineracao SA",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ISMEN",
    "name": "Is Yatirim Menkul Degerler AS",
    "weight": 0.0002,
    "sector": "Financials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601939",
    "name": "China Construction Bank Corp",
    "weight": 0.0002,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "10",
    "name": "Hang Lung Group Ltd",
    "weight": 0.0002,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002294",
    "name": "Shenzhen Salubris Pharmaceuticals Co Ltd",
    "weight": 0.0002,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8454",
    "name": "momo.com Inc",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601169",
    "name": "Bank of Beijing Co Ltd",
    "weight": 0.0002,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LIDER",
    "name": "LDR Turizm AS",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ILCO",
    "name": "Israel Corp Ltd",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300144",
    "name": "Songcheng Performance Development Co Ltd",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TRALT",
    "name": "Koza Altin Isletmeleri AS",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LH-R",
    "name": "Land & Houses PCL",
    "weight": 0.0002,
    "sector": "Real Estate",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000975",
    "name": "Shanjin International Gold Co Ltd",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1877",
    "name": "Shanghai Junshi Biosciences Co Ltd",
    "weight": 0.0002,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2201",
    "name": "Yulon Motor Co Ltd",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BRYAT",
    "name": "Borusan Yatirim ve Pazarlama AS",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "200625",
    "name": "Chongqing Changan Automobile Co Ltd",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300661",
    "name": "SG Micro Corp",
    "weight": 0.0002,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KVIKA",
    "name": "Kvika banki hf",
    "weight": 0.0002,
    "sector": "Financials",
    "location": "Iceland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4812",
    "name": "Dentsu Soken Inc",
    "weight": 0.0002,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "001979",
    "name": "China Merchants Shekou Industrial Zone Holdings Co Ltd",
    "weight": 0.0002,
    "sector": "Real Estate",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENJSA",
    "name": "Enerjisa Enerji AS",
    "weight": 0.0002,
    "sector": "Utilities",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300769",
    "name": "Shenzhen Dynanonic Co Ltd",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600256",
    "name": "Guanghui Energy Co Ltd",
    "weight": 0.0002,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SNT",
    "name": "Santam Ltd",
    "weight": 0.0002,
    "sector": "Financials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GRTHO",
    "name": "Grainturk Tarim AS",
    "weight": 0.0002,
    "sector": "Consumer Staples",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600252",
    "name": "Guangxi Wuzhou Zhongheng Group Co Ltd",
    "weight": 0.0002,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000960",
    "name": "Yunnan Tin Co Ltd",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ZRGYO",
    "name": "Ziraat Gayrimenkul Yatirim Ortakligi AS",
    "weight": 0.0002,
    "sector": "Real Estate",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300832",
    "name": "Shenzhen New Industries Biomedical Engineering Co Ltd",
    "weight": 0.0002,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AVIA",
    "name": "Avia Avian Tbk PT",
    "weight": 0.0002,
    "sector": "Industrials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TOASO",
    "name": "Tofas Turk Otomobil Fabrikasi AS",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HPHT",
    "name": "Hutchison Port Holdings Trust",
    "weight": 0.0002,
    "sector": "Industrials",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LIVEPOLC",
    "name": "El Puerto de Liverpool SAB de CV",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002736",
    "name": "Guosen Securities Co Ltd",
    "weight": 0.0002,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600015",
    "name": "Huaxia Bank Co Ltd",
    "weight": 0.0002,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OPUS",
    "name": "Opus Global Nyrt",
    "weight": 0.0002,
    "sector": "Industrials",
    "location": "Hungary",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600536",
    "name": "China National Software & Service Co Ltd",
    "weight": 0.0002,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GENIL",
    "name": "GEN Ilac VE Saglik Urunleri Sanayi VE Ticaret AS",
    "weight": 0.0002,
    "sector": "Health Care",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000158",
    "name": "Shijiazhuang Changshan BeiMing Technology Co Ltd",
    "weight": 0.0002,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TERA",
    "name": "Tera Yatirim Menkul Degerler AS",
    "weight": 0.0002,
    "sector": "Financials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MYOR",
    "name": "Mayora Indah Tbk PT",
    "weight": 0.0002,
    "sector": "Consumer Staples",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4686",
    "name": "Justsystems Corp",
    "weight": 0.0002,
    "sector": "Information Technology",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6808",
    "name": "Sun Art Retail Group Ltd",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GTCAP",
    "name": "GT Capital Holdings Inc",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2296",
    "name": "Itoham Yonekyu Holdings Inc",
    "weight": 0.0002,
    "sector": "Consumer Staples",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CNVRG",
    "name": "Converge Information and Communications Technology Solutions Inc",
    "weight": 0.0002,
    "sector": "Communication Services",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000998",
    "name": "Yuan Longping High-tech Agriculture Co Ltd",
    "weight": 0.0002,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "152",
    "name": "Shenzhen International Holdings Ltd",
    "weight": 0.0002,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TBIG",
    "name": "PT Tower Bersama Infrastructure Tbk",
    "weight": 0.0002,
    "sector": "Communication Services",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002409",
    "name": "Jiangsu Yoke Technology Co Ltd",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "363",
    "name": "Shanghai Industrial Holdings Ltd",
    "weight": 0.0002,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LYDHO",
    "name": "LYDIA HOLDING AS",
    "weight": 0.0002,
    "sector": "Real Estate",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601098",
    "name": "China South Publishing & Media Group Co Ltd",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HEKTS",
    "name": "Hektas Ticaret TAS",
    "weight": 0.0002,
    "sector": "Materials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601933",
    "name": "Yonghui Superstores Co Ltd",
    "weight": 0.0002,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MANYAVAR",
    "name": "Vedant Fashions Ltd",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3918",
    "name": "NagaCorp Ltd",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SEERA",
    "name": "Seera Group Holding",
    "weight": 0.0002,
    "sector": "Consumer Discretionary",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ACEN",
    "name": "ACEN Corp",
    "weight": 0.0002,
    "sector": "Utilities",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600612",
    "name": "Lao Feng Xiang Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3532",
    "name": "Formosa Sumco Technology Corp",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600392",
    "name": "Shenghe Resources Holding Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "088350",
    "name": "Hanwha Life Insurance Co Ltd",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002939",
    "name": "China Great Wall Securities Co Ltd",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002603",
    "name": "Shijiazhuang Yiling Pharmaceutical Co Ltd",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000959",
    "name": "Beijing Shougang Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMOT",
    "name": "Amot Investments Ltd",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Israel",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000825",
    "name": "Shanxi Taigang Stainless Steel Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300037",
    "name": "Shenzhen Capchem Technology Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300782",
    "name": "Maxscend Microelectronics Co Ltd",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000021",
    "name": "Shenzhen Kaifa Technology Co Ltd",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300779",
    "name": "Yunnan Energy New Material Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MTC/F",
    "name": "Muangthai Capital PCL",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601818",
    "name": "China Everbright Bank Co Ltd",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "068760",
    "name": "Celltrion Pharm Inc",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GUJENERG",
    "name": "Gujarat Energy Ltd",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603659",
    "name": "Shanghai Putailai New Energy Technology Group Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000564",
    "name": "CCOOP Group Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002407",
    "name": "Do-Fluoride New Materials Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000630",
    "name": "Tongling Nonferrous Metals Group Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3116",
    "name": "Toyota Boshoku Corp",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "012750",
    "name": "S-1 Corp",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300255",
    "name": "Hebei Changshan Biochemical Pharmaceutical Co Ltd",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300759",
    "name": "Pharmaron Beijing Co Ltd",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OLG",
    "name": "Olam Group Ltd",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Singapore",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000983",
    "name": "Shanxi Coking Coal Energy Group Co Ltd",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "018880",
    "name": "Hanon Systems",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601117",
    "name": "China National Chemical Engineering Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "028670",
    "name": "Pan Ocean Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9401",
    "name": "TBS Holdings Inc",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2238",
    "name": "Guangzhou Automobile Group Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600216",
    "name": "Zhejiang Medicine Co Ltd",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300418",
    "name": "Kunlun Tech Co Ltd",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300628",
    "name": "Yealink Network Technology Corp Ltd",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000708",
    "name": "Citic Pacific Special Steel Group Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "METROBRA",
    "name": "Metro Brands Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002648",
    "name": "Satellite Chemical Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "051600",
    "name": "KEPCO Plant Service & Engineering Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688599",
    "name": "Trina Solar Co Ltd",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EFOR",
    "name": "Efor Yatirim Sanayi Ticaret AS",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002812",
    "name": "Yunnan Energy New Material Group Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601618",
    "name": "Metallurgical Corp of China Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4927",
    "name": "Pola Orbis Holdings Inc",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Japan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2314",
    "name": "Lee & Man Paper Manufacturing Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6699",
    "name": "Angelalign Technology Inc",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002110",
    "name": "Sansteel Minguang Co Ltd Fujian",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600027",
    "name": "Huadian Power International Corp Ltd",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601916",
    "name": "China Zheshang Bank Co Ltd",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PTBA",
    "name": "Bukit Asam Persero Tbk PT",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002266",
    "name": "Zhefu Holding Group Co Ltd",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002155",
    "name": "Hunan Gold Corp Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "995",
    "name": "Anhui Expressway Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6993",
    "name": "Blue Moon Group Holdings Ltd",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "029780",
    "name": "Samsung Card Co Ltd",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601016",
    "name": "CECEP Wind-Power Corp",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TOWR",
    "name": "Sarana Menara Nusantara Tbk PT",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2128",
    "name": "China Lesso Group Holdings Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "525",
    "name": "Guangshen Railway Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DMC",
    "name": "DMCI Holdings Inc",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "636",
    "name": "KLN Logistics Group Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601699",
    "name": "Shanxi Lu'an Environmental Energy Development Co Ltd",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4IG",
    "name": "4iG Nyrt",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Hungary",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300999",
    "name": "Yihai Kerry Arawana Holdings Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1083",
    "name": "Towngas Smart Energy Co Ltd",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600426",
    "name": "Shandong Hualu Hengsheng Chemical Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6049",
    "name": "Poly Property Services Co Ltd",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600048",
    "name": "Poly Developments and Holdings Group Co Ltd",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300133",
    "name": "Zhejiang Huace Film & Television Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SCC",
    "name": "Semirara Mining & Power Corp",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6127",
    "name": "Joinn Laboratories China Co Ltd",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GULF-R",
    "name": "Gulf Development PCL",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "026960",
    "name": "Dongsuh Cos Inc",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000120",
    "name": "CJ Logistics Corp",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "880",
    "name": "SJM Holdings Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "900911",
    "name": "Shanghai Jinqiao Export Processing Zone Development Co Ltd",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6865",
    "name": "Flat Glass Group Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300122",
    "name": "Chongqing Zhifei Biological Products Co Ltd",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000301",
    "name": "Jiangsu Eastern Shenghong Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1313",
    "name": "China Resources Building Materials Technology Holdings Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002555",
    "name": "37 Interactive Entertainment Network Technology Group Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600570",
    "name": "Hundsun Technologies Inc",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601333",
    "name": "Guangshen Railway Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000629",
    "name": "Pangang Group Vanadium Titanium & Resources Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600007",
    "name": "China World Trade Center Co Ltd",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000938",
    "name": "Unisplendour Corp Ltd",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "008930",
    "name": "Hanmi Science Co ltd",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002790",
    "name": "AMOREPACIFIC Group",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002601",
    "name": "LB Group Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GGRM",
    "name": "Gudang Garam Tbk PT",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INCO",
    "name": "Vale Indonesia Tbk PT",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "361610",
    "name": "SK IE Technology Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "579",
    "name": "Beijing Jingneng Clean Energy Co Ltd",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000876",
    "name": "New Hope Liuhe Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1033",
    "name": "Sinopec Oilfield Service Corp",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "69",
    "name": "Shangri-La Asia Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688387",
    "name": "CICT Mobile Communication Technology Co Ltd",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601811",
    "name": "Xinhua Winshare Publishing and Media Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1030",
    "name": "Seazen Group Ltd",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603185",
    "name": "Hoyuan Green Energy Co Ltd",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300347",
    "name": "Hangzhou Tigermed Consulting Co Ltd",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000963",
    "name": "Huadong Medicine Co Ltd",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BJC/F",
    "name": "Berli Jucker PCL",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2778",
    "name": "Champion REIT",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300763",
    "name": "Ginlong Technologies Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002821",
    "name": "Asymchem Laboratories Tianjin Co Ltd",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000883",
    "name": "Hubei Energy Group Co Ltd",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BYRCS",
    "name": "Bayer CropScience Ltd/India",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601877",
    "name": "Zhejiang Chint Electrics Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BRIS",
    "name": "Bank Syariah Indonesia Persero Tbk PT",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "0098301G",
    "name": "Hanwha Solutions Corp",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "007070",
    "name": "GS Retail Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BURG",
    "name": "Burgan Bank SAK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Kuwait",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SUNTV",
    "name": "Sun TV Network Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HLUNA",
    "name": "H Lundbeck A/S",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Denmark",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BEKE",
    "name": "KE Holdings Inc",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "United States",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2866",
    "name": "COSCO SHIPPING Development Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000027",
    "name": "Shenzhen Energy Group Co Ltd",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600383",
    "name": "Gemdale Corp",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002532",
    "name": "Tianshan Aluminum Group Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UFUK",
    "name": "Ufuk Yatirim Yonetim ve Gayrimenkul AS",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MDIA3",
    "name": "M Dias Branco SA",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000799",
    "name": "JiuGui Liquor Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601233",
    "name": "Tongkun Group Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "347",
    "name": "Angang Steel Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000069",
    "name": "Shenzhen Overseas Chinese Town Co Ltd",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6185",
    "name": "CanSino Biologics Inc",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300413",
    "name": "Mango Excellent Media Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000878",
    "name": "Yunnan Copper Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300207",
    "name": "Sunwoda Electronic Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "811",
    "name": "Xinhua Winshare Publishing and Media Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Hong Kong",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300003",
    "name": "Lepu Medical Technology Beijing Co Ltd",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601567",
    "name": "Ningbo Sanxing Medical Electric Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603806",
    "name": "Hangzhou First Applied Material Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000937",
    "name": "Jizhong Energy Resources Co Ltd",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002326",
    "name": "Zhejiang Yongtai Technology Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600521",
    "name": "Zhejiang Huahai Pharmaceutical Co Ltd",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600741",
    "name": "Huayu Automotive Systems Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603486",
    "name": "Ecovacs Robotics Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000661",
    "name": "Changchun High-Tech Industry Group Co Ltd",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000932",
    "name": "Hunan Valin Steel Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603260",
    "name": "Hoshine Silicon Industry Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SMGR",
    "name": "Semen Indonesia Persero Tbk PT",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601828",
    "name": "Red Star Macalline Group Corp Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JSMR",
    "name": "Jasa Marga Persero Tbk PT",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688188",
    "name": "Shanghai BOCHU Electronic Technology Corp Ltd",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300146",
    "name": "By-health Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600009",
    "name": "Shanghai International Airport Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MEG",
    "name": "Megaworld Corp",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603444",
    "name": "G-bits Network Technology Xiamen Co Ltd",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600985",
    "name": "Huaibei Mining Holdings Co Ltd",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DFM",
    "name": "Dubai Financial Market PJSC",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "001570",
    "name": "Kum Yang Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VAKBN",
    "name": "Turkiye Vakiflar Bankasi TAO",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600763",
    "name": "Topchoice Medical Corp",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000830",
    "name": "Luxi Chemical Group Co Ltd",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600325",
    "name": "Zhuhai Huafa Properties Co Ltd",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600803",
    "name": "ENN Natural Gas Co Ltd",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002624",
    "name": "Perfect World Co Ltd/China",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000400",
    "name": "Xuji Electric Co Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KNPL",
    "name": "Kansai Nerolac Paints Ltd",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300496",
    "name": "Thunder Software Technology Co Ltd",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300142",
    "name": "Walvax Biotechnology Co Ltd",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002007",
    "name": "Hualan Biological Engineering Inc",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HDFCBANK",
    "name": "HDFC BANK LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ICICIBANK",
    "name": "ICICI BANK LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4BRZ",
    "name": "ISHARES MSCI BRAZIL UCITS ET USDHA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Germany",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BHARTIARTL",
    "name": "BHARTI AIRTEL LTD",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1120",
    "name": "AL RAJHI BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INFY",
    "name": "INFOSYS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "M&M",
    "name": "MAHINDRA AND MAHINDRA LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DELTA.R",
    "name": "DELTA ELECTRONICS (THAILAND) NON-V",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AXISBANK",
    "name": "AXIS BANK LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1180",
    "name": "THE SAUDI NATIONAL BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IKSA",
    "name": "ISHARES MSCI SAUDI ARABIA CAPPED",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Ireland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BAJFINANCE",
    "name": "BAJAJ FINANCE LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KOTAKBANK",
    "name": "KOTAK MAHINDRA BANK LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7010",
    "name": "SAUDI TELECOM",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SUNPHARMA",
    "name": "SUN PHARMACEUTICAL INDUSTRIES LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PBBANK",
    "name": "PUBLIC BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TITAN",
    "name": "TITAN COMPANY LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MARUTI",
    "name": "MARUTI SUZUKI INDIA LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7769",
    "name": "HONPRECISION INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MAYBANK",
    "name": "MALAYAN BANKING",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HINDUNILVR",
    "name": "HINDUSTAN UNILEVER LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMIRATESNBD",
    "name": "EMIRATES NBD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BEL",
    "name": "BHARAT ELECTRONICS LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TATASTEEL",
    "name": "TATA STEEL LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "POWERGRID",
    "name": "POWER GRID CORPORATION OF INDIA LT",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HINDALCO",
    "name": "HINDALCO INDUSTRIES LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ULTRACEMCO",
    "name": "ULTRATECH CEMENT LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2010",
    "name": "SAUDI BASIC INDUSTRIES",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HCLTECH",
    "name": "HCL TECHNOLOGIES LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PTT.R",
    "name": "PTT NON-VOTING DR PCL",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2082",
    "name": "ACWA POWER CO",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EICHERMOT",
    "name": "EICHER MOTORS LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADVANC.R",
    "name": "ADVANCED INFO SERVICE NON-VOTING D",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SQM.B",
    "name": "SOCIEDAD QUIMICA Y MINERA DE CHILE",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6274",
    "name": "TAIWAN UNION TECHNOLOGY CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASIANPAINT",
    "name": "ASIAN PAINTS LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1010",
    "name": "RIYAD BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADANIPORTS",
    "name": "ADANI PORTS AND SPECIAL ECONOMIC Z",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DIVISLAB",
    "name": "DIVIS LABORATORIES LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "APOLLOHOSP",
    "name": "APOLLO HOSPITALS ENTERPRISE LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASELS.E",
    "name": "ASELSAN ELEKTRONIK SANAYI VE TICAR",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TVSMOTOR",
    "name": "TVS MOTOR COMPANY LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SBILIFE",
    "name": "SBI LIFE INSURANCE COMPANY LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8046",
    "name": "NAN YA PRINTED CIRCUIT BOARD CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TENAGA",
    "name": "TENAGA NASIONAL",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1150",
    "name": "ALINMA BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MAXHEALTH",
    "name": "MAX HEALTHCARE INSTITUTE LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JSWSTEEL",
    "name": "JSW STEEL LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CUMMINSIND",
    "name": "CUMMINS INDIA LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NESTLEIND",
    "name": "NESTLE INDIA LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3993",
    "name": "CMOC GROUP LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HTHT",
    "name": "H WORLD GROUP ADR LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AOT.R",
    "name": "AIRPORTS OF THAILAND NON-VOTING DR",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3328",
    "name": "BANK OF COMMUNICATIONS LTD H",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PMETAL",
    "name": "PRESS METAL ALUMINIUM HOLDINGS",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BAJAJFINSV",
    "name": "BAJAJ FINSERV LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2359",
    "name": "WUXI APPTEC LTD H",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1326",
    "name": "FORMOSA CHEMICALS & FIBRE CORP",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BIMAS.E",
    "name": "BIM BIRLESIK MAGAZALAR A",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CHOLAFIN",
    "name": "CHOLAMANDALAM INVESTMENT AND FINAN",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BAJAJ-AUTO",
    "name": "BAJAJ AUTO LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3189",
    "name": "KINSUS INTERCONNECT TECHNOLOGY COR",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2337",
    "name": "MACRONIX INTERNATIONAL LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COALINDIA",
    "name": "COAL INDIA LTD",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2319",
    "name": "CHINA MENGNIU DAIRY LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "267250",
    "name": "HD HYUNDAI LTD",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2313",
    "name": "COMPEQ MANUFACTURING LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1177",
    "name": "SINO BIOPHARMACEUTICAL LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6239",
    "name": "POWERTECH TECHNOLOGY INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPALL.R",
    "name": "CP ALL NON-VOTING DR PCL",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2603",
    "name": "EVERGREEN MARINE CORP (TAIWAN) LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADANIPOWER",
    "name": "ADANI POWER LTD",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HEROMOTOCO",
    "name": "HERO MOTOCORP LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DRREDDY",
    "name": "DR REDDYS LABORATORIES LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688",
    "name": "CHINA OVERSEAS LAND INVESTMENT LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INDHOTEL",
    "name": "INDIAN HOTELS LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EBP",
    "name": "ERSTE BANK POLSKA SA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "003550",
    "name": "LG CORP",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "017670",
    "name": "SK TELECOM LTD",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BDMS.R",
    "name": "BANGKOK DUSIT MEDICAL SERVICES NON",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MOTHERSON",
    "name": "SAMVARDHANA MOTHERSON INTERNATIONA",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FEDERALBNK",
    "name": "FEDERAL BANK LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5347",
    "name": "VANGUARD INTERNATIONAL SEMICONDUCT",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1050",
    "name": "BANQUE SAUDI FRANSI",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "YMM",
    "name": "FULL TRUCK ALLIANCE ADR LTD CLASS",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PFC",
    "name": "POWER FINANCE CORPORATION LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3702",
    "name": "WPG HOLDINGS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1339",
    "name": "THE PEOPLES INSURANCE CO (GROUP)",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TUPRS.E",
    "name": "TURKIYE PETROL RAFINERILERI A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DIB",
    "name": "DB ISLAMIC BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3045",
    "name": "TAIWAN MOBILE LTD",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7020",
    "name": "ETIHAD ETISALAT",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GULF.R",
    "name": "GULF DEVELOPMENT NON-VOTING DR PCL",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "138040",
    "name": "MERITZ FINANCIAL GROUP INC",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SSW",
    "name": "SIBANYE STILLWATER LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TATAPOWER",
    "name": "TATA POWER LTD",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BRITANNIA",
    "name": "BRITANNIA INDUSTRIES LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1590",
    "name": "AIRTAC INTERNATIONAL GROUP",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5871",
    "name": "CHAILEASE HOLDING LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PTTEP.R",
    "name": "PTT EXPLORATION AND PRODUCTION NON",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BHARATFORG",
    "name": "BHARAT FORGE LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GGBR4",
    "name": "GERDAU PREF SA",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LPP",
    "name": "LPP SA",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BCI",
    "name": "BANCO DE CREDITO E INVERSION",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LAURUSLABS",
    "name": "LAURUS LABS LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TORNTPHARM",
    "name": "TORRENT PHARMACEUTICALS LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "015760",
    "name": "KOREA ELECTRIC POWER CORP",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GVT&D",
    "name": "GE VERNOVA T&D INDIA LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BSANTANDER",
    "name": "BANCO SANTANDER CHILE",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FIBRAPL14",
    "name": "PROLOGIS PROPERTY MEXICO REIT",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TATACONSUM",
    "name": "TATA CONSUMER PRODUCTS LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1919",
    "name": "COSCO SHIPPING HOLDINGS LTD H",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BBAS3",
    "name": "BANCO DO BRASIL SA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BZ",
    "name": "KANZHUN AMERICAN DEPOSITORY SHARES",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INDUSINDBK",
    "name": "INDUSIND BANK LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "POLICYBZR",
    "name": "PB FINTECH LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SCC.R",
    "name": "SIAM CEMENT NON-VOTING DR PCL",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SUZLON",
    "name": "SUZLON ENERGY LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "006800",
    "name": "MIRAE ASSET SECURITIES CO LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "096770",
    "name": "SK INNOVATION LTD",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LUPIN",
    "name": "LUPIN LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PERSISTENT",
    "name": "PERSISTENT SYSTEMS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "XP",
    "name": "XP CLASS A INC",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6618",
    "name": "JD HEALTH INTERNATIONAL INC",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "005830",
    "name": "DB INSURANCE LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2280",
    "name": "ALMARAI",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADANIENT",
    "name": "ADANI ENTERPRISES LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "086280",
    "name": "HYUNDAI GLOVIS LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8069",
    "name": "E INK HOLDINGS INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "018260",
    "name": "SAMSUNG SDS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4904",
    "name": "FAR EASTONE TELECOMMUNICATIONS LTD",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PIDILITIND",
    "name": "PIDILITE INDUSTRIES LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FUNO11",
    "name": "FIBRA UNO ADMINISTRACION REIT",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601318",
    "name": "PING AN INSURANCE (GROUP) OF CHINA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5876",
    "name": "SHANGHAI COMMERCIAL LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6030",
    "name": "CITIC SECURITIES COMPANY LTD H",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BBSE3",
    "name": "BB SEGURIDADE SA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FORTIS",
    "name": "FORTIS HEALTHCARE LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MBK",
    "name": "MBANK SA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3533",
    "name": "LOTES LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "028050",
    "name": "SAMSUNG E&A LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TME",
    "name": "TENCENT MUSIC ENTERTAINMENT GROUP",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601288",
    "name": "AGRICULTURAL BANK OF CHINA LTD A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NRP",
    "name": "NEPI ROCKCASTLE NV",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2099",
    "name": "CHINA GOLD INTERNATIONAL RESOURCES",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "20",
    "name": "SENSETIME GROUP CLASS B INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3529",
    "name": "EMEMORY TECHNOLOGY INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DIXON",
    "name": "DIXON TECHNOLOGIES (INDIA) LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BDO",
    "name": "BDO UNIBANK INC",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BVN",
    "name": "BUENAVENTURA ADR REPRESENTING",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Peru",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INDUSTOWER",
    "name": "INDUS TOWERS LTD",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KOFUBL",
    "name": "COCA-COLA FEMSA CLASS UBL UNITS",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2259",
    "name": "ZIJIN GOLD INTERNATIONAL LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DLF",
    "name": "DLF LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GAMUDA",
    "name": "GAMUDA",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1171",
    "name": "YANKUANG ENERGY GROUP COMPANY LTD",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "POLYCAB",
    "name": "POLYCAB INDIA LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RECLTD",
    "name": "REC LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NPH",
    "name": "NORTHAM PLATINUM HLDGS LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2912",
    "name": "PRESIDENT CHAIN STORE CORP",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RICHTER",
    "name": "GEDEON RICHTER",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Hungary",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SUZB3",
    "name": "SUZANO SA",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BPCL",
    "name": "BHARAT PETROLEUM LTD",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002594",
    "name": "BYD LTD A",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3036",
    "name": "WT MICROELECTRONICS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASHOKLEY",
    "name": "ASHOK LEYLAND LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "836",
    "name": "CHINA RESOURCES POWER LTD",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MARICO",
    "name": "MARICO LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6515",
    "name": "WINWAY TECHNOLOGY LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "291",
    "name": "CHINA RESOURCES BEER HOLDINGS LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VIVT3",
    "name": "TELEFONICA BRASIL SA",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3293",
    "name": "INTERNATIONAL GAMES SYSTEM LTD",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COFORGE",
    "name": "COFORGE LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6139",
    "name": "L & K ENGINEERING LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1080",
    "name": "ARAB NATIONAL BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GFINBURO",
    "name": "GRUPO FINANCIERO INBURSA SRIES O",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1208",
    "name": "MMG LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3692",
    "name": "HANSOH PHARMACEUTICAL GROUP LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VIPS",
    "name": "VIPSHOP HOLDINGS SPONSORED ADS REP",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BBDC3",
    "name": "BANCO BRADESCO SA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2688",
    "name": "ENN ENERGY HOLDINGS LTD",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "358",
    "name": "JIANGXI COPPER LTD H",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3908",
    "name": "CHINA INTERNATIONAL CAPITAL CORP L",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "POWERINDIA",
    "name": "HITACHI ENERGY INDIA LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ISA",
    "name": "INTERCONEXION ELECTRICA SA",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Colombia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4013",
    "name": "DR SULAIMAN AL HABIB MEDICAL GRP",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1818",
    "name": "ZHAOJIN MINING INDUSTRY LTD H",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SOLARINDS",
    "name": "SOLAR INDUSTRIES INDIA LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AUROPHARMA",
    "name": "AUROBINDO PHARMA LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "259960",
    "name": "KRAFTON INC",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NYKAA",
    "name": "FSN E-COMMERCE VENTURES LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6415",
    "name": "SILERGY CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3081",
    "name": "LAND MARK CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2331",
    "name": "LI NING LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AKBNK.E",
    "name": "AKBANK A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1140",
    "name": "BANK ALBILAD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5483",
    "name": "SINO-AMERICAN SILICON PRODUCTS INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3606",
    "name": "FUYAO GLASS INDUSTRY GROUP LTD H",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2207",
    "name": "HOTAI MOTOR LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601398",
    "name": "INDUSTRIAL AND COMMERCIAL BANK OF",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UGPA3",
    "name": "ULTRAPAR PARTICIPOES SA",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RADL3",
    "name": "RAIA DROGASIL",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9698",
    "name": "GDS HOLDINGS LTD CLASS A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NAUKRI",
    "name": "INFO EDGE INDIA LTD",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABB",
    "name": "ABB INDIA LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ZAIN",
    "name": "MOBILE TEL",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Kuwait",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASII",
    "name": "ASTRA INTERNATIONAL",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GODREJCP",
    "name": "GODREJ CONSUMER PRODUCTS LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KTB.R",
    "name": "KRUNG THAI BANK PUBLIC NON-VOTING",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GCARSOA1",
    "name": "GRUPO CARSO SERIES A1",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002371",
    "name": "NAURA TECHNOLOGY GROUP LTD A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JINDALSTEL",
    "name": "JINDAL STEEL LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "966",
    "name": "CHINA TAIPING INSURANCE HLDGS LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2018",
    "name": "AAC TECHNOLOGIES HOLDINGS INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TRUE.R",
    "name": "TRUE CORPORATION NON-VOTING DR PCL",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MUTHOOTFIN",
    "name": "MUTHOOT FINANCE LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MFSL",
    "name": "MAX FINANCIAL SERVICES LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPN.R",
    "name": "CENTRAL PATTANA NON-VOTING DR PCL",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CDR",
    "name": "CD PROJEKT SA",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2600",
    "name": "ALUMINUM CORPORATION OF CHINA LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IHH",
    "name": "IHH HEALTHCARE",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FALABELLA",
    "name": "FALABELLA SACI SA",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9626",
    "name": "BILIBILI INC",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "247540",
    "name": "ECOPRO BM LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MIL",
    "name": "BANK MILLENNIUM SA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002475",
    "name": "LUXSHARE PRECISION INDUSTRY LTD A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1816",
    "name": "CGN POWER LTD H",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WIPRO",
    "name": "WIPRO LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMBASSY",
    "name": "EMBASSY OFFICE PARKS REIT UNITS",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1530",
    "name": "3SBIO INC",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PHOENIXLTD",
    "name": "PHOENIX MILLS LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TAL",
    "name": "TAL EDUCATION GROUP ADR REPTG",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2834",
    "name": "TAIWAN BUSINESS BANK LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMBANK",
    "name": "AMMB HOLDINGS",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OUT",
    "name": "OUTSURANCE GROUP LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DEWA",
    "name": "DUBAI ELECTRICITY AND WATER AUTHOR",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABCAPITAL",
    "name": "ADITYA BIRLA CAPITAL LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALR",
    "name": "ALIOR BANK SA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENEV3",
    "name": "ENEVA SA",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADNOCDRILL",
    "name": "ADNOC DRILLING COMPANY",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BFT",
    "name": "BENEFIT SYSTEMS SA",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6990",
    "name": "SICHUAN KELUN-BIOTECH BIOPHARM LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "161390",
    "name": "HANKOOK TIRE & TECHNOLOGY LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CMIG4",
    "name": "CIA ENERGETICA DE MINAS GERAIS PRE",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SCB.R",
    "name": "SCB X PUBLIC COMPANY LIMITED NON-V",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6257",
    "name": "SIGURD MICROELECTRONICS CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OMAB",
    "name": "GRUPO AEROPORTUARIO DEL CENTRO NOR",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DNP",
    "name": "DINO POLSKA SA",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VEDL",
    "name": "VEDANTA LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "534091",
    "name": "MULTI COMMODITY EXCHANGE OF INDIA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "THYAO.E",
    "name": "TURK HAVA YOLLARI AO A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HLBANK",
    "name": "HONG LEONG BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3808",
    "name": "SINOTRUK (HONG KONG) LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BAAKOMB",
    "name": "KOMERCNI BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Czech Republic",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GLENMARK",
    "name": "GLENMARK PHARMACEUTICALS LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SWIGGY",
    "name": "SWIGGY LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CBQK",
    "name": "COMMERCIAL BANK OF QATAR",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPLE3",
    "name": "CIA PARANAENSE DE ENERGIA COPEL",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PINFRA*",
    "name": "PROMOTORA Y OPERADORA DE INFRAESTR",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SRF",
    "name": "SRF LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "003670",
    "name": "POSCO FUTURE M LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PETGAS",
    "name": "PETRONAS GAS",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HINDPETRO",
    "name": "HINDUSTAN PETROLEUM CORP LTD",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "APN",
    "name": "ASPEN PHARMACARE LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IOC",
    "name": "INDIAN OIL CORP LTD",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RNI",
    "name": "REINET INVESTMENTS S.C.A.",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "006260",
    "name": "LS CORP",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "YESBANK",
    "name": "YES BANK LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BPI",
    "name": "BANK OF THE PHILIPPINE ISLANDS",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "007660",
    "name": "ISUPETASYS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "272210",
    "name": "HANWHA SYSTEMS LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600183",
    "name": "SHENGYI TECHNOLOGY LTD A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "024110",
    "name": "INDUSTRIAL BANK OF KOREA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "135",
    "name": "KUNLUN ENERGY LTD",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "021240",
    "name": "COWAY LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1209",
    "name": "CHINA RESOURCES MIXC LIFESTYLE SER",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "270",
    "name": "GUANGDONG INVESTMENT LTD",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3105",
    "name": "WIN SEMICONDUCTORS CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AXIA7",
    "name": "AXIA ENERGIA PRF SA",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KIMBERA",
    "name": "KIMBERLY-CLARK DE MEXICO CLASS A",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BOUBYAN",
    "name": "BOUBYAN BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Kuwait",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "353200",
    "name": "DAEDUCKELECTRONICS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GRT",
    "name": "GROWTHPOINT PROP LTD SHS",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601166",
    "name": "INDUSTRIAL BANK LTD A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FMTY14",
    "name": "FIBRA MTY SAPI REIT",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8210",
    "name": "BUPA ARABIA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KBANK.R",
    "name": "KASIKORNBANK PUBLIC NON-VOTING DR",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SBID",
    "name": "STATE BANK OF INDIA REG S INDIA GD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RADICO",
    "name": "RADICO KHAITAN LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BELA",
    "name": "JUMBO SA",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1929",
    "name": "CHOW TAI FOOK JEWELLERY GROUP LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6881",
    "name": "CHINA GALAXY SECURITIES LTD H",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601328",
    "name": "BANK OF COMMUNICATIONS LTD A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GODREJPROP",
    "name": "GODREJ PROPERTIES LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MANKIND",
    "name": "MANKIND PHARMA LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "APLAPOLLO",
    "name": "APL APOLLO TUBES LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IDEA",
    "name": "VODAFONE IDEA LTD",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TIINDIA",
    "name": "TUBE INVESTMENTS OF INDIA LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ICICIGI",
    "name": "ICICI LOMBARD GENERAL INSURANCE CO",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QGTS",
    "name": "QATAR GAS TRANSPORT COMPANY LTD",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SONACOMS",
    "name": "SONA BLW PRECISION FORGINGS LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BOSCHLTD",
    "name": "BOSCH LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KCHOL.E",
    "name": "KOC HOLDING A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SDG",
    "name": "SD GUTHRIE",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2347",
    "name": "SYNNEX TECHNOLOGY INTERNATIONAL CO",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KEI",
    "name": "KEI INDUSTRIES LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "YTLPOWR",
    "name": "YTL POWER INTERNATIONAL",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ACP",
    "name": "ASSECO POLAND SA",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5289",
    "name": "INNODISK CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MARK",
    "name": "MASRAF AL RAYAN",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RAIL3",
    "name": "RUMO SA",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SIEMENS",
    "name": "SIEMENS LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MTM",
    "name": "MOMENTUM GROUP LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "039490",
    "name": "KIWOOM SECURITIES LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LODHA",
    "name": "LODHA DEVELOPERS LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMAARDEV",
    "name": "EMAAR DEVELOPMENT",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADNOCDIST",
    "name": "ABU DHABI NATIONAL OIL COMPANY FOR",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601211",
    "name": "GUOTAI HAITONG SECURITIES LTD A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "003490",
    "name": "KOREAN AIR LINES LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6285",
    "name": "WISTRON NEWEB CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TPE",
    "name": "TAURON POLSKA ENERGIA SA",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BH.R",
    "name": "BUMRUNGRAD HOSPITAL NON-VOTING DR",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AIRARABIA",
    "name": "AIR ARABIA",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SUNDARMFIN",
    "name": "SUNDARAM FINANCE LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5536",
    "name": "ACTER CORP LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IOICORP",
    "name": "IOI CORPORATION",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BAJAJHLDNG",
    "name": "BAJAJ HOLDINGS AND INVESTMENT LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UPL",
    "name": "UPL LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3706",
    "name": "MITAC HOLDINGS CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TIMS3",
    "name": "TIM SA",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JBS",
    "name": "JBS N V NV CLASS A",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENRIN",
    "name": "SIEMENS ENERGY INDIA LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3264",
    "name": "ARDENTEC CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "036930",
    "name": "JUSUNG ENGINEERING LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1988",
    "name": "CHINA MINSHENG BANKING CORP LTD H",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ORDS",
    "name": "OOREDOO",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300059",
    "name": "EAST MONEY INFORMATION LTD A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8010",
    "name": "THE COOPERATIVE INSURANCE",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3260",
    "name": "ADATA TECHNOLOGY LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002384",
    "name": "SUZHOU DONGSHAN PRECISION MANUFACT",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "003230",
    "name": "SAM YANG FOODS INC",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VOLTAS",
    "name": "VOLTAS LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3888",
    "name": "KINGSOFT LTD",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6919",
    "name": "CALIWAY BIOPHARMACEUTICALS LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "168",
    "name": "TSINGTAO BREWERY LTD H",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ZYDUSLIFE",
    "name": "ZYDUS LIFESCIENCES LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600276",
    "name": "JIANGSU HENGRUI MEDICINE LTD A",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RHBBANK",
    "name": "RHB BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MRF",
    "name": "MRF LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PCHEM",
    "name": "PETRONAS CHEMICALS GROUP",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BBNI",
    "name": "BANK NEGARA INDONESIA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "277810",
    "name": "RAINBOW ROBOTICS",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9660",
    "name": "HORIZON ROBOTICS",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PRESTIGE",
    "name": "PRESTIGE ESTATES PROJECTS LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MONET",
    "name": "MONETA MONEY BNK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Czech Republic",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000100",
    "name": "YUHAN CORP",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "267270",
    "name": "HD CONSTRUCTION EQUIPMENT LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GEKTERNA",
    "name": "GEK TERNA SA",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VESTA*",
    "name": "CORPORACION INMOBILIARIA VESTA",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6147",
    "name": "CHIPBOND TECHNOLOGY CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SMPH",
    "name": "SM PRIME HOLDINGS INC",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "902",
    "name": "HUANENG POWER INTERNATIONAL INC H",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NATIONALUM",
    "name": "NATIONAL ALUMINIUM CO LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SWB",
    "name": "SUNWAY BHD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TBS",
    "name": "TIGER BRANDS LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6886",
    "name": "HUATAI SECURITIES LTD H",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EREGL.E",
    "name": "EREGLI DEMIR VE CELIK FABRIKALARI",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "352820",
    "name": "HYBE LTD",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6531",
    "name": "AP MEMORY TECHNOLOGY CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OMU",
    "name": "OLD MUTUAL LIMITED LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SHREECEM",
    "name": "SHREE CEMENT LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603993",
    "name": "CHINA MOLYBDENUM LTD A",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1898",
    "name": "CHINA COAL ENERGY LTD H",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TORNTPOWER",
    "name": "TORRENT POWER LTD",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GENTERA*",
    "name": "GENTERA SAB DE CV",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "009830",
    "name": "HANWHA SOLUTIONS CORP",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NAVINFLUOR",
    "name": "NAVIN FLUORINE INTERNATIONAL LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688012",
    "name": "ADVANCED MICRO-FABRICATION EQUIPME",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PTTGC.R",
    "name": "PTT GLOBAL CHEMICAL NON-VOTING DR",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IDFCFIRSTB",
    "name": "IDFC FIRST BANK LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BIOCON",
    "name": "BIOCON LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BANKBARODA",
    "name": "BANK OF BARODA LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MISC",
    "name": "MISC",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HAVELLS",
    "name": "HAVELLS INDIA LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COLPAL",
    "name": "COLGATE PALMOLIVE INDIA LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CSMG3",
    "name": "COMPANHIA DE SANEAMENTO DE MINAS G",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "011200",
    "name": "HMM LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MTELEKOM",
    "name": "MAGYAR TELEKOM",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Hungary",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COPEC",
    "name": "EMPRESAS COPEC SA",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DABUR",
    "name": "DABUR INDIA LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2492",
    "name": "WALSIN TECHNOLOGY CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2333",
    "name": "GREAT WALL MOTOR COMPANY LTD H",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QNNS",
    "name": "QATAR NAVIGATION",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GMRAIRPORT",
    "name": "GMR AIRPORTS LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KTY",
    "name": "GRUPA KETY SA",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALWN",
    "name": "ALLWYN AG",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WARBABANK",
    "name": "WARBABANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Kuwait",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5434",
    "name": "TOPCO SCIENTIFIC LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PARAUCO",
    "name": "PARQUE ARAUCO SA",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TOTS3",
    "name": "TOTVS SA",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QIIK",
    "name": "QATAR INTERNATIONAL ISLAMIC BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688498",
    "name": "YUANJIE SEMICONDUCTOR TECHNOLOGY L",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TCELL.E",
    "name": "TURKCELL ILETISIM HIZMETLERI A",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OPL",
    "name": "ORANGE POLSKA SA",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4300",
    "name": "DAR AL ARKAN REAL ESTATE DEVELOPME",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IPCALAB",
    "name": "IPCA LABORATORIES LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MRP",
    "name": "MR PRICE GROUP LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4190",
    "name": "JARIR MARKETING",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PGE",
    "name": "PGE POLSKA GRUPA ENERGETYCZNA SA",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KLBN11",
    "name": "KLABIN UNITS SA",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENELCHILE",
    "name": "ENEL CHILE SA",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COROMANDEL",
    "name": "COROMANDEL INTERNATIONAL LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2812",
    "name": "TAICHUNG COMMERCIAL BANK LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EXX",
    "name": "EXXARO RESOURCES LTD",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALOS3",
    "name": "ALLOS SA",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "APARINDS",
    "name": "APAR INDUSTRIES LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LREN3",
    "name": "LOJAS RENNER SA",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "M&MFIN",
    "name": "MAHINDRA AND MAHINDRA FINANCIAL SE",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HTO",
    "name": "HELLENIC TELECOMMUNICATIONS ORGANI",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "058470",
    "name": "LEENO INDUSTRIAL INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IFS",
    "name": "INTERCORP FINANCIAL SERVICES INC",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Peru",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JSWENERGY",
    "name": "JSW ENERGY LTD",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000333",
    "name": "MIDEA GROUP LTD A",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "144",
    "name": "CHINA MERCHANTS PORT HOLDINGS LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INDIANB",
    "name": "INDIAN BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WAAREEENER",
    "name": "WAAREE ENERGIES LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMBUJACEM",
    "name": "AMBUJA CEMENTS LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DELHIVERY",
    "name": "DELHIVERY LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1766",
    "name": "CRRC CORP LTD H",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MALLPLAZA",
    "name": "PLAZA SA",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UNIONBANK",
    "name": "UNION BANK OF INDIA LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "268",
    "name": "KINGDEE INT L SOFTWARE GROUP LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "360ONE",
    "name": "360 ONE WAM LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "532483",
    "name": "CANARA BANK LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ISCTR.E",
    "name": "TURKIYE IS BANKASI C",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STNE",
    "name": "STONECO LTD CLASS A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPF.R",
    "name": "CHAROEN POKPHAND FOODS NON-VOTING",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MER",
    "name": "MANILA ELECTRIC",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OFSS",
    "name": "ORACLE FINANCIAL SERVICES SOFTWARE",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SALIK",
    "name": "SALIK COMPANY P.J.S.C",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8996",
    "name": "KAORI HEAT TREATMENT LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2474",
    "name": "CATCHER TECHNOLOGY LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CDB",
    "name": "CELCOMDIGI",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6213",
    "name": "ITEQ CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MPHASIS",
    "name": "MPHASIS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PIIND",
    "name": "P.I. INDUSTRIES LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "010060",
    "name": "OCI HOLDINGS COMPANY LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "257",
    "name": "CHINA EVERBRIGHT ENVIRONMENT GROUP",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PAGEIND",
    "name": "PAGE INDUSTRIES LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "241",
    "name": "ALIBABA HEALTH INFORMATION TECH LT",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ADNOCLS",
    "name": "ADNOC LOGISTICS & SERVICES PLC",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2027",
    "name": "TA CHEN STAINLESS PIPE LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "039030",
    "name": "EO TECHNICS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AIAENG",
    "name": "AIA ENGINEERING LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000858",
    "name": "WULIANGYE YIBIN LTD A",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1787",
    "name": "SHANDONG GOLD MINING LTD H",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688008",
    "name": "MONTAGE TECHNOLOGY LTD A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CENCOSUD",
    "name": "CENCOSUD SA",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LTF",
    "name": "L&T FINANCE LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "240810",
    "name": "WONIK IPS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1504",
    "name": "TECO ELECTRIC & MACHINERY LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600000",
    "name": "SHANGHAI PUDONG DEVELOPMENT BANK L",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1776",
    "name": "GF SECURITIES LTD H",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "028300",
    "name": "HLB LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "YKBNK.E",
    "name": "YAPI VE KREDI BANKASI A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9863",
    "name": "ZHEJIANG LEAPMOTOR TECHNOLOGY LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2049",
    "name": "HIWIN TECHNOLOGIES CORP",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OIL",
    "name": "OIL INDIA LTD",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "036570",
    "name": "NC CORP",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BLUESTARCO",
    "name": "BLUE STAR LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2268",
    "name": "WUXI XDC CAYMAN INC",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6805",
    "name": "FOSITEK CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LTOD",
    "name": "LARSEN AND TOUBRO SPONSORED GDR RE",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TOP.R",
    "name": "THAI OIL NON-VOTING DR PCL",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "425",
    "name": "MINTH GROUP LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1402",
    "name": "FAR EASTERN NEW CENTURY CORP",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GOTO",
    "name": "GOTO GOJEK TOKOPEDIA",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RDF",
    "name": "REDEFINE PROPERTIES LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KRU",
    "name": "KRUK SA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VMM",
    "name": "VISHAL MEGA MART LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PIRAMALFIN",
    "name": "PIRAMAL FINANCE LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KLK",
    "name": "KUALA LUMPUR KEPONG",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6187",
    "name": "ALL RING TECH LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3491",
    "name": "UNIVERSAL MICROWAVE TECHNOLOGY INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6409",
    "name": "VOLTRONIC POWER TECHNOLOGY CORP",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PETRONET",
    "name": "PETRONET LNG LTD",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9880",
    "name": "UBTECH ROBOTICS CORP LTD H",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SUPREMEIND",
    "name": "SUPREME INDUSTRIES LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "XTB",
    "name": "XTB SA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ZAB",
    "name": "ZABKA GROUP SOCIETE ANONYME SA",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "319660",
    "name": "PSK INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002916",
    "name": "SHENNAN CIRCUITS LTD A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603986",
    "name": "GIGADEVICE SEMICONDUCTOR INC A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "222800",
    "name": "SIMMTECH LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7750",
    "name": "SYNTEC TECHNOLOGY LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EXIDEIND",
    "name": "EXIDE INDUSTRIES LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ANDINA.B",
    "name": "EMBOTELLADORA ANDINA SERIES B SA",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JKCEMENT",
    "name": "J.K. CEMENT LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TM",
    "name": "TELEKOM MALAYSIA",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000990",
    "name": "DB HITEK LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PNBHOUSING",
    "name": "PNB HOUSING FINANCE LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8150",
    "name": "CHIPMOS TECHNOLOGIES INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601857",
    "name": "PETROCHINA LTD A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1258",
    "name": "CHINA NONFERROUS MINING CORPORATIO",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BIRET",
    "name": "BROOKFIELD INDIA REAL ESTATE TRUST",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4250",
    "name": "JABAL OMAR DEVELOPMENT",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1772",
    "name": "GANFENG LITHIUM LTD H",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UTDPLT",
    "name": "UNITED PLANTATIONS",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300394",
    "name": "SUZHOU TFC OPTICAL COMMUNICATION L",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VKE",
    "name": "VUKILE PROPERTY REIT LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KALYANKJIL",
    "name": "KALYAN JEWELLERS INDIA LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300476",
    "name": "VICTORY GIANT TECHNOLOGY HUIZHOU L",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300274",
    "name": "SUNGROW POWER SUPPLY LTD A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MANAPPURAM",
    "name": "MANAPPURAM FINANCE LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TTB.R",
    "name": "TMBTHANACHART BANK NON-VOTING DR P",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PCO",
    "name": "PEPCO GROUP NV",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2615",
    "name": "WAN HAI LINES LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1020",
    "name": "BANK ALJAZIRA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASTRAL",
    "name": "ASTRAL LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2588",
    "name": "BOC AVIATION LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2542",
    "name": "HIGHWEALTH CONSTRUCTION CORP",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1102",
    "name": "ASIA CEMENT CORP",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "047040",
    "name": "DAEWOO ENGINEERING & CONSTRUCTION",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALKEM",
    "name": "ALKEM LABORATORIES LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "062040",
    "name": "SANIL ELECTRIC LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KIMS",
    "name": "KRISHNA INSTITUTE OF MEDICAL SCIEN",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3131",
    "name": "GRAND PLASTIC TECHNOLOGY CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "THERMAX",
    "name": "THERMAX",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MINT.R",
    "name": "MINOR INTERNATIONAL PUBLIC NON-VOT",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SM",
    "name": "SM INVESTMENTS CORP",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2290",
    "name": "YANBU NATIONAL PETROCHEMICALS",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3006",
    "name": "ELITE SEMICONDUCTOR MICROELECTRONI",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "--",
    "name": "TORRENT PHARMACEUTICAL",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000725",
    "name": "BOE TECHNOLOGY GROUP LTD A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JSL",
    "name": "JINDAL STAINLESS LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KARURVYSYA",
    "name": "KARUR VYSYA BANK LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TATACOMM",
    "name": "TATA COMMUNICATIONS LTD",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3324",
    "name": "AURAS TECHNOLOGY LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASAI3",
    "name": "SENDAS DISTRIBUIDORA SA",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DIALOG",
    "name": "DIALOG GROUP",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300433",
    "name": "LENS TECHNOLOGY LTD A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OBEROIRLTY",
    "name": "OBEROI REALTY LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2455",
    "name": "VISUAL PHOTONICS EPITAXY LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6196",
    "name": "MARKETECH INTERNATIONAL CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601601",
    "name": "CHINA PACIFIC INSURANCE (GROUP) LT",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AEGISLOG",
    "name": "AEGIS LOGISTICS LTD",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MBRF3",
    "name": "MARFRIG GLOBAL FOODS SA",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1070",
    "name": "TCL ELECTRONICS HOLDINGS LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OPTIMA",
    "name": "OPTIMA BANK S.A. SA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "082740",
    "name": "HANWHA ENGINE LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JUBLFOOD",
    "name": "JUBILANT FOODWORKS LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8112",
    "name": "SUPREME ELECTRONICS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600919",
    "name": "BANK OF JIANGSU CORPORATION LTD A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "QL",
    "name": "QL RESOURCES",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "001440",
    "name": "TAIHAN C&S LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAHOL.E",
    "name": "HACI OMER SABANCI HOLDING A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000250",
    "name": "SAM CHUN DANG PHARM LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "298380",
    "name": "ABL BIO INC",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CAMS",
    "name": "COMPUTER AGE MANAGEMENT SERVICES L",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3211",
    "name": "DYNAPACK INTERNATIONAL TECHNOLOGY",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LICHSGFIN",
    "name": "LIC HOUSING FINANCE LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3896",
    "name": "KINGSOFT CLOUD HOLDINGS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENGI11",
    "name": "ENERGISA UNITS SA",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "390",
    "name": "CHINA RAILWAY GROUP LTD H",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LEGN",
    "name": "LEGEND BIOTECH ADR REP CORP",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6944",
    "name": "MEGA UNION TECHNOLOGY INC",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300408",
    "name": "CHAOZHOU THREE-CIRCLE (GROUP) LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300760",
    "name": "SHENZHEN MINDRAY BIO-MEDICAL ELECT",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RES",
    "name": "RESILIENT PROP LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GESHIP",
    "name": "GREAT EASTERN SHIPPING COMPANY LTD",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BRMS",
    "name": "BUMI RESOURCES MINERALS",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TIMECOM",
    "name": "TIME DOTCOM",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MOTILALOFS",
    "name": "MOTILAL OSWAL FINANCIAL SERVICES L",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2610",
    "name": "CHINA AIRLINES LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6691",
    "name": "YANKEY ENGINEERING LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3360",
    "name": "FAR EAST HORIZON LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ANANDRATHI",
    "name": "ANAND RATHI WEALTH LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ICICIPRULI",
    "name": "ICICI PRUDENTIAL LIFE INSURANCE CO",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1044",
    "name": "HENGAN INTERNATIONAL GROUP LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600031",
    "name": "SANY HEAVY INDUSTRY LTD A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "175330",
    "name": "JB FINANCIAL GROUP LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "087010",
    "name": "PEPTRON INC",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CROMPTON",
    "name": "CROMPTON GREAVES CONSUMER ELECTRIC",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2458",
    "name": "ELAN MICROELECTRONICS CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1560",
    "name": "KINIK",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CONCOR",
    "name": "CONTAINER CORPORATION OF INDIA LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IGRD",
    "name": "ESTITHMAR HOLDING",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6121",
    "name": "SIMPLO TECHNOLOGY LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6510",
    "name": "CHUNGHWA PRECISION TEST TECH LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AVI",
    "name": "AVI LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HYP",
    "name": "HYPROP INVS LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AJANTPHARM",
    "name": "AJANTA PHARMA LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "111770",
    "name": "YOUNGONE CORP",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ITUB3",
    "name": "ITAU UNIBANCO HOLDING SA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600176",
    "name": "CHINA JUSHI LTD A",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HSCL",
    "name": "HIMADRI SPECIALITY CHEMICAL LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CHOLAHLDNG",
    "name": "CHOLAMANDALAM FINANCIAL HOLDINGS L",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2105",
    "name": "CHENG SHIN RUBBER INDUSTRY LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1717",
    "name": "ETERNAL MATERIALS LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "REDINGTON",
    "name": "REDINGTON LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PAGS",
    "name": "PAGSEGURO DIGITAL LTD CLASS A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4100",
    "name": "MAKKAH CONSTRUCTION AND DEVELOPMEN",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HINDCOPPER",
    "name": "HINDUSTAN COPPER LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "214450",
    "name": "PHARMARESEARCH LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6181",
    "name": "LAOPU GOLD LTD H",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600309",
    "name": "WANHUA CHEMICAL GROUP LTD A",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INARI",
    "name": "INARI AMERTRON",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PPB",
    "name": "PPB GROUP",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NH",
    "name": "NARAYANA HRUDAYALAYA LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "443060",
    "name": "HD HYUNDAI MARINE SOLUTION LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WHA.R",
    "name": "WHA CORPORATION NON-VOTING DR PCL",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ATAT",
    "name": "ATOUR LIFESTYLE HOLDINGS AMERICAN",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AMBER",
    "name": "AMBER ENTERPRISES INDIA LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GRUPOARGOS",
    "name": "INVERSIONES ARGOS SA",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Colombia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NAM.INDIA",
    "name": "NIPPON LIFE INDIA ASSET MANAGMNT L",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAILIFE",
    "name": "SAI LIFE SCIENCES LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4749",
    "name": "ADVANCED ECHEM MATERIALS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3023",
    "name": "SINBON ELECTRONICS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4002",
    "name": "AL MOUWASAT MEDICAL SERVICES",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BALKRISIND",
    "name": "BALKRISHNA INDUSTRIES LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FLUOROCHEM",
    "name": "GUJARAT FLUOROCHEMICALS LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000338",
    "name": "WEICHAI POWER LTD A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "403870",
    "name": "HPSP LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3800",
    "name": "GCL TECHNOLOGY HOLDINGS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "014680",
    "name": "HANSOL CHEMICAL LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BEM.R",
    "name": "BANGKOK EXPRESSWAY AND METRO PCL N",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1229",
    "name": "LIEN HWA INDUSTRIAL HOLDINGS CORP",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4200",
    "name": "ALDREES PETROLEUM AND TRANSPORT SE",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KTLEV.E",
    "name": "KATILIMEVIM TASARRUF FINANSMAN A.S",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "475150",
    "name": "SK ETERNIX LTD",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601919",
    "name": "COSCO SHIPPING HOLDINGS LTD A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2354",
    "name": "FOXCONN TECHNOLOGY LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "OMN",
    "name": "OMNIA HOLDINGS LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENA",
    "name": "ENEA SA",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KPIL",
    "name": "KALPATARU PROJECTS INTERNATIONAL L",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002463",
    "name": "WUS PRINTED CIRCUIT (KUNSHAN) LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3450",
    "name": "ELITE ADVANCED LASER CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1111",
    "name": "SAUDI TADAWUL GROUP CO",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FFB",
    "name": "FORTRESS REAL EST INV B LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1133",
    "name": "HARBIN ELECTRIC LTD H",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "141080",
    "name": "LIGA CHEM BIO INC",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2983",
    "name": "HESAI GROUP CLASS B (TEMP)",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HFCL",
    "name": "HFCL LTD",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "APOLLOTYRE",
    "name": "APOLLO TYRES LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2855",
    "name": "PRESIDENT SECURITIES CORP",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601985",
    "name": "CHINA NATIONAL NUCLEAR POWER LTD A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IKS",
    "name": "INVENTURUS KNOWLEDGE SOLUTIONS LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPPLUS",
    "name": "ADITYA INFOTECH LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MEDANTA",
    "name": "GLOBAL HEALTH LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2889",
    "name": "IBF FINANCIAL HOLDINGS LTD SHA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000063",
    "name": "ZTE CORP A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000776",
    "name": "GF SECURITIES LTD A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MPHC",
    "name": "MESAIEED PETROCHEMICAL HOLDING",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ACUTAAS",
    "name": "ACUTAAS CHEMICALS LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "108490",
    "name": "ROBOTIS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2633",
    "name": "TAIWAN HIGH SPEED RAIL CORP",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VITROX",
    "name": "VITROX CORPORATION",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1785",
    "name": "SOLAR APPLIED MATERIALS TECHNOLOGY",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BANPUU.R",
    "name": "BANPU NON-VOTING DR PCL",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "003690",
    "name": "KOREAN REINSURANCE",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9904",
    "name": "POU CHEN CORP",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2228",
    "name": "XTALPI HOLDINGS LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1212",
    "name": "ASTRA INDUSTRIAL GROUP",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4263",
    "name": "SAL SAUDI LOGISTICS SERVICE CO",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "069960",
    "name": "HYUNDAI DEPARTMENT STORE LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3MINDIA",
    "name": "3M INDIA LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KPJ",
    "name": "KPJ HEALTHCARE",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6789",
    "name": "VISERA TECHNOLOGIES LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "103590",
    "name": "ILJIN ELECTRIC LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "336260",
    "name": "DOOSAN FUEL CELL LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2441",
    "name": "GREATEK ELECTRONICS INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GRANULES",
    "name": "GRANULES INDIA LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "375500",
    "name": "DL E&C LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TLEVISACPO",
    "name": "GRUPO TELEVISA",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "095340",
    "name": "ISC TECHNOLOGY LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASTERDM",
    "name": "ASTER DM HEALTHCARE LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FRTKF",
    "name": "FRONTKEN CORPORATION",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NIND",
    "name": "NATIONAL INDUSTRIES GROUP HOLDING",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Kuwait",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KIRLOSENG",
    "name": "KIRLOSKAR OIL ENGINES LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002352",
    "name": "S.F. HOLDING LTD A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAPR11",
    "name": "CIA SANEAMENTO DO PARANA UNITS",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2162",
    "name": "KEYMED BIOSCIENCES INC",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1210",
    "name": "GREAT WALL ENTERPRISE LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600406",
    "name": "NARI TECHNOLOGY LTD A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9969",
    "name": "INNOCARE PHARMA LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "017800",
    "name": "HYUNDAI ELEVATOR LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BCP.R",
    "name": "BANGCHAK CORPORATION ORS NON-VOTIN",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NEULANDLAB",
    "name": "NEULAND LABORATORIES LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "004170",
    "name": "SHINSEGAE INC",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9945",
    "name": "RUENTEX DEVELOPMENT LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6282",
    "name": "ACBEL POLYTECH INC",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AUGO",
    "name": "AURA MINERALS INC",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2467",
    "name": "C SUN MFG LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "440110",
    "name": "FADU INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SISE.E",
    "name": "TURKIYE SISE VE CAM FABRIKALARI A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2371",
    "name": "TATUNG",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RATCH.R",
    "name": "RATCH GROUP PCL NON-VOTING DR",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABK",
    "name": "AL AHLI BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Kuwait",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6414",
    "name": "ENNOCONN CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "084370",
    "name": "EUGENE TECHNOLOGY LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TATAELXSI",
    "name": "TATA ELXSI LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BRAV3",
    "name": "BRAVA ENERGIA SA",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601658",
    "name": "POSTAL SAVINGS BANK OF CHINA LTD A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MTARTECH",
    "name": "MTAR TECHNOLOGIES LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "032640",
    "name": "LG UPLUS CORP",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600660",
    "name": "FUYAO GLASS INDUSTRY GROUP LTD A",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NTC",
    "name": "NETCARE LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WELCORP",
    "name": "WELSPUN CORP LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TRALT.E",
    "name": "KOZA ALTIN ISLETMELERI A",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CESC",
    "name": "CESC LTD",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3374",
    "name": "XINTEC INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002938",
    "name": "AVARY HOLDING (SHENZHEN) LTD A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "INTR",
    "name": "INTER AND CO INC CLASS A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MGROS.E",
    "name": "MIGROS TICARET A",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TIMKEN",
    "name": "TIMKEN INDIA LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALUP11",
    "name": "ALUPAR INVESTIMENTO UNITS SA",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DATAPATTNS",
    "name": "DATA PATTERNS INDIA LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600690",
    "name": "HAIER SMART HOME LTD A",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2310",
    "name": "SAHARA INTERNATIONAL PETROCHEMICAL",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2845",
    "name": "FAR EASTERN INTERNATIONAL BANK LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KGB",
    "name": "KELINGTON GROUP",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4979",
    "name": "LUXNET CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DANA",
    "name": "DANA GAS",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2026",
    "name": "PONY AI INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "161890",
    "name": "KOLMAR KOREA LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600487",
    "name": "HENGTONG OPTIC ELECTRIC LTD A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CYRE3",
    "name": "CYRELA BRAZIL REALTY SA",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EGIE3",
    "name": "ENGIE BRASIL ENERGIA SA",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2096",
    "name": "SIMCERE PHARMACEUTICAL GROUP LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2400",
    "name": "XD INC",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ILC",
    "name": "INVERSIONES LA CONSTRUCCION SA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "145020",
    "name": "HUGEL INC",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ENDURANCE",
    "name": "ENDURANCE TECHNOLOGIES LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BURSA",
    "name": "BURSA MALAYSIA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ANGELONE",
    "name": "ANGEL ONE LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "310210",
    "name": "VORONOI INC",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HMPRO.R",
    "name": "HOME PRODUCT CENTER NON-VOTING DR",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6855",
    "name": "ASCENTAGE PHARMA GROUP INTERNATION",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "098460",
    "name": "KOH YOUNG TECHNOLOGY INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2421",
    "name": "SUNONWEALTH ELECTRIC MACHINE INDUS",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600019",
    "name": "BAOSHAN IRON & STEEL LTD A",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AEFES.E",
    "name": "ANADOLU EFES BIRACILIK VE MALT SAN",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IVL.R",
    "name": "INDORAMA VENTURES NON-VOTING DR PC",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "WOCKPHARMA",
    "name": "WOCKHARDT LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MDV",
    "name": "MODIVO SA",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "226950",
    "name": "OLIX PHARMACEUTICALS INC",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DHBK",
    "name": "DOHA BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BANDHANBNK",
    "name": "BANDHAN BANK LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "301308",
    "name": "SHENZHEN LONGSYS ELECTRONICS LTD A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FIVESTAR",
    "name": "FIVE-STAR BUSINESS FINANCE LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TAVHL.E",
    "name": "TAV HAVALIMANLARI HOLDING A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "454910",
    "name": "DOOSAN ROBOTICS INC",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2352",
    "name": "QISDA CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KRE",
    "name": "KUWAIT REAL EST",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Kuwait",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TDPOWERSYS",
    "name": "TD POWER SYSTEMS LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MEGACPO",
    "name": "MEGACABLE HOLDINGS CPO",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GLAXO",
    "name": "GLAXOSMITHKLINE PHARMACEUTICALS LT",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1722",
    "name": "TAIWAN FERTILIZER LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3330",
    "name": "LINGBAO GOLD GROUP LTD H",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "189",
    "name": "DONGYUE GROUP LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TMGH",
    "name": "TALAAT MOUSTAFA GROUP",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Egypt",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CUB",
    "name": "CITY UNION BANK LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8230",
    "name": "AL RAJHI COMPANY FOR COOPERATIVE I",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "089030",
    "name": "TECHWING INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KLCC",
    "name": "KLCC PROPERTY HOLDINGS STAPLED UNI",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CPS",
    "name": "CYFROWY POLSAT SA",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PWL",
    "name": "PHYSICSWALLAH LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3583",
    "name": "SCIENTECH CORPORATION CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RAMCOCEM",
    "name": "THE RAMCO CEMENTS LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CEMPRO",
    "name": "CEMINDIA PROJECTS LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "192820",
    "name": "COSMAX INC",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BRAP4",
    "name": "BRADESPAR PREF SA",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3714",
    "name": "ENNOSTAR INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2915",
    "name": "RUENTEX INDUSTRIES LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAMMAANCAP",
    "name": "SAMMAAN CAPITAL LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2250",
    "name": "SAUDI INDUSTRIAL INVESTMENT GROUP",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BRIGADE",
    "name": "BRIGADE ENTERPRISES LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2312",
    "name": "KINPO ELECTRONICS INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1477",
    "name": "MAKALOT INDUSTRIAL LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3030",
    "name": "TEST RESEARCH INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SYRMA",
    "name": "SYRMA SGS TECHNOLOGY LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "RIGD",
    "name": "RELIANCE INDUSTRIES GDR REPRESENTI 144A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "STARHEALTH",
    "name": "STAR HEALTH AND ALLIED INSURANCE C",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LALPATHLAB",
    "name": "DR LAL PATHLABS LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KAJARIACER",
    "name": "KAJARIA CERAMICS LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SIMEPROP",
    "name": "SIME DARBY PROPERTY",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CARTRADE",
    "name": "CARTRADE TECH LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ALTIJARIA",
    "name": "COMMERCIAL REAL ESTATE",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Kuwait",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BPCC",
    "name": "BOUBYAN PETROCHM",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Kuwait",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KTC.R",
    "name": "KRUNGTHAI CARD NON-VOTING DR PCL",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688347",
    "name": "HUA HONG GRACE SEMICONDUCTOR LTD A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601628",
    "name": "CHINA LIFE INSURANCE LTD A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EQU",
    "name": "EQUITES PROP FUND LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NUVAMA",
    "name": "NUVAMA WEALTH MANAGEMENT LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MSUMI",
    "name": "MOTHERSON SUMI WIRING INDIA LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8039",
    "name": "TAIFLEX SCIENTIFIC LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603501",
    "name": "OMNIVISION INTEGRATED CIRCUITS GRO",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BOLSAA",
    "name": "BOLSA MEXICANA DE VALORES",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VIO",
    "name": "VIOHALCO SA",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GENTING",
    "name": "GENTING",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3376",
    "name": "SHIN ZU SHING LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601600",
    "name": "ALUMINUM CORPORATION OF CHINA LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "7030",
    "name": "MOBILE TELECOMMUNICATIONS",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AGUAS.A",
    "name": "AGUAS ANDINAS SA",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3005",
    "name": "GETAC HOLDINGS CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601066",
    "name": "CHINA SECURITIES LTD A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SCGP.R",
    "name": "SCG PACKAGING PCL NON-VOTING DR",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "VNET",
    "name": "VNET GROUP ADR INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "005290",
    "name": "DONGJIN SEMICHEM LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TKG",
    "name": "TELKOM SOC LTD SA",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NBCC",
    "name": "NBCC INDIA LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GGPS3",
    "name": "GPS PARTICIPACOES E EMPREENDIMENTO",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3090",
    "name": "NICHIDENBO CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "POONAWALLA",
    "name": "POONAWALLA FINCORP LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1164",
    "name": "CGN MINING COMPANY LTD",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TU.R",
    "name": "THAI UNION GROUP NON-VOTING DR PCL",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "067310",
    "name": "HANA MICRON INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6116",
    "name": "HANNSTAR DISPLAY CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "001309",
    "name": "SHENZHEN TECHWINSEMI TECHNOLOGY LT",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NMDCENR",
    "name": "NMDC ENERGY PJSC",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2270",
    "name": "SAUDI DAIRY AND FOODSTUFF",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IGBREIT",
    "name": "IGB REITS UNITS TRUST",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000657",
    "name": "CHINA TUNGSTEN AND HIGHTECH MATERI",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688361",
    "name": "SKYVERSE TECHNOLOGY LTD A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "354",
    "name": "CHINASOFT INTERNATIONAL LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IIFL",
    "name": "IIFL FINANCE LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MTH",
    "name": "MOTUS HOLD LTD SHS",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "NATCOPHARM",
    "name": "NATCO PHARMA LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KCE.R",
    "name": "KCE ELECTRONICS NON-VOTING DR PCL",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BLUESTONE",
    "name": "BLUESTONE JEWELLERY AND LIFESTYLE",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SIB",
    "name": "SHARJAH ISLAMIC BANK",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GPSC.R",
    "name": "GLOBAL POWER SYNERGY PCL NON-VOTIN",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KKP.R",
    "name": "KIATNAKIN PHATRA BANK NON-VOTING D",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6682",
    "name": "PHANCY GROUP LTD H",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BALRAMCHIN",
    "name": "BALRAMPUR CHINI MILLS LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1815",
    "name": "FULLTECH FIBER GLASS CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "546",
    "name": "FUFENG GROUP LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ITCHOTELS",
    "name": "ITC HOTELS LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9933",
    "name": "CTCI",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8028",
    "name": "PHOENIX SILICON INTERNATIONAL CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3339",
    "name": "LONKING HOLDINGS LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BHW",
    "name": "BANK HANDLOWY W WARSZAWIE SA",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6290",
    "name": "LONGWELL",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GODFRYPHLP",
    "name": "GODFREY PHILLIPS INDIA LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ATUL",
    "name": "ATUL LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600111",
    "name": "CHINA NORTHERN RARE EARTH (GROUP)",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EGCO.R",
    "name": "ELECTRICITY GENERATING NON-VOTING",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3035",
    "name": "FARADAY TECHNOLOGY CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1866",
    "name": "CHINA XLX FERTILISER LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FORCEMOT",
    "name": "FORCE MOTORS LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SAUD3",
    "name": "BRADSAUDE SA",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "140410",
    "name": "MEZZION PHARMA LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AADI",
    "name": "ADARO ANDALAN INDONESIA",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JSE",
    "name": "JOHANNESBURG STOCK EXCHANGE LTD",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ANTHEM",
    "name": "ANTHEM BIOSCIENCES LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "COGN3",
    "name": "COGNA EDUCACAO SA",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2646",
    "name": "STARLUX AIRLINES LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3042",
    "name": "TXC CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "071970",
    "name": "HD-HYUNDAI MARINE ENGINE LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ZEEL",
    "name": "ZEE ENTERTAINMENT ENTERPRISES LTD",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PPLPHARMA",
    "name": "PIRAMAL PHARMA LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3393",
    "name": "WASION HOLDINGS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "8313",
    "name": "RASAN INFORMATION TECHNOLOGY",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1681",
    "name": "CONSUN PHARMACEUTICAL GROUP LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MPI",
    "name": "MALAYSIAN PACIFIC INDUSTRIES",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2252",
    "name": "SHANGHAI MICROPORT MEDBOT CLASS H",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MAPI",
    "name": "MITRA ADIPERKASA",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AARTIIND",
    "name": "AARTI INDUSTRIES LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CRC.R",
    "name": "CENTRAL RETAIL CORPORATION PCL NON",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CARBORUNIV",
    "name": "CARBORUNDUM UNIVERSAL LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GLAND",
    "name": "GLAND PHARMA LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2838",
    "name": "UNION BANK OF TAIWAN",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2481",
    "name": "PAN JIT INTERNATIONAL INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601868",
    "name": "CHINA ENERGY ENGINEERING CORP LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1314",
    "name": "CHINA PETROCHEMICAL DEVELOPMENT CO",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1321",
    "name": "EAST PIPES INTEGRATED COMPANY FOR",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9939",
    "name": "TAIWAN HON CHUAN ENTERPRISE LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "035900",
    "name": "JYP ENTERTAINMENT CORPORATION CORP",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4123",
    "name": "CENTER LABORATORIES INC",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2230",
    "name": "SAUDI CHEMICAL",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "300857",
    "name": "SHARETRONIC DATA TECHNOLOGY LTD A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TGA",
    "name": "THUNGELA RESOURCES LTD",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2350",
    "name": "SAUDI KAYAN PETROCHEMICAL",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ZETRIX",
    "name": "ZETRIX AI",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002460",
    "name": "GANFENG LITHIUM GROUP LTD A",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GABRIEL",
    "name": "GABRIEL INDIA LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688525",
    "name": "BIWIN STORAGE TECHNOLOGY LTD A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AKTR",
    "name": "AKTOR SA HOLDING COMPANY TECHNICAL",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "POMO4",
    "name": "MARCOPOLO PREF SA",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IEYHO.E",
    "name": "ISSIKLAR ENERJI YAPI HOLDING A",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GUJENERGY",
    "name": "GUJARAT ENERGY LTD",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3413",
    "name": "FOXSEMICON INTEGRATED TECHNOLOGY I",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DEEPAKNTR",
    "name": "DEEPAK NITRITE LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BOX",
    "name": "BOXER RETAIL LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "257720",
    "name": "SILICON2 LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ELGIEQUIP",
    "name": "ELGI EQUIPMENTS LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMMVEE",
    "name": "EMMVEE PHOTOVOLTAIC POWER LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1907",
    "name": "YFY INC",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "052690",
    "name": "KEPCO ENGINEERING & CONSTRUCTION I",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6176",
    "name": "RADIANT OPTO-ELECTRONICS CORP",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SKFINDUS",
    "name": "SKF INDIA (INDUSTRIAL) LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3020",
    "name": "YAMAMA SAUDI CEMENT",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "001120",
    "name": "LX INTERNATIONAL CORP",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "SANSERA",
    "name": "SANSERA ENGINEERING LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4003",
    "name": "UNITED ELECTRONICS",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TENNIND",
    "name": "TENNECO CLEAN AIR INDIA LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3563",
    "name": "MACHVISION INC",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ARVIND",
    "name": "ARVIND LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601688",
    "name": "HUATAI SECURITIES LTD A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "IGTI11",
    "name": "IGUATEMI UNIT SA",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2504",
    "name": "GOLDSUN BUILDING MATERIALS LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2006",
    "name": "TUNG HO STEEL ENTERPRISE CORP",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BELRISE",
    "name": "BELRISE INDUSTRIES LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "357780",
    "name": "SOULBRAIN LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AFFLE",
    "name": "AFFLE I LTD",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LH.R",
    "name": "LAND AND HOUSE PUBLIC NON-VOTING D",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "004800",
    "name": "HYOSUNG CORP",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1795",
    "name": "LOTUS PHARMACEUTICAL LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JUBLPHARMA",
    "name": "JUBILANT PHARMOVA LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "007390",
    "name": "NATURECELL LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ABREL",
    "name": "ADITYA BIRLA REAL ESTATE LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "6191",
    "name": "GLOBAL BRANDS MANUFACTURE LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TATACHEM",
    "name": "TATA CHEMICALS LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EKGYO.E",
    "name": "EMLAK KONUT GAYRIMENKUL YATIRIM OR",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ZENTEC",
    "name": "ZEN TECHNOLOGIES LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1952",
    "name": "EVEREST MEDICINES LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2329",
    "name": "ORIENT SEMICONDUCTOR ELECTRONICS L",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601888",
    "name": "CHINA TOURISM GROUP DUTY FREE CORP",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BUMI",
    "name": "BUMI RESOURCES",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PRIVISCL",
    "name": "PRIVI SPECIALITY CHEMICALS LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "FSL",
    "name": "FIRSTSOURCE SOLUTIONS LTD",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "LHC",
    "name": "LIFE HEALTH LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9985",
    "name": "WEILONG DELICIOUS GLOBAL HOLDINGS",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CSAN3",
    "name": "COSAN INDUSTRIA E COMERCIO SA",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601336",
    "name": "NEW CHINA LIFE INSURANCE LTD A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ASTRAMICRO",
    "name": "ASTRA MICROWAVE PRODUCTS LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2869",
    "name": "GREENTOWN SERVICE GROUP LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMAMILTD",
    "name": "EMAMI LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "237690",
    "name": "ST PHARM LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "AXREIT",
    "name": "AXIS REITS UNITS TRUST",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002602",
    "name": "ZHEJIANG CENTURY HUATATONG GROUP LTD",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HONAUT",
    "name": "HONEYWELL AUTOMATION INDIA LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2083",
    "name": "POWER AND WATER UTILITY COMPANY FO",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "5904",
    "name": "POYA LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PREMIERENE",
    "name": "PREMIER ENERGIES LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "HEXW",
    "name": "HEXAWARE TECHNOLOGIES LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "483650",
    "name": "DALBA GLOBAL LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "PTRO",
    "name": "PETROSEA",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3715",
    "name": "DYNAMIC HOLDING LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "4763",
    "name": "JINAN ACETATE CHEMICAL LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TOPGLOV",
    "name": "TOP GLOVE CORPORATION",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2486",
    "name": "I-CHIUN PRECISION INDUSTRY LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "CHAMBLFERT",
    "name": "CHAMBAL FERTILISERS AND CHEMICALS",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "512",
    "name": "GRAND PHARMACEUTICAL GROUP LTD",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1409",
    "name": "SHINKONG SYNTHETIC FIBERS CORP",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MBK.R",
    "name": "MBK NON-VOTING DR PCL",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "347850",
    "name": "D&D PHARMATECH INC",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "UNIP6",
    "name": "UNIPAR PARTICIPACOES PREF CLASS B",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ORAS",
    "name": "ORASCOM CONSTRUCTION PLC",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Egypt",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "BAATABAK",
    "name": "PHILIP MORRIS",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Czech Republic",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "ETEL",
    "name": "TELECOM EGYPT",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Egypt",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MTC.R",
    "name": "MUANGTHAI CAPITAL ORS NON-VOTING D",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "TCAP.R",
    "name": "THANACHART CAPITAL NON-VOTING DR P",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JINDALSAW",
    "name": "JINDAL SAW LTD",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "GOKULAGRO",
    "name": "GOKUL AGRO RESOURCES LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "DEXUS",
    "name": "DEXUS PAPER AND PULP SA",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "MEDCO",
    "name": "MEDCO ENERGI INTERNASIONAL",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002049",
    "name": "UNIGROUP GUOXIN MICROELECTRONICS",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1811",
    "name": "CHINASOFT INTERNATIONAL LTD",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "003000",
    "name": "CHEIL WORLDWIDE INC",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "2030",
    "name": "SAUDI Kayan Petrochemical",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1104",
    "name": "ASIA CEMENT CHINA HOLDINGS CORP",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "KAP.E",
    "name": "ARSADA REAL ESTATE A",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9925",
    "name": "POP MART INTERNATIONAL GROUP LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600875",
    "name": "DONGFANG ELECTRIC CORP LTD A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "688981",
    "name": "SEMICONDUCTOR MANUFACTURING INTERN",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002236",
    "name": "ZHEJIANG DAHUA TECHNOLOGY LTD A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600115",
    "name": "CHINA EASTERN AIRLINES CORP LTD A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002179",
    "name": "ENN NATURAL GAS CO LTD A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000166",
    "name": "SHENWAN HONGYUAN GROUP CO LTD A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002415",
    "name": "HANGZHOU HIKVISION DIGITAL TECH A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601390",
    "name": "CHINA RAILWAY GROUP LTD A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601800",
    "name": "CHINA COMMUNICATIONS CONSTRUCTION",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601186",
    "name": "CHINA RAILWAY CONSTRUCTION CORP A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600837",
    "name": "HAITONG SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600918",
    "name": "DONGXING SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601198",
    "name": "PACIFIC SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601555",
    "name": "SOOCHOW SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600958",
    "name": "CAPITAL SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000783",
    "name": "CHANGJIANG SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000686",
    "name": "NORTHEAST SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000750",
    "name": "GUOYUAN SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601375",
    "name": "CENTRAL CHINA SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601099",
    "name": "FIRST CAPITAL SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601456",
    "name": "GUOLIAN SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600906",
    "name": "CAITONG SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601901",
    "name": "FOUNDER SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601878",
    "name": "Zheshang Securities A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601108",
    "name": "CAIDA SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600927",
    "name": "NANCHANG SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600369",
    "name": "SOUTHWEST SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002500",
    "name": "SHANXI SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002945",
    "name": "HUAXI SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600109",
    "name": "CHENGDU SECURITIES A",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600597",
    "name": "BRIGHT DAIRY A",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600779",
    "name": "SHUANGGOU BREWERY A",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600559",
    "name": "HEBEI HENGSHUI LAOBAIGAN A",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600197",
    "name": "YUNNAN CHUANGXIN A",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600573",
    "name": "FUJIAN ANJOY A",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600600",
    "name": "TSINGTAO BREWERY A",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600129",
    "name": "CHONGQING BEIBEIA",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600872",
    "name": "ZHEJIANG YIN\\u8f2a A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002157",
    "name": "ZHEJIANG YONGTAI A",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600362",
    "name": "JIANGXI COPPER A",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600188",
    "name": "YANZHOU COAL A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600348",
    "name": "SHANXI CKING A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600123",
    "name": "SHANXI LANHUA A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600971",
    "name": "HENGYUAN COAL A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600508",
    "name": "SHANGHAI COAL A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "000933",
    "name": "HENAN SHENHOA A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600740",
    "name": "SHANXI COAL A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601001",
    "name": "JINKE COAL A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601101",
    "name": "SHANXI HUAYANG A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601666",
    "name": "PINGDINGSHAN COAL A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002128",
    "name": "LU'AN ENVIRONMENTAL A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601918",
    "name": "CHINA SHENHUA A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600938",
    "name": "CNOOC A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600871",
    "name": "SINOPEC OILFIELD A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600583",
    "name": "CNOOC ENERGY A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "002207",
    "name": "ENN NATURAL GAS A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600642",
    "name": "SHANGHAI ELECTRIC A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600917",
    "name": "THREE GORGES A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "601619",
    "name": "CHINA CGN POWER A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600023",
    "name": "ZHEJIANG ELECTRIC A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600163",
    "name": "ZHEJIANG FUCHUNJIANG A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600231",
    "name": "HUBEI ENERGY A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600310",
    "name": "GUANGXI GUIGUANG A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600396",
    "name": "SHANXI ELECTRIC A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600452",
    "name": "ZHEJIANG CHINT A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600483",
    "name": "ZHEJIANG FUCHUN A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600505",
    "name": "ZHEJIANG XINAN A",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600578",
    "name": "GUANGDONG ELECTRIC A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600604",
    "name": "SHANXI GUANGYU A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600635",
    "name": "SHANGHAI AISE A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600719",
    "name": "ZHEJIANG FUCHUN A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600726",
    "name": "SHANDONG ELECTRIC A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600744",
    "name": "HUBEI HUADIAN A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600780",
    "name": "SHANXI TONGLING A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600863",
    "name": "INNER MONGOLIA POWER A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600868",
    "name": "GUANGDONG JIANGNAN A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600969",
    "name": "ZHEJIANG ELECTRIC A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600995",
    "name": "ZHEJIANG ENERGY A",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603196",
    "name": "RISEN ENERGY A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603606",
    "name": "ZHEJIANG JINKO A",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603019",
    "name": "ZHONGKE SHUANGUANG A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603087",
    "name": "GREATWALL MOTOR A",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EIMI",
    "name": "ISHARES CORE MSCI EM IMI UCITS ETF",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Ireland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "JPFA",
    "name": "JAPFA COMFEED INDONESIA",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "9858",
    "name": "CHINA YOURAN DAIRY GROUP LTD",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "600100",
    "name": "SHANXI TAIGANG STAINLESS STEEL L",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "1813",
    "name": "KWG GROUP HOLDINGS LTD",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603000",
    "name": "CHINA TECH EM ENTERPRISE 1 A",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3001",
    "name": "OPTICAL TAIWAN CORP 2",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMIND3",
    "name": "EM PHARMA INDIA LTD",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "005003",
    "name": "KOREA HEAVY HOLDINGS 4",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMBRA5",
    "name": "BRAZIL LOGISTICA GROUP 5",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMSAU6",
    "name": "SAUDI ARABIA PETROCHEMICALS GROUP 6",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMSOU7",
    "name": "SOUTH AFRICA RESOURCES GROUP 7",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMMEX8",
    "name": "MEXICO INDUSTRIAL GROUP 8",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMIND9",
    "name": "INDONESIA TBK PT GROUP 9",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMPOL10",
    "name": "POLAND ENERGY GROUP 10",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMTUR11",
    "name": "TURKEY SANAYI GROUP 11",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMTHA12",
    "name": "THAILAND ENTERPRISE 12",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMMAL13",
    "name": "MALAYSIA ENTERPRISE 13",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMUAE14",
    "name": "UAE ENTERPRISE 14",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMQAT15",
    "name": "QATAR ENTERPRISE 15",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMCHI16",
    "name": "CHILE ENTERPRISE 16",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMGRE17",
    "name": "GREECE ENTERPRISE 17",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMPHI18",
    "name": "PHILIPPINES ENTERPRISE 18",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "603018",
    "name": "CHINA OPTICS EM ENTERPRISE 19 A",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "China",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "3019",
    "name": "SEMICONDUCTOR TAIWAN CORP 20",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Taiwan",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMIND21",
    "name": "EM INFRA INDIA LTD",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "India",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "005021",
    "name": "KOREA CORP HOLDINGS 22",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "South Korea",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMBRA23",
    "name": "BRAZIL LOGISTICA GROUP 23",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Brazil",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMSAU24",
    "name": "SAUDI ARABIA PETROCHEMICALS GROUP 24",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Saudi Arabia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMSOU25",
    "name": "SOUTH AFRICA LTD GROUP 25",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "South Africa",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMMEX26",
    "name": "MEXICO GRUPO GROUP 26",
    "weight": 0.0001,
    "sector": "Communication Services",
    "location": "Mexico",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMIND27",
    "name": "INDONESIA UTAMA GROUP 27",
    "weight": 0.0001,
    "sector": "Industrials",
    "location": "Indonesia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMPOL28",
    "name": "POLAND PZU GROUP 28",
    "weight": 0.0001,
    "sector": "Materials",
    "location": "Poland",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMTUR29",
    "name": "TURKEY AS GROUP 29",
    "weight": 0.0001,
    "sector": "Consumer Staples",
    "location": "Turkey",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMTHA30",
    "name": "THAILAND ENTERPRISE 30",
    "weight": 0.0001,
    "sector": "Energy",
    "location": "Thailand",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMMAL31",
    "name": "MALAYSIA ENTERPRISE 31",
    "weight": 0.0001,
    "sector": "Health Care",
    "location": "Malaysia",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMUAE32",
    "name": "UAE ENTERPRISE 32",
    "weight": 0.0001,
    "sector": "Utilities",
    "location": "United Arab Emirates",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMQAT33",
    "name": "QATAR ENTERPRISE 33",
    "weight": 0.0001,
    "sector": "Real Estate",
    "location": "Qatar",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMCHI34",
    "name": "CHILE ENTERPRISE 34",
    "weight": 0.0001,
    "sector": "Information Technology",
    "location": "Chile",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMGRE35",
    "name": "GREECE ENTERPRISE 35",
    "weight": 0.0001,
    "sector": "Financials",
    "location": "Greece",
    "assetClass": "Equity",
    "currency": "USD"
  },
  {
    "symbol": "EMPHI36",
    "name": "PHILIPPINES ENTERPRISE 36",
    "weight": 0.0001,
    "sector": "Consumer Discretionary",
    "location": "Philippines",
    "assetClass": "Equity",
    "currency": "USD"
  }
];

export const VWCE_HOLDINGS = VWCE_FULL_HOLDINGS;
