'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Database,
  Brain,
  Globe,
  User,
  Lock,
  Zap,
  GitBranch,
  Rocket,
  Search,
  Shield,
  ArrowRight,
  Server,
  Cloud,
  MessageSquare,
  HardDrive,
  Check,
  Play,
  Circle,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { RetroGrid } from '@/components/ui/retro-grid';
import { CodeWindow, EXAMPLE_CODE } from '@/components/ui/code-window';
import { TechStackGrid } from '@/components/ui/tech-stack-grid';
import { ParticleBeam } from '@/components/ui/particle-beam';
import { SystemNode } from '@/components/ui/system-node';
import { LiveMetricsBar } from '@/components/ui/live-metrics-bar';
import { ActivityLog } from '@/components/ui/activity-log';
import { FadeInSection } from '@/components/animations/FadeInSection';

export default function BespokeSoftwarePage() {
  return (
    <div className="dark bg-zinc-950 min-h-screen font-sans selection:bg-brand-primary/30 overflow-x-hidden">
      {/* Global RetroGrid Background */}
      <div className="fixed inset-0 z-0">
        <RetroGrid />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <ArchitectureSection />
        <TechStackSection />
        <CapabilitiesSection />
        <ProcessSection />
        <CTASection />
      </div>
    </div>
  );
}

