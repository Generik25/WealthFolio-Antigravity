import os
import json
import re

# We will write all pages into a file scripts/iusn_raw.txt
p1_to_20 = """
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
KMX CARMAX INC Consumer Discretionary Equity 0,08 United States USD
PB PROSPERITY BANCSHARES INC Financials Equity 0,08 United States USD
WAL WESTERN ALLIANCE Financials Equity 0,08 United States USD
HXL HEXCEL CORP Industrials Equity 0,08 United States USD
TGTX TG THERAPEUTICS INC Health Care Equity 0,08 United States USD
MTCH MATCH GROUP INC Communication Equity 0,08 United States USD
NCLH NORWEGIAN CRUISE LINE HOLDINGS LTD Consumer Discretionary Equity 0,08 United States USD
FROG JFROG LTD Information Technology Equity 0,08 United States USD
ACM AECOM Industrials Equity 0,08 United States USD
5831 SHIZUOKA FINANCIAL GROUP INC Financials Equity 0,08 Japan JPY
W WAYFAIR INC CLASS A Consumer Discretionary Equity 0,08 United States USD
REXR REXFORD INDUSTRIAL REALTY REIT INC Real Estate Equity 0,08 United States USD
AAOI APPLIED OPTOELECTRONICS INC Information Technology Equity 0,08 United States USD
VSAT VIASAT INC Information Technology Equity 0,08 United States USD
5333 NGK CORP Industrials Equity 0,08 Japan JPY
RIOT RIOT PLATFORMS INC Information Technology Equity 0,08 United States USD
JEF JEFFERIES FINANCIAL GROUP INC Financials Equity 0,08 United States USD
DPM DPM METALS INC Materials Equity 0,08 Canada CAD
IGG IG GROUP HOLDINGS PLC Financials Equity 0,08 United Kingdom GBP
3436 SUMCO CORP Information Technology Equity 0,08 Japan JPY
ATZ ARITZIA SUBORDINATE VOTING INC Consumer Discretionary Equity 0,08 Canada CAD
LAD LITHIA MOTORS INC CLASS A Consumer Discretionary Equity 0,08 United States USD
CIFR CIPHER DIGITAL INC Information Technology Equity 0,08 United States USD
TEX TEREX CORP Industrials Equity 0,08 United States USD
HSX HISCOX LTD Financials Equity 0,08 United Kingdom GBP
ATR APTARGROUP INC Materials Equity 0,08 United States USD
AMKR AMKOR TECHNOLOGY INC Information Technology Equity 0,08 United States USD
SNEX STONEX GROUP INC Financials Equity 0,08 United States USD
MDGL MADRIGAL PHARMACEUTICALS INC Health Care Equity 0,08 United States USD
MGM MGM RESORTS INTERNATIONAL Consumer Discretionary Equity 0,08 United States USD
APLD APPLIED DIGITAL CORP Information Technology Equity 0,08 United States USD
IDA IDACORP INC Utilities Equity 0,07 United States USD
UHS UNIVERSAL HEALTH SERVICES INC CLAS Health Care Equity 0,07 United States USD
PSPN PSP SWISS PROPERTY AG Real Estate Equity 0,07 Switzerland CHF
BAH BOOZ ALLEN HAMILTON HOLDING CORP C Industrials Equity 0,07 United States USD
BROS DUTCH BROS INC CLASS A Consumer Discretionary Equity 0,07 United States USD
EAT BRINKER INTERNATIONAL INC Consumer Discretionary Equity 0,07 United States USD
AG FIRST MAJESTIC SILVER CORP Materials Equity 0,07 Canada CAD
CNM CORE & MAIN INC CLASS A Industrials Equity 0,07 United States USD
SM SM ENERGY Energy Equity 0,07 United States USD
CPX CAPITAL POWER CORP Utilities Equity 0,07 Canada CAD
SSD SIMPSON MANUFACTURING INC Industrials Equity 0,07 United States USD
SOBO SOUTH BOW CORP Energy Equity 0,07 Canada CAD
THG HANOVER INSURANCE GROUP INC Financials Equity 0,07 United States USD
AVT AVNET INC Information Technology Equity 0,07 United States USD
TRNO TERRENO REALTY REIT CORP Real Estate Equity 0,07 United States USD
RHP RYMAN HOSPITALITY PROPERTIES REIT Real Estate Equity 0,07 United States USD
CBSH COMMERCE BANCSHARES INC Financials Equity 0,07 United States USD
MXL MAXLINEAR INC Information Technology Equity 0,07 United States USD
BLDR BUILDERS FIRSTSOURCE INC Industrials Equity 0,07 United States USD
8354 FUKUOKA FINANCIAL GROUP INC Financials Equity 0,07 Japan JPY
FCFS FIRSTCASH HOLDINGS INC Financials Equity 0,07 United States USD
DVA DAVITA INC Health Care Equity 0,07 United States USD
GTT GAZTRANSPORT & TECHNIGAZ SA Energy Equity 0,07 France EUR
UGI UGI CORP Utilities Equity 0,07 United States USD
SPIE SPIE SA Industrials Equity 0,07 France EUR
HQY HEALTHEQUITY INC Health Care Equity 0,07 United States USD
AVTR AVANTOR INC Health Care Equity 0,07 United States USD
AM ANTERO MIDSTREAM CORP Energy Equity 0,07 United States USD
7167 MEBUKI FINANCIAL GROUP INC Financials Equity 0,07 Japan JPY
EMN EASTMAN CHEMICAL Materials Equity 0,07 United States USD
PRAX PRAXIS PRECISION MEDICINES INC Health Care Equity 0,07 United States USD
ARE ALEXANDRIA REAL ESTATE EQUITIES RE Real Estate Equity 0,07 United States USD
AAON AAON INC Industrials Equity 0,07 United States USD
TTEK TETRA TECH INC Industrials Equity 0,07 United States USD
WULF TERAWULF INC Information Technology Equity 0,07 United States USD
HLI HOULIHAN LOKEY INC CLASS A Financials Equity 0,07 United States USD
CRNX CRINETICS PHARMACEUTICALS INC Health Care Equity 0,07 United States USD
ICG ICG PLC Financials Equity 0,07 United Kingdom GBP
CHRD CHORD ENERGY CORP Energy Equity 0,07 United States USD
RAL RALLIANT CORP Information Technology Equity 0,07 United States USD
COMP COMPASS INC CLASS A Real Estate Equity 0,07 United States USD
EUR EUR CASH Cash and/or Derivatives Cash 0,07 European Union EUR
ENS ENERSYS Industrials Equity 0,07 United States USD
AED AEDIFICA NV Real Estate Equity 0,07 Belgium EUR
CMC COMMERCIAL METALS Materials Equity 0,07 United States USD
QRVO QORVO INC Information Technology Equity 0,07 United States USD
SUBC SUBSEA SA Energy Equity 0,07 Norway NOK
ELD ELDORADO GOLD CORP Materials Equity 0,07 Canada CAD
NOV NOV INC Energy Equity 0,07 United States USD
STJ ST JAMESS PLACE PLC Financials Equity 0,07 United Kingdom GBP
FPS FORGENT POWER SOLUTIONS INC CLASS Industrials Equity 0,07 United States USD
6506 YASKAWA ELECTRIC CORP Industrials Equity 0,07 Japan JPY
ACA ARCOSA INC Industrials Equity 0,07 United States USD
ALQ ALS LTD Industrials Equity 0,07 Australia AUD
NFG NATIONAL FUEL GAS Utilities Equity 0,07 United States USD
ORI ORICA LTD Materials Equity 0,07 Australia AUD
FLR FLUOR CORP Industrials Equity 0,07 United States USD
NXT NEXTDC LTD Information Technology Equity 0,07 Australia AUD
ALV AUTOLIV INC Consumer Discretionary Equity 0,07 United States USD
STAG STAG INDUSTRIAL REIT INC Real Estate Equity 0,07 United States USD
CHC CHARTER HALL GROUP STAPLED UNITS Real Estate Equity 0,07 Australia AUD
ZWS ZURN ELKAY WATER SOLUTIONS CORP Industrials Equity 0,07 United States USD
AGCO AGCO CORP Industrials Equity 0,07 United States USD
KNSL KINSALE CAPITAL GROUP INC Financials Equity 0,07 United States USD
WYNN WYNN RESORTS LTD Consumer Discretionary Equity 0,07 United States USD
3563 FOOD & LIFE COMPANIES LTD Consumer Discretionary Equity 0,07 Japan JPY
LEA LEAR CORP Consumer Discretionary Equity 0,07 United States USD
CS CAPSTONE COPPER CORP Materials Equity 0,07 Canada CAD
POWL POWELL INDUSTRIES INC Industrials Equity 0,07 United States USD
ETSY ETSY INC Consumer Discretionary Equity 0,07 United States USD
NKT NKT Industrials Equity 0,07 Denmark DKK
MOS MOSAIC Materials Equity 0,07 United States USD
PLXS PLEXUS CORP Information Technology Equity 0,07 United States USD
GTES GATES INDUSTRIAL PLC Industrials Equity 0,07 United States USD
KRYS KRYSTAL BIOTECH INC Health Care Equity 0,07 United States USD
EPRT ESSENTIAL PROPERTIES REALTY TRUST Real Estate Equity 0,07 United States USD
PTGX PROTAGONIST THERAPEUTICS INC Health Care Equity 0,07 United States USD
AUR AURORA INNOVATION INC CLASS A Information Technology Equity 0,07 United States USD
FSS FEDERAL SIGNAL CORP Industrials Equity 0,07 United States USD
3099 ISETAN MITSUKOSHI HOLDINGS LTD Consumer Discretionary Equity 0,07 Japan JPY
DCC DCC ENERGY PLC Energy Equity 0,07 United Kingdom GBP
2768 SOJITZ CORP Industrials Equity 0,07 Japan JPY
SLAB SILICON LABORATORIES INC Information Technology Equity 0,07 United States USD
TMHC TAYLOR MORRISON HOME CORP Consumer Discretionary Equity 0,07 United States USD
CHE CHEMED CORP Health Care Equity 0,07 United States USD
GPT GPT GROUP STAPLED UNITS Real Estate Equity 0,07 Australia AUD
HRL HORMEL FOODS CORP Consumer Staples Equity 0,07 United States USD
RGEN REPLIGEN CORP Health Care Equity 0,07 United States USD
TKA THYSSENKRUPP AG Materials Equity 0,07 Germany EUR
SFM SPROUTS FARMERS MARKET INC Consumer Staples Equity 0,07 United States USD
CRUS CIRRUS LOGIC INC Information Technology Equity 0,07 United States USD
QBR.B QUEBECOR INC CLASS B Communication Equity 0,07 Canada CAD
EDEN EDENRED Financials Equity 0,07 France EUR
NPO ENPRO INC Industrials Equity 0,07 United States USD
BEZQ BEZEQ ISRAELI TELECOMMUNICATION CO Communication Equity 0,07 Israel ILS
HR HEALTHCARE REALTY TRUST INC CLASS Real Estate Equity 0,07 United States USD
TTD TRADE DESK INC CLASS A Communication Equity 0,07 United States USD
MIN MINERAL RESOURCES LTD Materials Equity 0,06 Australia AUD
PCVX VAXCYTE INC Health Care Equity 0,06 United States USD
FAF FIRST AMERICAN FINANCIAL CORP Financials Equity 0,06 United States USD
OSCR OSCAR HEALTH INC CLASS A Financials Equity 0,06 United States USD
VLY VALLEY NATIONAL Financials Equity 0,06 United States USD
9147 NIPPON EXPRESS HOLDINGS INC Industrials Equity 0,06 Japan JPY
MRL MERLIN PROPERTIES REIT SA Real Estate Equity 0,06 Spain EUR
GBCI GLACIER BANCORP INC Financials Equity 0,06 United States USD
LSTR LANDSTAR SYSTEM INC Industrials Equity 0,06 United States USD
LNTH LANTHEUS HOLDINGS INC Health Care Equity 0,06 United States USD
OMF ONEMAIN HOLDINGS INC Financials Equity 0,06 United States USD
JBTM JBT MAREL CORP Industrials Equity 0,06 United States USD
CAG CONAGRA BRANDS INC Consumer Staples Equity 0,06 United States USD
ECG EVERUS CONSTRUCTION GROUP INC Industrials Equity 0,06 United States USD
IDCC INTERDIGITAL INC Information Technology Equity 0,06 United States USD
KGS KODIAK GAS SERVICES INC Energy Equity 0,06 United States USD
AWI ARMSTRONG WORLD INDUSTRIES INC Industrials Equity 0,06 United States USD
AUD AUD CASH Cash and/or Derivatives Cash 0,06 Australia AUD
HIMS HIMS HERS HEALTH INC CLASS A Health Care Equity 0,06 United States USD
EXP EAGLE MATERIALS INC Materials Equity 0,06 United States USD
BRKR BRUKER CORP Health Care Equity 0,06 United States USD
LUMN LUMEN TECHNOLOGIES INC Communication Equity 0,06 United States USD
AROC ARCHROCK INC Energy Equity 0,06 United States USD
FNB FNB CORP Financials Equity 0,06 United States USD
LW LAMB WESTON HOLDINGS INC Consumer Staples Equity 0,06 United States USD
LKQ LKQ CORP Consumer Discretionary Equity 0,06 United States USD
UHALB U HAUL NON VOTING SERIES N Industrials Equity 0,06 United States USD
AXTA AXALTA COATING SYSTEMS LTD Materials Equity 0,06 United States USD
ACKB ACKERMANS & VAN HAAREN NV Industrials Equity 0,06 Belgium EUR
AOS A O SMITH CORP Industrials Equity 0,06 United States USD
KCR KONECRANES Industrials Equity 0,06 Finland EUR
ST SENSATA TECHNOLOGIES HOLDING PLC Industrials Equity 0,06 United States USD
INGR INGREDION INC Consumer Staples Equity 0,06 United States USD
MYRG MYR GROUP INC Industrials Equity 0,06 United States USD
NJR NEW JERSEY RESOURCES CORP Utilities Equity 0,06 United States USD
OKLO OKLO INC CLASS A Utilities Equity 0,06 United States USD
ULS UL SOLUTIONS INC CLASS A Industrials Equity 0,06 United States USD
SPM SAIPEM Energy Equity 0,06 Italy EUR
5844 KYOTO FINANCIAL GROUP INC Financials Equity 0,06 Japan JPY
5332 TOTO LTD Industrials Equity 0,06 Japan JPY
SIGI SELECTIVE INSURANCE GROUP INC Financials Equity 0,06 United States USD
CART MAPLEBEAR INC Consumer Staples Equity 0,06 United States USD
ALSYDB AL SYDBANK Financials Equity 0,06 Denmark DKK
HWC HANCOCK WHITNEY CORP Financials Equity 0,06 United States USD
LTMC LOTTOMATICA GROUP Consumer Discretionary Equity 0,06 Italy EUR
ABDN ABERDEEN GROUP PLC Financials Equity 0,06 United Kingdom GBP
522 ASMPT LTD Information Technology Equity 0,06 Hong Kong HKD
MBGL MOBILITY GLOBAL INC Industrials Equity 0,06 United States USD
RILBA RINGKJOBING LANDBOBANK Financials Equity 0,06 Denmark DKK
6645 OMRON CORP Information Technology Equity 0,06 Japan JPY
ORA ORMAT TECH INC Utilities Equity 0,06 United States USD
CROX CROCS INC Consumer Discretionary Equity 0,06 United States USD
MSA MSA SAFETY INC Industrials Equity 0,06 United States USD
IMCD IMCD NV Industrials Equity 0,06 Netherlands EUR
PBF PBF ENERGY INC CLASS A Energy Equity 0,06 United States USD
MP MP MATERIALS CORP CLASS A Materials Equity 0,06 United States USD
QBTS D WAVE QUANTUM INC Information Technology Equity 0,06 United States USD
GXO GXO LOGISTICS INC Industrials Equity 0,06 United States USD
MAC MACERICH REIT Real Estate Equity 0,06 United States USD
FND FLOOR DECOR HOLDINGS INC CLASS A Consumer Discretionary Equity 0,06 United States USD
WFRD WEATHERFORD INTERNATIONAL PLC Energy Equity 0,06 United States USD
CLF CLEVELAND CLIFFS INC Materials Equity 0,06 United States USD
CLIS CLAL INSURANCE ENTERPRISES LTD Financials Equity 0,06 Israel ILS
NDX1 NORDEX Industrials Equity 0,06 Germany EUR
9962 MISUMI GROUP INC Industrials Equity 0,06 Japan JPY
CWST CASELLA WASTE SYSTEMS INC CLASS A Industrials Equity 0,06 United States USD
CZR CAESARS ENTERTAINMENT INC Consumer Discretionary Equity 0,06 United States USD
M MACYS INC Consumer Discretionary Equity 0,06 United States USD
ALD AMPOL LTD Energy Equity 0,06 Australia AUD
UBSI UNITED BANKSHARES INC Financials Equity 0,06 United States USD
MTDR MATADOR RESOURCES Energy Equity 0,06 United States USD
ROR ROTORK PLC Industrials Equity 0,06 United Kingdom GBP
BGEO LION FINANCE GROUP PLC Financials Equity 0,06 United Kingdom GBP
8359 HACHIJUNI NAGANO BANK LTD Financials Equity 0,06 Japan JPY
CVLT COMMVAULT SYSTEMS INC Information Technology Equity 0,06 United States USD
GATX GATX CORP Industrials Equity 0,06 United States USD
SARO STANDARDAERO Industrials Equity 0,06 United States USD
ALGM ALLEGRO MICROSYSTEMS INC Information Technology Equity 0,06 United States USD
MSGS MADISON SQUARE GARDEN SPORTS CORP Communication Equity 0,06 United States USD
POOL POOL CORP Consumer Discretionary Equity 0,06 United States USD
LTH LIFE TIME GROUP HOLDINGS INC Consumer Discretionary Equity 0,06 United States USD
4021 NISSAN CHEMICAL CORP Materials Equity 0,06 Japan JPY
CORZ CORE SCIENTIFIC INC Information Technology Equity 0,06 United States USD
VNO VORNADO REALTY TRUST REIT Real Estate Equity 0,06 United States USD
RYN RAYONIER REIT INC Real Estate Equity 0,06 United States USD
LGND LIGAND PHARMACEUTICALS INC Health Care Equity 0,06 United States USD
RHC RAMSAY HEALTH CARE LTD Health Care Equity 0,06 Australia AUD
SCR SCOR Financials Equity 0,06 France EUR
ANDR ANDRITZ AG Industrials Equity 0,06 Austria EUR
NEU NEWMARKET CORP Materials Equity 0,06 United States USD
SFR SANDFIRE RESOURCES LTD Materials Equity 0,06 Australia AUD
BLND BRITISH LAND REIT PLC Real Estate Equity 0,06 United Kingdom GBP
ACIW ACI WORLDWIDE INC Information Technology Equity 0,06 United States USD
5101 YOKOHAMA RUBBER LTD Consumer Discretionary Equity 0,05 Japan JPY
JBH JB HI-FI LTD Consumer Discretionary Equity 0,05 Australia AUD
SQN SWISSQUOTE GROUP HOLDING SA Financials Equity 0,05 Switzerland CHF
4186 TOKYO OHKA KOGYO LTD Materials Equity 0,05 Japan JPY
"""

print("Chunk 1 loaded")
