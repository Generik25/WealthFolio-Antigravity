import React, { useState } from 'react';
import { Asset, AssetType } from '../types';
import { X, Save, Edit3, AlertCircle, Sparkles, Tag, Globe, Hash, Split, Layers } from 'lucide-react';
import { GICS_SECTORS, getAssetClassification } from '../services/sectorService';

interface EditAssetModalProps {
  asset: Asset;
  transactionCount: number;
  onClose: () => void;
  onSave: (oldSymbol: string, updatedDetails: {
    symbol: string;
    customTicker?: string;
    name: string;
    type: AssetType;
    isin?: string;
    sector?: string;
    subSector?: string;
    currency: string;
  }) => void;
  onOpenStockSplit?: (asset: Asset) => void;
}

export const EditAssetModal: React.FC<EditAssetModalProps> = ({
  asset,
  transactionCount,
  onClose,
  onSave,
  onOpenStockSplit
}) => {
  const detectedClass = getAssetClassification(asset);
  const [symbol, setSymbol] = useState(asset.symbol || '');
  const [customTicker, setCustomTicker] = useState(asset.customTicker || '');
  const [name, setName] = useState(asset.name || '');
  const [type, setType] = useState<AssetType>(asset.type || AssetType.STOCK);
  const [isin, setIsin] = useState(asset.isin || '');
  const [sector, setSector] = useState(asset.sector || detectedClass.sector || '');
  const [subSector, setSubSector] = useState(asset.subSector || detectedClass.subSector || '');
  const [currency, setCurrency] = useState(asset.currency || 'USD');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!symbol.trim()) {
      setError('Simbolul activului este obligatoriu.');
      return;
    }

    onSave(asset.symbol, {
      symbol: symbol.trim().toUpperCase(),
      customTicker: customTicker.trim() ? customTicker.trim().toUpperCase() : undefined,
      name: name.trim() || symbol.trim().toUpperCase(),
      type,
      isin: isin.trim() || undefined,
      sector: sector.trim() || undefined,
      subSector: subSector.trim() || undefined,
      currency
    });
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
              <Edit3 size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Editează Activ: <span className="text-emerald-400 font-mono">{asset.symbol}</span>
              </h3>
              <p className="text-xs text-slate-400">Actualizează detaliile și ticker-ul pentru actualizare automată Yahoo Finance</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Info Callout */}
        <div className="p-4 bg-blue-950/30 border-b border-blue-900/30 flex items-start gap-3">
          <AlertCircle size={18} className="text-blue-400 shrink-0 mt-0.5" />
          <p className="text-xs text-blue-200/90 leading-relaxed">
            Modificarea ticker-ului sau a monedei va actualiza automat <strong className="text-white">{transactionCount} tranzacții</strong> asociate acestui activ în portofoliu. Cotația live de pe Yahoo Finance va fi reîmprospătată direct.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg text-rose-400 text-xs flex items-center gap-2">
              <AlertCircle size={14} /> {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Symbol / Ticker */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Tag size={13} className="text-emerald-400" /> Simbol / Ticker Afișat <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white font-mono focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none uppercase"
                placeholder="ex: SPGI, VWCE.DE, TSLA"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
              />
              <span className="text-[10px] text-slate-500 mt-1 block">Simbolul principal folosit în portofoliu</span>
            </div>

            {/* Custom Yahoo Ticker */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Globe size={13} className="text-blue-400" /> Ticker Yahoo Finance (Opțional)
              </label>
              <input
                type="text"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white font-mono focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none uppercase"
                placeholder="ex: SPGI, EGLN.L, TLV.RO"
                value={customTicker}
                onChange={(e) => setCustomTicker(e.target.value)}
              />
              <span className="text-[10px] text-slate-500 mt-1 block">Completează dacă Yahoo folosește un alt ticker (ex: .DE, .L, .RO)</span>
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Denumire Activ
            </label>
            <input
              type="text"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
              placeholder="ex: S&P Global Inc. / Vanguard FTSE All-World"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Asset Type */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Tip Activ
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as AssetType)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
              >
                {Object.values(AssetType).map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Currency */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Monedă
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none font-mono"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="RON">RON (lei)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>
          </div>

          {/* ISIN */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Hash size={13} className="text-slate-400" /> Cod ISIN (Opțional)
            </label>
            <input
              type="text"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white font-mono uppercase focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
              placeholder="ex: US78378X1072, IE00BK5BQT80"
              value={isin}
              onChange={(e) => setIsin(e.target.value)}
            />
          </div>

          {/* Sector & Subsector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Layers size={13} className="text-purple-400" /> Sector (GICS)
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
              >
                {!GICS_SECTORS.includes(sector as any) && sector && (
                  <option value={sector}>{sector}</option>
                )}
                {GICS_SECTORS.map((sec) => (
                  <option key={sec} value={sec}>{sec}</option>
                ))}
                <option value="Bonds & Fixed Income">Bonds & Fixed Income</option>
                <option value="Diversified Equities">Diversified Equities</option>
                <option value="Materials & Commodities">Materials & Commodities</option>
                <option value="Crypto Assets">Crypto Assets</option>
                <option value="Cash & Liquidities">Cash & Liquidities</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Subcategorie / Industrie
              </label>
              <input
                type="text"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                placeholder="ex: Semiconductors & AI"
                value={subSector}
                onChange={(e) => setSubSector(e.target.value)}
              />
            </div>
          </div>

          {/* Stock Split Action Callout */}
          {onOpenStockSplit && (
            <div className="p-3 bg-amber-950/20 border border-amber-800/30 rounded-xl flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0">
                  <Split size={16} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-white block">A avut loc un Stock Split sau Consolidare?</span>
                  <span className="text-[11px] text-slate-400 block truncate">Ajustează automat tranzacțiile istorice pentru noul preț din piață</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenStockSplit(asset);
                }}
                className="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/30 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5"
              >
                <Split size={13} />
                <span>Aplică Split</span>
              </button>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 text-sm font-medium transition-colors"
            >
              Anulează
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium flex items-center gap-2 shadow-lg shadow-emerald-950/50 transition-all"
            >
              <Save size={16} /> Salvează Activul
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
