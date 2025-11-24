'use client';

import { SolutionPageLayout } from '@/components/layout/SolutionPageLayout';
import { SolutionHero } from '@/components/solutions/SolutionHero';
import { FeaturesGrid } from '@/components/solutions/FeaturesGrid';
import { HowItWorks } from '@/components/solutions/HowItWorks';
import { Phone, Clock, Users, DollarSign, Globe, Zap, Brain, Shield } from 'lucide-react';

export default function AIPhoneSystemsPage() {
  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a call again. Your AI receptionist works around the clock, handling calls during business hours, after hours, and on weekends.',
    },
    {
      icon: Users,
      title: 'Unlimited Concurrent Calls',
      description: 'Handle thousands of calls simultaneously. No more busy signals or callers on hold.',
    },
    {
      icon: Brain,
      title: 'Natural Conversations',
      description: "Advanced AI understands context, accents, and complex requests. Callers won't know they're talking to AI.",
    },
    {
      icon: Zap,
      title: 'Instant Actions',
      description: 'Books appointments, qualifies leads, answers FAQs, and routes calls—all in real-time without human intervention.',
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Speak to customers in 50+ languages. Perfect for global businesses or diverse local markets.',
    },
    {
      icon: Shield,
      title: 'HIPAA & PCI Compliant',
      description: 'Enterprise-grade security for healthcare, finance, and other regulated industries.',
    },
    {
      icon: DollarSign,
      title: 'Predictable Pricing',
      description: 'Flat monthly rate, no per-minute charges. Handle 10 calls or 10,000—same price.',
    },
    {
      icon: Phone,
      title: 'Seamless Integration',
      description: 'Works with your existing phone system. Integrate with your CRM, calendar, and other tools.',
    },
  ];

  const steps = [
    {
      icon: Brain,
      title: 'Design Conversation Flows',
      description: 'We map out all the scenarios your AI should handle: appointments, FAQs, emergencies, transfers. Define routing rules and fallbacks.',
    },
    {
      icon: Phone,
      title: 'Train Your AI Voice',
      description: 'Choose a voice (or clone yours), set tone and personality, train on your business info, products, and policies.',
    },
    {
      icon: Zap,
      title: 'Connect & Test',
      description: 'Integrate with your phone system, calendar, and CRM. Test with real scenarios and refine responses.',
    },
    {
      icon: Users,
      title: 'Go Live & Monitor',
      description: 'Deploy to production. Track call analytics, identify improvement opportunities, and continuously optimize.',
    },
  ];

  return (
    <SolutionPageLayout
      ctaTitle="Ready for an AI Receptionist?"
      ctaDescription="Stop missing calls. Start converting more leads. Deploy in 2 weeks."
      ctaBadge="Let's Build"
    >
      {/* Hero */}
      <SolutionHero
        badge="AI Phone Systems"
        title={
          <span className="text-text-primary dark:text-dark-text-primary">
            Never Miss a Call.{' '}
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
              Never Lose a Lead.
            </span>
          </span>
        }
        subtitle="24/7 AI-powered phone system that books appointments, qualifies leads, answers FAQs, and routes calls—just like a human receptionist, but better."
        primaryCTA={{ text: 'Get Started', href: '/contact' }}
        secondaryCTA={{ text: 'See Pricing', href: '#pricing' }}
        stats={[
          { value: '24/7', label: 'Always Available' },
          { value: '∞', label: 'Concurrent Calls' },
          { value: '< $1/call', label: 'Average Cost' },
        ]}
        background="aurora"
      />

      {/* Use Cases */}
      <section className="py-24 bg-white dark:bg-dark-bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              What Can It Handle?
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              Common scenarios our AI phone systems handle every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                scenario: 'Appointment Booking',
                caller: `"I'd like to schedule a cleaning for next Tuesday"`,
                ai: `"I have availability at 10am, 2pm, or 4pm. Which works best?"`,
                action: '→ Books in calendar, sends confirmation SMS',
              },
              {
                scenario: 'Lead Qualification',
                caller: `"How much does a website cost?"`,
                ai: `"Pricing ranges from $1k-$15k depending on features. What type of business are you?"`,
                action: '→ Collects info, sends to CRM, schedules sales call',
              },
              {
                scenario: 'Emergency Routing',
                caller: `"My water heater is leaking!"`,
                ai: `"This sounds urgent. I'm connecting you to our emergency line now."`,
                action: '→ Immediately transfers to on-call technician',
              },
              {
                scenario: 'After-Hours FAQ',
                caller: `"What are your business hours?"`,
                ai: `"We're open Monday-Friday 9am-6pm. Can I schedule a callback for tomorrow?"`,
                action: '→ Captures contact info, creates callback task',
              },
              {
                scenario: 'Multi-Language Support',
                caller: `"¿Habla español?"`,
                ai: `"¡Sí! ¿Cómo puedo ayudarte hoy?"`,
                action: '→ Switches to Spanish, continues conversation',
              },
              {
                scenario: 'Payment Collection',
                caller: `"I need to pay my invoice"`,
                ai: `"I can text you a secure payment link. What's your account number?"`,
                action: '→ Verifies identity, sends payment link via SMS',
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-neutral-50 dark:bg-dark-bg-primary rounded-2xl p-6 border border-neutral-200 dark:border-dark-border"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary dark:text-dark-brand-primary text-sm font-semibold mb-4">
                  {useCase.scenario}
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-text-secondary dark:text-dark-text-secondary italic pt-1">
                      {useCase.caller}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center flex-shrink-0">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm text-text-primary dark:text-dark-text-primary font-medium pt-1">
                      {useCase.ai}
                    </p>
                  </div>

                  <div className="pl-11 text-xs text-text-tertiary dark:text-dark-text-tertiary">
                    {useCase.action}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesGrid
        title="Why Businesses Love It"
        subtitle="More than just an answering service—a complete phone system"
        features={features}
      />

      {/* How It Works */}
      <HowItWorks
        title="Setup in 2 Weeks"
        subtitle="From design to deployment"
        steps={steps}
      />

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-neutral-50 dark:bg-dark-bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              Simple, Predictable Pricing
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              No per-minute charges. No hidden fees. Just one flat monthly rate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-dark-bg-secondary rounded-2xl p-8 border border-neutral-200 dark:border-dark-border">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="text-4xl font-bold text-brand-primary dark:text-dark-brand-primary mb-6">
                $299<span className="text-lg text-text-tertiary">/mo</span>
              </div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex items-center gap-2">✓ Up to 500 calls/month</li>
                <li className="flex items-center gap-2">✓ Basic appointment booking</li>
                <li className="flex items-center gap-2">✓ FAQ answering</li>
                <li className="flex items-center gap-2">✓ Email support</li>
              </ul>
              <a href="/contact" className="block w-full text-center py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold">
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border-2 border-brand-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="text-4xl font-bold text-brand-primary dark:text-dark-brand-primary mb-6">
                $799<span className="text-lg text-text-tertiary">/mo</span>
              </div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex items-center gap-2">✓ Unlimited calls</li>
                <li className="flex items-center gap-2">✓ Advanced lead qualification</li>
                <li className="flex items-center gap-2">✓ CRM integration</li>
                <li className="flex items-center gap-2">✓ Multi-language support</li>
                <li className="flex items-center gap-2">✓ Priority support</li>
              </ul>
              <a href="/contact" className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold shadow-lg">
                Get Started
              </a>
            </div>

            <div className="bg-white dark:bg-dark-bg-secondary rounded-2xl p-8 border border-neutral-200 dark:border-dark-border">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-brand-primary dark:text-dark-brand-primary mb-6">
                Custom
              </div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex items-center gap-2">✓ Everything in Professional</li>
                <li className="flex items-center gap-2">✓ Custom voice cloning</li>
                <li className="flex items-center gap-2">✓ HIPAA/PCI compliance</li>
                <li className="flex items-center gap-2">✓ Dedicated account manager</li>
                <li className="flex items-center gap-2">✓ SLA guarantee</li>
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
