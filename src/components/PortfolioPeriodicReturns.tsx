import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Rectangle } from 'recharts';
import { DailySnapshot } from '../services/portfolioEngine';

interface PortfolioPeriodicReturnsProps {
  dailyHistory: DailySnapshot[];
}

export const PortfolioPeriodicReturns: React.FC<PortfolioPeriodicReturnsProps> = React.memo(({
  dailyHistory
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

    // Helper: returns the closing unitPrice on or before `dateStr` (official GIPS closing-NAV boundary)
    const getClosingUnitPriceOnOrBefore = (dateStr: string): number | null => {
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
      return dailyHistory[ans].unitPrice;
    };

    // --- 1. OFFICIAL CALENDAR YEAR RETURNS (TWR) ---
    // For year Y: compares Dec 31 of Y (or today if current year) vs Dec 31 of Y-1 (or 100 for inception year)
    const allYears = Array.from(new Set(activeSeries.map(p => p.date.substring(0, 4)))).sort().reverse();
    const years = allYears.map(year => {
      const prevYearEnd = `${parseInt(year, 10) - 1}-12-31`;
      const pStart = getClosingUnitPriceOnOrBefore(prevYearEnd) ?? 100;
      const pEnd = year === currentYearStr
        ? currentPrice
        : (getClosingUnitPriceOnOrBefore(`${year}-12-31`) ?? currentPrice);
      return {
        name: year,
        value: pStart > 0 ? ((pEnd / pStart) - 1) * 100 : 0
      };
    });

    // --- 2. OFFICIAL TRAILING PERIOD RETURNS (TWR) ---
    // Only include periods for which the portfolio actually has sufficient history (never duplicate MAX into 3A/5A!)
    const todayDate = new Date(todayStr + 'T00:00:00Z');
    const shiftDate = (months: number, yearsBack: number): string => {
      const d = new Date(todayDate);
      if (yearsBack > 0) d.setUTCFullYear(d.getUTCFullYear() - yearsBack);
      if (months > 0) d.setUTCMonth(d.getUTCMonth() - months);
      return d.toISOString().split('T')[0];
    };

    const ytdBaseline = `${parseInt(currentYearStr, 10) - 1}-12-31`;

    const candidatePeriods: Array<{ label: string; baselineDate: string; alwaysShow?: boolean }> = [
      { label: '1L', baselineDate: shiftDate(1, 0) },
      { label: '3L', baselineDate: shiftDate(3, 0) },
      { label: '6L', baselineDate: shiftDate(6, 0) },
      { label: 'YTD', baselineDate: ytdBaseline, alwaysShow: true },
      { label: '1A', baselineDate: shiftDate(0, 1) },
      { label: '3A', baselineDate: shiftDate(0, 3) },
      { label: '5A', baselineDate: shiftDate(0, 5) },
      { label: 'MAX', baselineDate: dailyHistory[0].date, alwaysShow: true }
    ];

    const periodData: Array<{ name: string; value: number }> = [];
    for (const p of candidatePeriods) {
      if (p.label === 'MAX') {
        periodData.push({
          name: 'MAX',
          value: ((currentPrice / 100) - 1) * 100
        });
        continue;
      }

      if (p.label === 'YTD') {
        const pStart = getClosingUnitPriceOnOrBefore(p.baselineDate) ?? 100;
        periodData.push({
          name: 'YTD',
          value: pStart > 0 ? ((currentPrice / pStart) - 1) * 100 : 0
        });
        continue;
      }

      // Only show trailing period if portfolio existed at or before the baseline date
      if (firstDateStr <= p.baselineDate) {
        const pStart = getClosingUnitPriceOnOrBefore(p.baselineDate);
        if (pStart && pStart > 0) {
          periodData.push({
            name: p.label,
            value: ((currentPrice / pStart) - 1) * 100
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
              <Tooltip
                cursor={false}
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
                formatter={(v: number) => [`${v >= 0 ? '+' : ''}${v.toFixed(2)}%`, 'Randament TWR']}
              />
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
              <Tooltip
                cursor={false}
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
                formatter={(v: number) => [`${v >= 0 ? '+' : ''}${v.toFixed(2)}%`, 'Randament TWR']}
              />
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
