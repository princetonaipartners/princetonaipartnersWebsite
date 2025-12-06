// Quote Calculator Constants - Redesigned

import type {
  Industry,
  IndustryId,
  ProjectType,
  ProjectTypeConfig,
  Complexity,
  ComplexityOption,
  Feature,
  FeatureId,
  Timeline,
  TimelineOption,
  TechStackOption,
  BudgetOption,
  BudgetRange,
} from './types';

// ============ INDUSTRIES ============
export const INDUSTRIES: Industry[] = [
  {
    id: 'finance',
    name: 'Financial Services',
    description: 'Banking, insurance, fintech, investments',
    icon: 'Landmark',
    multiplier: 1.25,
    suggestedFeatures: ['compliance-security', 'auth', 'analytics'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Hospitals, clinics, healthtech, pharma',
    icon: 'Heart',
    multiplier: 1.30,
    suggestedFeatures: ['compliance-security', 'auth', 'api-integrations'],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Retail',
    description: 'Online stores, marketplaces, retail',
    icon: 'ShoppingCart',
    multiplier: 1.0,
    suggestedFeatures: ['payments', 'analytics', 'seo-optimization'],
  },
  {
    id: 'saas',
    name: 'SaaS & Technology',
    description: 'Software products, platforms, tech startups',
    icon: 'Cloud',
    multiplier: 1.0,
    suggestedFeatures: ['multi-tenant', 'analytics', 'api-integrations'],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Property management, brokerages, proptech',
    icon: 'Building',
    multiplier: 1.0,
    suggestedFeatures: ['crm-integration', 'scheduling', 'analytics'],
  },
  {
    id: 'legal',
    name: 'Legal Services',
    description: 'Law firms, legal tech, compliance',
    icon: 'Scale',
    multiplier: 1.20,
    suggestedFeatures: ['compliance-security', 'rag-knowledge-base', 'auth'],
  },
  {
    id: 'education',
    name: 'Education',
    description: 'EdTech, schools, universities, training',
    icon: 'GraduationCap',
    multiplier: 1.05,
    suggestedFeatures: ['auth', 'analytics', 'cms'],
  },
  {
    id: 'logistics',
    name: 'Logistics & Transportation',
    description: 'Shipping, fleet management, supply chain',
    icon: 'Truck',
    multiplier: 1.05,
    suggestedFeatures: ['workflow-orchestration', 'api-integrations', 'monitoring-alerts'],
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Travel',
    description: 'Hotels, restaurants, travel agencies',
    icon: 'Utensils',
    multiplier: 1.0,
    suggestedFeatures: ['appointment-booking', 'payments', 'multi-platform'],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Production, factories, industrial',
    icon: 'Factory',
    multiplier: 1.10,
    suggestedFeatures: ['workflow-orchestration', 'monitoring-alerts', 'api-integrations'],
  },
  {
    id: 'media',
    name: 'Media & Entertainment',
    description: 'Publishing, streaming, content creation',
    icon: 'Film',
    multiplier: 1.0,
    suggestedFeatures: ['cms', 'analytics', 'seo-optimization'],
  },
  {
    id: 'other',
    name: 'Other',
    description: 'Something else or multiple industries',
    icon: 'MoreHorizontal',
    multiplier: 1.0,
    suggestedFeatures: [],
  },
];

// ============ PROJECT TYPES ============
export const PROJECT_TYPES: ProjectTypeConfig[] = [
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Marketing sites, web apps, dashboards',
    icon: 'Globe',
    priceRange: { min: 3000, max: 25000 },
    availableFeatures: [
      'auth', 'admin-dashboard', 'payments', 'cms', 'seo-optimization',
      'analytics', 'responsive-design', 'api-integrations', 'high-availability', 'multi-tenant',
    ],
    baseTimeline: { min: 2, max: 8 },
  },
  {
    id: 'ai-agents',
    name: 'AI Agents & RAG',
    description: 'Intelligent agents, knowledge bases, automation',
    icon: 'Brain',
    priceRange: { min: 10000, max: 30000 },
    availableFeatures: [
      'rag-knowledge-base', 'custom-llm-integration', 'vector-database', 'conversation-memory',
      'multi-agent-system', 'api-integrations', 'monitoring-alerts', 'high-availability', 'compliance-security',
    ],
    baseTimeline: { min: 4, max: 12 },
  },
  {
    id: 'ai-phone',
    name: 'AI Phone Systems',
    description: '24/7 intelligent call handling & booking',
    icon: 'Phone',
    priceRange: { min: 5000, max: 15000 },
    availableFeatures: [
      'ivr-menu', 'appointment-booking', 'crm-integration', 'call-recording',
      'sentiment-analysis', 'conversation-memory', 'api-integrations', 'monitoring-alerts', 'multi-tenant',
    ],
    baseTimeline: { min: 3, max: 8 },
  },
  {
    id: 'automation',
    name: 'Process Automation',
    description: 'Workflows, integrations, task automation',
    icon: 'Workflow',
    priceRange: { min: 5000, max: 20000 },
    availableFeatures: [
      'workflow-orchestration', 'api-integrations', 'scheduling', 'error-handling',
      'monitoring-alerts', 'database-sync', 'high-availability',
    ],
    baseTimeline: { min: 2, max: 8 },
  },
  {
    id: 'web-scraping',
    name: 'Web Scraping',
    description: 'Data extraction, monitoring, intelligence',
    icon: 'Search',
    priceRange: { min: 3000, max: 15000 },
    availableFeatures: [
      'dynamic-content', 'anti-bot-bypass', 'data-transformation',
      'scheduled-runs', 'proxy-rotation', 'api-integrations', 'monitoring-alerts',
    ],
    baseTimeline: { min: 2, max: 6 },
  },
  {
    id: 'custom-bots',
    name: 'Custom Bots',
    description: 'Telegram, Discord, Slack, WhatsApp bots',
    icon: 'Bot',
    priceRange: { min: 2000, max: 10000 },
    availableFeatures: [
      'multi-platform', 'nlp-understanding', 'database-sync', 'rich-media',
      'conversation-memory', 'api-integrations', 'analytics',
    ],
    baseTimeline: { min: 2, max: 6 },
  },
  {
    id: 'bespoke',
    name: 'Bespoke Software',
    description: 'Custom enterprise-grade solutions',
    icon: 'Building2',
    priceRange: { min: 50000, max: 250000 },
    availableFeatures: [
      'auth', 'admin-dashboard', 'payments', 'cms', 'seo-optimization', 'analytics', 'responsive-design',
      'rag-knowledge-base', 'custom-llm-integration', 'vector-database', 'conversation-memory', 'multi-agent-system',
      'workflow-orchestration', 'api-integrations', 'scheduling', 'error-handling', 'monitoring-alerts',
      'high-availability', 'multi-tenant', 'compliance-security',
    ],
    baseTimeline: { min: 8, max: 24 },
  },
];

