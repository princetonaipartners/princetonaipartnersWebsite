'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Clock,
  Users,
  ArrowRight,
  Check,
  ChevronDown,
  Headphones,
  ShoppingCart,
  GitBranch,
  Bell,
  Calendar,
  Globe,
  Zap,
  Shield,
  Languages,
  Sparkles,
  CreditCard,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { NeuralGridBackground } from '@/components/ui/neural-grid-background';
import { FadeInSection } from '@/components/animations/FadeInSection';
import * as Accordion from '@radix-ui/react-accordion';
import * as Tabs from '@radix-ui/react-tabs';

// Platform brand colors
const platformColors = {
  telegram: '#0088CC',
  whatsapp: '#25D366',
  discord: '#5865F2',
  slack: '#4A154B',
};

export default function CustomBotsPage() {
  return (
    <div className="dark min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Neural Grid Background */}
      <NeuralGridBackground pulseColor="#0A84FF" gridColor="rgba(10, 132, 255, 0.08)" />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <PlatformTabs />
        <BotExamplesTimeline />
        <CapabilitiesSection />
        <IntegrationsSection />
        <SolutionTiersSection />
        <FAQSection />
        <CTASection />
      </div>
    </div>
  );
}

// ============================================
// HERO SECTION WITH ORBITING PLATFORMS
// ============================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <FadeInSection>
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-mono text-blue-300">CUSTOM BOTS</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                <span className="text-white">Meet Your Customers</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                  Where They Already Are
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8">
                Custom bots for Telegram, WhatsApp, Discord, and Slack. Automate conversations,
                process payments, send notifications, and engage users—all inside{' '}
                <span className="text-white font-semibold">their favorite messaging apps</span>.
              </p>

              {/* Trust Points */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span>4 Platforms</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>&lt; 3 Weeks to Launch</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>&infin; Concurrent Users</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#bot-examples"
                  className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    See Bot Examples
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <Link
                  href="/quote"
                  className="px-6 py-3 border border-zinc-700 rounded-lg font-mono text-sm text-zinc-400 hover:border-blue-500/50 hover:text-zinc-200 transition-all duration-300"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </FadeInSection>

          {/* Right: Orbiting Platforms */}
          <FadeInSection delay={0.2}>
            <PlatformOrbits />
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PLATFORM ORBITS COMPONENT
// ============================================
function PlatformOrbits() {
  return (
    <div className="relative flex items-center justify-center h-[400px] md:h-[500px]">
      {/* Center Princeton AI Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute z-20 flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-zinc-900 border border-zinc-700 shadow-2xl shadow-blue-500/20"
      >
        <Image
          src="/logos/logo-header.png"
          alt="Princeton AI"
          width={48}
          height={48}
          className="w-12 h-12 md:w-14 md:h-14"
        />
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full animate-ping bg-blue-500/20" />
      </motion.div>

      {/* Inner Orbit Path */}
      <svg className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          fill="none"
          stroke="rgba(10, 132, 255, 0.2)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Outer Orbit Path */}
      <svg className="absolute w-[380px] h-[380px] md:w-[440px] md:h-[440px]">
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          fill="none"
          stroke="rgba(10, 132, 255, 0.15)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Telegram - Inner orbit */}
      <OrbitingPlatform
        name="Telegram"
        color={platformColors.telegram}
        radius={140}
        duration={20}
        delay={0}
        icon={<TelegramIcon />}
      />

      {/* WhatsApp - Inner orbit */}
      <OrbitingPlatform
        name="WhatsApp"
        color={platformColors.whatsapp}
        radius={140}
        duration={20}
        delay={5}
        icon={<WhatsAppIcon />}
      />

      {/* Discord - Outer orbit */}
      <OrbitingPlatform
        name="Discord"
        color={platformColors.discord}
        radius={190}
        duration={30}
        delay={0}
        reverse
        icon={<DiscordIcon />}
      />

      {/* Slack - Outer orbit */}
      <OrbitingPlatform
        name="Slack"
        color={platformColors.slack}
        radius={190}
        duration={30}
        delay={15}
        reverse
        icon={<SlackIcon />}
      />
    </div>
  );
}

interface OrbitingPlatformProps {
  name: string;
  color: string;
  radius: number;
  duration: number;
  delay: number;
  reverse?: boolean;
  icon: React.ReactNode;
}

function OrbitingPlatform({ name, color, radius, duration, delay, reverse, icon }: OrbitingPlatformProps) {
  return (
    <div
      className="absolute w-full h-full"
      style={{
        animation: `orbit ${duration}s linear infinite ${reverse ? 'reverse' : ''}`,
        animationDelay: `-${delay}s`,
      }}
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          transform: `translateX(${radius}px) translateY(-50%)`,
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay * 0.1 }}
          className="group relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl border bg-zinc-900/90 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110"
          style={{
            borderColor: `${color}50`,
            boxShadow: `0 0 20px ${color}30`,
            animation: `counter-orbit ${duration}s linear infinite ${reverse ? 'reverse' : ''}`,
            animationDelay: `-${delay}s`,
          }}
        >
          <div style={{ color }}>{icon}</div>

          {/* Tooltip */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="whitespace-nowrap text-xs font-mono px-2 py-1 rounded bg-zinc-800 border border-zinc-700">
              {name}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ============================================
// PLATFORM TABS SECTION
// ============================================
const platformData = {
  telegram: {
    name: 'Telegram',
    users: '700M+',
    color: platformColors.telegram,
    bestFor: 'Power users, crypto communities, tech teams',
    features: ['Inline keyboards & buttons', 'Native payments', 'File sharing up to 2GB', 'Channel broadcasts'],
    description: 'Perfect for tech-savvy audiences. Build bots with rich interactions, inline queries, and seamless payment processing.',
  },
  whatsapp: {
    name: 'WhatsApp',
    users: '2B+',
    color: platformColors.whatsapp,
    bestFor: 'Local businesses, customer support, sales',
    features: ['Business API access', 'Product catalogs', 'Quick reply templates', 'Media messages'],
    description: 'Reach customers on the world\'s most popular messaging app. Ideal for support, orders, and appointment booking.',
  },
  discord: {
    name: 'Discord',
    users: '150M+',
    color: platformColors.discord,
    bestFor: 'Communities, gaming, creator teams',
    features: ['Slash commands', 'Rich embeds', 'Role management', 'Voice channel integration'],
    description: 'Build engaged communities with moderation, welcome flows, polls, and gamification features.',
  },
  slack: {
    name: 'Slack',
    users: '20M+',
    color: platformColors.slack,
    bestFor: 'Internal teams, B2B workflows',
    features: ['Workflow builder', 'App directory listing', 'Thread replies', 'Channel management'],
    description: 'Automate internal processes—approvals, notifications, reports—right where your team already works.',
  },
};

function PlatformTabs() {
  const [activeTab, setActiveTab] = useState('telegram');

  return (
    <section className="relative py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              Platforms
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              One Bot, Four Platforms
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Each platform has unique strengths. We help you choose the right one for your audience.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
            {/* Tab triggers */}
            <Tabs.List className="flex justify-center gap-2 mb-8 flex-wrap">
              {Object.entries(platformData).map(([key, platform]) => (
                <Tabs.Trigger
                  key={key}
                  value={key}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-sm transition-all duration-300',
                    activeTab === key
                      ? 'text-white shadow-lg'
                      : 'bg-zinc-800/50 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                  )}
                  style={{
                    backgroundColor: activeTab === key ? platform.color : undefined,
                  }}
                >
                  {key === 'telegram' && <TelegramIcon className="w-4 h-4" />}
                  {key === 'whatsapp' && <WhatsAppIcon className="w-4 h-4" />}
                  {key === 'discord' && <DiscordIcon className="w-4 h-4" />}
                  {key === 'slack' && <SlackIcon className="w-4 h-4" />}
                  {platform.name}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {/* Tab content */}
            {Object.entries(platformData).map(([key, platform]) => (
              <Tabs.Content key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 md:p-8"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Info */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: `${platform.color}20` }}
                        >
                          {key === 'telegram' && <TelegramIcon className="w-6 h-6" style={{ color: platform.color }} />}
                          {key === 'whatsapp' && <WhatsAppIcon className="w-6 h-6" style={{ color: platform.color }} />}
                          {key === 'discord' && <DiscordIcon className="w-6 h-6" style={{ color: platform.color }} />}
                          {key === 'slack' && <SlackIcon className="w-6 h-6" style={{ color: platform.color }} />}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{platform.name}</h3>
                          <p className="text-sm text-zinc-500">{platform.users} active users</p>
                        </div>
                      </div>

                      <p className="text-zinc-400 mb-4">{platform.description}</p>

                      <div className="text-sm">
                        <span className="text-zinc-500">Best for: </span>
                        <span className="text-zinc-300">{platform.bestFor}</span>
                      </div>
                    </div>

                    {/* Right: Features */}
                    <div>
                      <h4 className="text-sm font-mono text-zinc-500 uppercase mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {platform.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                            <Check className="w-4 h-4 flex-shrink-0" style={{ color: platform.color }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// BOT EXAMPLES TIMELINE
// ============================================
const botExamples = [
  {
    icon: Headphones,
    platform: 'Telegram',
    platformColor: platformColors.telegram,
    title: 'Support Bot',
    description: 'Answers FAQs, creates support tickets, escalates to human agents when needed.',
  },
  {
    icon: ShoppingCart,
    platform: 'WhatsApp',
    platformColor: platformColors.whatsapp,
    title: 'Order Bot',
    description: 'Browse menu, place orders, track delivery status, process Stripe payments.',
  },
  {
    icon: Users,
    platform: 'Discord',
    platformColor: platformColors.discord,
    title: 'Community Bot',
    description: 'Welcome new members, moderate content, run polls, track engagement metrics.',
  },
  {
    icon: GitBranch,
    platform: 'Slack',
    platformColor: platformColors.slack,
    title: 'Workflow Bot',
    description: 'Approve expenses, schedule meetings, generate reports, manage approvals.',
  },
  {
    icon: Bell,
    platform: 'Telegram',
    platformColor: platformColors.telegram,
    title: 'Notification Bot',
    description: 'Automated alerts for inventory levels, shipment updates, payment confirmations.',
  },
  {
    icon: Calendar,
    platform: 'WhatsApp',
    platformColor: platformColors.whatsapp,
    title: 'Appointment Bot',
    description: 'Check availability, book appointments, send reminders, handle rescheduling.',
  },
];

function BotExamplesTimeline() {
  return (
    <section id="bot-examples" className="relative py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              Examples
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Bots We&apos;ve Built
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Real examples from real clients. Each bot is custom-built for specific business needs.
            </p>
          </div>
        </FadeInSection>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />

          {/* Timeline items */}
          <div className="space-y-8">
            {botExamples.map((bot, index) => {
              const Icon = bot.icon;
              const isLeft = index % 2 === 0;

              return (
                <FadeInSection key={bot.title} delay={index * 0.1}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={cn(
                      'relative flex items-start gap-4',
                      'md:grid md:grid-cols-2 md:gap-8'
                    )}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 bg-zinc-900 -translate-x-1/2 z-10"
                      style={{ borderColor: bot.platformColor }}
                    />

                    {/* Content - alternates sides on desktop */}
                    <div
                      className={cn(
                        'ml-16 md:ml-0',
                        isLeft ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'
                      )}
                    >
                      <div
                        className={cn(
                          'p-4 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-blue-500/30 transition-colors',
                          isLeft ? 'md:ml-auto md:mr-0' : ''
                        )}
                        style={{ maxWidth: '360px' }}
                      >
                        <div className={cn('flex items-center gap-3 mb-2', isLeft && 'md:flex-row-reverse')}>
                          <div
                            className="p-2 rounded-lg"
                            style={{ backgroundColor: `${bot.platformColor}20` }}
                          >
                            <Icon className="w-5 h-5" style={{ color: bot.platformColor }} />
                          </div>
                          <div className={isLeft ? 'md:text-right' : ''}>
                            <h3 className="text-white font-semibold">{bot.title}</h3>
                            <span
                              className="text-xs font-mono"
                              style={{ color: bot.platformColor }}
                            >
                              {bot.platform}
                            </span>
                          </div>
                        </div>
                        <p className={cn('text-sm text-zinc-400', isLeft && 'md:text-right')}>
                          {bot.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CAPABILITIES SECTION (Icon + Text Rows)
// ============================================
const capabilities = [
  { icon: Globe, title: 'Multi-Platform Support', description: 'Build once, deploy to all 4 platforms with unified management' },
  { icon: Users, title: 'Infinite Scale', description: 'Handle 1000+ concurrent users without slowdown' },
  { icon: Zap, title: 'Instant Responses', description: 'Sub-second response times, always available 24/7' },
  { icon: CreditCard, title: 'E-commerce Ready', description: 'Payments, catalogs, order tracking built-in' },
  { icon: Bell, title: 'Smart Notifications', description: 'Triggered alerts based on events and conditions' },
  { icon: Shield, title: 'Secure & Private', description: 'End-to-end encryption, GDPR compliant' },
  { icon: Languages, title: 'Multi-Language', description: 'Support customers in any language automatically' },
  { icon: Sparkles, title: 'AI-Powered', description: 'GPT-4 integration for natural conversations' },
];

function CapabilitiesSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Enterprise Bot Features
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{cap.title}</h3>
                    <p className="text-sm text-zinc-500">{cap.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// INTEGRATIONS SECTION
// ============================================
const integrations = [
  { name: 'Stripe', description: 'Payments' },
  { name: 'Shopify', description: 'E-commerce' },
  { name: 'Google Calendar', description: 'Scheduling' },
  { name: 'Notion', description: 'Databases' },
  { name: 'Airtable', description: 'Data' },
  { name: 'Zapier', description: 'Automation' },
  { name: 'Custom APIs', description: 'Your systems' },
];

function IntegrationsSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              Integrations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Connects to Your Stack
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Your bot can talk to any system with an API.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg hover:border-blue-500/30 transition-colors"
              >
                <span className="text-white font-medium">{integration.name}</span>
                <span className="text-xs text-zinc-500">{integration.description}</span>
              </motion.div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// SOLUTION TIERS SECTION
// ============================================
const solutionTiers = [
  {
    name: 'Starter Bot',
    description: 'Single platform, basic commands for getting started',
    features: [
      'One platform (your choice)',
      'Up to 10 commands',
      'Basic integrations',
      'Email support',
      '30-day warranty',
    ],
    highlighted: false,
  },
  {
    name: 'Growth Bot',
    description: 'Multi-platform with AI-powered conversations',
    features: [
      'Up to 3 platforms',
      'Unlimited commands',
      'AI-powered responses',
      'Payment processing',
      'Priority support',
      '90-day warranty',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Custom development with dedicated support',
    features: [
      'All 4 platforms',
      'Custom development',
      'Advanced AI features',
      'Dedicated support',
      'SLA guarantee',
      'Ongoing maintenance',
      'White-label option',
    ],
    highlighted: false,
  },
];

function SolutionTiersSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              From simple bots to enterprise deployments. We&apos;ll provide a custom quote based on your needs.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6">
            {solutionTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'relative p-6 rounded-xl border transition-all duration-300',
                  tier.highlighted
                    ? 'bg-gradient-to-b from-blue-500/10 to-transparent border-blue-500/50'
                    : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 text-xs font-mono text-white rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                <p className="text-sm text-zinc-400 mb-6">{tier.description}</p>

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/quote"
                  className={cn(
                    'mt-6 block w-full py-3 rounded-lg font-medium text-center transition-all duration-300',
                    tier.highlighted
                      ? 'bg-blue-500 text-white hover:bg-blue-500/90'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                  )}
                >
                  Get a Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// FAQ SECTION
// ============================================
const faqs = [
  {
    question: 'Which platform should I choose?',
    answer:
      'It depends on your audience. Telegram is great for tech-savvy users and crypto communities. WhatsApp is ideal for local businesses and customer support. Discord works best for communities and gaming. Slack is perfect for internal team workflows. We can help you decide during our discovery call.',
  },
  {
    question: 'Can one bot work on multiple platforms?',
    answer:
      'Yes! We can build a unified bot that works across multiple platforms with a single codebase. Your customers get a consistent experience whether they\'re on Telegram, WhatsApp, Discord, or Slack.',
  },
  {
    question: 'How do you handle payments?',
    answer:
      'We integrate with Stripe, which supports payments in 135+ currencies. For Telegram, we also support their native payment system. The bot can process one-time payments, subscriptions, and even tip jars.',
  },
  {
    question: 'What about message limits?',
    answer:
      'Each platform has different rate limits. We architect your bot to stay well within these limits while maximizing throughput. For high-volume use cases, we implement queuing and smart batching.',
  },
  {
    question: 'How long does development take?',
    answer:
      'Most bots launch within 2-3 weeks. Simple bots (FAQ, notifications) can be ready in 1 week. Complex bots with AI, payments, and multiple integrations may take 4-6 weeks.',
  },
  {
    question: 'Can you integrate with my existing systems?',
    answer:
      'Absolutely. If your system has an API, we can connect to it. We\'ve integrated with CRMs, ERPs, custom databases, and hundreds of SaaS tools. We can also build custom APIs if needed.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes. All plans include a warranty period for bug fixes. We also offer ongoing maintenance packages that include monitoring, updates, and feature additions. Many clients choose our CTO Suite for comprehensive support.',
  },
];

function FAQSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Common Questions
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`faq-${index}`}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden"
              >
                <Accordion.Trigger className="flex items-center justify-between w-full p-4 text-left text-white hover:text-blue-400 transition-colors group">
                  <span className="font-medium pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-zinc-500 group-data-[state=open]:rotate-180 transition-transform" />
                </Accordion.Trigger>
                <Accordion.Content className="px-4 pb-4">
                  <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// CTA SECTION
// ============================================
function CTASection() {
  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Your Bot?
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Tell us what you want your bot to do. We&apos;ll show you how to make it happen.
          </p>

          <Link href="/quote">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl font-semibold text-lg text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Let&apos;s Build
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>

          <p className="text-sm text-zinc-500 mt-4">
            No commitment required. Response within 24 hours.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// PLATFORM ICONS
// ============================================
function TelegramIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={cn('w-6 h-6 fill-current', className)} style={style}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function WhatsAppIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={cn('w-6 h-6 fill-current', className)} style={style}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function DiscordIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={cn('w-6 h-6 fill-current', className)} style={style}>
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
  );
}

function SlackIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={cn('w-6 h-6 fill-current', className)} style={style}>
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}
