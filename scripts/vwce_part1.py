part1_raw = """
NVDA NVIDIA Corp 4.4503% Technology US
AAPL Apple Inc 3.9824% Technology US
MSFT Microsoft Corp 2.6398% Technology US
AMZN Amazon.com Inc 2.1985% Consumer Discretionary US
GOOGL Alphabet Inc 1.9931% Technology US
2330 Taiwan Semiconductor Manufacturing Co Ltd 1.7512% Technology TW
AVGO Broadcom Inc 1.6712% Technology US
GOOG Alphabet Inc 1.596% Technology US
MU Micron Technology Inc 1.2392% Technology US
META Meta Platforms Inc 1.1776% Technology US
TSLA Tesla Inc 1.1671% Consumer Discretionary US
005930 Samsung Electronics Co Ltd 0.9545% Telecommunications KR
LLY Eli Lilly & Co 0.914% Health Care US
000660 SK hynix Inc 0.9053% Technology KR
AMD Advanced Micro Devices Inc 0.8989% Technology US
ASML ASML Holding NV 0.7285% Technology NL
BRK/B Berkshire Hathaway Inc 0.713% Financials US
JPM JPMorgan Chase & Co 0.6542% Financials US
INTC Intel Corp 0.5851% Technology US
JNJ Johnson & Johnson 0.5788% Health Care US
AMAT Applied Materials Inc 0.5497% Technology US
V Visa Inc 0.5437% Industrials US
XOM ExxonMobil Holdings Corp 0.5432% Energy US
LRCX Lam Research Corp 0.5191% Technology US
WMT Walmart Inc 0.4701% Consumer Discretionary US
CAT Caterpillar Inc 0.4646% Industrials US
CSCO Cisco Systems Inc 0.4445% Telecommunications US
ABBV AbbVie Inc 0.4259% Health Care US
COST Costco Wholesale Corp 0.3954% Consumer Discretionary US
MA Mastercard Inc 0.3939% Industrials US
KLAC KLA Corp 0.3794% Technology US
GE General Electric Co 0.3696% Industrials US
UNH UnitedHealth Group Inc 0.3587% Health Care US
BAC Bank of America Corp 0.3557% Financials US
HD Home Depot Inc/The 0.3362% Consumer Discretionary US
700 Tencent Holdings Ltd 0.3288% Technology HK
PG Procter & Gamble Co/The 0.327% Consumer Staples US
SNDK Sandisk Corp 0.3151% Technology US
HSBA HSBC Holdings PLC 0.3104% Financials GB
MRK Merck & Co Inc 0.3044% Health Care US
GEV GE Vernova Inc 0.3038% Industrials US
KO Coca-Cola Co/The 0.2979% Consumer Staples US
CVX Chevron Corp 0.2922% Energy US
NFLX Netflix Inc 0.287% Consumer Discretionary US
NOVN Novartis AG 0.2827% Health Care CH
ROP Roche Holding AG 0.2719% Health Care CH
RY Royal Bank of Canada 0.2698% Financials CA
AZN AstraZeneca PLC 0.2686% Health Care GB
PM Philip Morris International Inc 0.2677% Consumer Staples US
PANW Palo Alto Networks Inc 0.2605% Technology US
TXN Texas Instruments Inc 0.2584% Technology US
NESN Nestle SA 0.2518% Consumer Staples CH
IBM International Business Machines Corp 0.2506% Technology US
MRVL Marvell Technology Inc 0.2464% Technology US
PLTR Palantir Technologies Inc 0.244% Technology US
RTX RTX Corp 0.2416% Industrials US
WFC Wells Fargo & Co 0.2412% Financials US
ORCL Oracle Corp 0.2381% Technology US
LIN Linde PLC 0.2285% Basic Materials US
SIE Siemens AG 0.2235% Industrials DE
MS Morgan Stanley 0.2231% Financials US
GS Goldman Sachs Group Inc/The 0.2209% Financials US
9988 Alibaba Group Holding Ltd 0.2096% Consumer Discretionary HK
SHEL Shell PLC 0.2078% Energy GB
WDC Western Digital Corp 0.2077% Technology US
8306 Mitsubishi UFJ Financial Group Inc 0.2077% Financials JP
APH Amphenol Corp 0.206% Technology US
8035 Tokyo Electron Ltd 0.2054% Technology JP
STX Seagate Technology Holdings PLC 0.2039% Technology US
BHP BHP Group Ltd 0.1969% Basic Materials AU
TD Toronto-Dominion Bank/The 0.1945% Financials CA
SAN Banco Santander SA 0.1941% Financials ES
GLW Corning Inc 0.1892% Technology US
QCOM QUALCOMM Inc 0.1871% Technology US
AMGN Amgen Inc 0.1871% Health Care US
ADI Analog Devices Inc 0.1861% Technology US
C Citigroup Inc 0.1843% Financials US
2454 MediaTek Inc 0.1838% Technology TW
CBA Commonwealth Bank of Australia 0.1819% Financials AU
CRWD Crowdstrike Holdings Inc 0.1813% Technology US
TMO Thermo Fisher Scientific Inc 0.18% Health Care US
MCD McDonald's Corp 0.1798% Consumer Discretionary US
285A Kioxia Holdings Corp 0.1768% Technology JP
PEP PepsiCo Inc 0.1761% Consumer Staples US
NEE NextEra Energy Inc 0.1756% Utilities US
AXP American Express Co 0.1744% Industrials US
VZ Verizon Communications Inc 0.1706% Telecommunications US
SU Schneider Electric SE 0.1699% Industrials FR
ALV Allianz SE 0.1688% Financials DE
7203 Toyota Motor Corp 0.1681% Consumer Discretionary JP
ANET Arista Networks Inc 0.1677% Telecommunications US
DIS Walt Disney Co/The 0.1643% Consumer Discretionary US
ABBN ABB Ltd 0.1618% Industrials CH
ETN Eaton Corp PLC 0.1605% Industrials US
TJX TJX Cos Inc/The 0.1592% Consumer Discretionary US
BRK/A Berkshire Hathaway Inc 0.1584% Financials US
BA Boeing Co/The 0.1566% Industrials US
IBE Iberdrola SA 0.1563% Utilities ES
RR/ Rolls-Royce Holdings PLC 0.1539% Industrials GB
UNP Union Pacific Corp 0.1519% Industrials US
GILD Gilead Sciences Inc 0.1516% Health Care US
ABT Abbott Laboratories 0.1506% Health Care US
WELL Welltower Inc 0.1501% Real Estate US
SAP SAP SE 0.1494% Technology DE
DE Deere & Co 0.1473% Industrials US
NOVOB Novo Nordisk A/S 0.1473% Health Care DK
UBSG UBS Group AG 0.1465% Financials CH
SCHW Charles Schwab Corp/The 0.1456% Financials US
BLK BlackRock Funding Inc/DE 0.1402% Financials US
6857 Advantest Corp 0.1391% Technology JP
TTE TotalEnergies SE 0.1382% Energy FR
8316 Sumitomo Mitsui Financial Group Inc 0.1373% Financials JP
BBVA Banco Bilbao Vizcaya Argentaria SA 0.1366% Financials ES
ENR Siemens Energy AG 0.1359% Energy DE
UBER Uber Technologies Inc 0.1352% Consumer Discretionary US
T AT&T Inc 0.1348% Telecommunications US
BKNG Booking Holdings Inc 0.1335% Consumer Discretionary US
9984 SoftBank Group Corp 0.133% Telecommunications JP
ISRG Intuitive Surgical Inc 0.133% Health Care US
SAF Safran SA 0.1316% Industrials FR
MC LVMH Moet Hennessy Louis Vuitton SE 0.1308% Consumer Discretionary FR
PFE Pfizer Inc 0.1304% Health Care US
UCG UniCredit SpA 0.1275% Financials IT
SHOP Shopify Inc 0.1258% Technology CA
AIR Airbus SE 0.1255% Industrials FR
DELL Dell Technologies Inc 0.1252% Technology US
CRM Salesforce Inc 0.1237% Technology US
PGR Progressive Corp/The 0.1233% Financials US
CVS CVS Health Corp 0.1226% Consumer Staples US
COP ConocoPhillips 0.1224% Energy US
VRT Vertiv Holdings Co 0.1223% Technology US
BATS British American Tobacco PLC 0.1215% Consumer Staples GB
PLD Prologis Inc 0.12% Real Estate US
VRTX Vertex Pharmaceuticals Inc 0.1197% Health Care US
LOW Lowe's Cos Inc 0.1197% Consumer Discretionary US
BMO Bank of Montreal 0.1194% Financials CA
ULVR Unilever PLC 0.1188% Consumer Staples GB
PH Parker-Hannifin Corp 0.118% Industrials US
CFR Cie Financiere Richemont SA 0.1179% Consumer Discretionary CH
APP AppLovin Corp 0.1179% Technology US
IFX Infineon Technologies AG 0.1177% Technology DE
COF Capital One Financial Corp 0.1171% Industrials US
SPGI S&P Global Inc 0.1171% Financials US
6501 Hitachi Ltd 0.1152% Industrials JP
6758 Sony Group Corp 0.1147% Consumer Discretionary JP
6981 Murata Manufacturing Co Ltd 0.1141% Technology JP
MO Altria Group Inc 0.1139% Consumer Staples US
BMY Bristol-Myers Squibb Co 0.1128% Health Care US
DHR Danaher Corp 0.1125% Health Care US
SBUX Starbucks Corp 0.1114% Consumer Discretionary US
BNP BNP Paribas SA 0.1109% Financials FR
ENB Enbridge Inc 0.1105% Energy CA
CB Chubb Ltd 0.1104% Financials US
8411 Mizuho Financial Group Inc 0.1085% Financials JP
2308 Delta Electronics Inc 0.108% Industrials TW
TT Trane Technologies PLC 0.1056% Industrials US
005935 Samsung Electronics Co Ltd 0.1053% Telecommunications KR
SYK Stryker Corp 0.1042% Health Care US
ZURN Zurich Insurance Group AG 0.1042% Financials CH
CM Canadian Imperial Bank of Commerce 0.1014% Financials CA
HWM Howmet Aerospace Inc 0.1013% Industrials US
PWR Quanta Services Inc 0.101% Industrials US
SO Southern Co/The 0.1007% Utilities US
BNS Bank of Nova Scotia/The 0.1003% Financials CA
ISP Intesa Sanpaolo SpA 0.0999% Financials IT
NOW ServiceNow Inc 0.0995% Technology US
CDNS Cadence Design Systems Inc 0.0993% Technology US
LMT Lockheed Martin Corp 0.0988% Industrials US
GSK GSK PLC 0.0983% Health Care GB
EQIX Equinix Inc 0.0975% Real Estate US
NEM Newmont Corp 0.0971% Basic Materials US
HDFCB HDFC Bank Ltd 0.0964% Financials IN
MDT Medtronic PLC 0.0952% Health Care US
402340 SK Square Co Ltd 0.0951% Technology KR
DBS DBS Group Holdings Ltd 0.0947% Financials SG
2317 Hon Hai Precision Industry Co Ltd 0.0945% Technology TW
BP/ BP PLC 0.0942% Energy GB
DUK Duke Energy Corp 0.0931% Utilities US
CMI Cummins Inc 0.0926% Industrials US
BNY Bank of New York Mellon Corp/The 0.0926% Financials US
RIO Rio Tinto PLC 0.0925% Basic Materials GB
FTNT Fortinet Inc 0.0913% Technology US
PNC PNC Financial Services Group Inc/The 0.0906% Financials US
6098 Recruit Holdings Co Ltd 0.0905% Industrials JP
RELIANCE Reliance Industries Ltd 0.0905% Energy IN
1299 AIA Group Ltd 0.0904% Financials HK
MCK McKesson Corp 0.0896% Consumer Staples US
939 China Construction Bank Corp 0.089% Financials HK
SAN Sanofi SA 0.0886% Health Care FR
DTE Deutsche Telekom AG 0.088% Telecommunications DE
FCX Freeport-McMoRan Inc 0.0877% Basic Materials US
USB US Bancorp 0.0875% Financials US
INGA ING Groep NV 0.0875% Financials NL
BARC Barclays PLC 0.0872% Financials GB
WMB Williams Cos Inc/The 0.0867% Energy US
JCI Johnson Controls International plc 0.0861% Industrials US
GD General Dynamics Corp 0.0861% Industrials US
CMCSA Comcast Corp 0.0854% Telecommunications US
ADP Automatic Data Processing Inc 0.0852% Industrials US
ENEL Enel SpA 0.0852% Utilities IT
BN Brookfield Corp 0.0847% Financials CA
BX Blackstone Inc 0.0847% Financials US
6861 Keyence Corp 0.0846% Industrials JP
CSX CSX Corp 0.0831% Industrials US
8058 Mitsubishi Corp 0.0829% Industrials JP
9983 Fast Retailing Co Ltd 0.0828% Consumer Discretionary JP
LLOY Lloyds Banking Group PLC 0.0821% Financials GB
SPCX Space Exploration Technologies Corp 0.0814% Telecommunications US
SNOW Snowflake Inc 0.0814% Technology US
SNPS Synopsys Inc 0.0814% Technology US
MMM 3M Co 0.0808% Industrials US
ADBE Adobe Inc 0.0805% Technology US
WM Waste Management Inc 0.0794% Utilities US
CNQ Canadian Natural Resources Ltd 0.0793% Energy CA
DDOG Datadog Inc 0.0785% Technology US
WBC Westpac Banking Corp 0.0782% Financials AU
MAR Marriott International Inc/MD 0.078% Consumer Discretionary US
SHW Sherwin-Williams Co/The 0.077% Industrials US
MRSH Marsh & McLennan Cos Inc 0.0769% Financials US
NG/ National Grid PLC 0.0764% Utilities GB
CME CME Group Inc 0.0764% Financials US
009150 Samsung Electro-Mechanics Co Ltd 0.0763% Technology KR
TMUS T-Mobile US Inc 0.0762% Telecommunications US
UPS United Parcel Service Inc 0.0762% Industrials US
RCL Royal Caribbean Cruises Ltd 0.0757% Consumer Discretionary US
CP Canadian Pacific Kansas City Ltd 0.0756% Industrials CA
EMR Emerson Electric Co 0.0754% Industrials US
AEM Agnico Eagle Mines Ltd 0.0753% Basic Materials CA
MELI MercadoLibre Inc 0.0752% Consumer Discretionary US
8766 Tokio Marine Holdings Inc 0.0751% Financials JP
NAB National Australia Bank Ltd 0.0751% Financials AU
4063 Shin-Etsu Chemical Co Ltd 0.0751% Basic Materials JP
CS AXA SA 0.0749% Financials FR
TER Teradyne Inc 0.0744% Technology US
AMT American Tower Corp 0.0742% Real Estate US
NET Cloudflare Inc 0.0741% Technology US
CEG Constellation Energy Corp 0.0739% Utilities US
VLO Valero Energy Corp 0.0738% Energy US
ABI Anheuser-Busch InBev SA/NV 0.0737% Consumer Staples BE
ORLY O'Reilly Automotive Inc 0.0733% Consumer Discretionary US
MPC Marathon Petroleum Corp 0.0725% Energy US
ACN Accenture PLC 0.0724% Industrials US
HOOD Robinhood Markets Inc 0.0723% Financials US
ICICIBC ICICI Bank Ltd 0.0717% Financials IN
MDLZ Mondelez International Inc 0.0713% Consumer Staples US
ANZ ANZ Group Holdings Ltd 0.0712% Financials AU
ELV Elevance Health Inc 0.0711% Health Care US
HLT Hilton Worldwide Holdings Inc 0.0707% Consumer Discretionary US
TDG TransDigm Group Inc 0.0704% Industrials US
MUV2 Muenchener Rueckversicherungs-Gesellschaft AG in Muenchen 0.0703% Financials DE
CL Colgate-Palmolive Co 0.0702% Consumer Staples US
8001 ITOCHU Corp 0.0701% Industrials JP
ALAB Astera Labs Inc 0.0701% Technology US
6503 Mitsubishi Electric Corp 0.07% Industrials JP
INTU Intuit Inc 0.0699% Technology US
ITW Illinois Tool Works Inc 0.0696% Industrials US
BA/ BAE Systems PLC 0.0694% Industrials GB
CRH CRH PLC 0.0694% Industrials US
EOG EOG Resources Inc 0.0691% Energy US
AEP American Electric Power Co Inc 0.0691% Utilities US
CI Cigna Group/The 0.0686% Health Care US
SPOT Spotify Technology SA 0.0685% Consumer Discretionary US
GLEN Glencore PLC 0.0684% Basic Materials GB
SPG Simon Property Group Inc 0.0684% Real Estate US
7011 Mitsubishi Heavy Industries Ltd 0.0678% Industrials JP
NWG NatWest Group PLC 0.0678% Financials GB
NXPI NXP Semiconductors NV 0.0678% Technology US
URI United Rentals Inc 0.0677% Industrials US
DG Vinci SA 0.0677% Industrials FR
SLB SLB Ltd 0.0676% Energy US
HON Honeywell International Inc 0.0673% Industrials US
AON Aon PLC 0.067% Financials US
ICE Intercontinental Exchange Inc 0.0669% Financials US
MCO Moody's Corp 0.0667% Financials US
WES Wesfarmers Ltd 0.0667% Consumer Discretionary AU
GM General Motors Co 0.0664% Consumer Discretionary US
MSI Motorola Solutions Inc 0.0663% Telecommunications US
CIEN Ciena Corp 0.0662% Telecommunications US
8031 Mitsui & Co Ltd 0.0662% Industrials JP
FIX Comfort Systems USA Inc 0.0662% Industrials US
HONA Honeywell Aerospace Inc 0.0661% Industrials US
3711 ASE Technology Holding Co Ltd 0.066% Technology TW
COHR Coherent Corp 0.0659% Technology US
NSC Norfolk Southern Corp 0.0658% Industrials US
PSX Phillips 66 0.0657% Energy US
NOKIA Nokia Oyj 0.0656% Telecommunications FI
ITX Industria de Diseno Textil SA 0.0653% Consumer Discretionary ES
MFC Manulife Financial Corp 0.0653% Financials CA
ECL Ecolab Inc 0.065% Basic Materials US
NOC Northrop Grumman Corp 0.0648% Industrials US
DASH DoorDash Inc 0.0647% Technology US
ROST Ross Stores Inc 0.0642% Consumer Discretionary US
MPWR Monolithic Power Systems Inc 0.0639% Technology US
TRP TC Energy Corp 0.0635% Energy CA
TRV Travelers Cos Inc/The 0.0634% Financials US
SU Suncor Energy Inc 0.0633% Energy CA
CNR Canadian National Railway Co 0.0632% Industrials CA
1398 Industrial & Commercial Bank of China Ltd 0.0631% Financials HK
FDX FedEx Corp 0.063% Industrials US
MNST Monster Beverage Corp 0.0627% Consumer Staples US
APD Air Products and Chemicals Inc 0.0615% Basic Materials US
2303 United Microelectronics Corp 0.0613% Technology TW
KEYS Keysight Technologies Inc 0.0608% Industrials US
RMS Hermes International SCA 0.0599% Consumer Discretionary FR
BSX Boston Scientific Corp 0.0597% Health Care US
REGN Regeneron Pharmaceuticals Inc 0.0597% Health Care US
NA National Bank of Canada 0.0597% Financials CA
OCBC Oversea-Chinese Banking Corp Ltd 0.0594% Financials SG
KMI Kinder Morgan Inc 0.0594% Energy US
TFC Truist Financial Corp 0.0594% Financials US
WBD Warner Bros Discovery Inc 0.0594% Consumer Discretionary US
TEL TE Connectivity PLC 0.0594% Technology US
DLR Digital Realty Trust Inc 0.0593% Real Estate US
6752 Panasonic Holdings Corp 0.059% Consumer Discretionary JP
TGT Target Corp 0.0588% Consumer Discretionary US
AI Air Liquide SA 0.0587% Basic Materials FR
PCAR PACCAR Inc 0.0587% Industrials US
ABX Barrick Mining Corp 0.0586% Basic Materials CA
5803 Fujikura Ltd 0.0584% Industrials JP
ALL Allstate Corp/The 0.0583% Financials US
KKR KKR & Co Inc 0.0579% Financials US
HPE Hewlett Packard Enterprise Co 0.0572% Technology US
AJG Arthur J Gallagher & Co 0.057% Financials US
ABNB Airbnb Inc 0.0569% Consumer Discretionary US
NDA Nordea Bank Abp 0.0567% Financials FI
D Dominion Energy Inc 0.0567% Utilities US
HCA HCA Healthcare Inc 0.0565% Health Care US
FLEX Flex Ltd 0.0564% Technology US
BHARTI Bharti Airtel Ltd 0.0563% Telecommunications IN
GLE Societe Generale SA 0.056% Financials FR
CARR Carrier Global Corp 0.056% Industrials US
MQG Macquarie Group Ltd 0.056% Financials AU
GWW WW Grainger Inc 0.0557% Industrials US
DBK Deutsche Bank AG 0.0556% Financials DE
SRE Sempra 0.0556% Utilities US
CTAS Cintas Corp 0.0554% Industrials US
388 Hong Kong Exchanges & Clearing Ltd 0.0549% Financials HK
PDD PDD Holdings Inc 0.0547% Technology US
CTVA Corteva Inc 0.0543% Consumer Staples US
TRGP Targa Resources Corp 0.0542% Energy US
ARGX Argenx SE 0.0541% Health Care BE
BKR Baker Hughes Co 0.0539% Energy US
ROK Rockwell Automation Inc 0.0536% Industrials US
AME AMETEK Inc 0.0535% Industrials US
REL RELX PLC 0.0533% Technology GB
CAH Cardinal Health Inc 0.0532% Consumer Staples US
BAYN Bayer AG 0.0531% Health Care DE
DHL Deutsche Post AG 0.0531% Industrials DE
OKE ONEOK Inc 0.0527% Energy US
FAST Fastenal Co 0.0524% Basic Materials US
O Realty Income Corp 0.0521% Real Estate US
ASM ASM International NV 0.052% Technology NL
VST Vistra Corp 0.0518% Utilities US
LHX L3Harris Technologies Inc 0.0518% Industrials US
RKLB Rocket Lab Corp 0.0517% Industrials US
CPG Compass Group PLC 0.0517% Consumer Discretionary GB
5802 Sumitomo Electric Industries Ltd 0.0511% Consumer Discretionary JP
2327 Yageo Corp 0.0509% Technology TW
BN Danone SA 0.0509% Consumer Staples FR
AZO AutoZone Inc 0.0507% Consumer Discretionary US
F Ford Motor Co 0.0507% Consumer Discretionary US
LSEG London Stock Exchange Group PLC 0.0505% Financials GB
EL EssilorLuxottica SA 0.0504% Health Care FR
PRX Prosus NV 0.05% Technology NL
7741 Hoya Corp 0.0494% Health Care JP
VALE3 Vale SA 0.0493% Basic Materials BR
WPM Wheaton Precious Metals Corp 0.0491% Basic Materials CA
ETR Entergy Corp 0.0486% Utilities US
RHM Rheinmetall AG 0.0486% Industrials DE
EW Edwards Lifesciences Corp 0.0486% Health Care US
VOLVB Volvo AB 0.0486% Industrials SE
AAL Anglo American PLC 0.0485% Basic Materials GB
COR Cencora Inc 0.0483% Consumer Staples US
CABK CaixaBank SA 0.0482% Financials ES
EA Electronic Arts Inc 0.0481% Consumer Discretionary US
EBAY eBay Inc 0.048% Consumer Discretionary US
APO Apollo Global Management Inc 0.048% Financials US
LNG Cheniere Energy Inc 0.0479% Energy US
STMMI STMicroelectronics NV 0.0479% Technology IT
AFL Aflac Inc 0.0477% Financials US
STAN Standard Chartered PLC 0.0477% Financials GB
4502 Takeda Pharmaceutical Co Ltd 0.0476% Health Care JP
DB1 Deutsche Boerse AG 0.0473% Financials DE
NUE Nucor Corp 0.0472% Basic Materials US
HUM Humana Inc 0.047% Health Care US
PSA Public Storage 0.047% Real Estate US
FITB Fifth Third Bancorp 0.0469% Financials US
RJHI Al Rajhi Bank 0.0469% Financials SA
OR L'Oreal SA 0.0467% Consumer Discretionary FR
RWE RWE AG 0.0462% Utilities DE
DVN Devon Energy Corp 0.0462% Energy US
BAS BASF SE 0.0462% Basic Materials DE
1810 Xiaomi Corp 0.046% Telecommunications HK
PRY Prysmian SpA 0.0459% Industrials IT
MCHP Microchip Technology Inc 0.0459% Technology US
ATD Alimentation Couche-Tard Inc 0.0457% Consumer Discretionary CA
9999 NetEase Inc 0.0456% Consumer Discretionary HK
3690 Meituan 0.0456% Technology HK
EXC Exelon Corp 0.0452% Utilities US
LONN Lonza Group AG 0.045% Health Care CH
3988 Bank of China Ltd 0.045% Financials HK
XEL Xcel Energy Inc 0.0449% Utilities US
NKE NIKE Inc 0.0447% Consumer Discretionary US
STT State Street Corp 0.0447% Financials US
6723 Renesas Electronics Corp 0.0446% Technology JP
WAB Westinghouse Air Brake Technologies Corp 0.0445% Industrials US
RIO Rio Tinto Ltd 0.0444% Basic Materials AU
INVEA Investor AB 0.0441% Financials SE
9433 KDDI Corp 0.0441% Telecommunications JP
MET MetLife Inc 0.0441% Financials US
SREN Swiss Re AG 0.044% Financials CH
G Generali 0.0431% Financials IT
DGE Diageo PLC 0.043% Consumer Staples GB
2383 Elite Material Co Ltd 0.0429% Technology TW
TTWO Take-Two Interactive Software Inc 0.0428% Consumer Discretionary US
ENI Eni SpA 0.0428% Energy IT
DSV DSV A/S 0.0428% Industrials DK
ITUB4 Itau Unibanco Holding SA 0.0427% Financials BR
ATCOB Atlas Copco AB 0.0427% Industrials SE
EOAN E.ON SE 0.0425% Utilities DE
NU NU Holdings Ltd/Cayman Islands 0.0423% Utilities US
FERG Ferguson Enterprises Inc 0.042% Industrials US
YUM Yum! Brands Inc 0.0418% Consumer Discretionary US
CMG Chipotle Mexican Grill Inc 0.0418% Consumer Discretionary US
HOLN Holcim AG 0.0417% Industrials CH
LR Legrand SA 0.0417% Industrials FR
CVNA Carvana Co 0.0417% Consumer Discretionary US
8591 ORIX Corp 0.0416% Financials JP
GMG Goodman Group 0.0413% Real Estate AU
CCO Cameco Corp 0.0411% Basic Materials CA
SAND Sandvik AB 0.0411% Industrials SE
KDP Keurig Dr Pepper Inc 0.041% Consumer Staples US
6146 Disco Corp 0.041% Technology JP
INVEB Investor AB 0.0409% Financials SE
6367 Daikin Industries Ltd 0.0408% Industrials JP
2318 Ping An Insurance Group Co of China Ltd 0.0407% Financials HK
6762 TDK Corp 0.0407% Industrials JP
005380 Hyundai Motor Co 0.0406% Consumer Discretionary KR
DHI DR Horton Inc 0.0406% Consumer Discretionary US
SLF Sun Life Financial Inc 0.0405% Financials CA
BDX Becton Dickinson & Co 0.0405% Health Care US
AXON Axon Enterprise Inc 0.0404% Industrials US
8002 Marubeni Corp 0.0404% Industrials JP
WCN Waste Connections Inc 0.0404% Utilities CA
AMP Ameriprise Financial Inc 0.0403% Financials US
7974 Nintendo Co Ltd 0.0403% Consumer Discretionary JP
VTR Ventas Inc 0.0402% Real Estate US
IDXX IDEXX Laboratories Inc 0.0402% Health Care US
SGO Cie de Saint-Gobain SA 0.0402% Industrials FR
RKT Reckitt Benckiser Group PLC 0.0402% Consumer Staples GB
3037 Unimicron Technology Corp 0.0402% Technology TW
GALD Galderma Group AG 0.04% Health Care CH
RACE Ferrari NV 0.0397% Consumer Discretionary IT
2891 CTBC Financial Holding Co Ltd 0.0393% Financials TW
CLS Celestica Inc 0.0392% Technology CA
6954 FANUC Corp 0.039% Industrials JP
RSG Republic Services Inc 0.0389% Utilities US
AIG American International Group Inc 0.0388% Financials US
ADSK Autodesk Inc 0.0386% Technology US
2914 Japan Tobacco Inc 0.0386% Consumer Staples JP
ED Consolidated Edison Inc 0.0385% Utilities US
ODFL Old Dominion Freight Line Inc 0.0383% Industrials US
TSCO Tesco PLC 0.0382% Consumer Staples GB
ORA Orange SA 0.0381% Telecommunications FR
MSCI MSCI Inc 0.038% Financials US
ANG Anglogold Ashanti Plc 0.0379% Basic Materials ZA
CBRE CBRE Group Inc 0.0378% Real Estate US
ALNY Alnylam Pharmaceuticals Inc 0.0378% Health Care US
HLN Haleon PLC 0.0377% Health Care GB
ON ON Semiconductor Corp 0.0377% Technology US
PEG Public Service Enterprise Group Inc 0.0376% Utilities US
FNV Franco-Nevada Corp 0.0375% Basic Materials CA
8750 Daiichi Life Group Inc 0.0375% Financials JP
SYY Sysco Corp 0.0375% Consumer Staples US
ARAMCO Saudi Arabian Oil Co 0.0373% Energy SA
CSL CSL Ltd 0.0372% Health Care AU
EME EMCOR Group Inc 0.0371% Industrials US
SSE SSE PLC 0.037% Utilities GB
IBKR Interactive Brokers Group Inc 0.0367% Financials US
NPN Naspers Ltd 0.0366% Technology ZA
GRMN Garmin Ltd 0.0364% Consumer Discretionary US
VMC Vulcan Materials Co 0.0363% Industrials US
SDZ Sandoz Group AG 0.0358% Health Care CH
PRU Prudential Financial Inc 0.0358% Financials US
MBG Mercedes-Benz Group AG 0.0357% Consumer Discretionary DE
CSU Constellation Software Inc/Canada 0.0357% Technology CA
A Agilent Technologies Inc 0.0357% Health Care US
IFC Intact Financial Corp 0.0356% Financials CA
INFO Infosys Ltd 0.0353% Technology IN
EBS Erste Group Bank AG 0.0352% Financials AT
9434 SoftBank Corp 0.0352% Telecommunications JP
8053 Sumitomo Corp 0.0349% Industrials JP
NTRA Natera Inc 0.0348% Health Care US
XYZ Block Inc 0.0348% Industrials US
WAT Waters Corp 0.0347% Health Care US
ADM Archer-Daniels-Midland Co 0.0347% Consumer Staples US
FFH Fairfax Financial Holdings Ltd 0.0346% Financials CA
FER Ferrovial NV 0.0346% Industrials ES
IRM Iron Mountain Inc 0.0345% Real Estate US
WDS Woodside Energy Group Ltd 0.0343% Energy AU
UCB UCB SA 0.0342% Health Care BE
CCL Carnival Corp Ltd 0.034% Consumer Discretionary US
FANG Diamondback Energy Inc 0.034% Energy US
SIKA Sika AG 0.034% Industrials CH
AIRB Air Liquide SA 0.0339% Basic Materials FR
PCG PG&E Corp 0.0339% Utilities US
UOB United Overseas Bank Ltd 0.0337% Financials SG
ROP Roper Technologies Inc 0.0337% Technology US
7267 Honda Motor Co Ltd 0.0337% Consumer Discretionary JP
KVUE Kenvue Inc 0.0337% Consumer Staples US
HBAN Huntington Bancshares Inc/OH 0.0336% Financials US
105560 KB Financial Group Inc 0.0336% Financials KR
OXY Occidental Petroleum Corp 0.0336% Energy US
KMB Kimberly-Clark Corp 0.0334% Consumer Staples US
DANSKE Danske Bank A/S 0.0334% Financials DK
WEC WEC Energy Group Inc 0.0334% Utilities US
AD Koninklijke Ahold Delhaize NV 0.0333% Consumer Staples NL
NDAQ Nasdaq Inc 0.0332% Financials US
HIG Hartford Financial Services Group Inc/The 0.0332% Financials US
DOL Dollarama Inc 0.0331% Consumer Discretionary CA
CVE Cenovus Energy Inc 0.0331% Energy CA
Q Qnity Electronics Inc 0.0331% Technology US
MTB M&T Bank Corp 0.033% Financials US
ASSAB Assa Abloy AB 0.0329% Industrials SE
CRWV Coreweave Inc 0.0329% Technology US
CCI Crown Castle Inc 0.0328% Real Estate US
TEVA Teva Pharmaceutical Industries Ltd 0.0326% Health Care IL
IQV IQVIA Holdings Inc 0.0326% Health Care US
GMEXICOB Grupo Mexico SAB de CV 0.0325% Basic Materials MX
LUMI Bank Leumi Le-Israel BM 0.0324% Financials IL
PETR3 Petroleo Brasileiro SA 0.0324% Energy BR
2345 Accton Technology Corp 0.0322% Telecommunications TW
MLM Martin Marietta Materials Inc 0.0322% Industrials US
OTP OTP Bank Nyrt 0.0321% Financials HU
6301 Komatsu Ltd 0.0321% Industrials JP
ACGL Arch Capital Group Ltd 0.032% Financials US
1211 BYD Co Ltd 0.032% Consumer Discretionary HK
4578 Otsuka Holdings Co Ltd 0.0319% Health Care JP
COIN Coinbase Global Inc 0.0319% Financials US
EQT EQT Corp 0.0318% Energy US
ADS adidas AG 0.0318% Consumer Discretionary DE
PRU Prudential PLC 0.0316% Financials GB
4062 Ibiden Co Ltd 0.0315% Technology JP
8630 Sompo Holdings Inc 0.0314% Financials JP
RBLX ROBLOX Corp 0.0314% Consumer Discretionary US
"""
