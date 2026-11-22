import re

# Let me save the OCR text from pages 1 to 16 provided in the prompt

page_1 = """CTT CTT CORREIOS DE PORTUGAL SA Industrials Equity 0,008 Portugal Nyse Euronext - Euronext Lisbon EUR
345 VITASOY INTERNATIONAL HOLDINGS LTD Consumer Staples Equity 0,008 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
CPF CENTRAL PACIFIC FINANCIAL CORP Financials Equity 0,008 United States New York Stock Exchange Inc. USD
4443 SANSAN INC Information Technology Equity 0,008 Japan Tokyo Stock Exchange JPY
6736 SUN CORP Information Technology Equity 0,008 Japan Tokyo Stock Exchange JPY
ELS ELSIGHT LTD Information Technology Equity 0,008 Australia Asx - All Markets AUD
GILT GILAT SATELLITE NETWORKS LTD Information Technology Equity 0,008 Israel Tel Aviv Stock Exchange ILS
ALK ALKANE RESOURCES LTD Materials Equity 0,008 Australia Asx - All Markets AUD
GLUE MONTE ROSA THERAPEUTICS INC Health Care Equity 0,008 United States NASDAQ USD
JBI JANUS INTERNATIONAL GROUP INC Industrials Equity 0,008 United States New York Stock Exchange Inc. USD
SLC SUPERLOOP LTD Communication Equity 0,008 Australia Asx - All Markets AUD
EOS ELECTRO OPTIC SYSTEMS HOLDINGS LTD Industrials Equity 0,008 Australia Asx - All Markets AUD
9757 FUNAI SOKEN HOLDINGS INC Industrials Equity 0,008 Japan Tokyo Stock Exchange JPY
2121 MIXI INC Communication Equity 0,008 Japan Tokyo Stock Exchange JPY
EVER EVERQUOTE INC CLASS A Communication Equity 0,008 United States NASDAQ USD
1SXP SCHOTT PHARMA AG Health Care Equity 0,008 Germany Xetra EUR
2659 SAN-A LTD Consumer Staples Equity 0,008 Japan Tokyo Stock Exchange JPY
BKV BKV CORP Energy Equity 0,008 United States New York Stock Exchange Inc. USD
CDA COMPAGNIE DES ALPES SA Consumer Discretionary Equity 0,008 France Nyse Euronext - Euronext Paris EUR
7224 SHINMAYWA INDUSTRIES LTD Industrials Equity 0,008 Japan Tokyo Stock Exchange JPY
6516 SANYO DENKI LTD Industrials Equity 0,008 Japan Tokyo Stock Exchange JPY
3087 DOUTOR NICHIRES HOLDINGS LTD Consumer Discretionary Equity 0,008 Japan Tokyo Stock Exchange JPY
PAL PALFINGER AG Industrials Equity 0,008 Austria Wiener Boerse Ag EUR
6996 NICHICON CORP Information Technology Equity 0,008 Japan Tokyo Stock Exchange JPY
SHUR SHURGARD SELF STORAGE LTD Real Estate Equity 0,008 Belgium Nyse Euronext - Euronext Brussels EUR
MCBS METROCITY BANKSHARES INC Financials Equity 0,008 United States NASDAQ USD
HFWA HERITAGE FINANCIAL CORP Financials Equity 0,008 United States NASDAQ USD
TMC TMC THE METALS COMPANY INC Materials Equity 0,008 United States NASDAQ USD
RBT ROBERTET SA Materials Equity 0,008 France Nyse Euronext - Euronext Paris EUR
NTGR NETGEAR INC Information Technology Equity 0,008 United States NASDAQ USD
MER MEREN ENERGY INC Energy Equity 0,008 Canada Toronto Stock Exchange CAD
8975 ICHIGO OFFICE REIT INVESTMENT REIT Real Estate Equity 0,008 Japan Tokyo Stock Exchange JPY
DMP DOMINOS PIZZA ENTERPRISES LTD Consumer Discretionary Equity 0,008 Australia Asx - All Markets AUD
AVBP ARRIVENT BIOPHARMA INC Health Care Equity 0,008 United States NASDAQ USD
4045 TOAGOSEI LTD Materials Equity 0,007 Japan Tokyo Stock Exchange JPY
PCT PURECYCLE TECHNOLOGIES INC Materials Equity 0,007 United States NASDAQ USD
SKAN SKAN N AG Health Care Equity 0,007 Switzerland SIX Swiss Exchange CHF"""

page_2 = """GCT GIGACLOUD TECHNOLOGY INC CLASS A Consumer Discretionary Equity 0,007 United States NASDAQ USD
8968 FUKUOKA REIT CORP Real Estate Equity 0,007 Japan Tokyo Stock Exchange JPY
BAR BARCO NV Information Technology Equity 0,007 Belgium Nyse Euronext - Euronext Brussels EUR
7616 COLOWIDE LTD Consumer Discretionary Equity 0,007 Japan Tokyo Stock Exchange JPY
TROX TRONOX HOLDINGS PLC Materials Equity 0,007 United States New York Stock Exchange Inc. USD
8111 GOLDWIN INC Consumer Discretionary Equity 0,007 Japan Tokyo Stock Exchange JPY
FBRT FRANKLIN BSP REALTY TRUST INC Financials Equity 0,007 United States New York Stock Exchange Inc. USD
3738 VOBILE GROUP LTD Information Technology Equity 0,007 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
WELL WELL HEALTH TECHNOLOGIES CORP Health Care Equity 0,007 Canada Toronto Stock Exchange CAD
NCK NICK SCALI LTD Consumer Discretionary Equity 0,007 Australia Asx - All Markets AUD
MRC MORGUARD CORP Real Estate Equity 0,007 Canada Toronto Stock Exchange CAD
1515 NITTETSU MINING LTD Materials Equity 0,007 Japan Tokyo Stock Exchange JPY
PPGN POLYPEPTIDE N AG Health Care Equity 0,007 Switzerland SIX Swiss Exchange CHF
417A BLUE ZONES HOLDINGS LTD Consumer Staples Equity 0,007 Japan Tokyo Stock Exchange JPY
4559 ZERIA PHARMACEUTICAL LTD Health Care Equity 0,007 Japan Tokyo Stock Exchange JPY
IRE IRESS LTD Information Technology Equity 0,007 Australia Asx - All Markets AUD
JM JM Consumer Discretionary Equity 0,007 Sweden Nasdaq Omx Nordic SEK
VCT VICTREX PLC Materials Equity 0,007 United Kingdom London Stock Exchange GBP
IRES IRISH RESIDENTIAL PROPERTIES PLC Real Estate Equity 0,007 Ireland Irish Stock Exchange - All Market EUR
CRE CONDUIT HOLDINGS LTD Financials Equity 0,007 United Kingdom London Stock Exchange GBP
9404 NIPPON TELEVISION HOLDINGS INC Communication Equity 0,007 Japan Tokyo Stock Exchange JPY
EVT EVT LTD Communication Equity 0,007 Australia Asx - All Markets AUD
SNI STOLT-NIELSEN LTD Industrials Equity 0,007 Norway Oslo Bors Asa NOK
CNXC CONCENTRIX CORP Industrials Equity 0,007 United States NASDAQ USD
LMB LIMBACH HOLDINGS INC Industrials Equity 0,007 United States NASDAQ USD
PGY PAGAYA TECHNOLOGIES LTD CLASS A Information Technology Equity 0,007 United States NASDAQ USD
CNXN PC CONNECTION INC Information Technology Equity 0,007 United States NASDAQ USD
6651 NITTO KOGYO CORP Industrials Equity 0,007 Japan Tokyo Stock Exchange JPY
AMPH AMPHASTAR PHARMACEUTICALS INC Health Care Equity 0,007 United States NASDAQ USD
ATLC ATLANTICUS HOLDINGS CORP Financials Equity 0,007 United States NASDAQ USD
XFAB X-FAB SILICON FOUNDRIES Information Technology Equity 0,007 France Nyse Euronext - Euronext Paris EUR
GEST GESTAMP AUTOMOCION SA Consumer Discretionary Equity 0,007 Spain Bolsa De Madrid EUR
AOV AMOTIV LTD Consumer Discretionary Equity 0,007 Australia Asx - All Markets AUD
4975 JCU CORP Materials Equity 0,007 Japan Tokyo Stock Exchange JPY
2146 UT GROUP LTD Industrials Equity 0,007 Japan Tokyo Stock Exchange JPY
4095 NIHON PARKERIZING LTD Materials Equity 0,007 Japan Tokyo Stock Exchange JPY
BUR BURFORD CAPITAL LTD Financials Equity 0,007 United States New York Stock Exchange Inc. USD
PWP PERELLA WEINBERG PARTNERS CLASS A Financials Equity 0,007 United States NASDAQ USD
GBG GB GROUP PLC Information Technology Equity 0,007 United Kingdom London Stock Exchange GBP
INWI INWIDO Industrials Equity 0,007 Sweden Nasdaq Omx Nordic SEK
COK CANCOM Information Technology Equity 0,007 Germany Xetra EUR
ODC OIL DRI CORPORATION OF AMERICA Consumer Staples Equity 0,007 United States New York Stock Exchange Inc. USD
PAGE MICHAEL PAGE PLC Industrials Equity 0,007 United Kingdom London Stock Exchange GBP
PSNL PERSONALIS INC Health Care Equity 0,007 United States NASDAQ USD
GHM GRAHAM CORP Industrials Equity 0,007 United States New York Stock Exchange Inc. USD"""

