'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Brain, Workflow, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { FadeInSection } from '@/components/animations/FadeInSection';

interface PreviewType {
  id: string;
  name: string;
  icon: React.ElementType;
  range: string;
}

const previewTypes: PreviewType[] = [
  { id: 'mvp', name: 'MVP / Web App', icon: Rocket, range: '$15k - $50k' },
  { id: 'ai', name: 'AI System', icon: Brain, range: '$10k - $40k' },
  { id: 'automation', name: 'Automation', icon: Workflow, range: '$5k - $20k' },
  { id: 'website', name: 'Website', icon: Globe, range: '$5k - $25k' },
];

export function QuotePreview() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const selected = previewTypes.find((t) => t.id === selectedType);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-brand-light/30 dark:from-dark-bg-primary dark:to-dark-bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <Badge variant="outline" className="mb-4">
              Free Instant Quote
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary dark:text-dark-text-primary mb-4">
              See What Your Project Could Cost
            </h2>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary mb-10 max-w-2xl mx-auto">
              Answer a few questions and get a personalized estimate plus a project brief — all in under 2 minutes.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="bg-white dark:bg-dark-bg-card rounded-3xl p-6 md:p-8 shadow-lg border border-neutral-100 dark:border-dark-border">
              <p className="text-lg font-medium text-text-primary dark:text-dark-text-primary mb-6">
                What would you like to build?
              </p>

              {/* Quick selection cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
                {previewTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;

                  return (
                    <motion.button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        'relative p-4 rounded-xl border-2 transition-all duration-300',
                        isSelected
                          ? 'border-brand-primary bg-brand-light/50 dark:bg-brand-primary/10'
                          : 'border-neutral-200 dark:border-dark-border hover:border-brand-primary/50 bg-white dark:bg-dark-bg-tertiary'
                      )}
                    >
                      <Icon
                        className={cn(
                          'w-6 h-6 mx-auto mb-2 transition-colors duration-300',
                          isSelected ? 'text-brand-primary' : 'text-text-tertiary dark:text-dark-text-tertiary'
                        )}
                      />
                      <div className="font-medium text-sm text-text-primary dark:text-dark-text-primary">
                        {type.name}
                      </div>
                      <div className="text-xs text-text-tertiary dark:text-dark-text-tertiary mt-1">
                        {type.range}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Selected preview */}
              {selected && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-brand-light/40 dark:bg-brand-primary/10 rounded-xl p-5 mb-6"
                >
                  <div className="text-base text-text-secondary dark:text-dark-text-secondary">
                    Estimated range for <strong className="text-text-primary dark:text-dark-text-primary">{selected.name}</strong>:
                  </div>
                  <motion.div
                    key={selected.id}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="text-3xl font-bold text-brand-primary mt-2"
                  >
                    {selected.range}
                  </motion.div>
                </motion.div>
              )}

              {/* CTA */}
              <Link href="/quote">
                <ShimmerButton className="w-full md:w-auto px-10 py-4 text-lg">
                  Get My Detailed Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </ShimmerButton>
              </Link>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-text-tertiary dark:text-dark-text-tertiary">
                <span>Free</span>
                <span className="w-1 h-1 rounded-full bg-text-tertiary" />
                <span>2 minutes</span>
                <span className="w-1 h-1 rounded-full bg-text-tertiary" />
                <span>No spam</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
