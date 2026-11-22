// iShares $ Floating Rate Bond UCITS ETF USD (Acc) - ISIN: IE00BDFGJ627
// Full holdings list (~553 holdings) updated July 2026

export interface ETFHolding {
  name: string;
  ticker: string;
  weight: number;
  sector?: string;
  country?: string;
  assetClass?: string;
  coupon?: number;
  currency?: string;
}

export interface SectorAllocation {
  sector: string;
  weight: number;
}

export interface CountryAllocation {
  country: string;
  weight: number;
}

export const FLOA_FULL_HOLDINGS: ETFHolding[] = [
  {
    "name": "ICS USD LEAF AGENCY DIST",
    "ticker": "BLK",
    "weight": 1.93,
    "sector": "Cash and/or Derivatives",
    "country": "Ireland",
    "assetClass": "Money Market",
    "coupon": 3.73,
    "currency": "USD"
  },
  {
    "name": "EUROPEAN BANK FOR RECONSTRUCTION A MTN",
    "ticker": "EBRD",
    "weight": 1.18,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.0,
    "currency": "USD"
  },
  {
    "name": "INTERNATIONAL BANK FOR RECONSTRUCT MTN",
    "ticker": "IBRD",
    "weight": 1.13,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.1,
    "currency": "USD"
  },
  {
    "name": "EUROPEAN BANK FOR RECONSTRUCTION A MTN",
    "ticker": "EBRD",
    "weight": 1.11,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.97,
    "currency": "USD"
  },
  {
    "name": "INTERNATIONAL BANK FOR RECONSTRUCT",
    "ticker": "IBRD",
    "weight": 0.85,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.21,
    "currency": "USD"
  },
  {
    "name": "INTERNATIONAL BANK FOR RECONSTRUCT MTN",
    "ticker": "IBRD",
    "weight": 0.85,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.9,
    "currency": "USD"
  },
  {
    "name": "ASIAN DEVELOPMENT BANK MTN",
    "ticker": "ASIA",
    "weight": 0.83,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.02,
    "currency": "USD"
  },
  {
    "name": "EUROPEAN BANK FOR RECONSTRUCTION A MTN",
    "ticker": "EBRD",
    "weight": 0.83,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.04,
    "currency": "USD"
  },
  {
    "name": "INTER-AMERICAN DEVELOPMENT BANK MTN",
    "ticker": "IADB",
    "weight": 0.82,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.04,
    "currency": "USD"
  },
  {
    "name": "INTERNATIONAL BANK FOR RECONSTRUCT",
    "ticker": "IBRD",
    "weight": 0.81,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.91,
    "currency": "USD"
  },
  {
    "name": "INTER-AMERICAN DEVELOPMENT BANK",
    "ticker": "IADB",
    "weight": 0.81,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.95,
    "currency": "USD"
  },
  {
    "name": "INTER-AMERICAN DEVELOPMENT BANK",
    "ticker": "IADB",
    "weight": 0.81,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.99,
    "currency": "USD"
  },
  {
    "name": "INTER-AMERICAN DEVELOPMENT BANK MTN",
    "ticker": "IADB",
    "weight": 0.81,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.95,
    "currency": "USD"
  },
  {
    "name": "INTERNATIONAL FINANCE CORP MTN",
    "ticker": "IFC",
    "weight": 0.81,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.99,
    "currency": "USD"
  },
  {
    "name": "INTER-AMERICAN DEVELOPMENT BANK MTN",
    "ticker": "IADB",
    "weight": 0.78,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.1,
    "currency": "USD"
  },
  {
    "name": "INTER-AMERICAN DEVELOPMENT BANK MTN",
    "ticker": "IADB",
    "weight": 0.78,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.97,
    "currency": "USD"
  },
  {
    "name": "INTERNATIONAL FINANCE CORP MTN",
    "ticker": "IFC",
    "weight": 0.76,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.99,
    "currency": "USD"
  },
  {
    "name": "KOMMUNALBANKEN AS MTN 144A",
    "ticker": "KBN",
    "weight": 0.76,
    "sector": "Owned No Guarantee",
    "country": "Norway",
    "assetClass": "Fixed Income",
    "coupon": 4.1,
    "currency": "USD"
  },
  {
    "name": "INTERNATIONAL BANK FOR RECONSTRUCT",
    "ticker": "IBRD",
    "weight": 0.72,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.97,
    "currency": "USD"
  },
  {
    "name": "KOMMUNALBANKEN AS MTN 144A",
    "ticker": "KBN",
    "weight": 0.69,
    "sector": "Owned No Guarantee",
    "country": "Norway",
    "assetClass": "Fixed Income",
    "coupon": 4.01,
    "currency": "USD"
  },
  {
    "name": "INTERNATIONAL BANK FOR RECONSTRUCT MTN",
    "ticker": "IBRD",
    "weight": 0.62,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.06,
    "currency": "USD"
  },
  {
    "name": "INTERNATIONAL BANK FOR RECONSTRUCT",
    "ticker": "IBRD",
    "weight": 0.6,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.99,
    "currency": "USD"
  },
  {
    "name": "INTERNATIONAL BANK FOR RECONSTRUCT MTN",
    "ticker": "IBRD",
    "weight": 0.53,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.96,
    "currency": "USD"
  },
  {
    "name": "INTERNATIONAL BANK FOR RECONSTRUCT MTN",
    "ticker": "IBRD",
    "weight": 0.51,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.95,
    "currency": "USD"
  },
  {
    "name": "ASIAN DEVELOPMENT BANK MTN",
    "ticker": "ASIA",
    "weight": 0.47,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.6,
    "currency": "USD"
  },
  {
    "name": "KOREA DEVELOPMENT BANK",
    "ticker": "KDB",
    "weight": 0.45,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.38,
    "currency": "USD"
  },
  {
    "name": "INTER-AMERICAN DEVELOPMENT BANK MTN",
    "ticker": "IADB",
    "weight": 0.45,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.88,
    "currency": "USD"
  },
  {
    "name": "AUSTRALIA AND NEW ZEALAND BANKING MTN 144A",
    "ticker": "ANZ",
    "weight": 0.44,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.29,
    "currency": "USD"
  },
  {
    "name": "DBS GROUP HOLDINGS LTD MTN 144A",
    "ticker": "DBSSP",
    "weight": 0.42,
    "sector": "Banking",
    "country": "Singapore",
    "assetClass": "Fixed Income",
    "coupon": 4.23,
    "currency": "USD"
  },
  {
    "name": "COMMONWEALTH BANK OF AUSTRALIA FRN MTN 144A",
    "ticker": "CBAAU",
    "weight": 0.41,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.43,
    "currency": "USD"
  },
  {
    "name": "WELLS FARGO & COMPANY (FRN) MTN",
    "ticker": "WFC",
    "weight": 0.39,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.67,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY (FRN) MTN",
    "ticker": "MS",
    "weight": 0.39,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.64,
    "currency": "USD"
  },
  {
    "name": "COMMONWEALTH BANK OF AUSTRALIA MTN 144A",
    "ticker": "CBAAU",
    "weight": 0.38,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.09,
    "currency": "USD"
  },
  {
    "name": "HSBC HOLDINGS PLC",
    "ticker": "HSBC",
    "weight": 0.38,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 5.19,
    "currency": "USD"
  },
  {
    "name": "INTERNATIONAL FINANCE CORPORATION MTN",
    "ticker": "IFC",
    "weight": 0.38,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.0,
    "currency": "USD"
  },
  {
    "name": "EUROPEAN INVESTMENT BANK 144A",
    "ticker": "EIB",
    "weight": 0.37,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.68,
    "currency": "USD"
  },
  {
    "name": "AMAZON.COM INC",
    "ticker": "AMZN",
    "weight": 0.36,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.08,
    "currency": "USD"
  },
  {
    "name": "KOREA ELECTRIC POWER CORP RegS",
    "ticker": "KORELE",
    "weight": 0.35,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.24,
    "currency": "USD"
  },
  {
    "name": "EUROPEAN INVESTMENT BANK",
    "ticker": "EIB",
    "weight": 0.35,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.99,
    "currency": "USD"
  },
  {
    "name": "COOPERATIEVE RABOBANK UA (NEW YORK",
    "ticker": "RABOBK",
    "weight": 0.34,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 4.34,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY PRIVATE BANK (FRN)",
    "ticker": "MS",
    "weight": 0.33,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.37,
    "currency": "USD"
  },
  {
    "name": "SWEDISH EXPORT CREDIT CORP MTN",
    "ticker": "SEK",
    "weight": 0.33,
    "sector": "Owned No Guarantee",
    "country": "Sweden",
    "assetClass": "Fixed Income",
    "coupon": 3.99,
    "currency": "USD"
  },
  {
    "name": "C CITIBANK NA",
    "ticker": "C CITIBANK NA",
    "weight": 0.33,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.41,
    "currency": "USD"
  },
  {
    "name": "AMAZON.COM INC",
    "ticker": "AMZN",
    "weight": 0.33,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.24,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY BANK NA FRN",
    "ticker": "MS",
    "weight": 0.33,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.54,
    "currency": "USD"
  },
  {
    "name": "GOLDMAN SACHS GROUP INC/THE MTN",
    "ticker": "GS",
    "weight": 0.31,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 5.68,
    "currency": "USD"
  },
  {
    "name": "ABBOTT LABORATORIES",
    "ticker": "ABT",
    "weight": 0.31,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.13,
    "currency": "USD"
  },
  {
    "name": "WESTPAC BANKING CORP MTN 144A",
    "ticker": "WSTP",
    "weight": 0.31,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.33,
    "currency": "USD"
  },
  {
    "name": "EXPORT-IMPORT BANK OF KOREA",
    "ticker": "EIBKOR",
    "weight": 0.31,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.44,
    "currency": "USD"
  },
  {
    "name": "TEMASEK FINANCIAL (I) LTD MTN 144A",
    "ticker": "TEMASE",
    "weight": 0.3,
    "sector": "Owned No Guarantee",
    "country": "Singapore",
    "assetClass": "Fixed Income",
    "coupon": 4.0,
    "currency": "USD"
  },
  {
    "name": "NATIONAL AUSTRALIA BANK LTD MTN 144A",
    "ticker": "NAB",
    "weight": 0.3,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.24,
    "currency": "USD"
  },
  {
    "name": "BANK OF AMERICA CORP MTN",
    "ticker": "BAC",
    "weight": 0.3,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.47,
    "currency": "USD"
  },
  {
    "name": "BANCO SANTANDER SA",
    "ticker": "SANTAN",
    "weight": 0.3,
    "sector": "Banking",
    "country": "Spain",
    "assetClass": "Fixed Income",
    "coupon": 4.71,
    "currency": "USD"
  },
  {
    "name": "JPMORGAN CHASE & CO (FRN)",
    "ticker": "JPM",
    "weight": 0.29,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.42,
    "currency": "USD"
  },
  {
    "name": "AUSTRALIA AND NEW ZEALAND BANKING MTN 144A",
    "ticker": "ANZ",
    "weight": 0.29,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.41,
    "currency": "USD"
  },
  {
    "name": "NATIONAL AUSTRALIA BANK LTD MTN 144A",
    "ticker": "NAB",
    "weight": 0.29,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 0.0,
    "currency": "USD"
  },
  {
    "name": "SWEDISH EXPORT CREDIT CORP MTN",
    "ticker": "SEK",
    "weight": 0.29,
    "sector": "Owned No Guarantee",
    "country": "Sweden",
    "assetClass": "Fixed Income",
    "coupon": 4.67,
    "currency": "USD"
  },
  {
    "name": "SUMITOMO MITSUI TRUST BANK LTD FRN MTN 144A",
    "ticker": "SUMITR",
    "weight": 0.28,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.61,
    "currency": "USD"
  },
  {
    "name": "C CITIGROUP INC (FRN)",
    "ticker": "C CITIGROUP INC (FRN)",
    "weight": 0.28,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.5,
    "currency": "USD"
  },
  {
    "name": "AUSTRALIA AND NEW ZEALAND BANKING MTN 144A",
    "ticker": "ANZ",
    "weight": 0.28,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.24,
    "currency": "USD"
  },
  {
    "name": "JPMORGAN CHASE & CO (FRN)",
    "ticker": "JPM",
    "weight": 0.28,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.52,
    "currency": "USD"
  },
  {
    "name": "INTERNATIONAL BANK FOR RECONSTRUCT MTN",
    "ticker": "IBRD",
    "weight": 0.28,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.04,
    "currency": "USD"
  },
  {
    "name": "JPMORGAN CHASE & CO FRN",
    "ticker": "JPM",
    "weight": 0.28,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.53,
    "currency": "USD"
  },
  {
    "name": "GOLDMAN SACHS GROUP INC/THE",
    "ticker": "GS",
    "weight": 0.28,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.32,
    "currency": "USD"
  },
  {
    "name": "COOPERATIEVE RABOBANK UA (NEW YORK MTN",
    "ticker": "RABOBK",
    "weight": 0.27,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 4.25,
    "currency": "USD"
  },
  {
    "name": "MACQUARIE BANK LTD MTN 144A",
    "ticker": "MQGAU",
    "weight": 0.27,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.37,
    "currency": "USD"
  },
  {
    "name": "PUBLIC STORAGE OPERATING CO",
    "ticker": "PSA",
    "weight": 0.27,
    "sector": "Reits",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.71,
    "currency": "USD"
  },
  {
    "name": "ABN AMRO BANK NV (FRN) MTN 144A",
    "ticker": "ABNANV",
    "weight": 0.27,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 5.5,
    "currency": "USD"
  },
  {
    "name": "ASIAN DEVELOPMENT BANK MTN",
    "ticker": "ASIA",
    "weight": 0.27,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.9,
    "currency": "USD"
  },
  {
    "name": "LLOYDS BANKING GROUP PLC (FRN)",
    "ticker": "LLOYDS",
    "weight": 0.26,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 5.23,
    "currency": "USD"
  },
  {
    "name": "EXPORT-IMPORT BANK OF KOREA",
    "ticker": "EIBKOR",
    "weight": 0.26,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.06,
    "currency": "USD"
  },
  {
    "name": "AMERICAN EXPRESS COMPANY (FRN)",
    "ticker": "AXP",
    "weight": 0.26,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.53,
    "currency": "USD"
  },
  {
    "name": "WESTPAC NEW ZEALAND LTD MTN 144A",
    "ticker": "WSTPNZ",
    "weight": 0.26,
    "sector": "Banking",
    "country": "New Zealand",
    "assetClass": "Fixed Income",
    "coupon": 4.37,
    "currency": "USD"
  },
  {
    "name": "WELLS FARGO & COMPANY (FRN) MTN",
    "ticker": "WFC",
    "weight": 0.26,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 3.64,
    "currency": "USD"
  },
  {
    "name": "WESTPAC BANKING CORP",
    "ticker": "WSTP",
    "weight": 0.26,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.42,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY (FRN) MTN",
    "ticker": "MS",
    "weight": 0.26,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.4,
    "currency": "USD"
  },
  {
    "name": "WESTPAC BANKING CORP",
    "ticker": "WSTP",
    "weight": 0.25,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.06,
    "currency": "USD"
  },
  {
    "name": "ROYAL BANK OF CANADA MTN",
    "ticker": "RY",
    "weight": 0.25,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.91,
    "currency": "USD"
  },
  {
    "name": "HYUNDAI CAPITAL AMERICA MTN 144A",
    "ticker": "HYNMTR",
    "weight": 0.25,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.66,
    "currency": "USD"
  },
  {
    "name": "ING GROEP NV (FRN)",
    "ticker": "INTNED",
    "weight": 0.25,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 5.27,
    "currency": "USD"
  },
  {
    "name": "HSBC HOLDINGS PLC FRN",
    "ticker": "HSBC",
    "weight": 0.25,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.66,
    "currency": "USD"
  },
  {
    "name": "WESTPAC BANKING CORP",
    "ticker": "WSTP",
    "weight": 0.25,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.43,
    "currency": "USD"
  },
  {
    "name": "AUSTRALIA AND NEW ZEALAND BANKING MTN 144A",
    "ticker": "ANZ",
    "weight": 0.25,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.09,
    "currency": "USD"
  },
  {
    "name": "MACQUARIE BANK LTD MTN 144A",
    "ticker": "MQGAU",
    "weight": 0.24,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.1,
    "currency": "USD"
  },
  {
    "name": "HSBC HOLDINGS PLC (FRN)",
    "ticker": "HSBC",
    "weight": 0.24,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 5.19,
    "currency": "USD"
  },
  {
    "name": "NATIONAL AUSTRALIA BANK LTD FRN MTN 144A",
    "ticker": "NAB",
    "weight": 0.24,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.24,
    "currency": "USD"
  },
  {
    "name": "UBS GROUP AG (FRN) 144A",
    "ticker": "UBS",
    "weight": 0.24,
    "sector": "Banking",
    "country": "Switzerland",
    "assetClass": "Fixed Income",
    "coupon": 4.47,
    "currency": "USD"
  },
  {
    "name": "SUMITOMO MITSUI TRUST BANK LTD FRN MTN 144A",
    "ticker": "SUMITR",
    "weight": 0.24,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.77,
    "currency": "USD"
  },
  {
    "name": "JPMORGAN CHASE & CO (FRN)",
    "ticker": "JPM",
    "weight": 0.24,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.81,
    "currency": "USD"
  },
  {
    "name": "AMERICAN EXPRESS COMPANY (FRN)",
    "ticker": "AXP",
    "weight": 0.24,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 0.0,
    "currency": "USD"
  },
  {
    "name": "BANK OF NEW ZEALAND MTN 144A",
    "ticker": "BZLNZ",
    "weight": 0.24,
    "sector": "Banking",
    "country": "New Zealand",
    "assetClass": "Fixed Income",
    "coupon": 4.41,
    "currency": "USD"
  },
  {
    "name": "COMMONWEALTH BANK OF AUSTRALIA MTN 144A",
    "ticker": "CBAAU",
    "weight": 0.24,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.26,
    "currency": "USD"
  },
  {
    "name": "WELLS FARGO & COMPANY (FRN) MTN",
    "ticker": "WFC",
    "weight": 0.24,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.4,
    "currency": "USD"
  },
  {
    "name": "NATIONAL AUSTRALIA BANK LTD MTN 144A",
    "ticker": "NAB",
    "weight": 0.23,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.36,
    "currency": "USD"
  },
  {
    "name": "EXPORT DEVELOPMENT CANADA MTN",
    "ticker": "EDC",
    "weight": 0.23,
    "sector": "Government Guaranteed",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 3.9,
    "currency": "USD"
  },
  {
    "name": "SUMITOMO MITSUI FINANCIAL GROUP IN",
    "ticker": "SUMIBK",
    "weight": 0.23,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.64,
    "currency": "USD"
  },
  {
    "name": "SKANDINAVISKA ENSKILDA BANKEN AB 144A",
    "ticker": "SEB",
    "weight": 0.23,
    "sector": "Banking",
    "country": "Sweden",
    "assetClass": "Fixed Income",
    "coupon": 4.52,
    "currency": "USD"
  },
  {
    "name": "C CITIBANK NA (FRN)",
    "ticker": "C CITIBANK NA (FRN)",
    "weight": 0.23,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.34,
    "currency": "USD"
  },
  {
    "name": "SVENSKA HANDELSBANKEN AB MTN 144A",
    "ticker": "SHBASS",
    "weight": 0.23,
    "sector": "Banking",
    "country": "Sweden",
    "assetClass": "Fixed Income",
    "coupon": 4.29,
    "currency": "USD"
  },
  {
    "name": "JPMORGAN CHASE BANK NA",
    "ticker": "JPM",
    "weight": 0.23,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.63,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY BANK NA (FRN)",
    "ticker": "MS",
    "weight": 0.23,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.3,
    "currency": "USD"
  },
  {
    "name": "ABBVIE INC (FRN)",
    "ticker": "ABBV",
    "weight": 0.23,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.12,
    "currency": "USD"
  },
  {
    "name": "ASIAN INFRASTRUCTURE INVESTMENT BA MTN 144A",
    "ticker": "AIIB",
    "weight": 0.22,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.29,
    "currency": "USD"
  },
  {
    "name": "WALT DISNEY CO",
    "ticker": "DIS",
    "weight": 0.22,
    "sector": "Communications",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.11,
    "currency": "USD"
  },
  {
    "name": "SUMITOMO MITSUI TRUST BANK LTD MTN 144A",
    "ticker": "SUMITR",
    "weight": 0.22,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.61,
    "currency": "USD"
  },
  {
    "name": "C CITIGROUP INC (FRN)",
    "ticker": "C CITIGROUP INC (FRN)",
    "weight": 0.22,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.76,
    "currency": "USD"
  },
  {
    "name": "TORONTO-DOMINION BANK/THE MTN",
    "ticker": "TD",
    "weight": 0.22,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.25,
    "currency": "USD"
  },
  {
    "name": "AMERICAN HONDA FINANCE CORPORATION",
    "ticker": "HNDA",
    "weight": 0.22,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.25,
    "currency": "USD"
  },
  {
    "name": "NATIONAL AUSTRALIA BANK LTD MTN 144A",
    "ticker": "NAB",
    "weight": 0.22,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.27,
    "currency": "USD"
  },
  {
    "name": "STANDARD CHARTERED PLC MTN 144A",
    "ticker": "STANLN",
    "weight": 0.22,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 5.3,
    "currency": "USD"
  },
  {
    "name": "AUSTRALIA AND NEW ZEALAND BANKING MTN 144A",
    "ticker": "ANZ",
    "weight": 0.22,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.22,
    "currency": "USD"
  },
  {
    "name": "AMERICAN HONDA FINANCE CORPORATION MTN",
    "ticker": "HNDA",
    "weight": 0.22,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.27,
    "currency": "USD"
  },
  {
    "name": "BANK OF MONTREAL (FRN) MTN",
    "ticker": "BMO",
    "weight": 0.22,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.53,
    "currency": "USD"
  },
  {
    "name": "AUSTRALIA AND NEW ZEALAND BANKING MTN 144A",
    "ticker": "ANZ",
    "weight": 0.22,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.27,
    "currency": "USD"
  },
  {
    "name": "ABN AMRO BANK NV MTN 144A",
    "ticker": "ABNANV",
    "weight": 0.22,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 4.36,
    "currency": "USD"
  },
  {
    "name": "SUMITOMO MITSUI FINANCIAL GROUP IN",
    "ticker": "SUMIBK",
    "weight": 0.22,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.47,
    "currency": "USD"
  },
  {
    "name": "HSBC HOLDINGS PLC FRN",
    "ticker": "HSBC",
    "weight": 0.22,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.92,
    "currency": "USD"
  },
  {
    "name": "NOMURA HOLDINGS INC",
    "ticker": "NOMURA",
    "weight": 0.22,
    "sector": "Brokerage/Asset Managers/Exchanges",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.87,
    "currency": "USD"
  },
  {
    "name": "SUMITOMO MITSUI TRUST BANK LTD MTN 144A",
    "ticker": "SUMITR",
    "weight": 0.21,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.38,
    "currency": "USD"
  },
  {
    "name": "COMMONWEALTH BANK OF AUSTRALIA MTN 144A",
    "ticker": "CBAAU",
    "weight": 0.21,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.26,
    "currency": "USD"
  },
  {
    "name": "COMMONWEALTH BANK OF AUSTRALIA MTN 144A",
    "ticker": "CBAAU",
    "weight": 0.21,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.39,
    "currency": "USD"
  },
  {
    "name": "BMW US CAPITAL LLC 144A",
    "ticker": "BMW",
    "weight": 0.21,
    "sector": "Consumer Cyclical",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.55,
    "currency": "USD"
  },
  {
    "name": "JPMORGAN CHASE & CO (FRN)",
    "ticker": "JPM",
    "weight": 0.21,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.46,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY PRIVATE BANK (FRN)",
    "ticker": "MS",
    "weight": 0.21,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.4,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY BANK NA (FRN)",
    "ticker": "MS",
    "weight": 0.21,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.49,
    "currency": "USD"
  },
  {
    "name": "PEPSICO SINGAPORE FINANCING I PTE",
    "ticker": "PEP",
    "weight": 0.21,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.23,
    "currency": "USD"
  },
  {
    "name": "STANDARD CHARTERED PLC (FRN) 144A",
    "ticker": "STANLN",
    "weight": 0.21,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.79,
    "currency": "USD"
  },
  {
    "name": "TOYOTA MOTOR CREDIT CORP MTN",
    "ticker": "TOYOTA",
    "weight": 0.21,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.39,
    "currency": "USD"
  },
  {
    "name": "MACQUARIE BANK LTD MTN 144A",
    "ticker": "MQGAU",
    "weight": 0.21,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.53,
    "currency": "USD"
  },
  {
    "name": "MERCEDES-BENZ FINANCE NORTH AMERIC 144A",
    "ticker": "MBGGR",
    "weight": 0.21,
    "sector": "Consumer Cyclical",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.26,
    "currency": "USD"
  },
  {
    "name": "LLOYDS BANKING GROUP PLC FRN",
    "ticker": "LLOYDS",
    "weight": 0.21,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.74,
    "currency": "USD"
  },
  {
    "name": "NEW YORK LIFE GLOBAL FUNDING 144A",
    "ticker": "NYLIFE",
    "weight": 0.21,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.05,
    "currency": "USD"
  },
  {
    "name": "SUMITOMO MITSUI TRUST BANK LTD MTN 144A",
    "ticker": "SUMITR",
    "weight": 0.21,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.52,
    "currency": "USD"
  },
  {
    "name": "AMERICAN HONDA FINANCE CORPORATION MTN",
    "ticker": "HNDA",
    "weight": 0.21,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.35,
    "currency": "USD"
  },
  {
    "name": "MIZUHO BANK LTD 144A",
    "ticker": "MIZUHO",
    "weight": 0.21,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.67,
    "currency": "USD"
  },
  {
    "name": "NOVARTIS CAPITAL CORP",
    "ticker": "NOVNVX",
    "weight": 0.21,
    "sector": "Consumer Non-Cyclical",
    "country": "Switzerland",
    "assetClass": "Fixed Income",
    "coupon": 4.15,
    "currency": "USD"
  },
  {
    "name": "BANK OF NOVA SCOTIA (FRN) MTN",
    "ticker": "BNS",
    "weight": 0.21,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.4,
    "currency": "USD"
  },
  {
    "name": "BARCLAYS PLC (FRN)",
    "ticker": "BACR",
    "weight": 0.21,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 5.11,
    "currency": "USD"
  },
  {
    "name": "MACQUARIE BANK LTD MTN 144A",
    "ticker": "MQGAU",
    "weight": 0.2,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.38,
    "currency": "USD"
  },
  {
    "name": "CATERPILLAR FINANCIAL SERVICES COR MTN",
    "ticker": "CAT",
    "weight": 0.2,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.0,
    "currency": "USD"
  },
  {
    "name": "BANK OF MONTREAL",
    "ticker": "BMO",
    "weight": 0.2,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.87,
    "currency": "USD"
  },
  {
    "name": "JPMORGAN CHASE & CO (FRN)",
    "ticker": "JPM",
    "weight": 0.2,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.82,
    "currency": "USD"
  },
  {
    "name": "NEW YORK LIFE GLOBAL FUNDING (FRN) MTN 144A",
    "ticker": "NYLIFE",
    "weight": 0.2,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.28,
    "currency": "USD"
  },
  {
    "name": "ELI LILLY AND COMPANY (FRN)",
    "ticker": "LLY",
    "weight": 0.2,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 3.97,
    "currency": "USD"
  },
  {
    "name": "PACIFIC LIFE GLOBAL FUNDING II MTN 144A",
    "ticker": "PACLIF",
    "weight": 0.2,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.52,
    "currency": "USD"
  },
  {
    "name": "C CITIGROUP INC FRN",
    "ticker": "C CITIGROUP INC FRN",
    "weight": 0.2,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.91,
    "currency": "USD"
  },
  {
    "name": "CREDIT AGRICOLE SA (FRN) MTN 144A",
    "ticker": "ACAFP",
    "weight": 0.2,
    "sector": "Banking",
    "country": "France",
    "assetClass": "Fixed Income",
    "coupon": 4.5,
    "currency": "USD"
  },
  {
    "name": "NATIONAL AUSTRALIA BANK LTD MTN 144A",
    "ticker": "NAB",
    "weight": 0.2,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.39,
    "currency": "USD"
  },
  {
    "name": "ABN AMRO BANK NV (FRN) MTN 144A",
    "ticker": "ABNANV",
    "weight": 0.2,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 4.63,
    "currency": "USD"
  },
  {
    "name": "CHARLES SCHWAB CORPORATION (THE)",
    "ticker": "SCHW",
    "weight": 0.2,
    "sector": "Brokerage/Asset Managers/Exchanges",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.68,
    "currency": "USD"
  },
  {
    "name": "AMERICAN EXPRESS CO (FRN)",
    "ticker": "AXP",
    "weight": 0.2,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.22,
    "currency": "USD"
  },
  {
    "name": "CANADIAN IMPERIAL BANK (FRN)",
    "ticker": "CM",
    "weight": 0.2,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.45,
    "currency": "USD"
  },
  {
    "name": "BANK OF AMERICA CORP FRN MTN",
    "ticker": "BAC",
    "weight": 0.2,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.67,
    "currency": "USD"
  },
  {
    "name": "BANK OF AMERICA CORP (FRN) MTN",
    "ticker": "BAC",
    "weight": 0.2,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.73,
    "currency": "USD"
  },
  {
    "name": "BNG BANK NV MTN 144A",
    "ticker": "BNG",
    "weight": 0.19,
    "sector": "Owned No Guarantee",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 3.57,
    "currency": "USD"
  },
  {
    "name": "ELI LILLY AND COMPANY (FRN)",
    "ticker": "LLY",
    "weight": 0.19,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.08,
    "currency": "USD"
  },
  {
    "name": "NORDEA BANK ABP (FRN) 144A",
    "ticker": "NDAFH",
    "weight": 0.19,
    "sector": "Banking",
    "country": "Finland",
    "assetClass": "Fixed Income",
    "coupon": 4.36,
    "currency": "USD"
  },
  {
    "name": "PNC FINANCIAL SERVICES (FRN)",
    "ticker": "PNC",
    "weight": 0.19,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 0.0,
    "currency": "USD"
  },
  {
    "name": "ATHENE GLOBAL FUNDING MTN 144A",
    "ticker": "ATH",
    "weight": 0.19,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.58,
    "currency": "USD"
  },
  {
    "name": "SUMITOMO MITSUI TRUST BANK LTD MTN 144A",
    "ticker": "SUMITR",
    "weight": 0.19,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.34,
    "currency": "USD"
  },
  {
    "name": "ING GROEP NV FRN",
    "ticker": "INTNED",
    "weight": 0.19,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 4.67,
    "currency": "USD"
  },
  {
    "name": "NATIONWIDE BUILDING SOCIETY MTN 144A",
    "ticker": "NWIDE",
    "weight": 0.19,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.91,
    "currency": "USD"
  },
  {
    "name": "UNITED OVERSEAS BANK LTD MTN 144A",
    "ticker": "UOBSP",
    "weight": 0.19,
    "sector": "Banking",
    "country": "Singapore",
    "assetClass": "Fixed Income",
    "coupon": 4.34,
    "currency": "USD"
  },
  {
    "name": "BMW US CAPITAL LLC 144A",
    "ticker": "BMW",
    "weight": 0.19,
    "sector": "Consumer Cyclical",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.42,
    "currency": "USD"
  },
  {
    "name": "BANK OF NOVA SCOTIA (FRN) MTN",
    "ticker": "BNS",
    "weight": 0.19,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.68,
    "currency": "USD"
  },
  {
    "name": "SUMITOMO MITSUI FINANCIAL GROUP IN",
    "ticker": "SUMIBK",
    "weight": 0.19,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.78,
    "currency": "USD"
  },
  {
    "name": "AMERICAN HONDA FINANCE CORP (FRN) MTN",
    "ticker": "HNDA",
    "weight": 0.19,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.55,
    "currency": "USD"
  },
  {
    "name": "NTT FINANCE CORP 144A",
    "ticker": "NTT",
    "weight": 0.19,
    "sector": "Communications",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.65,
    "currency": "USD"
  },
  {
    "name": "NATIONAL AUSTRALIA BANK LTD MTN 144A",
    "ticker": "NAB",
    "weight": 0.19,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.3,
    "currency": "USD"
  },
  {
    "name": "AMERICAN HONDA FINANCE CORPORATION MTN",
    "ticker": "HNDA",
    "weight": 0.19,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.47,
    "currency": "USD"
  },
  {
    "name": "ELI LILLY AND COMPANY",
    "ticker": "LLY",
    "weight": 0.18,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.19,
    "currency": "USD"
  },
  {
    "name": "DEUTSCHE BANK AG (NY BRANCH) FRN",
    "ticker": "DB",
    "weight": 0.18,
    "sector": "Banking",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.84,
    "currency": "USD"
  },
  {
    "name": "AMERICAN EXPRESS COMPANY",
    "ticker": "AXP",
    "weight": 0.18,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.32,
    "currency": "USD"
  },
  {
    "name": "C CITIBANK NA",
    "ticker": "C CITIBANK NA",
    "weight": 0.18,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.75,
    "currency": "USD"
  },
  {
    "name": "HYUNDAI CAPITAL AMERICA MTN 144A",
    "ticker": "HYNMTR",
    "weight": 0.18,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.97,
    "currency": "USD"
  },
  {
    "name": "ORACLE CORPORATION",
    "ticker": "ORCL",
    "weight": 0.18,
    "sector": "Technology",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.73,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY BANK NA (FRN)",
    "ticker": "MS",
    "weight": 0.18,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.69,
    "currency": "USD"
  },
  {
    "name": "NATWEST MARKETS PLC MTN 144A",
    "ticker": "NWG",
    "weight": 0.18,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.42,
    "currency": "USD"
  },
  {
    "name": "ROYAL BANK OF CANADA (FRN) MTN",
    "ticker": "RY",
    "weight": 0.18,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.84,
    "currency": "USD"
  },
  {
    "name": "COREBRIDGE GLOBAL FUNDING MTN 144A",
    "ticker": "CRBG",
    "weight": 0.18,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.92,
    "currency": "USD"
  },
  {
    "name": "CHEVRON USA INC Energy",
    "ticker": "CVX",
    "weight": 0.18,
    "sector": "Other",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.2,
    "currency": "USD"
  },
  {
    "name": "INDUSTRIAL BANK OF KOREA MTN RegS",
    "ticker": "INDKOR",
    "weight": 0.18,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.24,
    "currency": "USD"
  },
  {
    "name": "BANK OF MONTREAL MTN",
    "ticker": "BMO",
    "weight": 0.18,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.25,
    "currency": "USD"
  },
  {
    "name": "CATERPILLAR FINANCIAL SERV (FRN) MTN",
    "ticker": "CAT",
    "weight": 0.18,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.31,
    "currency": "USD"
  },
  {
    "name": "WALMART INC",
    "ticker": "WMT",
    "weight": 0.18,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.06,
    "currency": "USD"
  },
  {
    "name": "ROYAL BANK OF CANADA (FRN) MTN",
    "ticker": "RY",
    "weight": 0.18,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 5.3,
    "currency": "USD"
  },
  {
    "name": "GOLDMAN SACHS GROUP INC/THE FRN",
    "ticker": "GS",
    "weight": 0.18,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.76,
    "currency": "USD"
  },
  {
    "name": "HUNTINGTON NATIONAL BANK (FRN)",
    "ticker": "HBAN",
    "weight": 0.18,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.33,
    "currency": "USD"
  },
  {
    "name": "TOYOTA MOTOR CREDIT CORP MTN",
    "ticker": "TOYOTA",
    "weight": 0.18,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.37,
    "currency": "USD"
  },
  {
    "name": "ANZ NEW ZEALAND INTL LTD (LONDON B MTN 144A",
    "ticker": "ANZNZ",
    "weight": 0.17,
    "sector": "Banking",
    "country": "New Zealand",
    "assetClass": "Fixed Income",
    "coupon": 4.22,
    "currency": "USD"
  },
  {
    "name": "WELLS FARGO & COMPANY (FRN) MTN",
    "ticker": "WFC",
    "weight": 0.17,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.36,
    "currency": "USD"
  },
  {
    "name": "BMW US CAPITAL LLC 144A",
    "ticker": "BMW",
    "weight": 0.17,
    "sector": "Consumer Cyclical",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.41,
    "currency": "USD"
  },
  {
    "name": "TOYOTA MOTOR CREDIT CORP MTN",
    "ticker": "TOYOTA",
    "weight": 0.17,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.07,
    "currency": "USD"
  },
  {
    "name": "KOREA HOUSING FINANCE CORP MTN RegS",
    "ticker": "KHFC",
    "weight": 0.17,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.51,
    "currency": "USD"
  },
  {
    "name": "CANADIAN IMPERIAL BANK OF COMMERCE",
    "ticker": "CM",
    "weight": 0.17,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.99,
    "currency": "USD"
  },
  {
    "name": "JPMORGAN CHASE & CO FRN",
    "ticker": "JPM",
    "weight": 0.17,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.49,
    "currency": "USD"
  },
  {
    "name": "NEW YORK LIFE GLOBAL FUNDING MTN 144A",
    "ticker": "NYLIFE",
    "weight": 0.17,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 0.0,
    "currency": "USD"
  },
  {
    "name": "TORONTO-DOMINION BANK/THE MTN",
    "ticker": "TD",
    "weight": 0.17,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.21,
    "currency": "USD"
  },
  {
    "name": "SVENSKA HANDELSBANKEN AB (FRN) MTN 144A",
    "ticker": "SHBASS",
    "weight": 0.17,
    "sector": "Banking",
    "country": "Sweden",
    "assetClass": "Fixed Income",
    "coupon": 4.19,
    "currency": "USD"
  },
  {
    "name": "SIEMENS FUNDING BV 144A",
    "ticker": "SIEGR",
    "weight": 0.17,
    "sector": "Capital Goods",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.28,
    "currency": "USD"
  },
  {
    "name": "KUNTARAHOITUS OYJ MTN 144A",
    "ticker": "KUNTA",
    "weight": 0.17,
    "sector": "Local Authority",
    "country": "Finland",
    "assetClass": "Fixed Income",
    "coupon": 4.64,
    "currency": "USD"
  },
  {
    "name": "KUNTARAHOITUS OYJ 144A",
    "ticker": "KUNTA",
    "weight": 0.17,
    "sector": "Local Authority",
    "country": "Finland",
    "assetClass": "Fixed Income",
    "coupon": 4.63,
    "currency": "USD"
  },
  {
    "name": "JOHN DEERE CAPITAL CORP MTN",
    "ticker": "DE",
    "weight": 0.17,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.13,
    "currency": "USD"
  },
  {
    "name": "JACKSON NATIONAL LIFE GLOBAL FUNDI MTN 144A",
    "ticker": "JXN",
    "weight": 0.17,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.6,
    "currency": "USD"
  },
  {
    "name": "HSBC USA INC",
    "ticker": "HSBC",
    "weight": 0.17,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.61,
    "currency": "USD"
  },
  {
    "name": "GLAXOSMITHKLINE CAPITAL PLC",
    "ticker": "GSK",
    "weight": 0.17,
    "sector": "Consumer Non-Cyclical",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.16,
    "currency": "USD"
  },
  {
    "name": "JPMORGAN CHASE & CO (FRN) MTN",
    "ticker": "JPM",
    "weight": 0.17,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.44,
    "currency": "USD"
  },
  {
    "name": "GOLDMAN SACHS GROUP INC/THE",
    "ticker": "GS",
    "weight": 0.16,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.53,
    "currency": "USD"
  },
  {
    "name": "STANDARD CHARTERED PLC (FRN) 144A",
    "ticker": "STANLN",
    "weight": 0.16,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.51,
    "currency": "USD"
  },
  {
    "name": "CHEVRON USA INC Energy",
    "ticker": "CVX",
    "weight": 0.16,
    "sector": "Other",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 3.99,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY (FRN) MTN",
    "ticker": "MS",
    "weight": 0.16,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 5.0,
    "currency": "USD"
  },
  {
    "name": "NOVARTIS CAPITAL CORP",
    "ticker": "NOVNVX",
    "weight": 0.16,
    "sector": "Consumer Non-Cyclical",
    "country": "Switzerland",
    "assetClass": "Fixed Income",
    "coupon": 4.3,
    "currency": "USD"
  },
  {
    "name": "BANK OF AMERICA CORP (FRN) MTN",
    "ticker": "BAC",
    "weight": 0.16,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.97,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY PRIVATE BANK (FRN)",
    "ticker": "MS",
    "weight": 0.16,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.39,
    "currency": "USD"
  },
  {
    "name": "TORONTO-DOMINION BANK/THE (FRN) MTN",
    "ticker": "TD",
    "weight": 0.16,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.34,
    "currency": "USD"
  },
  {
    "name": "KOREA NATIONAL OIL CORP MTN RegS",
    "ticker": "KOROIL",
    "weight": 0.16,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.39,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY BANK NA (FRN)",
    "ticker": "MS",
    "weight": 0.16,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.52,
    "currency": "USD"
  },
  {
    "name": "INDUSTRIAL BANK OF KOREA RegS",
    "ticker": "INDKOR",
    "weight": 0.16,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.2,
    "currency": "USD"
  },
  {
    "name": "CANADIAN IMPERIAL BANK OF COMMERCE",
    "ticker": "CM",
    "weight": 0.16,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.57,
    "currency": "USD"
  },
  {
    "name": "NEW YORK LIFE GLOBAL FUNDING MTN 144A",
    "ticker": "NYLIFE",
    "weight": 0.16,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.18,
    "currency": "USD"
  },
  {
    "name": "SANOFI SA MTN",
    "ticker": "SANFP",
    "weight": 0.16,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.16,
    "currency": "USD"
  },
  {
    "name": "SWEDISH EXPORT CREDIT CORP MTN",
    "ticker": "SEK",
    "weight": 0.16,
    "sector": "Owned No Guarantee",
    "country": "Sweden",
    "assetClass": "Fixed Income",
    "coupon": 4.62,
    "currency": "USD"
  },
  {
    "name": "TORONTO-DOMINION BANK/THE MTN",
    "ticker": "TD",
    "weight": 0.16,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.34,
    "currency": "USD"
  },
  {
    "name": "GOLDMAN SACHS GROUP INC/THE (FRN)",
    "ticker": "GS",
    "weight": 0.16,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 3.64,
    "currency": "USD"
  },
  {
    "name": "MITSUBISHI UFJ FINANCIAL GROUP INC",
    "ticker": "MUFG",
    "weight": 0.16,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 5.07,
    "currency": "USD"
  },
  {
    "name": "MACQUARIE BANK LTD MTN 144A",
    "ticker": "MQGAU",
    "weight": 0.16,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.83,
    "currency": "USD"
  },
  {
    "name": "HYUNDAI CAPITAL AMERICA MTN 144A",
    "ticker": "HYNMTR",
    "weight": 0.16,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.65,
    "currency": "USD"
  },
  {
    "name": "CANADIAN IMPERIAL (FRN)",
    "ticker": "CM",
    "weight": 0.16,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.38,
    "currency": "USD"
  },
  {
    "name": "CREDIT AGRICOLE SA (FRN) MTN 144A",
    "ticker": "ACAFP",
    "weight": 0.16,
    "sector": "Banking",
    "country": "France",
    "assetClass": "Fixed Income",
    "coupon": 4.74,
    "currency": "USD"
  },
  {
    "name": "MERCK & CO INC (FRN)",
    "ticker": "MRK",
    "weight": 0.15,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.21,
    "currency": "USD"
  },
  {
    "name": "MERCEDES-BENZ FINANCE NORTH (FRN) 144A",
    "ticker": "MBGGR",
    "weight": 0.15,
    "sector": "Consumer Cyclical",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.4,
    "currency": "USD"
  },
  {
    "name": "LLOYDS BANKING GROUP PLC",
    "ticker": "LLOYDS",
    "weight": 0.15,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 5.18,
    "currency": "USD"
  },
  {
    "name": "BANK OF MONTREAL (FRN) MTN",
    "ticker": "BMO",
    "weight": 0.15,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 0.0,
    "currency": "USD"
  },
  {
    "name": "BANK OF AMERICA CORP MTN",
    "ticker": "BAC",
    "weight": 0.15,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.65,
    "currency": "USD"
  },
  {
    "name": "UBS AG (STAMFORD BRANCH) FRN MTN",
    "ticker": "UBS",
    "weight": 0.15,
    "sector": "Banking",
    "country": "Switzerland",
    "assetClass": "Fixed Income",
    "coupon": 4.44,
    "currency": "USD"
  },
  {
    "name": "CREDIT AGRICOLE SA FRN MTN 144A",
    "ticker": "ACAFP",
    "weight": 0.15,
    "sector": "Banking",
    "country": "France",
    "assetClass": "Fixed Income",
    "coupon": 4.83,
    "currency": "USD"
  },
  {
    "name": "PACIFIC LIFE GLOBAL FUNDING II MTN 144A",
    "ticker": "PACLIF",
    "weight": 0.15,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.15,
    "currency": "USD"
  },
  {
    "name": "COOPERATIEVE RABOBANK UA (NEW YORK MTN",
    "ticker": "RABOBK",
    "weight": 0.15,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 4.27,
    "currency": "USD"
  },
  {
    "name": "HYUNDAI CAPITAL AMERICA MTN 144A",
    "ticker": "HYNMTR",
    "weight": 0.15,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.61,
    "currency": "USD"
  },
  {
    "name": "SOCIETE GENERALE SA (FRN) MTN 144A",
    "ticker": "SOCGEN",
    "weight": 0.15,
    "sector": "Banking",
    "country": "France",
    "assetClass": "Fixed Income",
    "coupon": 4.7,
    "currency": "USD"
  },
  {
    "name": "PACIFIC LIFE GLOBAL FUNDING II MTN 144A",
    "ticker": "PACLIF",
    "weight": 0.15,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.36,
    "currency": "USD"
  },
  {
    "name": "NORDEA BANK ABP MTN 144A",
    "ticker": "NDAFH",
    "weight": 0.15,
    "sector": "Banking",
    "country": "Finland",
    "assetClass": "Fixed Income",
    "coupon": 4.33,
    "currency": "USD"
  },
  {
    "name": "STANDARD CHARTERED PLC MTN 144A",
    "ticker": "STANLN",
    "weight": 0.15,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.85,
    "currency": "USD"
  },
  {
    "name": "ROYAL BANK OF CANADA (FRN) MTN",
    "ticker": "RY",
    "weight": 0.15,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.51,
    "currency": "USD"
  },
  {
    "name": "DEUTSCHE BANK AG (NEW YORK) (FRN)",
    "ticker": "DB",
    "weight": 0.15,
    "sector": "Banking",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.81,
    "currency": "USD"
  },
  {
    "name": "PAYPAL HOLDINGS INC (FRN)",
    "ticker": "PYPL",
    "weight": 0.15,
    "sector": "Technology",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.31,
    "currency": "USD"
  },
  {
    "name": "WESTPAC BANKING CORP MTN 144A",
    "ticker": "WSTP",
    "weight": 0.15,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.13,
    "currency": "USD"
  },
  {
    "name": "WALMART INC",
    "ticker": "WMT",
    "weight": 0.15,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.02,
    "currency": "USD"
  },
  {
    "name": "NEW YORK LIFE GLOBAL FUNDING (FRN) MTN 144A",
    "ticker": "NYLIFE",
    "weight": 0.15,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 3.64,
    "currency": "USD"
  },
  {
    "name": "HSBC HOLDINGS PLC FRN",
    "ticker": "HSBC",
    "weight": 0.15,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.71,
    "currency": "USD"
  },
  {
    "name": "ROYAL BANK OF CANADA (FRN) MTN",
    "ticker": "RY",
    "weight": 0.15,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.33,
    "currency": "USD"
  },
  {
    "name": "CATERPILLAR FINANCIAL SERVICES COR MTN",
    "ticker": "CAT",
    "weight": 0.15,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.2,
    "currency": "USD"
  },
  {
    "name": "PROTECTIVE LIFE GLOBAL FUNDING MTN 144A",
    "ticker": "PROTLI",
    "weight": 0.15,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.48,
    "currency": "USD"
  },
  {
    "name": "CATERPILLAR FINC SERVICES (FRN) MTN",
    "ticker": "CAT",
    "weight": 0.15,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.15,
    "currency": "USD"
  },
  {
    "name": "STATE STREET BANK & TRUST CO (FRN)",
    "ticker": "STT",
    "weight": 0.15,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.08,
    "currency": "USD"
  },
  {
    "name": "WELLS FARGO & COMPANY (FRN) MTN",
    "ticker": "WFC",
    "weight": 0.15,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.34,
    "currency": "USD"
  },
  {
    "name": "NTT FINANCE CORP 144A",
    "ticker": "NTT",
    "weight": 0.15,
    "sector": "Communications",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.9,
    "currency": "USD"
  },
  {
    "name": "GENERAL MOTORS FINANCIAL CO INC",
    "ticker": "GM",
    "weight": 0.15,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 5.02,
    "currency": "USD"
  },
  {
    "name": "GLENCORE FUNDING LLC (FRN) 144A",
    "ticker": "GLENLN",
    "weight": 0.15,
    "sector": "Basic Industry",
    "country": "Switzerland",
    "assetClass": "Fixed Income",
    "coupon": 4.67,
    "currency": "USD"
  },
  {
    "name": "NEXTERA ENERGY CAPITAL (FRN)",
    "ticker": "NEE",
    "weight": 0.15,
    "sector": "Electric",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.43,
    "currency": "USD"
  },
  {
    "name": "BMW US CAPITAL LLC 144A",
    "ticker": "BMW",
    "weight": 0.15,
    "sector": "Consumer Cyclical",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.42,
    "currency": "USD"
  },
  {
    "name": "TORONTO-DOMINION BANK/THE (FRN) MTN",
    "ticker": "TD",
    "weight": 0.14,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.44,
    "currency": "USD"
  },
  {
    "name": "AMERICAN HONDA FINANCE CORPORATION",
    "ticker": "HNDA",
    "weight": 0.14,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.37,
    "currency": "USD"
  },
  {
    "name": "FIDELITY NATIONAL INFORMATION SERV",
    "ticker": "FIS",
    "weight": 0.14,
    "sector": "Technology",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.84,
    "currency": "USD"
  },
  {
    "name": "CARGILL INC (FRN) 144A",
    "ticker": "CARGIL",
    "weight": 0.14,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.23,
    "currency": "USD"
  },
  {
    "name": "TORONTO-DOMINION BANK/THE MTN",
    "ticker": "TD",
    "weight": 0.14,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.19,
    "currency": "USD"
  },
  {
    "name": "AUSTRALIA AND NEW ZEALAND BANKING MTN 144A",
    "ticker": "ANZ",
    "weight": 0.14,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.31,
    "currency": "USD"
  },
  {
    "name": "ROYAL BANK OF CANADA (FRN) MTN",
    "ticker": "RY",
    "weight": 0.14,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.47,
    "currency": "USD"
  },
  {
    "name": "CATERPILLAR FINANCIAL SERVICES FRN",
    "ticker": "CAT",
    "weight": 0.14,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.18,
    "currency": "USD"
  },
  {
    "name": "MACQUARIE GROUP LTD MTN 144A",
    "ticker": "MQGAU",
    "weight": 0.14,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.54,
    "currency": "USD"
  },
  {
    "name": "HSBC HOLDINGS PLC FRN",
    "ticker": "HSBC",
    "weight": 0.14,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.91,
    "currency": "USD"
  },
  {
    "name": "BANK OF NOVA SCOTIA (FRN) MTN",
    "ticker": "BNS",
    "weight": 0.14,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.52,
    "currency": "USD"
  },
  {
    "name": "MIZUHO BANK LTD 144A",
    "ticker": "MIZUHO",
    "weight": 0.14,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.42,
    "currency": "USD"
  },
  {
    "name": "MERCEDES-BENZ FINANCE NORTH (FRN) 144A",
    "ticker": "MBGGR",
    "weight": 0.14,
    "sector": "Consumer Cyclical",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.55,
    "currency": "USD"
  },
  {
    "name": "SUMITOMO MITSUI FINANCIAL GROUP IN",
    "ticker": "SUMIBK",
    "weight": 0.14,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.62,
    "currency": "USD"
  },
  {
    "name": "LLOYDS BANKING GROUP PLC FRN MTN",
    "ticker": "LLOYDS",
    "weight": 0.14,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.4,
    "currency": "USD"
  },
  {
    "name": "TORONTO-DOMINION BANK/THE MTN",
    "ticker": "TD",
    "weight": 0.14,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.66,
    "currency": "USD"
  },
  {
    "name": "ROYAL BANK OF CANADA (FRN) MTN",
    "ticker": "RY",
    "weight": 0.14,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.98,
    "currency": "USD"
  },
  {
    "name": "WESTPAC BANKING CORP MTN 144A",
    "ticker": "WSTP",
    "weight": 0.14,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.31,
    "currency": "USD"
  },
  {
    "name": "COOPERATIEVE RABOBANK UA (NEW YORK MTN",
    "ticker": "RABOBK",
    "weight": 0.14,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 4.06,
    "currency": "USD"
  },
  {
    "name": "TOYOTA MOTOR CREDIT CORP MTN",
    "ticker": "TOYOTA",
    "weight": 0.14,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.3,
    "currency": "USD"
  },
  {
    "name": "BANK OF MONTREAL (FRN) MTN",
    "ticker": "BMO",
    "weight": 0.14,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.39,
    "currency": "USD"
  },
  {
    "name": "BANK OF AMERICA CORP (FRN) MTN",
    "ticker": "BAC",
    "weight": 0.14,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.52,
    "currency": "USD"
  },
  {
    "name": "ANZ NEW ZEALAND INTL LTD (LONDON B MTN 144A",
    "ticker": "ANZNZ",
    "weight": 0.14,
    "sector": "Banking",
    "country": "New Zealand",
    "assetClass": "Fixed Income",
    "coupon": 4.36,
    "currency": "USD"
  },
  {
    "name": "BANCO BILBAO VIZCAYA ARGENTARIA SA",
    "ticker": "BBVASM",
    "weight": 0.14,
    "sector": "Banking",
    "country": "Spain",
    "assetClass": "Fixed Income",
    "coupon": 4.51,
    "currency": "USD"
  },
  {
    "name": "CATERPILLAR FINANCIAL SERVICES COR MTN",
    "ticker": "CAT",
    "weight": 0.14,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.26,
    "currency": "USD"
  },
  {
    "name": "JOHN DEERE CAPITAL CORP MTN",
    "ticker": "DE",
    "weight": 0.14,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.23,
    "currency": "USD"
  },
  {
    "name": "FEDERATION DES CAISSES DESJARDINS MTN 144A",
    "ticker": "CCDJ",
    "weight": 0.14,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.27,
    "currency": "USD"
  },
  {
    "name": "C CITIBANK NA (FRN)",
    "ticker": "C CITIBANK NA (FRN)",
    "weight": 0.14,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.22,
    "currency": "USD"
  },
  {
    "name": "BNY MELLON CORP/THE (FRN) MTN",
    "ticker": "BNY",
    "weight": 0.14,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.58,
    "currency": "USD"
  },
  {
    "name": "ROYAL BANK OF CANADA (FRN) MTN",
    "ticker": "RY",
    "weight": 0.13,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.77,
    "currency": "USD"
  },
  {
    "name": "AMERICAN HONDA FINANCE CORPORATION MTN",
    "ticker": "HNDA",
    "weight": 0.13,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.32,
    "currency": "USD"
  },
  {
    "name": "SOCIETE GENERALE SA (FRN) MTN 144A",
    "ticker": "SOCGEN",
    "weight": 0.13,
    "sector": "Banking",
    "country": "France",
    "assetClass": "Fixed Income",
    "coupon": 5.1,
    "currency": "USD"
  },
  {
    "name": "METROPOLITAN LIFE GLOBAL FUNDING I MTN 144A",
    "ticker": "MET",
    "weight": 0.13,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.33,
    "currency": "USD"
  },
  {
    "name": "GEORGIA POWER COMPANY",
    "ticker": "SO",
    "weight": 0.13,
    "sector": "Electric",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 3.92,
    "currency": "USD"
  },
  {
    "name": "KOREA NATIONAL OIL CORP MTN RegS",
    "ticker": "KOROIL",
    "weight": 0.13,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.44,
    "currency": "USD"
  },
  {
    "name": "C CITIBANK NA",
    "ticker": "C CITIBANK NA",
    "weight": 0.13,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.69,
    "currency": "USD"
  },
  {
    "name": "AMERICAN HONDA FINANCE CORPORATION MTN",
    "ticker": "HNDA",
    "weight": 0.13,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.41,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY (FRN) MTN",
    "ticker": "MS",
    "weight": 0.13,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.75,
    "currency": "USD"
  },
  {
    "name": "PHILIP MORRIS INTERNATIONAL INC",
    "ticker": "PM",
    "weight": 0.13,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 0.0,
    "currency": "USD"
  },
  {
    "name": "DAIMLER TRUCK FINANCE NORTH AMERIC 144A",
    "ticker": "DTRGR",
    "weight": 0.13,
    "sector": "Consumer Cyclical",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.58,
    "currency": "USD"
  },
  {
    "name": "HONEYWELL AEROSPACE INC (FRN) 144A",
    "ticker": "HONA",
    "weight": 0.13,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.28,
    "currency": "USD"
  },
  {
    "name": "CANADIAN IMPERIAL BANK OF CO (FRN)",
    "ticker": "CM",
    "weight": 0.13,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.76,
    "currency": "USD"
  },
  {
    "name": "HYUNDAI CAPITAL AMERICA MTN 144A",
    "ticker": "HYNMTR",
    "weight": 0.13,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.66,
    "currency": "USD"
  },
  {
    "name": "NATWEST GROUP PLC (FRN)",
    "ticker": "NWG",
    "weight": 0.13,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.97,
    "currency": "USD"
  },
  {
    "name": "BANK OF NOVA SCOTIA",
    "ticker": "BNS",
    "weight": 0.13,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.32,
    "currency": "USD"
  },
  {
    "name": "NATWEST MARKETS PLC MTN 144A",
    "ticker": "NWG",
    "weight": 0.13,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.76,
    "currency": "USD"
  },
  {
    "name": "AUSTRALIA AND NEW ZEALAND BANKING MTN 144A",
    "ticker": "ANZ",
    "weight": 0.13,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.47,
    "currency": "USD"
  },
  {
    "name": "BANQUE FEDERATIVE DU CREDIT MUTUEL MTN 144A",
    "ticker": "BFCM",
    "weight": 0.13,
    "sector": "Banking",
    "country": "France",
    "assetClass": "Fixed Income",
    "coupon": 5.1,
    "currency": "USD"
  },
  {
    "name": "F FORD MOTOR CREDIT COMPANY LLC (FRN",
    "ticker": "F FORD MOTOR CREDIT COMPANY LLC (FRN",
    "weight": 0.13,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 5.12,
    "currency": "USD"
  },
  {
    "name": "AMERICAN HONDA FINANCE CORPORATION MTN",
    "ticker": "HNDA",
    "weight": 0.13,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.46,
    "currency": "USD"
  },
  {
    "name": "CONSOLIDATED EDISON COMPANY OF NEW",
    "ticker": "ED",
    "weight": 0.13,
    "sector": "Electric",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.14,
    "currency": "USD"
  },
  {
    "name": "HYUNDAI CAPITAL AMERICA MTN 144A",
    "ticker": "HYNMTR",
    "weight": 0.13,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.68,
    "currency": "USD"
  },
  {
    "name": "NATWEST MARKETS PLC MTN 144A",
    "ticker": "NWG",
    "weight": 0.13,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.51,
    "currency": "USD"
  },
  {
    "name": "BARCLAYS PLC (FRN)",
    "ticker": "BACR",
    "weight": 0.13,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.7,
    "currency": "USD"
  },
  {
    "name": "BANK OF MONTREAL (FRN) MTN",
    "ticker": "BMO",
    "weight": 0.13,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.46,
    "currency": "USD"
  },
  {
    "name": "COOPERATIEVE RABOBANK UA (NEW YORK MTN",
    "ticker": "RABOBK",
    "weight": 0.13,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 4.51,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY MTN",
    "ticker": "MS",
    "weight": 0.13,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.54,
    "currency": "USD"
  },
  {
    "name": "BNP PARIBAS SA (FRN) MTN 144A",
    "ticker": "BNP",
    "weight": 0.13,
    "sector": "Banking",
    "country": "France",
    "assetClass": "Fixed Income",
    "coupon": 5.05,
    "currency": "USD"
  },
  {
    "name": "MASSMUTUAL GLOBAL FUNDING II MTN 144A",
    "ticker": "MASSMU",
    "weight": 0.13,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.44,
    "currency": "USD"
  },
  {
    "name": "CATERPILLAR FINANCIAL SERVICES COR MTN",
    "ticker": "CAT",
    "weight": 0.13,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.12,
    "currency": "USD"
  },
  {
    "name": "ATHENE GLOBAL FUNDING 144A",
    "ticker": "ATH",
    "weight": 0.13,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.95,
    "currency": "USD"
  },
  {
    "name": "SKANDINAVISKA ENSKILDA BANKEN AB MTN 144A",
    "ticker": "SEB",
    "weight": 0.13,
    "sector": "Banking",
    "country": "Sweden",
    "assetClass": "Fixed Income",
    "coupon": 4.38,
    "currency": "USD"
  },
  {
    "name": "PNC FINANCIAL SERVICES (FRN)",
    "ticker": "PNC",
    "weight": 0.12,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 0.0,
    "currency": "USD"
  },
  {
    "name": "KOREA DEVELOPMENT BANK MTN",
    "ticker": "KDB",
    "weight": 0.12,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.13,
    "currency": "USD"
  },
  {
    "name": "BARCLAYS PLC (FRN)",
    "ticker": "BACR",
    "weight": 0.12,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 3.64,
    "currency": "USD"
  },
  {
    "name": "PACIFIC LIFE GLOBAL FUNDING II MTN 144A",
    "ticker": "PACLIF",
    "weight": 0.12,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.3,
    "currency": "USD"
  },
  {
    "name": "CATERPILLAR FINANCIAL SERVICES MTN",
    "ticker": "CAT",
    "weight": 0.12,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.14,
    "currency": "USD"
  },
  {
    "name": "ATHENE GLOBAL FUNDING MTN 144A",
    "ticker": "ATH",
    "weight": 0.12,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.62,
    "currency": "USD"
  },
  {
    "name": "NATWEST MARKETS PLC MTN 144A",
    "ticker": "NWG",
    "weight": 0.12,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.81,
    "currency": "USD"
  },
  {
    "name": "MASSMUTUAL GLOBAL FUNDING II MTN 144A",
    "ticker": "MASSMU",
    "weight": 0.12,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.27,
    "currency": "USD"
  },
  {
    "name": "NATIONAL RURAL UTILITIES COOPERATI MTN",
    "ticker": "NRUC",
    "weight": 0.12,
    "sector": "Electric",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.47,
    "currency": "USD"
  },
  {
    "name": "VOLKSWAGEN GROUP OF AMERICA (FRN) 144A",
    "ticker": "VW",
    "weight": 0.12,
    "sector": "Consumer Cyclical",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.69,
    "currency": "USD"
  },
  {
    "name": "SOCIETE GENERALE SA (FRN) MTN 144A",
    "ticker": "SOCGEN",
    "weight": 0.12,
    "sector": "Banking",
    "country": "France",
    "assetClass": "Fixed Income",
    "coupon": 5.02,
    "currency": "USD"
  },
  {
    "name": "DBS GROUP HOLDINGS LTD MTN 144A",
    "ticker": "DBSSP",
    "weight": 0.12,
    "sector": "Banking",
    "country": "Singapore",
    "assetClass": "Fixed Income",
    "coupon": 4.28,
    "currency": "USD"
  },
  {
    "name": "NATWEST MARKETS PLC (FRN) MTN 144A",
    "ticker": "NWG",
    "weight": 0.12,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.57,
    "currency": "USD"
  },
  {
    "name": "CHEVRON USA INC Energy",
    "ticker": "CVX",
    "weight": 0.12,
    "sector": "Other",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.5,
    "currency": "USD"
  },
  {
    "name": "BANK OF NEW ZEALAND FRN MTN 144A",
    "ticker": "BZLNZ",
    "weight": 0.12,
    "sector": "Banking",
    "country": "New Zealand",
    "assetClass": "Fixed Income",
    "coupon": 0.0,
    "currency": "USD"
  },
  {
    "name": "BMW US CAPITAL LLC (FRN) 144A",
    "ticker": "BMW",
    "weight": 0.12,
    "sector": "Consumer Cyclical",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.34,
    "currency": "USD"
  },
  {
    "name": "LG ENERGY SOLUTION LTD RegS",
    "ticker": "LGENSO",
    "weight": 0.12,
    "sector": "Consumer Cyclical",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 5.31,
    "currency": "USD"
  },
  {
    "name": "HYUNDAI CAPITAL AMERICA MTN 144A",
    "ticker": "HYNMTR",
    "weight": 0.12,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 5.11,
    "currency": "USD"
  },
  {
    "name": "NEW YORK LIFE GLOBAL FUNDING MTN 144A",
    "ticker": "NYLIFE",
    "weight": 0.12,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.2,
    "currency": "USD"
  },
  {
    "name": "MERCEDES-BENZ FINANCE NORTH AMERIC 144A",
    "ticker": "MBGGR",
    "weight": 0.12,
    "sector": "Consumer Cyclical",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.47,
    "currency": "USD"
  },
  {
    "name": "KOREA GAS CORPORATION MTN RegS",
    "ticker": "KORGAS",
    "weight": 0.12,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.25,
    "currency": "USD"
  },
  {
    "name": "MARSH & MCLENNAN COMPANIES (FRN)",
    "ticker": "MRSH",
    "weight": 0.12,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.32,
    "currency": "USD"
  },
  {
    "name": "LLOYDS BANKING GROUP PLC (FRN)",
    "ticker": "LLOYDS",
    "weight": 0.12,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.72,
    "currency": "USD"
  },
  {
    "name": "AMAZON.COM INC",
    "ticker": "AMZN",
    "weight": 0.12,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.4,
    "currency": "USD"
  },
  {
    "name": "AMERICAN HONDA FINANCE CORPORATION MTN",
    "ticker": "HNDA",
    "weight": 0.12,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.37,
    "currency": "USD"
  },
  {
    "name": "AMERICAN EXPRESS COMPANY (FRN)",
    "ticker": "AXP",
    "weight": 0.12,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 0.0,
    "currency": "USD"
  },
  {
    "name": "NORDEA BANK ABP MTN 144A",
    "ticker": "NDAFH",
    "weight": 0.12,
    "sector": "Banking",
    "country": "Finland",
    "assetClass": "Fixed Income",
    "coupon": 4.1,
    "currency": "USD"
  },
  {
    "name": "NOMURA HOLDINGS INC",
    "ticker": "NOMURA",
    "weight": 0.12,
    "sector": "Brokerage/Asset Managers/Exchanges",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.57,
    "currency": "USD"
  },
  {
    "name": "SWEDBANK AB MTN 144A",
    "ticker": "SWEDA",
    "weight": 0.12,
    "sector": "Banking",
    "country": "Sweden",
    "assetClass": "Fixed Income",
    "coupon": 4.65,
    "currency": "USD"
  },
  {
    "name": "JACKSON NATIONAL LIFE GLOBAL FUNDI MTN 144A",
    "ticker": "JXN",
    "weight": 0.12,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.58,
    "currency": "USD"
  },
  {
    "name": "WELLS FARGO & COMPANY (FRN) MTN",
    "ticker": "WFC",
    "weight": 0.12,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.99,
    "currency": "USD"
  },
  {
    "name": "KOREA DEVELOPMENT BANK",
    "ticker": "KDB",
    "weight": 0.12,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.3,
    "currency": "USD"
  },
  {
    "name": "COOPERATIEVE RABOBANK UA (NEW YORK MTN",
    "ticker": "RABOBK",
    "weight": 0.12,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 4.11,
    "currency": "USD"
  },
  {
    "name": "STANDARD CHARTERED PLC FRN 144A",
    "ticker": "STANLN",
    "weight": 0.12,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 5.65,
    "currency": "USD"
  },
  {
    "name": "BANK OF NOVA SCOTIA (FRN) MTN",
    "ticker": "BNS",
    "weight": 0.12,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.42,
    "currency": "USD"
  },
  {
    "name": "INTER-AMERICAN DEVELOPMENT BANK MTN",
    "ticker": "IADB",
    "weight": 0.12,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.9,
    "currency": "USD"
  },
  {
    "name": "CHEVRON USA INC Energy",
    "ticker": "CVX",
    "weight": 0.12,
    "sector": "Other",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.11,
    "currency": "USD"
  },
  {
    "name": "NTT FINANCE CORP 144A",
    "ticker": "NTT",
    "weight": 0.12,
    "sector": "Communications",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.67,
    "currency": "USD"
  },
  {
    "name": "MASSMUTUAL GLOBAL FUNDING II (FRN) MTN 144A",
    "ticker": "MASSMU",
    "weight": 0.11,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.35,
    "currency": "USD"
  },
  {
    "name": "METROPOLITAN LIFE GLOBAL FUNDING I MTN 144A",
    "ticker": "MET",
    "weight": 0.11,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.23,
    "currency": "USD"
  },
  {
    "name": "EXPORT-IMPORT BANK OF KOREA",
    "ticker": "EIBKOR",
    "weight": 0.11,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.09,
    "currency": "USD"
  },
  {
    "name": "UBS GROUP AG 144A",
    "ticker": "UBS",
    "weight": 0.11,
    "sector": "Banking",
    "country": "Switzerland",
    "assetClass": "Fixed Income",
    "coupon": 4.44,
    "currency": "USD"
  },
  {
    "name": "SANTANDER HOLDINGS USA INC (FRN)",
    "ticker": "SANUSA",
    "weight": 0.11,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 5.23,
    "currency": "USD"
  },
  {
    "name": "KOREA NATIONAL OIL CORP MTN RegS",
    "ticker": "KOROIL",
    "weight": 0.11,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.52,
    "currency": "USD"
  },
  {
    "name": "GOLDMAN SACHS GROUP INC/THE (FRN)",
    "ticker": "GS",
    "weight": 0.11,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.71,
    "currency": "USD"
  },
  {
    "name": "COOPERATIEVE RABOBANK UA (NEW YORK MTN",
    "ticker": "RABOBK",
    "weight": 0.11,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 4.37,
    "currency": "USD"
  },
  {
    "name": "SEMPRA",
    "ticker": "SRE",
    "weight": 0.11,
    "sector": "Natural Gas",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.3,
    "currency": "USD"
  },
  {
    "name": "NORDEA BANK ABP MTN 144A",
    "ticker": "NDAFH",
    "weight": 0.11,
    "sector": "Banking",
    "country": "Finland",
    "assetClass": "Fixed Income",
    "coupon": 4.22,
    "currency": "USD"
  },
  {
    "name": "US BANK NATIONAL ASSOCIATION FRN",
    "ticker": "USB",
    "weight": 0.11,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.3,
    "currency": "USD"
  },
  {
    "name": "PRINCIPAL LIFE GLOBAL FUNDING II MTN 144A",
    "ticker": "PFG",
    "weight": 0.11,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.43,
    "currency": "USD"
  },
  {
    "name": "NATWEST MARKETS PLC MTN 144A",
    "ticker": "NWG",
    "weight": 0.11,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.57,
    "currency": "USD"
  },
  {
    "name": "KEURIG DR PEPPER INC (FRN)",
    "ticker": "KDP",
    "weight": 0.11,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.59,
    "currency": "USD"
  },
  {
    "name": "ORACLE CORPORATION (FRN)",
    "ticker": "ORCL",
    "weight": 0.11,
    "sector": "Technology",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.38,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY BANK NA(FRN)",
    "ticker": "MS",
    "weight": 0.11,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.6,
    "currency": "USD"
  },
  {
    "name": "GENERAL MOTORS FINANCIAL CO INC",
    "ticker": "GM",
    "weight": 0.11,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.72,
    "currency": "USD"
  },
  {
    "name": "F FORD MOTOR CREDIT COMPANY LLC (FRN",
    "ticker": "F FORD MOTOR CREDIT COMPANY LLC (FRN",
    "weight": 0.11,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 5.71,
    "currency": "USD"
  },
  {
    "name": "NATWEST MARKETS PLC MTN 144A",
    "ticker": "NWG",
    "weight": 0.11,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.55,
    "currency": "USD"
  },
  {
    "name": "GOLDMAN SACHS GROUP INC/THE",
    "ticker": "GS",
    "weight": 0.11,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.52,
    "currency": "USD"
  },
  {
    "name": "DNB BANK ASA (FRN) MTN 144A",
    "ticker": "DNBNO",
    "weight": 0.11,
    "sector": "Banking",
    "country": "Norway",
    "assetClass": "Fixed Income",
    "coupon": 4.68,
    "currency": "USD"
  },
  {
    "name": "JOHN DEERE CAPITAL CORP MTN",
    "ticker": "DE",
    "weight": 0.11,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.28,
    "currency": "USD"
  },
  {
    "name": "TOYOTA MOTOR CREDIT CORP MTN",
    "ticker": "TOYOTA",
    "weight": 0.11,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.1,
    "currency": "USD"
  },
  {
    "name": "TORONTO-DOMINION BANK/THE MTN",
    "ticker": "TD",
    "weight": 0.11,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 0.0,
    "currency": "USD"
  },
  {
    "name": "SKANDINAVISKA ENSKILDA BANKEN AB MTN 144A",
    "ticker": "SEB",
    "weight": 0.11,
    "sector": "Banking",
    "country": "Sweden",
    "assetClass": "Fixed Income",
    "coupon": 4.69,
    "currency": "USD"
  },
  {
    "name": "HEWLETT PACKARD ENTERPRISE CO",
    "ticker": "HPE",
    "weight": 0.11,
    "sector": "Technology",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.63,
    "currency": "USD"
  },
  {
    "name": "COOPERATIEVE RABOBANK UA (NEW YORK MTN",
    "ticker": "RABOBK",
    "weight": 0.11,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 4.51,
    "currency": "USD"
  },
  {
    "name": "TOYOTA MOTOR CREDIT CORP (FRN) MTN",
    "ticker": "TOYOTA",
    "weight": 0.11,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.07,
    "currency": "USD"
  },
  {
    "name": "PNC BANK NA (FRN)",
    "ticker": "PNC",
    "weight": 0.11,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.34,
    "currency": "USD"
  },
  {
    "name": "COOPERATIEVE RABOBANK UA (NEW YORK MTN",
    "ticker": "RABOBK",
    "weight": 0.11,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 3.64,
    "currency": "USD"
  },
  {
    "name": "GOLDMAN SACHS GROUP INC/THE",
    "ticker": "GS",
    "weight": 0.11,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.44,
    "currency": "USD"
  },
  {
    "name": "NATIONWIDE BUILDING SOCIETY MTN 144A",
    "ticker": "NWIDE",
    "weight": 0.11,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.63,
    "currency": "USD"
  },
  {
    "name": "CANADIAN IMP BANK OF COM FRN",
    "ticker": "CM",
    "weight": 0.11,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.56,
    "currency": "USD"
  },
  {
    "name": "ATHENE GLOBAL FUNDING (FRN) MTN 144A",
    "ticker": "ATH",
    "weight": 0.11,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.43,
    "currency": "USD"
  },
  {
    "name": "JOHN DEERE CAPITAL CORP MTN",
    "ticker": "DE",
    "weight": 0.11,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.18,
    "currency": "USD"
  },
  {
    "name": "BPCE SA (FRN) MTN 144A",
    "ticker": "BPCEGP",
    "weight": 0.11,
    "sector": "Banking",
    "country": "France",
    "assetClass": "Fixed Income",
    "coupon": 5.59,
    "currency": "USD"
  },
  {
    "name": "CONSTELLATION ENERGY GEN (FRN)",
    "ticker": "CEG",
    "weight": 0.11,
    "sector": "Electric",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.2,
    "currency": "USD"
  },
  {
    "name": "NATIONWIDE BUILDING SOCIETY (FRN) MTN 144A",
    "ticker": "NWIDE",
    "weight": 0.11,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.68,
    "currency": "USD"
  },
  {
    "name": "BARCLAYS PLC (FRN)",
    "ticker": "BACR",
    "weight": 0.1,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 5.59,
    "currency": "USD"
  },
  {
    "name": "US BANK NATIONAL ASSOCIATION (FRN) MTN",
    "ticker": "USB",
    "weight": 0.1,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.28,
    "currency": "USD"
  },
  {
    "name": "ATHENE GLOBAL FUNDING MTN 144A",
    "ticker": "ATH",
    "weight": 0.1,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.66,
    "currency": "USD"
  },
  {
    "name": "HCA INC",
    "ticker": "HCA",
    "weight": 0.1,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.52,
    "currency": "USD"
  },
  {
    "name": "MERCK & CO INC",
    "ticker": "MRK",
    "weight": 0.1,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 3.99,
    "currency": "USD"
  },
  {
    "name": "BANQUE FEDERATIVE DU CREDIT MUTUEL 144A",
    "ticker": "BFCM",
    "weight": 0.1,
    "sector": "Banking",
    "country": "France",
    "assetClass": "Fixed Income",
    "coupon": 4.69,
    "currency": "USD"
  },
  {
    "name": "HYUNDAI CAPITAL AMERICA MTN 144A",
    "ticker": "HYNMTR",
    "weight": 0.1,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.5,
    "currency": "USD"
  },
  {
    "name": "HYUNDAI CAPITAL AMERICA MTN 144A",
    "ticker": "HYNMTR",
    "weight": 0.1,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.7,
    "currency": "USD"
  },
  {
    "name": "GOLDMAN SACHS GROUP INC (FRN)",
    "ticker": "GS",
    "weight": 0.1,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 5.47,
    "currency": "USD"
  },
  {
    "name": "EXPORT-IMPORT BANK OF KOREA",
    "ticker": "EIBKOR",
    "weight": 0.1,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 3.99,
    "currency": "USD"
  },
  {
    "name": "F&G GLOBAL FUNDING MTN 144A",
    "ticker": "FG",
    "weight": 0.1,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.98,
    "currency": "USD"
  },
  {
    "name": "GENERAL MOTORS FINANCIAL (FRN)",
    "ticker": "GM",
    "weight": 0.1,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.89,
    "currency": "USD"
  },
  {
    "name": "LG ENERGY SOLUTION LTD 144A",
    "ticker": "LGENSO",
    "weight": 0.1,
    "sector": "Consumer Cyclical",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 5.18,
    "currency": "USD"
  },
  {
    "name": "AMERICAN HONDA FINANCE CORP (FRN) MTN",
    "ticker": "HNDA",
    "weight": 0.1,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.33,
    "currency": "USD"
  },
  {
    "name": "TORONTO-DOMINION BANK/THE MTN",
    "ticker": "TD",
    "weight": 0.1,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.38,
    "currency": "USD"
  },
  {
    "name": "MASTERCARD INC",
    "ticker": "MA",
    "weight": 0.1,
    "sector": "Technology",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.08,
    "currency": "USD"
  },
  {
    "name": "NORDIC INVESTMENT BANK 144A",
    "ticker": "NIB",
    "weight": 0.1,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.89,
    "currency": "USD"
  },
  {
    "name": "NATIONAL AUSTRALIA BANK LTD MTN 144A",
    "ticker": "NAB",
    "weight": 0.1,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.2,
    "currency": "USD"
  },
  {
    "name": "NORDEA BANK ABP (FRN) MTN 144A",
    "ticker": "NDAFH",
    "weight": 0.1,
    "sector": "Banking",
    "country": "Finland",
    "assetClass": "Fixed Income",
    "coupon": 4.46,
    "currency": "USD"
  },
  {
    "name": "JOHN DEERE CAPITAL CORP MTN",
    "ticker": "DE",
    "weight": 0.1,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.01,
    "currency": "USD"
  },
  {
    "name": "BANQUE FEDERATIVE DU CREDIT MUTUEL MTN 144A",
    "ticker": "BFCM",
    "weight": 0.1,
    "sector": "Banking",
    "country": "France",
    "assetClass": "Fixed Income",
    "coupon": 4.61,
    "currency": "USD"
  },
  {
    "name": "INTERNATIONAL FINANCE CORP MTN",
    "ticker": "IFC",
    "weight": 0.1,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.9,
    "currency": "USD"
  },
  {
    "name": "HYUNDAI CAPITAL AMERICA MTN 144A",
    "ticker": "HYNMTR",
    "weight": 0.1,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.53,
    "currency": "USD"
  },
  {
    "name": "MIZUHO FINANCIAL GROUP INC",
    "ticker": "MIZUHO",
    "weight": 0.1,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.86,
    "currency": "USD"
  },
  {
    "name": "CATERPILLAR FINANCIAL SERVICES COR MTN",
    "ticker": "CAT",
    "weight": 0.1,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.05,
    "currency": "USD"
  },
  {
    "name": "BMW US CAPITAL LLC 144A",
    "ticker": "BMW",
    "weight": 0.1,
    "sector": "Consumer Cyclical",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.54,
    "currency": "USD"
  },
  {
    "name": "VOLKSWAGEN GROUP OF AMERICA FINANC 144A",
    "ticker": "VW",
    "weight": 0.1,
    "sector": "Consumer Cyclical",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.68,
    "currency": "USD"
  },
  {
    "name": "CDP FINANCIAL INC 144A",
    "ticker": "CADEPO",
    "weight": 0.1,
    "sector": "Local Authority",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 3.92,
    "currency": "USD"
  },
  {
    "name": "COREBRIDGE GLOBAL FUNDING MTN 144A",
    "ticker": "CRBG",
    "weight": 0.1,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.49,
    "currency": "USD"
  },
  {
    "name": "MITSUBISHI UFJ FINANCIAL GROUP FRN",
    "ticker": "MUFG",
    "weight": 0.1,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.43,
    "currency": "USD"
  },
  {
    "name": "RIO TINTO FINANCE (USA) PLC",
    "ticker": "RIOLN",
    "weight": 0.1,
    "sector": "Basic Industry",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.47,
    "currency": "USD"
  },
  {
    "name": "ROYAL BANK OF CANADA MTN",
    "ticker": "RY",
    "weight": 0.1,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.21,
    "currency": "USD"
  },
  {
    "name": "GENERAL MOTORS FINANCIAL CO INC (F",
    "ticker": "GM",
    "weight": 0.1,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.83,
    "currency": "USD"
  },
  {
    "name": "AMERICAN HONDA FINANCE CORPORATION MTN",
    "ticker": "HNDA",
    "weight": 0.1,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.36,
    "currency": "USD"
  },
  {
    "name": "AMERICAN EXPRESS COMPANY (FRN)",
    "ticker": "AXP",
    "weight": 0.1,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.64,
    "currency": "USD"
  },
  {
    "name": "STELLANTIS FINANCE US INC (FRN) 144A",
    "ticker": "STLA",
    "weight": 0.09,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 5.32,
    "currency": "USD"
  },
  {
    "name": "SANOFI SA MTN",
    "ticker": "SANFP",
    "weight": 0.09,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.08,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY (FRN) MTN",
    "ticker": "MS",
    "weight": 0.09,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.72,
    "currency": "USD"
  },
  {
    "name": "JPMORGAN CHASE & CO (FRN) MTN",
    "ticker": "JPM",
    "weight": 0.09,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.47,
    "currency": "USD"
  },
  {
    "name": "PACIFIC LIFE GLOBAL FUNDING II MTN 144A",
    "ticker": "PACLIF",
    "weight": 0.09,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 0.0,
    "currency": "USD"
  },
  {
    "name": "MIZUHO FINANCIAL GROUP INC (FRN)",
    "ticker": "MIZUHO",
    "weight": 0.09,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.7,
    "currency": "USD"
  },
  {
    "name": "PHILIP MORRIS INTERNATIONAL INC",
    "ticker": "PM",
    "weight": 0.09,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.48,
    "currency": "USD"
  },
  {
    "name": "TRUIST BANK (FRN)",
    "ticker": "TFC",
    "weight": 0.09,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 0.0,
    "currency": "USD"
  },
  {
    "name": "BANK OF NOVA SCOTIA (FRN) MTN",
    "ticker": "BNS",
    "weight": 0.09,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.36,
    "currency": "USD"
  },
  {
    "name": "JOHN DEERE CAPITAL CORP MTN",
    "ticker": "DE",
    "weight": 0.09,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.21,
    "currency": "USD"
  },
  {
    "name": "MASTERCARD INC",
    "ticker": "MA",
    "weight": 0.09,
    "sector": "Technology",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.03,
    "currency": "USD"
  },
  {
    "name": "NEW YORK LIFE GLOBAL FUNDING MTN 144A",
    "ticker": "NYLIFE",
    "weight": 0.09,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.29,
    "currency": "USD"
  },
  {
    "name": "METROPOLITAN LIFE GLOBAL (FRN) MTN 144A",
    "ticker": "MET",
    "weight": 0.09,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.33,
    "currency": "USD"
  },
  {
    "name": "ACCENTURE CAPITAL INC",
    "ticker": "ACN",
    "weight": 0.09,
    "sector": "Technology",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.43,
    "currency": "USD"
  },
  {
    "name": "AMERICAN EXPRESS COMPANY (FRN)",
    "ticker": "AXP",
    "weight": 0.09,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.64,
    "currency": "USD"
  },
  {
    "name": "HYUNDAI CAPITAL AMERICA MTN 144A",
    "ticker": "HYNMTR",
    "weight": 0.09,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.92,
    "currency": "USD"
  },
  {
    "name": "NONGHYUP BANK MTN RegS",
    "ticker": "NACF",
    "weight": 0.09,
    "sector": "Government Sponsored",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.41,
    "currency": "USD"
  },
  {
    "name": "HYUNDAI CAPITAL AMERICA MTN 144A",
    "ticker": "HYNMTR",
    "weight": 0.09,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.74,
    "currency": "USD"
  },
  {
    "name": "NOMURA HOLDINGS INC",
    "ticker": "NOMURA",
    "weight": 0.09,
    "sector": "Brokerage/Asset Managers/Exchanges",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.73,
    "currency": "USD"
  },
  {
    "name": "NTT FINANCE CORP 144A",
    "ticker": "NTT",
    "weight": 0.09,
    "sector": "Communications",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.45,
    "currency": "USD"
  },
  {
    "name": "NORTHWESTERN MUTUAL GLOBAL (FRN) MTN 144A",
    "ticker": "NWMLIC",
    "weight": 0.09,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.29,
    "currency": "USD"
  },
  {
    "name": "ROYAL BANK OF CANADA (FRN) MTN",
    "ticker": "RY",
    "weight": 0.09,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.46,
    "currency": "USD"
  },
  {
    "name": "GOLDMAN SACHS GROUP INC (FRN)",
    "ticker": "GS",
    "weight": 0.09,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 3.61,
    "currency": "USD"
  },
  {
    "name": "HEWLETT PACKARD ENTERPRISE CO",
    "ticker": "HPE",
    "weight": 0.09,
    "sector": "Technology",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.61,
    "currency": "USD"
  },
  {
    "name": "SHELL FINANCE US INC Energy",
    "ticker": "RDSALN",
    "weight": 0.09,
    "sector": "Other",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.41,
    "currency": "USD"
  },
  {
    "name": "KEURIG DR PEPPER INC",
    "ticker": "KDP",
    "weight": 0.09,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.21,
    "currency": "USD"
  },
  {
    "name": "GOLDMAN SACHS BANK USA (FRN)",
    "ticker": "GS",
    "weight": 0.09,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.35,
    "currency": "USD"
  },
  {
    "name": "STATE STREET CORP (FRN)",
    "ticker": "STT",
    "weight": 0.09,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.47,
    "currency": "USD"
  },
  {
    "name": "BANCO SANTANDER SA (FRN)",
    "ticker": "SANTAN",
    "weight": 0.09,
    "sector": "Banking",
    "country": "Spain",
    "assetClass": "Fixed Income",
    "coupon": 5.09,
    "currency": "USD"
  },
  {
    "name": "KOREA HOUSING FINANCE CORP MTN RegS",
    "ticker": "KHFC",
    "weight": 0.09,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.08,
    "currency": "USD"
  },
  {
    "name": "SANTANDER UK GROUP HOLD (FRN)",
    "ticker": "SANUK",
    "weight": 0.09,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.73,
    "currency": "USD"
  },
  {
    "name": "GENERAL MOTORS FINANCIAL CO INC",
    "ticker": "GM",
    "weight": 0.08,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 5.02,
    "currency": "USD"
  },
  {
    "name": "MERRILL LYNCH & CO INC",
    "ticker": "BAC",
    "weight": 0.08,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.69,
    "currency": "USD"
  },
  {
    "name": "TORONTO-DOMINION BANK/THE MTN",
    "ticker": "TD",
    "weight": 0.08,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.54,
    "currency": "USD"
  },
  {
    "name": "MORGAN STANLEY BANK NA (FRN)",
    "ticker": "MS",
    "weight": 0.08,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.79,
    "currency": "USD"
  },
  {
    "name": "MERCEDES-BENZ FINANCE NORTH (FRN) 144A",
    "ticker": "MBGGR",
    "weight": 0.08,
    "sector": "Consumer Cyclical",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.33,
    "currency": "USD"
  },
  {
    "name": "BANK OF NOVA SCOTIA (FRN) MTN",
    "ticker": "BNS",
    "weight": 0.08,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.7,
    "currency": "USD"
  },
  {
    "name": "NONGHYUP BANK MTN RegS",
    "ticker": "NACF",
    "weight": 0.08,
    "sector": "Government Sponsored",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.29,
    "currency": "USD"
  },
  {
    "name": "BANCO SANTANDER SA (FRN)",
    "ticker": "SANTAN",
    "weight": 0.08,
    "sector": "Banking",
    "country": "Spain",
    "assetClass": "Fixed Income",
    "coupon": 4.74,
    "currency": "USD"
  },
  {
    "name": "COOPERATIEVE RABOBANK UA (NEW YORK MTN",
    "ticker": "RABOBK",
    "weight": 0.08,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 4.22,
    "currency": "USD"
  },
  {
    "name": "BANK OF NEW YORK MELLON CORP/THE MTN",
    "ticker": "BNY",
    "weight": 0.08,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.31,
    "currency": "USD"
  },
  {
    "name": "AMERICAN HONDA FINANCE CORPORATION MTN",
    "ticker": "HNDA",
    "weight": 0.08,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.53,
    "currency": "USD"
  },
  {
    "name": "AMERICAN EXPRESS COMPANY (FRN)",
    "ticker": "AXP",
    "weight": 0.08,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.62,
    "currency": "USD"
  },
  {
    "name": "BANQUE FEDERATIVE DU CREDIT MUTUEL 144A",
    "ticker": "BFCM",
    "weight": 0.08,
    "sector": "Banking",
    "country": "France",
    "assetClass": "Fixed Income",
    "coupon": 4.75,
    "currency": "USD"
  },
  {
    "name": "PACIFIC LIFE GLOBAL FUNDING II MTN 144A",
    "ticker": "PACLIF",
    "weight": 0.08,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.72,
    "currency": "USD"
  },
  {
    "name": "NATWEST GROUP PLC",
    "ticker": "NWG",
    "weight": 0.08,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.94,
    "currency": "USD"
  },
  {
    "name": "ROYAL BANK OF CANADA MTN",
    "ticker": "RY",
    "weight": 0.08,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.26,
    "currency": "USD"
  },
  {
    "name": "TOYOTA MOTOR CREDIT CORP (FRN) MTN",
    "ticker": "TOYOTA",
    "weight": 0.08,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.41,
    "currency": "USD"
  },
  {
    "name": "COOPERATIEVE RABOBANK UA (NEW YORK MTN",
    "ticker": "RABOBK",
    "weight": 0.08,
    "sector": "Banking",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 4.21,
    "currency": "USD"
  },
  {
    "name": "TOYOTA MOTOR CREDIT CORP MTN",
    "ticker": "TOYOTA",
    "weight": 0.08,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.34,
    "currency": "USD"
  },
  {
    "name": "ASB BANK LTD MTN 144A",
    "ticker": "ASBBNK",
    "weight": 0.08,
    "sector": "Banking",
    "country": "New Zealand",
    "assetClass": "Fixed Income",
    "coupon": 4.52,
    "currency": "USD"
  },
  {
    "name": "KODIT GLOBAL 2025-1 CO LTD RegS",
    "ticker": "KOCRGF",
    "weight": 0.08,
    "sector": "Government Sponsored",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.27,
    "currency": "USD"
  },
  {
    "name": "CANADIAN IMPERIAL BANK (FRN)",
    "ticker": "CM",
    "weight": 0.08,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 3.63,
    "currency": "USD"
  },
  {
    "name": "NATIONAL RURAL UTILITIES COOPERATI MTN",
    "ticker": "NRUC",
    "weight": 0.08,
    "sector": "Electric",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.53,
    "currency": "USD"
  },
  {
    "name": "FIFTH THIRD BANK NA (FRN) MTN",
    "ticker": "FITB",
    "weight": 0.08,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.44,
    "currency": "USD"
  },
  {
    "name": "MITSUBISHI CORPORATION 144A",
    "ticker": "MITCO",
    "weight": 0.08,
    "sector": "Industrial Other",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.33,
    "currency": "USD"
  },
  {
    "name": "NATWEST GROUP PLC",
    "ticker": "NWG",
    "weight": 0.07,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.72,
    "currency": "USD"
  },
  {
    "name": "BANCO SANTANDER SA",
    "ticker": "SANTAN",
    "weight": 0.07,
    "sector": "Banking",
    "country": "Spain",
    "assetClass": "Fixed Income",
    "coupon": 4.58,
    "currency": "USD"
  },
  {
    "name": "SOCIETE GENERALE SA (FRN) MTN 144A",
    "ticker": "SOCGEN",
    "weight": 0.07,
    "sector": "Banking",
    "country": "France",
    "assetClass": "Fixed Income",
    "coupon": 4.72,
    "currency": "USD"
  },
  {
    "name": "MIZUHO FINANCIAL GROUP (FRN)",
    "ticker": "MIZUHO",
    "weight": 0.07,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.44,
    "currency": "USD"
  },
  {
    "name": "NATIONAL SECURITIES CLEARING CORP 144A",
    "ticker": "NSCCLF",
    "weight": 0.07,
    "sector": "Brokerage/Asset Managers/Exchanges",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.06,
    "currency": "USD"
  },
  {
    "name": "NATIONAL AUSTRALIA BANK LTD MTN 144A",
    "ticker": "NAB",
    "weight": 0.07,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.17,
    "currency": "USD"
  },
  {
    "name": "JOHN DEERE CAPITAL CORP MTN",
    "ticker": "DE",
    "weight": 0.07,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 3.57,
    "currency": "USD"
  },
  {
    "name": "US BANK NATIONAL ASSOCIATION (FRN) MTN",
    "ticker": "USB",
    "weight": 0.07,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.53,
    "currency": "USD"
  },
  {
    "name": "STANDARD CHARTERED BANK (NEW YORK MTN",
    "ticker": "STANLN",
    "weight": 0.07,
    "sector": "Banking",
    "country": "United Kingdom",
    "assetClass": "Fixed Income",
    "coupon": 4.26,
    "currency": "USD"
  },
  {
    "name": "TOYOTA MOTOR CREDIT CORP MTN",
    "ticker": "TOYOTA",
    "weight": 0.07,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.22,
    "currency": "USD"
  },
  {
    "name": "BANQUE FEDERATIVE DU CREDIT MUTUEL MTN 144A",
    "ticker": "BFCM",
    "weight": 0.07,
    "sector": "Banking",
    "country": "France",
    "assetClass": "Fixed Income",
    "coupon": 4.43,
    "currency": "USD"
  },
  {
    "name": "CATERPILLAR FINANCIAL SERV (FRN) MTN",
    "ticker": "CAT",
    "weight": 0.07,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 3.99,
    "currency": "USD"
  },
  {
    "name": "NATIONAL RURAL UTILITIES COOPERATI MTN",
    "ticker": "NRUC",
    "weight": 0.07,
    "sector": "Electric",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.05,
    "currency": "USD"
  },
  {
    "name": "COREBRIDGE GLOBAL FUNDING MTN 144A",
    "ticker": "CRBG",
    "weight": 0.06,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.36,
    "currency": "USD"
  },
  {
    "name": "AMPHENOL CORPORATION",
    "ticker": "APH",
    "weight": 0.06,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.17,
    "currency": "USD"
  },
  {
    "name": "WELLS FARGO BANK NA",
    "ticker": "WFC",
    "weight": 0.06,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.69,
    "currency": "USD"
  },
  {
    "name": "ALPHABET INC (FRN)",
    "ticker": "GOOGL",
    "weight": 0.06,
    "sector": "Technology",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.14,
    "currency": "USD"
  },
  {
    "name": "NORDEA BANK ABP MTN 144A",
    "ticker": "NDAFH",
    "weight": 0.06,
    "sector": "Banking",
    "country": "Finland",
    "assetClass": "Fixed Income",
    "coupon": 4.64,
    "currency": "USD"
  },
  {
    "name": "SKANDINAVISKA ENSKILDA BANKEN AB MTN 144A",
    "ticker": "SEB",
    "weight": 0.06,
    "sector": "Banking",
    "country": "Sweden",
    "assetClass": "Fixed Income",
    "coupon": 4.31,
    "currency": "USD"
  },
  {
    "name": "JACKSON NATIONAL LIFE GLOBAL FUNDI MTN 144A",
    "ticker": "JXN",
    "weight": 0.06,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.54,
    "currency": "USD"
  },
  {
    "name": "STATE STREET CORP (FRN)",
    "ticker": "STT",
    "weight": 0.06,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.28,
    "currency": "USD"
  },
  {
    "name": "STATE STREET CORP (FRN)",
    "ticker": "STT",
    "weight": 0.06,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.59,
    "currency": "USD"
  },
  {
    "name": "HSBC USA INC",
    "ticker": "HSBC",
    "weight": 0.06,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.6,
    "currency": "USD"
  },
  {
    "name": "SOCIETE GENERALE SA (FRN) MTN 144A",
    "ticker": "SOCGEN",
    "weight": 0.06,
    "sector": "Banking",
    "country": "France",
    "assetClass": "Fixed Income",
    "coupon": 5.26,
    "currency": "USD"
  },
  {
    "name": "NEW YORK LIFE GLOBAL FUNDING MTN 144A",
    "ticker": "NYLIFE",
    "weight": 0.06,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.21,
    "currency": "USD"
  },
  {
    "name": "C CITIBANK NA (FRN)",
    "ticker": "C CITIBANK NA (FRN)",
    "weight": 0.06,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.13,
    "currency": "USD"
  },
  {
    "name": "ROCHE HOLDINGS INC (FRN) 144A",
    "ticker": "ROSW",
    "weight": 0.06,
    "sector": "Consumer Non-Cyclical",
    "country": "Switzerland",
    "assetClass": "Fixed Income",
    "coupon": 4.36,
    "currency": "USD"
  },
  {
    "name": "BANK OF NEW YORK MELLON CORP(FRN) MTN",
    "ticker": "BNY",
    "weight": 0.06,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.24,
    "currency": "USD"
  },
  {
    "name": "GBP CASH",
    "ticker": "GBP",
    "weight": 0.05,
    "sector": "Other",
    "country": "United Kingdom",
    "assetClass": "Cash",
    "coupon": 0.0,
    "currency": "GBP"
  },
  {
    "name": "MERCK & CO INC",
    "ticker": "MRK",
    "weight": 0.05,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.09,
    "currency": "USD"
  },
  {
    "name": "BANQUE DEVELOPPT CONSEIL EUROPE 9 MTN 144A",
    "ticker": "COE",
    "weight": 0.05,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.88,
    "currency": "USD"
  },
  {
    "name": "KOREA NATIONAL OIL CORP MTN RegS",
    "ticker": "KOROIL",
    "weight": 0.05,
    "sector": "Owned No Guarantee",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.29,
    "currency": "USD"
  },
  {
    "name": "AMERICAN HONDA FINANCE CORPORATION MTN",
    "ticker": "HNDA",
    "weight": 0.05,
    "sector": "Consumer Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.42,
    "currency": "USD"
  },
  {
    "name": "INTER-AMERICAN DEVELOPMENT BANK MTN",
    "ticker": "IADB",
    "weight": 0.04,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.06,
    "currency": "USD"
  },
  {
    "name": "SAMMONS FINANCIAL GROUP GLOBAL FUN 144A",
    "ticker": "SAMMON",
    "weight": 0.04,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.47,
    "currency": "USD"
  },
  {
    "name": "KEB HANA BANK MTN RegS",
    "ticker": "KEBHNB",
    "weight": 0.04,
    "sector": "Banking",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.21,
    "currency": "USD"
  },
  {
    "name": "DAIMLER TRUCK FINANCE NORTH AMERIC 144A",
    "ticker": "DTRGR",
    "weight": 0.04,
    "sector": "Consumer Cyclical",
    "country": "Germany",
    "assetClass": "Fixed Income",
    "coupon": 4.43,
    "currency": "USD"
  },
  {
    "name": "ASIAN DEVELOPMENT BANK MTN",
    "ticker": "ASIA",
    "weight": 0.03,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.68,
    "currency": "USD"
  },
  {
    "name": "COMMONWEALTH BANK OF AUSTRALIA MTN 144A",
    "ticker": "CBAAU",
    "weight": 0.03,
    "sector": "Banking",
    "country": "Australia",
    "assetClass": "Fixed Income",
    "coupon": 4.59,
    "currency": "USD"
  },
  {
    "name": "CATERPILLAR FINANCIAL SERVICES COR MTN",
    "ticker": "CAT",
    "weight": 0.03,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.14,
    "currency": "USD"
  },
  {
    "name": "GLENCORE FUNDING LLC 144A",
    "ticker": "GLENLN",
    "weight": 0.03,
    "sector": "Basic Industry",
    "country": "Switzerland",
    "assetClass": "Fixed Income",
    "coupon": 4.37,
    "currency": "USD"
  },
  {
    "name": "UBS AG (STAMFORD BRANCH) MTN",
    "ticker": "UBS",
    "weight": 0.03,
    "sector": "Banking",
    "country": "Switzerland",
    "assetClass": "Fixed Income",
    "coupon": 4.12,
    "currency": "USD"
  },
  {
    "name": "SVENSKA HANDELSBANKEN AB MTN 144A",
    "ticker": "SHBASS",
    "weight": 0.03,
    "sector": "Banking",
    "country": "Sweden",
    "assetClass": "Fixed Income",
    "coupon": 4.37,
    "currency": "USD"
  },
  {
    "name": "ROYAL BANK OF CANADA MTN",
    "ticker": "RY",
    "weight": 0.03,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 5.07,
    "currency": "USD"
  },
  {
    "name": "INTERNATIONAL BANK FOR RECONSTRUCT",
    "ticker": "IBRD",
    "weight": 0.03,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 4.03,
    "currency": "USD"
  },
  {
    "name": "GEORGIA POWER COMPANY",
    "ticker": "SO",
    "weight": 0.02,
    "sector": "Electric",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.04,
    "currency": "USD"
  },
  {
    "name": "WOORI BANK MTN RegS",
    "ticker": "WOORIB",
    "weight": 0.02,
    "sector": "Banking",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 0.0,
    "currency": "USD"
  },
  {
    "name": "PFIZER INC",
    "ticker": "PFE",
    "weight": 0.02,
    "sector": "Consumer Non-Cyclical",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.13,
    "currency": "USD"
  },
  {
    "name": "NATIONAL SECURITIES CLEARING (FRN) 144A",
    "ticker": "NSCCLF",
    "weight": 0.02,
    "sector": "Brokerage/Asset Managers/Exchanges",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 3.64,
    "currency": "USD"
  },
  {
    "name": "BNG BANK NV 144A",
    "ticker": "BNG",
    "weight": 0.02,
    "sector": "Owned No Guarantee",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 4.76,
    "currency": "USD"
  },
  {
    "name": "BNG BANK NV 144A",
    "ticker": "BNG",
    "weight": 0.02,
    "sector": "Owned No Guarantee",
    "country": "Netherlands",
    "assetClass": "Fixed Income",
    "coupon": 4.63,
    "currency": "USD"
  },
  {
    "name": "KOMMUNALBANKEN AS MTN 144A",
    "ticker": "KBN",
    "weight": 0.02,
    "sector": "Owned No Guarantee",
    "country": "Norway",
    "assetClass": "Fixed Income",
    "coupon": 3.96,
    "currency": "USD"
  },
  {
    "name": "INTER-AMERICAN DEVELOPMENT BANK MTN",
    "ticker": "IADB",
    "weight": 0.02,
    "sector": "Supranational",
    "country": "Supranational",
    "assetClass": "Fixed Income",
    "coupon": 3.79,
    "currency": "USD"
  },
  {
    "name": "JOHN DEERE CAPITAL CORP MTN",
    "ticker": "DE",
    "weight": 0.02,
    "sector": "Capital Goods",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.01,
    "currency": "USD"
  },
  {
    "name": "LG ENERGY SOLUTION LTD RegS",
    "ticker": "LGENSO",
    "weight": 0.01,
    "sector": "Consumer Cyclical",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 5.18,
    "currency": "USD"
  },
  {
    "name": "CDP FINANCIAL INC 144A",
    "ticker": "CADEPO",
    "weight": 0.01,
    "sector": "Local Authority",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.13,
    "currency": "USD"
  },
  {
    "name": "TRUIST BANK (FRN)",
    "ticker": "TFC",
    "weight": 0.01,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 3.64,
    "currency": "USD"
  },
  {
    "name": "EUR CASH",
    "ticker": "EUR",
    "weight": 0.01,
    "sector": "Other",
    "country": "European Union",
    "assetClass": "Cash",
    "coupon": 0.0,
    "currency": "EUR"
  },
  {
    "name": "KOOKMIN BANK MTN RegS",
    "ticker": "CITNAT",
    "weight": 0.01,
    "sector": "Banking",
    "country": "Korea (South)",
    "assetClass": "Fixed Income",
    "coupon": 4.1,
    "currency": "USD"
  },
  {
    "name": "CPPIB CAPITAL INC 144A",
    "ticker": "CPPIBC",
    "weight": 0.01,
    "sector": "Owned No Guarantee",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 4.03,
    "currency": "USD"
  },
  {
    "name": "EQUITABLE AMERICA GLOBAL FUNDING MTN 144A",
    "ticker": "EQH",
    "weight": 0.01,
    "sector": "Insurance",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.34,
    "currency": "USD"
  },
  {
    "name": "BANK OF MONTREAL",
    "ticker": "BMO",
    "weight": 0.01,
    "sector": "Banking",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 3.64,
    "currency": "USD"
  },
  {
    "name": "MXN CASH",
    "ticker": "MXN",
    "weight": 0.0,
    "sector": "Other",
    "country": "Mexico",
    "assetClass": "Cash",
    "coupon": 0.0,
    "currency": "MXN"
  },
  {
    "name": "PSP CAPITAL INC 144A",
    "ticker": "PSPCAP",
    "weight": 0.0,
    "sector": "Owned No Guarantee",
    "country": "Canada",
    "assetClass": "Fixed Income",
    "coupon": 3.97,
    "currency": "USD"
  },
  {
    "name": "SUMITOMO MITSUI FINANCIAL FRN",
    "ticker": "SUMIBK",
    "weight": 0.0,
    "sector": "Banking",
    "country": "Japan",
    "assetClass": "Fixed Income",
    "coupon": 4.8,
    "currency": "USD"
  },
  {
    "name": "C CITIGROUP INC (FRN)",
    "ticker": "C CITIGROUP INC (FRN)",
    "weight": 0.0,
    "sector": "Banking",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 3.62,
    "currency": "USD"
  },
  {
    "name": "NATIONAL RURAL UTILITIES COOPERATI MTN",
    "ticker": "NRUC",
    "weight": 0.0,
    "sector": "Electric",
    "country": "United States",
    "assetClass": "Fixed Income",
    "coupon": 4.18,
    "currency": "USD"
  },
  {
    "name": "USD CASH",
    "ticker": "USD",
    "weight": -0.1,
    "sector": "Other",
    "country": "United States",
    "assetClass": "Cash",
    "coupon": 0.0,
    "currency": "USD"
  }
];

