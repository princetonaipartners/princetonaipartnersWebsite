import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe, Database, Phone, Zap, MessageSquare, Sparkles, Code } from 'lucide-react';
import { FadeInSection } from '@/components/animations/FadeInSection';

export const metadata: Metadata = {
  title: 'Solutions | Princeton AI Partners',
  description:
    'Custom AI systems, automation, and software development. Web development, AI agents, phone systems, process automation, and more.',
  keywords: [
    'AI development services',
    'custom software solutions',
    'web development agency',
    'automation services',
    'AI agents',
    'business software',
  ],
  openGraph: {
    title: 'Solutions | Princeton AI Partners',
    description: 'Custom AI systems, automation, and software development.',
    url: 'https://princeton-ai.com/solutions',
  },
};

const solutions = [
  {
    icon: Globe,
    title: 'Web Development & SEO',
    description: 'Beautiful, fast websites that rank on Google and convert visitors into customers.',
    href: '/solutions/web-development',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Database,
    title: 'AI Agents (RAG)',
    description: 'Intelligent agents that understand your documents and answer questions with precision.',
    href: '/solutions/ai-agents',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Phone,
    title: 'AI Phone Systems',
    description: 'Never miss a call. AI receptionists that handle inquiries 24/7 like your best employee.',
    href: '/solutions/ai-phone-systems',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Eliminate repetitive tasks. Connect your tools and let automation do the heavy lifting.',
    href: '/solutions/process-automation',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: MessageSquare,
    title: 'Custom Bots',
    description: 'Intelligent chatbots for customer support, lead capture, and engagement.',
    href: '/solutions/custom-bots',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Sparkles,
    title: 'Bespoke Software',
    description: 'Custom applications built from scratch to solve your unique business challenges.',
    href: '/solutions/bespoke-software',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Code,
    title: 'Web Scraping',
    description: 'Extract and monitor data from any website. Competitive intelligence at scale.',
    href: '/solutions/web-scraping',
    color: 'from-blue-500 to-cyan-500',
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-dark-bg-primary">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-400">
                Solutions
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto px-2 sm:px-0">
              From AI agents to custom software, we build technology that transforms how your business operates.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20 sm:pb-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {solutions.map((solution, index) => (
              <FadeInSection key={solution.title} delay={index * 0.05}>
                <Link href={solution.href} className="group block h-full">
                  <div className="h-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-brand-primary/50 transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-brand-primary font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 border-t border-zinc-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 mb-6 sm:mb-8">
              Tell us about your business challenges and we&apos;ll recommend the right solutions.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
