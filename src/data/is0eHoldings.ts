// Complete holdings dataset for iShares Gold Producers UCITS ETF (IS0E.DE / SPGP / IAUP)
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

export const IS0E_SECTOR_ALLOCATIONS = [
  {
    "name": "Materials",
    "weight": 99.77
  },
  {
    "name": "Cash and/or Derivatives",
    "weight": 0.26
  }
];

export const IS0E_COUNTRY_ALLOCATIONS = [
  {
    "name": "Canada",
    "weight": 54.61
  },
  {
    "name": "United States",
    "weight": 15.09
  },
  {
    "name": "Australia",
    "weight": 11.36
  },
  {
    "name": "South Africa",
    "weight": 10.2
  },
  {
    "name": "China",
    "weight": 6.29
  },
  {
    "name": "United Kingdom",
    "weight": 1.88
  },
  {
    "name": "Brazil",
    "weight": 0.27
  },
  {
    "name": "Japan",
    "weight": 0.22
  },
  {
    "name": "Hong Kong",
    "weight": 0.11
  },
  {
    "name": "European Union",
    "weight": 0.0
  },
  {
    "name": "Russian Federation",
    "weight": 0.0
  },
  {
    "name": "Other",
    "weight": 0.0
  }
];

export const IS0E_FULL_HOLDINGS: ETFHolding[] = [
  {
    "symbol": "NEM",
    "name": "NEWMONT",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 9.97,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AEM",
    "name": "AGNICO EAGLE MINES LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 9.4,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "ABX",
    "name": "BARRICK MINING CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 8.85,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "WPM",
    "name": "WHEATON PRECIOUS METALS CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 7.11,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "FNV",
    "name": "FRANCO NEVADA CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 5.88,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "AU",
    "name": "ANGLOGOLD ASHANTI PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 4.74,
    "location": "South Africa",
    "currency": "USD"
  },
  {
    "symbol": "GFI",
    "name": "GOLD FIELDS ADR REPRESENTING LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 4.11,
    "location": "South Africa",
    "currency": "USD"
  },
  {
    "symbol": "K",
    "name": "KINROSS GOLD CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 4.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "2899",
    "name": "ZIJIN MINING GROUP LTD H",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 3.64,
    "location": "China",
    "currency": "HKD"
  },
  {
    "symbol": "NST",
    "name": "NORTHERN STAR RESOURCES LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 2.94,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "PAAS",
    "name": "PAN AMERICAN SILVER CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 2.65,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "EVN",
    "name": "EVOLUTION MINING LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 2.33,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "RGLD",
    "name": "ROYAL GOLD INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 2.31,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CDE",
    "name": "COEUR MINING INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 2.24,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AGI",
    "name": "ALAMOS GOLD INC CLASS A",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 1.75,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "EDV",
    "name": "ENDEAVOUR MINING",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 1.27,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "HMY",
    "name": "HARMONY GOLD MINING ADR REPRESENTI",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 1.21,
    "location": "South Africa",
    "currency": "USD"
  },
  {
    "symbol": "IMG",
    "name": "IAMGOLD CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 1.19,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "DPM",
    "name": "DPM METALS INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 1.14,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "ELD",
    "name": "ELDORADO GOLD CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 1.08,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "EQX",
    "name": "EQUINOX GOLD CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 1.04,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "SSRM",
    "name": "SSR MINING INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.84,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "LUG",
    "name": "LUNDIN GOLD INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.79,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "OR",
    "name": "OR ROYALTIES INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.77,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "2099",
    "name": "CHINA GOLD INTERNATIONAL RESOURCES",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.76,
    "location": "China",
    "currency": "HKD"
  },
  {
    "symbol": "OGC",
    "name": "OCEANAGOLD CORPORATION CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.75,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "GMIN",
    "name": "G MINING VENTURES CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.73,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "BTO",
    "name": "B2GOLD CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.73,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "GMD",
    "name": "GENESIS MINERALS LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.7,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "PRU",
    "name": "PERSEUS MINING LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.67,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "1818",
    "name": "ZHAOJIN MINING INDUSTRY LTD H",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.64,
    "location": "China",
    "currency": "HKD"
  },
  {
    "symbol": "RMS",
    "name": "RAMELIUS RESOURCES LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.6,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "CMM",
    "name": "CAPRICORN METALS LTD DEF",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.57,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "KNT",
    "name": "K92 MINING INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.54,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "VAU",
    "name": "VAULT MINERALS LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.52,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "MAU",
    "name": "MONTAGE GOLD CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.52,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "TXG",
    "name": "TOREX GOLD RESOURCES INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.5,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "RRL",
    "name": "REGIS RESOURCES LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.48,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "SKE",
    "name": "SKEENA RESOURCES LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.46,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "CG",
    "name": "CENTERRA GOLD INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.46,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "WGX",
    "name": "WESTGOLD RESOURCES LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.44,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "ARIS",
    "name": "ARIS MINING CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.43,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "2259",
    "name": "ZIJIN GOLD INTERNATIONAL LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.41,
    "location": "China",
    "currency": "HKD"
  },
  {
    "symbol": "WDO",
    "name": "WESDOME GOLD MINES LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.39,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "FVI",
    "name": "FORTUNA MINING CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.36,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "OLA",
    "name": "ORLA MINING LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.35,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "PAF",
    "name": "PAN AFRICAN RESOURCES PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.35,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "WAF",
    "name": "WEST AFRICAN RESOURCES LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.34,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "1787",
    "name": "SHANDONG GOLD MINING LTD H",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.33,
    "location": "China",
    "currency": "HKD"
  },
  {
    "symbol": "SEA",
    "name": "SEABRIDGE GOLD INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.33,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "EMR",
    "name": "EMERALD RESOURCES",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.32,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "AAUC",
    "name": "ALLIED GOLD CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.29,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "TFPM",
    "name": "TRIPLE FLAG PRECIOUS METALS CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.28,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "3330",
    "name": "LINGBAO GOLD GROUP LTD H",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.28,
    "location": "China",
    "currency": "HKD"
  },
  {
    "symbol": "AUGO",
    "name": "AURA MINERALS INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.27,
    "location": "Brazil",
    "currency": "USD"
  },
  {
    "symbol": "HOC",
    "name": "HOCHSCHILD MINING PLC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.26,
    "location": "United Kingdom",
    "currency": "GBP"
  },
  {
    "symbol": "PDI",
    "name": "PREDICTIVE DISCOVERY LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.26,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "NG",
    "name": "NOVAGOLD RESOURCES INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.24,
    "location": "Canada",
    "currency": "USD"
  },
  {
    "symbol": "SX2",
    "name": "SOUTHERN CROSS GOLD CONSOLIDATED C",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.24,
    "location": "Canada",
    "currency": "AUD"
  },
  {
    "symbol": "5857",
    "name": "ARE HOLDINGS INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.22,
    "location": "Japan",
    "currency": "JPY"
  },
  {
    "symbol": "RSG",
    "name": "RESOLUTE MINING LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.21,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "PPTA",
    "name": "PERPETUA RESOURCES CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.2,
    "location": "United States",
    "currency": "CAD"
  },
  {
    "symbol": "BGL",
    "name": "BELLEVUE GOLD LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.19,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "IAUX",
    "name": "I GOLD CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.17,
    "location": "Canada",
    "currency": "USD"
  },
  {
    "symbol": "CYL",
    "name": "CATALYST METALS LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.16,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "OBM",
    "name": "ORA BANDA MINING LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "ALK",
    "name": "ALKANE RESOURCES LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.15,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "6693",
    "name": "CHIFENG JILONG GOLD MINING LTD CLA",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.14,
    "location": "China",
    "currency": "HKD"
  },
  {
    "symbol": "DRD",
    "name": "DRDGOLD ADR REPRESENTING LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.13,
    "location": "South Africa",
    "currency": "USD"
  },
  {
    "symbol": "MUX",
    "name": "MCEWEN INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KCN",
    "name": "KINGSGATE CONSOLIDATED LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.12,
    "location": "Australia",
    "currency": "AUD"
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
    "symbol": "HKD",
    "name": "HKD CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.11,
    "location": "Hong Kong",
    "currency": "HKD"
  },
  {
    "symbol": "ORE",
    "name": "OREZONE GOLD CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.1,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "340",
    "name": "TONGGUAN GOLD GROUP LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.09,
    "location": "China",
    "currency": "HKD"
  },
  {
    "symbol": "PNR",
    "name": "PANTORO GOLD LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "DC",
    "name": "DAKOTA GOLD CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "OGG",
    "name": "OSISKO GOLD GROUP INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "Canada",
    "currency": "USD"
  },
  {
    "symbol": "GROY",
    "name": "GOLD ROYALTY",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "Canada",
    "currency": "USD"
  },
  {
    "symbol": "BC8",
    "name": "BLACK CAT SYNDICATE LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.07,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "ITRG",
    "name": "INTEGRA RESOURCES CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Canada",
    "currency": "USD"
  },
  {
    "symbol": "CTGO",
    "name": "CONTANGO SILVER AND GOLD INC",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SBM",
    "name": "ST BARBARA LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.06,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "VGC",
    "name": "VALOR GOLD CORP",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.02,
    "location": "Canada",
    "currency": "CAD"
  },
  {
    "symbol": "ZAR",
    "name": "ZAR CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.01,
    "location": "South Africa",
    "currency": "ZAR"
  },
  {
    "symbol": "BZFUT",
    "name": "CASH COLLATERAL CAD BZFUT",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.01,
    "location": "Canada",
    "currency": "CAD"
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
    "symbol": "JPY",
    "name": "JPY CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.0,
    "location": "Japan",
    "currency": "JPY"
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
    "symbol": "RUB",
    "name": "RUB CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.0,
    "location": "Russian Federation",
    "currency": "RUB"
  },
  {
    "symbol": "PLZL",
    "name": "PUBLIC JOINT STOCK POLYUS GDR",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Russian Federation",
    "currency": "USD"
  },
  {
    "symbol": "PLZL",
    "name": "POLYUS",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Russian Federation",
    "currency": "RUB"
  },
  {
    "symbol": "FFX",
    "name": "FIREFINCH LTD",
    "sector": "Materials",
    "assetClass": "Equity",
    "weight": 0.0,
    "location": "Australia",
    "currency": "AUD"
  },
  {
    "symbol": "CAD",
    "name": "CAD/USD",
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
    "symbol": "HKD",
    "name": "HKD/USD",
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
    "symbol": "PTU6",
    "name": "S&P/TSE 60 INDEX SEP 26",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Futures",
    "weight": 0.0,
    "location": "Other",
    "currency": "CAD"
  },
  {
    "symbol": "CAD",
    "name": "CAD CASH",
    "sector": "Cash and/or Derivatives",
    "assetClass": "Cash",
    "weight": 0.0,
    "location": "Canada",
    "currency": "CAD"
  }
];
