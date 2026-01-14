/**
 * Website Grader Types
 * Core type definitions for the website analysis feature
 */

export type GradeLevel = 'A+' | 'A' | 'B+' | 'B' | 'C' | 'D' | 'F';

export type FindingType = 'success' | 'warning' | 'error';

export type ImpactLevel = 'high' | 'medium' | 'low';

export type CategoryKey =
  | 'seo'
  | 'performance'
  | 'mobile'
  | 'security'
  | 'accessibility'
  | 'uiux';

export interface Finding {
  type: FindingType;
  title: string;
  description: string;
  impact: ImpactLevel;
  code?: string;
}

export interface CategoryScore {
  score: number;
  grade: GradeLevel;
  findings: Finding[];
  recommendations: string[];
  weight: number;
}

export interface CategoryMeta {
  key: CategoryKey;
  label: string;
  description: string;
  icon: string;
  color: string;
}

export interface WebsiteAnalysis {
  id: string;
  url: string;
  domain: string;
  analyzedAt: string;
  overallScore: number;
  letterGrade: GradeLevel;
  categories: Record<CategoryKey, CategoryScore>;
  screenshot?: string;
  loadTime?: number;
}

export interface AnalysisRequest {
  url: string;
  email?: string;
}

export interface AnalysisResponse {
  success: boolean;
  data?: WebsiteAnalysis;
  error?: string;
}

// Category metadata for UI
export const CATEGORY_META: Record<CategoryKey, CategoryMeta> = {
  seo: {
    key: 'seo',
    label: 'SEO',
    description: 'Search engine optimization',
    icon: 'Search',
    color: '#0A84FF',
  },
  performance: {
    key: 'performance',
    label: 'Performance',
    description: 'Speed & loading',
    icon: 'Zap',
    color: '#10B981',
  },
  mobile: {
    key: 'mobile',
    label: 'Mobile',
    description: 'Mobile responsiveness',
    icon: 'Smartphone',
    color: '#8B5CF6',
  },
  security: {
    key: 'security',
    label: 'Security',
    description: 'Security & trust',
    icon: 'Shield',
    color: '#EF4444',
  },
  accessibility: {
    key: 'accessibility',
    label: 'Accessibility',
    description: 'Inclusive design',
    icon: 'Eye',
    color: '#F59E0B',
  },
  uiux: {
    key: 'uiux',
    label: 'UI/UX',
    description: 'Design & usability',
    icon: 'Palette',
    color: '#EC4899',
  },
};

// Score to grade mapping
export function scoreToGrade(score: number): GradeLevel {
  if (score >= 95) return 'A+';
  if (score >= 85) return 'A';
  if (score >= 75) return 'B+';
  if (score >= 65) return 'B';
  if (score >= 50) return 'C';
  if (score >= 35) return 'D';
  return 'F';
}

// Grade to color mapping
export function gradeToColor(grade: GradeLevel): string {
  switch (grade) {
    case 'A+':
    case 'A':
      return '#10B981'; // Green
    case 'B+':
    case 'B':
      return '#0A84FF'; // Blue
    case 'C':
      return '#F59E0B'; // Orange
    case 'D':
    case 'F':
      return '#EF4444'; // Red
    default:
      return '#6B7280'; // Gray
  }
}

// Score to color mapping (gradient)
export function scoreToColor(score: number): string {
  if (score >= 80) return '#10B981';
  if (score >= 60) return '#0A84FF';
  if (score >= 40) return '#F59E0B';
  return '#EF4444';
}
