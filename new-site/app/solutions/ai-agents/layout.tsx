import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agents for Business | Custom AI Solutions',
  description:
    'Get AI for your business. Custom AI agents that automate customer support, answer questions from your documents, and handle complex tasks 24/7. RAG systems and intelligent assistants built for your needs.',
  keywords: [
    // Commercial intent
    'AI for my business',
    'AI solutions for small business',
    'hire AI developer',
    'custom AI for business',
    'AI customer service',
    'AI assistant for business',
    // Service keywords
    'AI agents',
    'RAG systems',
    'custom chatbots',
    'knowledge base AI',
    'business automation AI',
    'intelligent assistants',
    'LLM integration',
    // Location
    'AI development Princeton NJ',
    'AI developers New Jersey',
  ],
  alternates: {
    canonical: 'https://princeton-ai.com/solutions/ai-agents',
  },
  openGraph: {
    title: 'AI Agents for Business | Custom AI Solutions',
    description: 'Get AI for your business. Custom AI agents that automate tasks 24/7.',
    url: 'https://princeton-ai.com/solutions/ai-agents',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents for Business | Princeton AI Partners',
    description: 'Custom AI agents that automate customer support and business tasks 24/7.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agents Development',
  description:
    'Custom AI agents and RAG systems that understand your business data and automate complex tasks.',
  provider: {
    '@type': 'Organization',
    name: 'Princeton AI Partners',
    url: 'https://princeton-ai.com',
  },
  serviceType: 'AI Development',
  areaServed: 'United States',
  priceRange: '$10,000 - $30,000',
};

export default function AIAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
