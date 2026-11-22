// Complete holdings dataset for VanEck Bitcoin ETN (VBTC.DE / ISIN: DE00A28M8D0)
// Official VanEck reporting data with 100% physical Bitcoin reserve exposure.

import { ETFHolding } from './meudHoldings';

export type { ETFHolding };

export const VBTC_SECTOR_ALLOCATIONS = [
  { name: 'Digital Assets / Crypto', weight: 100.0 }
];

export const VBTC_COUNTRY_ALLOCATIONS = [
  { name: 'Global / Decentralized', weight: 100.0 }
];

export const VBTC_FULL_HOLDINGS: ETFHolding[] = [
  {
    symbol: 'BTC',
    name: 'Bitcoin (BTC) - Cold Storage Reserve',
    weight: 100.0,
    sector: 'Digital Assets / Crypto',
    location: 'Global / Decentralized',
    assetClass: 'Cryptocurrency',
    currency: 'USD'
  }
];

export const VBTC_HOLDINGS = VBTC_FULL_HOLDINGS;
