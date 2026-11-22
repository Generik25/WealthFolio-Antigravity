import re
import json

def parse_lines(filename):
    holdings = []
    with open(filename, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            
            # Line format example:
            # 2 COREWEAVE INC XS3333139288 United States EUR - Bond - - unknown 0,51%
            # 1 - IE00BZ3FDF20 Ireland EUR - Equities - - unknown 2,48%
            
            # Match item number at start
            m_num = re.match(r'^(\d+)\s+(.*)', line)
            if not m_num:
                continue
            item_num = int(m_num.group(1))
            rest = m_num.group(2)
            
            # Match weight at end: e.g. 0,51% or 2.48% or 0.05%
            m_weight = re.search(r'([\d,\.]+)\%\s*$', rest)
            if not m_weight:
                continue
            weight_str = m_weight.group(1).replace(',', '.')
            weight = float(weight_str)
            rest = rest[:m_weight.start()].strip()
            
            # Look for ISIN code (12 chars uppercase alphanumeric like XS3333139288, IE00BZ3FDF20, FR0014010DR1, DE000A383HC1, IT0005586893, BE6355549120, PTTAPFOM0003, NO0013183624, FI4000571260)
            # or cash codes like _CURRENCYUSD, _CURRENCYEUR
            m_isin = re.search(r'\b([A-Z0-9]{12}|_CURRENCY[A-Z]+)\b', rest)
            
            if m_isin:
                name_part = rest[:m_isin.start()].strip()
                isin = m_isin.group(1)
                after_isin = rest[m_isin.end():].strip()
            else:
                # fallback
                isin = f"XHYA-{item_num}"
                name_part = rest
                after_isin = ""
            
            if name_part.startswith('- '):
                name_part = name_part[2:].strip()
            if not name_part or name_part == '-':
                name_part = f"Constituent {item_num}"
                
            # Extract Country and Currency from after_isin or rest
            # after_isin example: "United States EUR - Bond - - unknown" or "Ireland EUR - Equities - - unknown"
            location = "Germany" # default for EUR high yield
            currency = "EUR"
            
            countries = [
                "United States", "United Kingdom", "Germany", "France", "Italy", "Spain", "Netherlands",
                "Luxembourg", "Sweden", "Czech Republic", "Greece", "Ireland", "Japan", "Israel",
                "Austria", "Poland", "Finland", "Bulgaria", "Romania", "Denmark", "Hungary", "Portugal",
                "Slovenia", "Belgium", "Mexico", "Switzerland", "Serbia", "China", "South Africa",
                "Lithuania", "Norway", "Jersey", "Turkey", "Latvia", "Canada", "Eurozone"
            ]
            
            for c in countries:
                if c in after_isin or c in rest:
                    location = c
                    break
                    
            if "USD" in after_isin or "USD" in rest:
                currency = "USD"
            elif "GBP" in after_isin or "GBP" in rest:
                currency = "GBP"
            else:
                currency = "EUR"
                
            # Sector heuristic based on issuer name or default to High Yield Corporate Bond / Cash
            name_upper = name_part.upper()
            if "CURRENCY" in isin or "CASH" in name_upper:
                sector = "Cash & Derivatives"
            elif any(w in name_upper for w in ["TELECOM", "MOBILE", "COMMUNICATION", "VODAFONE", "ALTICE", "VIRGIN", "ZIGGO", "FIBER", "ILIAD", "EUTELSAT"]):
                sector = "Telecommunications"
            elif any(w in name_upper for w in ["BANK", "FINANCE", "FINANCIAL", "CREDIT", "CAPITAL", "FUND", "MEDIOBANCA", "MONTE DEI PASCHI"]):
                sector = "Financials"
            elif any(w in name_upper for w in ["HEALTH", "PHARMA", "DRUG", "BIO", "MEDICAL", "ORGANON", "TEVA", "CHEPLAPHARM", "IQVIA"]):
                sector = "Healthcare"
            elif any(w in name_upper for w in ["ENERGY", "POWER", "GAS", "OIL", "ELECTRIC", "RENEWABLE"]):
                sector = "Energy & Utilities"
            elif any(w in name_upper for w in ["AUTO", "MOTORS", "RENAULT", "VOLVO", "NISSAN", "ZF", "SCHAEFFLER", "VALEO", "FORVIA", "HELLA", "MAHLE", "PIAGGIO"]):
                sector = "Automotive & Parts"
            elif any(w in name_upper for w in ["PROPERTY", "REAL ESTATE", "IMMO", "CPI", "HOUSING", "VIVION", "ALSTRIA", "BUILDING"]):
                sector = "Real Estate"
            elif any(w in name_upper for w in ["AIR", "TRAVEL", "HOTEL", "GAME", "CASINO", "ENTERTAINMENT", "LOTTOMATICA", "DUFRY", "AIR FRANCE", "TAP", "TUI", "FLIGHT"]):
                sector = "Services & Leisure"
            elif any(w in name_upper for w in ["PACKAGING", "CHEMICAL", "STEEL", "METAL", "PAPER", "PLASTIC", "LANXESS", "CELANESE", "ARDAGH"]):
                sector = "Basic Materials & Packaging"
            elif any(w in name_upper for w in ["TECH", "SOFTWARE", "SYSTEM", "DIGITAL", "IT", "MICRO", "DATA", "NETWORKS"]):
                sector = "Technology"
            else:
                sector = "Industrial & Corporate"

            asset_class = "Cash" if sector == "Cash & Derivatives" else "Fixed Income"
            
            holdings.append({
                "symbol": isin,
                "name": name_part,
                "sector": sector,
                "assetClass": asset_class,
                "weight": weight,
                "location": location,
                "currency": currency
            })
            
    return holdings

def generate_ts_part(holdings, var_name, file_path, part_num):
    lines = [
        f"// Part {part_num} of holdings dataset for Xtrackers II EUR High Yield Corporate Bond UCITS ETF 1C (XHYA.DE / ISIN: LU1109942653)",
        "import { ETFHolding } from './meudHoldings';",
        "",
        f"export const {var_name}: ETFHolding[] = ["
    ]
    
    for h in holdings:
        name_clean = h['name'].replace('"', '\\"')
        sector_clean = h['sector'].replace('"', '\\"')
        loc_clean = h['location'].replace('"', '\\"')
        lines.append(f'  {{ symbol: "{h["symbol"]}", name: "{name_clean}", sector: "{sector_clean}", assetClass: "{h["assetClass"]}", weight: {h["weight"]}, location: "{loc_clean}", currency: "{h["currency"]}" }},')
        
    lines.append("];")
    lines.append("")
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))

