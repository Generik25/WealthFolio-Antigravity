import re
import json

raw_pages = [
    # Page 1
    """
1 APPLE INC US0378331005 United States USD Equities Technology 5,23%
2 META PLATFORMS INC CLASS A US30303M1027 United States USD Equities Technology 5,06%
3 NVIDIA CORP US67066G1040 United States USD Equities Technology 4,90%
4 MICROSOFT CORP US5949181045 United States USD Equities Technology 4,81%
5 AMAZON COM INC US0231351067 United States USD Equities Consumer Discretionary 4,61%
6 WALMART INC US9311421039 United States USD Equities Consumer Discretionary 4,50%
7 ADVANCED MICRO DEVICES INC US0079031078 United States USD Equities Technology 4,37%
8 ALPHABET INC CLASS A US02079K3059 United States USD Equities Technology 4,18%
9 CISCO SYSTEMS INC US17275R1023 United States USD Equities Telecommunications 4,05%
10 MICRON TECHNOLOGY INC US5951121038 United States USD Equities Technology 4,03%
11 SAMSUNG ELECTRONICS LTD KR7005930003 Korea, Republic of KRW Equities Telecommunications 4,01%
12 BANK OF AMERICA CORP US0605051046 United States USD Equities Financials 3,91%
13 SK HYNIX INC KR7000660001 Korea, Republic of KRW Equities Technology 3,60%
14 INTEL CORPORATION CORP US4581401001 United States USD Equities Technology 3,37%
15 ALIBABA GROUP HOLDING ADR REPRESEN US01609W1027 China USD Equities Consumer Discretionary 2,83%
16 PALANTIR TECHNOLOGIES INC CLASS A US69608A1088 United States USD Equities Technology 2,69%
17 DELL TECHNOLOGIES INC CLASS C US24703L2025 United States USD Equities Technology 2,60%
18 PALO ALTO NETWORKS INC US6974351057 United States USD Equities Technology 2,42%
19 ORACLE CORP US68389X1054 United States USD Equities Technology 2,15%
20 ARISTA NETWORKS INC US0404132054 United States USD Equities unknown 1,84%
21 INTERNATIONAL BUSINESS MACHINES CO US4592001014 United States USD Equities Technology 1,77%
22 CROWDSTRIKE HOLDINGS INC CLASS A US22788C1053 United States USD Equities Technology 1,70%
23 VERIZON COMMUNICATIONS INC US92343V1044 United States USD Equities Telecommunications 1,67%
24 SAP DE0007164600 Germany EUR Equities Technology 1,66%
25 WESTERN DIGITAL CORP US9581021055 United States USD Equities Technology 1,57%
26 AT&T INC US00206R1023 United States USD Equities Telecommunications 1,45%
27 SALESFORCE INC US79466L3024 United States USD Equities Technology 1,14%
28 HON HAI PRECISION INDUSTRY LTD TW0002317005 Taiwan TWD Equities Technology 1,02%
29 SNOWFLAKE INC US8334451098 United States USD Equities Technology 0,95%
30 SERVICENOW INC US81762P1021 United States USD Equities Technology 0,86%
31 FORTINET INC US34959E1091 United States USD Equities Technology 0,83%
32 ACCENTURE PLC CLASS A IE00B4BNMY34 United States USD Equities Industrials 0,77%
33 ADOBE INC US00724F1012 United States USD Equities Technology 0,76%
34 INTUIT INC US4612021034 United States USD Equities Technology 0,70%
35 CAMBRICON TECHNOLOGIES CORPORATION CNE1000041R8 China CNY Equities Technology 0,59%
36 HEWLETT PACKARD ENTERPRISE US42824C1099 United States USD Equities Technology 0,54%
37 HYGON INFORMATION TECHNOLOGY LTD A CNE100005PT2 China CNY Equities Technology 0,48%
38 CIENA CORP US1717793095 United States USD Equities Telecommunications 0,37%
39 NEC CORP JP3733000008 Japan JPY Equities Technology 0,35%
""",
    # Page 2
    """
40 FUJITSU LTD JP3818000006 Japan JPY Equities Technology 0,34%
41 NETAPP INC US64110D1046 United States USD Equities Technology 0,27%
42 ZOOM COMMUNICATIONS INC CLASS A US98980L1017 United States USD Equities Technology 0,24%
43 MONGODB INC CLASS A US60937P1066 United States USD Equities Technology 0,23%
44 TWILIO INC CLASS A US90138F1021 United States USD Equities Technology 0,23%
45 NAVER CORP KR7035420009 Korea, Republic of KRW Equities Technology 0,22%
46 CHINA TOWER CORP LTD H CNE100006V65 China HKD Equities unknown 0,21%
47 EVERPURE INC CLASS A US74624M1027 United States USD Equities Technology 0,18%
48 OKTA INC CLASS A US6792951054 United States USD Equities Technology 0,18%
49 BT GROUP PLC GB0030913577 United Kingdom GBP Equities Telecommunications 0,17%
50 ATLASSIAN CORP CLASS A US0494681010 United States USD Equities Technology 0,17%
51 F5 INC US3156161024 United States USD Equities Technology 0,17%
52 TCL TECHNOLOGY GROUP CORP A CNE000001GL8 China CNY Equities Technology 0,16%
53 ZSCALER INC US98980G1022 United States USD Equities Technology 0,16%
54 RUBRIK INC CLASS A US7811541090 United States USD Equities unknown 0,15%
55 AKAMAI TECHNOLOGIES INC US00971T1016 United States USD Equities Technology 0,15%
56 CDW CORP US12514G1085 United States USD Equities Technology 0,14%
57 IEIT SYSTEMS CO LTD CNE0000012M2 China CNY Equities Technology 0,13%
58 IFLYTEK LTD A CNE100000B81 China CNY Equities Technology 0,13%
59 IONQ INC US46222L1089 United States USD Equities Technology 0,13%
60 CHECK POINT SOFTWARE TECHNOLOGIES IL0010824113 Israel USD Equities Technology 0,10%
61 NUTANIX INC CLASS A US67059N1081 United States USD Equities Technology 0,10%
62 MACRONIX INTERNATIONAL LTD TW0002337003 Taiwan TWD Equities Technology 0,08%
63 HUBSPOT INC US4435731009 United States USD Equities Technology 0,08%
64 RAKUTEN GROUP INC JP3967200001 Japan JPY Equities Technology 0,08%
65 MAPLEBEAR INC US5653941030 United States USD Equities unknown 0,08%
66 DOCUSIGN INC US2561631068 United States USD Equities Technology 0,07%
67 INVENTEC CORP TW0002356003 Taiwan TWD Equities Technology 0,07%
68 CASH_AND_DERIVATIVES IE00BYQNZ507 Ireland USD Equities unknown 0,07%
69 HORIZON ROBOTICS KYG4602S1057 China HKD Equities unknown 0,07%
70 SENSETIME GROUP CLASS B INC KYG8062L1041 China HKD Equities Technology 0,06%
71 SNAP INC CLASS A US83304A1060 United States USD Equities Technology 0,06%
72 PROCORE TECHNOLOGIES INC US74275K1088 United States USD Equities Technology 0,05%
73 BENTLEY SYSTEMS INC CLASS B US08265T2087 United States USD Equities Technology 0,05%
74 SAMSUNG SDS LTD KR7018260000 Korea, Republic of KRW Equities Technology 0,05%
75 NICE ADR REPRESENTING LTD US6536561086 Israel USD Equities Telecommunications 0,05%
76 COMMVAULT SYSTEMS INC US2041661024 United States USD Equities Technology 0,05%
77 OPEN TEXT CORP CA6837151068 Canada CAD Equities Technology 0,05%
78 VARONIS SYSTEMS INC US9222801022 United States USD Equities Technology 0,05%
79 DROPBOX INC CLASS A US26210C1045 United States USD Equities Technology 0,04%
80 SANGFOR TECHNOLOGIES INC A CNE1000033T1 China CNY Equities Technology 0,04%
81 BLACKBERRY LTD CA09228F1036 Canada CAD Equities Technology 0,04%
82 SYNAPTICS INC US87157D1090 United States USD Equities Technology 0,04%
83 UIPATH INC CLASS A US90364P1057 United States USD Equities Technology 0,04%
84 QUANTUMCTEK LTD A CNE100004231 China CNY Equities unknown 0,04%
85 NETSKOPE INC CLASS A US64119N6085 United States USD Equities unknown 0,04%
86 KINGSOFT LTD KYG5264Y1089 China HKD Equities Technology 0,03%
87 KINGSOFT CLOUD HOLDINGS ADR REPRES US49639K1016 China USD Equities Technology 0,03%
88 MITAC HOLDINGS CORP TW0003706008 Taiwan TWD Equities unknown 0,03%
89 SHENZHEN INTELLIFUSION TECHNOLOGIE CNE100006038 China CNY Equities unknown 0,03%
""",
    # Page 3
    """
90 NEW TAIWAN DOLLAR _CURRENCYTWD Taiwan TWD Cash unknown 0,03%
91 SOUTH KOREAN WON _CURRENCYKRW Korea, Republic of KRW Cash unknown 0,02%
92 SOUNDHOUND AI INC CLASS A US8361001071 United States USD Equities Technology 0,02%
93 US DOLLAR _CURRENCYUSD United States USD Cash unknown 0,02%
94 NETSCOUT SYSTEMS INC US64115T1043 United States USD Equities Technology 0,02%
95 KINAXIS INC CA49448Q1090 Canada CAD Equities Technology 0,02%
96 KYNDRYL HOLDINGS INC US50155Q1004 United States USD Equities Technology 0,02%
97 MEITU INC KYG5966D1051 China HKD Equities Telecommunications 0,02%
98 GETAC HOLDINGS CORP TW0003005005 Taiwan TWD Equities Technology 0,02%
99 VENUSTECH GROUP INC A CNE100000QJ2 China CNY Equities Technology 0,02%
100 TAIJI COMPUTER CORP LTD A CNE100000M47 China CNY Equities Technology 0,01%
101 VIA TECHNOLOGIES INC TW0002388006 Taiwan TWD Equities Technology 0,01%
102 SINODATA CO LTD A CNE100001C71 China CNY Equities unknown 0,01%
103 NSFOCUS TECHNOLOGIES GROUP A CNE100001S32 China CNY Equities Technology 0,01%
104 INSPUR SOFTWARE CO LTD A CNE000000M49 China CNY Equities unknown 0,01%
105 JAPANESE YEN _CURRENCYJPY Japan JPY Cash unknown 0,00%
106 HONG KONG DOLLAR _CURRENCYHKD Hong Kong HKD Cash unknown 0,00%
107 POUND STERLING _CURRENCYGBP United Kingdom GBP Cash unknown 0,00%
108 EURO CURRENCY _CURRENCYEUR - EUR Cash unknown 0,00%
109 AUSTRALIAN DOLLAR _CURRENCYAUD Australia AUD Cash unknown 0,00%
110 CANADIAN DOLLAR _CURRENCYCAD Canada CAD Cash unknown 0,00%
111 SWEDISH KRONA _CURRENCYSEK Sweden SEK Cash unknown 0,00%
"""
]

