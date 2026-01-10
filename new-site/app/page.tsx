'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FadeInSection } from '@/components/animations/FadeInSection';
import { ServiceIcon } from '@/components/icons';
import { IconName } from '@/lib/icon-types';
import Link from 'next/link';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { Typewriter } from '@/components/ui/typewriter';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { PremiumBackground } from '@/components/ui/premium-background';
import { AIAgentsBackground } from '@/components/ui/service-backgrounds/AIAgentsBackground';
import { AIPhoneBackground } from '@/components/ui/service-backgrounds/AIPhoneBackground';
import { CustomBotsBackground } from '@/components/ui/service-backgrounds/CustomBotsBackground';
import { ProcessAutomationBackground } from '@/components/ui/service-backgrounds/ProcessAutomationBackground';
import { WebDevelopmentBackground } from '@/components/ui/service-backgrounds/WebDevelopmentBackground';
import { WebScrapingBackground } from '@/components/ui/service-backgrounds/WebScrapingBackground';
import { BespokeSoftwareBackground } from '@/components/ui/service-backgrounds/BespokeSoftwareBackground';
import { RevealCTA } from '@/components/ui/reveal-cta';

const services = [
  // Row 1 & 2: Featured hero cards
  {
    name: 'Web Development',
    icon: 'code' as IconName,
    description: 'Full-stack web apps, dashboards, and SaaS products built with modern frameworks.',
    background: <WebDevelopmentBackground />,
    href: '/solutions/web-development',
    cta: 'Learn More',
    className: 'lg:col-span-2 lg:row-span-2', // Large featured - 2x2
  },
  {
    name: 'AI Phone Systems',
    icon: 'phone' as IconName,
    description: '24/7 intelligent call handling, appointment scheduling, and lead qualification.',
    background: <AIPhoneBackground />,
    href: '/solutions/ai-phone-systems',
    cta: 'Learn More',
    className: 'lg:col-span-1 lg:row-span-2', // Tall featured - 1x2
  },
  {
    name: 'AI Agents',
    icon: 'database' as IconName,
    description: 'AI systems that understand your business data and provide instant answers.',
    background: <AIAgentsBackground />,
    href: '/solutions/ai-agents',
    cta: 'Learn More',
    className: 'lg:col-span-1 lg:row-span-1', // Standard size
  },

  // Row 3 & 4: Bespoke anchor + supporting services
  {
    name: 'Bespoke Software',
    icon: 'sparkles' as IconName,
    description: 'End-to-end custom solutions with meticulous planning, system architecture, and implementation.',
    background: <BespokeSoftwareBackground />,
    href: '/solutions/bespoke-software',
    cta: 'Learn More',
    className: 'lg:col-span-2 lg:row-span-2', // Large featured - 2x2
  },
  {
    name: 'Custom Bots',
    icon: 'bot' as IconName,
    description: 'Telegram, WhatsApp, and Discord bots that automate conversations and workflows.',
    background: <CustomBotsBackground />,
    href: '/solutions/custom-bots',
    cta: 'Learn More',
    className: 'lg:col-span-1 lg:row-span-1', // Standard
  },
  {
    name: 'Process Automation',
    icon: 'zap' as IconName,
    description: 'Streamline workflows and eliminate repetitive tasks with intelligent automation.',
    background: <ProcessAutomationBackground />,
    href: '/solutions/process-automation',
    cta: 'Learn More',
    className: 'lg:col-span-2 lg:row-span-1', // Wide
  },

  // Row 5: Standard card
  {
    name: 'Web Scraping',
    icon: 'globe' as IconName,
    description: 'Extract and structure data from any website at scale with precision.',
    background: <WebScrapingBackground />,
    href: '/solutions/web-scraping',
    cta: 'Learn More',
    className: 'lg:col-span-1 lg:row-span-1', // Standard
  },
];

export default function Home() {
  return (
    <>
      {/* Global Premium Background */}
      <PremiumBackground />

      {/* Hero Section - Extended to cover more of page */}
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

      {/* Gradient transition from Hero to Services */}
      <div className="h-24 bg-gradient-to-b from-transparent to-transparent -mt-24 relative z-10" />

      {/* Bento Grid Services Section */}
      <section className="relative z-10 py-24 bg-transparent -mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-10 sm:mb-16 px-4 sm:px-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
                What We Can Build
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                Full-stack development with AI where it matters. Here are some examples of what we&apos;ve shipped.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <BentoGrid>
              {services.map((service) => (
                <BentoCard
                  key={service.name}
                  name={service.name}
                  Icon={() => <ServiceIcon icon={service.icon} />}
                  description={service.description}
                  href={service.href}
                  cta={service.cta}
                  background={service.background}
                  className={service.className}
                />
              ))}
            </BentoGrid>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section - Dramatic Reveal */}
      <RevealCTA />
    </>
  );
}
