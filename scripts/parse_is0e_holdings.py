import json

raw_is0e_ocr = """
NEM NEWMONT Materials Equity 9,97 United States USD
AEM AGNICO EAGLE MINES LTD Materials Equity 9,40 Canada CAD
ABX BARRICK MINING CORP Materials Equity 8,85 Canada CAD
WPM WHEATON PRECIOUS METALS CORP Materials Equity 7,11 Canada CAD
FNV FRANCO NEVADA CORP Materials Equity 5,88 Canada CAD
AU ANGLOGOLD ASHANTI PLC Materials Equity 4,74 South Africa USD
GFI GOLD FIELDS ADR REPRESENTING LTD Materials Equity 4,11 South Africa USD
K KINROSS GOLD CORP Materials Equity 4,02 Canada CAD
2899 ZIJIN MINING GROUP LTD H Materials Equity 3,64 China HKD
NST NORTHERN STAR RESOURCES LTD Materials Equity 2,94 Australia AUD
PAAS PAN AMERICAN SILVER CORP Materials Equity 2,65 Canada CAD
EVN EVOLUTION MINING LTD Materials Equity 2,33 Australia AUD
RGLD ROYAL GOLD INC Materials Equity 2,31 United States USD
CDE COEUR MINING INC Materials Equity 2,24 United States USD
AGI ALAMOS GOLD INC CLASS A Materials Equity 1,75 Canada CAD
EDV ENDEAVOUR MINING Materials Equity 1,27 United Kingdom GBP
HMY HARMONY GOLD MINING ADR REPRESENTI Materials Equity 1,21 South Africa USD
IMG IAMGOLD CORP Materials Equity 1,19 Canada CAD
DPM DPM METALS INC Materials Equity 1,14 Canada CAD
ELD ELDORADO GOLD CORP Materials Equity 1,08 Canada CAD
EQX EQUINOX GOLD CORP Materials Equity 1,04 Canada CAD
SSRM SSR MINING INC Materials Equity 0,84 Canada CAD
LUG LUNDIN GOLD INC Materials Equity 0,79 Canada CAD
OR OR ROYALTIES INC Materials Equity 0,77 Canada CAD
2099 CHINA GOLD INTERNATIONAL RESOURCES Materials Equity 0,76 China HKD
OGC OCEANAGOLD CORPORATION CORP Materials Equity 0,75 Canada CAD
GMIN G MINING VENTURES CORP Materials Equity 0,73 Canada CAD
BTO B2GOLD CORP Materials Equity 0,73 Canada CAD
GMD GENESIS MINERALS LTD Materials Equity 0,70 Australia AUD
PRU PERSEUS MINING LTD Materials Equity 0,67 Australia AUD
1818 ZHAOJIN MINING INDUSTRY LTD H Materials Equity 0,64 China HKD
RMS RAMELIUS RESOURCES LTD Materials Equity 0,60 Australia AUD
CMM CAPRICORN METALS LTD DEF Materials Equity 0,57 Australia AUD
KNT K92 MINING INC Materials Equity 0,54 Canada CAD
VAU VAULT MINERALS LTD Materials Equity 0,52 Australia AUD
MAU MONTAGE GOLD CORP Materials Equity 0,52 Canada CAD
TXG TOREX GOLD RESOURCES INC Materials Equity 0,50 Canada CAD
RRL REGIS RESOURCES LTD Materials Equity 0,48 Australia AUD
SKE SKEENA RESOURCES LTD Materials Equity 0,46 Canada CAD
CG CENTERRA GOLD INC Materials Equity 0,46 Canada CAD
WGX WESTGOLD RESOURCES LTD Materials Equity 0,44 Australia AUD
ARIS ARIS MINING CORP Materials Equity 0,43 Canada CAD
2259 ZIJIN GOLD INTERNATIONAL LTD Materials Equity 0,41 China HKD
WDO WESDOME GOLD MINES LTD Materials Equity 0,39 Canada CAD
FVI FORTUNA MINING CORP Materials Equity 0,36 Canada CAD
OLA ORLA MINING LTD Materials Equity 0,35 Canada CAD
PAF PAN AFRICAN RESOURCES PLC Materials Equity 0,35 United Kingdom GBP
WAF WEST AFRICAN RESOURCES LTD Materials Equity 0,34 Australia AUD
1787 SHANDONG GOLD MINING LTD H Materials Equity 0,33 China HKD
SEA SEABRIDGE GOLD INC Materials Equity 0,33 Canada CAD
EMR EMERALD RESOURCES Materials Equity 0,32 Australia AUD
AAUC ALLIED GOLD CORP Materials Equity 0,29 Canada CAD
TFPM TRIPLE FLAG PRECIOUS METALS CORP Materials Equity 0,28 Canada CAD
3330 LINGBAO GOLD GROUP LTD H Materials Equity 0,28 China HKD
AUGO AURA MINERALS INC Materials Equity 0,27 Brazil USD
HOC HOCHSCHILD MINING PLC Materials Equity 0,26 United Kingdom GBP
PDI PREDICTIVE DISCOVERY LTD Materials Equity 0,26 Australia AUD
NG NOVAGOLD RESOURCES INC Materials Equity 0,24 Canada USD
SX2 SOUTHERN CROSS GOLD CONSOLIDATED C Materials Equity 0,24 Canada AUD
5857 ARE HOLDINGS INC Materials Equity 0,22 Japan JPY
RSG RESOLUTE MINING LTD Materials Equity 0,21 Australia AUD
PPTA PERPETUA RESOURCES CORP Materials Equity 0,20 United States CAD
BGL BELLEVUE GOLD LTD Materials Equity 0,19 Australia AUD
IAUX I GOLD CORP Materials Equity 0,17 Canada USD
CYL CATALYST METALS LTD Materials Equity 0,16 Australia AUD
OBM ORA BANDA MINING LTD Materials Equity 0,15 Australia AUD
ALK ALKANE RESOURCES LTD Materials Equity 0,15 Australia AUD
6693 CHIFENG JILONG GOLD MINING LTD CLA Materials Equity 0,14 China HKD
DRD DRDGOLD ADR REPRESENTING LTD Materials Equity 0,13 South Africa USD
MUX MCEWEN INC Materials Equity 0,12 United States USD
KCN KINGSGATE CONSOLIDATED LTD Materials Equity 0,12 Australia AUD
USD USD CASH Cash and/or Derivatives Cash 0,12 United States USD
HKD HKD CASH Cash and/or Derivatives Cash 0,11 Hong Kong HKD
ORE OREZONE GOLD CORP Materials Equity 0,10 Canada CAD
340 TONGGUAN GOLD GROUP LTD Materials Equity 0,09 China HKD
PNR PANTORO GOLD LTD Materials Equity 0,07 Australia AUD
DC DAKOTA GOLD CORP Materials Equity 0,07 United States USD
OGG OSISKO GOLD GROUP INC Materials Equity 0,07 Canada USD
GROY GOLD ROYALTY Materials Equity 0,07 Canada USD
BC8 BLACK CAT SYNDICATE LTD Materials Equity 0,07 Australia AUD
ITRG INTEGRA RESOURCES CORP Materials Equity 0,06 Canada USD
CTGO CONTANGO SILVER AND GOLD INC Materials Equity 0,06 United States USD
SBM ST BARBARA LTD Materials Equity 0,06 Australia AUD
VGC VALOR GOLD CORP Materials Equity 0,02 Canada CAD
ZAR ZAR CASH Cash and/or Derivatives Cash 0,01 South Africa ZAR
BZFUT CASH COLLATERAL CAD BZFUT Cash and/or Derivatives Cash 0,01 Canada CAD
AUD AUD CASH Cash and/or Derivatives Cash 0,01 Australia AUD
JPY JPY CASH Cash and/or Derivatives Cash 0,00 Japan JPY
GBP GBP CASH Cash and/or Derivatives Cash 0,00 United Kingdom GBP
EUR EUR CASH Cash and/or Derivatives Cash 0,00 European Union EUR
RUB RUB CASH Cash and/or Derivatives Cash 0,00 Russian Federation RUB
PLZL PUBLIC JOINT STOCK POLYUS GDR Materials Equity 0,00 Russian Federation USD
PLZL POLYUS Materials Equity 0,00 Russian Federation RUB
FFX FIREFINCH LTD Materials Equity 0,00 Australia AUD
CAD CAD/USD Cash and/or Derivatives FX 0,00 United States USD
AUD AUD/USD Cash and/or Derivatives FX 0,00 United States USD
HKD HKD/USD Cash and/or Derivatives FX 0,00 United States USD
GBP GBP/USD Cash and/or Derivatives FX 0,00 United States USD
JPY JPY/USD Cash and/or Derivatives FX 0,00 United States USD
PTU6 S&P/TSE 60 INDEX SEP 26 Cash and/or Derivatives Futures 0,00 Other CAD
CAD CAD CASH Cash and/or Derivatives Cash 0,00 Canada CAD
"""

