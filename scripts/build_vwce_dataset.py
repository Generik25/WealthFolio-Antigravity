import re
import json

from vwce_part1 import part1_raw
from vwce_part2 import part2_raw
from vwce_part3 import part3_raw
from vwce_part4 import part4_raw
from vwce_part5 import part5_raw
from vwce_part6 import part6_raw

all_raw = "\n".join([part1_raw, part2_raw, part3_raw, part4_raw, part5_raw, part6_raw])

lines = all_raw.strip().splitlines()

holdings = []
seen_tickers = set()

for line in lines:
    line = line.strip()
    if not line:
        continue
    # Match pattern: TICKER Name weight% Sector Country
    # Example: NVDA NVIDIA Corp 4.4503% Technology US
    match = re.match(r"^(\S+)\s+(.+?)\s+([\d\.]+)%\s+(.+?)\s+([A-Z]{2})$", line)
    if match:
        ticker = match.group(1).strip()
        name = match.group(2).strip()
        weight = float(match.group(3).strip())
        sector = match.group(4).strip()
        country = match.group(5).strip()
        
        # Deduplicate ticker
        if ticker in seen_tickers:
            continue
        seen_tickers.add(ticker)
        
        holdings.append({
            "ticker": ticker,
            "name": name,
            "weight": weight,
            "sector": sector,
            "country": country
        })

print(f"Parsed {len(holdings)} holdings.")

# Build TypeScript file content
ts_content = f"""// Official Holdings for Vanguard FTSE All-World UCITS ETF USD Acc (VWCE.DE)
// Source: Official Vanguard FTSE All-World Holdings
import {{ ETFComponentHolding }} from '../components/ETFOverlapAnalysis';

export const VWCE_HOLDINGS: ETFComponentHolding[] = {json.dumps(holdings, indent=2)};
"""

with open("src/data/vwceHoldings.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Successfully written src/data/vwceHoldings.ts")
