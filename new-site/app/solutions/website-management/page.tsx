'use client';

import { SolutionPageLayout } from '@/components/layout/SolutionPageLayout';
import { SolutionHero } from '@/components/solutions/SolutionHero';
import { FeaturesGrid } from '@/components/solutions/FeaturesGrid';
import { HowItWorks } from '@/components/solutions/HowItWorks';
import { WebsiteShowcaseCarousel } from '@/components/solutions/website-management/WebsiteShowcaseCarousel';
import { SiteDiagnosisTool } from '@/components/solutions/website-management/SiteDiagnosisTool';
import { SEOComparisonSection } from '@/components/solutions/website-management/SEOComparisonSection';
import { PricingSection } from '@/components/solutions/website-management/PricingSection';
import {
  Zap,
  Brain,
  Smartphone,
  Headphones,
  TrendingUp,
  Shield,
  Code,
  Sparkles,
  Search,
  BarChart3,
  Wrench,
  Rocket,
} from 'lucide-react';

export default function WebsiteManagementPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered From Day One',
      description:
        'Every site includes intelligent features like chatbots, content optimization, and automated lead capture—not as expensive add-ons, but built right in.',
    },
    {
      icon: Search,
      title: 'Dual SEO Strategy',
      description:
        'Optimized for both Google AND AI assistants (ChatGPT, Claude, Perplexity). Rank #1 on traditional search AND get recommended by AI.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First, Always',
      description:
        'Over 60% of web traffic is mobile. We design for phones first, then scale up—ensuring perfect experiences on every device, every time.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description:
        'Slow sites lose customers. We obsess over speed—optimized images, clean code, and modern architecture deliver sub-2-second load times.',
    },
    {
      icon: Headphones,
      title: 'Ongoing Support Included',
      description:
        'Your business evolves, and so should your site. Continuous updates, security patches, and support—no surprise fees, ever.',
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimized',
      description:
        'Every element designed to turn visitors into customers. Strategic CTAs, trust signals, and proven design patterns drive real results.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description:
        'SSL certificates, DDoS protection, regular security audits, and compliance with GDPR, HIPAA, and other regulations.',
    },
    {
      icon: Code,
      title: 'Scalable Architecture',
      description:
        'Start small and grow big. Built to scale from a simple landing page to a full e-commerce platform—no rebuilding required.',
    },
  ];

  const steps = [
    {
      icon: Sparkles,
      title: 'Discovery & Diagnosis',
      description:
        'We analyze your current site (if you have one), learn your business goals, and identify opportunities. Free comprehensive audit included.',
    },
    {
      icon: Wrench,
      title: 'Strategy & Design',
      description:
        'Custom design tailored to your brand. SEO-first planning with both traditional and AI SEO strategies. Modern tech stack for speed and maintainability.',
    },
    {
      icon: BarChart3,
      title: 'Development & Testing',
      description:
        'Build your site using Next.js, React, and TypeScript. Implement SEO, performance optimization, and accessibility. Rigorous testing across devices.',
    },
    {
      icon: Rocket,
      title: 'Launch & Optimize',
      description:
        'Deploy to production with monitoring, analytics, and ongoing SEO optimization. 24/7 support and monthly performance reports.',
    },
  ];

  return (
    <SolutionPageLayout
      ctaTitle="Ready to Build a Website That Dominates Search Results?"
      ctaDescription="From traditional Google search to AI assistants like ChatGPT—we build sites that get found everywhere your customers look."
      ctaBadge="Let's Build"
    >
      {/* Hero */}
      <SolutionHero
        badge="Website Design & Development"
        title={
          <span className="text-text-primary dark:text-dark-text-primary">
            Premium Websites That Rank #1 on{' '}
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
              Google AND AI Assistants
            </span>
          </span>
        }
        subtitle="We build stunning, fast, SEO-optimized websites that drive real business growth. Every site is crafted with both traditional SEO and AI SEO—so you show up everywhere your customers search."
        primaryCTA={{ text: 'Get Free Site Diagnosis', href: '#diagnosis' }}
        secondaryCTA={{ text: 'View Pricing', href: '#pricing' }}
        stats={[
          { value: '< 2s', label: 'Load Time' },
          { value: '90+', label: 'Lighthouse Score' },
          { value: '5x', label: 'More Conversions' },
        ]}
        background="gradient"
      />

      {/* Website Showcase Carousel */}
      <section className="py-24 bg-white dark:bg-dark-bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              Real Websites. Real Results.
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              We don&apos;t just design—we build complete digital experiences that drive business growth.
              Explore our portfolio to see the variety and quality of our work.
            </p>
          </div>
        </div>
        <WebsiteShowcaseCarousel />
      </section>

      {/* Site Diagnosis Tool */}
      <section id="diagnosis" className="py-24 bg-neutral-50 dark:bg-dark-bg-primary">
        <SiteDiagnosisTool />
      </section>

      {/* SEO Comparison Section */}
      <SEOComparisonSection />

      {/* Features Grid */}
      <FeaturesGrid
        title="What Makes Our Websites Different"
        subtitle="We combine cutting-edge technology with proven design principles to deliver websites that actually work for your business."
        features={features}
      />

      {/* How It Works */}
      <HowItWorks
        title="Our Process"
        subtitle="From discovery to launch, we handle everything. Transparent timeline, clear communication, no surprises."
        steps={steps}
      />

      {/* Pricing Section */}
      <PricingSection />
    </SolutionPageLayout>
  );
}
