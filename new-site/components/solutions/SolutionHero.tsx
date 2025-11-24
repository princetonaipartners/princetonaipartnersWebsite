'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FadeInSection } from '@/components/animations/FadeInSection';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import Link from 'next/link';
import { fadeUpVariants, staggerContainer } from '@/lib/animations';

interface SolutionHeroProps {
  badge?: string;
  title: string | ReactNode;
  subtitle: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  demo?: ReactNode;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  background?: 'aurora' | 'gradient' | 'none';
}

export function SolutionHero({
  badge,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  demo,
  stats,
  background = 'aurora',
}: SolutionHeroProps) {
  const content = (
    <section className={`relative ${demo ? 'min-h-screen' : 'min-h-[90vh]'} flex items-center justify-center overflow-hidden`}>
      <div className={`relative mx-auto max-w-7xl px-6 lg:px-8 py-24 z-20 ${demo ? 'w-full' : 'text-center'}`}>
        <div className={`${demo ? 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center' : 'max-w-4xl mx-auto'}`}>
          {/* Content Side */}
          <div className={demo ? 'space-y-8' : 'space-y-8'}>
            {badge && (
              <FadeInSection>
                <div className="inline-flex">
                  <span className="px-4 py-2 rounded-full bg-brand-primary/10 dark:bg-dark-brand-primary/10 text-brand-primary dark:text-dark-brand-primary text-sm font-semibold">
                    {badge}
                  </span>
                </div>
              </FadeInSection>
            )}

            <FadeInSection delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-balance">
                {typeof title === 'string' ? (
                  <span className="text-text-primary dark:text-dark-text-primary">
                    {title}
                  </span>
                ) : (
                  title
                )}
              </h1>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-xl md:text-2xl text-text-secondary dark:text-dark-text-secondary leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            </FadeInSection>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <FadeInSection delay={0.3}>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUpVariants}
                      className="space-y-1"
                    >
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </FadeInSection>
            )}

            {/* CTAs */}
            {(primaryCTA || secondaryCTA) && (
              <FadeInSection delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-start items-start pt-4">
                  {primaryCTA && (
                    <Link href={primaryCTA.href}>
                      <InteractiveHoverButton
                        text={primaryCTA.text}
                        className="w-full sm:w-auto min-w-[200px]"
                      />
                    </Link>
                  )}
                  {secondaryCTA && (
                    <Link href={secondaryCTA.href}>
                      <InteractiveHoverButton
                        text={secondaryCTA.text}
                        className="w-full sm:w-auto min-w-[200px]"
                      />
                    </Link>
                  )}
                </div>
              </FadeInSection>
            )}
          </div>

          {/* Demo Side */}
          {demo && (
            <FadeInSection delay={0.3}>
              <div className="relative">
                {demo}
              </div>
            </FadeInSection>
          )}
        </div>
      </div>
    </section>
  );

  if (background === 'aurora') {
    return <AuroraBackground className={demo ? 'min-h-screen' : 'min-h-[90vh]'}>{content}</AuroraBackground>;
  }

  if (background === 'gradient') {
    return (
      <div className="relative bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-dark-bg-primary dark:via-dark-brand-primary/5 dark:to-dark-bg-primary">
        {content}
      </div>
    );
  }

  return <div className="relative bg-white dark:bg-dark-bg-primary">{content}</div>;
}