page_3 = """1999 MAN WAH HOLDINGS LTD Consumer Discretionary Equity 0,007 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
RWT REDWOOD TRUST REIT INC Financials Equity 0,007 United States New York Stock Exchange Inc. USD
GTM ZOOMINFO TECHNOLOGIES INC Communication Equity 0,007 United States NASDAQ USD
6753 SHARP CORP Consumer Discretionary Equity 0,007 Japan Tokyo Stock Exchange JPY
7976 MITSUBISHI PENCIL LTD Industrials Equity 0,007 Japan Tokyo Stock Exchange JPY
7226 KYOKUTO KAIHATSU KOGYO LTD Industrials Equity 0,007 Japan Tokyo Stock Exchange JPY
ENVX ENOVIX CORP Industrials Equity 0,007 United States NASDAQ USD
PTRN PATTERN GROUP INC SERIES A Consumer Discretionary Equity 0,007 United States NASDAQ USD
ESQ ESQUIRE FINANCIAL HOLDINGS INC Financials Equity 0,007 United States NASDAQ USD
GERN GERON CORP Health Care Equity 0,007 United States NASDAQ USD
GOLD GOLD INC Consumer Discretionary Equity 0,007 United States New York Stock Exchange Inc. USD
8098 INABATA LTD Industrials Equity 0,007 Japan Tokyo Stock Exchange JPY
ORRF ORRSTOWN FINANCIAL SERVICES INC Financials Equity 0,007 United States NASDAQ USD
3498 KASUMIGASEKI CAPITAL LTD Real Estate Equity 0,007 Japan Tokyo Stock Exchange JPY
WHA WERELDHAVE NV Real Estate Equity 0,007 Netherlands Euronext Amsterdam EUR
MUX MCEWEN INC Materials Equity 0,007 United States New York Stock Exchange Inc. USD
3635 KOEI TECMO HOLDINGS LTD Communication Equity 0,007 Japan Tokyo Stock Exchange JPY
ADAM ADAMAS INC TRUST Financials Equity 0,007 United States NASDAQ USD
DESN DOTTIKON ES HOLDING AG Health Care Equity 0,007 Switzerland SIX Swiss Exchange CHF
6412 HEIWA CORP Consumer Discretionary Equity 0,007 Japan Tokyo Stock Exchange JPY
SCOP SCOPE METALS GROUP LTD Industrials Equity 0,007 Israel Tel Aviv Stock Exchange ILS
KIN KINEPOLIS NV Communication Equity 0,007 Belgium Nyse Euronext - Euronext Brussels EUR
VCT VICAT SA Materials Equity 0,007 France Nyse Euronext - Euronext Paris EUR
BITTI BITTIUM Information Technology Equity 0,007 Finland Nasdaq Omx Helsinki Ltd. EUR
LYTS LSI INDUSTRIES INC Industrials Equity 0,007 United States NASDAQ USD
ALX ALEXANDERS REIT INC Real Estate Equity 0,007 United States New York Stock Exchange Inc. USD
ISCD ISRACARD LTD Financials Equity 0,007 Israel Tel Aviv Stock Exchange ILS
5186 NITTA CORP Industrials Equity 0,007 Japan Tokyo Stock Exchange JPY
1415 COWELL E HOLDINGS INC Information Technology Equity 0,007 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
SCHL SCHOLASTIC CORP Communication Equity 0,007 United States NASDAQ USD
CRMD CORMEDIX INC Health Care Equity 0,007 United States NASDAQ USD
HTLD HEARTLAND EXPRESS INC Industrials Equity 0,007 United States NASDAQ USD
XVIVO XVIVO PERFUSION Health Care Equity 0,007 Sweden Nasdaq Omx Nordic SEK
NOEJ NORMA GROUP Industrials Equity 0,007 Germany Xetra EUR
PAHC PHIBRO ANIMAL HEALTH CORP CLASS A Health Care Equity 0,007 United States NASDAQ USD
ASM AVINO SILVER AND GOLD MINES LTD Materials Equity 0,007 Canada Toronto Stock Exchange CAD
8803 HEIWA REAL ESTATE LTD Real Estate Equity 0,007 Japan Tokyo Stock Exchange JPY
5451 YODOKO LTD Materials Equity 0,007 Japan Tokyo Stock Exchange JPY
CTOS CUSTOM TRUCK ONE SOURCE INC Industrials Equity 0,007 United States New York Stock Exchange Inc. USD
RGR STURM RUGER INC Consumer Discretionary Equity 0,007 United States New York Stock Exchange Inc. USD
IBTA IBOTTA INC CLASS A Communication Equity 0,007 United States New York Stock Exchange Inc. USD
1788 GUOTAI JUNAN INTERNATIONAL HOLDING Financials Equity 0,007 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
ORE OREZONE GOLD CORP Materials Equity 0,007 Canada Toronto Stock Exchange CAD
6960 FUKUDA DENSHI LTD Health Care Equity 0,007 Japan Tokyo Stock Exchange JPY
SXC SUNCOKE ENERGY INC Materials Equity 0,007 United States New York Stock Exchange Inc. USD"""

page_4 = """1414 SHO-BOND HOLDINGS LTD Industrials Equity 0,007 Japan Tokyo Stock Exchange JPY
DYVOX DYNAVOX GROUP Information Technology Equity 0,007 Sweden Nasdaq Omx Nordic SEK
MBUU MALIBU BOATS CLASS A INC Consumer Discretionary Equity 0,007 United States NASDAQ USD
VIMIAN VIMIAN GROUP Health Care Equity 0,007 Sweden Nasdaq Omx Nordic SEK
RWAY RAI WAY SPA Communication Equity 0,007 Italy Borsa Italiana EUR
PDX PARADOX INTERACTIVE Communication Equity 0,007 Sweden Nasdaq Omx Nordic SEK
UWMC UWM HOLDINGS CORP CLASS A Financials Equity 0,007 United States New York Stock Exchange Inc. USD
3287 HOSHINO RESORTS REIT INC Real Estate Equity 0,007 Japan Tokyo Stock Exchange JPY
TROAX TROAX GROUP Industrials Equity 0,007 Sweden Nasdaq Omx Nordic SEK
SMT SUMMIT REAL ESTATE HOLDINGS LTD Real Estate Equity 0,007 Israel Tel Aviv Stock Exchange ILS
ONT OXFORD NANOPORE TECHNOLOGIES PLC Health Care Equity 0,007 United Kingdom London Stock Exchange GBP
VERX VERTEX INC CLASS A Information Technology Equity 0,007 United States NASDAQ USD
AESI ATLAS ENERGY SOLUTIONS INC Energy Equity 0,007 United States New York Stock Exchange Inc. USD
TBPH THERAVANCE BIOPHARMA INC Health Care Equity 0,007 United States NASDAQ USD
9037 HAMAKYOREX LTD Industrials Equity 0,007 Japan Tokyo Stock Exchange JPY
BLDP BALLARD POWER SYSTEMS INC Industrials Equity 0,007 Canada Toronto Stock Exchange CAD
6490 PILLAR CORP Materials Equity 0,007 Japan Tokyo Stock Exchange JPY
DOM DOMETIC GROUPINARY SHARES Consumer Discretionary Equity 0,007 Sweden Nasdaq Omx Nordic SEK
9247 TRE HOLDINGS CORP Industrials Equity 0,007 Japan Tokyo Stock Exchange JPY
HEM HEMNET GROUP Communication Equity 0,007 Sweden Nasdaq Omx Nordic SEK
SLX SILEX SYSTEMS LTD Industrials Equity 0,007 Australia Asx - All Markets AUD
BKSY BLACKSKY TECHNOLOGY INC CLASS A Industrials Equity 0,007 United States New York Stock Exchange Inc. USD
IDIN IDI INSURANCE COMPANY LTD Financials Equity 0,007 Israel Tel Aviv Stock Exchange ILS
PRCH PORCH GROUP INC Information Technology Equity 0,007 United States NASDAQ USD
GEN GENUIT GROUP PLC Industrials Equity 0,007 United Kingdom London Stock Exchange GBP
3101 TOYOBO LTD Materials Equity 0,007 Japan Tokyo Stock Exchange JPY
CWR CERES POWER HOLDINGS PLC Industrials Equity 0,007 United Kingdom London Stock Exchange GBP
CJT CARGOJET INC Industrials Equity 0,007 Canada Toronto Stock Exchange CAD
DFDS DFDS Industrials Equity 0,007 Denmark Omx Nordic Exchange Copenhagen A/S DKK
MISH MIVTACH SHAMIR HOLDINGS LTD Financials Equity 0,007 Israel Tel Aviv Stock Exchange ILS
CXM SPRINKLR INC CLASS A Information Technology Equity 0,007 United States New York Stock Exchange Inc. USD
WVE WAVE LIFE SCIENCES LTD Health Care Equity 0,007 United States NASDAQ USD
DIOS DIOS FASTIGHETER Real Estate Equity 0,007 Sweden Nasdaq Omx Nordic SEK
CBG CLOSE BROS GROUP PLC Financials Equity 0,007 United Kingdom London Stock Exchange GBP
WEB WEB TRAVEL GROUP LTD Consumer Discretionary Equity 0,007 Australia Asx - All Markets AUD
SMWH WH SMITH PLC Consumer Discretionary Equity 0,007 United Kingdom London Stock Exchange GBP
1428 BRIGHT SMART SECURITIES & COMMODIT Financials Equity 0,007 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
5911 YOKOGAWA BRIDGE HOLDINGS CORP Industrials Equity 0,007 Japan Tokyo Stock Exchange JPY
ISCN ISRAEL-CANADA LTD Real Estate Equity 0,007 Israel Tel Aviv Stock Exchange ILS
DMP DERMAPHARM HOLDING SE Health Care Equity 0,007 Germany Xetra EUR
AOSL ALPHA AND OMEGA SEMICONDUCTOR LTD Information Technology Equity 0,007 United States NASDAQ USD
WUW WUESTENROT & WUERTTEMBERGISCHE AG Financials Equity 0,007 Germany Xetra EUR
4478 FREEE KK Information Technology Equity 0,007 Japan Tokyo Stock Exchange JPY
EUZ ECKERT & ZIEGLER Health Care Equity 0,007 Germany Xetra EUR
PD PAGERDUTY INC Information Technology Equity 0,007 United States New York Stock Exchange Inc. USD"""

