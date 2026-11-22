import re
import json
import os

# Put raw text of all 30 pages here
raw_ocr_pages = [
# Page 1
"""
AAPL APPLE INC Information Technology Equity 5,37 United States USD
NVDA NVIDIA CORP Information Technology Equity 5,34 United States USD
MSFT MICROSOFT CORP Information Technology Equity 3,13 United States USD
AMZN AMAZON.COM INC Consumer Discretionary Equity 2,68 United States USD
GOOGL ALPHABET INC CLASS A Communication Equity 2,26 United States USD
AVGO BROADCOM INC Information Technology Equity 1,94 United States USD
GOOG ALPHABET INC CLASS C Communication Equity 1,79 United States USD
META META PLATFORMS INC CLASS A Communication Equity 1,58 United States USD
MU MICRON TECHNOLOGY INC Information Technology Equity 1,22 United States USD
TSLA TESLA INC Consumer Discretionary Equity 1,19 United States USD
LLY ELI LILLY Health Care Equity 1,05 United States USD
JPM JPMORGAN CHASE & CO Financials Equity 1,03 United States USD
AMD ADVANCED MICRO DEVICES INC Information Technology Equity 0,99 United States USD
ASML ASML HOLDING NV Information Technology Equity 0,79 Netherlands EUR
BRKB BERKSHIRE HATHAWAY INC CLASS B Financials Equity 0,76 United States USD
XOM EXXONMOBIL HOLDINGS CORP Energy Equity 0,71 United States USD
JNJ JOHNSON & JOHNSON Health Care Equity 0,67 United States USD
V VISA INC CLASS A Financials Equity 0,67 United States USD
WMT WALMART INC Consumer Staples Equity 0,54 United States USD
INTC INTEL CORPORATION Information Technology Equity 0,52 United States USD
ABBV ABBVIE INC Health Care Equity 0,51 United States USD
AMAT APPLIED MATERIAL INC Information Technology Equity 0,50 United States USD
CSCO CISCO SYSTEMS INC Information Technology Equity 0,49 United States USD
MA MASTERCARD INC CLASS A Financials Equity 0,49 United States USD
CAT CATERPILLAR INC Industrials Equity 0,46 United States USD
BAC BANK OF AMERICA CORP Financials Equity 0,46 United States USD
COST COSTCO WHOLESALE CORP Consumer Staples Equity 0,46 United States USD
LRCX LAM RESEARCH CORP Information Technology Equity 0,45 United States USD
UNH UNITEDHEALTH GROUP INC Health Care Equity 0,44 United States USD
GE GE AEROSPACE Industrials Equity 0,39 United States USD
CVX CHEVRON CORP Energy Equity 0,39 United States USD
PG PROCTER & GAMBLE Consumer Staples Equity 0,38 United States USD
HSBA HSBC HOLDINGS PLC Financials Equity 0,38 United Kingdom GBP
HD HOME DEPOT INC Consumer Discretionary Equity 0,37 United States USD
GS GOLDMAN SACHS GROUP INC Financials Equity 0,36 United States USD
KO COCA-COLA Consumer Staples Equity 0,35 United States USD
MRK MERCK & CO INC Health Care Equity 0,35 United States USD
""",
# Page 2
"""
RY ROYAL BANK OF CANADA Financials Equity 0,33 Canada CAD
PM PHILIP MORRIS INTERNATIONAL INC Consumer Staples Equity 0,33 United States USD
GEV GE VERNOVA INC Industrials Equity 0,33 United States USD
NFLX NETFLIX INC Communication Equity 0,32 United States USD
ROP ROCHE PS PAR AG Health Care Equity 0,32 Switzerland CHF
PLTR PALANTIR TECHNOLOGIES INC CLASS A Information Technology Equity 0,32 United States USD
NOVN NOVARTIS AG Health Care Equity 0,32 Switzerland CHF
KLAC KLA CORP Information Technology Equity 0,32 United States USD
PANW PALO ALTO NETWORKS INC Information Technology Equity 0,31 United States USD
WFC WELLS FARGO Financials Equity 0,30 United States USD
TXN TEXAS INSTRUMENT INC Information Technology Equity 0,30 United States USD
NESN NESTLE SA Consumer Staples Equity 0,30 Switzerland CHF
RTX RTX CORP Industrials Equity 0,29 United States USD
MS MORGAN STANLEY Financials Equity 0,28 United States USD
AZN ASTRAZENECA PLC Health Care Equity 0,28 United Kingdom GBP
SHEL SHELL PLC Energy Equity 0,28 United Kingdom GBP
8306 MITSUBISHI UFJ FINANCIAL GROUP INC Financials Equity 0,26 Japan JPY
LIN LINDE PLC Materials Equity 0,26 United States USD
C CITIGROUP INC Financials Equity 0,25 United States USD
SIE SIEMENS N AG Industrials Equity 0,25 Germany EUR
ORCL ORACLE CORP Information Technology Equity 0,24 United States USD
BHP BHP GROUP LTD Materials Equity 0,23 Australia AUD
TD TORONTO DOMINION Financials Equity 0,22 Canada CAD
CBA COMMONWEALTH BANK OF AUSTRALIA Financials Equity 0,22 Australia AUD
AMGN AMGEN INC Health Care Equity 0,22 United States USD
IBM INTERNATIONAL BUSINESS MACHINES CO Information Technology Equity 0,22 United States USD
STX SEAGATE TECHNOLOGY HOLDINGS PLC Information Technology Equity 0,22 United States USD
SAN BANCO SANTANDER SA Financials Equity 0,22 Spain EUR
TMO THERMO FISHER SCIENTIFIC INC Health Care Equity 0,22 United States USD
APH AMPHENOL CORP CLASS A Information Technology Equity 0,22 United States USD
WDC WESTERN DIGITAL CORP Information Technology Equity 0,21 United States USD
ANET ARISTA NETWORKS INC Information Technology Equity 0,21 United States USD
CRWD CROWDSTRIKE HOLDINGS INC CLASS A Information Technology Equity 0,21 United States USD
ADI ANALOG DEVICES INC Information Technology Equity 0,21 United States USD
MCD MCDONALDS CORP Consumer Discretionary Equity 0,21 United States USD
AXP AMERICAN EXPRESS Financials Equity 0,21 United States USD
QCOM QUALCOMM INC Information Technology Equity 0,21 United States USD
PEP PEPSICO INC Consumer Staples Equity 0,21 United States USD
NEE NEXTERA ENERGY INC Utilities Equity 0,20 United States USD
ALV ALLIANZ Financials Equity 0,20 Germany EUR
VZ VERIZON COMMUNICATIONS INC Communication Equity 0,20 United States USD
USD USD CASH Cash and/or Derivatives Cash 0,20 United States USD
8035 TOKYO ELECTRON LTD Information Technology Equity 0,20 Japan JPY
MRVL MARVELL TECHNOLOGY INC Information Technology Equity 0,20 United States USD
ABT ABBOTT LABORATORIES Health Care Equity 0,19 United States USD
""",
# Page 3
"""
WELL WELLTOWER INC Real Estate Equity 0,19 United States USD
UNP UNION PACIFIC CORP Industrials Equity 0,19 United States USD
DIS WALT DISNEY Communication Equity 0,19 United States USD
TJX TJX INC Consumer Discretionary Equity 0,19 United States USD
UBSG UBS GROUP AG Financials Equity 0,19 Switzerland CHF
7203 TOYOTA MOTOR CORP Consumer Discretionary Equity 0,19 Japan JPY
TTE TOTALENERGIES Energy Equity 0,18 France EUR
SCHW CHARLES SCHWAB CORP Financials Equity 0,18 United States USD
SU SCHNEIDER ELECTRIC Industrials Equity 0,18 France EUR
GILD GILEAD SCIENCES INC Health Care Equity 0,18 United States USD
SAP SAP Information Technology Equity 0,18 Germany EUR
NOVO B NOVO NORDISK CLASS B Health Care Equity 0,18 Denmark DKK
ETN EATON PLC Industrials Equity 0,18 United States USD
T AT&T INC Communication Equity 0,17 United States USD
8316 SUMITOMO MITSUI FINANCIAL GROUP IN Financials Equity 0,17 Japan JPY
ABBN ABB LTD Industrials Equity 0,17 Switzerland CHF
BLK BLACKROCK INC Financials Equity 0,17 United States USD
BA BOEING Industrials Equity 0,17 United States USD
RR. ROLLS-ROYCE HOLDINGS PLC Industrials Equity 0,17 United Kingdom GBP
IBE IBERDROLA SA Utilities Equity 0,17 Spain EUR
SHOP SHOPIFY SUBORDINATE VOTING INC CLA Information Technology Equity 0,16 Canada CAD
DE DEERE Industrials Equity 0,16 United States USD
BKNG BOOKING HOLDINGS INC Consumer Discretionary Equity 0,16 United States USD
COP CONOCOPHILLIPS Energy Equity 0,16 United States USD
BBVA BANCO BILBAO VIZCAYA ARGENTARIA SA Financials Equity 0,16 Spain EUR
CVS CVS HEALTH CORP Health Care Equity 0,16 United States USD
PLD PROLOGIS REIT INC Real Estate Equity 0,16 United States USD
PFE PFIZER INC Health Care Equity 0,16 United States USD
6857 ADVANTEST CORP Information Technology Equity 0,15 Japan JPY
ENR SIEMENS ENERGY N AG Industrials Equity 0,15 Germany EUR
CRM SALESFORCE INC Information Technology Equity 0,15 United States USD
MC LVMH Consumer Discretionary Equity 0,15 France EUR
SPGI S&P GLOBAL INC Financials Equity 0,15 United States USD
ULVR UNILEVER PLC Consumer Staples Equity 0,15 United Kingdom GBP
6501 HITACHI LTD Industrials Equity 0,15 Japan JPY
9984 SOFTBANK GROUP CORP Communication Equity 0,14 Japan JPY
CFR COMPAGNIE FINANCIERE RICHEMONT SA Consumer Discretionary Equity 0,14 Switzerland CHF
GLW CORNING INC Information Technology Equity 0,14 United States USD
SAF SAFRAN SA Industrials Equity 0,14 France EUR
UCG UNICREDIT Financials Equity 0,14 Italy EUR
UBER UBER TECHNOLOGIES INC Industrials Equity 0,14 United States USD
COF CAPITAL ONE FINANCIAL CORP Financials Equity 0,14 United States USD
AIR AIRBUS GROUP Industrials Equity 0,14 France EUR
6758 SONY GROUP CORP Consumer Discretionary Equity 0,14 Japan JPY
BMY BRISTOL MYERS SQUIBB Health Care Equity 0,14 United States USD
""",
# Page 4
"""
ISRG INTUITIVE SURGICAL INC Health Care Equity 0,14 United States USD
AI LAIR LIQUIDE SOCIETE ANONYME POUR Materials Equity 0,14 France EUR
BMO BANK OF MONTREAL Financials Equity 0,14 Canada CAD
CB CHUBB Financials Equity 0,14 United States USD
BATS BRITISH AMERICAN TOBACCO Consumer Staples Equity 0,14 United Kingdom GBP
DELL DELL TECHNOLOGIES INC CLASS C Information Technology Equity 0,14 United States USD
ENB ENBRIDGE INC Energy Equity 0,14 Canada CAD
MO ALTRIA GROUP INC Consumer Staples Equity 0,14 United States USD
8411 MIZUHO FINANCIAL GROUP INC Financials Equity 0,13 Japan JPY
PH PARKER-HANNIFIN CORP Industrials Equity 0,13 United States USD
VRTX VERTEX PHARMACEUTICALS INC Health Care Equity 0,13 United States USD
BNP BNP PARIBAS SA Financials Equity 0,13 France EUR
SBUX STARBUCKS CORP Consumer Discretionary Equity 0,13 United States USD
285A KIOXIA HOLDINGS CORP Information Technology Equity 0,13 Japan JPY
PGR PROGRESSIVE CORP Financials Equity 0,13 United States USD
LOW LOWES COMPANIES INC Consumer Discretionary Equity 0,13 United States USD
BNY BANK OF NEW YORK MELLON CORP Financials Equity 0,13 United States USD
D05 DBS GROUP HOLDINGS LTD Financials Equity 0,13 Singapore SGD
VRT VERTIV HOLDINGS CLASS A Industrials Equity 0,13 United States USD
HWM HOWMET AEROSPACE INC Industrials Equity 0,12 United States USD
DHR DANAHER CORP Health Care Equity 0,12 United States USD
BP. BP PLC Energy Equity 0,12 United Kingdom GBP
CM CANADIAN IMPERIAL BANK OF COMMERCE Financials Equity 0,12 Canada CAD
ZURN ZURICH INSURANCE GROUP AG Financials Equity 0,12 Switzerland CHF
BNS BANK OF NOVA SCOTIA Financials Equity 0,12 Canada CAD
6098 RECRUIT HOLDINGS LTD Industrials Equity 0,12 Japan JPY
SYK STRYKER CORP Health Care Equity 0,12 United States USD
MDT MEDTRONIC PLC Health Care Equity 0,12 United States USD
SO SOUTHERN Utilities Equity 0,12 United States USD
NOW SERVICENOW INC Information Technology Equity 0,12 United States USD
DTE DEUTSCHE TELEKOM N AG Communication Equity 0,12 Germany EUR
MCK MCKESSON CORP Health Care Equity 0,12 United States USD
LMT LOCKHEED MARTIN CORP Industrials Equity 0,12 United States USD
EQIX EQUINIX REIT INC Real Estate Equity 0,11 United States USD
PNC PNC FINANCIAL SERVICES GROUP INC Financials Equity 0,11 United States USD
1299 AIA GROUP LTD Financials Equity 0,11 Hong Kong HKD
ISP INTESA SANPAOLO Financials Equity 0,11 Italy EUR
TT TRANE TECHNOLOGIES PLC Industrials Equity 0,11 United States USD
USB US BANCORP Financials Equity 0,11 United States USD
FTNT FORTINET INC Information Technology Equity 0,11 United States USD
OR LOREAL SA Consumer Staples Equity 0,11 France EUR
GSK GLAXOSMITHKLINE Health Care Equity 0,11 United Kingdom GBP
VLO VALERO ENERGY CORP Energy Equity 0,11 United States USD
NEM NEWMONT Materials Equity 0,11 United States USD
ADP AUTOMATIC DATA PROCESSING INC Industrials Equity 0,11 United States USD
""",
# Page 5
"""
INGA ING GROEP NV Financials Equity 0,11 Netherlands EUR
DUK DUKE ENERGY CORP Utilities Equity 0,11 United States USD
IFX INFINEON TECHNOLOGIES AG Information Technology Equity 0,11 Germany EUR
APP APPLOVIN CORP CLASS A Information Technology Equity 0,11 United States USD
RIO RIO TINTO PLC Materials Equity 0,11 United Kingdom GBP
PWR QUANTA SERVICES INC Industrials Equity 0,11 United States USD
SAN SANOFI SA Health Care Equity 0,11 France EUR
TMUS T MOBILE US INC Communication Equity 0,11 United States USD
MPC MARATHON PETROLEUM CORP Energy Equity 0,11 United States USD
CDNS CADENCE DESIGN SYSTEMS INC Information Technology Equity 0,11 United States USD
BARC BARCLAYS PLC Financials Equity 0,11 United Kingdom GBP
CSX CSX CORP Industrials Equity 0,11 United States USD
WM WASTE MANAGEMENT INC Industrials Equity 0,11 United States USD
ADBE ADOBE INC Information Technology Equity 0,11 United States USD
9983 FAST RETAILING LTD Consumer Discretionary Equity 0,10 Japan JPY
BX BLACKSTONE INC Financials Equity 0,10 United States USD
CMI CUMMINS INC Industrials Equity 0,10 United States USD
CNQ CANADIAN NATURAL RESOURCES LTD Energy Equity 0,10 Canada CAD
SNOW SNOWFLAKE INC Information Technology Equity 0,10 United States USD
MMM 3M Industrials Equity 0,10 United States USD
FCX FREEPORT MCMORAN INC Materials Equity 0,10 United States USD
WMB WILLIAMS INC Energy Equity 0,10 United States USD
ENEL ENEL Utilities Equity 0,10 Italy EUR
ELV ELEVANCE HEALTH INC Health Care Equity 0,10 United States USD
8766 TOKIO MARINE HOLDINGS INC Financials Equity 0,10 Japan JPY
WBC WESTPAC BANKING CORPORATION Financials Equity 0,10 Australia AUD
8058 MITSUBISHI CORP Industrials Equity 0,10 Japan JPY
MRSH MARSH INC Financials Equity 0,10 United States USD
LLOY LLOYDS BANKING GROUP PLC Financials Equity 0,10 United Kingdom GBP
JCI JOHNSON CONTROLS INTERNATIONAL PLC Industrials Equity 0,10 United States USD
BN BROOKFIELD CORP CLASS A Financials Equity 0,10 Canada CAD
CMCSA COMCAST CORP CLASS A Communication Equity 0,10 United States USD
ACN ACCENTURE PLC CLASS A Information Technology Equity 0,09 United States USD
UPS UNITED PARCEL SERVICE INC CLASS B Industrials Equity 0,09 United States USD
NET CLOUDFLARE INC CLASS A Information Technology Equity 0,09 United States USD
MAR MARRIOTT INTERNATIONAL INC CLASS A Consumer Discretionary Equity 0,09 United States USD
CS AXA SA Financials Equity 0,09 France EUR
PSX PHILLIPS 66 Energy Equity 0,09 United States USD
CME CME GROUP INC CLASS A Financials Equity 0,09 United States USD
6861 KEYENCE CORP Information Technology Equity 0,09 Japan JPY
CP CANADIAN PACIFIC KANSAS CITY LTD Industrials Equity 0,09 Canada CAD
GD GENERAL DYNAMICS CORP Industrials Equity 0,09 United States USD
NAB NATIONAL AUSTRALIA BANK LTD Financials Equity 0,09 Australia AUD
CEG CONSTELLATION ENERGY CORP Utilities Equity 0,09 United States USD
MELI MERCADOLIBRE INC Consumer Discretionary Equity 0,09 United States USD
""",
# Page 6
"""
EOG EOG RESOURCES INC Energy Equity 0,09 United States USD
NG. NATIONAL GRID PLC Utilities Equity 0,09 United Kingdom GBP
DDOG DATADOG INC CLASS A Information Technology Equity 0,09 United States USD
TRV TRAVELERS COMPANIES INC Financials Equity 0,09 United States USD
INTU INTUIT INC Information Technology Equity 0,09 United States USD
6981 MURATA MANUFACTURING LTD Information Technology Equity 0,09 Japan JPY
CI CIGNA Health Care Equity 0,09 United States USD
MCO MOODYS CORP Financials Equity 0,09 United States USD
AMT AMERICAN TOWER REIT CORP Real Estate Equity 0,09 United States USD
MDLZ MONDELEZ INTERNATIONAL INC CLASS A Consumer Staples Equity 0,09 United States USD
HLT HILTON WORLDWIDE HOLDINGS INC Consumer Discretionary Equity 0,09 United States USD
ICE INTERCONTINENTAL EXCHANGE INC Financials Equity 0,09 United States USD
EMR EMERSON ELECTRIC Industrials Equity 0,08 United States USD
HOOD ROBINHOOD MARKETS INC CLASS A Financials Equity 0,08 United States USD
SU SUNCOR ENERGY INC Energy Equity 0,08 Canada CAD
SPOT SPOTIFY TECHNOLOGY SA Communication Equity 0,08 Sweden USD
ORLY OREILLY AUTOMOTIVE INC Consumer Discretionary Equity 0,08 United States USD
ROST ROSS STORES INC Consumer Discretionary Equity 0,08 United States USD
GM GENERAL MOTORS Consumer Discretionary Equity 0,08 United States USD
7011 MITSUBISHI HEAVY INDUSTRIES LTD Industrials Equity 0,08 Japan JPY
MUV2 MUENCHENER RUECKVERSICHERUNGS-GESE Financials Equity 0,08 Germany EUR
ITW ILLINOIS TOOL INC Industrials Equity 0,08 United States USD
SNPS SYNOPSYS INC Information Technology Equity 0,08 United States USD
MFC MANULIFE FINANCIAL CORP Financials Equity 0,08 Canada CAD
SHW SHERWIN WILLIAMS Materials Equity 0,08 United States USD
4063 SHIN ETSU CHEMICAL LTD Materials Equity 0,08 Japan JPY
ABI ANHEUSER-BUSCH INBEV SA Consumer Staples Equity 0,08 Belgium EUR
RCL ROYAL CARIBBEAN GROUP LTD Consumer Discretionary Equity 0,08 United States USD
HON HONEYWELL INTERNATIONAL INC Industrials Equity 0,08 United States USD
INVE B INVESTOR CLASS B Financials Equity 0,08 Sweden SEK
ANZ ANZ GROUP HOLDINGS LTD Financials Equity 0,08 Australia AUD
BA. BAE SYSTEMS PLC Industrials Equity 0,08 United Kingdom GBP
FDX FEDEX CORP Industrials Equity 0,08 United States USD
8031 MITSUI LTD Industrials Equity 0,08 Japan JPY
NSC NORFOLK SOUTHERN CORP Industrials Equity 0,08 United States USD
NWG NATWEST GROUP PLC Financials Equity 0,08 United Kingdom GBP
O39 OVERSEA-CHINESE BANKING LTD Financials Equity 0,08 Singapore SGD
SPG SIMON PROPERTY GROUP REIT INC Real Estate Equity 0,08 United States USD
AEM AGNICO EAGLE MINES LTD Materials Equity 0,08 Canada CAD
DASH DOORDASH INC CLASS A Consumer Discretionary Equity 0,08 United States USD
NOC NORTHROP GRUMMAN CORP Industrials Equity 0,08 United States USD
TRP TC ENERGY CORP Energy Equity 0,08 Canada CAD
CTAS CINTAS CORP Industrials Equity 0,08 United States USD
WES WESFARMERS LTD Consumer Discretionary Equity 0,08 Australia AUD
SLB SLB NV Energy Equity 0,08 United States USD
""",
# Page 7
"""
AON AON PLC CLASS A Financials Equity 0,08 United States USD
REGN REGENERON PHARMACEUTICALS INC Health Care Equity 0,08 United States USD
CL COLGATE-PALMOLIVE Consumer Staples Equity 0,08 United States USD
ITX INDUSTRIA DE DISENO TEXTIL SA Consumer Discretionary Equity 0,08 Spain EUR
AEP AMERICAN ELECTRIC POWER INC Utilities Equity 0,08 United States USD
CNR CANADIAN NATIONAL RAILWAY Industrials Equity 0,08 Canada CAD
TFC TRUIST FINANCIAL CORP Financials Equity 0,07 United States USD
NXPI NXP SEMICONDUCTORS NV Information Technology Equity 0,07 United States USD
DG VINCI SA Industrials Equity 0,07 France EUR
GLEN GLENCORE PLC Materials Equity 0,07 United Kingdom GBP
8001 ITOCHU CORP Industrials Equity 0,07 Japan JPY
CRH CRH PUBLIC LIMITED PLC Materials Equity 0,07 United States USD
MNST MONSTER BEVERAGE CORP Consumer Staples Equity 0,07 United States USD
ECL ECOLAB INC Materials Equity 0,07 United States USD
MSI MOTOROLA SOLUTIONS INC Information Technology Equity 0,07 United States USD
MQG MACQUARIE GROUP LTD DEF Financials Equity 0,07 Australia AUD
TDG TRANSDIGM GROUP INC Industrials Equity 0,07 United States USD
URI UNITED RENTALS INC Industrials Equity 0,07 United States USD
SPCX SPACE EXPLORATION TECHNOLOGIES COR Communication Equity 0,07 United States USD
ALL ALLSTATE CORP Financials Equity 0,07 United States USD
HONA HONEYWELL AEROSPACE INC Industrials Equity 0,07 United States USD
PCAR PACCAR INC Industrials Equity 0,07 United States USD
DBK DEUTSCHE BANK AG Financials Equity 0,07 Germany EUR
MPWR MONOLITHIC POWER SYSTEMS INC Information Technology Equity 0,07 United States USD
WBD WARNER BROS. DISCOVERY INC SERIES Communication Equity 0,07 United States USD
TEL TE CONNECTIVITY PLC Information Technology Equity 0,07 United States USD
BSX BOSTON SCIENTIFIC CORP Health Care Equity 0,07 United States USD
KMI KINDER MORGAN INC Energy Equity 0,07 United States USD
6503 MITSUBISHI ELECTRIC CORP Industrials Equity 0,07 Japan JPY
HPE HEWLETT PACKARD ENTERPRISE Information Technology Equity 0,07 United States USD
NDA FI NORDEA BANK Financials Equity 0,07 Finland EUR
AJG ARTHUR J GALLAGHER Financials Equity 0,07 United States USD
APD AIR PRODUCTS AND CHEMICALS INC Materials Equity 0,07 United States USD
ABNB AIRBNB INC CLASS A Consumer Discretionary Equity 0,07 United States USD
D DOMINION ENERGY INC Utilities Equity 0,07 United States USD
TGT TARGET CORP Consumer Staples Equity 0,07 United States USD
NA NATIONAL BANK OF CANADA Financials Equity 0,07 Canada CAD
FIX COMFORT SYSTEMS USA INC Industrials Equity 0,07 United States USD
BE BLOOM ENERGY CLASS A CORP Industrials Equity 0,07 United States USD
GWW WW GRAINGER INC Industrials Equity 0,07 United States USD
CTVA CORTEVA INC Materials Equity 0,07 United States USD
KKR KKR AND CO INC Financials Equity 0,07 United States USD
TER TERADYNE INC Information Technology Equity 0,07 United States USD
HCA HCA HEALTHCARE INC Health Care Equity 0,07 United States USD
DLR DIGITAL REALTY TRUST REIT INC Real Estate Equity 0,07 United States USD
""",
# Page 8
"""
GLE SOCIETE GENERALE SA Financials Equity 0,07 France EUR
ABX BARRICK MINING CORP Materials Equity 0,07 Canada CAD
DHL DEUTSCHE POST AG Industrials Equity 0,07 Germany EUR
COHR COHERENT CORP Information Technology Equity 0,07 United States USD
REL RELX PLC Industrials Equity 0,07 United Kingdom GBP
O REALTY INCOME REIT CORP Real Estate Equity 0,07 United States USD
LITE LUMENTUM HOLDINGS INC Information Technology Equity 0,07 United States USD
PRX PROSUS NV CLASS N Consumer Discretionary Equity 0,06 Netherlands EUR
AFL AFLAC INC Financials Equity 0,06 United States USD
6752 PANASONIC HOLDINGS CORP Consumer Discretionary Equity 0,06 Japan JPY
LNG CHENIERE ENERGY INC Energy Equity 0,06 United States USD
EL ESSILORLUXOTTICA SA Health Care Equity 0,06 France EUR
CIEN CIENA CORP Information Technology Equity 0,06 United States USD
VST VISTRA CORP Utilities Equity 0,06 United States USD
KEYS KEYSIGHT TECHNOLOGIES INC Information Technology Equity 0,06 United States USD
NOKIA NOKIA Information Technology Equity 0,06 Finland EUR
TRGP TARGA RESOURCES CORP Energy Equity 0,06 United States USD
SRE SEMPRA Utilities Equity 0,06 United States USD
ENGI ENGIE SA Utilities Equity 0,06 France EUR
OKE ONEOK INC Energy Equity 0,06 United States USD
STT STATE STREET CORP Financials Equity 0,06 United States USD
F FORD MOTOR CO Consumer Discretionary Equity 0,06 United States USD
7741 HOYA CORP Health Care Equity 0,06 Japan JPY
ATCO A ATLAS COPCO CLASS A Industrials Equity 0,06 Sweden SEK
VOLV B VOLVO CLASS B Industrials Equity 0,06 Sweden SEK
BKR BAKER HUGHES CLASS A Energy Equity 0,06 United States USD
DB1 DEUTSCHE BOERSE AG Financials Equity 0,06 Germany EUR
BAYN BAYER AG Health Care Equity 0,06 Germany EUR
ARGX ARGENX Health Care Equity 0,06 Belgium EUR
AME AMETEK INC Industrials Equity 0,06 United States USD
388 HONG KONG EXCHANGES AND CLEARING L Financials Equity 0,06 Hong Kong HKD
CAH CARDINAL HEALTH INC Health Care Equity 0,06 United States USD
COR CENCORA INC Health Care Equity 0,06 United States USD
LSEG LONDON STOCK EXCHANGE GROUP PLC Financials Equity 0,06 United Kingdom GBP
9433 KDDI CORP Communication Equity 0,06 Japan JPY
LHX L3HARRIS TECHNOLOGIES INC Industrials Equity 0,06 United States USD
MET METLIFE INC Financials Equity 0,06 United States USD
BN DANONE SA Consumer Staples Equity 0,06 France EUR
NUE NUCOR CORP Materials Equity 0,06 United States USD
RHM RHEINMETALL AG Industrials Equity 0,06 Germany EUR
CABK CAIXABANK SA Financials Equity 0,06 Spain EUR
AZO AUTOZONE INC Consumer Discretionary Equity 0,06 United States USD
ROK ROCKWELL AUTOMATION INC Industrials Equity 0,06 United States USD
CARR CARRIER GLOBAL CORP Industrials Equity 0,06 United States USD
APO APOLLO GLOBAL MANAGEMENT INC Financials Equity 0,06 United States USD
""",
# Page 9
"""
LONN LONZA GROUP AG Health Care Equity 0,06 Switzerland CHF
EBAY EBAY INC Consumer Discretionary Equity 0,06 United States USD
FITB FIFTH THIRD BANCORP Financials Equity 0,06 United States USD
4502 TAKEDA PHARMACEUTICAL LTD Health Care Equity 0,06 Japan JPY
XEL XCEL ENERGY INC Utilities Equity 0,06 United States USD
STAN STANDARD CHARTERED PLC Financials Equity 0,06 United Kingdom GBP
NKE NIKE INC CLASS B Consumer Discretionary Equity 0,06 United States USD
CPG COMPASS GROUP PLC Consumer Discretionary Equity 0,06 United Kingdom USD
DSV DSV Industrials Equity 0,06 Denmark DKK
FAST FASTENAL Industrials Equity 0,06 United States USD
PYPL PAYPAL HOLDINGS INC Financials Equity 0,06 United States USD
RMS HERMES INTERNATIONAL Consumer Discretionary Equity 0,06 France EUR
ETR ENTERGY CORP Utilities Equity 0,06 United States USD
EOAN E.ON N Utilities Equity 0,06 Germany EUR
ASM ASM INTERNATIONAL NV Information Technology Equity 0,06 Netherlands EUR
BAS BASF N Materials Equity 0,06 Germany EUR
DVN DEVON ENERGY CORP Energy Equity 0,05 United States USD
EA ELECTRONIC ARTS INC Communication Equity 0,05 United States USD
WPM WHEATON PRECIOUS METALS CORP Materials Equity 0,05 Canada CAD
EXC EXELON CORP Utilities Equity 0,05 United States USD
AAL ANGLO AMERICAN PLC Materials Equity 0,05 United Kingdom GBP
EW EDWARDS LIFESCIENCES CORP Health Care Equity 0,05 United States USD
SREN SWISS RE AG Financials Equity 0,05 Switzerland CHF
FLEX FLEX LTD Information Technology Equity 0,05 United States USD
AMP AMERIPRISE FINANCE INC Financials Equity 0,05 United States USD
2914 JAPAN TOBACCO INC Consumer Staples Equity 0,05 Japan JPY
ATD ALIMENTATION COUCHE TARD INC Consumer Staples Equity 0,05 Canada CAD
HUM HUMANA INC Health Care Equity 0,05 United States USD
PSA PUBLIC STORAGE REIT Real Estate Equity 0,05 United States USD
8591 ORIX CORP Financials Equity 0,05 Japan JPY
RACE FERRARI NV Consumer Discretionary Equity 0,05 Italy EUR
AIG AMERICAN INTERNATIONAL GROUP INC Financials Equity 0,05 United States USD
VTR VENTAS REIT INC Real Estate Equity 0,05 United States USD
ENI ENI Energy Equity 0,05 Italy EUR
HOLN HOLCIM LTD AG Materials Equity 0,05 Switzerland CHF
FERG FERGUSON ENTERPRISES INC Industrials Equity 0,05 United States USD
7974 NINTENDO LTD Communication Equity 0,05 Japan JPY
RSG REPUBLIC SERVICES INC Industrials Equity 0,05 United States USD
WAB WESTINGHOUSE AIR BRAKE TECHNOLOGIE Industrials Equity 0,05 United States USD
NBIS NEBIUS NV CLASS A Information Technology Equity 0,05 Netherlands USD
BDX BECTON DICKINSON Health Care Equity 0,05 United States USD
DGE DIAGEO PLC Consumer Staples Equity 0,05 United Kingdom GBP
6723 RENESAS ELECTRONICS CORP Information Technology Equity 0,05 Japan JPY
HLN HALEON PLC Health Care Equity 0,05 United Kingdom GBP
CVNA CARVANA CLASS A Consumer Discretionary Equity 0,05 United States USD
""",
# Page 10
"""
IDXX IDEXX LABORATORIES INC Health Care Equity 0,05 United States USD
CMG CHIPOTLE MEXICAN GRILL INC Consumer Discretionary Equity 0,05 United States USD
ADM ARCHER DANIELS MIDLAND Consumer Staples Equity 0,05 United States USD
6367 DAIKIN INDUSTRIES LTD Industrials Equity 0,05 Japan JPY
ADSK AUTODESK INC Information Technology Equity 0,05 United States USD
ODFL OLD DOMINION FREIGHT LINE INC Industrials Equity 0,05 United States USD
SE SEA ADS REPRESENTING LTD CLASS A Consumer Discretionary Equity 0,05 Singapore USD
XYZ BLOCK INC CLASS A Financials Equity 0,05 United States USD
SLF SUN LIFE FINANCIAL INC Financials Equity 0,05 Canada CAD
TTWO TAKE TWO INTERACTIVE SOFTWARE INC Communication Equity 0,05 United States USD
MCHP MICROCHIP TECHNOLOGY INC Information Technology Equity 0,05 United States USD
5803 FUJIKURA LTD Industrials Equity 0,05 Japan JPY
NDAQ NASDAQ INC Financials Equity 0,05 United States USD
8002 MARUBENI CORP Industrials Equity 0,05 Japan JPY
HIG HARTFORD INSURANCE GROUP INC Financials Equity 0,05 United States USD
8750 DAIICHI LIFE GROUP INC Financials Equity 0,05 Japan JPY
MSCI MSCI INC Financials Equity 0,05 United States USD
TSCO TESCO PLC Consumer Staples Equity 0,05 United Kingdom GBP
WCN WASTE CONNECTIONS INC Industrials Equity 0,05 United States USD
RIO RIO TINTO LTD Materials Equity 0,05 Australia AUD
8053 SUMITOMO CORP Industrials Equity 0,05 Japan JPY
ALAB ASTERA LABS INC Information Technology Equity 0,05 United States USD
STMPA STMICROELECTRONICS NV Information Technology Equity 0,05 France EUR
CBRE CBRE GROUP INC CLASS A Real Estate Equity 0,05 United States USD
MTB M&T BANK Financials Equity 0,05 United States USD
U11 UNITED OVERSEAS BANK LTD Financials Equity 0,05 Singapore SGD
FNV FRANCO NEVADA CORP Materials Equity 0,05 Canada CAD
G ASSICURAZIONI GENERALI Financials Equity 0,05 Italy EUR
GMG GOODMAN GROUP UNITS Real Estate Equity 0,05 Australia AUD
OXY OCCIDENTAL PETROLEUM CORP Energy Equity 0,05 United States USD
5802 SUMITOMO ELECTRIC INDUSTRIES LTD Consumer Discretionary Equity 0,05 Japan JPY
RKT RECKITT BENCKISER GROUP PLC Consumer Staples Equity 0,05 United Kingdom GBP
SYY SYSCO CORP Consumer Staples Equity 0,04 United States USD
CVE CENOVUS ENERGY Energy Equity 0,04 Canada CAD
LR LEGRAND SA Industrials Equity 0,04 France EUR
WDS WOODSIDE ENERGY GROUP LTD Energy Equity 0,04 Australia AUD
IBKR INTERACTIVE BROKERS GROUP INC CLAS Financials Equity 0,04 United States USD
PRU PRUDENTIAL FINANCIAL INC Financials Equity 0,04 United States USD
8725 MS&AD INSURANCE GROUP HOLDINGS INC Financials Equity 0,04 Japan JPY
KDP KEURIG DR PEPPER INC Consumer Staples Equity 0,04 United States USD
EBS ERSTE GROUP BANK AG Financials Equity 0,04 Austria EUR
YUM YUM BRANDS INC Consumer Discretionary Equity 0,04 United States USD
CSL CSL LTD Health Care Equity 0,04 Australia AUD
PRY PRYSMIAN Industrials Equity 0,04 Italy EUR
PRU PRUDENTIAL PLC Financials Equity 0,04 United Kingdom GBP
""",
# Page 11
"""
RWE RWE AG Utilities Equity 0,04 Germany EUR
COIN COINBASE GLOBAL INC CLASS A Financials Equity 0,04 United States USD
AD KONINKLIJKE AHOLD DELHAIZE NV Consumer Staples Equity 0,04 Netherlands EUR
GRMN GARMIN LTD Consumer Discretionary Equity 0,04 United States USD
MBG MERCEDES-BENZ GROUP N AG Consumer Discretionary Equity 0,04 Germany EUR
A AGILENT TECHNOLOGIES INC Health Care Equity 0,04 United States USD
CLS CELESTICA INC Information Technology Equity 0,04 Canada CAD
8630 SOMPO HOLDINGS INC Financials Equity 0,04 Japan JPY
ED CONSOLIDATED EDISON INC Utilities Equity 0,04 United States USD
GALD GALDERMA GROUP N AG Health Care Equity 0,04 Switzerland CHF
AXON AXON ENTERPRISE INC Industrials Equity 0,04 United States USD
CCO CAMECO CORP Energy Equity 0,04 Canada CAD
PEG PUBLIC SERVICE ENTERPRISE GROUP IN Utilities Equity 0,04 United States USD
GIVN GIVAUDAN SA Materials Equity 0,04 Switzerland CHF
PCG PG&E CORP Utilities Equity 0,04 United States USD
9434 SOFTBANK CORP Communication Equity 0,04 Japan JPY
SSE SSE PLC Utilities Equity 0,04 United Kingdom GBP
6301 KOMATSU LTD Industrials Equity 0,04 Japan JPY
DHI D R HORTON INC Consumer Discretionary Equity 0,04 United States USD
UCB UCB SA Health Care Equity 0,04 Belgium EUR
7267 HONDA MOTOR LTD Consumer Discretionary Equity 0,04 Japan JPY
SAND SANDVIK Industrials Equity 0,04 Sweden SEK
TEVA TEVA PHARMACEUTICAL INDUSTRIES ADR Health Care Equity 0,04 Israel USD
6146 DISCO CORP Information Technology Equity 0,04 Japan JPY
ON ON SEMICONDUCTOR CORP Information Technology Equity 0,04 United States USD
6954 FANUC CORP Industrials Equity 0,04 Japan JPY
SGO COMPAGNIE DE SAINT GOBAIN SA Industrials Equity 0,04 France EUR
CSU CONSTELLATION SOFTWARE INC Information Technology Equity 0,04 Canada CAD
HBAN HUNTINGTON BANCSHARES INC Financials Equity 0,04 United States USD
7182 JAPAN POST BANK LTD Financials Equity 0,04 Japan JPY
ROP ROPER TECHNOLOGIES INC Information Technology Equity 0,04 United States USD
RKLB ROCKET LAB CORP Industrials Equity 0,04 United States USD
IRM IRON MOUNTAIN INC Real Estate Equity 0,04 United States USD
ORA ORANGE SA Communication Equity 0,04 France EUR
STLD STEEL DYNAMICS INC Materials Equity 0,04 United States USD
ALNY ALNYLAM PHARMACEUTICALS INC Health Care Equity 0,04 United States USD
IQV IQVIA HOLDINGS INC Health Care Equity 0,04 United States USD
KR KROGER Consumer Staples Equity 0,04 United States USD
IFC INTACT FINANCIAL CORP Financials Equity 0,04 Canada CAD
ACGL ARCH CAPITAL GROUP LTD Financials Equity 0,04 United States USD
PAYX PAYCHEX INC Industrials Equity 0,04 United States USD
KVUE KENVUE INC Consumer Staples Equity 0,04 United States USD
EXPE EXPEDIA GROUP INC Consumer Discretionary Equity 0,04 United States USD
6702 FUJITSU LTD Information Technology Equity 0,04 Japan JPY
ALC ALCON AG Health Care Equity 0,04 Switzerland CHF
""",
# Page 12
"""
FANG DIAMONDBACK ENERGY INC Energy Equity 0,04 United States USD
CNC CENTENE CORP Health Care Equity 0,04 United States USD
NTRS NORTHERN TRUST CORP Financials Equity 0,04 United States USD
EME EMCOR GROUP INC Industrials Equity 0,04 United States USD
LUMI BANK LEUMI LE ISRAEL Financials Equity 0,04 Israel ILS
WAT WATERS CORP Health Care Equity 0,04 United States USD
KMB KIMBERLY CLARK CORP Consumer Staples Equity 0,04 United States USD
DOL DOLLARAMA INC Consumer Discretionary Equity 0,04 Canada CAD
CRDO CREDO TECHNOLOGY GROUP HOLDING LTD Information Technology Equity 0,04 United States USD
VMC VULCAN MATERIALS Materials Equity 0,04 United States USD
REP REPSOL SA Energy Equity 0,04 Spain EUR
POW POWER CORPORATION OF CANADA Financials Equity 0,04 Canada CAD
DANSKE DANSKE BANK Financials Equity 0,04 Denmark DKK
ADS ADIDAS N AG Consumer Discretionary Equity 0,04 Germany EUR
FER FERROVIAL NV Industrials Equity 0,04 Spain EUR
JBL JABIL INC Information Technology Equity 0,04 United States USD
CCL CARNIVAL CORP LTD Consumer Discretionary Equity 0,04 United States USD
WEC WEC ENERGY GROUP INC Utilities Equity 0,04 United States USD
6762 TDK CORP Information Technology Equity 0,04 Japan JPY
SEB A SKANDINAVISKA ENSKILDA BANKEN Financials Equity 0,04 Sweden SEK
MLM MARTIN MARIETTA MATERIALS INC Materials Equity 0,04 United States USD
6701 NEC CORP Information Technology Equity 0,04 Japan JPY
ASSA B ASSA ABLOY B Industrials Equity 0,04 Sweden SEK
ZTS ZOETIS INC CLASS A Health Care Equity 0,04 United States USD
III 3I GROUP PLC Financials Equity 0,04 United Kingdom GBP
CCI CROWN CASTLE INC Real Estate Equity 0,04 United States USD
NTRA NATERA INC Health Care Equity 0,04 United States USD
SDZ SANDOZ GROUP AG Health Care Equity 0,04 Switzerland CHF
CBK COMMERZBANK AG Financials Equity 0,04 Germany EUR
SLHN SWISS LIFE HOLDING AG Financials Equity 0,04 Switzerland CHF
NTR NUTRIEN LTD Materials Equity 0,04 Canada CAD
SWED A SWEDBANK Financials Equity 0,04 Sweden SEK
FFH FAIRFAX FINANCIAL HOLDINGS SUB VOT Financials Equity 0,04 Canada CAD
WOW WOOLWORTHS GROUP LTD Consumer Staples Equity 0,04 Australia AUD
CASY CASEYS GENERAL STORES INC Consumer Staples Equity 0,03 United States USD
KBC KBC GROEP Financials Equity 0,03 Belgium EUR
TCL TRANSURBAN GROUP STAPLED UNITS Industrials Equity 0,03 Australia AUD
EXPN EXPERIAN PLC Industrials Equity 0,03 United Kingdom GBP
NTAP NETAPP INC Information Technology Equity 0,03 United States USD
IR INGERSOLL RAND INC Industrials Equity 0,03 United States USD
RJF RAYMOND JAMES INC Financials Equity 0,03 United States USD
AEE AMEREN CORP Utilities Equity 0,03 United States USD
TWLO TWILIO INC CLASS A Information Technology Equity 0,03 United States USD
EQT EQT CORP Energy Equity 0,03 United States USD
4568 DAIICHI SANKYO LTD Health Care Equity 0,03 Japan JPY
""",
# Page 13
"""
DOV DOVER CORP Industrials Equity 0,03 United States USD
4519 CHUGAI PHARMACEUTICAL LTD Health Care Equity 0,03 Japan JPY
WDAY WORKDAY INC CLASS A Information Technology Equity 0,03 United States USD
ILMN ILLUMINA INC Health Care Equity 0,03 United States USD
FTI TECHNIPFMC PLC Energy Equity 0,03 United States USD
Q QNITY ELECTRONICS INC Information Technology Equity 0,03 United States USD
FTS FORTIS INC Utilities Equity 0,03 Canada CAD
L LOBLAW COMPANIES LTD Consumer Staples Equity 0,03 Canada CAD
K KINROSS GOLD CORP Materials Equity 0,03 Canada CAD
DTE DTE ENERGY Utilities Equity 0,03 United States USD
CFG CITIZENS FINANCIAL GROUP INC Financials Equity 0,03 United States USD
RBLX ROBLOX CORP CLASS A Communication Equity 0,03 United States USD
EIX EDISON INTERNATIONAL Utilities Equity 0,03 United States USD
SIKA SIKA AG Materials Equity 0,03 Switzerland CHF
TPR TAPESTRY INC Consumer Discretionary Equity 0,03 United States USD
EXR EXTRA SPACE STORAGE REIT INC Real Estate Equity 0,03 United States USD
VEEV VEEVA SYSTEMS INC CLASS A Health Care Equity 0,03 United States USD
6971 KYOCERA CORP Information Technology Equity 0,03 Japan JPY
AER AERCAP HOLDINGS NV Industrials Equity 0,03 Netherlands USD
FICO FAIR ISAAC CORP Information Technology Equity 0,03 United States USD
POLI BANK HAPOALIM BM Financials Equity 0,03 Israel ILS
5108 BRIDGESTONE CORP Consumer Discretionary Equity 0,03 Japan JPY
RF REGIONS FINANCIAL CORP Financials Equity 0,03 United States USD
8802 MITSUBISHI ESTATE CO LTD Real Estate Equity 0,03 Japan JPY
VOD VODAFONE GROUP PLC Communication Equity 0,03 United Kingdom GBP
4578 OTSUKA HOLDINGS LTD Health Care Equity 0,03 Japan JPY
SUNB SUNBELT RENTALS HOLDINGS INC Industrials Equity 0,03 United Kingdom GBP
FISV FISERV INC Financials Equity 0,03 United States USD
ATCO B ATLAS COPCO CLASS B Industrials Equity 0,03 Sweden SEK
WTW WILLIS TOWERS WATSON PLC Financials Equity 0,03 United States USD
DXCM DEXCOM INC Health Care Equity 0,03 United States USD
CHRW CH ROBINSON WORLDWIDE INC Industrials Equity 0,03 United States USD
RMD RESMED INC Health Care Equity 0,03 United States USD
OTIS OTIS WORLDWIDE CORP Industrials Equity 0,03 United States USD
8604 NOMURA HOLDINGS INC Financials Equity 0,03 Japan JPY
2802 AJINOMOTO INC Consumer Staples Equity 0,03 Japan JPY
PPL PEMBINA PIPELINE CORP Energy Equity 0,03 Canada CAD
SYF SYNCHRONY FINANCIAL Financials Equity 0,03 United States USD
MT ARCELORMITTAL SA Materials Equity 0,03 France EUR
IMB IMPERIAL BRANDS PLC Consumer Staples Equity 0,03 United Kingdom GBP
FE FIRSTENERGY CORP Utilities Equity 0,03 United States USD
6178 JAPAN POST HOLDINGS LTD Financials Equity 0,03 Japan JPY
VRSK VERISK ANALYTICS INC Industrials Equity 0,03 United States USD
LYV LIVE NATION ENTERTAINMENT INC Communication Equity 0,03 United States USD
VICI VICI PPTYS INC Real Estate Equity 0,03 United States USD
""",
# Page 14
"""
NRG NRG ENERGY INC Utilities Equity 0,03 United States USD
BIIB BIOGEN INC Health Care Equity 0,03 United States USD
9432 NTT INC Communication Equity 0,03 Japan JPY
VIE VEOLIA ENVIRON. SA Utilities Equity 0,03 France EUR
TSEM TOWER SEMICONDUCTOR LTD Information Technology Equity 0,03 Israel ILS
LPLA LPL FINANCIAL HOLDINGS INC Financials Equity 0,03 United States USD
TDY TELEDYNE TECHNOLOGIES INC Information Technology Equity 0,03 United States USD
8015 TOYOTA TSUSHO CORP Industrials Equity 0,03 Japan JPY
CBOE CBOE GLOBAL MARKETS INC Financials Equity 0,03 United States USD
VWS VESTAS WIND SYSTEMS Industrials Equity 0,03 Denmark DKK
HAL HALLIBURTON Energy Equity 0,03 United States USD
AV. AVIVA PLC Financials Equity 0,03 United Kingdom GBP
ALL ARISTOCRAT LEISURE LTD Consumer Discretionary Equity 0,03 Australia AUD
EQNR EQUINOR Energy Equity 0,03 Norway NOK
GEHC GE HEALTHCARE TECHNOLOGIES INC Health Care Equity 0,03 United States USD
Z74 SINGAPORE TELECOMMUNICATIONS LTD Communication Equity 0,03 Singapore SGD
PFG PRINCIPAL FINANCIAL GROUP INC Financials Equity 0,03 United States USD
DG DOLLAR GENERAL CORP Consumer Staples Equity 0,03 United States USD
QBE QBE INSURANCE GROUP LTD Financials Equity 0,03 Australia AUD
XYL XYLEM INC Industrials Equity 0,03 United States USD
AVB AVALONBAY COMMUNITIES REIT INC Real Estate Equity 0,03 United States USD
CW CURTISS WRIGHT CORP Industrials Equity 0,03 United States USD
RVMD REVOLUTION MEDICINES INC Health Care Equity 0,03 United States USD
ES EVERSOURCE ENERGY Utilities Equity 0,03 United States USD
669 TECHTRONIC INDUSTRIES LTD Industrials Equity 0,03 Hong Kong HKD
PPG PPG INDUSTRIES INC Materials Equity 0,03 United States USD
MSTR STRATEGY INC CLASS A Information Technology Equity 0,03 United States USD
WST WEST PHARMACEUTICAL SERVICES INC Health Care Equity 0,03 United States USD
HO THALES SA Industrials Equity 0,03 France EUR
PHM PULTEGROUP INC Consumer Discretionary Equity 0,03 United States USD
8801 MITSUI FUDOSAN LTD Real Estate Equity 0,03 Japan JPY
CINF CINCINNATI FINANCIAL CORP Financials Equity 0,03 United States USD
WSM WILLIAMS SONOMA INC Consumer Discretionary Equity 0,03 United States USD
MDB MONGODB INC CLASS A Information Technology Equity 0,03 United States USD
MKL MARKEL GROUP INC Financials Equity 0,03 United States USD
8308 RESONA HOLDINGS INC Financials Equity 0,03 Japan JPY
CPAY CORPAY INC Financials Equity 0,03 United States USD
ATO ATMOS ENERGY CORP Utilities Equity 0,03 United States USD
4062 IBIDEN LTD Information Technology Equity 0,03 Japan JPY
DLTR DOLLAR TREE INC Consumer Staples Equity 0,03 United States USD
ARES ARES MANAGEMENT CORP CLASS A Financials Equity 0,03 United States USD
7751 CANON INC Information Technology Equity 0,03 Japan JPY
HEI HEIDELBERG MATERIALS AG Materials Equity 0,03 Germany EUR
AMS AMADEUS IT GROUP SA Consumer Discretionary Equity 0,03 Spain EUR
CNP CENTERPOINT ENERGY INC Utilities Equity 0,03 United States USD
""",
# Page 15
"""
DNB DNB BANK Financials Equity 0,03 Norway NOK
SAMPO SAMPO CLASS A Financials Equity 0,03 Finland EUR
BMPS BANCA MONTE DEI PASCHI DI SIENA SP Financials Equity 0,03 Italy EUR
ABN ABN AMRO BANK NV Financials Equity 0,03 Netherlands EUR
ERIC B ERICSSON B Information Technology Equity 0,03 Sweden SEK
LH LABCORP HOLDINGS INC Health Care Equity 0,03 United States USD
MTD METTLER TOLEDO INC Health Care Equity 0,03 United States USD
RPRX ROYALTY PHARMA PLC CLASS A Health Care Equity 0,03 United States USD
AWK AMERICAN WATER WORKS INC Utilities Equity 0,03 United States USD
ML MICHELIN Consumer Discretionary Equity 0,03 France EUR
XPO XPO INC Industrials Equity 0,03 United States USD
OMC OMNICOM GROUP INC Communication Equity 0,03 United States USD
TECK.B TECK RESOURCES SUBORDINATE VOTING Materials Equity 0,03 Canada CAD
1 CK HUTCHISON HOLDINGS LTD Industrials Equity 0,03 Hong Kong HKD
2388 BOC HONG KONG HOLDINGS LTD Financials Equity 0,03 Hong Kong HKD
CPRT COPART INC Industrials Equity 0,03 United States USD
PPL PPL CORP Utilities Equity 0,03 United States USD
FFIV F5 INC Information Technology Equity 0,03 United States USD
NXT NEXT PLC Consumer Discretionary Equity 0,03 United Kingdom GBP
AMRZ AMRIZE AG Materials Equity 0,03 United States USD
HUBB HUBBELL INC Industrials Equity 0,03 United States USD
8309 SUMITOMO MITSUI TRUST GROUP INC Financials Equity 0,03 Japan JPY
IHG INTERCONTINENTAL HOTELS GROUP PLC Consumer Discretionary Equity 0,03 United Kingdom USD
CCEP COCA COLA EUROPACIFIC PARTNERS PLC Consumer Staples Equity 0,03 Netherlands USD
JBHT JB HUNT TRANSPORT SERVICES INC Industrials Equity 0,03 United States USD
4503 ASTELLAS PHARMA INC Health Care Equity 0,03 Japan JPY
HEIA HEINEKEN NV Consumer Staples Equity 0,03 Netherlands EUR
TPL TEXAS PACIFIC LAND CORP Energy Equity 0,03 United States USD
EQR EQUITY RESIDENTIAL REIT Real Estate Equity 0,03 United States USD
ACS ACS ACTIVIDADES DE CONSTRUCCION Y Industrials Equity 0,03 Spain EUR
HPQ HP INC Information Technology Equity 0,03 United States USD
NN NN GROUP NV Financials Equity 0,03 Netherlands EUR
4901 FUJIFILM HOLDINGS CORP Information Technology Equity 0,03 Japan JPY
CHD CHURCH AND DWIGHT INC Consumer Staples Equity 0,03 United States USD
EXPD EXPEDITORS INTERNATIONAL OF WASHIN Industrials Equity 0,03 United States USD
DGX QUEST DIAGNOSTICS INC Health Care Equity 0,03 United States USD
HSY HERSHEY FOODS Consumer Staples Equity 0,03 United States USD
UTHR UNITED THERAPEUTICS CORP Health Care Equity 0,03 United States USD
ADYEN ADYEN NV Financials Equity 0,03 Netherlands EUR
KHC KRAFT HEINZ Consumer Staples Equity 0,03 United States USD
OKTA OKTA INC CLASS A Information Technology Equity 0,03 United States USD
5020 ENEOS HOLDINGS INC Energy Equity 0,03 Japan JPY
ESLT ELBIT SYSTEMS LTD Industrials Equity 0,03 Israel ILS
ULTA ULTA BEAUTY INC Consumer Discretionary Equity 0,03 United States USD
6902 DENSO CORP Consumer Discretionary Equity 0,03 Japan JPY
""",
# Page 16
"""
UMG UNIVERSAL MUSIC GROUP NV Communication Equity 0,03 Netherlands EUR
16 SUN HUNG KAI PROPERTIES LTD Real Estate Equity 0,03 Hong Kong HKD
AENA AENA SME SA Industrials Equity 0,03 Spain EUR
6273 SMC (JAPAN) CORP Industrials Equity 0,03 Japan JPY
INSM INSMED INC Health Care Equity 0,03 United States USD
PUB PUBLICIS GROUPE SA Communication Equity 0,03 France EUR
BMW BMW AG Consumer Discretionary Equity 0,02 Germany EUR
BPE BPER BANCA Financials Equity 0,02 Italy EUR
LDO LEONARDO FINMECCANICA SPA Industrials Equity 0,02 Italy EUR
DTG DAIMLER TRUCK HOLDING E AG Industrials Equity 0,02 Germany EUR
P EVERPURE INC CLASS A Information Technology Equity 0,02 United States USD
3382 SEVEN & I HOLDINGS LTD Consumer Staples Equity 0,02 Japan JPY
TROW T ROWE PRICE GROUP INC Financials Equity 0,02 United States USD
BURL BURLINGTON STORES INC Consumer Discretionary Equity 0,02 United States USD
DRI DARDEN RESTAURANTS INC Consumer Discretionary Equity 0,02 United States USD
VRSN VERISIGN INC Information Technology Equity 0,02 United States USD
FIS FIDELITY NATIONAL INFORMATION SERV Financials Equity 0,02 United States USD
FMG FORTESCUE LTD Materials Equity 0,02 Australia AUD
A5G AIB GROUP PLC Financials Equity 0,02 Ireland EUR
CMS CMS ENERGY CORP Utilities Equity 0,02 United States USD
CRWV COREWEAVE INC CLASS A Information Technology Equity 0,02 United States USD
VLTO VERALTO CORP Industrials Equity 0,02 United States USD
BBD.B BOMBARDIER INC CLASS B Industrials Equity 0,02 Canada CAD
MTZ MASTEC INC Industrials Equity 0,02 United States USD
LGEN LEGAL AND GENERAL GROUP PLC Financials Equity 0,02 United Kingdom GBP
MTX MTU AERO ENGINES HOLDING AG Industrials Equity 0,02 Germany EUR
ENTG ENTEGRIS INC Information Technology Equity 0,02 United States USD
FTV FORTIVE CORP Industrials Equity 0,02 United States USD
FRE FRESENIUS SE AND CO KGAA Health Care Equity 0,02 Germany EUR
SW SMURFIT WESTROCK PLC Materials Equity 0,02 United States USD
STZ CONSTELLATION BRANDS INC CLASS A Consumer Staples Equity 0,02 United States USD
FTAI FTAI AVIATION LTD Industrials Equity 0,02 United States USD
KEY KEYCORP Financials Equity 0,02 United States USD
IMO IMPERIAL OIL LTD Energy Equity 0,02 Canada CAD
DOW DOW INC Materials Equity 0,02 United States USD
FM FIRST QUANTUM MINERALS LTD Materials Equity 0,02 Canada CAD
ICSUAGD BLK ICS USD LIQ AGENCY DIS Cash and/or Derivatives Money Market 0,02 Ireland USD
CF CF INDUSTRIES HOLDINGS INC Materials Equity 0,02 United States USD
RS RELIANCE STEEL & ALUMINUM Materials Equity 0,02 United States USD
QSR RESTAURANTS BRANDS INTERNATIONAL I Consumer Discretionary Equity 0,02 Canada CAD
ACA CREDIT AGRICOLE SA Financials Equity 0,02 France EUR
NSIS B NOVOZYMES B Materials Equity 0,02 Denmark DKK
FSLR FIRST SOLAR INC Information Technology Equity 0,02 United States USD
ZM ZOOM COMMUNICATIONS INC CLASS A Information Technology Equity 0,02 United States USD
EXE EXPAND ENERGY CORP Energy Equity 0,02 United States USD
""",
# Page 17
"""
VACN VAT GROUP AG Industrials Equity 0,02 Switzerland CHF
6920 LASERTEC CORP Information Technology Equity 0,02 Japan JPY
BAMI BANCO BPM Financials Equity 0,02 Italy EUR
NI NISOURCE INC Utilities Equity 0,02 United States USD
COL COLES GROUP LTD Consumer Staples Equity 0,02 Australia AUD
BIRG BANK OF IRELAND GROUP PLC Financials Equity 0,02 Ireland EUR
EFX EQUIFAX INC Industrials Equity 0,02 United States USD
HBAN HELVETIA BALOISE HOLDING N AG Financials Equity 0,02 Switzerland CHF
GIS GENERAL MILLS INC Consumer Staples Equity 0,02 United States USD
PHIA KONINKLIJKE PHILIPS NV Health Care Equity 0,02 Netherlands EUR
SNA SNAP ON INC Industrials Equity 0,02 United States USD
SHB A SVENSKA HANDELSBANKEN-A SHS Financials Equity 0,02 Sweden SEK
CTSH COGNIZANT TECHNOLOGY SOLUTIONS COR Information Technology Equity 0,02 United States USD
9020 EAST JAPAN RAILWAY Industrials Equity 0,02 Japan JPY
HLMA HALMA PLC Information Technology Equity 0,02 United Kingdom GBP
GBP GBP CASH Cash and/or Derivatives Cash 0,02 United Kingdom GBP
GEBN GEBERIT AG Industrials Equity 0,02 Switzerland CHF
1605 INPEX CORP Energy Equity 0,02 Japan JPY
KER KERING SA Consumer Discretionary Equity 0,02 France EUR
L LOEWS CORP Financials Equity 0,02 United States USD
PKG PACKAGING CORP OF AMERICA Materials Equity 0,02 United States USD
STE STERIS Health Care Equity 0,02 United States USD
DD DUPONT DE NEMOURS INC Materials Equity 0,02 United States USD
PAAS PAN AMERICAN SILVER CORP Materials Equity 0,02 Canada CAD
GPN GLOBAL PAYMENTS INC Financials Equity 0,02 United States USD
AFRM AFFIRM HOLDINGS INC CLASS A Financials Equity 0,02 United States USD
BESI BE SEMICONDUCTOR INDUSTRIES NV Information Technology Equity 0,02 Netherlands EUR
NBIX NEUROCRINE BIOSCIENCES INC Health Care Equity 0,02 United States USD
LNT ALLIANT ENERGY CORP Utilities Equity 0,02 United States USD
BRO BROWN & BROWN INC Financials Equity 0,02 United States USD
AMCR AMCOR PLC Materials Equity 0,02 United States USD
RBA RB GLOBAL INC Industrials Equity 0,02 Canada CAD
KPN KONINKLIJKE KPN NV Communication Equity 0,02 Netherlands EUR
INCY INCYTE CORP Health Care Equity 0,02 United States USD
7269 SUZUKI MOTOR CORP Consumer Discretionary Equity 0,02 Japan JPY
SOFI SOFI TECHNOLOGIES INC Financials Equity 0,02 United States USD
KNEBV KONE Industrials Equity 0,02 Finland EUR
SAB BANCO DE SABADELL Financials Equity 0,02 Spain EUR
RDDT REDDIT INC CLASS A Communication Equity 0,02 United States USD
FN FABRINET Information Technology Equity 0,02 United States USD
DSFIR DSM FIRMENICH AG Materials Equity 0,02 Netherlands EUR
FWONK LIBERTY MEDIA FORMULA ONE SERIES C Communication Equity 0,02 United States USD
ALFA ALFA LAVAL Industrials Equity 0,02 Sweden SEK
BAER JULIUS BAER GRUPPE AG Financials Equity 0,02 Switzerland CHF
PGHN PARTNERS GROUP HOLDING AG Financials Equity 0,02 Switzerland CHF
""",
# Page 18
"""
MRK MERCK Health Care Equity 0,02 Germany EUR
BAM BROOKFIELD ASSET MANAGEMENT VOTING Financials Equity 0,02 Canada CAD
INF INFORMA PLC Communication Equity 0,02 United Kingdom GBP
BALL BALL CORP Materials Equity 0,02 United States USD
EVRG EVERGY INC Utilities Equity 0,02 United States USD
TXT TEXTRON INC Industrials Equity 0,02 United States USD
9022 CENTRAL JAPAN RAILWAY Industrials Equity 0,02 Japan JPY
LEN LENNAR A CORP CLASS A Consumer Discretionary Equity 0,02 United States USD
GMAB GENMAB Health Care Equity 0,02 Denmark DKK
8267 AEON LTD Consumer Staples Equity 0,02 Japan JPY
SBAC SBA COMMUNICATIONS REIT CORP CLASS Real Estate Equity 0,02 United States USD
FLUT FLUTTER ENTERTAINMENT PLC Consumer Discretionary Equity 0,02 United States USD
NST NORTHERN STAR RESOURCES LTD Materials Equity 0,02 Australia AUD
5401 NIPPON STEEL CORP Materials Equity 0,02 Japan JPY
BT.A BT GROUP PLC Communication Equity 0,02 United Kingdom GBP
NVR NVR INC Consumer Discretionary Equity 0,02 United States USD
4452 KAO CORP Consumer Staples Equity 0,02 Japan JPY
HEIA HEICO CORP CLASS A Industrials Equity 0,02 United States USD
IFF INTERNATIONAL FLAVORS & FRAGRANCES Materials Equity 0,02 United States USD
SAAB B SAAB CLASS B Industrials Equity 0,02 Sweden SEK
IP INTERNATIONAL PAPER Materials Equity 0,02 United States USD
EL ESTEE LAUDER INC CLASS A Consumer Staples Equity 0,02 United States USD
FBK FINECOBANK BANCA FINECO Financials Equity 0,02 Italy EUR
ZBH ZIMMER BIOMET HOLDINGS INC Health Care Equity 0,02 United States USD
LII LENNOX INTERNATIONAL INC Industrials Equity 0,02 United States USD
BG BUNGE GLOBAL SA Consumer Staples Equity 0,02 United States USD
4543 TERUMO CORP Health Care Equity 0,02 Japan JPY
MG MAGNA INTERNATIONAL INC Consumer Discretionary Equity 0,02 Canada CAD
BXB BRAMBLES LTD Industrials Equity 0,02 Australia AUD
VNA VONOVIA SE Real Estate Equity 0,02 Germany EUR
SGSN SGS SA Industrials Equity 0,02 Switzerland CHF
FDXF FEDEX FREIGHT HOLDING COMPANY INC Industrials Equity 0,02 United States USD
HEXA B HEXAGON CLASS B Information Technology Equity 0,02 Sweden SEK
SCMN SWISSCOM AG Communication Equity 0,02 Switzerland CHF
7936 ASICS CORP Consumer Discretionary Equity 0,02 Japan JPY
TOU TOURMALINE OIL CORP Energy Equity 0,02 Canada CAD
2 CLP HOLDINGS LTD Utilities Equity 0,02 Hong Kong HKD
EPI A EPIROC CLASS A Industrials Equity 0,02 Sweden SEK
BZFUT CASH COLLATERAL USD BZFUT Cash and/or Derivatives Cash Collateral and Margins 0,02 United States USD
INVH INVITATION HOMES INC Real Estate Equity 0,02 United States USD
TSN TYSON FOODS INC CLASS A Consumer Staples Equity 0,02 United States USD
ESS ESSEX PROPERTY TRUST REIT INC Real Estate Equity 0,02 United States USD
9735 SECOM LTD Industrials Equity 0,02 Japan JPY
ANTO ANTOFAGASTA PLC Materials Equity 0,02 United Kingdom GBP
4661 ORIENTAL LAND LTD Consumer Discretionary Equity 0,02 Japan JPY
""",
# Page 19
"""
ESSITY B ESSITY CLASS B Consumer Staples Equity 0,02 Sweden SEK
MAA MID AMERICA APARTMENT COMMUNITIES Real Estate Equity 0,02 United States USD
CCH COCA COLA HBC AG Consumer Staples Equity 0,02 United Kingdom GBP
STO SANTOS LTD Energy Equity 0,02 Australia AUD
MAS MASCO CORP Industrials Equity 0,02 United States USD
PST POSTE ITALIANE Financials Equity 0,02 Italy EUR
WRT1V WARTSILA Industrials Equity 0,02 Finland EUR
7013 IHI CORP Industrials Equity 0,02 Japan JPY
BBY BEST BUY INC Consumer Discretionary Equity 0,02 United States USD
WY WEYERHAEUSER REIT Real Estate Equity 0,02 United States USD
CDW CDW CORP Information Technology Equity 0,02 United States USD
EQT EQT Financials Equity 0,02 Sweden SEK
WSP WSP GLOBAL INC Industrials Equity 0,02 Canada CAD
J JACOBS SOLUTIONS INC Industrials Equity 0,02 United States USD
GPC GENUINE PARTS Consumer Discretionary Equity 0,02 United States USD
TEF TELEFONICA SA Communication Equity 0,02 Spain EUR
REG REGENCY CENTERS REIT CORP Real Estate Equity 0,02 United States USD
KIM KIMCO REALTY REIT CORP Real Estate Equity 0,02 United States USD
EUR EUR CASH Cash and/or Derivatives Cash 0,02 European Union EUR
VOW3 VOLKSWAGEN NON-VOTING PREF AG Consumer Discretionary Equity 0,02 Germany EUR
HNR1 HANNOVER RUECK Financials Equity 0,02 Germany EUR
FCNCA FIRST CITIZENS BANCSHARES INC CLAS Financials Equity 0,02 United States USD
SCG SCENTRE GROUP Real Estate Equity 0,02 Australia AUD
MRU METRO INC Consumer Staples Equity 0,02 Canada CAD
NESTE NESTE Energy Equity 0,02 Finland EUR
CAP CAPGEMINI Information Technology Equity 0,02 France EUR
GWO GREAT WEST LIFECO INC Financials Equity 0,02 Canada CAD
CDE COEUR MINING INC Materials Equity 0,02 United States USD
4004 RESONAC HOLDINGS Materials Equity 0,02 Japan JPY
EG EVEREST GROUP LTD Financials Equity 0,02 United States USD
WRB WR BERKLEY CORP Financials Equity 0,02 United States USD
6361 EBARA CORP Industrials Equity 0,02 Japan JPY
WKL WOLTERS KLUWER NV Industrials Equity 0,02 Netherlands EUR
WN GEORGE WESTON LTD Consumer Staples Equity 0,02 Canada CAD
LOGN LOGITECH INTERNATIONAL SA Information Technology Equity 0,02 Switzerland CHF
WPC W. P. CAREY REIT INC Real Estate Equity 0,02 United States USD
CSL CARLISLE COMPANIES INC Industrials Equity 0,02 United States USD
BR BROADRIDGE FINANCIAL SOLUTIONS INC Industrials Equity 0,02 United States USD
8830 SUMITOMO REALTY & DEVELOPMENT LTD Real Estate Equity 0,02 Japan JPY
LUN LUNDIN MINING CORP Materials Equity 0,02 Canada CAD
7832 BANDAI NAMCO HOLDINGS INC Consumer Discretionary Equity 0,02 Japan JPY
IEX IDEX CORP Industrials Equity 0,02 United States USD
6326 KUBOTA CORP Industrials Equity 0,02 Japan JPY
2503 KIRIN HOLDINGS LTD Consumer Staples Equity 0,02 Japan JPY
BOL BOLIDEN Materials Equity 0,02 Sweden SEK
""",
# Page 20
"""
URW UNIBAIL RODAMCO WE STAPLED UNITS Real Estate Equity 0,02 France EUR
ZS ZSCALER INC Information Technology Equity 0,02 United States USD
ARX ARC RESOURCES LTD Energy Equity 0,02 Canada CAD
9503 KANSAI ELECTRIC POWER INC Utilities Equity 0,02 Japan JPY
DECK DECKERS OUTDOOR CORP Consumer Discretionary Equity 0,02 United States USD
EMA EMERA INC Utilities Equity 0,02 Canada CAD
BG BAWAG GROUP AG Financials Equity 0,02 Austria EUR
SUN SUNCORP GROUP LTD Financials Equity 0,02 Australia AUD
1925 DAIWA HOUSE INDUSTRY LTD Real Estate Equity 0,02 Japan JPY
NDSN NORDSON CORP Industrials Equity 0,02 United States USD
GEN GEN DIGITAL INC Information Technology Equity 0,02 United States USD
FPH FISHER AND PAYKEL HEALTHCARE CORPO Health Care Equity 0,02 New Zealand NZD
FOXA FOX CORP CLASS A Communication Equity 0,02 United States USD
SSNC SS AND C TECHNOLOGIES HOLDINGS INC Industrials Equity 0,02 United States USD
HEN3 HENKEL & KGAA PREF AG Consumer Staples Equity 0,02 Germany EUR
TRI THOMSON REUTERS CORP Industrials Equity 0,02 Canada CAD
EVN EVOLUTION MINING LTD Materials Equity 0,02 Australia AUD
8795 T&D HOLDINGS INC Financials Equity 0,02 Japan JPY
3407 ASAHI KASEI CORP Materials Equity 0,02 Japan JPY
9101 NIPPON YUSEN Industrials Equity 0,02 Japan JPY
EDP EDP ENERGIAS DE PORTUGAL SA Utilities Equity 0,02 Portugal EUR
TRU TRANSUNION Industrials Equity 0,02 United States USD
PTC PTC INC Information Technology Equity 0,02 United States USD
UPM UPM-KYMMENE Materials Equity 0,02 Finland EUR
8601 DAIWA SECURITIES GROUP INC Financials Equity 0,02 Japan JPY
ORG ORIGIN ENERGY LTD Utilities Equity 0,02 Australia AUD
HEI HEICO CORP Industrials Equity 0,02 United States USD
LYB LYONDELLBASELL INDUSTRIES CLASS A Materials Equity 0,02 United States USD
TRN TERNA RETE ELETTRICA NAZIONALE Utilities Equity 0,02 Italy EUR
GIB.A CGI INC CLASS A Information Technology Equity 0,02 Canada CAD
S63 SINGAPORE TECHNOLOGIES ENGINEERING Industrials Equity 0,02 Singapore SGD
TSCO TRACTOR SUPPLY Consumer Discretionary Equity 0,02 United States USD
MDLN MEDLINE INC CLASS A Health Care Equity 0,02 United States USD
NLY ANNALY CAPITAL MANAGEMENT REIT INC Financials Equity 0,02 United States USD
KNIN KUEHNE UND NAGEL INTERNATIONAL AG Industrials Equity 0,02 Switzerland CHF
PNFP PINNACLE FINANCIAL PARTNERS INC Financials Equity 0,02 United States USD
RI PERNOD RICARD SA Consumer Staples Equity 0,02 France EUR
COO COOPER INC Health Care Equity 0,02 United States USD
CLNX CELLNEX TELECOM Communication Equity 0,02 Spain EUR
KRZ KERRY GROUP PLC Consumer Staples Equity 0,02 Ireland EUR
DSY DASSAULT SYSTEMES Information Technology Equity 0,02 France EUR
SPSN SWISS PRIME SITE AG Real Estate Equity 0,02 Switzerland CHF
6383 DAIFUKU LTD Industrials Equity 0,02 Japan JPY
TEAM ATLASSIAN CORP CLASS A Information Technology Equity 0,02 United States USD
LDOS LEIDOS HOLDINGS INC Industrials Equity 0,02 United States USD
""",
# Page 21
"""
AGN AEGON LTD Financials Equity 0,02 Netherlands EUR
SUI SUN COMMUNITIES REIT INC Real Estate Equity 0,02 United States USD
ASTS AST SPACEMOBILE INC CLASS A Communication Equity 0,02 United States USD
823 LINK REAL ESTATE INVESTMENT TRUST Real Estate Equity 0,02 Hong Kong HKD
SHL SIEMENS HEALTHINEERS AG Health Care Equity 0,02 Germany EUR
4507 SHIONOGI LTD Health Care Equity 0,02 Japan JPY
WCP WHITECAP RESOURCES INC Energy Equity 0,02 Canada CAD
CPU COMPUTERSHARE LTD Industrials Equity 0,02 Australia AUD
1812 KAJIMA CORP Industrials Equity 0,02 Japan JPY
LVS LAS VEGAS SANDS CORP Consumer Discretionary Equity 0,02 United States USD
9104 MITSUI OSK LINES LTD Industrials Equity 0,02 Japan JPY
IAG INSURANCE AUSTRALIA GROUP LTD Financials Equity 0,02 Australia AUD
5801 FURUKAWA ELECTRIC LTD Industrials Equity 0,02 Japan JPY
TRMB TRIMBLE INC Information Technology Equity 0,02 United States USD
ROL ROLLINS INC Industrials Equity 0,02 United States USD
9532 OSAKA GAS LTD Utilities Equity 0,02 Japan JPY
8697 JAPAN EXCHANGE GROUP INC Financials Equity 0,02 Japan JPY
RTO RENTOKIL INITIAL PLC Industrials Equity 0,02 United Kingdom GBP
S32 SOUTH32 LTD Materials Equity 0,02 Australia AUD
RCI.B ROGERS COMMUNICATIONS NON-VOTING I Communication Equity 0,02 Canada CAD
UU. UNITED UTILITIES GROUP PLC Utilities Equity 0,02 United Kingdom GBP
1113 CK ASSET HOLDINGS LTD Real Estate Equity 0,02 Hong Kong HKD
SGRO SEGRO REIT PLC Real Estate Equity 0,02 United Kingdom GBP
2502 ASAHI GROUP HOLDINGS LTD Consumer Staples Equity 0,01 Japan JPY
IREN IREN LTD Information Technology Equity 0,01 United States USD
6594 NIDEC CORP Industrials Equity 0,01 Japan JPY
TOST TOAST INC CLASS A Financials Equity 0,01 United States USD
SMCI SUPER MICRO COMPUTER INC Information Technology Equity 0,01 United States USD
AGS AGEAS SA Financials Equity 0,01 Belgium EUR
6 POWER ASSETS HOLDINGS LTD Utilities Equity 0,01 Hong Kong HKD
ECHO ECHOSTAR CORP CLASS A Communication Equity 0,01 United States USD
STMN STRAUMANN HOLDING AG Health Care Equity 0,01 Switzerland CHF
TLS TELSTRA GROUP LTD Communication Equity 0,01 Australia AUD
IOT SAMSARA INC CLASS A Information Technology Equity 0,01 United States USD
1801 TAISEI CORP Industrials Equity 0,01 Japan JPY
SRG SNAM Utilities Equity 0,01 Italy EUR
7453 RYOHIN KEIKAKU LTD Consumer Discretionary Equity 0,01 Japan JPY
LULU LULULEMON ATHLETICA INC Consumer Discretionary Equity 0,01 United States USD
NVMI NOVA LTD Information Technology Equity 0,01 Israel ILS
FNF FIDELITY NATIONAL FINANCIAL INC Financials Equity 0,01 United States USD
RPM RPM INTERNATIONAL INC Materials Equity 0,01 United States USD
MKC MCCORMICK & CO NON-VOTING INC Consumer Staples Equity 0,01 United States USD
ELE ENDESA SA Utilities Equity 0,01 Spain EUR
DAL DELTA AIR LINES INC Industrials Equity 0,01 United States USD
SN SHARKNINJA INC Consumer Discretionary Equity 0,01 United States USD
""",
# Page 22
"""
AVY AVERY DENNISON CORP Materials Equity 0,01 United States USD
SY1 SYMRISE AG Materials Equity 0,01 Germany EUR
TYL TYLER TECHNOLOGIES INC Information Technology Equity 0,01 United States USD
ENLT ENLIGHT RENEWABLE ENERGY LTD Utilities Equity 0,01 Israel ILS
APTV APTIV PLC Consumer Discretionary Equity 0,01 United States USD
H HYDRO ONE LTD Utilities Equity 0,01 Canada CAD
BNZL BUNZL Industrials Equity 0,01 United Kingdom GBP
TIT TELECOM ITALIA Communication Equity 0,01 Italy EUR
CNA CENTRICA PLC Utilities Equity 0,01 United Kingdom GBP
MONC MONCLER Consumer Discretionary Equity 0,01 Italy EUR
APA APA GROUP UNITS Utilities Equity 0,01 Australia AUD
5016 JX ADVANCED METALS CORP Materials Equity 0,01 Japan JPY
SMIN SMITHS GROUP PLC Industrials Equity 0,01 United Kingdom GBP
METSO METSO CORPORATION Industrials Equity 0,01 Finland EUR
DKS DICKS SPORTING INC Consumer Discretionary Equity 0,01 United States USD
RKT ROCKET COMPANIES INC CLASS A Financials Equity 0,01 United States USD
AGI ALAMOS GOLD INC CLASS A Materials Equity 0,01 Canada CAD
TIH TOROMONT INDUSTRIES LTD Industrials Equity 0,01 Canada CAD
PHOE PHOENIX FINANCIAL LTD Financials Equity 0,01 Israel ILS
4307 NOMURA RESEARCH INSTITUTE LTD Information Technology Equity 0,01 Japan JPY
CHKP CHECK POINT SOFTWARE TECHNOLOGIES Information Technology Equity 0,01 Israel USD
1928 SEKISUI HOUSE LTD Consumer Discretionary Equity 0,01 Japan JPY
RYA RYANAIR HOLDINGS PLC Industrials Equity 0,01 Ireland EUR
6988 NITTO DENKO CORP Materials Equity 0,01 Japan JPY
ASRNL ASR NEDERLAND NV Financials Equity 0,01 Netherlands EUR
9531 TOKYO GAS LTD Utilities Equity 0,01 Japan JPY
1802 OBAYASHI CORP Industrials Equity 0,01 Japan JPY
ORSTED ORSTED A/S Utilities Equity 0,01 Denmark DKK
7735 SCREEN HOLDINGS LTD Information Technology Equity 0,01 Japan JPY
CARL B CARLSBERG AS CL B Consumer Staples Equity 0,01 Denmark DKK
DSCT ISRAEL DISCOUNT BANK LTD Financials Equity 0,01 Israel ILS
GGG GRACO INC Industrials Equity 0,01 United States USD
BKT BANKINTER SA Financials Equity 0,01 Spain EUR
RO ROCHE HOLDING AG Health Care Equity 0,01 Switzerland CHF
NHY NORSK HYDRO Materials Equity 0,01 Norway NOK
CHTR CHARTER COMMUNICATIONS INC CLASS A Communication Equity 0,01 United States USD
7012 KAWASAKI HEAVY INDUSTRIES LTD Industrials Equity 0,01 Japan JPY
KRX KINGSPAN GROUP PLC Industrials Equity 0,01 Ireland EUR
WSO WATSCO INC Industrials Equity 0,01 United States USD
TFII TFI INTERNATIONAL INC Industrials Equity 0,01 Canada CAD
ADM ADMIRAL GROUP PLC Financials Equity 0,01 United Kingdom GBP
TEN TENARIS SA Energy Equity 0,01 Italy EUR
KOG KONGSBERG GRUPPEN Industrials Equity 0,01 Norway NOK
6504 FUJI ELECTRIC LTD Industrials Equity 0,01 Japan JPY
BN4 KEPPEL LTD Industrials Equity 0,01 Singapore SGD
""",
# Page 23
"""
CLX CLOROX Consumer Staples Equity 0,01 United States USD
9502 CHUBU ELECTRIC POWER INC Utilities Equity 0,01 Japan JPY
LISN CHOCOLADEFABRIKEN LINDT & SPRUENGL Consumer Staples Equity 0,01 Switzerland CHF
GALP GALP ENERGIA SGPS SA CLASS B Energy Equity 0,01 Portugal EUR
UNI UNIPOL ASSICURAZIONI SPA Financials Equity 0,01 Italy EUR
SOON SONOVA HOLDING AG Health Care Equity 0,01 Switzerland CHF
MAERSK B A P MOLLER MAERSK B Industrials Equity 0,01 Denmark DKK
ALLE ALLEGION PLC Industrials Equity 0,01 United States USD
SCHP SCHINDLER HOLDING PAR AG Industrials Equity 0,01 Switzerland CHF
MNG M&G PLC Financials Equity 0,01 United Kingdom GBP
SN. SMITH AND NEPHEW PLC Health Care Equity 0,01 United Kingdom GBP
PNDORA PANDORA Consumer Discretionary Equity 0,01 Denmark DKK
7733 OLYMPUS CORP Health Care Equity 0,01 Japan JPY
IAG IA FINANCIAL INC Financials Equity 0,01 Canada CAD
8473 SBI HOLDINGS INC Financials Equity 0,01 Japan JPY
PSON PEARSON PLC Consumer Discretionary Equity 0,01 United Kingdom GBP
EN BOUYGUES SA Industrials Equity 0,01 France EUR
CSGP COSTAR GROUP INC Real Estate Equity 0,01 United States USD
RIVN RIVIAN AUTOMOTIVE INC CLASS A Consumer Discretionary Equity 0,01 United States USD
G1A GEA GROUP AG Industrials Equity 0,01 Germany EUR
5713 SUMITOMO METAL MINING LTD Materials Equity 0,01 Japan JPY
GFL GFL ENVIRONMENTAL SUBORDINATE VOTI Industrials Equity 0,01 Canada CAD
STLAM STELLANTIS NV Consumer Discretionary Equity 0,01 Italy EUR
S68 SINGAPORE EXCHANGE LTD Financials Equity 0,01 Singapore SGD
SVT SEVERN TRENT PLC Utilities Equity 0,01 United Kingdom GBP
GLPI GAMING AND LEISURE PROPERTIES REIT Real Estate Equity 0,01 United States USD
ENX EURONEXT NV Financials Equity 0,01 France EUR
AKRBP AKER BP Energy Equity 0,01 Norway NOK
DPZ DOMINOS PIZZA INC Consumer Discretionary Equity 0,01 United States USD
PNR PENTAIR Industrials Equity 0,01 United States USD
7532 PAN PACIFIC INTERNATIONAL HOLDINGS Consumer Discretionary Equity 0,01 Japan JPY
TELIA TELIA COMPANY Communication Equity 0,01 Sweden SEK
CRCL CIRCLE INTERNET GROUP INC CLASS A Information Technology Equity 0,01 United States USD
BVI BUREAU VERITAS SA Industrials Equity 0,01 France EUR
TEL2 B TELE2 B Communication Equity 0,01 Sweden SEK
PODD INSULET CORP Health Care Equity 0,01 United States USD
FORTUM FORTUM Utilities Equity 0,01 Finland EUR
AKZA AKZO NOBEL NV Materials Equity 0,01 Netherlands EUR
MKS MARKS AND SPENCER GROUP PLC Consumer Staples Equity 0,01 United Kingdom GBP
5706 MITSUI KINZOKU LIMITED LTD Materials Equity 0,01 Japan JPY
7186 YOKOHAMA FINANCIAL GROUP INC Financials Equity 0,01 Japan JPY
IONQ IONQ INC Information Technology Equity 0,01 United States USD
TLC THE LOTTERY CORPORATION LTD Consumer Discretionary Equity 0,01 Australia AUD
ALA ALTAGAS LTD Utilities Equity 0,01 Canada CAD
ATRL ATKINSREALIS GROUP INC Industrials Equity 0,01 Canada CAD
""",
# Page 24
"""
CG CARLYLE GROUP INC Financials Equity 0,01 United States USD
TW TRADEWEB MARKETS INC CLASS A Financials Equity 0,01 United States USD
MAERSK A A P MOLLER MAERSK Industrials Equity 0,01 Denmark DKK
HM B HENNES & MAURITZ Consumer Discretionary Equity 0,01 Sweden SEK
J36 JARDINE MATHESON HOLDINGS LTD Industrials Equity 0,01 Hong Kong USD
GIL GILDAN ACTIVEWEAR INC Consumer Discretionary Equity 0,01 Canada CAD
FME FRESENIUS MEDICAL CARE AG Health Care Equity 0,01 Germany EUR
ITRK INTERTEK GROUP PLC Industrials Equity 0,01 United Kingdom GBP
EVO EVOLUTION Consumer Discretionary Equity 0,01 Sweden SEK
LISP CHOCOLADEFABRIKEN LINDT & SPRUENGL Consumer Staples Equity 0,01 Switzerland CHF
LYC LYNAS RARE EARTHS LTD Materials Equity 0,01 Australia AUD
SGE THE SAGE GROUP PLC Information Technology Equity 0,01 United Kingdom GBP
CA CARREFOUR SA Consumer Staples Equity 0,01 France EUR
BCP BANCO COMERCIAL PORTUGUES SA Financials Equity 0,01 Portugal EUR
BEAN BELIMO N AG Industrials Equity 0,01 Switzerland CHF
9766 KONAMI GROUP CORP Communication Equity 0,01 Japan JPY
4188 MITSUBISHI CHEMICAL GROUP CORP Materials Equity 0,01 Japan JPY
9042 HANKYU HANSHIN HOLDINGS INC Industrials Equity 0,01 Japan JPY
ERF EUROFINS SCIENTIFIC Health Care Equity 0,01 France EUR
NWSA NEWS CORP CLASS A Communication Equity 0,01 United States USD
FGR EIFFAGE SA Industrials Equity 0,01 France EUR
CICT CAPITALAND INTEGRATED COMMERCIAL T Real Estate Equity 0,01 Singapore SGD
6479 MINEBEA MITSUMI INC Industrials Equity 0,01 Japan JPY
MOWI MOWI Consumer Staples Equity 0,01 Norway NOK
RXL REXEL SA Industrials Equity 0,01 France EUR
UAL UNITED AIRLINES HOLDINGS INC Industrials Equity 0,01 United States USD
OMV OMV AG Energy Equity 0,01 Austria EUR
KEY KEYERA CORP Energy Equity 0,01 Canada CAD
3402 TORAY INDUSTRIES INC Materials Equity 0,01 Japan JPY
CAD CAD CASH Cash and/or Derivatives Cash 0,01 Canada CAD
CNH CNH INDUSTRIAL N.V. NV Industrials Equity 0,01 United States USD
MZTF MIZRAHI TEFAHOT BANK LTD Financials Equity 0,01 Israel ILS
HEIO HEINEKEN HOLDING NV Consumer Staples Equity 0,01 Netherlands EUR
YAR YARA INTERNATIONAL Materials Equity 0,01 Norway NOK
TIGO MILLICOM INTERNATIONAL CELLULAR SA Communication Equity 0,01 Sweden USD
X TMX GROUP LTD Financials Equity 0,01 Canada CAD
QIA QIAGEN NV Health Care Equity 0,01 Germany EUR
SIG SIGMA HEALTHCARE LTD Health Care Equity 0,01 Australia AUD
PLS PLS GROUP LTD Materials Equity 0,01 Australia AUD
GRAB GRAB HOLDINGS LTD CLASS A Industrials Equity 0,01 Singapore USD
EDV ENDEAVOUR MINING Materials Equity 0,01 United Kingdom GBP
SKF B SKF B Industrials Equity 0,01 Sweden SEK
KGF KINGFISHER PLC Consumer Discretionary Equity 0,01 United Kingdom GBP
TREL B TRELLEBORG B Industrials Equity 0,01 Sweden SEK
TEL TELENOR Communication Equity 0,01 Norway NOK
""",
# Page 25
"""
LI KLEPIERRE REIT SA Real Estate Equity 0,01 France EUR
MICC MAGNUM ICE CREAM NV Consumer Staples Equity 0,01 Netherlands EUR
H HYATT HOTELS CORP CLASS A Consumer Discretionary Equity 0,01 United States USD
EMSN EMS-CHEMIE HOLDING AG Materials Equity 0,01 Switzerland CHF
ADDT B ADDTECH CLASS B Industrials Equity 0,01 Sweden SEK
LIFCO B LIFCO CLASS B Industrials Equity 0,01 Sweden SEK
NTGY NATURGY ENERGY GROUP SA Utilities Equity 0,01 Spain EUR
7911 TOPPAN HOLDINGS INC Industrials Equity 0,01 Japan JPY
MPL MEDIBANK PRIVATE LTD Financials Equity 0,01 Australia AUD
4684 OBIC LTD Information Technology Equity 0,01 Japan JPY
AC ACCOR SA Consumer Discretionary Equity 0,01 France EUR
66 MTR CORPORATION CORP LTD Industrials Equity 0,01 Hong Kong HKD
4523 EISAI LTD Health Care Equity 0,01 Japan JPY
C6L SINGAPORE AIRLINES LTD Industrials Equity 0,01 Singapore SGD
SOBI SWEDISH ORPHAN BIOVITRUM Health Care Equity 0,01 Sweden SEK
4911 SHISEIDO LTD Consumer Staples Equity 0,01 Japan JPY
BEI BEIERSDORF AG Consumer Staples Equity 0,01 Germany EUR
BNR BRENNTAG Industrials Equity 0,01 Germany EUR
3 HONG KONG AND CHINA GAS LTD Utilities Equity 0,01 Hong Kong HKD
ABF ASSOCIATED BRITISH FOODS PLC Consumer Staples Equity 0,01 United Kingdom GBP
EXO EXOR NV Financials Equity 0,01 Netherlands EUR
RBI RAIFFEISEN BANK INTERNATIONAL AG Financials Equity 0,01 Austria EUR
8331 CHIBA BANK LTD Financials Equity 0,01 Japan JPY
HOT HOCHTIEF AG Industrials Equity 0,01 Germany EUR
HEN HENKEL AG Consumer Staples Equity 0,01 Germany EUR
MRO MELROSE INDUSTRIES PLC Industrials Equity 0,01 United Kingdom GBP
CCL.B CCL INDUSTRIES INC CLASS B Materials Equity 0,01 Canada CAD
EFN ELEMENT FLEET MANAGEMENT CORP Industrials Equity 0,01 Canada CAD
SKA B SKANSKA B Industrials Equity 0,01 Sweden SEK
SGH SGH LTD Industrials Equity 0,01 Australia AUD
7270 SUBARU CORP Consumer Discretionary Equity 0,01 Japan JPY
IFT INFRATIL LTD Financials Equity 0,01 New Zealand NZD
TRYG TRYG Financials Equity 0,01 Denmark DKK
8593 MITSUBISHI HC CAPITAL INC Financials Equity 0,01 Japan JPY
9697 CAPCOM LTD Communication Equity 0,01 Japan JPY
KBX KNORR BREMSE AG Industrials Equity 0,01 Germany EUR
AUD AUD CASH Cash and/or Derivatives Cash 0,01 Australia AUD
ORNBV ORION CLASS B Health Care Equity 0,01 Finland EUR
CON CONTINENTAL AG Consumer Discretionary Equity 0,01 Germany EUR
GBLB GROUPE BRUXELLES LAMBERT NV Financials Equity 0,01 Belgium EUR
SHL SONIC HEALTHCARE LTD Health Care Equity 0,01 Australia AUD
CRBG COREBRIDGE FINANCIAL INC Financials Equity 0,01 United States USD
5019 IDEMITSU KOSAN LTD Energy Equity 0,01 Japan JPY
2801 KIKKOMAN CORP Consumer Staples Equity 0,01 Japan JPY
ELI ELIA GROUP SA Utilities Equity 0,01 Belgium EUR
""",
# Page 26
"""
7912 DAI NIPPON PRINTING LTD Industrials Equity 0,01 Japan JPY
LHA DEUTSCHE LUFTHANSA AG Industrials Equity 0,01 Germany EUR
TLX TALANX AG Financials Equity 0,01 Germany EUR
1803 SHIMIZU CORP Industrials Equity 0,01 Japan JPY
COLO B COLOPLAST B Health Care Equity 0,01 Denmark DKK
8113 UNICHARM CORP Consumer Staples Equity 0,01 Japan JPY
FRES FRESNILLO PLC Materials Equity 0,01 United Kingdom GBP
XRO XERO LTD Information Technology Equity 0,01 Australia AUD
288 WH GROUP LTD Consumer Staples Equity 0,01 Hong Kong HKD
GET GETLINK Industrials Equity 0,01 France EUR
FOX FOX CORP CLASS B Communication Equity 0,01 United States USD
IAG INTERNATIONAL AIRLINES GROUP SA Industrials Equity 0,01 Spain EUR
9021 WEST JAPAN RAILWAY Industrials Equity 0,01 Japan JPY
WISE WISE PLC CLASS A Financials Equity 0,01 United Kingdom GBP
4755 RAKUTEN GROUP INC Consumer Discretionary Equity 0,01 Japan JPY
SOL WASHINGTON H SOUL PATTINSON & COMP Financials Equity 0,01 Australia AUD
INDU A INDUSTRIVARDEN A Financials Equity 0,01 Sweden SEK
STN STANTEC INC Industrials Equity 0,01 Canada CAD
ZAL ZALANDO Consumer Discretionary Equity 0,01 Germany EUR
BS6 YANGZIJIANG SHIPBUILDING (HOLDINGS Industrials Equity 0,01 Singapore SGD
REA REA GROUP LTD Communication Equity 0,01 Australia AUD
CTC.A CANADIAN TIRE LTD CLASS A Consumer Discretionary Equity 0,01 Canada CAD
7272 YAMAHA MOTOR LTD Consumer Discretionary Equity 0,01 Japan JPY
H78 HONGKONG LAND HOLDINGS LTD Real Estate Equity 0,01 Hong Kong USD
SBRY SAINSBURY(J) PLC Consumer Staples Equity 0,01 United Kingdom GBP
PME PRO MEDICUS LTD Health Care Equity 0,01 Australia AUD
SECU B SECURITAS B Industrials Equity 0,01 Sweden SEK
INDU C INDUSTRIVARDEN SERIES Financials Equity 0,01 Sweden SEK
EQX EQUINOX GOLD CORP Materials Equity 0,01 Canada CAD
7202 ISUZU MOTORS LTD Consumer Discretionary Equity 0,01 Japan JPY
IG ITALGAS Utilities Equity 0,01 Italy EUR
7309 SHIMANO INC Consumer Discretionary Equity 0,01 Japan JPY
BCE BCE INC Communication Equity 0,01 Canada CAD
ORK ORKLA Consumer Staples Equity 0,01 Norway NOK
4689 LY CORP Communication Equity 0,01 Japan JPY
EPI B EPIROC CLASS B Industrials Equity 0,01 Sweden SEK
CLAR CAPITALAND ASCENDAS REIT Real Estate Equity 0,01 Singapore SGD
SYENS SYENSQO NV Materials Equity 0,01 Belgium EUR
ANA ACCIONA SA Utilities Equity 0,01 Spain EUR
4151 KYOWA KIRIN LTD Health Care Equity 0,01 Japan JPY
6823 HKT TRUST AND HKT UNITS LTD Communication Equity 0,01 Hong Kong HKD
8951 NIPPON BUILDING FUND REIT INC Real Estate Equity 0,01 Japan JPY
FUTU FUTU HOLDINGS ADR LTD Financials Equity 0,01 Hong Kong USD
DHER DELIVERY HERO Consumer Discretionary Equity 0,01 Germany EUR
HKD HKD CASH Cash and/or Derivatives Cash 0,01 Hong Kong HKD
""",
# Page 27
"""
ASX ASX LTD Financials Equity 0,01 Australia AUD
9843 NITORI HOLDINGS LTD Consumer Discretionary Equity 0,01 Japan JPY
SDLF STANDARD LIFE PLC Financials Equity 0,01 United Kingdom GBP
INDT INDUTRADE Industrials Equity 0,01 Sweden SEK
CAR CAR GROUP LTD Communication Equity 0,01 Australia AUD
AM DASSAULT AVIATION SA Industrials Equity 0,01 France EUR
9107 KAWASAKI KISEN LTD Industrials Equity 0,01 Japan JPY
DSG DESCARTES SYSTEMS GROUP INC Information Technology Equity 0,01 Canada CAD
4612 NIPPON PAINT HOLDINGS LTD Materials Equity 0,01 Japan JPY
27 GALAXY ENTERTAINMENT GROUP LTD Consumer Discretionary Equity 0,01 Hong Kong HKD
7259 AISIN CORP Consumer Discretionary Equity 0,01 Japan JPY
5411 JFE HOLDINGS INC Materials Equity 0,01 Japan JPY
SGP STOCKLAND STAPLED UNITS LTD Real Estate Equity 0,01 Australia AUD
5201 AGC INC Industrials Equity 0,01 Japan JPY
3659 NEXON LTD Communication Equity 0,01 Japan JPY
LUG LUNDIN GOLD INC Materials Equity 0,01 Canada CAD
12 HENDERSON LAND DEVELOPMENT LTD Real Estate Equity 0,01 Hong Kong HKD
SCA B SVENSKA CELLULOSA B Materials Equity 0,01 Sweden SEK
CAE CAE INC Industrials Equity 0,01 Canada CAD
FSV FIRSTSERVICE SUBORDINATE VOTING CO Real Estate Equity 0,01 Canada CAD
IPN IPSEN SA Health Care Equity 0,01 France EUR
8136 SANRIO LTD Consumer Discretionary Equity 0,01 Japan JPY
LAND LAND SECURITIES GROUP REIT PLC Real Estate Equity 0,01 United Kingdom GBP
GJF GJENSIDIGE FORSIKRING Financials Equity 0,01 Norway NOK
ERIE ERIE INDEMNITY CLASS A Financials Equity 0,01 United States USD
SW SODEXO SA Consumer Discretionary Equity 0,01 France EUR
SAP SAPUTO INC Consumer Staples Equity 0,01 Canada CAD
ALO ALSTOM SA Industrials Equity 0,01 France EUR
AIA AUCKLAND INTERNATIONAL AIRPORT LTD Industrials Equity 0,01 New Zealand NZD
VCX VICINITY CENTRES Real Estate Equity 0,01 Australia AUD
SRT3 SARTORIUS PREF AG Health Care Equity 0,01 Germany EUR
KESKOB KESKO CLASS B Consumer Staples Equity 0,01 Finland EUR
UHR THE SWATCH GROUP AG Consumer Discretionary Equity 0,01 Switzerland CHF
BMED BANCA MEDIOLANUM Financials Equity 0,01 Italy EUR
RNO RENAULT SA Consumer Discretionary Equity 0,01 France EUR
SPX SPIRAX GROUP PLC Industrials Equity 0,01 United Kingdom GBP
COH COCHLEAR LTD Health Care Equity 0,01 Australia AUD
AVOL AVOLTA AG Consumer Discretionary Equity 0,01 Switzerland CHF
AMUN AMUNDI SA Financials Equity 0,01 France EUR
7201 NISSAN MOTOR LTD Consumer Discretionary Equity 0,01 Japan JPY
HAG HENSOLDT AG Industrials Equity 0,01 Germany EUR
F34 WILMAR INTERNATIONAL LTD Consumer Staples Equity 0,01 Singapore SGD
REC RECORDATI INDUSTRIA CHIMICA E FARM Health Care Equity 0,01 Italy EUR
WTC WISETECH GLOBAL LTD Information Technology Equity 0,01 Australia AUD
IGM IGM FINANCIAL INC Financials Equity 0,01 Canada CAD
""",
# Page 28
"""
JMT JERONIMO MARTINS SA Consumer Staples Equity 0,01 Portugal EUR
P911 DR ING HC F PORSCHE PRF AG Consumer Discretionary Equity 0,01 Germany EUR
CU CANADIAN UTILITIES LTD CLASS A Utilities Equity 0,01 Canada CAD
BARN BARRY CALLEBAUT AG Consumer Staples Equity 0,01 Switzerland CHF
SCHN SCHINDLER HOLDING AG Industrials Equity 0,01 Switzerland CHF
VER VERBUND AG Utilities Equity 0,01 Austria EUR
PAH3 PORSCHE AUTOMOBIL HOLDING PREF Consumer Discretionary Equity 0,01 Germany EUR
6586 MAKITA CORP Industrials Equity 0,01 Japan JPY
1878 DAITO TRUST CONSTRUCTION LTD Real Estate Equity 0,01 Japan JPY
STERV STORA ENSO CLASS R Materials Equity 0,01 Finland EUR
G24 SCOUT24 N Communication Equity 0,01 Germany EUR
QAN QANTAS AIRWAYS LTD Industrials Equity 0,01 Australia AUD
ELISA ELISA Communication Equity 0,01 Finland EUR
EVK EVONIK INDUSTRIES AG Materials Equity 0,01 Germany EUR
6841 YOKOGAWA ELECTRIC CORP Information Technology Equity 0,01 Japan JPY
EMP.A EMPIRE LTD CLASS A Consumer Staples Equity 0,01 Canada CAD
83 SINO LAND LTD Real Estate Equity 0,01 Hong Kong HKD
SDR SCHRODERS PLC Financials Equity 0,01 United Kingdom GBP
9CI CAPITALAND INVESTMENT LTD Real Estate Equity 0,01 Singapore SGD
NEM NEMETSCHEK Information Technology Equity 0,01 Germany EUR
TUB FINANCIERE DE TUBIZE SA Health Care Equity 0,01 Belgium EUR
MAP MAPFRE SA Financials Equity 0,01 Spain EUR
DIM SARTORIUS STEDIM BIOTECH SA Health Care Equity 0,01 France EUR
AYV AYVENS SA Industrials Equity 0,01 France EUR
3003 HULIC LTD Real Estate Equity 0,01 Japan JPY
4091 NIPPON SANSO HOLDINGS CORP Materials Equity 0,01 Japan JPY
NIBE B NIBE INDUSTRIER CLASS B Industrials Equity 0,01 Sweden SEK
BEIJ B BEIJER REF CLASS B Industrials Equity 0,01 Sweden SEK
AZRG AZRIELI GROUP LTD Real Estate Equity 0,01 Israel ILS
VAR VAR ENERGI Energy Equity 0,01 Norway NOK
IDR INDRA SISTEMAS SA Information Technology Equity 0,01 Spain EUR
9024 SEIBU HOLDINGS INC Industrials Equity 0,00 Japan JPY
DIE DIETEREN (D) SA Consumer Discretionary Equity 0,00 Belgium EUR
EDPR EDP RENEWABLES SA Utilities Equity 0,00 Portugal EUR
9602 TOHO (TOKYO) LTD Communication Equity 0,00 Japan JPY
IVN IVANHOE MINES LTD CLASS A Materials Equity 0,00 Canada CAD
LUND B LUNDBERGFORETAGEN CLASS B Financials Equity 0,00 Sweden SEK
DEMANT DEMANT Health Care Equity 0,00 Denmark DKK
CEN CONTACT ENERGY LTD Utilities Equity 0,00 New Zealand NZD
1038 CHEUNG KONG INFRASTRUCTURE HOLDING Utilities Equity 0,00 Hong Kong HKD
AAF AIRTEL AFRICA PLC Communication Equity 0,00 United Kingdom GBP
T TELUS Communication Equity 0,00 Canada CAD
EVD CTS EVENTIM AG Communication Equity 0,00 Germany EUR
SOF SOFINA SA Financials Equity 0,00 Belgium EUR
BCVN BC VAUD N Financials Equity 0,00 Switzerland CHF
""",
# Page 29
"""
SAGA B SAGAX CLASS B Real Estate Equity 0,00 Sweden SEK
1997 WHARF REAL ESTATE INVESTMENT COMPA Real Estate Equity 0,00 Hong Kong HKD
9435 HIKARI TSUSHIN INC Industrials Equity 0,00 Japan JPY
7181 JAPAN POST INSURANCE LTD Financials Equity 0,00 Japan JPY
U96 SEMBCORP INDUSTRIES LTD Utilities Equity 0,00 Singapore SGD
BZU BUZZI Materials Equity 0,00 Italy EUR
BOL BOLLORE Energy Equity 0,00 France EUR
COV COVIVIO SA Real Estate Equity 0,00 France EUR
ICL ICL GROUP LTD Materials Equity 0,00 Israel ILS
INPST INPOST SA Industrials Equity 0,00 Netherlands EUR
1928 SANDS CHINA LTD Consumer Discretionary Equity 0,00 Hong Kong HKD
OCTV SDB OCTAVE INTELLIGENCE SDR PLC Information Technology Equity 0,00 Sweden SEK
CVC CVC CAPITAL PARTNERS PLC Financials Equity 0,00 Netherlands EUR
CPR DAVIDE CAMPARI MILANO NV Consumer Staples Equity 0,00 Italy EUR
CSG CSG CLASS A NV Industrials Equity 0,00 Netherlands EUR
MEL MERIDIAN ENERGY LTD Utilities Equity 0,00 New Zealand NZD
7550 ZENSHO HOLDINGS LTD Consumer Discretionary Equity 0,00 Japan JPY
GFC GECINA SA Real Estate Equity 0,00 France EUR
DKK DKK CASH Cash and/or Derivatives Cash 0,00 Denmark DKK
BEPC BROOKFIELD RENEWABLE SUBORDINATE V Utilities Equity 0,00 Canada CAD
LOTB LOTUS BAKERIES NV Consumer Staples Equity 0,00 Belgium EUR
RAA RATIONAL AG Industrials Equity 0,00 Germany EUR
BKW BKW N AG Utilities Equity 0,00 Switzerland CHF
IBE.D IBERDROLA S A RIGHTS SA Utilities Equity 0,00 Spain EUR
BIM BIOMERIEUX SA Health Care Equity 0,00 France EUR
LATO B LATOUR INVESTMENT CLASS B Industrials Equity 0,00 Sweden SEK
SALM SALMAR Consumer Staples Equity 0,00 Norway NOK
1308 SITC INTERNATIONAL HOLDINGS LTD Industrials Equity 0,00 Hong Kong HKD
ADP AEROPORTS DE PARIS SA Industrials Equity 0,00 France EUR
4768 OTSUKA CORP Information Technology Equity 0,00 Japan JPY
19 SWIRE PACIFIC LTD A Industrials Equity 0,00 Hong Kong HKD
BALD B FASTIGHETS BALDER CLASS B Real Estate Equity 0,00 Sweden SEK
ROCK B ROCKWOOL CLASS B Industrials Equity 0,00 Denmark DKK
2587 SUNTORY BEVERAGE & FOOD LTD Consumer Staples Equity 0,00 Japan JPY
-- CYBERARK SOFTWARE CONTRA Information Technology Equity 0,00 Israel USD
9202 ANA HOLDINGS INC Industrials Equity 0,00 Japan JPY
NOK NOK CASH Cash and/or Derivatives Cash 0,00 Norway NOK
RED REDEIA CORPORACION SA Utilities Equity 0,00 Spain EUR
NZD NZD CASH Cash and/or Derivatives Cash 0,00 New Zealand NZD
ILS ILS CASH Cash and/or Derivatives Cash 0,00 Israel ILS
CHF CHF CASH Cash and/or Derivatives Cash 0,00 Switzerland CHF
SGD SGD CASH Cash and/or Derivatives Cash 0,00 Singapore SGD
2665236D ACS ACTIVIDADES DE CONSTRUCCION Y Industrials Equity 0,00 Spain EUR
SEK SEK CASH Cash and/or Derivatives Cash 0,00 Sweden SEK
ETD_JPY ETD JPY BALANCE WITH 06738C Cash and/or Derivatives Cash 0,00 Japan JPY
""",
# Page 30
"""
HOLX HOLOGIC INC Health Care Equity 0,00 United States USD
JPY JPY/USD Cash and/or Derivatives FX 0,00 United States USD
GBP GBP/USD Cash and/or Derivatives FX 0,00 United States USD
CHF CHF/USD Cash and/or Derivatives FX 0,00 United States USD
CHF CHF/USD Cash and/or Derivatives FX 0,00 United States USD
SEK SEK/USD Cash and/or Derivatives FX 0,00 United States USD
EUR EUR/USD Cash and/or Derivatives FX 0,00 United States USD
SEK SEK/USD Cash and/or Derivatives FX 0,00 United States USD
EUR EUR/USD Cash and/or Derivatives FX 0,00 United States USD
NZD NZD/USD Cash and/or Derivatives FX 0,00 United States USD
NZD NZD/USD Cash and/or Derivatives FX 0,00 United States USD
DKK DKK/USD Cash and/or Derivatives FX 0,00 United States USD
SGD SGD/USD Cash and/or Derivatives FX 0,00 United States USD
HKD HKD/USD Cash and/or Derivatives FX 0,00 United States USD
DKK DKK/USD Cash and/or Derivatives FX 0,00 United States USD
SGD SGD/USD Cash and/or Derivatives FX 0,00 United States USD
HKD HKD/USD Cash and/or Derivatives FX 0,00 United States USD
ILS ILS/USD Cash and/or Derivatives FX 0,00 United States USD
ILS ILS/USD Cash and/or Derivatives FX 0,00 United States USD
NOK NOK/USD Cash and/or Derivatives FX 0,00 United States USD
AUD AUD/USD Cash and/or Derivatives FX 0,00 United States USD
NOK NOK/USD Cash and/or Derivatives FX 0,00 United States USD
AUD AUD/USD Cash and/or Derivatives FX 0,00 United States USD
2299955D CONSTELLATION SOFTWARE INC Information Technology Equity 0,00 Canada CAD
TPU6 TOPIX INDEX SEP 26 Cash and/or Derivatives Futures 0,00 -- JPY
VGU6 EURO STOXX 50 SEP 26 Cash and/or Derivatives Futures 0,00 European Union EUR
Z U6 FTSE 100 INDEX SEP 26 Cash and/or Derivatives Futures 0,00 -- GBP
ESU6 S&P500 EMINI SEP 26 Cash and/or Derivatives Futures 0,00 -- USD
JPY JPY/USD Cash and/or Derivatives FX 0,00 United States USD
GBP GBP/USD Cash and/or Derivatives FX 0,00 United States USD
JPY JPY/USD Cash and/or Derivatives FX 0,00 United States USD
JPY JPY/USD Cash and/or Derivatives FX 0,00 United States USD
JPY JPY CASH Cash and/or Derivatives Cash 0,00 Japan JPY
"""
]

