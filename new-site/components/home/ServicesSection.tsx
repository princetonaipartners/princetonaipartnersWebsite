'use client';

import dynamic from 'next/dynamic';
import { ReactNode, Suspense, useState, useEffect, useRef, useMemo } from 'react';
import { FadeInSection } from '@/components/animations/FadeInSection';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { ServiceIcon } from '@/components/icons';
import { IconName } from '@/lib/icon-types';

// Lazy load all service backgrounds with no SSR
// These are heavy animated components that don't need to block initial render
const AIAgentsBackground = dynamic(
  () => import('@/components/ui/service-backgrounds/AIAgentsBackground').then(mod => ({ default: mod.AIAgentsBackground })),
  { ssr: false, loading: () => <BackgroundPlaceholder /> }
);

const AIPhoneBackground = dynamic(
  () => import('@/components/ui/service-backgrounds/AIPhoneBackground').then(mod => ({ default: mod.AIPhoneBackground })),
  { ssr: false, loading: () => <BackgroundPlaceholder /> }
);

const CustomBotsBackground = dynamic(
  () => import('@/components/ui/service-backgrounds/CustomBotsBackground').then(mod => ({ default: mod.CustomBotsBackground })),
  { ssr: false, loading: () => <BackgroundPlaceholder /> }
);

const ProcessAutomationBackground = dynamic(
  () => import('@/components/ui/service-backgrounds/ProcessAutomationBackground').then(mod => ({ default: mod.ProcessAutomationBackground })),
  { ssr: false, loading: () => <BackgroundPlaceholder /> }
);

const WebDevelopmentBackground = dynamic(
  () => import('@/components/ui/service-backgrounds/WebDevelopmentBackground').then(mod => ({ default: mod.WebDevelopmentBackground })),
  { ssr: false, loading: () => <BackgroundPlaceholder /> }
);

const WebScrapingBackground = dynamic(
  () => import('@/components/ui/service-backgrounds/WebScrapingBackground').then(mod => ({ default: mod.WebScrapingBackground })),
  { ssr: false, loading: () => <BackgroundPlaceholder /> }
);

const BespokeSoftwareBackground = dynamic(
  () => import('@/components/ui/service-backgrounds/BespokeSoftwareBackground').then(mod => ({ default: mod.BespokeSoftwareBackground })),
  { ssr: false, loading: () => <BackgroundPlaceholder /> }
);

/**
 * Simple gradient placeholder while backgrounds load
 */
function BackgroundPlaceholder() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5" />
  );
}

/**
 * Wrapper that only renders background when card is visible in viewport
 */
function LazyBackground({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once visible, stay visible (no need to re-render)
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading slightly before visible
        threshold: 0.01,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : <BackgroundPlaceholder />}
    </div>
  );
}

interface ServiceConfig {
  name: string;
  icon: IconName;
  description: string;
  backgroundKey: string;
  href: string;
  cta: string;
  className: string;
}

// Service configuration without JSX - background components are selected at render time
const serviceConfigs: ServiceConfig[] = [
  {
    name: 'Web Development',
    icon: 'code',
    description: 'Full-stack web apps, dashboards, and SaaS products built with modern frameworks.',
    backgroundKey: 'WebDevelopment',
    href: '/solutions/web-development',
    cta: 'Learn More',
    className: 'lg:col-span-2 lg:row-span-2',
  },
  {
    name: 'AI Phone Systems',
    icon: 'phone',
    description: '24/7 intelligent call handling, appointment scheduling, and lead qualification.',
    backgroundKey: 'AIPhone',
    href: '/solutions/ai-phone-systems',
    cta: 'Learn More',
    className: 'lg:col-span-1 lg:row-span-2',
  },
  {
    name: 'AI Agents',
    icon: 'database',
    description: 'AI systems that understand your business data and provide instant answers.',
    backgroundKey: 'AIAgents',
    href: '/solutions/ai-agents',
    cta: 'Learn More',
    className: 'lg:col-span-1 lg:row-span-1',
  },
  {
    name: 'Bespoke Software',
    icon: 'sparkles',
    description: 'End-to-end custom solutions with meticulous planning, system architecture, and implementation.',
    backgroundKey: 'BespokeSoftware',
    href: '/solutions/bespoke-software',
    cta: 'Learn More',
    className: 'lg:col-span-2 lg:row-span-2',
  },
  {
    name: 'Custom Bots',
    icon: 'bot',
    description: 'Telegram, WhatsApp, and Discord bots that automate conversations and workflows.',
    backgroundKey: 'CustomBots',
    href: '/solutions/custom-bots',
    cta: 'Learn More',
    className: 'lg:col-span-1 lg:row-span-1',
  },
  {
    name: 'Process Automation',
    icon: 'zap',
    description: 'Streamline workflows and eliminate repetitive tasks with intelligent automation.',
    backgroundKey: 'ProcessAutomation',
    href: '/solutions/process-automation',
    cta: 'Learn More',
    className: 'lg:col-span-2 lg:row-span-1',
  },
  {
    name: 'Web Scraping',
    icon: 'globe',
    description: 'Extract and structure data from any website at scale with precision.',
    backgroundKey: 'WebScraping',
    href: '/solutions/web-scraping',
    cta: 'Learn More',
    className: 'lg:col-span-1 lg:row-span-1',
  },
];

// Background component lookup
const backgroundComponents: Record<string, () => ReactNode> = {
  WebDevelopment: () => <WebDevelopmentBackground />,
  AIPhone: () => <AIPhoneBackground />,
  AIAgents: () => <AIAgentsBackground />,
  BespokeSoftware: () => <BespokeSoftwareBackground />,
  CustomBots: () => <CustomBotsBackground />,
  ProcessAutomation: () => <ProcessAutomationBackground />,
  WebScraping: () => <WebScrapingBackground />,
};

/**
 * ServicesSection - Bento grid with lazy-loaded animated backgrounds
 * Uses Intersection Observer to only load backgrounds when cards are visible
 */
export function ServicesSection() {
  // Memoize services array to prevent unnecessary re-renders
  const services = useMemo(() =>
    serviceConfigs.map(config => ({
      ...config,
      background: (
        <LazyBackground className="absolute inset-0">
          <Suspense fallback={<BackgroundPlaceholder />}>
            {backgroundComponents[config.backgroundKey]()}
          </Suspense>
        </LazyBackground>
      ),
    })),
    []
  );

  return (
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
  );
}
