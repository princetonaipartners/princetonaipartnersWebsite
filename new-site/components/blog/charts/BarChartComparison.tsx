'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { BarChartProps } from './types';

/**
 * Side-by-side bar chart for comparing before/after metrics
 */
export function BarChartComparison({
  data,
  title,
  beforeLabel = 'Before',
  afterLabel = 'After',
  beforeColor = '#6B7280',
  afterColor = '#0A84FF',
}: BarChartProps) {
  return (
    <div className="my-8 rounded-xl bg-gray-900/50 p-6 border border-gray-800">
      {title && (
        <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>
      )}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="metric"
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
          />
          <YAxis stroke="#9CA3AF" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#F3F4F6' }}
            itemStyle={{ color: '#D1D5DB' }}
          />
          <Legend wrapperStyle={{ color: '#9CA3AF' }} />
          <Bar dataKey="before" fill={beforeColor} name={beforeLabel} radius={[4, 4, 0, 0]} />
          <Bar dataKey="after" fill={afterColor} name={afterLabel} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
