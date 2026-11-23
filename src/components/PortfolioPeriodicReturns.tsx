import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Rectangle } from 'recharts';
import { DailySnapshot } from '../services/portfolioEngine';

interface PortfolioPeriodicReturnsProps {
  dailyHistory: DailySnapshot[];
  currency: string;
  convertValue: (amount: number, from: string, to: string) => number;
}

export const PortfolioPeriodicReturns: React.FC<PortfolioPeriodicReturnsProps> = React.memo(({
  dailyHistory,
  currency,
  convertValue
}) => {
  const { yearlyReturns, periodicReturns } = useMemo(() => {
    if (!dailyHistory || dailyHistory.length === 0) {
      return { yearlyReturns: [], periodicReturns: [] };
    }

    const activeSeries = dailyHistory.length > 1 && dailyHistory[0].netWorth === 0
      ? dailyHistory.slice(1)
      : dailyHistory;

    const firstDateStr = activeSeries[0].date;
    const lastSnap = activeSeries[activeSeries.length - 1];
    const currentPrice = lastSnap.unitPrice || 100;
    const todayStr = lastSnap.date;
    const currentYearStr = todayStr.substring(0, 4);

    // Helper: returns the closing DailySnapshot on or before `dateStr` (official GIPS closing-NAV boundary)
    const getClosingSnapshotOnOrBefore = (dateStr: string): DailySnapshot | null => {
      if (dateStr < dailyHistory[0].date) return null;
      let lo = 0;
      let hi = dailyHistory.length - 1;
      let ans = 0;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (dailyHistory[mid].date <= dateStr) {
          ans = mid;
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }
      return dailyHistory[ans];
    };

    // Helper: computes exact economic profit in (afterDate, endDate] = (EndNW - StartNW) - Sum(ExternalFlows)
    const computePeriodProfit = (startSnap: DailySnapshot | null, endSnap: DailySnapshot): number => {
      const startDate = startSnap ? startSnap.date : '';
      const startNW = startSnap ? startSnap.netWorth : 0;
      let netFlow = 0;
      for (let i = 0; i < dailyHistory.length; i++) {
        const d = dailyHistory[i];
        if (d.date > startDate && d.date <= endSnap.date) {
          netFlow += d.dailyExternalFlow;
        }
      }
      return (endSnap.netWorth - startNW) - netFlow;
    };

    // --- 1. OFFICIAL CALENDAR YEAR RETURNS (TWR) + REAL ECONOMIC PROFIT ---
    const allYears = Array.from(new Set(activeSeries.map(p => p.date.substring(0, 4)))).sort().reverse();
    const years = allYears.map(year => {
      const prevYearEnd = `${parseInt(year, 10) - 1}-12-31`;
      const startSnap = getClosingSnapshotOnOrBefore(prevYearEnd);
      const endSnap = year === currentYearStr
        ? lastSnap
        : (getClosingSnapshotOnOrBefore(`${year}-12-31`) ?? lastSnap);
      const pStart = startSnap ? startSnap.unitPrice : 100;
      const pEnd = endSnap.unitPrice;
      return {
        name: year,
        value: pStart > 0 ? ((pEnd / pStart) - 1) * 100 : 0,
        profit: computePeriodProfit(startSnap, endSnap)
      };
    });

    // --- 2. OFFICIAL TRAILING PERIOD RETURNS (TWR) + REAL ECONOMIC PROFIT ---
    const todayDate = new Date(todayStr + 'T00:00:00Z');
    const shiftDate = (months: number, yearsBack: number): string => {
      const d = new Date(todayDate);
      if (yearsBack > 0) d.setUTCFullYear(d.getUTCFullYear() - yearsBack);
      if (months > 0) d.setUTCMonth(d.getUTCMonth() - months);
      return d.toISOString().split('T')[0];
    };

    const ytdBaseline = `${parseInt(currentYearStr, 10) - 1}-12-31`;

    const candidatePeriods: Array<{ label: string; baselineDate: string }> = [
      { label: '1L', baselineDate: shiftDate(1, 0) },
      { label: '3L', baselineDate: shiftDate(3, 0) },
      { label: '6L', baselineDate: shiftDate(6, 0) },
      { label: 'YTD', baselineDate: ytdBaseline },
      { label: '1A', baselineDate: shiftDate(0, 1) },
      { label: '3A', baselineDate: shiftDate(0, 3) },
      { label: '5A', baselineDate: shiftDate(0, 5) },
      { label: 'MAX', baselineDate: dailyHistory[0].date }
    ];

    const periodData: Array<{ name: string; value: number; profit: number }> = [];
    for (const p of candidatePeriods) {
      if (p.label === 'MAX') {
        periodData.push({
          name: 'MAX',
          value: ((currentPrice / 100) - 1) * 100,
          profit: computePeriodProfit(null, lastSnap)
        });
        continue;
      }

      if (p.label === 'YTD') {
        const startSnap = getClosingSnapshotOnOrBefore(p.baselineDate);
        const pStart = startSnap ? startSnap.unitPrice : 100;
        periodData.push({
          name: 'YTD',
          value: pStart > 0 ? ((currentPrice / pStart) - 1) * 100 : 0,
          profit: computePeriodProfit(startSnap, lastSnap)
        });
        continue;
      }

      if (firstDateStr <= p.baselineDate) {
        const startSnap = getClosingSnapshotOnOrBefore(p.baselineDate);
        const pStart = startSnap?.unitPrice;
        if (startSnap && pStart && pStart > 0) {
          periodData.push({
            name: p.label,
            value: ((currentPrice / pStart) - 1) * 100,
            profit: computePeriodProfit(startSnap, lastSnap)
          });
        }
      }
    }

    return { yearlyReturns: years, periodicReturns: periodData };
  }, [dailyHistory]);

  const renderCustomBar = (props: any) => {
    const { x, y, width, height, value } = props;
    const color = value >= 0 ? '#10b981' : '#ef4444';
    return (
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={color}
        radius={[4, 4, 0, 0]}
        stroke="none"
        className="transition-all duration-300 hover:brightness-125 cursor-pointer"
      />
    );
  };

  const renderTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload || !payload.length) return null;
    const item = payload[0]?.payload;
    if (!item) return null;
    const twr = Number(item.value) || 0;
    const profit = Number(item.profit) || 0;
    const eurVal = currency === 'RON' ? convertValue(profit, 'RON', 'EUR') : null;

    return (
      <div
        className="rounded-lg p-3 text-xs shadow-xl space-y-1.5"
        style={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid #334155', color: '#fff' }}
      >
        <div className="font-bold text-slate-200 border-b border-slate-800 pb-1">{label}</div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-slate-400">Randament TWR:</span>
          <span className={`font-bold font-mono ${twr >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {twr >= 0 ? '+' : ''}{twr.toFixed(2)}%
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-slate-400">Profit real:</span>
          <span className={`font-bold font-mono ${profit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {profit >= 0 ? '+' : ''}{profit.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {currency}
          </span>
        </div>
        {eurVal !== null && (
          <div className="text-[10px] text-slate-400 text-right font-mono">
            ≈ {eurVal >= 0 ? '+' : ''}{eurVal.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Returns in Years */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-[350px] flex flex-col shadow-lg">
        <h3 className="text-lg font-semibold text-white">Randament anual</h3>
        <p className="text-xs text-slate-500 mb-6">Performanța oficială pe ani calendaristici (TWR, prețuri reale Yahoo)</p>
        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={yearlyReturns} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.1} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={11} stroke="#94a3b8" />
              <YAxis axisLine={false} tickLine={false} fontSize={10} stroke="#94a3b8" tickFormatter={v => `${v}%`} />
              <Tooltip cursor={false} content={renderTooltip} />
              <Bar dataKey="value" shape={renderCustomBar}>
                <LabelList
                  dataKey="value"
                  position="top"
                  formatter={(v: number) => `${v >= 0 ? '+' : ''}${v.toFixed(2)}%`}
                  style={{ fill: '#ffffff', fontSize: '10px', fontWeight: 'bold' }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Returns in Periods */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 h-[350px] flex flex-col shadow-lg">
        <h3 className="text-lg font-semibold text-white">Randament pe perioade</h3>
        <p className="text-xs text-slate-500 mb-6">Randamentul cumulat TWR pentru intervalele cu istoric disponibil</p>
        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={periodicReturns} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.1} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={11} stroke="#94a3b8" />
              <YAxis axisLine={false} tickLine={false} fontSize={10} stroke="#94a3b8" tickFormatter={v => `${v}%`} />
              <Tooltip cursor={false} content={renderTooltip} />
              <Bar dataKey="value" shape={renderCustomBar}>
                <LabelList
                  dataKey="value"
                  position="top"
                  formatter={(v: number) => `${v >= 0 ? '+' : ''}${v.toFixed(2)}%`}
                  style={{ fill: '#ffffff', fontSize: '10px', fontWeight: 'bold' }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
});