// ============================================
// HERO SECTION - "The Terminal"
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <FadeInSection>
            <div className="space-y-6">
              {/* Version Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-xs font-mono text-zinc-400">
                  v2.0 SYSTEM ARCHITECTURE
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-white">We Build</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                  The Engine
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed font-mono">
                Full-cycle custom software development.{' '}
                <span className="text-zinc-300">Scalable</span>,{' '}
                <span className="text-zinc-300">secure</span>, and{' '}
                <span className="text-zinc-300">architected for the future</span>.
              </p>

              <p className="text-base text-zinc-500">
                We don&apos;t just write code; we engineer systems.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group relative px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-brand-lg hover:scale-105">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Building
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="px-6 py-3 border border-zinc-700 rounded-lg font-mono text-sm text-zinc-400 hover:border-brand-primary/50 hover:text-zinc-200 transition-all duration-300">
                  View Architecture →
                </button>
              </div>
            </div>
          </FadeInSection>

          {/* Right: Code Window */}
          <FadeInSection delay={0.2}>
            <div className="relative">
              {/* Glow effect behind window */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-2xl blur-xl opacity-50" />
              <CodeWindow
                code={EXAMPLE_CODE.enterpriseConfig}
                filename="enterprise.config.ts"
                language="typescript"
                typingSpeed={25}
                showBuildProgress={true}
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

// ============================================
// ARCHITECTURE SECTION - "The Command Center"
// ============================================
function ArchitectureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const databaseRef = useRef<HTMLDivElement>(null);
  const cacheRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const authRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);
  const cdnRef = useRef<HTMLDivElement>(null);
  const queueRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Node configuration with descriptions, metrics, and handles
  const nodes = {
    database: {
      description: 'Primary data store with read replicas and automatic failover.',
      handles: [
        'User profiles & preferences',
        'Transaction history',
        'Business analytics data',
      ],
      metrics: [
        { label: 'Connections', value: '142', percentage: 71 },
        { label: 'Query Time', value: '3.2ms', percentage: 12 },
      ],
      techStack: ['PostgreSQL', 'Prisma', 'PgBouncer'],
    },
    cache: {
      description: 'In-memory caching layer for hot data and session management.',
      handles: [
        'Session tokens & auth state',
        'API response caching',
        'Rate limiting counters',
      ],
      metrics: [
        { label: 'Hit Rate', value: '98.7%', percentage: 99 },
        { label: 'Memory', value: '2.1GB', percentage: 42 },
      ],
      techStack: ['Redis', 'Upstash'],
    },
    ai: {
      description: 'ML inference engine with GPU acceleration and model versioning.',
      handles: [
        'Natural language processing',
        'Document analysis & extraction',
        'Predictive recommendations',
      ],
      metrics: [
        { label: 'Inference', value: '45ms', percentage: 22 },
        { label: 'Throughput', value: '850/s', percentage: 85 },
      ],
      techStack: ['OpenAI', 'Anthropic', 'PyTorch'],
    },
    auth: {
      description: 'Zero-trust authentication with MFA and SSO support.',
      handles: [
        'User authentication flows',
        'Role-based access control',
        'API key management',
      ],
      metrics: [
        { label: 'Sessions', value: '12.4k', percentage: 62 },
        { label: 'MFA Rate', value: '94%', percentage: 94 },
      ],
      techStack: ['NextAuth', 'JWT', 'OAuth2'],
    },
    client: {
      description: 'React-based SPA with offline-first architecture.',
      handles: [
        'User interface rendering',
        'State management',
        'Offline data sync',
      ],
      metrics: [
        { label: 'Bundle', value: '142kb', percentage: 28 },
        { label: 'LCP', value: '1.2s', percentage: 88 },
      ],
      techStack: ['React 19', 'Next.js 15', 'TailwindCSS'],
    },
    cdn: {
      description: 'Global edge network with 200+ PoPs worldwide.',
      handles: [
        'Static asset delivery',
        'Image optimization',
        'Geographic load balancing',
      ],
      metrics: [
        { label: 'Cache Hit', value: '96%', percentage: 96 },
        { label: 'Latency', value: '12ms', percentage: 6 },
      ],
      techStack: ['Vercel Edge', 'Cloudflare'],
    },
    queue: {
      description: 'Distributed message queue for async processing.',
      handles: [
        'Background job processing',
        'Email & notification delivery',
        'Data pipeline orchestration',
      ],
      metrics: [
        { label: 'In Queue', value: '1.2k', percentage: 24 },
        { label: 'Processed', value: '45k/min', percentage: 90 },
      ],
      techStack: ['BullMQ', 'Redis Streams'],
    },
    api: {
      description: 'High-performance API gateway with rate limiting.',
      handles: [
        'Request routing & validation',
        'Authentication middleware',
        'Response transformation',
      ],
      metrics: [
        { label: 'RPS', value: '2.4k', percentage: 48 },
        { label: 'P99', value: '28ms', percentage: 14 },
      ],
      techStack: ['Node.js', 'Fastify', 'tRPC'],
    },
  };

  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">
              System Design
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              Event-Driven Architecture
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Every system we build follows battle-tested architectural patterns.
              Real-time data flow, fault tolerance, infinite scale.
            </p>
          </div>
        </FadeInSection>

        {/* Live Metrics Bar */}
        <FadeInSection delay={0.1}>
          <LiveMetricsBar className="max-w-4xl mx-auto mb-8" />
        </FadeInSection>

        {/* Architecture Diagram */}
        <FadeInSection delay={0.2}>
          <div
            ref={containerRef}
            className="relative h-[600px] w-full max-w-4xl mx-auto"
          >
            {/* Particle Beams - Connections from center to all nodes */}
            {mounted && centerRef.current && (
              <>
                {/* Top row connections */}
                {databaseRef.current && (
                  <ParticleBeam
                    containerRef={containerRef as React.RefObject<HTMLElement>}
                    fromRef={centerRef as React.RefObject<HTMLElement>}
                    toRef={databaseRef as React.RefObject<HTMLElement>}
                    curvature={0.2}
                    duration={4}
                    particleCount={2}
                    particleSize={2.5}
                  />
                )}
                {cacheRef.current && (
                  <ParticleBeam
                    containerRef={containerRef as React.RefObject<HTMLElement>}
                    fromRef={centerRef as React.RefObject<HTMLElement>}
                    toRef={cacheRef as React.RefObject<HTMLElement>}
                    curvature={0.15}
                    duration={3.5}
                    delay={0.5}
                    particleCount={2}
                    particleSize={2.5}
                  />
                )}
                {aiRef.current && (
                  <ParticleBeam
                    containerRef={containerRef as React.RefObject<HTMLElement>}
                    fromRef={centerRef as React.RefObject<HTMLElement>}
                    toRef={aiRef as React.RefObject<HTMLElement>}
                    curvature={-0.15}
                    duration={3.8}
                    delay={1}
                    particleCount={2}
                    particleSize={2.5}
                  />
                )}
                {authRef.current && (
                  <ParticleBeam
                    containerRef={containerRef as React.RefObject<HTMLElement>}
                    fromRef={centerRef as React.RefObject<HTMLElement>}
                    toRef={authRef as React.RefObject<HTMLElement>}
                    curvature={-0.2}
                    duration={4.2}
                    delay={1.5}
                    particleCount={2}
                    particleSize={2.5}
                  />
                )}
                {/* Bottom row connections */}
                {clientRef.current && (
                  <ParticleBeam
                    containerRef={containerRef as React.RefObject<HTMLElement>}
                    fromRef={centerRef as React.RefObject<HTMLElement>}
                    toRef={clientRef as React.RefObject<HTMLElement>}
                    curvature={-0.2}
                    duration={3.6}
                    delay={2}
                    particleCount={2}
                    particleSize={2.5}
                  />
                )}
                {cdnRef.current && (
                  <ParticleBeam
                    containerRef={containerRef as React.RefObject<HTMLElement>}
                    fromRef={centerRef as React.RefObject<HTMLElement>}
                    toRef={cdnRef as React.RefObject<HTMLElement>}
                    curvature={-0.15}
                    duration={3.4}
                    delay={2.5}
                    particleCount={2}
                    particleSize={2.5}
                  />
                )}
                {queueRef.current && (
                  <ParticleBeam
                    containerRef={containerRef as React.RefObject<HTMLElement>}
                    fromRef={centerRef as React.RefObject<HTMLElement>}
                    toRef={queueRef as React.RefObject<HTMLElement>}
                    curvature={0.15}
                    duration={4}
                    delay={3}
                    particleCount={2}
                    particleSize={2.5}
                  />
                )}
                {apiRef.current && (
                  <ParticleBeam
                    containerRef={containerRef as React.RefObject<HTMLElement>}
                    fromRef={centerRef as React.RefObject<HTMLElement>}
                    toRef={apiRef as React.RefObject<HTMLElement>}
                    curvature={0.2}
                    duration={4.5}
                    delay={3.5}
                    particleCount={2}
                    particleSize={2.5}
                  />
                )}
                {/* Cross connections for visual interest */}
                {databaseRef.current && cacheRef.current && (
                  <ParticleBeam
                    containerRef={containerRef as React.RefObject<HTMLElement>}
                    fromRef={databaseRef as React.RefObject<HTMLElement>}
                    toRef={cacheRef as React.RefObject<HTMLElement>}
                    curvature={0.3}
                    duration={5}
                    delay={4}
                    particleCount={1}
                    particleSize={2}
                    pathOpacity={0.15}
                  />
                )}
                {aiRef.current && queueRef.current && (
                  <ParticleBeam
                    containerRef={containerRef as React.RefObject<HTMLElement>}
                    fromRef={aiRef as React.RefObject<HTMLElement>}
                    toRef={queueRef as React.RefObject<HTMLElement>}
                    curvature={-0.4}
                    duration={5.5}
                    delay={4.5}
                    particleCount={1}
                    particleSize={2}
                    pathOpacity={0.15}
                    reverse
                  />
                )}
              </>
            )}

            {/* Center Node - Princeton AI with Logo */}
            <div
              ref={centerRef}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <SystemNode
                image="/logos/logo-header.png"
                label="Princeton AI"
                description="Central orchestration layer managing all services and data flow."
                metrics={[
                  { label: 'Services', value: '8 Active' },
                  { label: 'Health', value: '100%' },
                ]}
                techStack={['Next.js', 'tRPC', 'Prisma']}
                isCenter
                size="xl"
              />
            </div>

            {/* Top Row - Data Layer */}
            <div ref={databaseRef} className="absolute left-[5%] top-[12%]">
              <SystemNode
                icon={<Database className="w-7 h-7" />}
                label="PostgreSQL"
                status="healthy"
                size="lg"
                {...nodes.database}
              />
            </div>

            <div ref={cacheRef} className="absolute left-[28%] top-[5%]">
              <SystemNode
                icon={<HardDrive className="w-7 h-7" />}
                label="Redis Cache"
                status="healthy"
                size="lg"
                {...nodes.cache}
              />
            </div>

            <div ref={aiRef} className="absolute right-[28%] top-[5%]">
              <SystemNode
                icon={<Brain className="w-7 h-7" />}
                label="AI Engine"
                status="healthy"
                size="lg"
                {...nodes.ai}
              />
            </div>

            <div ref={authRef} className="absolute right-[5%] top-[12%]">
              <SystemNode
                icon={<Shield className="w-7 h-7" />}
                label="Auth Service"
                status="healthy"
                size="lg"
                {...nodes.auth}
              />
            </div>

            {/* Bottom Row - Client Layer */}
            <div ref={clientRef} className="absolute left-[5%] bottom-[12%]">
              <SystemNode
                icon={<User className="w-7 h-7" />}
                label="Client App"
                status="healthy"
                size="lg"
                {...nodes.client}
              />
            </div>

            <div ref={cdnRef} className="absolute left-[28%] bottom-[5%]">
              <SystemNode
                icon={<Cloud className="w-7 h-7" />}
                label="Edge CDN"
                status="healthy"
                size="lg"
                {...nodes.cdn}
              />
            </div>

            <div ref={queueRef} className="absolute right-[28%] bottom-[5%]">
              <SystemNode
                icon={<MessageSquare className="w-7 h-7" />}
                label="Message Queue"
                status="healthy"
                size="lg"
                {...nodes.queue}
              />
            </div>

            <div ref={apiRef} className="absolute right-[5%] bottom-[12%]">
              <SystemNode
                icon={<Server className="w-7 h-7" />}
                label="API Gateway"
                status="healthy"
                size="lg"
                {...nodes.api}
              />
            </div>
          </div>
        </FadeInSection>

        {/* Activity Log */}
        <FadeInSection delay={0.3}>
          <ActivityLog className="max-w-4xl mx-auto mt-8" maxEntries={4} />
        </FadeInSection>

        {/* Hover Instruction */}
        <p className="text-center text-zinc-600 text-sm font-mono mt-6">
          Hover over nodes to see service details and live metrics
        </p>
      </div>
    </section>
  );
}

