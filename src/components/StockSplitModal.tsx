import React, { useState, useMemo } from 'react';
import { Asset, Transaction, TransactionType } from '../types';
import { 
  X, 
  Split, 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp, 
  TrendingDown, 
  ArrowRight, 
  Calendar, 
  Layers, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface StockSplitModalProps {
  asset: Asset;
  transactions: Transaction[];
  onClose: () => void;
  onApplySplit: (params: {
    assetId: string;
    symbol: string;
    fromRatio: number;
    toRatio: number;
    splitDate?: string;
    applyToAllHistory: boolean;
  }) => void;
  reportingCurrency: string;
  convertValue: (amount: number, from: string, to: string) => number;
}

export const StockSplitModal: React.FC<StockSplitModalProps> = ({
  asset,
  transactions,
  onClose,
  onApplySplit,
  reportingCurrency,
  convertValue
}) => {
  // Split ratio: for each `fromRatio` old shares, you now have `toRatio` new shares
  // Default to 1:80 if it's BNKE or similar, or 1:2 default
  const isBnke = asset.symbol?.toUpperCase().includes('BNKE');
  const defaultTo = isBnke ? 80 : 2;
  const [fromRatio, setFromRatio] = useState<number>(1);
  const [toRatio, setToRatio] = useState<number>(defaultTo);
  
  // Date filter
  const [applyToAllHistory, setApplyToAllHistory] = useState<boolean>(true);
  const [splitDate, setSplitDate] = useState<string>(() => {
    if (isBnke) return '2026-10-27';
    return new Date().toISOString().split('T')[0];
  });
  
  const [isSuccess, setIsSuccess] = useState(false);

  // Common quick presets
  const presets = [
    { label: '80:1 (BNKE)', from: 1, to: 80 },
    { label: '60:1', from: 1, to: 60 },
    { label: '20:1 (GOOGL/AMZN)', from: 1, to: 20 },
    { label: '10:1 (NVDA)', from: 1, to: 10 },
    { label: '4:1 (TSLA)', from: 1, to: 4 },
    { label: '2:1', from: 1, to: 2 },
    { label: '1:10 (Consolidare)', from: 10, to: 1 },
  ];

  // Multiplier calculation
  const multiplier = useMemo(() => {
    if (!fromRatio || fromRatio <= 0 || !toRatio || toRatio <= 0) return 1;
    return toRatio / fromRatio;
  }, [fromRatio, toRatio]);

  // Target transactions
  const eligibleTransactions = useMemo(() => {
    return transactions.filter(t => {
      if (t.symbol !== asset.symbol) return false;
      if (applyToAllHistory) return true;
      if (!splitDate) return true;
      return new Date(t.date) <= new Date(splitDate);
    });
  }, [transactions, asset.symbol, applyToAllHistory, splitDate]);

  // Preview Calculations
  const preview = useMemo(() => {
    const curQty = Number(asset.quantity) || 0;
    const curBuyPrice = Number(asset.buyPrice) || 0;
    const curMarketPrice = Number(asset.currentPrice) || 0;
    
    const newQty = curQty * multiplier;
    const newBuyPrice = multiplier > 0 ? curBuyPrice / multiplier : 0;
    
    const totalCost = curQty * curBuyPrice;
    const newTotalCost = newQty * newBuyPrice; // Identical
    
    // P/L before (distorted)
    const oldMarketValue = curQty * curMarketPrice;
    const oldPL = oldMarketValue - totalCost;
    const oldPLPercent = totalCost > 0 ? (oldPL / totalCost) * 100 : 0;
    
    // P/L after (restored)
    const newMarketValue = newQty * curMarketPrice;
    const newPL = newMarketValue - newTotalCost;
    const newPLPercent = newTotalCost > 0 ? (newPL / newTotalCost) * 100 : 0;

    return {
      curQty,
      newQty,
      curBuyPrice,
      newBuyPrice,
      curMarketPrice,
      totalCost,
      oldPL,
      oldPLPercent,
      newMarketValue,
      newPL,
      newPLPercent
    };
  }, [asset, multiplier]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (multiplier <= 0 || multiplier === 1) return;

    onApplySplit({
      assetId: asset.id,
      symbol: asset.symbol,
      fromRatio,
      toRatio,
      splitDate: applyToAllHistory ? undefined : splitDate,
      applyToAllHistory
    });

    setIsSuccess(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
              <Split size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Ajustare Stock Split: <span className="text-amber-400 font-mono">{asset.symbol}</span>
              </h3>
              <p className="text-xs text-slate-400">Divizare sau consolidare acțiuni / unități de fond</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 custom-scrollbar">
          {/* Info Banner */}
          <div className="p-4 bg-amber-950/30 border border-amber-800/40 rounded-xl flex items-start gap-3">
            <AlertCircle size={18} className="text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-200/90 space-y-1 leading-relaxed">
              <p className="font-semibold text-white">
                Ce face această operațiune?
              </p>
              <p>
                Când un activ trece printr-un <strong>Stock Split</strong>, prețul pe unitate scade în piață, iar numărul de acțiuni deținute crește proporțional. 
                Aplicația va ajusta cantitatea și prețul tranzacțiilor anterioare, astfel încât <span className="text-amber-300 font-semibold">valoarea totală investită să rămână neschimbată</span>, iar randamentul tău să redevină exact și corect.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Quick Presets */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                <Sparkles size={13} className="text-amber-400" /> Rapoarte Frecvente (Alege rapid)
              </label>
              <div className="flex flex-wrap gap-2">
                {presets.map(p => {
                  const isSelected = fromRatio === p.from && toRatio === p.to;
                  return (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => {
                        setFromRatio(p.from);
                        setToRatio(p.to);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md font-bold'
                          : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      {p.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Ratio Inputs */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <label className="block text-xs font-semibold text-slate-300 mb-3 flex items-center gap-1.5">
                <Layers size={14} className="text-amber-400" /> Configurare Raport Split
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div>
                  <span className="block text-[11px] text-slate-400 mb-1">Pentru fiecare (acțiuni vechi):</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      step="1"
                      required
                      value={fromRatio}
                      onChange={e => setFromRatio(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-white font-mono text-center font-bold text-base focus:border-amber-500 outline-none"
                    />
                    <span className="text-xs text-slate-400">buc.</span>
                  </div>
                </div>

                <div>
                  <span className="block text-[11px] text-slate-400 mb-1">Primești acum (acțiuni noi):</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      step="1"
                      required
                      value={toRatio}
                      onChange={e => setToRatio(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-white font-mono text-center font-bold text-base focus:border-amber-500 outline-none"
                    />
                    <span className="text-xs text-slate-400">buc.</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-center sm:text-left text-xs text-amber-400 font-medium flex items-center gap-2 bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                <CheckCircle2 size={14} />
                <span>
                  Multiplicator aplicat: <strong className="font-mono text-white text-sm">×{multiplier.toFixed(4).replace(/\.?0+$/, '')}</strong>
                  {multiplier > 1 && ` (Cantitatea crește de ${multiplier}×, prețul mediu scade de ${multiplier}×)`}
                  {multiplier < 1 && ` (Consolidare: cantitatea scade, prețul mediu crește)`}
                </span>
              </div>
            </div>

            {/* Scope / Historical Selection */}
            <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={applyToAllHistory}
                    onChange={e => setApplyToAllHistory(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-700 text-amber-500 focus:ring-amber-500 focus:ring-offset-slate-900"
                  />
                  <span>Aplică pe toate tranzacțiile istorice pentru acest activ</span>
                </label>
                <span className="text-xs text-slate-400 font-mono">
                  {eligibleTransactions.length} tranzacții eligibile
                </span>
              </div>

              {!applyToAllHistory && (
                <div className="pt-2 border-t border-slate-800 flex items-center gap-3">
                  <Calendar size={14} className="text-slate-400" />
                  <span className="text-xs text-slate-300">Data evenimentului (doar tranzacții până la această dată):</span>
                  <input
                    type="date"
                    value={splitDate}
                    onChange={e => setSplitDate(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white font-mono outline-none focus:border-amber-500"
                  />
                </div>
              )}
            </div>

            {/* LIVE PREVIEW COMPARISON CARD */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-4 rounded-xl border border-slate-700/80 shadow-inner space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  Previzualizare Rezultat (Înainte vs După Split)
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  Cotație Yahoo Live: {preview.curMarketPrice.toFixed(2)} {asset.currency}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Situation BEFORE */}
                <div className="bg-rose-950/20 border border-rose-900/40 rounded-xl p-3.5 space-y-2">
                  <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider block">
                    Înainte de Ajustare (Anomalie)
                  </span>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Cantitate:</span>
                      <span className="font-mono font-semibold text-slate-200">{preview.curQty.toLocaleString('ro-RO')} buc.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Preț mediu cumpărare:</span>
                      <span className="font-mono font-semibold text-rose-300">{preview.curBuyPrice.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} {asset.currency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Cost Total Investit:</span>
                      <span className="font-mono text-slate-300">{preview.totalCost.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} {asset.currency}</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-rose-900/30">
                      <span className="text-slate-400">P/L Nerealizat eronat:</span>
                      <span className="font-mono font-bold text-rose-400">
                        {preview.oldPL.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} ({preview.oldPLPercent.toFixed(1)}%)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Situation AFTER */}
                <div className="bg-emerald-950/25 border border-emerald-700/50 rounded-xl p-3.5 space-y-2 shadow-sm">
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center justify-between">
                    <span>După Split ({fromRatio}:{toRatio})</span>
                    <CheckCircle2 size={14} className="text-emerald-400" />
                  </span>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Cantitate nouă:</span>
                      <span className="font-mono font-bold text-emerald-300">{preview.newQty.toLocaleString('ro-RO')} buc.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Preț mediu ajustat:</span>
                      <span className="font-mono font-bold text-emerald-300">{preview.newBuyPrice.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 4 })} {asset.currency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Cost Total Investit:</span>
                      <span className="font-mono text-slate-300">{preview.totalCost.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} {asset.currency} (neschimbat)</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-emerald-900/40">
                      <span className="text-slate-300 font-semibold">Randament P/L Real:</span>
                      <span className={`font-mono font-bold ${preview.newPL >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {preview.newPL >= 0 ? '+' : ''}{preview.newPL.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} ({preview.newPL >= 0 ? '+' : ''}{preview.newPLPercent.toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                Anulează
              </button>

              <button
                type="submit"
                disabled={multiplier <= 0 || multiplier === 1 || eligibleTransactions.length === 0}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSuccess ? (
                  <>
                    <CheckCircle2 size={16} /> Aplicat cu Succes!
                  </>
                ) : (
                  <>
                    <Split size={16} /> Aplică Split {fromRatio}:{toRatio} ({eligibleTransactions.length} tranzacții)
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
