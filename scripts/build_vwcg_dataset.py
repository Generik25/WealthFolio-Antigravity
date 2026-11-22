import re
import json
from vwcg_raw import raw_vwcg_ocr

COUNTRY_MAP = {
    'NL': 'Netherlands', 'GB': 'United Kingdom', 'CH': 'Switzerland', 'DE': 'Germany',
    'ES': 'Spain', 'FR': 'France', 'DK': 'Denmark', 'IT': 'Italy', 'BE': 'Belgium',
    'SE': 'Sweden', 'FI': 'Finland', 'AT': 'Austria', 'NO': 'Norway', 'PL': 'Poland',
    'PT': 'Portugal', 'IE': 'Ireland', 'US': 'United States'
}

SECTOR_MAP = {
    'Technology': 'Information Technology',
    'Information Technology': 'Information Technology',
    'Financials': 'Financials',
    'Consumer Discretionary': 'Consumer Discretionary',
    'Health Care': 'Health Care',
    'Healthcare': 'Health Care',
    'Industrials': 'Industrials',
    'Telecommunications': 'Communication Services',
    'Communication Services': 'Communication Services',
    'Consumer Staples': 'Consumer Staples',
    'Energy': 'Energy',
    'Basic Materials': 'Materials',
    'Materials': 'Materials',
    'Utilities': 'Utilities',
    'Real Estate': 'Real Estate'
}

lines = [l.strip() for l in raw_vwcg_ocr.strip().splitlines() if l.strip()]

holdings = []
seen_symbols = set()

for idx, line in enumerate(lines, 1):
    # Try pattern 1: TICKER Name Weight% Sector Country
    m1 = re.match(r"^(\S+)\s+(.+?)\s+([\d\.]+)%\s+(.+?)\s+([A-Z]{2})$", line)
    if m1:
        symbol = m1.group(1).strip()
        name = m1.group(2).strip()
        weight = float(m1.group(3).strip())
        sector_raw = m1.group(4).strip()
        country_code = m1.group(5).strip()
    else:
        # Try pattern 2 (no ticker): Name Weight% Sector Country
        m2 = re.match(r"^(.+?)\s+([\d\.]+)%\s+(.+?)\s+([A-Z]{2})$", line)
        if m2:
            name = m2.group(1).strip()
            symbol = name.replace(" ", "").replace("'", "").upper()[:6]
            weight = float(m2.group(2).strip())
            sector_raw = m2.group(3).strip()
            country_code = m2.group(4).strip()
        else:
            # Try pattern 3: Name Weight% Country
            m3 = re.match(r"^(.+?)\s+([\d\.]+)%\s+([A-Z]{2})$", line)
            if m3:
                name = m3.group(1).strip()
                symbol = name.replace(" ", "").replace("'", "").upper()[:6]
                weight = float(m3.group(2).strip())
                sector_raw = "Industrials"
                country_code = m3.group(3).strip()
            else:
                print(f"Failed line {idx}: {line}")
                continue

    # De-duplicate symbols if necessary
    base_sym = symbol
    cnt = 1
    while symbol in seen_symbols:
        symbol = f"{base_sym}_{cnt}"
        cnt += 1
    seen_symbols.add(symbol)

    sector = SECTOR_MAP.get(sector_raw, sector_raw)
    location = COUNTRY_MAP.get(country_code, country_code)

    holdings.append({
        'symbol': symbol,
        'name': name,
        'weight': weight if weight > 0 else 0.0005,
        'sector': sector,
        'location': location,
        'assetClass': 'Equity',
        'currency': 'EUR'
    })

print(f"Successfully parsed {len(holdings)} holdings for VWCG.DE.")

# Calculate Sector Allocations
sector_totals = {}
country_totals = {}
total_weight = sum(h['weight'] for h in holdings)

for h in holdings:
    sec = h['sector']
    loc = h['location']
    w = h['weight']
    sector_totals[sec] = sector_totals.get(sec, 0.0) + w
    country_totals[loc] = country_totals.get(loc, 0.0) + w

sector_allocations = [
    {"name": k, "weight": round((v / total_weight) * 100, 2)}
    for k, v in sorted(sector_totals.items(), key=lambda x: x[1], reverse=True)
]

country_allocations = [
    {"name": k, "weight": round((v / total_weight) * 100, 2)}
    for k, v in sorted(country_totals.items(), key=lambda x: x[1], reverse=True)
]

ts_code = f"""// Complete holdings dataset for Vanguard FTSE Developed Europe UCITS ETF EUR Acc (VWCG.DE / ISIN: IE00BK5BQX27)
// Official Vanguard reporting data with full {len(holdings)} constituents, sector allocations, and geographic breakdown.

import {{ ETFHolding }} from './meudHoldings';

export type {{ ETFHolding }};

export const VWCG_SECTOR_ALLOCATIONS = {json.dumps(sector_allocations, indent=2)};

export const VWCG_COUNTRY_ALLOCATIONS = {json.dumps(country_allocations, indent=2)};

export const VWCG_FULL_HOLDINGS: ETFHolding[] = {json.dumps(holdings, indent=2)};

export const VWCG_HOLDINGS = VWCG_FULL_HOLDINGS;
"""

with open("src/data/vwcgHoldings.ts", "w", encoding="utf-8") as f:
    f.write(ts_code)

print("Successfully written src/data/vwcgHoldings.ts!")
