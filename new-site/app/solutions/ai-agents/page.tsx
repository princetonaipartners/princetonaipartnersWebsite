'use client';

import { SolutionPageLayout } from '@/components/layout/SolutionPageLayout';
import { SolutionHero } from '@/components/solutions/SolutionHero';
import { FeaturesGrid } from '@/components/solutions/FeaturesGrid';
import { HowItWorks } from '@/components/solutions/HowItWorks';
import { RAGChatDemo } from '@/components/solutions/ai-agents/RAGChatDemo';
import { ROICalculator } from '@/components/solutions/ai-agents/ROICalculator';
import { Brain, Database, Target, Zap, Shield, FileSearch, MessageSquare, TrendingUp } from 'lucide-react';

export default function AIAgentsPage() {
  const features = [
    {
      icon: Target,
      title: '98.7% Accuracy',
      description: 'RAG agents search your actual documents before answering, eliminating hallucinations and ensuring accurate responses every time.',
    },
    {
      icon: FileSearch,
      title: 'Source Citations',
      description: 'Every answer includes exact source documents, so you can verify information and maintain compliance.',
    },
    {
      icon: Zap,
      title: 'Instant Answers',
      description: 'Average response time of 2.3 seconds. Your team and customers get answers immediately, 24/7.',
    },
    {
      icon: Database,
      title: 'Any Data Source',
      description: 'Supports PDFs, Word docs, spreadsheets, databases, APIs, and more. If you have data, we can index it.',
    },
    {
      icon: Shield,
      title: 'Private & Secure',
      description: 'Your data never trains public models. Hosted on your infrastructure or ours with enterprise-grade security.',
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel',
      description: 'Deploy to your website, Slack, Teams, WhatsApp, or custom apps. One agent, everywhere.',
    },
    {
      icon: Brain,
      title: 'Continuous Learning',
      description: 'Automatically updates as you add new documents. Always current, never outdated.',
    },
    {
      icon: TrendingUp,
      title: 'Analytics Dashboard',
      description: 'Track questions, identify gaps in your documentation, and see what your customers actually need.',
    },
  ];

  const steps = [
    {
      icon: Database,
      title: 'Document Collection',
      description: 'Gather your documentation, FAQs, policies, product specs, and any other knowledge you want the agent to know.',
    },
    {
      icon: Brain,
      title: 'Indexing & Embedding',
      description: 'We convert your documents into vector embeddings and store them in a searchable database (Pinecone, Supabase, or your choice).',
    },
    {
      icon: Zap,
      title: 'Integration & Testing',
      description: 'Deploy the RAG agent to your website, app, or communication platform. Test with real questions and refine responses.',
    },
    {
      icon: TrendingUp,
      title: 'Monitor & Optimize',
      description: 'Track usage, accuracy, and user satisfaction. Continuously improve the knowledge base based on real questions.',
    },
  ];

  return (
    <SolutionPageLayout
      ctaTitle="Ready to Build Your AI Agent?"
      ctaDescription="Stop losing customers to unanswered questions. Deploy a RAG agent in 2 weeks."
      ctaBadge="Let's Build"
    >
      {/* Hero with Live Demo */}
      <SolutionHero
        badge="AI Agents (RAG)"
        title={
          <span className="text-text-primary dark:text-dark-text-primary">
            AI That{' '}
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
              Knows Your Business
            </span>
            {' '}Inside Out
          </span>
        }
        subtitle="Retrieval Augmented Generation (RAG) agents answer customer questions using YOUR documentation—not generic AI knowledge. 98.7% accuracy. Instant answers. Always cites sources."
        primaryCTA={{ text: 'Try Live Demo', href: '#demo' }}
        secondaryCTA={{ text: 'Calculate ROI', href: '#roi' }}
        demo={
          <div id="demo">
            <RAGChatDemo />
          </div>
        }
        stats={[
          { value: '98.7%', label: 'Accuracy Rate' },
          { value: '2.3s', label: 'Avg Response' },
          { value: '$23/mo', label: 'Cost (10k queries)' },
        ]}
        background="gradient"
      />

      {/* Why RAG vs ChatGPT */}
      <section className="py-24 bg-white dark:bg-dark-bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              RAG vs Generic ChatGPT
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              Why businesses choose RAG agents over generic AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Generic ChatGPT */}
            <div className="bg-red-50 dark:bg-red-900/10 rounded-2xl p-8 border-2 border-red-200 dark:border-red-800">
              <h3 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-6">
                ❌ Generic ChatGPT
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🤷</span>
                  <div>
                    <p className="font-semibold text-red-900 dark:text-red-100">Hallucinates</p>
                    <p className="text-sm text-red-700 dark:text-red-300">Makes up answers when it doesn't know</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">❓</span>
                  <div>
                    <p className="font-semibold text-red-900 dark:text-red-100">No Sources</p>
                    <p className="text-sm text-red-700 dark:text-red-300">Can't verify where information came from</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📆</span>
                  <div>
                    <p className="font-semibold text-red-900 dark:text-red-100">Outdated</p>
                    <p className="text-sm text-red-700 dark:text-red-300">Doesn't know your latest products or policies</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <p className="font-semibold text-red-900 dark:text-red-100">Generic</p>
                    <p className="text-sm text-red-700 dark:text-red-300">Knows about competitors as well as you</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* RAG Agent */}
            <div className="bg-green-50 dark:bg-green-900/10 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-6">
                ✅ RAG Agent
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-100">98.7% Accurate</p>
                    <p className="text-sm text-green-700 dark:text-green-300">Searches YOUR docs before answering</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-100">Cites Sources</p>
                    <p className="text-sm text-green-700 dark:text-green-300">Every answer links to exact document</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-100">Always Current</p>
                    <p className="text-sm text-green-700 dark:text-green-300">Updates instantly when you add new docs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🏢</span>
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-100">Your Brand Only</p>
                    <p className="text-sm text-green-700 dark:text-green-300">Trained exclusively on your business</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesGrid
        title="Why Businesses Choose RAG"
        subtitle="Purpose-built for accuracy, speed, and trust"
        features={features}
      />

      {/* How It Works */}
      <HowItWorks
        title="How We Build Your RAG Agent"
        subtitle="From documents to deployed agent in 2 weeks"
        steps={steps}
      />

      {/* ROI Calculator */}
      <div id="roi">
        <ROICalculator />
      </div>

      {/* Use Cases */}
      <section className="py-24 bg-neutral-50 dark:bg-dark-bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              Common Use Cases
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              How businesses use RAG agents to save time and improve customer experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Customer Support',
                description: 'Answer product questions, troubleshooting, and policies 24/7 without human agents.',
                example: '"How do I reset my password?" → Instant answer with step-by-step guide.',
              },
              {
                title: 'Sales Enablement',
                description: 'Help sales teams find pricing, case studies, and competitive intelligence instantly.',
                example: '"What features differentiate us from Competitor X?" → Comparison table with sources.',
              },
              {
                title: 'HR & Onboarding',
                description: 'New employees get instant answers about benefits, policies, and procedures.',
                example: '"How many vacation days do I get?" → Answer from employee handbook.',
              },
              {
                title: 'Legal & Compliance',
                description: 'Search contracts, regulations, and legal precedents with citations.',
                example: '"What are the GDPR requirements for data retention?" → Exact regulation with source.',
              },
              {
                title: 'Technical Documentation',
                description: 'Engineers find API docs, architecture decisions, and troubleshooting guides.',
                example: '"How do I authenticate with the API?" → Code example with link to docs.',
              },
              {
                title: 'E-commerce',
                description: 'Product recommendations, sizing guides, and inventory questions answered instantly.',
                example: '"Do you have this in size medium?" → Real-time inventory check with link to product.',
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-bg-secondary rounded-2xl p-6 border border-neutral-200 dark:border-dark-border hover:border-brand-primary hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-3">
                  {useCase.title}
                </h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-4">
                  {useCase.description}
                </p>
                <div className="p-3 rounded-lg bg-neutral-50 dark:bg-dark-bg-primary border border-neutral-200 dark:border-dark-border">
                  <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary italic">
                    {useCase.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SolutionPageLayout>
  );
}