holdings = []
pattern = re.compile(r'^(\d+)\s+(.+?)\s+([A-Z0-9\_]{12})\s+(.+?)\s+([A-Z]{3})\s+(Equities|Cash)\s+(.+?)\s+([\d\.\,\-]+)\%$')

ticker_map = {
    "US0378331005": "AAPL",
    "US30303M1027": "META",
    "US67066G1040": "NVDA",
    "US5949181045": "MSFT",
    "US0231351067": "AMZN",
    "US9311421039": "WMT",
    "US0079031078": "AMD",
    "US02079K3059": "GOOGL",
    "US17275R1023": "CSCO",
    "US5951121038": "MU",
    "KR7005930003": "005930",
    "US0605051046": "BAC",
    "KR7000660001": "000660",
    "US4581401001": "INTC",
    "US01609W1027": "BABA",
    "US69608A1088": "PLTR",
    "US24703L2025": "DELL",
    "US6974351057": "PANW",
    "US68389X1054": "ORCL",
    "US0404132054": "ANET",
    "US4592001014": "IBM",
    "US22788C1053": "CRWD",
    "US92343V1044": "VZ",
    "DE0007164600": "SAP",
    "US9581021055": "WDC",
    "US00206R1023": "T",
    "US79466L3024": "CRM",
    "TW0002317005": "2317",
    "US8334451098": "SNOW",
    "US81762P1021": "NOW",
    "US34959E1091": "FTNT",
    "IE00B4BNMY34": "ACN",
    "US00724F1012": "ADBE",
    "US4612021034": "INTU",
    "US42824C1099": "HPE",
    "US1717793095": "CIEN",
    "JP3733000008": "6701",
    "JP3818000006": "6702",
    "US64110D1046": "NTAP",
    "US98980L1017": "ZM",
    "US60937P1066": "MDB",
    "US90138F1021": "TWLO",
    "KR7035420009": "035420",
    "US6792951054": "OKTA",
    "US0494681010": "TEAM",
    "US3156161024": "FFIV",
    "US98980G1022": "ZS",
    "US7811541090": "RBRK",
    "US00971T1016": "AKAM",
    "US12514G1085": "CDW",
    "US46222L1089": "IONQ",
    "IL0010824113": "CHKP",
    "US67059N1081": "NTNX",
    "US4435731009": "HUBS",
    "US2561631068": "DOCU",
    "US83304A1060": "SNAP",
    "US74275K1088": "PCOR",
    "US08265T2087": "BSY",
    "KR7018260000": "018260",
    "US6536561086": "NICE",
    "US2041661024": "CVLT",
    "CA6837151068": "OTEX",
    "US9222801022": "VRNS",
    "US26210C1045": "DBX",
    "CA09228F1036": "BB",
    "US87157D1090": "SWKS",
    "US90364P1057": "PATH",
    "US8361001071": "SOUN",
    "US64115T1043": "NTCT",
    "CA49448Q1090": "KXS",
    "US50155Q1004": "KD"
}

