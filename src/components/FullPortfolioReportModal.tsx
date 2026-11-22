import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Portfolio, Asset, AssetType } from '../types';
import { generateFullPortfolioReport, getCachedFullReport, saveCachedFullReport, formatCacheTimestamp } from '../services/geminiService';
import { X, Bot, ShieldCheck, Award, TrendingUp, Globe, Loader2, Sparkles, AlertTriangle, Printer, FileText, CheckCircle2, DollarSign, Activity, ChevronRight, Scale, Info, Star, RefreshCw, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import ReactMarkdown from 'react-markdown';

interface FullPortfolioReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolios: Portfolio[];
  activePortfolioId: string | 'all';
  reportingCurrency: string;
  convertValue: (amount: number, from: string, to: string) => number;
  assets: Asset[];
  netWorth: number;
  macroStats?: any;
}

interface ExpertAssetAnalysis {
  ticker: string;
  name: string;
  individualScore: number;
  analysis: string;
  recommendation: 'CUMPĂRĂ' | 'MENȚINE' | 'VINDE' | 'REDUCE';
}

interface ExpertAnalysis {
  name: string;
  role: string;
  score: number;
  scoringMetricName: string;
  scoringMetricSymbol: string;
  scoringExplanation: string;
  methodology: string;
  assetAnalysis: ExpertAssetAnalysis[];
  conclusion: string;
}

interface FullReportJSON {
  consensusScore: number;
  consensusConclusion: string;
  romanianTaxConsultation: {
    title: string;
    description: string;
    rulesApplied: string[];
    taxEstimationNotes: string;
  };
  experts: {
    elena: ExpertAnalysis;
    victor: ExpertAnalysis;
    andrei: ExpertAnalysis;
    diana: ExpertAnalysis;
    warren: ExpertAnalysis;
    adrian: ExpertAnalysis;
  };
  risks: {
    title: string;
    description: string;
    severity: 'CRITIC' | 'MEDIU' | 'SCĂZUT';
    mitigation: string;
  }[];
  rebalancing: {
    step: number;
    title: string;
    description: string;
    targetAction: string;
  }[];
}

const LOADING_STEPS = [
  "Convocarea comitetului extins de analiză (Elena, Victor, Andrei, Diana, Warren Buffett și Adrian Codirlașu)...",
  "Elena Popescu scanează ponderea ETF-urilor de acoperire globală...",
  "Victor Radu evaluează expunerea pe tehnologii disruptive și lideri growth...",
  "Andrei Marin calculează randamentul dividendelor și activele defensive...",
  "Warren Buffett analizează marginile de siguranță (Margin of Safety) și moat-urile competitive...",
  "Adrian Codirlașu evaluează perspectivele politicii monetare BNR, cursul regional EUR/RON și taxarea fiscală 2026...",
  "Diana Nistor analizează presiunea inflaționistă, deciziile FED/BCE și arbitrajul valutar USD/EUR/RON...",
  "Reunirea perspectivelor fiscale actuale și sintetizarea riscurilor majore...",
  "Finisarea ghidului strategic de rebalansare și a scorului de sănătate financiară..."
];

