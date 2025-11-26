'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Smartphone,
  Monitor,
  ChevronLeft,
  ChevronRight,
  Check,
  Circle,
  Loader2,
  GitCommit,
  GitBranch,
  Rocket,
  Search,
  Wrench,
  Calendar,
  Utensils,
  Scissors,
  ShoppingBag,
  Stethoscope,
  Dumbbell,
  Home,
  MessageSquare,
  Star,
  Phone,
  MapPin,
  CreditCard,
  Users,
  FileText,
  Shield,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { RetroGrid } from '@/components/ui/retro-grid';
import { FadeInSection } from '@/components/animations/FadeInSection';

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <HeroSection />
      <IndustryShowcase />
      <FeaturesSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}

// ============================================
// HERO SECTION - Speed Test Comparison
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <RetroGrid className="opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <FadeInSection>
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary" />
                </span>
                <span className="text-xs font-mono text-brand-primary uppercase tracking-wider">
                  Web Development
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
                Websites That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-400">
                  Win Business
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
                Your website should be a high-performance asset, not a technical headache.
                We build lightning-fast, SEO-optimized sites that convert visitors into customers.
              </p>

              {/* CTA */}
              <Link href="/quote">
                <motion.div
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-mono text-lg cursor-pointer hover:shadow-brand-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>$</span>
                  <span>npm run build-site</span>
                </motion.div>
              </Link>
            </div>
          </FadeInSection>

          {/* Right: Speed Test Terminal */}
          <FadeInSection delay={0.2}>
            <SpeedTestTerminal />
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

// Speed Test Terminal Component
function SpeedTestTerminal() {
  const [phase, setPhase] = useState<'scanning' | 'results'>('scanning');
  const [progress, setProgress] = useState(0);
  const [visibleRows, setVisibleRows] = useState<number[]>([]);

  const metrics = [
    { label: 'Load Time', before: '4.2s', after: '0.8s', improvement: '↓ 81%', color: 'text-emerald-400' },
    { label: 'First Paint', before: '2.1s', after: '0.3s', improvement: '↓ 86%', color: 'text-emerald-400' },
    { label: 'Mobile Score', before: '47', after: '98', improvement: '↑ 108%', color: 'text-cyan-400' },
    { label: 'SEO Score', before: '61', after: '100', improvement: '↑ 64%', color: 'text-brand-primary' },
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setPhase('results');
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (phase === 'results') {
      metrics.forEach((_, index) => {
        setTimeout(() => {
          setVisibleRows(prev => [...prev, index]);
        }, index * 300);
      });
    }
  }, [phase]);

  return (
    <div className="relative">
      {/* Terminal Frame */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl shadow-black/50">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-green-500 transition-colors" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-zinc-500 font-mono">
              performance-audit.sh
            </span>
          </div>
          <div className="w-12" />
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm min-h-[380px]">
          {/* Command */}
          <div className="mb-4">
            <span className="text-emerald-400">➜</span>
            <span className="text-cyan-400 ml-2">~/audit</span>
            <span className="text-zinc-500 ml-2">$</span>
            <span className="text-white ml-2">princeton-ai audit --compare</span>
          </div>

          {/* Scanning Phase */}
          {phase === 'scanning' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              <div className="text-zinc-500 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-brand-primary" />
                Running performance audit...
              </div>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-primary to-cyan-400"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-xs text-zinc-600">
                Analyzing: Core Web Vitals, SEO, Accessibility, Best Practices
              </div>
            </motion.div>
          )}

          {/* Results Phase */}
          {phase === 'results' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <div className="text-emerald-400 flex items-center gap-2 mb-6">
                <Check className="w-4 h-4" />
                Analysis complete
              </div>

              {/* Comparison Header */}
              <div className="grid grid-cols-4 gap-4 text-xs text-zinc-500 border-b border-zinc-800 pb-2">
                <span>METRIC</span>
                <span className="text-center">CURRENT</span>
                <span className="text-center">OPTIMIZED</span>
                <span className="text-right">CHANGE</span>
              </div>

              {/* Metrics Rows */}
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={visibleRows.includes(index) ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-4 gap-4 items-center py-2"
                >
                  <span className="text-zinc-400">{metric.label}</span>
                  <span className="text-center text-red-400/70">{metric.before}</span>
                  <span className="text-center text-emerald-400 font-bold">{metric.after}</span>
                  <span className={cn('text-right font-bold', metric.color)}>
                    {metric.improvement}
                  </span>
                </motion.div>
              ))}

              {/* Summary */}
              {visibleRows.length === metrics.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 pt-4 border-t border-zinc-800"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Overall Improvement</span>
                    <span className="text-2xl font-bold text-emerald-400">+85%</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-brand-primary/10 blur-[80px] rounded-full -z-10" />
    </div>
  );
}

