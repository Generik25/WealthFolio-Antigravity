import re
import json

from parse_eunl_all_30_pages import parsed_holdings, sorted_sectors, sorted_countries

ts_content = f"""// Complete holdings dataset for iShares Core MSCI World UCITS ETF (EUNL.DE / SWDA / IWDA)
// Official BlackRock / iShares reporting data with full weightings, sectors, asset classes and geographic locations.

export interface ETFHolding {{
  symbol: string;
  name: string;
  sector: string;
  assetClass: string;
  weight: number;
  location: string;
  currency: string;
}}

export const EUNL_SECTOR_ALLOCATIONS = {json.dumps(sorted_sectors, indent=2)};

export const EUNL_COUNTRY_ALLOCATIONS = {json.dumps(sorted_countries, indent=2)};

export const EUNL_FULL_HOLDINGS: ETFHolding[] = {json.dumps(parsed_holdings, indent=2)};
"""

with open("src/data/eunlHoldings.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Successfully wrote src/data/eunlHoldings.ts!")
