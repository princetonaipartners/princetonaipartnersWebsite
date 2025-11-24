'use client';

import { SolutionPageLayout } from '@/components/layout/SolutionPageLayout';
import { SolutionHero } from '@/components/solutions/SolutionHero';
import { FeaturesGrid } from '@/components/solutions/FeaturesGrid';
import { HowItWorks } from '@/components/solutions/HowItWorks';
import { MessageSquare, Zap, Users, ShoppingCart, Bell, Lock, Globe, Bot } from 'lucide-react';

export default function CustomBotsPage() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Multi-Platform Support',
      description: 'Build once, deploy everywhere: Telegram, WhatsApp, Discord, Slack, and custom web apps.',
    },
    {
      icon: Users,
      title: 'Handle 1000+ Users',
      description: 'Bots scale effortlessly. Serve thousands of concurrent users without breaking a sweat.',
    },
    {
      icon: Zap,
      title: 'Instant Responses',
      description: 'Bots respond in milliseconds. No waiting, no typing indicators, just instant answers.',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Ready',
      description: 'Accept payments, process orders, track inventory—all inside your favorite messaging app.',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Send automated alerts, reminders, and updates based on events, schedules, or user actions.',
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description: 'End-to-end encryption support. User data stays private and complies with platform policies.',
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Speak to users in their preferred language. Perfect for global audiences.',
    },
    {
      icon: Bot,
      title: 'AI-Powered',
      description: 'Natural language understanding with GPT-4. Bots feel conversational, not robotic.',
    },
  ];

  const steps = [
    {
      icon: MessageSquare,
      title: 'Define Bot Personality',
      description: 'What should your bot do? Support? Sales? Notifications? Games? We map out commands, responses, and workflows.',
    },
    {
      icon: Zap,
      title: 'Build & Integrate',
      description: 'Develop bot logic, connect to your APIs, databases, and payment systems. Add AI for natural conversations.',
    },
    {
      icon: Users,
      title: 'Test with Real Users',
      description: 'Beta test with your team or select users. Refine responses, fix edge cases, and optimize performance.',
    },
    {
      icon: Bot,
      title: 'Deploy & Scale',
      description: 'Launch to production. Monitor usage, add features, and scale as your user base grows.',
    },
  ];

  return (
    <SolutionPageLayout
      ctaTitle="Ready to Build Your Bot?"
      ctaDescription="Meet your customers where they are. Launch in 3 weeks."
      ctaBadge="Let's Build"
    >
      {/* Hero */}
      <SolutionHero
        badge="Custom Bots"
        title={
          <span className="text-text-primary dark:text-dark-text-primary">
            Meet Your Customers{' '}
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
              Where They Already Are
            </span>
          </span>
        }
        subtitle="Custom bots for Telegram, WhatsApp, Discord, and Slack. Automate conversations, process payments, send notifications, and engage users—all inside their favorite messaging apps."
        primaryCTA={{ text: 'Start Building', href: '/contact' }}
        secondaryCTA={{ text: 'See Examples', href: '#examples' }}
        stats={[
          { value: '4', label: 'Major Platforms' },
          { value: '< 3', label: 'Weeks to Launch' },
          { value: '∞', label: 'Concurrent Users' },
        ]}
        background="aurora"
      />

      {/* Bot Examples */}
      <section id="examples" className="py-24 bg-white dark:bg-dark-bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              What Can Bots Do?
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              Real bots we've built across different platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                platform: 'Telegram',
                name: 'Support Bot',
                description: 'Answers FAQs, creates support tickets, escalates to human agents when needed.',
                commands: '/help, /ticket, /status',
              },
              {
                platform: 'WhatsApp',
                name: 'Order Bot',
                description: 'Browse menu, place orders, track delivery, process payments via Stripe.',
                commands: 'Menu, Order, Track',
              },
              {
                platform: 'Discord',
                name: 'Community Bot',
                description: 'Welcome new members, moderate content, run polls, track engagement.',
                commands: '/welcome, /poll, /stats',
              },
              {
                platform: 'Slack',
                name: 'Workflow Bot',
                description: 'Approve expenses, schedule meetings, generate reports, send daily summaries.',
                commands: '/approve, /schedule, /report',
              },
              {
                platform: 'Telegram',
                name: 'Notification Bot',
                description: 'Sends automated alerts for inventory, shipments, payments, or system events.',
                commands: '/subscribe, /alerts, /settings',
              },
              {
                platform: 'WhatsApp',
                name: 'Appointment Bot',
                description: 'Check availability, book appointments, send reminders, handle cancellations.',
                commands: 'Book, Cancel, Remind',
              },
            ].map((bot, index) => (
              <div
                key={index}
                className="bg-neutral-50 dark:bg-dark-bg-primary rounded-2xl p-6 border border-neutral-200 dark:border-dark-border hover:border-brand-primary hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
                      {bot.platform}
                    </div>
                    <h3 className="font-bold text-text-primary dark:text-dark-text-primary">
                      {bot.name}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-4">
                  {bot.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {bot.commands.split(', ').map((cmd, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md bg-white dark:bg-dark-bg-secondary text-xs font-mono text-brand-primary dark:text-dark-brand-primary border border-neutral-200 dark:border-dark-border"
                    >
                      {cmd}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesGrid
        title="Why Bots Work"
        subtitle="More than just automation—a whole new way to engage users"
        features={features}
      />

      {/* Platform Comparison */}
      <section className="py-24 bg-neutral-50 dark:bg-dark-bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              Choose Your Platform
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              Each platform has unique strengths. We help you choose the right one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                platform: 'Telegram',
                users: '700M+',
                bestFor: 'Power users, crypto communities, automation enthusiasts',
                features: ['Rich bot API', 'File sharing', 'Inline keyboards', 'Payment support'],
              },
              {
                platform: 'WhatsApp',
                users: '2B+',
                bestFor: 'Local businesses, customer service, global reach',
                features: ['Massive reach', 'Business API', 'Templates', 'Meta integration'],
              },
              {
                platform: 'Discord',
                users: '150M+',
                bestFor: 'Communities, gaming, tech teams',
                features: ['Voice channels', 'Roles & permissions', 'Rich embeds', 'Webhooks'],
              },
              {
                platform: 'Slack',
                users: '20M+',
                bestFor: 'Internal teams, enterprise workflows',
                features: ['Workspace apps', 'Deep integrations', 'Enterprise security', 'OAuth'],
              },
            ].map((platform, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-bg-secondary rounded-2xl p-6 border border-neutral-200 dark:border-dark-border"
              >
                <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
                  {platform.platform}
                </h3>
                <div className="text-3xl font-bold text-brand-primary dark:text-dark-brand-primary mb-4">
                  {platform.users}
                </div>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-4">
                  <strong>Best for:</strong> {platform.bestFor}
                </p>
                <ul className="space-y-2 text-xs">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks
        title="From Idea to Live Bot"
        subtitle="Launch in 3 weeks"
        steps={steps}
      />
    </SolutionPageLayout>
  );
}
