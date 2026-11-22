import React, { useState, useMemo, useEffect } from 'react';
import { ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Percent, Info, BarChart3, Calendar } from 'lucide-react';
import { BenchmarkId, BENCHMARK_OPTIONS, getBenchmarkHistory, getBenchmarkOption, getBenchmarkDataSync } from '../services/benchmarkService';
import { DailySnapshot } from '../services/portfolioEngine';
import { getDetailedPeriodSpan } from '../utils';

interface PortfolioPerformanceChartProps {
  dailyHistory: DailySnapshot[];
  benchmarkRefreshKey?: number;
}

type TimeRange = '1Z' | '1L' | '3L' | '6L' | 'YTD' | '1A' | '3A' | '5A' | 'MAX';

export const PortfolioPerformanceChart: React.FC<PortfolioPerformanceChartProps> = React.memo(({
  dailyHistory,
  benchmarkRefreshKey = 0
}) => {
  const [range, setRange] = useState<TimeRange>('MAX');
  const [selectedBenchmark, setSelectedBenchmark] = useState<BenchmarkId>('strategic');
  const [benchmarkData, setBenchmarkData] = useState<Map<string, number>>(() => getBenchmarkDataSync('strategic'));
  const [isLoadingBenchmark, setIsLoadingBenchmark] = useState<boolean>(false);

  const [hoveredPoint, setHoveredPoint] = useState<{
    date: string;
    performance: number;
    annualized: number;
    benchmarkPerf?: number;
    benchmarkAnnualized?: number;
  } | null>(null);

  useEffect(() => {
    if (selectedBenchmark === 'none') {
      setBenchmarkData(new Map());
      setIsLoadingBenchmark(false);
      return;
    }

    let isMounted = true;
    setIsLoadingBenchmark(true);
    // Asigurăm date sincron inițial pentru a fi vizibile instant (0ms latență)
    setBenchmarkData(getBenchmarkDataSync(selectedBenchmark));

    getBenchmarkHistory(selectedBenchmark, benchmarkRefreshKey > 0)
      .then((map) => {
        if (isMounted && map.size > 0) {
          setBenchmarkData(map);
          setIsLoadingBenchmark(false);
        }
      })
      .catch((err) => {
        console.warn("Failed to load live benchmark history:", err);
        if (isMounted) {
          setIsLoadingBenchmark(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [selectedBenchmark, benchmarkRefreshKey]);

  const chartData = useMemo(() => {
    if (!dailyHistory || dailyHistory.length === 0) return [];

    const today = new Date();
    const performanceLog = dailyHistory;

    // Filtrare pe perioada selectată
    let cutDate = new Date(today);
    switch (range) {
      case '1Z': cutDate.setDate(today.getDate() - 1); break;
      case '1L': cutDate.setMonth(today.getMonth() - 1); break;
      case '3L': cutDate.setMonth(today.getMonth() - 3); break;
      case '6L': cutDate.setMonth(today.getMonth() - 6); break;
      case 'YTD': cutDate = new Date(today.getFullYear(), 0, 1); break;
      case '1A': cutDate.setFullYear(today.getFullYear() - 1); break;
      case '3A': cutDate.setFullYear(today.getFullYear() - 3); break;
      case '5A': cutDate.setFullYear(today.getFullYear() - 5); break;
      case 'MAX': cutDate = new Date(performanceLog[0].date + 'T00:00:00Z'); break;
    }

    const cutStr = range === 'MAX' ? performanceLog[0].date : cutDate.toISOString().split('T')[0];

    // Include baseline point right before cutStr so YTD / 1L / 1A returns measure from previous closing NAV
    let startIdx = performanceLog.findIndex(p => p.date >= cutStr);
    if (startIdx === -1) startIdx = Math.max(0, performanceLog.length - 1);
    if (range !== 'MAX' && startIdx > 0) {
      startIdx -= 1;
    }

    const filteredLog = performanceLog.slice(startIdx);
    if (filteredLog.length === 0) return [];
    
    // Normalizăm astfel încât începutul perioadei să fie punctul de referință 0%
    const startUnitPrice = filteredLog[0].unitPrice;
    const startDate = new Date(filteredLog[0].date);
    const startDateStr = filteredLog[0].date;

    // Calcul bază benchmark la începutul perioadei selectate
    let benchmarkBasePrice: number | null = null;
    if (selectedBenchmark !== 'none' && benchmarkData.size > 0) {
      if (benchmarkData.has(startDateStr)) {
        benchmarkBasePrice = benchmarkData.get(startDateStr)!;
      } else {
        const sortedBmDates = Array.from(benchmarkData.keys()).sort();
        let candidate: number | null = null;
        for (const d of sortedBmDates) {
          if (d <= startDateStr) {
            candidate = benchmarkData.get(d)!;
          } else {
            break;
          }
        }
        benchmarkBasePrice = candidate ?? (sortedBmDates.length > 0 ? benchmarkData.get(sortedBmDates[0])! : null);
      }
    }

    let runningBenchmarkPrice = benchmarkBasePrice;

    return filteredLog.map(p => {
        const perf = ((p.unitPrice / startUnitPrice) - 1) * 100;
        const currentDate = new Date(p.date);
        const days = Math.max(0, (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
        
        let annualized = perf;
        if (days >= 7) {
          const years = days / 365.25;
          const r = perf / 100;
          if (r <= -1) {
            annualized = -100;
          } else {
            const ann = (Math.pow(1 + r, 1 / years) - 1) * 100;
            annualized = isFinite(ann) ? ann : perf;
          }
        } else if (days > 0) {
          const linearAnn = (perf / days) * 365.25;
          annualized = isFinite(linearAnn) ? linearAnn : perf;
        }

        // Calcul performanță benchmark pentru data curentă
        let benchmarkPerf: number | undefined = undefined;
        let benchmarkAnnualized: number | undefined = undefined;

        if (selectedBenchmark !== 'none' && benchmarkBasePrice && benchmarkBasePrice > 0) {
          if (benchmarkData.has(p.date)) {
            runningBenchmarkPrice = benchmarkData.get(p.date)!;
          }
          if (runningBenchmarkPrice && runningBenchmarkPrice > 0) {
            benchmarkPerf = ((runningBenchmarkPrice / benchmarkBasePrice) - 1) * 100;

            if (days >= 7) {
              const years = days / 365.25;
              const rBm = benchmarkPerf / 100;
              if (rBm <= -1) {
                benchmarkAnnualized = -100;
              } else {
                const annBm = (Math.pow(1 + rBm, 1 / years) - 1) * 100;
                benchmarkAnnualized = isFinite(annBm) ? annBm : benchmarkPerf;
              }
            } else if (days > 0) {
              const linearBm = (benchmarkPerf / days) * 365.25;
              benchmarkAnnualized = isFinite(linearBm) ? linearBm : benchmarkPerf;
            } else {
              benchmarkAnnualized = benchmarkPerf;
            }
          }
        }

        return {
            date: p.date,
            performance: perf,
            annualized: Math.min(999.99, Math.max(-100, annualized)),
            benchmarkPerf: typeof benchmarkPerf === 'number' ? Number(benchmarkPerf.toFixed(2)) : undefined,
            benchmarkAnnualized: typeof benchmarkAnnualized === 'number' ? Number(benchmarkAnnualized.toFixed(2)) : undefined,
        };
    });

  }, [dailyHistory, range, selectedBenchmark, benchmarkData]);

  const lastData = chartData.length > 0 ? chartData[chartData.length - 1] : null;
  const lastPerf = lastData ? lastData.performance : 0;
  const lastAnnualized = lastData ? lastData.annualized : 0;
  const lastBenchPerf = lastData && typeof lastData.benchmarkPerf === 'number' ? lastData.benchmarkPerf : null;
  const lastBenchAnnualized = lastData && typeof lastData.benchmarkAnnualized === 'number' ? lastData.benchmarkAnnualized : null;

  const displayPerf = hoveredPoint ? hoveredPoint.performance : lastPerf;
  const displayAnnualized = hoveredPoint ? hoveredPoint.annualized : lastAnnualized;
  const displayBenchPerf = hoveredPoint && typeof hoveredPoint.benchmarkPerf === 'number' 
    ? hoveredPoint.benchmarkPerf 
    : lastBenchPerf;
  const displayBenchAnnualized = hoveredPoint && typeof hoveredPoint.benchmarkAnnualized === 'number'
    ? hoveredPoint.benchmarkAnnualized
    : lastBenchAnnualized;
  const displayDate = hoveredPoint ? hoveredPoint.date : null;
  const displayAlpha = displayBenchPerf !== null ? (displayPerf - displayBenchPerf) : null;

  // --- EXACT DURATION SPAN (Ani și zile) ---
  const periodSpan = useMemo(() => {
    if (chartData.length < 2) return null;
    return getDetailedPeriodSpan(chartData[0].date, chartData[chartData.length - 1].date);
  }, [chartData]);

  const timeRanges: TimeRange[] = ['1Z', '1L', '3L', '6L', 'YTD', '1A', '3A', '5A', 'MAX'];
  const currentBenchmarkOpt = getBenchmarkOption(selectedBenchmark);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-[500px] relative flex flex-col shadow-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4 z-10">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <Percent size={18} className="text-blue-400" /> Performanță Portofoliu
                    </h3>

                    {/* Selector Benchmark în dreptul titlului */}
                    <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700/80 rounded-lg px-2.5 py-1 shadow-sm">
                        <BarChart3 size={14} className="text-amber-400" />
                        <label htmlFor="benchmark-select" className="text-xs font-semibold text-slate-300">
                            Benchmark:
                        </label>
                        <select 
                            id="benchmark-select"
                            value={selectedBenchmark} 
                            onChange={(e) => {
                                const bId = e.target.value as BenchmarkId;
                                setSelectedBenchmark(bId);
                                setBenchmarkData(getBenchmarkDataSync(bId));
                            }}
                            className="bg-slate-900 text-xs font-semibold text-amber-300 border border-slate-700 rounded px-2 py-0.5 focus:outline-none focus:ring-1 focus:ring-amber-400 cursor-pointer"
                        >
                            {BENCHMARK_OPTIONS.map(opt => (
                                <option key={opt.id} value={opt.id} className="bg-slate-900 text-white">
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                        {isLoadingBenchmark && (
                            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-ping ml-1" title="Se sincronizează datele benchmark..." />
                        )}
                    </div>
                </div>

                {/* Valori în timp real: Portofoliu, TWR Anualizat, Benchmark, Alfa, Perioadă */}
                <div className="flex items-center gap-2 flex-wrap">
                    {/* Randament Cumulat Portofoliu */}
                    <div 
                      className={`px-2.5 py-0.5 rounded-md text-sm font-bold border transition-colors ${displayPerf >= 0 ? 'bg-blue-900/20 border-blue-500/20 text-blue-400' : 'bg-rose-900/20 border-rose-500/20 text-rose-400'}`}
                      title="Performanță cumulată (TWR) portofoliu pentru perioada selectată"
                    >
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mr-1">Portofoliu:</span>
                        <span>{displayPerf >= 0 ? '+' : ''}{displayPerf.toFixed(2)}%</span>
                    </div>

                    {/* TWR Anualizat */}
                    <div 
                      className={`px-2.5 py-0.5 rounded-md text-sm font-bold border flex items-center gap-1.5 transition-colors ${displayAnnualized >= 0 ? 'bg-emerald-900/20 border-emerald-500/30 text-emerald-400' : 'bg-rose-900/20 border-rose-500/30 text-rose-400'}`}
                      title="Randament ponderat în timp anualizat (Time-Weighted Return Anualizat / CAGR)"
                    >
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">TWR Anualizat:</span>
                        <span>{displayAnnualized >= 0 ? '+' : ''}{displayAnnualized.toFixed(2)}% <span className="text-[11px] font-normal opacity-80">/ an</span></span>
                    </div>

                    {/* Benchmark & Alfa dacă este selectat un indice */}
                    {selectedBenchmark !== 'none' && displayBenchPerf !== null && (
                        <>
                            <div 
                              className={`px-2.5 py-0.5 rounded-md text-sm font-bold border flex items-center gap-1.5 bg-amber-950/20 border-amber-500/30 text-amber-400`}
                              title={`Randament benchmark (${currentBenchmarkOpt.label})`}
                            >
                                <span className="text-[10px] font-semibold text-amber-400/80 uppercase tracking-wider">
                                    {currentBenchmarkOpt.shortLabel}:
                                </span>
                                <span>{displayBenchPerf >= 0 ? '+' : ''}{displayBenchPerf.toFixed(2)}%</span>
                            </div>

                            <div 
                              className={`px-2 py-0.5 rounded-md text-xs font-bold border flex items-center gap-1 ${
                                displayAlpha !== null && displayAlpha >= 0 
                                  ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-400' 
                                  : 'bg-rose-950/30 border-rose-500/30 text-rose-400'
                              }`}
                              title="Alfa (Diferența de performanță: Portofoliu minus Benchmark)"
                            >
                                <span className="text-[10px] font-semibold opacity-80">Alfa:</span>
                                <span>{displayAlpha !== null && displayAlpha >= 0 ? '+' : ''}{displayAlpha?.toFixed(2)}%</span>
                            </div>
                        </>
                    )}

                    {/* Badge Durată & Perioadă (Ani și Zile) */}
                    {periodSpan && (
                      <div 
                        className="px-2.5 py-0.5 rounded-md text-xs font-semibold border flex items-center gap-1.5 bg-slate-800/90 border-slate-700/80 text-slate-200 shadow-sm"
                        title={`Perioadă: ${periodSpan.durationText}`}
                      >
                        <Calendar size={13} className="text-blue-400" />
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider">Perioadă:</span>
                        <span className="text-white font-bold">{periodSpan.durationText}</span>
                      </div>
                    )}
                </div>

                {/* Legendă & Subtitlu */}
                <div className="flex items-center gap-3 mt-0.5 flex-wrap">
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                       <Info size={10} /> Randament ponderat în timp (TWR / Unit Value)
                    </p>
                    {selectedBenchmark !== 'none' && (
                        <div className="flex items-center gap-3 text-[11px]">
                            <span className="flex items-center gap-1.5 text-blue-400 font-medium">
                                <span className="inline-block w-3.5 h-0.5 bg-blue-500 rounded"></span> Portofoliu
                            </span>
                            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                                <span className="inline-block w-3.5 h-0.5 border-t-2 border-dashed border-amber-400"></span> {currentBenchmarkOpt.shortLabel}
                            </span>
                        </div>
                    )}
                    {displayDate && (
                      <span className="text-[10px] text-blue-400 font-mono bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-800/40">
                        {new Date(displayDate).toLocaleDateString('ro-RO', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    )}
                </div>
            </div>

            {/* Selector interval de timp */}
            <div className="flex bg-slate-800/50 p-1 rounded-lg border border-slate-700/50 shadow-inner overflow-x-auto max-w-full">
                {timeRanges.map(r => (
                    <button 
                        key={r} 
                        onClick={() => setRange(r)} 
                        className={`px-3 py-1 text-[10px] uppercase font-bold rounded-md transition-all whitespace-nowrap ${
                            range === r ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'
                        }`}
                    >
                        {r}
                    </button>
                ))}
            </div>
        </div>

        <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart 
                    data={chartData} 
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    onMouseMove={(e: any) => {
                        if (e && e.activePayload && e.activePayload.length > 0) {
                            const item = e.activePayload[0].payload;
                            if (item) {
                                setHoveredPoint({
                                    date: item.date,
                                    performance: item.performance,
                                    annualized: item.annualized,
                                    benchmarkPerf: item.benchmarkPerf,
                                    benchmarkAnnualized: item.benchmarkAnnualized,
                                });
                            }
                        }
                    }}
                    onMouseLeave={() => setHoveredPoint(null)}
                >
                    <defs>
                        <linearGradient id="colorPerfNav" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={displayPerf >= 0 ? "#3b82f6" : "#f43f5e"} stopOpacity={0.25}/>
                            <stop offset="95%" stopColor={displayPerf >= 0 ? "#3b82f6" : "#f43f5e"} stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.1} />
                    <ReferenceLine y={0} stroke="#475569" strokeWidth={1} strokeDasharray="5 5" />
                    <XAxis 
                        dataKey="date" 
                        stroke="#64748b" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false} 
                        minTickGap={40} 
                        tickFormatter={d => new Date(d).toLocaleDateString('ro-RO', {month:'short', day:'numeric'})} 
                    />
                    <YAxis 
                        stroke="#64748b" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false} 
                        tickFormatter={v => `${v}%`} 
                    />
                    <Tooltip 
                        content={({ active, payload, label }) => {
                            if (!active || !payload || !payload.length) return null;
                            const p = payload[0]?.payload;
                            if (!p) return null;
                            const perfVal = p.performance;
                            const annVal = p.annualized ?? 0;
                            const benchVal = p.benchmarkPerf;
                            const benchAnn = p.benchmarkAnnualized;
                            const alphaVal = typeof benchVal === 'number' ? (perfVal - benchVal) : null;
                            const elapsed = chartData.length > 0 && chartData[0]?.date && label 
                                ? getDetailedPeriodSpan(chartData[0].date, label as string) 
                                : null;

                            return (
                                <div className="bg-slate-900/95 border border-slate-700/80 text-slate-100 rounded-lg p-3 shadow-xl backdrop-blur-sm text-xs min-w-[220px] space-y-2 pointer-events-none">
                                    <div className="text-[11px] font-semibold text-slate-400 pb-1.5 border-b border-slate-800 flex items-center justify-between gap-2">
                                        <span>{new Date(label as string).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                        {elapsed && elapsed.totalDays > 0 && (
                                            <span className="text-[10px] font-medium text-blue-400 font-mono">
                                                +{elapsed.durationText}
                                            </span>
                                        )}
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-slate-400">Portofoliu:</span>
                                            <span className={`font-bold ${perfVal >= 0 ? 'text-blue-400' : 'text-rose-400'}`}>
                                                {perfVal >= 0 ? '+' : ''}{perfVal.toFixed(2)}%
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-slate-400">TWR Anualizat:</span>
                                            <span className={`font-bold ${annVal >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                                {annVal >= 0 ? '+' : ''}{annVal.toFixed(2)}% / an
                                            </span>
                                        </div>
                                        {typeof benchVal === 'number' && (
                                            <>
                                                <div className="flex items-center justify-between gap-4 pt-1.5 border-t border-slate-800">
                                                    <span className="text-amber-400 font-medium">Benchmark ({currentBenchmarkOpt.shortLabel}):</span>
                                                    <span className="font-bold text-amber-400">
                                                        {benchVal >= 0 ? '+' : ''}{benchVal.toFixed(2)}%
                                                    </span>
                                                </div>
                                                {typeof benchAnn === 'number' && (
                                                    <div className="flex items-center justify-between gap-4">
                                                        <span className="text-slate-400">TWR Anualizat Bench:</span>
                                                        <span className="font-bold text-amber-300">
                                                            {benchAnn >= 0 ? '+' : ''}{benchAnn.toFixed(2)}% / an
                                                        </span>
                                                    </div>
                                                )}
                                                {alphaVal !== null && (
                                                    <div className="flex items-center justify-between gap-4 pt-1 border-t border-slate-800/80">
                                                        <span className="text-slate-300 font-semibold">Diferență (Alfa):</span>
                                                        <span className={`font-bold ${alphaVal >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                                            {alphaVal >= 0 ? '+' : ''}{alphaVal.toFixed(2)}%
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        }}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="performance" 
                        stroke={displayPerf >= 0 ? "#3b82f6" : "#f43f5e"} 
                        strokeWidth={2.5} 
                        fillOpacity={1} 
                        fill="url(#colorPerfNav)" 
                        isAnimationActive={false} 
                        name="Portofoliu"
                    />
                    {selectedBenchmark !== 'none' && (
                        <Line 
                            type="monotone" 
                            dataKey="benchmarkPerf" 
                            stroke="#f59e0b" 
                            strokeWidth={2.5} 
                            strokeDasharray="5 5"
                            dot={false}
                            connectNulls={true}
                            isAnimationActive={false} 
                            name="Benchmark"
                        />
                    )}
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
});