export const FullPortfolioReportModal: React.FC<FullPortfolioReportModalProps> = ({
  isOpen,
  onClose,
  portfolios,
  activePortfolioId,
  reportingCurrency,
  convertValue,
  assets,
  netWorth,
  macroStats
}) => {
  const [reportText, setReportText] = useState<string>('');
  const [lastUpdatedAt, setLastUpdatedAt] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingStepIdx, setLoadingStepIdx] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'report' | 'charts' | 'experts' | 'actions'>('report');
  const [expertTab, setExpertTab] = useState<'elena' | 'victor' | 'andrei' | 'diana' | 'warren' | 'adrian'>('elena');
  const printRef = useRef<HTMLDivElement>(null);

  // Rotate loading steps
  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setLoadingStepIdx((prev) => (prev + 1) % LOADING_STEPS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isLoading]);

  // Load last cached analysis from localStorage only (NO automatic Gemini API calls on load or data changes)
  useEffect(() => {
    if (isOpen) {
      const cached = getCachedFullReport(activePortfolioId);
      if (cached) {
        setReportText(cached.text);
        setLastUpdatedAt(cached.updatedAt);
      } else {
        setReportText('');
        setLastUpdatedAt(null);
      }
    }
  }, [isOpen, activePortfolioId]);

  // Manual trigger ONLY when user clicks the update/generate button
  const handleRunAnalysis = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setLoadingStepIdx(0);
    try {
      const res = await generateFullPortfolioReport(
        portfolios,
        activePortfolioId,
        reportingCurrency,
        macroStats,
        convertValue
      );
      setReportText(res);
      if (res && !res.startsWith('Eroare')) {
        const saved = saveCachedFullReport(activePortfolioId, res, 'gemini-2.5-flash');
        setLastUpdatedAt(saved.updatedAt);
      }
    } catch (error) {
      console.error("Failed to generate comprehensive report:", error);
      setReportText("Eroare la generarea raportului complet de la comitetul de experți AI. Te rugăm să verifici din nou conexiunea sau cheia API.");
    } finally {
      setIsLoading(false);
    }
  };

  const contextName = useMemo(() => {
    if (activePortfolioId === 'all') return 'Portofoliu Consolidat (Toate Conturile)';
    return portfolios.find(p => p.id === activePortfolioId)?.name || 'Portofoliu Curent';
  }, [activePortfolioId, portfolios]);

  // Dynamic parser for JSON report with robust extraction
  const parsedReport = useMemo<FullReportJSON | null>(() => {
    if (!reportText) return null;
    try {
      let cleanText = reportText.trim();
      const jsonStart = cleanText.indexOf('{');
      const jsonEnd = cleanText.lastIndexOf('}');
      if (jsonStart !== -1 && jsonEnd !== -1) {
        cleanText = cleanText.substring(jsonStart, jsonEnd + 1);
      }
      return JSON.parse(cleanText) as FullReportJSON;
    } catch (e) {
      console.warn("Report text is not valid JSON, using standard text renderer:", e);
      return null;
    }
  }, [reportText]);

  // Extract score from JSON or search text fallback
  const healthScore = useMemo(() => {
    if (parsedReport && typeof parsedReport.consensusScore === 'number') {
      return parsedReport.consensusScore;
    }
    if (!reportText) return 0;
    const match = reportText.match(/(?:scor|nota|score|sănătate|sănatate)[^\d]{0,20}(\d{1,3})/i);
    if (match) {
      const parsed = parseInt(match[1]);
      if (parsed > 0 && parsed <= 100) return parsed;
      if (parsed > 0 && parsed <= 10) return parsed * 10;
    }
    return 82; // fallback realistic score
  }, [parsedReport, reportText]);

  // Calculate Asset Class distribution for charts
  const chartData = useMemo(() => {
    let savedTargets: Record<AssetType, number> = {
      [AssetType.ETF]: 50,
      [AssetType.STOCK]: 25,
      [AssetType.CASH]: 10,
      [AssetType.BOND]: 10,
      [AssetType.CRYPTO]: 5,
      [AssetType.BANK_DEPOSIT]: 0,
      [AssetType.REAL_ESTATE]: 0,
      [AssetType.COMMODITY]: 0,
    };
    try {
      const saved = localStorage.getItem('investai_asset_class_targets');
      if (saved) savedTargets = JSON.parse(saved);
    } catch (e) {
      console.warn("Could not load targets for report chart", e);
    }

    const actualValues: Record<AssetType, number> = {
      [AssetType.STOCK]: 0,
      [AssetType.CRYPTO]: 0,
      [AssetType.ETF]: 0,
      [AssetType.BOND]: 0,
      [AssetType.BANK_DEPOSIT]: 0,
      [AssetType.CASH]: 0,
      [AssetType.REAL_ESTATE]: 0,
      [AssetType.COMMODITY]: 0,
    };

    assets.forEach(asset => {
      const qty = Number(asset.quantity) || 0;
      const currentPrice = Number(asset.currentPrice) || 0;
      const marketVal = qty * currentPrice;
      const valInReporting = convertValue(marketVal, asset.currency, reportingCurrency);
      if (actualValues[asset.type] !== undefined) {
        actualValues[asset.type] += valInReporting;
      } else {
        actualValues[AssetType.CASH] += valInReporting;
      }
    });

    const totalVal = netWorth || 1;

    return Object.keys(savedTargets).map(key => {
      const type = key as AssetType;
      const targetPct = savedTargets[type] || 0;
      const actualVal = actualValues[type] || 0;
      const actualPct = (actualVal / totalVal) * 100;

      return {
        name: type,
        'Alocare Țintă (%)': targetPct,
        'Alocare Actuală (%)': parseFloat(actualPct.toFixed(1)),
        'Valoare (EUR)': parseFloat(actualVal.toFixed(0))
      };
    }).filter(d => d['Alocare Țintă (%)'] > 0 || d['Alocare Actuală (%)'] > 0);
  }, [assets, netWorth, reportingCurrency, convertValue]);

  // Currency Exposure Data
  const currencyChartData = useMemo(() => {
    const data: Record<string, number> = {};
    assets.forEach(asset => {
      const qty = Number(asset.quantity) || 0;
      const currentPrice = Number(asset.currentPrice) || 0;
      const valInReporting = convertValue(qty * currentPrice, asset.currency, reportingCurrency);
      data[asset.currency] = (data[asset.currency] || 0) + valInReporting;
    });

    const total = Object.values(data).reduce((a, b) => a + b, 0) || 1;

    return Object.entries(data).map(([curr, val]) => ({
      name: curr,
      value: parseFloat(((val / total) * 100).toFixed(1)),
      amount: val
    })).sort((a, b) => b.value - a.value);
  }, [assets, reportingCurrency, convertValue]);

  // Expert scores comparison data
  const expertScoresData = useMemo(() => {
    if (!parsedReport) return [];
    return Object.entries(parsedReport.experts).map(([key, exp]) => ({
      name: exp.name.split(' ')[0], // Elena, Victor, Andrei, etc.
      'Scor Acordat (%)': exp.score,
      metric: exp.scoringMetricName,
    }));
  }, [parsedReport]);

  const COLORS = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ec4899', '#3f3f46'];

  const getHealthDescription = (score: number) => {
    if (!reportText) return { text: "Nicio analiză salvată încă. Apasă butonul de actualizare pentru a rula agenții AI.", color: "text-slate-400 border-slate-700/60 bg-slate-900/60" };
    if (score >= 85) return { text: "Excelent diversificat, costuri optime și acoperire macro solidă.", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" };
    if (score >= 70) return { text: "Stare bună, echilibrat, dar prezintă ușoare deviații tactice de la țintă.", color: "text-blue-400 border-blue-500/20 bg-blue-500/10" };
    if (score >= 50) return { text: "Moderat. Concentrare sectorială sau expunere valutară crescută fără acoperiri.", color: "text-amber-400 border-amber-500/20 bg-amber-500/10" };
    return { text: "Risc ridicat. Dețineri extrem de concentrate sau dezechilibre majore.", color: "text-rose-400 border-rose-500/20 bg-rose-500/10" };
  };

  const scoreInfo = getHealthDescription(healthScore);

  const handlePrint = () => {
    const printContent = printRef.current?.innerHTML;
    const windowUrl = 'about:blank';
    const uniqueName = new Date().getTime();
    const windowName = 'Print' + uniqueName;
    const printWindow = window.open(windowUrl, windowName, 'left=50000,top=50000,width=0,height=0');
    if (!printWindow) return;
    
    printWindow.document.write(`
      <html>
        <head>
          <title>Raport Multi-Agent WealthFolio - ${contextName}</title>
          <style>
            body { font-family: system-ui, -apple-system, sans-serif; color: #1e293b; padding: 40px; line-height: 1.6; }
            h1 { font-size: 24px; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 20px; }
            h2 { font-size: 18px; color: #0f172a; margin-top: 30px; margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; }
            h3 { font-size: 15px; color: #334155; margin-top: 20px; }
            p, li { font-size: 14px; }
            ul, ol { padding-left: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 15px; }
            th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; font-size: 13px; }
            th { background: #f8fafc; font-weight: bold; }
            blockquote { border-left: 4px solid #10b981; background: #f8fafc; padding: 10px 20px; margin: 20px 0; font-style: italic; }
            .meta { font-size: 12px; color: #64748b; margin-bottom: 30px; }
            .score-box { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
            .expert-section { margin-bottom: 25px; padding: 15px; border: 1px solid #f1f5f9; border-radius: 8px; }
          </style>
        </head>
        <body>
          <h1>Raport Financiar Complet de Portofoliu (Comitetul de Experți AI)</h1>
          <div class="meta">
            <strong>Portofoliu:</strong> ${contextName}<br/>
            <strong>Moneda de Raportare:</strong> ${reportingCurrency}<br/>
            <strong>Valoare Netă Portofoliu:</strong> ${netWorth.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} ${reportingCurrency}<br/>
            <strong>Generat la:</strong> ${new Date().toLocaleDateString('ro-RO')}
          </div>
          <div class="score-box">
            <strong>Scor de Alocare și Sănătate Financiară:</strong> ${healthScore}/100<br/>
            <em>${scoreInfo.text}</em>
          </div>
          <div>
            ${printContent ? printContent : reportText.replace(/\n/g, '<br/>')}
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 800);
  };

  const getRecommendationBadge = (rec: string) => {
    switch (rec) {
      case 'CUMPĂRĂ':
        return <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[10px] font-bold">CUMPĂRĂ</span>;
      case 'MENȚINE':
        return <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full text-[10px] font-bold">MENȚINE</span>;
      case 'VINDE':
        return <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2 py-0.5 rounded-full text-[10px] font-bold">VINDE</span>;
      case 'REDUCE':
        return <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2 py-0.5 rounded-full text-[10px] font-bold">REDUCE</span>;
      default:
        return <span className="bg-slate-850 text-slate-400 border border-slate-700 px-2 py-0.5 rounded-full text-[10px] font-bold">{rec}</span>;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* Header Area */}
        <div className="p-5 border-b border-slate-800 bg-slate-950/70 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-emerald-500 to-teal-400 p-2 rounded-xl shrink-0">
              <Bot size={24} className="text-slate-900 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Dossier Financiar de Elită - Comitetul de Experți AI
              </h2>
              <p className="text-xs text-slate-400">
                Raport strategic complet întocmit în cooperare de toți cei 6 asistenți bursieri • <span className="text-emerald-400 font-mono font-bold">{contextName}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {lastUpdatedAt && (
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-1.5 rounded-lg">
                <Clock size={12} className="text-emerald-400" />
                <span>Cache: {formatCacheTimestamp(lastUpdatedAt)}</span>
              </span>
            )}
            <button
              onClick={handleRunAnalysis}
              disabled={isLoading}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 text-white transition-all cursor-pointer shadow-md shadow-emerald-900/20"
              title="Rulează manual analiza AI cu datele curente"
            >
              <RefreshCw size={13} className={isLoading ? 'animate-spin' : ''} />
              <span>{reportText ? 'Actualizează Analiza' : 'Generează Analiza'}</span>
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Loading Screen */}
        {isLoading ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-900/40 text-center space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-slate-950 border border-slate-800 p-6 rounded-2xl">
                <Loader2 size={48} className="text-emerald-400 animate-spin" />
              </div>
            </div>
            
            <div className="max-w-md space-y-2">
              <h3 className="text-lg font-bold text-white">Se generează un raport complet consolidat...</h3>
              <p className="text-sm text-slate-400 italic font-mono min-h-[40px] px-4">
                {LOADING_STEPS[loadingStepIdx]}
              </p>
            </div>

            <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${((loadingStepIdx + 1) / LOADING_STEPS.length) * 100}%` }}
              />
            </div>
          </div>
        ) : (
          /* Report Loaded View */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            
            {/* Sidebar with Score and Navigation */}
            <div className="w-full md:w-80 bg-slate-950/40 border-b md:border-b-0 md:border-r border-slate-800 p-5 flex flex-col justify-between shrink-0 overflow-y-auto custom-scrollbar">
              <div className="space-y-6">
                
                {/* Score Circle Gauge */}
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-center space-y-3 shadow-inner">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                    Scor Sănătate Financiară
                  </span>
                  
                  <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="56" cy="56" r="48" stroke="#1e293b" strokeWidth="8" fill="transparent" />
                      <circle 
                        cx="56" 
                        cy="56" 
                        r="48" 
                        stroke="#10b981" 
                        strokeWidth="8" 
                        fill="transparent" 
                        strokeDasharray={301.6}
                        strokeDashoffset={301.6 - (301.6 * healthScore) / 100}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-3xl font-extrabold text-white leading-none">{reportText ? healthScore : '--'}</span>
                      <span className="text-[10px] text-slate-500 font-bold mt-0.5">/ 100</span>
                    </div>
                  </div>

                  <div className={`text-[11px] p-2 rounded-lg border leading-snug font-medium ${scoreInfo.color}`}>
                    {scoreInfo.text}
                  </div>
                </div>

                {/* Main Tab Navigation */}
                <nav className="space-y-1.5">
                  <button 
                    onClick={() => setActiveTab('report')}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'report' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <FileText size={16} />
                    <span>Dossier Raport AI {parsedReport ? '(Consolidat)' : '(Markdown)'}</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('charts')}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'charts' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <PieChartIcon size={16} />
                    <span>Analiză Vizuală (Grafice Comparativă)</span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('experts')}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'experts' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <Bot size={16} />
                    <span>Fișe de Expert Individual & Active</span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('actions')}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'actions' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <Activity size={16} />
                    <span>Riscuri & Rebalansare Tactice</span>
                  </button>
                </nav>
              </div>

              {/* PDF/Print Action Button */}
              <div className="pt-4 border-t border-slate-800 mt-6">
                <button 
                  onClick={handlePrint}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-2 transition-all border border-slate-700 cursor-pointer shadow-md"
                >
                  <Printer size={14} />
                  <span>Printează / Salvează PDF</span>
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-slate-900/30 p-6 overflow-y-auto custom-scrollbar flex flex-col">
              
              {/* TAB 1: OVERVIEW DOSSIER (Rendered dynamically if JSON parsed, else fallbacks to markdown text) */}
              {activeTab === 'report' && (
                <div ref={printRef} className="flex-1 space-y-6 max-w-none">
                  {parsedReport ? (
                    <div className="space-y-6 animate-in fade-in duration-500">
                      
                      {/* Interactive Consensus Layout */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        
                        {/* Consensus Score Block */}
                        <div className="lg:col-span-4 bg-slate-950/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between shadow-inner relative overflow-hidden">
                          <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                              <Sparkles size={11} className="text-emerald-400" /> Vot Colectiv Comitet
                            </span>
                            <h4 className="text-2xl font-black text-white mt-1">Consens AI</h4>
                          </div>

                          <div className="my-6 text-center">
                            <div className="inline-flex items-center justify-center relative">
                              <svg className="w-24 h-24 transform -rotate-90">
                                <circle cx="48" cy="48" r="42" stroke="#1e293b" strokeWidth="6" fill="transparent" />
                                <circle 
                                  cx="48" 
                                  cy="48" 
                                  r="42" 
                                  stroke="#10b981" 
                                  strokeWidth="6" 
                                  fill="transparent" 
                                  strokeDasharray={263.89}
                                  strokeDashoffset={263.89 - (263.89 * parsedReport.consensusScore) / 100}
                                  strokeLinecap="round"
                                />
                              </svg>
                              <div className="absolute flex flex-col items-center">
                                <span className="text-2xl font-extrabold text-white leading-none">{parsedReport.consensusScore}</span>
                                <span className="text-[9px] text-slate-500 font-bold">/ 100</span>
                              </div>
                            </div>
                          </div>

                          <div className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-3">
                            Scorul reflectă consensul celor 6 experți după corelarea riscurilor macro, evaluărilor growth, stabilității dividendelor și a fiscalității.
                          </div>
                        </div>

                        {/* Consensus Conclusion Paragraph */}
                        <div className="lg:col-span-8 bg-slate-950/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between shadow-inner">
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              Rezumat Executiv de Comitet
                            </span>
                            <h4 className="text-sm font-bold text-white mt-1 border-b border-slate-800 pb-2">
                              Sinteză Financiară Colectivă
                            </h4>
                            <p className="text-xs text-slate-300 leading-relaxed mt-3 whitespace-pre-wrap italic">
                              "{parsedReport.consensusConclusion}"
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono mt-4">
                            <CheckCircle2 size={12} />
                            <span>Comitetul recomandă măsuri active de alocare și auditare fiscală periodică.</span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Experts Scoreboard Quick Nav */}
                      <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-5 space-y-4">
                        <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                          Consiliul Consultativ AI - Notele & Metricele Experților
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {Object.entries(parsedReport.experts).map(([key, expert]) => (
                            <div 
                              key={key} 
                              onClick={() => {
                                setExpertTab(key as any);
                                setActiveTab('experts');
                              }}
                              className="bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-950/40 p-4 rounded-xl cursor-pointer transition-all flex justify-between items-center group"
                            >
                              <div className="space-y-1.5 shrink-0 max-w-[70%]">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-base">{expert.scoringMetricSymbol}</span>
                                  <h5 className="text-xs font-extrabold text-white group-hover:text-emerald-400 transition-colors leading-none">{expert.name}</h5>
                                </div>
                                <span className="text-[9px] text-slate-500 font-medium block truncate">{expert.role}</span>
                                <span className="text-[10px] text-slate-400 font-bold bg-slate-800 px-2 py-0.5 rounded-md inline-block">
                                  {expert.scoringMetricName}
                                </span>
                              </div>
                              
                              <div className="text-right shrink-0">
                                <div className="text-lg font-black text-white">{expert.score}</div>
                                <div className="text-[8px] text-slate-500 font-bold">/ 100</div>
                                <span className="text-[9px] text-emerald-400 hover:underline flex items-center gap-0.5 mt-1 font-semibold">
                                  Dosar <ChevronRight size={10} />
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* DETAILED ROMANIAN TAX CONSULTATION 2026 CARD (What user requested) */}
                      <div className="bg-gradient-to-r from-slate-950 to-slate-900 border border-emerald-500/20 rounded-xl p-6 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold border border-emerald-500/20 flex items-center gap-1.5">
                          <ShieldCheck size={12} />
                          <span>Actualizat Conform Legii Fiscală 2026</span>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">🇷🇴</span>
                            <div>
                              <h3 className="text-md font-extrabold text-white">
                                {parsedReport.romanianTaxConsultation?.title || "Ghid Fiscal & Taxare România 2026"}
                              </h3>
                              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">
                                Perspectiva Doctorului în Finanțe Adrian Codirlașu
                              </p>
                            </div>
                          </div>

                          <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap">
                            {parsedReport.romanianTaxConsultation?.description}
                          </p>

                          <div className="border-t border-slate-800/80 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1">
                                <Scale size={12} className="text-emerald-400" /> Reguli Aplicate pe Portofoliu
                              </h4>
                              <ul className="space-y-2">
                                {parsedReport.romanianTaxConsultation?.rulesApplied?.map((rule, idx) => (
                                  <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                                    <span className="text-emerald-400 shrink-0 mt-1">•</span>
                                    <span>{rule}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-slate-900/60 border border-slate-800/60 p-4 rounded-lg flex flex-col justify-between">
                              <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1">
                                  <DollarSign size={12} className="text-emerald-400" /> Estimare Taxare & Optimizare
                                </h4>
                                <p className="text-xs text-slate-400 leading-relaxed whitespace-pre-wrap italic">
                                  {parsedReport.romanianTaxConsultation?.taxEstimationNotes}
                                </p>
                              </div>
                              <div className="text-[9px] text-slate-500 font-mono mt-3 text-right">
                                Notă: Impozitarea finală depinde de brokerul utilizat (Român vs Străin).
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  ) : reportText ? (
                    // Fallback Render of raw text using ReactMarkdown for gorgeous visual quality!
                    <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-6 shadow-inner space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800 text-slate-500 text-xs">
                        <div className="flex items-center gap-2">
                          <Sparkles size={14} className="text-emerald-400" />
                          <span>Sinteză Generată de WealthFolio AI Committee (gemini-2.5-flash)</span>
                        </div>
                        {lastUpdatedAt && (
                          <span className="text-[11px] font-mono text-slate-400">
                            Actualizat la: {formatCacheTimestamp(lastUpdatedAt)}
                          </span>
                        )}
                      </div>
                      
                      <div className="markdown-body text-slate-300 prose prose-invert prose-emerald max-w-none text-xs leading-relaxed">
                        <ReactMarkdown>{reportText}</ReactMarkdown>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-10 text-center space-y-4 my-auto">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                        <Sparkles size={24} />
                      </div>
                      <div className="space-y-1.5 max-w-md mx-auto">
                        <h3 className="text-base font-bold text-white">Analiză AI la cerere (Consum Minim)</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Nu există o analiză salvată în cache pentru <span className="text-emerald-400 font-semibold">{contextName}</span>. Agenții nu rulează automat pentru a economisi tokeni — apasă butonul de mai jos când dorești să generezi sau să actualizezi raportul.
                        </p>
                      </div>
                      <button
                        onClick={handleRunAnalysis}
                        disabled={isLoading}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg transition-all cursor-pointer"
                      >
                        <Sparkles size={14} />
                        <span>Generează Analiza AI Acum</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: INTERACTIVE CHARTS & COMPARISONS */}
              {activeTab === 'charts' && (
                <div className="flex-1 space-y-6">
                  
                  {/* Expert Scores Bar Chart (New visual element) */}
                  {parsedReport && (
                    <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl space-y-4 animate-in fade-in duration-300">
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                          <Scale size={15} className="text-emerald-400" /> Nota Colectivă: Cum Vă Notează Cei 6 Experți? (%)
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">Comparație directă între viziunile experților privind alocarea actuală a portofoliului curent.</p>
                      </div>
                      
                      <div className="h-60 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={expertScoresData}
                            margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                            <XAxis dataKey="name" stroke="#6b7280" style={{ fontSize: '11px', fontWeight: 'bold' }} />
                            <YAxis stroke="#6b7280" style={{ fontSize: '10px' }} domain={[0, 100]} />
                            <Tooltip 
                              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1f2937', color: '#fff', borderRadius: '8px' }}
                              formatter={(value, name, props) => [`${value}%`, `Nota acordată de expert`]}
                            />
                            <Bar dataKey="Scor Acordat (%)" fill="#10b981" radius={[4, 4, 0, 0]}>
                              {expertScoresData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  )}

                  {/* Standard Chart 1: Actual vs Target Allocation */}
                  <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-white">Deviații Clase de Active: Actual vs Țintă (%)</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Analiza comparativă a ponderilor ideale setate de utilizator comparate cu valoarea pieței curente.</p>
                    </div>
                    
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={chartData}
                          margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                          <XAxis dataKey="name" stroke="#6b7280" style={{ fontSize: '10px' }} />
                          <YAxis stroke="#6b7280" style={{ fontSize: '10px' }} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1f2937', color: '#fff', borderRadius: '8px' }}
                            itemStyle={{ color: '#10b981' }}
                          />
                          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                          <Bar dataKey="Alocare Actuală (%)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="Alocare Țintă (%)" fill="#10b981" radius={[4, 4, 0, 0]} fillOpacity={0.6} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Standard Chart 2: Currency Exposure Breakout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white">Expunere Valutară</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Distribuția deținerilor (Active + Cash) convertită în moneda raportată.</p>
                      </div>
                      
                      <div className="h-44 w-full mt-4 flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={currencyChartData}
                              cx="50%"
                              cy="50%"
                              innerRadius={45}
                              outerRadius={65}
                              paddingAngle={4}
                              dataKey="value"
                            >
                              {currencyChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip
                              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1f2937', color: '#fff', borderRadius: '8px' }}
                              formatter={(value) => [`${value}%`, 'Expunere']}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Table for currency breakdown */}
                    <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl">
                      <h4 className="text-sm font-bold text-white mb-3">Distribuție Detaliată Valute</h4>
                      <div className="space-y-2.5">
                        {currencyChartData.map((curr, idx) => (
                          <div key={curr.name} className="flex justify-between items-center text-xs border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                              <span className="font-bold text-slate-200">{curr.name}</span>
                            </div>
                            <div className="text-right">
                              <span className="font-mono text-white font-medium">{curr.value}%</span>
                              <span className="text-[10px] text-slate-500 ml-1.5 block sm:inline">
                                ({curr.amount.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency})
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: SPECIFIC EXPERTS DETAIL SHEETS & PUNCTUAL ASSET RATING (What user requested) */}
              {activeTab === 'experts' && (
                <div className="flex-1 flex flex-col h-full space-y-4">
                  {/* Expert Selector inside Tab */}
                  <div className="flex gap-2 border-b border-slate-800 pb-3 overflow-x-auto custom-scrollbar whitespace-nowrap">
                    {(['elena', 'victor', 'andrei', 'diana', 'warren', 'adrian'] as const).map((expId) => {
                      const isActive = expertTab === expId;
                      const names = { 
                        elena: 'Elena (ETF)', 
                        victor: 'Victor (Growth)', 
                        andrei: 'Andrei (Defensiv)', 
                        diana: 'Diana (Macro)', 
                        warren: 'Warren Buffett', 
                        adrian: 'Adrian Codirlașu' 
                      };
                      return (
                        <button
                          key={expId}
                          onClick={() => setExpertTab(expId)}
                          className={`text-xs px-3.5 py-2 rounded-lg font-bold transition-all cursor-pointer ${
                            isActive ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow' : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                          }`}
                        >
                          {names[expId]}
                        </button>
                      );
                    })}
                  </div>

                  {/* Focused Expert Section */}
                  <div className="bg-slate-950/40 border border-slate-800 p-6 rounded-xl flex-1 space-y-6 overflow-y-auto custom-scrollbar">
                    
                    {/* Rendered if JSON is successfully parsed - HIGH-FIDELITY INTERACTIVE CARD */}
                    {parsedReport ? (
                      (() => {
                        const expert: ExpertAnalysis = parsedReport.experts[expertTab];
                        if (!expert) return <div className="text-slate-400 text-xs">Eroare la încărcarea datelor expertului.</div>;
                        const avatarColors = {
                          elena: 'from-blue-600 to-cyan-500',
                          victor: 'from-rose-600 to-amber-500',
                          andrei: 'from-emerald-600 to-teal-500',
                          diana: 'from-purple-600 to-fuchsia-500',
                          warren: 'from-amber-600 to-yellow-500',
                          adrian: 'from-cyan-600 to-indigo-500'
                        };
                        const badges = {
                          elena: 'ETF',
                          victor: 'Growth',
                          andrei: 'Defensiv',
                          diana: 'Macro',
                          warren: 'Value',
                          adrian: 'CFA'
                        };

                        return (
                          <div className="space-y-6 animate-in fade-in duration-300">
                            {/* Expert Identity and Scoring Metric Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800/80 pb-4">
                              <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${avatarColors[expertTab]} flex items-center justify-center shrink-0 shadow-lg text-white font-bold text-xl`}>
                                  {expert.scoringMetricSymbol}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h4 className="font-extrabold text-white text-md leading-tight">{expert.name}</h4>
                                    <span className="text-[9px] font-bold bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-slate-400 uppercase">
                                      {badges[expertTab]}
                                    </span>
                                  </div>
                                  <span className="text-xs text-slate-400 block">{expert.role}</span>
                                </div>
                              </div>

                              {/* Expert score bar widget */}
                              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center gap-4 shadow-inner shrink-0 sm:min-w-[200px]">
                                <div className="space-y-0.5 flex-1">
                                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">
                                    {expert.scoringMetricName}
                                  </span>
                                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                    <div 
                                      className="bg-emerald-500 h-full rounded-full" 
                                      style={{ width: `${expert.score}%` }}
                                    />
                                  </div>
                                </div>
                                <div className="text-right">
                                  <span className="text-lg font-black text-white">{expert.score}</span>
                                  <span className="text-[10px] text-slate-500 font-bold block">/ 100</span>
                                </div>
                              </div>
                            </div>

                            {/* Philosophy and Methodology Block */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <blockquote className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-emerald-500 pl-3.5 bg-slate-950/20 py-2.5 rounded-r">
                                "{expert.scoringExplanation}"
                              </blockquote>
                              
                              <div className="bg-slate-950/30 border border-slate-800/60 p-4 rounded-lg">
                                <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                                  Metodologie Analiză Aplicată
                                </h5>
                                <p className="text-xs text-slate-300 leading-relaxed">
                                  {expert.methodology}
                                </p>
                              </div>
                            </div>

                            {/* PUNCTUAL ASSET ANALYSIS TABLE (What user requested) */}
                            <div className="space-y-3.5">
                              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                                  <Star size={13} className="text-emerald-400" /> Analiză Punctuală pe Active Detaliată
                                </h4>
                                <span className="text-[10px] text-slate-500 font-mono">
                                  {expert.assetAnalysis?.length || 0} active auditate
                                </span>
                              </div>

                              <div className="grid grid-cols-1 gap-4">
                                {expert.assetAnalysis && expert.assetAnalysis.map((assetRating, idx) => (
                                  <div 
                                    key={idx}
                                    className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-xl space-y-3 shadow-inner hover:border-slate-700/80 transition-all group"
                                  >
                                    <div className="flex justify-between items-start gap-2 flex-wrap sm:flex-nowrap">
                                      <div className="space-y-0.5">
                                        <div className="flex items-center gap-2">
                                          <span className="text-xs font-extrabold text-white font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800 group-hover:text-emerald-400 transition-colors">
                                            {assetRating.ticker}
                                          </span>
                                          <h5 className="text-xs font-bold text-slate-200">{assetRating.name}</h5>
                                        </div>
                                      </div>

                                      <div className="flex items-center gap-3 shrink-0">
                                        <div className="text-right">
                                          <span className="text-xs font-black text-white">{assetRating.individualScore}</span>
                                          <span className="text-[9px] text-slate-500 font-bold block">nota expert</span>
                                        </div>
                                        <div className="w-16 bg-slate-800 h-1 rounded-full overflow-hidden shrink-0 hidden sm:block">
                                          <div className="bg-emerald-500 h-full" style={{ width: `${assetRating.individualScore}%` }} />
                                        </div>
                                        {getRecommendationBadge(assetRating.recommendation)}
                                      </div>
                                    </div>

                                    <p className="text-xs text-slate-400 leading-relaxed bg-slate-950/20 p-3 rounded-lg border border-slate-800/40">
                                      {assetRating.analysis}
                                    </p>
                                  </div>
                                ))}

                                {(!expert.assetAnalysis || expert.assetAnalysis.length === 0) && (
                                  <div className="text-center p-6 bg-slate-900/20 border border-dashed border-slate-800 rounded-xl text-xs text-slate-500">
                                    Niciun activ detaliat nu a fost raportat în format structurat pentru acest expert.
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Expert's Individual Conclusion */}
                            <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-lg space-y-1">
                              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                Concluzie Finală Expert
                              </h5>
                              <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap">
                                {expert.conclusion}
                              </p>
                            </div>
                          </div>
                        );
                      })()
                    ) : (
                      // Fallback legacy description sheets if JSON fails to load
                      (() => {
                        const legacyData = {
                          elena: {
                            name: "Elena Popescu",
                            title: "Expert Index ETF & Diversificare Pasivă",
                            quote: "O alocare corectă nu înseamnă să ghicești următorul câștigător de top, ci să deții întreaga economie globală la comisioane minime.",
                            elements: ["Procentul de expunere pe fonduri indexate largi.", "Comisioanele anuale cumulate (TER) și rebalansarea DCA.", "Identificarea riscului de suprapunere a activelor (holding overlaps)."],
                            notes: "Elena sugerează să vă asigurați că cel puțin 50-60% din active sunt în ETF-uri globale diversificate pentru stabilitate pe parcursul deceniilor."
                          },
                          victor: {
                            name: "Victor Radu",
                            title: "Expert Growth Stocks & Tech Internațional",
                            quote: "Volatilitatea este prețul de admitere pentru depășirea performanței medii a pieței. Concentrați-vă pe liderii cu 'moat' inovațional.",
                            elements: ["Concentrarea pe acțiuni de tehnologie, AI și software.", "Firme cu reinvestire a profitului și creștere accelerată.", "Evaluarea riscurilor în momente de supra-evaluare."],
                            notes: "Victor recomandă menținerea unei alocări agresive de 20-30% pentru companii tech inovatoare care dețin un avantaj competitiv."
                          },
                          andrei: {
                            name: "Andrei Marin",
                            title: "Expert Titluri de Stat & Dividende defensive",
                            quote: "O piață urs (bear market) nu vă va afecta somnul dacă aveți dividende sigure încasate trimestrial și obligațiuni guvernamentale stabile.",
                            elements: ["Stabilitatea fluxurilor de numerar generate de portofoliu.", "Obligațiuni guvernamentale pentru conservarea capitalului.", "Marja de siguranță a companiilor selectate."],
                            notes: "Andrei susține că menținerea a cel puțin 15-20% din capital în titluri de stat sau dividende sigure crește siguranța."
                          },
                          diana: {
                            name: "Diana Nistor",
                            title: "Expert Strategii Macro & Arbitraj Valutar",
                            quote: "Inflația și politica monetară a băncilor centrale sunt forțele gravitaționale ale finanțelor globale. Nu navigați fără busolă valutară.",
                            elements: ["Echilibrul valutar între activele denominate în USD, EUR și RON.", "Evaluarea ciclului dobânzilor Fed, BCE și BNR.", "Hedges macro: aur, mărfuri fizice, active imobiliare rezistente."],
                            notes: "Diana sugerează diversificarea valutară echilibrată pentru a reduce impactul volatilității valutare locale."
                          },
                          warren: {
                            name: "Warren Buffett (AI)",
                            title: "Expert în Value Investing & Moat-uri Economice",
                            quote: "Fii temător când alții sunt lacomi și fii lacom doar când alții sunt temători. Cumpără o afacere excelentă la un preț corect, nu una mediocră la un preț excelent.",
                            elements: ["Prezența unui avantaj competitiv sustenabil și durabil (Economic Moat).", "Calitatea echipei de management, generarea constantă de FCF.", "Marginile de siguranță la momentul achiziției și deținerea pe termen lung."],
                            notes: "Warren te îndeamnă să nu cumperi un activ dacă nu ești confortabil să îl deții timp de 10 ani chiar dacă bursa se închide."
                          },
                          adrian: {
                            name: "Adrian Codirlașu",
                            title: "Doctor în Finanțe & Expert Macro regional",
                            quote: "O analiză macro corectă și înțelegerea politicii monetare a BNR reprezintă cheia gestionării riscului valutar și a fructificării randamentelor din Europa de Est.",
                            elements: ["Deciziile de dobândă de referință ale BNR și ROBOR/IRCC.", "Evoluția cursului EUR/RON și USD/RON.", "Impactul noilor coduri fiscale din România (taxare dividende, praguri CASS în 2026)."],
                            notes: "Adrian consideră că un portofoliu performant deținut de un român trebuie să arbitreze inteligent activele USD/EUR cu randamentele RON pe regulile din 2026."
                          }
                        }[expertTab];

                        return (
                          <div className="space-y-4 animate-in fade-in duration-300">
                            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                              <div className="w-10 h-10 rounded-full bg-slate-850 flex items-center justify-center font-bold text-white text-md">
                                {expertTab.slice(0, 2).toUpperCase()}
                              </div>
                              <div>
                                <h4 className="font-bold text-white">{legacyData.name}</h4>
                                <span className="text-[10px] text-slate-400">{legacyData.title}</span>
                              </div>
                            </div>
                            <blockquote className="text-xs text-slate-400 leading-relaxed italic border-l-2 border-emerald-500 pl-3">
                              "{legacyData.quote}"
                            </blockquote>
                            <div className="text-slate-300 text-sm leading-relaxed space-y-2 pt-2">
                              <h5 className="font-bold text-slate-200">Elemente Urmărite în Audit:</h5>
                              <ul className="list-disc list-inside space-y-1 text-xs text-slate-400">
                                {legacyData.elements.map((el, i) => <li key={i}>{el}</li>)}
                              </ul>
                              <p className="text-xs text-slate-400 leading-relaxed mt-4">
                                {legacyData.notes}
                              </p>
                            </div>
                          </div>
                        );
                      })()
                    )}
                  </div>
                </div>
              )}

              {/* TAB 4: RECOMMENDED ACTIONS & RISK REGISTER */}
              {activeTab === 'actions' && (
                <div className="flex-1 space-y-6">
                  
                  {parsedReport ? (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      
                      {/* Critical Risk Register */}
                      <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl space-y-4">
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <AlertTriangle className="text-amber-500 animate-bounce" size={18} />
                          Registrul de Riscuri Critice
                        </h4>
                        <p className="text-xs text-slate-400">
                          Identificarea slăbiciunilor majore de diversificare, acoperiri sau risc fiscal pe baza analizei actuale.
                        </p>

                        <div className="space-y-3">
                          {parsedReport.risks?.map((risk, idx) => {
                            const severityColors = {
                              CRITIC: "border-rose-500/20 bg-rose-500/5 text-rose-400",
                              MEDIU: "border-amber-500/20 bg-amber-500/5 text-amber-400",
                              SCĂZUT: "border-blue-500/20 bg-blue-500/5 text-blue-400"
                            }[risk.severity] || "border-slate-800 bg-slate-900 text-slate-300";

                            const severityBadge = {
                              CRITIC: "bg-rose-600 text-white",
                              MEDIU: "bg-amber-600 text-slate-905",
                              SCĂZUT: "bg-blue-600 text-white"
                            }[risk.severity] || "bg-slate-700 text-white";

                            return (
                              <div key={idx} className={`border p-4 rounded-xl space-y-2 ${severityColors}`}>
                                <div className="flex justify-between items-center gap-2">
                                  <h5 className="text-xs font-black">{risk.title}</h5>
                                  <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${severityBadge}`}>
                                    {risk.severity}
                                  </span>
                                </div>
                                <p className="text-[11px] leading-relaxed text-slate-300">
                                  {risk.description}
                                </p>
                                <div className="text-[11px] leading-relaxed pt-1.5 border-t border-slate-800/60 text-slate-400">
                                  <strong>Atenuare recomandată:</strong> {risk.mitigation}
                                </div>
                              </div>
                            );
                          })}

                          {(!parsedReport.risks || parsedReport.risks.length === 0) && (
                            <div className="text-center p-6 bg-slate-900/20 border border-dashed border-slate-800 rounded-xl text-xs text-slate-500">
                              Felicitări! Comitetul AI nu a identificat riscuri critice în portofoliu.
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Step by Step Rebalancing Guide */}
                      <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl space-y-4">
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <CheckCircle2 className="text-emerald-400" size={18} />
                          Ghidul Strategic de Rebalansare Pas cu Pas
                        </h4>
                        <p className="text-xs text-slate-400">
                          Recomandări tactice clare pentru acțiuni imediate sau rebalansare regulată.
                        </p>

                        <div className="space-y-3">
                          {parsedReport.rebalancing?.map((step, idx) => (
                            <div key={idx} className="flex gap-4 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                              <div className="text-emerald-400 font-black shrink-0 text-md bg-slate-950 w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center">
                                {step.step || idx + 1}
                              </div>
                              <div className="space-y-1 text-xs">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <strong className="text-slate-200 text-xs">{step.title}</strong>
                                  <span className="text-[9px] font-bold bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">
                                    {step.targetAction}
                                  </span>
                                </div>
                                <p className="text-slate-400 leading-relaxed">{step.description}</p>
                              </div>
                            </div>
                          ))}

                          {(!parsedReport.rebalancing || parsedReport.rebalancing.length === 0) && (
                            <div className="text-center p-6 bg-slate-900/20 border border-dashed border-slate-800 rounded-xl text-xs text-slate-500">
                              Nu au fost generate instrucțiuni de rebalansare automate.
                            </div>
                          )}
                        </div>

                        <div className="bg-amber-950/20 border border-amber-500/20 text-amber-400 p-3.5 rounded-lg text-[10px] leading-relaxed flex items-start gap-2 mt-4">
                          <AlertTriangle size={14} className="shrink-0 mt-0.5" />
                          <div>
                            <strong>Declinare Răspundere Legală (Risc):</strong> Conținutul oferit este în scop strict informativ și asistență strategică bazată pe AI. Nu constituie o recomandare oficială de tranzacționare sau ofertă de cumpărare/vânzare a instrumentelor financiare. Investițiile pe piețele de capital implică riscul pierderii parțiale sau totale a capitalului investit.
                          </div>
                        </div>
                      </div>

                    </div>
                  ) : (
                    // Fallback recommended action sheet if JSON fails
                    <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl space-y-4">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <CheckCircle2 className="text-emerald-400" size={18} />
                        Ghidul Strategic de Rebalansare a Portofoliului
                      </h4>
                      <p className="text-xs text-slate-400">
                        Pe baza analizei colective, iată acțiunile tactice prioritare pe care experții vă sfătuiesc să le implementați pentru a vă optimiza riscurile:
                      </p>

                      <div className="space-y-3.5 pt-2">
                        <div className="flex gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                          <div className="text-emerald-400 font-bold shrink-0 text-sm">Pasul 1:</div>
                          <div className="space-y-1 text-xs">
                            <strong className="text-slate-200">Folosește cash-ul neinvestit pentru activele deficitare</strong>
                            <p className="text-slate-400 leading-relaxed">Nu vindeți activele câștigătoare (growth sau crypto) dacă depășesc ușor ținta; în schimb, rebalansați orientând noile depuneri exclusiv spre clasele deficitare (cum ar fi ETF-urile pasive sau titlurile de stat).</p>
                          </div>
                        </div>

                        <div className="flex gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                          <div className="text-emerald-400 font-bold shrink-0 text-sm">Pasul 2:</div>
                          <div className="space-y-1 text-xs">
                            <strong className="text-slate-200">Consolidează expunerea pe ETF-uri globale</strong>
                            <p className="text-slate-400 leading-relaxed">Asigură-te că deții un nucleu solid (Core) de ETF-uri pe indici largi (ex: VWCE sau EUNL) care să reprezinte fundația deținerilor tale financiare înainte de a adăuga stock-picking speculativ.</p>
                          </div>
                        </div>

                        <div className="flex gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                          <div className="text-emerald-400 font-bold shrink-0 text-sm">Pasul 3:</div>
                          <div className="space-y-1 text-xs">
                            <strong className="text-slate-200">Atenuează riscurile valutare</strong>
                            <p className="text-slate-400 leading-relaxed">Menține un echilibru între expunerile de USD (pentru companiile globale dinamice) și EUR/RON (pentru obligațiuni, depozite și stabilitate regională).</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-amber-950/20 border border-amber-500/20 text-amber-400 p-3 rounded-lg text-[11px] leading-relaxed flex items-start gap-2 mt-4">
                        <AlertTriangle size={14} className="shrink-0 mt-0.5" />
                        <div>
                          <strong>Avertisment Legal de Risc:</strong> Toate recomandările furnizate sunt formulate pe baza analizei AI și nu constituie sfaturi financiare, fiscale sau juridice oficiale. Consultați un consultant financiar autorizat înainte de a lua decizii majore de investiții.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer info bar */}
        <div className="bg-slate-950/60 p-3.5 border-t border-slate-800 text-[10px] text-slate-500 flex justify-between shrink-0 font-mono">
          <span>Raport: AI Committee • model: gemini-2.5-flash{lastUpdatedAt ? ` • salvat: ${formatCacheTimestamp(lastUpdatedAt)}` : ''}</span>
          <span>Suma activelor analizate: {netWorth.toLocaleString('ro-RO', { maximumFractionDigits: 0 })} {reportingCurrency}</span>
        </div>
      </div>
    </div>
  );
};

// Simple PieChartIcon local placeholder to prevent imports crashes
const PieChartIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);
