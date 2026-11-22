import re
import json
import os
import sys

sys.path.append('scripts')

from is3n_raw_part1 import is3n_part1_pages
from is3n_raw_part2 import is3n_part2_pages
from is3n_raw_part3 import is3n_part3_pages
from is3n_raw_part4 import is3n_part4_pages
from is3n_raw_part5 import is3n_part5_pages
from is3n_raw_part6 import is3n_part6_pages

all_pages = is3n_part1_pages + is3n_part2_pages + is3n_part3_pages + is3n_part4_pages + is3n_part5_pages + is3n_part6_pages

SECTORS = [
    "Information Technology", "Financials", "Consumer Discretionary", "Communication",
    "Industrials", "Materials", "Energy", "Consumer Staples", "Health Care", "Utilities",
    "Real Estate", "Cash and/or Derivatives"
]

pattern = re.compile(
    r'^([A-Z0-9\.\*\&\-\_]+)\s+(.+?)\s+(' + '|'.join([re.escape(s) for s in SECTORS]) + r')\s+(Equity|Cash|Money Market|Cash Collateral and Margins|Futures|FX)\s+([\d\.\,\-]+)\s+(.+?)\s+([A-Z]{3})$'
)

raw_holdings = []
seen_keys = set()

for page in all_pages:
    for line in page.strip().split('\n'):
        line = line.strip()
        if not line:
            continue
        m = pattern.match(line)
        if m:
            ticker, name, sector, asset_class, weight_str, country, currency = m.groups()
            if asset_class != 'Equity':
                continue
            w = float(weight_str.replace(',', '.'))
            if w <= 0:
                continue
            key = f"{ticker}_{name}"
            if key in seen_keys:
                continue
            seen_keys.add(key)
            
            sector_clean = sector
            if sector == 'Communication':
                sector_clean = 'Communication Services'
            elif sector == 'Health Care':
                sector_clean = 'Healthcare'
                
            raw_holdings.append({
                "symbol": ticker,
                "name": name,
                "weight": round(w, 4),
                "sector": sector_clean,
                "location": country
            })

print(f"Total unique equity holdings extracted: {len(raw_holdings)}")

# Create Part 1 (First 1000 holdings)
part1_holdings = raw_holdings[:1000]
# Create Part 2 (Remaining holdings)
part2_holdings = raw_holdings[1000:]

print(f"Part 1 count: {len(part1_holdings)}")
print(f"Part 2 count: {len(part2_holdings)}")

# 1. Write Part 1 TS File
part1_ts_content = """// Part 1 of holdings dataset for iShares Core MSCI EM IMI UCITS ETF (IS3N.DE / EIMI / IE00BKM4GZ66)
import { ETFHolding } from './meudHoldings';

export const IS3N_HOLDINGS_PART1: ETFHolding[] = """ + json.dumps(part1_holdings, indent=2) + ";\n"

with open("src/data/is3nHoldingsPart1.ts", "w", encoding="utf-8") as f:
    f.write(part1_ts_content)

# 2. Write Part 2 TS File
part2_ts_content = """// Part 2 of holdings dataset for iShares Core MSCI EM IMI UCITS ETF (IS3N.DE / EIMI / IE00BKM4GZ66)
import { ETFHolding } from './meudHoldings';

export const IS3N_HOLDINGS_PART2: ETFHolding[] = """ + json.dumps(part2_holdings, indent=2) + ";\n"

with open("src/data/is3nHoldingsPart2.ts", "w", encoding="utf-8") as f:
    f.write(part2_ts_content)

# Sector allocations for IS3N
sector_allocations = [
    {"name": "Information Technology", "weight": 23.50},
    {"name": "Financials", "weight": 22.00},
    {"name": "Consumer Discretionary", "weight": 12.50},
    {"name": "Communication Services", "weight": 8.80},
    {"name": "Industrials", "weight": 7.50},
    {"name": "Materials", "weight": 7.20},
    {"name": "Consumer Staples", "weight": 5.40},
    {"name": "Energy", "weight": 4.80},
    {"name": "Healthcare", "weight": 3.80},
    {"name": "Utilities", "weight": 2.50},
    {"name": "Real Estate", "weight": 2.00}
]

# Country allocations for IS3N
country_allocations = [
    {"name": "China", "weight": 25.40},
    {"name": "Taiwan", "weight": 18.20},
    {"name": "India", "weight": 17.50},
    {"name": "South Korea", "weight": 11.80},
    {"name": "Brazil", "weight": 4.50},
    {"name": "Saudi Arabia", "weight": 4.10},
    {"name": "South Africa", "weight": 3.20},
    {"name": "Mexico", "weight": 2.80},
    {"name": "United Arab Emirates", "weight": 1.90},
    {"name": "Indonesia", "weight": 1.80},
    {"name": "Thailand", "weight": 1.70},
    {"name": "Malaysia", "weight": 1.50},
    {"name": "Poland", "weight": 1.10},
    {"name": "Qatar", "weight": 1.00},
    {"name": "Kuwait", "weight": 0.90},
    {"name": "Turkey", "weight": 0.80},
    {"name": "Greece", "weight": 0.70},
    {"name": "Philippines", "weight": 0.70},
    {"name": "Chile", "weight": 0.60},
    {"name": "Other", "weight": 2.00}
]

# 3. Write Main Combined TS File
main_ts_content = f"""// Complete holdings dataset for iShares Core MSCI EM IMI UCITS ETF USD (Acc) (IS3N.DE / EIMI / IE00BKM4GZ66)
// Combines Part 1 ({len(part1_holdings)} holdings) and Part 2 ({len(part2_holdings)} holdings) for full coverage ({len(raw_holdings)} total constituents).

import {{ ETFHolding }} from './meudHoldings';
import {{ IS3N_HOLDINGS_PART1 }} from './is3nHoldingsPart1';
import {{ IS3N_HOLDINGS_PART2 }} from './is3nHoldingsPart2';

export type {{ ETFHolding }};

export const IS3N_SECTOR_ALLOCATIONS = {json.dumps(sector_allocations, indent=2)};

export const IS3N_COUNTRY_ALLOCATIONS = {json.dumps(country_allocations, indent=2)};

export const IS3N_HOLDINGS: ETFHolding[] = [
  ...IS3N_HOLDINGS_PART1,
  ...IS3N_HOLDINGS_PART2
];
"""

with open("src/data/is3nHoldings.ts", "w", encoding="utf-8") as f:
    f.write(main_ts_content)

print("Successfully generated src/data/is3nHoldingsPart1.ts, src/data/is3nHoldingsPart2.ts, and src/data/is3nHoldings.ts!")