known_sectors = [
    "Information Technology",
    "Health Care",
    "Consumer Discretionary",
    "Communication",
    "Financials",
    "Industrials",
    "Consumer Staples",
    "Energy",
    "Materials",
    "Utilities",
    "Real Estate",
    "Cash and/or Derivatives",
    "Cash"
]

known_asset_classes = [
    "Equity",
    "Cash",
    "Money Market",
    "Futures",
    "FX",
    "Cash Collateral and Margins"
]

known_currencies = ["USD", "EUR", "GBP", "JPY", "CAD", "CHF", "DKK", "SEK", "AUD", "HKD", "SGD", "ILS", "NOK", "NZD"]

parsed_holdings = []

for page_idx, page in enumerate(raw_ocr_pages):
    lines = page.strip().split('\n')
    for line in lines:
        line = line.strip()
        if not line or line.startswith("Issuer Ticker"):
            continue
        
        # Format usually:
        # SYMBOL NAME SECTOR ASSET_CLASS WEIGHT LOCATION CURRENCY
        # e.g., AAPL APPLE INC Information Technology Equity 5,37 United States USD
        # e.g., BZFUT CASH COLLATERAL USD BZFUT Cash and/or Derivatives Cash Collateral and Margins 0,02 United States USD
        
        # Match weight (\d+,\d+)
        weight_match = re.search(r'\b(\d+,\d+)\b', line)
        if not weight_match:
            continue
        
        weight_str = weight_match.group(1).replace(',', '.')
        try:
            weight = float(weight_str)
        except ValueError:
            continue
        
        weight_pos = weight_match.start()
        before_weight = line[:weight_pos].strip()
        after_weight = line[weight_pos + len(weight_match.group(1)):].strip()
        
        # Parse currency from end
        parts_after = after_weight.split()
        if not parts_after:
            continue
        currency = parts_after[-1]
        location = " ".join(parts_after[:-1]) if len(parts_after) > 1 else "Unknown"
        
        # Parse before weight
        # SYMBOL NAME SECTOR ASSET_CLASS
        # Let's find asset class from end of before_weight
        matched_ac = None
        for ac in sorted(known_asset_classes, key=lambda x: len(x), reverse=True):
            if before_weight.endswith(ac):
                matched_ac = ac
                before_weight = before_weight[:-len(ac)].strip()
                break
        if not matched_ac:
            matched_ac = "Equity"
            
        matched_sec = None
        for sec in sorted(known_sectors, key=lambda x: len(x), reverse=True):
            if before_weight.endswith(sec):
                matched_sec = sec
                before_weight = before_weight[:-len(sec)].strip()
                break
        if not matched_sec:
            matched_sec = "Other"
            
        # Remaining is "SYMBOL NAME"
        parts_sym = before_weight.split()
        if not parts_sym:
            continue
        symbol = parts_sym[0]
        name = " ".join(parts_sym[1:]) if len(parts_sym) > 1 else symbol
        
        parsed_holdings.append({
            "symbol": symbol,
            "name": name,
            "sector": matched_sec,
            "assetClass": matched_ac,
            "weight": weight,
            "location": location,
            "currency": currency
        })

