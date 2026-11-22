import React from 'react';
import { Asset, Transaction, TransactionType } from '../types';
import { X, TrendingUp, TrendingDown, ArrowRightCircle, Split } from 'lucide-react';

interface AssetPositionsModalProps {
  asset: Asset;
  transactions: Transaction[];
  onClose: () => void;
  onSellPosition: (originalTx: Transaction, remainingQty: number) => void;
  onOpenStockSplit?: (asset: Asset) => void;
}

const AssetPositionsModal: React.FC<AssetPositionsModalProps> = ({ asset, transactions, onClose, onSellPosition, onOpenStockSplit }) => {
  const calculateOpenPositions = () => {
    const buys = transactions
      .filter(t => t.type === TransactionType.BUY || t.type === TransactionType.DEPOSIT)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .map(t => ({ ...t, remainingQuantity: t.quantity || 0 }));

    let totalSold = transactions
      .filter(t => t.type === TransactionType.SELL || t.type === TransactionType.WITHDRAWAL)
      .reduce((acc, t) => acc + (t.quantity || 0), 0);

    const openPositions = buys.filter(buyTx => {
      if (totalSold <= 0) return true;
      if (buyTx.remainingQuantity <= totalSold) {
        totalSold -= buyTx.remainingQuantity;
        buyTx.remainingQuantity = 0;
        return false;
      } else {
        buyTx.remainingQuantity -= totalSold;
        totalSold = 0;
        return true;
      }
    });
    return openPositions;
  };

  const openPositions = calculateOpenPositions();

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-4xl shadow-2xl flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900 rounded-t-xl sticky top-0 z-10">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-emerald-400">{asset.symbol}</span> - Poziții Deschise</h3>
            <p className="text-sm text-slate-400 mt-1">Selectează un lot specific pentru vânzare (FIFO).</p>
          </div>
          <div className="flex items-center gap-2">
            {onOpenStockSplit && (
              <button
                onClick={() => {
                  onClose();
                  onOpenStockSplit(asset);
                }}
                className="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/30 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Ajustează cantitățile și prețurile istorice pentru Stock Split"
              >
                <Split size={14} />
                <span>Stock Split</span>
              </button>
            )}
            <button onClick={onClose} className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"><X size={20} /></button>
          </div>
        </div>
        <div className="overflow-y-auto p-0">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-slate-950 z-10 shadow-sm">
              <tr className="text-slate-400 text-xs uppercase tracking-wider">
                <th className="p-4 font-semibold">ID Tranzacție</th>
                <th className="p-4 font-semibold">Data Achiziției</th>
                <th className="p-4 font-semibold text-right">Cantitate</th>
                <th className="p-4 font-semibold text-right">Preț Achiziție</th>
                <th className="p-4 font-semibold text-right">Preț Piață</th>
                <th className="p-4 font-semibold text-right">Profit / Pierdere</th>
                <th className="p-4 font-semibold text-center">Acțiune</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-sm">
              {openPositions.length === 0 ? (
                <tr><td colSpan={7} className="p-12 text-center text-slate-500">Nu există poziții deschise pentru acest activ.</td></tr>
              ) : (
                openPositions.map((pos) => {
                  const buyPrice = pos.price || 0;
                  const plPerUnit = asset.currentPrice - buyPrice;
                  const totalPotentialPL = plPerUnit * pos.remainingQuantity;
                  const plPercent = buyPrice > 0 ? (plPerUnit / buyPrice) * 100 : 0;
                  const isProfitable = totalPotentialPL >= 0;
                  return (
                    <tr key={pos.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-4 font-mono text-slate-500 text-xs">{pos.id}</td>
                      <td className="p-4 text-slate-300">{pos.date}</td>
                      <td className="p-4 text-right font-bold text-white">{pos.remainingQuantity.toLocaleString('ro-RO')}</td>
                      <td className="p-4 text-right text-slate-400">{buyPrice.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} {asset.currency}</td>
                      <td className="p-4 text-right text-slate-200">{asset.currentPrice.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} {asset.currency}</td>
                      <td className="p-4 text-right">
                        <div className={`font-medium flex items-center justify-end gap-1 ${isProfitable ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {isProfitable ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {totalPotentialPL.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} {asset.currency}
                        </div>
                        <div className={`text-xs ${isProfitable ? 'text-emerald-500/70' : 'text-rose-500/70'}`}>{plPercent.toFixed(2)}%</div>
                      </td>
                      <td className="p-4 text-center">
                        <button onClick={() => onSellPosition(pos, pos.remainingQuantity)} className="bg-slate-800 hover:bg-amber-600 hover:text-white text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 mx-auto border border-slate-700 hover:border-amber-500">Vinde <ArrowRightCircle size={14} /></button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssetPositionsModal;