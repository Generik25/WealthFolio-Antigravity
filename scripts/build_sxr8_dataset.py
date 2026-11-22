import re
import json

raw_pages = [
    # Page 1
    """
NVDA NVIDIA CORP Information Technology Equity 7,93 United States USD
AAPL APPLE INC Information Technology Equity 7,41 United States USD
MSFT MICROSOFT CORP Information Technology Equity 4,44 United States USD
AMZN AMAZON.COM INC Consumer Discretionary Equity 3,59 United States USD
GOOGL ALPHABET INC CLASS A Communication Equity 2,92 United States USD
AVGO BROADCOM INC Information Technology Equity 2,91 United States USD
GOOG ALPHABET INC CLASS C Communication Equity 2,36 United States USD
META META PLATFORMS INC CLASS A Communication Equity 2,09 United States USD
MU MICRON TECHNOLOGY INC Information Technology Equity 1,75 United States USD
LLY ELI LILLY Health Care Equity 1,47 United States USD
JPM JPMORGAN CHASE & CO Financials Equity 1,47 United States USD
TSLA TESLA INC Consumer Discretionary Equity 1,41 United States USD
BRKB BERKSHIRE HATHAWAY INC CLASS B Financials Equity 1,41 United States USD
AMD ADVANCED MICRO DEVICES INC Information Technology Equity 1,38 United States USD
XOM EXXONMOBIL HOLDINGS CORP Energy Equity 1,02 United States USD
JNJ JOHNSON & JOHNSON Health Care Equity 0,98 United States USD
V VISA INC CLASS A Financials Equity 0,91 United States USD
WMT WALMART INC Consumer Staples Equity 0,74 United States USD
INTC INTEL CORPORATION Information Technology Equity 0,74 United States USD
ABBV ABBVIE INC Health Care Equity 0,71 United States USD
AMAT APPLIED MATERIAL INC Information Technology Equity 0,70 United States USD
CSCO CISCO SYSTEMS INC Information Technology Equity 0,70 United States USD
MA MASTERCARD INC CLASS A Financials Equity 0,67 United States USD
CAT CATERPILLAR INC Industrials Equity 0,65 United States USD
COST COSTCO WHOLESALE CORP Consumer Staples Equity 0,64 United States USD
LRCX LAM RESEARCH CORP Information Technology Equity 0,63 United States USD
BAC BANK OF AMERICA CORP Financials Equity 0,63 United States USD
UNH UNITEDHEALTH GROUP INC Health Care Equity 0,60 United States USD
CVX CHEVRON CORP Energy Equity 0,57 United States USD
GE GE AEROSPACE Industrials Equity 0,57 United States USD
PG PROCTER & GAMBLE Consumer Staples Equity 0,54 United States USD
HD HOME DEPOT INC Consumer Discretionary Equity 0,51 United States USD
MRK MERCK & CO INC Health Care Equity 0,51 United States USD
GS GOLDMAN SACHS GROUP INC Financials Equity 0,50 United States USD
KO COCA-COLA Consumer Staples Equity 0,49 United States USD
PM PHILIP MORRIS INTERNATIONAL INC Consumer Staples Equity 0,47 United States USD
NFLX NETFLIX INC Communication Equity 0,45 United States USD
""",
    # Page 2
    """
KLAC KLA CORP Information Technology Equity 0,45 United States USD
PLTR PALANTIR TECHNOLOGIES INC CLASS A Information Technology Equity 0,44 United States USD
RTX RTX CORP Industrials Equity 0,44 United States USD
GEV GE VERNOVA INC Industrials Equity 0,43 United States USD
PANW PALO ALTO NETWORKS INC Information Technology Equity 0,41 United States USD
WFC WELLS FARGO Financials Equity 0,41 United States USD
TXN TEXAS INSTRUMENT INC Information Technology Equity 0,41 United States USD
MS MORGAN STANLEY Financials Equity 0,40 United States USD
SNDK SANDISK CORP Information Technology Equity 0,37 United States USD
LIN LINDE PLC Materials Equity 0,37 United States USD
C CITIGROUP INC Financials Equity 0,35 United States USD
TMO THERMO FISHER SCIENTIFIC INC Health Care Equity 0,33 United States USD
STX SEAGATE TECHNOLOGY HOLDINGS PLC Information Technology Equity 0,32 United States USD
ORCL ORACLE CORP Information Technology Equity 0,32 United States USD
AMGN AMGEN INC Health Care Equity 0,31 United States USD
IBM INTERNATIONAL BUSINESS MACHINES CO Information Technology Equity 0,30 United States USD
APH AMPHENOL CORP CLASS A Information Technology Equity 0,30 United States USD
WDC WESTERN DIGITAL CORP Information Technology Equity 0,30 United States USD
NEE NEXTERA ENERGY INC Utilities Equity 0,29 United States USD
CRWD CROWDSTRIKE HOLDINGS INC CLASS A Information Technology Equity 0,29 United States USD
MCD MCDONALDS CORP Consumer Discretionary Equity 0,29 United States USD
ADI ANALOG DEVICES INC Information Technology Equity 0,29 United States USD
PEP PEPSICO INC Consumer Staples Equity 0,29 United States USD
MRVL MARVELL TECHNOLOGY INC Information Technology Equity 0,29 United States USD
VZ VERIZON COMMUNICATIONS INC Communication Equity 0,29 United States USD
ANET ARISTA NETWORKS INC Information Technology Equity 0,29 United States USD
AXP AMERICAN EXPRESS Financials Equity 0,28 United States USD
UNP UNION PACIFIC CORP Industrials Equity 0,28 United States USD
QCOM QUALCOMM INC Information Technology Equity 0,28 United States USD
ABT ABBOTT LABORATORIES Health Care Equity 0,28 United States USD
WELL WELLTOWER INC Real Estate Equity 0,27 United States USD
TJX TJX INC Consumer Discretionary Equity 0,27 United States USD
SCHW CHARLES SCHWAB CORP Financials Equity 0,26 United States USD
BA BOEING Industrials Equity 0,26 United States USD
GILD GILEAD SCIENCES INC Health Care Equity 0,26 United States USD
DIS WALT DISNEY Communication Equity 0,25 United States USD
ETN EATON PLC Industrials Equity 0,25 United States USD
T AT&T INC Communication Equity 0,25 United States USD
DE DEERE Industrials Equity 0,24 United States USD
BLK BLACKROCK INC Financials Equity 0,23 United States USD
COP CONOCOPHILLIPS Energy Equity 0,23 United States USD
PFE PFIZER INC Health Care Equity 0,22 United States USD
UBER UBER TECHNOLOGIES INC Industrials Equity 0,22 United States USD
CVS CVS HEALTH CORP Health Care Equity 0,21 United States USD
PLD PROLOGIS REIT INC Real Estate Equity 0,21 United States USD
""",
    # Page 3
    """
BKNG BOOKING HOLDINGS INC Consumer Discretionary Equity 0,21 United States USD
CRM SALESFORCE INC Information Technology Equity 0,20 United States USD
SPGI S&P GLOBAL INC Financials Equity 0,20 United States USD
CB CHUBB Financials Equity 0,20 United States USD
DELL DELL TECHNOLOGIES INC CLASS C Information Technology Equity 0,20 United States USD
BMY BRISTOL MYERS SQUIBB Health Care Equity 0,20 United States USD
COF CAPITAL ONE FINANCIAL CORP Financials Equity 0,20 United States USD
PH PARKER-HANNIFIN CORP Industrials Equity 0,19 United States USD
GLW CORNING INC Information Technology Equity 0,19 United States USD
DHR DANAHER CORP Health Care Equity 0,19 United States USD
PGR PROGRESSIVE CORP Financials Equity 0,19 United States USD
MO ALTRIA GROUP INC Consumer Staples Equity 0,19 United States USD
VRTX VERTEX PHARMACEUTICALS INC Health Care Equity 0,19 United States USD
ISRG INTUITIVE SURGICAL INC Health Care Equity 0,18 United States USD
SBUX STARBUCKS CORP Consumer Discretionary Equity 0,18 United States USD
VRT VERTIV HOLDINGS CLASS A Industrials Equity 0,18 United States USD
LMT LOCKHEED MARTIN CORP Industrials Equity 0,18 United States USD
HWM HOWMET AEROSPACE INC Industrials Equity 0,18 United States USD
LOW LOWES COMPANIES INC Consumer Discretionary Equity 0,18 United States USD
SYK STRYKER CORP Health Care Equity 0,17 United States USD
BNY BANK OF NEW YORK MELLON CORP Financials Equity 0,17 United States USD
SO SOUTHERN Utilities Equity 0,17 United States USD
APP APPLOVIN CORP CLASS A Information Technology Equity 0,17 United States USD
TT TRANE TECHNOLOGIES PLC Industrials Equity 0,17 United States USD
MDT MEDTRONIC PLC Health Care Equity 0,17 United States USD
EQIX EQUINIX REIT INC Real Estate Equity 0,16 United States USD
NEM NEWMONT Materials Equity 0,16 United States USD
DUK DUKE ENERGY CORP Utilities Equity 0,16 United States USD
PNC PNC FINANCIAL SERVICES GROUP INC Financials Equity 0,16 United States USD
MCK MCKESSON CORP Health Care Equity 0,16 United States USD
USB US BANCORP Financials Equity 0,15 United States USD
CSX CSX CORP Industrials Equity 0,15 United States USD
PWR QUANTA SERVICES INC Industrials Equity 0,15 United States USD
ADP AUTOMATIC DATA PROCESSING INC Industrials Equity 0,15 United States USD
GD GENERAL DYNAMICS CORP Industrials Equity 0,15 United States USD
NOW SERVICENOW INC Information Technology Equity 0,15 United States USD
FTNT FORTINET INC Information Technology Equity 0,15 United States USD
BX BLACKSTONE INC Financials Equity 0,15 United States USD
WMB WILLIAMS INC Energy Equity 0,14 United States USD
CME CME GROUP INC CLASS A Financials Equity 0,14 United States USD
CMI CUMMINS INC Industrials Equity 0,14 United States USD
FCX FREEPORT MCMORAN INC Materials Equity 0,14 United States USD
MPC MARATHON PETROLEUM CORP Energy Equity 0,14 United States USD
CDNS CADENCE DESIGN SYSTEMS INC Information Technology Equity 0,14 United States USD
VLO VALERO ENERGY CORP Energy Equity 0,14 United States USD
""",
    # Page 4
    """
MMM 3M Industrials Equity 0,14 United States USD
CEG CONSTELLATION ENERGY CORP Utilities Equity 0,14 United States USD
WM WASTE MANAGEMENT INC Industrials Equity 0,14 United States USD
JCI JOHNSON CONTROLS INTERNATIONAL PLC Industrials Equity 0,14 United States USD
ADBE ADOBE INC Information Technology Equity 0,13 United States USD
ACN ACCENTURE PLC CLASS A Information Technology Equity 0,13 United States USD
UPS UNITED PARCEL SERVICE INC CLASS B Industrials Equity 0,13 United States USD
MRSH MARSH INC Financials Equity 0,13 United States USD
PSX PHILLIPS 66 Energy Equity 0,13 United States USD
ELV ELEVANCE HEALTH INC Health Care Equity 0,13 United States USD
EMR EMERSON ELECTRIC Industrials Equity 0,13 United States USD
ICE INTERCONTINENTAL EXCHANGE INC Financials Equity 0,13 United States USD
DDOG DATADOG INC CLASS A Information Technology Equity 0,13 United States USD
HOOD ROBINHOOD MARKETS INC CLASS A Financials Equity 0,13 United States USD
TRV TRAVELERS COMPANIES INC Financials Equity 0,13 United States USD
MAR MARRIOTT INTERNATIONAL INC CLASS A Consumer Discretionary Equity 0,13 United States USD
TMUS T MOBILE US INC Communication Equity 0,12 United States USD
NSC NORFOLK SOUTHERN CORP Industrials Equity 0,12 United States USD
CMCSA COMCAST CORP CLASS A Communication Equity 0,12 United States USD
HON HONEYWELL INTERNATIONAL INC Industrials Equity 0,12 United States USD
INTU INTUIT INC Information Technology Equity 0,12 United States USD
EOG EOG RESOURCES INC Energy Equity 0,12 United States USD
MDLZ MONDELEZ INTERNATIONAL INC CLASS A Consumer Staples Equity 0,12 United States USD
AMT AMERICAN TOWER REIT CORP Real Estate Equity 0,12 United States USD
AON AON PLC CLASS A Financials Equity 0,12 United States USD
USD USD CASH Cash and/or Derivatives Cash 0,12 United States USD
CI CIGNA Health Care Equity 0,12 United States USD
ROST ROSS STORES INC Consumer Discretionary Equity 0,12 United States USD
AEP AMERICAN ELECTRIC POWER INC Utilities Equity 0,11 United States USD
SPG SIMON PROPERTY GROUP REIT INC Real Estate Equity 0,11 United States USD
HLT HILTON WORLDWIDE HOLDINGS INC Consumer Discretionary Equity 0,11 United States USD
GM GENERAL MOTORS Consumer Discretionary Equity 0,11 United States USD
ITW ILLINOIS TOOL INC Industrials Equity 0,11 United States USD
CL COLGATE-PALMOLIVE Consumer Staples Equity 0,11 United States USD
SNPS SYNOPSYS INC Information Technology Equity 0,11 United States USD
URI UNITED RENTALS INC Industrials Equity 0,11 United States USD
ORLY OREILLY AUTOMOTIVE INC Consumer Discretionary Equity 0,11 United States USD
SHW SHERWIN WILLIAMS Materials Equity 0,11 United States USD
NOC NORTHROP GRUMMAN CORP Industrials Equity 0,11 United States USD
MCO MOODYS CORP Financials Equity 0,11 United States USD
RCL ROYAL CARIBBEAN GROUP LTD Consumer Discretionary Equity 0,11 United States USD
SLB SLB NV Energy Equity 0,11 United States USD
NXPI NXP SEMICONDUCTORS NV Information Technology Equity 0,11 United States USD
FDX FEDEX CORP Industrials Equity 0,11 United States USD
CTAS CINTAS CORP Industrials Equity 0,11 United States USD
""",
    # Page 5
    """
PCAR PACCAR INC Industrials Equity 0,11 United States USD
MPWR MONOLITHIC POWER SYSTEMS INC Information Technology Equity 0,11 United States USD
TDG TRANSDIGM GROUP INC Industrials Equity 0,11 United States USD
MSI MOTOROLA SOLUTIONS INC Information Technology Equity 0,11 United States USD
MNST MONSTER BEVERAGE CORP Consumer Staples Equity 0,10 United States USD
ECL ECOLAB INC Materials Equity 0,10 United States USD
KKR KKR AND CO INC Financials Equity 0,10 United States USD
APD AIR PRODUCTS AND CHEMICALS INC Materials Equity 0,10 United States USD
ALL ALLSTATE CORP Financials Equity 0,10 United States USD
CRH CRH PUBLIC LIMITED PLC Materials Equity 0,10 United States USD
REGN REGENERON PHARMACEUTICALS INC Health Care Equity 0,10 United States USD
LITE LUMENTUM HOLDINGS INC Information Technology Equity 0,10 United States USD
BSX BOSTON SCIENTIFIC CORP Health Care Equity 0,10 United States USD
WBD WARNER BROS. DISCOVERY INC SERIES Communication Equity 0,10 United States USD
FIX COMFORT SYSTEMS USA INC Industrials Equity 0,10 United States USD
KMI KINDER MORGAN INC Energy Equity 0,10 United States USD
DASH DOORDASH INC CLASS A Consumer Discretionary Equity 0,10 United States USD
TFC TRUIST FINANCIAL CORP Financials Equity 0,10 United States USD
HPE HEWLETT PACKARD ENTERPRISE Information Technology Equity 0,10 United States USD
D DOMINION ENERGY INC Utilities Equity 0,10 United States USD
DLR DIGITAL REALTY TRUST REIT INC Real Estate Equity 0,10 United States USD
AJG ARTHUR J GALLAGHER Financials Equity 0,10 United States USD
HONA HONEYWELL AEROSPACE INC Industrials Equity 0,10 United States USD
COHR COHERENT CORP Information Technology Equity 0,10 United States USD
TRGP TARGA RESOURCES CORP Energy Equity 0,10 United States USD
SRE SEMPRA Utilities Equity 0,10 United States USD
TGT TARGET CORP Consumer Staples Equity 0,10 United States USD
O REALTY INCOME REIT CORP Real Estate Equity 0,09 United States USD
COR CENCORA INC Health Care Equity 0,09 United States USD
GWW WW GRAINGER INC Industrials Equity 0,09 United States USD
CTVA CORTEVA INC Materials Equity 0,09 United States USD
TER TERADYNE INC Information Technology Equity 0,09 United States USD
OKE ONEOK INC Energy Equity 0,09 United States USD
HCA HCA HEALTHCARE INC Health Care Equity 0,09 United States USD
TEL TE CONNECTIVITY PLC Information Technology Equity 0,09 United States USD
CIEN CIENA CORP Information Technology Equity 0,09 United States USD
ABNB AIRBNB INC CLASS A Consumer Discretionary Equity 0,09 United States USD
AFL AFLAC INC Financials Equity 0,09 United States USD
LHX L3HARRIS TECHNOLOGIES INC Industrials Equity 0,09 United States USD
KEYS KEYSIGHT TECHNOLOGIES INC Information Technology Equity 0,09 United States USD
BKR BAKER HUGHES CLASS A Energy Equity 0,09 United States USD
AME AMETEK INC Industrials Equity 0,09 United States USD
F FORD MOTOR CO Consumer Discretionary Equity 0,09 United States USD
NUE NUCOR CORP Materials Equity 0,09 United States USD
APO APOLLO GLOBAL MANAGEMENT INC Financials Equity 0,09 United States USD
""",
    # Page 6
    """
CARR CARRIER GLOBAL CORP Industrials Equity 0,08 United States USD
DAL DELTA AIR LINES INC Industrials Equity 0,08 United States USD
VST VISTRA CORP Utilities Equity 0,08 United States USD
ETR ENTERGY CORP Utilities Equity 0,08 United States USD
FAST FASTENAL Industrials Equity 0,08 United States USD
CAH CARDINAL HEALTH INC Health Care Equity 0,08 United States USD
PSA PUBLIC STORAGE REIT Real Estate Equity 0,08 United States USD
DVN DEVON ENERGY CORP Energy Equity 0,08 United States USD
FITB FIFTH THIRD BANCORP Financials Equity 0,08 United States USD
ROK ROCKWELL AUTOMATION INC Industrials Equity 0,08 United States USD
STT STATE STREET CORP Financials Equity 0,08 United States USD
XEL XCEL ENERGY INC Utilities Equity 0,08 United States USD
WAB WESTINGHOUSE AIR BRAKE TECHNOLOGIE Industrials Equity 0,08 United States USD
MET METLIFE INC Financials Equity 0,08 United States USD
PYPL PAYPAL HOLDINGS INC Financials Equity 0,08 United States USD
NKE NIKE INC CLASS B Consumer Discretionary Equity 0,08 United States USD
EBAY EBAY INC Consumer Discretionary Equity 0,08 United States USD
EXC EXELON CORP Utilities Equity 0,08 United States USD
AZO AUTOZONE INC Consumer Discretionary Equity 0,08 United States USD
EW EDWARDS LIFESCIENCES CORP Health Care Equity 0,08 United States USD
VTR VENTAS REIT INC Real Estate Equity 0,07 United States USD
HUM HUMANA INC Health Care Equity 0,07 United States USD
EA ELECTRONIC ARTS INC Communication Equity 0,07 United States USD
FLEX FLEX LTD Information Technology Equity 0,07 United States USD
AMP AMERIPRISE FINANCE INC Financials Equity 0,07 United States USD
MCHP MICROCHIP TECHNOLOGY INC Information Technology Equity 0,07 United States USD
RSG REPUBLIC SERVICES INC Industrials Equity 0,07 United States USD
ADSK AUTODESK INC Information Technology Equity 0,07 United States USD
CVNA CARVANA CLASS A Consumer Discretionary Equity 0,07 United States USD
IDXX IDEXX LABORATORIES INC Health Care Equity 0,07 United States USD
ODFL OLD DOMINION FREIGHT LINE INC Industrials Equity 0,07 United States USD
BDX BECTON DICKINSON Health Care Equity 0,07 United States USD
ED CONSOLIDATED EDISON INC Utilities Equity 0,07 United States USD
OXY OCCIDENTAL PETROLEUM CORP Energy Equity 0,07 United States USD
AIG AMERICAN INTERNATIONAL GROUP INC Financials Equity 0,07 United States USD
ADM ARCHER DANIELS MIDLAND Consumer Staples Equity 0,06 United States USD
CMG CHIPOTLE MEXICAN GRILL INC Consumer Discretionary Equity 0,06 United States USD
XYZ BLOCK INC CLASS A Financials Equity 0,06 United States USD
IBKR INTERACTIVE BROKERS GROUP INC CLAS Financials Equity 0,06 United States USD
PRU PRUDENTIAL FINANCIAL INC Financials Equity 0,06 United States USD
YUM YUM BRANDS INC Consumer Discretionary Equity 0,06 United States USD
KDP KEURIG DR PEPPER INC Consumer Staples Equity 0,06 United States USD
NDAQ NASDAQ INC Financials Equity 0,06 United States USD
MSCI MSCI INC Financials Equity 0,06 United States USD
TTWO TAKE TWO INTERACTIVE SOFTWARE INC Communication Equity 0,06 United States USD
""",
    # Page 7
    """
FANG DIAMONDBACK ENERGY INC Energy Equity 0,06 United States USD
PEG PUBLIC SERVICE ENTERPRISE GROUP IN Utilities Equity 0,06 United States USD
AXON AXON ENTERPRISE INC Industrials Equity 0,06 United States USD
CBRE CBRE GROUP INC CLASS A Real Estate Equity 0,06 United States USD
A AGILENT TECHNOLOGIES INC Health Care Equity 0,06 United States USD
GRMN GARMIN LTD Consumer Discretionary Equity 0,06 United States USD
SYY SYSCO CORP Consumer Staples Equity 0,06 United States USD
HIG HARTFORD INSURANCE GROUP INC Financials Equity 0,06 United States USD
PCG PG&E CORP Utilities Equity 0,06 United States USD
DHI D R HORTON INC Consumer Discretionary Equity 0,06 United States USD
WAT WATERS CORP Health Care Equity 0,06 United States USD
WEC WEC ENERGY GROUP INC Utilities Equity 0,06 United States USD
UAL UNITED AIRLINES HOLDINGS INC Industrials Equity 0,06 United States USD
IRM IRON MOUNTAIN INC Real Estate Equity 0,06 United States USD
KVUE KENVUE INC Consumer Staples Equity 0,06 United States USD
MTB M&T BANK Financials Equity 0,06 United States USD
COIN COINBASE GLOBAL INC CLASS A Financials Equity 0,06 United States USD
ROP ROPER TECHNOLOGIES INC Information Technology Equity 0,06 United States USD
KMB KIMBERLY CLARK CORP Consumer Staples Equity 0,06 United States USD
VMC VULCAN MATERIALS Materials Equity 0,06 United States USD
PAYX PAYCHEX INC Industrials Equity 0,06 United States USD
ON ON SEMICONDUCTOR CORP Information Technology Equity 0,06 United States USD
HBAN HUNTINGTON BANCSHARES INC Financials Equity 0,06 United States USD
ACGL ARCH CAPITAL GROUP LTD Financials Equity 0,05 United States USD
IQV IQVIA HOLDINGS INC Health Care Equity 0,05 United States USD
EME EMCOR GROUP INC Industrials Equity 0,05 United States USD
JBL JABIL INC Information Technology Equity 0,05 United States USD
EQT EQT CORP Energy Equity 0,05 United States USD
MLM MARTIN MARIETTA MATERIALS INC Materials Equity 0,05 United States USD
NTRS NORTHERN TRUST CORP Financials Equity 0,05 United States USD
STLD STEEL DYNAMICS INC Materials Equity 0,05 United States USD
CCL CARNIVAL CORP LTD Consumer Discretionary Equity 0,05 United States USD
NTAP NETAPP INC Information Technology Equity 0,05 United States USD
CCI CROWN CASTLE INC Real Estate Equity 0,05 United States USD
CASY CASEYS GENERAL STORES INC Consumer Staples Equity 0,05 United States USD
KR KROGER Consumer Staples Equity 0,05 United States USD
AEE AMEREN CORP Utilities Equity 0,05 United States USD
ZTS ZOETIS INC CLASS A Health Care Equity 0,05 United States USD
DTE DTE ENERGY Utilities Equity 0,05 United States USD
EXR EXTRA SPACE STORAGE REIT INC Real Estate Equity 0,05 United States USD
EIX EDISON INTERNATIONAL Utilities Equity 0,05 United States USD
CFG CITIZENS FINANCIAL GROUP INC Financials Equity 0,05 United States USD
TDY TELEDYNE TECHNOLOGIES INC Information Technology Equity 0,05 United States USD
NRG NRG ENERGY INC Utilities Equity 0,05 United States USD
IR INGERSOLL RAND INC Industrials Equity 0,05 United States USD
""",
    # Page 8
    """
CNC CENTENE CORP Health Care Equity 0,05 United States USD
BIIB BIOGEN INC Health Care Equity 0,05 United States USD
CBOE CBOE GLOBAL MARKETS INC Financials Equity 0,05 United States USD
EXPE EXPEDIA GROUP INC Consumer Discretionary Equity 0,05 United States USD
ATO ATMOS ENERGY CORP Utilities Equity 0,05 United States USD
Q QNITY ELECTRONICS INC Information Technology Equity 0,05 United States USD
CNP CENTERPOINT ENERGY INC Utilities Equity 0,05 United States USD
RJF RAYMOND JAMES INC Financials Equity 0,05 United States USD
VICI VICI PPTYS INC Real Estate Equity 0,05 United States USD
GEHC GE HEALTHCARE TECHNOLOGIES INC Health Care Equity 0,04 United States USD
TPR TAPESTRY INC Consumer Discretionary Equity 0,04 United States USD
ES EVERSOURCE ENERGY Utilities Equity 0,04 United States USD
FICO FAIR ISAAC CORP Information Technology Equity 0,04 United States USD
RMD RESMED INC Health Care Equity 0,04 United States USD
CINF CINCINNATI FINANCIAL CORP Financials Equity 0,04 United States USD
XYL XYLEM INC Industrials Equity 0,04 United States USD
LYV LIVE NATION ENTERTAINMENT INC Communication Equity 0,04 United States USD
WTW WILLIS TOWERS WATSON PLC Financials Equity 0,04 United States USD
HAL HALLIBURTON Energy Equity 0,04 United States USD
PPL PPL CORP Utilities Equity 0,04 United States USD
DXCM DEXCOM INC Health Care Equity 0,04 United States USD
OTIS OTIS WORLDWIDE CORP Industrials Equity 0,04 United States USD
VEEV VEEVA SYSTEMS INC CLASS A Health Care Equity 0,04 United States USD
MTD METTLER TOLEDO INC Health Care Equity 0,04 United States USD
DOV DOVER CORP Industrials Equity 0,04 United States USD
FISV FISERV INC Financials Equity 0,04 United States USD
AVB AVALONBAY COMMUNITIES REIT INC Real Estate Equity 0,04 United States USD
AWK AMERICAN WATER WORKS INC Utilities Equity 0,04 United States USD
RF REGIONS FINANCIAL CORP Financials Equity 0,04 United States USD
WDAY WORKDAY INC CLASS A Information Technology Equity 0,04 United States USD
HUBB HUBBELL INC Industrials Equity 0,04 United States USD
FE FIRSTENERGY CORP Utilities Equity 0,04 United States USD
WSM WILLIAMS SONOMA INC Consumer Discretionary Equity 0,04 United States USD
ARES ARES MANAGEMENT CORP CLASS A Financials Equity 0,04 United States USD
DG DOLLAR GENERAL CORP Consumer Staples Equity 0,04 United States USD
HSY HERSHEY FOODS Consumer Staples Equity 0,04 United States USD
PPG PPG INDUSTRIES INC Materials Equity 0,04 United States USD
VRSK VERISK ANALYTICS INC Industrials Equity 0,04 United States USD
WST WEST PHARMACEUTICAL SERVICES INC Health Care Equity 0,04 United States USD
DGX QUEST DIAGNOSTICS INC Health Care Equity 0,04 United States USD
TPL TEXAS PACIFIC LAND CORP Energy Equity 0,04 United States USD
TROW T ROWE PRICE GROUP INC Financials Equity 0,04 United States USD
CHRW CH ROBINSON WORLDWIDE INC Industrials Equity 0,04 United States USD
SYF SYNCHRONY FINANCIAL Financials Equity 0,04 United States USD
CPRT COPART INC Industrials Equity 0,04 United States USD
""",
    # Page 9
    """
CPAY CORPAY INC Financials Equity 0,04 United States USD
LH LABCORP HOLDINGS INC Health Care Equity 0,04 United States USD
PHM PULTEGROUP INC Consumer Discretionary Equity 0,04 United States USD
EQR EQUITY RESIDENTIAL REIT Real Estate Equity 0,04 United States USD
EXPD EXPEDITORS INTERNATIONAL OF WASHIN Industrials Equity 0,04 United States USD
SW SMURFIT WESTROCK PLC Materials Equity 0,04 United States USD
CHD CHURCH AND DWIGHT INC Consumer Staples Equity 0,04 United States USD
CMS CMS ENERGY CORP Utilities Equity 0,04 United States USD
VLTO VERALTO CORP Industrials Equity 0,04 United States USD
HPQ HP INC Information Technology Equity 0,04 United States USD
NI NISOURCE INC Utilities Equity 0,04 United States USD
DRI DARDEN RESTAURANTS INC Consumer Discretionary Equity 0,04 United States USD
DOW DOW INC Materials Equity 0,03 United States USD
OMC OMNICOM GROUP INC Communication Equity 0,03 United States USD
FSLR FIRST SOLAR INC Information Technology Equity 0,03 United States USD
LUV SOUTHWEST AIRLINES Industrials Equity 0,03 United States USD
FFIV F5 INC Information Technology Equity 0,03 United States USD
EXE EXPAND ENERGY CORP Energy Equity 0,03 United States USD
JBHT JB HUNT TRANSPORT SERVICES INC Industrials Equity 0,03 United States USD
KHC KRAFT HEINZ Consumer Staples Equity 0,03 United States USD
WRB WR BERKLEY CORP Financials Equity 0,03 United States USD
VRSN VERISIGN INC Information Technology Equity 0,03 United States USD
DLTR DOLLAR TREE INC Consumer Staples Equity 0,03 United States USD
PFG PRINCIPAL FINANCIAL GROUP INC Financials Equity 0,03 United States USD
KEY KEYCORP Financials Equity 0,03 United States USD
STE STERIS Health Care Equity 0,03 United States USD
ULTA ULTA BEAUTY INC Consumer Discretionary Equity 0,03 United States USD
FIS FIDELITY NATIONAL INFORMATION SERV Financials Equity 0,03 United States USD
PKG PACKAGING CORP OF AMERICA Materials Equity 0,03 United States USD
CTSH COGNIZANT TECHNOLOGY SOLUTIONS COR Information Technology Equity 0,03 United States USD
SNA SNAP ON INC Industrials Equity 0,03 United States USD
VTRS VIATRIS INC Health Care Equity 0,03 United States USD
MRNA MODERNA INC Health Care Equity 0,03 United States USD
IP INTERNATIONAL PAPER Materials Equity 0,03 United States USD
EVRG EVERGY INC Utilities Equity 0,03 United States USD
EFX EQUIFAX INC Industrials Equity 0,03 United States USD
L LOEWS CORP Financials Equity 0,03 United States USD
EL ESTEE LAUDER INC CLASS A Consumer Staples Equity 0,03 United States USD
AMCR AMCOR PLC Materials Equity 0,03 United States USD
CF CF INDUSTRIES HOLDINGS INC Materials Equity 0,03 United States USD
BRO BROWN & BROWN INC Financials Equity 0,03 United States USD
INCY INCYTE CORP Health Care Equity 0,03 United States USD
LNT ALLIANT ENERGY CORP Utilities Equity 0,03 United States USD
GIS GENERAL MILLS INC Consumer Staples Equity 0,03 United States USD
ESS ESSEX PROPERTY TRUST REIT INC Real Estate Equity 0,03 United States USD
""",
    # Page 10
    """
IFF INTERNATIONAL FLAVORS & FRAGRANCES Materials Equity 0,03 United States USD
DD DUPONT DE NEMOURS INC Materials Equity 0,03 United States USD
SBAC SBA COMMUNICATIONS REIT CORP CLASS Real Estate Equity 0,03 United States USD
FTV FORTIVE CORP Industrials Equity 0,03 United States USD
GPN GLOBAL PAYMENTS INC Financials Equity 0,03 United States USD
STZ CONSTELLATION BRANDS INC CLASS A Consumer Staples Equity 0,03 United States USD
LEN LENNAR A CORP CLASS A Consumer Discretionary Equity 0,03 United States USD
SMCI SUPER MICRO COMPUTER INC Information Technology Equity 0,03 United States USD
KIM KIMCO REALTY REIT CORP Real Estate Equity 0,03 United States USD
ZBH ZIMMER BIOMET HOLDINGS INC Health Care Equity 0,03 United States USD
MXN MXN CASH Cash and/or Derivatives Cash 0,03 Mexico MXN
WY WEYERHAEUSER REIT Real Estate Equity 0,03 United States USD
LII LENNOX INTERNATIONAL INC Industrials Equity 0,03 United States USD
AKAM AKAMAI TECHNOLOGIES INC Information Technology Equity 0,03 United States USD
FDXF FEDEX FREIGHT HOLDING COMPANY INC Industrials Equity 0,03 United States USD
GPC GENUINE PARTS Consumer Discretionary Equity 0,03 United States USD
BALL BALL CORP Materials Equity 0,03 United States USD
CDW CDW CORP Information Technology Equity 0,03 United States USD
BR BROADRIDGE FINANCIAL SOLUTIONS INC Industrials Equity 0,03 United States USD
BG BUNGE GLOBAL SA Consumer Staples Equity 0,03 United States USD
IEX IDEX CORP Industrials Equity 0,03 United States USD
NVR NVR INC Consumer Discretionary Equity 0,03 United States USD
BBY BEST BUY INC Consumer Discretionary Equity 0,03 United States USD
TXT TEXTRON INC Industrials Equity 0,03 United States USD
TSN TYSON FOODS INC CLASS A Consumer Staples Equity 0,03 United States USD
INVH INVITATION HOMES INC Real Estate Equity 0,03 United States USD
LYB LYONDELLBASELL INDUSTRIES CLASS A Materials Equity 0,03 United States USD
TSCO TRACTOR SUPPLY Consumer Discretionary Equity 0,02 United States USD
MAS MASCO CORP Industrials Equity 0,02 United States USD
NDSN NORDSON CORP Industrials Equity 0,02 United States USD
MAA MID AMERICA APARTMENT COMMUNITIES Real Estate Equity 0,02 United States USD
J JACOBS SOLUTIONS INC Industrials Equity 0,02 United States USD
HST HOST HOTELS & RESORTS REIT INC Real Estate Equity 0,02 United States USD
DOC HEALTHPEAK PROPERTIES INC Real Estate Equity 0,02 United States USD
EG EVEREST GROUP LTD Financials Equity 0,02 United States USD
RL RALPH LAUREN CORP CLASS A Consumer Discretionary Equity 0,02 United States USD
ALB ALBEMARLE CORP Materials Equity 0,02 United States USD
LDOS LEIDOS HOLDINGS INC Industrials Equity 0,02 United States USD
GEN GEN DIGITAL INC Information Technology Equity 0,02 United States USD
LVS LAS VEGAS SANDS CORP Consumer Discretionary Equity 0,02 United States USD
DECK DECKERS OUTDOOR CORP Consumer Discretionary Equity 0,02 United States USD
COO COOPER INC Health Care Equity 0,02 United States USD
AIZ ASSURANT INC Financials Equity 0,02 United States USD
REG REGENCY CENTERS REIT CORP Real Estate Equity 0,02 United States USD
SWK STANLEY BLACK & DECKER INC Industrials Equity 0,02 United States USD
""",
    # Page 11
    """
ALLE ALLEGION PLC Industrials Equity 0,02 United States USD
GL GLOBE LIFE INC Financials Equity 0,02 United States USD
IVZ INVESCO LTD Financials Equity 0,02 United States USD
PTC PTC INC Information Technology Equity 0,02 United States USD
APA APA CORP Energy Equity 0,02 United States USD
RVTY REVVITY INC Health Care Equity 0,02 United States USD
PNW PINNACLE WEST CORP Utilities Equity 0,02 United States USD
MKC MCCORMICK & CO NON-VOTING INC Consumer Staples Equity 0,02 United States USD
ECHO ECHOSTAR CORP CLASS A Communication Equity 0,02 United States USD
GNRC GENERAC HOLDINGS INC Industrials Equity 0,02 United States USD
SJM JM SMUCKER Consumer Staples Equity 0,02 United States USD
ZBRA ZEBRA TECHNOLOGIES CORP CLASS A Information Technology Equity 0,02 United States USD
TYL TYLER TECHNOLOGIES INC Information Technology Equity 0,02 United States USD
APTV APTIV PLC Consumer Discretionary Equity 0,02 United States USD
UDR UDR REIT INC Real Estate Equity 0,02 United States USD
AVY AVERY DENNISON CORP Materials Equity 0,02 United States USD
TRMB TRIMBLE INC Information Technology Equity 0,02 United States USD
HAS HASBRO INC Consumer Discretionary Equity 0,02 United States USD
ROL ROLLINS INC Industrials Equity 0,02 United States USD
LULU LULULEMON ATHLETICA INC Consumer Discretionary Equity 0,02 United States USD
GDDY GODADDY INC CLASS A Information Technology Equity 0,02 United States USD
SOLV SOLVENTUM CORP Health Care Equity 0,02 United States USD
TECH BIO TECHNE CORP Health Care Equity 0,02 United States USD
CPT CAMDEN PROPERTY TRUST REIT Real Estate Equity 0,02 United States USD
CLX CLOROX Consumer Staples Equity 0,02 United States USD
TKO TKO GROUP HOLDINGS INC CLASS A Communication Equity 0,02 United States USD
ALGN ALIGN TECHNOLOGY INC Health Care Equity 0,02 United States USD
HII HUNTINGTON INGALLS INDUSTRIES INC Industrials Equity 0,02 United States USD
BAX BAXTER INTERNATIONAL INC Health Care Equity 0,02 United States USD
PODD INSULET CORP Health Care Equity 0,02 United States USD
CSGP COSTAR GROUP INC Real Estate Equity 0,02 United States USD
FOXA FOX CORP CLASS A Communication Equity 0,02 United States USD
CRL CHARLES RIVER LABORATORIES INTERNA Health Care Equity 0,02 United States USD
JKHY JACK HENRY AND ASSOCIATES INC Financials Equity 0,02 United States USD
CHTR CHARTER COMMUNICATIONS INC CLASS A Communication Equity 0,02 United States USD
AES AES CORP Utilities Equity 0,02 United States USD
PNR PENTAIR Industrials Equity 0,02 United States USD
BXP BXP INC Real Estate Equity 0,02 United States USD
BEN FRANKLIN RESOURCES INC Financials Equity 0,02 United States USD
DPZ DOMINOS PIZZA INC Consumer Discretionary Equity 0,02 United States USD
NWSA NEWS CORP CLASS A Communication Equity 0,02 United States USD
FRT FEDERAL REALTY INVESTMENT TRUST RE Real Estate Equity 0,02 United States USD
SWKS SKYWORKS SOLUTIONS INC Information Technology Equity 0,01 United States USD
IT GARTNER INC Information Technology Equity 0,01 United States USD
FDS FACTSET RESEARCH SYSTEMS INC Financials Equity 0,01 United States USD
""",
    # Page 12
    """
MGM MGM RESORTS INTERNATIONAL Consumer Discretionary Equity 0,01 United States USD
NCLH NORWEGIAN CRUISE LINE HOLDINGS LTD Consumer Discretionary Equity 0,01 United States USD
WYNN WYNN RESORTS LTD Consumer Discretionary Equity 0,01 United States USD
HSIC HENRY SCHEIN INC Health Care Equity 0,01 United States USD
UHS UNIVERSAL HEALTH SERVICES INC CLAS Health Care Equity 0,01 United States USD
ARE ALEXANDRIA REAL ESTATE EQUITIES RE Real Estate Equity 0,01 United States USD
BLDR BUILDERS FIRSTSOURCE INC Industrials Equity 0,01 United States USD
DVA DAVITA INC Health Care Equity 0,01 United States USD
HRL HORMEL FOODS CORP Consumer Staples Equity 0,01 United States USD
TTD TRADE DESK INC CLASS A Communication Equity 0,01 United States USD
MOS MOSAIC Materials Equity 0,01 United States USD
FOX FOX CORP CLASS B Communication Equity 0,01 United States USD
AOS A O SMITH CORP Industrials Equity 0,01 United States USD
MLIFT CASH COLLATERAL USD MLIFT Cash and/or Derivatives Cash Collateral and Margins 0,01 United States USD
TAP MOLSON COORS BREWING CLASS B Consumer Staples Equity 0,01 United States USD
ERIE ERIE INDEMNITY CLASS A Financials Equity 0,01 United States USD
BFB BROWN FORMAN CORP CLASS B Consumer Staples Equity 0,01 United States USD
NWS NEWS CORP CLASS B Communication Equity 0,01 United States USD
PSKY PARAMOUNT SKYDANCE CORP CLASS B Communication Equity 0,00 United States USD
GBP GBP CASH Cash and/or Derivatives Cash 0,00 United Kingdom GBP
EUR EUR CASH Cash and/or Derivatives Cash 0,00 European Union EUR
HOLX HOLOGIC INC Health Care Equity 0,00 United States USD
USD USD/MXN Cash and/or Derivatives FX 0,00 Mexico MXN
ESU6 S&P500 EMINI SEP 26 Cash and/or Derivatives Futures 0,00 -- USD
"""
]

