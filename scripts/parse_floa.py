import re
import json

def parse_floa():
    with open("scripts/floa_raw.txt", "r", encoding="utf-8") as f:
        lines = f.readlines()

    holdings = []
    country_weights = {}
    sector_weights = {}

    for idx, line in enumerate(lines):
        line = line.strip()
        if not line:
            continue
        
        # Pattern matching
        # Ticker, Name, Sector, Asset Class, Weight, Country, Coupon, Currency
        # E.g.: EBRD EUROPEAN BANK FOR RECONSTRUCTION A MTN Supranational Fixed Income 1,18 Supranational 4,00 USD
        # or: -- BLK ICS USD LEAF AGENCY DIST Cash and/or Derivatives Money Market 1,93 Ireland 3,73 USD
        
        # Match weight (e.g. 1,18 or 0,85 or -0,10 or 0,00)
        # Note weight can be negative like -0,10 or 0,00 or positive 1,93
        m = re.search(r'(-?\d+,\d+)\s+([A-Za-z\s\(\)]+?)\s+(\d+,\d+)\s+([A-Z]{3})\b', line)
        if not m:
            print(f"FAILED LINE {idx}: {line}")
            continue

        weight_str, country, coupon_str, currency = m.groups()
        weight = float(weight_str.replace(',', '.'))
        coupon = float(coupon_str.replace(',', '.'))
        country = country.strip()

        # Before weight_str, we have ticker + name + sector + asset_class
        left_part = line[:m.start()].strip()
        
        # Known asset classes in this PDF: "Fixed Income", "Money Market", "Cash"
        asset_class = "Fixed Income"
        if "Money Market" in left_part:
            asset_class = "Money Market"
            left_part = left_part.replace("Money Market", "").strip()
        elif "Fixed Income" in left_part:
            asset_class = "Fixed Income"
            left_part = left_part.replace("Fixed Income", "").strip()
        elif "Cash and/or Derivatives Cash" in left_part or "Cash" in left_part[-10:]:
            asset_class = "Cash"
            left_part = re.sub(r'Cash and/or Derivatives Cash$', '', left_part).strip()
            left_part = re.sub(r'Cash$', '', left_part).strip()

        # Now left_part is "TICKER NAME SECTOR" or "NAME SECTOR"
        # Known Sectors in FLOA:
        known_sectors = [
            "Cash and/or Derivatives", "Supranational", "Owned No Guarantee", "Banking",
            "Consumer Cyclical", "Consumer Non-Cyclical", "Insurance", "Other",
            "Capital Goods", "Technology", "Electric", "Communications", "Reits",
            "Government Guaranteed", "Brokerage/Asset Managers/Exchanges", "Natural Gas",
            "Local Authority", "Government Sponsored", "Basic Industry", "Industrial Other"
        ]
        
        sector = "Other"
        matched_sector = None
        for s in sorted(known_sectors, key=len, reverse=True):
            if left_part.endswith(s):
                matched_sector = s
                left_part = left_part[:-len(s)].strip()
                break
        
        if matched_sector:
            sector = matched_sector

        # Now left_part is TICKER + NAME or just NAME
        # Check if first word is a uppercase ticker (2-7 uppercase chars, or --)
        parts = left_part.split(' ', 1)
        if parts[0] == '--':
            ticker = '--'
            name = parts[1] if len(parts) > 1 else left_part
        elif len(parts) > 1 and parts[0].isupper() and 2 <= len(parts[0]) <= 7 and not parts[0].isdigit():
            ticker = parts[0]
            name = parts[1]
        else:
            ticker = ''
            name = left_part

        holding = {
            "name": name,
            "ticker": ticker if ticker and ticker != '--' else name,
            "weight": weight,
            "sector": sector,
            "country": country,
            "assetClass": asset_class,
            "coupon": coupon,
            "currency": currency
        }
        holdings.append(holding)

        country_weights[country] = country_weights.get(country, 0.0) + weight
        sector_weights[sector] = sector_weights.get(sector, 0.0) + weight

    print(f"Successfully parsed {len(holdings)} holdings.")

    # Sort country weights
    sorted_countries = sorted([{"country": c, "weight": round(w, 2)} for c, w in country_weights.items()], key=lambda x: x["weight"], reverse=True)
    sorted_sectors = sorted([{"sector": s, "weight": round(w, 2)} for s, w in sector_weights.items()], key=lambda x: x["weight"], reverse=True)

    print("\nTop 10 Countries by aggregated holdings weight:")
    for c in sorted_countries[:10]:
        print(c)

    print("\nSector Breakdown:")
    for s in sorted_sectors:
        print(s)

    # Write ts file
    ts_content = f"""// iShares $ Floating Rate Bond UCITS ETF USD (Acc) - ISIN: IE00BDFGJ627
// Full holdings list (~553 holdings) updated July 2026

export interface ETFHolding {{
  name: string;
  ticker: string;
  weight: number;
  sector?: string;
  country?: string;
  assetClass?: string;
  coupon?: number;
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

export const FLOA_FULL_HOLDINGS: ETFHolding[] = {json.dumps(holdings, indent=2)};

export const FLOA_SECTOR_ALLOCATIONS: SectorAllocation[] = [
  {{ sector: 'Banking', weight: 48.54 }},
  {{ sector: 'Supranational', weight: 20.28 }},
  {{ sector: 'Consumer Cyclical', weight: 8.76 }},
  {{ sector: 'Owned No Guarantee', weight: 5.81 }},
  {{ sector: 'Insurance', weight: 4.88 }},
  {{ sector: 'Other', weight: 3.57 }},
  {{ sector: 'Consumer Non-Cyclical', weight: 3.01 }},
  {{ sector: 'Capital Goods', weight: 2.56 }},
  {{ sector: 'Technology', weight: 1.03 }},
  {{ sector: 'Electric', weight: 0.79 }},
  {{ sector: 'Communications', weight: 0.77 }}
];

export const FLOA_COUNTRY_ALLOCATIONS: CountryAllocation[] = {json.dumps(sorted_countries, indent=2)};
"""

    with open("src/data/floaHoldings.ts", "w", encoding="utf-8") as f:
        f.write(ts_content)
    print("\nWrote src/data/floaHoldings.ts successfully!")

if __name__ == "__main__":
    parse_floa()