export const FLOA_SECTOR_ALLOCATIONS: SectorAllocation[] = [
  { sector: 'Banking', weight: 48.54 },
  { sector: 'Supranational', weight: 20.28 },
  { sector: 'Consumer Cyclical', weight: 8.76 },
  { sector: 'Owned No Guarantee', weight: 5.81 },
  { sector: 'Insurance', weight: 4.88 },
  { sector: 'Other', weight: 3.57 },
  { sector: 'Consumer Non-Cyclical', weight: 3.01 },
  { sector: 'Capital Goods', weight: 2.56 },
  { sector: 'Technology', weight: 1.03 },
  { sector: 'Electric', weight: 0.79 },
  { sector: 'Communications', weight: 0.77 }
];

export const FLOA_COUNTRY_ALLOCATIONS: CountryAllocation[] = [
  {
    "country": "United States",
    "weight": 34.44
  },
  {
    "country": "Supranational",
    "weight": 20.23
  },
  {
    "country": "Australia",
    "weight": 7.97
  },
  {
    "country": "Canada",
    "weight": 6.53
  },
  {
    "country": "United Kingdom",
    "weight": 5.65
  },
  {
    "country": "Japan",
    "weight": 4.06
  },
  {
    "country": "Korea (South)",
    "weight": 3.54
  },
  {
    "country": "Netherlands",
    "weight": 3.0
  },
  {
    "country": "Germany",
    "weight": 2.53
  },
  {
    "country": "Ireland",
    "weight": 1.93
  },
  {
    "country": "Sweden",
    "weight": 1.86
  },
  {
    "country": "France",
    "weight": 1.76
  },
  {
    "country": "Norway",
    "weight": 1.58
  },
  {
    "country": "Switzerland",
    "weight": 1.14
  },
  {
    "country": "Finland",
    "weight": 1.07
  },
  {
    "country": "Singapore",
    "weight": 1.03
  },
  {
    "country": "New Zealand",
    "weight": 1.01
  },
  {
    "country": "Spain",
    "weight": 0.68
  },
  {
    "country": "European Union",
    "weight": 0.01
  },
  {
    "country": "Mexico",
    "weight": 0.0
  }
];