SECTORS = [
    "Information Technology", "Financials", "Consumer Discretionary", "Communication",
    "Industrials", "Materials", "Energy", "Consumer Staples", "Health Care", "Utilities",
    "Real Estate", "Cash and/or Derivatives"
]

pattern = re.compile(
    r'^([A-Z0-9\.\*\&\-\_]+)\s+(.+?)\s+(' + '|'.join([re.escape(s) for s in SECTORS]) + r')\s+(Equity|Cash|Cash Collateral and Margins|Futures|FX)\s+([\d\.\,\-]+)\s+(.+?)\s+([A-Z]{3})$'
)

holdings = []
seen = set()

for page in raw_pages:
    for line in page.strip().split('\n'):
        line = line.strip()
        if not line:
            continue
        m = pattern.match(line)
        if m:
            ticker, name, sector, asset_class, weight_str, country, currency = m.groups()
            w = float(weight_str.replace(',', '.'))
            key = f"{ticker}_{name}"
            if key in seen:
                continue
            seen.add(key)
            
            sector_clean = sector
            if sector == 'Communication':
                sector_clean = 'Communication Services'
            elif sector == 'Health Care':
                sector_clean = 'Healthcare'
                
            holdings.append({
                "symbol": ticker,
                "name": name,
                "sector": sector_clean,
                "assetClass": asset_class,
                "weight": round(w, 4),
                "location": country,
                "currency": currency
            })