print(f"Total parsed holdings: {len(parsed_holdings)}")

# Compute sector aggregates
sector_weights = {}
country_weights = {}

for h in parsed_holdings:
    # Standardize sector name if Communication -> Communication Services
    sec = h["sector"]
    if sec == "Communication":
        sec = "Communication Services"
    elif sec in ["Cash and/or Derivatives", "FX", "Futures"]:
        sec = "Cash & Derivatives"
        
    sector_weights[sec] = round(sector_weights.get(sec, 0) + h["weight"], 2)
    
    loc = h["location"]
    if loc in ["--", "Unknown", ""]:
        loc = "Other"
    country_weights[loc] = round(country_weights.get(loc, 0) + h["weight"], 2)

# Sort sectors descending
sorted_sectors = sorted([{"name": k, "weight": round(v, 2)} for k, v in sector_weights.items()], key=lambda x: x["weight"], reverse=True)

# Sort countries descending
sorted_countries = sorted([{"name": k, "weight": round(v, 2)} for k, v in country_weights.items()], key=lambda x: x["weight"], reverse=True)

print("\n--- SECTOR ALLOCATIONS ---")
for s in sorted_sectors:
    print(f"{s['name']}: {s['weight']}%")

print("\n--- COUNTRY ALLOCATIONS ---")
for c in sorted_countries:
    print(f"{c['name']}: {c['weight']}%")
