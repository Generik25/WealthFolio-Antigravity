// Holdings data for iShares € Ultrashort Bond UCITS ETF (ERNX.DE / ISIN: IE00BCRY6557)
// Aggregating part 1, part 2, and part 3 files to cover all ~670 holdings

import { ETFHolding } from './meudHoldings';
import { ERNX_HOLDINGS_PART1 } from './ernxHoldingsPart1';
import { ERNX_HOLDINGS_PART2 } from './ernxHoldingsPart2';
import { ERNX_HOLDINGS_PART3 } from './ernxHoldingsPart3';

export const ERNX_FULL_HOLDINGS: ETFHolding[] = [
  ...ERNX_HOLDINGS_PART1,
  ...ERNX_HOLDINGS_PART2,
  ...ERNX_HOLDINGS_PART3
];

export const ERNX_SECTOR_ALLOCATIONS = [
  { name: "Banking / Financial Institutions", weight: 53.4 },
  { name: "Consumer Cyclical / Automotive", weight: 9.8 },
  { name: "Consumer Non-Cyclical / Healthcare", weight: 9.2 },
  { name: "Capital Goods / Industrial", weight: 6.5 },
  { name: "Communications / Technology", weight: 5.7 },
  { name: "Utilities / Energy / Natural Gas", weight: 5.4 },
  { name: "Cash and/or Derivatives", weight: 3.85 },
  { name: "Insurance / Local Authority / Reits", weight: 6.15 }
];

export const ERNX_COUNTRY_ALLOCATIONS = [
  { name: "France", weight: 21.4 },
  { name: "Germany", weight: 17.8 },
  { name: "United States", weight: 14.5 },
  { name: "United Kingdom", weight: 9.6 },
  { name: "Netherlands", weight: 8.2 },
  { name: "Spain", weight: 7.1 },
  { name: "Italy", weight: 5.8 },
  { name: "Canada", weight: 4.6 },
  { name: "Sweden", weight: 3.2 },
  { name: "Japan", weight: 2.5 },
  { name: "Australia", weight: 2.1 },
  { name: "Denmark", weight: 1.8 },
  { name: "Others", weight: 1.4 }
];