page_5 = """MTRO METRO BANK HOLDINGS PLC Financials Equity 0,007 United Kingdom London Stock Exchange GBP
TYRA TYRA BIOSCIENCES INC Health Care Equity 0,007 United States NASDAQ USD
INMD INMODE LTD Health Care Equity 0,007 Israel NASDAQ USD
KCN KINGSGATE CONSOLIDATED LTD Materials Equity 0,007 Australia Asx - All Markets AUD
PRAA PRA GROUP INC Financials Equity 0,007 United States NASDAQ USD
141A TRIAL HOLDINGS INC Consumer Staples Equity 0,007 Japan Tokyo Stock Exchange JPY
4023 KUREHA CORP Materials Equity 0,007 Japan Tokyo Stock Exchange JPY
MAZE MAZE THERAPEUTICS INC Health Care Equity 0,007 United States NASDAQ USD
ERA ERAMET SA Materials Equity 0,007 France Nyse Euronext - Euronext Paris EUR
FWRG FIRST WATCH RESTAURANT GROUP INC Consumer Discretionary Equity 0,007 United States NASDAQ USD
GOZ GROWTHPOINT PROPERTIES AUSTRALIA R Real Estate Equity 0,007 Australia Asx - All Markets AUD
6474 NACHI-FUJIKOSHI CORP Industrials Equity 0,007 Japan Tokyo Stock Exchange JPY
2726 PAL GROUP HOLDINGS LTD Consumer Discretionary Equity 0,007 Japan Tokyo Stock Exchange JPY
CRW CRANEWARE PLC Health Care Equity 0,007 United Kingdom London Stock Exchange GBP
7157 LIFENET INSURANCE Financials Equity 0,007 Japan Tokyo Stock Exchange JPY
OMER OMEROS CORP Health Care Equity 0,007 United States NASDAQ USD
467 UNITED ENERGY GROUP LTD Energy Equity 0,007 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
CTMX CYTOMX THERAPEUTICS INC Health Care Equity 0,007 United States NASDAQ USD
RUSHB RUSH ENTERPRISES INC CLASS B Industrials Equity 0,007 United States NASDAQ USD
2337 ICHIGO INC Real Estate Equity 0,007 Japan Tokyo Stock Exchange JPY
CNL COLLECTIVE MINING LTD Materials Equity 0,007 Canada Toronto Stock Exchange CAD
LBRDA LIBERTY BROADBAND CORP SERIES A Communication Equity 0,007 United States NASDAQ USD
7476 AS ONE CORP Health Care Equity 0,007 Japan Tokyo Stock Exchange JPY
9601 SHOCHIKU LTD Communication Equity 0,007 Japan Tokyo Stock Exchange JPY
6254 NOMURA MICRO SCIENCE LTD Industrials Equity 0,007 Japan Tokyo Stock Exchange JPY
ADTN ADTRAN HOLDINGS INC Information Technology Equity 0,007 United States NASDAQ USD
CGEM CULLINAN THERAPEUTICS INC Health Care Equity 0,007 United States NASDAQ USD
NX QUANEX BUILDING PRODUCTS CORP Industrials Equity 0,007 United States New York Stock Exchange Inc. USD
NXRT NEXPOINT RESIDENTIAL TRUST INC Real Estate Equity 0,006 United States New York Stock Exchange Inc. USD
OXM OXFORD INDUSTRIES INC Consumer Discretionary Equity 0,006 United States New York Stock Exchange Inc. USD
AMPL AMPLITUDE INC CLASS A Information Technology Equity 0,006 United States NASDAQ USD
GLIBK LIBERTY CAPITAL CORP SERIES C Communication Equity 0,006 United States NASDAQ USD
KOF KAUFMAN & BROAD SA Consumer Discretionary Equity 0,006 France Nyse Euronext - Euronext Paris EUR
ANNX ANNEXON INC Health Care Equity 0,006 United States NASDAQ USD
UAMY UNITED STATES ANTIMONY CORP Materials Equity 0,006 United States New York Stock Exchange Inc. USD
FORN FORBO HOLDING AG Industrials Equity 0,006 Switzerland SIX Swiss Exchange CHF
HZO MARINEMAX INC Consumer Discretionary Equity 0,006 United States New York Stock Exchange Inc. USD
2317 SYSTENA CORP Information Technology Equity 0,006 Japan Tokyo Stock Exchange JPY
PIA PIAGGIO & C Consumer Discretionary Equity 0,006 Italy Borsa Italiana EUR
9336 DAIEI KANKYO LTD Industrials Equity 0,006 Japan Tokyo Stock Exchange JPY
6366 CHIYODA CORPORATION CORP Industrials Equity 0,006 Japan Tokyo Stock Exchange JPY
485A POWERX INC Industrials Equity 0,006 Japan Tokyo Stock Exchange JPY
AP.UN ALLIED PROPERTIES REAL ESTATE INVT Real Estate Equity 0,006 Canada Toronto Stock Exchange CAD
CARS CARS.COM INC Communication Equity 0,006 United States New York Stock Exchange Inc. USD
3350 METAPLANET KK INC Consumer Discretionary Equity 0,006 Japan Tokyo Stock Exchange JPY"""

page_6 = """1860 MOBVISTA INC Communication Equity 0,006 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
ASC ASCOPIAVE Utilities Equity 0,006 Italy Borsa Italiana EUR
CIE CIE AUTOMOTIVE SA Consumer Discretionary Equity 0,006 Spain Bolsa De Madrid EUR
CAS CASCADES INC Materials Equity 0,006 Canada Toronto Stock Exchange CAD
HOV HOVNANIAN ENTERPRISES INC CLASS A Consumer Discretionary Equity 0,006 United States New York Stock Exchange Inc. USD
TPE PVA TEPLA AG Information Technology Equity 0,006 Germany Xetra EUR
9699 NISHIO HOLDINGS LTD Industrials Equity 0,006 Japan Tokyo Stock Exchange JPY
3487 CRE LOGISTICS REIT INC Real Estate Equity 0,006 Japan Tokyo Stock Exchange JPY
4587 PEPTIDREAM INC Health Care Equity 0,006 Japan Tokyo Stock Exchange JPY
CNNE CANNAE HOLDINGS INC Financials Equity 0,006 United States New York Stock Exchange Inc. USD
MTUS METALLUS INC Materials Equity 0,006 United States New York Stock Exchange Inc. USD
SBSI SOUTHSIDE BANCSHARES INC Financials Equity 0,006 United States New York Stock Exchange Inc. USD
MGTX MEIRAGTX HOLDINGS PLC Health Care Equity 0,006 United States NASDAQ USD
VIA VIA TRANSPORTATION INC CLASS A Information Technology Equity 0,006 United States New York Stock Exchange Inc. USD
PSM PROSIEBEN SAT.1 MEDIA N Communication Equity 0,006 Germany Xetra EUR
WPK WINPAK LTD Materials Equity 0,006 Canada Toronto Stock Exchange CAD
3865 HOKUETSU CORP Materials Equity 0,006 Japan Tokyo Stock Exchange JPY
WOLF WOLFSPEED INC Information Technology Equity 0,006 United States New York Stock Exchange Inc. USD
NNE NANO NUCLEAR ENERGY INC Industrials Equity 0,006 United States NASDAQ USD
4565 NXERA PHARMA LTD Health Care Equity 0,006 Japan Tokyo Stock Exchange JPY
SDR SITEMINDER LTD Information Technology Equity 0,006 Australia Asx - All Markets AUD
HSTM HEALTHSTREAM INC Health Care Equity 0,006 United States NASDAQ USD
VLE VALEURA ENERGY INC Energy Equity 0,006 Canada Toronto Stock Exchange CAD
7148 FINANCIAL PRODUCTS GROUP LTD Financials Equity 0,006 Japan Tokyo Stock Exchange JPY
9832 AUTOBACS SEVEN LTD Consumer Discretionary Equity 0,006 Japan Tokyo Stock Exchange JPY
APEI AMERICAN PUBLIC EDUCATION INC Consumer Discretionary Equity 0,006 United States NASDAQ USD
IPX IPERIONX LTD Materials Equity 0,006 Australia Asx - All Markets AUD
SDIP B SDIPTECH CLASS B Industrials Equity 0,006 Sweden Nasdaq Omx Nordic SEK
4521 KAKEN PHARMACEUTICAL LTD Health Care Equity 0,006 Japan Tokyo Stock Exchange JPY
MIAX MIAMI INTERNATIONAL HOLDINGS INC Financials Equity 0,006 United States New York Stock Exchange Inc. USD
7780 MENICON LTD Health Care Equity 0,006 Japan Tokyo Stock Exchange JPY
PHVS PHARVARIS N V NV Health Care Equity 0,006 Netherlands NASDAQ USD
CLVT CLARIVATE PLC Industrials Equity 0,006 United States New York Stock Exchange Inc. USD
7846 PILOT CORP Industrials Equity 0,006 Japan Tokyo Stock Exchange JPY
CMW CROMWELL PROPERTY GROUP STAPLED UN Real Estate Equity 0,006 Australia Asx - All Markets AUD
DJCO DAILY JOURNAL CORP Information Technology Equity 0,006 United States NASDAQ USD
PRTC PRIORTECH LTD Information Technology Equity 0,006 Israel Tel Aviv Stock Exchange ILS
HFG HELLOFRESH Consumer Staples Equity 0,006 Germany Xetra EUR
VITR VITROLIFE Health Care Equity 0,006 Sweden Nasdaq Omx Nordic SEK
4971 MEC LTD Materials Equity 0,006 Japan Tokyo Stock Exchange JPY
ASAN ASANA INC CLASS A Information Technology Equity 0,006 United States New York Stock Exchange Inc. USD
ING INGHAMS GROUP LTD Consumer Staples Equity 0,006 Australia Asx - All Markets AUD
CPI CPI EUROPE AGE AG Real Estate Equity 0,006 Austria Wiener Boerse Ag EUR
VUL VULCAN ENERGY RESOURCES LTD Materials Equity 0,006 Australia Asx - All Markets AUD
VRRM VERRA MOBILITY CORP CLASS A Industrials Equity 0,006 United States NASDAQ USD"""