part1 = parse_lines('scripts/raw_xhya_text.txt')
part2 = parse_lines('scripts/raw_xhya_text_part2.txt')
part3 = parse_lines('scripts/raw_xhya_text_part3.txt')

print(f"Parsed Part 1: {len(part1)} constituents")
print(f"Parsed Part 2: {len(part2)} constituents")
print(f"Parsed Part 3: {len(part3)} constituents")
total = len(part1) + len(part2) + len(part3)
print(f"Total constituents parsed: {total}")

generate_ts_part(part1, "XHYA_HOLDINGS_PART1", "src/data/xhyaHoldingsPart1.ts", 1)
generate_ts_part(part2, "XHYA_HOLDINGS_PART2", "src/data/xhyaHoldingsPart2.ts", 2)
generate_ts_part(part3, "XHYA_HOLDINGS_PART3", "src/data/xhyaHoldingsPart3.ts", 3)

# Now create main xhyaHoldings.ts file
main_ts = """// Full constituents dataset for Xtrackers II EUR High Yield Corporate Bond UCITS ETF 1C (XHYA.DE / ISIN: LU1109942653)
import { ETFHolding } from './meudHoldings';
import { XHYA_HOLDINGS_PART1 } from './xhyaHoldingsPart1';
import { XHYA_HOLDINGS_PART2 } from './xhyaHoldingsPart2';
import { XHYA_HOLDINGS_PART3 } from './xhyaHoldingsPart3';

export const XHYA_FULL_HOLDINGS: ETFHolding[] = [
  ...XHYA_HOLDINGS_PART1,
  ...XHYA_HOLDINGS_PART2,
  ...XHYA_HOLDINGS_PART3
];

// Helper calculation for sector allocations
const computeSectorAllocations = (holdings: ETFHolding[]) => {
  const totals: Record<string, number> = {};
  holdings.forEach(h => {
    const s = h.sector || 'Unassigned';
    totals[s] = (totals[s] || 0) + h.weight;
  });
  return Object.entries(totals)
    .map(([sector, weight]) => ({ sector, weight: parseFloat(weight.toFixed(2)) }))
    .sort((a, b) => b.weight - a.weight);
};

// Helper calculation for country allocations
const computeCountryAllocations = (holdings: ETFHolding[]) => {
  const totals: Record<string, number> = {};
  holdings.forEach(h => {
    const c = h.location || 'Other';
    totals[c] = (totals[c] || 0) + h.weight;
  });
  return Object.entries(totals)
    .map(([country, weight]) => ({ country, weight: parseFloat(weight.toFixed(2)) }))
    .sort((a, b) => b.weight - a.weight);
};

export const XHYA_SECTOR_ALLOCATIONS = computeSectorAllocations(XHYA_FULL_HOLDINGS);
export const XHYA_COUNTRY_ALLOCATIONS = computeCountryAllocations(XHYA_FULL_HOLDINGS);
"""

with open('src/data/xhyaHoldings.ts', 'w', encoding='utf-8') as f:
    f.write(main_ts)

print("Generated src/data/xhyaHoldings.ts successfully!")
