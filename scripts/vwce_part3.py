part3_raw = """
SAB Banco de Sabadell SA 0.0162% Financials ES
PWGR Power Grid Corp of India Ltd 0.0161% Utilities IN
BHE Bharat Electronics Ltd 0.0161% Industrials IN
CLNX Cellnex Telecom SA 0.0161% Telecommunications ES
EMIRATES Emirates NBD Bank PJSC 0.0161% Financials AE
TEF Telefonica SA 0.016% Telecommunications ES
TSCO Tractor Supply Co 0.016% Consumer Discretionary US
2328 PICC Property & Casualty Co Ltd 0.0159% Financials HK
BAM Brookfield Asset Management Ltd 0.0159% Financials CA
TXT Textron Inc 0.0159% Industrials US
WSP WSP Global Inc 0.0159% Industrials CA
STMN Straumann Holding AG 0.0158% Health Care CH
CAP Capgemini SE 0.0158% Technology FR
TATA Tata Steel Ltd 0.0158% Basic Materials IN
RO Roche Holding AG 0.0158% Health Care CH
6160 BeOne Medicines Ltd 0.0158% Health Care HK
2883 KGI Financial Holding Co Ltd 0.0157% Financials TW
WCP Whitecap Resources Inc 0.0157% Energy CA
KIM Kimco Realty Corp 0.0157% Real Estate US
SHFL Shriram Finance Ltd 0.0157% Financials IN
6594 NIDEC CORP 0.0155% Industrials JP
MAA Mid-America Apartment Communities Inc 0.0155% Real Estate US
NVMI Nova Ltd 0.0155% Technology IL
5401 Nippon Steel Corp 0.0155% Basic Materials JP
BBCA Bank Central Asia Tbk PT 0.0155% Financials ID
EDP EDP SA 0.0155% Utilities PT
5016 JX Advanced Metals Corp 0.0155% Basic Materials JP
UTCEM UltraTech Cement Ltd 0.0155% Industrials IN
8697 Japan Exchange Group Inc 0.0154% Financials JP
FLUT Flutter Entertainment PLC 0.0154% Consumer Discretionary US
ACA Credit Agricole SA 0.0154% Financials FR
FDXF Fedex Freight Holding Co Inc 0.0154% Industrials US
2 CLP Holdings Ltd 0.0154% Utilities HK
TOU Tourmaline Oil Corp 0.0153% Energy CA
EQT EQT AB 0.0153% Financials SE
IMO Imperial Oil Ltd 0.0153% Energy CA
GPC Genuine Parts Co 0.0153% Consumer Discretionary US
J Jacobs Solutions Inc 0.0152% Industrials US
1605 Inpex Corp 0.0152% Energy JP
2502 Asahi Group Holdings Ltd 0.0151% Consumer Staples JP
EVN Evolution Mining Ltd 0.0151% Basic Materials AU
GWO Great-West Lifeco Inc 0.0151% Financials CA
JHX James Hardie Industries PLC 0.0151% Industrials AU
WALMEX* Wal-Mart de Mexico SAB de CV 0.0151% Consumer Discretionary MX
8830 Sumitomo Realty & Development Co Ltd 0.0151% Real Estate JP
SCHP Schindler Holding AG 0.015% Industrials CH
3750 Contemporary Amperex Technology Co Ltd 0.015% Industrials HK
HNDL Hindalco Industries Ltd 0.015% Basic Materials IN
LUN Lundin Mining Corp 0.015% Basic Materials CA
SUI Sun Communities Inc 0.0149% Real Estate US
DPLM Diploma PLC 0.0149% Industrials GB
9101 Nippon Yusen KK 0.0149% Industrials JP
WPC WP Carey Inc 0.0149% Real Estate US
VOW3 Volkswagen AG 0.0149% Consumer Discretionary DE
BR Broadridge Financial Solutions Inc 0.0149% Financials US
TSN Tyson Foods Inc 0.0148% Consumer Staples US
005490 POSCO Holdings Inc 0.0147% Basic Materials KR
SGX Singapore Exchange Ltd 0.0147% Financials SG
7735 SCREEN Holdings Co Ltd 0.0147% Technology JP
SCCO Southern Copper Corp 0.0147% Basic Materials US
QIBK Qatar Islamic Bank QPSC 0.0147% Financials QA
8601 Daiwa Securities Group Inc 0.0147% Financials JP
823 Link REIT 0.0147% Real Estate HK
1802 Obayashi Corp 0.0146% Industrials JP
9987 Yum China Holdings Inc 0.0146% Consumer Discretionary HK
IEX IDEX Corp 0.0146% Industrials US
SBSP3 Cia de Saneamento Basico do Estado de Sao Paulo SABESP 0.0146% Utilities BR
1024 Kuaishou Technology 0.0146% Technology HK
COO Cooper Cos Inc/The 0.0146% Health Care US
SMCI Super Micro Computer Inc 0.0145% Technology US
6479 MINEBEA MITSUMI Inc 0.0145% Technology JP
1801 Innovent Biologics Inc 0.0145% Health Care HK
EG Everest Group Ltd 0.0145% Financials US
CPU Computershare Ltd 0.0145% Financials AU
2408 Nanya Technology Corp 0.0145% Technology TW
GPN Global Payments Inc 0.0142% Industrials US
FBK FinecoBank Banca Fineco SpA 0.0142% Financials IT
DECK Deckers Outdoor Corp 0.0142% Consumer Discretionary US
RI Pernod Ricard SA 0.0142% Consumer Staples FR
2357 Asustek Computer Inc 0.0142% Technology TW
6976 Taiyo Yuden Co Ltd 0.0142% Technology JP
LVS Las Vegas Sands Corp 0.0141% Consumer Discretionary US
1216 Uni-President Enterprises Corp 0.0141% Consumer Staples TW
BBY Best Buy Co Inc 0.0141% Consumer Discretionary US
EUROB Eurobank SA 0.0141% Financials GR
6223 MPI Corp 0.0141% Technology TW
KEP Keppel Ltd 0.0141% Utilities SG
ENGI Engie SA 0.0141% Utilities FR
BT/A BT Group PLC 0.014% Telecommunications GB
SUN Suncor Group Ltd 0.014% Financials AU
CIMB CIMB Group Holdings Bhd 0.014% Financials MY
WKL Wolters Kluwer NV 0.014% Industrials NL
9531 Tokyo Gas Co Ltd 0.014% Utilities JP
267260 HD Hyundai Electric Co Ltd 0.0139% Industrials KR
B3SA3 B3 SA - Brasil Bolsa Balcao 0.0139% Financials BR
600519 Kweichow Moutai Co Ltd 0.0139% Consumer Staples CN
FPH Fisher & Paykel Healthcare Corp Ltd 0.0138% Health Care NZ
TELIA Telia Co AB 0.0138% Telecommunications SE
DSY Dassault Systemes SE 0.0138% Technology FR
EPIA Epiroc AB 0.0138% Industrials SE
6525 Kokusai Electric Corp 0.0138% Technology JP
4307 Nomura Research Institute Ltd 0.0138% Technology JP
ZS Zscaler Inc 0.0138% Technology US
ETERNAL Zomato Ltd 0.0137% Technology IN
6988 Nitto Denko Corp 0.0137% Basic Materials JP
5706 Mitsui Kinzoku Co Ltd 0.0136% Basic Materials JP
SHL Siemens Healthineers AG 0.0136% Health Care DE
7832 Bandai Namco Holdings Inc 0.0136% Consumer Discretionary JP
7013 IHI Corp 0.0136% Industrials JP
WRB W R Berkley Corp 0.0136% Financials US
1113 CK Asset Holdings Ltd 0.0136% Real Estate HK
ALLE Allegion plc 0.0136% Industrials US
EMA Emera Inc 0.0135% Utilities CA
KSP Kingspan Group PLC 0.0135% Industrials IE
300308 Zhongji Innolight Co Ltd 0.0135% Telecommunications CN
STE Singapore Technologies Engineering Ltd 0.0135% Industrials SG
OR L'Oreal SA 0.0135% Consumer Discretionary FR
COAL Coal India Ltd 0.0134% Energy IN
9503 Kansai Electric Power Co Inc/The 0.0134% Utilities JP
386 China Petroleum & Chemical Corp 0.0134% Energy HK
HEI HEICO Corp 0.0133% Industrials US
5274 ASPEED Technology Inc 0.0133% Technology TW
TRMB Trimble Inc 0.0133% Industrials US
PNR Pentair PLC 0.0133% Industrials US
SRG Snam SpA 0.0133% Energy IT
RTO Rentokil Initial PLC 0.0133% Industrials GB
PST Poste Italiane SpA 0.0133% Financials IT
TRU TransUnion 0.0133% Industrials US
APTV Aptiv Holdings Ltd 0.0133% Consumer Discretionary US
IAG Insurance Australia Group Ltd 0.0132% Financials AU
PTT/F PTT PCL 0.0132% Energy TH
NESTE Neste Oyj 0.0132% Energy FI
1888 Kingboard Laminates Holdings Ltd 0.0132% Technology HK
ENLT Enlight Renewable Energy Ltd 0.0132% Utilities IL
AGS Ageas SA/NV 0.0132% Financials BE
ADANI Adani Power Ltd 0.0132% Utilities IN
175 Geely Automobile Holdings Ltd 0.0131% Consumer Discretionary HK
SSNC SS&C Technologies Holdings Inc 0.0131% Technology US
WEGE3 WEG SA 0.0131% Industrials BR
7012 Kawasaki Heavy Industries Ltd 0.0131% Industrials JP
PHOE Phoenix Financial Ltd 0.0131% Financials IL
NTGY Naturgy Energy Group SA 0.0131% Utilities ES
SABIC Saudi Basic Industries Corp 0.0131% Basic Materials SA
EPIB Epiroc AB 0.0131% Industrials SE
GIB/A CGI Inc 0.0131% Technology CA
RIVN Rivian Automotive Inc 0.013% Consumer Discretionary US
2880 Hua Nan Financial Holdings Co Ltd 0.013% Financials TW
L Loews Corp 0.013% Financials US
SGRO Segro PLC 0.013% Real Estate GB
033780 KT&G Corp 0.013% Consumer Staples KR
LYB LyondellBasell Industries NV 0.013% Basic Materials US
TPEIR Piraeus Bank SA 0.013% Financials GR
PTC PTC Inc 0.013% Technology US
KYGA Kerry Group PLC 0.0129% Consumer Staples IE
1928 Sekisui House Ltd 0.0129% Consumer Discretionary JP
9532 Osaka Gas Co Ltd 0.0129% Utilities JP
MNG M&G PLC 0.0129% Financials GB
URW Unibail-Rodamco-Westfield 0.0128% Real Estate FR
AKZA Akzo Nobel NV 0.0128% Basic Materials NL
AGI Alamos Gold Inc 0.0128% Basic Materials CA
APNT Asian Paints Ltd 0.0127% Industrials IN
TEAM Atlassian Corp 0.0127% Technology US
TYL Tyler Technologies Inc 0.0126% Technology US
4188 Mitsubishi Chemical Group Corp 0.0126% Basic Materials JP
S32 South32 Ltd 0.0126% Basic Materials AU
ORG Origin Energy Ltd 0.0125% Utilities AU
316140 Woori Financial Group Inc 0.0125% Financials KR
TFII TFI International Inc 0.0125% Industrials CA
LISP Chocoladefabriken Lindt & Spruengli AG 0.0124% Consumer Staples CH
ARX ARC Resources Ltd 0.0124% Energy CA
KGH KGHM Polska Miedz SA 0.0124% Basic Materials PL
4958 Zhen Ding Technology Holding Ltd 0.0123% Technology TW
SN/ Smith & Nephew PLC 0.0123% Health Care GB
CARLB Carlsberg AS 0.0123% Consumer Staples DK
2892 First Financial Holding Co Ltd 0.0123% Financials TW
CNA Centrica PLC 0.0123% Utilities GB
LDOS Leidos Holdings Inc 0.0123% Technology US
7186 Yokohama Financial Group Inc 0.0123% Financials JP
298040 Hyosung Heavy Industries Corp 0.0123% Technology KR
PINS Pinterest Inc 0.0123% Technology US
7532 Pan Pacific International Holdings Corp 0.0122% Consumer Discretionary JP
066570 LG Electronics Inc 0.0122% Consumer Discretionary KR
MONC Moncler SpA 0.0122% Consumer Discretionary IT
ETE National Bank of Greece SA 0.0122% Financials GR
MKC McCormick & Co Inc/MD 0.0121% Consumer Staples US
000810 Samsung Fire & Marine Insurance Co Ltd 0.0121% Financials KR
ADCB Abu Dhabi Commercial Bank PJSC 0.0121% Financials AE
BPAC11 Banco BTG Pactual SA 0.012% Financials BR
ITSA4 Itausa SA 0.012% Financials BR
329180 HD Hyundai Heavy Industries Co Ltd 0.012% Industrials KR
7733 Olympus Corp 0.012% Health Care JP
3402 Toray Industries Inc 0.012% Basic Materials JP
IAG iA Financial Corp Inc 0.012% Financials CA
ADVANC/F Advanced Info Service PCL 0.0119% Telecommunications TH
FNF Fidelity National Financial Inc 0.0119% Financials US
9992 Pop Mart International Group Ltd 0.0119% Consumer Discretionary HK
2020 ANTA Sports Products Ltd 0.0119% Consumer Discretionary HK
BEAN Belimo Holding AG 0.0119% Industrials CH
8331 Chiba Bank Ltd/The 0.0119% Financials JP
MRU Metro Inc/CN 0.0118% Consumer Staples CA
KOG Kongsberg Gruppen ASA 0.0118% Industrials NO
ADE Adani Enterprises Ltd 0.0118% Industrials IN
5333 NGK Corp 0.0118% Industrials JP
CA Carrefour SA 0.0118% Consumer Staples FR
ACWA ACWA Power Co 0.0118% Utilities SA
ADM Admiral Group PLC 0.0117% Financials GB
KKC Cummins India Ltd 0.0117% Industrials IN
CHTR Charter Communications Inc 0.0117% Telecommunications US
IMI IMI PLC 0.0117% Industrials GB
METSO Metso Oyj 0.0117% Industrials FI
BG BAWAG Group AG 0.0117% Financials AT
GDDY GoDaddy Inc 0.0116% Technology US
ADSEZ Adani Ports & Special Economic Zone Ltd 0.0116% Industrials IN
1109 China Resources Land Ltd 0.0116% Real Estate HK
GEN Gen Digital Inc 0.0116% Technology US
AKRBP Aker BP ASA 0.0116% Energy NO
9104 Mitsui OSK Lines Ltd 0.0115% Industrials JP
MDLN Medline Inc 0.0115% Health Care US
4507 Shionogi & Co Ltd 0.0115% Health Care JP
LULU Lululemon Athletica Inc 0.0115% Consumer Discretionary US
WN George Weston Ltd 0.0114% Consumer Staples CA
5831 Shizuoka Financial Group Inc 0.0114% Financials JP
HCLT HCL Technologies Ltd 0.0114% Technology IN
8299 Phison Electronics Corp 0.0114% Technology TW
UPM UPM-Kymmene Oyj 0.0114% Basic Materials FI
SDLF Standard Life PLC 0.0114% Financials GB
UU/ United Utilities Group PLC 0.0114% Utilities GB
SY1 Symrise AG 0.0113% Basic Materials DE
6841 Yokogawa Electric Corp 0.0113% Industrials JP
LYC Lynas Rare Earths Ltd 0.0113% Basic Materials AU
"""
