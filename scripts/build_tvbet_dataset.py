import json

holdings = [
  {
    "symbol": "TLV",
    "name": "Banca Transilvania SA",
    "isin": "ROTLVAACNOR1",
    "sector": "Financials",
    "assetClass": "Equities",
    "weight": 18.48,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "SNP",
    "name": "OMV Petrom SA",
    "isin": "ROSNPPACNOR5",
    "sector": "Energy",
    "assetClass": "Equities",
    "weight": 16.12,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "SNG",
    "name": "S.N.G.N. Romgaz SA",
    "isin": "ROSNGNACNOR3",
    "sector": "Energy",
    "assetClass": "Equities",
    "weight": 14.41,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "H2O",
    "name": "S.P.E.E.H. Hidroelectrica SA",
    "isin": "RO4182412420",
    "sector": "Utilities",
    "assetClass": "Equities",
    "weight": 12.05,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "BRD",
    "name": "BRD - Groupe Societe Generale SA",
    "isin": "ROBRDAACNOR4",
    "sector": "Financials",
    "assetClass": "Equities",
    "weight": 6.95,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "TGN",
    "name": "S.N.T.G.N. Transgaz SA",
    "isin": "ROTGNTACNOR8",
    "sector": "Utilities",
    "assetClass": "Equities",
    "weight": 6.21,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "EL",
    "name": "Societatea Energetica Electrica SA",
    "isin": "ROELECACNOR5",
    "sector": "Utilities",
    "assetClass": "Equities",
    "weight": 5.53,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "DIGI",
    "name": "Digi Communications NV",
    "isin": "NL0012294474",
    "sector": "Communication Services",
    "assetClass": "Equities",
    "weight": 5.03,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "M",
    "name": "MedLife SA",
    "isin": "ROMEDLACNOR6",
    "sector": "Healthcare",
    "assetClass": "Equities",
    "weight": 3.04,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "SNN",
    "name": "S.N. Nuclearelectrica SA",
    "isin": "ROSNNXACNOR8",
    "sector": "Utilities",
    "assetClass": "Equities",
    "weight": 2.82,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "TEL",
    "name": "C.N.T.E.E. Transelectrica SA",
    "isin": "ROTELXACNOR9",
    "sector": "Utilities",
    "assetClass": "Equities",
    "weight": 2.24,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "PE",
    "name": "Premier Energy PLC",
    "isin": "CY0200352116",
    "sector": "Utilities",
    "assetClass": "Equities",
    "weight": 1.54,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "ONE",
    "name": "One United Properties SA",
    "isin": "RO1812825622",
    "sector": "Real Estate",
    "assetClass": "Equities",
    "weight": 1.01,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "FP",
    "name": "Fondul Proprietatea SA",
    "isin": "ROFPTAACNOR4",
    "sector": "Financials",
    "assetClass": "Equities",
    "weight": 1.01,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "AQ",
    "name": "Aquila Part Prod Com SA",
    "isin": "RO31CUS6S285",
    "sector": "Consumer Staples",
    "assetClass": "Equities",
    "weight": 0.79,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "CFT",
    "name": "Cris-Tim Family Holding",
    "isin": "ROCRISTIM001",
    "sector": "Consumer Staples",
    "assetClass": "Equities",
    "weight": 0.71,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "TTS",
    "name": "Transport Trade Services SA",
    "isin": "RO2861214040",
    "sector": "Industrials",
    "assetClass": "Equities",
    "weight": 0.55,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "ATB",
    "name": "Antibiotice SA",
    "isin": "ROATBIACNOR9",
    "sector": "Healthcare",
    "assetClass": "Equities",
    "weight": 0.49,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "TRP",
    "name": "TeraPlast SA",
    "isin": "ROTRPCACNOR8",
    "sector": "Materials",
    "assetClass": "Equities",
    "weight": 0.45,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "SFG",
    "name": "Sphera Franchise Group SA",
    "isin": "ROSFGDACNOR8",
    "sector": "Consumer Discretionary",
    "assetClass": "Equities",
    "weight": 0.41,
    "location": "Romania",
    "currency": "RON"
  },
  {
    "symbol": "RON",
    "name": "Cash and/or Liquidities (LEI)",
    "isin": "CASH_RON",
    "sector": "Cash / Other",
    "assetClass": "Cash",
    "weight": 0.17,
    "location": "Romania",
    "currency": "RON"
  }
]

sector_allocations = [
  {"name": "Energy", "weight": 30.53},
  {"name": "Utilities", "weight": 30.39},
  {"name": "Financials", "weight": 26.44},
  {"name": "Communication Services", "weight": 5.03},
  {"name": "Healthcare", "weight": 3.53},
  {"name": "Consumer Staples", "weight": 1.50},
  {"name": "Real Estate", "weight": 1.01},
  {"name": "Industrials", "weight": 0.55},
  {"name": "Materials", "weight": 0.45},
  {"name": "Consumer Discretionary", "weight": 0.41},
  {"name": "Cash / Other", "weight": 0.17}
]

country_allocations = [
  {"name": "Romania", "weight": 100.0}
]

ts_content = f"""// Complete holdings dataset for ETF BET Patria-Tradeville (TVBETETF.RO / ISIN: ROETF0000019)
// Official BVB & Patria Asset Management reporting data with full weightings, translated standardized sectors, asset classes and geographic locations ({len(holdings)} holdings).

import {{ ETFHolding }} from './meudHoldings';

export type {{ ETFHolding }};

export const TVBET_SECTOR_ALLOCATIONS = {json.dumps(sector_allocations, indent=2)};

export const TVBET_COUNTRY_ALLOCATIONS = {json.dumps(country_allocations, indent=2)};

export const TVBET_FULL_HOLDINGS: ETFHolding[] = {json.dumps(holdings, indent=2)};
"""

with open("src/data/tvbetHoldings.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Total parsed TVBETETF holdings count: {len(holdings)}")
print("Successfully generated src/data/tvbetHoldings.ts!")
