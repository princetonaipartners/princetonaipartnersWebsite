'use client';

import { SolutionPageLayout } from '@/components/layout/SolutionPageLayout';
import { SolutionHero } from '@/components/solutions/SolutionHero';
import { FeaturesGrid } from '@/components/solutions/FeaturesGrid';
import { HowItWorks } from '@/components/solutions/HowItWorks';
import { Sparkles, Code, Rocket, Shield, TrendingUp, Users, Wrench, Target } from 'lucide-react';

export default function BespokeSoftwarePage() {
  const features = [
    {
      icon: Target,
      title: 'Built for YOUR Needs',
      description: 'Not a template, not a SaaS product—100% custom software designed specifically for your unique business processes.',
    },
    {
      icon: Code,
      title: 'Modern Tech Stack',
      description: 'We use cutting-edge technologies: Next.js, React, TypeScript, Node.js, PostgreSQL, and more. Your software is built to last.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, authentication, role-based access, and compliance certifications (HIPAA, SOC 2, GDPR).',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Architecture',
      description: 'Start with 10 users or 10 million—our architecture scales effortlessly with your growth.',
    },
    {
      icon: Users,
      title: 'Your Team, Our Expertise',
      description: 'We work closely with your team throughout the project. Your feedback shapes every decision.',
    },
    {
      icon: Wrench,
      title: 'Full Ownership',
      description: 'You own 100% of the code, data, and infrastructure. No vendor lock-in, no recurring licensing fees.',
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Most projects launch in 8-16 weeks. Agile development means you see progress every 2 weeks.',
    },
    {
      icon: Sparkles,
      title: 'Ongoing Support',
      description: 'Post-launch support, bug fixes, feature additions, and infrastructure maintenance included.',
    },
  ];

  const steps = [
    {
      icon: Target,
      title: 'Discovery & Planning',
      description: 'Deep dive into your business: workflows, pain points, goals. We create detailed requirements, wireframes, and project timeline.',
    },
    {
      icon: Code,
      title: 'Design & Architecture',
      description: 'UI/UX design, system architecture, database schema, API design. Every decision documented and approved by you.',
    },
    {
      icon: Wrench,
      title: 'Agile Development',
      description: 'Build in 2-week sprints. Demo working features at the end of each sprint. Adjust based on feedback.',
    },
    {
      icon: Rocket,
      title: 'Testing & Launch',
      description: 'Rigorous QA testing, user acceptance testing, security audits. Deploy to production with monitoring and support.',
    },
  ];

  return (
    <SolutionPageLayout
      ctaTitle="Ready to Build Something Amazing?"
      ctaDescription="Let's turn your vision into reality. Schedule a free consultation to discuss your project."
      ctaBadge="Let's Build"
    >
      {/* Hero */}
      <SolutionHero
        badge="Bespoke Software"
        title={
          <span className="text-text-primary dark:text-dark-text-primary">
            Your Vision.{' '}
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
              Our Expertise.
            </span>
            {' '}Built Perfectly.
          </span>
        }
        subtitle="End-to-end custom software development. From discovery to deployment, we build exactly what you need—nothing more, nothing less. Your unique business deserves unique solutions."
        primaryCTA={{ text: 'Schedule Consultation', href: '/contact' }}
        secondaryCTA={{ text: 'View Process', href: '#process' }}
        stats={[
          { value: '8-16', label: 'Weeks to Launch' },
          { value: '100%', label: 'Code Ownership' },
          { value: '∞', label: 'Possibilities' },
        ]}
        background="aurora"
      />

      {/* Project Types */}
      <section className="py-24 bg-white dark:bg-dark-bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              What We Build
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              From simple tools to complex enterprise systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: 'Internal Tools',
                examples: ['Custom CRM systems', 'Inventory management', 'Employee dashboards', 'Reporting tools'],
                pricing: '$10k - $50k',
              },
              {
                type: 'Customer Portals',
                examples: ['Client dashboards', 'Self-service platforms', 'Account management', 'Payment systems'],
                pricing: '$15k - $75k',
              },
              {
                type: 'SaaS Products',
                examples: ['Multi-tenant platforms', 'Subscription billing', 'API infrastructure', 'Admin panels'],
                pricing: '$50k - $200k+',
              },
              {
                type: 'Marketplaces',
                examples: ['Two-sided platforms', 'Payment processing', 'Review systems', 'Search & filters'],
                pricing: '$75k - $250k+',
              },
              {
                type: 'Mobile Apps',
                examples: ['iOS & Android native', 'React Native cross-platform', 'Offline-first', 'Push notifications'],
                pricing: '$30k - $150k',
              },
              {
                type: 'API Platforms',
                examples: ['RESTful APIs', 'GraphQL endpoints', 'Webhook systems', 'Developer portals'],
                pricing: '$20k - $100k',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-neutral-50 dark:bg-dark-bg-primary rounded-2xl p-6 border border-neutral-200 dark:border-dark-border hover:border-brand-primary hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
                  {project.type}
                </h3>
                <div className="text-2xl font-bold text-brand-primary dark:text-dark-brand-primary mb-4">
                  {project.pricing}
                </div>
                <ul className="space-y-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                  {project.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesGrid
        title="Why Choose Bespoke"
        subtitle="When off-the-shelf software isn't enough"
        features={features}
      />

      {/* Process */}
      <div id="process">
        <HowItWorks
          title="Our Development Process"
          subtitle="Transparent, collaborative, and results-driven"
          steps={steps}
        />
      </div>

      {/* Success Stories */}
      <section className="py-24 bg-neutral-50 dark:bg-dark-bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              Real Projects, Real Results
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              How bespoke software transformed businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                industry: 'Healthcare',
                challenge: 'Manual patient intake taking 20+ minutes per patient',
                solution: 'Custom patient portal with AI-powered form filling and automated insurance verification',
                results: ['Intake time reduced to 3 minutes', '90% patient satisfaction', '$200k saved annually'],
              },
              {
                industry: 'E-commerce',
                challenge: "Generic Shopify couldn't handle complex product configurations",
                solution: 'Bespoke product configurator with 3D preview, real-time pricing, and inventory management',
                results: ['35% increase in conversions', '60% fewer support tickets', '$500k additional revenue'],
              },
              {
                industry: 'Manufacturing',
                challenge: 'Spreadsheet-based inventory causing errors and stockouts',
                solution: 'Custom ERP with barcode scanning, automated reordering, and supplier integration',
                results: ['99.9% inventory accuracy', 'Zero stockouts', '40% reduction in carrying costs'],
              },
              {
                industry: 'Legal',
                challenge: 'Document review taking 100+ hours per case',
                solution: 'AI-powered document analysis with clause extraction and risk scoring',
                results: ['Review time cut by 80%', 'Handle 3x more cases', 'Same headcount'],
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-bg-secondary rounded-2xl p-8 border border-neutral-200 dark:border-dark-border"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary dark:text-dark-brand-primary text-sm font-semibold mb-4">
                  {story.industry}
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-text-tertiary dark:text-dark-text-tertiary mb-1">
                      Challenge
                    </h4>
                    <p className="text-text-secondary dark:text-dark-text-secondary">
                      {story.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-text-tertiary dark:text-dark-text-tertiary mb-1">
                      Solution
                    </h4>
                    <p className="text-text-secondary dark:text-dark-text-secondary">
                      {story.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-text-tertiary dark:text-dark-text-tertiary mb-2">
                      Results
                    </h4>
                    <ul className="space-y-1">
                      {story.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-green-700 dark:text-green-400"
                        >
                          <div className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                            ✓
                          </div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SolutionPageLayout>
  );
}