// ============================================
// INDUSTRY SHOWCASE - Device Carousel
// ============================================
interface Industry {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  features: string[];
  color: string;
}

const industries: Industry[] = [
  {
    id: 'restaurants',
    name: 'Restaurants & Bars',
    icon: Utensils,
    description: 'Drive reservations and showcase your menu with stunning visuals that make mouths water.',
    features: ['Online Reservations', 'Digital Menus', 'AI Chatbot'],
    color: '#F97316',
  },
  {
    id: 'salons',
    name: 'Salons & Spas',
    icon: Scissors,
    description: 'Attract new clients and simplify booking with elegant scheduling systems.',
    features: ['Appointment Booking', 'Service Gallery', 'Gift Cards'],
    color: '#EC4899',
  },
  {
    id: 'retail',
    name: 'Retail Boutiques',
    icon: ShoppingBag,
    description: 'Turn visitors into customers with beautiful e-commerce experiences.',
    features: ['E-commerce Ready', 'Inventory Sync', 'Cart Recovery'],
    color: '#8B5CF6',
  },
  {
    id: 'medical',
    name: 'Dental & Medical',
    icon: Stethoscope,
    description: 'Build patient trust with professional, HIPAA-compliant portals.',
    features: ['Patient Booking', 'Online Forms', 'HIPAA Secure'],
    color: '#06B6D4',
  },
  {
    id: 'fitness',
    name: 'Gyms & Fitness',
    icon: Dumbbell,
    description: 'Motivate new members with high-energy class scheduling.',
    features: ['Class Schedules', 'Membership Portal', 'Trainer Bios'],
    color: '#22C55E',
  },
  {
    id: 'home',
    name: 'Home Services',
    icon: Home,
    description: 'Capture leads 24/7 with trustworthy, conversion-focused sites.',
    features: ['Lead Capture', 'Service Areas', 'Review Integration'],
    color: '#EAB308',
  },
];

function IndustryShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];

  const nextIndustry = () => {
    setActiveIndex((prev) => (prev + 1) % industries.length);
  };

  const prevIndustry = () => {
    setActiveIndex((prev) => (prev - 1 + industries.length) % industries.length);
  };

  return (
    <section className="py-32 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">
              Industry Templates
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              Built For Your Business
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Different businesses have different needs. We build tailored experiences
              designed to help you thrive.
            </p>
          </div>
        </FadeInSection>

        {/* Carousel */}
        <FadeInSection delay={0.2}>
          <div className="relative">
            {/* Device Mockups */}
            <div className="flex items-center justify-center gap-8 mb-12">
              {/* Previous Preview (Phone) */}
              <motion.div
                className="hidden lg:block opacity-40 scale-75"
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PhoneMockup industry={industries[(activeIndex - 1 + industries.length) % industries.length]} />
              </motion.div>

              {/* Main Device (Laptop) */}
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <LaptopMockup industry={activeIndustry} />
              </motion.div>

              {/* Next Preview (Phone) */}
              <motion.div
                className="hidden lg:block opacity-40 scale-75"
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PhoneMockup industry={industries[(activeIndex + 1) % industries.length]} />
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevIndustry}
                className="p-3 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {industries.map((ind, idx) => (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all duration-300',
                      idx === activeIndex
                        ? 'w-8 bg-brand-primary'
                        : 'bg-zinc-700 hover:bg-zinc-600'
                    )}
                  />
                ))}
              </div>

              <button
                onClick={nextIndustry}
                className="p-3 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Industry Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center mt-12"
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                  style={{ backgroundColor: `${activeIndustry.color}20` }}
                >
                  <activeIndustry.icon className="w-4 h-4" style={{ color: activeIndustry.color }} />
                  <span className="text-sm font-medium" style={{ color: activeIndustry.color }}>
                    {activeIndustry.name}
                  </span>
                </div>
                <p className="text-zinc-400 max-w-lg mx-auto mb-6">
                  {activeIndustry.description}
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  {activeIndustry.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800"
                    >
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// Laptop Mockup Component
function LaptopMockup({ industry }: { industry: Industry }) {
  return (
    <div className="relative">
      {/* Laptop Frame */}
      <div className="w-[600px] max-w-full">
        {/* Screen */}
        <div className="relative bg-zinc-900 rounded-t-xl border border-zinc-700 overflow-hidden">
          {/* Browser Bar */}
          <div className="flex items-center gap-2 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <div className="flex-1 mx-2 px-3 py-1 bg-zinc-900 rounded text-xs text-zinc-500 font-mono">
              https://your-{industry.id}.com
            </div>
          </div>

          {/* Website Content */}
          <div className="h-[320px] p-4">
            <IndustryPreview industry={industry} />
          </div>
        </div>

        {/* Laptop Base */}
        <div className="h-4 bg-zinc-800 rounded-b-lg border-x border-b border-zinc-700" />
        <div className="h-2 bg-zinc-700 rounded-b-xl mx-12" />
      </div>

      {/* Glow */}
      <div
        className="absolute inset-0 blur-[60px] opacity-20 -z-10"
        style={{ backgroundColor: industry.color }}
      />
    </div>
  );
}

// Phone Mockup Component
function PhoneMockup({ industry }: { industry: Industry }) {
  return (
    <div className="w-[180px]">
      {/* Phone Frame */}
      <div className="relative bg-zinc-900 rounded-[24px] border-4 border-zinc-700 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-700 rounded-b-xl z-10" />

        {/* Screen Content */}
        <div className="h-[300px] pt-6 p-3">
          <IndustryPreviewMobile industry={industry} />
        </div>
      </div>
    </div>
  );
}

// Desktop Preview Content
function IndustryPreview({ industry }: { industry: Industry }) {
  const previews: Record<string, React.ReactNode> = {
    restaurants: (
      <div className="space-y-3">
        <div className="h-24 rounded-lg bg-gradient-to-br from-orange-900/50 to-orange-800/30 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">The Local Kitchen</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 rounded bg-zinc-800 border border-zinc-700">
            <Calendar className="w-4 h-4 text-orange-400 mb-2" />
            <div className="text-xs text-zinc-400">Tonight, 7 PM</div>
            <div className="text-sm text-white font-medium">4 guests</div>
          </div>
          <div className="p-3 rounded bg-zinc-800 border border-zinc-700">
            <Utensils className="w-4 h-4 text-orange-400 mb-2" />
            <div className="text-xs text-zinc-400">View Menu</div>
            <div className="text-sm text-white font-medium">24 items</div>
          </div>
        </div>
        <button className="w-full py-2.5 bg-orange-500 text-white rounded-lg text-sm font-medium">
          Book a Table
        </button>
      </div>
    ),
    salons: (
      <div className="space-y-3">
        <div className="h-24 rounded-lg bg-gradient-to-br from-pink-900/50 to-pink-800/30 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">Luxe Salon</span>
        </div>
        <div className="space-y-2">
          {['Haircut & Style', 'Color Treatment'].map((service) => (
            <div key={service} className="flex items-center justify-between p-2 rounded bg-zinc-800 border border-zinc-700">
              <span className="text-sm text-white">{service}</span>
              <span className="text-xs text-pink-400">Book →</span>
            </div>
          ))}
        </div>
        <button className="w-full py-2.5 bg-pink-500 text-white rounded-lg text-sm font-medium">
          Schedule Appointment
        </button>
      </div>
    ),
    retail: (
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square rounded bg-zinc-800 border border-zinc-700" />
          ))}
        </div>
        <div className="flex items-center justify-between p-3 rounded bg-zinc-800 border border-zinc-700">
          <div>
            <div className="text-sm text-white font-medium">Summer Collection</div>
            <div className="text-xs text-zinc-400">12 items in stock</div>
          </div>
          <ShoppingBag className="w-5 h-5 text-purple-400" />
        </div>
        <button className="w-full py-2.5 bg-purple-500 text-white rounded-lg text-sm font-medium">
          Shop Now
        </button>
      </div>
    ),
    medical: (
      <div className="space-y-3">
        <div className="flex items-center gap-2 p-2 rounded bg-emerald-500/10 border border-emerald-500/20">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span className="text-xs text-emerald-400 font-mono">HIPAA SECURE</span>
        </div>
        <div className="p-3 rounded bg-zinc-800 border border-zinc-700">
          <div className="text-sm text-white font-medium mb-2">New Patient Form</div>
          <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-cyan-400" />
          </div>
          <div className="text-xs text-zinc-500 mt-1">75% complete</div>
        </div>
        <button className="w-full py-2.5 bg-cyan-500 text-white rounded-lg text-sm font-medium">
          Schedule Visit
        </button>
      </div>
    ),
    fitness: (
      <div className="space-y-3">
        <div className="text-xs text-zinc-500 font-mono mb-1">TODAY&apos;S CLASSES</div>
        {[
          { name: 'HIIT', time: '9:00 AM', spots: 3 },
          { name: 'Yoga Flow', time: '10:30 AM', spots: 0 },
        ].map((cls) => (
          <div
            key={cls.name}
            className={cn(
              'flex items-center justify-between p-3 rounded border',
              cls.spots > 0
                ? 'bg-zinc-800 border-zinc-700'
                : 'bg-zinc-900 border-zinc-800 opacity-60'
            )}
          >
            <div>
              <div className="text-sm text-white font-medium">{cls.name}</div>
              <div className="text-xs text-zinc-500">{cls.time}</div>
            </div>
            <span className={cn(
              'text-xs px-2 py-1 rounded',
              cls.spots > 0 ? 'bg-green-500/20 text-green-400' : 'bg-zinc-800 text-zinc-500'
            )}>
              {cls.spots > 0 ? `${cls.spots} spots` : 'Full'}
            </span>
          </div>
        ))}
      </div>
    ),
    home: (
      <div className="space-y-3">
        <div className="p-4 rounded bg-red-500/10 border border-red-500/20 text-center">
          <Phone className="w-6 h-6 text-red-400 mx-auto mb-2" />
          <div className="text-sm text-red-400 font-bold">24/7 Emergency</div>
          <div className="text-xs text-red-400/70">Call Now</div>
        </div>
        <div className="flex items-center gap-2 p-3 rounded bg-zinc-800 border border-zinc-700">
          <MapPin className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-zinc-300">Serving Princeton Area</span>
        </div>
        <div className="flex items-center gap-2 p-3 rounded bg-zinc-800 border border-zinc-700">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm text-zinc-300">4.9 rating (127 reviews)</span>
        </div>
      </div>
    ),
  };

  return previews[industry.id] || null;
}

