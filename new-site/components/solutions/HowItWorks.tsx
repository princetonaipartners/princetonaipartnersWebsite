'use client';

import { motion } from 'framer-motion';
import { FadeInSection } from '@/components/animations/FadeInSection';
import { fadeUpVariants, staggerContainer } from '@/lib/animations';
import { LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
  layout?: 'vertical' | 'horizontal';
}

export function HowItWorks({
  title = "How It Works",
  subtitle,
  steps,
  layout = 'horizontal',
}: HowItWorksProps) {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-dark-bg-primary transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {(title || subtitle) && (
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
                {title}
              </h2>
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
          className={`${
            layout === 'horizontal'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
              : 'space-y-8 max-w-3xl mx-auto'
          }`}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="relative group"
            >
              {layout === 'horizontal' && index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-brand-primary/30 to-transparent z-0" />
              )}

              <div className={`${layout === 'vertical' ? 'flex gap-6' : 'text-center'} relative z-10`}>
                {/* Step Number/Icon */}
                <div className={`${layout === 'vertical' ? 'flex-shrink-0' : 'mx-auto mb-6'}`}>
                  <div className="relative">
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-primary dark:bg-dark-brand-primary text-white text-xs font-bold flex items-center justify-center z-10">
                      {index + 1}
                    </div>

                    {/* Icon Container */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 dark:from-dark-brand-primary/10 dark:to-brand-secondary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {(() => {
                        const Icon = step.icon as LucideIcon;
                        return <Icon className="w-10 h-10 text-brand-primary dark:text-dark-brand-primary" />;
                      })()}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={layout === 'vertical' ? 'flex-1 pt-2' : ''}>
                  <h3 className="text-xl font-bold mb-3 text-text-primary dark:text-dark-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
