
import React, { useState, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { Asset, Portfolio, AssetType, TransactionType } from '../types';
import { ASSET_TYPE_COLORS } from '../constants';
import { Calendar, Wallet } from 'lucide-react';

interface BaseChartProps {
  currency: string;
  convertValue: (amount: number, from: string, to: string) => number;
}

interface AllocationChartProps extends BaseChartProps {
  assets: Asset[];
  cashBalance: number;
}

export const AllocationChart: React.FC<AllocationChartProps> = React.memo(({ assets, currency, convertValue, cashBalance }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const data = assets.reduce((acc, asset) => {
    const value = convertValue(asset.quantity * asset.currentPrice, asset.currency, currency);
    const existing = acc.find(item => item.name === asset.type);
    if (existing) existing.value += value;
    else acc.push({ name: asset.type, value: value });
    return acc;
  }, [] as { name: string; value: number }[]);

  if (cashBalance > 0.01) {
     const existingCash = data.find(item => item.name === AssetType.CASH);
     if (existingCash) existingCash.value += cashBalance;
     else data.push({ name: AssetType.CASH, value: cashBalance });
  }

  const filteredData = data.filter(item => item.value > 0).sort((a, b) => b.value - a.value);

  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, name } = props;
    
    // Desktop: Hide labels for slices smaller than 4% to prevent text overlap
    if (percent < 0.04) return null;

    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-midAngle * RADIAN);
    const cos = Math.cos(-midAngle * RADIAN);
    const sx = cx + outerRadius * cos;
    const sy = cy + outerRadius * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
    const color = ASSET_TYPE_COLORS[name as AssetType] || '#CBD5E1';

    return (
      <g>
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={color} fill="none" strokeWidth={1} opacity={0.8} />
        <circle cx={ex} cy={ey} r={2} fill={color} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={-8} textAnchor={textAnchor} fill="#f1f5f9" fontSize={13} fontWeight="600">{name}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={12} textAnchor={textAnchor} fill="#94a3b8" fontSize={12}>{`${(percent * 100).toFixed(2)}%`}</text>
      </g>
    );
  };

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie 
            data={filteredData} 
            cx={isMobile ? "40%" : "50%"} // Shift left on mobile to make room for legend
            cy="50%" 
            innerRadius={isMobile ? 50 : 80} 
            outerRadius={isMobile ? 70 : 120} 
            paddingAngle={3} 
            dataKey="value" 
            stroke="none" 
            label={isMobile ? undefined : renderCustomizedLabel} 
            labelLine={false}
          >
            {filteredData.map((entry, index) => (<Cell key={`cell-${index}`} fill={ASSET_TYPE_COLORS[entry.name as AssetType] || '#CBD5E1'} />))}
          </Pie>
          <Tooltip 
            formatter={(value: number) => `${value.toLocaleString('ro-RO', { minimumFractionDigits: 2 })} ${currency}`} 
            contentStyle={{ 
                backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                borderColor: '#334155', 
                color: '#f1f5f9', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
            }} 
            itemStyle={{ color: '#ffffff' }}
          />
          {/* Mobile Legend - Vertical on Right */}
          {isMobile && (
             <Legend 
                layout="vertical" 
                verticalAlign="middle" 
                align="right"
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: '10px', right: 0 }}
                formatter={(value, entry: any) => {
                    const total = filteredData.reduce((a,b)=>a+b.value,0);
                    const percent = total > 0 ? ((entry.payload.value / total) * 100).toFixed(1) : "0.0";
                    return <span className="text-slate-300 ml-1">{value} <span className="text-slate-500">({percent}%)</span></span>;
                }}
             />
          )}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
});

interface PerformanceChartProps extends BaseChartProps {
  portfolios: Portfolio[];
}

export const InvestmentHistoryChart: React.FC<PerformanceChartProps> = React.memo(({ portfolios, currency, convertValue }) => {
  const currentYear = new Date().getFullYear().toString();
  const [selectedYear, setSelectedYear] = useState<string>(currentYear);

  const { years, monthlyData, monthlyDetails } = useMemo(() => {
    const uniqueYears = new Set<string>([currentYear]);
    const data: Record<string, number> = {};
    const details: Record<string, { dateStr: string; amount: number }[]> = {};

    portfolios.forEach(p => {
      (p.transactions || []).forEach(t => {
        if (!t.date) return;
        const y = t.date.substring(0, 4);
        uniqueYears.add(y);
        if (t.type === TransactionType.DEPOSIT) {
          const date = new Date(t.date + 'T00:00:00Z');
          const m = parseInt(t.date.substring(5, 7), 10) - 1;
          const key = `${y}-${m}`;
          const val = convertValue(Number(t.amount) || 0, t.currency, currency);
          data[key] = (data[key] || 0) + val;
          if (!details[key]) details[key] = [];
          details[key].push({
            dateStr: date.toLocaleDateString('ro-RO', { day: 'numeric', month: 'short' }),
            amount: val
          });
        }
      });
    });

    return { years: Array.from(uniqueYears).sort().reverse(), monthlyData: data, monthlyDetails: details };
  }, [portfolios, currency, convertValue, currentYear]);

  useEffect(() => {
    if (!years.includes(selectedYear) && years.length > 0) {
      setSelectedYear(years[0]);
    }
  }, [years, selectedYear]);

  const chartData = useMemo(() => {
    const months = ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.map((name, index) => {
      const key = `${selectedYear}-${index}`;
      return { name, fullDate: `${name} ${selectedYear}`, value: monthlyData[key] || 0, details: monthlyDetails[key] || [] };
    });
  }, [selectedYear, monthlyData, monthlyDetails]);

  const totalForYear = useMemo(() => chartData.reduce((acc, curr) => acc + curr.value, 0), [chartData]);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl text-xs" style={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', color: '#f1f5f9' }}>
          <p className="font-bold text-white mb-2">{data.fullDate}</p>
          <div className="space-y-1 mb-2 max-h-40 overflow-y-auto">
            {data.details.map((detail: any, idx: number) => (
              <div key={idx} className="flex justify-between gap-4 text-slate-300">
                <span>{detail.dateStr}:</span>
                <span className="font-mono text-emerald-400">+{detail.amount.toLocaleString('ro-RO', { maximumFractionDigits: 2 })} {currency}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-4 pt-1 border-t border-slate-700 font-bold text-white">
            <span>Total:</span>
            <span>{data.value.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {currency}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-full w-full relative">
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-start pointer-events-none">
        <div className="pointer-events-auto bg-emerald-900/20 border border-emerald-500/30 rounded-lg px-3 py-1.5 shadow-sm flex items-center gap-2"><Wallet size={14} className="text-emerald-400" /><div className="flex flex-col leading-none"><span className="text-[10px] text-slate-400 uppercase font-semibold">Total {selectedYear}</span><span className="text-sm font-bold text-white">{totalForYear.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-[10px] font-normal text-slate-400">{currency}</span></span></div></div>
        <div className="pointer-events-auto flex items-center bg-slate-800 rounded-lg border border-slate-700 px-2 py-1"><Calendar size={14} className="text-slate-400 mr-2" /><select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="bg-transparent text-slate-200 text-sm font-medium outline-none cursor-pointer">{years.map(year => (<option key={year} value={year} className="bg-slate-800 text-slate-200">Anul {year}</option>))}</select></div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 50, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
          <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dy={10} />
          <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#334155', opacity: 0.2 }} />
          <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 4, 4]} maxBarSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
});
