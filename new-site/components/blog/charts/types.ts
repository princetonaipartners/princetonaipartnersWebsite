/**
 * Chart data types for blog visualizations
 */

export interface ComparisonDataPoint {
  metric: string;
  before: number;
  after: number;
}

export interface TrendDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}

export interface BarChartProps {
  data: ComparisonDataPoint[];
  title?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeColor?: string;
  afterColor?: string;
}

export interface LineChartProps {
  data: TrendDataPoint[];
  title?: string;
  dataKey?: string;
  xAxisKey?: string;
  color?: string;
}

export interface SimpleBarChartProps {
  data: { name: string; value: number; fill?: string }[];
  title?: string;
  color?: string;
}
