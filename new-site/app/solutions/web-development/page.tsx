'use client';

import { SolutionPageLayout } from '@/components/layout/SolutionPageLayout';
import { SolutionHero } from '@/components/solutions/SolutionHero';
import { FeaturesGrid } from '@/components/solutions/FeaturesGrid';
import { HowItWorks } from '@/components/solutions/HowItWorks';
import { LighthouseRunner } from '@/components/solutions/web-dev/LighthouseRunner';
import { AISEOExplainer } from '@/components/solutions/web-dev/AISEOExplainer';
import { BeforeAfterSlider } from '@/components/solutions/web-dev/BeforeAfterSlider';
import { SEOChecklist } from '@/components/solutions/web-dev/SEOChecklist';
import { Zap, Brain, Smartphone, Headphones, TrendingUp, Shield, Code, Sparkles, Search, BarChart3, Wrench, Rocket } from 'lucide-react';

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered from Day One',
      description: 'Every site includes intelligent features like chatbots, content optimization, and automated lead capture—not as add-ons, but built right in.',
    },
    {
      icon: Search,
      title: 'Dual SEO Strategy',
      description: 'Optimized for both Google AND AI assistants (ChatGPT, Claude, Perplexity). Rank #1 on traditional search AND get recommended by AI.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First, Always',
      description: 'Over 60% of traffic is mobile. We design for phones first, then scale up—ensuring perfect experiences on every device.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Slow sites lose customers. Optimized images, clean code, and modern architecture deliver sub-2-second load times.',
    },
    {
      icon: Headphones,
      title: 'Ongoing Support Included',
      description: 'Your business evolves, and so should your site. Continuous updates, security patches, and support—no surprise fees.',
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimized',
      description: 'Every element designed to turn visitors into customers. Strategic CTAs, trust signals, and proven design patterns.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'SSL certificates, DDoS protection, regular security audits, and compliance with GDPR, HIPAA, and other regulations.',
    },
    {
      icon: Code,
      title: 'Scalable Architecture',
      description: 'Start small, grow big. Built to scale from a landing page to a full e-commerce platform without rebuilding.',
    },
  ];

  const steps = [
    {
      icon: Sparkles,
      title: 'Discovery & Planning',
      description: 'We learn your business, audience, and goals. Define features, sitemap, and success metrics.',
    },
    {
      icon: Wrench,
      title: 'Design & Development',
      description: 'Custom design tailored to your brand. Modern tech stack (Next.js, React, TypeScript) for speed and maintainability.',
    },
    {
      icon: BarChart3,
      title: 'SEO & AI Optimization',
      description: 'Implement traditional SEO + AI SEO. Schema markup, structured data, and content optimization for both Google and LLMs.',
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'Deploy to production with monitoring, analytics, and ongoing optimization. 24/7 support and monthly reports.',
    },
  ];

  return (
    <SolutionPageLayout
      ctaTitle="Ready to Build a Website That Ranks Everywhere?"
      ctaDescription="From traditional Google search to AI assistants like ChatGPT—we build sites that dominate all platforms."
      ctaBadge="Let's Build"
    >
      {/* Hero */}
      <SolutionHero
        badge="Web Development & SEO"
        title={
          <span className="text-text-primary dark:text-dark-text-primary">
            Websites That Rank #1 on{' '}
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
              Google AND ChatGPT
            </span>
          </span>
        }
        subtitle="Traditional SEO is table stakes. AI SEO is your competitive edge. We build sites optimized for both—so you show up everywhere your customers search."
        primaryCTA={{ text: 'See Live Demo', href: '#lighthouse' }}
        secondaryCTA={{ text: 'View Pricing', href: '#pricing' }}
        demo={
          <div id="lighthouse">
            <LighthouseRunner />
          </div>
        }
        stats={[
          { value: '< 2s', label: 'Load Time' },
          { value: '100/100', label: 'SEO Score' },
          { value: '5x', label: 'More Conversions' },
        ]}
        background="gradient"
      />

      {/* AI SEO Explainer */}
      <AISEOExplainer />

      {/* Before/After Slider */}
      <BeforeAfterSlider />

      {/* Features Grid */}
      <FeaturesGrid
        title="What Makes Our Websites Different"
        subtitle="We combine cutting-edge technology with proven design principles to deliver websites that actually work."
        features={features}
      />

      {/* How It Works */}
      <HowItWorks
        title="Our Process"
        subtitle="From discovery to launch, we handle everything. Transparent timeline, clear communication, no surprises."
        steps={steps}
      />

      {/* SEO Checklist */}
      <SEOChecklist />

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-neutral-50 dark:bg-dark-bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              Transparent Pricing
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              Whether you're a local cafe or a luxury brand, we have a solution that fits your budget and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white dark:bg-dark-bg-secondary rounded-2xl p-8 border border-neutral-200 dark:border-dark-border hover:border-brand-primary hover:shadow-xl transition-all">
              <div className="mb-6">
                <div className="inline-block px-4 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm font-semibold text-text-secondary mb-4">
                  Best for Local Businesses
                </div>
                <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
                  Starter
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-text-primary dark:text-dark-text-primary">
                    $1,000
                  </span>
                  <span className="text-text-secondary dark:text-dark-text-secondary">
                    one-time
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-400" />
                  </div>
                  3-5 page responsive website
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-400" />
                  </div>
                  Mobile-first design
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-400" />
                  </div>
                  Contact forms & Google Maps
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-400" />
                  </div>
                  Basic SEO optimization
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-400" />
                  </div>
                  SSL security certificate
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-400" />
                  </div>
                  30-day support
                </li>
              </ul>

              <a
                href="/contact"
                className="block w-full text-center py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold hover:scale-105 transition-transform"
              >
                Get Started
              </a>
            </div>

            {/* Professional */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-brand-primary shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-sm font-semibold">
                Most Popular
              </div>

              <div className="mb-6">
                <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary dark:text-dark-brand-primary text-sm font-semibold mb-4">
                  Best for Growing Businesses
                </div>
                <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
                  Professional
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-text-primary dark:text-dark-text-primary">
                    $5,000
                  </span>
                  <span className="text-text-secondary dark:text-dark-text-secondary">
                    one-time
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-primary dark:bg-dark-brand-primary" />
                  </div>
                  8-12 page custom website
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-primary dark:bg-dark-brand-primary" />
                  </div>
                  Advanced animations & interactions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-primary dark:bg-dark-brand-primary" />
                  </div>
                  <strong>AI-driven SEO optimization</strong>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-primary dark:bg-dark-brand-primary" />
                  </div>
                  AI chatbot integration
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-primary dark:bg-dark-brand-primary" />
                  </div>
                  CMS for easy content updates
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-primary dark:bg-dark-brand-primary" />
                  </div>
                  Advanced analytics & tracking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-primary dark:bg-dark-brand-primary" />
                  </div>
                  Schema markup for rich results
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-primary dark:bg-dark-brand-primary" />
                  </div>
                  90-day priority support
                </li>
              </ul>

              <a
                href="/contact"
                className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Get Started
              </a>
            </div>

            {/* Premium */}
            <div className="bg-white dark:bg-dark-bg-secondary rounded-2xl p-8 border border-neutral-200 dark:border-dark-border hover:border-brand-primary hover:shadow-xl transition-all">
              <div className="mb-6">
                <div className="inline-block px-4 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm font-semibold text-text-secondary mb-4">
                  Enterprise Level
                </div>
                <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
                  Premium
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-text-primary dark:text-dark-text-primary">
                    $15,000
                  </span>
                  <span className="text-text-secondary dark:text-dark-text-secondary">
                    one-time
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                  </div>
                  15-25 page fully custom website
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                  </div>
                  Premium animations & effects
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                  </div>
                  <strong>Comprehensive AI SEO strategy</strong>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                  </div>
                  E-commerce (up to 50 products)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                  </div>
                  Custom user portals & dashboards
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                  </div>
                  Third-party API integrations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                  </div>
                  Monthly analytics & SEO reports
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                  </div>
                  6-month dedicated support
                </li>
              </ul>

              <a
                href="/contact"
                className="block w-full text-center py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold hover:scale-105 transition-transform"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-secondary dark:text-dark-text-secondary">
              All packages include hosting, SSL certificate, and mobile optimization.{' '}
              <a href="/contact" className="text-brand-primary dark:text-dark-brand-primary font-semibold hover:underline">
                Custom quotes available →
              </a>
            </p>
          </div>
        </div>
      </section>
    </SolutionPageLayout>
  );
}
