// Full constituents dataset for Xtrackers II EUR High Yield Corporate Bond UCITS ETF 1C (XHYA.DE / ISIN: LU1109942653)
import { ETFHolding } from './meudHoldings';
import { XHYA_HOLDINGS_PART1 } from './xhyaHoldingsPart1';
import { XHYA_HOLDINGS_PART2 } from './xhyaHoldingsPart2';
import { XHYA_HOLDINGS_PART3 } from './xhyaHoldingsPart3';

export const XHYA_FULL_HOLDINGS: ETFHolding[] = [
  ...XHYA_HOLDINGS_PART1,
  ...XHYA_HOLDINGS_PART2,
  ...XHYA_HOLDINGS_PART3
];

// Helper calculation for sector allocations
const computeSectorAllocations = (holdings: ETFHolding[]) => {
  const totals: Record<string, number> = {};
  holdings.forEach(h => {
    const s = h.sector || 'Unassigned';
    totals[s] = (totals[s] || 0) + h.weight;
  });
  return Object.entries(totals)
    .map(([name, weight]) => ({ name, weight: parseFloat(weight.toFixed(2)) }))
    .sort((a, b) => b.weight - a.weight);
};

// Helper calculation for country allocations
const computeCountryAllocations = (holdings: ETFHolding[]) => {
  const totals: Record<string, number> = {};
  holdings.forEach(h => {
    const c = h.location || 'Other';
    totals[c] = (totals[c] || 0) + h.weight;
  });
  return Object.entries(totals)
    .map(([name, weight]) => ({ name, weight: parseFloat(weight.toFixed(2)) }))
    .sort((a, b) => b.weight - a.weight);
};

export const XHYA_SECTOR_ALLOCATIONS = computeSectorAllocations(XHYA_FULL_HOLDINGS);
export const XHYA_COUNTRY_ALLOCATIONS = computeCountryAllocations(XHYA_FULL_HOLDINGS);
