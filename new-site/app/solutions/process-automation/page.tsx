'use client';

import { SolutionPageLayout } from '@/components/layout/SolutionPageLayout';
import { SolutionHero } from '@/components/solutions/SolutionHero';
import { FeaturesGrid } from '@/components/solutions/FeaturesGrid';
import { HowItWorks } from '@/components/solutions/HowItWorks';
import { Zap, Clock, Target, DollarSign, TrendingUp, Shield, Network, Workflow } from 'lucide-react';

export default function ProcessAutomationPage() {
  const features = [
    {
      icon: Clock,
      title: 'Save 20+ Hours/Week',
      description: "Automate repetitive tasks that eat up your team's time. Data entry, report generation, email follow-ups—all handled automatically.",
    },
    {
      icon: Target,
      title: '99.9% Accuracy',
      description: 'Eliminate human error. Automation never forgets a step, misses a deadline, or makes a typo.',
    },
    {
      icon: DollarSign,
      title: 'ROI in < 3 Months',
      description: 'Most automation projects pay for themselves within 90 days through time savings and error reduction.',
    },
    {
      icon: Network,
      title: '1000+ Integrations',
      description: 'Connect any tools you use: Gmail, Slack, Salesforce, QuickBooks, Shopify, and more. If it has an API, we can automate it.',
    },
    {
      icon: Zap,
      title: 'Real-Time Execution',
      description: 'Trigger automations instantly when events occur. No delays, no batch processing, just immediate action.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Workflows',
      description: 'Handle 10 tasks or 10,000—automation scales effortlessly without adding headcount.',
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with audit logs, role-based access, and compliance certifications.',
    },
    {
      icon: Workflow,
      title: 'Visual Builder',
      description: 'See your workflows as diagrams. Easy to understand, easy to modify, easy to troubleshoot.',
    },
  ];

  const steps = [
    {
      icon: Target,
      title: 'Identify Opportunities',
      description: 'We analyze your current processes to find repetitive, time-consuming tasks that are perfect for automation.',
    },
    {
      icon: Workflow,
      title: 'Design Workflows',
      description: 'Map out the automation logic with visual flowcharts. Define triggers, actions, conditions, and error handling.',
    },
    {
      icon: Zap,
      title: 'Build & Test',
      description: 'Develop the automation using n8n, Zapier, or custom code. Test thoroughly with real data and edge cases.',
    },
    {
      icon: TrendingUp,
      title: 'Deploy & Monitor',
      description: 'Launch to production with monitoring dashboards. Track performance, catch errors, and continuously optimize.',
    },
  ];

  const automationExamples = [
    {
      category: 'Sales & Marketing',
      examples: [
        'New lead in CRM → Enrich with Clearbit → Send personalized email → Add to Slack channel',
        'Form submission → Create deal in Pipedrive → Schedule follow-up → Send confirmation SMS',
        'Email campaign click → Tag contact → Trigger drip sequence → Notify sales rep',
      ],
    },
    {
      category: 'E-commerce',
      examples: [
        'New order → Send to fulfillment → Track shipment → Email updates → Request review',
        'Low inventory alert → Order from supplier → Update database → Notify team',
        'Refund request → Process payment → Update inventory → Log in support system',
      ],
    },
    {
      category: 'Finance & Operations',
      examples: [
        'Invoice received → Extract data (OCR) → Match to PO → Route for approval → Pay vendor',
        'End of month → Generate reports → Email to stakeholders → Archive in Google Drive',
        'Expense submitted → Validate receipt → Check policy → Approve/deny → Update accounting',
      ],
    },
    {
      category: 'HR & Recruiting',
      examples: [
        'New hire → Create accounts → Send welcome email → Schedule onboarding → Add to payroll',
        'Resume received → Parse details → Score candidate → Schedule interview → Update ATS',
        'PTO request → Check balance → Route for approval → Update calendar → Sync to payroll',
      ],
    },
  ];

  return (
    <SolutionPageLayout
      ctaTitle="Ready to Automate Your Business?"
      ctaDescription="Stop wasting time on repetitive tasks. Let's build your first automation."
      ctaBadge="Let's Build"
    >
      {/* Hero */}
      <SolutionHero
        badge="Process Automation"
        title={
          <span className="text-text-primary dark:text-dark-text-primary">
            Automate the Boring Stuff.{' '}
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
              Focus on What Matters.
            </span>
          </span>
        }
        subtitle="Eliminate repetitive tasks, reduce errors, and save 20+ hours per week with intelligent workflow automation. Connect your tools, automate your processes, scale your business."
        primaryCTA={{ text: 'Start Automating', href: '/contact' }}
        secondaryCTA={{ text: 'See Examples', href: '#examples' }}
        stats={[
          { value: '20+', label: 'Hours Saved/Week' },
          { value: '99.9%', label: 'Accuracy Rate' },
          { value: '< 90', label: 'Days to ROI' },
        ]}
        background="aurora"
      />

      {/* Automation Examples */}
      <section id="examples" className="py-24 bg-white dark:bg-dark-bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              What Can You Automate?
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              Real automation workflows we've built for clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationExamples.map((category, index) => (
              <div
                key={index}
                className="bg-neutral-50 dark:bg-dark-bg-primary rounded-2xl p-8 border border-neutral-200 dark:border-dark-border"
              >
                <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-6">
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                        {example}
                      </p>
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
        title="Why Automation Works"
        subtitle="The benefits go far beyond just saving time"
        features={features}
      />

      {/* How It Works */}
      <HowItWorks
        title="How We Build Your Automations"
        subtitle="From discovery to deployment in 2-4 weeks"
        steps={steps}
      />

      {/* Pricing */}
      <section className="py-24 bg-neutral-50 dark:bg-dark-bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              Automation Pricing
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              Simple, transparent pricing based on complexity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-dark-bg-secondary rounded-2xl p-8 border border-neutral-200 dark:border-dark-border">
              <h3 className="text-2xl font-bold mb-2">Simple</h3>
              <div className="text-4xl font-bold text-brand-primary dark:text-dark-brand-primary mb-6">
                $500<span className="text-lg text-text-tertiary">-1k</span>
              </div>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-6">
                Single-step automations with 2-3 tool integrations
              </p>
              <ul className="space-y-3 text-sm mb-8">
                <li>✓ Form → Email → Spreadsheet</li>
                <li>✓ Email → Slack notification</li>
                <li>✓ New order → Fulfillment system</li>
              </ul>
              <a href="/contact" className="block w-full text-center py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold">
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-brand-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Advanced</h3>
              <div className="text-4xl font-bold text-brand-primary dark:text-dark-brand-primary mb-6">
                $2k<span className="text-lg text-text-tertiary">-5k</span>
              </div>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-6">
                Multi-step workflows with conditional logic and error handling
              </p>
              <ul className="space-y-3 text-sm mb-8">
                <li>✓ Lead enrichment + scoring + routing</li>
                <li>✓ Invoice processing + approval + payment</li>
                <li>✓ Customer onboarding sequences</li>
              </ul>
              <a href="/contact" className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold shadow-lg">
                Get Started
              </a>
            </div>

            <div className="bg-white dark:bg-dark-bg-secondary rounded-2xl p-8 border border-neutral-200 dark:border-dark-border">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-brand-primary dark:text-dark-brand-primary mb-6">
                $10k+
              </div>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-6">
                Complex automations with custom code, APIs, and databases
              </p>
              <ul className="space-y-3 text-sm mb-8">
                <li>✓ Custom AI + data transformation</li>
                <li>✓ Full process automation suites</li>
                <li>✓ Dedicated support & monitoring</li>
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