lines = [l.strip() for l in raw_is0e_ocr.strip().split('\n') if l.strip()]

holdings = []
sector_weights = {}
country_weights = {}

for line in lines:
    # Pattern matching
    # Ticker, Name, Sector, AssetClass, Weight, Location, Currency
    # Line example: NEM NEWMONT Materials Equity 9,97 United States USD
    parts = line.split()
    ticker = parts[0]
    currency = parts[-1]
    
    # Location can be multiple words (e.g., United States, South Africa, United Kingdom, Hong Kong, European Union, Russian Federation)
    # Let's find weight which has comma or dot e.g. 9,97 or 0,12 or 0,00
    weight_idx = -1
    for i in range(len(parts)-1, 0, -1):
        if ',' in parts[i] or (parts[i].replace('.','',1).isdigit() and i < len(parts)-1):
            # check if it looks like a float e.g. 9,97
            val_str = parts[i].replace(',', '.')
            try:
                w = float(val_str)
                weight_idx = i
                break
            except ValueError:
                pass

    if weight_idx == -1:
        print("Failed to parse line:", line)
        continue

    weight = float(parts[weight_idx].replace(',', '.'))
    location = " ".join(parts[weight_idx+1:-1])
    
    # Left part before weight
    left_parts = parts[1:weight_idx]
    # left_parts contains: Name, Sector, AssetClass
    # AssetClass is usually last in left_parts: Equity, Cash, FX, Futures, "Cash Collateral and Margins"
    # Sector is usually before AssetClass: Materials, Cash and/or Derivatives
    
    left_str = " ".join(left_parts)
    
    asset_class = "Equity"
    sector = "Materials"
    
    if "Cash and/or Derivatives" in left_str:
        sector = "Cash and/or Derivatives"
        name = left_str.replace("Cash and/or Derivatives", "").strip()
        # asset class can be Cash, FX, Futures, Cash Collateral and Margins
        if "Cash Collateral and Margins" in name:
            asset_class = "Cash Collateral and Margins"
            name = name.replace("Cash Collateral and Margins", "").strip()
        elif "Cash" in name:
            asset_class = "Cash"
            name = name.replace("Cash", "").strip()
        elif "FX" in name:
            asset_class = "FX"
            name = name.replace("FX", "").strip()
        elif "Futures" in name:
            asset_class = "Futures"
            name = name.replace("Futures", "").strip()
        else:
            asset_class = "Cash"
    else:
        if left_parts[-1] in ["Equity", "Cash", "FX", "Futures"]:
            asset_class = left_parts[-1]
            left_parts = left_parts[:-1]
        
        if left_parts and left_parts[-1] in ["Materials", "Other"]:
            sector = left_parts[-1]
            left_parts = left_parts[:-1]
            
        name = " ".join(left_parts)

    item = {
        "symbol": ticker,
        "name": name,
        "sector": sector,
        "assetClass": asset_class,
        "weight": weight,
        "location": location,
        "currency": currency
    }
    holdings.append(item)
    
    sector_weights[sector] = sector_weights.get(sector, 0.0) + weight
    country_weights[location] = country_weights.get(location, 0.0) + weight

