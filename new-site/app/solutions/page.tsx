'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layout, Database, Phone, Zap, MessageSquare, Sparkles, Globe, ArrowRight } from 'lucide-react';
import { FadeInSection } from '@/components/animations/FadeInSection';
import { fadeUpVariants, staggerContainer } from '@/lib/animations';

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Layout,
      title: 'Web Development & SEO',
      description: 'Lightning-fast websites optimized for both Google AND AI search engines like ChatGPT. Built with modern tech, mobile-first design, and enterprise security.',
      href: '/solutions/web-development',
      stats: ['< 2s Load Time', '100/100 SEO', 'AI-Ready'],
    },
    {
      icon: Database,
      title: 'AI Agents (RAG)',
      description: 'Custom AI assistants that search your documents before answering. Turn your knowledge base into an intelligent chatbot that never hallucinates.',
      href: '/solutions/ai-agents',
      stats: ['47+ Documents', '< $0.001/query', 'Real-Time'],
    },
    {
      icon: Phone,
      title: 'AI Phone Systems',
      description: 'AI receptionists that handle calls 24/7. Book appointments, qualify leads, route emergencies, and speak any language—all without human intervention.',
      href: '/solutions/ai-phone-systems',
      stats: ['24/7 Available', '∞ Concurrent', '< $1/call'],
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Eliminate repetitive tasks with intelligent workflows. Connect your tools, automate your processes, save 20+ hours per week.',
      href: '/solutions/process-automation',
      stats: ['20+ Hours Saved', '99.9% Accurate', '< 90 Days ROI'],
    },
    {
      icon: MessageSquare,
      title: 'Custom Bots',
      description: 'Build once, deploy everywhere: Telegram, WhatsApp, Discord, Slack. Automate conversations, process payments, and engage users at scale.',
      href: '/solutions/custom-bots',
      stats: ['4 Platforms', '< 3 Weeks', '∞ Users'],
    },
    {
      icon: Sparkles,
      title: 'Bespoke Software',
      description: 'Custom software built specifically for your unique business needs. 100% code ownership, modern tech stack, and enterprise-grade security.',
      href: '/solutions/bespoke-software',
      stats: ['8-16 Weeks', '100% Ownership', 'Unlimited Scale'],
    },
    {
      icon: Globe,
      title: 'Web Scraping',
      description: 'Turn any website into structured data. Extract product prices, job listings, real estate—anything online. Clean, legal, and at scale.',
      href: '/solutions/web-scraping',
      stats: ['1M+ Pages/Day', '99% Success', '195+ Countries'],
    },
  ];

  return (
    <main className="relative min-h-screen">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-dark-bg-primary dark:via-dark-bg-primary dark:to-dark-bg-secondary -z-10" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 dark:bg-dark-brand-primary/10 mb-6">
              <span className="text-sm font-semibold text-brand-primary dark:text-dark-brand-primary">
                Our Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-text-primary dark:text-dark-text-primary">
                Build The Future.{' '}
              </span>
              <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
                Ship in Weeks.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-8">
              From AI agents to custom software, we build exactly what you need—nothing more, nothing less.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.href}
                variants={fadeUpVariants}
              >
                <Link
                  href={solution.href}
                  className="group block h-full bg-white dark:bg-dark-bg-secondary rounded-2xl p-8 border border-neutral-200 dark:border-dark-border hover:border-brand-primary dark:hover:border-dark-brand-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-primary/10"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 dark:from-dark-brand-primary/10 dark:to-brand-secondary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <solution.icon className="w-8 h-8 text-brand-primary dark:text-dark-brand-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-text-primary dark:text-dark-text-primary group-hover:text-brand-primary dark:group-hover:text-dark-brand-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-text-secondary dark:text-dark-text-secondary mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {solution.stats.map((stat, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-dark-bg-primary text-xs font-semibold text-text-tertiary dark:text-dark-text-tertiary"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  {/* CTA Arrow */}
                  <div className="flex items-center gap-2 text-brand-primary dark:text-dark-brand-primary font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInSection>
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl p-12 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-20" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Not Sure Which Solution?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Book a free 30-minute consultation. We'll help you figure out exactly what you need.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-primary rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
