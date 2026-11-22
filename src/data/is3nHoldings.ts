// Complete holdings dataset for iShares Core MSCI EM IMI UCITS ETF USD (Acc) (IS3N.DE / EIMI / IE00BKM4GZ66)
// Combines Part 1 (2000 holdings) and Part 2 (1100 holdings) for full coverage (3100 total constituents).

import { ETFHolding } from './meudHoldings';
import { IS3N_HOLDINGS_PART1 } from './is3nHoldingsPart1';
import { IS3N_HOLDINGS_PART2 } from './is3nHoldingsPart2';

export type { ETFHolding };

export const IS3N_SECTOR_ALLOCATIONS = [
  {
    "name": "Information Technology",
    "weight": 23.5
  },
  {
    "name": "Financials",
    "weight": 22.0
  },
  {
    "name": "Consumer Discretionary",
    "weight": 12.5
  },
  {
    "name": "Communication Services",
    "weight": 8.8
  },
  {
    "name": "Industrials",
    "weight": 7.5
  },
  {
    "name": "Materials",
    "weight": 7.2
  },
  {
    "name": "Consumer Staples",
    "weight": 5.4
  },
  {
    "name": "Energy",
    "weight": 4.8
  },
  {
    "name": "Healthcare",
    "weight": 3.8
  },
  {
    "name": "Utilities",
    "weight": 2.5
  },
  {
    "name": "Real Estate",
    "weight": 2.0
  }
];

export const IS3N_COUNTRY_ALLOCATIONS = [
  {
    "name": "China",
    "weight": 25.4
  },
  {
    "name": "Taiwan",
    "weight": 18.2
  },
  {
    "name": "India",
    "weight": 17.5
  },
  {
    "name": "South Korea",
    "weight": 11.8
  },
  {
    "name": "Brazil",
    "weight": 4.5
  },
  {
    "name": "Saudi Arabia",
    "weight": 4.1
  },
  {
    "name": "South Africa",
    "weight": 3.2
  },
  {
    "name": "Mexico",
    "weight": 2.8
  },
  {
    "name": "United Arab Emirates",
    "weight": 1.9
  },
  {
    "name": "Indonesia",
    "weight": 1.8
  },
  {
    "name": "Thailand",
    "weight": 1.7
  },
  {
    "name": "Malaysia",
    "weight": 1.5
  },
  {
    "name": "Poland",
    "weight": 1.1
  },
  {
    "name": "Qatar",
    "weight": 1.0
  },
  {
    "name": "Kuwait",
    "weight": 0.9
  },
  {
    "name": "Turkey",
    "weight": 0.8
  },
  {
    "name": "Greece",
    "weight": 0.7
  },
  {
    "name": "Philippines",
    "weight": 0.7
  },
  {
    "name": "Chile",
    "weight": 0.6
  },
  {
    "name": "Other",
    "weight": 2.0
  }
];

export const IS3N_HOLDINGS: ETFHolding[] = [
  ...IS3N_HOLDINGS_PART1,
  ...IS3N_HOLDINGS_PART2
];
