import re
from is3n_raw_part1 import is3n_part1_pages
from is3n_raw_part2 import is3n_part2_pages
from is3n_raw_part3 import is3n_part3_pages
from is3n_raw_part4 import is3n_part4_pages

all_pages = is3n_part1_pages + is3n_part2_pages + is3n_part3_pages + is3n_part4_pages

SECTORS = [
    "Information Technology", "Financials", "Consumer Discretionary", "Communication",
    "Industrials", "Materials", "Energy", "Consumer Staples", "Health Care", "Utilities",
    "Real Estate", "Cash and/or Derivatives"
]

holdings = []
lines_parsed = 0

pattern = re.compile(
    r'^([A-Z0-9\.\*\&\-\_]+)\s+(.+?)\s+(' + '|'.join([re.escape(s) for s in SECTORS]) + r')\s+(Equity|Cash|Money Market|Cash Collateral and Margins|Futures|FX)\s+([\d\.\,\-]+)\s+(.+?)\s+([A-Z]{3})$'
)

for page in all_pages:
    for line in page.strip().split('\n'):
        line = line.strip()
        if not line:
            continue
        m = pattern.match(line)
        if m:
            ticker, name, sector, asset_class, weight_str, country, currency = m.groups()
            w = float(weight_str.replace(',', '.'))
            if asset_class != 'Equity':
                continue
            holdings.append({
                'symbol': ticker,
                'name': name,
                'weight': round(w, 4),
                'sector': sector if sector != 'Communication' else 'Communication Services',
                'country': country
            })
            lines_parsed += 1
        else:
            # Fallback line parsing
            parts = line.split()
            if len(parts) >= 5:
                # find weight which usually has comma or dot
                for idx, p in enumerate(parts):
                    if re.match(r'^\d+[\,\.]\d+$', p):
                        ticker = parts[0]
                        weight = float(p.replace(',', '.'))
                        name = " ".join(parts[1:idx])
                        if weight > 0:
                            holdings.append({
                                'symbol': ticker,
                                'name': name if name else ticker,
                                'weight': round(weight, 4)
                            })
                            lines_parsed += 1
                        break

print(f"Total holdings parsed: {len(holdings)}")
print("Top 10 holdings:")
for h in holdings[:10]:
    print(h)
