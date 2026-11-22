
import React, { useMemo } from 'react';
import { Asset, Transaction, TransactionType } from '../types';
import { X, TrendingUp, TrendingDown, DollarSign, Activity, Wallet, Calendar, PieChart, Pencil, Split } from 'lucide-react';
import { ResponsiveContainer, ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';

interface AssetDetailsModalProps {
  asset: Asset;
  transactions: Transaction[];
  onClose: () => void;
  currency: string;
  convertValue: (amount: number, from: string, to: string) => number;
  onEditAsset?: (asset: Asset) => void;
  onOpenStockSplit?: (asset: Asset) => void;
}

const AssetDetailsModal: React.FC<AssetDetailsModalProps> = ({ asset, transactions, onClose, currency, convertValue, onEditAsset, onOpenStockSplit }) => {
  
  // --- CALCULATE ADVANCED STATS ---
  const stats = useMemo(() => {
    let totalInvested = 0;
    let totalSold = 0;
    let dividends = 0;
    let taxes = 0;
    let buyCount = 0;
    let sellCount = 0;

    transactions.forEach(tx => {
       const amount = convertValue(Number(tx.amount), tx.currency, currency);
       const tax = convertValue(Number(tx.tax) || 0, tx.currency, currency);

       if (tx.type === TransactionType.BUY || tx.type === TransactionType.DEPOSIT) {
          totalInvested += (amount + tax);
          buyCount++;
       } else if (tx.type === TransactionType.SELL || tx.type === TransactionType.WITHDRAWAL) {
          totalSold += (amount - tax);
          sellCount++;
       } else if (tx.type === TransactionType.INTEREST) {
          dividends += (amount - tax);
       } else if (tx.type === TransactionType.TAX) {
          taxes += amount;
       }
    });

    const currentMarketValue = convertValue(asset.quantity * asset.currentPrice, asset.currency, currency);
    const costBasis = convertValue(asset.quantity * asset.buyPrice, asset.currency, currency);
    
    const totalReturnRaw = (currentMarketValue + totalSold + dividends) - totalInvested - taxes;
    const roiPercent = totalInvested > 0 ? (totalReturnRaw / totalInvested) * 100 : 0;

    const unrealizedPL = currentMarketValue - costBasis;
    const realizedPL = convertValue(asset.realizedPL || 0, asset.currency, currency);

    return {
       currentMarketValue,
       costBasis,
       totalInvested,
       totalSold,
       dividends,
       buyCount,
       sellCount,
       unrealizedPL,
       realizedPL,
       totalReturnRaw,
       roiPercent
    };
  }, [asset, transactions, currency, convertValue]);

  // --- PREPARE CHART DATA ---
  const chartData = useMemo(() => {
     const sortedTxs = [...transactions].sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
     
     return sortedTxs
        .filter(t => t.type === TransactionType.BUY || t.type === TransactionType.SELL)
        .map(t => ({
           date: new Date(t.date).toLocaleDateString('ro-RO', { day: '2-digit', month: 'short', year: '2-digit' }),
           price: Number(t.price), // Asset currency price
           type: t.type,
           qty: Number(t.quantity)
        }));
  }, [transactions]);

  // --- CALCULATE DAILY CHANGE ---
  const prevClose = asset.previousClose || asset.currentPrice;
  const dailyChangeValue = asset.currentPrice - prevClose;
  const dailyChangePercent = prevClose > 0 ? (dailyChangeValue / prevClose) * 100 : 0;
  const isUp = dailyChangeValue >= 0;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 sm:p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 sm:rounded-2xl w-full max-w-5xl shadow-2xl flex flex-col h-full sm:h-auto sm:max-h-[95vh] overflow-hidden">
        
        {/* HEADER */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950 flex justify-between items-start shrink-0 gap-4">
           <div className="flex gap-3 sm:gap-4 flex-1 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-800 flex items-center justify-center text-lg sm:text-xl font-bold text-white shadow-inner shrink-0">
                 {asset.symbol.substring(0, 2)}
              </div>
              <div className="min-w-0 flex-1">
                 <h2 className="text-lg sm:text-2xl font-bold text-white flex flex-wrap items-center gap-2">
                    <span className="truncate">{asset.symbol}</span>
                    <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 font-normal whitespace-nowrap">
                       {asset.type}
                    </span>
                 </h2>
                 <p className="text-slate-400 text-xs sm:text-sm truncate">{asset.name}</p>
                 <div className="flex flex-wrap items-center gap-2 mt-2 text-xs font-mono">
                    <span className="bg-slate-900 px-2 py-1 rounded text-white border border-slate-800 whitespace-nowrap">
                       Preț: <span className="font-bold">{asset.currentPrice.toLocaleString('ro-RO', { minimumFractionDigits: 2 })}</span> {asset.currency}
                    </span>
                    
                    {/* Daily Change Indicator */}
                    <span className={`flex items-center gap-1 px-2 py-1 rounded border whitespace-nowrap ${isUp ? 'bg-emerald-900/20 border-emerald-500/30 text-emerald-400' : 'bg-rose-900/20 border-rose-500/30 text-rose-400'}`}>
                       {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                       <span>{isUp ? '+' : ''}{dailyChangeValue.toFixed(2)}</span>
                       <span className="opacity-75 hidden sm:inline">({isUp ? '+' : ''}{dailyChangePercent.toFixed(2)}%)</span>
                    </span>

                    {asset.isin && <span className="text-slate-500 ml-1 hidden sm:inline">ISIN: {asset.isin}</span>}
                 </div>
              </div>
           </div>
           
           <div className="flex items-center gap-2 shrink-0">
              {onOpenStockSplit && (
                 <button
                    onClick={() => { onClose(); onOpenStockSplit(asset); }}
                    className="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/30 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                    title="Ajustează tranzacțiile pentru Stock Split sau Consolidare"
                 >
                    <Split size={14} />
                    <span className="hidden sm:inline">Stock Split</span>
                 </button>
              )}
              {onEditAsset && (
                 <button
                    onClick={() => { onClose(); onEditAsset(asset); }}
                    className="px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    title="Editează Ticker Activ"
                 >
                    <Pencil size={14} />
                    <span className="hidden sm:inline">Editează Ticker</span>
                 </button>
              )}
              <button onClick={onClose} className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white transition-colors">
                 <X size={20} />
              </button>
           </div>
        </div>

        {/* CONTENT SCROLLABLE */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar">
           
           {/* KPI GRID */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Total Value Card */}
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                 <div className="flex justify-between items-start mb-2">
                    <span className="text-slate-400 text-xs font-medium uppercase">Valoare Piață</span>
                    <Wallet size={16} className="text-blue-400" />
                 </div>
                 <div className="text-2xl font-bold text-white">
                    {stats.currentMarketValue.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-sm font-normal text-slate-500">{currency}</span>
                 </div>
                 <div className="text-xs text-slate-500 mt-1">
                    {asset.quantity.toLocaleString('ro-RO', { minimumFractionDigits: 0, maximumFractionDigits: 4 })} unități
                 </div>
              </div>

              {/* Unrealized P/L */}
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                 <div className="flex justify-between items-start mb-2">
                    <span className="text-slate-400 text-xs font-medium uppercase">P/L Nerealizat (Hârtie)</span>
                    <Activity size={16} className={stats.unrealizedPL >= 0 ? "text-emerald-400" : "text-rose-400"} />
                 </div>
                 <div className={`text-2xl font-bold ${stats.unrealizedPL >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {stats.unrealizedPL > 0 ? '+' : ''}{stats.unrealizedPL.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-sm font-normal opacity-70">{currency}</span>
                 </div>
                 <div className="text-xs text-slate-500 mt-1">
                    Randament poziție deschisă
                 </div>
              </div>

              {/* Realized P/L */}
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                 <div className="flex justify-between items-start mb-2">
                    <span className="text-slate-400 text-xs font-medium uppercase">P/L Realizat (Marcat)</span>
                    <DollarSign size={16} className={stats.realizedPL >= 0 ? "text-blue-400" : "text-rose-400"} />
                 </div>
                 <div className={`text-2xl font-bold ${stats.realizedPL >= 0 ? 'text-blue-400' : 'text-rose-400'}`}>
                    {stats.realizedPL > 0 ? '+' : ''}{stats.realizedPL.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-sm font-normal opacity-70">{currency}</span>
                 </div>
                 <div className="text-xs text-slate-500 mt-1">
                    Din vânzări și dividende
                 </div>
              </div>

              {/* Total ROI */}
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                 <div className="flex justify-between items-start mb-2">
                    <span className="text-slate-400 text-xs font-medium uppercase">ROI Total (All-Time)</span>
                    <TrendingUp size={16} className={stats.roiPercent >= 0 ? "text-emerald-400" : "text-rose-400"} />
                 </div>
                 <div className={`text-2xl font-bold ${stats.roiPercent >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {stats.roiPercent > 0 ? '+' : ''}{stats.roiPercent.toFixed(2)}%
                 </div>
                 <div className="text-xs text-slate-500 mt-1">
                    Profit Total: {stats.totalReturnRaw > 0 ? '+' : ''}{stats.totalReturnRaw.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {currency}
                 </div>
              </div>
           </div>

           {/* SECOND ROW: CHART & BREAKDOWN */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Chart Section */}
              <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-xl p-5 h-[400px]">
                 <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <PieChart size={16} className="text-emerald-400"/> Istoric Execuție Preț
                 </h3>
                 <div className="h-full w-full pb-6">
                    <ResponsiveContainer width="100%" height="100%">
                       <ComposedChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.2} />
                          <XAxis dataKey="date" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                          <YAxis 
                             stroke="#64748b" 
                             fontSize={11} 
                             tickLine={false} 
                             axisLine={false} 
                             domain={['auto', 'auto']}
                             label={{ value: `Preț (${asset.currency})`, angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 10 }}
                          />
                          <Tooltip 
                             contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }}
                             labelStyle={{ color: '#94a3b8' }}
                             formatter={(value: any, name: string) => {
                                if (name === 'Preț Execuție') return [`${value} ${asset.currency}`, name];
                                if (name === 'Preț Mediu Actual') return [`${value.toFixed(2)} ${asset.currency}`, name];
                                return [value, name];
                             }}
                          />
                          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                          
                          {/* Current Average Price Line */}
                          <ReferenceLine y={asset.buyPrice} label="Avg" stroke="#f59e0b" strokeDasharray="3 3" opacity={0.5} />
                          {/* Current Market Price Line */}
                          <ReferenceLine y={asset.currentPrice} label="Mkt" stroke="#10b981" strokeDasharray="3 3" opacity={0.5} />

                          {/* Execution Points */}
                          <Line 
                             type="monotone" 
                             dataKey="price" 
                             name="Preț Execuție" 
                             stroke="#3b82f6" 
                             strokeWidth={2}
                             dot={(props: any) => {
                                const { cx, cy, payload } = props;
                                const isBuy = payload.type === TransactionType.BUY;
                                return (
                                   <circle 
                                      cx={cx} cy={cy} r={4} 
                                      fill={isBuy ? '#10b981' : '#f43f5e'} 
                                      stroke="#0f172a" strokeWidth={2} 
                                   />
                                );
                             }}
                          />
                       </ComposedChart>
                    </ResponsiveContainer>
                 </div>
              </div>

              {/* Stats Breakdown */}
              <div className="space-y-4">
                 <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                    <h3 className="text-sm font-bold text-white mb-4">Statistici Cheie</h3>
                    <ul className="space-y-3 text-sm">
                       <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                          <span className="text-slate-400">Preț Mediu Achiziție</span>
                          <span className="font-mono text-white">{asset.buyPrice.toLocaleString('ro-RO', {minimumFractionDigits:2})} {asset.currency}</span>
                       </li>
                       <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                          <span className="text-slate-400">Total Investit (Brut)</span>
                          <span className="font-mono text-white">{stats.totalInvested.toLocaleString('ro-RO', {minimumFractionDigits:2})} {currency}</span>
                       </li>
                       <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                          <span className="text-slate-400">Dividende Încasate</span>
                          <span className="font-mono text-emerald-400">{stats.dividends.toLocaleString('ro-RO', {minimumFractionDigits:2})} {currency}</span>
                       </li>
                       <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                          <span className="text-slate-400">Nr. Cumpărări</span>
                          <span className="font-mono text-white">{stats.buyCount}</span>
                       </li>
                       <li className="flex justify-between items-center">
                          <span className="text-slate-400">Nr. Vânzări</span>
                          <span className="font-mono text-white">{stats.sellCount}</span>
                       </li>
                    </ul>
                 </div>

                 <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                    <h3 className="text-sm font-bold text-white mb-4">Planificare</h3>
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-slate-400 text-xs">Alocare Țintă</span>
                       <span className="text-white font-bold">{asset.targetAllocation || 0}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden mb-4">
                       <div className="h-full bg-blue-500" style={{ width: `${Math.min(asset.targetAllocation||0, 100)}%` }}></div>
                    </div>
                    <p className="text-xs text-slate-500">
                       Acest activ reprezintă o parte din strategia ta. Folosește tabelul de rebalansare din pagina principală pentru ajustări.
                    </p>
                 </div>
              </div>

           </div>
           
           {/* SIMPLE TRANSACTION LIST FOR CONTEXT */}
           <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="p-4 bg-slate-950 border-b border-slate-800">
                 <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Calendar size={16} className="text-slate-400"/> Istoric Complet
                 </h3>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-xs text-left">
                    <thead className="text-slate-500 bg-slate-900/50">
                       <tr>
                          <th className="p-3 whitespace-nowrap">Data</th>
                          <th className="p-3 whitespace-nowrap">Tip</th>
                          <th className="p-3 text-right whitespace-nowrap">Preț</th>
                          <th className="p-3 text-right whitespace-nowrap">Cantitate</th>
                          <th className="p-3 text-right whitespace-nowrap">Valoare</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                       {[...transactions].sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(tx => (
                          <tr key={tx.id} className="hover:bg-slate-800/30">
                             <td className="p-3 text-slate-300">{tx.date}</td>
                             <td className="p-3">
                                <span className={`px-1.5 py-0.5 rounded text-[10px] uppercase font-bold whitespace-nowrap ${
                                   tx.type === TransactionType.BUY ? 'text-emerald-400 bg-emerald-900/20' : 
                                   tx.type === TransactionType.SELL ? 'text-amber-400 bg-amber-900/20' : 'text-slate-400'
                                }`}>
                                   {tx.type}
                                </span>
                             </td>
                             <td className="p-3 text-right font-mono text-slate-400">{Number(tx.price || 0).toFixed(2)}</td>
                             <td className="p-3 text-right font-mono text-white">{Number(tx.quantity || 0)}</td>
                             <td className="p-3 text-right font-mono text-slate-300">{Number(tx.amount).toFixed(2)} {tx.currency}</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default AssetDetailsModal;
