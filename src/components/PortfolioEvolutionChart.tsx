import React, { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { DailySnapshot } from '../services/portfolioEngine';

interface PortfolioEvolutionChartProps {
  dailyHistory: DailySnapshot[];
  currency: string;
  convertValue: (amount: number, from: string, to: string) => number;
  dailyChange?: number;
  dailyChangePercent?: number;
}

type TimeRange = '1Z' | '1S' | '1L' | '3L' | '6L' | 'YTD' | '1A' | '5A' | 'MAX';

export const PortfolioEvolutionChart: React.FC<PortfolioEvolutionChartProps> = React.memo(({
  dailyHistory,
  currency,
  convertValue,
  dailyChange = 0,
  dailyChangePercent = 0
}) => {
  const [range, setRange] = useState<TimeRange>('MAX');

  const { chartData, rangeStats } = useMemo(() => {
    if (!dailyHistory || dailyHistory.length === 0) {
      return { chartData: [], rangeStats: { delta: 0, percent: 0 } };
    }

    const activeSeries = dailyHistory.length > 1 && dailyHistory[0].netWorth === 0
      ? dailyHistory.slice(1)
      : dailyHistory;

    const today = new Date();
    const firstDateStr = activeSeries[0].date;
    let cutDate = new Date(today);

    switch (range) {
      case '1Z': cutDate.setDate(today.getDate() - 1); break;
      case '1S': cutDate.setDate(today.getDate() - 7); break;
      case '1L': cutDate.setMonth(today.getMonth() - 1); break;
      case '3L': cutDate.setMonth(today.getMonth() - 3); break;
      case '6L': cutDate.setMonth(today.getMonth() - 6); break;
      case 'YTD': cutDate = new Date(today.getFullYear(), 0, 1); break;
      case '1A': cutDate.setFullYear(today.getFullYear() - 1); break;
      case '5A': cutDate.setFullYear(today.getFullYear() - 5); break;
      case 'MAX': default: cutDate = new Date(firstDateStr + 'T00:00:00Z'); break;
    }

    const cutStr = range === 'MAX' ? firstDateStr : cutDate.toISOString().split('T')[0];

    let startIdx = activeSeries.findIndex(p => p.date >= cutStr);
    if (startIdx === -1) startIdx = Math.max(0, activeSeries.length - 1);

    const sliced = activeSeries.slice(startIdx);
    if (sliced.length === 0) {
      return { chartData: [], rangeStats: { delta: 0, percent: 0 } };
    }

    const baselineSnap = startIdx > 0 ? activeSeries[startIdx - 1] : dailyHistory[0];
    let netFlowInPeriod = 0;

    const points = sliced.map(snap => {
      netFlowInPeriod += snap.dailyExternalFlow;
      return {
        date: snap.date,
        value: snap.netWorth
      };
    });

    if (range === '1Z') {
      return {
        chartData: points,
        rangeStats: {
          delta: dailyChange,
          percent: dailyChangePercent
        }
      };
    }

    const endSnap = sliced[sliced.length - 1];
    const profitDelta = (endSnap.netWorth - baselineSnap.netWorth) - netFlowInPeriod;
    const twrPercent = baselineSnap.unitPrice > 0
      ? ((endSnap.unitPrice / baselineSnap.unitPrice) - 1) * 100
      : 0;

    return {
      chartData: points,
      rangeStats: {
        delta: profitDelta,
        percent: twrPercent
      }
    };
  }, [dailyHistory, range, dailyChange, dailyChangePercent]);

  const ranges: TimeRange[] = ['1Z', '1S', '1L', '3L', '6L', 'YTD', '1A', '5A', 'MAX'];
  const minValue = chartData.length > 0 ? Math.max(0, Math.min(...chartData.map(d => d.value)) * 0.95) : 0;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-[400px] relative flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-white">Evoluție Portofoliu</h3>

            {/* Dynamic Performance Badge based on selected Range (Economic Profit + Official TWR %) */}
            <div
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium border ${
                rangeStats.delta >= 0
                  ? 'bg-emerald-900/20 border-emerald-500/20 text-emerald-400'
                  : 'bg-rose-900/20 border-rose-500/20 text-rose-400'
              }`}
              title="Profit economic real (exclude depunerile) și randament oficial TWR pe perioada selectată"
            >
              {rangeStats.delta > 0 ? <TrendingUp size={14} /> : rangeStats.delta < 0 ? <TrendingDown size={14} /> : <Minus size={14} />}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span>
                    {rangeStats.delta > 0 ? '+' : ''}{rangeStats.delta.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {currency}
                  </span>
                  <span className="opacity-70 text-xs">
                    ({rangeStats.percent > 0 ? '+' : ''}{rangeStats.percent.toFixed(2)}%)
                  </span>
                  <span className="text-[10px] uppercase opacity-60 ml-0.5 tracking-tighter">{range}</span>
                </div>
                {currency === 'RON' && (
                  <span className="text-[10px] font-normal text-slate-400 opacity-80">
                    ≈ {rangeStats.delta > 0 ? '+' : ''}{convertValue(rangeStats.delta, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                  </span>
                )}
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-1">Valoare Netă Estimată (Cash + Active)</p>
        </div>
        <div className="flex bg-slate-800/50 p-1 rounded-lg border border-slate-700/50 overflow-x-auto max-w-full">
          {ranges.map(r => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                range === r ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
            <XAxis dataKey="date" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} minTickGap={30} tickFormatter={d => new Date(d).toLocaleDateString('ro-RO', { month: 'short', day: 'numeric' })} />
            <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} domain={[minValue, 'auto']} tickFormatter={(val) => val >= 1000 ? `${(val / 1000).toFixed(0)}k` : val.toFixed(0)} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                borderColor: '#334155',
                color: '#f1f5f9',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
              }}
              itemStyle={{ color: '#ffffff' }}
              labelStyle={{ color: '#94a3b8' }}
              labelFormatter={d => new Date(d as string).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}
              formatter={(value: number) => {
                const primaryStr = `${value.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}`;
                if (currency === 'RON') {
                  const eurVal = convertValue(value, 'RON', 'EUR');
                  return [`${primaryStr} (≈ ${eurVal.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR)`, 'Valoare Netă'];
                }
                return [primaryStr, 'Valoare Netă'];
              }}
            />
            <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" animationDuration={1000} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
});
