'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Brain,
  Bot,
  FileSearch,
  Workflow,
  LineChart,
  Code2,
  Plug,
  Shield,
  Database,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Headphones,
  UserPlus,
  Users,
  Scale,
  Heart,
  Banknote,
} from 'lucide-react';
import { AuroraShaderBackground } from '@/components/ui/aurora-shader-background';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects';
import { AiChatDemo } from '@/components/ui/ai-chat-demo';
import { cn } from '@/lib/utils';

// ============================================
// AGENT TYPES GRID - Glassmorphic Cards
// ============================================
function AgentTypesGrid() {
  const agentTypes = [
    {
      icon: Bot,
      title: 'Conversational Agents',
      desc: 'Chatbots and customer support that understand context and maintain memory across conversations.',
      gradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: FileSearch,
      title: 'Research Agents',
      desc: 'Document search, RAG systems, and knowledge retrieval from your private data.',
      gradient: 'from-violet-500/10 to-purple-500/10',
    },
    {
      icon: Workflow,
      title: 'Automation Agents',
      desc: 'Workflow automation, scheduling, and task execution without human intervention.',
      gradient: 'from-emerald-500/10 to-green-500/10',
    },
    {
      icon: LineChart,
      title: 'Analytics Agents',
      desc: 'Data processing, report generation, and insight extraction from complex datasets.',
      gradient: 'from-amber-500/10 to-orange-500/10',
    },
    {
      icon: Code2,
      title: 'Creative Agents',
      desc: 'Content generation, code writing, and creative problem-solving assistance.',
      gradient: 'from-pink-500/10 to-rose-500/10',
    },
    {
      icon: Plug,
      title: 'Integration Agents',
      desc: 'API connectors and multi-system orchestration that bridge your tools together.',
      gradient: 'from-indigo-500/10 to-blue-500/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {agentTypes.map((agent, idx) => (
        <motion.div
          key={agent.title}
          className={cn(
            'group relative rounded-2xl border border-zinc-800 bg-gradient-to-br p-6 backdrop-blur-sm',
            agent.gradient
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          whileHover={{
            borderColor: 'rgba(10, 132, 255, 0.5)',
            y: -5,
          }}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 transition-colors group-hover:border-brand-primary/50">
              <agent.icon className="h-6 w-6 text-brand-primary" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 font-semibold text-white">{agent.title}</h3>
              <p className="text-sm text-zinc-400">{agent.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ============================================
// TECH STACK LAYERS - Updated Colors
// ============================================
function TechStackLayers() {
  const layers = [
    {
      label: 'Your Interface',
      desc: 'Chat, Voice, API, Dashboard',
      color: 'from-brand-primary/20 to-cyan-500/20',
      borderColor: 'border-brand-primary/30',
      icon: MessageSquare,
    },
    {
      label: 'Agent Orchestration',
      desc: 'Logic, Routing, Memory, Tools',
      color: 'from-blue-500/20 to-brand-primary/20',
      borderColor: 'border-blue-500/30',
      icon: Workflow,
    },
    {
      label: 'AI Models (LLMs)',
      desc: 'GPT-4, Claude, Gemini, Custom',
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30',
      icon: Brain,
    },
    {
      label: 'Knowledge Base',
      desc: 'Your Documents, RAG, Vector DB',
      color: 'from-brand-secondary/20 to-brand-primary/20',
      borderColor: 'border-brand-secondary/30',
      icon: Database,
    },
    {
      label: 'Infrastructure',
      desc: 'Cloud, Security, Monitoring',
      color: 'from-zinc-600/20 to-zinc-700/20',
      borderColor: 'border-zinc-600/30',
      icon: Shield,
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="relative space-y-3">
        {layers.map((layer, idx) => (
          <motion.div
            key={layer.label}
            className={cn(
              'relative rounded-xl border bg-gradient-to-r p-4 backdrop-blur-sm',
              layer.color,
              layer.borderColor
            )}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (layers.length - idx) * 0.1 }}
            whileHover={{
              scale: 1.02,
              x: 10,
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <layer.icon className="h-5 w-5 text-white/80" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-white">{layer.label}</h4>
                <p className="text-sm text-zinc-400">{layer.desc}</p>
              </div>
              <div className="font-mono text-xs text-zinc-500">L{layers.length - idx}</div>
            </div>

            {idx < layers.length - 1 && (
              <motion.div
                className="absolute -bottom-3 left-8 h-3 w-0.5 bg-gradient-to-b from-white/20 to-transparent"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (layers.length - idx) * 0.1 + 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================
// USE CASES SECTION
// ============================================
function UseCasesSection() {
  const useCases = [
    {
      icon: Headphones,
      title: 'Customer Support',
      desc: '24/7 intelligent responses that resolve issues without human intervention',
      stat: '85% resolution rate',
    },
    {
      icon: UserPlus,
      title: 'Sales Assistant',
      desc: 'Lead qualification, follow-ups, and personalized outreach at scale',
      stat: '3x more leads',
    },
    {
      icon: Users,
      title: 'HR Helper',
      desc: 'Policy questions, onboarding automation, and employee self-service',
      stat: '60% fewer tickets',
    },
    {
      icon: Scale,
      title: 'Legal Research',
      desc: 'Case law search, document review, and contract analysis',
      stat: '10x faster research',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      desc: 'Patient info retrieval, appointment scheduling, and triage support',
      stat: 'HIPAA compliant',
    },
    {
      icon: Banknote,
      title: 'Finance',
      desc: 'Report generation, data analysis, and compliance monitoring',
      stat: 'Real-time insights',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {useCases.map((useCase, idx) => (
        <motion.div
          key={useCase.title}
          className="group relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all duration-300 hover:border-brand-primary/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
        >
          <div className="flex items-start gap-3">
            <useCase.icon className="mt-1 h-5 w-5 flex-shrink-0 text-brand-primary" />
            <div>
              <h4 className="font-medium text-white">{useCase.title}</h4>
              <p className="mt-1 text-sm text-zinc-500">{useCase.desc}</p>
              <div className="mt-2 font-mono text-xs text-brand-primary/80">{useCase.stat}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ============================================
// FAQ ACCORDION
// ============================================
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What's the difference between AI agents and chatbots?",
      a: 'Chatbots follow scripts and handle simple Q&A. AI agents can reason, use tools, access your data, make decisions, and take actions autonomously. They remember context across conversations and can handle complex, multi-step tasks.',
    },
    {
      q: 'How do agents learn from my data?',
      a: "We use Retrieval-Augmented Generation (RAG) to connect agents to your documents, databases, and knowledge bases. The agent doesn't memorize your data - it queries it in real-time, ensuring responses are always accurate and up-to-date.",
    },
    {
      q: 'Are AI agents secure for sensitive information?',
      a: 'Absolutely. We deploy agents within your infrastructure, use end-to-end encryption, implement role-based access controls, and maintain complete audit trails. We can meet HIPAA, SOC2, and other compliance requirements.',
    },
    {
      q: 'How long does it take to build a custom agent?',
      a: "Simple agents can be deployed in 2-4 weeks. Complex multi-agent systems with custom integrations typically take 6-12 weeks. We'll give you a detailed timeline after our discovery call.",
    },
    {
      q: 'Can agents integrate with my existing tools?',
      a: 'Yes. We build custom integrations with any system that has an API - CRMs, ERPs, databases, communication tools, and more. Agents can read from and write to your existing software stack.',
    },
    {
      q: "What happens when the agent can't handle a request?",
      a: 'Agents are designed with graceful fallbacks. They can escalate to humans, ask clarifying questions, or acknowledge limitations. You define the escalation rules and approval workflows.',
    },
  ];

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <motion.div
          key={idx}
          className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
        >
          <button
            className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-zinc-900/50"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <span className="pr-4 font-medium text-white">{faq.q}</span>
            <ChevronDown
              className={cn(
                'h-5 w-5 flex-shrink-0 text-zinc-500 transition-transform',
                openIndex === idx && 'rotate-180'
              )}
            />
          </button>
          <motion.div
            initial={false}
            animate={{
              height: openIndex === idx ? 'auto' : 0,
              opacity: openIndex === idx ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-zinc-400">{faq.a}</div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

// ============================================
// HOW AI AGENTS WORK - Placeholder for Flowchart
// ============================================
function HowAgentsWorkSection() {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Placeholder for user-provided flowchart image */}
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
        {/* Placeholder content - replace with Image component when user provides flowchart */}
        <div className="p-8 text-center">
          <div className="mb-8 flex items-center justify-center gap-8">
            {/* Input */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-brand-primary/30 bg-brand-primary/10">
                <span className="text-2xl">📥</span>
              </div>
              <span className="text-sm text-zinc-400">Input</span>
              <span className="text-xs text-zinc-600">Voice, Text, Data</span>
            </motion.div>

            {/* Arrow */}
            <motion.div
              className="text-brand-primary"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ArrowRight className="h-8 w-8" />
            </motion.div>

            {/* Processing */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-brand-primary/50 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 shadow-lg shadow-brand-primary/20">
                <Brain className="h-10 w-10 text-brand-primary" />
              </div>
              <span className="text-sm font-medium text-zinc-300">AI Engine</span>
              <span className="text-xs text-zinc-600">Memory + Tools + Reasoning</span>
            </motion.div>

            {/* Arrow */}
            <motion.div
              className="text-brand-primary"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <ArrowRight className="h-8 w-8" />
            </motion.div>

            {/* Output */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10">
                <span className="text-2xl">✅</span>
              </div>
              <span className="text-sm text-zinc-400">Output</span>
              <span className="text-xs text-zinc-600">Actions, Reports, Replies</span>
            </motion.div>
          </div>

          <p className="mx-auto max-w-lg text-sm text-zinc-500">
            AI agents process inputs through reasoning, access tools and memory, then take
            autonomous actions to achieve your goals.
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function AIAgentsPage() {
  return (
    <main className="relative min-h-screen">
      {/* Global Background Layer */}
      {/* Aurora shader - shooting stars effect, subtle opacity */}
      <AuroraShaderBackground speed={1.0} opacity={0.4} />
      {/* Content wrapper - sits above background layers (z-index: 10) */}
      <div className="relative" style={{ zIndex: 10 }}>
        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <section className="relative flex min-h-screen items-center justify-center pt-20">
          <div className="container mx-auto px-6 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-2"
            >
              <Brain className="h-4 w-4 text-brand-primary" />
              <span className="text-sm font-medium text-brand-primary">AI Agents</span>
            </motion.div>

            {/* Headline with Text Generate Effect */}
            <div className="mx-auto mb-6 max-w-4xl">
              <TextGenerateEffect
                words="Intelligent Software That Works For You"
                className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
              />
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 md:text-xl"
            >
              AI agents are autonomous programs that perceive, reason, and act to accomplish goals.
              They learn, adapt, and make decisions - like having a tireless digital employee.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="#capabilities"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 font-medium text-white transition-colors hover:bg-brand-primary/90"
              >
                Explore Capabilities
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 font-medium text-white transition-colors hover:border-brand-primary/50"
              >
                Build Your Agent
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-zinc-700 p-2"
              >
                <motion.div className="h-2 w-1 rounded-full bg-brand-primary" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 2: WHAT CAN AI AGENTS DO */}
        {/* ============================================ */}
        <section id="capabilities" className="relative py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-4 block font-mono text-sm text-brand-primary"
              >
                CAPABILITIES
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 text-3xl font-bold text-white md:text-4xl"
              >
                What Can AI Agents Do?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mx-auto max-w-2xl text-zinc-400"
              >
                AI agents combine reasoning, memory, and tool use to accomplish complex tasks
                autonomously.
              </motion.p>
            </div>

            <FeaturesSectionWithHoverEffects />
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 3: HOW AI AGENTS WORK */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-4 block font-mono text-sm text-brand-primary"
              >
                ARCHITECTURE
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 text-3xl font-bold text-white md:text-4xl"
              >
                How AI Agents Work
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mx-auto max-w-2xl text-zinc-400"
              >
                Data flows in, gets processed by the AI engine, and actions flow out - all in
                real-time.
              </motion.p>
            </div>

            <AiChatDemo />
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 4: TYPES OF AGENTS */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-4 block font-mono text-sm text-brand-primary"
              >
                AGENT TYPES
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 text-3xl font-bold text-white md:text-4xl"
              >
                Types of AI Agents We Build
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mx-auto max-w-2xl text-zinc-400"
              >
                From simple chatbots to complex multi-agent systems, we build agents for every use
                case.
              </motion.p>
            </div>

            <AgentTypesGrid />
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 5: TECH STACK */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-4 block font-mono text-sm text-brand-primary"
                >
                  TECHNOLOGY
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-4 text-3xl font-bold text-white md:text-4xl"
                >
                  The Agent Stack
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mb-8 text-zinc-400"
                >
                  Every agent is built on a robust, enterprise-grade technology stack. From the
                  infrastructure layer to the user interface, each component is optimized for
                  performance, security, and reliability.
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3 text-sm text-zinc-400"
                >
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                    Multi-model support (GPT-4, Claude, Gemini)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                    Vector databases for semantic search
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                    Real-time streaming responses
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                    Conversation memory and context
                  </li>
                </motion.ul>
              </div>

              <TechStackLayers />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 6: USE CASES */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-4 block font-mono text-sm text-brand-primary"
              >
                USE CASES
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 text-3xl font-bold text-white md:text-4xl"
              >
                AI Agents Across Industries
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mx-auto max-w-2xl text-zinc-400"
              >
                From healthcare to finance, AI agents are transforming how businesses operate.
              </motion.p>
            </div>

            <UseCasesSection />
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 7: FAQ */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto max-w-3xl px-6">
            <div className="mb-16 text-center">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-4 block font-mono text-sm text-brand-primary"
              >
                FAQ
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 text-3xl font-bold text-white md:text-4xl"
              >
                Frequently Asked Questions
              </motion.h2>
            </div>

            <FAQAccordion />
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 8: CTA */}
        {/* ============================================ */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto max-w-4xl rounded-3xl border border-brand-primary/20 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 p-12 text-center"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-brand-primary/5 blur-3xl" />

              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Ready to Build Your AI Agent?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-zinc-400">
                Let&apos;s discuss how AI agents can transform your business operations. Schedule a
                free consultation with our team.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-brand-primary px-8 py-4 font-medium text-white transition-all hover:bg-brand-primary/90 hover:shadow-lg hover:shadow-brand-primary/30"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>{' '}
      {/* Close content wrapper */}
    </main>
  );
}
