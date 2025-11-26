'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  Target,
  DollarSign,
  ArrowRight,
  Check,
  X,
  ChevronDown,
  Zap,
  Shield,
  Headphones,
  Code2,
  Settings,
  AlertCircle,
  Play,
  Circle,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DotShaderBackground } from '@/components/ui/dot-shader-background';
import { WorkflowBuilder } from '@/components/ui/workflow-builder';
import { FadeInSection } from '@/components/animations/FadeInSection';
import * as Accordion from '@radix-ui/react-accordion';
import * as Tabs from '@radix-ui/react-tabs';

export default function ProcessAutomationPage() {
  return (
    <div className="dark bg-zinc-950 min-h-screen font-sans selection:bg-brand-primary/30 overflow-x-hidden">
      {/* Dot Shader Background */}
      <div className="fixed inset-0 z-0">
        <DotShaderBackground
          dotColor="#0A84FF"
          bgColor="#09090b"
          gridSize={60}
          dotSize={0.06}
          dotOpacity={0.4}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <IntegrationShowcase />
        <WhatWeAutomate />
        <DIYComparison />
        <HowItWorks />
        <ROIMetrics />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </div>
    </div>
  );
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <FadeInSection>
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-xs font-mono text-zinc-400">
                WORKFLOW AUTOMATION
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-white">Stop Doing Work</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                a Robot Should Do
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
              We design, build, and maintain custom automation systems that save your team{' '}
              <span className="text-white font-semibold">20+ hours per week</span>.
              No Zapier tinkering required.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Clock className="w-4 h-4 text-brand-primary" />
                <span>20+ Hours Saved/Week</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Target className="w-4 h-4 text-emerald-400" />
                <span>99.9% Accuracy</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <DollarSign className="w-4 h-4 text-amber-400" />
                <span>ROI in &lt; 90 Days</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#what-we-automate"
                className="group px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-brand-lg hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  See What We Automate
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link
                href="/quote"
                className="px-6 py-3 border border-zinc-700 rounded-lg font-mono text-sm text-zinc-400 hover:border-brand-primary/50 hover:text-zinc-200 transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </FadeInSection>

        {/* Workflow Builder */}
        <FadeInSection delay={0.2}>
          <div className="relative mt-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl blur-xl opacity-50" />
            <div className="relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 md:p-8">
              <WorkflowBuilder />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// INTEGRATION SHOWCASE
// ============================================
const integrationCategories = {
  crm: {
    label: 'CRM & Sales',
    description: 'Sync leads, update deals, automate follow-ups',
    integrations: [
      { name: 'Salesforce', color: '#00A1E0' },
      { name: 'HubSpot', color: '#FF7A59' },
      { name: 'Pipedrive', color: '#2E3A59' },
      { name: 'Close', color: '#2D2D2D' },
      { name: 'Zoho CRM', color: '#E42527' },
    ],
  },
  communication: {
    label: 'Communication',
    description: 'Route messages, send alerts, manage conversations',
    integrations: [
      { name: 'Slack', color: '#4A154B' },
      { name: 'Gmail', color: '#EA4335' },
      { name: 'Twilio', color: '#F22F46' },
      { name: 'Microsoft Teams', color: '#5059C9' },
      { name: 'Discord', color: '#5865F2' },
    ],
  },
  data: {
    label: 'Data & Analytics',
    description: 'Aggregate data, generate reports, sync databases',
    integrations: [
      { name: 'Google Sheets', color: '#34A853' },
      { name: 'Airtable', color: '#18BFFF' },
      { name: 'Notion', color: '#000000' },
      { name: 'Snowflake', color: '#29B5E8' },
      { name: 'BigQuery', color: '#4285F4' },
    ],
  },
  ecommerce: {
    label: 'E-commerce & Ops',
    description: 'Process orders, manage inventory, handle fulfillment',
    integrations: [
      { name: 'Shopify', color: '#96BF48' },
      { name: 'Stripe', color: '#635BFF' },
      { name: 'WooCommerce', color: '#96588A' },
      { name: 'QuickBooks', color: '#2CA01C' },
      { name: 'Xero', color: '#13B5EA' },
    ],
  },
};

function IntegrationShowcase() {
  const [activeTab, setActiveTab] = useState('crm');

  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">
              Integrations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Connect Your Entire Stack
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              We integrate with 100+ tools. If it has an API, we can connect it.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
            {/* Tab triggers */}
            <Tabs.List className="flex flex-wrap justify-center gap-2 mb-8">
              {Object.entries(integrationCategories).map(([key, category]) => (
                <Tabs.Trigger
                  key={key}
                  value={key}
                  className={cn(
                    'px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300',
                    activeTab === key
                      ? 'bg-brand-primary text-white'
                      : 'bg-zinc-800/50 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                  )}
                >
                  {category.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {/* Tab content */}
            {Object.entries(integrationCategories).map(([key, category]) => (
              <Tabs.Content key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6"
                >
                  <p className="text-center text-zinc-400 mb-6">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {category.integrations.map((integration) => (
                      <div
                        key={integration.name}
                        className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 rounded-lg border border-zinc-700/50 hover:border-brand-primary/30 transition-colors"
                      >
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: integration.color }}
                        />
                        <span className="text-sm text-zinc-300">
                          {integration.name}
                        </span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-500">
                      + 20 more
                    </div>
                  </div>
                </motion.div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// WHAT WE AUTOMATE
// ============================================
const automationExamples = [
  {
    category: 'Sales & Marketing',
    icon: Target,
    color: '#0A84FF',
    examples: [
      'Lead scoring & routing',
      'CRM data enrichment',
      'Follow-up sequences',
      'Meeting scheduling',
    ],
  },
  {
    category: 'E-commerce',
    icon: DollarSign,
    color: '#96BF48',
    examples: [
      'Order processing',
      'Inventory sync',
      'Customer notifications',
      'Return handling',
    ],
  },
  {
    category: 'Finance & Operations',
    icon: Settings,
    color: '#635BFF',
    examples: [
      'Invoice generation',
      'Payment reconciliation',
      'Expense reporting',
      'Budget tracking',
    ],
  },
  {
    category: 'HR & Recruiting',
    icon: Headphones,
    color: '#FF7A59',
    examples: [
      'Resume screening',
      'Interview scheduling',
      'Onboarding workflows',
      'Time-off requests',
    ],
  },
];

function WhatWeAutomate() {
  return (
    <section id="what-we-automate" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">
              Use Cases
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Real Automations We&apos;ve Built
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              From simple two-step workflows to complex multi-branch automations with AI.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-6">
            {automationExamples.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl hover:border-brand-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {item.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-center gap-2 text-sm text-zinc-400"
                      >
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// DIY VS DONE-FOR-YOU COMPARISON
// ============================================
const comparisonData = [
  { feature: 'Setup Time', diy: '20+ hours', done: '0 hours (we handle it)' },
  { feature: 'Error Handling', diy: 'Basic (manual fixes)', done: 'Advanced (auto-retry + alerts)' },
  { feature: 'Complex Logic', diy: 'Limited branching', done: 'Unlimited conditional flows' },
  { feature: 'AI Integration', diy: 'Not available', done: 'Built-in AI processing' },
  { feature: 'Maintenance', diy: 'You fix breaks', done: 'We monitor 24/7' },
  { feature: 'Support', diy: 'Documentation only', done: 'Dedicated success manager' },
];

function DIYComparison() {
  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">
              Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Why Not Just Use Zapier?
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              DIY tools are great for simple tasks. For business-critical workflows,
              you need something more robust.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-4 border-b border-zinc-800 bg-zinc-900/80">
              <div className="font-mono text-sm text-zinc-500">Feature</div>
              <div className="font-mono text-sm text-zinc-500 text-center">DIY (Zapier/Make)</div>
              <div className="font-mono text-sm text-brand-primary text-center">Done-For-You</div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className={cn(
                  'grid grid-cols-3 gap-4 p-4',
                  index !== comparisonData.length - 1 && 'border-b border-zinc-800/50'
                )}
              >
                <div className="text-sm text-zinc-300">{row.feature}</div>
                <div className="text-sm text-zinc-500 text-center flex items-center justify-center gap-1">
                  <X className="w-3 h-3 text-red-400" />
                  {row.diy}
                </div>
                <div className="text-sm text-emerald-400 text-center flex items-center justify-center gap-1">
                  <Check className="w-3 h-3" />
                  {row.done}
                </div>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="mt-6 p-4 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-center">
            <p className="text-brand-primary font-medium">
              &ldquo;Zapier connects apps. We solve business problems.&rdquo;
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// HOW IT WORKS - TERMINAL STYLE
// ============================================
interface ProcessStep {
  id: string;
  title: string;
  duration: string;
  status: 'completed' | 'active' | 'pending';
  deliverables: string[];
}

const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    title: 'Discovery',
    duration: '2-3 days',
    status: 'completed',
    deliverables: ['Process mapping', 'Pain point analysis', 'ROI estimate'],
  },
  {
    id: 'design',
    title: 'Design',
    duration: '3-5 days',
    status: 'completed',
    deliverables: ['Workflow diagram', 'Integration spec', 'Error handling plan'],
  },
  {
    id: 'build',
    title: 'Build',
    duration: '1-2 weeks',
    status: 'active',
    deliverables: ['Automation built', 'Testing complete', 'Documentation'],
  },
  {
    id: 'launch',
    title: 'Launch & Monitor',
    duration: 'Ongoing',
    status: 'pending',
    deliverables: ['Go-live support', '24/7 monitoring', 'Monthly reviews'],
  },
];

function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (isInView) {
      processSteps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps((prev) => [...prev, index]);
        }, 300 + index * 400);
      });
    }
  }, [isInView]);

  const getStatusIcon = (status: ProcessStep['status']) => {
    switch (status) {
      case 'completed':
        return <Check className="w-4 h-4 text-emerald-400" />;
      case 'active':
        return (
          <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <Play className="w-3.5 h-3.5 text-brand-primary fill-brand-primary" />
          </motion.div>
        );
      case 'pending':
        return <Circle className="w-3.5 h-3.5 text-zinc-600" />;
    }
  };

  return (
    <section ref={containerRef} className="relative py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              From Discovery to Deployment
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              A proven process refined over dozens of automation projects.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
              </div>
              <span className="flex-1 text-center text-xs text-zinc-500 font-mono">
                automation-pipeline
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-6 space-y-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={visibleSteps.includes(index) ? { opacity: 1, x: 0 } : {}}
                  className="font-mono"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 flex justify-center">{getStatusIcon(step.status)}</span>
                    <span className="text-zinc-500">[{index + 1}/4]</span>
                    <span
                      className={cn(
                        'font-medium',
                        step.status === 'completed' && 'text-emerald-400',
                        step.status === 'active' && 'text-brand-primary',
                        step.status === 'pending' && 'text-zinc-500'
                      )}
                    >
                      {step.title}
                    </span>
                    <span className="text-zinc-700 flex-1 hidden sm:block">
                      {'·'.repeat(20)}
                    </span>
                    <span
                      className={cn(
                        step.status === 'completed' && 'text-emerald-400/70',
                        step.status === 'active' && 'text-cyan-400',
                        step.status === 'pending' && 'text-zinc-600'
                      )}
                    >
                      {step.duration}
                    </span>
                  </div>

                  {/* Deliverables */}
                  <AnimatePresence>
                    {visibleSteps.includes(index) && (step.status === 'completed' || step.status === 'active') && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="ml-9 mt-2 space-y-1"
                      >
                        {step.deliverables.map((d, i) => (
                          <motion.div
                            key={d}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-2 text-sm"
                          >
                            <span className={step.status === 'completed' ? 'text-emerald-500/60' : 'text-zinc-600'}>
                              →
                            </span>
                            <span className={step.status === 'completed' ? 'text-zinc-400' : 'text-zinc-500'}>
                              {d}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// ROI METRICS
// ============================================
const metrics = [
  {
    label: 'Time Saved',
    value: '20+',
    unit: 'hours/week',
    description: 'Average time savings per team',
    icon: Clock,
    color: '#0A84FF',
  },
  {
    label: 'Error Reduction',
    value: '99.9',
    unit: '%',
    description: 'Accuracy with automated workflows',
    icon: Target,
    color: '#10B981',
  },
  {
    label: 'Payback Period',
    value: '<90',
    unit: 'days',
    description: 'Typical ROI timeline',
    icon: DollarSign,
    color: '#F59E0B',
  },
];

function ROIMetrics() {
  return (
    <section className="relative py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">
              Results
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              The Numbers That Matter
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl text-center hover:border-brand-primary/30 transition-colors"
                >
                  <div
                    className="inline-flex p-3 rounded-xl mb-4"
                    style={{ backgroundColor: `${metric.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: metric.color }} />
                  </div>
                  <div className="text-4xl font-bold text-white mb-1">
                    {metric.value}
                    <span className="text-lg text-zinc-400 ml-1">{metric.unit}</span>
                  </div>
                  <div className="text-sm font-medium text-zinc-300 mb-1">{metric.label}</div>
                  <div className="text-xs text-zinc-500">{metric.description}</div>
                </motion.div>
              );
            })}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// PRICING SECTION
// ============================================
const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for simple 2-3 app workflows',
    features: [
      'Up to 3 integrations',
      'Basic error handling',
      'Email notifications',
      '30 days support',
      'Documentation included',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    description: 'Multi-step workflows with conditional logic',
    features: [
      'Up to 10 integrations',
      'Advanced branching logic',
      'AI-powered processing',
      '90 days support',
      'Monthly performance reviews',
      'Slack/Teams alerts',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Complex systems with AI and custom code',
    features: [
      'Unlimited integrations',
      'Custom code & APIs',
      'Advanced AI features',
      'Ongoing support',
      'Dedicated success manager',
      '24/7 monitoring',
      'SLA guarantee',
    ],
    highlighted: false,
  },
];

function PricingSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">
              Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Choose Your Level
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Select the tier that matches your automation needs. We&apos;ll provide a custom quote based on your specific requirements.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'relative p-6 rounded-xl border transition-all duration-300',
                  tier.highlighted
                    ? 'bg-gradient-to-b from-brand-primary/10 to-transparent border-brand-primary/50'
                    : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-primary text-xs font-mono text-white rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                <p className="text-sm text-zinc-400 mb-6">{tier.description}</p>

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/quote"
                  className={cn(
                    'mt-6 block w-full py-3 rounded-lg font-medium text-center transition-all duration-300',
                    tier.highlighted
                      ? 'bg-brand-primary text-white hover:bg-brand-primary/90'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  )}
                >
                  Get a Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// FAQ SECTION
// ============================================
const faqs = [
  {
    question: 'Why not just use Zapier or Make myself?',
    answer:
      'DIY tools are great for simple tasks, but they have limitations with complex logic, error handling, and AI integration. We build enterprise-grade automations that handle edge cases, retry failures automatically, and include proper monitoring. Plus, we handle all the maintenance so you can focus on your business.',
  },
  {
    question: 'What if our tools aren\'t listed?',
    answer:
      'If it has an API, we can connect it. We\'ve integrated with hundreds of tools, including custom internal systems. During discovery, we\'ll assess your entire stack and design a solution that works with everything you use.',
  },
  {
    question: 'How do you handle errors?',
    answer:
      'We build robust error handling into every automation: automatic retries with exponential backoff, detailed error logging, instant alerts via Slack/email, and fallback workflows. If something breaks, we\'re notified before you are.',
  },
  {
    question: 'Can we modify the automations later?',
    answer:
      'Absolutely. We provide full documentation and can train your team to make simple changes. For more complex modifications, we offer ongoing support packages or can make updates on a project basis.',
  },
  {
    question: 'What\'s the typical timeline?',
    answer:
      'Most projects take 2-4 weeks from discovery to launch. Simple automations can be faster (1-2 weeks), while complex multi-system integrations may take 4-6 weeks. We\'ll give you a specific timeline after the discovery phase.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes. We offer support packages starting at $500/month that include monitoring, maintenance, updates, and priority support. Many clients also choose our CTO Suite ($2,500/month) for comprehensive technical leadership.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Security is built into everything we do. We follow OWASP best practices, use encrypted connections, and never store your credentials (we use OAuth where possible). We can also sign NDAs and comply with your security requirements.',
  },
];

function FAQSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Common Questions
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`faq-${index}`}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden"
              >
                <Accordion.Trigger className="flex items-center justify-between w-full p-4 text-left text-white hover:text-brand-primary transition-colors group">
                  <span className="font-medium pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-zinc-500 group-data-[state=open]:rotate-180 transition-transform" />
                </Accordion.Trigger>
                <Accordion.Content className="px-4 pb-4">
                  <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// CTA SECTION
// ============================================
function CTASection() {
  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Free Your Team?
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Let&apos;s talk about what&apos;s eating up your team&apos;s time.
            The first call is free, and we&apos;ll tell you exactly what we&apos;d automate.
          </p>

          <Link href="/quote">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl font-semibold text-lg text-white shadow-lg hover:shadow-brand-lg transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Get a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>

          <p className="text-sm text-zinc-500 mt-4">
            No commitment required. Response within 24 hours.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
