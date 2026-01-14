import Link from 'next/link';
import { ArrowRight, Utensils, ShoppingBag, Stethoscope, Building2, Briefcase, Truck, GraduationCap, Home } from 'lucide-react';
import { FadeInSection } from '@/components/animations/FadeInSection';
import { IndustriesBackground } from '@/components/ui/industries-background';

const industries = [
  {
    icon: Utensils,
    title: 'Restaurants & Hospitality',
    description: 'Streamline reservations, automate customer engagement, and optimize operations with AI-powered solutions.',
    solutions: ['AI Phone Systems', 'Process Automation', 'Web Development'],
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-commerce',
    description: 'Enhance customer experience with intelligent chatbots, inventory automation, and personalized recommendations.',
    solutions: ['Custom Bots', 'Web Scraping', 'AI Agents'],
  },
  {
    icon: Stethoscope,
    title: 'Healthcare & Medical',
    description: 'Improve patient communication, automate appointment scheduling, and streamline administrative workflows.',
    solutions: ['AI Phone Systems', 'Process Automation', 'Bespoke Software'],
  },
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Capture and qualify leads automatically, respond to inquiries 24/7, and manage property data efficiently.',
    solutions: ['AI Agents', 'Custom Bots', 'Web Development'],
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Automate client intake, document processing, and routine communications to focus on high-value work.',
    solutions: ['AI Agents', 'Process Automation', 'Bespoke Software'],
  },
  {
    icon: Truck,
    title: 'Logistics & Operations',
    description: 'Optimize routes, track shipments, and automate dispatch with intelligent systems that work around the clock.',
    solutions: ['Process Automation', 'Bespoke Software', 'Web Scraping'],
  },
  {
    icon: GraduationCap,
    title: 'Education & Training',
    description: 'Build engaging learning platforms, automate administrative tasks, and create AI-powered tutoring systems.',
    solutions: ['Bespoke Software', 'AI Agents', 'Web Development'],
  },
  {
    icon: Home,
    title: 'Home Services',
    description: 'Never miss a call, automate scheduling, and manage customer relationships with smart automation.',
    solutions: ['AI Phone Systems', 'Process Automation', 'Custom Bots'],
  },
];

export default function ClientsPage() {
  return (
    <div className="relative min-h-screen bg-dark-bg-primary">
      {/* Background Effect */}
      <IndustriesBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Who We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-400">
                Serve
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              We partner with businesses across industries to implement AI and automation solutions that drive real results.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <FadeInSection key={industry.title} delay={index * 0.05}>
                <div className="h-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-brand-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.solutions.map((solution) => (
                      <span
                        key={solution}
                        className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded-full"
                      >
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 border-t border-zinc-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              We work with businesses of all types. Let&apos;s discuss your specific needs and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white rounded-full font-semibold text-lg hover:bg-zinc-800 transition-colors"
              >
                View All Solutions
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
