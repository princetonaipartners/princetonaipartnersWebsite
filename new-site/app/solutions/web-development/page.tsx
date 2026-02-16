'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  Check,
  Palette,
  Smartphone,
  Search,
  Zap,
  Lock,
  Pencil,
  Star,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Heart,
  Expand,
  MousePointer2,
  Layers,
  Type,
  Square,
  Image as ImageIcon,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { FadeInSection } from '@/components/animations/FadeInSection';
import { ShowcaseModal } from '@/components/ui/showcase-modal';
import { MagneticBackground } from '@/components/ui/magnetic-background';

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Magnetic Particles Background */}
      <MagneticBackground />

      {/* Page Content */}
      <HeroSection />
      <PortfolioShowcase />
      <FeaturesSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}

// ============================================
// HERO SECTION - Friendly & Approachable
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <FadeInSection>
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/10">
                <Sparkles className="w-4 h-4 text-brand-primary" />
                <span className="text-sm text-brand-primary font-medium">
                  Web Development
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
                A Website You&apos;ll{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-400">
                  Actually Love
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
                No headaches. No jargon. Just a beautiful, fast website that helps your
                business grow. We handle the tech so you can focus on what you do best.
              </p>

              {/* Trust Points */}
              <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Mobile-friendly
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Easy to update
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Found on Google
                </span>
              </div>

              {/* CTA */}
              <Link href="/quote">
                <motion.div
                  data-magnetic
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-semibold text-lg cursor-pointer hover:shadow-brand-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </div>
          </FadeInSection>

          {/* Right: Interactive Design Canvas */}
          <FadeInSection delay={0.2}>
            <DesignCanvas />
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

// ============================================
// DESIGN CANVAS - Interactive Figma-like animation
// ============================================
function DesignCanvas() {
  const [animationStep, setAnimationStep] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);
  const fullHeadline = 'Your Business';

  // Animation sequence timing
  const ANIMATION_DURATION = 12000; // 12 second loop
  const steps = {
    IDLE: 0,
    PLACE_HEADER: 1,
    TYPE_TEXT: 2,
    SELECT_COLOR: 3,
    PLACE_BUTTON: 4,
    PLACE_CARDS: 5,
    COMPLETE: 6,
  };

  // Cursor positions for each step (relative to canvas)
  const cursorPositions = {
    [steps.IDLE]: { x: 50, y: 50 },
    [steps.PLACE_HEADER]: { x: 120, y: 30 },
    [steps.TYPE_TEXT]: { x: 100, y: 70 },
    [steps.SELECT_COLOR]: { x: 280, y: 60 },
    [steps.PLACE_BUTTON]: { x: 80, y: 120 },
    [steps.PLACE_CARDS]: { x: 120, y: 170 },
    [steps.COMPLETE]: { x: 150, y: 100 },
  };

  // Animation loop
  useEffect(() => {
    if (!isAnimating) return;

    const sequence = [
      { step: steps.PLACE_HEADER, delay: 0 },
      { step: steps.TYPE_TEXT, delay: 1500 },
      { step: steps.SELECT_COLOR, delay: 4500 },
      { step: steps.PLACE_BUTTON, delay: 6000 },
      { step: steps.PLACE_CARDS, delay: 7500 },
      { step: steps.COMPLETE, delay: 9500 },
      { step: steps.IDLE, delay: 11500 },
    ];

    const timeouts: NodeJS.Timeout[] = [];

    sequence.forEach(({ step, delay }) => {
      const timeout = setTimeout(() => {
        setAnimationStep(step);
        if (step === steps.IDLE) {
          // Reset for next loop
          setTypedText('');
        }
      }, delay);
      timeouts.push(timeout);
    });

    // Restart loop
    const loopTimeout = setTimeout(() => {
      setAnimationStep(steps.IDLE);
      setTypedText('');
    }, ANIMATION_DURATION);
    timeouts.push(loopTimeout);

    return () => timeouts.forEach(clearTimeout);
  }, [isAnimating, animationStep === steps.IDLE]);

  // Typing animation
  useEffect(() => {
    if (animationStep !== steps.TYPE_TEXT) return;

    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullHeadline.length) {
        setTypedText(fullHeadline.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [animationStep]);

  const cursorPos = cursorPositions[animationStep] || cursorPositions[steps.IDLE];

  return (
    <div className="relative">
      {/* Main Design Tool Container */}
      <div className="rounded-2xl border border-zinc-700 bg-zinc-900/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/50">
        {/* Tool Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-800/80 border-b border-zinc-700">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-zinc-400 font-medium">Design Canvas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-zinc-700 flex items-center justify-center">
              <Square className="w-3 h-3 text-zinc-400" />
            </div>
            <div className="w-5 h-5 rounded bg-zinc-700 flex items-center justify-center">
              <Type className="w-3 h-3 text-zinc-400" />
            </div>
            <div className="w-5 h-5 rounded bg-zinc-700 flex items-center justify-center">
              <ImageIcon className="w-3 h-3 text-zinc-400" />
            </div>
          </div>
        </div>

        {/* Canvas Body */}
        <div className="flex">
          {/* Main Artboard */}
          <div className="flex-1 p-4 relative min-h-[280px]">
            {/* Grid Background */}
            <div
              className="absolute inset-4 rounded-xl bg-zinc-950 overflow-hidden"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            >
              {/* Website Preview Elements */}
              <div className="p-4 space-y-3 relative">
                {/* Header Element */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{
                    opacity: animationStep >= steps.PLACE_HEADER ? 1 : 0,
                    scaleX: animationStep >= steps.PLACE_HEADER ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="origin-left"
                >
                  <div className={cn(
                    'h-8 rounded-lg transition-colors duration-300',
                    animationStep >= steps.SELECT_COLOR
                      ? 'bg-gradient-to-r from-brand-primary to-cyan-400'
                      : 'bg-zinc-700'
                  )}>
                    {/* Selection box when active */}
                    {animationStep === steps.PLACE_HEADER && (
                      <SelectionBox />
                    )}
                  </div>
                </motion.div>

                {/* Headline Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: animationStep >= steps.TYPE_TEXT ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="h-6 flex items-center">
                    <span className="text-white font-bold text-lg">
                      {typedText}
                      {animationStep === steps.TYPE_TEXT && (
                        <motion.span
                          className="inline-block w-0.5 h-5 bg-brand-primary ml-0.5"
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        />
                      )}
                    </span>
                  </div>
                  {animationStep === steps.TYPE_TEXT && <SelectionBox />}
                </motion.div>

                {/* Subtitle placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: animationStep >= steps.TYPE_TEXT ? 0.6 : 0,
                    y: animationStep >= steps.TYPE_TEXT ? 0 : 10,
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="h-2 w-3/4 bg-zinc-700 rounded" />
                  <div className="h-2 w-1/2 bg-zinc-700 rounded mt-1.5" />
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: animationStep >= steps.PLACE_BUTTON ? 1 : 0,
                    scale: animationStep >= steps.PLACE_BUTTON ? 1 : 0.8,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="relative inline-block"
                >
                  <div className={cn(
                    'h-8 w-24 rounded-lg flex items-center justify-center text-xs font-medium transition-colors duration-300',
                    animationStep >= steps.SELECT_COLOR
                      ? 'bg-brand-primary text-white'
                      : 'bg-zinc-600 text-zinc-300'
                  )}>
                    Get Started
                  </div>
                  {animationStep === steps.PLACE_BUTTON && <SelectionBox />}
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                  className="grid grid-cols-3 gap-2 pt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: animationStep >= steps.PLACE_CARDS ? 1 : 0 }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: animationStep >= steps.PLACE_CARDS ? 1 : 0,
                        y: animationStep >= steps.PLACE_CARDS ? 0 : 20,
                      }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className="aspect-video bg-zinc-800 rounded-lg border border-zinc-700"
                    />
                  ))}
                </motion.div>
                {animationStep === steps.PLACE_CARDS && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <SelectionBox />
                  </div>
                )}
              </div>
            </div>

            {/* Animated Cursor */}
            <motion.div
              className="absolute z-20 pointer-events-none"
              animate={{
                x: cursorPos.x,
                y: cursorPos.y,
              }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 20,
              }}
            >
              <MousePointer2
                className="w-5 h-5 text-white drop-shadow-lg"
                fill="white"
                style={{ transform: 'rotate(-5deg)' }}
              />
              {/* Click indicator */}
              {[steps.PLACE_HEADER, steps.SELECT_COLOR, steps.PLACE_BUTTON, steps.PLACE_CARDS].includes(animationStep) && (
                <motion.div
                  className="absolute top-0 left-0 w-4 h-4 rounded-full bg-brand-primary/50"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </motion.div>
          </div>

          {/* Side Panel */}
          <div className="w-28 border-l border-zinc-700 bg-zinc-800/50 p-3 space-y-4">
            {/* Color Palette */}
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Palette className="w-3 h-3 text-zinc-500" />
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Colors</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { color: '#0A84FF', label: 'Primary' },
                  { color: '#00D4FF', label: 'Accent' },
                  { color: '#FFFFFF', label: 'Text' },
                ].map((item, i) => (
                  <motion.div
                    key={item.color}
                    className={cn(
                      'flex items-center gap-2 p-1.5 rounded-md transition-colors',
                      animationStep === steps.SELECT_COLOR && i === 0
                        ? 'bg-zinc-700 ring-1 ring-brand-primary'
                        : 'hover:bg-zinc-700/50'
                    )}
                    animate={{
                      scale: animationStep === steps.SELECT_COLOR && i === 0 ? [1, 1.05, 1] : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="w-4 h-4 rounded border border-zinc-600"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-[10px] text-zinc-400">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Layers Panel */}
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Layers className="w-3 h-3 text-zinc-500" />
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Layers</span>
              </div>
              <div className="space-y-1">
                {[
                  { name: 'Header', step: steps.PLACE_HEADER },
                  { name: 'Headline', step: steps.TYPE_TEXT },
                  { name: 'Button', step: steps.PLACE_BUTTON },
                  { name: 'Cards', step: steps.PLACE_CARDS },
                ].map((layer) => (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: animationStep >= layer.step ? 1 : 0.3,
                      x: animationStep >= layer.step ? 0 : -10,
                    }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      'flex items-center gap-2 p-1.5 rounded text-[10px]',
                      animationStep === layer.step
                        ? 'bg-brand-primary/20 text-brand-primary'
                        : 'text-zinc-400'
                    )}
                  >
                    <div className={cn(
                      'w-2 h-2 rounded-sm',
                      animationStep >= layer.step ? 'bg-brand-primary' : 'bg-zinc-600'
                    )} />
                    {layer.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-8 bg-brand-primary/10 blur-[100px] rounded-full -z-10" />

      {/* Floating badge */}
      <motion.div
        className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 backdrop-blur-sm"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live Preview
        </span>
      </motion.div>
    </div>
  );
}

// Selection box component for active elements
function SelectionBox() {
  return (
    <motion.div
      className="absolute inset-0 rounded-lg pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        border: '1.5px dashed #0A84FF',
        boxShadow: '0 0 0 4px rgba(10, 132, 255, 0.1)',
      }}
    >
      {/* Corner handles */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
        <div
          key={pos}
          className={cn(
            'absolute w-2 h-2 bg-brand-primary rounded-sm',
            pos === 'top-left' && '-top-1 -left-1',
            pos === 'top-right' && '-top-1 -right-1',
            pos === 'bottom-left' && '-bottom-1 -left-1',
            pos === 'bottom-right' && '-bottom-1 -right-1'
          )}
        />
      ))}
    </motion.div>
  );
}

// ============================================
// PORTFOLIO SHOWCASE - Real Projects Grid
// ============================================
interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  type: 'live' | 'demo';
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'renew-verse',
    title: 'Renew-Verse',
    category: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform with custom product configurator, AI-powered recommendations, and seamless checkout experience.',
    tags: ['E-commerce', 'AI-Powered', 'Mobile-First'],
    url: 'https://www.renew-verse.com/',
    type: 'live',
  },
  {
    id: 'made-by-genie',
    title: 'Made by Genie',
    category: 'Creative Portfolio',
    description: 'Stunning portfolio site with interactive galleries, smooth animations, and compelling storytelling that converts visitors into clients.',
    tags: ['Portfolio', 'Creative', 'Animations'],
    url: 'https://www.madebygenie.com/',
    type: 'live',
  },
  {
    id: 'medical-practice',
    title: 'Premium Medical Practice',
    category: 'Healthcare',
    description: 'Professional medical site with patient portal, online booking, secure forms, and HIPAA-compliant infrastructure for modern healthcare.',
    tags: ['Healthcare', 'HIPAA-Ready', 'Patient Portal'],
    url: '/mockups/medical.html',
    type: 'demo',
  },
  {
    id: 'luxury-realestate',
    title: 'Luxury Real Estate',
    category: 'Real Estate',
    description: 'High-end real estate showcase with virtual tours, property search, lead capture, and premium branding that attracts qualified buyers.',
    tags: ['Real Estate', 'Virtual Tours', 'Lead Gen'],
    url: '/mockups/realestate.html',
    type: 'demo',
  },
  {
    id: 'fine-dining',
    title: 'Fine Dining Restaurant',
    category: 'Food & Beverage',
    description: 'Mouth-watering restaurant site with online reservations, digital menu, photo galleries, and integrated ordering system.',
    tags: ['Restaurant', 'Reservations', 'Online Orders'],
    url: '/mockups/restaurant.html',
    type: 'demo',
  },
  {
    id: 'stimi-games',
    title: 'Social Gaming Platform',
    category: 'Entertainment & Gaming',
    description: 'Free-to-play social sportsbook with live betting lines, prop predictions, and sweepstakes integration for real prizes.',
    tags: ['Gaming', 'Social Features', 'Real-Time Data'],
    url: '/mockups/stimi.html',
    type: 'demo',
  },
];

function PortfolioShowcase() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = (project: PortfolioItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section ref={containerRef} className="py-32 bg-transparent border-y border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <FadeInSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 mb-6">
                <Sparkles className="w-4 h-4 text-brand-primary" />
                <span className="text-sm text-brand-primary font-medium">
                  Our Work
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                Real Websites. Real Results.
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                We don&apos;t just design—we build complete digital experiences
                that drive business growth.
              </p>
            </div>
          </FadeInSection>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <PortfolioCard project={project} onView={() => openModal(project)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ShowcaseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        url={selectedProject?.url || ''}
        title={selectedProject?.title || ''}
      />
    </>
  );
}

// Portfolio Card Component with Live iframe Preview
function PortfolioCard({
  project,
  onView,
}: {
  project: PortfolioItem;
  onView: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden cursor-pointer',
        'transition-all duration-500 ease-out',
        'hover:-translate-y-2 hover:border-zinc-700',
        'hover:shadow-[0_20px_40px_rgba(10,132,255,0.15)]'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onView}
    >
      {/* Live Preview Container */}
      <div className="relative h-[280px] overflow-hidden bg-white">
        {/* Scaled iframe showing live site */}
        <div className="absolute inset-0 origin-top-left scale-[0.25] w-[400%] h-[400%]">
          <iframe
            src={project.url}
            title={`${project.title} preview`}
            className="w-full h-full border-none pointer-events-none"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>

        {/* Hover Overlay */}
        <motion.div
          className={cn(
            'absolute inset-0 flex items-center justify-center',
            'bg-gradient-to-br from-brand-primary/30 to-brand-secondary/40',
            'backdrop-blur-[3px]'
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className={cn(
              'px-6 py-3 bg-white text-brand-primary rounded-full',
              'font-semibold text-sm flex items-center gap-2',
              'shadow-lg hover:shadow-xl transition-shadow'
            )}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0.9, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Expand className="w-4 h-4" />
            {project.type === 'live' ? 'View Site' : 'View Demo'}
          </motion.button>
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-6">
        {/* Category */}
        <p className="text-sm font-semibold text-brand-primary uppercase tracking-wide mb-2">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// FEATURES SECTION - Friendly Feature Grid
// ============================================
interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

function FeaturesSection() {
  const features: FeatureItem[] = [
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'A unique look that matches your brand perfectly. No cookie-cutter templates.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Looks amazing on phones, tablets, and desktops. Your customers browse everywhere.',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
    },
    {
      icon: Search,
      title: 'SEO Ready',
      description: 'Built to be found on Google. We handle the technical stuff so people find you.',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
    },
    {
      icon: Zap,
      title: 'Super Fast',
      description: 'Pages load in under a second. Fast sites keep visitors happy and boost rankings.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: Lock,
      title: 'Secure & Protected',
      description: 'SSL certificates, secure hosting, and regular updates keep your site safe.',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
    },
    {
      icon: Pencil,
      title: 'Easy Updates',
      description: 'Make changes yourself with our simple editor. No coding needed.',
      color: 'text-brand-primary',
      bgColor: 'bg-brand-primary/10',
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={containerRef} className="py-32 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">
                Everything Included
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              What You Get
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Every website comes with everything you need to succeed online.
              No hidden fees, no surprise extras.
            </p>
          </div>
        </FadeInSection>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <FeatureCard feature={feature} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <FadeInSection delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-zinc-500">
              Plus ongoing support to answer any questions after launch
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// Feature Card with Animated Shader-like Background
function FeatureCard({ feature, index }: { feature: FeatureItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  // Subtle gradient colors based on feature (all using blue/cyan tones for consistency)
  const gradientConfigs = [
    { from: 'from-purple-900/30', via: 'via-indigo-900/20', to: 'to-zinc-900' },
    { from: 'from-cyan-900/30', via: 'via-blue-900/20', to: 'to-zinc-900' },
    { from: 'from-emerald-900/30', via: 'via-teal-900/20', to: 'to-zinc-900' },
    { from: 'from-amber-900/30', via: 'via-orange-900/20', to: 'to-zinc-900' },
    { from: 'from-rose-900/30', via: 'via-pink-900/20', to: 'to-zinc-900' },
    { from: 'from-blue-900/30', via: 'via-indigo-900/20', to: 'to-zinc-900' },
  ];

  const gradient = gradientConfigs[index % gradientConfigs.length];

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className={cn(
        'relative h-full rounded-2xl overflow-hidden',
        'border border-white/10',
        'transition-all duration-500 ease-out',
        'hover:border-white/20',
        'hover:shadow-xl hover:shadow-black/30'
      )}>
        {/* Animated Gradient Background */}
        <div className={cn(
          'absolute inset-0 bg-gradient-to-br',
          gradient.from, gradient.via, gradient.to,
          'opacity-0 group-hover:opacity-100 transition-opacity duration-700'
        )} />

        {/* Animated mesh/noise overlay for texture */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(74, 144, 226, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 40%)`,
            animation: isHovered ? 'pulse 4s ease-in-out infinite' : 'none',
          }}
        />

        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-zinc-950/80 group-hover:bg-zinc-950/70 transition-colors duration-500" />

        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Icon */}
          <motion.div
            className={cn(
              'inline-flex p-3 rounded-xl mb-4 w-fit',
              'bg-white/5 border border-white/10',
              'group-hover:bg-white/10 group-hover:border-white/20',
              'transition-all duration-300'
            )}
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <feature.icon className={cn(
              'w-6 h-6 transition-all duration-300',
              feature.color,
              'group-hover:drop-shadow-lg'
            )}
            style={{
              filter: isHovered ? `drop-shadow(0 0 8px currentColor)` : 'none'
            }}
            />
          </motion.div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-white mb-2">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-zinc-400 text-sm leading-relaxed flex-1 group-hover:text-zinc-300 transition-colors duration-300">
            {feature.description}
          </p>

          {/* Bottom indicator */}
          <div className="mt-4 flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors"
              animate={isHovered ? { x: 0, opacity: 1 } : { x: -5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span>Included</span>
              <ArrowRight className="w-3 h-3" />
            </motion.div>

            <motion.div
              className={cn(
                'p-1.5 rounded-full',
                'bg-emerald-500/10 border border-emerald-500/20'
              )}
              animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            </motion.div>
          </div>
        </div>

        {/* Top edge glow on hover */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isHovered ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}

// ============================================
// PROCESS SECTION - Modern Horizontal Steps
// ============================================
interface ProcessStep {
  number: number;
  title: string;
  description: string;
  details: string[];
  icon: React.ElementType;
}

function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-cycle through steps
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const commands = [
    {
      cmd: 'princeton plan',
      flag: '--discovery',
      output: ['Analyzing your business goals...', 'Creating project roadmap...', 'Gathering content requirements...'],
      status: 'COMPLETE',
      color: 'purple',
      title: 'Plan',
      description: 'We learn about your business in a friendly conversation. No jargon.',
    },
    {
      cmd: 'princeton build',
      flag: '--custom',
      output: ['Designing custom mockups...', 'Building responsive layout...', 'Adding interactions...'],
      status: 'COMPLETE',
      color: 'cyan',
      title: 'Build',
      description: 'We create your site and refine it until it\'s perfect.',
    },
    {
      cmd: 'princeton deploy',
      flag: '--production',
      output: ['Optimizing for performance...', 'Deploying to edge network...', 'Your site is live!'],
      status: 'LIVE',
      color: 'emerald',
      title: 'Launch',
      description: 'We handle everything and train you on the basics.',
    },
  ];

  return (
    <section ref={containerRef} className="py-32 bg-transparent border-t border-zinc-900/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-zinc-400">
              Three commands to your new website
            </p>
          </div>
        </FadeInSection>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Terminal Container */}
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/50">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-zinc-500 font-mono">princeton-cli — your-project</span>
              </div>
              <div className="w-16" />
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-8 font-mono text-sm space-y-8">
              {commands.map((command, index) => (
                <motion.div
                  key={command.cmd}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.3 }}
                  className={cn(
                    'relative transition-all duration-500',
                    activeStep === index ? 'opacity-100' : 'opacity-40'
                  )}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Command Line */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-emerald-400">$</span>
                    <span className="text-white">{command.cmd}</span>
                    <span className={cn(
                      command.color === 'purple' && 'text-purple-400',
                      command.color === 'cyan' && 'text-cyan-400',
                      command.color === 'emerald' && 'text-emerald-400',
                    )}>{command.flag}</span>

                    {/* Status Badge */}
                    <motion.span
                      className={cn(
                        'ml-auto px-2 py-0.5 rounded text-[10px] font-bold tracking-wider',
                        command.color === 'purple' && 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
                        command.color === 'cyan' && 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30',
                        command.color === 'emerald' && 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
                      )}
                      animate={activeStep === index ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {command.status}
                    </motion.span>
                  </div>

                  {/* Output Lines */}
                  <div className="pl-4 border-l-2 border-zinc-800 space-y-1">
                    {command.output.map((line, i) => (
                      <motion.div
                        key={line}
                        className="flex items-center gap-2 text-zinc-500"
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.3 + i * 0.15 + 0.5 }}
                      >
                        <Check className={cn(
                          'w-3 h-3',
                          command.color === 'purple' && 'text-purple-400',
                          command.color === 'cyan' && 'text-cyan-400',
                          command.color === 'emerald' && 'text-emerald-400',
                        )} />
                        <span>{line}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Expanded Info (active step only) */}
                  <AnimatePresence>
                    {activeStep === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={cn(
                              'w-8 h-8 rounded-lg flex items-center justify-center',
                              command.color === 'purple' && 'bg-purple-500/20',
                              command.color === 'cyan' && 'bg-cyan-500/20',
                              command.color === 'emerald' && 'bg-emerald-500/20',
                            )}>
                              <span className={cn(
                                'text-lg font-bold',
                                command.color === 'purple' && 'text-purple-400',
                                command.color === 'cyan' && 'text-cyan-400',
                                command.color === 'emerald' && 'text-emerald-400',
                              )}>{index + 1}</span>
                            </div>
                            <h3 className="text-white font-semibold text-base font-sans">{command.title}</h3>
                          </div>
                          <p className="text-zinc-400 text-sm font-sans pl-11">{command.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Blinking Cursor */}
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">$</span>
                <motion.span
                  className="w-2 h-5 bg-white"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            </div>
          </div>

          {/* Glow Effects */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 blur-3xl -z-10 opacity-50" />
        </motion.div>

        {/* Step Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {[0, 1, 2].map((step) => (
            <button
              key={step}
              onClick={() => setActiveStep(step)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                activeStep === step
                  ? 'w-8 bg-brand-primary'
                  : 'bg-zinc-700 hover:bg-zinc-600'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// CTA SECTION - With Magnetic Particles
// ============================================
interface CTAParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  phase: number;
}

function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [buttonPos, setButtonPos] = useState<{ x: number; y: number } | null>(null);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);
  const [particles, setParticles] = useState<CTAParticle[]>([]);

  // Generate particles on mount
  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
        size: 3 + Math.random() * 4,
        opacity: 0.2 + Math.random() * 0.3,
        speed: 0.3 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
      }))
    );
  }, []);

  // Track button position
  useEffect(() => {
    const updatePositions = () => {
      if (containerRef.current) {
        setContainerRect(containerRef.current.getBoundingClientRect());
      }
      if (buttonRef.current && containerRef.current) {
        const btnRect = buttonRef.current.getBoundingClientRect();
        const contRect = containerRef.current.getBoundingClientRect();
        setButtonPos({
          x: btnRect.left - contRect.left + btnRect.width / 2,
          y: btnRect.top - contRect.top + btnRect.height / 2,
        });
      }
    };
    updatePositions();
    window.addEventListener('resize', updatePositions);
    window.addEventListener('scroll', updatePositions);
    return () => {
      window.removeEventListener('resize', updatePositions);
      window.removeEventListener('scroll', updatePositions);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-transparent border-t border-zinc-900/50 overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <CTAFloatingParticle
            key={particle.id}
            particle={particle}
            isHovered={isHovered}
            buttonPos={buttonPos}
            containerRect={containerRect}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>

          <p className="text-lg text-zinc-400 mb-8">
            Let&apos;s talk about your project.
          </p>

          <div
            ref={buttonRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline-block"
          >
            <Link href="/quote">
              <motion.div
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-full font-medium cursor-pointer hover:bg-brand-primary/90 transition-colors shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </div>

          <p className="mt-6 text-sm text-zinc-500">
            Free consultation · No obligation · Response within 24 hours
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}

// Floating particle that gets attracted to button
function CTAFloatingParticle({
  particle,
  isHovered,
  buttonPos,
  containerRect,
}: {
  particle: CTAParticle;
  isHovered: boolean;
  buttonPos: { x: number; y: number } | null;
  containerRect: DOMRect | null;
}) {
  const [drift, setDrift] = useState({ x: 0, y: 0 });
  const startTimeRef = useRef(Date.now());

  // Ambient floating when not hovered
  useEffect(() => {
    if (isHovered) return;

    let animationId: number;
    const animate = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const x = Math.sin(elapsed * particle.speed + particle.phase) * 15;
      const y = Math.cos(elapsed * particle.speed * 0.7 + particle.phase) * 10;
      setDrift({ x, y });
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, particle]);

  // Calculate attraction target
  const targetX = useMemo(() => {
    if (!isHovered || !buttonPos || !containerRect) return drift.x;
    const particleAbsX = (particle.x / 100) * containerRect.width;
    return buttonPos.x - particleAbsX;
  }, [isHovered, buttonPos, containerRect, particle.x, drift.x]);

  const targetY = useMemo(() => {
    if (!isHovered || !buttonPos || !containerRect) return drift.y;
    const particleAbsY = (particle.y / 100) * containerRect.height;
    return buttonPos.y - particleAbsY;
  }, [isHovered, buttonPos, containerRect, particle.y, drift.y]);

  return (
    <motion.div
      className="absolute rounded-full bg-brand-primary pointer-events-none"
      style={{
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: particle.size,
        height: particle.size,
        filter: 'blur(1px)',
        boxShadow: '0 0 8px rgba(10, 132, 255, 0.6)',
      }}
      animate={{
        x: isHovered ? targetX : drift.x,
        y: isHovered ? targetY : drift.y,
        scale: isHovered ? 0.6 : 1,
        opacity: isHovered ? particle.opacity * 1.8 : particle.opacity,
      }}
      transition={
        isHovered
          ? { type: 'spring', stiffness: 100, damping: 15 }
          : { type: 'tween', duration: 0.1 }
      }
    />
  );
}