page_7 = """9678 KANAMOTO LTD Industrials Equity 0,006 Japan Tokyo Stock Exchange JPY
INBX INHIBRX BIOSCIENCES INC Health Care Equity 0,006 United States NASDAQ USD
IBCP INDEPENDENT BANK CORP Financials Equity 0,006 United States NASDAQ USD
ETL EUTELSAT COMMUNICATIONS SA Communication Equity 0,006 France Nyse Euronext - Euronext Paris EUR
ONT ONTERRIS INC Industrials Equity 0,006 United States New York Stock Exchange Inc. USD
2815 ARIAKE JAPAN LTD Consumer Staples Equity 0,006 Japan Tokyo Stock Exchange JPY
AU8U CAPITALAND CHINA TRUST Real Estate Equity 0,006 Singapore Singapore Exchange SGD
PLEJD PLEJD Industrials Equity 0,006 Sweden AKT SEK
OPM OPMOBILITY Consumer Discretionary Equity 0,006 France Nyse Euronext - Euronext Paris EUR
7730 MANI INC Health Care Equity 0,006 Japan Tokyo Stock Exchange JPY
JANX JANUX THERAPEUTICS INC Health Care Equity 0,006 United States NASDAQ USD
9715 TRANSCOSMOS INC Industrials Equity 0,006 Japan Tokyo Stock Exchange JPY
ATRLJ B ATRIUM LJUNGBERG CLASS B Real Estate Equity 0,006 Sweden Nasdaq Omx Nordic SEK
BLMN BLOOMIN BRANDS INC Consumer Discretionary Equity 0,006 United States NASDAQ USD
RGSI ROCKPOINT GAS STORAGE INC CLASS A Energy Equity 0,006 Canada Toronto Stock Exchange CAD
CFP CANFOR CORP Materials Equity 0,006 Canada Toronto Stock Exchange CAD
DAN DANIELI Industrials Equity 0,006 Italy Borsa Italiana EUR
9418 U-NEXT HOLDINGS LTD Communication Equity 0,006 Japan Tokyo Stock Exchange JPY
CCOI COGENT COMMUNICATIONS HOLDINGS INC Communication Equity 0,006 United States NASDAQ USD
QLTU QUALITAU LTD Information Technology Equity 0,006 Israel Tel Aviv Stock Exchange ILS
AOF ATOSS SOFTWARE Information Technology Equity 0,006 Germany Xetra EUR
3858 JIAXIN INTERNATIONAL RESOURCES INV Materials Equity 0,006 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
OPK OPKO HEALTH INC Health Care Equity 0,006 United States NASDAQ USD
ABB AUSSIE BROADBAND LTD Communication Equity 0,006 Australia Asx - All Markets AUD
SMR STANMORE RESOURCES LTD Materials Equity 0,006 Australia Asx - All Markets AUD
GRPN GROUPON INC Consumer Discretionary Equity 0,006 United States NASDAQ USD
JBIO JADE BIOSCIENCES INC Health Care Equity 0,006 United States NASDAQ USD
LUVE LUVE Industrials Equity 0,006 Italy Borsa Italiana EUR
880 SJM HLDGS LTD Consumer Discretionary Equity 0,006 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
ARJO B ARJO CLASS B Health Care Equity 0,006 Sweden Nasdaq Omx Nordic SEK
1835 TOTETSU KOGYO LTD Industrials Equity 0,006 Japan Tokyo Stock Exchange JPY
XPS XPS PENSIONS GROUP PLC Financials Equity 0,006 United Kingdom London Stock Exchange GBP
WKP WORKSPACE GROUP REIT PLC Real Estate Equity 0,006 United Kingdom London Stock Exchange GBP
7516 KOHNAN SHOJI LTD Consumer Discretionary Equity 0,006 Japan Tokyo Stock Exchange JPY
VTS VITESSE ENERGY INC Energy Equity 0,006 United States New York Stock Exchange Inc. USD
ITM ITM POWER PLC Industrials Equity 0,006 United Kingdom London Stock Exchange GBP
OM OSISKO METALS INC Other Equity 0,006 Canada Toronto Stock Exchange CAD
6750 ELECOM LTD Information Technology Equity 0,006 Japan Tokyo Stock Exchange JPY
6395 TADANO LTD Industrials Equity 0,006 Japan Tokyo Stock Exchange JPY
7458 DAIICHIKOSHO LTD Communication Equity 0,006 Japan Tokyo Stock Exchange JPY
MFEA MFE-MEDIAFOREUROPE NV Communication Equity 0,006 Italy Borsa Italiana EUR
6104 SHIBAURA MACHINE LTD Industrials Equity 0,006 Japan Tokyo Stock Exchange JPY
REG REGIS HEALTHCARE LTD Health Care Equity 0,006 Australia Asx - All Markets AUD
2379 DIP CORP Industrials Equity 0,006 Japan Tokyo Stock Exchange JPY
MTY MTY FOOD GROUP INC Consumer Discretionary Equity 0,006 Canada Toronto Stock Exchange CAD"""

page_8 = """HRTG HERITAGE INSURANCE HOLDINGS INC Financials Equity 0,006 United States New York Stock Exchange Inc. USD
TRST TRUSTCO BANK CORP Financials Equity 0,006 United States NASDAQ USD
8566 RICOH LEASING LTD Financials Equity 0,006 Japan Tokyo Stock Exchange JPY
AMS ADVANCED MEDICAL SOLUTIONS GROUP P Health Care Equity 0,006 United Kingdom London Stock Exchange GBP
MCAP MEDCAP Health Care Equity 0,006 Sweden Nasdaq Omx Nordic SEK
SG SWEETGREEN INC CLASS A Consumer Discretionary Equity 0,006 United States New York Stock Exchange Inc. USD
HMC HMC CAPITAL LTD Financials Equity 0,006 Australia Asx - All Markets AUD
HBX HBX GROUP INTERNATIONAL PLC Consumer Discretionary Equity 0,006 Spain Bolsa De Madrid EUR
SAGA SAGA PLC Financials Equity 0,006 United Kingdom London Stock Exchange GBP
1112 HEALTH AND HAPPINESS (H&H) INTERNA Consumer Staples Equity 0,006 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
SLS SOLARIS RESOURCES INC Materials Equity 0,006 Canada Toronto Stock Exchange CAD
UBI UBISOFT ENTERTAINMENT SA CAT A Communication Equity 0,006 France Nyse Euronext - Euronext Paris EUR
ARU ARAFURA RARE EARTHS LTD Materials Equity 0,006 Australia Asx - All Markets AUD
SION SIONNA THERAPEUTICS INC Health Care Equity 0,006 United States NASDAQ USD
7981 TAKARA STANDARD LTD Industrials Equity 0,006 Japan Tokyo Stock Exchange JPY
J85 CDL HOSPITALITY REIT UNITS Real Estate Equity 0,006 Singapore Singapore Exchange SGD
4694 BML INC Health Care Equity 0,006 Japan Tokyo Stock Exchange JPY
INDI INDIE SEMICONDUCTOR INC CLASS A Information Technology Equity 0,006 United States NASDAQ USD
HOME NEINOR HOMES SA Consumer Discretionary Equity 0,006 Spain Bolsa De Madrid EUR
PHR PHREESIA INC Health Care Equity 0,006 United States New York Stock Exchange Inc. USD
SVI STORAGEVAULT CANADA INC Real Estate Equity 0,006 Canada Toronto Stock Exchange CAD
RKH ROCKHOPPER EXPLORATION PLC Energy Equity 0,006 United Kingdom London Stock Exchange GBP
SFER SALVATORE FERRAGAMO Consumer Discretionary Equity 0,006 Italy Borsa Italiana EUR
FLOC FLOWCO HOLDINGS INC CLASS A Energy Equity 0,006 United States New York Stock Exchange Inc. USD
PAR PAR TECHNOLOGY CORP Information Technology Equity 0,006 United States New York Stock Exchange Inc. USD
ODD ODDITY TECH LTD CLASS A Consumer Staples Equity 0,006 Israel NASDAQ USD
6744 NOHMI BOSAI LTD Information Technology Equity 0,006 Japan Tokyo Stock Exchange JPY
7734 RIKEN KEIKI LTD Information Technology Equity 0,006 Japan Tokyo Stock Exchange JPY
METSB METSA BOARD CLASS B Materials Equity 0,006 Finland Nasdaq Omx Helsinki Ltd. EUR
BFS SAUL CENTERS REIT INC Real Estate Equity 0,006 United States New York Stock Exchange Inc. USD
RAY B RAYSEARCH LABORATORIES CLASS B Health Care Equity 0,006 Sweden Nasdaq Omx Nordic SEK
BETCO BETTER COLLECTIVE Consumer Discretionary Equity 0,006 Sweden Nasdaq Omx Nordic SEK
EQR EQ RESOURCES LTD Materials Equity 0,006 Australia Asx - All Markets AUD
H22 HONG LEONG ASIA LTD Industrials Equity 0,005 Singapore Singapore Exchange SGD
PFSE PFISTERER Industrials Equity 0,005 Germany Xetra EUR
PNL POSTNL NV Industrials Equity 0,005 Netherlands Euronext Amsterdam EUR
RHLD RESOLUTE HOLDINGS MANAGEMENT INC Industrials Equity 0,005 United States New York Stock Exchange Inc. USD
MWH SOLV ENERGY CLASS A INC Industrials Equity 0,005 United States NASDAQ USD
KURA KURA ONCOLOGY INC Health Care Equity 0,005 United States NASDAQ USD
RSGN R&S GROUP HOLDING AG Industrials Equity 0,005 Switzerland SIX Swiss Exchange CHF
EVT EVOTEC Health Care Equity 0,005 Germany Xetra EUR
3148 CREATE SD HOLDINGS LTD Consumer Staples Equity 0,005 Japan Tokyo Stock Exchange JPY
STGW STAGWELL INC CLASS A Communication Equity 0,005 United States NASDAQ USD
8977 HANKYU HANSHIN REIT INC Real Estate Equity 0,005 Japan Tokyo Stock Exchange JPY
IBST IBSTOCK PLC Materials Equity 0,005 United Kingdom London Stock Exchange GBP"""