for page in raw_pages:
    for line in page.strip().split('\n'):
        line = line.strip()
        if not line:
            continue
        m = pattern.match(line)
        if m:
            idx, name, isin, country, currency, sec_type, ind_class, weight_str = m.groups()
            w = float(weight_str.replace(',', '.'))
            
            # map industry/sector
            sector = "Information Technology"
            if ind_class in ["Telecommunications"]:
                sector = "Communication Services"
            elif ind_class in ["Consumer Discretionary"]:
                sector = "Consumer Discretionary"
            elif ind_class in ["Financials"]:
                sector = "Financials"
            elif ind_class in ["Industrials"]:
                sector = "Industrials"
            elif sec_type == "Cash":
                sector = "Cash and/or Derivatives"
                
            sym = ticker_map.get(isin, isin[:8])
            if sec_type == "Cash":
                sym = currency
                
            holdings.append({
                "symbol": sym,
                "name": name,
                "sector": sector,
                "assetClass": sec_type,
                "weight": round(w, 4),
                "location": country,
                "currency": currency
            })

print(f"Total parsed XAIX holdings count: {len(holdings)}")

sector_allocations = [
  {"name": "Information Technology", "weight": 79.50},
  {"name": "Communication Services", "weight": 11.20},
  {"name": "Consumer Discretionary", "weight": 4.60},
  {"name": "Financials", "weight": 3.91},
  {"name": "Industrials", "weight": 0.77},
  {"name": "Cash / Other", "weight": 0.02}
]