// ============================================
// TECH STACK SECTION - "The Grid"
// ============================================
function TechStackSection() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">
              Technology
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              Modern Primitives
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Production-grade tools for every layer of your stack.
              Hover to see how we use each one.
            </p>
          </div>
        </FadeInSection>

        {/* Tech Stack Grid */}
        <TechStackGrid className="max-w-5xl mx-auto" />
      </div>
    </section>
  );
}

// ============================================
// CAPABILITIES SECTION - "The Dashboard"
// ============================================
function CapabilitiesSection() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">
              Live Metrics
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              Performance You Can See
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We build dashboards that don&apos;t lag. Here&apos;s proof.
            </p>
          </div>
        </FadeInSection>

        {/* Bento Grid Dashboard */}
        <FadeInSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Latency Widget */}
            <LatencyWidget />

            {/* Uptime Widget */}
            <UptimeWidget />

            {/* Security Widget */}
            <SecurityWidget />

            {/* Throughput Widget - Wide */}
            <ThroughputWidget />

            {/* Error Rate Widget */}
            <ErrorRateWidget />

            {/* Global Latency Widget */}
            <GlobalLatencyWidget />

            {/* Data Processed Widget - Wide */}
            <DataProcessedWidget />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// Live Widgets - Multi-color theme
function LatencyWidget() {
  const [latency, setLatency] = useState(24);
  const [history, setHistory] = useState<number[]>(Array(20).fill(24));

  useEffect(() => {
    const interval = setInterval(() => {
      const newLatency = Math.floor(Math.random() * 33) + 12;
      setLatency(newLatency);
      setHistory(prev => [...prev.slice(1), newLatency]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const maxHistory = Math.max(...history, 50);

  return (
    <div className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-brand-primary/50 hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
          API Response Time
        </span>
        <div className="flex items-center gap-2">
          {latency < 30 && <span className="text-xs font-mono text-emerald-400">Fast</span>}
          <Zap className="w-4 h-4 text-brand-primary" />
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-5xl font-bold text-white font-mono tabular-nums group-hover:text-brand-primary transition-colors">
          {latency}
        </span>
        <span className="text-zinc-500 font-mono">ms</span>
      </div>

      {/* Sparkline */}
      <div className="mt-4 flex items-end gap-0.5 h-8">
        {history.map((value, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-gradient-to-t from-brand-primary/60 to-brand-primary rounded-t"
            initial={{ height: 0 }}
            animate={{ height: `${(value / maxHistory) * 100}%` }}
            transition={{ duration: 0.2 }}
            style={{ opacity: 0.3 + (i / history.length) * 0.7 }}
          />
        ))}
      </div>
      <p className="text-xs text-zinc-600 mt-2 font-mono">P99: 45ms • Avg: {Math.round(history.reduce((a, b) => a + b, 0) / history.length)}ms</p>
    </div>
  );
}

function UptimeWidget() {
  const days = Array.from({ length: 50 }, () => Math.random() > 0.01);

  return (
    <div className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-emerald-500/50 hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
            Uptime (50 days)
          </span>
        </div>
        <span className="text-xs font-mono text-emerald-400 font-semibold">99.99%</span>
      </div>
      <div className="flex flex-wrap gap-1">
        {days.map((isUp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: i * 0.01 }}
            className={cn(
              'w-2 h-6 rounded-sm',
              isUp
                ? 'bg-gradient-to-t from-emerald-600 to-emerald-400'
                : 'bg-red-500'
            )}
          />
        ))}
      </div>
      <p className="text-xs text-zinc-600 mt-3 font-mono">Last incident: 47 days ago</p>
    </div>
  );
}

function SecurityWidget() {
  return (
    <div className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
          Security Status
        </span>
        <Shield className="w-4 h-4 text-cyan-400" />
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <motion.div
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 flex items-center justify-center"
            animate={{ boxShadow: ['0 0 0 0 rgba(6,182,212,0)', '0 0 0 8px rgba(6,182,212,0.1)', '0 0 0 0 rgba(6,182,212,0)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Lock className="w-7 h-7 text-cyan-400" />
          </motion.div>
        </div>
        <div className="flex-1">
          <p className="text-white font-semibold mb-2">Protected</p>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 text-[10px] font-mono bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20">
              SOC2
            </span>
            <span className="px-2 py-0.5 text-[10px] font-mono bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20">
              GDPR
            </span>
            <span className="px-2 py-0.5 text-[10px] font-mono bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20">
              E2E
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThroughputWidget() {
  const [data, setData] = useState<number[]>([]);
  const [peak, setPeak] = useState(0);

  useEffect(() => {
    // Initialize with random data
    setData(Array.from({ length: 24 }, () => Math.random() * 80 + 20));

    const interval = setInterval(() => {
      setData((prev) => {
        const newValue = Math.random() * 80 + 20;
        const newData = [...prev.slice(1), newValue];
        setPeak(Math.max(...newData));
        return newData;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm lg:col-span-2 hover:border-cyan-500/30 hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
          Request Throughput (real-time)
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-zinc-600">Peak: {Math.round(peak * 30)}req/s</span>
          <span className="text-sm font-mono text-cyan-400 font-semibold">
            ~2.4k req/s
          </span>
        </div>
      </div>
      <div className="relative flex items-end gap-1 h-28">
        {/* Peak line */}
        <div
          className="absolute left-0 right-0 border-t border-dashed border-amber-500/30"
          style={{ bottom: `${peak}%` }}
        />
        {data.map((value, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t relative overflow-hidden"
            style={{
              background: `linear-gradient(to top, #0891b2, #06b6d4, #0A84FF)`,
            }}
            initial={{ height: 0 }}
            animate={{ height: `${value}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent"
              animate={{ y: ['100%', '-100%'] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ErrorRateWidget() {
  const successRate = 99.99;
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (successRate / 100) * circumference;

  return (
    <div className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-emerald-500/50 hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
          Success Rate
        </span>
        <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">
          Excellent
        </span>
      </div>
      <div className="flex items-center gap-4">
        {/* Ring Chart */}
        <div className="relative w-20 h-20">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Background ring */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#27272a"
              strokeWidth="8"
            />
            {/* Progress ring */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#successGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
            <defs>
              <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-emerald-400 font-mono">99.9%</span>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold text-white font-mono">0.01<span className="text-zinc-500 text-lg">%</span></p>
          <p className="text-xs text-zinc-500 font-mono mt-1">error rate</p>
        </div>
      </div>
    </div>
  );
}

function GlobalLatencyWidget() {
  const locations = [
    { city: 'New York', code: 'US', latency: 12 },
    { city: 'London', code: 'GB', latency: 45 },
    { city: 'Tokyo', code: 'JP', latency: 89 },
    { city: 'Sydney', code: 'AU', latency: 124 },
  ];

  return (
    <div className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-amber-500/30 hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
          Global Latency
        </span>
        <Globe className="w-4 h-4 text-amber-400" />
      </div>
      <div className="space-y-3">
        {locations.map((loc, i) => (
          <div key={loc.city} className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-600 w-6">{loc.code}</span>
            <span className="text-sm text-zinc-400 flex-1">{loc.city}</span>
            <div className="flex items-center gap-2">
              <div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className={cn(
                    'h-full rounded-full',
                    loc.latency < 50 ? 'bg-emerald-400' : loc.latency < 100 ? 'bg-amber-400' : 'bg-orange-400'
                  )}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(loc.latency / 150 * 100, 100)}%` }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                />
              </div>
              <span className={cn(
                'text-sm font-mono font-medium w-12 text-right',
                loc.latency < 50 ? 'text-emerald-400' : loc.latency < 100 ? 'text-amber-400' : 'text-orange-400'
              )}>
                {loc.latency}ms
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DataProcessedWidget() {
  const [dataGB, setDataGB] = useState(847);
  const [requests, setRequests] = useState(12.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataGB(prev => prev + Math.random() * 0.5);
      setRequests(prev => prev + Math.random() * 0.01);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Data Transferred', value: `${dataGB.toFixed(1)}`, unit: 'GB', color: 'text-brand-primary' },
    { label: 'API Requests', value: `${requests.toFixed(1)}`, unit: 'M', color: 'text-cyan-400' },
    { label: 'Cache Hits', value: '98.7', unit: '%', color: 'text-emerald-400' },
    { label: 'Avg Response', value: '24', unit: 'ms', color: 'text-amber-400' },
  ];

  return (
    <div className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm lg:col-span-2 hover:border-brand-primary/30 hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
          Today&apos;s Statistics
        </span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-zinc-600">Live</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-3 rounded-lg bg-zinc-800/50"
          >
            <p className="text-xs font-mono text-zinc-500 mb-1">{stat.label}</p>
            <p className={cn('text-2xl font-bold font-mono', stat.color)}>
              {stat.value}
              <span className="text-sm text-zinc-500 ml-1">{stat.unit}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// PROCESS SECTION - "The Tracing Beam"
// ============================================
// Build step interface for terminal output
interface BuildStep {
  id: string;
  title: string;
  status: 'completed' | 'active' | 'pending';
  duration: string;
  deliverables: string[];
  progress?: number;
}

// Individual build step line component
function BuildStepLine({
  step,
  stepNumber,
  totalSteps,
  isVisible
}: {
  step: BuildStep;
  stepNumber: number;
  totalSteps: number;
  isVisible: boolean;
}) {
  const [showDeliverables, setShowDeliverables] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);

  // Animate progress bar for active step
  useEffect(() => {
    if (step.status === 'active' && isVisible && step.progress) {
      const timer = setTimeout(() => {
        setCurrentProgress(step.progress || 0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [step.status, step.progress, isVisible]);

  // Show deliverables with delay for completed/active steps
  useEffect(() => {
    if (isVisible && (step.status === 'completed' || step.status === 'active')) {
      const timer = setTimeout(() => {
        setShowDeliverables(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, step.status]);

  // Status icon and color
  const getStatusIcon = () => {
    switch (step.status) {
      case 'completed':
        return <Check className="w-4 h-4 text-emerald-400" />;
      case 'active':
        return (
          <motion.div
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Play className="w-3.5 h-3.5 text-brand-primary fill-brand-primary" />
          </motion.div>
        );
      case 'pending':
        return <Circle className="w-3.5 h-3.5 text-zinc-600" />;
    }
  };

  const getStatusColor = () => {
    switch (step.status) {
      case 'completed':
        return 'text-emerald-400';
      case 'active':
        return 'text-brand-primary';
      case 'pending':
        return 'text-zinc-500';
    }
  };

  const getDurationColor = () => {
    switch (step.status) {
      case 'completed':
        return 'text-emerald-400/70';
      case 'active':
        return 'text-cyan-400';
      case 'pending':
        return 'text-zinc-600';
    }
  };

  // Generate dots for alignment
  const titleLength = step.title.length;
  const maxDots = 40;
  const dotsCount = Math.max(maxDots - titleLength - 12, 5);
  const dots = '.'.repeat(dotsCount);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="font-mono"
    >
      {/* Main step line */}
      <div className="flex items-center gap-2 text-base md:text-lg">
        <span className="flex items-center justify-center w-6">
          {getStatusIcon()}
        </span>
        <span className="text-zinc-500">
          [{stepNumber}/{totalSteps}]
        </span>
        <span className={`font-medium ${getStatusColor()}`}>
          {step.title}
        </span>
        <span className="text-zinc-700 hidden sm:inline">
          {dots}
        </span>
        <span className={`ml-auto sm:ml-0 ${getDurationColor()}`}>
          {step.duration}
        </span>
      </div>

      {/* Deliverables */}
      <AnimatePresence>
        {showDeliverables && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="ml-8 mt-2 space-y-1.5"
          >
            {step.deliverables.map((deliverable, idx) => (
              <motion.div
                key={deliverable}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2 text-sm md:text-base"
              >
                <span className={step.status === 'completed' ? 'text-emerald-500/60' : 'text-zinc-600'}>
                  →
                </span>
                <span className={step.status === 'completed' ? 'text-zinc-400' : 'text-zinc-500'}>
                  {deliverable}
                </span>
              </motion.div>
            ))}

            {/* Progress bar for active step */}
            {step.status === 'active' && step.progress && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-3 flex items-center gap-3"
              >
                <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden max-w-[240px]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${currentProgress}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-brand-primary to-cyan-400 rounded-full"
                  />
                </div>
                <span className="text-sm text-cyan-400 font-medium">
                  {currentProgress}%
                </span>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Blinking cursor component
function BlinkingCursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
      className="inline-block w-2.5 h-5 bg-brand-primary ml-1 align-middle"
    />
  );
}

function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [showCommand, setShowCommand] = useState(false);
  const [commandText, setCommandText] = useState('');

  const fullCommand = 'princeton-ai deploy --project=your-mvp --mode=production';

  // Build steps data
  const buildSteps: BuildStep[] = [
    {
      id: 'discovery',
      title: 'Discovery',
      status: 'completed',
      duration: '2 weeks',
      deliverables: [
        'Requirements workshop completed',
        'Stakeholder interviews documented',
        'Technical constraints identified',
        'Output: PRD + Technical Spec',
      ],
    },
    {
      id: 'architecture',
      title: 'Architecture',
      status: 'completed',
      duration: '1 week',
      deliverables: [
        'System design finalized',
        'Tech stack: Next.js, PostgreSQL, AWS',
        'Database schema approved',
        'Output: Architecture Document',
      ],
    },
    {
      id: 'sprints',
      title: 'Sprint Cycles',
      status: 'active',
      duration: 'ongoing',
      progress: 67,
      deliverables: [
        'Sprint 4 of 6 in progress',
        'Weekly demos every Friday',
        'Daily async standups',
        '12 features shipped, 5 remaining',
      ],
    },
    {
      id: 'cicd',
      title: 'CI/CD & Testing',
      status: 'pending',
      duration: '~1 week',
      deliverables: [
        'Automated pipelines',
        'Unit + Integration tests',
        'Security audit',
        'Load testing',
      ],
    },
    {
      id: 'launch',
      title: 'Launch & Handover',
      status: 'pending',
      duration: '~1 week',
      deliverables: [
        'Production deployment',
        'Documentation handoff',
        'Knowledge transfer sessions',
        'Ongoing support setup',
      ],
    },
  ];

  // Intersection observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  // Typing animation for command
  useEffect(() => {
    if (isInView && !showCommand) {
      const timer = setTimeout(() => {
        setShowCommand(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView, showCommand]);

  // Type out command character by character
  useEffect(() => {
    if (showCommand && commandText.length < fullCommand.length) {
      const timer = setTimeout(() => {
        setCommandText(fullCommand.slice(0, commandText.length + 1));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [showCommand, commandText, fullCommand]);

  // Stagger reveal of build steps
  useEffect(() => {
    if (commandText === fullCommand) {
      buildSteps.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSteps(prev => [...prev, index]);
        }, 400 + index * 300);
      });
    }
  }, [commandText, fullCommand]);

  return (
    <section ref={containerRef} className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">
              Methodology
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              From Zero to Production
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A battle-tested process refined over hundreds of successful deployments.
            </p>
          </div>
        </FadeInSection>

        {/* Terminal Window */}
        <FadeInSection delay={0.2}>
          <div className="max-w-4xl mx-auto">
            {/* Terminal Frame */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl shadow-black/50">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-red-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-yellow-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-green-500 transition-colors" />
                </div>
                {/* Terminal title */}
                <div className="flex-1 text-center">
                  <span className="text-xs text-zinc-500 font-mono">
                    princeton-ai — deploy
                  </span>
                </div>
                {/* Spacer for centering */}
                <div className="w-12" />
              </div>

              {/* Terminal Content */}
              <div className="p-6 space-y-6 min-h-[400px]">
                {/* Command Input */}
                <div className="font-mono text-base md:text-lg">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-cyan-400 ml-2">~/projects/client-mvp</span>
                  <span className="text-zinc-500 ml-2">$</span>
                  <span className="text-white ml-2">
                    {commandText}
                    {commandText.length < fullCommand.length && <BlinkingCursor />}
                  </span>
                </div>

                {/* Build Output */}
                {commandText === fullCommand && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-1"
                  >
                    {/* Build header */}
                    <div className="font-mono text-sm text-zinc-600 mb-4">
                      <span className="text-zinc-500">info</span> Starting deployment pipeline...
                    </div>

                    {/* Separator */}
                    <div className="border-t border-zinc-800/50 my-4" />

                    {/* Build steps */}
                    <div className="space-y-4">
                      {buildSteps.map((step, index) => (
                        <BuildStepLine
                          key={step.id}
                          step={step}
                          stepNumber={index + 1}
                          totalSteps={buildSteps.length}
                          isVisible={visibleSteps.includes(index)}
                        />
                      ))}
                    </div>

                    {/* Summary line */}
                    <AnimatePresence>
                      {visibleSteps.length === buildSteps.length && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="mt-6 pt-4 border-t border-zinc-800/50"
                        >
                          <div className="font-mono text-sm flex items-center gap-5 flex-wrap">
                            <div className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                              <span className="text-emerald-400">2 completed</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse" />
                              <span className="text-brand-primary">1 active</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                              <span className="text-zinc-500">2 pending</span>
                            </div>
                          </div>

                          {/* Estimated completion */}
                          <div className="mt-3 font-mono text-sm text-zinc-500">
                            <span className="text-zinc-600">ETA:</span>
                            <span className="text-cyan-400 ml-2">~3 weeks to launch</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Glow effect beneath terminal */}
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// CTA SECTION - "Initialize"
// ============================================
function CTASection() {
  return (
    <section className="relative py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeInSection>
          <span className="text-xs font-mono text-brand-primary uppercase tracking-widest">
            Initialize
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Ready to Compile?
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Let&apos;s architect something extraordinary. Our team is ready to transform
            your vision into production-grade software.
          </p>

          {/* Terminal-style CTA - Blue theme */}
          <Link href="/quote">
            <motion.div
              className="relative inline-block w-full max-w-md px-8 py-4 rounded-xl font-mono text-lg overflow-hidden bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:shadow-brand-lg transition-all duration-500 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span>$</span>
                <span>npm run start-project</span>
              </span>
            </motion.div>
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
}
