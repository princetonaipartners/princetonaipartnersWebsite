'use client';

import { SolutionPageLayout } from '@/components/layout/SolutionPageLayout';
import { SolutionHero } from '@/components/solutions/SolutionHero';
import { FeaturesGrid } from '@/components/solutions/FeaturesGrid';
import { HowItWorks } from '@/components/solutions/HowItWorks';
import { Globe, Database, Zap, Shield, TrendingUp, FileText, Network, Target } from 'lucide-react';

export default function WebScrapingPage() {
  const features = [
    {
      icon: Database,
      title: 'Any Website, Any Data',
      description: "Product prices, job listings, real estate, news articles, social media, reviews—if it's online, we can extract it.",
    },
    {
      icon: Zap,
      title: 'Real-Time or Scheduled',
      description: 'Get data instantly or schedule recurring scrapes (hourly, daily, weekly). Always stay up to date.',
    },
    {
      icon: Shield,
      title: 'Anti-Detection Technology',
      description: 'Rotating proxies, headless browsers, CAPTCHA solving, human-like behavior. We bypass detection systems.',
    },
    {
      icon: TrendingUp,
      title: 'Scale to Millions',
      description: 'Start with 100 pages or scale to millions. Distributed architecture handles any volume.',
    },
    {
      icon: FileText,
      title: 'Structured Output',
      description: 'Raw HTML → Clean CSV/JSON/Excel. Data delivered exactly how you need it.',
    },
    {
      icon: Network,
      title: 'JavaScript-Heavy Sites',
      description: 'Single-page apps, infinite scroll, lazy loading—we handle complex JavaScript-rendered content.',
    },
    {
      icon: Globe,
      title: 'Global IP Rotation',
      description: 'Access geo-restricted content with IPs from 195+ countries.',
    },
    {
      icon: Target,
      title: '99% Success Rate',
      description: 'Built-in retry logic, error handling, and monitoring ensure reliable data extraction.',
    },
  ];

  const steps = [
    {
      icon: Target,
      title: 'Define Data Requirements',
      description: 'What data do you need? From which sites? How often? We map out exact fields and structure.',
    },
    {
      icon: Network,
      title: 'Build & Test Scraper',
      description: 'Develop scraper with selectors, pagination, error handling. Test with sample data to ensure accuracy.',
    },
    {
      icon: Zap,
      title: 'Deploy & Monitor',
      description: 'Deploy to cloud infrastructure with monitoring, alerts, and automatic retries.',
    },
    {
      icon: Database,
      title: 'Deliver Data',
      description: 'Receive data via API, email, database insert, or cloud storage. Your choice.',
    },
  ];

  return (
    <SolutionPageLayout
      ctaTitle="Ready to Extract the Web?"
      ctaDescription="Turn any website into structured data. Get started today."
      ctaBadge="Let's Build"
    >
      {/* Hero */}
      <SolutionHero
        badge="Web Scraping"
        title={
          <span className="text-text-primary dark:text-dark-text-primary">
            Turn Any Website Into{' '}
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
              Structured Data
            </span>
          </span>
        }
        subtitle="Extract data from any website at scale. Product prices, competitor analysis, market research, lead generation—whatever you need, we scrape it cleanly, quickly, and legally."
        primaryCTA={{ text: 'Start Scraping', href: '/contact' }}
        secondaryCTA={{ text: 'See Use Cases', href: '#usecases' }}
        stats={[
          { value: '1M+', label: 'Pages/Day' },
          { value: '99%', label: 'Success Rate' },
          { value: '195+', label: 'Countries' },
        ]}
        background="aurora"
      />

      {/* Use Cases */}
      <section id="usecases" className="py-24 bg-white dark:bg-dark-bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              What Can You Scrape?
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              Common scraping projects we've delivered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                useCase: 'E-commerce Price Monitoring',
                description: 'Track competitor prices across 1000+ products. Get alerts when prices change.',
                sites: 'Amazon, Walmart, Target, Shopify stores',
                delivery: 'Daily CSV + price change alerts',
              },
              {
                useCase: 'Real Estate Listings',
                description: 'Scrape property listings with prices, photos, specs, and contact info.',
                sites: 'Zillow, Realtor.com, Redfin, Trulia',
                delivery: 'Hourly database updates',
              },
              {
                useCase: 'Job Board Aggregation',
                description: 'Collect job postings from multiple boards. Filter by location, salary, company.',
                sites: 'Indeed, LinkedIn, Glassdoor, AngelList',
                delivery: 'Real-time API',
              },
              {
                useCase: 'News & Social Media',
                description: 'Monitor news mentions, social sentiment, trending topics.',
                sites: 'Twitter, Reddit, News sites, Forums',
                delivery: 'Streaming data feed',
              },
              {
                useCase: 'Lead Generation',
                description: 'Extract business contact info, emails, phone numbers from directories.',
                sites: 'Yellow Pages, Yelp, Google Maps, Industry directories',
                delivery: 'Weekly CSV exports',
              },
              {
                useCase: 'Market Research',
                description: 'Gather product reviews, ratings, Q&As for competitive analysis.',
                sites: 'Amazon, Yelp, TripAdvisor, G2',
                delivery: 'On-demand JSON',
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-neutral-50 dark:bg-dark-bg-primary rounded-2xl p-6 border border-neutral-200 dark:border-dark-border hover:border-brand-primary hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-3">
                  {useCase.useCase}
                </h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-4">
                  {useCase.description}
                </p>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-text-tertiary dark:text-dark-text-tertiary">
                      Sites:
                    </span>
                    <p className="text-text-secondary dark:text-dark-text-secondary">
                      {useCase.sites}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-text-tertiary dark:text-dark-text-tertiary">
                      Delivery:
                    </span>
                    <p className="text-text-secondary dark:text-dark-text-secondary">
                      {useCase.delivery}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesGrid
        title="How We Scrape Better"
        subtitle="Technology that gets the job done"
        features={features}
      />

      {/* Legal Compliance */}
      <section className="py-24 bg-neutral-50 dark:bg-dark-bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              Legal & Ethical Scraping
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              We follow best practices and respect website terms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-dark-bg-secondary rounded-2xl p-6 border border-neutral-200 dark:border-dark-border">
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary dark:text-dark-text-primary">
                Respect robots.txt
              </h3>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                We check and honor robots.txt rules. Won't scrape disallowed pages or paths.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-bg-secondary rounded-2xl p-6 border border-neutral-200 dark:border-dark-border">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary dark:text-dark-text-primary">
                Rate Limiting
              </h3>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                Respectful crawl rates that don't overload servers. We add delays between requests.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-bg-secondary rounded-2xl p-6 border border-neutral-200 dark:border-dark-border">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary dark:text-dark-text-primary">
                Public Data Only
              </h3>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                We only scrape publicly accessible data. No bypassing logins or paywalls.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-yellow-50 dark:bg-yellow-900/10 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-700">
            <p className="text-sm text-yellow-900 dark:text-yellow-100">
              <strong>Disclaimer:</strong> While web scraping is generally legal for public data, you're responsible for complying with applicable laws and website terms of service. We recommend consulting with legal counsel for specific use cases.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks
        title="From URL to Data"
        subtitle="Clean, structured data delivered to you"
        steps={steps}
      />

      {/* Pricing */}
      <section className="py-24 bg-white dark:bg-dark-bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              Scraping Pricing
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              Based on complexity and volume
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-neutral-50 dark:bg-dark-bg-primary rounded-2xl p-8 border border-neutral-200 dark:border-dark-border">
              <h3 className="text-2xl font-bold mb-2">One-Time Scrape</h3>
              <div className="text-4xl font-bold text-brand-primary dark:text-dark-brand-primary mb-6">
                $500+
              </div>
              <ul className="space-y-3 text-sm mb-8">
                <li>✓ Single website</li>
                <li>✓ Up to 10,000 pages</li>
                <li>✓ CSV/JSON delivery</li>
                <li>✓ 1-week turnaround</li>
              </ul>
              <a href="/contact" className="block w-full text-center py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold">
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-brand-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Recurring Scrape</h3>
              <div className="text-4xl font-bold text-brand-primary dark:text-dark-brand-primary mb-6">
                $1k+<span className="text-lg text-text-tertiary">/mo</span>
              </div>
              <ul className="space-y-3 text-sm mb-8">
                <li>✓ Daily/weekly/hourly scrapes</li>
                <li>✓ Unlimited pages</li>
                <li>✓ Database or API delivery</li>
                <li>✓ Monitoring & maintenance</li>
              </ul>
              <a href="/contact" className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold shadow-lg">
                Get Started
              </a>
            </div>

            <div className="bg-neutral-50 dark:bg-dark-bg-primary rounded-2xl p-8 border border-neutral-200 dark:border-dark-border">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-brand-primary dark:text-dark-brand-primary mb-6">
                Custom
              </div>
              <ul className="space-y-3 text-sm mb-8">
                <li>✓ Multiple websites</li>
                <li>✓ Millions of pages</li>
                <li>✓ Real-time data feeds</li>
                <li>✓ Custom infrastructure</li>
                <li>✓ Dedicated support</li>
              </ul>
              <a href="/contact" className="block w-full text-center py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </SolutionPageLayout>
  );
}
