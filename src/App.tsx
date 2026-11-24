import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { 
  LayoutDashboard, 
  PieChart as PieChartIcon, 
  Wallet, 
  PlusCircle, 
  RefreshCw, 
  TrendingUp, 
  TrendingDown, 
  ArrowRightLeft, 
  Settings, 
  MoreHorizontal, 
  Info, 
  DollarSign, 
  Landmark, 
  Percent, 
  Scale, 
  Download, 
  Upload, 
  Save as SaveIcon, 
  X as XIcon, 
  Trash2, 
  ChevronDown, 
  ChevronUp, 
  History, 
  Target, 
  Pencil,
  FolderPlus,
  FileSpreadsheet,
  FileText,
  Printer,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Edit3,
  Archive,
  CheckCircle2,
  Search,
  AlertTriangle,
  PlusSquare,
  BarChart2,
  LogOut,
  User as UserIcon,
  Loader2,
  ArrowDownLeft,
  ArrowUpLeft,
  Split
} from 'lucide-react';
import { Portfolio, Asset, Transaction, TransactionType, AssetType, getAssetCategoryGroup } from './types';
import { INITIAL_PORTFOLIOS, EXCHANGE_RATES as DEFAULT_EXCHANGE_RATES } from './constants';
import { fetchLatestPrices, fetchYahooExchangeRates, fetchSingleAssetPrice } from './services/priceService';
import {
  buildPortfolioHistory,
  calculateOfficialXIRR,
  fetchHistoricalMarketData,
  invalidateHistoricalMarketCache,
  HistoricalMarketData
} from './services/portfolioEngine';
import { invalidateBenchmarkCache } from './services/benchmarkService';
import { AllocationChart, InvestmentHistoryChart } from './components/Charts';
import { PortfolioEvolutionChart } from './components/PortfolioEvolutionChart';
import { PortfolioPerformanceChart } from './components/PortfolioPerformanceChart';
import { PortfolioPeriodicReturns } from './components/PortfolioPeriodicReturns';
import { MonthlyPLChart } from './components/MonthlyPLChart';
import { ExposureCharts } from './components/ExposureCharts';
import ETFOverlapAnalysis from './components/ETFOverlapAnalysis';
import TransactionForm from './components/TransactionForm';
import AssetPositionsModal from './components/AssetPositionsModal';
import AssetDetailsModal from './components/AssetDetailsModal';
import { EditAssetModal } from './components/EditAssetModal';
import { StockSplitModal } from './components/StockSplitModal';
import AIAdvisor, { useAIAdvisor, AIExpertsList, AIConsultationChat, AIGlobalReport } from './components/AIAdvisor';
import { AssetClassTargetAllocation } from './components/AssetClassTargetAllocation';
import { FullPortfolioReportModal } from './components/FullPortfolioReportModal';

// Firebase Imports
import { auth, db } from './firebaseConfig';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';

// --- MATH UTILS FOR XIRR ---
const calculateXIRR = (transactions: { amount: number; date: Date }[], currentValue: number): number | null => {
  if (transactions.length === 0) return null;

  // Add current portfolio value as a "withdrawal" today to close the loop
  const cashFlows = [
    ...transactions,
    { amount: currentValue, date: new Date() } // Positive value = money back to us
  ];

  // Newton-Raphson method
  let rate = 0.1; // Initial guess (10%)
  const maxIterations = 50;
  const tolerance = 1e-6;

  for (let i = 0; i < maxIterations; i++) {
    let fValue = 0;
    let fDerivative = 0;

    for (const cf of cashFlows) {
      const days = (cf.date.getTime() - cashFlows[0].date.getTime()) / (1000 * 60 * 60 * 24);
      const years = days / 365;
      const term = Math.pow(1 + rate, years);
      
      fValue += cf.amount / term;
      fDerivative -= (years * cf.amount) / (term * (1 + rate));
    }

    if (Math.abs(fValue) < tolerance) return rate * 100;

    const newRate = rate - fValue / fDerivative;
    if (Math.abs(newRate - rate) < tolerance) return newRate * 100;
    rate = newRate;
  }

  return rate * 100;
};

// --- ROBUST ID GENERATOR ---
const generateId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
};

// --- FIFO LOGIC ENGINE (Moved outside component for global access) ---
const recalculateAssetFromHistory = (asset: Asset, transactions: Transaction[]): Asset => {
  let currentQuantity = 0;
  let totalRealizedPL = 0;
  
  // FIFO Inventory: Store each buy as a batch { quantity, costPerUnit }
  const inventory: { quantity: number; costPerUnit: number }[] = [];

  const assetTxs = transactions
    .filter(t => t.symbol === asset.symbol)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  assetTxs.forEach(tx => {
     const txQty = Number(tx.quantity) || 0;
     
     if (tx.type === TransactionType.BUY || tx.type === TransactionType.DEPOSIT) {
        const amount = Number(tx.amount);
        const tax = Number(tx.tax) || 0;
        const totalCost = amount + tax;
        const costPerUnit = txQty > 0 ? totalCost / txQty : 0;

        if (txQty > 0) {
           inventory.push({ quantity: txQty, costPerUnit });
           currentQuantity += txQty;
        } else if (tx.type === TransactionType.DEPOSIT) {
           if (txQty > 0) {
              inventory.push({ quantity: txQty, costPerUnit });
              currentQuantity += txQty;
           }
        }
     } 
     else if (tx.type === TransactionType.SELL || tx.type === TransactionType.WITHDRAWAL) {
        const amount = Number(tx.amount);
        const tax = Number(tx.tax) || 0;
        const netProceeds = amount - tax;
        
        if (txQty > 0) {
           let qtyToSell = txQty;
           let costOfSoldItems = 0;

           while (qtyToSell > 0.000001 && inventory.length > 0) {
              const batch = inventory[0];
              
              if (batch.quantity > qtyToSell) {
                 costOfSoldItems += qtyToSell * batch.costPerUnit;
                 batch.quantity -= qtyToSell;
                 qtyToSell = 0;
              } else {
                 costOfSoldItems += batch.quantity * batch.costPerUnit;
                 qtyToSell -= batch.quantity;
                 inventory.shift();
              }
           }
           totalRealizedPL += (netProceeds - costOfSoldItems);
           currentQuantity = Math.max(0, currentQuantity - txQty);
        }
     } 
     else if (tx.type === TransactionType.INTEREST) {
        const amount = Number(tx.amount);
        const tax = Number(tx.tax) || 0;
        totalRealizedPL += (amount - tax);
     }
  });

  let totalRemainingCost = 0;
  let totalRemainingQty = 0;
  
  inventory.forEach(batch => {
      totalRemainingCost += batch.quantity * batch.costPerUnit;
      totalRemainingQty += batch.quantity;
  });
  
  const avgBuyPrice = totalRemainingQty > 0 ? totalRemainingCost / totalRemainingQty : 0;

  return {
     ...asset,
     quantity: currentQuantity,
     buyPrice: avgBuyPrice,
     realizedPL: totalRealizedPL
  };
};