page_9 = """MRIN Y D MORE INVESTMENTS LTD Financials Equity 0,005 Israel Tel Aviv Stock Exchange ILS
8218 KOMERI LTD Consumer Discretionary Equity 0,005 Japan Tokyo Stock Exchange JPY
ARX ACCELERANT HOLDINGS CLASS A Financials Equity 0,005 United States New York Stock Exchange Inc. USD
IPH IPH LTD Industrials Equity 0,005 Australia Asx - All Markets AUD
GVS GVS Health Care Equity 0,005 Italy Borsa Italiana EUR
CHRT COHORT PLC Industrials Equity 0,005 United Kingdom London Stock Exchange GBP
CLB CORE LABORATORIES INC Energy Equity 0,005 United States New York Stock Exchange Inc. USD
1828 FWD GROUP HOLDINGS LTD Financials Equity 0,005 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
6834 SEIKOH GIKEN LTD Information Technology Equity 0,005 Japan Tokyo Stock Exchange JPY
CCR C C GROUP PLC Consumer Staples Equity 0,005 United Kingdom London Stock Exchange GBP
SHEN SHENANDOAH TELECOMMUNICATIONS Communication Equity 0,005 United States NASDAQ USD
PSG PROSEGUR COMPANIA DE SEGURIDAD SA Industrials Equity 0,005 Spain Bolsa De Madrid EUR
2270 MEGMILK SNOW BRAND LTD Consumer Staples Equity 0,005 Japan Tokyo Stock Exchange JPY
NIQ NIQ GLOBAL INTELLIGENCE PLC Communication Equity 0,005 United States New York Stock Exchange Inc. USD
LNZ LENZING AG Materials Equity 0,005 Austria Wiener Boerse Ag EUR
186A ASTROSCALE HOLDINGS INC Industrials Equity 0,005 Japan Tokyo Stock Exchange JPY
YIT YIT Consumer Discretionary Equity 0,005 Finland Nasdaq Omx Helsinki Ltd. EUR
L1G L1 GROUP LTD Financials Equity 0,005 Australia Asx - All Markets AUD
ICAD ICADE REIT SA Real Estate Equity 0,005 France Nyse Euronext - Euronext Paris EUR
SIBN SI BONE INC Health Care Equity 0,005 United States NASDAQ USD
ENTRA ENTRA Real Estate Equity 0,005 Norway Oslo Bors Asa NOK
NAS NORWEGIAN AIR SHUTTLE Industrials Equity 0,005 Norway Oslo Bors Asa NOK
8923 TOSEI CORPORATION CORP Real Estate Equity 0,005 Japan Tokyo Stock Exchange JPY
6777 SANTEC HOLDINGS CORP Information Technology Equity 0,005 Japan Tokyo Stock Exchange JPY
FOR FORESTAR GROUP INC Real Estate Equity 0,005 United States New York Stock Exchange Inc. USD
GOOS CANADA GOOSE HOLDINGS SUB VOTING I Consumer Discretionary Equity 0,005 Canada Toronto Stock Exchange CAD
7965 ZOJIRUSHI CORP Consumer Discretionary Equity 0,005 Japan Tokyo Stock Exchange JPY
EQPT EQUIPMENTSHARE COM INC CLASS A Industrials Equity 0,005 United States NASDAQ USD
PBB DEUTSCHE PFANDBRIEFBANK AG Financials Equity 0,005 Germany Xetra EUR
NORBT NORBIT Information Technology Equity 0,005 Norway Oslo Bors Asa NOK
AVO MISSION PRODUCE INC Consumer Staples Equity 0,005 United States NASDAQ USD
TR TOOTSIE ROLL INDUSTRIES INC Consumer Staples Equity 0,005 United States New York Stock Exchange Inc. USD
7575 JAPAN LIFELINE LTD Health Care Equity 0,005 Japan Tokyo Stock Exchange JPY
TOKMAN TOKMANNI GROUP CORPORATION Consumer Discretionary Equity 0,005 Finland Nasdaq Omx Helsinki Ltd. EUR
S08 SINGAPORE POST LTD Industrials Equity 0,005 Singapore Singapore Exchange SGD
ISRO ISROTEL LTD Consumer Discretionary Equity 0,005 Israel Tel Aviv Stock Exchange ILS
8219 AOYAMA TRADING LTD Consumer Discretionary Equity 0,005 Japan Tokyo Stock Exchange JPY
NAN NANOSONICS LTD Health Care Equity 0,005 Australia Asx - All Markets AUD
7972 ITOKI CORP Industrials Equity 0,005 Japan Tokyo Stock Exchange JPY
KLS KELSIAN GROUP LTD Industrials Equity 0,005 Australia Asx - All Markets AUD
SANA SANA BIOTECHNOLOGY INC Health Care Equity 0,005 United States NASDAQ USD
HSLV HIGHLANDER SILVER CORP Materials Equity 0,005 Canada Toronto Stock Exchange CAD
IRMD IRADIMED CORP Health Care Equity 0,005 United States NASDAQ USD
BVS BRAVURA SOLUTIONS LTD Information Technology Equity 0,005 Australia Asx - All Markets AUD
ARGO ARGO PROPERTIES NV Real Estate Equity 0,005 Israel Tel Aviv Stock Exchange ILS"""

page_10 = """CCA COGECO COMMUNICATIONS SUBORDINATE Communication Equity 0,005 Canada Toronto Stock Exchange CAD
ERII ENERGY RECOVERY INC Industrials Equity 0,005 United States NASDAQ USD
GRGD GROUPE DYNAMITE SUBORDINATE VOTING Consumer Discretionary Equity 0,005 Canada Toronto Stock Exchange CAD
5482 AICHI STEEL CORP Materials Equity 0,005 Japan Tokyo Stock Exchange JPY
ETD ETHAN ALLEN INTERIORS INC Consumer Discretionary Equity 0,005 United States New York Stock Exchange Inc. USD
BDN BRANDYWINE REALTY TRUST REIT Real Estate Equity 0,005 United States New York Stock Exchange Inc. USD
PBI PITNEY BOWES INC Industrials Equity 0,005 United States New York Stock Exchange Inc. USD
TOY SPIN MASTER SUBORDINATE VOTING COR Consumer Discretionary Equity 0,005 Canada Toronto Stock Exchange CAD
1196 REALORD TECHNOLOGY COMPANY LTD Industrials Equity 0,005 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
7545 NISHIMATSUYA CHAIN LTD Consumer Discretionary Equity 0,005 Japan Tokyo Stock Exchange JPY
HSN HANSEN TECHNOLOGIES LTD Information Technology Equity 0,005 Australia Asx - All Markets AUD
1720 TOKYU CONSTRUCTION LTD Industrials Equity 0,005 Japan Tokyo Stock Exchange JPY
PLNW PLANISWARE SA Information Technology Equity 0,005 France Nyse Euronext - Euronext Paris EUR
RPI RASPBERRY PI HOLDINGS PLC Information Technology Equity 0,005 United Kingdom London Stock Exchange GBP
LXU LSB INDUSTRIES INC Materials Equity 0,005 United States New York Stock Exchange Inc. USD
CKF COLLINS FOODS LTD Consumer Discretionary Equity 0,005 Australia Asx - All Markets AUD
VOYG VOYAGER TECHNOLOGIES INC CLASS A Industrials Equity 0,005 United States New York Stock Exchange Inc. USD
AD ARRAY DIGITAL INFRASTRUCTURE INC Communication Equity 0,005 United States New York Stock Exchange Inc. USD
SBB B SAMHALLSBYGGNADSBOLAGET I NORDEN C Real Estate Equity 0,005 Sweden Nasdaq Omx Nordic SEK
GYG GUZMAN Y GOMEZ LTD Consumer Discretionary Equity 0,005 Australia Asx - All Markets AUD
VITL VITAL FARMS INC Consumer Staples Equity 0,005 United States NASDAQ USD
LINK LINK MOBILITY GROUP HOLDING Information Technology Equity 0,005 Norway Oslo Bors Asa NOK
ANOD B ADDNODE GROUP CLASS B Information Technology Equity 0,005 Sweden Nasdaq Omx Nordic SEK
5423 TOKYO STEEL MANUFACTURING LTD Materials Equity 0,005 Japan Tokyo Stock Exchange JPY
IF BANCA IFIS Financials Equity 0,005 Italy Borsa Italiana EUR
6588 TOSHIBA TEC CORP Information Technology Equity 0,005 Japan Tokyo Stock Exchange JPY
ABXX ABAXX TECHNOLOGIES INC Information Technology Equity 0,005 Canada Toronto Stock Exchange CAD
INFQ INFLEQTION INC Information Technology Equity 0,005 United States New York Stock Exchange Inc. USD
MEDCL MEDINCELL SA Health Care Equity 0,005 France Nyse Euronext - Euronext Paris EUR
TREE LENDINGTREE INC Financials Equity 0,005 United States NASDAQ USD
HNRG HALLADOR ENERGY Utilities Equity 0,005 United States NASDAQ USD
VH2 FRIEDRICH VORWERK GROUP Energy Equity 0,005 Germany Xetra EUR
NB NIOCORP DEVELOPMENTS LTD Materials Equity 0,005 United States NASDAQ USD
ENC ENCE ENERGIA Y CELULOSA SA Materials Equity 0,005 Spain Bolsa De Madrid EUR
ENGH ENGHOUSE SYSTEMS LTD Information Technology Equity 0,005 Canada Toronto Stock Exchange CAD
ICOS INTERCOS Consumer Staples Equity 0,005 Italy Borsa Italiana EUR
LIN LINDIAN RESOURCES LTD Materials Equity 0,005 Australia Asx - All Markets AUD
IEL IDP EDUCATION PTY LTDINARY Consumer Discretionary Equity 0,005 Australia Asx - All Markets AUD
CU6 CLARITY PHARMACEUTICALS LTD Health Care Equity 0,005 Australia Asx - All Markets AUD
MUX MUTARES Financials Equity 0,005 Germany Xetra EUR
MMT METROPOLE TELEVISION SA Communication Equity 0,005 France Nyse Euronext - Euronext Paris EUR
CAT CATAPULT SPORTS LTD Information Technology Equity 0,005 Australia Asx - All Markets AUD
3778 SAKURA INTERNET INC Information Technology Equity 0,005 Japan Tokyo Stock Exchange JPY
BLSR BLUE SQUARE REAL ESTATE LTD Real Estate Equity 0,005 Israel Tel Aviv Stock Exchange ILS
ARVN ARVINAS INC Health Care Equity 0,005 United States NASDAQ USD"""

