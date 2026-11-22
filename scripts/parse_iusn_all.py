import re
import json

raw_ocr_pages = [
# Page 1
"""
SNDK SANDISK CORP Information Technology Equity 2,18 United States USD
CRS CARPENTER TECHNOLOGY CORP Industrials Equity 0,27 United States USD
ATI ATI INC Industrials Equity 0,25 United States USD
NVT NVENT ELECTRIC PLC Industrials Equity 0,24 United States USD
WWD WOODWARD INC Industrials Equity 0,23 United States USD
USD USD CASH Cash and/or Derivatives Cash 0,22 United States USD
MKSI MKS Information Technology Equity 0,21 United States USD
USFD US FOODS HOLDING CORP Consumer Staples Equity 0,20 United States USD
STRL STERLING INFRASTRUCTURE INC Industrials Equity 0,20 United States USD
VTRS VIATRIS INC Health Care Equity 0,18 United States USD
MRNA MODERNA INC Health Care Equity 0,18 United States USD
ROKU ROKU INC CLASS A Communication Equity 0,18 United States USD
MTSI MACOM TECHNOLOGY SOLUTIONS INC Information Technology Equity 0,18 United States USD
LSCC LATTICE SEMICONDUCTOR CORP Information Technology Equity 0,17 United States USD
GH GUARDANT HEALTH INC Health Care Equity 0,17 United States USD
SNX TD SYNNEX CORP Information Technology Equity 0,17 United States USD
EWBC EAST WEST BANCORP INC Financials Equity 0,16 United States USD
ITT ITT INC Industrials Equity 0,16 United States USD
AKAM AKAMAI TECHNOLOGIES INC Information Technology Equity 0,16 United States USD
THC TENET HEALTHCARE CORP Health Care Equity 0,16 United States USD
OVV OVINTIV INC Energy Equity 0,16 United States USD
RGLD ROYAL GOLD INC Materials Equity 0,16 United States USD
PFGC PERFORMANCE FOOD GROUP Consumer Staples Equity 0,16 United States USD
RBC RBC BEARINGS INC Industrials Equity 0,16 United States USD
HST HOST HOTELS & RESORTS REIT INC Real Estate Equity 0,16 United States USD
ROIV ROIVANT SCIENCES LTD Health Care Equity 0,15 United States USD
BWXT BWX TECHNOLOGIES INC Industrials Equity 0,15 United States USD
WCC WESCO INTERNATIONAL INC Industrials Equity 0,15 United States USD
PR PERMIAN RESOURCES CORP CLASS A Energy Equity 0,15 United States USD
CLH CLEAN HARBORS INC Industrials Equity 0,15 United States USD
TLN TALEN ENERGY CORP Utilities Equity 0,15 United States USD
NXT NEXTPOWER INC CLASS A Industrials Equity 0,14 United States USD
JLL JONES LANG LASALLE INC Real Estate Equity 0,14 United States USD
OHI OMEGA HEALTHCARE INVESTORS REIT IN Real Estate Equity 0,14 United States USD
RGA REINSURANCE GROUP OF AMERICA INC Financials Equity 0,14 United States USD
DOC HEALTHPEAK PROPERTIES INC Real Estate Equity 0,14 United States USD
ARMK ARAMARK Consumer Discretionary Equity 0,14 United States USD
""",
# Page 2
"""
TTMI TTM TECHNOLOGIES INC Information Technology Equity 0,14 United States USD
ONTO ONTO INNOVATION INC Information Technology Equity 0,14 United States USD
DTM DT MIDSTREAM INC Energy Equity 0,14 United States USD
RL RALPH LAUREN CORP CLASS A Consumer Discretionary Equity 0,13 United States USD
JAZZ JAZZ PHARMACEUTICALS PLC Health Care Equity 0,13 United States USD
MEDP MEDPACE HOLDINGS INC Health Care Equity 0,13 United States USD
TOL TOLL BROTHERS INC Consumer Discretionary Equity 0,13 United States USD
GL GLOBE LIFE INC Financials Equity 0,13 United States USD
ALB ALBEMARLE CORP Materials Equity 0,13 United States USD
ICSUAGD BLK ICS USD LIQ AGENCY DIS Cash and/or Derivatives Money Market 0,13 Ireland USD
APG API GROUP CORP Industrials Equity 0,13 United States USD
RNR RENAISSANCERE HOLDING LTD Financials Equity 0,13 United States USD
AIZ ASSURANT INC Financials Equity 0,13 United States USD
LECO LINCOLN ELECTRIC HOLDINGS INC Industrials Equity 0,13 United States USD
SGI SOMNIGROUP INTERNATIONAL INC Consumer Discretionary Equity 0,13 United States USD
LAMR LAMAR ADVERTISING COMPANY CLAS Real Estate Equity 0,13 United States USD
NTNX NUTANIX INC CLASS A Information Technology Equity 0,13 United States USD
DINO HF SINCLAIR CORP Energy Equity 0,13 United States USD
MLI MUELLER INDUSTRIES INC Industrials Equity 0,13 United States USD
SWK STANLEY BLACK & DECKER INC Industrials Equity 0,13 United States USD
RRX REGAL REXNORD CORP Industrials Equity 0,12 United States USD
BWA BORGWARNER INC Consumer Discretionary Equity 0,12 United States USD
DPLM DIPLOMA PLC Industrials Equity 0,12 United Kingdom GBP
EXEL EXELIXIS INC Health Care Equity 0,12 United States USD
CCK CROWN HOLDINGS INC Materials Equity 0,12 United States USD
DY DYCOM INDUSTRIES INC Industrials Equity 0,12 United States USD
RVTY REVVITY INC Health Care Equity 0,12 United States USD
SITM SITIME CORP Information Technology Equity 0,12 United States USD
EVR EVERCORE INC CLASS A Financials Equity 0,12 United States USD
APA APA CORP Energy Equity 0,12 United States USD
QXO QXO INC Industrials Equity 0,12 United States USD
SMTC SEMTECH CORP Information Technology Equity 0,12 United States USD
UNM UNUM Financials Equity 0,12 United States USD
WBS WEBSTER FINANCIAL CORP Financials Equity 0,12 United States USD
AIT APPLIED INDUSTRIAL TECHNOLOGIES IN Industrials Equity 0,12 United States USD
EQH EQUITABLE HOLDINGS INC Financials Equity 0,12 United States USD
FHN FIRST HORIZON CORP Financials Equity 0,12 United States USD
TXRH TEXAS ROADHOUSE INC Consumer Discretionary Equity 0,12 United States USD
ZBRA ZEBRA TECHNOLOGIES CORP CLASS A Information Technology Equity 0,12 United States USD
MOD MODINE MANUFACTURING Industrials Equity 0,12 United States USD
SJM JM SMUCKER Consumer Staples Equity 0,12 United States USD
BBIO BRIDGEBIO PHARMA INC Health Care Equity 0,12 United States USD
GNRC GENERAC HOLDINGS INC Industrials Equity 0,12 United States USD
PNW PINNACLE WEST CORP Utilities Equity 0,11 United States USD
TKO TKO GROUP HOLDINGS INC CLASS A Communication Equity 0,11 United States USD
""",
# Page 3
"""
6525 KOKUSAI ELECTRIC CORP Information Technology Equity 0,11 Japan JPY
AEIS ADVANCED ENERGY INDUSTRIES INC Information Technology Equity 0,11 United States USD
SF STIFEL FINANCIAL CORP Financials Equity 0,11 United States USD
ALLY ALLY FINANCIAL INC Financials Equity 0,11 United States USD
AA ALCOA CORP Materials Equity 0,11 United States USD
ELAN ELANCO ANIMAL HEALTH INC Health Care Equity 0,11 United States USD
MOGA MOOG INC CLASS A Industrials Equity 0,11 United States USD
KNX KNIGHT-SWIFT TRANSPORTATION HOLDIN Industrials Equity 0,11 United States USD
HUT HUT CORP Information Technology Equity 0,11 United States USD
EGP EASTGROUP PROPERTIES REIT INC Real Estate Equity 0,11 United States USD
ELS EQUITY LIFESTYLE PROPERTIES REIT I Real Estate Equity 0,11 United States USD
BJ BJS WHOLESALE CLUB HOLDINGS INC Consumer Staples Equity 0,11 United States USD
ALGN ALIGN TECHNOLOGY INC Health Care Equity 0,11 United States USD
PEN PENUMBRA INC Health Care Equity 0,11 United States USD
HAS HASBRO INC Consumer Discretionary Equity 0,11 United States USD
DT DYNATRACE INC Information Technology Equity 0,11 United States USD
AGNC AGNC INVESTMENT REIT CORP Financials Equity 0,11 United States USD
SANM SANMINA CORP Information Technology Equity 0,11 United States USD
CRL CHARLES RIVER LABORATORIES INTERNA Health Care Equity 0,11 United States USD
OC OWENS CORNING Industrials Equity 0,11 United States USD
ARW ARROW ELECTRONICS INC Information Technology Equity 0,10 United States USD
SPXC SPX TECHNOLOGIES INC Industrials Equity 0,10 United States USD
SAIA SAIA INC Industrials Equity 0,10 United States USD
TECH BIO TECHNE CORP Health Care Equity 0,10 United States USD
RMBS RAMBUS INC Information Technology Equity 0,10 United States USD
EHC ENCOMPASS HEALTH CORP Health Care Equity 0,10 United States USD
BPOP POPULAR INC Financials Equity 0,10 United States USD
RBRK RUBRIK INC CLASS A Information Technology Equity 0,10 United States USD
GDDY GODADDY INC CLASS A Information Technology Equity 0,10 United States USD
SOLV SOLVENTUM CORP Health Care Equity 0,10 United States USD
FIVE FIVE BELOW INC Consumer Discretionary Equity 0,10 United States USD
HII HUNTINGTON INGALLS INDUSTRIES INC Industrials Equity 0,10 United States USD
NYT NEW YORK TIMES CLASS A Communication Equity 0,10 United States USD
BAX BAXTER INTERNATIONAL INC Health Care Equity 0,10 United States USD
AHR AMERICAN HEALTHCARE REIT INC Real Estate Equity 0,10 United States USD
GWRE GUIDEWIRE SOFTWARE INC Information Technology Equity 0,10 United States USD
UDR UDR REIT INC Real Estate Equity 0,10 United States USD
MUSA MURPHY USA INC Consumer Discretionary Equity 0,10 United States USD
IVZ INVESCO LTD Financials Equity 0,10 United States USD
CPT CAMDEN PROPERTY TRUST REIT Real Estate Equity 0,10 United States USD
BMRN BIOMARIN PHARMACEUTICAL INC Health Care Equity 0,10 United States USD
ARWR ARROWHEAD PHARMACEUTICALS INC Health Care Equity 0,10 United States USD
MOH MOLINA HEALTHCARE INC Health Care Equity 0,10 United States USD
HL HECLA MINING Materials Equity 0,10 United States USD
PRI PRIMERICA INC Financials Equity 0,10 United States USD
""",
# Page 4
"""
CACI CACI INTERNATIONAL INC CLASS A Industrials Equity 0,10 United States USD
WTRG ESSENTIAL UTILITIES INC Utilities Equity 0,10 United States USD
OGE OGE ENERGY CORP Utilities Equity 0,10 United States USD
SCI SERVICE Consumer Discretionary Equity 0,10 United States USD
AES AES CORP Utilities Equity 0,10 United States USD
R RYDER SYSTEM INC Industrials Equity 0,10 United States USD
WTFC WINTRUST FINANCIAL CORP Financials Equity 0,10 United States USD
AMH AMERICAN HOMES RENT REIT CLASS A Real Estate Equity 0,10 United States USD
UMBF UMB FINANCIAL CORP Financials Equity 0,10 United States USD
CGNX COGNEX CORP Information Technology Equity 0,10 United States USD
CR CRANE Industrials Equity 0,10 United States USD
BEZ BEAZLEY PLC Financials Equity 0,10 United Kingdom GBP
LFUS LITTELFUSE INC Information Technology Equity 0,10 United States USD
DCI DONALDSON INC Industrials Equity 0,10 United States USD
JKHY JACK HENRY AND ASSOCIATES INC Financials Equity 0,10 United States USD
DOCN DIGITALOCEAN HOLDINGS INC Information Technology Equity 0,10 United States USD
SSB SOUTHSTATE BANK CORP Financials Equity 0,09 United States USD
FTT FINNING INTERNATIONAL INC Industrials Equity 0,09 Canada CAD
AR ANTERO RESOURCES CORP Energy Equity 0,09 United States USD
CFR CULLEN FROST BANKERS INC Financials Equity 0,09 United States USD
ALSN ALLISON TRANSMISSION HOLDINGS INC Industrials Equity 0,09 United States USD
SEIC SEI INVESTMENTS Financials Equity 0,09 United States USD
BTSG BRIGHTSPRING HEALTH SERVICES INC Health Care Equity 0,09 United States USD
CTRE CARETRUST REIT INC Real Estate Equity 0,09 United States USD
DAR DARLING INGREDIENTS INC Consumer Staples Equity 0,09 United States USD
BXP BXP INC Real Estate Equity 0,09 United States USD
PINS PINTEREST INC CLASS A Communication Equity 0,09 United States USD
HBM HUDBAY MINERALS INC Materials Equity 0,09 Canada CAD
ORI OLD REPUBLIC INTERNATIONAL CORP Financials Equity 0,09 United States USD
U UNITY SOFTWARE INC Information Technology Equity 0,09 United States USD
DKNG DRAFTKINGS INC CLASS A Consumer Discretionary Equity 0,09 United States USD
ZION ZIONS BANCORPORATION Financials Equity 0,09 United States USD
WMS ADVANCED DRAINAGE SYSTEMS INC Industrials Equity 0,09 United States USD
ENSG ENSIGN GROUP INC Health Care Equity 0,09 United States USD
FRT FEDERAL REALTY INVESTMENT TRUST RE Real Estate Equity 0,09 United States USD
AXSM AXSOME THERAPEUTICS INC Health Care Equity 0,09 United States USD
VIAV VIAVI SOLUTIONS INC Information Technology Equity 0,09 United States USD
BSL BLUESCOPE STEEL LTD Materials Equity 0,09 Australia AUD
IMI IMI PLC Industrials Equity 0,09 United Kingdom GBP
SOLS SOLSTICE ADVANCED MATERIALS INC Materials Equity 0,09 United States USD
AFG AMERICAN FINANCIAL GROUP INC Financials Equity 0,09 United States USD
DOCU DOCUSIGN INC Information Technology Equity 0,09 United States USD
ADC AGREE REALTY REIT CORP Real Estate Equity 0,09 United States USD
VMI VALMONT INDS INC Industrials Equity 0,09 United States USD
HUBS HUBSPOT INC Information Technology Equity 0,09 United States USD
""",
# Page 5
"""
OSK OSHKOSH CORP Industrials Equity 0,09 United States USD
COLB COLUMBIA BANKING SYSTEM INC Financials Equity 0,09 United States USD
CYTK CYTOKINETICS INC Health Care Equity 0,09 United States USD
BEN FRANKLIN RESOURCES INC Financials Equity 0,09 United States USD
AYI ACUITY INC Industrials Equity 0,09 United States USD
KTOS KRATOS DEFENSE AND SECURITY SOLUTI Industrials Equity 0,09 United States USD
6976 TAIYO YUDEN LTD Information Technology Equity 0,09 Japan JPY
COKE COCA COLA CONSOLIDATED INC Consumer Staples Equity 0,09 United States USD
HALO HALOZYME THERAPEUTICS INC Health Care Equity 0,09 United States USD
FLS FLOWSERVE CORP Industrials Equity 0,09 United States USD
CUBE CUBESMART REIT Real Estate Equity 0,09 United States USD
NNN NNN REIT INC Real Estate Equity 0,09 United States USD
6963 ROHM LTD Information Technology Equity 0,09 Japan JPY
TKR TIMKEN Industrials Equity 0,09 United States USD
ONB OLD NATIONAL BANCORP Financials Equity 0,09 United States USD
CORT CORCEPT THERAPEUTICS INC Health Care Equity 0,09 United States USD
RRC RANGE RESOURCES CORP Energy Equity 0,08 United States USD
WTS WATTS WATER TECHNOLOGIES INC CLASS Industrials Equity 0,08 United States USD
BRX BRIXMOR PROPERTY GROUP REIT INC Real Estate Equity 0,08 United States USD
GME GAMESTOP CORP CLASS A Consumer Discretionary Equity 0,08 United States USD
MANH MANHATTAN ASSOCIATES INC Information Technology Equity 0,08 United States USD
FDS FACTSET RESEARCH SYSTEMS INC Financials Equity 0,08 United States USD
HSIC HENRY SCHEIN INC Health Care Equity 0,08 United States USD
TTC TORO Industrials Equity 0,08 United States USD
STB STOREBRAND Financials Equity 0,08 Norway NOK
AMG AFFILIATED MANAGERS GROUP INC Financials Equity 0,08 United States USD
VNOM VIPER ENERGY INC CLASS A Energy Equity 0,08 United States USD
SWKS SKYWORKS SOLUTIONS INC Information Technology Equity 0,08 United States USD
VOYA VOYA FINANCIAL INC Financials Equity 0,08 United States USD
ESI ELEMENT SOLUTIONS INC Materials Equity 0,08 United States USD
ACLN ACCELLERON N AG Industrials Equity 0,08 Switzerland CHF
GMED GLOBUS MEDICAL INC CLASS A Health Care Equity 0,08 United States USD
FR FIRST INDUSTRIAL REALTY TRUST INC Real Estate Equity 0,08 United States USD
AXS AXIS CAPITAL HOLDINGS LTD Financials Equity 0,08 United States USD
ALKS ALKERMES Health Care Equity 0,08 United States USD
IT GARTNER INC Information Technology Equity 0,08 United States USD
ESE ESCO TECHNOLOGIES INC Industrials Equity 0,08 United States USD
WEIR WEIR GROUP PLC Industrials Equity 0,08 United Kingdom GBP
5334 NITERRA LTD Consumer Discretionary Equity 0,08 Japan JPY
GAW GAMES WORKSHOP GROUP PLC Consumer Discretionary Equity 0,08 United Kingdom GBP
IONS IONIS PHARMACEUTICALS INC Health Care Equity 0,08 United States USD
GKOS GLAUKOS CORP Health Care Equity 0,08 United States USD
IMG IAMGOLD CORP Materials Equity 0,08 Canada CAD
FORM FORMFACTOR INC Information Technology Equity 0,08 United States USD
AGX ARGAN INC Industrials Equity 0,08 United States USD
"""
]

print("Script template created, now building multi-part python script...")