const App: React.FC = () => {
  // --- AUTHENTICATION STATE ---
  const [user, setUser] = useState<User | null>(() => {
    if (!auth) {
      // Offline mode user by default if Firebase is not configured
      return {
        uid: 'offline-user',
        displayName: 'Utilizator Local',
        email: 'local@wealthfolio.ro',
        photoURL: null
      } as any;
    }
    return null;
  });
  const [authLoading, setAuthLoading] = useState(() => {
    return auth ? true : false;
  });

  // --- DATA STATE ---
  const [portfolios, setPortfolios] = useState<Portfolio[]>(() => {
    try {
      const savedData = localStorage.getItem('investai_data');
      if (savedData) {
        return JSON.parse(savedData);
      }
    } catch (e) {
      console.error("Failed to load from local storage", e);
    }
    return INITIAL_PORTFOLIOS;
  });
  
  // Ref to track if update is coming from cloud (to prevent write-back loop)
  const isRemoteUpdate = useRef(false);

  const [activePortfolioId, setActivePortfolioId] = useState<string>('all');
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const [prefillTransaction, setPrefillTransaction] = useState<Partial<Transaction> | null>(null);
  const [transactionAllowedTypes, setTransactionAllowedTypes] = useState<TransactionType[] | undefined>(undefined);
  
  // --- VISIBILITY STATES ---
  const [isCashFlowExpanded, setIsCashFlowExpanded] = useState(false);
  const [isClosedAssetsExpanded, setIsClosedAssetsExpanded] = useState(false);

  // Refresh State
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [historicalMarketData, setHistoricalMarketData] = useState<HistoricalMarketData | null>(null);
  const [benchmarkRefreshKey, setBenchmarkRefreshKey] = useState(0);

  // Currency Rates Display & Edit State
  const [showRateEditor, setShowRateEditor] = useState(false);
  const [liveRates, setLiveRates] = useState<{
    eur: number, 
    usd: number, 
    eurUsd: number,
    trends: { eur: number, usd: number, eurUsd: number }
  }>({ 
    eur: 4.97, 
    usd: 4.60,
    eurUsd: 1.09,
    trends: { eur: 0, usd: 0, eurUsd: 0 }
  });
  
  // Modal States
  const [selectedAssetForPositions, setSelectedAssetForPositions] = useState<Asset | null>(null);
  const [selectedAssetIdForDetails, setSelectedAssetIdForDetails] = useState<string | null>(null);
  const [editingAssetForDetails, setEditingAssetForDetails] = useState<Asset | null>(null);
  const [selectedAssetForSplit, setSelectedAssetForSplit] = useState<Asset | null>(null);
  const [expandedAssetId, setExpandedAssetId] = useState<string | null>(null);
  const [editingPriceId, setEditingPriceId] = useState<string | null>(null);
  const [tempPriceValue, setTempPriceValue] = useState<string>('');
  const [editingTickerId, setEditingTickerId] = useState<string | null>(null);
  const [tempTickerValue, setTempTickerValue] = useState<string>('');
  const [refreshingAssetId, setRefreshingAssetId] = useState<string | null>(null);
  const [assetSearchTerm, setAssetSearchTerm] = useState('');
  const [cashSearchTerm, setCashSearchTerm] = useState('');
  const [assetDeleteConfirm, setAssetDeleteConfirm] = useState<{ isOpen: boolean, asset: Asset | null }>({ isOpen: false, asset: null });
  const [deleteAssetWithTransactions, setDeleteAssetWithTransactions] = useState(false);
  const [transactionDeleteConfirm, setTransactionDeleteConfirm] = useState<{ 
    isOpen: boolean, 
    transactionId: string | null, 
    portfolioId: string | null, 
    assetSymbol?: string 
  }>({ isOpen: false, transactionId: null, portfolioId: null });
  const [showSettings, setShowSettings] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showAddPortfolio, setShowAddPortfolio] = useState(false);
  const [showAddPlannedAsset, setShowAddPlannedAsset] = useState(false);
  const [newPlannedAsset, setNewPlannedAsset] = useState<{
    portfolioId: string;
    symbol: string;
    isin: string;
    name: string;
    type: AssetType;
    currency: string;
    targetAllocation: number;
  }>({
    portfolioId: '',
    symbol: '',
    isin: '',
    name: '',
    type: AssetType.ETF,
    currency: 'EUR',
    targetAllocation: 3
  });
  const [newPortfolioData, setNewPortfolioData] = useState({
    name: '',
    description: '',
    currency: 'EUR',
    color: 'bg-slate-500'
  });

  // --- AI INTEGRATION STATES ---
  const [aiExternalPrompt, setAiExternalPrompt] = useState<string | null>(null);
  const [isFullReportOpen, setIsFullReportOpen] = useState(false);
  const aiAdvisorRef = useRef<HTMLDivElement>(null);

  // --- HELPER: DYNAMIC CONVERT VALUE ---
  const convertValue = useCallback((amount: number, from: string, to: string): number => {
    if (from === to) return amount;
    
    let amountInRon = amount;
    if (from === 'EUR') amountInRon = amount * liveRates.eur;
    else if (from === 'USD') amountInRon = amount * liveRates.usd;
    else if (from === 'RON') amountInRon = amount;
    else {
        return amount; 
    }

    if (to === 'RON') return amountInRon;
    if (to === 'EUR') return amountInRon / liveRates.eur;
    if (to === 'USD') return amountInRon / liveRates.usd;

    return amount;
  }, [liveRates.eur, liveRates.usd]);

  // --- AUTH EFFECT & FIRESTORE SYNC ---
  useEffect(() => {
    if (!auth) return;
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribeAuth();
  }, []);

  // Sync Data when User is logged in
  useEffect(() => {
    if (!user || !db || user.uid === 'offline-user') return;

    const userDocRef = doc(db, 'users', user.uid);

    const unsubscribeSnapshot = onSnapshot(userDocRef, async (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.portfolios) {
          isRemoteUpdate.current = true; 
          
          const hydratedPortfolios = data.portfolios.map((p: Portfolio) => ({
             ...p,
             assets: p.assets.map((a: Asset) => recalculateAssetFromHistory(a, p.transactions))
          }));

          setPortfolios(hydratedPortfolios);
          
          setTimeout(() => {
             isRemoteUpdate.current = false;
          }, 500);
        }
      } else {
        await setDoc(userDocRef, { portfolios: INITIAL_PORTFOLIOS }, { merge: true });
      }
    }, (error) => {
       console.error("Firestore sync error:", error);
    });

    return () => unsubscribeSnapshot();
  }, [user]);

  // --- SAVE TO FIRESTORE EFFECT ---
  useEffect(() => {
    const saveData = async () => {
      if (!user || isRemoteUpdate.current) return;

      if (!db || user.uid === 'offline-user') {
        // Offline / Local Mode: save to localStorage instead
        try {
          localStorage.setItem('investai_data', JSON.stringify(portfolios));
        } catch (e) {
          console.error("Error saving to localStorage", e);
        }
        return;
      }

      try {
        await setDoc(doc(db, 'users', user.uid), { portfolios }, { merge: true });
        // Keep local backup too
        localStorage.setItem('investai_data', JSON.stringify(portfolios));
      } catch (e) {
        console.error("Error saving to Firestore", e);
      }
    };

    const timeoutId = setTimeout(saveData, 1000);
    return () => clearTimeout(timeoutId);
  }, [portfolios, user]);

  // --- FETCH LIVE CURRENCY RATES EFFECT (Yahoo Finance / Frankfurter API Fallback) ---
  useEffect(() => {
    const fetchRates = async () => {
      try {
        // Try Yahoo Finance first
        const yahooRates = await fetchYahooExchangeRates();
        if (yahooRates) {
          const getTrend = (now: number, prev: number) => {
            const diff = now - prev;
            if (Math.abs(diff) < 0.0001) return 0;
            return diff > 0 ? 1 : -1;
          };

          setLiveRates({
            eur: yahooRates.eur.price,
            usd: yahooRates.usd.price,
            eurUsd: yahooRates.eurUsd.price,
            trends: {
              eur: getTrend(yahooRates.eur.price, yahooRates.eur.previousClose),
              usd: getTrend(yahooRates.usd.price, yahooRates.usd.previousClose),
              eurUsd: getTrend(yahooRates.eurUsd.price, yahooRates.eurUsd.previousClose)
            }
          });
          return;
        }
      } catch (error) {
        console.warn("Yahoo exchange rates fetch failed, trying Frankfurter API...", error);
      }

      // Fallback: Frankfurter API
      try {
        const resLatest = await fetch('https://api.frankfurter.app/latest?to=RON,USD');
        const dataLatest = await resLatest.json();
        
        const date = new Date();
        date.setDate(date.getDate() - 2); 
        const dateStr = date.toISOString().split('T')[0];
        const resPrev = await fetch(`https://api.frankfurter.app/${dateStr}?to=RON,USD`);
        const dataPrev = await resPrev.json();

        if (dataLatest && dataLatest.rates) {
           const eurRon = dataLatest.rates.RON;
           const eurUsd = dataLatest.rates.USD;
           const usdRon = eurRon / eurUsd;

           const prevEurRon = dataPrev?.rates?.RON || eurRon;
           const prevEurUsd = dataPrev?.rates?.USD || eurUsd;
           const prevUsdRon = prevEurRon / prevEurUsd;

           const getTrend = (now: number, prev: number) => {
              const diff = now - prev;
              if (Math.abs(diff) < 0.0001) return 0;
              return diff > 0 ? 1 : -1;
           };

           setLiveRates({
             eur: eurRon,
             usd: usdRon,
             eurUsd: eurUsd,
             trends: {
                eur: getTrend(eurRon, prevEurRon),
                usd: getTrend(usdRon, prevUsdRon),
                eurUsd: getTrend(eurUsd, prevEurUsd)
             }
           });
        }
      } catch (error) {
        console.warn("Failed to fetch live currency rates, using defaults.", error);
      }
    };
    fetchRates();
  }, []);

  const handleUpdateRates = (e: React.FormEvent) => {
      e.preventDefault();
      setShowRateEditor(false);
  };

  // --- AUTH HANDLERS ---
  const handleGoogleLogin = async () => {
    if (!auth) {
      alert("Autentificarea nu este configurată (lipsesc cheile Firebase).");
      return;
    }
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      console.error("Login failed", error);
      if (error.code === 'auth/unauthorized-domain') {
        const hostname = window.location.hostname;
        alert(
          `Eroare Firebase: Domeniul de pe care rulează aplicația nu este autorizat.\n\n` +
          `Pentru a rezolva:\n` +
          `1. Accesează Firebase Console (https://console.firebase.google.com/)\n` +
          `2. Mergi la: Authentication > Settings > Authorized domains\n` +
          `3. Adaugă noul domeniu în listă: ${hostname}\n\n` +
          `Dacă folosești și link-ul de test (Share/Pre-production) și pe cel de dev (Development), adaugă ambele domenii:\n` +
          `- ${window.location.host}\n` +
          `- ais-pre-biv7anyrvkvr4ipnmcposb-394176636467.europe-west3.run.app`
        );
      } else {
        alert("Autentificare eșuată: " + error.message);
      }
    }
  };

  const handleEnterOfflineMode = () => {
    setUser({
      uid: 'offline-user',
      displayName: 'Utilizator Local',
      email: 'local@wealthfolio.ro',
      photoURL: null
    } as any);
  };

  const handleLogout = async () => {
    if (!auth) {
      setUser(null);
      setPortfolios(INITIAL_PORTFOLIOS);
      return;
    }
    try {
      await signOut(auth);
      setPortfolios(INITIAL_PORTFOLIOS); 
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  // Computed: Active Data
  const activePortfolios = useMemo<Portfolio[]>(() => {
    return activePortfolioId === 'all' 
      ? portfolios 
      : portfolios.filter(p => p.id === activePortfolioId);
  }, [portfolios, activePortfolioId]);

  const activeAssets = useMemo<Asset[]>(() => {
    return activePortfolios.flatMap(p => p.assets);
  }, [activePortfolios]);

  const liveAssetForDetails = useMemo(() => {
    if (!selectedAssetIdForDetails) return null;
    return activeAssets.find(a => a.id === selectedAssetIdForDetails) || null;
  }, [activeAssets, selectedAssetIdForDetails]);

  const activeTransactions = useMemo<Transaction[]>(() => {
    return activePortfolios.flatMap(p => p.transactions);
  }, [activePortfolios]);

  const reportingCurrency = activePortfolioId === 'all' ? 'EUR' : activePortfolios[0].currency;

  // SPLIT ACTIVE vs CLOSED ASSETS
  const openAssets = useMemo(() => {
    return activeAssets
      .filter(a => (Number(a.quantity) || 0) >= 0.001)
      .sort((a, b) => {
        const catA = getAssetCategoryGroup(a);
        const catB = getAssetCategoryGroup(b);
        if (catA.rank !== catB.rank) {
          return catA.rank - catB.rank;
        }
        return (a.symbol || '').localeCompare(b.symbol || '', 'ro', { sensitivity: 'base' });
      });
  }, [activeAssets]);
  
  const closedAssets = useMemo(() => {
     const standardClosed = activeAssets.filter(a => {
       if ((Number(a.quantity) || 0) >= 0.001) return false;
       const symUpper = (a.symbol || '').toUpperCase().trim();
       const hasTx = activeTransactions.some(t => (t.symbol || '').toUpperCase().trim() === symUpper);
       const hasRealized = Math.abs(Number(a.realizedPL) || 0) > 0.001;
       // Exclude planned/watchlist assets (0 qty, 0 transactions, 0 realized P/L) from Closed Positions history
       return hasTx || hasRealized;
     });
     const brokerInterestTxs = activeTransactions.filter(t => t.type === TransactionType.INTEREST && !t.symbol);
     
     if (brokerInterestTxs.length > 0) {
        const totalInterest = brokerInterestTxs.reduce((acc, t) => {
           return acc + convertValue(Number(t.amount) - Number(t.tax || 0), t.currency, reportingCurrency);
        }, 0);

        const virtualInterestAsset: Asset = {
           id: 'virtual-broker-interest',
           symbol: 'DOBANDA',
           name: 'Dobândă Broker (Cash)',
           type: AssetType.CASH,
           quantity: 0,
           buyPrice: 0,
           currentPrice: 1,
           currency: reportingCurrency,
           realizedPL: totalInterest, 
           previousClose: 1,
           targetAllocation: 0
        };
        return [virtualInterestAsset, ...standardClosed];
     }
     return standardClosed;
  }, [activeAssets, activeTransactions, reportingCurrency, liveRates]);

  // --- CASH FLOW HISTORY FILTER ---
  const cashFlowHistory = useMemo(() => {
    return activeTransactions
      .filter(t => t.type === TransactionType.DEPOSIT || t.type === TransactionType.WITHDRAWAL)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [activeTransactions]);

  // --- REAL HISTORICAL YAHOO FINANCE MARKET DATA EFFECT ---
  const allAssetsSignature = useMemo(() => {
    const syms = Array.from(
      new Set(
        portfolios
          .flatMap(p => p.assets || [])
          .map(a => `${(a.symbol || '').toUpperCase().trim()}:${(a.customTicker || '').toUpperCase().trim()}`)
          .filter(Boolean)
      )
    ).sort();
    return syms.join('|');
  }, [portfolios]);

  const earliestTxDateGlobal = useMemo(() => {
    const dates = portfolios
      .flatMap(p => p.transactions || [])
      .map(t => t.date)
      .filter(Boolean)
      .sort();
    return dates[0];
  }, [portfolios]);

  useEffect(() => {
    const allAssets = portfolios.flatMap(p => p.assets || []);
    if (allAssets.length === 0) return;
    let isMounted = true;
    fetchHistoricalMarketData(allAssets, earliestTxDateGlobal, false).then(data => {
      if (isMounted && data) {
        setHistoricalMarketData(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [allAssetsSignature, earliestTxDateGlobal]);

  // --- AUTHORITATIVE UNIFIED PORTFOLIO HISTORY (SINGLE SOURCE OF TRUTH FOR ALL CHARTS) ---
  const portfolioHistory = useMemo(() => {
    return buildPortfolioHistory({
      portfolios: activePortfolios,
      reportingCurrency,
      liveRates,
      marketData: historicalMarketData
    });
  }, [activePortfolios, reportingCurrency, liveRates, historicalMarketData]);

  // --- MACRO STATS CALCULATION (100% ISOLATED PER PORTFOLIO & CONSISTENT WITH ALL CHARTS) ---
  const macroStats = useMemo(() => {
    let assetsValue = 0;
    let costBasis = 0; 
    let totalRealizedPL = 0;
    let totalDailyChange = 0; 

    // 1. Assets
    activeAssets.forEach(asset => {
      const qty = Number(asset.quantity) || 0;
      const price = Number(asset.currentPrice) || 0;
      const prevPrice = Number(asset.previousClose) || price; 
      const buyPrice = Number(asset.buyPrice) || 0;
      const realized = Number(asset.realizedPL) || 0;

      assetsValue += convertValue(qty * price, asset.currency, reportingCurrency);
      costBasis += convertValue(qty * buyPrice, asset.currency, reportingCurrency);
      totalRealizedPL += convertValue(realized, asset.currency, reportingCurrency);

      const dailyDelta = (price - prevPrice) * qty;
      totalDailyChange += convertValue(dailyDelta, asset.currency, reportingCurrency);
    });

    // Include broker cash interest (INTEREST without symbol) in Realized P/L for consistency with closedAssets
    activeTransactions
      .filter(t => t.type === TransactionType.INTEREST && !t.symbol)
      .forEach(t => {
        totalRealizedPL += convertValue(Number(t.amount) - Number(t.tax || 0), t.currency, reportingCurrency);
      });

    // 2. Use authoritative per-portfolio cash & net invested capital from portfolioHistory (0.00 drift between KPI cards and all charts)
    const cashByCurrencyAggregate = portfolioHistory.finalCashByCurrency || {};
    let totalCashBalance = 0;
    Object.entries(cashByCurrencyAggregate).forEach(([curr, amount]) => {
      totalCashBalance += convertValue(Math.max(0, amount), curr, reportingCurrency);
    });

    const netInvestedCapital = portfolioHistory.netInvestedCapital;
    const netWorth = assetsValue + totalCashBalance;

    // Official Excel-compatible XIRR (365-day year + bisection fallback)
    const xirr = calculateOfficialXIRR(portfolioHistory.xirrFlows, netWorth);

    // Official Portfolio CAGR = Annualized Time-Weighted Return (GIPS standard, undistorted by DCA deposit timing)
    const cagr = portfolioHistory.twrAnnualizedPct;

    const prevNetWorth = netWorth - totalDailyChange;
    const totalDailyChangePercent = prevNetWorth !== 0 ? (totalDailyChange / prevNetWorth) * 100 : 0;

    const fxExposure: Record<string, number> = {};
    const fxExposureNative: Record<string, number> = {};
    activeAssets.forEach(asset => {
       const qty = Number(asset.quantity) || 0;
       const price = Number(asset.currentPrice) || 0;
       const nativeVal = qty * price;
       const val = convertValue(nativeVal, asset.currency, reportingCurrency);
       fxExposure[asset.currency] = (fxExposure[asset.currency] || 0) + val;
       fxExposureNative[asset.currency] = (fxExposureNative[asset.currency] || 0) + nativeVal;
    });
    Object.entries(cashByCurrencyAggregate).forEach(([curr, amount]) => {
       const nativeVal = Math.max(0, amount);
       const val = convertValue(nativeVal, curr, reportingCurrency);
       fxExposure[curr] = (fxExposure[curr] || 0) + val;
       fxExposureNative[curr] = (fxExposureNative[curr] || 0) + nativeVal;
    });

    return {
      netWorth,           
      netInvestedCapital, 
      cashBalance: totalCashBalance,        
      costBasis,          
      totalUnrealizedPL: assetsValue - costBasis,
      totalRealizedPL,
      totalDailyChange,    
      totalDailyChangePercent, 
      xirr,
      cagr,
      fxExposure,
      fxExposureNative
    };
  }, [activePortfolios, activeAssets, activeTransactions, reportingCurrency, liveRates, portfolioHistory]);

  // Keep TransactionForm availableFunds 100% aligned with the authoritative Net Worth cash balance
  const currentPortfolioCash = activePortfolioId === 'all' ? null : macroStats.cashBalance; 

  const aiAdvisor = useAIAdvisor({
    portfolios,
    activePortfolioId,
    reportingCurrency,
    convertValue,
    macroStats,
    externalPrompt: aiExternalPrompt,
    onClearExternalPrompt: () => setAiExternalPrompt(null),
    onOpenFullReport: () => setIsFullReportOpen(true)
  });

  const handleRefreshPrices = async () => {
    setIsRefreshing(true);
    try {
      // 1. Refresh exchange rates
      try {
        const yahooRates = await fetchYahooExchangeRates();
        if (yahooRates) {
          const getTrend = (now: number, prev: number) => {
            const diff = now - prev;
            if (Math.abs(diff) < 0.0001) return 0;
            return diff > 0 ? 1 : -1;
          };

          setLiveRates({
            eur: yahooRates.eur.price,
            usd: yahooRates.usd.price,
            eurUsd: yahooRates.eurUsd.price,
            trends: {
              eur: getTrend(yahooRates.eur.price, yahooRates.eur.previousClose),
              usd: getTrend(yahooRates.usd.price, yahooRates.usd.previousClose),
              eurUsd: getTrend(yahooRates.eurUsd.price, yahooRates.eurUsd.previousClose)
            }
          });
        }
      } catch (e) {
        console.warn("Failed to refresh exchange rates", e);
      }

      // 2. Refresh asset prices across all portfolios
      const assetsToRefresh = portfolios.flatMap(p => p.assets);

      if (assetsToRefresh.length === 0) {
        setIsRefreshing(false);
        return;
      }

      const newPrices = await fetchLatestPrices(assetsToRefresh);
      const now = new Date().toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' });
      
      setPortfolios(prev => prev.map(p => ({
        ...p,
        assets: p.assets.map(a => {
          if (newPrices[a.id]) {
            return {
               ...a,
               currentPrice: newPrices[a.id].price,
               previousClose: newPrices[a.id].previousClose,
               lastRefreshSuccess: newPrices[a.id].success,
               lastRefreshTime: newPrices[a.id].success ? now : a.lastRefreshTime
            };
          }
          return a;
        })
      })));

      // 3. Refresh historical Yahoo Finance daily prices & live benchmarks
      invalidateHistoricalMarketCache();
      invalidateBenchmarkCache();
      setBenchmarkRefreshKey(k => k + 1);
      fetchHistoricalMarketData(assetsToRefresh, earliestTxDateGlobal, true)
        .then(hist => {
          if (hist) setHistoricalMarketData(hist);
        })
        .catch(() => {});
    } finally {
      setIsRefreshing(false);
    }
  };

  const hasAutoRefreshed = useRef(false);

  useEffect(() => {
    if (portfolios.length > 0 && portfolios.some(p => p.assets.length > 0) && !hasAutoRefreshed.current) {
      hasAutoRefreshed.current = true;
      handleRefreshPrices();
    }
  }, [portfolios]);

  const handleUpdateAssetPrice = (assetId: string, newPrice: number) => {
    setPortfolios(prev => prev.map(p => ({
       ...p,
       assets: p.assets.map(a => 
          a.id === assetId ? { ...a, currentPrice: newPrice, lastRefreshSuccess: true, lastRefreshTime: 'Manual' } : a
       )
    })));
    setEditingPriceId(null);
  };

  const handleRefreshSingleAsset = async (asset: Asset) => {
    setRefreshingAssetId(asset.id);
    try {
      const res = await fetchSingleAssetPrice(asset);
      const now = new Date().toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' });
      if (res && res.success && res.price > 0) {
        setPortfolios(prev => prev.map(p => ({
          ...p,
          assets: p.assets.map(a => a.id === asset.id ? {
            ...a,
            currentPrice: res.price,
            previousClose: res.previousClose || a.previousClose,
            lastRefreshSuccess: true,
            lastRefreshTime: now
          } : a)
        })));
      } else {
        setPortfolios(prev => prev.map(p => ({
          ...p,
          assets: p.assets.map(a => a.id === asset.id ? {
            ...a,
            lastRefreshSuccess: false
          } : a)
        })));
      }
    } catch (err) {
      console.error("Single asset refresh failed:", err);
    } finally {
      setRefreshingAssetId(null);
    }
  };

  const handleUpdateAssetTicker = (assetId: string, oldSymbol: string, rawNewTicker: string) => {
    const newTicker = rawNewTicker.trim().toUpperCase();
    if (!newTicker || newTicker === oldSymbol) {
      setEditingTickerId(null);
      return;
    }

    setPortfolios(prev => {
      return prev.map(p => {
        const hasAsset = p.assets.some(a => a.id === assetId || a.symbol === oldSymbol);
        const hasTx = p.transactions.some(t => t.symbol === oldSymbol);
        if (!hasAsset && !hasTx) return p;

        const updatedTransactions = p.transactions.map(t => {
          if (t.symbol === oldSymbol) {
            return {
              ...t,
              symbol: newTicker
            };
          }
          return t;
        });

        const updatedAssets = p.assets.map(a => {
          if (a.id === assetId || a.symbol === oldSymbol) {
            const updated = {
              ...a,
              symbol: newTicker,
              customTicker: newTicker
            };
            return recalculateAssetFromHistory(updated, updatedTransactions);
          }
          return a;
        });

        return {
          ...p,
          assets: updatedAssets,
          transactions: updatedTransactions
        };
      });
    });

    setEditingTickerId(null);

    // Automatically trigger single asset price update for the new ticker!
    fetchSingleAssetPrice({ id: assetId, symbol: newTicker, customTicker: newTicker } as Asset)
      .then(res => {
        if (res && res.success && res.price > 0) {
          setPortfolios(prev => prev.map(p => ({
            ...p,
            assets: p.assets.map(a => 
              (a.id === assetId || a.symbol === newTicker)
                ? { ...a, currentPrice: res.price, previousClose: res.previousClose || a.previousClose, lastRefreshSuccess: true, lastRefreshTime: new Date().toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' }) }
                : a
            )
          })));
        }
      })
      .catch(() => {});
  };

  const handleSaveTransaction = (txData: Omit<Transaction, 'id'> & { id?: string }, newAssetDetails?: { name: string, type: AssetType, isin?: string, customTicker?: string }) => {
    const newTx: Transaction = {
      ...txData,
      id: txData.id && txData.id.trim() !== '' ? txData.id : generateId(),
    };

    setPortfolios(prev => {
       const newPortfolios = [...prev];
       const targetPId = activePortfolioId === 'all' ? (newPortfolios[0]?.id || 'p1') : activePortfolioId;
       const pIndex = newPortfolios.findIndex(p => p.id === targetPId);
       if (pIndex === -1) return prev;

       const p = { ...newPortfolios[pIndex] };
       
       const existingTxIndex = p.transactions.findIndex(t => t.id === newTx.id);
       let oldSymbol = '';
       
       if (existingTxIndex >= 0) {
          oldSymbol = p.transactions[existingTxIndex].symbol || '';
          p.transactions[existingTxIndex] = newTx;
       } else {
          p.transactions = [...p.transactions, newTx];
       }

       const triggerRecalc = (sym: string) => {
          if (!sym) return;
          const aIndex = p.assets.findIndex(a => a.symbol === sym);
          if (aIndex >= 0) {
             p.assets[aIndex] = recalculateAssetFromHistory(p.assets[aIndex], p.transactions);
          }
       };

       if (txData.symbol) {
          const txSymUpper = txData.symbol.trim().toUpperCase();
          let assetIndex = p.assets.findIndex(a => (a.symbol || '').trim().toUpperCase() === txSymUpper);
          
          if (assetIndex === -1 && newAssetDetails) {
             const newAsset: Asset = {
                id: generateId(),
                symbol: txData.symbol,
                name: newAssetDetails.name,
                type: newAssetDetails.type,
                isin: newAssetDetails.isin,
                quantity: 0,
                buyPrice: 0,
                currentPrice: Number(txData.price) || 0,
                currency: txData.currency,
                previousClose: Number(txData.price) || 0,
                realizedPL: 0,
                targetAllocation: 0,
                customTicker: newAssetDetails.customTicker
             };
             p.assets.push(newAsset);
             assetIndex = p.assets.length - 1;
          }

          triggerRecalc(txData.symbol);
       }
       
       if (oldSymbol && oldSymbol !== txData.symbol) {
          triggerRecalc(oldSymbol);
       }
       
       newPortfolios[pIndex] = p;
       return newPortfolios;
    });

    setShowTransactionForm(false);
    setEditingTransaction(null);
    setPrefillTransaction(null);
    setTransactionAllowedTypes(undefined);
  };

  const handleSaveAssetDetails = (
    oldSymbol: string,
    updatedDetails: {
      symbol: string;
      customTicker?: string;
      name: string;
      type: AssetType;
      isin?: string;
      currency: string;
    }
  ) => {
    const newSymbol = updatedDetails.symbol.trim().toUpperCase();

    setPortfolios(prev => {
      return prev.map(p => {
        const assetIndex = p.assets.findIndex(a => a.symbol === oldSymbol || (editingAssetForDetails && a.id === editingAssetForDetails.id));
        if (assetIndex === -1) return p;

        const updatedAssets = [...p.assets];
        const targetAsset = { ...updatedAssets[assetIndex] };

        targetAsset.symbol = newSymbol;
        targetAsset.customTicker = updatedDetails.customTicker ? updatedDetails.customTicker.trim().toUpperCase() : undefined;
        targetAsset.name = updatedDetails.name;
        targetAsset.type = updatedDetails.type;
        targetAsset.isin = updatedDetails.isin;
        targetAsset.currency = updatedDetails.currency;

        const updatedTransactions = p.transactions.map(t => {
          if (t.symbol === oldSymbol) {
            return {
              ...t,
              symbol: newSymbol,
              currency: updatedDetails.currency
            };
          }
          return t;
        });

        updatedAssets[assetIndex] = recalculateAssetFromHistory(targetAsset, updatedTransactions);

        return {
          ...p,
          assets: updatedAssets,
          transactions: updatedTransactions
        };
      });
    });

    setEditingAssetForDetails(null);

    setTimeout(() => {
      handleRefreshPrices();
    }, 150);
  };

  const handleApplyStockSplit = ({
    assetId,
    symbol,
    fromRatio,
    toRatio,
    splitDate,
    applyToAllHistory
  }: {
    assetId: string;
    symbol: string;
    fromRatio: number;
    toRatio: number;
    splitDate?: string;
    applyToAllHistory: boolean;
  }) => {
    const multiplier = toRatio / fromRatio;
    if (multiplier <= 0 || multiplier === 1) return;

    setPortfolios(prev => {
      return prev.map(p => {
        const hasAsset = p.assets.some(a => a.id === assetId || a.symbol === symbol);
        const hasTx = p.transactions.some(t => t.symbol === symbol);
        if (!hasAsset && !hasTx) return p;

        const updatedTransactions = p.transactions.map(t => {
          if (t.symbol !== symbol) return t;

          if (!applyToAllHistory && splitDate) {
            if (new Date(t.date).getTime() > new Date(splitDate).getTime()) {
              return t;
            }
          }

          const oldQty = Number(t.quantity) || 0;
          const oldPrice = Number(t.price) || 0;

          const newQty = oldQty > 0 ? parseFloat((oldQty * multiplier).toFixed(6)) : oldQty;
          const newPrice = oldPrice > 0 ? parseFloat((oldPrice / multiplier).toFixed(6)) : oldPrice;

          return {
            ...t,
            quantity: newQty,
            price: newPrice
          };
        });

        const updatedAssets = p.assets.map(a => {
          if (a.id === assetId || a.symbol === symbol) {
            return recalculateAssetFromHistory(a, updatedTransactions);
          }
          return a;
        });

        return {
          ...p,
          assets: updatedAssets,
          transactions: updatedTransactions
        };
      });
    });

    const targetAsset = activeAssets.find(a => a.id === assetId || a.symbol === symbol);
    if (targetAsset) {
      setTimeout(() => {
        handleRefreshSingleAsset(targetAsset);
      }, 300);
    }
  };

  const handleRequestAssetDelete = (asset: Asset) => {
    setDeleteAssetWithTransactions(false);
    setAssetDeleteConfirm({ isOpen: true, asset });
  };

  const handleRequestDeleteTransaction = (transactionId: string, portfolioId: string, assetSymbol?: string) => {
    setTransactionDeleteConfirm({
      isOpen: true,
      transactionId,
      portfolioId,
      assetSymbol
    });
  };

  const toggleAssetExpansion = (assetId: string) => {
    setExpandedAssetId(prev => prev === assetId ? null : assetId);
  };

  const handleConfirmDeleteTransaction = () => {
    const { transactionId, portfolioId, assetSymbol } = transactionDeleteConfirm;
    if (!transactionId || !portfolioId) return;

    setPortfolios(prev => {
      const newPortfolios = [...prev];
      const pIndex = newPortfolios.findIndex(p => p.id === portfolioId);
      if (pIndex === -1) return prev;

      const p = { ...newPortfolios[pIndex] };
      
      p.transactions = p.transactions.filter(t => t.id !== transactionId);

      if (assetSymbol) {
         const assetIndex = p.assets.findIndex(a => a.symbol === assetSymbol);
         if (assetIndex >= 0) {
            p.assets[assetIndex] = recalculateAssetFromHistory(p.assets[assetIndex], p.transactions);
         }
      }

      newPortfolios[pIndex] = p;
      return newPortfolios;
    });

    setTransactionDeleteConfirm({ isOpen: false, transactionId: null, portfolioId: null });
  };

  const openAssetTransactionModal = (asset: Asset) => {
     setPrefillTransaction({
        type: TransactionType.BUY, 
        symbol: asset.symbol,
        currency: asset.currency,
        quantity: 0
     });
     setTransactionAllowedTypes([TransactionType.BUY, TransactionType.INTEREST, TransactionType.TAX]);
     setShowTransactionForm(true);
  };

  const handleConfirmAssetDelete = () => {
    if (!assetDeleteConfirm.asset || assetDeleteConfirm.asset.id === 'virtual-broker-interest') return;
    const targetAssetId = assetDeleteConfirm.asset.id;
    const targetSymbol = assetDeleteConfirm.asset.symbol;

    setPortfolios(prev => prev.map(p => {
      const hasAsset = p.assets.some(a => a.id === targetAssetId);
      if (!hasAsset) return p;

      const remainingAssets = p.assets.filter(a => a.id !== targetAssetId);
      const remainingTransactions = deleteAssetWithTransactions
        ? p.transactions.filter(t => t.symbol !== targetSymbol)
        : p.transactions;

      // If we kept transactions and another asset with the same symbol remains in this portfolio, recalculate it
      const updatedAssets = remainingAssets.map(a => {
        if (a.symbol === targetSymbol) {
          return recalculateAssetFromHistory(a, remainingTransactions);
        }
        return a;
      });

      return {
        ...p,
        assets: updatedAssets,
        transactions: remainingTransactions
      };
    }));

    setAssetDeleteConfirm({ isOpen: false, asset: null });
    setDeleteAssetWithTransactions(false);
  };

  const handleUpdateTargetAllocation = (assetId: string, newTarget: number) => {
    const sanitized = Math.max(0, Math.min(100, Math.round((Number(newTarget) || 0) * 10) / 10));
    setPortfolios(prev => prev.map(p => ({ ...p, assets: p.assets.map(a => a.id === assetId ? { ...a, targetAllocation: sanitized } : a) })));
  };

  // Bidirectional Macro -> Micro sync: scales all active/targeted assets of `assetType` proportionally so their sum equals `newClassTarget` exactly (to 0.1%)
  const handleUpdateClassTarget = (assetType: AssetType, newClassTarget: number) => {
    const targetTotal = Math.max(0, Math.min(100, Math.round((Number(newClassTarget) || 0) * 10) / 10));
    const targetPortfolioIds = new Set(activePortfolios.map(p => p.id));

    setPortfolios(prev => prev.map(p => {
      if (!targetPortfolioIds.has(p.id)) return p;

      const eligibleIndices: number[] = [];
      p.assets.forEach((a, idx) => {
        if (a.type === assetType && ((Number(a.quantity) || 0) > 0.000001 || (Number(a.targetAllocation) || 0) > 0)) {
          eligibleIndices.push(idx);
        }
      });

      if (eligibleIndices.length === 0) return p;

      const updatedAssets = [...p.assets];

      if (targetTotal <= 0) {
        eligibleIndices.forEach(idx => {
          updatedAssets[idx] = { ...updatedAssets[idx], targetAllocation: 0 };
        });
        return { ...p, assets: updatedAssets };
      }

      // Compute proportional weights: prefer existing targetAllocation, fall back to current market value, then equal split
      const currentTargetSum = eligibleIndices.reduce((s, idx) => s + (Number(p.assets[idx].targetAllocation) || 0), 0);
      let weights: number[];
      if (currentTargetSum > 0.001) {
        weights = eligibleIndices.map(idx => (Number(p.assets[idx].targetAllocation) || 0) / currentTargetSum);
      } else {
        const marketVals = eligibleIndices.map(idx => {
          const a = p.assets[idx];
          return Math.max(0, convertValue((Number(a.quantity) || 0) * (Number(a.currentPrice) || 0), a.currency, reportingCurrency));
        });
        const mvSum = marketVals.reduce((s, v) => s + v, 0);
        if (mvSum > 0.001) {
          weights = marketVals.map(v => v / mvSum);
        } else {
          weights = eligibleIndices.map(() => 1 / eligibleIndices.length);
        }
      }

      // Largest-remainder rounding in tenths (0.1%) so scaled micro targets sum EXACTLY to targetTotal
      const totalTenths = Math.round(targetTotal * 10);
      const rawTenths = weights.map(w => w * totalTenths);
      const floorTenths = rawTenths.map(v => Math.floor(v));
      let remainder = totalTenths - floorTenths.reduce((s, v) => s + v, 0);
      const order = rawTenths
        .map((v, i) => ({ i, frac: v - floorTenths[i] }))
        .sort((a, b) => b.frac - a.frac);
      for (let k = 0; k < remainder && k < order.length; k++) {
        floorTenths[order[k].i] += 1;
      }

      eligibleIndices.forEach((idx, i) => {
        updatedAssets[idx] = { ...updatedAssets[idx], targetAllocation: floorTenths[i] / 10 };
      });

      return { ...p, assets: updatedAssets };
    }));
  };

  const handleOpenAddPlannedAsset = () => {
    const defaultPortfolio = activePortfolioId === 'all' ? (portfolios[0] || null) : (activePortfolios[0] || null);
    setNewPlannedAsset({
      portfolioId: defaultPortfolio?.id || 'p1',
      symbol: '',
      isin: '',
      name: '',
      type: AssetType.ETF,
      currency: defaultPortfolio?.currency || reportingCurrency || 'EUR',
      targetAllocation: 3
    });
    setShowAddPlannedAsset(true);
  };

  const handleAddPlannedAsset = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanSymbol = newPlannedAsset.symbol.trim().toUpperCase();
    if (!cleanSymbol) return;
    const cleanIsin = newPlannedAsset.isin.trim().toUpperCase();
    const cleanName = newPlannedAsset.name.trim() || cleanSymbol;
    const cleanTarget = Math.max(0, Math.min(100, Math.round((Number(newPlannedAsset.targetAllocation) || 0) * 10) / 10));
    const targetPortfolioId = newPlannedAsset.portfolioId || (activePortfolioId !== 'all' ? activePortfolioId : portfolios[0]?.id);

    setPortfolios(prev => prev.map(p => {
      if (p.id !== targetPortfolioId) return p;
      const existingIdx = p.assets.findIndex(a => (a.symbol || '').trim().toUpperCase() === cleanSymbol);
      if (existingIdx >= 0) {
        const updatedAssets = [...p.assets];
        updatedAssets[existingIdx] = {
          ...updatedAssets[existingIdx],
          targetAllocation: cleanTarget,
          ...(cleanIsin ? { isin: cleanIsin } : {})
        };
        return { ...p, assets: updatedAssets };
      }
      const plannedAsset: Asset = {
        id: generateId(),
        symbol: cleanSymbol,
        name: cleanName,
        type: newPlannedAsset.type,
        quantity: 0,
        buyPrice: 0,
        currentPrice: 0,
        previousClose: 0,
        currency: newPlannedAsset.currency || p.currency || 'EUR',
        realizedPL: 0,
        targetAllocation: cleanTarget,
        ...(cleanIsin ? { isin: cleanIsin } : {})
      };
      return { ...p, assets: [...p.assets, plannedAsset] };
    }));

    setShowAddPlannedAsset(false);
  };

  const handleRemovePlannedAsset = (assetId: string) => {
    setPortfolios(prev => prev.map(p => ({
      ...p,
      assets: p.assets.filter(a => a.id !== assetId)
    })));
  };

  const handleAddPortfolio = (e: React.FormEvent) => {
    e.preventDefault();
    if(!newPortfolioData.name) return;
    setPortfolios(prev => [...prev, { id: generateId(), name: newPortfolioData.name, description: newPortfolioData.description, currency: newPortfolioData.currency, color: newPortfolioData.color, assets: [], transactions: [] }]);
    setShowAddPortfolio(false); setNewPortfolioData({ name: '', description: '', currency: 'EUR', color: 'bg-slate-500' });
  };

  const handleExportData = () => {
    // Gather all portfolio target allocations and selections
    const targetsAndSelections: Record<string, {
      targets?: any;
      selectedMacro?: any;
      selectedMicro?: any;
    }> = {};

    const keysToBackup = [...portfolios.map(p => p.id), 'all'];

    keysToBackup.forEach(id => {
      const targetsKey = `investai_asset_class_targets_${id}`;
      const selectedMacroKey = `investai_selected_macro_types_${id}`;
      const selectedMicroKey = `investai_selected_micro_assets_${id}`;

      try {
        const savedTargets = localStorage.getItem(targetsKey);
        const savedSelectedMacro = localStorage.getItem(selectedMacroKey);
        const savedSelectedMicro = localStorage.getItem(selectedMicroKey);

        targetsAndSelections[id] = {
          targets: savedTargets ? JSON.parse(savedTargets) : undefined,
          selectedMacro: savedSelectedMacro ? JSON.parse(savedSelectedMacro) : undefined,
          selectedMicro: savedSelectedMicro ? JSON.parse(savedSelectedMicro) : undefined,
        };
      } catch (e) {
        console.error(`Failed to export targets/selections for portfolio ${id}`, e);
      }
    });

    let legacyTargets = null;
    try {
      const saved = localStorage.getItem('investai_asset_class_targets');
      if (saved) legacyTargets = JSON.parse(saved);
    } catch (e) {}

    const exportPayload = {
      version: 2,
      portfolios,
      targetsAndSelections,
      legacyTargets
    };

    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(JSON.stringify(exportPayload, null, 2));
    const linkElement = document.createElement('a'); 
    linkElement.setAttribute('href', dataUri); 
    linkElement.setAttribute('download', `investai_backup_${new Date().toISOString().split('T')[0]}.json`); 
    linkElement.click();
  };

  const generateCSV = () => {
     let csvContent = "data:text/csv;charset=utf-8,";
     csvContent += "SITUATIE ACTIVE CURENTE\n";
     csvContent += "Portofoliu,Activ,Simbol,Tip,Cantitate,Pret Mediu,Pret Piata,Valoare,Valuta,P/L Nerealizat\n";
     openAssets.forEach(a => { const pName = portfolios.find(p => p.assets.some(pa => pa.id === a.id))?.name || "N/A"; const val = a.quantity * a.currentPrice; const pl = val - (a.quantity * a.buyPrice); csvContent += `${pName},${a.name},${a.symbol},${a.type},${a.quantity},${a.buyPrice},${a.currentPrice},${val},${a.currency},${pl}\n`; });
     csvContent += "\nISTORIC TRANZACTII\n";
     csvContent += "Portofoliu,Data,Tip,Simbol,Cantitate,Pret,Suma,Taxe,Valuta,Descriere\n";
     activeTransactions.forEach(t => { const pName = portfolios.find(p => p.transactions.some(pt => pt.id === t.id))?.name || "N/A"; csvContent += `${pName},${t.date},${t.type},${t.symbol || '-'},${t.quantity || ''},${t.price || ''},${t.amount},${t.tax || 0},${t.currency},"${t.description}"\n`; });
     const encodedUri = encodeURI(csvContent), link = document.createElement("a"); link.setAttribute("href", encodedUri); link.setAttribute("download", `investai_raport_${new Date().toISOString().slice(0,10)}.csv`); document.body.appendChild(link); link.click(); document.body.removeChild(link);
  };

  // --- EXPORT FLUXURI CASH (CSV) ---
  const handleExportCashFlowCSV = () => {
    if (cashFlowHistory.length === 0) {
      alert("Nu există fluxuri de numerar (depuneri sau retrageri) înregistrate pentru a fi exportate.");
      return;
    }

    const contextName = activePortfolioId === 'all' 
      ? 'Toate Portofoliile' 
      : (activePortfolios[0]?.name || 'Portofoliu');

    let totalDepositsRon = 0;
    let totalWithdrawalsRon = 0;
    let totalDepositsEur = 0;
    let totalWithdrawalsEur = 0;

    const rows = cashFlowHistory.map(tx => {
      const isDeposit = tx.type === TransactionType.DEPOSIT;
      const parentP = portfolios.find(p => p.transactions.some(pt => pt.id === tx.id));
      const pName = parentP?.name || '-';
      const amountNum = Number(tx.amount) || 0;
      const ronVal = convertValue(amountNum, tx.currency, 'RON');
      const eurVal = convertValue(amountNum, tx.currency, 'EUR');

      if (isDeposit) {
        totalDepositsRon += ronVal;
        totalDepositsEur += eurVal;
      } else {
        totalWithdrawalsRon += ronVal;
        totalWithdrawalsEur += eurVal;
      }

      const cleanDesc = (tx.description || '').replace(/"/g, '""');
      const cleanPName = pName.replace(/"/g, '""');

      return [
        tx.date,
        `"${cleanPName}"`,
        `"${tx.type}"`,
        isDeposit ? '+' : '-',
        (isDeposit ? amountNum : -amountNum).toFixed(2),
        tx.currency,
        (isDeposit ? ronVal : -ronVal).toFixed(2),
        (isDeposit ? eurVal : -eurVal).toFixed(2),
        `"${cleanDesc}"`
      ].join(';');
    });

    const netRon = totalDepositsRon - totalWithdrawalsRon;
    const netEur = totalDepositsEur - totalWithdrawalsEur;

    // UTF-8 BOM (\uFEFF) ensures Excel automatically recognises Romanian diacritics
    let csvContent = '\uFEFF';
    csvContent += 'sep=;\n'; // Explicitly set semicolon delimiter for Excel
    csvContent += `RAPORT MANAGEMENT FLUXURI CASH - WEALTHFOLIO\n`;
    csvContent += `Portofoliu:;${contextName}\n`;
    csvContent += `Data export:;${new Date().toLocaleDateString('ro-RO')} ${new Date().toLocaleTimeString('ro-RO')}\n`;
    csvContent += `Numar operatiuni:;${cashFlowHistory.length}\n`;
    csvContent += `Total Depuneri:;${totalDepositsRon.toFixed(2)} RON;≈ ${totalDepositsEur.toFixed(2)} EUR\n`;
    csvContent += `Total Retrageri:;${totalWithdrawalsRon.toFixed(2)} RON;≈ ${totalWithdrawalsEur.toFixed(2)} EUR\n`;
    csvContent += `Flux Net (Depus - Retras):;${netRon.toFixed(2)} RON;≈ ${netEur.toFixed(2)} EUR\n\n`;
    csvContent += `Data;Portofoliu;Tip Tranzactie;Semn;Suma Valuta;Valuta;Echivalent RON;Echivalent EUR;Descriere / Sursa\n`;
    csvContent += rows.join('\n') + '\n';
    csvContent += `\n`;
    csvContent += `TOTAL DEPUNERI (+);;;;${totalDepositsRon.toFixed(2)};RON;${totalDepositsRon.toFixed(2)};${totalDepositsEur.toFixed(2)};\n`;
    csvContent += `TOTAL RETRAGERI (-);;;;${totalWithdrawalsRon.toFixed(2)};RON;${totalWithdrawalsRon.toFixed(2)};${totalWithdrawalsEur.toFixed(2)};\n`;
    csvContent += `FLUX NET (CAPITAL INVESTIT);;;;${netRon.toFixed(2)};RON;${netRon.toFixed(2)};${netEur.toFixed(2)};\n`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const safeName = contextName.toLowerCase().replace(/[^a-z0-9]/gi, '_');
    const dateStr = new Date().toISOString().slice(0, 10);
    link.setAttribute('href', url);
    link.setAttribute('download', `fluxuri_cash_${safeName}_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // --- EXPORT FLUXURI CASH (EXCEL XML) ---
  const handleExportCashFlowExcel = () => {
    if (cashFlowHistory.length === 0) {
      alert("Nu există fluxuri de numerar (depuneri sau retrageri) înregistrate pentru a fi exportate.");
      return;
    }

    const contextName = activePortfolioId === 'all' 
      ? 'Toate Portofoliile' 
      : (activePortfolios[0]?.name || 'Portofoliu');

    const escapeXml = (unsafe: string | number | undefined | null): string => {
      if (unsafe === undefined || unsafe === null) return '';
      return String(unsafe)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    };

    let totalDepositsRon = 0;
    let totalWithdrawalsRon = 0;
    let totalDepositsEur = 0;
    let totalWithdrawalsEur = 0;

    const dataRowsXml = cashFlowHistory.map(tx => {
      const isDeposit = tx.type === TransactionType.DEPOSIT;
      const parentP = portfolios.find(p => p.transactions.some(pt => pt.id === tx.id));
      const pName = parentP?.name || '-';
      const amountNum = Number(tx.amount) || 0;
      const ronVal = convertValue(amountNum, tx.currency, 'RON');
      const eurVal = convertValue(amountNum, tx.currency, 'EUR');

      if (isDeposit) {
        totalDepositsRon += ronVal;
        totalDepositsEur += eurVal;
      } else {
        totalWithdrawalsRon += ronVal;
        totalWithdrawalsEur += eurVal;
      }

      return `
    <Row ss:Height="20">
      <Cell ss:StyleID="DateCell"><Data ss:Type="String">${escapeXml(tx.date)}</Data></Cell>
      <Cell ss:StyleID="Default"><Data ss:Type="String">${escapeXml(pName)}</Data></Cell>
      <Cell ss:StyleID="${isDeposit ? 'DepositBadge' : 'WithdrawalBadge'}"><Data ss:Type="String">${escapeXml(tx.type)}</Data></Cell>
      <Cell ss:StyleID="CenterCell"><Data ss:Type="String">${isDeposit ? '+' : '-'}</Data></Cell>
      <Cell ss:StyleID="${isDeposit ? 'DepositVal' : 'WithdrawalVal'}"><Data ss:Type="Number">${(isDeposit ? amountNum : -amountNum).toFixed(2)}</Data></Cell>
      <Cell ss:StyleID="CenterCell"><Data ss:Type="String">${escapeXml(tx.currency)}</Data></Cell>
      <Cell ss:StyleID="${isDeposit ? 'NumberPos' : 'NumberNeg'}"><Data ss:Type="Number">${(isDeposit ? ronVal : -ronVal).toFixed(2)}</Data></Cell>
      <Cell ss:StyleID="${isDeposit ? 'NumberPos' : 'NumberNeg'}"><Data ss:Type="Number">${(isDeposit ? eurVal : -eurVal).toFixed(2)}</Data></Cell>
      <Cell ss:StyleID="Default"><Data ss:Type="String">${escapeXml(tx.description || '-')}</Data></Cell>
    </Row>`;
    }).join('');

    const netRon = totalDepositsRon - totalWithdrawalsRon;
    const netEur = totalDepositsEur - totalWithdrawalsEur;

    const excelXml = `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 <DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">
  <Title>Management Fluxuri Cash - WealthFolio</Title>
  <Author>WealthFolio</Author>
  <Created>${new Date().toISOString()}</Created>
 </DocumentProperties>
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="10" ss:Color="#1e293b"/>
  </Style>
  <Style ss:ID="Title">
   <Alignment ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="14" ss:Bold="1" ss:Color="#0f172a"/>
  </Style>
  <Style ss:ID="MetaLabel">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="10" ss:Bold="1" ss:Color="#475569"/>
  </Style>
  <Style ss:ID="MetaVal">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="10" ss:Color="#0f172a"/>
  </Style>
  <Style ss:ID="Header">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#0f172a"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#0f172a"/>
   </Borders>
   <Font ss:FontName="Segoe UI" ss:Size="10" ss:Bold="1" ss:Color="#ffffff"/>
   <Interior ss:Color="#0f172a" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="DateCell">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="10" ss:Color="#334155"/>
  </Style>
  <Style ss:ID="CenterCell">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="10" ss:Color="#334155"/>
  </Style>
  <Style ss:ID="DepositBadge">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="10" ss:Bold="1" ss:Color="#047857"/>
   <Interior ss:Color="#d1fae5" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="WithdrawalBadge">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="10" ss:Bold="1" ss:Color="#be123c"/>
   <Interior ss:Color="#ffe4e6" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="DepositVal">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="10" ss:Bold="1" ss:Color="#047857"/>
   <NumberFormat ss:Format="#,##0.00"/>
  </Style>
  <Style ss:ID="WithdrawalVal">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="10" ss:Bold="1" ss:Color="#be123c"/>
   <NumberFormat ss:Format="#,##0.00"/>
  </Style>
  <Style ss:ID="NumberPos">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="10" ss:Color="#047857"/>
   <NumberFormat ss:Format="#,##0.00"/>
  </Style>
  <Style ss:ID="NumberNeg">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="10" ss:Color="#be123c"/>
   <NumberFormat ss:Format="#,##0.00"/>
  </Style>
  <Style ss:ID="TotalHeader">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="10" ss:Bold="1" ss:Color="#0f172a"/>
   <Borders>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#94a3b8"/>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#94a3b8"/>
   </Borders>
   <Interior ss:Color="#f8fafc" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="TotalVal">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="10" ss:Bold="1" ss:Color="#0f172a"/>
   <NumberFormat ss:Format="#,##0.00"/>
   <Borders>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#94a3b8"/>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#94a3b8"/>
   </Borders>
   <Interior ss:Color="#f8fafc" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="NetHeader">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="11" ss:Bold="1" ss:Color="#0f172a"/>
   <Borders>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#0f172a"/>
    <Border ss:Position="Bottom" ss:LineStyle="Double" ss:Weight="3" ss:Color="#0f172a"/>
   </Borders>
   <Interior ss:Color="#e2e8f0" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="NetVal">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Font ss:FontName="Segoe UI" ss:Size="11" ss:Bold="1" ss:Color="${netRon >= 0 ? '#047857' : '#be123c'}"/>
   <NumberFormat ss:Format="#,##0.00"/>
   <Borders>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#0f172a"/>
    <Border ss:Position="Bottom" ss:LineStyle="Double" ss:Weight="3" ss:Color="#0f172a"/>
   </Borders>
   <Interior ss:Color="#e2e8f0" ss:Pattern="Solid"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Fluxuri Cash">
  <Table>
   <Column ss:Width="95"/>
   <Column ss:Width="130"/>
   <Column ss:Width="110"/>
   <Column ss:Width="50"/>
   <Column ss:Width="110"/>
   <Column ss:Width="65"/>
   <Column ss:Width="120"/>
   <Column ss:Width="120"/>
   <Column ss:Width="240"/>

   <Row ss:Height="26">
    <Cell ss:MergeAcross="8" ss:StyleID="Title"><Data ss:Type="String">WealthFolio - Management Fluxuri Cash (Depuneri &amp; Retrageri)</Data></Cell>
   </Row>
   <Row ss:Height="18">
    <Cell ss:StyleID="MetaLabel"><Data ss:Type="String">Portofoliu:</Data></Cell>
    <Cell ss:MergeAcross="7" ss:StyleID="MetaVal"><Data ss:Type="String">${escapeXml(contextName)}</Data></Cell>
   </Row>
   <Row ss:Height="18">
    <Cell ss:StyleID="MetaLabel"><Data ss:Type="String">Data exportului:</Data></Cell>
    <Cell ss:MergeAcross="7" ss:StyleID="MetaVal"><Data ss:Type="String">${escapeXml(new Date().toLocaleDateString('ro-RO'))} ${escapeXml(new Date().toLocaleTimeString('ro-RO'))}</Data></Cell>
   </Row>
   <Row ss:Height="18">
    <Cell ss:StyleID="MetaLabel"><Data ss:Type="String">Tranzacții:</Data></Cell>
    <Cell ss:MergeAcross="7" ss:StyleID="MetaVal"><Data ss:Type="String">${cashFlowHistory.length} operațiuni înregistrate</Data></Cell>
   </Row>
   <Row ss:Height="10"></Row>

   <Row ss:Height="24">
    <Cell ss:StyleID="Header"><Data ss:Type="String">Data</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Portofoliu</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Tip Tranzacție</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Semn</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Sumă Valută</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Valută</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Echivalent RON</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Echivalent EUR</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Descriere / Sursă</Data></Cell>
   </Row>

   ${dataRowsXml}

   <Row ss:Height="10"></Row>
   <Row ss:Height="22">
    <Cell ss:MergeAcross="5" ss:StyleID="TotalHeader"><Data ss:Type="String">TOTAL DEPUNERI (+):</Data></Cell>
    <Cell ss:StyleID="TotalVal"><Data ss:Type="Number">${totalDepositsRon.toFixed(2)}</Data></Cell>
    <Cell ss:StyleID="TotalVal"><Data ss:Type="Number">${totalDepositsEur.toFixed(2)}</Data></Cell>
    <Cell ss:StyleID="TotalHeader"><Data ss:Type="String"></Data></Cell>
   </Row>
   <Row ss:Height="22">
    <Cell ss:MergeAcross="5" ss:StyleID="TotalHeader"><Data ss:Type="String">TOTAL RETRAGERI (-):</Data></Cell>
    <Cell ss:StyleID="TotalVal"><Data ss:Type="Number">${totalWithdrawalsRon.toFixed(2)}</Data></Cell>
    <Cell ss:StyleID="TotalVal"><Data ss:Type="Number">${totalWithdrawalsEur.toFixed(2)}</Data></Cell>
    <Cell ss:StyleID="TotalHeader"><Data ss:Type="String"></Data></Cell>
   </Row>
   <Row ss:Height="24">
    <Cell ss:MergeAcross="5" ss:StyleID="NetHeader"><Data ss:Type="String">FLUX NET (CAPITAL INVESTIT):</Data></Cell>
    <Cell ss:StyleID="NetVal"><Data ss:Type="Number">${netRon.toFixed(2)}</Data></Cell>
    <Cell ss:StyleID="NetVal"><Data ss:Type="Number">${netEur.toFixed(2)}</Data></Cell>
    <Cell ss:StyleID="NetHeader"><Data ss:Type="String"></Data></Cell>
   </Row>
  </Table>
 </Worksheet>
</Workbook>`;

    const blob = new Blob([excelXml], { type: 'application/vnd.ms-excel;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const safeName = contextName.toLowerCase().replace(/[^a-z0-9]/gi, '_');
    const dateStr = new Date().toISOString().slice(0, 10);
    link.setAttribute('href', url);
    link.setAttribute('download', `fluxuri_cash_${safeName}_${dateStr}.xls`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrintReport = () => {
    const printWindow = window.open('', '', 'height=800,width=1000');
    if (!printWindow) return;
    let html = `<html><head><title>Raport Portofoliu - InvestAI</title><style>body{font-family:sans-serif;color:#333;}table{width:100%;border-collapse:collapse;margin-bottom:20px;font-size:12px;}th,td{border:1px solid #ddd;padding:8px;text-align:left;}th{background-color:#f2f2f2;}.header{margin-bottom:30px;}.summary{display:flex;gap:20px;margin-bottom:20px;}.card{background:#f9f9f9;padding:15px;border-radius:5px;flex:1;}</style></head><body><div class="header"><h1>InvestAI - Raport Portofoliu</h1><p>Generat la: ${new Date().toLocaleDateString('ro-RO')}</p></div><div class="summary"><div class="card"><strong>Valoare Netă:</strong><br>${macroStats.netWorth.toFixed(2)} ${reportingCurrency}</div><div class="card"><strong>Investiție Netă:</strong><br>${macroStats.netInvestedCapital.toFixed(2)} ${reportingCurrency}</div><div class="card"><strong>Cash:</strong><br>${macroStats.cashBalance.toFixed(2)} ${reportingCurrency}</div></div><h2>Dețineri Actuale</h2><table><thead><tr><th>Portofoliu</th><th>Simbol</th><th>Nume</th><th>Cantitate</th><th>Preț Mediu</th><th>Preț Piață</th><th>Valoare</th></tr></thead><tbody>`;
    openAssets.forEach(a => { const pName = portfolios.find(p => p.assets.some(pa => pa.id === a.id))?.name || "-"; const val = a.quantity * a.currentPrice; html += `<tr><td>${pName}</td><td>${a.symbol}</td><td>${a.name}</td><td>${a.quantity}</td><td>${a.buyPrice.toFixed(2)}</td><td>${a.currentPrice.toFixed(2)}</td><td>${val.toFixed(2)} ${a.currency}</td></tr>`; });
    html += `</tbody></table><h2>Istoric Recente</h2><table><thead><tr><th>Data</th><th>Tip</th><th>Simbol</th><th>Suma</th><th>Taxe</th></tr></thead><tbody>`;
    activeTransactions.slice().sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 50).forEach(t => { html += `<tr><td>${t.date}</td><td>${t.type}</td><td>${t.symbol || '-'}</td><td>${t.amount.toFixed(2)} ${t.currency}</td><td>${(t.tax || 0).toFixed(2)}</td></tr>`; });
    html += `</tbody></table><p style="font-size:10px">* Se afișează ultimele 50 tranzacții.</p></body></html>`;
    printWindow.document.write(html); printWindow.document.close(); printWindow.focus(); setTimeout(() => { printWindow.print(); printWindow.close(); }, 500);
  };

  const handleImportData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      fileReader.readAsText(event.target.files[0], "UTF-8");
      fileReader.onload = (e) => { 
        if (e.target?.result) { 
          try { 
            const parsedData = JSON.parse(e.target.result as string); 
            
            // Check if it's the wrapped backup format (v2)
            if (parsedData && parsedData.version === 2 && Array.isArray(parsedData.portfolios)) {
              // 1. Restore targets and selections to localStorage
              if (parsedData.targetsAndSelections) {
                Object.entries(parsedData.targetsAndSelections).forEach(([id, data]: [string, any]) => {
                  if (data.targets) {
                    localStorage.setItem(`investai_asset_class_targets_${id}`, JSON.stringify(data.targets));
                  }
                  if (data.selectedMacro) {
                    localStorage.setItem(`investai_selected_macro_types_${id}`, JSON.stringify(data.selectedMacro));
                  }
                  if (data.selectedMicro) {
                    localStorage.setItem(`investai_selected_micro_assets_${id}`, JSON.stringify(data.selectedMicro));
                  }
                });
              }

              // Also restore legacy targets if present
              if (parsedData.legacyTargets) {
                localStorage.setItem('investai_asset_class_targets', JSON.stringify(parsedData.legacyTargets));
              }

              const importedPortfolios: Portfolio[] = parsedData.portfolios;
              const shouldMerge = confirm(
                "Fișierul JSON a fost citit.\n\nDoriți să COMBINAȚI (Merge) datele din fișier cu portofoliul actual pentru a păstra activele adăugate recent (ex: VWCE.DE)?\n\n- Apasă [OK] pentru Combinare Inteligentă (Merge - Recomandat)\n- Apasă [Cancel] pentru Înlocuire Totală (Replace)"
              );

              if (shouldMerge && portfolios.length > 0) {
                // Perform smart merge
                const mergedPortfolios = importedPortfolios.map((impP) => {
                  const existingP = portfolios.find((p) => p.id === impP.id);
                  if (!existingP) return impP;

                  // Merge assets (by id or symbol)
                  const assetMap = new Map<string, any>();
                  impP.assets.forEach((a) => assetMap.set(a.id, a));
                  existingP.assets.forEach((a) => {
                    if (!assetMap.has(a.id)) {
                      assetMap.set(a.id, a);
                    }
                  });

                  // Merge transactions (by id)
                  const txMap = new Map<string, any>();
                  impP.transactions.forEach((t) => txMap.set(t.id, t));
                  existingP.transactions.forEach((t) => {
                    if (!txMap.has(t.id)) {
                      txMap.set(t.id, t);
                    }
                  });

                  return {
                    ...impP,
                    assets: Array.from(assetMap.values()),
                    transactions: Array.from(txMap.values())
                  };
                });

                // Keep any portfolios that exist locally but not in imported backup
                portfolios.forEach((p) => {
                  if (!mergedPortfolios.some((mp) => mp.id === p.id)) {
                    mergedPortfolios.push(p);
                  }
                });

                setPortfolios(mergedPortfolios);
                setShowSettings(false);
                alert("Datele au fost combinate (merge) cu succes fără a pierde activele adăugate recent!");
              } else {
                // Replace completely
                setPortfolios(importedPortfolios);
                setShowSettings(false);
                alert("Baza de date, alocările țintă și selecțiile au fost restaurate cu succes!");
              }
            } 
            // Backward compatibility: flat array of portfolios
            else if (Array.isArray(parsedData) && parsedData[0]?.id && parsedData[0]?.assets) { 
              setPortfolios(parsedData); 
              setShowSettings(false); 
              alert("Baza de date a fost importată cu succes (format vechi, fără alocări țintă și selecții)!");
            } else {
              alert("Format fișier invalid");
            }
          } catch (error) { 
            alert("Eroare la importul JSON: " + (error as Error).message); 
          } 
        } 
      };
    }
  };
  
  const handleHardReset = () => { if (confirm("ATENȚIE: Această acțiune va șterge TOATE portofoliile!")) { setPortfolios(INITIAL_PORTFOLIOS); localStorage.removeItem('investai_data'); setShowSettings(false); } };

  const totalPL = macroStats.totalUnrealizedPL + macroStats.totalRealizedPL, roiSimple = macroStats.netInvestedCapital > 0 ? ((macroStats.netWorth - macroStats.netInvestedCapital) / macroStats.netInvestedCapital) * 100 : 0, tnrWeight = macroStats.netWorth > 0 ? (totalPL / macroStats.netWorth) * 100 : 0;
  const totalClosedRealizedPL = useMemo(() => { return closedAssets.reduce((acc, asset) => { return acc + (asset.id === 'virtual-broker-interest' ? asset.realizedPL || 0 : convertValue(asset.realizedPL || 0, asset.currency, reportingCurrency)); }, 0); }, [closedAssets, reportingCurrency, liveRates]); 
  const renderTrendIcon = (trend: number) => { if (trend > 0) return <ArrowUpRight size={14} className="text-emerald-400" />; if (trend < 0) return <ArrowDownRight size={14} className="text-rose-400" />; return <Minus size={14} className="text-slate-500" />; };

  if (authLoading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-emerald-500"><Loader2 className="animate-spin" size={48} /></div>;
  if (!user) return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 overflow-x-hidden">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl text-center">
        <div className="bg-gradient-to-tr from-emerald-500 to-teal-400 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <LayoutDashboard size={32} className="text-slate-900" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">WealthFolio</h1>
        <p className="text-slate-400 mb-8">Tracker avansat pentru portofoliul tău de investiții.</p>
        
        {auth ? (
          <button onClick={handleGoogleLogin} className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Autentificare cu Google
          </button>
        ) : (
          <div className="space-y-4">
            <div className="bg-amber-500/10 border border-amber-500/20 text-amber-400 p-3 rounded-lg text-xs leading-relaxed text-left">
              Serviciul Firebase Cloud nu este configurat. Datele tale vor fi salvate local în siguranță pe acest dispozitiv.
            </div>
            <button onClick={handleEnterOfflineMode} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-emerald-900/20">
              <LayoutDashboard size={20} />
              Intră în Modul Local (Offline)
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 w-full overflow-x-hidden">
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-40 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-center justify-between h-16"><div className="flex items-center gap-2"><div className="bg-gradient-to-tr from-emerald-500 to-teal-400 p-2 rounded-lg shrink-0"><LayoutDashboard size={20} className="text-slate-900" /></div><span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 hidden sm:inline">WealthFolio</span><span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 sm:hidden">InvestAI</span></div><div className="hidden md:flex items-center gap-4 bg-slate-900/50 px-4 py-1.5 rounded-full border border-slate-800 shadow-sm cursor-pointer hover:border-slate-600 transition-colors group relative" onClick={() => setShowRateEditor(true)}><div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity"><div className="bg-blue-600 rounded-full p-1"><Edit3 size={10} className="text-white"/></div></div><div className="flex items-center gap-2" title="Curs valutar oficial (Frankfurter/ECB)"><span className="text-xs font-bold text-slate-500 tracking-wide">EUR/RON</span><span className={`text-sm font-mono font-medium ${liveRates.trends.eur > 0 ? 'text-emerald-400' : liveRates.trends.eur < 0 ? 'text-rose-400' : 'text-slate-200'}`}>{liveRates.eur.toFixed(4)}</span>{renderTrendIcon(liveRates.trends.eur)}</div><div className="w-px h-4 bg-slate-700 mx-1"></div><div className="flex items-center gap-2" title="Curs valutar oficial (Frankfurter/ECB)"><span className="text-xs font-bold text-slate-500 tracking-wide">USD/RON</span><span className={`text-sm font-mono font-medium ${liveRates.trends.usd > 0 ? 'text-emerald-400' : liveRates.trends.usd < 0 ? 'text-rose-400' : 'text-slate-200'}`}>{liveRates.usd.toFixed(4)}</span>{renderTrendIcon(liveRates.trends.usd)}</div><div className="w-px h-4 bg-slate-700 mx-1"></div><div className="flex items-center gap-2" title="Curs valutar oficial (Frankfurter/ECB)"><span className="text-xs font-bold text-slate-500 tracking-wide">EUR/USD</span><span className={`text-sm font-mono font-medium ${liveRates.trends.eurUsd > 0 ? 'text-emerald-400' : liveRates.trends.eurUsd < 0 ? 'text-rose-400' : 'text-slate-200'}`}>{liveRates.eurUsd.toFixed(4)}</span>{renderTrendIcon(liveRates.trends.eurUsd)}</div></div><div className="flex items-center gap-1.5 sm:gap-4"><select value={activePortfolioId} onChange={(e) => setActivePortfolioId(e.target.value)} className="bg-slate-900 border border-slate-700 rounded-lg py-1.5 px-2 sm:px-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none max-w-[90px] sm:max-w-none truncate"><option value="all">Toate</option>{portfolios.map(p => (<option key={p.id} value={p.id}>{p.name}</option>))}</select><button onClick={() => setShowAddPortfolio(true)} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 transition-colors hidden sm:block"><FolderPlus size={20} /></button><button onClick={handleRefreshPrices} disabled={isRefreshing} className={`p-2 hover:bg-slate-800 rounded-lg transition-colors ${isRefreshing ? 'animate-spin text-emerald-400 cursor-not-allowed' : 'text-slate-400 hover:text-emerald-400'}`} title="Actualizează Prețuri"><RefreshCw size={20} /></button><button onClick={() => setShowSettings(true)} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-blue-400 transition-colors" title="Setări & Backup"><Settings size={20} /></button><div className="flex items-center gap-2 sm:ml-2 sm:pl-4 sm:border-l border-slate-700">{user.photoURL ? (<img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full border border-slate-600 hidden sm:block" />) : (<div className="w-8 h-8 rounded-full bg-emerald-600 items-center justify-center text-white text-xs font-bold hidden sm:flex">{user.displayName ? user.displayName[0] : 'U'}</div>)}<button onClick={handleLogout} className="text-slate-400 hover:text-rose-400 transition-colors p-1"><LogOut size={18} /></button></div>{activePortfolioId !== 'all' && (<button onClick={() => { setEditingTransaction(null); setPrefillTransaction(null); setTransactionAllowedTypes(undefined); setShowTransactionForm(true); }} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-emerald-900/20 shrink-0"><PlusCircle size={18} /><span className="hidden sm:inline">Tranzacție</span></button>)}</div></div></div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
           <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl relative overflow-hidden group hover:border-slate-700 transition-colors">
             <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity"><Wallet size={48} /></div>
             <p className="text-slate-400 text-xs font-medium mb-1">Valoare Netă (Net Worth)</p>
             <h3 className="text-xl font-bold text-white">
               {macroStats.netWorth.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-sm font-normal text-slate-500 ml-1">{reportingCurrency}</span>
             </h3>
             {reportingCurrency === 'RON' && (
               <p className="text-xs text-slate-400 font-normal">
                 ≈ {convertValue(macroStats.netWorth, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
               </p>
             )}
             <div className={`text-xs font-medium flex items-center gap-1 mt-1 ${macroStats.totalDailyChange >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
               {macroStats.totalDailyChange >= 0 ? <TrendingUp size={12}/> : <TrendingDown size={12}/>}
               {macroStats.totalDailyChange >= 0 ? '+' : ''}{macroStats.totalDailyChange.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {reportingCurrency} 
               <span className="opacity-80">({macroStats.totalDailyChangePercent >= 0 ? '+' : ''}{macroStats.totalDailyChangePercent.toFixed(2)}%)</span>
             </div>
             {reportingCurrency === 'RON' && (
               <div className="text-[10px] text-slate-400 font-normal">
                 ≈ {macroStats.totalDailyChange >= 0 ? '+' : ''}{convertValue(macroStats.totalDailyChange, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
               </div>
             )}
             <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] flex items-center justify-between">
               <div className="flex items-center gap-1.5">
                 <span className="text-slate-500">include</span>
                 <span className="text-emerald-400 font-medium">{macroStats.cashBalance.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {reportingCurrency}</span>
                 <span className="text-slate-500">cash</span>
               </div>
               {reportingCurrency === 'RON' && (
                 <span className="text-slate-400 font-normal">≈ {convertValue(macroStats.cashBalance, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</span>
               )}
             </div>
           </div>
           
           <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
             <div className="flex justify-between items-start">
               <div>
                 <p className="text-slate-400 text-xs font-medium mb-1">Investiție Netă (Capital)</p>
                 <h3 className="text-xl font-bold text-slate-200">
                   {macroStats.netInvestedCapital.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                   <span className="text-sm font-normal opacity-70 ml-1">{reportingCurrency}</span>
                 </h3>
                 {reportingCurrency === 'RON' && (
                   <p className="text-xs text-slate-400 font-normal mt-0.5">
                     ≈ {convertValue(macroStats.netInvestedCapital, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                   </p>
                 )}
               </div>
               <div className="bg-slate-800 p-1.5 rounded-lg"><Landmark size={18} className="text-slate-400"/></div>
             </div>
           </div>

           <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl"><div className="flex justify-between items-start"><div><p className="text-slate-400 text-xs font-medium mb-1">XIRR (Randament Anualizat)</p><h3 className={`text-xl font-bold ${macroStats.xirr && macroStats.xirr >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{macroStats.xirr ? `${macroStats.xirr.toFixed(2)}%` : 'N/A'}</h3><p className="text-[10px] text-slate-500 mt-0.5">Money-weighted annual return (MWRR)</p></div><div className="bg-slate-800 p-1.5 rounded-lg"><Percent size={18} className="text-emerald-500"/></div></div></div>
           <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl"><div className="flex justify-between items-start"><div><p className="text-slate-400 text-xs font-medium mb-1">CAGR (Compus Anualizat)</p><h3 className={`text-xl font-bold ${macroStats.cagr && macroStats.cagr >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{macroStats.cagr !== null ? `${macroStats.cagr.toFixed(2)}%` : 'N/A'}</h3><p className="text-[10px] text-slate-500 mt-0.5">Compound Annual Growth Rate</p></div><div className="bg-slate-800 p-1.5 rounded-lg"><TrendingUp size={18} className="text-emerald-500"/></div></div></div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
              <div>
                <p className="text-slate-400 text-xs font-medium mb-2">Expunere Valutară (Active + Cash)</p>
                <div className="flex h-2 w-full rounded-full overflow-hidden bg-slate-800">
                  {Object.entries(macroStats.fxExposure).sort((a,b) => (b[1] as number) - (a[1] as number)).map(([curr, val], idx) => { 
                    const percent = macroStats.netWorth > 0 ? ((val as number) / macroStats.netWorth) * 100 : 0; 
                    const colors = ['bg-blue-500', 'bg-emerald-500', 'bg-purple-500', 'bg-amber-500']; 
                    if (Math.round(percent) <= 0) return null; 
                    return (<div key={curr} style={{ width: `${percent}%` }} className={`${colors[idx % colors.length]}`} />); 
                  })}
                </div>
              </div>
              <div className="flex justify-between items-start gap-1 pt-2">
                {Object.entries(macroStats.fxExposure).sort((a,b) => (b[1] as number) - (a[1] as number)).slice(0, 3).map(([curr, val], idx, arr) => {
                  const percent = macroStats.netWorth > 0 ? ((val as number) / macroStats.netWorth) * 100 : 0;
                  const nativeVal = macroStats.fxExposureNative?.[curr] ?? (val as number);
                  const alignClass = idx === 0 ? 'text-left items-start' : idx === arr.length - 1 ? 'text-right items-end' : 'text-center items-center';
                  return (
                    <div key={curr} className={`flex flex-col ${alignClass} min-w-0`} title={`${curr}: ${percent.toFixed(1)}% | ${nativeVal.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${curr}`}>
                      <span className="text-[10px] font-semibold text-slate-300">
                        {curr}: {percent.toFixed(0)}%
                      </span>
                      <span className="text-[10px] font-mono text-slate-200 font-medium whitespace-nowrap">
                        {nativeVal.toLocaleString('ro-RO', { maximumFractionDigits: nativeVal < 100 ? 2 : 0 })} {curr}
                      </span>
                      {curr !== reportingCurrency && (
                        <span className="text-[9px] text-slate-500 font-mono whitespace-nowrap">
                          ≈ {(val as number).toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}
                        </span>
                      )}
                      {curr === reportingCurrency && reportingCurrency === 'RON' && (
                        <span className="text-[9px] text-slate-500 font-mono whitespace-nowrap">
                          ≈ {convertValue(val as number, 'RON', 'EUR').toLocaleString('ro-RO', { maximumFractionDigits: 0 })} EUR
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
             <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex flex-col gap-1">
               <div className="flex justify-between items-center">
                 <span className="text-slate-400 text-xs">P/L Nerealizat (Hârtie)</span>
                 <span className={`font-bold font-mono ${macroStats.totalUnrealizedPL >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                   {macroStats.totalUnrealizedPL > 0 ? '+' : ''}{macroStats.totalUnrealizedPL.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {reportingCurrency}
                 </span>
               </div>
               {reportingCurrency === 'RON' && (
                 <div className="text-right text-[11px] text-slate-400">
                   ≈ {macroStats.totalUnrealizedPL > 0 ? '+' : ''}{convertValue(macroStats.totalUnrealizedPL, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                 </div>
               )}
             </div>

             <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex flex-col gap-1">
               <div className="flex justify-between items-center">
                 <span className="text-slate-400 text-xs">P/L Marcat (Realizat)</span>
                 <span className={`font-bold font-mono ${macroStats.totalRealizedPL >= 0 ? 'text-blue-400' : 'text-rose-400'}`}>
                   {macroStats.totalRealizedPL > 0 ? '+' : ''}{macroStats.totalRealizedPL.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {reportingCurrency}
                 </span>
               </div>
               {reportingCurrency === 'RON' && (
                 <div className="text-right text-[11px] text-slate-400">
                   ≈ {macroStats.totalRealizedPL > 0 ? '+' : ''}{convertValue(macroStats.totalRealizedPL, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                 </div>
               )}
             </div>

             <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex flex-col gap-1 group relative overflow-hidden">
               <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
               <div className="flex justify-between items-center">
                 <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">TNR</span>
                 <div className="flex items-center gap-2">
                   <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${totalPL >= 0 ? 'bg-emerald-900/40 text-emerald-400' : 'bg-rose-900/40 text-rose-400'}`}>
                     {totalPL > 0 ? '+' : ''}{tnrWeight.toFixed(2)}%
                   </span>
                   <span className={`font-bold font-mono ${totalPL >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                     {totalPL > 0 ? '+' : ''}{totalPL.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {reportingCurrency}
                   </span>
                 </div>
               </div>
               {reportingCurrency === 'RON' && (
                 <div className="text-right text-[11px] text-slate-400">
                   ≈ {totalPL > 0 ? '+' : ''}{convertValue(totalPL, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                 </div>
               )}
             </div>

             <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg flex justify-between items-center"><span className="text-slate-400 text-xs">ROI Simplu (All-time)</span><span className={`font-bold font-mono ${totalPL >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{roiSimple.toFixed(2)}%</span></div>
        </div>

        <div className="w-full space-y-8">
            <PortfolioEvolutionChart
              dailyHistory={portfolioHistory.daily}
              currency={reportingCurrency}
              convertValue={convertValue}
              dailyChange={macroStats.totalDailyChange}
              dailyChangePercent={macroStats.totalDailyChangePercent}
            />
            <PortfolioPerformanceChart
              dailyHistory={portfolioHistory.daily}
              benchmarkRefreshKey={benchmarkRefreshKey}
            />
            <PortfolioPeriodicReturns
              dailyHistory={portfolioHistory.daily}
              currency={reportingCurrency}
              convertValue={convertValue}
            />
            <MonthlyPLChart
              dailyHistory={portfolioHistory.daily}
              currency={reportingCurrency}
              convertValue={convertValue}
            />
            
            <div className="space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-[400px]"><h3 className="text-lg font-semibold text-white mb-4">Istoric Investiții (Depuneri)</h3><InvestmentHistoryChart portfolios={activePortfolios} currency={reportingCurrency} convertValue={convertValue} /></div>
                
                {/* Management Fluxuri Cash */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300">
                    <div className="p-6 border-b border-slate-800 flex flex-wrap gap-4 justify-between items-center bg-slate-900 cursor-pointer hover:bg-slate-800/50 transition-colors" onClick={() => setIsCashFlowExpanded(!isCashFlowExpanded)}>
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-500/20 p-2 rounded-lg shrink-0">
                          <ArrowRightLeft className="text-blue-400" size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            Management Fluxuri Cash {isCashFlowExpanded ? <ChevronUp size={20} className="text-slate-500" /> : <ChevronDown size={20} className="text-slate-500" />}
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">Control depuneri și retrageri (Capital Investit)</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 flex-wrap" onClick={(e) => e.stopPropagation()}>
                        {isCashFlowExpanded && (
                          <div className="relative">
                            <Search className="absolute left-3 top-2.5 text-slate-500" size={16} />
                            <input 
                              type="text" 
                              placeholder="Caută în flux..." 
                              className="bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-sm text-white focus:ring-1 focus:ring-emerald-500 outline-none w-40 sm:w-56" 
                              value={cashSearchTerm} 
                              onChange={(e) => setCashSearchTerm(e.target.value)} 
                            />
                          </div>
                        )}

                        {/* Export Buttons: CSV & Excel */}
                        <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800 shadow-sm">
                          <button 
                            onClick={handleExportCashFlowCSV}
                            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                            title="Descarcă toate depunerile și retragerile în format CSV (.csv)"
                          >
                            <FileText size={14} className="text-emerald-400" />
                            <span>Export CSV</span>
                          </button>
                          <div className="w-[1px] h-4 bg-slate-800"></div>
                          <button 
                            onClick={handleExportCashFlowExcel}
                            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 rounded-md transition-colors"
                            title="Descarcă toate depunerile și retragerile în format Excel (.xls)"
                          >
                            <FileSpreadsheet size={14} className="text-emerald-400" />
                            <span>Export Excel</span>
                          </button>
                        </div>

                        {!isCashFlowExpanded && (
                          <div className="text-xs font-medium text-slate-400 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
                            Click pentru vizualizare ({cashFlowHistory.length} tranzacții)
                          </div>
                        )}
                      </div>
                    </div>
                    {isCashFlowExpanded && (<div className="overflow-x-auto animate-in fade-in slide-in-from-top-2 duration-300"><table className="min-w-full text-left border-collapse"><thead className="bg-slate-950 text-slate-400 text-xs uppercase font-medium"><tr><th className="p-4 whitespace-nowrap">Data</th><th className="p-4 whitespace-nowrap">Tip Tranzacție</th><th className="p-4 whitespace-nowrap text-right">Sumă</th><th className="p-4 whitespace-nowrap">Valută</th><th className="p-4 whitespace-nowrap">Descriere / Sursă</th><th className="p-4 text-center whitespace-nowrap">Acțiuni</th></tr></thead><tbody className="divide-y divide-slate-800 text-sm">{cashFlowHistory.filter(t => { const term = cashSearchTerm.toLowerCase(); return t.description.toLowerCase().includes(term) || t.date.includes(term); }).map(tx => { const isDeposit = tx.type === TransactionType.DEPOSIT; const parentPortfolio = activePortfolios.find(p => p.transactions.some(pt => pt.id === tx.id)); return (<tr key={tx.id} className="hover:bg-slate-800/50 transition-colors group"><td className="p-4 text-slate-300 font-mono">{tx.date}</td><td className="p-4"><div className="flex items-center gap-2">{isDeposit ? <ArrowDownLeft size={14} className="text-emerald-400" /> : <ArrowUpLeft size={14} className="text-rose-400" />}<span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${isDeposit ? 'bg-emerald-900/30 text-emerald-400' : 'bg-rose-900/30 text-rose-400'}`}>{tx.type}</span></div></td><td className={`p-4 text-right font-bold font-mono ${isDeposit ? 'text-emerald-400' : 'text-rose-400'}`}><div>{isDeposit ? '+' : '-'}{Number(tx.amount).toLocaleString('ro-RO', { minimumFractionDigits: 2 })}</div>{tx.currency === 'RON' && (<div className="text-[10px] text-slate-400 font-normal">≈ {isDeposit ? '+' : '-'}{convertValue(Number(tx.amount), 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 2 })} EUR</div>)}</td><td className="p-4 text-slate-500 font-medium">{tx.currency}</td><td className="p-4 text-slate-400 truncate max-w-[200px]" title={tx.description}>{tx.description || '-'}</td><td className="p-4"><div className="flex items-center justify-center gap-2"><button onClick={(e) => { e.stopPropagation(); setEditingTransaction(tx); setShowTransactionForm(true); }} className="p-1.5 hover:bg-blue-500/10 text-blue-400 rounded-md transition-colors" title="Editează"><Pencil size={16} /></button><button onClick={(e) => { e.stopPropagation(); if (parentPortfolio) handleRequestDeleteTransaction(tx.id, parentPortfolio.id); }} className="p-1.5 hover:bg-rose-500/10 text-rose-500 rounded-md transition-colors" title="Șterge"><Trash2 size={16} /></button></div></td></tr>); })} {cashFlowHistory.length === 0 && (<tr><td colSpan={6} className="p-8 text-center text-slate-500 italic">Nu există fluxuri de cash înregistrate pentru acest context.</td></tr>)} </tbody></table></div>)}
                </div>

                {/* 1. GRAFICE EXPUNERE GEOGRAFICĂ ȘI SECTORIALĂ (LĂȚIME COMPLETĂ CA ISTORIC DEBUNERI) */}
                <div className="w-full">
                  <ExposureCharts assets={activeAssets} currency={reportingCurrency} cashBalance={macroStats.cashBalance} convertValue={convertValue} />
                </div>

                {/* 2. ALOCARE ACTIVE ADIACENT CU GENERATOR RAPORT GLOBAL ȘI CONTEXT PORTOFOLIU */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                  {/* Stânga: Alocare Active */}
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-[500px] flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2 shrink-0">
                      <PieChartIcon size={18} className="text-slate-400" /> Alocare Active
                    </h3>
                    <div className="flex-1 min-h-0">
                      <AllocationChart assets={activeAssets} currency={reportingCurrency} convertValue={convertValue} cashBalance={macroStats.cashBalance} />
                    </div>
                  </div>

                  {/* Dreapta: Generator Raport Global Portofoliu & Context Portofoliu */}
                  <div className="space-y-6 flex flex-col justify-between">
                    <AIGlobalReport 
                      contextName={aiAdvisor.contextName} 
                      activePortfolioId={activePortfolioId}
                      onOpenFullReport={() => setIsFullReportOpen(true)} 
                    />

                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Context Portofoliu</h3>
                        {activePortfolios.map(p => (
                          <div key={p.id} className="mb-4 last:mb-0">
                            <div className="flex items-center justify-between mb-2">
                              <span className={`text-xs px-2.5 py-1 rounded-full text-white font-medium ${p.color}`}>{p.name}</span>
                              <span className="text-xs text-slate-400 font-mono">{p.currency}</span>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">{p.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. ANALIZĂ MICRO-ACTIVE & OPTIMIZĂRI PORTOFOLIU (LATĂ CÂT DEȚINERI ACTUALE) */}
                <div className="w-full">
                  <ETFOverlapAnalysis assets={activeAssets} portfolios={activePortfolios} activePortfolioId={activePortfolioId} currency={reportingCurrency} convertValue={convertValue} />
                </div>

                {/* 4. CONSULTĂ EXPERT (LATĂ CÂT DEȚINERI ACTUALE, CU EXPERȚII INTEGRAȚI) */}
                <div className="w-full" ref={aiAdvisorRef}>
                  <AIConsultationChat aiAdvisor={aiAdvisor} />
                </div>

                {/* Dețineri Actuale (Nivel Micro) */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                    <div className="p-6 border-b border-slate-800 flex flex-wrap gap-4 justify-between items-center bg-slate-900">
                       <h3 className="text-lg font-bold text-white flex items-center gap-2 whitespace-nowrap"><CheckCircle2 className="text-emerald-400" size={20} /> Dețineri Actuale (Nivel Micro)</h3>
                       <div className="flex items-center gap-3">
                         <button 
                           onClick={handleRefreshPrices} 
                           disabled={isRefreshing} 
                           className="flex items-center gap-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm hover:border-emerald-500/50 disabled:opacity-50 cursor-pointer"
                           title="Actualizează toate prețurile activelor live de pe Yahoo Finance / CoinGecko"
                         >
                           <RefreshCw size={14} className={isRefreshing ? 'animate-spin text-emerald-400' : ''} />
                           <span>{isRefreshing ? 'Se actualizează prețurile...' : 'Actualizează Prețuri Live (Yahoo)'}</span>
                         </button>
                         <div className="relative"><Search className="absolute left-3 top-2.5 text-slate-500" size={16} /><input type="text" placeholder="Caută activ..." className="bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-sm text-white focus:ring-1 focus:ring-emerald-500 outline-none w-48 sm:w-64" value={assetSearchTerm} onChange={(e) => setAssetSearchTerm(e.target.value)} /></div>
                       </div>
                    </div>
                    <div className="overflow-x-auto">
                       <table className="min-w-full text-left border-collapse">
                         <thead className="bg-slate-950 text-slate-400 text-xs uppercase font-medium">
                           <tr><th className="p-4 whitespace-nowrap">Activ</th><th className="p-4 w-24 whitespace-nowrap">Alocare <br/><span className="text-[10px] lowercase text-slate-500">din Net Worth</span></th><th className="p-4 text-right whitespace-nowrap">Cantitate</th><th className="p-4 text-right whitespace-nowrap">Preț Mediu <br/><span className="text-[10px] lowercase">(break-even)</span></th><th className="p-4 text-right whitespace-nowrap">Preț Piață <br/><span className="text-[10px] lowercase text-emerald-500">(Yahoo Live / Click edit)</span></th><th className="p-4 text-right whitespace-nowrap">Valoare</th><th className="p-4 text-right whitespace-nowrap">P/L (Net) <br/><span className="text-[10px] lowercase">Nerealizat / Realizat</span></th><th className="p-4 text-center whitespace-nowrap">Acțiuni</th></tr>
                         </thead>
                         <tbody className="divide-y divide-slate-800 text-sm">
                           {openAssets.filter(asset => { const term = assetSearchTerm.toLowerCase(); return asset.symbol.toLowerCase().includes(term) || asset.name.toLowerCase().includes(term); }).map(asset => {
                              const quantity = Number(asset.quantity) || 0; const currentPrice = Number(asset.currentPrice) || 0; const buyPrice = Number(asset.buyPrice) || 0; const realizedPL = Number(asset.realizedPL) || 0; const marketValue = quantity * currentPrice; const costBasis = quantity * buyPrice; const unrealizedPL = marketValue - costBasis; const unrealizedPLPercent = costBasis > 0 ? (unrealizedPL / costBasis) * 100 : 0; const totalNetWorth = Number(macroStats.netWorth) || 1; const allocationPercent = totalNetWorth > 0 ? (convertValue(marketValue, asset.currency, reportingCurrency) / totalNetWorth) * 100 : 0; const isExpanded = expandedAssetId === asset.id; const assetTransactions = activeTransactions.filter(t => t.symbol === asset.symbol).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); const parentPortfolio = activePortfolios.find(p => p.assets.some(pa => pa.id === asset.id)); const isEditingPrice = editingPriceId === asset.id;
                              return (
                                <React.Fragment key={asset.id}>
                                  <tr className="hover:bg-slate-800/50 transition-colors group">
                                    <td className="p-4 align-top"><div className="flex gap-3"><button onClick={(e) => { e.stopPropagation(); toggleAssetExpansion(asset.id); }} className="mt-1 text-slate-500 hover:text-emerald-400">{isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</button><div onClick={() => setSelectedAssetIdForDetails(asset.id)} className="cursor-pointer group/text"><div className="font-bold text-white flex items-center gap-2 group-hover/text:text-emerald-400">{asset.symbol}<span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700 font-normal">{asset.type}</span>{activePortfolioId === 'all' && parentPortfolio && (<span className="text-[10px] bg-slate-800/90 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/30 font-medium">{parentPortfolio.name}</span>)}<BarChart2 size={12} className="opacity-0 group-hover/text:opacity-100 text-emerald-500" /></div><div className="text-xs text-slate-500 truncate max-w-[150px]">{asset.name}</div></div></div></td>
                                    <td className="p-4 align-middle"><div className="flex flex-col gap-1 w-full min-w-[80px]"><span className="text-xs text-slate-400 font-mono text-right">{allocationPercent.toFixed(1)}%</span><div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 rounded-full" style={{ width: `${Math.min(allocationPercent, 100)}%` }}></div></div></div></td>
                                    <td className="p-4 text-right font-mono text-white align-middle">{quantity.toLocaleString('ro-RO', { maximumFractionDigits: 4 })}</td>
                                    <td className="p-4 text-right font-mono text-slate-400 align-middle">
                                      <div>{buyPrice.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} <span className="text-[10px]">{asset.currency}</span></div>
                                      {asset.currency === 'RON' && (
                                        <div className="text-[10px] text-slate-500 font-normal">
                                          ≈ {convertValue(buyPrice, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                                        </div>
                                      )}
                                    </td>
                                    <td className="p-4 text-right font-mono text-white align-middle">
                                      <div className="flex flex-col items-end">
                                        <div className="flex items-center justify-end gap-1.5">
                                            <button
                                              onClick={() => handleRefreshSingleAsset(asset)}
                                              disabled={refreshingAssetId === asset.id || isRefreshing}
                                              className="p-1 text-slate-500 hover:text-emerald-400 hover:bg-slate-800 rounded transition-colors disabled:opacity-40"
                                              title="Actualizează prețul acestui activ live de pe Yahoo Finance"
                                            >
                                              <RefreshCw size={12} className={refreshingAssetId === asset.id ? 'animate-spin text-emerald-400' : ''} />
                                            </button>
                                            {asset.lastRefreshSuccess === false && (<div className="group relative" title="Yahoo Finance: Ultima actualizare a eșuat."><AlertTriangle size={14} className="text-amber-500 animate-pulse cursor-help" /></div>)}
                                            {isEditingPrice ? (<input autoFocus type="number" step="any" className="w-24 bg-slate-950 border border-emerald-500 text-white text-right px-2 py-1 rounded outline-none text-sm" value={tempPriceValue} onChange={(e) => setTempPriceValue(e.target.value)} onBlur={() => { if (tempPriceValue && !isNaN(parseFloat(tempPriceValue))) { handleUpdateAssetPrice(asset.id, parseFloat(tempPriceValue)); } else { setEditingPriceId(null); } }} onKeyDown={(e) => { if (e.key === 'Enter') { if (tempPriceValue && !isNaN(parseFloat(tempPriceValue))) { handleUpdateAssetPrice(asset.id, parseFloat(tempPriceValue)); } } else if (e.key === 'Escape') { setEditingPriceId(null); } }} />) : (<div onClick={() => { setTempPriceValue(currentPrice.toString()); setEditingPriceId(asset.id); }} className="flex items-center justify-end gap-1 cursor-pointer hover:text-emerald-400 transition-colors group/edit" title="Click pentru a edita prețul manual">{currentPrice.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}<span className="text-[10px] text-slate-500 group-hover/edit:text-emerald-500 ml-1">{asset.currency}</span><Edit3 size={10} className="text-slate-600 group-hover/edit:text-emerald-400 opacity-0 group-hover/edit:opacity-100 transition-opacity" /></div>)}
                                        </div>
                                        {asset.currency === 'RON' && (
                                          <div className="text-[10px] text-slate-500 font-normal">
                                            ≈ {convertValue(currentPrice, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                                          </div>
                                        )}
                                        {asset.lastRefreshTime && asset.lastRefreshSuccess && (<span className="text-[9px] text-slate-500 font-normal">Actualizat: {asset.lastRefreshTime}</span>)}
                                      </div>
                                    </td>
                                    <td className="p-4 text-right font-bold font-mono text-emerald-400 align-middle">
                                      <div>{marketValue.toLocaleString('ro-RO', { minimumFractionDigits: 2 })}<span className="text-[10px] text-slate-500 ml-1">{asset.currency}</span></div>
                                      {asset.currency === 'RON' && (
                                        <div className="text-[10px] text-slate-400 font-normal">
                                          ≈ {convertValue(marketValue, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                                        </div>
                                      )}
                                    </td>
                                    <td className="p-4 text-right align-middle">
                                      <div className={`text-sm font-bold flex items-center justify-end gap-1 ${unrealizedPL >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                        {unrealizedPL >= 0 ? '+' : ''}{unrealizedPL.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} <span className="text-[10px] opacity-70">{unrealizedPLPercent.toFixed(2)}%</span>
                                      </div>
                                      {asset.currency === 'RON' && (
                                        <div className="text-[10px] text-slate-400 font-normal text-right">
                                          ≈ {unrealizedPL >= 0 ? '+' : ''}{convertValue(unrealizedPL, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                                        </div>
                                      )}
                                      <div className={`text-xs mt-0.5 ${realizedPL >= 0 ? 'text-blue-400' : 'text-rose-400'}`}>
                                        <span className="text-slate-500 mr-1">marcat:</span>{realizedPL >= 0 ? '+' : ''}{realizedPL.toLocaleString('ro-RO', { minimumFractionDigits: 2 })}
                                      </div>
                                      {asset.currency === 'RON' && realizedPL !== 0 && (
                                        <div className="text-[10px] text-slate-500 font-normal text-right">
                                          ≈ {realizedPL >= 0 ? '+' : ''}{convertValue(realizedPL, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                                        </div>
                                      )}
                                    </td>
                                    <td className="p-4 align-middle"><div className="flex items-center justify-center gap-1.5"><button onClick={() => openAssetTransactionModal(asset)} className="p-1.5 hover:bg-emerald-500/10 text-emerald-500 rounded-md transition-colors" title="Adaugă Tranzacție"><ArrowRightLeft size={16} /></button><button onClick={() => setSelectedAssetForSplit(asset)} className="p-1.5 hover:bg-amber-500/15 text-amber-400 rounded-md transition-colors" title="Aplică Stock Split / Consolidare"><Split size={16} /></button><button onClick={() => setSelectedAssetForPositions(asset)} className="p-1.5 hover:bg-slate-700 text-slate-400 hover:text-white rounded-md transition-colors" title="FIFO"><MoreHorizontal size={16} /></button><button onClick={() => handleRequestAssetDelete(asset)} className="p-1.5 hover:bg-rose-500/10 text-rose-500 rounded-md transition-colors" title="Șterge Activ"><Trash2 size={16} /></button></div></td>
                                  </tr>
                                  {isExpanded && (<tr className="bg-slate-900/50"><td colSpan={8} className="p-0 border-b border-slate-800"><div className="p-4 bg-slate-950/30 shadow-inner min-w-[600px] lg:min-w-0"><h4 className="text-xs font-bold text-slate-500 uppercase mb-3 flex items-center gap-2"><History size={14} /> Istoric Tranzacții - {asset.symbol}</h4><table className="w-full text-xs text-left"><thead><tr className="text-slate-500 border-b border-slate-800"><th className="pb-2">Data</th><th className="pb-2">Tip</th><th className="pb-2 text-right">Cantitate</th><th className="pb-2 text-right">Preț</th><th className="pb-2 text-right">Valoare</th><th className="pb-2 text-right">Taxe</th><th className="pb-2 text-center">Acțiuni</th></tr></thead><tbody className="divide-y divide-slate-800/50">{assetTransactions.map(tx => (<tr key={tx.id} className="text-slate-300"><td className="py-2">{tx.date}</td><td className="py-2"><span className={`px-1.5 py-0.5 rounded text-[10px] uppercase font-bold ${tx.type === 'Cumpărare Activ' ? 'bg-emerald-900/30 text-emerald-400' : tx.type === 'Vânzare Activ' ? 'bg-amber-900/30 text-amber-400' : 'bg-slate-800 text-slate-400'}`}>{tx.type}</span></td><td className="py-2 text-right font-mono">{Number(tx.quantity) || '-'}</td><td className="py-2 text-right font-mono">{Number(tx.price)?.toFixed(2) || '-'}</td><td className="py-2 text-right font-mono">{Number(tx.amount).toFixed(2)}</td><td className="py-2 text-right text-rose-400 font-mono">{tx.tax ? Number(tx.tax).toFixed(2) : '-'}</td><td className="py-2 text-center flex items-center justify-center gap-2"><button onClick={() => { setEditingTransaction(tx); setTransactionAllowedTypes(undefined); setShowTransactionForm(true); }} className="p-1 text-blue-500 hover:bg-blue-500/10 rounded transition-colors"><Pencil size={12} /></button><button onClick={() => { if (parentPortfolio) handleRequestDeleteTransaction(tx.id, parentPortfolio.id, asset.symbol); }} className="p-1 text-rose-500 hover:bg-rose-500/10 rounded transition-colors"><Trash2 size={12} /></button></td></tr>))}</tbody></table></div></td></tr>)}
                                </React.Fragment>
                              );
                           })}
                           {openAssets.length === 0 && (<tr><td colSpan={8} className="p-8 text-center text-slate-500">{assetSearchTerm ? "Nu s-au găsit active." : "Niciun activ deschis."}</td></tr>)}
                         </tbody>
                       </table>
                    </div>
                </div>

                {/* POZIȚII ÎNCHISE (PLIABIL) */}
                {closedAssets.length > 0 && (
                  <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden opacity-90 hover:opacity-100 transition-all duration-300">
                      <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 cursor-pointer hover:bg-slate-800/80 transition-colors" onClick={() => setIsClosedAssetsExpanded(!isClosedAssetsExpanded)}>
                          <div className="flex flex-col"><h3 className="text-lg font-bold text-slate-400 flex items-center gap-2"><Archive className="text-slate-500" size={20} /> Poziții Închise (Istoric) {isClosedAssetsExpanded ? <ChevronUp size={20} className="text-slate-500" /> : <ChevronDown size={20} className="text-slate-500" />}</h3><span className="text-xs text-slate-500 mt-1">{closedAssets.length} active arhivate</span></div>
                          <div className={`px-3 py-1.5 rounded-lg border flex items-center gap-2 ${totalClosedRealizedPL >= 0 ? 'bg-blue-900/20 border-blue-500/30 text-blue-400' : 'bg-rose-900/20 border-rose-500/30 text-rose-400'}`}><span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Realizat:</span><span className="font-bold font-mono">{totalClosedRealizedPL > 0 ? '+' : ''}{totalClosedRealizedPL.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {reportingCurrency}</span></div>
                      </div>
                      {isClosedAssetsExpanded && (<div className="overflow-x-auto animate-in fade-in slide-in-from-top-2 duration-300"><table className="min-w-full text-left border-collapse"><thead className="bg-slate-950/50 text-slate-500 text-xs uppercase font-medium"><tr><th className="p-4 whitespace-nowrap">Activ Arhivat</th><th className="p-4 text-right whitespace-nowrap">Investiție Totală</th><th className="p-4 text-right whitespace-nowrap">Profit/Pierdere Realizată</th><th className="p-4 text-center whitespace-nowrap">Acțiuni</th></tr></thead><tbody className="divide-y divide-slate-800/50 text-sm">{closedAssets.map(asset => { const isVirtualInterest = asset.id === 'virtual-broker-interest'; const assetTransactions = isVirtualInterest ? activeTransactions.filter(t => t.type === TransactionType.INTEREST && !t.symbol).sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()) : activeTransactions.filter(t => t.symbol === asset.symbol).sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime()); let totalInvested = 0; if (!isVirtualInterest) assetTransactions.forEach(t => { if (t.type === TransactionType.BUY) totalInvested += (Number(t.amount) + Number(t.tax || 0)); }); const realizedPL = Number(asset.realizedPL) || 0; const isProfitable = realizedPL >= 0; const isExpanded = expandedAssetId === asset.id; const parentPortfolio = !isVirtualInterest ? activePortfolios.find(p => p.assets.some(pa => pa.id === asset.id)) : null; return (<React.Fragment key={asset.id}><tr className={`hover:bg-slate-800/30 transition-colors ${isVirtualInterest ? 'bg-emerald-900/5' : ''}`}><td className="p-4 cursor-pointer" onClick={(e) => { e.stopPropagation(); toggleAssetExpansion(asset.id); }}><div className="font-bold text-slate-300 flex items-center gap-2">{isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}{isVirtualInterest ? <Landmark size={16} className="text-emerald-500" /> : null}{asset.symbol}</div><div className="text-xs text-slate-600 truncate max-w-[200px] pl-6">{asset.name}</div></td><td className="p-4 text-right font-mono text-slate-400">{isVirtualInterest ? '-' : `${totalInvested.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} ${asset.currency}`}</td><td className="p-4 text-right"><span className={`font-bold font-mono text-lg ${isProfitable ? 'text-blue-400/80' : 'text-rose-400/80'}`}>{isProfitable ? '+' : ''}{realizedPL.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} {asset.currency}</span></td><td className="p-4 text-center"><button onClick={(e) => { e.stopPropagation(); handleRequestAssetDelete(asset); }} className={`p-1.5 hover:bg-rose-500/10 text-slate-600 hover:text-rose-500 rounded-md transition-colors ${isVirtualInterest ? 'opacity-0' : ''}`} title="Șterge Istoric"><Trash2 size={16} /></button></td></tr>{isExpanded && (<tr className="bg-slate-900/30"><td colSpan={4} className="p-0 border-b border-slate-800"><div className="p-4 bg-slate-950/20 shadow-inner"><h4 className="text-xs font-bold text-slate-500 uppercase mb-3 flex items-center gap-2"><History size={14} /> Istoric Tranzacții {isVirtualInterest ? 'Dobândă Broker' : 'Arhivate'}</h4><table className="w-full text-xs text-left"><thead><tr className="text-slate-600 border-b border-slate-800"><th className="pb-2">Data</th><th className="pb-2">Tip</th>{!isVirtualInterest && <th className="pb-2 text-right">Cantitate</th>}{!isVirtualInterest && <th className="pb-2 text-right">Preț</th>}<th className="pb-2 text-right">Suma Netă</th><th className="pb-2 text-right">Taxe</th><th className="pb-2 text-center">Acțiuni</th></tr></thead><tbody className="divide-y divide-slate-800/30">{assetTransactions.map(tx => { const txParentPortfolio = activePortfolios.find(p => p.transactions.some(t => t.id === tx.id)); return (<tr key={tx.id} className="text-slate-400"><td className="py-2">{tx.date}</td><td className="py-2">{tx.description || tx.type}</td>{!isVirtualInterest && <td className="py-2 text-right font-mono">{Number(tx.quantity)}</td>}{!isVirtualInterest && <td className="py-2 text-right font-mono">{Number(tx.price)}</td>}<td className="py-2 text-right font-mono text-emerald-400">{(Number(tx.amount) - Number(tx.tax || 0)).toFixed(2)} {tx.currency}</td><td className="py-2 text-right font-mono text-rose-400">{Number(tx.tax || 0).toFixed(2)}</td><td className="py-2 text-center flex items-center justify-center gap-2"><button onClick={() => { setEditingTransaction(tx); setShowTransactionForm(true); }} className="p-1 hover:text-white text-blue-500/60 hover:bg-blue-500/10 rounded"><Pencil size={12} /></button><button onClick={() => { if (txParentPortfolio) handleRequestDeleteTransaction(tx.id, txParentPortfolio.id, asset.symbol); }} className="p-1 hover:text-white text-rose-500/60 hover:bg-rose-500/10 rounded"><Trash2 size={12} /></button></td></tr>) })}</tbody></table></div></td></tr>)}</React.Fragment>); })}</tbody></table></div>)}
                  </div>
                )}

                {/* Alocare Tactica Clase de Active */}
                <div className="mt-8">
                  <AssetClassTargetAllocation
                    key={activePortfolioId}
                    activePortfolioId={activePortfolioId}
                    portfolios={activePortfolios}
                    assets={activeAssets}
                    reportingCurrency={reportingCurrency}
                    convertValue={convertValue}
                    netWorth={macroStats.netWorth}
                    cashBalance={macroStats.cashBalance}
                    onUpdateClassTarget={handleUpdateClassTarget}
                    onAskAI={(prompt) => {
                      setAiExternalPrompt(prompt);
                      aiAdvisorRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  />
                </div>

                {/* Planificare & Rebalansare */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mt-8">
                    <div className="p-6 border-b border-slate-800 flex flex-wrap gap-3 justify-between items-center bg-slate-900">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2"><Target className="text-emerald-400" size={20} /> Planificare & Rebalansare</h3>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={handleOpenAddPlannedAsset}
                          className="flex items-center gap-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm hover:border-emerald-500/50 cursor-pointer"
                          title="Adaugă un activ nou pe care plănuiești să îl cumperi în viitor (se corelează automat cu Ținte Tactice și Calculatorul DCA)"
                        >
                          <PlusCircle size={14} />
                          <span>Activ Planificat</span>
                        </button>
                        <div className="text-xs text-slate-400 flex items-center gap-1"><Info size={14} /> Total Țintă: <span className={`${Math.abs(activeAssets.reduce((s,a)=>s+(Number(a.targetAllocation)||0),0) - 100) < 0.05 ? 'text-emerald-400' : 'text-rose-400'} font-bold ml-1`}>{Number(activeAssets.reduce((s,a)=>s+(Number(a.targetAllocation)||0),0).toFixed(1))}%</span></div>
                      </div>
                    </div>
                    <div className="overflow-x-auto"><table className="w-full text-left border-collapse"><thead className="bg-slate-950 text-slate-400 text-xs uppercase font-medium"><tr><th className="p-4">Activ</th><th className="p-4">Categorie</th><th className="p-4 text-right">Valoare Totală</th><th className="p-4 text-right">Alocare Curentă</th><th className="p-4 text-right w-32">Țintă (%)</th><th className="p-4 text-right">Deviație</th><th className="p-4 text-right">Acțiune Necesară</th></tr></thead><tbody className="divide-y divide-slate-800 text-sm">{activeAssets.filter(a => (Number(a.quantity) || 0) > 0.000001 || (a.targetAllocation || 0) > 0).sort((a, b) => { const catA = getAssetCategoryGroup(a); const catB = getAssetCategoryGroup(b); if (catA.rank !== catB.rank) return catA.rank - catB.rank; return (a.symbol || '').localeCompare(b.symbol || '', 'ro', { sensitivity: 'base' }); }).map(asset => { const catGroup = getAssetCategoryGroup(asset); const qty = Number(asset.quantity) || 0; const price = Number(asset.currentPrice) || 0; const isPlannedOnly = qty <= 0.000001 && !activeTransactions.some(t => (t.symbol || '').trim().toUpperCase() === (asset.symbol || '').trim().toUpperCase()); const totalVal = convertValue(qty * price, asset.currency, reportingCurrency); const currentAlloc = (totalVal / (Number(macroStats.netWorth) || 1)) * 100; const target = Number(asset.targetAllocation) || 0; const deviation = currentAlloc - target; const diffValue = (Number(macroStats.netWorth) * (target / 100)) - totalVal; return (<tr key={asset.id} className="hover:bg-slate-800/50"><td className="p-4 font-medium text-white"><div className="flex flex-col"><span className="font-bold text-white flex items-center gap-1.5">{asset.symbol}{isPlannedOnly && (<span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 px-1.5 py-0.5 rounded font-medium">Planificat</span>)}</span><span className="text-[10px] text-slate-400 font-normal truncate max-w-[140px]">{asset.name}</span></div></td><td className="p-4"><span className={`text-[11px] px-2.5 py-1 rounded-full border font-semibold ${catGroup.badgeColor}`}>{catGroup.name}</span></td><td className="p-4 text-right font-mono text-white font-bold"><div>{totalVal.toLocaleString('ro-RO', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} <span className="text-[10px] text-slate-400 font-normal">{reportingCurrency}</span></div>{reportingCurrency === 'RON' && (<div className="text-[10px] text-slate-400 font-normal">≈ {convertValue(totalVal, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} EUR</div>)}</td><td className="p-4 text-right font-mono text-slate-300">{currentAlloc.toFixed(2)}%</td><td className="p-4 text-right"><div className="flex items-center justify-end gap-1"><input type="number" min="0" max="100" step="0.1" value={target} onChange={(e) => handleUpdateTargetAllocation(asset.id, parseFloat(e.target.value) || 0)} className="w-16 bg-slate-950 border border-slate-700 rounded px-2 py-1 text-right text-white text-sm font-bold" /><span className="text-slate-500 font-bold">%</span>{isPlannedOnly && (<button type="button" onClick={() => handleRemovePlannedAsset(asset.id)} className="p-1 text-slate-500 hover:text-rose-400 transition-colors" title="Elimină activul planificat"><Trash2 size={14} /></button>)}</div></td><td className="p-4 text-right"><span className={`font-mono ${Math.abs(deviation) < 0.1 ? 'text-slate-500' : deviation > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>{deviation > 0 ? '+' : ''}{deviation.toFixed(2)}%</span></td><td className="p-4 text-right font-mono font-bold"><div><span className={diffValue > 0 ? 'text-emerald-400' : diffValue < 0 ? 'text-rose-400' : 'text-slate-500'}>{diffValue > 0 ? 'CUMPĂRĂ ' : diffValue < 0 ? 'VINDE ' : '- '}{Math.abs(diffValue).toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}</span></div>{reportingCurrency === 'RON' && diffValue !== 0 && (<div className="text-[10px] text-slate-400 font-normal">≈ {diffValue > 0 ? 'CUMPĂRĂ ' : 'VINDE '}{Math.abs(convertValue(diffValue, 'RON', 'EUR')).toLocaleString('ro-RO', { maximumFractionDigits: 0 })} EUR</div>)}</td></tr>); })}<tr className="bg-slate-900/50 text-slate-400 italic"><td className="p-4">CASH (Neinvestit)</td><td className="p-4"><span className="text-[11px] px-2.5 py-1 rounded-full border font-semibold bg-slate-800 text-slate-300 border-slate-700">Cash / Disponibil</span></td><td className="p-4 text-right font-mono text-slate-300 not-italic font-bold"><div>{macroStats.cashBalance.toLocaleString('ro-RO', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} <span className="text-[10px] text-slate-400 font-normal">{reportingCurrency}</span></div>{reportingCurrency === 'RON' && (<div className="text-[10px] text-slate-400 font-normal">≈ {convertValue(macroStats.cashBalance, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 0, maximumFractionDigits: 2 })} EUR</div>)}</td><td className="p-4 text-right font-mono">{macroStats.netWorth > 0 ? ((macroStats.cashBalance / macroStats.netWorth) * 100).toFixed(2) : 0}%</td><td colSpan={3} className="p-4 text-xs text-right">Banii nealocați sunt folosiți pentru rebalansare.</td></tr></tbody></table></div>
                </div>
            </div>
        </div>
      </main>

      {/* MODALS */}
      {showTransactionForm && (<TransactionForm initialData={editingTransaction} prefillData={prefillTransaction} existingAssets={activeAssets} onSave={handleSaveTransaction} onCancel={() => { setShowTransactionForm(false); setEditingTransaction(null); setPrefillTransaction(null); }} defaultCurrency={reportingCurrency} availableFunds={currentPortfolioCash} convertValue={convertValue} allowedTypes={transactionAllowedTypes} />)}
      {selectedAssetForPositions && (<AssetPositionsModal asset={selectedAssetForPositions} transactions={activeTransactions.filter(t => t.symbol === selectedAssetForPositions.symbol)} onClose={() => setSelectedAssetForPositions(null)} onSellPosition={(tx, qty) => { setSelectedAssetForPositions(null); setPrefillTransaction({ type: TransactionType.SELL, symbol: selectedAssetForPositions.symbol, currency: selectedAssetForPositions.currency, quantity: qty }); setTransactionAllowedTypes([TransactionType.SELL]); setShowTransactionForm(true); }} onOpenStockSplit={(asset) => setSelectedAssetForSplit(asset)} />)}
      {liveAssetForDetails && (<AssetDetailsModal asset={liveAssetForDetails} transactions={activeTransactions.filter(t => t.symbol === liveAssetForDetails.symbol)} onClose={() => setSelectedAssetIdForDetails(null)} currency={reportingCurrency} convertValue={convertValue} onEditAsset={(asset) => setEditingAssetForDetails(asset)} onOpenStockSplit={(asset) => setSelectedAssetForSplit(asset)} />)}
      {editingAssetForDetails && (<EditAssetModal asset={editingAssetForDetails} transactionCount={activeTransactions.filter(t => t.symbol === editingAssetForDetails.symbol).length} onClose={() => setEditingAssetForDetails(null)} onSave={handleSaveAssetDetails} onOpenStockSplit={(asset) => setSelectedAssetForSplit(asset)} />)}
      {selectedAssetForSplit && (
        <StockSplitModal
          asset={selectedAssetForSplit}
          transactions={activeTransactions.filter(t => t.symbol === selectedAssetForSplit.symbol)}
          onClose={() => setSelectedAssetForSplit(null)}
          onApplySplit={handleApplyStockSplit}
          reportingCurrency={reportingCurrency}
          convertValue={convertValue}
        />
      )}
      {showAddPortfolio && (<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"><div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-md p-6"><h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FolderPlus size={20} className="text-emerald-400" /> Adaugă Portofoliu Nou</h3><form onSubmit={handleAddPortfolio} className="space-y-4"><div><label className="block text-sm font-medium text-slate-400 mb-1">Nume Portofoliu</label><input required type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-500" placeholder="ex: P4 - Experimente" value={newPortfolioData.name} onChange={e => setNewPortfolioData({...newPortfolioData, name: e.target.value})} /></div><div><label className="block text-sm font-medium text-slate-400 mb-1">Descriere</label><textarea className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-500 h-20 resize-none" placeholder="Scurtă descriere a strategiei..." value={newPortfolioData.description} onChange={e => setNewPortfolioData({...newPortfolioData, description: e.target.value})} /></div><div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium text-slate-400 mb-1">Valută Raportare</label><select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-500" value={newPortfolioData.currency} onChange={e => setNewPortfolioData({...newPortfolioData, currency: e.target.value})}><option value="EUR">EUR</option><option value="USD">USD</option><option value="RON">RON</option></select></div><div><label className="block text-sm font-medium text-slate-400 mb-1">Culoare Etichethetă</label><select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-500" value={newPortfolioData.color} onChange={e => setNewPortfolioData({...newPortfolioData, color: e.target.value})}><option value="bg-slate-500">Gri (Neutru)</option><option value="bg-emerald-500">Verde (Growth)</option><option value="bg-blue-500">Albastru (Actiuni)</option><option value="bg-purple-500">Violet (Crypto/Agresiv)</option><option value="bg-rose-500">Roșu (High Risk)</option><option value="bg-amber-500">Galben (Gold)</option></select></div></div><div className="flex justify-end gap-3 mt-6"><button type="button" onClick={() => setShowAddPortfolio(false)} className="text-slate-400 hover:text-white px-3 py-2">Anulează</button><button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-medium">Creează</button></div></form></div></div>)}
      {showAddPlannedAsset && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-md p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <Target size={20} className="text-emerald-400" /> Adaugă Activ Planificat (DCA)
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Activul intră imediat în Planificare, Ținte Tactice și Calculatorul DCA (cu 0 unități). Când vei face prima achiziție cu același simbol, trece automat în Dețineri Actuale păstrând ținta setată.
            </p>
            <form onSubmit={handleAddPlannedAsset} className="space-y-4">
              {activePortfolioId === 'all' && portfolios.length > 1 && (
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Portofoliu</label>
                  <select
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    value={newPlannedAsset.portfolioId}
                    onChange={e => {
                      const selP = portfolios.find(p => p.id === e.target.value);
                      setNewPlannedAsset({ ...newPlannedAsset, portfolioId: e.target.value, currency: selP?.currency || newPlannedAsset.currency });
                    }}
                  >
                    {portfolios.map(p => (
                      <option key={p.id} value={p.id}>{p.name} ({p.currency})</option>
                    ))}
                  </select>
                </div>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Simbol (Ticker)</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white uppercase font-mono outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="ex: WNRG.DE"
                    value={newPlannedAsset.symbol}
                    onChange={e => setNewPlannedAsset({ ...newPlannedAsset, symbol: e.target.value.toUpperCase() })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">ISIN (opțional)</label>
                  <input
                    type="text"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white uppercase font-mono outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="ex: IE00BYTRR863"
                    value={newPlannedAsset.isin}
                    onChange={e => setNewPlannedAsset({ ...newPlannedAsset, isin: e.target.value.toUpperCase() })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-slate-400 mb-1">Nume Activ (opțional)</label>
                  <input
                    type="text"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="ex: SPDR MSCI World Energy UCITS ETF"
                    value={newPlannedAsset.name}
                    onChange={e => setNewPlannedAsset({ ...newPlannedAsset, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Țintă (%)</label>
                  <input
                    required
                    type="number"
                    min="0.1"
                    max="100"
                    step="0.1"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-right outline-none focus:ring-2 focus:ring-emerald-500"
                    value={newPlannedAsset.targetAllocation}
                    onChange={e => setNewPlannedAsset({ ...newPlannedAsset, targetAllocation: parseFloat(e.target.value) || 0 })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Clasă Activ</label>
                  <select
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    value={newPlannedAsset.type}
                    onChange={e => setNewPlannedAsset({ ...newPlannedAsset, type: e.target.value as AssetType })}
                  >
                    <option value={AssetType.ETF}>{AssetType.ETF}</option>
                    <option value={AssetType.STOCK}>{AssetType.STOCK}</option>
                    <option value={AssetType.BOND}>{AssetType.BOND}</option>
                    <option value={AssetType.COMMODITY}>{AssetType.COMMODITY}</option>
                    <option value={AssetType.CRYPTO}>{AssetType.CRYPTO}</option>
                    <option value={AssetType.BANK_DEPOSIT}>{AssetType.BANK_DEPOSIT}</option>
                    <option value={AssetType.REAL_ESTATE}>{AssetType.REAL_ESTATE}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Valută Activ</label>
                  <select
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    value={newPlannedAsset.currency}
                    onChange={e => setNewPlannedAsset({ ...newPlannedAsset, currency: e.target.value })}
                  >
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="RON">RON</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setShowAddPlannedAsset(false)} className="text-slate-400 hover:text-white px-3 py-2">Anulează</button>
                <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-medium">Adaugă în Plan</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showRateEditor && (<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"><div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-sm p-6 shadow-2xl"><h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Edit3 size={20} className="text-blue-400" /> Editează Curs Valutar</h3><form onSubmit={handleUpdateRates} className="space-y-4"><div><label className="block text-sm font-medium text-slate-400 mb-1">EUR / RON</label><input type="number" step="0.0001" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none" value={liveRates.eur} onChange={e => setLiveRates({...liveRates, eur: parseFloat(e.target.value) || 0})} /></div><div><label className="block text-sm font-medium text-slate-400 mb-1">USD / RON</label><input type="number" step="0.0001" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none" value={liveRates.usd} onChange={e => setLiveRates({...liveRates, usd: parseFloat(e.target.value) || 0})} /></div><div><label className="block text-sm font-medium text-slate-400 mb-1">EUR / USD</label><input type="number" step="0.0001" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white outline-none" value={liveRates.eurUsd} onChange={e => setLiveRates({...liveRates, eurUsd: parseFloat(e.target.value) || 0})} /></div><div className="flex justify-end gap-3 mt-6"><button type="button" onClick={() => setShowRateEditor(false)} className="text-slate-400 px-3 py-2">Închide</button><button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">Actualizează</button></div></form></div></div>)}
      {showSettings && (<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"><div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-md p-6"><h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Settings size={20} /> Setări & Backup</h3><div className="space-y-6"><div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700"><h4 className="text-sm font-bold text-emerald-400 mb-3 uppercase tracking-wider">Rapoarte & Export</h4><div className="grid grid-cols-2 gap-3"><button onClick={generateCSV} className="flex flex-col items-center justify-center gap-2 p-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors group"><FileSpreadsheet size={24} className="text-emerald-500 group-hover:scale-110 transition-transform" /><span className="text-xs font-medium text-slate-300">Excel (.csv)</span></button><button onClick={handlePrintReport} className="flex flex-col items-center justify-center gap-2 p-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors group"><Printer size={24} className="text-blue-500 group-hover:scale-110 transition-transform" /><span className="text-xs font-medium text-slate-300">Print / PDF</span></button></div></div><div className="bg-slate-800 p-4 rounded-lg"><h4 className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">Backup Date</h4><div className="flex gap-3"><button onClick={handleExportData} className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2"><Download size={16} /> Export JSON</button><label className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"><Upload size={16} /> Import JSON<input type="file" accept=".json" className="hidden" ref={fileInputRef} onChange={handleImportData} /></label></div></div><div className="bg-rose-900/10 border border-rose-900/30 p-4 rounded-lg"><h4 className="text-rose-400 font-bold text-sm mb-2 uppercase tracking-wider">Zona Periculoasă</h4><p className="text-xs text-rose-300/60 mb-3">Această acțiune este ireversibilă. Va șterge toate datele.</p><button onClick={handleHardReset} className="w-full bg-rose-900/40 hover:bg-rose-900/60 border border-rose-700 text-rose-200 py-2 rounded-lg text-sm font-medium transition-colors">Resetează la Zero</button></div></div><div className="mt-6 flex justify-end"><button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-white px-4 py-2">Închide</button></div></div></div>)}
      {assetDeleteConfirm.isOpen && assetDeleteConfirm.asset && (() => {
        const targetAsset = assetDeleteConfirm.asset;
        const parentP = portfolios.find(p => p.assets.some(a => a.id === targetAsset.id));
        const txCount = parentP ? parentP.transactions.filter(t => t.symbol === targetAsset.symbol).length : 0;
        return (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-md p-6 shadow-2xl">
              <div className="flex items-center gap-3 text-rose-500 mb-4">
                <div className="bg-rose-900/30 p-3 rounded-full"><Trash2 size={24} /></div>
                <div>
                  <h3 className="text-xl font-bold text-white">Șterge Activ</h3>
                  {parentP && <p className="text-xs text-slate-400">Portofoliu: <span className="text-emerald-400 font-semibold">{parentP.name}</span></p>}
                </div>
              </div>
              <div className="space-y-3 text-slate-300 text-sm">
                <p>Ești sigur că vrei să elimini activul <strong className="text-white">{targetAsset.symbol}</strong> ({targetAsset.name})?</p>
                {txCount > 0 && (
                  <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-3 space-y-2">
                    <p className="text-xs text-slate-300">
                      Acest activ are <strong className="text-amber-400">{txCount} tranzacții</strong> înregistrate în acest portofoliu.
                    </p>
                    <label className="flex items-start gap-2 text-xs text-slate-300 cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        checked={deleteAssetWithTransactions}
                        onChange={(e) => setDeleteAssetWithTransactions(e.target.checked)}
                        className="mt-0.5 rounded border-slate-700 text-rose-500 focus:ring-rose-500 bg-slate-900"
                      />
                      <span>Șterge și toate cele {txCount} tranzacții asociate din istoric</span>
                    </label>
                    {!deleteAssetWithTransactions && (
                      <p className="text-[11px] text-slate-500 italic">
                        (Dacă ai o linie duplicată/fantomă, lasă debifat pentru a șterge doar linia duplicat fără a pierde tranzacțiile.)
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button onClick={() => { setAssetDeleteConfirm({ isOpen: false, asset: null }); setDeleteAssetWithTransactions(false); }} className="px-4 py-2 text-slate-400 hover:text-white">Anulează</button>
                <button onClick={handleConfirmAssetDelete} className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-medium shadow-lg shadow-rose-900/20">Șterge Definitiv</button>
              </div>
            </div>
          </div>
        );
      })()}
      {transactionDeleteConfirm.isOpen && (<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"><div className="bg-slate-900 border border-slate-700 rounded-xl w-full max-w-md p-6 shadow-2xl"><div className="flex items-center gap-3 text-rose-500 mb-4"><div className="bg-rose-900/30 p-3 rounded-full"><Trash2 size={24} /></div><h3 className="text-xl font-bold text-white">Șterge Tranzacție?</h3></div><p className="text-slate-300">Ești sigur că vrei să elimini această tranzacție?</p><div className="flex justify-end gap-3 mt-6"><button onClick={() => setTransactionDeleteConfirm({ isOpen: false, transactionId: null, portfolioId: null })} className="px-4 py-2 text-slate-400 hover:text-white">Anulează</button><button onClick={handleConfirmDeleteTransaction} className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-medium shadow-lg shadow-rose-900/20">Confirmă Ștergerea</button></div></div></div>)}
      <FullPortfolioReportModal
        isOpen={isFullReportOpen}
        onClose={() => setIsFullReportOpen(false)}
        portfolios={portfolios}
        activePortfolioId={activePortfolioId}
        reportingCurrency={reportingCurrency}
        convertValue={convertValue}
        assets={activeAssets}
        netWorth={macroStats.netWorth}
        macroStats={macroStats}
      />
    </div>
  );
};

export default App;
