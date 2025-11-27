import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, Users, Target, Shield } from 'lucide-react';
import { FadeInSection } from '@/components/animations/FadeInSection';

export const metadata: Metadata = {
  title: 'About Us | Princeton AI Partners',
  description: 'Your Automated CTO with Live Support. We build custom AI systems, automation, and software that transform how businesses operate.',
  openGraph: {
    title: 'About Us | Princeton AI Partners',
    description: 'Your Automated CTO with Live Support. We build custom AI systems and software.',
  },
};

const values = [
  {
    icon: Zap,
    title: 'Speed to Value',
    description: 'We deliver working solutions in weeks, not months. Your business can\'t wait, and neither should your technology.',
  },
  {
    icon: Users,
    title: 'Partnership, Not Projects',
    description: 'We\'re not just vendors. We become an extension of your team, understanding your business as deeply as you do.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every solution we build is measured by the impact it creates. If it doesn\'t move the needle, we don\'t build it.',
  },
  {
    icon: Shield,
    title: 'Enterprise Quality',
    description: 'Startups deserve enterprise-grade technology. We bring Fortune 500 engineering practices to businesses of all sizes.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-bg-primary">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 mb-8">
              <span className="text-sm text-brand-primary font-medium">About Princeton AI Partners</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-400">
                Automated CTO
              </span>
              <br />
              with Live Support
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              We bridge the gap between vision and execution. Whether you need AI agents, custom software, or process automation, we deliver enterprise-grade solutions at startup speed.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 border-t border-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Technology Should Empower, Not Overwhelm
                </h2>
                <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                  Too many businesses are held back by technology that&apos;s either too complex, too expensive, or takes too long to implement. We believe there&apos;s a better way.
                </p>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  Our team combines deep technical expertise with a genuine passion for helping businesses succeed. We translate complex technical possibilities into practical solutions that deliver real results.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-primary/20 to-cyan-500/10 rounded-2xl p-8 border border-brand-primary/20">
                <div className="text-5xl font-bold text-brand-primary mb-4">Weeks, Not Months</div>
                <p className="text-xl text-white font-medium mb-2">Custom AI Solutions</p>
                <p className="text-zinc-400">Full ownership, no vendor lock-in. Enterprise quality at startup speed.</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              What We Stand For
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <FadeInSection key={value.title} delay={index * 0.1}>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{value.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-zinc-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              Let&apos;s discuss your project and see how we can help transform your business.
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
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white rounded-full font-semibold text-lg hover:bg-zinc-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
