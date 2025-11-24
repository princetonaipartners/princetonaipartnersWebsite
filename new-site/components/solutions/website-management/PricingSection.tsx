'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  badgeColor?: string;
  price: number;
  priceLabel: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  example: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    badge: 'Best for Local Businesses',
    price: 1000,
    priceLabel: 'one-time',
    description: 'Perfect for small businesses that need a fast, beautiful website to get found online.',
    features: [
      '3-5 page responsive website',
      'Mobile-first design',
      'Contact forms & Google Maps',
      'Basic SEO optimization',
      'Google Business Profile setup',
      'Social media links',
      'SSL security certificate',
      '30-day support',
    ],
    example: 'Perfect for: Coffee shops, salons, local retail',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 5000,
    priceLabel: 'one-time',
    description: 'For growing businesses that need advanced features, AI-driven SEO, and ongoing optimization.',
    features: [
      '8-12 page custom website',
      'Advanced animations & micro-interactions',
      'AI-driven SEO optimization',
      'AI chatbot integration',
      'Online booking/scheduling system',
      'CMS for easy content updates',
      'Advanced analytics & conversion tracking',
      'Schema markup for rich results',
      'Local SEO optimization (Google Maps, citations)',
      '90-day priority support',
    ],
    highlighted: true,
    example: 'Perfect for: Medical practices, law firms, fitness studios',
  },
  {
    id: 'premium',
    name: 'Premium',
    badge: 'Enterprise Level',
    price: 15000,
    priceLabel: 'one-time',
    description: 'For established brands that need enterprise-level features, premium design, and comprehensive AI-powered SEO.',
    features: [
      '15-25 page fully custom website',
      'Premium custom animations & effects',
      'Comprehensive AI-driven SEO strategy',
      'E-commerce integration (up to 50 products)',
      'Advanced AI chatbot with custom training',
      'Custom user portals & dashboards',
      'Third-party API integrations',
      'Performance optimization & caching',
      'Ongoing SEO monitoring & optimization',
      'Monthly analytics & SEO reports',
      '6-month dedicated support',
    ],
    example: 'Perfect for: Established practices, luxury brands, multi-location businesses',
  },
];

const customServices = [
  { name: 'Additional Pages', cost: '$200-500/page' },
  { name: 'AI Chatbot', cost: '$800-1,500' },
  { name: 'Booking System', cost: '$600-1,200' },
  { name: 'E-commerce (per 10 products)', cost: '$1,000+' },
  { name: 'AI-Driven SEO Package', cost: '$1,200-2,500' },
  { name: 'User Portal/Login', cost: '$1,500-3,000' },
  { name: 'API Integration', cost: '$800-2,000' },
  { name: 'Custom Animations', cost: '$500-1,500' },
  { name: 'Mobile App Integration', cost: '$2,000+' },
  { name: 'Advanced Analytics Dashboard', cost: '$800-1,500' },
];

/**
 * PricingSection - Interactive pricing display with tiers and calculator
 *
 * Features:
 * - 3 main pricing tiers + custom/à la carte
 * - Feature comparison
 * - Interactive hover states
 * - Mobile responsive cards
 */
export function PricingSection(): React.ReactElement {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-24 bg-neutral-50 dark:bg-dark-bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
            Transparent Pricing for Every Business
          </h2>
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            Whether you&apos;re a local cafe or a luxury brand, we have a solution that fits your budget and goals.
          </p>
        </div>

        {/* Main Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredTier(tier.id)}
              onMouseLeave={() => setHoveredTier(null)}
              className={cn(
                'rounded-3xl p-8 border transition-all duration-300',
                tier.highlighted
                  ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-brand-primary shadow-xl relative'
                  : 'bg-white dark:bg-dark-bg-secondary border-neutral-200 dark:border-dark-border hover:border-brand-primary hover:shadow-xl',
                hoveredTier === tier.id && 'scale-105'
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {tier.badge && !tier.highlighted && (
                <div className="inline-block px-4 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm font-semibold text-text-secondary mb-4">
                  {tier.badge}
                </div>
              )}

              {tier.badge && tier.highlighted && (
                <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary dark:text-dark-brand-primary text-sm font-semibold mb-4">
                  Best for Growing Businesses
                </div>
              )}

              <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
                {tier.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-text-primary dark:text-dark-text-primary">
                  ${tier.price.toLocaleString()}
                </span>
                <span className="text-text-secondary dark:text-dark-text-secondary">
                  {tier.priceLabel}
                </span>
              </div>

              <p className="text-text-secondary dark:text-dark-text-secondary mb-6">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm">
                    <div className={cn(
                      'mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center',
                      tier.highlighted
                        ? 'bg-brand-primary/20'
                        : 'bg-green-100 dark:bg-green-900/30'
                    )}>
                      <div className={cn(
                        'w-2 h-2 rounded-full',
                        tier.highlighted
                          ? 'bg-brand-primary'
                          : 'bg-green-600 dark:bg-green-400'
                      )} />
                    </div>
                    <span className="text-text-primary dark:text-dark-text-primary">
                      {feature.includes('AI-driven') || feature.includes('Comprehensive') ? (
                        <strong>{feature}</strong>
                      ) : (
                        feature
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={cn(
                  'block w-full text-center py-3 rounded-xl font-semibold transition-transform hover:scale-105',
                  tier.highlighted
                    ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg'
                    : 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                )}
              >
                Get Started
              </a>

              <p className="mt-4 text-sm text-text-secondary dark:text-dark-text-secondary text-center italic">
                {tier.example}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Custom/À La Carte Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 md:p-12 border-2 border-purple-400 dark:border-purple-600 shadow-xl"
        >
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold mb-4">
              Build Your Own
            </div>
            <h3 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
              Custom / À La Carte
            </h3>
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-text-secondary dark:text-dark-text-secondary">Starting at</span>
              <span className="text-5xl font-bold text-text-primary dark:text-dark-text-primary">
                $500
              </span>
            </div>
            <p className="text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Pick and choose exactly what you need. Perfect for businesses with specific requirements or those adding features to an existing site.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto mb-8">
            {customServices.map((service, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b border-purple-200 dark:border-purple-800 last:border-0"
              >
                <span className="text-text-primary dark:text-dark-text-primary font-medium">
                  {service.name}
                </span>
                <span className="text-text-primary dark:text-dark-text-primary font-semibold">
                  {service.cost}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Get Custom Quote
            </a>
            <p className="mt-4 text-sm text-text-secondary dark:text-dark-text-secondary italic">
              Perfect for: Unique requirements, feature add-ons, phased development
            </p>
          </div>
        </motion.div>

        {/* Pricing Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-xl bg-brand-primary/10 px-6 py-4 text-text-secondary dark:text-dark-text-secondary">
            <Info className="h-5 w-5 text-brand-primary" />
            <p>
              All packages include hosting, SSL certificate, and mobile optimization.{' '}
              <a href="/contact" className="text-brand-primary dark:text-dark-brand-primary font-semibold hover:underline">
                Custom quotes available →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
