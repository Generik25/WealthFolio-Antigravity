import React, { useState, useEffect, useMemo } from 'react';
import { Asset, AssetType, Portfolio, getAssetCategoryGroup } from '../types';
import { Target, Info, AlertTriangle, Sparkles, Sliders, CheckCircle2, ChevronRight, Coins, ArrowUpRight, TrendingUp } from 'lucide-react';

interface AssetClassTargetAllocationProps {
  assets: Asset[];
  portfolios?: Portfolio[];
  reportingCurrency: string;
  convertValue: (amount: number, from: string, to: string) => number;
  netWorth: number;
  cashBalance?: number;
  onUpdateClassTarget?: (assetType: AssetType, newClassTarget: number) => void;
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
  onAskAI,
  activePortfolioId,
}) => {
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
  const [calcMode, setCalcMode] = useState<'macro' | 'micro'>('macro');
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
    localStorage.setItem(`investai_selected_micro_assets_${activePortfolioId}`, JSON.stringify(selectedMicroAssetIds));
  }, [selectedMicroAssetIds, activePortfolioId]);

  const handleToggleMacroType = (type: AssetType) => {
    setSelectedMacroTypes(prev => ({
      ...prev,
      [type]: prev[type] === false ? true : false
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

  // Handle target change (Bidirectional Macro -> Micro sync)
  const handleTargetChange = (type: AssetType, value: number) => {
    const sanitized = Math.max(0, Math.min(100, round1(Number(value) || 0)));
    setLocalTargets((prev) => ({
      ...prev,
      [type]: sanitized,
    }));
    if (type === AssetType.CASH) {
      setExplicitCashTarget(sanitized);
      try {
        localStorage.setItem(`investai_cash_target_${activePortfolioId}`, String(sanitized));
      } catch {}
    } else if (onUpdateClassTarget && classesWithAssets.has(type)) {
      onUpdateClassTarget(type, sanitized);
    }
  };

  const totalTarget = useMemo(() => {
    return round1(Object.values(targets).reduce((acc, curr) => acc + (Number(curr) || 0), 0));
  }, [targets]);

  // AI Rebalance Helper
  const handleAskAIRebalance = () => {
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

  return (
    <div className="space-y-6">
      {/* Target Allocation Adjuster Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:border-slate-700/80 transition-colors">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex flex-wrap gap-4 justify-between items-center bg-slate-900">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500/10 p-2 rounded-lg shrink-0">
              <Sliders className="text-emerald-400 animate-pulse" size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Ajustare Alocare pe Clase de Active (Ținte Tactice)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Personalizează ponderile ideale pe clase de active și monitorizează profiturile pe fiecare categorie
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className={`text-xs px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 ${
              Math.abs(totalTarget - 100) < 0.01 
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
          {((calcMode === 'macro' && investmentSuggestions.length === 0) || (calcMode === 'micro' && microInvestmentSuggestions.length === 0)) ? (
            <div className="text-center p-8 bg-slate-950/30 rounded-xl border border-dashed border-slate-800">
              <AlertTriangle className="text-slate-500 mx-auto mb-2" size={28} />
              <p className="text-sm text-slate-400">
                {calcMode === 'micro' 
                  ? "Nu există active definite sau configurate cu țintă în 'Planificare & Rebalansare' de mai jos." 
                  : "Introdu o sumă de investiție validă mai mare decât zero."}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Presets Grid & Mode Selector */}
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
                <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center shrink-0 w-fit self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setCalcMode('macro')}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                      calcMode === 'macro'
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>Nivel Macro (Clase Active)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcMode('micro')}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                      calcMode === 'micro'
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>Nivel Micro (Active)</span>
                  </button>
                </div>
              </div>

              {calcMode === 'micro' && Math.abs(totalMicroTarget - 100) > 0.1 && (
                <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-4 flex gap-3 text-xs text-amber-400">
                  <AlertTriangle size={18} className="shrink-0 text-amber-500 mt-0.5 animate-bounce" />
                  <div>
                    <strong className="block font-bold text-amber-300 mb-0.5">Atenție la Țintele Micro (Active):</strong>
                    Suma țintelor individuale pentru active este de <strong>{totalMicroTarget.toFixed(1)}%</strong> (trebuie să fie exact 100% pentru ca algoritmul DCA să lucreze corect). Te rugăm să reglezi țintele fiecărui activ în tabelul <strong>„Planificare & Rebalansare”</strong> de mai jos.
                  </div>
                </div>
              )}

              {/* Suggestions grid & projection table */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left Area: Summary metrics cards */}
                <div className="space-y-4 lg:col-span-1">
                  <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-4 space-y-3.5">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp size={12} className="text-emerald-400" />
                      Impactul Asupra Portofoliului
                    </h4>
                    
                    <div className="space-y-2 text-xs divide-y divide-slate-800/60">
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
                    </div>
                  </div>

                  <div className="bg-emerald-950/10 border border-emerald-500/10 rounded-xl p-4 text-xs leading-relaxed text-slate-400">
                    <strong className="text-slate-200 block mb-1">💡 Cum funcționează algoritmul?</strong>
                    {calcMode === 'macro' ? (
                      <span>Sistemul scanează toate activele tale și determină deficitul total pe clase (ETF, Acțiuni, Cripto etc.). Suma de investit este alocată prioritar claselor deficitare în funcție de ponderea țintelor setate, minimizând deviațiile.</span>
                    ) : (
                      <span>Sistemul analizează individual fiecare activ (ex: MSCI World, IUSN.DE) bazat pe procentul țintă setat de tine în tabelul de mai jos și pe valoarea sa curentă. Suma de <strong>{investAmount} {reportingCurrency}</strong> este împărțită automat și exact între activele deficitare, astfel încât să revii cel mai rapid la alocarea ideală.</span>
                    )}
                  </div>
                </div>

                {/* Right Area: Allocations results table */}
                <div className="lg:col-span-2 overflow-hidden rounded-xl border border-slate-800">
                  {calcMode === 'macro' ? (
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
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