page_11 = """TBLA TABOOLA.COM LTD Communication Equity 0,005 United States NASDAQ USD
3046 JINS HOLDINGS INC Consumer Discretionary Equity 0,005 Japan Tokyo Stock Exchange JPY
ABR ARBOR REALTY TRUST REIT INC Financials Equity 0,005 United States New York Stock Exchange Inc. USD
ORIC ORIC PHARMACEUTICALS INC Health Care Equity 0,005 United States NASDAQ USD
9075 FUKUYAMA TRANSPORTING LTD Industrials Equity 0,005 Japan Tokyo Stock Exchange JPY
9716 NOMURA LTD Industrials Equity 0,005 Japan Tokyo Stock Exchange JPY
4044 CENTRAL GLASS LTD Industrials Equity 0,005 Japan Tokyo Stock Exchange JPY
DFH DREAM FINDERS HOMES INC CLASS A Consumer Discretionary Equity 0,005 United States New York Stock Exchange Inc. USD
636 KLN LOGISTICS GROUP LTD Industrials Equity 0,005 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
MATAS MATAS Consumer Discretionary Equity 0,005 Denmark Omx Nordic Exchange Copenhagen A/S DKK
OLMA OLEMA PHARMACEUTICALS INC Health Care Equity 0,005 United States NASDAQ USD
4686 JUSTSYSTEMS CORP Information Technology Equity 0,005 Japan Tokyo Stock Exchange JPY
MTU MANITOU BF SA Industrials Equity 0,005 France Nyse Euronext - Euronext Paris EUR
AUTN AUTONEUM HOLDING AG Consumer Discretionary Equity 0,005 Switzerland SIX Swiss Exchange CHF
IIIV I3 VERTICALS INC CLASS A Information Technology Equity 0,005 United States NASDAQ USD
NXI NEXITY SA Real Estate Equity 0,005 France Nyse Euronext - Euronext Paris EUR
VBG B VBG GROUP CLASS B Industrials Equity 0,005 Sweden Nasdaq Omx Nordic SEK
OCI OCI NV Materials Equity 0,005 Netherlands Euronext Amsterdam EUR
GCT G CITY LTD Real Estate Equity 0,005 Israel Tel Aviv Stock Exchange ILS
TDUP THREDUP INC CLASS A Consumer Discretionary Equity 0,005 United States NASDAQ USD
INRM INROM CONSTRUCTION INDUSTRIES LTD Industrials Equity 0,005 Israel Tel Aviv Stock Exchange ILS
ZBIO ZENAS BIOPHARMA INC Health Care Equity 0,005 United States NASDAQ USD
SPRY ARS PHARMACEUTICALS INC Health Care Equity 0,005 United States NASDAQ USD
QTCOM QT GROUP Information Technology Equity 0,005 Finland Nasdaq Omx Helsinki Ltd. EUR
TH TARGET HOSPITALITY CORP Consumer Discretionary Equity 0,005 United States NASDAQ USD
FIP FTAI INFRASTRUCTURE INC Industrials Equity 0,005 United States NASDAQ USD
4569 KYORIN PHARMACEUTICAL LTD Health Care Equity 0,005 Japan Tokyo Stock Exchange JPY
7685 BUYSELL TECHNOLOGIES LTD Consumer Discretionary Equity 0,005 Japan Tokyo Stock Exchange JPY
GDYN GRID DYNAMICS HOLDINGS INC CLASS A Information Technology Equity 0,004 United States NASDAQ USD
WLTH WEALTHFRONT CORP Financials Equity 0,004 United States NASDAQ USD
4547 KISSEI PHARMACEUTICAL LTD Health Care Equity 0,004 Japan Tokyo Stock Exchange JPY
6235 OPTORUN LTD Information Technology Equity 0,004 Japan Tokyo Stock Exchange JPY
WLFC WILLIS LEASE FINANCE CORP Industrials Equity 0,004 United States NASDAQ USD
H02 HAW PAR CORPORATION LTD Health Care Equity 0,004 Singapore Singapore Exchange SGD
KODK EASTMAN KODAK Information Technology Equity 0,004 United States New York Stock Exchange Inc. USD
SKG STORAGE KING GROUP UNITS Real Estate Equity 0,004 Australia Asx - All Markets AUD
FSZ FIERA CAPITAL CORP CLASS A Financials Equity 0,004 Canada Toronto Stock Exchange CAD
ARYT ARYT INDUSTRIES LTD Industrials Equity 0,004 Israel Tel Aviv Stock Exchange ILS
PHAT PHATHOM PHARMACEUTICALS INC Health Care Equity 0,004 United States NASDAQ USD
7943 NICHIHA CORP Industrials Equity 0,004 Japan Tokyo Stock Exchange JPY
SYNSAM SYNSAM Consumer Discretionary Equity 0,004 Sweden Nasdaq Omx Nordic SEK
2678 ASKUL CORP Consumer Discretionary Equity 0,004 Japan Tokyo Stock Exchange JPY
CRSR CORSAIR GAMING INC Information Technology Equity 0,004 United States NASDAQ USD
VGN VIRGIN AUSTRALIA HOLDINGS LTD Industrials Equity 0,004 Australia Asx - All Markets AUD
SOC SABLE OFFSHORE CORP CLASS A Energy Equity 0,004 United States New York Stock Exchange Inc. USD"""

page_12 = """ALTR ALTRI SGPS SA Materials Equity 0,004 Portugal Nyse Euronext - Euronext Lisbon EUR
6807 JAPAN AVIATION ELECTRONICS INDUSTR Information Technology Equity 0,004 Japan Tokyo Stock Exchange JPY
BTBT BIT DIGITAL INC Information Technology Equity 0,004 United States NASDAQ USD
TRTX TPG RE FINANCE TRUST INC Financials Equity 0,004 United States New York Stock Exchange Inc. USD
PSIX POWER SOLUTIONS INTERNATIONAL INC Industrials Equity 0,004 United States NASDAQ USD
ABUS ARBUTUS BIOPHARMA CORP Health Care Equity 0,004 United States NASDAQ USD
2492 INFOMART CORP Industrials Equity 0,004 Japan Tokyo Stock Exchange JPY
BBW BUILD A BEAR WORKSHOP INC Consumer Discretionary Equity 0,004 United States New York Stock Exchange Inc. USD
290A SYNSPECTIVE INC Industrials Equity 0,004 Japan Tokyo Stock Exchange JPY
FWRD FORWARD AIR CORP Industrials Equity 0,004 United States NASDAQ USD
DBV DBV TECHNOLOGIES SA Health Care Equity 0,004 France Nyse Euronext - Euronext Paris EUR
PNR PANTORO GOLD LTD Materials Equity 0,004 Australia Asx - All Markets AUD
6875 MEGACHIPS CORP Information Technology Equity 0,004 Japan Tokyo Stock Exchange JPY
MAF MA FINANCIAL GROUP LTD Financials Equity 0,004 Australia Asx - All Markets AUD
2733 ARATA CORP Consumer Discretionary Equity 0,004 Japan Tokyo Stock Exchange JPY
JBLU JETBLUE AIRWAYS CORP Industrials Equity 0,004 United States NASDAQ USD
PAT PATRIZIA Real Estate Equity 0,004 Germany Xetra EUR
1686 SUNEVISION HOLDINGS LTD Information Technology Equity 0,004 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
4369 TRI CHEMICAL LABORATORIES INC Information Technology Equity 0,004 Japan Tokyo Stock Exchange JPY
AIR AIR NEW ZEALAND LTD Industrials Equity 0,004 New Zealand New Zealand Exchange Ltd NZD
EGL MOTA-ENGIL SGPS SA Industrials Equity 0,004 Portugal Nyse Euronext - Euronext Lisbon EUR
CLARI CLARIANE Health Care Equity 0,004 France Nyse Euronext - Euronext Paris EUR
4553 TOWA PHARMACEUTICAL LTD Health Care Equity 0,004 Japan Tokyo Stock Exchange JPY
GIC GLOBAL INDUSTRIAL Industrials Equity 0,004 United States New York Stock Exchange Inc. USD
HY HYSTER YALE INC CLASS A Industrials Equity 0,004 United States New York Stock Exchange Inc. USD
NUAG NEW PACIFIC METALS CORP Materials Equity 0,004 Canada Toronto Stock Exchange CAD
MEGP ME GROUP INTERNATIONAL PLC Consumer Discretionary Equity 0,004 United Kingdom London Stock Exchange GBP
990 DEEP SOURCE HOLDINGS LTD Industrials Equity 0,004 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
ALGT ALLEGIANT TRAVEL Industrials Equity 0,004 United States NASDAQ USD
PNE3 PNE AG Industrials Equity 0,004 Germany Xetra EUR
4483 JMDC INC Health Care Equity 0,004 Japan Tokyo Stock Exchange JPY
THG THG PLC Consumer Discretionary Equity 0,004 United Kingdom London Stock Exchange GBP
GRND GRINDR INC Communication Equity 0,004 United States New York Stock Exchange Inc. USD
200 MELCO INTERNATIONAL DEVELOPMENT LT Consumer Discretionary Equity 0,004 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
WA1 WA1 RESOURCES LTD Materials Equity 0,004 Australia Asx - All Markets AUD
HIPO HIPPO HOLDINGS INC Financials Equity 0,004 United States New York Stock Exchange Inc. USD
6966 MITSUI HIGH TEC INC Information Technology Equity 0,004 Japan Tokyo Stock Exchange JPY
2157 KOSHIDAKA HOLDINGS LTD Consumer Discretionary Equity 0,004 Japan Tokyo Stock Exchange JPY
2685 AND ST HD LTD Consumer Discretionary Equity 0,004 Japan Tokyo Stock Exchange JPY
3492 MIRARTH REAL EST REIT CORP Real Estate Equity 0,004 Japan Tokyo Stock Exchange JPY
4958 T HASEGAWA LTD Materials Equity 0,004 Japan Tokyo Stock Exchange JPY
1723 NIHON DENGI LTD Industrials Equity 0,004 Japan Tokyo Stock Exchange JPY
5032 ANYCOLOR INC Communication Equity 0,004 Japan Tokyo Stock Exchange JPY
PRL PROPEL HOLDINGS INC Financials Equity 0,004 Canada Toronto Stock Exchange CAD
INH INDUS HOLDING AG Industrials Equity 0,004 Germany Xetra EUR"""

