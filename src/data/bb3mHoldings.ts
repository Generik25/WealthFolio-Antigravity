// Holdings dataset for JPM BetaBuilders US Treasury Bond 0-3 Months UCITS ETF USD Acc (BB3M.L / ISIN: IE00BMD8KM66)
import { ETFHolding } from './meudHoldings';

export const BB3M_FULL_HOLDINGS: ETFHolding[] = [
  { symbol: "US912797RG48", name: "US T BILL ZCP 08/06/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 8.16, location: "United States", currency: "USD" },
  { symbol: "US912797RS85", name: "US T BILL ZCP 09/03/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 7.30, location: "United States", currency: "USD" },
  { symbol: "US912797TQ02", name: "US T BILL ZCP 07/30/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 7.05, location: "United States", currency: "USD" },
  { symbol: "US912797TX52", name: "US T BILL ZCP 08/20/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 6.22, location: "United States", currency: "USD" },
  { symbol: "US912797US49", name: "US T BILL ZCP 08/04/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 5.35, location: "United States", currency: "USD" },
  { symbol: "US912797TW79", name: "US T BILL ZCP 08/13/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 4.87, location: "United States", currency: "USD" },
  { symbol: "US912797TY36", name: "US T BILL ZCP 08/27/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 4.55, location: "United States", currency: "USD" },
  { symbol: "US912797UG01", name: "US T BILL ZCP 09/17/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 4.49, location: "United States", currency: "USD" },
  { symbol: "US912797UH83", name: "US T BILL ZCP 09/24/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 4.49, location: "United States", currency: "USD" },
  { symbol: "US912797UV77", name: "US T BILL ZCP 08/25/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 4.44, location: "United States", currency: "USD" },
  { symbol: "US912797UU94", name: "US T BILL ZCP 08/18/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 4.41, location: "United States", currency: "USD" },
  { symbol: "US912797UF28", name: "US T BILL ZCP 09/10/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 4.35, location: "United States", currency: "USD" },
  { symbol: "US912797UT22", name: "US T BILL ZCP 08/11/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 4.00, location: "United States", currency: "USD" },
  { symbol: "US91282CLH24", name: "US TREAS NTS 3.75% 08/31/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 3.01, location: "United States", currency: "USD" },
  { symbol: "US912797VE44", name: "US T BILL ZCP 09/29/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 2.59, location: "United States", currency: "USD" },
  { symbol: "US91282CLP40", name: "US TREAS NTS 3.5% 09/30/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 2.48, location: "United States", currency: "USD" },
  { symbol: "US912797VC87", name: "US T BILL ZCP 09/15/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 2.44, location: "United States", currency: "USD" },
  { symbol: "US91282CHY03", name: "US TREAS NTS 4.625% 09/15/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 2.43, location: "United States", currency: "USD" },
  { symbol: "US912797VD60", name: "US T BILL ZCP 09/22/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 2.38, location: "United States", currency: "USD" },
  { symbol: "US91282CLB53", name: "US TREAS NTS 4.375% 07/31/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 2.33, location: "United States", currency: "USD" },
  { symbol: "US912797UW50", name: "US T BILL ZCP 09/01/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 2.30, location: "United States", currency: "USD" },
  { symbol: "US91282CCP41", name: "US TREAS NTS 0.625% 07/31/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 2.10, location: "United States", currency: "USD" },
  { symbol: "US912828YD60", name: "US TREAS NTS 1.375% 08/31/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 1.67, location: "United States", currency: "USD" },
  { symbol: "US912797VB05", name: "US T BILL ZCP 09/08/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 1.39, location: "United States", currency: "USD" },
  { symbol: "US91282CCW91", name: "US TREAS NTS 0.75% 08/31/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 1.35, location: "United States", currency: "USD" },
  { symbol: "US912828YG91", name: "US TREAS NTS 1.625% 09/30/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 1.28, location: "United States", currency: "USD" },
  { symbol: "_CURRENCYUSD", name: "Cash and Cash Equivalent", sector: "Cash & Derivatives", assetClass: "Cash", weight: 1.04, location: "United States", currency: "USD" },
  { symbol: "US91282CCZ23", name: "US TREAS NTS 0.875% 09/30/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 0.89, location: "United States", currency: "USD" },
  { symbol: "US912828Y958", name: "US TREAS NTS 1.875% 07/31/26", sector: "Government Bonds", assetClass: "Fixed Income", weight: 0.65, location: "United States", currency: "USD" }
];

export const BB3M_SECTOR_ALLOCATIONS = [
  { name: "Government Bonds / US Treasury", weight: 98.96 },
  { name: "Cash and/or Derivatives", weight: 1.04 }
];

export const BB3M_COUNTRY_ALLOCATIONS = [
  { name: "United States", weight: 100.0 }
];
