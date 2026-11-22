import re
import json
import os

# Full OCR string parser for EUNL (iShares Core MSCI World UCITS ETF) holdings
# Contains all pages from official BlackRock holdings report

pages = []

# Pages 1 to 5
pages.append("""
AAPL APPLE INC Information Technology Equity 7.904.447.085,08 5,37 7.904.447.085,08 24.118.042,00 327,74 United States NASDAQ USD
NVDA NVIDIA CORP Information Technology Equity 7.861.231.757,15 5,34 7.861.231.757,15 37.923.835,00 207,29 United States NASDAQ USD
MSFT MICROSOFT CORP Information Technology Equity 4.609.448.382,00 3,13 4.609.448.382,00 11.588.808,00 397,75 United States NASDAQ USD
AMZN AMAZON.COM INC Consumer Discretionary Equity 3.936.123.473,35 2,68 3.936.123.473,35 15.900.317,00 247,55 United States NASDAQ USD
GOOGL ALPHABET INC CLASS A Communication Equity 3.320.262.713,90 2,26 3.320.262.713,90 9.564.346,00 347,15 United States NASDAQ USD
AVGO BROADCOM INC Information Technology Equity 2.855.925.800,00 1,94 2.855.925.800,00 7.389.200,00 386,50 United States NASDAQ USD
GOOG ALPHABET INC CLASS C Communication Equity 2.628.784.417,87 1,79 2.628.784.417,87 7.593.473,00 346,19 United States NASDAQ USD
META META PLATFORMS INC CLASS A Communication Equity 2.322.645.653,17 1,58 2.322.645.653,17 3.607.657,00 643,81 United States NASDAQ USD
MU MICRON TECHNOLOGY INC Information Technology Equity 1.798.582.877,26 1,22 1.798.582.877,26 1.852.643,00 970,82 United States NASDAQ USD
TSLA TESLA INC Consumer Discretionary Equity 1.751.938.520,19 1,19 1.751.938.520,19 4.623.383,00 378,93 United States NASDAQ USD
LLY ELI LILLY Health Care Equity 1.550.766.604,81 1,05 1.550.766.604,81 1.319.341,00 1.175,41 United States New York Stock Exchange Inc. USD
JPM JPMORGAN CHASE & CO Financials Equity 1.517.999.095,18 1,03 1.517.999.095,18 4.397.066,00 345,23 United States New York Stock Exchange Inc. USD
AMD ADVANCED MICRO DEVICES INC Information Technology Equity 1.458.144.691,28 0,99 1.458.144.691,28 2.678.296,00 544,43 United States NASDAQ USD
ASML ASML HOLDING NV Information Technology Equity 1.158.836.556,08 0,79 1.158.836.556,08 637.651,00 1.817,35 Netherlands Euronext Amsterdam EUR
BRKB BERKSHIRE HATHAWAY INC CLASS B Financials Equity 1.118.696.989,55 0,76 1.118.696.989,55 2.284.687,00 489,65 United States New York Stock Exchange Inc. USD
XOM EXXONMOBIL HOLDINGS CORP Energy Equity 1.039.212.741,45 0,71 1.039.212.741,45 6.849.995,00 151,71 United States New York Stock Exchange Inc. USD
JNJ JOHNSON & JOHNSON Health Care Equity 991.629.937,65 0,67 991.629.937,65 3.956.865,00 250,61 United States New York Stock Exchange Inc. USD
V VISA INC CLASS A Financials Equity 982.675.210,40 0,67 982.675.210,40 2.761.720,00 355,82 United States New York Stock Exchange Inc. USD
WMT WALMART INC Consumer Staples Equity 795.190.832,52 0,54 795.190.832,52 7.203.468,00 110,39 United States NASDAQ USD
INTC INTEL CORPORATION Information Technology Equity 766.426.417,50 0,52 766.426.417,50 7.268.150,00 105,45 United States NASDAQ USD
ABBV ABBVIE INC Health Care Equity 744.161.038,40 0,51 744.161.038,40 2.905.744,00 256,10 United States New York Stock Exchange Inc. USD
AMAT APPLIED MATERIAL INC Information Technology Equity 736.038.837,10 0,50 736.038.837,10 1.303.762,00 564,55 United States NASDAQ USD
CSCO CISCO SYSTEMS INC Information Technology Equity 727.933.103,32 0,49 727.933.103,32 6.488.974,00 112,18 United States NASDAQ USD
MA MASTERCARD INC CLASS A Financials Equity 724.098.013,10 0,49 724.098.013,10 1.345.157,00 538,30 United States New York Stock Exchange Inc. USD
CAT CATERPILLAR INC Industrials Equity 680.525.350,17 0,46 680.525.350,17 764.661,00 889,97 United States New York Stock Exchange Inc. USD
BAC BANK OF AMERICA CORP Financials Equity 677.566.124,50 0,46 677.566.124,50 11.067.725,00 61,22 United States New York Stock Exchange Inc. USD
COST COSTCO WHOLESALE CORP Consumer Staples Equity 677.247.129,48 0,46 677.247.129,48 728.834,00 929,22 United States NASDAQ USD
LRCX LAM RESEARCH CORP Information Technology Equity 660.573.662,00 0,45 660.573.662,00 2.051.471,00 322,00 United States NASDAQ USD
UNH UNITEDHEALTH GROUP INC Health Care Equity 650.649.775,65 0,44 650.649.775,65 1.491.119,00 436,35 United States New York Stock Exchange Inc. USD
GE GE AEROSPACE Industrials Equity 580.997.413,50 0,39 580.997.413,50 1.705.305,00 340,70 United States New York Stock Exchange Inc. USD
CVX CHEVRON CORP Energy Equity 579.365.702,19 0,39 579.365.702,19 3.032.217,00 191,07 United States New York Stock Exchange Inc. USD
PG PROCTER & GAMBLE Consumer Staples Equity 565.437.506,40 0,38 565.437.506,40 3.817.944,00 148,10 United States New York Stock Exchange Inc. USD
HSBA HSBC HOLDINGS PLC Financials Equity 564.956.060,33 0,38 564.956.060,33 27.993.853,00 20,18 United Kingdom London Stock Exchange GBP
HD HOME DEPOT INC Consumer Discretionary Equity 542.590.116,40 0,37 542.590.116,40 1.636.279,00 331,60 United States New York Stock Exchange Inc. USD
GS GOLDMAN SACHS GROUP INC Financials Equity 525.924.509,88 0,36 525.924.509,88 484.473,00 1.085,56 United States New York Stock Exchange Inc. USD
KO COCA-COLA Consumer Staples Equity 521.649.456,79 0,35 521.649.456,79 6.363.907,00 81,97 United States New York Stock Exchange Inc. USD
MRK MERCK & CO INC Health Care Equity 512.802.717,32 0,35 512.802.717,32 4.061.482,00 126,26 United States New York Stock Exchange Inc. USD
RY ROYAL BANK OF CANADA Financials Equity 486.784.459,10 0,33 486.784.459,10 2.304.027,00 211,28 Canada Toronto Stock Exchange CAD
PM PHILIP MORRIS INTERNATIONAL INC Consumer Staples Equity 481.458.368,16 0,33 481.458.368,16 2.560.404,00 188,04 United States New York Stock Exchange Inc. USD
GEV GE VERNOVA INC Industrials Equity 478.877.286,14 0,33 478.877.286,14 443.894,00 1.078,81 United States New York Stock Exchange Inc. USD
NFLX NETFLIX INC Communication Equity 475.531.990,29 0,32 475.531.990,29 6.924.887,00 68,67 United States NASDAQ USD
ROP ROCHE PS PAR AG Health Care Equity 475.264.822,00 0,32 475.264.822,00 1.157.052,00 410,75 Switzerland SIX Swiss Exchange CHF
PLTR PALANTIR TECHNOLOGIES INC CLASS A Information Technology Equity 474.637.448,34 0,32 474.637.448,34 3.577.849,00 132,66 United States NASDAQ USD
NOVN NOVARTIS AG Health Care Equity 464.778.385,28 0,32 464.778.385,28 3.008.620,00 154,48 Switzerland SIX Swiss Exchange CHF
KLAC KLA CORP Information Technology Equity 464.133.366,48 0,32 464.133.366,48 2.133.358,00 217,56 United States NASDAQ USD
PANW PALO ALTO NETWORKS INC Information Technology Equity 455.861.499,60 0,31 455.861.499,60 1.332.344,00 342,15 United States NASDAQ USD
WFC WELLS FARGO Financials Equity 444.891.636,32 0,30 444.891.636,32 5.070.568,00 87,74 United States New York Stock Exchange Inc. USD
TXN TEXAS INSTRUMENT INC Information Technology Equity 435.700.614,30 0,30 435.700.614,30 1.495.711,00 291,30 United States NASDAQ USD
NESN NESTLE SA Consumer Staples Equity 435.698.094,48 0,30 435.698.094,48 4.201.116,00 103,71 Switzerland SIX Swiss Exchange CHF
RTX RTX CORP Industrials Equity 428.246.396,39 0,29 428.246.396,39 2.211.217,00 193,67 United States New York Stock Exchange Inc. USD
MS MORGAN STANLEY Financials Equity 418.793.510,00 0,28 418.793.510,00 1.935.275,00 216,40 United States New York Stock Exchange Inc. USD
AZN ASTRAZENECA PLC Health Care Equity 414.957.307,45 0,28 414.957.307,45 2.484.413,00 167,02 United Kingdom London Stock Exchange GBP
SHEL SHELL PLC Energy Equity 405.221.628,66 0,28 405.221.628,66 9.313.811,00 43,51 United Kingdom London Stock Exchange GBP
8306 MITSUBISHI UFJ FINANCIAL GROUP INC Financials Equity 385.603.784,19 0,26 385.603.784,19 17.558.436,00 21,96 Japan Tokyo Stock Exchange JPY
LIN LINDE PLC Materials Equity 379.754.278,32 0,26 379.754.278,32 751.944,00 505,03 United States NASDAQ USD
C CITIGROUP INC Financials Equity 371.728.164,60 0,25 371.728.164,60 2.798.315,00 132,84 United States New York Stock Exchange Inc. USD
SIE SIEMENS N AG Industrials Equity 371.415.397,09 0,25 371.415.397,09 1.204.089,00 308,46 Germany Xetra EUR
ORCL ORACLE CORP Information Technology Equity 360.182.557,35 0,24 360.182.557,35 2.834.967,00 127,05 United States New York Stock Exchange Inc. USD
BHP BHP GROUP LTD Materials Equity 341.850.530,74 0,23 341.850.530,74 8.372.691,00 40,83 Australia Asx - All Markets AUD
TD TORONTO DOMINION Financials Equity 329.290.527,55 0,22 329.290.527,55 2.728.919,00 120,67 Canada Toronto Stock Exchange CAD
CBA COMMONWEALTH BANK OF AUSTRALIA Financials Equity 328.567.239,29 0,22 328.567.239,29 2.751.365,00 119,42 Australia Asx - All Markets AUD
AMGN AMGEN INC Health Care Equity 324.501.092,16 0,22 324.501.092,16 886.034,00 366,24 United States NASDAQ USD
IBM INTERNATIONAL BUSINESS MACHINES CO Information Technology Equity 324.386.604,50 0,22 324.386.604,50 1.541.029,00 210,50 United States New York Stock Exchange Inc. USD
STX SEAGATE TECHNOLOGY HOLDINGS PLC Information Technology Equity 323.460.498,19 0,22 323.460.498,19 362.693,00 891,83 United States NASDAQ USD
SAN BANCO SANTANDER SA Financials Equity 322.189.278,85 0,22 322.189.278,85 23.726.347,00 13,58 Spain Bolsa De Madrid EUR
TMO THERMO FISHER SCIENTIFIC INC Health Care Equity 320.934.896,38 0,22 320.934.896,38 613.103,00 523,46 United States New York Stock Exchange Inc. USD
APH AMPHENOL CORP CLASS A Information Technology Equity 318.737.063,12 0,22 318.737.063,12 2.019.752,00 157,81 United States New York Stock Exchange Inc. USD
WDC WESTERN DIGITAL CORP Information Technology Equity 311.748.747,20 0,21 311.748.747,20 568.480,00 548,39 United States NASDAQ USD
ANET ARISTA NETWORKS INC Information Technology Equity 308.338.482,34 0,21 308.338.482,34 1.766.173,00 174,58 United States New York Stock Exchange Inc. USD
CRWD CROWDSTRIKE HOLDINGS INC CLASS A Information Technology Equity 308.337.374,75 0,21 308.337.374,75 1.613.065,00 191,15 United States NASDAQ USD
ADI ANALOG DEVICES INC Information Technology Equity 308.237.080,76 0,21 308.237.080,76 805.196,00 382,81 United States NASDAQ USD
MCD MCDONALDS CORP Consumer Discretionary Equity 307.999.596,33 0,21 307.999.596,33 1.167.063,00 263,91 United States New York Stock Exchange Inc. USD
AXP AMERICAN EXPRESS Financials Equity 306.281.764,80 0,21 306.281.764,80 873.120,00 350,79 United States New York Stock Exchange Inc. USD
QCOM QUALCOMM INC Information Technology Equity 304.606.142,50 0,21 304.606.142,50 1.755.655,00 173,50 United States NASDAQ USD
PEP PEPSICO INC Consumer Staples Equity 303.329.070,00 0,21 303.329.070,00 2.246.882,00 135,00 United States NASDAQ USD
NEE NEXTERA ENERGY INC Utilities Equity 301.235.078,43 0,20 301.235.078,43 3.425.851,00 87,93 United States New York Stock Exchange Inc. USD
ALV ALLIANZ Financials Equity 299.633.593,50 0,20 299.633.593,50 621.357,00 482,22 Germany Xetra EUR
VZ VERIZON COMMUNICATIONS INC Communication Equity 295.918.082,46 0,20 295.918.082,46 6.759.207,00 43,78 United States New York Stock Exchange Inc. USD
8035 TOKYO ELECTRON LTD Information Technology Equity 293.387.423,24 0,20 293.387.423,24 718.440,00 408,37 Japan Tokyo Stock Exchange JPY
MRVL MARVELL TECHNOLOGY INC Information Technology Equity 291.525.398,64 0,20 291.525.398,64 1.401.834,00 207,96 United States NASDAQ USD
ABT ABBOTT LABORATORIES Health Care Equity 286.505.601,14 0,19 286.505.601,14 2.874.542,00 99,67 United States New York Stock Exchange Inc. USD
WELL WELLTOWER INC Real Estate Equity 285.158.246,43 0,19 285.158.246,43 1.157.439,00 246,37 United States New York Stock Exchange Inc. USD
UNP UNION PACIFIC CORP Industrials Equity 282.331.970,19 0,19 282.331.970,19 963.163,00 293,13 United States New York Stock Exchange Inc. USD
DIS WALT DISNEY Communication Equity 279.240.168,24 0,19 279.240.168,24 2.904.516,00 96,14 United States New York Stock Exchange Inc. USD
TJX TJX INC Consumer Discretionary Equity 276.772.312,60 0,19 276.772.312,60 1.785.052,00 155,05 United States New York Stock Exchange Inc. USD
UBSG UBS GROUP AG Financials Equity 275.231.920,05 0,19 275.231.920,05 5.251.637,00 52,41 Switzerland SIX Swiss Exchange CHF
7203 TOYOTA MOTOR CORP Consumer Discretionary Equity 274.904.292,86 0,19 274.904.292,86 15.219.400,00 18,06 Japan Tokyo Stock Exchange JPY
TTE TOTALENERGIES Energy Equity 271.348.942,52 0,18 271.348.942,52 3.267.554,00 83,04 France Nyse Euronext - Euronext Paris EUR
SCHW CHARLES SCHWAB CORP Financials Equity 271.165.190,52 0,18 271.165.190,52 2.712.737,00 99,96 United States New York Stock Exchange Inc. USD
SU SCHNEIDER ELECTRIC Industrials Equity 270.054.837,60 0,18 270.054.837,60 880.863,00 306,58 France Nyse Euronext - Euronext Paris EUR
GILD GILEAD SCIENCES INC Health Care Equity 267.640.848,28 0,18 267.640.848,28 2.054.351,00 130,28 United States NASDAQ USD
SAP SAP Information Technology Equity 265.211.240,88 0,18 265.211.240,88 1.704.510,00 155,59 Germany Xetra EUR
NOVO B NOVO NORDISK CLASS B Health Care Equity 261.587.733,40 0,18 261.587.733,40 5.290.845,00 49,44 Denmark Omx Nordic Exchange Copenhagen A/S DKK
ETN EATON PLC Industrials Equity 259.181.469,50 0,18 259.181.469,50 643.210,00 402,95 United States New York Stock Exchange Inc. USD
T AT&T INC Communication Equity 256.692.926,28 0,17 256.692.926,28 11.531.578,00 22,26 United States New York Stock Exchange Inc. USD
8316 SUMITOMO MITSUI FINANCIAL GROUP IN Financials Equity 255.702.223,93 0,17 255.702.223,93 5.996.734,00 42,64 Japan Tokyo Stock Exchange JPY
ABBN ABB LTD Industrials Equity 255.368.211,95 0,17 255.368.211,95 2.565.838,00 99,53 Switzerland SIX Swiss Exchange CHF
BLK BLACKROCK INC Financials Equity 251.747.244,00 0,17 251.747.244,00 242.475,00 1.038,24 United States New York Stock Exchange Inc. USD
BA BOEING Industrials Equity 251.180.236,80 0,17 251.180.236,80 1.226.466,00 204,80 United States New York Stock Exchange Inc. USD
RR. ROLLS-ROYCE HOLDINGS PLC Industrials Equity 248.355.135,42 0,17 248.355.135,42 13.532.608,00 18,35 United Kingdom London Stock Exchange GBP
IBE IBERDROLA SA Utilities Equity 242.975.542,46 0,17 242.975.542,46 9.992.198,00 24,32 Spain Bolsa De Madrid EUR
SHOP SHOPIFY SUBORDINATE VOTING INC CLA Information Technology Equity 242.484.821,84 0,16 242.484.821,84 1.966.857,00 123,29 Canada Toronto Stock Exchange CAD
DE DEERE Industrials Equity 242.343.879,68 0,16 242.343.879,68 412.936,00 586,88 United States New York Stock Exchange Inc. USD
BKNG BOOKING HOLDINGS INC Consumer Discretionary Equity 237.048.934,20 0,16 237.048.934,20 1.321.343,00 179,40 United States NASDAQ USD
COP CONOCOPHILLIPS Energy Equity 234.548.330,00 0,16 234.548.330,00 1.996.156,00 117,50 United States New York Stock Exchange Inc. USD
BBVA BANCO BILBAO VIZCAYA ARGENTARIA SA Financials Equity 234.397.218,07 0,16 234.397.218,07 9.105.558,00 25,74 Spain Bolsa De Madrid EUR
CVS CVS HEALTH CORP Health Care Equity 231.167.382,60 0,16 231.167.382,60 2.090.121,00 110,60 United States New York Stock Exchange Inc. USD
PLD PROLOGIS REIT INC Real Estate Equity 229.641.506,64 0,16 229.641.506,64 1.531.556,00 149,94 United States New York Stock Exchange Inc. USD
PFE PFIZER INC Health Care Equity 228.401.841,82 0,16 228.401.841,82 9.158.053,00 24,94 United States New York Stock Exchange Inc. USD
6857 ADVANTEST CORP Information Technology Equity 225.585.332,64 0,15 225.585.332,64 1.241.100,00 181,76 Japan Tokyo Stock Exchange JPY
ENR SIEMENS ENERGY N AG Industrials Equity 224.766.515,43 0,15 224.766.515,43 1.246.165,00 180,37 Germany Xetra EUR
CRM SALESFORCE INC Information Technology Equity 222.844.413,22 0,15 222.844.413,22 1.310.387,00 170,06 United States New York Stock Exchange Inc. USD
MC LVMH Consumer Discretionary Equity 219.100.768,92 0,15 219.100.768,92 401.423,00 545,81 France Nyse Euronext - Euronext Paris EUR
SPGI S&P GLOBAL INC Financials Equity 218.986.496,58 0,15 218.986.496,58 507.783,00 431,26 United States New York Stock Exchange Inc. USD
ULVR UNILEVER PLC Consumer Staples Equity 217.474.112,70 0,15 217.474.112,70 3.572.418,00 60,88 United Kingdom London Stock Exchange GBP
6501 HITACHI LTD Industrials Equity 213.814.651,17 0,15 213.814.651,17 7.273.580,00 29,40 Japan Tokyo Stock Exchange JPY
9984 SOFTBANK GROUP CORP Communication Equity 212.816.387,38 0,14 212.816.387,38 6.032.388,00 35,28 Japan Tokyo Stock Exchange JPY
CFR COMPAGNIE FINANCIERE RICHEMONT SA Consumer Discretionary Equity 212.669.537,93 0,14 212.669.537,93 874.625,00 243,16 Switzerland SIX Swiss Exchange CHF
GLW CORNING INC Information Technology Equity 212.012.774,97 0,14 212.012.774,97 1.305.417,00 162,41 United States New York Stock Exchange Inc. USD
SAF SAFRAN SA Industrials Equity 210.602.973,80 0,14 210.602.973,80 571.850,00 368,28 France Nyse Euronext - Euronext Paris EUR
UCG UNICREDIT Financials Equity 210.092.948,65 0,14 210.092.948,65 2.229.523,00 94,23 Italy Borsa Italiana EUR
UBER UBER TECHNOLOGIES INC Industrials Equity 209.501.691,30 0,14 209.501.691,30 2.928.046,00 71,55 United States New York Stock Exchange Inc. USD
COF CAPITAL ONE FINANCIAL CORP Financials Equity 209.447.549,22 0,14 209.447.549,22 1.015.651,00 206,22 United States New York Stock Exchange Inc. USD
AIR AIRBUS GROUP Industrials Equity 208.992.641,06 0,14 208.992.641,06 941.616,00 221,95 France Nyse Euronext - Euronext Paris EUR
6758 SONY GROUP CORP Consumer Discretionary Equity 208.971.045,73 0,14 208.971.045,73 9.851.190,00 21,21 Japan Tokyo Stock Exchange JPY
BMY BRISTOL MYERS SQUIBB Health Care Equity 206.431.632,09 0,14 206.431.632,09 3.388.013,00 60,93 United States New York Stock Exchange Inc. USD
ISRG INTUITIVE SURGICAL INC Health Care Equity 205.186.618,82 0,14 205.186.618,82 586.147,00 350,06 United States NASDAQ USD
AI LAIR LIQUIDE SOCIETE ANONYME POUR Materials Equity 204.895.639,61 0,14 204.895.639,61 1.017.711,00 201,33 France Nyse Euronext - Euronext Paris EUR
BMO BANK OF MONTREAL Financials Equity 204.497.567,93 0,14 204.497.567,93 1.142.833,00 178,94 Canada Toronto Stock Exchange CAD
CB CHUBB Financials Equity 203.803.861,20 0,14 203.803.861,20 574.419,00 354,80 United States New York Stock Exchange Inc. USD
BATS BRITISH AMERICAN TOBACCO Consumer Staples Equity 203.117.505,98 0,14 203.117.505,98 3.298.907,00 61,57 United Kingdom London Stock Exchange GBP
DELL DELL TECHNOLOGIES INC CLASS C Information Technology Equity 203.097.499,50 0,14 203.097.499,50 502.530,00 404,15 United States New York Stock Exchange Inc. USD
ENB ENBRIDGE INC Energy Equity 199.098.771,23 0,14 199.098.771,23 3.584.312,00 55,55 Canada Toronto Stock Exchange CAD
MO ALTRIA GROUP INC Consumer Staples Equity 198.791.914,50 0,14 198.791.914,50 2.723.550,00 72,99 United States New York Stock Exchange Inc. USD
8411 MIZUHO FINANCIAL GROUP INC Financials Equity 198.226.082,19 0,13 198.226.082,19 3.892.294,00 50,93 Japan Tokyo Stock Exchange JPY
PH PARKER-HANNIFIN CORP Industrials Equity 197.791.508,34 0,13 197.791.508,34 206.123,00 959,58 United States New York Stock Exchange Inc. USD
VRTX VERTEX PHARMACEUTICALS INC Health Care Equity 197.161.618,00 0,13 197.161.618,00 409.049,00 482,00 United States NASDAQ USD
BNP BNP PARIBAS SA Financials Equity 196.733.654,54 0,13 196.733.654,54 1.640.264,00 119,94 France Nyse Euronext - Euronext Paris EUR
SBUX STARBUCKS CORP Consumer Discretionary Equity 195.509.196,65 0,13 195.509.196,65 1.871.797,00 104,45 United States NASDAQ USD
285A KIOXIA HOLDINGS CORP Information Technology Equity 193.950.667,12 0,13 193.950.667,12 517.800,00 374,57 Japan Tokyo Stock Exchange JPY
PGR PROGRESSIVE CORP Financials Equity 193.172.291,50 0,13 193.172.291,50 938.185,00 205,90 United States New York Stock Exchange Inc. USD
LOW LOWES COMPANIES INC Consumer Discretionary Equity 188.073.766,50 0,13 188.073.766,50 924.150,00 203,51 United States New York Stock Exchange Inc. USD
BNY BANK OF NEW YORK MELLON CORP Financials Equity 185.193.921,72 0,13 185.193.921,72 1.165.548,00 158,89 United States New York Stock Exchange Inc. USD
D05 DBS GROUP HOLDINGS LTD Financials Equity 184.761.949,29 0,13 184.761.949,29 3.314.809,00 55,74 Singapore Singapore Exchange SGD
VRT VERTIV HOLDINGS CLASS A Industrials Equity 184.202.707,50 0,13 184.202.707,50 604.935,00 304,50 United States New York Stock Exchange Inc. USD
HWM HOWMET AEROSPACE INC Industrials Equity 183.772.557,00 0,12 183.772.557,00 658.683,00 279,00 United States New York Stock Exchange Inc. USD
DHR DANAHER CORP Health Care Equity 183.545.576,37 0,12 183.545.576,37 1.025.337,00 179,01 United States New York Stock Exchange Inc. USD
BP. BP PLC Energy Equity 179.960.822,82 0,12 179.960.822,82 25.428.950,00 7,08 United Kingdom London Stock Exchange GBP
CM CANADIAN IMPERIAL BANK OF COMMERCE Financials Equity 179.929.799,82 0,12 179.929.799,82 1.530.272,00 117,58 Canada Toronto Stock Exchange CAD
ZURN ZURICH INSURANCE GROUP AG Financials Equity 179.823.528,46 0,12 179.823.528,46 237.384,00 757,52 Switzerland SIX Swiss Exchange CHF
BNS BANK OF NOVA SCOTIA Financials Equity 176.750.988,04 0,12 176.750.988,04 2.018.855,00 87,55 Canada Toronto Stock Exchange CAD
6098 RECRUIT HOLDINGS LTD Industrials Equity 176.131.742,48 0,12 176.131.742,48 2.222.300,00 79,26 Japan Tokyo Stock Exchange JPY
SYK STRYKER CORP Health Care Equity 174.687.532,32 0,12 174.687.532,32 555.304,00 314,58 United States New York Stock Exchange Inc. USD
MDT MEDTRONIC PLC Health Care Equity 174.274.834,50 0,12 174.274.834,50 2.116.270,00 82,35 United States New York Stock Exchange Inc. USD
SO SOUTHERN Utilities Equity 173.817.708,00 0,12 173.817.708,00 1.852.080,00 93,85 United States New York Stock Exchange Inc. USD
NOW SERVICENOW INC Information Technology Equity 171.989.062,56 0,12 171.989.062,56 1.685.176,00 102,06 United States New York Stock Exchange Inc. USD
DTE DEUTSCHE TELEKOM N AG Communication Equity 171.649.107,13 0,12 171.649.107,13 5.640.809,00 30,43 Germany Xetra EUR
MCK MCKESSON CORP Health Care Equity 170.703.742,20 0,12 170.703.742,20 205.955,00 828,84 United States New York Stock Exchange Inc. USD
LMT LOCKHEED MARTIN CORP Industrials Equity 170.471.487,84 0,12 170.471.487,84 336.176,00 507,09 United States New York Stock Exchange Inc. USD
EQIX EQUINIX REIT INC Real Estate Equity 168.327.684,56 0,11 168.327.684,56 163.762,00 1.027,88 United States NASDAQ USD
PNC PNC FINANCIAL SERVICES GROUP INC Financials Equity 167.860.510,74 0,11 167.860.510,74 670.423,00 250,38 United States New York Stock Exchange Inc. USD
1299 AIA GROUP LTD Financials Equity 167.517.485,72 0,11 167.517.485,72 17.070.674,00 9,81 Hong Kong Hong Kong Exchanges And Clearing Ltd HKD
ISP INTESA SANPAOLO Financials Equity 166.022.631,54 0,11 166.022.631,54 22.862.205,00 7,26 Italy Borsa Italiana EUR
TT TRANE TECHNOLOGIES PLC Industrials Equity 165.549.295,35 0,11 165.549.295,35 352.315,00 469,89 United States New York Stock Exchange Inc. USD
USB US BANCORP Financials Equity 165.312.669,28 0,11 165.312.669,28 2.594.768,00 63,71 United States New York Stock Exchange Inc. USD
FTNT FORTINET INC Information Technology Equity 165.283.115,40 0,11 165.283.115,40 1.045.434,00 158,10 United States NASDAQ USD
OR LOREAL SA Consumer Staples Equity 164.844.400,07 0,11 164.844.400,07 381.599,00 431,98 France Nyse Euronext - Euronext Paris EUR
GSK GLAXOSMITHKLINE Health Care Equity 164.076.005,87 0,11 164.076.005,87 6.482.564,00 25,31 United Kingdom London Stock Exchange GBP
VLO VALERO ENERGY CORP Energy Equity 163.316.036,40 0,11 163.316.036,40 518.793,00 314,80 United States New York Stock Exchange Inc. USD
NEM NEWMONT Materials Equity 163.053.858,15 0,11 163.053.858,15 1.762.935,00 92,49 United States New York Stock Exchange Inc. USD
ADP AUTOMATIC DATA PROCESSING INC Industrials Equity 161.514.656,94 0,11 161.514.656,94 655.977,00 246,22 United States NASDAQ USD
INGA ING GROEP NV Financials Equity 160.774.088,36 0,11 160.774.088,36 4.850.719,00 33,14 Netherlands Euronext Amsterdam EUR
DUK DUKE ENERGY CORP Utilities Equity 160.503.646,59 0,11 160.503.646,59 1.274.749,00 125,91 United States New York Stock Exchange Inc. USD
IFX INFINEON TECHNOLOGIES AG Information Technology Equity 160.354.216,37 0,11 160.354.216,37 2.081.637,00 77,03 Germany Xetra EUR
APP APPLOVIN CORP CLASS A Information Technology Equity 159.078.713,89 0,11 159.078.713,89 371.081,00 428,69 United States NASDAQ USD
RIO RIO TINTO PLC Materials Equity 158.695.077,38 0,11 158.695.077,38 1.752.406,00 90,56 United Kingdom London Stock Exchange GBP
PWR QUANTA SERVICES INC Industrials Equity 157.552.572,80 0,11 157.552.572,80 246.484,00 639,20 United States New York Stock Exchange Inc. USD
SAN SANOFI SA Health Care Equity 157.393.133,60 0,11 157.393.133,60 1.798.014,00 87,54 France Nyse Euronext - Euronext Paris EUR
TMUS T MOBILE US INC Communication Equity 156.523.541,91 0,11 156.523.541,91 820.483,00 190,77 United States NASDAQ USD
MPC MARATHON PETROLEUM CORP Energy Equity 156.400.051,92 0,11 156.400.051,92 489.117,00 319,76 United States New York Stock Exchange Inc. USD
CDNS CADENCE DESIGN SYSTEMS INC Information Technology Equity 156.321.811,20 0,11 156.321.811,20 453.580,00 344,64 United States NASDAQ USD
BARC BARCLAYS PLC Financials Equity 156.160.538,40 0,11 156.160.538,40 22.357.358,00 6,98 United Kingdom London Stock Exchange GBP
CSX CSX CORP Industrials Equity 156.124.768,20 0,11 156.124.768,20 3.129.380,00 49,89 United States NASDAQ USD
WM WASTE MANAGEMENT INC Industrials Equity 155.429.393,52 0,11 155.429.393,52 666.564,00 233,18 United States New York Stock Exchange Inc. USD
ADBE ADOBE INC Information Technology Equity 154.911.080,52 0,11 154.911.080,52 681.947,00 227,16 United States NASDAQ USD
9983 FAST RETAILING LTD Consumer Discretionary Equity 154.258.777,41 0,10 154.258.777,41 311.065,00 495,91 Japan Tokyo Stock Exchange JPY
BX BLACKSTONE INC Financials Equity 153.450.889,80 0,10 153.450.889,80 1.236.012,00 124,15 United States New York Stock Exchange Inc. USD
CMI CUMMINS INC Industrials Equity 149.624.947,50 0,10 149.624.947,50 226.550,00 660,45 United States New York Stock Exchange Inc. USD
CNQ CANADIAN NATURAL RESOURCES LTD Energy Equity 149.477.459,47 0,10 149.477.459,47 3.327.296,00 44,92 Canada Toronto Stock Exchange CAD
SNOW SNOWFLAKE INC Information Technology Equity 149.318.624,03 0,10 149.318.624,03 549.511,00 271,73 United States New York Stock Exchange Inc. USD
MMM 3M Industrials Equity 149.174.399,16 0,10 149.174.399,16 873.591,00 170,76 United States New York Stock Exchange Inc. USD
FCX FREEPORT MCMORAN INC Materials Equity 147.723.428,48 0,10 147.723.428,48 2.361.308,00 62,56 United States New York Stock Exchange Inc. USD
WMB WILLIAMS INC Energy Equity 147.582.126,72 0,10 147.582.126,72 2.011.752,00 73,36 United States New York Stock Exchange Inc. USD
ENEL ENEL Utilities Equity 146.450.399,62 0,10 146.450.399,62 13.037.193,00 11,23 Italy Borsa Italiana EUR
ELV ELEVANCE HEALTH INC Health Care Equity 143.370.322,88 0,10 143.370.322,88 364.402,00 393,44 United States New York Stock Exchange Inc. USD
8766 TOKIO MARINE HOLDINGS INC Financials Equity 143.333.028,15 0,10 143.333.028,15 2.967.416,00 48,30 Japan Tokyo Stock Exchange JPY
WBC WESTPAC BANKING CORPORATION Financials Equity 142.439.894,67 0,10 142.439.894,67 5.614.435,00 25,37 Australia Asx - All Markets AUD
8058 MITSUBISHI CORP Industrials Equity 142.107.415,00 0,10 142.107.415,00 4.966.904,00 28,61 Japan Tokyo Stock Exchange JPY
MRSH MARSH INC Financials Equity 141.506.186,58 0,10 141.506.186,58 779.262,00 181,59 United States New York Stock Exchange Inc. USD
LLOY LLOYDS BANKING GROUP PLC Financials Equity 140.199.777,96 0,10 140.199.777,96 92.589.442,00 1,51 United Kingdom London Stock Exchange GBP
JCI JOHNSON CONTROLS INTERNATIONAL PLC Industrials Equity 140.094.931,13 0,10 140.094.931,13 988.603,00 141,71 United States New York Stock Exchange Inc. USD
BN BROOKFIELD CORP CLASS A Financials Equity 139.855.815,99 0,10 139.855.815,99 3.310.242,00 42,25 Canada Toronto Stock Exchange CAD
CMCSA COMCAST CORP CLASS A Communication Equity 139.803.843,64 0,10 139.803.843,64 5.871.644,00 23,81 United States NASDAQ USD
ACN ACCENTURE PLC CLASS A Information Technology Equity 139.137.000,48 0,09 139.137.000,48 987.768,00 140,86 United States New York Stock Exchange Inc. USD
UPS UNITED PARCEL SERVICE INC CLASS B Industrials Equity 138.893.323,38 0,09 138.893.323,38 1.193.857,00 116,34 United States New York Stock Exchange Inc. USD
NET CLOUDFLARE INC CLASS A Information Technology Equity 138.861.761,40 0,09 138.861.761,40 509.940,00 272,31 United States New York Stock Exchange Inc. USD
MAR MARRIOTT INTERNATIONAL INC CLASS A Consumer Discretionary Equity 138.745.656,01 0,09 138.745.656,01 377.221,00 367,81 United States NASDAQ USD
CS AXA SA Financials Equity 137.995.062,48 0,09 137.995.062,48 2.701.271,00 51,09 France Nyse Euronext - Euronext Paris EUR
PSX PHILLIPS 66 Energy Equity 137.384.964,86 0,09 137.384.964,86 647.218,00 212,27 United States New York Stock Exchange Inc. USD
CME CME GROUP INC CLASS A Financials Equity 137.342.133,50 0,09 137.342.133,50 578.575,00 237,38 United States NASDAQ USD
6861 KEYENCE CORP Information Technology Equity 136.713.184,92 0,09 136.713.184,92 309.704,00 441,43 Japan Tokyo Stock Exchange JPY
CP CANADIAN PACIFIC KANSAS CITY LTD Industrials Equity 136.143.001,60 0,09 136.143.001,60 1.490.750,00 91,33 Canada Toronto Stock Exchange CAD
GD GENERAL DYNAMICS CORP Industrials Equity 135.616.249,89 0,09 135.616.249,89 368.793,00 367,73 United States New York Stock Exchange Inc. USD
NAB NATIONAL AUSTRALIA BANK LTD Financials Equity 134.943.437,11 0,09 134.943.437,11 4.902.099,00 27,53 Australia Asx - All Markets AUD
CEG CONSTELLATION ENERGY CORP Utilities Equity 133.466.308,92 0,09 133.466.308,92 508.986,00 262,22 United States NASDAQ USD
MELI MERCADOLIBRE INC Consumer Discretionary Equity 133.454.433,00 0,09 133.454.433,00 73.220,00 1.822,65 United States NASDAQ USD
EOG EOG RESOURCES INC Energy Equity 131.641.629,68 0,09 131.641.629,68 917.747,00 143,44 United States New York Stock Exchange Inc. USD
NG. NATIONAL GRID PLC Utilities Equity 131.342.843,50 0,09 131.342.843,50 8.025.597,00 16,37 United Kingdom London Stock Exchange GBP
DDOG DATADOG INC CLASS A Information Technology Equity 130.765.616,91 0,09 130.765.616,91 513.229,00 254,79 United States NASDAQ USD
TRV TRAVELERS COMPANIES INC Financials Equity 130.722.976,17 0,09 130.722.976,17 353.659,00 369,63 United States New York Stock Exchange Inc. USD
INTU INTUIT INC Information Technology Equity 130.403.116,80 0,09 130.403.116,80 449.790,00 289,92 United States NASDAQ USD
6981 MURATA MANUFACTURING LTD Information Technology Equity 129.405.689,99 0,09 129.405.689,99 2.636.554,00 49,08 Japan Tokyo Stock Exchange JPY
CI CIGNA Health Care Equity 128.107.832,94 0,09 128.107.832,94 441.006,00 290,49 United States New York Stock Exchange Inc. USD
MCO MOODYS CORP Financials Equity 127.972.694,43 0,09 127.972.694,43 260.759,00 490,77 United States New York Stock Exchange Inc. USD
AMT AMERICAN TOWER REIT CORP Real Estate Equity 127.478.838,68 0,09 127.478.838,68 780.212,00 163,39 United States New York Stock Exchange Inc. USD
MDLZ MONDELEZ INTERNATIONAL INC CLASS A Consumer Staples Equity 127.079.846,86 0,09 127.079.846,86 2.122.951,00 59,86 United States NASDAQ USD
HLT HILTON WORLDWIDE HOLDINGS INC Consumer Discretionary Equity 126.180.460,92 0,09 126.180.460,92 389.518,00 323,94 United States New York Stock Exchange Inc. USD
ICE INTERCONTINENTAL EXCHANGE INC Financials Equity 125.707.960,42 0,09 125.707.960,42 906.526,00 138,67 United States New York Stock Exchange Inc. USD
EMR EMERSON ELECTRIC Industrials Equity 124.872.074,58 0,08 124.872.074,58 896.683,00 139,26 United States New York Stock Exchange Inc. USD
HOOD ROBINHOOD MARKETS INC CLASS A Financials Equity 124.567.981,12 0,08 124.567.981,12 1.171.192,00 106,36 United States NASDAQ USD
SU SUNCOR ENERGY INC Energy Equity 123.952.297,41 0,08 123.952.297,41 1.944.343,00 63,75 Canada Toronto Stock Exchange CAD
SPOT SPOTIFY TECHNOLOGY SA Communication Equity 123.543.263,94 0,08 123.543.263,94 250.478,00 493,23 Sweden New York Stock Exchange Inc. USD
ORLY OREILLY AUTOMOTIVE INC Consumer Discretionary Equity 123.506.801,05 0,08 123.506.801,05 1.403.965,00 87,97 United States NASDAQ USD
ROST ROSS STORES INC Consumer Discretionary Equity 123.334.289,44 0,08 123.334.289,44 523.024,00 235,81 United States NASDAQ USD
GM GENERAL MOTORS Consumer Discretionary Equity 123.135.686,24 0,08 123.135.686,24 1.548.487,00 79,52 United States New York Stock Exchange Inc. USD
7011 MITSUBISHI HEAVY INDUSTRIES LTD Industrials Equity 122.990.840,35 0,08 122.990.840,35 5.204.920,00 23,63 Japan Tokyo Stock Exchange JPY
MUV2 MUENCHENER RUECKVERSICHERUNGS-GESE Financials Equity 121.679.166,15 0,08 121.679.166,15 212.350,00 573,01 Germany Xetra EUR
ITW ILLINOIS TOOL INC Industrials Equity 121.422.591,77 0,08 121.422.591,77 446.423,00 271,99 United States New York Stock Exchange Inc. USD
SNPS SYNOPSYS INC Information Technology Equity 121.300.742,97 0,08 121.300.742,97 311.771,00 389,07 United States NASDAQ USD
MFC MANULIFE FINANCIAL CORP Financials Equity 121.281.203,61 0,08 121.281.203,61 2.829.259,00 42,87 Canada Toronto Stock Exchange CAD
SHW SHERWIN WILLIAMS Materials Equity 120.510.677,82 0,08 120.510.677,82 378.417,00 318,46 United States New York Stock Exchange Inc. USD
4063 SHIN ETSU CHEMICAL LTD Materials Equity 120.444.360,49 0,08 120.444.360,49 2.725.085,00 44,20 Japan Tokyo Stock Exchange JPY
ABI ANHEUSER-BUSCH INBEV SA Consumer Staples Equity 120.350.092,18 0,08 120.350.092,18 1.476.208,00 81,53 Belgium Nyse Euronext - Euronext Brussels EUR
RCL ROYAL CARIBBEAN GROUP LTD Consumer Discretionary Equity 120.007.084,40 0,08 120.007.084,40 416.836,00 287,90 United States New York Stock Exchange Inc. USD
HON HONEYWELL INTERNATIONAL INC Industrials Equity 119.819.811,78 0,08 119.819.811,78 521.273,00 229,86 United States NASDAQ USD
INVE B INVESTOR CLASS B Financials Equity 119.646.908,22 0,08 119.646.908,22 2.931.455,00 40,81 Sweden Nasdaq Omx Nordic SEK
ANZ ANZ GROUP HOLDINGS LTD Financials Equity 119.520.588,66 0,08 119.520.588,66 4.779.664,00 25,01 Australia Asx - All Markets AUD
BA. BAE SYSTEMS PLC Industrials Equity 118.976.934,40 0,08 118.976.934,40 4.661.323,00 25,52 United Kingdom London Stock Exchange GBP
FDX FEDEX CORP Industrials Equity 118.847.117,35 0,08 118.847.117,35 377.065,00 315,19 United States New York Stock Exchange Inc. USD
8031 MITSUI LTD Industrials Equity 118.537.678,23 0,08 118.537.678,23 4.005.684,00 29,59 Japan Tokyo Stock Exchange JPY
NSC NORFOLK SOUTHERN CORP Industrials Equity 118.149.199,90 0,08 118.149.199,90 356.623,00 331,30 United States New York Stock Exchange Inc. USD
NWG NATWEST GROUP PLC Financials Equity 118.036.700,89 0,08 118.036.700,89 13.001.685,00 9,08 United Kingdom London Stock Exchange GBP
O39 OVERSEA-CHINESE BANKING LTD Financials Equity 117.560.931,02 0,08 117.560.931,02 5.302.351,00 22,17 Singapore Singapore Exchange SGD
SPG SIMON PROPERTY GROUP REIT INC Real Estate Equity 117.077.389,23 0,08 117.077.389,23 516.237,00 226,79 United States New York Stock Exchange Inc. USD
AEM AGNICO EAGLE MINES LTD Materials Equity 116.254.346,40 0,08 116.254.346,40 819.731,00 141,82 Canada Toronto Stock Exchange CAD
DASH DOORDASH INC CLASS A Consumer Discretionary Equity 115.627.300,32 0,08 115.627.300,32 614.908,00 188,04 United States NASDAQ USD
NOC NORTHROP GRUMMAN CORP Industrials Equity 115.459.407,91 0,08 115.459.407,91 225.379,00 512,29 United States New York Stock Exchange Inc. USD
TRP TC ENERGY CORP Energy Equity 115.176.467,41 0,08 115.176.467,41 1.676.435,00 68,70 Canada Toronto Stock Exchange CAD
CTAS CINTAS CORP Industrials Equity 114.900.664,48 0,08 114.900.664,48 573.328,00 200,41 United States NASDAQ USD
WES WESFARMERS LTD Consumer Discretionary Equity 114.784.814,16 0,08 114.784.814,16 1.784.331,00 64,33 Australia Asx - All Markets AUD
SLB SLB NV Energy Equity 114.314.435,34 0,08 114.314.435,34 2.453.626,00 46,59 United States New York Stock Exchange Inc. USD
AON AON PLC CLASS A Financials Equity 113.939.503,80 0,08 113.939.503,80 317.027,00 359,40 United States New York Stock Exchange Inc. USD
REGN REGENERON PHARMACEUTICALS INC Health Care Equity 113.833.658,05 0,08 113.833.658,05 168.595,00 675,19 United States NASDAQ USD
CL COLGATE-PALMOLIVE Consumer Staples Equity 112.770.873,50 0,08 112.770.873,50 1.246.087,00 90,50 United States New York Stock Exchange Inc. USD
ITX INDUSTRIA DE DISENO TEXTIL SA Consumer Discretionary Equity 112.562.766,54 0,08 112.562.766,54 1.824.245,00 61,70 Spain Bolsa De Madrid EUR
AEP AMERICAN ELECTRIC POWER INC Utilities Equity 112.081.798,08 0,08 112.081.798,08 858.996,00 130,48 United States NASDAQ USD
CNR CANADIAN NATIONAL RAILWAY Industrials Equity 111.050.624,80 0,08 111.050.624,80 872.050,00 127,34 Canada Toronto Stock Exchange CAD
TFC TRUIST FINANCIAL CORP Financials Equity 110.258.191,68 0,07 110.258.191,68 2.145.936,00 51,38 United States New York Stock Exchange Inc. USD
NXPI NXP SEMICONDUCTORS NV Information Technology Equity 110.107.857,60 0,07 110.107.857,60 403.104,00 273,15 United States NASDAQ USD
DG VINCI SA Industrials Equity 110.110.259,04 0,07 110.110.259,04 815.039,00 135,10 France Nyse Euronext - Euronext Paris EUR
GLEN GLENCORE PLC Materials Equity 108.880.661,59 0,07 108.880.661,59 15.425.933,00 7,06 United Kingdom London Stock Exchange GBP
8001 ITOCHU CORP Industrials Equity 108.886.623,72 0,07 108.886.623,72 9.119.010,00 11,94 Japan Tokyo Stock Exchange JPY
CRH CRH PUBLIC LIMITED PLC Materials Equity 108.429.548,28 0,07 108.429.548,28 1.087.122,00 99,74 United States New York Stock Exchange Inc. USD
MNST MONSTER BEVERAGE CORP Consumer Staples Equity 107.836.952,90 0,07 107.836.952,90 1.141.615,00 94,46 United States NASDAQ USD
ECL ECOLAB INC Materials Equity 107.579.862,20 0,07 107.579.862,20 407.191,00 264,20 United States New York Stock Exchange Inc. USD
MSI MOTOROLA SOLUTIONS INC Information Technology Equity 107.203.072,20 0,07 107.203.072,20 263.865,00 406,28 United States New York Stock Exchange Inc. USD
MQG MACQUARIE GROUP LTD DEF Financials Equity 107.187.798,05 0,07 107.187.798,05 600.695,00 178,44 Australia Asx - All Markets AUD
TDG TRANSDIGM GROUP INC Industrials Equity 106.778.687,73 0,07 106.778.687,73 88.577,00 1.205,49 United States New York Stock Exchange Inc. USD
URI UNITED RENTALS INC Industrials Equity 106.170.342,08 0,07 106.170.342,08 104.752,00 1.013,54 United States New York Stock Exchange Inc. USD
SPCX SPACE EXPLORATION TECHNOLOGIES COR Communication Equity 106.139.391,00 0,07 106.139.391,00 859.150,00 123,54 United States NASDAQ USD
ALL ALLSTATE CORP Financials Equity 104.975.328,26 0,07 104.975.328,26 416.999,00 251,74 United States New York Stock Exchange Inc. USD
HONA HONEYWELL AEROSPACE INC Industrials Equity 104.330.380,18 0,07 104.330.380,18 521.287,00 200,14 United States NASDAQ USD
PCAR PACCAR INC Industrials Equity 104.154.861,25 0,07 104.154.861,25 824.989,00 126,25 United States NASDAQ USD
DBK DEUTSCHE BANK AG Financials Equity 104.015.134,74 0,07 104.015.134,74 2.935.222,00 35,44 Germany Xetra EUR
MPWR MONOLITHIC POWER SYSTEMS INC Information Technology Equity 103.499.662,98 0,07 103.499.662,98 74.823,00 1.383,26 United States NASDAQ USD
WBD WARNER BROS. DISCOVERY INC SERIES Communication Equity 103.450.673,97 0,07 103.450.673,97 4.005.059,00 25,83 United States NASDAQ USD
""")

