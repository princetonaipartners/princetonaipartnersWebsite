'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/animations';
import { CTASection } from '@/components/ui/cta-section';
import { Boxes } from '@/components/ui/background-boxes';

interface SolutionPageLayoutProps {
  children: ReactNode;
  includeCTA?: boolean;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaBadge?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
}

export function SolutionPageLayout({
  children,
  includeCTA = true,
  ctaTitle = "Ready to Get Started?",
  ctaDescription = "Let's discuss your project and see how we can help you ship faster.",
  ctaBadge = "Let's Build",
  ctaButtonText = "Schedule a Free Consultation",
  ctaButtonHref = "/contact",
}: SolutionPageLayoutProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="flex flex-col"
    >
      {/* Main Content */}
      <div className="flex-1">
        {children}
      </div>

      {/* CTA Section */}
      {includeCTA && (
        <section className="relative w-full overflow-hidden bg-slate-900 dark:bg-zinc-900 flex flex-col items-center justify-center">
          {/* Radial gradient mask for fade effect */}
          <div className="absolute inset-0 w-full h-full bg-slate-900 dark:bg-zinc-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          {/* Animated background boxes */}
          <Boxes />

          <CTASection
            badge={{ text: ctaBadge }}
            title={ctaTitle}
            description={ctaDescription}
            action={{
              text: ctaButtonText,
              href: ctaButtonHref,
            }}
          />
        </section>
      )}
    </motion.div>
  );
}