page_13 = """2004 SHOWA SANGYO LTD Consumer Staples Equity 0,004 Japan Tokyo Stock Exchange JPY
KSB3 KSB PREF Industrials Equity 0,004 Germany Xetra EUR
8130 SANGETSU CORP Consumer Discretionary Equity 0,004 Japan Tokyo Stock Exchange JPY
ATROB ASTRONICS CORP CLASS B Industrials Equity 0,004 United States Non-Nms Quotation Service (Nnqs) USD
METC RAMACO RESOURCES INC CLASS A Materials Equity 0,004 United States NASDAQ USD
CAD CAD CASH Cash and/or Derivatives Cash 0,004 Canada -- CAD
7222 NISSAN SHATAI LTD Consumer Discretionary Equity 0,004 Japan Tokyo Stock Exchange JPY
KMTS KESTRA MEDICAL TECHNOLOGIES LTD Health Care Equity 0,004 United States NASDAQ USD
TUA TUAS LTD Communication Equity 0,004 Australia Asx - All Markets AUD
AO. AO WORLD Consumer Discretionary Equity 0,004 United Kingdom London Stock Exchange GBP
RUM RUM GROUP INC CLASS A Communication Equity 0,004 United States NASDAQ USD
3880 DAIO PAPER CORP Materials Equity 0,004 Japan Tokyo Stock Exchange JPY
HYQ HYPOPORT N Financials Equity 0,004 Germany Xetra EUR
5715 FURUKAWA LTD Industrials Equity 0,004 Japan Tokyo Stock Exchange JPY
4107 ISE CHEMICALS CORP Materials Equity 0,004 Japan Tokyo Stock Exchange JPY
464A QPS HOLDINGS INC Industrials Equity 0,004 Japan Tokyo Stock Exchange JPY
ALTA ALTAREA Real Estate Equity 0,004 France Nyse Euronext - Euronext Paris EUR
ZV ZIGNAGO VETRO Materials Equity 0,004 Italy Borsa Italiana EUR
REG1V REVENIO GROUP Health Care Equity 0,004 Finland Nasdaq Omx Helsinki Ltd. EUR
VETN VETROPACK HOLDING SA Materials Equity 0,004 Switzerland SIX Swiss Exchange CHF
YSN SECUNET SECURITY AG Information Technology Equity 0,004 Germany Xetra EUR
NRGV ENERGY VAULT HOLDINGS INC Industrials Equity 0,004 United States New York Stock Exchange Inc. USD
WLN WORLDLINE SA Financials Equity 0,004 France Nyse Euronext - Euronext Paris EUR
9936 OHSHO FOOD SERVICE CORP Consumer Discretionary Equity 0,004 Japan Tokyo Stock Exchange JPY
4189 KH NEOCHEM LTD Materials Equity 0,004 Japan Tokyo Stock Exchange JPY
YF8 YANGZIJIANG FINANCIAL HOLDING LTD Financials Equity 0,004 Singapore Singapore Exchange SGD
5253 COVER CORP Communication Equity 0,004 Japan Tokyo Stock Exchange JPY
7599 IDOM INC Consumer Discretionary Equity 0,004 Japan Tokyo Stock Exchange JPY
7552 HAPPINET CORP Consumer Discretionary Equity 0,004 Japan Tokyo Stock Exchange JPY
7744 NORITSU KOKI LTD Consumer Discretionary Equity 0,003 Japan Tokyo Stock Exchange JPY
APOTEA APOTEA Consumer Staples Equity 0,003 Sweden Nasdaq Omx Nordic SEK
GLJ GRENKE N AG Financials Equity 0,003 Germany Xetra EUR
GFT GFT TECHNOLOGIES Information Technology Equity 0,003 Germany Xetra EUR
SLDP SOLID POWER INC CLASS A Consumer Discretionary Equity 0,003 United States NASDAQ USD
AIV APARTMENT INVESTMENT AND MANAGEMEN Real Estate Equity 0,003 United States New York Stock Exchange Inc. USD
4471 SANYO CHEMICAL INDUSTRIES LTD Materials Equity 0,003 Japan Tokyo Stock Exchange JPY
4914 TAKASAGO INTERNATIONAL CORP Materials Equity 0,003 Japan Tokyo Stock Exchange JPY
6330 TOYO ENGINEERING CORP Industrials Equity 0,003 Japan Tokyo Stock Exchange JPY
3222 UNITED SUPER MARKETS HOLDINGS INC Consumer Staples Equity 0,003 Japan Tokyo Stock Exchange JPY
STG SCANDINAVIAN TOBACCO GROUP Consumer Staples Equity 0,003 Denmark Omx Nordic Exchange Copenhagen A/S DKK
4776 CYBOZU INC Information Technology Equity 0,003 Japan Tokyo Stock Exchange JPY
ASPI ASP ISOTOPES INC Materials Equity 0,003 United States NASDAQ USD
2695 KURA SUSHI INC Consumer Discretionary Equity 0,003 Japan Tokyo Stock Exchange JPY
ANTIN ANTIN INFRASTRUCTURE PARTNERS Financials Equity 0,003 France Nyse Euronext - Euronext Paris EUR
4549 EIKEN CHEMICAL LTD Health Care Equity 0,003 Japan Tokyo Stock Exchange JPY"""

page_14 = """AEVA AEVA TECHNOLOGIES INC Information Technology Equity 0,003 United States NASDAQ USD
BTQ BTQ TECHNOLOGIES CORP Information Technology Equity 0,003 Canada NLB CAD
SERV SERVE ROBOTICS INC Consumer Discretionary Equity 0,003 United States NASDAQ USD
ZEHN ZEHNDER GROUP AG Industrials Equity 0,003 Switzerland SIX Swiss Exchange CHF
BWO BW OFFSHORE LTD Energy Equity 0,003 Norway Oslo Bors Asa NOK
SBGI SINCLAIR INC CLASS A Communication Equity 0,003 United States NASDAQ USD
8584 JACCS LTD Financials Equity 0,003 Japan Tokyo Stock Exchange JPY
3993 PKSHA TECHNOLOGY INC Information Technology Equity 0,003 Japan Tokyo Stock Exchange JPY
8074 YUASA LTD Industrials Equity 0,003 Japan Tokyo Stock Exchange JPY
9722 FUJITA KANKO INC Consumer Discretionary Equity 0,003 Japan Tokyo Stock Exchange JPY
SATL SATELLOGIC INC CLASS A Industrials Equity 0,003 United States NASDAQ USD
4928 NOEVIR HOLDINGS LTD Consumer Staples Equity 0,003 Japan Tokyo Stock Exchange JPY
8585 ORIENT CORP Financials Equity 0,003 Japan Tokyo Stock Exchange JPY
VLA VALNEVA Health Care Equity 0,003 France Nyse Euronext - Euronext Paris EUR
PEUG PEUGEOT INVEST SA Financials Equity 0,003 France Nyse Euronext - Euronext Paris EUR
BRE BRAZILIAN RARE EARTHS LTD Materials Equity 0,003 Australia Asx - All Markets AUD
5310 TOYO TANSO LTD Industrials Equity 0,003 Japan Tokyo Stock Exchange JPY
NWL NEWPRINCES Consumer Staples Equity 0,003 Italy Borsa Italiana EUR
FILA FILA Industrials Equity 0,003 Italy Borsa Italiana EUR
4592 SANBIO LTD Health Care Equity 0,003 Japan Tokyo Stock Exchange JPY
4996 KUMIAI CHEMICAL INDUSTRY LTD Materials Equity 0,003 Japan Tokyo Stock Exchange JPY
9090 AZ-COM MARUWA HOLDINGS INC Industrials Equity 0,003 Japan Tokyo Stock Exchange JPY
ELIOR ELIOR GROUP SA Consumer Discretionary Equity 0,003 France Nyse Euronext - Euronext Paris EUR
4180 APPIER GROUP INC Information Technology Equity 0,003 Japan Tokyo Stock Exchange JPY
DNUT KRISPY KREME INC Consumer Discretionary Equity 0,003 United States NASDAQ USD
LILA LIBERTY LATIN AMERICA LTD CLASS A Communication Equity 0,003 United States NASDAQ USD
7412 ATOM CORP Consumer Discretionary Equity 0,003 Japan Tokyo Stock Exchange JPY
RR RICHTECH ROBOTICS INC CLASS B Industrials Equity 0,003 United States NASDAQ USD
GDRX GOODRX HOLDINGS INC CLASS A Health Care Equity 0,003 United States NASDAQ USD
2232 CRYSTAL INTERNATIONAL GROUP LTD Consumer Discretionary Equity 0,003 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
ULCC FRONTIER GROUP HOLDINGS INC Industrials Equity 0,003 United States NASDAQ USD
PFBC PREFERRED BANK Financials Equity 0,003 United States NASDAQ USD
CRON CRONOS GROUP INC Health Care Equity 0,003 Canada Toronto Stock Exchange CAD
4819 DIGITAL GARAGE INC Information Technology Equity 0,003 Japan Tokyo Stock Exchange JPY
NRDS NERDWALLET INC CLASS A Financials Equity 0,003 United States NASDAQ USD
933 VIVA GOODS LTD Consumer Discretionary Equity 0,003 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
ARHS ARHAUS INC CLASS A Consumer Discretionary Equity 0,003 United States NASDAQ USD
9166 GENDA INC Consumer Discretionary Equity 0,003 Japan Tokyo Stock Exchange JPY
AGNT AGNT INC Real Estate Equity 0,003 United States NASDAQ USD
FNAC FNAC DARTY SA Consumer Discretionary Equity 0,003 France Nyse Euronext - Euronext Paris EUR
TPW TEMPLE & WEBSTER GROUP LTD Consumer Discretionary Equity 0,003 Australia Asx - All Markets AUD
COR CORTICEIRA AMORIM SA Materials Equity 0,003 Portugal Nyse Euronext - Euronext Lisbon EUR
A4N ALPHA HPA LTD Materials Equity 0,003 Australia Asx - All Markets AUD
KRUS KURA SUSHI USA INC Consumer Discretionary Equity 0,003 United States NASDAQ USD
GOGO GOGO INC Communication Equity 0,003 United States NASDAQ USD"""