// Mobile Preview Content
function IndustryPreviewMobile({ industry }: { industry: Industry }) {
  return (
    <div className="h-full flex flex-col">
      <div
        className="h-16 rounded-lg mb-2 flex items-center justify-center"
        style={{ backgroundColor: `${industry.color}30` }}
      >
        <industry.icon className="w-6 h-6" style={{ color: industry.color }} />
      </div>
      <div className="flex-1 space-y-2">
        <div className="h-3 w-3/4 bg-zinc-800 rounded" />
        <div className="h-3 w-1/2 bg-zinc-800 rounded" />
        <div className="h-8 bg-zinc-800 rounded mt-3" />
        <div className="h-8 bg-zinc-800 rounded" />
      </div>
      <div
        className="h-8 rounded-lg mt-2"
        style={{ backgroundColor: industry.color }}
      />
    </div>
  );
}

// ============================================
// FEATURES SECTION - npm Install Terminal
// ============================================
interface PackageItem {
  name: string;
  description: string;
  status: 'installed' | 'installing' | 'queued';
}

function FeaturesSection() {
  const [packages, setPackages] = useState<PackageItem[]>([
    { name: 'custom-design', description: 'Tailored aesthetics for your brand', status: 'queued' },
    { name: 'mobile-responsive', description: 'Perfect on iPhone, Android, Desktop', status: 'queued' },
    { name: 'seo-optimization', description: 'Schema markup + meta tags configured', status: 'queued' },
    { name: 'edge-performance', description: 'Sub-100ms via global CDN', status: 'queued' },
    { name: 'ssl-security', description: 'Enterprise-grade protection', status: 'queued' },
    { name: 'content-management', description: 'Easy self-service updates', status: 'queued' },
  ]);
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Start animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [started]);

  // Animate package installation
  useEffect(() => {
    if (!started) return;

    packages.forEach((_, index) => {
      // Start installing
      setTimeout(() => {
        setPackages(prev => prev.map((pkg, i) =>
          i === index ? { ...pkg, status: 'installing' } : pkg
        ));
      }, index * 800);

      // Complete installation
      setTimeout(() => {
        setPackages(prev => prev.map((pkg, i) =>
          i === index ? { ...pkg, status: 'installed' } : pkg
        ));
      }, index * 800 + 600);
    });
  }, [started]);

  const installedCount = packages.filter(p => p.status === 'installed').length;

  return (
    <section ref={containerRef} className="py-32 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">
              What&apos;s Included
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              The Foundation Package
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Every website starts with our battle-tested foundation.
              Everything you need, nothing you don&apos;t.
            </p>
          </div>
        </FadeInSection>

        {/* Terminal */}
        <FadeInSection delay={0.2}>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-zinc-500 font-mono">npm install</span>
              </div>
              <div className="w-12" />
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              {/* Command */}
              <div className="mb-6">
                <span className="text-emerald-400">➜</span>
                <span className="text-cyan-400 ml-2">~/your-website</span>
                <span className="text-zinc-500 ml-2">$</span>
                <span className="text-white ml-2">npm install @princeton/web-foundation</span>
              </div>

              {/* Package Header */}
              <div className="text-zinc-500 mb-4">
                📦 Installing princeton-web-foundation@3.0.0
              </div>

              {/* Packages */}
              <div className="space-y-3">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: pkg.status !== 'queued' ? 1 : 0.3 }}
                    className="flex items-start gap-3"
                  >
                    {/* Tree line */}
                    <span className="text-zinc-700">
                      {index === packages.length - 1 ? '└──' : '├──'}
                    </span>

                    {/* Status Icon */}
                    <span className="w-4 flex-shrink-0 mt-0.5">
                      {pkg.status === 'installed' && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <Check className="w-4 h-4 text-emerald-400" />
                        </motion.span>
                      )}
                      {pkg.status === 'installing' && (
                        <Loader2 className="w-4 h-4 text-brand-primary animate-spin" />
                      )}
                      {pkg.status === 'queued' && (
                        <Circle className="w-4 h-4 text-zinc-700" />
                      )}
                    </span>

                    {/* Package Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={cn(
                          'transition-colors',
                          pkg.status === 'installed' ? 'text-emerald-400' :
                          pkg.status === 'installing' ? 'text-brand-primary' :
                          'text-zinc-600'
                        )}>
                          {pkg.name}@latest
                        </span>
                        {pkg.status === 'installed' && (
                          <span className="text-xs text-zinc-600">✓ installed</span>
                        )}
                        {pkg.status === 'installing' && (
                          <span className="text-xs text-brand-primary">installing...</span>
                        )}
                      </div>
                      <div className={cn(
                        'text-xs mt-0.5 transition-colors',
                        pkg.status === 'installed' ? 'text-zinc-500' : 'text-zinc-700'
                      )}>
                        └── {pkg.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Progress */}
              <div className="mt-6 pt-4 border-t border-zinc-800">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-zinc-500">Progress</span>
                  <span className="text-zinc-400">{installedCount}/{packages.length} packages</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand-primary to-emerald-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${(installedCount / packages.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {installedCount === packages.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs"
                  >
                    ✓ Successfully installed 6 packages. Your website foundation is ready!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// PROCESS SECTION - Git Commit History
// ============================================
interface CommitStep {
  hash: string;
  emoji: string;
  title: string;
  items: string[];
  duration: string;
  status: 'complete' | 'active' | 'pending';
}

function ProcessSection() {
  const commits: CommitStep[] = [
    {
      hash: 'a1d5f78',
      emoji: '🔍',
      title: 'DISCOVERY',
      items: ['Goals & requirements documented', 'Competitor analysis complete', 'Content gathered'],
      duration: '~1 week',
      status: 'complete',
    },
    {
      hash: 'b4c7e92',
      emoji: '✨',
      title: 'BUILD',
      items: ['Custom design approved', 'Development complete', 'Revisions incorporated'],
      duration: '~2 weeks',
      status: 'active',
    },
    {
      hash: '2f8a3d1',
      emoji: '🚀',
      title: 'LAUNCH',
      items: ['Production deployment', 'SEO indexing initiated', 'Training & handoff'],
      duration: '~3 days',
      status: 'pending',
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCommits, setVisibleCommits] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          commits.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCommits(prev => [...prev, index]);
            }, index * 400);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">
              Timeline
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              From Commit to Launch
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A transparent, trackable process. You&apos;ll always know exactly where your project stands.
            </p>
          </div>
        </FadeInSection>

        {/* Git Log */}
        <FadeInSection delay={0.2}>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
              <GitBranch className="w-4 h-4 text-brand-primary" />
              <span className="text-xs text-zinc-500 font-mono">
                git log --oneline --graph
              </span>
            </div>

            {/* Commits */}
            <div className="p-6 font-mono text-sm">
              {commits.map((commit, index) => (
                <motion.div
                  key={commit.hash}
                  initial={{ opacity: 0, x: -20 }}
                  animate={visibleCommits.includes(index) ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    'relative',
                    index !== commits.length - 1 && 'pb-8'
                  )}
                >
                  {/* Branch Line */}
                  {index !== commits.length - 1 && (
                    <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-zinc-800" />
                  )}

                  {/* Commit */}
                  <div className="flex items-start gap-4">
                    {/* Commit Dot */}
                    <div className={cn(
                      'relative z-10 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs',
                      commit.status === 'complete' && 'bg-emerald-500/20 border-emerald-500 text-emerald-400',
                      commit.status === 'active' && 'bg-brand-primary/20 border-brand-primary text-brand-primary',
                      commit.status === 'pending' && 'bg-zinc-900 border-zinc-700 text-zinc-600',
                    )}>
                      {commit.status === 'complete' && <Check className="w-3 h-3" />}
                      {commit.status === 'active' && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 rounded-full bg-brand-primary"
                        />
                      )}
                      {commit.status === 'pending' && <Circle className="w-2 h-2" />}
                    </div>

                    {/* Commit Content */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-yellow-500/70">{commit.hash}</span>
                        {commit.status === 'active' && (
                          <span className="text-xs px-2 py-0.5 rounded bg-brand-primary/20 text-brand-primary">
                            HEAD → main
                          </span>
                        )}
                        <span className={cn(
                          'font-bold',
                          commit.status === 'complete' && 'text-emerald-400',
                          commit.status === 'active' && 'text-brand-primary',
                          commit.status === 'pending' && 'text-zinc-500',
                        )}>
                          {commit.emoji} {commit.title}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="ml-4 space-y-1.5">
                        {commit.items.map((item) => (
                          <div
                            key={item}
                            className={cn(
                              'text-xs',
                              commit.status === 'complete' && 'text-zinc-400',
                              commit.status === 'active' && 'text-zinc-400',
                              commit.status === 'pending' && 'text-zinc-600',
                            )}
                          >
                            {item}
                          </div>
                        ))}
                        <div className={cn(
                          'text-xs mt-2',
                          commit.status === 'complete' && 'text-emerald-400/60',
                          commit.status === 'active' && 'text-cyan-400',
                          commit.status === 'pending' && 'text-zinc-600',
                        )}>
                          {commit.duration}
                        </div>
                      </div>

                      {/* Progress bar for active */}
                      {commit.status === 'active' && (
                        <div className="mt-3 ml-4">
                          <div className="h-1.5 w-48 bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-brand-primary to-cyan-400"
                              initial={{ width: 0 }}
                              animate={{ width: '65%' }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                            />
                          </div>
                          <div className="text-xs text-cyan-400 mt-1">65% complete</div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Timeline Summary */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={visibleCommits.length === commits.length ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between"
              >
                <span className="text-zinc-500">Total timeline</span>
                <span className="text-white font-bold">2-3 weeks</span>
              </motion.div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// CTA SECTION - Deploy Button
// ============================================
function CTASection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-32 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeInSection>
          <Rocket className="w-12 h-12 text-brand-primary mx-auto mb-6" />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Launch?
          </h2>

          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Your competitors are already online. Don&apos;t let another customer slip away
            to a faster, better-looking website.
          </p>

          {/* Deploy Button */}
          <Link href="/quote">
            <motion.div
              className="relative inline-flex items-center gap-3 px-10 py-5 bg-white text-zinc-950 rounded-xl font-bold text-lg cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-brand-primary to-cyan-400"
                initial={{ x: '-100%' }}
                animate={{ x: isHovered ? '0%' : '-100%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                <span className={cn(isHovered && 'text-white')}>
                  {isHovered ? '▲ Deploying...' : '▲ Deploy to Production'}
                </span>
                {!isHovered && <ArrowUpRight className="w-5 h-5" />}
              </span>
            </motion.div>
          </Link>

          <p className="mt-6 text-sm text-zinc-600 font-mono">
            Instant quote • No commitment
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
