// Quote Calculator TypeScript Interfaces

export type ProjectType =
  | 'mvp'
  | 'ai-system'
  | 'bespoke'
  | 'automation'
  | 'website'
  | 'bots';

export type Complexity = 'simple' | 'standard' | 'complex';

export type Timeline = 'flexible' | 'standard' | 'fast';

export type FeatureId =
  | 'auth'
  | 'admin'
  | 'payments'
  | 'api'
  | 'rag'
  | 'chatbot'
  | 'voice'
  | 'scale'
  | 'multitenant';

export interface Feature {
  id: FeatureId;
  name: string;
  description: string;
  price: number;
  category: 'core' | 'ai' | 'scale';
}

export interface ProjectTypeOption {
  id: ProjectType;
  name: string;
  description: string;
  icon: string;
  baseRange: { low: number; high: number };
}

export interface TimelineOption {
  id: Timeline;
  name: string;
  description: string;
  duration: string;
  multiplier: number;
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  description?: string;
  wantsPdf: boolean;
  wantsCall: boolean;
}

export interface QuoteState {
  currentStep: 1 | 2 | 3 | 4 | 5;
  projectType: ProjectType | null;
  complexity: Complexity;
  features: FeatureId[];
  timeline: Timeline;
  contact: ContactInfo;
}

export interface PriceEstimate {
  low: number;
  high: number;
  breakdown: {
    base: number;
    features: number;
    timelineAdjustment: number;
  };
  timeline: {
    minWeeks: number;
    maxWeeks: number;
  };
}

export interface QuoteSubmission {
  quoteId: string;
  projectType: ProjectType;
  complexity: Complexity;
  features: FeatureId[];
  timeline: Timeline;
  contact: ContactInfo;
  estimate: PriceEstimate;
  submittedAt: string;
}

// Initial state factory
export const createInitialQuoteState = (): QuoteState => ({
  currentStep: 1,
  projectType: null,
  complexity: 'standard',
  features: [],
  timeline: 'standard',
  contact: {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    description: '',
    wantsPdf: true,
    wantsCall: false,
  },
});