page_15 = """9039 SAKAI MOVING SERVICE LTD Industrials Equity 0,003 Japan Tokyo Stock Exchange JPY
7611 HIDAY HIDAKA CORP Consumer Discretionary Equity 0,003 Japan Tokyo Stock Exchange JPY
CMPX COMPASS THERAPEUTICS Health Care Equity 0,002 United States NASDAQ USD
EMBC EMBECTA CORP Health Care Equity 0,002 United States NASDAQ USD
5192 MITSUBOSHI BELTING LTD Industrials Equity 0,002 Japan Tokyo Stock Exchange JPY
2767 TSUBURAYA FIELDS HOLDINGS INC Consumer Discretionary Equity 0,002 Japan Tokyo Stock Exchange JPY
1419 TAMA HOME LTD Consumer Discretionary Equity 0,002 Japan Tokyo Stock Exchange JPY
4985 EARTH CORP Consumer Staples Equity 0,002 Japan Tokyo Stock Exchange JPY
1691 JS GLOBAL LIFESTYLE LTD Consumer Discretionary Equity 0,002 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
WOOF PETCO HEALTH AND WELLNESS COMPANY Consumer Discretionary Equity 0,002 United States NASDAQ USD
HTZ HERTZ GLOBAL HLDGS INC Industrials Equity 0,002 United States NASDAQ USD
MFEB MFE B NV Communication Equity 0,002 Italy Borsa Italiana EUR
4919 MILBON LTD Consumer Staples Equity 0,002 Japan Tokyo Stock Exchange JPY
BYS BYSTRONIC AG Industrials Equity 0,002 Switzerland SIX Swiss Exchange CHF
8194 LIFE CORP Consumer Staples Equity 0,002 Japan Tokyo Stock Exchange JPY
DNA GINKGO BIOWORKS HOLDINGS INC CLASS Health Care Equity 0,002 United States New York Stock Exchange Inc. USD
MARR MARR Consumer Staples Equity 0,002 Italy Borsa Italiana EUR
9974 BELC LTD Consumer Staples Equity 0,002 Japan Tokyo Stock Exchange JPY
6080 M&A CAPITAL PARTNERS LTD Financials Equity 0,002 Japan Tokyo Stock Exchange JPY
APM ANDEAN PRECIOUS METALS CORP Materials Equity 0,002 Canada Toronto Stock Exchange CAD
7595 ARGO GRAPHICS INC Information Technology Equity 0,002 Japan Tokyo Stock Exchange JPY
SSTK SHUTTERSTOCK INC Communication Equity 0,002 United States New York Stock Exchange Inc. USD
2342 COMBA TELECOM SYSTEMS LTD Information Technology Equity 0,002 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
SBET SHARPLINK INC Consumer Discretionary Equity 0,002 United States NASDAQ USD
DLAS DELEK PROPERTY DEVELOPMENT Energy Equity 0,002 Israel Tel Aviv Stock Exchange ILS
MVST MICROVAST HOLDINGS INC Industrials Equity 0,002 United States NASDAQ USD
CORE B COREM PROPERTY GROUP CLASS B Real Estate Equity 0,002 Sweden Nasdaq Omx Nordic SEK
7917 ZACROS CORP Materials Equity 0,002 Japan Tokyo Stock Exchange JPY
9010 FUJI KYUKO LTD Consumer Discretionary Equity 0,002 Japan Tokyo Stock Exchange JPY
9672 TOKYOTOKEIBA LTD Consumer Discretionary Equity 0,001 Japan Tokyo Stock Exchange JPY
5122 OKAMOTO INDUSTRIES INC Materials Equity 0,001 Japan Tokyo Stock Exchange JPY
TLRY TILRAY BRANDS INC Health Care Equity 0,001 United States NASDAQ USD
2281 PRIMA MEAT PACKERS LTD Consumer Staples Equity 0,001 Japan Tokyo Stock Exchange JPY
7630 ICHIBANYA LTD Consumer Discretionary Equity 0,001 Japan Tokyo Stock Exchange JPY
DEFI DEFI TECHNOLOGIES INC Financials Equity 0,001 Canada NLB CAD
TOM2 TOMTOM NV Information Technology Equity 0,001 Netherlands Euronext Amsterdam EUR
2292 S FOODS INC Consumer Staples Equity 0,001 Japan Tokyo Stock Exchange JPY
2220 KAMEDA SEIKA LTD Consumer Staples Equity 0,001 Japan Tokyo Stock Exchange JPY
PRSR THE PRS REIT PLC Real Estate Equity 0,001 United Kingdom London Stock Exchange GBP
CTD CORPORATE TRAVEL MANAGEMENT LTD Consumer Discretionary Equity 0,000 Australia Asx - All Markets AUD
AKE AKERO THERAPEUTICS CVR Health Care Equity 0,000 United States NASDAQ USD
2105 LAEKNA INC Health Care Equity 0,000 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
-- 89 BIO INC Health Care Equity 0,000 United States NO MARKET (E.G. UNLISTED) USD
AKT AKITA DRILLING LTD Energy Equity 0,000 Canada Toronto Stock Exchange CAD
NZD NZD CASH Cash and/or Derivatives Cash 0,000 New Zealand -- NZD"""

page_16 = """ADRO CHINOOK THERAPEUTICS INC Health Care Equity 0,000 United States NO MARKET (E.G. UNLISTED) USD
-- ALURION RESOURCES LTD Other Equity 0,000 Australia Asx - All Markets AUD
ORNP ORION RETAIL PROPERTIES LTD Real Estate Equity 0,000 Israel Tel Aviv Stock Exchange ILS
FFX FIREFINCH LTD Materials Equity 0,000 Australia Asx - All Markets AUD
GVYM GAV-YAM LAND CORP LTD Real Estate Equity 0,000 Israel Tel Aviv Stock Exchange ILS
DCH DAUCH CORP Consumer Discretionary Equity 0,000 United States London Stock Exchange GBP
OPCE OPC ENERGY LTD Utilities Equity 0,000 Israel Tel Aviv Stock Exchange ILS
ENLT ENLIGHT RENEWABLE ENERGY LTD Utilities Equity 0,000 Israel Tel Aviv Stock Exchange ILS
SGD SGD/USD Cash and/or Derivatives FX 0,000 United States -- USD
NOK NOK/USD Cash and/or Derivatives FX 0,000 United States -- USD
NZD NZD/USD Cash and/or Derivatives FX 0,000 United States -- USD
HKD HKD/USD Cash and/or Derivatives FX 0,000 United States -- USD
-- OMNIAB INC $12.50 VESTING Prvt Health Care Equity 0,000 United States NO MARKET (E.G. UNLISTED) USD
-- OMNIAB INC $15.00 VESTING Prvt Health Care Equity 0,000 United States NO MARKET (E.G. UNLISTED) USD
WBD WEBUILD Industrials Equity 0,000 Italy Borsa Italiana EUR
SXTU6 STOXX EUR SMALL200 SEP 26 Cash and/or Derivatives Futures 0,000 European Union Eurex Deutschland EUR
RTYU6 RUSSELL 2000 EMINI CME SEP 26 Cash and/or Derivatives Futures 0,000 -- Chicago Mercantile Exchange USD
DKK DKK/USD Cash and/or Derivatives FX 0,000 United States -- USD
ILS ILS/USD Cash and/or Derivatives FX 0,000 United States -- USD
CHF CHF/USD Cash and/or Derivatives FX 0,000 United States -- USD
ILS ILS/USD Cash and/or Derivatives FX 0,000 United States -- USD
SEK SEK/USD Cash and/or Derivatives FX 0,000 United States -- USD
AUD AUD/USD Cash and/or Derivatives FX 0,000 United States -- USD
HKD HKD CASH Cash and/or Derivatives Cash 0,000 Hong Kong -- HKD
GBP GBP/USD Cash and/or Derivatives FX 0,000 United States -- USD
EUR EUR/USD Cash and/or Derivatives FX 0,000 United States -- USD
JPY JPY/USD Cash and/or Derivatives FX 0,000 United States -- USD
SGD SGD CASH Cash and/or Derivatives Cash 0,000 Singapore -- SGD
GBP GBP CASH Cash and/or Derivatives Cash -0,001 United Kingdom -- GBP
NOK NOK CASH Cash and/or Derivatives Cash -0,001 Norway -- NOK
DKK DKK CASH Cash and/or Derivatives Cash -0,002 Denmark -- DKK
CHF CHF CASH Cash and/or Derivatives Cash -0,002 Switzerland -- CHF
SEK SEK CASH Cash and/or Derivatives Cash -0,004 Sweden -- SEK
JPY JPY CASH Cash and/or Derivatives Cash -0,006 Japan -- JPY
ILS ILS CASH Cash and/or Derivatives Cash -0,007 Israel -- ILS"""

pages_1_to_16 = [
    page_1, page_2, page_3, page_4, page_5, page_6, page_7, page_8,
    page_9, page_10, page_11, page_12, page_13, page_14, page_15, page_16
]

# Let's count how many lines are in pages 1 to 16
total_p1_16_lines = 0
for i, p in enumerate(pages_1_to_16, 1):
    l = [line for line in p.strip().split('\n') if line.strip()]
    print(f"Page {i}: {len(l)} lines")
    total_p1_16_lines += len(l)

print(f"Total lines in pages 1-16: {total_p1_16_lines}")
