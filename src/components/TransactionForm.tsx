
import React, { useState, useEffect, useRef } from 'react';
import { Transaction, TransactionType, Asset, AssetType } from '../types';
import { Save, X, Search, Tag, FileText, AlertTriangle, Hash, ChevronRight, Landmark, PieChart } from 'lucide-react';

interface TransactionFormProps {
  initialData?: Transaction | null;
  prefillData?: Partial<Transaction> | null; 
  existingAssets: Asset[]; 
  onSave: (transaction: Omit<Transaction, 'id'> & { id?: string }, newAssetDetails?: { name: string, type: AssetType, isin?: string, customTicker?: string }) => void;
  onCancel: () => void;
  defaultCurrency: string;
  availableFunds: number | null;
  convertValue: (amount: number, from: string, to: string) => number;
  allowedTypes?: TransactionType[];
}

const TransactionForm: React.FC<TransactionFormProps> = ({ 
   initialData, prefillData, existingAssets, onSave, onCancel, defaultCurrency, availableFunds, convertValue, allowedTypes
}) => {
  const [formData, setFormData] = useState({
    id: '',
    date: new Date().toISOString().split('T')[0],
    type: TransactionType.DEPOSIT,
    symbol: '',
    description: '',
    amount: '',
    quantity: '',
    price: '',
    tax: '',
    isin: '',
    currency: defaultCurrency,
    customTicker: ''
  });

  // State specific for Interest Type
  const [isBrokerInterest, setIsBrokerInterest] = useState(false);

  const [isNewAsset, setIsNewAsset] = useState(false);
  const [newAssetName, setNewAssetName] = useState('');
  const [matchedAssetName, setMatchedAssetName] = useState('');
  const [assetType, setAssetType] = useState<AssetType>(AssetType.STOCK);
  const [suggestions, setSuggestions] = useState<Asset[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isUnitBased = [TransactionType.BUY, TransactionType.SELL].includes(formData.type);
  const isInterest = formData.type === TransactionType.INTEREST;
  // Global transactions don't need a specific symbol. 
  // If it's Interest from Broker, we also treat it as global (no symbol required).
  const isGlobalTransaction = [TransactionType.DEPOSIT, TransactionType.WITHDRAWAL].includes(formData.type) || (isInterest && isBrokerInterest);

  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData.id,
        date: initialData.date,
        type: initialData.type,
        symbol: initialData.symbol || '',
        description: initialData.description,
        amount: initialData.amount.toString(),
        quantity: initialData.quantity?.toString() || '',
        price: initialData.price?.toString() || '',
        tax: initialData.tax?.toString() || '',
        isin: initialData.isin || '',
        currency: initialData.currency,
        customTicker: ''
      });
      
      // Detect if it's Broker Interest (Interest type but no symbol)
      if (initialData.type === TransactionType.INTEREST && !initialData.symbol) {
         setIsBrokerInterest(true);
      } else {
         const existing = existingAssets.find(a => a.symbol === initialData.symbol);
         if (existing) {
           setAssetType(existing.type);
           setMatchedAssetName(existing.name);
           setFormData(prev => ({ ...prev, customTicker: existing.customTicker || '' }));
         }
      }

    } else if (prefillData) {
      setFormData(prev => ({
        ...prev,
        ...prefillData,
        id: '', 
        amount: prefillData.amount?.toString() || '',
        quantity: prefillData.quantity?.toString() || '',
        price: prefillData.price?.toString() || '',
        tax: prefillData.tax?.toString() || '',
        isin: prefillData.isin || '',
        date: new Date().toISOString().split('T')[0],
        type: allowedTypes && allowedTypes.length > 0 && !allowedTypes.includes(prefillData.type as TransactionType) 
              ? allowedTypes[0] 
              : (prefillData.type as TransactionType || prev.type)
      }));
       const existing = existingAssets.find(a => a.symbol === prefillData.symbol);
       if (existing) {
         setAssetType(existing.type);
         setMatchedAssetName(existing.name);
         setFormData(prev => ({ ...prev, customTicker: existing.customTicker || '' }));
       }
    } else {
       setFormData(prev => ({ ...prev, id: '' }));
       if (allowedTypes && allowedTypes.length > 0 && !allowedTypes.includes(formData.type)) {
          setFormData(prev => ({ ...prev, type: allowedTypes[0] }));
       }
    }
  }, [initialData, prefillData, existingAssets, allowedTypes]);

  useEffect(() => {
    if (formData.symbol && formData.symbol.length > 0) {
       const existingAsset = existingAssets.find(a => a.symbol.toUpperCase() === formData.symbol.toUpperCase());
       if (existingAsset) {
         setIsNewAsset(false);
         setMatchedAssetName(existingAsset.name);
         setAssetType(existingAsset.type);
         setFormData(prev => ({ ...prev, currency: existingAsset.currency, isin: existingAsset.isin || prev.isin, customTicker: existingAsset.customTicker || '' }));
       } else {
         const isCreationEvent = [TransactionType.BUY].includes(formData.type); 
         setIsNewAsset(isCreationEvent && !prefillData);
         setMatchedAssetName('');
       }
    } else {
       setIsNewAsset(false);
       setMatchedAssetName('');
    }
  }, [formData.symbol, formData.type, existingAssets, prefillData]);

  const handleSymbolChange = (e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    setFormData({ ...formData, symbol: val });
    if (val.length > 0) {
       const uniqueAssets = existingAssets.filter((asset, index, self) => index === self.findIndex((t) => t.symbol === asset.symbol));
       const matches = uniqueAssets.filter(a => a.symbol.includes(val) || a.name.toUpperCase().includes(val)).slice(0, 5); 
       setSuggestions(matches);
       setShowSuggestions(matches.length > 0);
    } else {
       setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (asset: Asset) => {
     setFormData({ ...formData, symbol: asset.symbol });
     setShowSuggestions(false);
  };

  const handleSymbolBlur = () => {
     if (suggestionTimeoutRef.current) clearTimeout(suggestionTimeoutRef.current);
     suggestionTimeoutRef.current = setTimeout(() => { setShowSuggestions(false); }, 200);
  };

  useEffect(() => {
    if (isUnitBased && formData.quantity && formData.price) {
      const total = parseFloat(formData.quantity) * parseFloat(formData.price);
      if (!isNaN(total)) setFormData(prev => ({ ...prev, amount: total.toFixed(2) }));
    }
  }, [formData.quantity, formData.price, isUnitBased]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanSymbol = isGlobalTransaction ? '' : formData.symbol.toUpperCase();
    
    // Auto-description for Broker Interest if empty
    let description = formData.description;
    if (isInterest && isBrokerInterest && !description) {
        description = "Dobândă disponibilități (Broker)";
    }

    const transactionData = {
      id: formData.id,
      date: formData.date,
      type: formData.type,
      symbol: cleanSymbol,
      description: description,
      amount: Number(formData.amount),
      quantity: formData.quantity ? Number(formData.quantity) : undefined,
      price: formData.price ? Number(formData.price) : undefined,
      tax: formData.tax ? Number(formData.tax) : undefined,
      isin: isGlobalTransaction ? undefined : formData.isin,
      currency: formData.currency
    };
    
    let newAssetDetails = undefined;
    if (isNewAsset && !isGlobalTransaction) {
       newAssetDetails = { name: newAssetName, type: assetType, isin: formData.isin, customTicker: formData.customTicker };
    } else {
       newAssetDetails = { name: matchedAssetName, type: assetType, isin: formData.isin, customTicker: formData.customTicker };
    }
    onSave(transactionData, newAssetDetails);
  };

  const checkInsufficientFunds = (): boolean => {
     if (formData.type !== TransactionType.BUY && formData.type !== TransactionType.WITHDRAWAL) return false;
     if (availableFunds === null) return false; 
     let outflowAmount = formData.type === TransactionType.BUY ? Number(formData.amount) + Number(formData.tax || 0) : Number(formData.amount);
     const costInBase = convertValue(outflowAmount, formData.currency, defaultCurrency);
     return costInBase > (availableFunds + 0.01);
  };

  const isInsufficientFunds = checkInsufficientFunds();
  const availableTypes = allowedTypes && allowedTypes.length > 0 ? Object.values(TransactionType).filter(t => allowedTypes.includes(t)) : Object.values(TransactionType);

  // Helper getters
  const getNetValue = () => (Number(formData.amount) - Number(formData.tax || 0)).toFixed(2);
  const getTotalCost = () => (Number(formData.amount) + Number(formData.tax || 0)).toFixed(2);
  const getNetProceeds = () => (Number(formData.amount) - Number(formData.tax || 0)).toFixed(2);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-lg shadow-2xl flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-6 border-b border-slate-800 shrink-0">
          <h3 className="text-xl font-bold text-white">{initialData ? 'Editează Tranzacție' : prefillData ? 'Finalizează Tranzacția' : 'Adaugă Tranzacție'}</h3>
          <button onClick={onCancel} className="text-slate-400 hover:text-white"><X size={24} /></button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
          <div className="p-6 overflow-y-auto flex-1 custom-scrollbar space-y-4">
            
            {availableFunds !== null && !initialData && (
               <div className="mb-4 bg-slate-800/40 border border-slate-700 p-3 rounded-lg flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Fonduri Disponibile (Cash):</span>
                  <span className="font-bold font-mono text-emerald-400">{availableFunds.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {defaultCurrency}</span>
               </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1 flex items-center gap-1"><Hash size={14} /> ID Tranzacție (Opțional)</label>
              <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none font-mono text-sm" placeholder="ex: 123456789" value={formData.id} onChange={e => setFormData({ ...formData, id: e.target.value })} autoComplete="off" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium text-slate-400 mb-1">Data</label><input required type="date" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} /></div>
              <div><label className="block text-sm font-medium text-slate-400 mb-1">Tip Tranzacție</label><select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none" value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value as TransactionType })} disabled={availableTypes.length === 1}>{availableTypes.map(t => (<option key={t} value={t}>{t}</option>))}</select></div>
            </div>

            {/* INTEREST SUB-TYPE TOGGLE */}
            {isInterest && (
               <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700">
                  <button 
                     type="button"
                     onClick={() => { setIsBrokerInterest(false); }}
                     className={`flex-1 flex items-center justify-center gap-2 py-1.5 rounded-md text-sm font-medium transition-all ${!isBrokerInterest ? 'bg-slate-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                  >
                     <PieChart size={14} /> Dividend / Cupon
                  </button>
                  <button 
                     type="button"
                     onClick={() => { setIsBrokerInterest(true); setFormData(prev => ({...prev, symbol: ''})); }}
                     className={`flex-1 flex items-center justify-center gap-2 py-1.5 rounded-md text-sm font-medium transition-all ${isBrokerInterest ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                  >
                     <Landmark size={14} /> Dobândă Broker
                  </button>
               </div>
            )}

            {!isGlobalTransaction && (
               <div>
                 <label className="block text-sm font-medium text-slate-400 mb-1">Simbol (Ticker)</label>
                 <div className="relative">
                   <Search className="absolute left-3 top-2.5 text-slate-500" size={16} />
                   <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-white outline-none uppercase font-bold tracking-wide" placeholder="ex: VWCE, TSLA" value={formData.symbol} onChange={handleSymbolChange} onBlur={handleSymbolBlur} onFocus={(e) => handleSymbolChange(e)} readOnly={!!prefillData} autoComplete="off" />
                   {showSuggestions && suggestions.length > 0 && !prefillData && (
                      <div className="absolute z-50 left-0 right-0 mt-1 bg-slate-800 border border-slate-700 rounded-lg shadow-xl overflow-hidden">{suggestions.map(asset => (<button key={asset.id} type="button" className="w-full text-left px-4 py-2 hover:bg-slate-700 flex justify-between items-center group" onClick={() => handleSelectSuggestion(asset)}><div><span className="font-bold text-emerald-400 mr-2">{asset.symbol}</span><span className="text-slate-400 text-sm truncate">{asset.name}</span></div><ChevronRight size={14} className="text-slate-600 group-hover:text-emerald-500" /></button>))}</div>
                   )}
                 </div>
               </div>
            )}
            {!isGlobalTransaction && formData.symbol.length > 0 && (
               <>
               <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className={`block text-sm font-medium mb-1 ${isNewAsset ? 'text-emerald-400' : 'text-slate-400'}`}>{isNewAsset ? 'Nume Activ Nou' : 'Denumire Activ'}</label>
                  <input type="text" className={`w-full rounded-lg px-3 py-2 text-white outline-none border ${isNewAsset ? 'bg-slate-900 border-emerald-500/30' : 'bg-slate-800 border-slate-700'}`} value={isNewAsset ? newAssetName : matchedAssetName} onChange={e => setNewAssetName(e.target.value)} readOnly={!isNewAsset} />
               </div>
               <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="block text-sm font-medium text-slate-400 mb-1">Simbol Yahoo (Custom) <span className="text-xs text-slate-600">(Opțional, pt prețuri exacte)</span></label>
                  <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none" placeholder="ex: IGLN.L" value={formData.customTicker} onChange={e => setFormData({...formData, customTicker: e.target.value})} />
               </div>
               </>
            )}
            {(isUnitBased || (!isGlobalTransaction && formData.symbol.length > 0)) && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-800/30 p-3 rounded-lg border border-slate-700/50">
                 <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-400 mb-1 flex items-center gap-1"><Tag size={12} /> Categorie</label><select className="w-full bg-slate-800 border border-slate-600 rounded px-2 py-1.5 text-white text-sm outline-none" value={assetType} onChange={e => setAssetType(e.target.value as AssetType)} disabled={!isNewAsset && formData.symbol.length > 0}>{Object.values(AssetType).map(t => (<option key={t} value={t}>{t}</option>))}</select></div>
                 <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-400 mb-1 flex items-center gap-1"><FileText size={12} /> ISIN</label><input type="text" className="w-full bg-slate-800 border border-slate-600 rounded px-2 py-1.5 text-white text-sm outline-none" placeholder="ex: IE00BK5..." value={formData.isin} onChange={e => setFormData({ ...formData, isin: e.target.value })} /></div>
                 <div className="sm:col-span-1"><label className="block text-xs font-medium text-slate-400 mb-1">Valută</label><select className="w-full bg-slate-800 border border-slate-600 rounded px-2 py-1.5 text-white text-sm outline-none" value={formData.currency} onChange={e => setFormData({ ...formData, currency: e.target.value })} disabled={!isNewAsset && formData.symbol.length > 0}><option value="RON">RON</option><option value="EUR">EUR</option><option value="USD">USD</option></select></div>
              </div>
            )}
            {isUnitBased ? (
              <div className="grid grid-cols-3 gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                 <div><label className="block text-xs font-medium text-slate-400 mb-1">Cantitate</label><input required type="number" step="any" className="w-full bg-slate-800 border border-slate-600 rounded px-2 py-1 text-white outline-none text-right font-mono" value={formData.quantity} onChange={e => setFormData({ ...formData, quantity: e.target.value })} /></div>
                 <div><label className="block text-xs font-medium text-slate-400 mb-1">Preț/Unitate</label><input required type="number" step="any" className="w-full bg-slate-800 border border-slate-600 rounded px-2 py-1 text-white outline-none text-right font-mono" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} /></div>
                 <div><label className="block text-xs font-medium text-slate-400 mb-1">Valoare Brută</label><div className="flex items-center justify-end h-[30px] px-2 font-bold text-white font-mono">{formData.amount || '0.00'} <span className="text-[10px] ml-1 text-slate-500">{formData.currency}</span></div></div>
                 <div className="col-span-3 border-t border-slate-700 pt-2 mt-1 grid grid-cols-2 gap-4">
                    <div><label className="block text-xs font-medium text-rose-400 mb-1">Comision / Impozit</label><input type="number" step="any" className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-white text-right font-mono" value={formData.tax} onChange={e => setFormData({ ...formData, tax: e.target.value })} /></div>
                    <div className="text-right"><label className="block text-xs font-medium text-emerald-400 mb-1">{formData.type === TransactionType.BUY ? 'Cost Total Achiziție' : 'Încasare Netă'}</label><div className="text-lg font-bold text-white font-mono">{formData.type === TransactionType.BUY ? (Number(formData.amount) + Number(formData.tax || 0)).toFixed(2) : (Number(formData.amount) - Number(formData.tax || 0)).toFixed(2)} <span className="text-xs text-slate-500 ml-1">{formData.currency}</span></div></div>
                 </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-slate-400 mb-1">{isInterest ? 'Sumă Brută' : 'Sumă Totală'}</label><input required type="number" step="any" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none" value={formData.amount} onChange={e => setFormData({ ...formData, amount: e.target.value })} /></div>
                  <div><label className="block text-sm font-medium text-slate-400 mb-1">Valută</label><select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none" value={formData.currency} onChange={e => setFormData({ ...formData, currency: e.target.value })}><option value="RON">RON</option><option value="EUR">EUR</option><option value="USD">USD</option></select></div>
                </div>
                {isInterest && (<div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700 mt-2"><div className="grid grid-cols-2 gap-4"><div><label className="block text-xs font-medium text-rose-400 mb-1">Impozit</label><input type="number" step="any" className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-white outline-none" value={formData.tax} onChange={e => setFormData({ ...formData, tax: e.target.value })} /></div>
                <div className="flex flex-col justify-end"><label className="block text-xs font-medium text-slate-500 mb-1 text-right">Încasare Netă</label><div className="text-right font-bold text-emerald-400 text-lg">{getNetValue()} <span className="text-xs text-slate-500 ml-1">{formData.currency}</span></div></div></div></div>)}
              </div>
            )}
          </div>
          <div className="p-4 border-t border-slate-800 bg-slate-900 shrink-0 flex justify-end gap-3 rounded-b-xl">
              <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">Anulează</button>
              <button type="submit" disabled={isInsufficientFunds} className={`px-4 py-2 rounded-lg text-white font-medium flex items-center gap-2 shadow-lg ${isInsufficientFunds ? 'bg-slate-700 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-500'}`}>{isInsufficientFunds ? <AlertTriangle size={18} /> : <Save size={18} />}{isInsufficientFunds ? 'Fonduri Insuficiente' : 'Salvează'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;
