import re
import json

def parse_raw():
    holdings = []
    seen = set()
    
    # regex for line:
    # Ticker Name Sector AssetClass Weight Country Currency
    pattern = re.compile(r'^([A-Z0-9\.\-\_\/]+)\s+(.+?)\s+(Information Technology|Health Care|Financials|Industrials|Consumer Discretionary|Consumer Staples|Energy|Materials|Utilities|Real Estate|Communication|Other|Cash and/or Derivatives)\s+(Equity|Cash|Cash Collateral and Margins|Futures|FX)\s+([\d\.\,\-]+)\s+([A-Za-z\s]+?)\s+([A-Z]{3})$')

    with open("scripts/iusn_raw.txt", "r", encoding="utf-8") as f:
        lines = f.readlines()

    for line_num, line in enumerate(lines, 1):
        line = line.strip()
        if not line:
            continue
        
        m = pattern.match(line)
        if m:
            ticker = m.group(1).strip()
            name = m.group(2).strip()
            sector = m.group(3).strip()
            asset_class = m.group(4).strip()
            weight_str = m.group(5).replace(',', '.').strip()
            country = m.group(6).strip()
            currency = m.group(7).strip()
            
            try:
                weight = float(weight_str)
            except ValueError:
                weight = 0.0
                
            # Normalize currency/country
            if sector == 'Cash and/or Derivatives':
                sector = 'Cash and/or Derivatives'
                
            # Create unique identifier to avoid exact duplicate lines
            key = (ticker, name, weight)
            if key in seen:
                continue
            seen.add(key)
            
            holdings.append({
                "ticker": ticker,
                "name": name,
                "weight": weight,
                "sector": sector,
                "country": country
            })
        else:
            # Try looser split if regex fails
            parts = line.split()
            if len(parts) >= 6:
                # check if 3rd to last is weight
                for i in range(len(parts)-1, 1, -1):
                    val = parts[i].replace(',', '.')
                    try:
                        w = float(val)
                        # found weight at index i
                        ticker = parts[0]
                        currency = parts[-1] if len(parts) > i+1 else 'USD'
                        country = " ".join(parts[i+1:-1]) if len(parts) > i+2 else (parts[-1] if len(parts)>i+1 else "United States")
                        name = " ".join(parts[1:i-2]) if i > 3 else parts[1]
                        sector = parts[i-2] if i > 2 else "Industrials"
                        
                        key = (ticker, name, w)
                        if key not in seen:
                            seen.add(key)
                            holdings.append({
                                "ticker": ticker,
                                "name": name,
                                "weight": w,
                                "sector": sector,
                                "country": country if country else "United States"
                            })
                        break
                    except ValueError:
                        continue

    print(f"Total parsed holdings: {len(holdings)}")
    
    # Calculate sector and region breakdowns
    sector_weights = {}
    country_weights = {}
    
    total_w = sum(h['weight'] for h in holdings)
    
    for h in holdings:
        s = h['sector']
        c = h['country']
        w = h['weight']
        sector_weights[s] = sector_weights.get(s, 0.0) + w
        country_weights[c] = country_weights.get(c, 0.0) + w
        
    print("\nSector Breakdown:")
    for s, w in sorted(sector_weights.items(), key=lambda x: x[1], reverse=True):
        print(f"  {s}: {w:.2f}%")
        
    print("\nTop 10 Countries Breakdown:")
    for c, w in sorted(country_weights.items(), key=lambda x: x[1], reverse=True)[:10]:
        print(f"  {c}: {w:.2f}%")

    # Format holdings for IUSN_FULL_HOLDINGS
    full_holdings = [
        {
            "symbol": h["ticker"],
            "name": h["name"],
            "weight": h["weight"],
            "sector": h["sector"],
            "location": h["country"]
        } for h in holdings
    ]

    # Sector allocations
    sorted_sectors = sorted(sector_weights.items(), key=lambda x: x[1], reverse=True)
    sector_allocs = [
        {
            "name": s if s != 'Cash and/or Derivatives' else 'Cash & Derivatives',
            "weight": round((w / total_w) * 100, 2) if total_w > 0 else round(w, 2)
        } for s, w in sorted_sectors
    ]

    # Region / Country allocations
    region_map = {
        'United States': 'United States',
        'Canada': 'Canada',
        'Japan': 'Japan',
        'United Kingdom': 'United Kingdom',
        'United Kingdom GBP': 'United Kingdom',
        'Germany': 'Germany',
        'France': 'France',
        'Switzerland': 'Switzerland',
        'Sweden': 'Sweden',
        'Australia': 'Australia',
        'Netherlands': 'Netherlands',
        'Italy': 'Italy',
        'Spain': 'Spain',
        'Denmark': 'Denmark',
        'Finland': 'Finland',
        'Belgium': 'Belgium',
        'Norway': 'Norway',
        'Austria': 'Austria',
        'Israel': 'Israel',
        'Singapore': 'Singapore',
        'Hong Kong': 'Hong Kong',
        'New Zealand': 'New Zealand',
        'Ireland': 'Ireland',
        'Portugal': 'Portugal'
    }
    
    country_allocs = [
        {
            "name": c,
            "weight": round((w / total_w) * 100, 2) if total_w > 0 else round(w, 2)
        } for c, w in sorted(country_weights.items(), key=lambda x: x[1], reverse=True)
    ]

    # Generate TypeScript file
    ts_content = f"""import {{ ETFData }} from '../types';

// iShares MSCI World Small Cap UCITS ETF (IUSN.DE)
// Complete holdings database (~{len(holdings)} holdings)

export const IUSN_FULL_HOLDINGS = {json.dumps(full_holdings, indent=2)};

export const IUSN_SECTOR_ALLOCATIONS = {json.dumps(sector_allocs, indent=2)};

export const IUSN_COUNTRY_ALLOCATIONS = {json.dumps(country_allocs, indent=2)};

export const iusnHoldings: ETFData = {{
  ticker: 'IUSN.DE',
  name: 'iShares MSCI World Small Cap UCITS ETF',
  provider: 'iShares',
  assetClass: 'Equity',
  expenseRatio: 0.35,
  aum: '~$3.8B',
  holdingsCount: {len(holdings)},
  holdings: {json.dumps(holdings, indent=2)},
  sectorAllocations: {json.dumps([{"sector": s["name"], "percentage": s["weight"]} for s in sector_allocs], indent=2)},
  regionAllocations: {json.dumps([{"region": c["name"], "percentage": c["weight"]} for c in country_allocs], indent=2)}
}};
"""
    
    with open("src/data/iusnHoldings.ts", "w", encoding="utf-8") as f:
        f.write(ts_content)
        
    print("\nSuccessfully wrote src/data/iusnHoldings.ts!")

if __name__ == "__main__":
    parse_raw()
