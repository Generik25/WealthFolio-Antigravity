// Complete holdings dataset for iShares STOXX Europe 600 Banks UCITS ETF (DE) (EXH4.DE / EXV1.DE / SX7PEX.DE / ISIN: DE000A0F5UJ7)
// Official BlackRock / iShares reporting data with full weightings, sectors, asset classes and geographic locations.

export interface ETFHolding {
  symbol: string;
  name: string;
  sector: string;
  assetClass: string;
  weight: number;
  location: string;
  currency: string;
}

export const EXH4_SECTOR_ALLOCATIONS = [
  {
    "name": "Financials",
    "weight": 99.21
  },
  {
    "name": "Cash and/or Derivatives",
    "weight": 0.79
  }
];

export const EXH4_COUNTRY_ALLOCATIONS = [
  {
    "name": "United Kingdom",
    "weight": 28.49
  },
  {
    "name": "Spain",
    "weight": 18.06
  },
  {
    "name": "Italy",
    "weight": 14.80
  },
  {
    "name": "France",
    "weight": 9.00
  },
  {
    "name": "Netherlands",
    "weight": 5.23
  },
  {
    "name": "Sweden",
    "weight": 4.12
  },
  {
    "name": "Germany",
    "weight": 3.60
  },
  {
    "name": "Denmark",
    "weight": 2.30
  },
  {
    "name": "Austria",
    "weight": 2.67
  },
  {
    "name": "Finland",
    "weight": 2.83
  },
  {
    "name": "Poland",
    "weight": 2.29
  },
  {
    "name": "Ireland",
    "weight": 1.94
  },
  {
    "name": "Norway",
    "weight": 1.46
  },
  {
    "name": "Belgium",
    "weight": 1.47
  },
  {
    "name": "Portugal",
    "weight": 0.45
  },
  {
    "name": "Switzerland",
    "weight": 0.47
  },
  {
    "name": "Cash and/or Derivatives",
    "weight": 0.79
  }
];

