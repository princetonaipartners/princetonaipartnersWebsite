'use client';

import { motion } from 'framer-motion';
import { FadeInSection } from '@/components/animations/FadeInSection';
import { fadeUpVariants, staggerContainer } from '@/lib/animations';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function FeaturesGrid({
  title,
  subtitle,
  features,
  columns = 3,
}: FeaturesGridProps) {
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="py-24 bg-white dark:bg-dark-bg-secondary transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {(title || subtitle) && (
          <FadeInSection>
            <div className="text-center mb-16">
              {title && (
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          </FadeInSection>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className={`grid grid-cols-1 ${columnClasses[columns]} gap-8`}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="group relative"
            >
              <div className="h-full bg-neutral-50 dark:bg-dark-bg-primary border border-neutral-200 dark:border-dark-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-primary/10 hover:border-brand-primary/50">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 dark:from-dark-brand-primary/10 dark:to-brand-secondary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {(() => {
                      const Icon = feature.icon as LucideIcon;
                      return <Icon className="w-7 h-7 text-brand-primary dark:text-dark-brand-primary" />;
                    })()}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-text-primary dark:text-dark-text-primary">
                  {feature.title}
                </h3>
                <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