// ============ COMPLEXITY OPTIONS ============
export const COMPLEXITY_OPTIONS: ComplexityOption[] = [
  { id: 'starter', name: 'Starter', description: 'Core functionality, quick deployment', rangePosition: 0.0, multiplier: 1.0 },
  { id: 'professional', name: 'Professional', description: 'Full feature set, production-ready', rangePosition: 0.5, multiplier: 1.0 },
  { id: 'enterprise', name: 'Enterprise', description: 'Advanced features, scale & compliance', rangePosition: 1.0, multiplier: 1.2 },
];

// ============ FEATURES ============
export const FEATURES: Feature[] = [
  // Core Web Features
  { id: 'auth', name: 'User Authentication', description: 'Login, signup, OAuth, password reset, MFA', basePrice: 2000, category: 'core', projectTypeMultipliers: { 'web-dev': 1.0, bespoke: 1.5 } },
  { id: 'admin-dashboard', name: 'Admin Dashboard', description: 'Manage users, content, and settings', basePrice: 3500, category: 'core', projectTypeMultipliers: { 'web-dev': 1.0, bespoke: 1.3 } },
  { id: 'payments', name: 'Payment Processing', description: 'Stripe/PayPal integration, subscriptions', basePrice: 3000, category: 'core', projectTypeMultipliers: { 'web-dev': 1.0, bespoke: 1.2 } },
  { id: 'cms', name: 'Content Management', description: 'Edit pages, blog, media library', basePrice: 2500, category: 'core' },
  { id: 'seo-optimization', name: 'SEO Optimization', description: 'Meta tags, sitemaps, structured data', basePrice: 1500, category: 'core' },
  { id: 'analytics', name: 'Analytics & Reporting', description: 'Dashboards, metrics, data visualization', basePrice: 2000, category: 'core' },
  { id: 'responsive-design', name: 'Responsive Design', description: 'Mobile-first, all screen sizes', basePrice: 1000, category: 'core' },

  // AI Features
  { id: 'rag-knowledge-base', name: 'RAG Knowledge Base', description: 'AI that understands your documents', basePrice: 5000, category: 'ai', projectTypeMultipliers: { 'ai-agents': 1.0, bespoke: 1.2 } },
  { id: 'custom-llm-integration', name: 'Custom LLM Integration', description: 'OpenAI, Claude, or custom models', basePrice: 4000, category: 'ai' },
  { id: 'vector-database', name: 'Vector Database', description: 'Semantic search and embeddings', basePrice: 3000, category: 'ai' },
  { id: 'conversation-memory', name: 'Conversation Memory', description: 'Context-aware multi-turn conversations', basePrice: 2500, category: 'ai' },
  { id: 'multi-agent-system', name: 'Multi-Agent System', description: 'Coordinated AI agents working together', basePrice: 6000, category: 'ai' },

  // Voice/Phone Features
  { id: 'ivr-menu', name: 'IVR Menu System', description: 'Interactive voice response menus', basePrice: 2000, category: 'voice' },
  { id: 'appointment-booking', name: 'Appointment Booking', description: 'Calendar integration, scheduling', basePrice: 2500, category: 'voice' },
  { id: 'crm-integration', name: 'CRM Integration', description: 'Sync with Salesforce, HubSpot, etc.', basePrice: 3000, category: 'integration' },
  { id: 'call-recording', name: 'Call Recording', description: 'Record and store conversations', basePrice: 1500, category: 'voice' },
  { id: 'sentiment-analysis', name: 'Sentiment Analysis', description: 'Real-time emotion detection', basePrice: 2500, category: 'ai' },

  // Automation Features
  { id: 'workflow-orchestration', name: 'Workflow Orchestration', description: 'Multi-step automated processes', basePrice: 4000, category: 'integration' },
  { id: 'api-integrations', name: 'API Integrations', description: 'Connect to third-party services', basePrice: 2500, category: 'integration' },
  { id: 'scheduling', name: 'Scheduled Tasks', description: 'Cron jobs, timed triggers', basePrice: 1500, category: 'integration' },
  { id: 'error-handling', name: 'Error Handling & Retry', description: 'Robust failure recovery', basePrice: 1500, category: 'integration' },
  { id: 'monitoring-alerts', name: 'Monitoring & Alerts', description: 'Real-time status and notifications', basePrice: 2000, category: 'integration' },

  // Scraping Features
  { id: 'dynamic-content', name: 'Dynamic Content Handling', description: 'JavaScript-rendered pages', basePrice: 2000, category: 'scraping' },
  { id: 'anti-bot-bypass', name: 'Anti-Bot Bypass', description: 'Handle CAPTCHAs and protection', basePrice: 3000, category: 'scraping' },
  { id: 'data-transformation', name: 'Data Transformation', description: 'Clean, normalize, structure data', basePrice: 2000, category: 'scraping' },
  { id: 'scheduled-runs', name: 'Scheduled Runs', description: 'Automated recurring scrapes', basePrice: 1500, category: 'scraping' },
  { id: 'proxy-rotation', name: 'Proxy Rotation', description: 'IP rotation for reliability', basePrice: 2000, category: 'scraping' },

  // Bot Features
  { id: 'multi-platform', name: 'Multi-Platform Support', description: 'Deploy to multiple chat platforms', basePrice: 2500, category: 'bot' },
  { id: 'nlp-understanding', name: 'NLP Understanding', description: 'Natural language processing', basePrice: 3000, category: 'bot' },
  { id: 'database-sync', name: 'Database Sync', description: 'Real-time data synchronization', basePrice: 2000, category: 'integration' },
  { id: 'rich-media', name: 'Rich Media Support', description: 'Images, videos, files, cards', basePrice: 1500, category: 'bot' },

  // Scale Features
  { id: 'high-availability', name: 'High Availability', description: 'Load balancing, redundancy, 99.9% uptime', basePrice: 4000, category: 'scale', projectTypeMultipliers: { bespoke: 1.5 } },
  { id: 'multi-tenant', name: 'Multi-Tenant Architecture', description: 'Support multiple organizations', basePrice: 5000, category: 'scale', projectTypeMultipliers: { bespoke: 1.3 } },
  { id: 'compliance-security', name: 'Compliance & Security', description: 'SOC2, HIPAA, GDPR compliance', basePrice: 6000, category: 'scale', projectTypeMultipliers: { bespoke: 1.2, 'ai-agents': 1.3 } },
];

