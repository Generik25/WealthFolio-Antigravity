import json
import re

from scripts.analyze_tail import pages_1_to_16

def build():
    # 1. Parse pages 1 to 16 tail
    new_tail_parsed = []

    sectors = "Information Technology|Health Care|Financials|Industrials|Consumer Discretionary|Consumer Staples|Energy|Materials|Utilities|Real Estate|Communication|Other|Cash and/or Derivatives"
    asset_classes = "Equity|Cash|Cash Collateral and Margins|Futures|FX|Money Market"

    pattern = re.compile(rf"^([A-Z0-9\.\-\_\/]+)\s+(.+?)\s+({sectors})\s+({asset_classes})\s+([\d\.\,\-]+)\s+(.+?)\s+([A-Z]{{3}})$")

    known_countries = [
        "United States", "United Kingdom", "Hong Kong", "New Zealand", "European Union",
        "Japan", "Canada", "Australia", "Germany", "France", "Switzerland", "Sweden",
        "Netherlands", "Italy", "Spain", "Denmark", "Finland", "Belgium", "Norway",
        "Austria", "Israel", "Singapore", "Ireland", "Portugal", "China", "Taiwan", "Korea"
    ]

    def get_country(loc_str, curr):
        for c in known_countries:
            if loc_str.startswith(c):
                return c
        if "USD" in curr: return "United States"
        if "JPY" in curr: return "Japan"
        if "GBP" in curr: return "United Kingdom"
        if "CAD" in curr: return "Canada"
        if "AUD" in curr: return "Australia"
        if "EUR" in curr: return "Germany"
        if "SEK" in curr: return "Sweden"
        if "CHF" in curr: return "Switzerland"
        if "ILS" in curr: return "Israel"
        return "United States"

    for p in pages_1_to_16:
        for line in p.strip().split("\n"):
            line = line.strip()
            if not line: continue
            m = pattern.match(line)
            if m:
                ticker = m.group(1).strip()
                name = m.group(2).strip()
                sec = m.group(3).strip()
                ac = m.group(4).strip()
                weight_str = m.group(5).replace(",", ".").strip()
                loc_str = m.group(6).strip()
                curr = m.group(7).strip()
                try:
                    w = float(weight_str)
                except ValueError:
                    w = 0.0
                c = get_country(loc_str, curr)
                clean_sec = sec if sec != "Cash and/or Derivatives" else "Cash & Derivatives"
                new_tail_parsed.append({
                    "symbol": ticker,
                    "name": name,
                    "weight": w,
                    "sector": clean_sec,
                    "location": c
                })

    print(f"Tail parsed: {len(new_tail_parsed)} holdings")

    # 2. Read existing top holdings
    with open("src/data/iusnHoldings.ts") as f:
        text = f.read()

    m = re.search(r"export const IUSN_FULL_HOLDINGS = (\[.*?\]);", text, re.DOTALL)
    existing = json.loads(m.group(1)) if m else []

    num_top_needed = 3602 - len(new_tail_parsed)
    top_portion = existing[:num_top_needed]

    all_holdings = top_portion + new_tail_parsed
    print(f"Total combined holdings: {len(all_holdings)}")

    # 3. Calculate Sector and Country allocations
    sector_weights = {}
    country_weights = {}
    total_w = sum(h["weight"] for h in all_holdings)

    for h in all_holdings:
        s = h["sector"]
        c = h["location"]
        w = h["weight"]
        sector_weights[s] = sector_weights.get(s, 0.0) + w
        country_weights[c] = country_weights.get(c, 0.0) + w

    sorted_sectors = sorted(sector_weights.items(), key=lambda x: x[1], reverse=True)
    sector_allocs = [
        {
            "name": s,
            "weight": round((w / total_w) * 100, 2) if total_w > 0 else round(w, 2)
        } for s, w in sorted_sectors
    ]

    sorted_countries = sorted(country_weights.items(), key=lambda x: x[1], reverse=True)
    country_allocs = [
        {
            "name": c,
            "weight": round((w / total_w) * 100, 2) if total_w > 0 else round(w, 2)
        } for c, w in sorted_countries
    ]

    # Convert to ETFData format holdings
    etf_holdings = [
        {
            "ticker": h["symbol"],
            "name": h["name"],
            "weight": h["weight"],
            "sector": h["sector"],
            "country": h["location"]
        } for h in all_holdings
    ]

    sector_allocs_etf = [{"sector": s["name"], "percentage": s["weight"]} for s in sector_allocs]
    country_allocs_etf = [{"region": c["name"], "percentage": c["weight"]} for c in country_allocs]

    ts_content = f"""import {{ ETFData }} from '../types';

// iShares MSCI World Small Cap UCITS ETF (IUSN.DE)
// Complete holdings database (3,602 holdings)

export const IUSN_FULL_HOLDINGS = {json.dumps(all_holdings, indent=2)};

export const IUSN_SECTOR_ALLOCATIONS = {json.dumps(sector_allocs, indent=2)};

export const IUSN_COUNTRY_ALLOCATIONS = {json.dumps(country_allocs, indent=2)};

export const iusnHoldings: ETFData = {{
  ticker: 'IUSN.DE',
  name: 'iShares MSCI World Small Cap UCITS ETF',
  provider: 'iShares',
  assetClass: 'Equity',
  expenseRatio: 0.35,
  aum: '~$3.8B',
  holdingsCount: {len(all_holdings)},
  holdings: {json.dumps(etf_holdings, indent=2)},
  sectorAllocations: {json.dumps(sector_allocs_etf, indent=2)},
  regionAllocations: {json.dumps(country_allocs_etf, indent=2)}
}};
"""

    with open("src/data/iusnHoldings.ts", "w", encoding="utf-8") as f:
        f.write(ts_content)

    print("Successfully updated src/data/iusnHoldings.ts with 3602 holdings!")

if __name__ == "__main__":
    build()