print(f"Parsed {len(holdings)} holdings.")
print("Total Weight:", sum(h['weight'] for h in holdings))

# Formatted sector allocations
sorted_sectors = [{"name": k, "weight": round(v, 2)} for k, v in sorted(sector_weights.items(), key=lambda x: x[1], reverse=True)]
print("\n--- SECTOR ALLOCATIONS ---")
for s in sorted_sectors:
    print(f"{s['name']}: {s['weight']}%")

sorted_countries = [{"name": k, "weight": round(v, 2)} for k, v in sorted(country_weights.items(), key=lambda x: x[1], reverse=True)]
print("\n--- COUNTRY ALLOCATIONS ---")
for c in sorted_countries:
    print(f"{c['name']}: {c['weight']}%")

ts_content = f"""// Complete holdings dataset for iShares Gold Producers UCITS ETF (IS0E.DE / SPGP / IAUP)
// Official BlackRock / iShares reporting data with full weightings, sectors, asset classes and geographic locations.

export interface ETFHolding {{
  symbol: string;
  name: string;
  sector: string;
  assetClass: string;
  weight: number;
  location: string;
  currency: string;
}}

export const IS0E_SECTOR_ALLOCATIONS = {json.dumps(sorted_sectors, indent=2)};

export const IS0E_COUNTRY_ALLOCATIONS = {json.dumps(sorted_countries, indent=2)};

export const IS0E_FULL_HOLDINGS: ETFHolding[] = {json.dumps(holdings, indent=2)};
"""

with open("src/data/is0eHoldings.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("\nSuccessfully wrote src/data/is0eHoldings.ts!")
