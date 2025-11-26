'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database,
  Target,
  Globe,
  ArrowRight,
  Check,
  ChevronDown,
  Zap,
  Shield,
  TrendingUp,
  FileText,
  Code2,
  ShoppingCart,
  Building,
  Briefcase,
  Newspaper,
  Users,
  BarChart3,
  Scale,
  Clock,
  RefreshCw,
  Play,
  Circle,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DottedSurface } from '@/components/ui/dotted-surface';
import { LiveExtractionDemo } from '@/components/ui/live-extraction-demo';
import { FadeInSection } from '@/components/animations/FadeInSection';
import * as Accordion from '@radix-ui/react-accordion';

export default function WebScrapingPage() {
  return (
    <div className="dark min-h-screen font-sans selection:bg-brand-primary/30 overflow-x-hidden">
      {/* Dotted Surface Background - 3D particle wave */}
      <DottedSurface />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <CapabilitiesGrid />
        <UseCasesSection />
        <HowItWorks />
        <LegalEthicalSection />
        <OutputFormatsSection />
        <SolutionTiersSection />
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
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-zinc-400">
                WEB SCRAPING & DATA EXTRACTION
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-white">Turn Any Website Into</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-primary">
                Structured Data
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
              Extract data from any website at scale. Product prices, competitor analysis,
              market research, lead generation—whatever you need, we scrape it{' '}
              <span className="text-white font-semibold">cleanly, quickly, and legally</span>.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Database className="w-4 h-4 text-cyan-400" />
                <span>1M+ Pages/Day</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Target className="w-4 h-4 text-emerald-400" />
                <span>99% Success Rate</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Globe className="w-4 h-4 text-amber-400" />
                <span>195+ Countries</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#use-cases"
                className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-brand-primary rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  See Use Cases
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link
                href="/quote"
                className="px-6 py-3 border border-zinc-700 rounded-lg font-mono text-sm text-zinc-400 hover:border-cyan-400/50 hover:text-zinc-200 transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </FadeInSection>

        {/* Live Extraction Demo */}
        <FadeInSection delay={0.2}>
          <div className="relative mt-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-brand-primary/10 rounded-2xl blur-xl opacity-50" />
            <div className="relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 md:p-8">
              <LiveExtractionDemo />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// CAPABILITIES GRID
// ============================================
const capabilities = [
  {
    title: 'Any Website, Any Data',
    description: 'E-commerce, real estate, job boards, social media—if it\'s on the web, we can extract it.',
    icon: Database,
    color: '#0A84FF',
  },
  {
    title: 'Real-Time or Scheduled',
    description: 'One-time scrapes for research or recurring feeds that keep your data fresh 24/7.',
    icon: Zap,
    color: '#FBBF24',
  },
  {
    title: 'Anti-Detection Tech',
    description: 'Rotating proxies, CAPTCHA solving, fingerprint rotation—we get through where others fail.',
    icon: Shield,
    color: '#10B981',
  },
  {
    title: 'Scale to Millions',
    description: 'From 100 pages to 10M+ with the same reliability. Our infrastructure grows with you.',
    icon: TrendingUp,
    color: '#8B5CF6',
  },
  {
    title: 'Structured Output',
    description: 'CSV, JSON, Excel, or direct database integration. Your data, your format.',
    icon: FileText,
    color: '#EC4899',
  },
  {
    title: 'JavaScript Sites',
    description: 'SPAs, infinite scroll, lazy loading—we handle modern web apps that break basic scrapers.',
    icon: Code2,
    color: '#F97316',
  },
  {
    title: 'Global IP Rotation',
    description: '195+ countries, residential & datacenter proxies. Access geo-restricted content anywhere.',
    icon: Globe,
    color: '#06B6D4',
  },
  {
    title: '99% Success Rate',
    description: 'Automatic retries, error handling, and quality checks. We verify every data point.',
    icon: Target,
    color: '#22C55E',
  },
];

function CapabilitiesGrid() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Enterprise-Grade Extraction
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Built for reliability, speed, and scale. No site is too complex.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group p-5 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div
                    className="inline-flex p-2.5 rounded-lg mb-3"
                    style={{ backgroundColor: `${cap.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: cap.color }} />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{cap.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{cap.description}</p>
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
// USE CASES SECTION
// ============================================
const useCases = [
  {
    title: 'E-commerce Price Monitoring',
    description: 'Track competitor prices on Amazon, Walmart, eBay. Automate repricing strategies.',
    icon: ShoppingCart,
    examples: ['Product prices', 'Stock levels', 'Reviews', 'Seller data'],
    color: '#F59E0B',
  },
  {
    title: 'Real Estate Listings',
    description: 'Aggregate property data from Zillow, Realtor.com, Redfin. Build your own database.',
    icon: Building,
    examples: ['Listing details', 'Price history', 'Agent info', 'Market trends'],
    color: '#3B82F6',
  },
  {
    title: 'Job Board Aggregation',
    description: 'Pull job postings from Indeed, LinkedIn, Glassdoor. Power your recruiting tools.',
    icon: Briefcase,
    examples: ['Job titles', 'Salaries', 'Requirements', 'Company data'],
    color: '#8B5CF6',
  },
  {
    title: 'News & Social Media',
    description: 'Monitor Twitter, Reddit, news sites. Track brand mentions and sentiment.',
    icon: Newspaper,
    examples: ['Headlines', 'Comments', 'Engagement', 'Trending topics'],
    color: '#EC4899',
  },
  {
    title: 'Lead Generation',
    description: 'Extract business contacts from Yellow Pages, Yelp, Google Maps. Build prospect lists.',
    icon: Users,
    examples: ['Business names', 'Addresses', 'Phone numbers', 'Emails'],
    color: '#10B981',
  },
  {
    title: 'Market Research',
    description: 'Gather reviews, ratings, and product data. Fuel your competitive intelligence.',
    icon: BarChart3,
    examples: ['Customer reviews', 'Ratings', 'Feature comparisons', 'Pricing tiers'],
    color: '#06B6D4',
  },
];

function UseCasesSection() {
  return (
    <section id="use-cases" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Use Cases
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              What Our Clients Scrape
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              From price monitoring to lead generation—see how businesses use our extraction services.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2.5 rounded-lg"
                      style={{ backgroundColor: `${useCase.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: useCase.color }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-sm text-zinc-400 mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.examples.map((example) => (
                      <span
                        key={example}
                        className="px-2 py-1 text-xs font-mono bg-zinc-800/50 text-zinc-400 rounded"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
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
    id: 'define',
    title: 'Define',
    duration: '1-2 days',
    status: 'completed',
    deliverables: ['Target URLs identified', 'Data fields mapped', 'Volume estimated'],
  },
  {
    id: 'build',
    title: 'Build',
    duration: '3-5 days',
    status: 'completed',
    deliverables: ['Custom scraper built', 'Anti-detection configured', 'Test runs completed'],
  },
  {
    id: 'extract',
    title: 'Extract',
    duration: 'Ongoing',
    status: 'active',
    deliverables: ['Data flowing to destination', 'Quality checks active', 'Deduplication running'],
  },
  {
    id: 'monitor',
    title: 'Monitor',
    duration: '24/7',
    status: 'pending',
    deliverables: ['Uptime monitoring', 'Change detection', 'Alerts configured'],
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
            <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
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
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              From URL to Data
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              A streamlined process that gets you clean data fast.
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
                extraction-pipeline
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
                        step.status === 'active' && 'text-cyan-400',
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
                            <span className={step.status === 'completed' ? 'text-emerald-500/60' : 'text-cyan-500/60'}>
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
// LEGAL & ETHICAL SECTION
// ============================================
const ethicalPillars = [
  {
    title: 'robots.txt Respect',
    description: 'We honor website policies and only access publicly available data that\'s permitted for scraping.',
    icon: FileText,
  },
  {
    title: 'Rate Limiting',
    description: 'Smart request throttling ensures we never overload target servers or disrupt their services.',
    icon: Clock,
  },
  {
    title: 'Legal Compliance',
    description: 'Our methods comply with CFAA, GDPR, and other data protection regulations. We stay updated on legal precedents.',
    icon: Scale,
  },
];

function LegalEthicalSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              Ethics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Responsible Data Extraction
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              We believe in ethical scraping. Our practices protect both you and the websites we access.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6">
            {ethicalPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl text-center hover:border-emerald-400/30 transition-colors"
                >
                  <div className="inline-flex p-3 rounded-xl bg-emerald-400/10 mb-4">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{pillar.title}</h3>
                  <p className="text-sm text-zinc-400">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </FadeInSection>

        {/* Callout */}
        <FadeInSection delay={0.3}>
          <div className="mt-8 p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-lg text-center">
            <p className="text-emerald-400 font-medium">
              &ldquo;We only extract public data. No login bypassing. No private information.&rdquo;
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// OUTPUT FORMATS SECTION
// ============================================
const outputFormats = [
  { name: 'JSON', extension: '.json', color: '#F59E0B' },
  { name: 'CSV', extension: '.csv', color: '#10B981' },
  { name: 'Excel', extension: '.xlsx', color: '#22C55E' },
  { name: 'API', extension: 'REST', color: '#3B82F6' },
  { name: 'Database', extension: 'SQL', color: '#8B5CF6' },
];

function OutputFormatsSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Delivery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Your Data, Your Format
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Get your data exactly how you need it—no conversion headaches.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            {outputFormats.map((format, index) => (
              <motion.div
                key={format.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl hover:border-cyan-400/30 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-mono text-xs font-bold text-white"
                  style={{ backgroundColor: format.color }}
                >
                  {format.extension}
                </div>
                <span className="text-white font-medium">{format.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Integration note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-500">
              Direct integration with{' '}
              <span className="text-zinc-300">Airtable</span>,{' '}
              <span className="text-zinc-300">Google Sheets</span>,{' '}
              <span className="text-zinc-300">Snowflake</span>,{' '}
              <span className="text-zinc-300">BigQuery</span>, and more
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// SOLUTION TIERS SECTION
// ============================================
const solutionTiers = [
  {
    name: 'One-Time Scrape',
    description: 'Perfect for research projects and one-off data needs',
    features: [
      'Single extraction run',
      'Up to 100K pages',
      'CSV/JSON delivery',
      'Data cleaning included',
      '7-day support window',
    ],
    highlighted: false,
  },
  {
    name: 'Recurring Scrape',
    description: 'Ongoing data feeds that keep your database fresh',
    features: [
      'Scheduled extractions',
      'Unlimited pages',
      'Real-time API delivery',
      'Change detection alerts',
      'Dedicated support',
      'Custom integrations',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Custom infrastructure for high-volume, mission-critical data',
    features: [
      'Dedicated scraping cluster',
      '10M+ pages/day capacity',
      'Custom anti-detection',
      '24/7 monitoring',
      'SLA guarantee',
      'Priority support',
      'On-premise option',
    ],
    highlighted: false,
  },
];

function SolutionTiersSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              From one-time projects to enterprise data pipelines. We&apos;ll provide a custom quote based on your needs.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6">
            {solutionTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'relative p-6 rounded-xl border transition-all duration-300',
                  tier.highlighted
                    ? 'bg-gradient-to-b from-cyan-500/10 to-transparent border-cyan-400/50'
                    : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-xs font-mono text-white rounded-full">
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
                      ? 'bg-cyan-500 text-white hover:bg-cyan-500/90'
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
    question: 'Is web scraping legal?',
    answer:
      'Yes, scraping publicly available data is generally legal. The 2022 hiQ Labs v. LinkedIn ruling affirmed that scraping public data doesn\'t violate the CFAA. However, we always respect robots.txt, terms of service, and avoid private/login-protected data to ensure compliance.',
  },
  {
    question: 'What websites can you scrape?',
    answer:
      'Almost any website with public data. We\'ve scraped everything from simple static sites to complex JavaScript SPAs, sites behind rate limiting, and geo-restricted content. Some sites require more sophisticated approaches, but we\'ll assess feasibility during our initial call.',
  },
  {
    question: 'How do you handle CAPTCHAs?',
    answer:
      'We use a combination of residential proxies, browser fingerprint rotation, and intelligent request patterns to minimize CAPTCHAs. When they do appear, we have automated solving systems. Our goal is to mimic real user behavior so CAPTCHAs are rarely triggered.',
  },
  {
    question: 'What if a website changes its structure?',
    answer:
      'Our monitoring systems detect structural changes automatically. For recurring scrapes, we update the scrapers proactively and alert you if there\'s any data disruption. You\'re covered—no surprise data gaps.',
  },
  {
    question: 'How fast can you deliver?',
    answer:
      'For one-time scrapes: typically 1-2 weeks from kickoff to delivery. For recurring scrapes: data can flow within 24-48 hours of initial setup. High-volume enterprise extractions may take longer to optimize.',
  },
  {
    question: 'Do you offer API access to the data?',
    answer:
      'Yes! For recurring scrapes, we can set up a REST API endpoint that delivers fresh data on-demand. You can also integrate directly with your database, data warehouse, or tools like Airtable and Google Sheets.',
  },
  {
    question: 'What about rate limits and IP blocks?',
    answer:
      'We manage a pool of millions of IPs across 195+ countries (both residential and datacenter). Our systems automatically rotate IPs, vary request patterns, and throttle speed to avoid detection. We\'ve never been permanently blocked from a target site.',
  },
];

function FAQSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
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
                <Accordion.Trigger className="flex items-center justify-between w-full p-4 text-left text-white hover:text-cyan-400 transition-colors group">
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
            Ready to Unlock Your Data?
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Tell us what data you need. We&apos;ll tell you how we&apos;ll get it—and give you a free feasibility assessment.
          </p>

          <Link href="/quote">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-brand-primary rounded-xl font-semibold text-lg text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
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
