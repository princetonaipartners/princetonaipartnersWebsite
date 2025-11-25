// Quote Calculator Constants - Pricing and Options

import type {
  ProjectType,
  Complexity,
  Timeline,
  Feature,
  ProjectTypeOption,
  TimelineOption,
} from './types';

// Base prices by project type and complexity
export const BASE_PRICES: Record<ProjectType, Record<Complexity, number>> = {
  mvp: { simple: 15000, standard: 30000, complex: 50000 },
  'ai-system': { simple: 10000, standard: 25000, complex: 40000 },
  bespoke: { simple: 25000, standard: 60000, complex: 100000 },
  automation: { simple: 5000, standard: 12000, complex: 20000 },
  website: { simple: 5000, standard: 15000, complex: 25000 },
  bots: { simple: 2000, standard: 6000, complex: 10000 },
};

// Timeline multipliers
export const TIMELINE_MULTIPLIERS: Record<Timeline, number> = {
  flexible: 0.9, // 10% discount
  standard: 1.0, // base price
  fast: 1.2, // 20% rush fee
};

// Timeline durations in weeks
export const TIMELINE_DURATIONS: Record<Timeline, { min: number; max: number }> = {
  flexible: { min: 8, max: 12 },
  standard: { min: 4, max: 8 },
  fast: { min: 2, max: 4 },
};

// Project type options for Step 1
export const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'mvp',
    name: 'MVP / Web App',
    description: 'Full-stack application with user features',
    icon: 'Rocket',
    baseRange: { low: 15000, high: 50000 },
  },
  {
    id: 'ai-system',
    name: 'AI System',
    description: 'RAG, agents, or intelligent automation',
    icon: 'Brain',
    baseRange: { low: 10000, high: 40000 },
  },
  {
    id: 'bespoke',
    name: 'Bespoke Software',
    description: 'Custom enterprise-grade solution',
    icon: 'Building2',
    baseRange: { low: 25000, high: 100000 },
  },
  {
    id: 'automation',
    name: 'Process Automation',
    description: 'Workflows, integrations, and automations',
    icon: 'Workflow',
    baseRange: { low: 5000, high: 20000 },
  },
  {
    id: 'website',
    name: 'Website',
    description: 'Marketing site or web presence',
    icon: 'Globe',
    baseRange: { low: 5000, high: 25000 },
  },
  {
    id: 'bots',
    name: 'Custom Bots',
    description: 'Telegram, Discord, Slack, or WhatsApp',
    icon: 'Bot',
    baseRange: { low: 2000, high: 10000 },
  },
];

// Feature add-ons for Step 2
export const FEATURES: Feature[] = [
  // Core Features
  {
    id: 'auth',
    name: 'User Authentication',
    description: 'Login, signup, password reset, OAuth',
    price: 1500,
    category: 'core',
  },
  {
    id: 'admin',
    name: 'Admin Dashboard',
    description: 'Manage users, content, and settings',
    price: 3000,
    category: 'core',
  },
  {
    id: 'payments',
    name: 'Payment Processing',
    description: 'Stripe integration for payments',
    price: 2500,
    category: 'core',
  },
  {
    id: 'api',
    name: 'API Integrations',
    description: 'Connect to third-party services',
    price: 2000,
    category: 'core',
  },
  // AI Features
  {
    id: 'rag',
    name: 'RAG / Knowledge Base',
    description: 'AI that understands your documents',
    price: 5000,
    category: 'ai',
  },
  {
    id: 'chatbot',
    name: 'Chatbot',
    description: 'Conversational AI interface',
    price: 3000,
    category: 'ai',
  },
  {
    id: 'voice',
    name: 'Voice AI',
    description: 'Phone or voice assistant capabilities',
    price: 4000,
    category: 'ai',
  },
  // Scale Features
  {
    id: 'scale',
    name: 'High Traffic Ready',
    description: 'Optimized for 10k+ users',
    price: 3000,
    category: 'scale',
  },
  {
    id: 'multitenant',
    name: 'Multi-tenant',
    description: 'Support multiple organizations',
    price: 5000,
    category: 'scale',
  },
];

// Timeline options for Step 3
export const TIMELINE_OPTIONS: TimelineOption[] = [
  {
    id: 'flexible',
    name: 'Flexible',
    description: 'Best price, relaxed schedule',
    duration: '8-12 weeks',
    multiplier: 0.9,
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Balanced timeline',
    duration: '4-8 weeks',
    multiplier: 1.0,
  },
  {
    id: 'fast',
    name: 'Fast Track',
    description: 'Priority development',
    duration: '2-4 weeks',
    multiplier: 1.2,
  },
];

// Complexity options for Step 2
export const COMPLEXITY_OPTIONS = [
  {
    id: 'simple' as Complexity,
    name: 'Simple',
    description: 'MVP with core features only',
  },
  {
    id: 'standard' as Complexity,
    name: 'Standard',
    description: 'Full feature set, production-ready',
  },
  {
    id: 'complex' as Complexity,
    name: 'Complex',
    description: 'Enterprise-grade with integrations',
  },
];