print(f"Total parsed CSPX/SXR8 holdings: {len(holdings)}")

sector_allocations = [
  {"name": "Information Technology", "weight": 37.98},
  {"name": "Financials", "weight": 11.74},
  {"name": "Communication Services", "weight": 9.67},
  {"name": "Consumer Discretionary", "weight": 9.30},
  {"name": "Industrials", "weight": 8.92},
  {"name": "Healthcare", "weight": 8.88},
  {"name": "Consumer Staples", "weight": 4.56},
  {"name": "Energy", "weight": 2.98},
  {"name": "Utilities", "weight": 2.19},
  {"name": "Real Estate", "weight": 1.83},
  {"name": "Materials / Other", "weight": 1.95}
]

country_allocations = [
  {"name": "United States", "weight": 99.85},
  {"name": "Other / Cash", "weight": 0.15}
]

ts_content = f"""// Complete holdings dataset for iShares Core S&P 500 UCITS ETF USD (Acc) (SXR8.DE / CSPX / CSP1 / ISIN: IE00B5BMR087)
// Official BlackRock / iShares reporting data with full weightings, sectors, asset classes and geographic locations ({len(holdings)} holdings).

import {{ ETFHolding }} from './meudHoldings';

export type {{ ETFHolding }};

export const SXR8_SECTOR_ALLOCATIONS = {json.dumps(sector_allocations, indent=2)};

export const SXR8_COUNTRY_ALLOCATIONS = {json.dumps(country_allocations, indent=2)};

export const SXR8_FULL_HOLDINGS: ETFHolding[] = {json.dumps(holdings, indent=2)};
"""

with open("src/data/sxr8Holdings.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Successfully created src/data/sxr8Holdings.ts!")
