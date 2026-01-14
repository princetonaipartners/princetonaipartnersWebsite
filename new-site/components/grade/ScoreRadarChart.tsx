'use client';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { motion } from 'framer-motion';
import type { CategoryKey, CategoryScore } from '@/lib/grade/types';
import { CATEGORY_META } from '@/lib/grade/types';

interface ScoreRadarChartProps {
  categories: Record<CategoryKey, CategoryScore>;
  className?: string;
}

export function ScoreRadarChart({ categories, className }: ScoreRadarChartProps) {
  // Transform data for radar chart
  const data = Object.entries(categories).map(([key, value]) => ({
    category: CATEGORY_META[key as CategoryKey].label,
    score: value.score,
    fullMark: 100,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={className}
    >
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid
            stroke="rgba(255, 255, 255, 0.1)"
            strokeDasharray="3 3"
          />
          <PolarAngleAxis
            dataKey="category"
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            stroke="rgba(255, 255, 255, 0.2)"
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: '#6B7280', fontSize: 10 }}
            stroke="rgba(255, 255, 255, 0.1)"
            tickCount={5}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(24, 24, 27, 0.95)',
              border: '1px solid rgba(63, 63, 70, 0.5)',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
            labelStyle={{ color: '#FAFAFA', fontWeight: 600 }}
            itemStyle={{ color: '#A1A1AA' }}
            formatter={(value) => [`${value ?? 0}/100`, 'Score']}
          />
          <Radar
            name="Score"
            dataKey="score"
            stroke="#0A84FF"
            strokeWidth={2}
            fill="#0A84FF"
            fillOpacity={0.3}
            animationBegin={300}
            animationDuration={1000}
            animationEasing="ease-out"
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