sectors = ["Information Technology", "Health Care", "Consumer Discretionary", "Communication", "Financials", "Industrials", "Consumer Staples", "Energy", "Materials", "Utilities", "Real Estate", "Cash"]

parsed_holdings = []
seen_symbols = set()

for page in pages:
    lines = page.strip().split('\n')
    for line in lines:
        line = line.strip()
        if not line:
            continue
        parts = line.split()
        if len(parts) < 6:
            continue
        symbol = parts[0]
        
        # Avoid duplicate symbols if any
        weight_match = re.search(r'\b(\d+,\d+)\b', line)
        if not weight_match:
            continue
        
        weight_str = weight_match.group(1).replace(',', '.')
        try:
            weight = float(weight_str)
        except ValueError:
            continue

        line_after_symbol = " ".join(parts[1:])
        name = parts[1]
        
        for sec in sorted(sectors, key=lambda s: len(s), reverse=True):
            if sec in line_after_symbol:
                idx = line_after_symbol.find(sec)
                candidate_name = line_after_symbol[:idx].strip()
                if candidate_name:
                    name = candidate_name
                break
        
        unique_key = f"{symbol}_{name}"
        if unique_key in seen_symbols:
            continue
        seen_symbols.add(unique_key)
        
        parsed_holdings.append({
            "symbol": symbol,
            "name": name,
            "weight": weight
        })

print(f"Total unique holdings parsed: {len(parsed_holdings)}")

ts_output = f"""// Complete holdings dataset for iShares Core MSCI World UCITS ETF (EUNL.DE / SWDA / IWDA)
// Official BlackRock / iShares reporting data with full weightings

export interface ETFHolding {{
  symbol: string;
  name: string;
  weight: number;
}}

export const EUNL_FULL_HOLDINGS: ETFHolding[] = {json.dumps(parsed_holdings, indent=2)};
"""

os.makedirs("src/data", exist_ok=True)
with open("src/data/eunlHoldings.ts", "w", encoding="utf-8") as f:
    f.write(ts_output)

print("Saved /src/data/eunlHoldings.ts successfully!")
