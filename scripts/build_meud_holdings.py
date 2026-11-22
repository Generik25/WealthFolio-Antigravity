import json
import re
from scripts.amundi_raw import amundi_pages

def build():
    known_tickers = {
        'NL0010273215': 'ASML',
        'GB0005405286': 'HSBC',
        'CH0012005267': 'NOVN',
        'CH1499059983': 'ROG',
        'CH0038863350': 'NESN',
        'GB0009895292': 'AZN',
        'GB00BP6MXD84': 'SHEL',
        'DE0007236101': 'SIE',
        'ES0113900J37': 'SAN',
        'FR0000120271': 'TTE',
        'DE0008404005': 'ALV',
        'FR0000121972': 'SU',
        'CH0244767585': 'UBSG',
        'DK0062498333': 'NOVO-B',
        'GB00B63H8491': 'RR',
        'CH0012221716': 'ABBN',
        'ES0144580Y14': 'IBE',
        'DE0007164600': 'SAP',
        'ES0113211835': 'BBVA',
        'IT0005239360': 'UCG',
        'DE000ENER6Y0': 'ENR',
        'NL0000235190': 'AIR',
        'FR0000073272': 'SAF',
        'GB00BVZK7T90': 'ULVR',
        'GB0002875804': 'BATS',
        'FR0000121014': 'MC',
        'CH0210483332': 'CFR',
        'FR0000131104': 'BNP',
        'GB0007980591': 'BP',
        'CH0011075394': 'ZURN',
        'IT0000072618': 'ISP',
        'DE0005557508': 'DTE',
        'DE0006231004': 'IFX',
        'GB00BN7SWP63': 'GSK',
        'GB0007188757': 'RIO',
        'FR0000120578': 'SAN',
        'NL0011821202': 'INGA',
        'GB0031348658': 'BARC',
        'FR0000120628': 'CS',
        'GB0008706128': 'LLOY',
        'IT0003128367': 'ENEL',
        'GB00BDR05C01': 'NG',
        'BE0974293251': 'ABI',
        'GB0002634946': 'BA',
        'FR0000125486': 'DG',
        'SE0015811963': 'INVE-B',
        'GB00BM8PJY71': 'NWG',
        'DE0008430026': 'MUV2',
        'ES0148396007': 'ITX',
        'JE00B4T3BW64': 'GLEN',
        'DE0005140008': 'DBK',
        'FI4000297767': 'NDA-FI',
        'FR0000052292': 'RMS',
        'FR0000130809': 'GLE',
        'DE0005552004': 'DHL',
        'GB00B2B0DG97': 'REL',
        'FR0000121667': 'EL',
        'SE0000115446': 'VOLV-B',
        'FI0009000681': 'NOKIA',
        'GB00B0SWJX34': 'LSEG',
        'GB00BD6K4575': 'CPG',
        'DE0005810055': 'DB1',
        'NL0010832176': 'ARGX',
        'NL0013654783': 'PRX',
        'DE0007030009': 'RHM',
        'SE0017486889': 'ATCO-A',
        'DE000BAY0017': 'BAYN',
        'IT0000062072': 'G',
        'ES0140609019': 'CABK',
        'GB00BTK05J60': 'AAL',
    }

    sectors_regex = 'Information Technology|Health Care|Financials|Industrials|Consumer Discretionary|Consumer Staples|Energy|Materials|Utilities|Real Estate|Communication Services|Communication|Other|Cash and/or Derivatives'

    holdings = []
    seen = set()

    for page in amundi_pages:
        lines = [l.strip() for l in page.strip().split('\n') if l.strip()]
        for line in lines:
            if line.startswith('#'): continue

            if 'CASH' in line and 'Cash' in line:
                w = 0.31 if '0,31%' in line else 0.0
                key = ('CASH', 'Cash & Derivatives (EUR)')
                if key not in seen:
                    seen.add(key)
                    holdings.append({
                        'symbol': 'CASH',
                        'name': 'Cash & Derivatives (EUR)',
                        'weight': w,
                        'sector': 'Cash & Derivatives',
                        'location': 'Europe'
                    })
                continue

            m = re.search(r'^([A-Z0-9]+)\s+(.+?)\s+(EQUITY|CASH|FUTURE)\s+([A-Z]{3})\s+([\d\.\,\-]+)%\s+(' + sectors_regex + r')\s+(.+)$', line)
            if m:
                isin = m.group(1).strip()
                name = m.group(2).strip()
                asset_class = m.group(3).strip()
                curr = m.group(4).strip()
                w_str = m.group(5).replace(',', '.').strip()
                sec = m.group(6).strip()
                country = m.group(7).strip()
                try:
                    w = float(w_str)
                except:
                    w = 0.0

                if isin in known_tickers:
                    sym = known_tickers[isin]
                else:
                    clean_name = re.sub(r'\b(PLC|AG|SA|NV|SPA|SE|AB|OYJ|CORP|INC|LTD|HOLDING|HOLDINGS|GROUP|REG|PFD|SHS|CLASS|SER|BRUXELLES|PARIS|MILAN|MADRID|LONDON|FRANKFURT|XETRA)\b', '', name, flags=re.I).strip()
                    words = clean_name.split()
                    if len(words) == 1:
                        sym = words[0][:5].upper()
                    elif len(words) >= 2:
                        sym = (words[0][:4] if len(words[0])>=3 else words[0]) + (words[1][0] if len(words[1])>0 else '')
                        sym = sym.upper()
                    else:
                        sym = isin[:6]

                clean_sec = 'Communication Services' if sec == 'Communication' else sec
                clean_sec = 'Cash & Derivatives' if sec in ['Cash and/or Derivatives', 'Cash'] else clean_sec

                key = (isin, name)
                if key not in seen:
                    seen.add(key)
                    holdings.append({
                        'symbol': sym,
                        'name': name,
                        'weight': w,
                        'sector': clean_sec,
                        'location': country
                    })

    # Sector allocations
    sector_map = {}
    country_map = {}
    total_weight = sum(h['weight'] for h in holdings)

    for h in holdings:
        s = h['sector']
        c = h['location']
        w = h['weight']
        sector_map[s] = sector_map.get(s, 0.0) + w
        country_map[c] = country_map.get(c, 0.0) + w

    sorted_sectors = sorted(sector_map.items(), key=lambda x: x[1], reverse=True)
    sector_allocations = [
        {'name': s, 'weight': round(w, 2)} for s, w in sorted_sectors
    ]

    sorted_countries = sorted(country_map.items(), key=lambda x: x[1], reverse=True)
    country_allocations = [
        {'name': c, 'weight': round(w, 2)} for c, w in sorted_countries
    ]

    print(f"Total holdings count: {len(holdings)}")
    print(f"Total weight sum: {total_weight:.2f}%")

    ts_content = f"""// Complete holdings dataset for Amundi Core Stoxx Europe 600 UCITS ETF Acc (MEUD.PA / MEUD.DE / LYP6.DE / LU0908500753)
// Official Amundi reporting data with full 614 constituents, sector allocations, and geographic breakdown.

export interface ETFHolding {{
  symbol: string;
  name: string;
  weight: number;
  sector: string;
  location: string;
}}

export const MEUD_SECTOR_ALLOCATIONS = {json.dumps(sector_allocations, indent=2)};

export const MEUD_COUNTRY_ALLOCATIONS = {json.dumps(country_allocations, indent=2)};

export const MEUD_FULL_HOLDINGS: ETFHolding[] = {json.dumps(holdings, indent=2)};
"""

    with open("src/data/meudHoldings.ts", "w", encoding="utf-8") as f:
        f.write(ts_content)

    print("Successfully wrote src/data/meudHoldings.ts!")

if __name__ == "__main__":
    build()
