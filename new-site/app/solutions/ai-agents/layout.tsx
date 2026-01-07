import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agents | Princeton AI Partners',
  description:
    'Custom AI agents that automate complex business tasks. RAG systems, workflow automation, and intelligent assistants built for your specific needs.',
  keywords: [
    'AI agents',
    'RAG systems',
    'custom chatbots',
    'knowledge base AI',
    'business automation AI',
    'intelligent assistants',
    'LLM integration',
  ],
  openGraph: {
    title: 'AI Agents | Princeton AI Partners',
    description: 'Custom AI agents that automate complex business tasks.',
    url: 'https://princeton-ai.com/solutions/ai-agents',
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
