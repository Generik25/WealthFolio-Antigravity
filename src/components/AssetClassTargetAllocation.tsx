import React, { useState, useEffect, useMemo } from 'react';
import { Asset, AssetType, Portfolio, getAssetCategoryGroup } from '../types';
import { Target, Info, AlertTriangle, Sparkles, Sliders, CheckCircle2, ChevronRight, Coins, ArrowUpRight, TrendingUp, Layers, PlusCircle, ShieldAlert, RotateCcw, Wand2 } from 'lucide-react';
import {
  GICS_SECTORS,
  GicsSector,
  getStockSector,
  getSectorMeta,
  normalizeToGicsSector,
  isSatelliteEtf,
  getSatelliteSector,
  SECTOR_BENCHMARKS,
  SectorBenchmarkId,
} from '../services/sectorService';
import { DEFAULT_ETF_DATABASE, findEtfDatabaseKey } from './ETFOverlapAnalysis';

interface AssetClassTargetAllocationProps {
  assets: Asset[];
  portfolios?: Portfolio[];
  reportingCurrency: string;
  convertValue: (amount: number, from: string, to: string) => number;
  netWorth: number;
  cashBalance?: number;
  onUpdateClassTarget?: (assetType: AssetType, newClassTarget: number) => void;
  onUpdateSectorTarget?: (sector: string, newSectorPortfolioTarget: number, includeSatelliteEtfs?: boolean) => void;
  onApplyBatchSectorTargets?: (sectorTargetsMap: Record<string, number>, includeSatelliteEtfs?: boolean) => void;
  onRestoreAssetTargets?: (snapshot: Record<string, number>) => void;
  onOpenAddPlannedAsset?: (prefillSector?: string, prefillType?: AssetType) => void;
  onAskAI: (prompt: string) => void;
  activePortfolioId: string;
}

const ZERO_TARGETS: Record<AssetType, number> = {
  [AssetType.ETF]: 0,
  [AssetType.STOCK]: 0,
  [AssetType.CASH]: 0,
  [AssetType.BOND]: 0,
  [AssetType.CRYPTO]: 0,
  [AssetType.BANK_DEPOSIT]: 0,
  [AssetType.REAL_ESTATE]: 0,
  [AssetType.COMMODITY]: 0,
};

const DEFAULT_TARGETS: Record<AssetType, number> = {
  [AssetType.ETF]: 50,
  [AssetType.STOCK]: 25,
  [AssetType.CASH]: 10,
  [AssetType.BOND]: 10,
  [AssetType.CRYPTO]: 5,
  [AssetType.BANK_DEPOSIT]: 0,
  [AssetType.REAL_ESTATE]: 0,
  [AssetType.COMMODITY]: 0,
};

const round1 = (n: number): number => Math.round(n * 10) / 10;

