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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What's the difference between AI agents and chatbots?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chatbots follow scripts and handle simple Q&A. AI agents can reason, use tools, access your data, make decisions, and take actions autonomously. They remember context across conversations and can handle complex, multi-step tasks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do agents learn from my data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We use Retrieval-Augmented Generation (RAG) to connect agents to your documents, databases, and knowledge bases. The agent doesn't memorize your data - it queries it in real-time, ensuring responses are always accurate and up-to-date.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are AI agents secure for sensitive information?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We deploy agents within your infrastructure, use end-to-end encryption, implement role-based access controls, and maintain complete audit trails. We can meet HIPAA, SOC2, and other compliance requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a custom agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Simple agents can be deployed in 2-4 weeks. Complex multi-agent systems with custom integrations typically take 6-12 weeks. We'll give you a detailed timeline after our discovery call.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can agents integrate with my existing tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build custom integrations with any system that has an API - CRMs, ERPs, databases, communication tools, and more. Agents can read from and write to your existing software stack.',
      },
    },
    {
      '@type': 'Question',
      name: "What happens when the agent can't handle a request?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agents are designed with graceful fallbacks. They can escalate to humans, ask clarifying questions, or acknowledge limitations. You define the escalation rules and approval workflows.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://princeton-ai.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Solutions',
      item: 'https://princeton-ai.com/solutions',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'AI Agents',
      item: 'https://princeton-ai.com/solutions/ai-agents',
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
