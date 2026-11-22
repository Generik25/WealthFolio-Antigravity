import re
import json

def parse_ibta():
    with open("scripts/ibta_raw.txt", "r", encoding="utf-8") as f:
        lines = f.readlines()

    holdings = []
    country_weights = {}
    sector_weights = {}

    for idx, line in enumerate(lines):
        line = line.strip()
        if not line or line.startswith('raw_text') or line.startswith('"""') or line.startswith('with open') or line.startswith('f.write') or line.startswith('print'):
            continue

        # Match weight, country, coupon, currency at end of line
        m = re.search(r'(-?\d+,\d+)\s+([A-Za-z\s\(\)]+?)\s+(\d+,\d+)\s+([A-Z]{3})\b', line)
        if not m:
            print(f"FAILED LINE {idx}: {line}")
            continue

        weight_str, country, coupon_str, currency = m.groups()
        weight = float(weight_str.replace(',', '.'))
        country = country.strip()

        left_part = line[:m.start()].strip()

        # Asset classes
        asset_class = "Fixed Income"
        if "Money Market" in left_part:
            asset_class = "Money Market"
            left_part = left_part.replace("Money Market", "").strip()
        elif "Fixed Income" in left_part:
            asset_class = "Fixed Income"
            left_part = left_part.replace("Fixed Income", "").strip()
        elif "Cash" in left_part:
            asset_class = "Cash"
            left_part = left_part.replace("Cash", "").strip()

        # Sector
        known_sectors = ["Cash and/or Derivatives", "Treasury"]
        sector = "Treasury"
        matched_sector = None
        for s in sorted(known_sectors, key=len, reverse=True):
            if left_part.endswith(s):
                matched_sector = s
                left_part = left_part[:-len(s)].strip()
                break

        if matched_sector:
            sector = matched_sector

        # Ticker & Name
        parts = left_part.split(' ', 1)
        if parts[0] == '--':
            ticker = '--'
            name = parts[1] if len(parts) > 1 else left_part
        elif len(parts) > 1 and parts[0].isupper() and 2 <= len(parts[0]) <= 8 and not parts[0].isdigit():
            ticker = parts[0]
            name = parts[1]
        else:
            ticker = ''
            name = left_part

        # Add coupon to name if present
        coupon_val = float(coupon_str.replace(',', '.'))
        if coupon_val > 0:
            holding_name = f"{name} {coupon_val}%"
        else:
            holding_name = name

        holding = {
            "name": holding_name,
            "ticker": ticker if ticker and ticker != '--' else name,
            "weight": weight,
            "sector": sector,
            "country": country,
            "assetClass": asset_class,
            "currency": currency
        }
        holdings.append(holding)

        country_weights[country] = country_weights.get(country, 0.0) + weight
        sector_weights[sector] = sector_weights.get(sector, 0.0) + weight

    print(f"Successfully parsed {len(holdings)} holdings.")

    sorted_countries = sorted([{"country": c, "weight": round(w, 2)} for c, w in country_weights.items()], key=lambda x: x["weight"], reverse=True)
    sorted_sectors = sorted([{"sector": s, "weight": round(w, 2)} for s, w in sector_weights.items()], key=lambda x: x["weight"], reverse=True)

    print("\nCountry Weights:")
    for c in sorted_countries:
        print(c)

    print("\nSector Weights:")
    for s in sorted_sectors:
        print(s)

    ts_content = f"""// iShares $ Treasury Bond 1-3yr UCITS ETF (IBTA.L / CBU3.L / ISIN: IE00B3VWN179)
// Full holdings list (~95 holdings) updated July 2026

export interface ETFHolding {{
  name: string;
  ticker: string;
  weight: number;
  sector?: string;
  country?: string;
  assetClass?: string;
  currency?: string;
}}

export interface SectorAllocation {{
  sector: string;
  weight: number;
}}

export interface CountryAllocation {{
  country: string;
  weight: number;
}}

export const IBTA_FULL_HOLDINGS: ETFHolding[] = {json.dumps(holdings, indent=2)};

export const IBTA_SECTOR_ALLOCATIONS: SectorAllocation[] = [
  {{ sector: 'Treasury', weight: 99.79 }},
  {{ sector: 'Cash and/or Derivatives', weight: 0.21 }}
];

export const IBTA_COUNTRY_ALLOCATIONS: CountryAllocation[] = {json.dumps(sorted_countries, indent=2)};
"""

    with open("src/data/ibtaHoldings.ts", "w", encoding="utf-8") as f:
        f.write(ts_content)
    print("\nWrote src/data/ibtaHoldings.ts successfully!")

if __name__ == "__main__":
    parse_ibta()
