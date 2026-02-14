import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { PremiumBackground } from '@/components/ui/premium-background';
import { RevealCTA } from '@/components/ui/reveal-cta';

/**
 * Homepage - Server Component
 *
 * Architecture optimized for Core Web Vitals:
 * - Server-rendered shell with client islands
 * - HeroSection: Client component (Typewriter, AuroraBackground animations)
 * - ServicesSection: Client component with lazy-loaded backgrounds
 * - RevealCTA: Client component (scroll-triggered reveal)
 *
 * Benefits:
 * - Faster LCP: HTML is pre-rendered on server
 * - Smaller JS bundle: Only interactive parts hydrate
 * - Better FID: Less JS to parse on initial load
 */
export default function Home() {
  return (
    <>
      {/* Global Premium Background */}
      <PremiumBackground />

      {/* Hero Section - Client island for animations */}
      <HeroSection />

      {/* Gradient transition from Hero to Services */}
      <div className="h-24 bg-gradient-to-b from-transparent to-transparent -mt-24 relative z-10" />

      {/* Bento Grid Services Section - Client island with lazy backgrounds */}
      <ServicesSection />

      {/* CTA Section - Client island for reveal animation */}
      <RevealCTA />
    </>
  );
}