export const EXH4_FULL_HOLDINGS: ETFHolding[] = [
  { symbol: 'HSBA', name: 'HSBC HOLDINGS PLC', sector: 'Financials', assetClass: 'Equity', weight: 15.02, location: 'United Kingdom', currency: 'GBP' },
  { symbol: 'SAN', name: 'BANCO SANTANDER SA', sector: 'Financials', assetClass: 'Equity', weight: 8.34, location: 'Spain', currency: 'EUR' },
  { symbol: 'BBVA', name: 'BANCO BILBAO VIZCAYA ARGENTARIA SA', sector: 'Financials', assetClass: 'Equity', weight: 6.14, location: 'Spain', currency: 'EUR' },
  { symbol: 'UCG', name: 'UNICREDIT', sector: 'Financials', assetClass: 'Equity', weight: 5.84, location: 'Italy', currency: 'EUR' },
  { symbol: 'BNP', name: 'BNP PARIBAS SA', sector: 'Financials', assetClass: 'Equity', weight: 5.27, location: 'France', currency: 'EUR' },
  { symbol: 'ISP', name: 'INTESA SANPAOLO', sector: 'Financials', assetClass: 'Equity', weight: 4.72, location: 'Italy', currency: 'EUR' },
  { symbol: 'INGA', name: 'ING GROEP NV', sector: 'Financials', assetClass: 'Equity', weight: 4.07, location: 'Netherlands', currency: 'EUR' },
  { symbol: 'BARC', name: 'BARCLAYS PLC', sector: 'Financials', assetClass: 'Equity', weight: 4.04, location: 'United Kingdom', currency: 'GBP' },
  { symbol: 'LLOY', name: 'LLOYDS BANKING GROUP PLC', sector: 'Financials', assetClass: 'Equity', weight: 3.74, location: 'United Kingdom', currency: 'GBP' },
  { symbol: 'NWG', name: 'NATWEST GROUP PLC', sector: 'Financials', assetClass: 'Equity', weight: 3.13, location: 'United Kingdom', currency: 'GBP' },
  { symbol: 'NDA FI', name: 'NORDEA BANK', sector: 'Financials', assetClass: 'Equity', weight: 2.83, location: 'Finland', currency: 'EUR' },
  { symbol: 'DBK', name: 'DEUTSCHE BANK AG', sector: 'Financials', assetClass: 'Equity', weight: 2.80, location: 'Germany', currency: 'EUR' },
  { symbol: 'GLE', name: 'SOCIETE GENERALE SA', sector: 'Financials', assetClass: 'Equity', weight: 2.76, location: 'France', currency: 'EUR' },
  { symbol: 'CABK', name: 'CAIXABANK SA', sector: 'Financials', assetClass: 'Equity', weight: 2.21, location: 'Spain', currency: 'EUR' },
  { symbol: 'STAN', name: 'STANDARD CHARTERED PLC', sector: 'Financials', assetClass: 'Equity', weight: 2.19, location: 'United Kingdom', currency: 'GBP' },
  { symbol: 'EBS', name: 'ERSTE GROUP BANK AG', sector: 'Financials', assetClass: 'Equity', weight: 1.67, location: 'Austria', currency: 'EUR' },
  { symbol: 'DANSKE', name: 'DANSKE BANK', sector: 'Financials', assetClass: 'Equity', weight: 1.50, location: 'Denmark', currency: 'DKK' },
  { symbol: 'SWED A', name: 'SWEDBANK', sector: 'Financials', assetClass: 'Equity', weight: 1.49, location: 'Sweden', currency: 'SEK' },
  { symbol: 'SEB A', name: 'SKANDINAVISKA ENSKILDA BANKEN', sector: 'Financials', assetClass: 'Equity', weight: 1.45, location: 'Sweden', currency: 'SEK' },
  { symbol: 'KBC', name: 'KBC GROEP', sector: 'Financials', assetClass: 'Equity', weight: 1.31, location: 'Belgium', currency: 'EUR' },
  { symbol: 'BMPS', name: 'BANCA MONTE DEI PASCHI DI SIENA SP', sector: 'Financials', assetClass: 'Equity', weight: 1.22, location: 'Italy', currency: 'EUR' },
  { symbol: 'ABN', name: 'ABN AMRO BANK NV', sector: 'Financials', assetClass: 'Equity', weight: 1.16, location: 'Netherlands', currency: 'EUR' },
  { symbol: 'DNB', name: 'DNB BANK', sector: 'Financials', assetClass: 'Equity', weight: 1.11, location: 'Norway', currency: 'NOK' },
  { symbol: 'A5G', name: 'AIB GROUP PLC', sector: 'Financials', assetClass: 'Equity', weight: 1.10, location: 'Ireland', currency: 'EUR' },
  { symbol: 'PKO', name: 'POWSZECHNA KASA OSZCZEDNOSCI BANK', sector: 'Financials', assetClass: 'Equity', weight: 1.04, location: 'Poland', currency: 'PLN' },
  { symbol: 'BPE', name: 'BPER BANCA', sector: 'Financials', assetClass: 'Equity', weight: 1.00, location: 'Italy', currency: 'EUR' },
  { symbol: 'ACA', name: 'CREDIT AGRICOLE SA', sector: 'Financials', assetClass: 'Equity', weight: 0.97, location: 'France', currency: 'EUR' },
  { symbol: 'SHB A', name: 'SVENSKA HANDELSBANKEN-A SHS', sector: 'Financials', assetClass: 'Equity', weight: 0.97, location: 'Sweden', currency: 'SEK' },
  { symbol: 'BIRG', name: 'BANK OF IRELAND GROUP PLC', sector: 'Financials', assetClass: 'Equity', weight: 0.84, location: 'Ireland', currency: 'EUR' },
  { symbol: 'BAMI', name: 'BANCO BPM', sector: 'Financials', assetClass: 'Equity', weight: 0.84, location: 'Italy', currency: 'EUR' },
  { symbol: 'SAB', name: 'BANCO DE SABADELL', sector: 'Financials', assetClass: 'Equity', weight: 0.80, location: 'Spain', currency: 'EUR' },
  { symbol: 'CBK', name: 'COMMERZBANK AG', sector: 'Financials', assetClass: 'Equity', weight: 0.80, location: 'Germany', currency: 'EUR' },
  { symbol: 'FBK', name: 'FINECOBANK BANCA FINECO', sector: 'Financials', assetClass: 'Equity', weight: 0.70, location: 'Italy', currency: 'EUR' },
  { symbol: 'BG', name: 'BAWAG GROUP AG', sector: 'Financials', assetClass: 'Equity', weight: 0.64, location: 'Austria', currency: 'EUR' },
  { symbol: 'BKT', name: 'BANKINTER SA', sector: 'Financials', assetClass: 'Equity', weight: 0.49, location: 'Spain', currency: 'EUR' },
  { symbol: 'PEO', name: 'BANK PEKAO SA', sector: 'Financials', assetClass: 'Equity', weight: 0.46, location: 'Poland', currency: 'PLN' },
  { symbol: 'BCP', name: 'BANCO COMERCIAL PORTUGUES SA', sector: 'Financials', assetClass: 'Equity', weight: 0.45, location: 'Portugal', currency: 'EUR' },
  { symbol: 'RBI', name: 'RAIFFEISEN BANK INTERNATIONAL AG', sector: 'Financials', assetClass: 'Equity', weight: 0.36, location: 'Austria', currency: 'EUR' },
  { symbol: 'EBP', name: 'ERSTE BANK POLSKA SA', sector: 'Financials', assetClass: 'Equity', weight: 0.31, location: 'Poland', currency: 'PLN' },
  { symbol: 'RILBA', name: 'RINGKJOBING LANDBOBANK', sector: 'Financials', assetClass: 'Equity', weight: 0.27, location: 'Denmark', currency: 'DKK' },
  { symbol: 'ALSYDB', name: 'AL SYDBANK', sector: 'Financials', assetClass: 'Equity', weight: 0.27, location: 'Denmark', currency: 'DKK' },
  { symbol: 'JYSK', name: 'JYSKE BANK', sector: 'Financials', assetClass: 'Equity', weight: 0.26, location: 'Denmark', currency: 'DKK' },
  { symbol: 'BGEO', name: 'LION FINANCE GROUP PLC', sector: 'Financials', assetClass: 'Equity', weight: 0.24, location: 'United Kingdom', currency: 'GBP' },
  { symbol: 'SB1NO', name: 'SPAREBANK SR-NORGE', sector: 'Financials', assetClass: 'Equity', weight: 0.22, location: 'Norway', currency: 'NOK' },
  { symbol: 'AZA', name: 'AVANZA BANK HOLDING', sector: 'Financials', assetClass: 'Equity', weight: 0.21, location: 'Sweden', currency: 'SEK' },
  { symbol: 'INVP', name: 'INVESTEC PLC', sector: 'Financials', assetClass: 'Equity', weight: 0.20, location: 'United Kingdom', currency: 'GBP' },
  { symbol: 'BCVN', name: 'BC VAUD N', sector: 'Financials', assetClass: 'Equity', weight: 0.19, location: 'Switzerland', currency: 'CHF' },
  { symbol: 'MBK', name: 'MBANK SA', sector: 'Financials', assetClass: 'Equity', weight: 0.19, location: 'Poland', currency: 'PLN' },
  { symbol: 'BGN', name: 'BANCA GENERALI', sector: 'Financials', assetClass: 'Equity', weight: 0.18, location: 'Italy', currency: 'EUR' },
  { symbol: 'UNI', name: 'UNICAJA BANCO SA', sector: 'Financials', assetClass: 'Equity', weight: 0.18, location: 'Spain', currency: 'EUR' },
  { symbol: 'ING', name: 'ING BANK SLASKI SA', sector: 'Financials', assetClass: 'Equity', weight: 0.16, location: 'Poland', currency: 'PLN' },
  { symbol: 'KBCA', name: 'KBC ANCORA NV', sector: 'Financials', assetClass: 'Equity', weight: 0.16, location: 'Belgium', currency: 'EUR' },
  { symbol: 'CMBN', name: 'CEMBRA MONEY BANK AG', sector: 'Financials', assetClass: 'Equity', weight: 0.14, location: 'Switzerland', currency: 'CHF' },
  { symbol: 'VATN', name: 'VALIANT HOLDING AG', sector: 'Financials', assetClass: 'Equity', weight: 0.14, location: 'Switzerland', currency: 'CHF' },
  { symbol: 'MIL', name: 'BANK MILLENNIUM SA', sector: 'Financials', assetClass: 'Equity', weight: 0.13, location: 'Poland', currency: 'PLN' },
  { symbol: 'TBCG', name: 'TBC BANK GROUP PLC', sector: 'Financials', assetClass: 'Equity', weight: 0.13, location: 'United Kingdom', currency: 'GBP' },
  { symbol: 'SBNOR', name: 'SPAREBANKEN NORGE', sector: 'Financials', assetClass: 'Equity', weight: 0.13, location: 'Norway', currency: 'NOK' },
  { symbol: 'EUR', name: 'EUR CASH', sector: 'Cash and/or Derivatives', assetClass: 'Cash', weight: 0.70, location: 'European Union', currency: 'EUR' },
  { symbol: 'MSIFT', name: 'CASH COLLATERAL EUR MSIFT', sector: 'Cash and/or Derivatives', assetClass: 'Cash Collateral and Margins', weight: 0.09, location: 'European Union', currency: 'EUR' },
  { symbol: 'GBP', name: 'GBP CASH', sector: 'Cash and/or Derivatives', assetClass: 'Cash', weight: 0.00, location: 'United Kingdom', currency: 'GBP' },
  { symbol: 'CHF', name: 'CHF CASH', sector: 'Cash and/or Derivatives', assetClass: 'Cash', weight: 0.00, location: 'Switzerland', currency: 'CHF' },
  { symbol: 'PLN', name: 'PLN CASH', sector: 'Cash and/or Derivatives', assetClass: 'Cash', weight: 0.00, location: 'Poland', currency: 'PLN' },
  { symbol: 'SEK', name: 'SEK CASH', sector: 'Cash and/or Derivatives', assetClass: 'Cash', weight: 0.00, location: 'Sweden', currency: 'SEK' },
  { symbol: 'DKK', name: 'DKK CASH', sector: 'Cash and/or Derivatives', assetClass: 'Cash', weight: 0.00, location: 'Denmark', currency: 'DKK' },
  { symbol: 'NOK', name: 'NOK CASH', sector: 'Cash and/or Derivatives', assetClass: 'Cash', weight: 0.00, location: 'Norway', currency: 'NOK' },
  { symbol: 'USD', name: 'USD CASH', sector: 'Cash and/or Derivatives', assetClass: 'Cash', weight: 0.00, location: 'United States', currency: 'USD' },
  { symbol: 'ETD_EUR', name: 'ETD EUR BALANCE WITH R84910', sector: 'Cash and/or Derivatives', assetClass: 'Cash', weight: 0.00, location: 'European Union', currency: 'EUR' },
  { symbol: 'BJU6', name: 'STOXX 600 BANK SEP 26', sector: 'Cash and/or Derivatives', assetClass: 'Futures', weight: 0.00, location: 'European Union', currency: 'EUR' }
];
