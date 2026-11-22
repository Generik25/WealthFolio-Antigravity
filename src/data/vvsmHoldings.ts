// Complete holdings dataset for VanEck Semiconductor UCITS ETF (VVSM.DE / SMH / SMGB.L / ISIN: IE00BMC38736)
// Official VanEck reporting data with full weightings, sectors, asset classes and geographic locations (26 holdings).

import { ETFHolding } from './meudHoldings';

export type { ETFHolding };

export const VVSM_SECTOR_ALLOCATIONS = [
  {
    "name": "Information Technology",
    "weight": 99.99
  },
  {
    "name": "Cash / Other",
    "weight": 0.01
  }
];

export const VVSM_COUNTRY_ALLOCATIONS = [
  {
    "name": "United States",
    "weight": 76.49
  },
  {
    "name": "Netherlands",
    "weight": 10.85
  },
  {
    "name": "Taiwan",
    "weight": 9.92
  },
  {
    "name": "Switzerland",
    "weight": 0.57
  },
  {
    "name": "Cash / Other",
    "weight": 0.17
  }
];

export const VVSM_FULL_HOLDINGS: ETFHolding[] = [
  {
    "symbol": "AMD",
    "name": "Advanced Micro Devices Inc",
    "isin": "US0079031078",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 11.6,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MU",
    "name": "Micron Technology Inc",
    "isin": "US5951121038",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 10.38,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NVDA",
    "name": "NVIDIA Corp",
    "isin": "US67066G1040",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 10.37,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AVGO",
    "name": "Broadcom Inc",
    "isin": "US11135F1012",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 10.32,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ASML",
    "name": "ASML Holding NV",
    "isin": "USN070592100",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 10.13,
    "location": "Netherlands",
    "currency": "USD"
  },
  {
    "symbol": "TSM",
    "name": "Taiwan Semiconductor Manufacturing Co Ltd",
    "isin": "US8740391003",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 9.92,
    "location": "Taiwan",
    "currency": "USD"
  },
  {
    "symbol": "INTC",
    "name": "Intel Corp",
    "isin": "US4581401001",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 6.11,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "AMAT",
    "name": "Applied Materials Inc",
    "isin": "US0382221051",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 5.82,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "LRCX",
    "name": "Lam Research Corp",
    "isin": "US5128073062",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 5.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "TXN",
    "name": "Texas Instruments Inc",
    "isin": "US8825081040",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 3.48,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "KLAC",
    "name": "KLA Corp",
    "isin": "US4824801009",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 3.39,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ADI",
    "name": "Analog Devices Inc",
    "isin": "US0326541051",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 2.48,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "QCOM",
    "name": "Qualcomm Inc",
    "isin": "US7475251036",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 2.23,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MRVL",
    "name": "Marvell Technology Inc",
    "isin": "US5738741041",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 2.01,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "CDNS",
    "name": "Cadence Design Systems Inc",
    "isin": "US1273871087",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 1.23,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SNPS",
    "name": "Synopsys Inc",
    "isin": "US8716071076",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 0.99,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "MPWR",
    "name": "Monolithic Power Systems Inc",
    "isin": "US6098391054",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 0.77,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "NXPI",
    "name": "NXP Semiconductors NV",
    "isin": "NL0009538784",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 0.72,
    "location": "Netherlands",
    "currency": "USD"
  },
  {
    "symbol": "TER",
    "name": "Teradyne Inc",
    "isin": "US8807701029",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 0.71,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "STM",
    "name": "STMicroelectronics NV",
    "isin": "US8610121027",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 0.57,
    "location": "Switzerland",
    "currency": "USD"
  },
  {
    "symbol": "MCHP",
    "name": "Microchip Technology Inc",
    "isin": "US5950171042",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 0.51,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ALAB",
    "name": "Astera Labs Inc",
    "isin": "US04626A1034",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 0.51,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ON",
    "name": "ON Semiconductor Corp",
    "isin": "US6821891057",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 0.35,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "ENTG",
    "name": "Entegris Inc",
    "isin": "US29362U1043",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 0.22,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "SWKS",
    "name": "Skyworks Solutions Inc",
    "isin": "US83088M1027",
    "sector": "Information Technology",
    "assetClass": "Equities",
    "weight": 0.09,
    "location": "United States",
    "currency": "USD"
  },
  {
    "symbol": "USD",
    "name": "Cash and/or Derivatives",
    "isin": "CASH_USD",
    "sector": "Cash / Other",
    "assetClass": "Cash",
    "weight": 0.01,
    "location": "United States",
    "currency": "USD"
  }
];
