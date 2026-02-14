'use client';

import Link from 'next/link';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { Typewriter } from '@/components/ui/typewriter';
import { FadeInSection } from '@/components/animations/FadeInSection';

/**
 * HeroSection - Client component for the homepage hero
 * Contains animations and interactive elements that require client-side JS
 */
export function HeroSection() {
  return (
    <AuroraBackground className="min-h-[110vh]">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 text-center z-20">
          <FadeInSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-snug tracking-tight text-balance">
              <span className="flex flex-col items-center">
                {/* Static "Custom" + Typewriter */}
                <span className="flex items-center justify-center gap-3 mb-2 flex-wrap pb-2">
                  <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary dark:from-dark-brand-primary dark:via-brand-secondary dark:to-dark-brand-primary bg-clip-text text-transparent">
                    Custom
                  </span>
                  <Typewriter
                    text={["Software", "Websites", "AI Agents", "Applications", "Automation", "Data"]}
                    speed={70}
                    deleteSpeed={40}
                    waitTime={3000}
                    className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary dark:from-dark-brand-primary dark:via-brand-secondary dark:to-dark-brand-primary bg-clip-text text-transparent"
                    cursorChar="|"
                    cursorClassName="text-brand-primary dark:text-dark-brand-primary ml-1"
                  />
                </span>
                {/* Static "Built for You" */}
                <span className="text-text-primary dark:text-dark-text-primary">
                  Built for You
                </span>
              </span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
              We build Apps, Websites, AI Agents and Automation Tools that solve real problems. Fast.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
              <Link href="/contact" className="w-full sm:w-auto">
                <InteractiveHoverButton
                  text="Get Started"
                  className="w-full sm:w-48"
                />
              </Link>
              <Link href="/solutions" className="w-full sm:w-auto">
                <InteractiveHoverButton
                  text="Our Work"
                  className="w-full sm:w-48"
                />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </AuroraBackground>
  );
}