country_allocations = [
  {"name": "United States", "weight": 83.50},
  {"name": "South Korea", "weight": 7.88},
  {"name": "China", "weight": 4.60},
  {"name": "Taiwan", "weight": 1.25},
  {"name": "Japan", "weight": 0.77},
  {"name": "Germany", "weight": 1.66},
  {"name": "Israel", "weight": 0.15},
  {"name": "Canada", "weight": 0.11},
  {"name": "United Kingdom", "weight": 0.17},
  {"name": "Ireland", "weight": 0.07}
]

ts_content = f"""// Complete holdings dataset for Xtrackers Artificial Intelligence & Big Data UCITS ETF 1C (XAIX.DE / XAIX / XAID / ISIN: IE00BGV5VN51)
// Official DWS / Xtrackers reporting data with full weightings, sectors, asset classes and geographic locations ({len(holdings)} holdings).

import {{ ETFHolding }} from './meudHoldings';

export type {{ ETFHolding }};

export const XAIX_SECTOR_ALLOCATIONS = {json.dumps(sector_allocations, indent=2)};

export const XAIX_COUNTRY_ALLOCATIONS = {json.dumps(country_allocations, indent=2)};

export const XAIX_FULL_HOLDINGS: ETFHolding[] = {json.dumps(holdings, indent=2)};
"""

with open("src/data/xaixHoldings.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Successfully generated src/data/xaixHoldings.ts!")
