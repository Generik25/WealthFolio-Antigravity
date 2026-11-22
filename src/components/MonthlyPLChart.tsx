import React, { useState, useMemo, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { Calendar, TrendingUp, Info } from 'lucide-react';
import { DailySnapshot } from '../services/portfolioEngine';

interface MonthlyPLChartProps {
  dailyHistory: DailySnapshot[];
  currency: string;
  convertValue: (amount: number, from: string, to: string) => number;
}

const MonthlyPLChartImpl: React.FC<MonthlyPLChartProps> = ({ dailyHistory, currency, convertValue }) => {
  const currentYear = new Date().getFullYear().toString();
  const [selectedYear, setSelectedYear] = useState<string>(currentYear);

  // --- OFFICIAL MONTHLY MARK-TO-MARKET ECONOMIC P/L + MONTHLY TWR % ---
  const { years, monthlyData, totalForYear } = useMemo(() => {
    if (!dailyHistory || dailyHistory.length === 0) {
      return { years: [currentYear], monthlyData: {}, totalForYear: 0 };
    }

    const activeSeries = dailyHistory.length > 1 && dailyHistory[0].netWorth === 0
      ? dailyHistory.slice(1)
      : dailyHistory;

    const uniqueYears = new Set<string>([currentYear]);
    // Group end-of-month snapshot + sum of daily external flows within each month
    const monthBuckets = new Map<string, {
      endNetWorth: number;
      endUnitPrice: number;
      monthlyExternalFlow: number;
    }>();

    activeSeries.forEach((snap) => {
      const y = snap.date.substring(0, 4);
      const m = parseInt(snap.date.substring(5, 7), 10) - 1; // 0..11
      const key = `${y}-${m}`;
      uniqueYears.add(y);

      const existing = monthBuckets.get(key);
      if (existing) {
        existing.endNetWorth = snap.netWorth;
        existing.endUnitPrice = snap.unitPrice;
        existing.monthlyExternalFlow += snap.dailyExternalFlow;
      } else {
        monthBuckets.set(key, {
          endNetWorth: snap.netWorth,
          endUnitPrice: snap.unitPrice,
          monthlyExternalFlow: snap.dailyExternalFlow
        });
      }
    });

    const monthlyProfit: Record<string, { value: number; percent: number }> = {};
    const sortedYears = Array.from(uniqueYears).sort().reverse();
    const ascYears = [...sortedYears].reverse();

    let prevNetWorth = 0;
    let prevUnitPrice = 100;

    ascYears.forEach((year) => {
      for (let m = 0; m < 12; m++) {
        const key = `${year}-${m}`;
        const bucket = monthBuckets.get(key);
        if (!bucket) continue;

        // Economic profit in month = Change in Net Worth minus Net External Cash Flows
        const profit = (bucket.endNetWorth - prevNetWorth) - bucket.monthlyExternalFlow;
        // Official Monthly TWR % = (End NAV / Previous Month End NAV - 1) * 100
        const percent = prevUnitPrice > 0
          ? ((bucket.endUnitPrice / prevUnitPrice) - 1) * 100
          : 0;

        if (Math.abs(profit) > 0.01 || Math.abs(percent) > 0.01) {
          monthlyProfit[key] = { value: profit, percent };
        }

        prevNetWorth = bucket.endNetWorth;
        prevUnitPrice = bucket.endUnitPrice;
      }
    });

    let total = 0;
    for (let i = 0; i < 12; i++) {
      total += (monthlyProfit[`${selectedYear}-${i}`]?.value || 0);
    }

    return { years: sortedYears, monthlyData: monthlyProfit, totalForYear: total };
  }, [dailyHistory, selectedYear, currentYear]);

  useEffect(() => {
    if (!years.includes(selectedYear) && years.length > 0) {
      setSelectedYear(years[0]);
    }
  }, [years, selectedYear]);

  const chartData = useMemo(() => {
    const months = ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.map((name, index) => {
      const data = monthlyData[`${selectedYear}-${index}`] || { value: 0, percent: 0 };
      return {
        name,
        value: data.value,
        percent: data.percent,
        color: data.value >= 0 ? '#10b981' : '#f43f5e'
      };
    });
  }, [selectedYear, monthlyData]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-[400px] relative flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 z-10 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <TrendingUp size={18} className="text-emerald-400" />
            Profit/Pierdere (Lunar)
          </h3>
          <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
            <Info size={12} />
            Profit Economic Real (Mark-to-Market) &amp; Randament Lunar TWR
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <div className={`px-3 py-1.5 rounded-lg border flex flex-col items-end leading-none backdrop-blur-sm ${
            totalForYear >= 0
              ? 'bg-emerald-900/10 border-emerald-500/20'
              : 'bg-rose-900/10 border-rose-500/20'
          }`}>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Rezultat {selectedYear}</span>
            <span className={`text-sm font-bold ${totalForYear >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {totalForYear > 0 ? '+' : ''}{totalForYear.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {currency}
            </span>
            {currency === 'RON' && (
              <span className="text-[10px] font-normal text-slate-400 mt-0.5">
                ≈ {totalForYear > 0 ? '+' : ''}{convertValue(totalForYear, 'RON', 'EUR').toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
              </span>
            )}
          </div>

          <div className="flex items-center bg-slate-800 rounded-lg border border-slate-700 px-2 py-1 shadow-sm">
            <Calendar size={14} className="text-slate-400 mr-2" />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-transparent text-slate-200 text-sm font-medium outline-none cursor-pointer"
            >
              {years.map(year => (
                <option key={year} value={year} className="bg-slate-800 text-slate-200">
                  Anul {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
            <ReferenceLine y={0} stroke="#64748b" strokeWidth={1} />
            <XAxis
              dataKey="name"
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => Math.abs(value) >= 1000 ? `${(value / 1000).toFixed(0)}k` : value.toFixed(0)}
            />
            <Tooltip
              cursor={{ fill: '#334155', opacity: 0.2 }}
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                borderColor: '#334155',
                color: '#f1f5f9',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
              }}
              itemStyle={{ color: '#ffffff' }}
              formatter={(value: number, name: string, props: any) => {
                const percent = props.payload.percent || 0;
                const isPositive = percent >= 0;
                const eurVal = currency === 'RON' ? convertValue(value, 'RON', 'EUR') : null;
                return [
                  <div key="val" className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className={value >= 0 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                        {value > 0 ? '+' : ''}{value.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {currency}
                      </span>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${isPositive ? 'bg-emerald-900/40 text-emerald-300' : 'bg-rose-900/40 text-rose-300'}`}>
                        {isPositive ? '+' : ''}{percent.toFixed(2)}% TWR
                      </span>
                    </div>
                    {eurVal !== null && (
                      <span className="text-[11px] text-slate-400">
                        ≈ {value > 0 ? '+' : ''}{eurVal.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
                      </span>
                    )}
                  </div>,
                  <span key="label" className="text-slate-400 text-xs uppercase font-semibold">Rezultat Net</span>
                ];
              }}
              labelStyle={{ color: '#94a3b8', marginBottom: '0.5rem' }}
            />
            <Bar dataKey="value" radius={[4, 4, 4, 4]} maxBarSize={40} animationDuration={600}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const MonthlyPLChart = React.memo(MonthlyPLChartImpl);