export const AssetClassTargetAllocation: React.FC<AssetClassTargetAllocationProps> = ({
  assets,
  portfolios = [],
  reportingCurrency,
  convertValue,
  netWorth,
  cashBalance = 0,
  onUpdateClassTarget,
  onUpdateSectorTarget,
  onApplyBatchSectorTargets,
  onRestoreAssetTargets,
  onOpenAddPlannedAsset,
  onAskAI,
  activePortfolioId,
}) => {
  const [activeViewTab, setActiveViewTab] = useState<'classes' | 'sectors'>('classes');
  const [sectorTargetMode, setSectorTargetMode] = useState<'combined' | 'direct'>('combined');
  const [includeSatelliteEtfs, setIncludeSatelliteEtfs] = useState<boolean>(true);
  const [selectedBenchmark, setSelectedBenchmark] = useState<SectorBenchmarkId>('msci_world');
  const [undoSnapshot, setUndoSnapshot] = useState<Record<string, number> | null>(null);
  // Local targets used for Cash and classes with no assets yet
  const [localTargets, setLocalTargets] = useState<Record<AssetType, number>>(() => {
    try {
      const saved = localStorage.getItem(`investai_asset_class_targets_${activePortfolioId}`)
        || (activePortfolioId === 'all' ? localStorage.getItem('investai_asset_class_targets') : null);
      if (saved) {
        return { ...ZERO_TARGETS, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error("Failed to load asset class targets", e);
    }
    return DEFAULT_TARGETS;
  });

  // Portfolio weight map (1.0 for single portfolio; proportional share of total assets on 'all' so consolidated targets sum to 100%)
  const assetPortfolioWeightMap = useMemo(() => {
    const map = new Map<string, number>();
    if (activePortfolioId !== 'all' || portfolios.length <= 1) {
      assets.forEach(a => map.set(a.id, 1));
      return map;
    }

    const pVals = portfolios.map(p => {
      const val = (p.assets || []).reduce((s, a) => {
        const qty = Number(a.quantity) || 0;
        const price = Number(a.currentPrice) || 0;
        return s + (qty > 0.000001 ? convertValue(qty * price, a.currency, reportingCurrency) : 0);
      }, 0);
      return { p, val };
    });
    const totalVal = pVals.reduce((s, x) => s + x.val, 0);
    pVals.forEach(({ p, val }) => {
      const w = totalVal > 0 ? val / totalVal : (1 / portfolios.length);
      (p.assets || []).forEach(a => map.set(a.id, w));
    });
    return map;
  }, [activePortfolioId, portfolios, assets, convertValue, reportingCurrency]);

  // Identify which non-Cash classes have open or targeted assets in the active scope
  const { microDerivedByClass, classesWithAssets, hasAnyMicroTargets } = useMemo(() => {
    const sums: Record<AssetType, number> = { ...ZERO_TARGETS };
    const present = new Set<AssetType>();
    let totalMicro = 0;

    assets.forEach(a => {
      const qty = Number(a.quantity) || 0;
      const t = Number(a.targetAllocation) || 0;
      if (qty > 0.000001 || t > 0) {
        present.add(a.type);
        const w = assetPortfolioWeightMap.get(a.id) ?? 1;
        const weightedTarget = t * w;
        if (sums[a.type] !== undefined) {
          sums[a.type] += weightedTarget;
        }
        totalMicro += weightedTarget;
      }
    });

    (Object.keys(sums) as AssetType[]).forEach(k => {
      sums[k] = round1(sums[k]);
    });

    return {
      microDerivedByClass: sums,
      classesWithAssets: present,
      hasAnyMicroTargets: totalMicro > 0.01
    };
  }, [assets, assetPortfolioWeightMap]);

  // Dedicated cash reserve target (defaults to 0 when micro targets exist so legacy default 10% Cash never pollutes 100% portfolios)
  const [explicitCashTarget, setExplicitCashTarget] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(`investai_cash_target_${activePortfolioId}`);
      if (saved !== null) {
        const parsed = parseFloat(saved);
        if (Number.isFinite(parsed) && parsed >= 0) return round1(parsed);
      }
    } catch {}
    return 0;
  });

  // Synchronized Macro Targets: automatically derived from Planificare & Rebalansare (Micro -> Macro)
  const targets = useMemo<Record<AssetType, number>>(() => {
    if (!hasAnyMicroTargets) {
      return localTargets;
    }
    const merged: Record<AssetType, number> = { ...ZERO_TARGETS };
    (Object.keys(DEFAULT_TARGETS) as AssetType[]).forEach(type => {
      if (type === AssetType.CASH) {
        merged[type] = round1(Math.max(0, explicitCashTarget));
      } else if (classesWithAssets.has(type)) {
        merged[type] = microDerivedByClass[type];
      } else {
        merged[type] = 0;
      }
    });
    return merged;
  }, [hasAnyMicroTargets, localTargets, explicitCashTarget, classesWithAssets, microDerivedByClass]);

  // Persist synchronized target allocations (so JSON backup & AI Global Report stay 100% in sync)
  useEffect(() => {
    localStorage.setItem(`investai_asset_class_targets_${activePortfolioId}`, JSON.stringify(targets));
  }, [targets, activePortfolioId]);

  // Investment Calculator State
  const [investAmount, setInvestAmount] = useState<number>(500);
  const [calcMode, setCalcMode] = useState<'macro' | 'sectors' | 'micro'>('macro');
  const [selectedMacroTypes, setSelectedMacroTypes] = useState<Record<AssetType, boolean>>(() => {
    try {
      const saved = localStorage.getItem(`investai_selected_macro_types_${activePortfolioId}`);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load selected macro types", e);
    }
    return {};
  });

  const [selectedSectors, setSelectedSectors] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(`investai_selected_sectors_${activePortfolioId}`);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {}
    return {};
  });

  const [selectedMicroAssetIds, setSelectedMicroAssetIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(`investai_selected_micro_assets_${activePortfolioId}`);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load selected micro assets", e);
    }
    return {};
  });

  // Persist selections
  useEffect(() => {
    localStorage.setItem(`investai_selected_macro_types_${activePortfolioId}`, JSON.stringify(selectedMacroTypes));
  }, [selectedMacroTypes, activePortfolioId]);

  useEffect(() => {
    localStorage.setItem(`investai_selected_sectors_${activePortfolioId}`, JSON.stringify(selectedSectors));
  }, [selectedSectors, activePortfolioId]);

  useEffect(() => {
    localStorage.setItem(`investai_selected_micro_assets_${activePortfolioId}`, JSON.stringify(selectedMicroAssetIds));
  }, [selectedMicroAssetIds, activePortfolioId]);

  const handleToggleMacroType = (type: AssetType) => {
    setSelectedMacroTypes(prev => ({
      ...prev,
      [type]: prev[type] === false ? true : false
    }));
  };

  const handleToggleSector = (sector: string) => {
    setSelectedSectors(prev => ({
      ...prev,
      [sector]: prev[sector] === false ? true : false
    }));
  };

  const handleToggleMicroAsset = (id: string) => {
    setSelectedMicroAssetIds(prev => ({
      ...prev,
      [id]: prev[id] === false ? true : false
    }));
  };

  // Calculate actual allocation and detailed profits per Asset Type
  const categoryStats = useMemo(() => {
    const stats: Record<AssetType, { 
      value: number; 
      cost: number; 
      realized: number; 
      unrealized: number; 
      totalPL: number; 
      plPercent: number; 
    }> = {} as any;

    // Initialize all types
    Object.keys(DEFAULT_TARGETS).forEach((key) => {
      const type = key as AssetType;
      stats[type] = { value: 0, cost: 0, realized: 0, unrealized: 0, totalPL: 0, plPercent: 0 };
    });

    assets.forEach((asset) => {
      const type = asset.type;
      if (stats[type] === undefined) return;

      const qty = Number(asset.quantity) || 0;
      const currentPrice = Number(asset.currentPrice) || 0;
      const buyPrice = Number(asset.buyPrice) || 0;
      const realized = Number(asset.realizedPL) || 0;

      const valueInReporting = convertValue(qty * currentPrice, asset.currency, reportingCurrency);
      const costInReporting = convertValue(qty * buyPrice, asset.currency, reportingCurrency);
      const realizedInReporting = convertValue(realized, asset.currency, reportingCurrency);

      stats[type].value += valueInReporting;
      stats[type].cost += costInReporting;
      stats[type].realized += realizedInReporting;
    });

    // Include uninvested portfolio cash in CASH class
    if (cashBalance > 0.01 && stats[AssetType.CASH]) {
      stats[AssetType.CASH].value += cashBalance;
    }

    // Compute Net Profit/Loss and percentages
    Object.keys(stats).forEach((key) => {
      const type = key as AssetType;
      const s = stats[type];
      s.unrealized = s.value - s.cost;
      s.totalPL = s.unrealized + s.realized;
      s.plPercent = s.cost > 0 ? (s.totalPL / s.cost) * 100 : 0;
    });

    return stats;
  }, [assets, reportingCurrency, convertValue, cashBalance]);

  // Calculate actual weights based on current net worth
  const actualValuesAndPercentages = useMemo(() => {
    const percentages: Record<AssetType, number> = {} as any;
    const totalValue = netWorth || 1;

    Object.keys(categoryStats).forEach((key) => {
      const type = key as AssetType;
      percentages[type] = (categoryStats[type].value / totalValue) * 100;
    });

    return {
      values: Object.fromEntries(Object.entries(categoryStats).map(([k, v]) => [k, v.value])) as Record<AssetType, number>,
      percentages,
    };
  }, [categoryStats, netWorth]);

  const getAssetEtfSectors = (a: Asset) => {
    if (a.type !== AssetType.ETF) return undefined;
    const mk = findEtfDatabaseKey((a.symbol || '').toUpperCase(), DEFAULT_ETF_DATABASE);
    return mk ? DEFAULT_ETF_DATABASE[mk]?.sectors : undefined;
  };

  // Current total target of the adjustable Satellite bucket (Stocks + optionally Satellite ETFs)
  const currentSatelliteTargetPct = useMemo(() => {
    let sum = 0;
    assets.forEach(a => {
      const qty = Number(a.quantity) || 0;
      const tgt = Number(a.targetAllocation) || 0;
      if (qty <= 0.000001 && tgt <= 0) return;
      const pWeight = assetPortfolioWeightMap.get(a.id) ?? 1;
      if (a.type === AssetType.STOCK) {
        sum += tgt * pWeight;
      } else if (includeSatelliteEtfs && a.type === AssetType.ETF && isSatelliteEtf(a, getAssetEtfSectors(a))) {
        sum += tgt * pWeight;
      }
    });
    return round1(sum);
  }, [assets, assetPortfolioWeightMap, includeSatelliteEtfs]);

  const [satelliteBudgetAnchor, setSatelliteBudgetAnchor] = useState<number>(() =>
    currentSatelliteTargetPct > 0 ? currentSatelliteTargetPct : 25
  );

  // Keep anchor synced when user is on Classes tab or toggles includeSatelliteEtfs
  useEffect(() => {
    if (currentSatelliteTargetPct > 0 && activeViewTab === 'classes') {
      setSatelliteBudgetAnchor(currentSatelliteTargetPct);
    }
  }, [currentSatelliteTargetPct, activeViewTab]);

  useEffect(() => {
    if (currentSatelliteTargetPct > 0) {
      setSatelliteBudgetAnchor(currentSatelliteTargetPct);
    }
  }, [includeSatelliteEtfs]);

  // Handle target change (Bidirectional Macro -> Micro sync)
  const handleTargetChange = (type: AssetType, value: number) => {
    const sanitized = Math.max(0, Math.min(100, round1(Number(value) || 0)));
    setLocalTargets((prev) => ({
      ...prev,
      [type]: sanitized,
    }));
    if (type === AssetType.STOCK && sanitized > 0 && !includeSatelliteEtfs) {
      setSatelliteBudgetAnchor(sanitized);
    }
    if (type === AssetType.CASH) {
      setExplicitCashTarget(sanitized);
      try {
        localStorage.setItem(`investai_cash_target_${activePortfolioId}`, String(sanitized));
      } catch {}
    } else if (onUpdateClassTarget && classesWithAssets.has(type)) {
      onUpdateClassTarget(type, sanitized);
    }
  };

  // --- CORE (ETF) + SATELLITE (STOCKS + SATELLITE ETFs) SECTOR ANALYSIS ---
  const { hasAnySectorAssets, satelliteEtfCount } = useMemo(() => {
    let hasAny = false;
    let satEtfCnt = 0;
    assets.forEach(a => {
      const active = (Number(a.quantity) || 0) > 0.000001 || (Number(a.targetAllocation) || 0) > 0;
      if (!active) return;
      if (a.type === AssetType.STOCK) hasAny = true;
      if (a.type === AssetType.ETF) {
        hasAny = true;
        if (isSatelliteEtf(a, getAssetEtfSectors(a))) satEtfCnt += 1;
      }
    });
    return { hasAnySectorAssets: hasAny, satelliteEtfCount: satEtfCnt };
  }, [assets]);

  const effectiveSatelliteBudget = satelliteBudgetAnchor > 0.05
    ? satelliteBudgetAnchor
    : (currentSatelliteTargetPct > 0.05 ? currentSatelliteTargetPct : 25);

  const sectorAnalysis = useMemo(() => {
    const totalNW = netWorth > 0 ? netWorth : 1;

    // 1. Adjustable Satellite stats per GICS sector (Stocks + optionally Satellite ETFs)
    const satStats: Record<string, {
      sector: string;
      count: number;
      stockCount: number;
      etfCount: number;
      symbols: string[];
      etfSymbols: string[];
      value: number;
      cost: number;
      realized: number;
      targetPortfolioPct: number;
    }> = {};

    GICS_SECTORS.forEach(sec => {
      satStats[sec] = {
        sector: sec,
        count: 0,
        stockCount: 0,
        etfCount: 0,
        symbols: [],
        etfSymbols: [],
        value: 0,
        cost: 0,
        realized: 0,
        targetPortfolioPct: 0,
      };
    });

    const coreFloorPctBySector: Record<string, number> = {};
    const actualCombinedValueBySector: Record<string, number> = {};
    let totalSatelliteValue = 0;
    let totalCoreTargetPct = 0;
    let totalCoreActualValue = 0;

    assets.forEach(a => {
      const qty = Number(a.quantity) || 0;
      const tgt = Number(a.targetAllocation) || 0;
      const isActive = qty > 0.000001 || tgt > 0;
      if (!isActive) return;

      if (a.type === AssetType.BOND || a.type === AssetType.CASH || a.type === AssetType.BANK_DEPOSIT || a.type === AssetType.CRYPTO || a.type === AssetType.COMMODITY) {
        return;
      }

      const val = qty > 0.000001 ? convertValue(qty * (Number(a.currentPrice) || 0), a.currency, reportingCurrency) : 0;
      const cost = qty > 0.000001 ? convertValue(qty * (Number(a.buyPrice) || 0), a.currency, reportingCurrency) : 0;
      const real = convertValue(Number(a.realizedPL) || 0, a.currency, reportingCurrency);
      const pWeight = assetPortfolioWeightMap.get(a.id) ?? 1;
      const weightedTargetPct = tgt * pWeight;
      const actualPctOfPort = (val / totalNW) * 100;

      if (a.type === AssetType.STOCK) {
        const sec = getStockSector(a);
        if (!satStats[sec]) {
          satStats[sec] = { sector: sec, count: 0, stockCount: 0, etfCount: 0, symbols: [], etfSymbols: [], value: 0, cost: 0, realized: 0, targetPortfolioPct: 0 };
        }
        satStats[sec].count += 1;
        satStats[sec].stockCount += 1;
        satStats[sec].symbols.push(a.symbol);
        satStats[sec].value += val;
        satStats[sec].cost += cost;
        satStats[sec].realized += real;
        satStats[sec].targetPortfolioPct += weightedTargetPct;
        totalSatelliteValue += val;
        if (val > 0.01) {
          actualCombinedValueBySector[sec] = (actualCombinedValueBySector[sec] || 0) + val;
        }
      } else if (a.type === AssetType.ETF) {
        const etfSectors = getAssetEtfSectors(a);
        const isSat = isSatelliteEtf(a, etfSectors);
        const validLookThrough = (etfSectors || [])
          .map((s: any) => ({ name: s.name ?? s.sector ?? '', weight: Number(s.weight) || 0 }))
          .filter(s => s.weight > 0);
        const totLookW = validLookThrough.reduce((s, x) => s + x.weight, 0);

        // Actual Combined Exposure (always uses true look-through if available, else primary satellite sector)
        if (val > 0.01) {
          if (totLookW > 0) {
            validLookThrough.forEach(s => {
              const gics = normalizeToGicsSector(s.name);
              actualCombinedValueBySector[gics] = (actualCombinedValueBySector[gics] || 0) + (val * s.weight) / totLookW;
            });
          } else if (isSat) {
            const satSec = getSatelliteSector(a, etfSectors);
            if (satSec) {
              actualCombinedValueBySector[satSec] = (actualCombinedValueBySector[satSec] || 0) + val;
            }
          }
        }

        if (isSat && includeSatelliteEtfs) {
          // Adjustable Satellite ETF
          const sec = getSatelliteSector(a, etfSectors) || 'Information Technology';
          if (!satStats[sec]) {
            satStats[sec] = { sector: sec, count: 0, stockCount: 0, etfCount: 0, symbols: [], etfSymbols: [], value: 0, cost: 0, realized: 0, targetPortfolioPct: 0 };
          }
          satStats[sec].count += 1;
          satStats[sec].etfCount += 1;
          satStats[sec].symbols.push(a.symbol);
          satStats[sec].etfSymbols.push(a.symbol);
          satStats[sec].value += val;
          satStats[sec].cost += cost;
          satStats[sec].realized += real;
          satStats[sec].targetPortfolioPct += weightedTargetPct;
          totalSatelliteValue += val;
        } else {
          // Fixed Core ETF Floor (use target % when micro targets exist, else actual % of portfolio)
          const floorWeightPct = hasAnyMicroTargets ? weightedTargetPct : actualPctOfPort;
          totalCoreTargetPct += floorWeightPct;
          totalCoreActualValue += val;
          if (floorWeightPct > 0.001) {
            if (totLookW > 0) {
              validLookThrough.forEach(s => {
                const gics = normalizeToGicsSector(s.name);
                coreFloorPctBySector[gics] = (coreFloorPctBySector[gics] || 0) + (floorWeightPct * s.weight) / totLookW;
              });
            } else if (isSat) {
              const satSec = getSatelliteSector(a, etfSectors);
              if (satSec) {
                coreFloorPctBySector[satSec] = (coreFloorPctBySector[satSec] || 0) + floorWeightPct;
              }
            }
          }
        }
      }
    });

    const totalCoreFloorPct = round1(Object.values(coreFloorPctBySector).reduce((s, v) => s + v, 0));
    const totalEquityTargetPct = round1(totalCoreFloorPct + effectiveSatelliteBudget);
    const benchmarkProfile = SECTOR_BENCHMARKS[selectedBenchmark] || SECTOR_BENCHMARKS.msci_world;

    const rows = Object.values(satStats).map(st => {
      const unrealized = st.value - st.cost;
      const totalPL = unrealized + st.realized;
      const plPercent = st.cost > 0 ? (totalPL / st.cost) * 100 : 0;
      const actualPctOfSatellite = totalSatelliteValue > 0 ? (st.value / totalSatelliteValue) * 100 : 0;
      const actualPctOfPortfolio = (st.value / totalNW) * 100;
      const targetPortfolioPct = round1(st.targetPortfolioPct);
      const targetPctOfSatellite = effectiveSatelliteBudget > 0 ? round1((targetPortfolioPct / effectiveSatelliteBudget) * 100) : 0;

      const coreFloorPct = round1(coreFloorPctBySector[st.sector] || 0);
      const targetCombinedPortfolioPct = round1(coreFloorPct + targetPortfolioPct);
      const actualCombinedValue = actualCombinedValueBySector[st.sector] || 0;
      const totalWithEtfPct = (actualCombinedValue / totalNW) * 100;

      const benchShare = (benchmarkProfile.weights as Record<string, number>)[st.sector] ?? 0;
      const benchmarkPortfolioPct = round1((benchShare / 100) * totalEquityTargetPct);
      const deviationVsBenchmark = totalWithEtfPct - benchmarkPortfolioPct;

      const targetSatelliteValue = (totalNW * targetPortfolioPct) / 100;
      const actionAmountDirect = targetSatelliteValue - st.value;

      const targetCombinedValue = (totalNW * targetCombinedPortfolioPct) / 100;
      const actionAmountCombined = targetCombinedValue - actualCombinedValue;

      const deviationOfSatellite = actualPctOfSatellite - targetPctOfSatellite;
      const deviationCombined = totalWithEtfPct - targetCombinedPortfolioPct;

      return {
        ...st,
        totalPL,
        plPercent,
        actualPctOfSatellite,
        actualPctOfPortfolio,
        targetPortfolioPct,
        targetPctOfSatellite,
        coreFloorPct,
        targetCombinedPortfolioPct,
        actualCombinedValue,
        totalWithEtfPct,
        benchmarkPortfolioPct,
        deviationVsBenchmark,
        actionAmountDirect,
        actionAmountCombined,
        deviationOfSatellite,
        deviationCombined,
      };
    });

    // Sort: sectors with highest combined exposure or satellite assets first
    rows.sort((a, b) => {
      const aActive = a.count > 0 || a.targetPortfolioPct > 0 || a.totalWithEtfPct > 0.5 ? 1 : 0;
      const bActive = b.count > 0 || b.targetPortfolioPct > 0 || b.totalWithEtfPct > 0.5 ? 1 : 0;
      if (aActive !== bActive) return bActive - aActive;
      if (sectorTargetMode === 'combined') {
        if (Math.abs(b.totalWithEtfPct - a.totalWithEtfPct) > 0.05) return b.totalWithEtfPct - a.totalWithEtfPct;
      }
      if (b.value !== a.value) return b.value - a.value;
      return b.targetCombinedPortfolioPct - a.targetCombinedPortfolioPct || a.sector.localeCompare(b.sector);
    });

    const totalSectorSharePct = round1(rows.reduce((s, r) => s + r.targetPctOfSatellite, 0));
    const totalSectorPortfolioPct = round1(rows.reduce((s, r) => s + r.targetPortfolioPct, 0));
    const totalCombinedTargetPct = round1(rows.reduce((s, r) => s + r.targetCombinedPortfolioPct, 0));
    const totalCombinedActualPct = round1(rows.reduce((s, r) => s + r.totalWithEtfPct, 0));

    return {
      rows,
      totalSatelliteValue,
      totalCoreActualValue,
      totalCoreTargetPct: round1(totalCoreTargetPct),
      totalCoreFloorPct,
      totalEquityTargetPct,
      totalSectorSharePct,
      totalSectorPortfolioPct,
      totalCombinedTargetPct,
      totalCombinedActualPct,
      benchmarkProfile,
    };
  }, [assets, convertValue, reportingCurrency, netWorth, assetPortfolioWeightMap, effectiveSatelliteBudget, includeSatelliteEtfs, hasAnyMicroTargets, selectedBenchmark, sectorTargetMode]);

  // Handle Sector Target Change in Direct mode (% of Satellite bucket)
  const handleSectorTargetShareChange = (sector: string, newShareOfSatellitePct: number) => {
    const sanitizedShare = Math.max(0, Math.min(100, round1(Number(newShareOfSatellitePct) || 0)));
    const newPortfolioPct = round1((sanitizedShare / 100) * effectiveSatelliteBudget);
    if (onUpdateSectorTarget) {
      onUpdateSectorTarget(sector, newPortfolioPct, includeSatelliteEtfs);
    }
  };

  // Handle Sector Target Change in Combined Core+Satellite mode (% of Total Portfolio)
  const handleCombinedSectorTargetChange = (sector: string, coreFloorPct: number, newCombinedPortfolioPct: number) => {
    const clampedTotal = Math.max(coreFloorPct, Math.min(100, round1(Number(newCombinedPortfolioPct) || 0)));
    const newSatellitePortfolioPct = round1(Math.max(0, clampedTotal - coreFloorPct));
    if (onUpdateSectorTarget) {
      onUpdateSectorTarget(sector, newSatellitePortfolioPct, includeSatelliteEtfs);
    }
  };

  // Apply Optimal Core-Satellite Completion to hit Selected Benchmark using Satellite Budget
  const handleApplyBenchmarkCompletion = () => {
    if (!onApplyBatchSectorTargets) return;

    // Save Undo snapshot before applying
    const snap: Record<string, number> = {};
    assets.forEach(a => {
      snap[a.id] = Number(a.targetAllocation) || 0;
    });
    setUndoSnapshot(snap);

    const budgetToDistribute = effectiveSatelliteBudget;
    const adjustableRows = sectorAnalysis.rows.filter(r => r.count > 0);
    if (adjustableRows.length === 0 || budgetToDistribute <= 0) return;

    // Calculate positive gap = max(0, benchmarkTarget - coreFloor) for every adjustable sector
    const gaps = adjustableRows.map(r => ({
      sector: r.sector,
      gap: Math.max(0, r.benchmarkPortfolioPct - r.coreFloorPct),
      benchWeight: (sectorAnalysis.benchmarkProfile.weights as Record<string, number>)[r.sector] ?? 0,
    }));

    const totalGap = gaps.reduce((s, g) => s + g.gap, 0);
    let weights: number[];
    if (totalGap > 0.01) {
      weights = gaps.map(g => g.gap / totalGap);
    } else {
      const bwSum = gaps.reduce((s, g) => s + g.benchWeight, 0) || 1;
      weights = gaps.map(g => g.benchWeight / bwSum);
    }

    // Largest-remainder rounding in tenths so total satellite sum == budgetToDistribute exactly
    const totalTenths = Math.round(budgetToDistribute * 10);
    const rawTenths = weights.map(w => w * totalTenths);
    const floorTenths = rawTenths.map(v => Math.floor(v));
    const remainder = totalTenths - floorTenths.reduce((s, v) => s + v, 0);
    const order = rawTenths
      .map((v, i) => ({ i, frac: v - floorTenths[i] }))
      .sort((a, b) => b.frac - a.frac);
    for (let k = 0; k < remainder && k < order.length; k++) {
      floorTenths[order[k].i] += 1;
    }

    const batchTargets: Record<string, number> = {};
    adjustableRows.forEach((r, i) => {
      batchTargets[r.sector] = floorTenths[i] / 10;
    });

    onApplyBatchSectorTargets(batchTargets, includeSatelliteEtfs);
  };

  const handleUndoCompletion = () => {
    if (undoSnapshot && onRestoreAssetTargets) {
      onRestoreAssetTargets(undoSnapshot);
      setUndoSnapshot(null);
    }
  };

  // --- AUTOMATIC SECTOR INVESTMENT CALCULATOR (DCA Deficit Minimizer for Core-Satellite Sectors) ---
  const sectorInvestmentSuggestions = useMemo(() => {
    const amount = Number(investAmount) || 0;
    if (amount <= 0) return [];

    const totalNW = netWorth || 1;
    const postNW = totalNW + amount;
    const totalSatVal = sectorAnalysis.totalSatelliteValue || 0;
    const postSatTotal = totalSatVal + amount;

    const candidates = sectorAnalysis.rows
      .filter(r => r.count > 0 && (sectorTargetMode === 'combined' ? r.targetCombinedPortfolioPct > 0 && r.targetPortfolioPct > 0 : r.targetPctOfSatellite > 0))
      .map(r => {
        const postTargetVal = sectorTargetMode === 'combined'
          ? (postNW * r.targetCombinedPortfolioPct) / 100
          : (postSatTotal * r.targetPctOfSatellite) / 100;
        const currentBaseVal = sectorTargetMode === 'combined' ? r.actualCombinedValue : r.value;
        const deficit = Math.max(0, postTargetVal - currentBaseVal);
        const isSelected = selectedSectors[r.sector] !== false;
        return { row: r, deficit, isSelected };
      })
      .filter(item => item.deficit > 0);

    const selectedCandidates = candidates.filter(c => c.isSelected);
    const totalDeficit = selectedCandidates.reduce((s, c) => s + c.deficit, 0) || 1;

    return candidates
      .map(item => {
        const allocated = item.isSelected && selectedCandidates.length > 0 ? amount * (item.deficit / totalDeficit) : 0;
        const newSatTotal = totalSatVal + (selectedCandidates.length > 0 ? amount : 0);
        const newWeightOfSatellite = newSatTotal > 0 ? ((item.row.value + allocated) / newSatTotal) * 100 : item.row.actualPctOfSatellite;
        const newCombinedPortfolioPct = ((item.row.actualCombinedValue + allocated) / postNW) * 100;
        return {
          sector: item.row.sector,
          count: item.row.count,
          stockCount: item.row.stockCount,
          etfCount: item.row.etfCount,
          symbols: item.row.symbols,
          etfSymbols: item.row.etfSymbols,
          targetPctOfSatellite: item.row.targetPctOfSatellite,
          targetPortfolioPct: item.row.targetPortfolioPct,
          coreFloorPct: item.row.coreFloorPct,
          targetCombinedPortfolioPct: item.row.targetCombinedPortfolioPct,
          totalWithEtfPct: item.row.totalWithEtfPct,
          newCombinedPortfolioPct,
          deficit: item.deficit,
          suggestedAmount: allocated,
          pctOfInvestment: amount > 0 ? (allocated / amount) * 100 : 0,
          currentWeightOfSatellite: item.row.actualPctOfSatellite,
          newWeightOfSatellite,
          isSelected: item.isSelected,
        };
      })
      .sort((a, b) => b.suggestedAmount - a.suggestedAmount);
  }, [investAmount, netWorth, sectorAnalysis, selectedSectors, sectorTargetMode]);

  const totalTarget = useMemo(() => {
    return round1(Object.values(targets).reduce((acc, curr) => acc + (Number(curr) || 0), 0));
  }, [targets]);

  // AI Rebalance Helper (supports both Asset Classes tab and Core-Satellite Sectors tab)
  const handleAskAIRebalance = () => {
    if (activeViewTab === 'sectors' && hasAnySectorAssets) {
      const secLines = sectorAnalysis.rows
        .filter(r => r.count > 0 || r.targetPortfolioPct > 0 || r.totalWithEtfPct > 0.5)
        .map(r => `- ${r.sector} (${r.stockCount} acțiuni, ${r.etfCount} ETF satelit): Core ETF Podea ${r.coreFloorPct.toFixed(1)}% + Satelit Țintă ${r.targetPortfolioPct.toFixed(1)}% = Țintă Totală ${r.targetCombinedPortfolioPct.toFixed(1)}% | Actual Combinat cu ETF: ${r.totalWithEtfPct.toFixed(1)}% | Benchmark (${sectorAnalysis.benchmarkProfile.name}): ${r.benchmarkPortfolioPct.toFixed(1)}%`)
        .join('\n');

      const prompt = `Salut! Analizez portofoliul meu folosind strategia Core (ETF-uri Piață Largă: ${sectorAnalysis.totalCoreFloorPct.toFixed(1)}%) + Satellite (${includeSatelliteEtfs ? 'Acțiuni + ETF-uri Sectoriale' : 'Acțiuni Individuale'}: ${sectorAnalysis.totalSectorPortfolioPct.toFixed(1)}%), cu reperul ${sectorAnalysis.benchmarkProfile.name} (Valoare portofoliu: ${netWorth.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} ${reportingCurrency}):

Situație curentă pe Sectoare (Core ETF + Satelit vs Benchmark):
${secLines}

Te rog să îmi spui concret unde am supraconcentrare din cauza suprapunerii dintre ETF-urile Core și pozițiile Satelit și cum recomanzi să calibrez sateliții (acțiuni și/sau ETF-uri sectoriale) prin DCA.`;
      onAskAI(prompt);
      return;
    }

    const reportLines = Object.keys(targets).map((key) => {
      const type = key as AssetType;
      const actualPct = actualValuesAndPercentages.percentages[type] || 0;
      const targetPct = targets[type] || 0;
      const actualVal = actualValuesAndPercentages.values[type] || 0;
      const targetVal = (netWorth * targetPct) / 100;
      const diff = targetVal - actualVal;

      return `- ${type}: Actual ${actualPct.toFixed(1)}% (${actualVal.toFixed(0)} ${reportingCurrency}) vs Țintă ${targetPct}% (Necesar: ${diff > 0 ? '+' : ''}${diff.toFixed(0)} ${reportingCurrency})`;
    }).join('\n');

    const prompt = `Salut! Am configurat următoarele ținte pe Clase de Active în portofoliul meu de investiții:
Valoare totală portofoliu: ${netWorth.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} ${reportingCurrency}

Situație curentă vs Țintă:
${reportLines}

Te rog să îmi oferi o strategie detaliată și personalizată de rebalansare din perspectiva ta. Spune-mi exact ce tranzacții ar trebui să fac, prioritățile de achiziție, cum să gestionez comisioanele și cum să folosesc cash-ul disponibil pentru a atinge acest obiectiv.`;
    
    onAskAI(prompt);
  };

  // --- AUTOMATIC INVESTMENT CALCULATOR ALGORITHM (DCA Deficit Minimizer) ---
  const investmentSuggestions = useMemo(() => {
    const amount = Number(investAmount) || 0;
    if (amount <= 0) return [];

    const totalValue = netWorth || 1;
    
    // 1. Calculate post-investment ideal allocations based on synchronized class targets
    const postTotalValue = totalValue + amount;
    const targetsList = Object.keys(targets).map(key => {
      const type = key as AssetType;
      const targetPct = targets[type] || 0;
      const actualVal = actualValuesAndPercentages.values[type] || 0;
      const targetVal = (postTotalValue * targetPct) / 100;
      const deficit = Math.max(0, targetVal - actualVal); // Post-investment deficit is positive or 0
      const isSelected = selectedMacroTypes[type] !== false; // Checked by default (true) unless explicitly unchecked (false)
      
      return { type, targetPct, actualVal, targetVal, deficit, isSelected };
    });

    // We only want the ones with deficit > 0 (underweight) as candidates for DCA
    const underweightCandidates = targetsList.filter(item => item.targetPct > 0 && item.deficit > 0);
    const selectedDeficitCandidates = underweightCandidates.filter(item => item.isSelected);

    let suggestions: Array<{
      type: AssetType;
      deficit: number;
      suggestedAmount: number;
      pctOfInvestment: number;
      currentWeight: number;
      newWeight: number;
      isSelected: boolean;
    }> = [];

    if (selectedDeficitCandidates.length > 0) {
      // Prioritize allocation proportionally to the deficits of selected classes
      const totalDeficit = selectedDeficitCandidates.reduce((acc, curr) => acc + curr.deficit, 0) || 1;
      
      suggestions = underweightCandidates.map(item => {
        let allocated = 0;
        if (item.isSelected) {
          const ratio = item.deficit / totalDeficit;
          allocated = amount * ratio;
        }
        const currentWeight = (item.actualVal / totalValue) * 100;
        const newWeight = ((item.actualVal + allocated) / (totalValue + amount)) * 100;

        return {
          type: item.type,
          deficit: item.deficit,
          suggestedAmount: allocated,
          pctOfInvestment: amount > 0 ? (allocated / amount) * 100 : 0,
          currentWeight,
          newWeight,
          isSelected: item.isSelected
        };
      });
    } else {
      // Fallback: If all underweight classes are deselected, show them with 0 allocation
      suggestions = underweightCandidates.map(item => {
        const currentWeight = (item.actualVal / totalValue) * 100;
        return {
          type: item.type,
          deficit: item.deficit,
          suggestedAmount: 0,
          pctOfInvestment: 0,
          currentWeight,
          newWeight: currentWeight,
          isSelected: false
        };
      });
    }

    // Sort descending by suggestedAmount, then by deficit
    return suggestions.sort((a, b) => b.suggestedAmount - a.suggestedAmount);
  }, [investAmount, targets, actualValuesAndPercentages, netWorth, selectedMacroTypes]);

  // --- AUTOMATIC MICRO INVESTMENT CALCULATOR ALGORITHM (DCA Deficit Minimizer for Assets) ---
  const microInvestmentSuggestions = useMemo(() => {
    const amount = Number(investAmount) || 0;
    if (amount <= 0) return [];

    const totalValue = netWorth || 1;
    
    // Filter out assets that are open (quantity > 0) OR have a target allocation > 0
    const activeAssets = assets.filter(a => Number(a.quantity) > 0.000001 || (a.targetAllocation && a.targetAllocation > 0));

    // Calculate post-investment ideal values, actual values and deficits for each asset (aligned with Macro DCA)
    const postTotalValue = totalValue + amount;
    const assetsList = activeAssets.map(asset => {
      const qty = Number(asset.quantity) || 0;
      const currentPrice = Number(asset.currentPrice) || 0;
      const pWeight = assetPortfolioWeightMap.get(asset.id) ?? 1;
      const targetPct = (Number(asset.targetAllocation) || 0) * pWeight;
      
      const actualVal = convertValue(qty * currentPrice, asset.currency, reportingCurrency);
      const targetVal = (postTotalValue * targetPct) / 100;
      const deficit = Math.max(0, targetVal - actualVal);
      const isSelected = selectedMicroAssetIds[asset.id] !== false; // Checked by default
      
      return { asset, targetPct, actualVal, targetVal, deficit, isSelected };
    });

    // Only underweight assets (deficit > 0) are considered
    const underweightAssets = assetsList.filter(item => item.targetPct > 0 && item.deficit > 0);
    const selectedDeficitCandidates = underweightAssets.filter(item => item.isSelected);

    let suggestions: Array<{
      asset: Asset;
      deficit: number;
      suggestedAmount: number;
      suggestedAmountInAssetCurrency: number;
      pctOfInvestment: number;
      currentWeight: number;
      newWeight: number;
      isSelected: boolean;
    }> = [];

    if (selectedDeficitCandidates.length > 0) {
      const totalDeficit = selectedDeficitCandidates.reduce((acc, curr) => acc + curr.deficit, 0) || 1;
      
      suggestions = underweightAssets.map(item => {
        let allocated = 0;
        if (item.isSelected) {
          const ratio = item.deficit / totalDeficit;
          allocated = amount * ratio;
        }
        const allocatedInAssetCurrency = convertValue(allocated, reportingCurrency, item.asset.currency);
        const currentWeight = (item.actualVal / totalValue) * 100;
        const newWeight = ((item.actualVal + allocated) / (totalValue + amount)) * 100;

        return {
          asset: item.asset,
          deficit: item.deficit,
          suggestedAmount: allocated,
          suggestedAmountInAssetCurrency: allocatedInAssetCurrency,
          pctOfInvestment: amount > 0 ? (allocated / amount) * 100 : 0,
          currentWeight,
          newWeight,
          isSelected: item.isSelected
        };
      });
    } else {
      // Fallback: If all are deselected, show with 0 allocation
      suggestions = underweightAssets.map(item => {
        const currentWeight = (item.actualVal / totalValue) * 100;
        return {
          asset: item.asset,
          deficit: item.deficit,
          suggestedAmount: 0,
          suggestedAmountInAssetCurrency: 0,
          pctOfInvestment: 0,
          currentWeight,
          newWeight: currentWeight,
          isSelected: false
        };
      });
    }

    return suggestions.sort((a, b) => {
      const catA = getAssetCategoryGroup(a.asset);
      const catB = getAssetCategoryGroup(b.asset);
      if (catA.rank !== catB.rank) {
        return catA.rank - catB.rank;
      }
      return b.suggestedAmount - a.suggestedAmount;
    });
  }, [investAmount, assets, convertValue, reportingCurrency, netWorth, selectedMicroAssetIds, assetPortfolioWeightMap]);

  const totalMicroTarget = useMemo(() => {
    return round1(assets.reduce((acc, asset) => {
      const pWeight = assetPortfolioWeightMap.get(asset.id) ?? 1;
      return acc + ((Number(asset.targetAllocation) || 0) * pWeight);
    }, 0));
  }, [assets, assetPortfolioWeightMap]);

  const effectiveViewTab = activeViewTab === 'sectors' && hasAnySectorAssets ? 'sectors' : 'classes';
  const effectiveCalcMode = calcMode === 'sectors' && hasAnySectorAssets ? 'sectors' : calcMode;
  const satelliteScopeLabel = includeSatelliteEtfs ? 'Acțiuni + ETF-uri Satelit' : 'Acțiuni Individuale';

  return (
    <div className="space-y-6">
      {/* Target Allocation Adjuster Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:border-slate-700/80 transition-colors">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex flex-wrap gap-4 justify-between items-center bg-slate-900">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500/10 p-2 rounded-lg shrink-0">
              {effectiveViewTab === 'sectors' ? (
                <Layers className="text-indigo-400" size={22} />
              ) : (
                <Sliders className="text-emerald-400 animate-pulse" size={22} />
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                {effectiveViewTab === 'sectors'
                  ? 'Ajustare Alocare pe Sectoare — Core (ETF) + Satelit (Ținte Tactice)'
                  : 'Ajustare Alocare pe Clase de Active (Ținte Tactice)'}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {effectiveViewTab === 'sectors'
                  ? (sectorTargetMode === 'combined'
                      ? `Core ETF (podea fixă: ${sectorAnalysis.totalCoreFloorPct.toFixed(1)}%) + Satelit ajustabil (${satelliteScopeLabel}: ${sectorAnalysis.totalSectorPortfolioPct.toFixed(1)}%) = ${sectorAnalysis.totalCombinedTargetPct.toFixed(1)}% Equity`
                      : `Țintele sectoriale însumează 100% din bugetul Satelit (${satelliteScopeLabel}: ${effectiveSatelliteBudget.toFixed(1)}% din portofoliu) și se sincronizează bidirecțional`)
                  : 'Personalizează ponderile ideale pe clase de active și monitorizează profiturile pe fiecare categorie'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Tab switcher: Clase de Active | Sectoare (Core + Satelit) */}
            {hasAnySectorAssets && (
              <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center">
                <button
                  type="button"
                  onClick={() => setActiveViewTab('classes')}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    effectiveViewTab === 'classes'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sliders size={13} />
                  <span>Clase de Active</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveViewTab('sectors')}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    effectiveViewTab === 'sectors'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers size={13} />
                  <span>Sectoare (Core + Satelit)</span>
                </button>
              </div>
            )}

            {effectiveViewTab === 'classes' ? (
              <div className={`text-xs px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 ${
                Math.abs(totalTarget - 100) < 0.05
                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/20'
                  : 'bg-amber-950/80 text-amber-400 border border-amber-500/20'
              }`}>
                {Math.abs(totalTarget - 100) < 0.05 ? (
                  <>
                    <CheckCircle2 size={14} /> Total: 100% (Configurație Validă)
                  </>
                ) : (
                  <>
                    <AlertTriangle size={14} className="animate-bounce" /> Total: {Number(totalTarget.toFixed(1))}% (Setați la 100%)
                  </>
                )}
              </div>
            ) : (
              <div className={`text-xs px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 ${
                Math.abs(sectorAnalysis.totalSectorSharePct - 100) < 0.6
                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/20'
                  : 'bg-amber-950/80 text-amber-400 border border-amber-500/20'
              }`}>
                {Math.abs(sectorAnalysis.totalSectorSharePct - 100) < 0.6 ? (
                  <>
                    <CheckCircle2 size={14} /> {sectorTargetMode === 'combined'
                      ? `Equity: ${sectorAnalysis.totalCombinedTargetPct.toFixed(1)}% (Core ${sectorAnalysis.totalCoreFloorPct.toFixed(1)}% + Sat ${sectorAnalysis.totalSectorPortfolioPct.toFixed(1)}%)`
                      : `Satelit: ${sectorAnalysis.totalSectorSharePct.toFixed(1)}% (${sectorAnalysis.totalSectorPortfolioPct.toFixed(1)}% port.)`}
                  </>
                ) : (
                  <>
                    <AlertTriangle size={14} className="animate-bounce" /> Satelit: {sectorAnalysis.totalSectorPortfolioPct.toFixed(1)}% vs Buget {effectiveSatelliteBudget.toFixed(1)}%
                  </>
                )}
              </div>
            )}
            
            <button
              onClick={handleAskAIRebalance}
              className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all shadow-md cursor-pointer"
            >
              <Sparkles size={14} />
              <span>Consultă Experții AI</span>
            </button>
          </div>
        </div>

        {/* Content */}
        {effectiveViewTab === 'classes' ? (
        <div className="p-6 space-y-6">
          {/* Visual progress comparison */}
          <div className="space-y-3 bg-slate-950/40 border border-slate-800 p-4 rounded-xl">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <Info size={12} /> Vizualizare Comparativă Actual vs Țintă
            </h4>
            <div className="space-y-2.5 pt-1">
              {Object.keys(targets).map((key) => {
                const type = key as AssetType;
                const actualPct = actualValuesAndPercentages.percentages[type] || 0;
                const targetPct = targets[type] || 0;

                if (actualPct === 0 && targetPct === 0) return null;

                return (
                  <div key={type} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">{type}</span>
                      <span className="text-slate-400">
                        Actual: <strong className="text-slate-200">{actualPct.toFixed(1)}%</strong> | Țintă: <strong className="text-emerald-400">{targetPct}%</strong>
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden flex">
                      {actualPct > 0 && (
                        <div 
                          style={{ width: `${Math.min(actualPct, 100)}%` }} 
                          className="bg-blue-500 h-full rounded-l-full"
                          title={`Actual: ${actualPct.toFixed(1)}%`}
                        />
                      )}
                      {targetPct > 0 && (
                        <div 
                          style={{ width: `${Math.min(targetPct, 100)}%` }} 
                          className="bg-emerald-500/40 h-full border-l border-slate-900" 
                          title={`Țintă: ${targetPct}%`}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Allocation Table (Enhanced with Category Profits!) */}
          <div className="overflow-x-auto rounded-lg border border-slate-800">
            <table className="min-w-full text-left border-collapse">
              <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-semibold">
                <tr>
                  <th className="p-3">Clasă Activ</th>
                  <th className="p-3 text-right">Valoare Actuală</th>
                  <th className="p-3 text-right">Alocare Actuală</th>
                  <th className="p-3 text-right">Profit / Pierdere (Total)</th>
                  <th className="p-3 text-center w-40">Țintă Alocare (%)</th>
                  <th className="p-3 text-right">Deviație %</th>
                  <th className="p-3 text-right">Rebalansare Necesară</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm bg-slate-900/20">
                {Object.keys(DEFAULT_TARGETS).map((key) => {
                  const type = key as AssetType;
                  const actualValue = actualValuesAndPercentages.values[type] || 0;
                  const actualPct = actualValuesAndPercentages.percentages[type] || 0;
                  const targetPct = targets[type] || 0;
                  const targetValue = (netWorth * targetPct) / 100;
                  const deviation = actualPct - targetPct;
                  const actionAmount = targetValue - actualValue;

                  // Extract Profit/Loss for this category
                  const stats = categoryStats[type];
                  const hasProfitValue = stats && stats.cost > 0;
                  const plVal = stats ? stats.totalPL : 0;
                  const plPct = stats ? stats.plPercent : 0;

                  const hasValue = actualPct > 0 || targetPct > 0;

                  return (
                    <tr key={type} className={`hover:bg-slate-800/40 transition-colors ${hasValue ? 'opacity-100' : 'opacity-45'}`}>
                      <td className="p-3 font-semibold text-slate-200">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${
                            type === AssetType.ETF ? 'bg-blue-500' :
                            type === AssetType.STOCK ? 'bg-indigo-500' :
                            type === AssetType.CRYPTO ? 'bg-amber-500' :
                            type === AssetType.BOND ? 'bg-emerald-500' :
                            type === AssetType.CASH ? 'bg-teal-500' :
                            'bg-slate-500'
                          }`} />
                          {type}
                        </div>
                      </td>
                      
                      <td className="p-3 text-right font-mono text-slate-200 font-medium">
                        {actualValue.toLocaleString('ro-RO', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} {reportingCurrency}
                      </td>
                      
                      <td className="p-3 text-right font-mono text-slate-400">
                        {actualPct.toFixed(1)}%
                      </td>

                      {/* Profit / Loss Column */}
                      <td className="p-3 text-right font-mono text-xs">
                        {hasProfitValue ? (
                          <div className={plVal >= 0 ? 'text-emerald-400 font-medium' : 'text-rose-400 font-medium'}>
                            {plVal >= 0 ? '+' : ''}{plVal.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}
                            <span className="text-[10px] block font-mono text-slate-500">
                              ({plVal >= 0 ? '+' : ''}{plPct.toFixed(1)}%)
                            </span>
                          </div>
                        ) : actualValue > 0 ? (
                          <span className="text-slate-500">-</span>
                        ) : (
                          <span className="text-slate-600">-</span>
                        )}
                      </td>

                      <td className="p-3">
                        <div className="flex items-center justify-center gap-2">
                          <input
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            value={targetPct}
                            onChange={(e) => handleTargetChange(type, parseFloat(e.target.value) || 0)}
                            className="w-16 accent-emerald-500 cursor-ew-resize hidden lg:block"
                          />
                          <div className="flex items-center border border-slate-700 bg-slate-950 rounded px-2 py-0.5 text-xs">
                            <input
                              type="number"
                              min="0"
                              max="100"
                              step="0.5"
                              value={targetPct}
                              onChange={(e) => handleTargetChange(type, parseFloat(e.target.value) || 0)}
                              className="w-11 bg-transparent text-right text-white font-bold outline-none"
                            />
                            <span className="text-slate-500 font-bold ml-0.5">%</span>
                          </div>
                        </div>
                      </td>
                      
                      <td className="p-3 text-right font-mono">
                        {deviation === 0 ? (
                          <span className="text-slate-500">0.0%</span>
                        ) : (
                          <span className={deviation > 0 ? 'text-rose-400' : 'text-emerald-400'}>
                            {deviation > 0 ? '+' : ''}{deviation.toFixed(1)}%
                          </span>
                        )}
                      </td>
                      
                      <td className="p-3 text-right font-mono font-bold text-xs">
                        {Math.abs(actionAmount) < 5 ? (
                          <span className="text-slate-500">-</span>
                        ) : actionAmount > 0 ? (
                          <span className="text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-1 rounded">
                            CUMPĂRĂ +{actionAmount.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}
                          </span>
                        ) : (
                          <span className="text-rose-400 bg-rose-950/40 border border-rose-500/20 px-2 py-1 rounded">
                            VINDE {Math.abs(actionAmount).toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        ) : (
        <div className="p-6 space-y-6">
          {/* Core-Satellite Strategy Toolbar */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Target Mode Switcher: Total Portfolio (Core+Sat) vs Direct (% Satellite) */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="bg-slate-900 p-1 rounded-lg border border-slate-800 flex items-center">
                  <button
                    type="button"
                    onClick={() => setSectorTargetMode('combined')}
                    className={`text-xs font-bold px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      sectorTargetMode === 'combined'
                        ? 'bg-indigo-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Total Portofoliu (Core + Satelit)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSectorTargetMode('direct')}
                    className={`text-xs font-bold px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      sectorTargetMode === 'direct'
                        ? 'bg-emerald-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Direct (% Satelit)
                  </button>
                </div>

                {/* Include Satellite ETFs toggle */}
                <label className="inline-flex items-center gap-2 text-xs text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg cursor-pointer hover:border-violet-500/40 transition-colors select-none">
                  <input
                    type="checkbox"
                    checked={includeSatelliteEtfs}
                    onChange={(e) => setIncludeSatelliteEtfs(e.target.checked)}
                    className="w-3.5 h-3.5 rounded accent-violet-500 cursor-pointer"
                  />
                  <span>
                    Include ETF-uri Satelit
                    {satelliteEtfCount > 0 && (
                      <span className="ml-1 text-[10px] font-mono px-1.5 py-0.2 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                        {satelliteEtfCount}
                      </span>
                    )}
                  </span>
                </label>
              </div>

              {/* Benchmark Selector + Auto-Completion + Undo */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-semibold text-slate-400">Reper Strategie:</span>
                <select
                  value={selectedBenchmark}
                  onChange={(e) => setSelectedBenchmark(e.target.value as SectorBenchmarkId)}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white font-medium outline-none focus:border-indigo-500 cursor-pointer"
                >
                  {Object.values(SECTOR_BENCHMARKS).map(b => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  ))}
                </select>

                {onApplyBatchSectorTargets && selectedBenchmark !== 'manual' && (
                  <button
                    type="button"
                    onClick={handleApplyBenchmarkCompletion}
                    className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all shadow cursor-pointer"
                    title={`Calculează automat țintele Satelit (${satelliteScopeLabel}) astfel încât, împreună cu ETF-urile Core, să te apropii cât mai mult de ${sectorAnalysis.benchmarkProfile.name}`}
                  >
                    <Wand2 size={13} />
                    <span>Aplică Completion</span>
                  </button>
                )}

                {undoSnapshot && onRestoreAssetTargets && (
                  <button
                    type="button"
                    onClick={handleUndoCompletion}
                    className="inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                    title="Revino la țintele individuale anterioare aplicării Completion"
                  >
                    <RotateCcw size={13} />
                    <span>Anulează</span>
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 pt-1 border-t border-slate-800/70">
              <span>
                <strong className="text-slate-200">{sectorAnalysis.benchmarkProfile.name}:</strong> {sectorAnalysis.benchmarkProfile.shortDesc}
              </span>
              <span className="font-mono">
                <span className="text-sky-400">Core ETF: {sectorAnalysis.totalCoreFloorPct.toFixed(1)}%</span>
                {' + '}
                <span className="text-indigo-400">Satelit ({includeSatelliteEtfs ? 'Acț+ETF' : 'Acț'}): {sectorAnalysis.totalSectorPortfolioPct.toFixed(1)}%</span>
                {' = '}
                <strong className="text-white">{sectorAnalysis.totalCombinedTargetPct.toFixed(1)}% Equity</strong>
              </span>
            </div>
          </div>

          {/* Visual progress comparison */}
          <div className="space-y-3 bg-slate-950/40 border border-slate-800 p-4 rounded-xl">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <Info size={12} />{' '}
                {sectorTargetMode === 'combined'
                  ? 'Vizualizare Core (ETF) + Satelit vs Țintă Totală (% din Portofoliu)'
                  : `Vizualizare Comparativă Actual vs Țintă (% din ${satelliteScopeLabel})`}
              </h4>
              <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-400">
                {sectorTargetMode === 'combined' ? (
                  <>
                    <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2 rounded-sm bg-sky-500 inline-block" /> Core ETF (Podea)</span>
                    <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2 rounded-sm bg-indigo-500 inline-block" /> Satelit ({includeSatelliteEtfs ? 'Acț + ETF Satelit' : 'Acțiuni'})</span>
                    <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2 rounded-sm bg-emerald-400/60 inline-block" /> Reper {sectorAnalysis.benchmarkProfile.id === 'manual' ? 'Țintă' : 'Benchmark'}</span>
                  </>
                ) : (
                  <span>
                    Valoare Satelit: <strong className="text-white font-mono">{sectorAnalysis.totalSatelliteValue.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}</strong> • Buget: <strong className="text-indigo-400 font-mono">{effectiveSatelliteBudget.toFixed(1)}%</strong>
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-2.5 pt-1">
              {sectorAnalysis.rows.map((row) => {
                if (sectorTargetMode === 'combined') {
                  if (row.totalWithEtfPct < 0.2 && row.targetCombinedPortfolioPct < 0.2) return null;
                } else {
                  if (row.actualPctOfSatellite === 0 && row.targetPctOfSatellite === 0) return null;
                }
                const meta = getSectorMeta(row.sector);
                const isConcentrated = row.totalWithEtfPct >= 22;
                const scaleFactor = sectorTargetMode === 'combined' ? 2.5 : 1; // stretch 0-40% nicely across bar in combined mode
                return (
                  <div key={row.sector} className="space-y-1">
                    <div className="flex flex-wrap justify-between text-xs gap-2">
                      <span className="text-slate-300 font-medium flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${meta.dotColor}`} />
                        {row.sector}
                        {row.count > 0 && (
                          <span className="text-[10px] text-slate-500">
                            ({row.stockCount > 0 ? `${row.stockCount} acț.` : ''}{row.stockCount > 0 && row.etfCount > 0 ? ' + ' : ''}{row.etfCount > 0 ? `${row.etfCount} ETF` : ''})
                          </span>
                        )}
                        {isConcentrated && (
                          <span className="inline-flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30" title="Expunerea totală pe acest sector depășește 22% din portofoliu">
                            <ShieldAlert size={10} /> Concentrare
                          </span>
                        )}
                      </span>
                      {sectorTargetMode === 'combined' ? (
                        <span className="text-slate-400 text-right font-mono text-[11px]">
                          Actual: <strong className={isConcentrated ? 'text-amber-300' : 'text-white'}>{row.totalWithEtfPct.toFixed(1)}%</strong>
                          {' | '}
                          Țintă: <strong className="text-indigo-400">{row.targetCombinedPortfolioPct.toFixed(1)}%</strong>
                          <span className="text-[10px] text-slate-500 ml-1.5">
                            (Core {row.coreFloorPct.toFixed(1)}% + Sat {row.targetPortfolioPct.toFixed(1)}% | Reper: {row.benchmarkPortfolioPct.toFixed(1)}%)
                          </span>
                        </span>
                      ) : (
                        <span className="text-slate-400 text-right">
                          Satelit: <strong className="text-slate-200">{row.actualPctOfSatellite.toFixed(1)}%</strong> | Țintă: <strong className="text-indigo-400">{row.targetPctOfSatellite.toFixed(1)}%</strong>
                          <span className="text-[10px] text-slate-500 ml-1.5">({row.targetPortfolioPct.toFixed(1)}% port. | Total cu ETF: {row.totalWithEtfPct.toFixed(1)}%)</span>
                        </span>
                      )}
                    </div>
                    {sectorTargetMode === 'combined' ? (
                      <div className="relative h-2.5 w-full bg-slate-800/80 rounded-full overflow-hidden flex">
                        {row.coreFloorPct > 0 && (
                          <div
                            style={{ width: `${Math.min(row.coreFloorPct * scaleFactor, 100)}%` }}
                            className="bg-sky-500/80 h-full"
                            title={`Core ETF (Podea): ${row.coreFloorPct.toFixed(1)}% din portofoliu`}
                          />
                        )}
                        {row.targetPortfolioPct > 0 && (
                          <div
                            style={{ width: `${Math.min(row.targetPortfolioPct * scaleFactor, Math.max(0, 100 - row.coreFloorPct * scaleFactor))}%` }}
                            className="bg-indigo-500 h-full border-l border-slate-900"
                            title={`Satelit Țintă: +${row.targetPortfolioPct.toFixed(1)}% din portofoliu`}
                          />
                        )}
                        {row.benchmarkPortfolioPct > 0 && (
                          <div
                            style={{ left: `${Math.min(row.benchmarkPortfolioPct * scaleFactor, 99)}%` }}
                            className="absolute top-0 bottom-0 w-0.5 bg-emerald-400 shadow"
                            title={`Reper ${sectorAnalysis.benchmarkProfile.name}: ${row.benchmarkPortfolioPct.toFixed(1)}% din portofoliu`}
                          />
                        )}
                      </div>
                    ) : (
                      <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden flex">
                        {row.actualPctOfSatellite > 0 && (
                          <div
                            style={{ width: `${Math.min(row.actualPctOfSatellite, 100)}%` }}
                            className="bg-indigo-500 h-full rounded-l-full"
                            title={`Actual Satelit: ${row.actualPctOfSatellite.toFixed(1)}%`}
                          />
                        )}
                        {row.targetPctOfSatellite > 0 && (
                          <div
                            style={{ width: `${Math.min(row.targetPctOfSatellite, 100)}%` }}
                            className="bg-emerald-500/40 h-full border-l border-slate-900"
                            title={`Țintă Satelit: ${row.targetPctOfSatellite.toFixed(1)}% (${row.targetPortfolioPct.toFixed(1)}% portofoliu)`}
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 11-Sector GICS Target Table */}
          <div className="overflow-x-auto rounded-lg border border-slate-800">
            {sectorTargetMode === 'combined' ? (
              <table className="min-w-full text-left border-collapse">
                <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-semibold">
                  <tr>
                    <th className="p-3">Sector (GICS)</th>
                    <th className="p-3 text-right" title="Expunerea de bază venită automat din ETF-urile Core (Piață Largă) — pragul minim sub care nu poți coborî fără a modifica ETF-urile Core">Core ETF (Podea)</th>
                    <th className="p-3 text-right" title={`Valoarea și ponderea actuală a pozițiilor Satelit (${satelliteScopeLabel})`}>Satelit (Actual)</th>
                    <th className="p-3 text-right" title="Expunerea reală combinată în tot portofoliul (Core ETF + Satelit ETF + Acțiuni)">Total Actual (cu ETF)</th>
                    <th className="p-3 text-right" title={`Ponderea de referință pentru ${sectorAnalysis.benchmarkProfile.name} scalată la ${sectorAnalysis.totalEquityTargetPct.toFixed(1)}% Equity`}>Reper ({selectedBenchmark === 'manual' ? 'Ref.' : sectorAnalysis.benchmarkProfile.name.split(' ')[0]})</th>
                    <th className="p-3 text-center w-52">Țintă Totală (% Portofoliu)</th>
                    <th className="p-3 text-right">Deviație %</th>
                    <th className="p-3 text-right">Rebalansare Necesară</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm bg-slate-900/20">
                  {sectorAnalysis.rows.map((row) => {
                    const meta = getSectorMeta(row.sector);
                    const hasSatellites = row.count > 0;
                    const isConcentrated = row.totalWithEtfPct >= 22;
                    const isActiveRow = hasSatellites || row.coreFloorPct > 0.2 || row.totalWithEtfPct > 0.2;
                    const sliderMax = Math.max(40, Math.ceil(row.coreFloorPct + effectiveSatelliteBudget));

                    return (
                      <tr key={row.sector} className={`hover:bg-slate-800/40 transition-colors ${isActiveRow ? 'opacity-100' : 'opacity-45'}`}>
                        <td className="p-3 font-semibold text-slate-200">
                          <div className="flex items-start gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${meta.dotColor}`} />
                            <div>
                              <div className="flex flex-wrap items-center gap-1.5">
                                <span>{row.sector}</span>
                                {row.stockCount > 0 && (
                                  <span className="text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700 px-1.5 py-0.2 rounded">
                                    {row.stockCount} acț.
                                  </span>
                                )}
                                {row.etfCount > 0 && (
                                  <span className="text-[10px] font-mono bg-violet-500/15 text-violet-300 border border-violet-500/30 px-1.5 py-0.2 rounded">
                                    {row.etfCount} ETF
                                  </span>
                                )}
                                {isConcentrated && (
                                  <span className="text-[10px] bg-amber-500/15 text-amber-300 border border-amber-500/30 px-1.5 py-0.2 rounded font-bold" title="Expunere totală > 22% din portofoliu">
                                    ⚠
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-slate-500 font-normal block">
                                {hasSatellites
                                  ? row.symbols.slice(0, 5).map(sym => row.etfSymbols.includes(sym) ? `${sym} [ETF]` : sym).join(', ') + (row.symbols.length > 5 ? ` +${row.symbols.length - 5}` : '')
                                  : meta.labelRo}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Core ETF Floor */}
                        <td className="p-3 text-right font-mono text-xs">
                          <span className={row.coreFloorPct > 0.05 ? 'text-sky-300 font-semibold' : 'text-slate-600'}>
                            {row.coreFloorPct.toFixed(1)}%
                          </span>
                        </td>

                        {/* Satellite Actual */}
                        <td className="p-3 text-right font-mono text-xs text-slate-200">
                          {row.value > 0 ? (
                            <>
                              <div>{row.value.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}</div>
                              <span className="text-[10px] text-indigo-300 block">{row.actualPctOfPortfolio.toFixed(1)}% port.</span>
                            </>
                          ) : (
                            <span className="text-slate-600">0 {reportingCurrency}</span>
                          )}
                        </td>

                        {/* Real Combined Actual with ETF */}
                        <td className="p-3 text-right font-mono text-xs">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded border font-bold ${
                            isConcentrated
                              ? 'bg-amber-950/50 border-amber-500/40 text-amber-300'
                              : row.totalWithEtfPct > 0.05
                                ? 'bg-slate-800/80 border-slate-700/70 text-white'
                                : 'bg-transparent border-transparent text-slate-600 font-normal'
                          }`}>
                            {row.totalWithEtfPct.toFixed(1)}%
                          </span>
                        </td>

                        {/* Benchmark Reference */}
                        <td className="p-3 text-right font-mono text-xs">
                          <div className="text-slate-300 font-semibold">{row.benchmarkPortfolioPct.toFixed(1)}%</div>
                          <span className={`text-[10px] block ${
                            Math.abs(row.deviationVsBenchmark) < 1.5
                              ? 'text-slate-500'
                              : row.deviationVsBenchmark > 0
                                ? 'text-amber-400'
                                : 'text-emerald-400'
                          }`}>
                            {row.deviationVsBenchmark > 0 ? '+' : ''}{row.deviationVsBenchmark.toFixed(1)}% vs reper
                          </span>
                        </td>

                        {/* Combined Target (% Portfolio) with Core Floor clamped */}
                        <td className="p-3">
                          {hasSatellites ? (
                            <div className="flex flex-col items-center gap-0.5">
                              <div className="flex items-center justify-center gap-2">
                                <input
                                  type="range"
                                  min={row.coreFloorPct}
                                  max={sliderMax}
                                  step="0.5"
                                  value={row.targetCombinedPortfolioPct}
                                  onChange={(e) => handleCombinedSectorTargetChange(row.sector, row.coreFloorPct, parseFloat(e.target.value) || row.coreFloorPct)}
                                  className="w-16 accent-indigo-500 cursor-ew-resize hidden lg:block"
                                />
                                <div className="flex items-center border border-slate-700 bg-slate-950 rounded px-2 py-0.5 text-xs">
                                  <input
                                    type="number"
                                    min={row.coreFloorPct}
                                    max="100"
                                    step="0.5"
                                    value={row.targetCombinedPortfolioPct}
                                    onChange={(e) => handleCombinedSectorTargetChange(row.sector, row.coreFloorPct, parseFloat(e.target.value) || row.coreFloorPct)}
                                    className="w-11 bg-transparent text-right text-white font-bold outline-none"
                                  />
                                  <span className="text-slate-500 font-bold ml-0.5">%</span>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono text-slate-400">
                                <span className="text-sky-400/90">Core {row.coreFloorPct.toFixed(1)}%</span> + <span className="text-indigo-300 font-semibold">Sat {row.targetPortfolioPct.toFixed(1)}%</span>
                              </span>
                            </div>
                          ) : onOpenAddPlannedAsset ? (
                            <div className="flex flex-col items-center gap-1">
                              <span className="text-[10px] font-mono text-sky-400/80">Podea Core: {row.coreFloorPct.toFixed(1)}%</span>
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={() => onOpenAddPlannedAsset(row.sector, AssetType.STOCK)}
                                  className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-colors cursor-pointer"
                                  title={`Planifică o acțiune individuală în sectorul ${row.sector}`}
                                >
                                  <PlusCircle size={10} /> Acțiune
                                </button>
                                <button
                                  type="button"
                                  onClick={() => onOpenAddPlannedAsset(row.sector, AssetType.ETF)}
                                  className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 border border-violet-500/30 transition-colors cursor-pointer"
                                  title={`Planifică un ETF Satelit sectorial pe ${row.sector}`}
                                >
                                  <PlusCircle size={10} /> ETF
                                </button>
                              </div>
                            </div>
                          ) : (
                            <span className="text-xs text-slate-600 block text-center">Doar Core ({row.coreFloorPct.toFixed(1)}%)</span>
                          )}
                        </td>

                        {/* Deviation Combined */}
                        <td className="p-3 text-right font-mono text-xs">
                          {Math.abs(row.deviationCombined) < 0.05 ? (
                            <span className="text-slate-500">0.0%</span>
                          ) : (
                            <span className={row.deviationCombined > 0 ? 'text-rose-400' : 'text-emerald-400'}>
                              {row.deviationCombined > 0 ? '+' : ''}{row.deviationCombined.toFixed(1)}%
                            </span>
                          )}
                        </td>

                        {/* Rebalance Action (Combined) */}
                        <td className="p-3 text-right font-mono font-bold text-xs">
                          {Math.abs(row.actionAmountCombined) < 5 ? (
                            <span className="text-slate-500">-</span>
                          ) : row.actionAmountCombined > 0 ? (
                            <span className="text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-1 rounded">
                              CUMPĂRĂ +{row.actionAmountCombined.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}
                            </span>
                          ) : (
                            <span className="text-rose-400 bg-rose-950/40 border border-rose-500/20 px-2 py-1 rounded">
                              VINDE {Math.abs(row.actionAmountCombined).toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <table className="min-w-full text-left border-collapse">
                <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-semibold">
                  <tr>
                    <th className="p-3">Sector (GICS)</th>
                    <th className="p-3 text-right">Valoare Actuală</th>
                    <th className="p-3 text-right">Actual (% Satelit)</th>
                    <th className="p-3 text-right" title="Expunere combinată din Acțiuni Individuale + Look-through din ETF-urile de acțiuni (procent din întregul portofoliu)">
                      Total cu ETF
                    </th>
                    <th className="p-3 text-right">Profit / Pierdere</th>
                    <th className="p-3 text-center w-48">Țintă (% din Satelit)</th>
                    <th className="p-3 text-right">Deviație %</th>
                    <th className="p-3 text-right">Rebalansare Necesară</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm bg-slate-900/20">
                  {sectorAnalysis.rows.map((row) => {
                    const meta = getSectorMeta(row.sector);
                    const hasSatellites = row.count > 0;
                    const hasCost = row.cost > 0;
                    const isActiveRow = hasSatellites || row.targetPctOfSatellite > 0 || row.totalWithEtfPct > 0.5;

                    return (
                      <tr key={row.sector} className={`hover:bg-slate-800/40 transition-colors ${isActiveRow ? 'opacity-100' : 'opacity-45'}`}>
                        <td className="p-3 font-semibold text-slate-200">
                          <div className="flex items-start gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${meta.dotColor}`} />
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span>{row.sector}</span>
                                {row.stockCount > 0 && (
                                  <span className="text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700 px-1.5 py-0.2 rounded">
                                    {row.stockCount} acț.
                                  </span>
                                )}
                                {row.etfCount > 0 && (
                                  <span className="text-[10px] font-mono bg-violet-500/15 text-violet-300 border border-violet-500/30 px-1.5 py-0.2 rounded">
                                    {row.etfCount} ETF
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-slate-500 font-normal block">
                                {hasSatellites
                                  ? row.symbols.slice(0, 5).map(sym => row.etfSymbols.includes(sym) ? `${sym} [ETF]` : sym).join(', ') + (row.symbols.length > 5 ? ` +${row.symbols.length - 5}` : '')
                                  : meta.labelRo}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="p-3 text-right font-mono text-slate-200 font-medium">
                          {row.value > 0
                            ? `${row.value.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} ${reportingCurrency}`
                            : <span className="text-slate-600">0 {reportingCurrency}</span>}
                          {row.actualPctOfPortfolio > 0.05 && (
                            <span className="text-[10px] block text-slate-500">{row.actualPctOfPortfolio.toFixed(1)}% port.</span>
                          )}
                        </td>

                        <td className="p-3 text-right font-mono text-slate-300">
                          {row.actualPctOfSatellite.toFixed(1)}%
                        </td>

                        {/* Informative Total with ETF Look-through */}
                        <td className="p-3 text-right font-mono text-xs">
                          {row.totalWithEtfPct > 0.05 ? (
                            <span
                              className="inline-flex items-center px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/70 text-sky-300 font-semibold"
                              title={`Expunere combinată în întregul portofoliu (Core + Satelit)`}
                            >
                              {row.totalWithEtfPct.toFixed(1)}%
                            </span>
                          ) : (
                            <span className="text-slate-600">0.0%</span>
                          )}
                        </td>

                        {/* Profit / Loss */}
                        <td className="p-3 text-right font-mono text-xs">
                          {hasCost ? (
                            <div className={row.totalPL >= 0 ? 'text-emerald-400 font-medium' : 'text-rose-400 font-medium'}>
                              {row.totalPL >= 0 ? '+' : ''}{row.totalPL.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}
                              <span className="text-[10px] block text-slate-500">
                                ({row.totalPL >= 0 ? '+' : ''}{row.plPercent.toFixed(1)}%)
                              </span>
                            </div>
                          ) : (
                            <span className="text-slate-600">-</span>
                          )}
                        </td>

                        {/* Target (% of Satellite) or Planifică buttons when 0 satellites */}
                        <td className="p-3">
                          {hasSatellites ? (
                            <div className="flex flex-col items-center gap-0.5">
                              <div className="flex items-center justify-center gap-2">
                                <input
                                  type="range"
                                  min="0"
                                  max="100"
                                  step="1"
                                  value={row.targetPctOfSatellite}
                                  onChange={(e) => handleSectorTargetShareChange(row.sector, parseFloat(e.target.value) || 0)}
                                  className="w-16 accent-indigo-500 cursor-ew-resize hidden lg:block"
                                />
                                <div className="flex items-center border border-slate-700 bg-slate-950 rounded px-2 py-0.5 text-xs">
                                  <input
                                    type="number"
                                    min="0"
                                    max="100"
                                    step="0.5"
                                    value={row.targetPctOfSatellite}
                                    onChange={(e) => handleSectorTargetShareChange(row.sector, parseFloat(e.target.value) || 0)}
                                    className="w-11 bg-transparent text-right text-white font-bold outline-none"
                                  />
                                  <span className="text-slate-500 font-bold ml-0.5">%</span>
                                </div>
                              </div>
                              <span className="text-[10px] font-mono text-slate-500">
                                = {row.targetPortfolioPct.toFixed(1)}% din portofoliu
                              </span>
                            </div>
                          ) : onOpenAddPlannedAsset ? (
                            <div className="flex items-center justify-center gap-1">
                              <button
                                type="button"
                                onClick={() => onOpenAddPlannedAsset(row.sector, AssetType.STOCK)}
                                className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-colors cursor-pointer"
                              >
                                <PlusCircle size={10} /> Acțiune
                              </button>
                              <button
                                type="button"
                                onClick={() => onOpenAddPlannedAsset(row.sector, AssetType.ETF)}
                                className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 border border-violet-500/30 transition-colors cursor-pointer"
                              >
                                <PlusCircle size={10} /> ETF
                              </button>
                            </div>
                          ) : (
                            <span className="text-xs text-slate-600 block text-center">0 active</span>
                          )}
                        </td>

                        {/* Deviation % (of Satellite) */}
                        <td className="p-3 text-right font-mono text-xs">
                          {Math.abs(row.deviationOfSatellite) < 0.05 ? (
                            <span className="text-slate-500">0.0%</span>
                          ) : (
                            <span className={row.deviationOfSatellite > 0 ? 'text-rose-400' : 'text-emerald-400'}>
                              {row.deviationOfSatellite > 0 ? '+' : ''}{row.deviationOfSatellite.toFixed(1)}%
                            </span>
                          )}
                        </td>

                        {/* Rebalance action (Direct) */}
                        <td className="p-3 text-right font-mono font-bold text-xs">
                          {Math.abs(row.actionAmountDirect) < 5 ? (
                            <span className="text-slate-500">-</span>
                          ) : row.actionAmountDirect > 0 ? (
                            <span className="text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-1 rounded">
                              CUMPĂRĂ +{row.actionAmountDirect.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}
                            </span>
                          ) : (
                            <span className="text-rose-400 bg-rose-950/40 border border-rose-500/20 px-2 py-1 rounded">
                              VINDE {Math.abs(row.actionAmountDirect).toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
        )}
      </div>

      {/* --- AUTOMATIC INVESTMENT CALCULATOR SECTION --- */}
      <div className="bg-slate-900 border border-emerald-500/20 rounded-xl overflow-hidden shadow-xl hover:border-emerald-500/40 transition-all duration-300">
        {/* Banner header for the calculator */}
        <div className="p-6 border-b border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500/10 p-2.5 rounded-xl shrink-0 border border-emerald-500/20">
              <Coins className="text-emerald-400" size={24} />
            </div>
            <div>
              <h3 className="text-md font-bold text-white flex items-center gap-2">
                Calculator Inteligent de Alocare Capital Nou (DCA)
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                  Automatizat
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Introdu suma curentă de investit, iar algoritmul o va distribui prioritar către activele deficitare (sub țintă) pentru a grăbi rebalansarea.
              </p>
            </div>
          </div>

          {/* Capital Input Box */}
          <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl p-2 w-full md:w-auto shrink-0 shadow-inner">
            <span className="text-xs font-bold text-slate-500 px-2">SUMĂ INVESTIȚIE:</span>
            <div className="relative flex items-center w-36">
              <input
                type="number"
                min="10"
                step="50"
                value={investAmount}
                onChange={(e) => setInvestAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full bg-slate-850 text-white font-extrabold text-right px-3 py-1.5 rounded-lg outline-none border border-slate-700 focus:border-emerald-500 text-sm font-mono"
              />
              <span className="absolute left-2.5 text-xs text-slate-400 font-bold pointer-events-none">
                {reportingCurrency}
              </span>
            </div>
          </div>
        </div>

        {/* Calculator Body with Recommendations */}
        <div className="p-6">
          <div className="space-y-6">
            {/* Presets Grid & Mode Selector (always visible so user can freely switch modes) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-950/30 p-4 rounded-xl border border-slate-800/60">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mr-1">Pre-setări Rapide:</span>
                {[100, 200, 500, 1000, 2500, 5000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setInvestAmount(amt)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                      investAmount === amt 
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/10' 
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                    }`}
                  >
                    +{amt.toLocaleString('ro-RO')} {reportingCurrency}
                  </button>
                ))}
              </div>

              {/* Level Toggle Selector */}
              <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex flex-wrap items-center shrink-0 w-fit self-end sm:self-auto">
                <button
                  type="button"
                  onClick={() => setCalcMode('macro')}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    effectiveCalcMode === 'macro'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>Nivel Macro (Clase Active)</span>
                </button>
                {hasAnySectorAssets && (
                  <button
                    type="button"
                    onClick={() => setCalcMode('sectors')}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                      effectiveCalcMode === 'sectors'
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>Nivel Sectoare ({sectorTargetMode === 'combined' ? 'Core + Satelit' : 'Satelit'})</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setCalcMode('micro')}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    effectiveCalcMode === 'micro'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>Nivel Micro (Active)</span>
                </button>
              </div>
            </div>

            {effectiveCalcMode === 'micro' && Math.abs(totalMicroTarget - 100) > 0.1 && (
              <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-4 flex gap-3 text-xs text-amber-400">
                <AlertTriangle size={18} className="shrink-0 text-amber-500 mt-0.5 animate-bounce" />
                <div>
                  <strong className="block font-bold text-amber-300 mb-0.5">Atenție la Țintele Micro (Active):</strong>
                  Suma țintelor individuale pentru active este de <strong>{totalMicroTarget.toFixed(1)}%</strong> (trebuie să fie exact 100% pentru ca algoritmul DCA să lucreze corect). Te rugăm să reglezi țintele fiecărui activ în tabelul <strong>„Planificare & Rebalansare”</strong> de mai jos.
                </div>
              </div>
            )}

            {effectiveCalcMode === 'sectors' && Math.abs(sectorAnalysis.totalSectorSharePct - 100) > 0.6 && (
              <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-4 flex gap-3 text-xs text-amber-400">
                <AlertTriangle size={18} className="shrink-0 text-amber-500 mt-0.5 animate-bounce" />
                <div>
                  <strong className="block font-bold text-amber-300 mb-0.5">Atenție la Bugetul Sectorial Satelit:</strong>
                  Suma țintelor Satelit este de <strong>{sectorAnalysis.totalSectorPortfolioPct.toFixed(1)}%</strong> din portofoliu (față de bugetul de referință <strong>{effectiveSatelliteBudget.toFixed(1)}%</strong>). Poți ajusta sliderele sau apăsa <strong>„Aplică Completion”</strong> în tab-ul <strong>„Sectoare (Core + Satelit)”</strong> de mai sus.
                </div>
              </div>
            )}

            {investAmount <= 0 ? (
              <div className="text-center p-8 bg-slate-950/30 rounded-xl border border-dashed border-slate-800">
                <AlertTriangle className="text-slate-500 mx-auto mb-2" size={28} />
                <p className="text-sm text-slate-400">
                  Introdu o sumă de investiție validă mai mare decât zero.
                </p>
              </div>
            ) : (
              /* Suggestions grid & projection table */
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left Area: Summary metrics cards */}
                <div className="space-y-4 lg:col-span-1">
                  <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-4 space-y-3.5">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp size={12} className="text-emerald-400" />
                      {effectiveCalcMode === 'sectors' && sectorTargetMode === 'direct'
                        ? `Impactul Asupra Sateliților (${includeSatelliteEtfs ? 'Acț + ETF' : 'Acțiuni'})`
                        : 'Impactul Asupra Portofoliului'}
                    </h4>
                    
                    <div className="space-y-2 text-xs divide-y divide-slate-800/60">
                      {effectiveCalcMode === 'sectors' && sectorTargetMode === 'direct' ? (
                        <>
                          <div className="flex justify-between pb-2">
                            <span className="text-slate-400">Valoare Actuală Satelit:</span>
                            <span className="font-mono text-slate-200">{sectorAnalysis.totalSatelliteValue.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}</span>
                          </div>
                          <div className="flex justify-between py-2">
                            <span className="text-slate-400">Capital Nou pentru Satelit:</span>
                            <span className="font-mono text-indigo-400 font-bold">+{investAmount.toLocaleString('ro-RO')} {reportingCurrency}</span>
                          </div>
                          <div className="flex justify-between pt-2">
                            <span className="text-slate-400 font-bold">Valoare Nouă Satelit:</span>
                            <span className="font-mono text-white font-extrabold">{(sectorAnalysis.totalSatelliteValue + investAmount).toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex justify-between pb-2">
                            <span className="text-slate-400">Valoare Actuală:</span>
                            <span className="font-mono text-slate-200">{netWorth.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}</span>
                          </div>
                          <div className="flex justify-between py-2">
                            <span className="text-slate-400">Sumă de Adăugat:</span>
                            <span className="font-mono text-emerald-400 font-bold">+{investAmount.toLocaleString('ro-RO')} {reportingCurrency}</span>
                          </div>
                          <div className="flex justify-between pt-2">
                            <span className="text-slate-400 font-bold">Valoare Nouă Estimată:</span>
                            <span className="font-mono text-white font-extrabold">{(netWorth + investAmount).toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="bg-emerald-950/10 border border-emerald-500/10 rounded-xl p-4 text-xs leading-relaxed text-slate-400">
                    <strong className="text-slate-200 block mb-1">💡 Cum funcționează algoritmul?</strong>
                    {effectiveCalcMode === 'macro' ? (
                      <span>Sistemul scanează toate activele tale și determină deficitul total pe clase (ETF, Acțiuni, Cripto etc.). Suma de investit este alocată prioritar claselor deficitare în funcție de ponderea țintelor setate, minimizând deviațiile.</span>
                    ) : effectiveCalcMode === 'sectors' ? (
                      sectorTargetMode === 'combined' ? (
                        <span>În modul <strong>Core + Satelit</strong>, sistemul direcționează suma de <strong>{investAmount.toLocaleString('ro-RO')} {reportingCurrency}</strong> către sectoarele unde <strong>expunerea totală (Core ETF + {satelliteScopeLabel})</strong> este sub ținta totală de portofoliu, evitând dublarea sectoarelor deja saturate de ETF-uri.</span>
                      ) : (
                        <span>Sistemul direcționează suma de <strong>{investAmount.toLocaleString('ro-RO')} {reportingCurrency}</strong> prioritar către <strong>sectoarele Satelit ({satelliteScopeLabel}) subponderate</strong> față de țintele setate în tab-ul „Sectoare (Core + Satelit)”.</span>
                      )
                    ) : (
                      <span>Sistemul analizează individual fiecare activ (ex: MSCI World, IUSN.DE) bazat pe procentul țintă setat de tine în tabelul de mai jos și pe valoarea sa curentă. Suma de <strong>{investAmount} {reportingCurrency}</strong> este împărțită automat și exact între activele deficitare, astfel încât să revii cel mai rapid la alocarea ideală.</span>
                    )}
                  </div>
                </div>

                {/* Right Area: Allocations results table */}
                <div className="lg:col-span-2 overflow-x-auto rounded-xl border border-slate-800">
                  {effectiveCalcMode === 'macro' ? (
                    <table className="min-w-full text-left border-collapse">
                      <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-bold">
                        <tr>
                          <th className="p-3 text-center w-12">Prioritar</th>
                          <th className="p-3">Clasă Activ</th>
                          <th className="p-3 text-right">Deviație Curentă</th>
                          <th className="p-3 text-right">Sumă Sugerată de Achiziție</th>
                          <th className="p-3 text-right">% Din Buget</th>
                          <th className="p-3 text-right">Pondere Estimată Nouă</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-xs bg-slate-900/10 font-mono">
                        {investmentSuggestions.length === 0 ? (
                          <tr>
                            <td colSpan={6} className="p-8 text-center text-slate-400 font-sans">
                              Toate clasele de active sunt la sau peste ponderea țintă. Nu este necesară nicio alocare suplimentară (portofoliu rebalansat).
                            </td>
                          </tr>
                        ) : (
                          investmentSuggestions.map((sug) => {
                            const deviation = sug.currentWeight - (targets[sug.type] || 0);
                            return (
                              <tr key={sug.type} className={`hover:bg-slate-850/50 transition-colors ${!sug.isSelected ? 'opacity-40 bg-slate-950/25' : ''}`}>
                                <td className="p-3 text-center">
                                  <input
                                    type="checkbox"
                                    checked={sug.isSelected}
                                    onChange={() => handleToggleMacroType(sug.type)}
                                    className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-emerald-500 focus:ring-emerald-500 cursor-pointer accent-emerald-500"
                                  />
                                </td>
                                <td className={`p-3 font-semibold text-slate-200 font-sans ${!sug.isSelected ? 'line-through text-slate-500' : ''}`}>
                                  <div className="flex items-center gap-1.5">
                                    <span className={`w-2 h-2 rounded-full ${
                                      sug.type === AssetType.ETF ? 'bg-blue-500' :
                                      sug.type === AssetType.STOCK ? 'bg-indigo-500' :
                                      sug.type === AssetType.CRYPTO ? 'bg-amber-500' :
                                      sug.type === AssetType.BOND ? 'bg-emerald-500' :
                                      sug.type === AssetType.CASH ? 'bg-teal-500' :
                                      'bg-slate-500'
                                    }`} />
                                    {sug.type}
                                  </div>
                                </td>
                                <td className="p-3 text-right">
                                  <span className={deviation < 0 ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
                                    {deviation < 0 ? '' : '+'}{deviation.toFixed(1)}% Sub Țintă
                                  </span>
                                </td>
                                <td className={`p-3 text-right font-bold text-sm ${sug.isSelected && sug.suggestedAmount > 0 ? 'text-emerald-400' : 'text-slate-500'}`}>
                                  +{sug.suggestedAmount.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}
                                </td>
                                <td className="p-3 text-right text-slate-300">
                                  {sug.pctOfInvestment.toFixed(0)}%
                                </td>
                                <td className="p-3 text-right text-slate-200">
                                  <span className="text-slate-400 text-[10px] mr-1.5">{sug.currentWeight.toFixed(1)}% ➔</span>
                                  <strong className="text-white">{sug.newWeight.toFixed(1)}%</strong>
                                  <span className="text-[10px] text-slate-500 block">
                                    (Țintă: {targets[sug.type]}%)
                                  </span>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  ) : effectiveCalcMode === 'sectors' ? (
                    <table className="min-w-full text-left border-collapse">
                      <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-bold">
                        <tr>
                          <th className="p-3 text-center w-12">Prioritar</th>
                          <th className="p-3">Sector ({includeSatelliteEtfs ? 'Acț + ETF Satelit' : 'Acțiuni'})</th>
                          <th className="p-3 text-right">{sectorTargetMode === 'combined' ? 'Deviație Totală' : 'Deviație Satelit'}</th>
                          <th className="p-3 text-right">Sumă Sugerată de Achiziție</th>
                          <th className="p-3 text-right">% Din Buget</th>
                          <th className="p-3 text-right">{sectorTargetMode === 'combined' ? 'Pondere Nouă (cu ETF)' : 'Pondere Nouă (% Satelit)'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-xs bg-slate-900/10 font-mono">
                        {sectorInvestmentSuggestions.length === 0 ? (
                          <tr>
                            <td colSpan={6} className="p-8 text-center text-slate-400 font-sans">
                              Toate sectoarele cu poziții Satelit sunt deja la sau peste ponderea ideală.
                            </td>
                          </tr>
                        ) : (
                          sectorInvestmentSuggestions.map((sug) => {
                            const meta = getSectorMeta(sug.sector);
                            const deviation = sectorTargetMode === 'combined'
                              ? sug.totalWithEtfPct - sug.targetCombinedPortfolioPct
                              : sug.currentWeightOfSatellite - sug.targetPctOfSatellite;
                            return (
                              <tr key={sug.sector} className={`hover:bg-slate-850/50 transition-colors ${!sug.isSelected ? 'opacity-40 bg-slate-950/25' : ''}`}>
                                <td className="p-3 text-center">
                                  <input
                                    type="checkbox"
                                    checked={sug.isSelected}
                                    onChange={() => handleToggleSector(sug.sector)}
                                    className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-indigo-500 focus:ring-indigo-500 cursor-pointer accent-indigo-500"
                                  />
                                </td>
                                <td className={`p-3 font-semibold text-slate-200 font-sans ${!sug.isSelected ? 'line-through text-slate-500' : ''}`}>
                                  <div className="flex items-start gap-2">
                                    <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${meta.dotColor}`} />
                                    <div>
                                      <span>{sug.sector}</span>
                                      <span className="text-[10px] text-slate-500 font-normal block" title={sug.symbols.join(', ')}>
                                        {sug.symbols.slice(0, 4).map(s => sug.etfSymbols.includes(s) ? `${s} [ETF]` : s).join(', ')}{sug.symbols.length > 4 ? ` +${sug.symbols.length - 4}` : ''}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-3 text-right">
                                  <span className={deviation < 0 ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
                                    {deviation < 0 ? '' : '+'}{deviation.toFixed(1)}%
                                  </span>
                                </td>
                                <td className={`p-3 text-right font-bold text-sm ${sug.isSelected && sug.suggestedAmount > 0 ? 'text-indigo-400' : 'text-slate-500'}`}>
                                  +{sug.suggestedAmount.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}
                                </td>
                                <td className="p-3 text-right text-slate-300">
                                  {sug.pctOfInvestment.toFixed(0)}%
                                </td>
                                <td className="p-3 text-right text-slate-200">
                                  {sectorTargetMode === 'combined' ? (
                                    <>
                                      <span className="text-slate-400 text-[10px] mr-1.5">{sug.totalWithEtfPct.toFixed(1)}% ➔</span>
                                      <strong className="text-white">{sug.newCombinedPortfolioPct.toFixed(1)}%</strong>
                                      <span className="text-[10px] text-slate-500 block">
                                        (Țintă: {sug.targetCombinedPortfolioPct.toFixed(1)}% | Core: {sug.coreFloorPct.toFixed(1)}%)
                                      </span>
                                    </>
                                  ) : (
                                    <>
                                      <span className="text-slate-400 text-[10px] mr-1.5">{sug.currentWeightOfSatellite.toFixed(1)}% ➔</span>
                                      <strong className="text-white">{sug.newWeightOfSatellite.toFixed(1)}%</strong>
                                      <span className="text-[10px] text-slate-500 block">
                                        (Țintă: {sug.targetPctOfSatellite.toFixed(1)}% | Cu ETF: {sug.totalWithEtfPct.toFixed(1)}%)
                                      </span>
                                    </>
                                  )}
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  ) : (
                    <table className="min-w-full text-left border-collapse">
                      <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-bold">
                        <tr>
                          <th className="p-3 text-center w-12">Prioritar</th>
                          <th className="p-3">Activ</th>
                          <th className="p-3">Categorie</th>
                          <th className="p-3 text-right">Deviație Curentă</th>
                          <th className="p-3 text-right">Sumă de Achiziționat</th>
                          <th className="p-3 text-right">% Din Buget</th>
                          <th className="p-3 text-right">Pondere Estimată Nouă</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-xs bg-slate-900/10 font-mono">
                        {microInvestmentSuggestions.length === 0 ? (
                          <tr>
                            <td colSpan={7} className="p-8 text-center text-slate-400 font-sans">
                              Toate activele sunt la sau peste ponderea țintă. Nu este necesară nicio alocare suplimentară (portofoliu rebalansat).
                            </td>
                          </tr>
                        ) : (
                          microInvestmentSuggestions.map((sug) => {
                            const pWeight = assetPortfolioWeightMap.get(sug.asset.id) ?? 1;
                            const target = round1((Number(sug.asset.targetAllocation) || 0) * pWeight);
                            const deviation = sug.currentWeight - target;
                            return (
                              <tr key={sug.asset.id} className={`hover:bg-slate-850/50 transition-colors ${!sug.isSelected ? 'opacity-40 bg-slate-950/25' : ''}`}>
                                <td className="p-3 text-center">
                                  <input
                                    type="checkbox"
                                    checked={sug.isSelected}
                                    onChange={() => handleToggleMicroAsset(sug.asset.id)}
                                    className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-emerald-500 focus:ring-emerald-500 cursor-pointer accent-emerald-500"
                                  />
                                </td>
                                <td className={`p-3 font-semibold text-slate-200 font-sans ${!sug.isSelected ? 'line-through text-slate-500 font-normal' : ''}`}>
                                  <div className="flex flex-col">
                                    <span className={`font-bold ${!sug.isSelected ? 'text-slate-500' : 'text-white'}`}>{sug.asset.symbol}</span>
                                    <span className="text-[10px] text-slate-400 font-normal truncate max-w-[120px]" title={sug.asset.name}>
                                      {sug.asset.name}
                                    </span>
                                  </div>
                                </td>
                                <td className="p-3 font-sans text-slate-400">
                                  <span className="text-[10px] bg-slate-800 border border-slate-700 text-slate-300 px-1.5 py-0.5 rounded">
                                    {sug.asset.type}
                                  </span>
                                </td>
                                <td className="p-3 text-right">
                                  <span className={deviation < 0 ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
                                    {deviation < 0 ? '' : '+'}{deviation.toFixed(2)}%
                                  </span>
                                </td>
                                <td className="p-3 text-right font-mono text-xs">
                                  <div className={sug.isSelected && sug.suggestedAmount > 0 ? 'text-emerald-400 font-bold text-sm' : 'text-slate-500'}>
                                    +{sug.suggestedAmount.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}
                                  </div>
                                  {sug.isSelected && sug.suggestedAmount > 0 && sug.asset.currency !== reportingCurrency && (
                                    <span className="text-[10px] text-slate-400 block font-normal font-sans mt-0.5">
                                      (~{sug.suggestedAmountInAssetCurrency.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {sug.asset.currency})
                                    </span>
                                  )}
                                </td>
                                <td className="p-3 text-right text-slate-300">
                                  {sug.pctOfInvestment.toFixed(0)}%
                                </td>
                                <td className="p-3 text-right text-slate-200">
                                  <span className="text-slate-400 text-[10px] mr-1.5">{sug.currentWeight.toFixed(2)}% ➔</span>
                                  <strong className="text-white">{sug.newWeight.toFixed(2)}%</strong>
                                  <span className="text-[10px] text-slate-500 block">
                                    (Țintă: {target}%)
                                  </span>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  )}
                </div>

              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