// ============ TIMELINE OPTIONS ============
export const TIMELINE_OPTIONS: TimelineOption[] = [
  { id: 'relaxed', name: 'Relaxed', description: 'Best price, flexible schedule', multiplier: 0.95, durationFactor: 1.5, icon: 'Calendar' },
  { id: 'standard', name: 'Standard', description: 'Balanced timeline and cost', multiplier: 1.0, durationFactor: 1.0, icon: 'Clock' },
  { id: 'accelerated', name: 'Accelerated', description: 'Priority development', multiplier: 1.15, durationFactor: 0.75, icon: 'Zap' },
  { id: 'urgent', name: 'Urgent', description: 'Fastest possible delivery', multiplier: 1.35, durationFactor: 0.5, icon: 'Rocket' },
];

// ============ TECH STACK OPTIONS ============
export const FRONTEND_OPTIONS: TechStackOption[] = [
  { id: 'react', name: 'React', icon: 'react' },
  { id: 'nextjs', name: 'Next.js', icon: 'nextdotjs' },
  { id: 'vue', name: 'Vue.js', icon: 'vuedotjs' },
  { id: 'angular', name: 'Angular', icon: 'angular' },
  { id: 'svelte', name: 'Svelte', icon: 'svelte' },
  { id: 'no-preference', name: 'No Preference', icon: 'CircleDot' },
];

