part2_raw = """
EXR Extra Space Storage Inc 0.0313% Real Estate US
KR Kroger Co/The 0.0313% Consumer Staples US
7182 Japan Post Bank Co Ltd 0.0311% Financials JP
2881 Fubon Financial Holding Co Ltd 0.031% Financials TW
6702 Fujitsu Ltd 0.031% Technology JP
POW Power Corp of Canada 0.031% Financials CA
TDY Teledyne Technologies Inc 0.031% Industrials US
8725 MS&AD Insurance Group Holdings Inc 0.0308% Financials JP
ALC Alcon AG 0.0308% Health Care CH
WOW Woolworths Group Ltd 0.0308% Consumer Staples AU
ATCOA Atlas Copco AB 0.0307% Industrials SE
ERICB Telefonaktiebolaget LM Ericsson 0.0305% Telecommunications SE
2802 Ajinomoto Co Inc 0.0305% Consumer Staples JP
STLD Steel Dynamics Inc 0.0305% Basic Materials US
PAYX Paychex Inc 0.0305% Industrials US
ENGI Engie SA 0.0302% Utilities FR
GIVN Givaudan SA 0.0302% Basic Materials CH
CNC Centene Corp 0.0301% Health Care US
9618 JD.com Inc 0.0301% Consumer Discretionary HK
III 3i Group PLC 0.03% Financials GB
9888 Baidu Inc 0.0299% Technology HK
2882 Cathay Financial Holding Co Ltd 0.0299% Financials TW
AXSB Axis Bank Ltd 0.0299% Financials IN
NTRS Northern Trust Corp 0.0298% Financials US
6701 NEC Corp 0.0298% Technology JP
IR Ingersoll Rand Inc 0.0297% Industrials US
ZTS Zoetis Inc 0.0297% Health Care US
FTS Fortis Inc/Canada 0.0296% Utilities CA
POLI Bank Hapoalim BM 0.0295% Financials IL
KBC KBC Group NV 0.0295% Financials BE
LT Larsen & Toubro Ltd 0.0294% Industrials IN
PYPL PayPal Holdings Inc 0.0294% Industrials US
BIIB Biogen Inc 0.0293% Health Care US
4519 Chugai Pharmaceutical Co Ltd 0.0293% Health Care JP
MM Mahindra & Mahindra Ltd 0.0291% Consumer Discretionary IN
NTR Nutrien Ltd 0.0291% Basic Materials CA
6971 Kyocera Corp 0.0291% Technology JP
AEE Ameren Corp 0.0288% Utilities US
CFG Citizens Financial Group Inc 0.0287% Financials US
TCL Transurban Group 0.0287% Industrials AU
SLHN Swiss Life Holding AG 0.0286% Financials CH
MTD Mettler-Toledo International Inc 0.0286% Industrials US
GFNORTEO Grupo Financiero Banorte SAB de CV 0.0285% Financials MX
BAF Bajaj Finance Ltd 0.0285% Financials IN
SNB Saudi National Bank/The 0.0284% Financials SA
TWLO Twilio Inc 0.0283% Technology US
SWEDA Swedbank AB 0.0282% Financials SE
EXPN Experian PLC 0.0282% Industrials GB
OR L'Oreal SA 0.0281% Consumer Discretionary FR
DOV Dover Corp 0.028% Industrials US
FSR FirstRand Ltd 0.028% Financials ZA
RF Regions Financial Corp 0.028% Financials US
CBK Commerzbank AG 0.028% Financials DE
GFI Gold Fields Ltd 0.028% Basic Materials ZA
TSEM Tower Semiconductor Ltd 0.0279% Technology IL
TECK/B Teck Resources Ltd 0.0278% Basic Materials CA
DELTA/F Delta Electronics Thailand PCL 0.0277% Technology TH
EXPE Expedia Group Inc 0.0276% Consumer Discretionary US
CNP CenterPoint Energy Inc 0.0276% Utilities US
SUNB Sunbelt Rentals Holdings Inc 0.0275% Industrials GB
RMD ResMed Inc 0.0275% Health Care US
DTE DTE Energy Co 0.0275% Utilities US
1303 Nan Ya Plastics Corp 0.0275% Basic Materials TW
NRG NRG Energy Inc 0.0275% Utilities US
PHM PulteGroup Inc 0.0275% Consumer Discretionary US
GEHC GE HealthCare Technologies Inc 0.0274% Health Care US
8802 Mitsubishi Estate Co Ltd 0.0274% Real Estate JP
SYF Synchrony Financial 0.0273% Industrials US
K Kinross Gold Corp 0.0273% Basic Materials CA
4568 Daiichi Sankyo Co Ltd 0.0272% Health Care JP
IMB Imperial Brands PLC 0.0271% Consumer Staples GB
2887 TS Financial Holding Co Ltd 0.027% Financials TW
HUBB Hubbell Inc 0.027% Industrials US
HAL Halliburton Co 0.027% Energy US
8308 Resona Holdings Inc 0.0269% Financials JP
PPG PPG Industries Inc 0.0269% Industrials US
VWS Vestas Wind Systems A/S 0.0268% Energy DK
LYV Live Nation Entertainment Inc 0.0268% Consumer Discretionary US
WSM Williams-Sonoma Inc 0.0267% Consumer Discretionary US
PETR4 Petroleo Brasileiro SA 0.0267% Energy BR
XYL Xylem Inc/NY 0.0266% Industrials US
REP Repsol SA 0.0265% Energy ES
KFH Kuwait Finance House KSCP 0.0263% Financials KW
EIX Edison International 0.0262% Utilities US
MSTR Strategy Inc 0.0259% Technology US
4901 FUJIFILM Holdings Corp 0.0259% Technology JP
FICO Fair Isaac Corp 0.0259% Industrials US
ACS ACS Actividades de Construccion y Servicios SA 0.0257% Industrials ES
ADYEN Adyen NV 0.0257% Industrials NL
HSY Hershey Co/The 0.0257% Consumer Staples US
PPL PPL Corp 0.0257% Utilities US
3382 Seven & i Holdings Co Ltd 0.0257% Consumer Staples JP
BESI BE Semiconductor Industries NV 0.0257% Technology NL
CINF Cincinnati Financial Corp 0.0256% Financials US
2885 Yuanta Financial Holding Co Ltd 0.0256% Financials TW
8015 Toyota Tsusho Corp 0.0256% Industrials JP
VIE Veolia Environnement SA 0.0256% Utilities FR
BAP Credicorp Ltd 0.0255% Financials US
055550 Shinhan Financial Group Co Ltd 0.0255% Financials KR
992 Lenovo Group Ltd 0.0255% Technology HK
ILMN Illumina Inc 0.0255% Health Care US
8309 Sumitomo Mitsui Trust Group Inc 0.0255% Financials JP
NTAP NetApp Inc 0.0254% Technology US
AVB AvalonBay Communities Inc 0.0254% Real Estate US
WST West Pharmaceutical Services Inc 0.0253% Health Care US
FE FirstEnergy Corp 0.0253% Utilities US
ATO Atmos Energy Corp 0.0252% Utilities US
OTIS Otis Worldwide Corp 0.0252% Industrials US
AMRZ Amrize Ltd 0.0251% Industrials CH
2382 Quanta Computer Inc 0.0251% Technology TW
QBE QBE Insurance Group Ltd 0.025% Financials AU
ES Eversource Energy 0.025% Utilities US
ML Cie Generale des Etablissements Michelin SCA 0.0249% Consumer Discretionary FR
BAMI Banco BPM SpA 0.0249% Financials IT
1 CK Hutchison Holdings Ltd 0.0249% Industrials HK
CPRT Copart Inc 0.0247% Consumer Discretionary US
028260 Samsung C&T Corp 0.0247% Industrials KR
FFIV F5 Inc 0.0247% Technology US
IHG InterContinental Hotels Group PLC 0.0247% Consumer Discretionary GB
MDB MongoDB Inc 0.0247% Technology US
FISV Fiserv Inc 0.0246% Industrials US
DXCM Dexcom Inc 0.0246% Health Care US
MT ArcelorMittal SA 0.0245% Basic Materials NL
PPL Pembina Pipeline Corp 0.0245% Energy CA
4503 Astellas Pharma Inc 0.0245% Health Care JP
VEEV Veeva Systems Inc 0.0244% Health Care US
AV/ Aviva PLC 0.0244% Financials GB
9432 NTT Inc 0.0243% Telecommunications JP
AMS Amadeus IT Group SA 0.0243% Technology ES
SBK Standard Bank Group Ltd 0.0242% Financials ZA
ABN ABN AMRO Bank NV 0.0242% Financials NL
ST Singapore Telecommunications Ltd 0.0242% Telecommunications SG
WDAY Workday Inc 0.0242% Technology US
PKO Powszechna Kasa Oszczednosci Bank Polski SA 0.0242% Financials PL
5108 Bridgestone Corp 0.0242% Consumer Discretionary JP
DRI Darden Restaurants Inc 0.0242% Consumer Discretionary US
AIBG AIB Group PLC 0.0241% Financials IE
8604 Nomura Holdings Inc 0.0241% Financials JP
2628 China Life Insurance Co Ltd 0.0241% Financials HK
CHD Church & Dwight Co Inc 0.0241% Consumer Staples US
CMS CMS Energy Corp 0.024% Utilities US
AWK American Water Works Co Inc 0.0239% Utilities US
8801 Mitsui Fudosan Co Ltd 0.0239% Real Estate JP
9961 Trip.com Group Ltd 0.0239% Consumer Discretionary HK
SEBA Skandinaviska Enskilda Banken AB 0.0239% Financials SE
CBOE Cboe Global Markets Inc 0.0238% Financials US
SAMPO Sampo Oyj 0.0237% Financials FI
L Loblaw Cos Ltd 0.0237% Consumer Staples CA
PKG Packaging Corp of America 0.0236% Industrials US
QSR Restaurant Brands International Inc 0.0236% Consumer Discretionary CA
034020 Doosan Enerbility Co Ltd 0.0235% Industrials KR
TROW T Rowe Price Group Inc 0.0235% Financials US
EQR Equity Residential 0.0235% Real Estate US
JBHT JB Hunt Transport Services Inc 0.0234% Industrials US
BMPS Banca Monte dei Paschi di Siena SpA 0.0234% Financials IT
VOD Vodafone Group PLC 0.0234% Telecommunications GB
NXT Next PLC 0.0232% Consumer Discretionary GB
NI NiSource Inc 0.0232% Utilities US
300750 Contemporary Amperex Technology Co Ltd 0.0232% Industrials CN
DG Dollar General Corp 0.0232% Consumer Discretionary US
TPL Texas Pacific Land Corp 0.0232% Energy US
6273 SMC Corp 0.0232% Industrials JP
ALL Aristocrat Leisure Ltd 0.0232% Consumer Discretionary AU
BPE BPER Banca SPA 0.0232% Financials IT
HEI Heidelberg Materials AG 0.023% Industrials DE
P Everpure Inc 0.023% Technology US
WTW Willis Towers Watson PLC 0.023% Financials US
CPI Capitec Bank Holdings Ltd 0.023% Financials ZA
VRSK Verisk Analytics Inc 0.023% Industrials US
DGX Quest Diagnostics Inc 0.0229% Health Care US
6178 Japan Post Holdings Co Ltd 0.0228% Financials JP
DTG Daimler Truck Holding AG 0.0228% Industrials DE
VACN VAT Group AG 0.0226% Industrials CH
DLTR Dollar Tree Inc 0.0226% Consumer Discretionary US
SOFI SoFi Technologies Inc 0.0223% Financials US
MTN MTN Group Ltd 0.0223% Telecommunications ZA
FSLR First Solar Inc 0.0223% Energy US
034730 SK Inc 0.0221% Energy KR
HEIA Heineken NV 0.0221% Consumer Staples NL
COL Coles Group Ltd 0.0221% Consumer Staples AU
3017 Asia Vital Components Co Ltd 0.0221% Technology TW
2344 Winbond Electronics Corp 0.022% Technology TW
KMB Kotak Mahindra Bank Ltd 0.022% Financials IN
VLTO Veralto Corp 0.0219% Industrials US
SW Smurfit Westrock PLC 0.0219% Industrials US
2360 Chroma ATE Inc 0.0218% Industrials TW
NBK National Bank of Kuwait SAKP 0.0218% Financials KW
PHIA Koninklijke Philips NV 0.0218% Health Care NL
OKTA Okta Inc 0.0218% Technology US
FEMSAUBD Fomento Economico Mexicano SAB de CV 0.0217% Consumer Staples MX
LH Labcorp Holdings Inc 0.0217% Health Care US
STC Saudi Telecom Co 0.0216% Telecommunications SA
RDDT Reddit Inc 0.0216% Technology US
MAADEN Saudi Arabian Mining Co 0.0216% Basic Materials SA
EQNR Equinor ASA 0.0215% Energy NO
INSM Insmed Inc 0.0215% Health Care US
MTX MTU Aero Engines AG 0.0215% Industrials DE
HO Thales SA 0.0215% Industrials FR
857 PetroChina Co Ltd 0.0214% Energy HK
RJF Raymond James Financial Inc 0.0214% Financials US
OMC Omnicom Group Inc 0.0214% Consumer Discretionary US
AENA Aena SME SA 0.0214% Industrials ES
032830 Samsung Life Insurance Co Ltd 0.0214% Financials KR
KEY KeyCorp 0.0214% Financials US
DNB DNB Bank ASA 0.0213% Financials NO
NSISB Novonesis (Novozymes) B 0.0212% Health Care DK
7269 Suzuki Motor Corp 0.0212% Consumer Discretionary JP
ZM Zoom Video Communications Inc 0.0212% Technology US
PUB Publicis Groupe SA 0.0211% Consumer Discretionary FR
CPAY Corpay Inc 0.0211% Industrials US
FAB First Abu Dhabi Bank PJSC 0.0211% Financials AE
4452 Kao Corp 0.0211% Consumer Staples JP
012450 Hanwha Aerospace Co Ltd 0.0211% Industrials KR
RPRX Royalty Pharma PLC 0.021% Health Care US
HLMA Halma PLC 0.021% Industrials GB
CPNG Coupang Inc 0.021% Consumer Discretionary US
2388 BOC Hong Kong Holdings Ltd 0.0209% Financials HK
PFG Principal Financial Group Inc 0.0208% Financials US
1288 Agricultural Bank of China Ltd 0.0207% Financials HK
EXE Expand Energy Corp 0.0207% Energy US
NN NN Group NV 0.0207% Financials NL
BBD/B Bombardier Inc 0.0207% Industrials CA
LPLA LPL Financial Holdings Inc 0.0207% Financials US
LDO Leonardo SpA 0.0207% Industrials IT
HEI/A HEICO Corp 0.0205% Industrials US
EMAAR Emaar Properties PJSC 0.0205% Real Estate AE
BBDC4 Banco Bradesco SA 0.0205% Financials BR
GEBN Geberit AG 0.0205% Industrials CH
000270 Kia Corp 0.0205% Consumer Discretionary KR
RBA RB Global Inc 0.0204% Consumer Discretionary CA
AMXB America Movil SAB de CV 0.0204% Telecommunications MX
FWONK Liberty Media Corp-Liberty Formula One 0.0203% Consumer Discretionary US
QNBK Qatar National Bank QPSC 0.0203% Financials QA
6902 Denso Corp 0.0203% Consumer Discretionary JP
5020 ENEOS Holdings Inc 0.0202% Energy JP
EXPD Expeditors International of Washington Inc 0.0202% Industrials US
UMG Universal Music Group NV 0.0202% Consumer Discretionary NL
3968 China Merchants Bank Co Ltd 0.0202% Financials HK
669 Techtronic Industries Co Ltd 0.0201% Industrials HK
TCS Tata Consultancy Services Ltd 0.0201% Technology IN
MRK Merck KGaA 0.0201% Health Care DE
EAND Emirates Telecommunications Group Co PJSC 0.02% Telecommunications AE
AMCR Amcor PLC 0.02% Industrials US
6920 Lasertec Corp 0.02% Technology JP
MSIL Maruti Suzuki India Ltd 0.02% Consumer Discretionary IN
2890 SinoPac Financial Holdings Co Ltd 0.0199% Financials TW
8267 Aeon Co Ltd 0.0199% Consumer Staples JP
BIRG Bank of Ireland Group PLC 0.0199% Financials IE
7751 Canon Inc 0.0197% Technology JP
PKN ORLEN SA 0.0195% Energy PL
9020 East Japan Railway Co 0.0195% Industrials JP
STE STERIS PLC 0.0194% Health Care US
VRSN VeriSign Inc 0.0194% Technology US
086790 Hana Financial Group Inc 0.0194% Financials KR
ARES Ares Management Corp 0.0194% Financials US
HPQ HP Inc 0.0194% Technology US
BURL Burlington Stores Inc 0.0194% Consumer Discretionary US
LGEN Legal & General Group PLC 0.0194% Financials GB
MAY Malayan Banking Bhd 0.0194% Financials MY
INCY Incyte Corp 0.0193% Health Care US
VICI VICI Properties Inc 0.0193% Real Estate US
HBAN Helvetia Baloise Holding AG 0.0193% Financials CH
SUNP Sun Pharmaceutical Industries Ltd 0.0193% Health Care IN
TNB Tenaga Nasional Bhd 0.0193% Utilities MY
CCEP Coca-Cola Europacific Partners PLC 0.0193% Consumer Staples GB
FMG Fortescue Ltd 0.0192% Basic Materials AU
FIS Fidelity National Information Services Inc 0.0192% Industrials US
DD DuPont de Nemours Inc 0.0191% Industrials US
MG Magna International Inc 0.0191% Consumer Discretionary CA
ALFA Alfa Laval AB 0.0191% Industrials SE
3481 Innolux Corp 0.019% Technology TW
6361 Ebara Corp 0.019% Industrials JP
2886 Mega Financial Holding Co Ltd 0.019% Financials TW
FTV Fortive Corp 0.0189% Industrials US
IFF International Flavors & Fragrances Inc 0.0189% Basic Materials US
ULTA Ulta Beauty Inc 0.0188% Consumer Discretionary US
WRT1V Wartsila OYJ Abp 0.0188% Industrials FI
KHC Kraft Heinz Co/The 0.0187% Consumer Staples US
IP International Paper Co 0.0187% Basic Materials US
4543 Terumo Corp 0.0187% Health Care JP
HEXAB Hexagon AB 0.0186% Technology SE
SNA Snap-on Inc 0.0186% Industrials US
DOW Dow Inc 0.0186% Industrials US
HUVR Hindustan Unilever Ltd 0.0186% Consumer Staples IN
LNT Alliant Energy Corp 0.0185% Utilities US
MKL Markel Group Inc 0.0185% Financials US
CDW CDW Corp/DE 0.0184% Technology US
GIS General Mills Inc 0.0183% Consumer Staples US
012330 Hyundai Mobis Co Ltd 0.0183% Consumer Discretionary KR
ESLT Elbit Systems Ltd 0.0183% Industrials IL
KER Kering SA 0.0183% Consumer Discretionary FR
STZ Constellation Brands Inc 0.0183% Consumer Staples US
BRO Brown & Brown Inc 0.0182% Financials US
PAAS Pan American Silver Corp 0.0182% Basic Materials CA
3231 Wistron Corp 0.0182% Technology TW
CTSH Cognizant Technology Solutions Corp 0.0181% Technology US
2899 Zijin Mining Group Co Ltd 0.0181% Basic Materials HK
SAABB Saab AB 0.0181% Industrials SE
AI Air Liquide SA 0.018% Basic Materials FR
INVH Invitation Homes Inc 0.018% Real Estate US
16 Sun Hung Kai Properties Ltd 0.018% Real Estate HK
FM First Quantum Minerals Ltd 0.0179% Basic Materials CA
CEMEXCPO Cemex SAB de CV 0.0179% Industrials MX
1347 Hua Hong Grace Semiconductor Ltd 0.0179% Technology HK
2412 Chunghwa Telecom Co Ltd 0.0178% Telecommunications TW
2503 Kirin Holdings Co Ltd 0.0178% Consumer Staples JP
PBK Public Bank Bhd 0.0178% Financials MY
068270 Celltrion Inc 0.0178% Health Care KR
BALL Ball Corp 0.0178% Industrials US
NTPC NTPC Ltd 0.0178% Utilities IN
035420 NAVER Corp 0.0178% Technology KR
EL Estee Lauder Cos Inc/The 0.0177% Consumer Discretionary US
SGSN SGS SA 0.0177% Industrials CH
TIT Telecom Italia SpA/Milano 0.0176% Telecommunications IT
SCMN Swisscom AG 0.0176% Telecommunications CH
EFX Equifax Inc 0.0176% Industrials US
KPN Koninklijke KPN NV 0.0176% Telecommunications NL
1088 China Shenhua Energy Co Ltd 0.0176% Energy HK
BMW Bayerische Motoren Werke AG 0.0176% Consumer Discretionary DE
FRE Fresenius SE & Co KGaA 0.0176% Health Care DE
DSFIR DSM-Firmenich AG 0.0176% Consumer Staples NL
ZBH Zimmer Biomet Holdings Inc 0.0175% Health Care US
9502 Chubu Electric Power Co Inc 0.0175% Utilities JP
9735 Secom Co Ltd 0.0175% Industrials JP
LEN Lennar Corp 0.0174% Consumer Discretionary US
3407 Asahi Kasei Corp 0.0174% Basic Materials JP
2884 E.Sun Financial Holding Co Ltd 0.0174% Financials TW
SBAC SBA Communications Corp 0.0173% Real Estate US
TTAN Titan Co Ltd 0.0173% Consumer Discretionary IN
ESS Essex Property Trust Inc 0.0173% Real Estate US
2269 Wuxi Biologics Cayman Inc 0.0173% Health Care HK
DAL Delta Air Lines Inc 0.0172% Consumer Discretionary US
NVR NVR Inc 0.0172% Consumer Discretionary US
FCNCA First Citizens BancShares Inc/NC 0.0172% Financials US
1812 Kajima Corp 0.0171% Industrials JP
GMAB Genmab A/S 0.0171% Health Care DK
9022 Central Japan Railway Co 0.0171% Industrials JP
5801 Furukawa Electric Co Ltd 0.017% Industrials JP
PGHN Partners Group Holding AG 0.0169% Financials CH
AXIA3 Axia Energia SA 0.0169% Utilities BR
KNEBV Kone Oyj 0.0169% Industrials FI
ESSITYB Essity AB 0.0168% Consumer Staples SE
BXB Brambles Ltd 0.0168% Industrials AU
6383 Daifuku Co Ltd 0.0168% Industrials JP
7936 Asics Corp 0.0167% Consumer Discretionary JP
SBIN State Bank of India 0.0167% Financials IN
HNR1 Hannover Rueck SE 0.0166% Financials DE
4661 Oriental Land Co Ltd/Japan 0.0166% Consumer Discretionary JP
ICT International Container Terminal Services Inc 0.0166% Industrials PH
NST Northern Star Resources Ltd 0.0165% Basic Materials AU
BAER Julius Baer Group Ltd 0.0165% Financials CH
1925 Daiwa House Industry Co Ltd 0.0165% Consumer Discretionary JP
4004 Resonac Holdings Corp 0.0165% Basic Materials JP
VAL Valterra Platinum Ltd 0.0165% Basic Materials ZA
ANTO Antofagasta PLC 0.0165% Basic Materials GB
STO Santos Ltd 0.0164% Energy AU
EVRG Evergy Inc 0.0164% Utilities US
006400 Samsung SDI Co Ltd 0.0164% Industrials KR
VNA Vonovia SE 0.0164% Real Estate DE
INF Informa PLC 0.0163% Consumer Discretionary GB
8795 T&D Holdings Inc 0.0163% Financials JP
TRN Terna - Rete Elettrica Nazionale 0.0163% Utilities IT
TIH Toromont Industries Ltd 0.0162% Industrials CA
WY Weyerhaeuser Co 0.0162% Real Estate US
SHBA Svenska Handelsbanken AB 0.0162% Financials SE
LOGN Logitech International SA 0.0162% Technology CH
BOL Boliden AB 0.0162% Basic Materials SE
6326 Kubota Corp 0.0162% Industrials JP
"""
