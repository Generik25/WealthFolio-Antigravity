// Complete holdings dataset for VanEck Ethereum ETN (VETH.DE / ISIN: DE00A3GPSP7)
// Official VanEck reporting data with 100% physical Ethereum reserve exposure.

import { ETFHolding } from './meudHoldings';

export type { ETFHolding };

export const VETH_SECTOR_ALLOCATIONS = [
  { name: 'Digital Assets / Crypto', weight: 100.0 }
];

export const VETH_COUNTRY_ALLOCATIONS = [
  { name: 'Global / Decentralized', weight: 100.0 }
];

export const VETH_FULL_HOLDINGS: ETFHolding[] = [
  {
    symbol: 'ETH',
    name: 'Ethereum (ETH) - Cold Storage Reserve',
    weight: 100.0,
    sector: 'Digital Assets / Crypto',
    location: 'Global / Decentralized',
    assetClass: 'Cryptocurrency',
    currency: 'USD'
  }
];

export const VETH_HOLDINGS = VETH_FULL_HOLDINGS;