export const BACKEND_OPTIONS: TechStackOption[] = [
  { id: 'nodejs', name: 'Node.js', icon: 'nodedotjs' },
  { id: 'python', name: 'Python', icon: 'python' },
  { id: 'go', name: 'Go', icon: 'go' },
  { id: 'java', name: 'Java', icon: 'oracle' },
  { id: 'dotnet', name: '.NET', icon: 'dotnet' },
  { id: 'serverless', name: 'Serverless', icon: 'awslambda' },
  { id: 'no-preference', name: 'No Preference', icon: 'CircleDot' },
];

export const AI_PROVIDER_OPTIONS: TechStackOption[] = [
  { id: 'openai', name: 'OpenAI', icon: 'openai' },
  { id: 'anthropic', name: 'Anthropic Claude', icon: 'anthropic' },
  { id: 'google', name: 'Google AI', icon: 'googlegemini' },
  { id: 'aws-bedrock', name: 'AWS Bedrock', icon: 'amazonaws' },
  { id: 'azure-openai', name: 'Azure OpenAI', icon: 'microsoftazure' },
  { id: 'open-source', name: 'Open Source', icon: 'meta' },
  { id: 'no-preference', name: 'No Preference', icon: 'CircleDot' },
];

export const DATABASE_OPTIONS: TechStackOption[] = [
  { id: 'postgresql', name: 'PostgreSQL', icon: 'postgresql' },
  { id: 'mongodb', name: 'MongoDB', icon: 'mongodb' },
  { id: 'mysql', name: 'MySQL', icon: 'mysql' },
  { id: 'supabase', name: 'Supabase', icon: 'supabase' },
  { id: 'firebase', name: 'Firebase', icon: 'firebase' },
  { id: 'no-preference', name: 'No Preference', icon: 'CircleDot' },
];

export const HOSTING_OPTIONS: TechStackOption[] = [
  { id: 'vercel', name: 'Vercel', icon: 'vercel' },
  { id: 'aws', name: 'AWS', icon: 'amazonaws' },
  { id: 'gcp', name: 'Google Cloud', icon: 'googlecloud' },
  { id: 'azure', name: 'Microsoft Azure', icon: 'microsoftazure' },
  { id: 'self-hosted', name: 'Self-Hosted', icon: 'linux' },
  { id: 'no-preference', name: 'No Preference', icon: 'CircleDot' },
];

// ============ BUDGET OPTIONS ============
export const BUDGET_OPTIONS: BudgetOption[] = [
  { id: 'under-10k', label: 'Under $10,000' },
  { id: '10k-25k', label: '$10,000 - $25,000' },
  { id: '25k-50k', label: '$25,000 - $50,000' },
  { id: '50k-100k', label: '$50,000 - $100,000' },
  { id: '100k-plus', label: '$100,000+' },
  { id: 'not-sure', label: 'Not sure yet' },
];

// ============ INDUSTRY MULTIPLIERS ============
export const INDUSTRY_MULTIPLIERS: Record<IndustryId, number> = {
  finance: 1.25,
  healthcare: 1.30,
  ecommerce: 1.0,
  saas: 1.0,
  'real-estate': 1.0,
  legal: 1.20,
  education: 1.05,
  logistics: 1.05,
  hospitality: 1.0,
  manufacturing: 1.10,
  media: 1.0,
  other: 1.0,
};

// ============ HELPER FUNCTIONS ============
export function getIndustryById(id: IndustryId): Industry | undefined {
  return INDUSTRIES.find((i) => i.id === id);
}

export function getProjectTypeById(id: ProjectType): ProjectTypeConfig | undefined {
  return PROJECT_TYPES.find((p) => p.id === id);
}

export function getFeatureById(id: FeatureId): Feature | undefined {
  return FEATURES.find((f) => f.id === id);
}

export function getFeaturesForProjectType(projectType: ProjectType): Feature[] {
  const config = getProjectTypeById(projectType);
  if (!config) return [];
  return FEATURES.filter((f) => config.availableFeatures.includes(f.id));
}

export function getComplexityById(id: Complexity): ComplexityOption | undefined {
  return COMPLEXITY_OPTIONS.find((c) => c.id === id);
}

export function getTimelineById(id: Timeline): TimelineOption | undefined {
  return TIMELINE_OPTIONS.find((t) => t.id === id);
}
