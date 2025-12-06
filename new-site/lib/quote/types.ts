// Quote Calculator TypeScript Interfaces - Redesigned

// ============ INDUSTRY ============
export type IndustryId =
  | 'finance'
  | 'healthcare'
  | 'ecommerce'
  | 'saas'
  | 'real-estate'
  | 'legal'
  | 'education'
  | 'logistics'
  | 'hospitality'
  | 'manufacturing'
  | 'media'
  | 'other';

export interface Industry {
  id: IndustryId;
  name: string;
  description: string;
  icon: string;
  multiplier: number;
  suggestedFeatures: FeatureId[];
}

// ============ PROJECT TYPES ============
export type ProjectType =
  | 'web-dev'
  | 'ai-agents'
  | 'ai-phone'
  | 'automation'
  | 'web-scraping'
  | 'custom-bots'
  | 'bespoke';

export interface ProjectTypeConfig {
  id: ProjectType;
  name: string;
  description: string;
  icon: string;
  priceRange: { min: number; max: number };
  availableFeatures: FeatureId[];
  baseTimeline: { min: number; max: number };
}

// ============ COMPLEXITY ============
export type Complexity = 'starter' | 'professional' | 'enterprise';

export interface ComplexityOption {
  id: Complexity;
  name: string;
  description: string;
  rangePosition: number;
  multiplier: number;
}

// ============ FEATURES ============
export type FeatureId =
  // Web/App Features
  | 'auth'
  | 'admin-dashboard'
  | 'payments'
  | 'cms'
  | 'seo-optimization'
  | 'analytics'
  | 'responsive-design'
  // AI Features
  | 'rag-knowledge-base'
  | 'custom-llm-integration'
  | 'vector-database'
  | 'conversation-memory'
  | 'multi-agent-system'
  // Phone/Voice Features
  | 'ivr-menu'
  | 'appointment-booking'
  | 'crm-integration'
  | 'call-recording'
  | 'sentiment-analysis'
  // Automation Features
  | 'workflow-orchestration'
  | 'api-integrations'
  | 'scheduling'
  | 'error-handling'
  | 'monitoring-alerts'
  // Scraping Features
  | 'dynamic-content'
  | 'anti-bot-bypass'
  | 'data-transformation'
  | 'scheduled-runs'
  | 'proxy-rotation'
  // Bot Features
  | 'multi-platform'
  | 'nlp-understanding'
  | 'database-sync'
  | 'rich-media'
  // Scale Features
  | 'high-availability'
  | 'multi-tenant'
  | 'compliance-security';

export type FeatureCategory = 'core' | 'ai' | 'integration' | 'scale' | 'voice' | 'scraping' | 'bot';

export interface Feature {
  id: FeatureId;
  name: string;
  description: string;
  basePrice: number;
  category: FeatureCategory;
  projectTypeMultipliers?: Partial<Record<ProjectType, number>>;
}

// ============ TECH STACK ============
export type FrontendFramework =
  | 'react'
  | 'nextjs'
  | 'vue'
  | 'angular'
  | 'svelte'
  | 'no-preference';

export type BackendTech =
  | 'nodejs'
  | 'python'
  | 'go'
  | 'java'
  | 'dotnet'
  | 'serverless'
  | 'no-preference';

export type AIProvider =
  | 'openai'
  | 'anthropic'
  | 'google'
  | 'aws-bedrock'
  | 'azure-openai'
  | 'open-source'
  | 'no-preference';

export type DatabasePreference =
  | 'postgresql'
  | 'mongodb'
  | 'mysql'
  | 'supabase'
  | 'firebase'
  | 'no-preference';

export type HostingPreference =
  | 'vercel'
  | 'aws'
  | 'gcp'
  | 'azure'
  | 'self-hosted'
  | 'no-preference';

export interface TechStackOption {
  id: string;
  name: string;
  icon: string;
}

export interface TechStackPreferences {
  frontend: FrontendFramework | null;
  backend: BackendTech | null;
  ai: AIProvider | null;
  database: DatabasePreference | null;
  hosting: HostingPreference | null;
  existingInfrastructure?: string;
}

// ============ TIMELINE ============
export type Timeline = 'relaxed' | 'standard' | 'accelerated' | 'urgent';

export interface TimelineOption {
  id: Timeline;
  name: string;
  description: string;
  multiplier: number;
  durationFactor: number;
  icon: string;
}

// ============ BUDGET ============
export type BudgetRange =
  | 'under-10k'
  | '10k-25k'
  | '25k-50k'
  | '50k-100k'
  | '100k-plus'
  | 'not-sure';

export interface BudgetOption {
  id: BudgetRange;
  label: string;
}

// ============ CONTACT ============
export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  description?: string;
  budget: BudgetRange;
  wantsPdf: boolean;
  wantsCall: boolean;
}

// ============ QUOTE STATE ============
export interface QuoteState {
  currentStep: 1 | 2 | 3 | 4 | 5 | 6 | 7;

  // Step 1: Industry
  industry: IndustryId | null;
  industryOther?: string;

  // Step 2: Project Type
  projectType: ProjectType | null;

  // Step 3: Scope & Features
  complexity: Complexity;
  features: FeatureId[];

  // Step 4: Tech Stack
  techStack: TechStackPreferences;

  // Step 5: Timeline
  timeline: Timeline;

  // Step 6: Contact
  contact: ContactInfo;
}

// ============ PRICE ESTIMATE ============
export interface PriceEstimate {
  low: number;
  high: number;
  midpoint: number;
  confidence: 'estimated' | 'refined';
  breakdown: {
    basePrice: number;
    complexityAdjustment: number;
    featuresTotal: number;
    industryAdjustment: number;
    timelineAdjustment: number;
  };
  timeline: {
    minWeeks: number;
    maxWeeks: number;
  };
}

// ============ SUBMISSION ============
export interface QuoteSubmission {
  quoteId: string;
  industry: IndustryId;
  industryOther?: string;
  projectType: ProjectType;
  complexity: Complexity;
  features: FeatureId[];
  techStack: TechStackPreferences;
  timeline: Timeline;
  contact: ContactInfo;
  estimate: PriceEstimate;
  submittedAt: string;
}

// ============ INITIAL STATE FACTORY ============
export const createInitialQuoteState = (): QuoteState => ({
  currentStep: 1,
  industry: null,
  industryOther: '',
  projectType: null,
  complexity: 'professional',
  features: [],
  techStack: {
    frontend: null,
    backend: null,
    ai: null,
    database: null,
    hosting: null,
    existingInfrastructure: '',
  },
  timeline: 'standard',
  contact: {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    description: '',
    budget: 'not-sure',
    wantsPdf: true,
    wantsCall: false,
  },
});
