import type { Metadata } from 'next';
import { QuoteCalculator } from '@/components/quote/QuoteCalculator';

export const metadata: Metadata = {
  title: 'Get a Free Quote | AI & Software Development Pricing',
  description:
    'Get an instant project estimate for your custom software, AI system, or automation project. Free quote in under 2 minutes. No commitment required.',
  keywords: [
    // Commercial intent
    'how much does AI cost for business',
    'custom software development cost',
    'AI development pricing',
    'website development cost',
    'automation project cost',
    // Action keywords
    'get a quote',
    'free project estimate',
    'software development quote',
    'AI project estimate',
    'MVP cost calculator',
    // Service-specific
    'AI agent pricing',
    'chatbot development cost',
    'web scraping service cost',
  ],
  alternates: {
    canonical: 'https://princeton-ai.com/quote',
  },
  openGraph: {
    title: 'Get a Free Quote | AI & Software Development Pricing',
    description:
      'Get an instant project estimate for your custom software, AI system, or automation project. Free quote in under 2 minutes.',
    url: 'https://princeton-ai.com/quote',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get a Free Quote | AI & Software Development Pricing',
    description: 'Instant project estimates for AI, software, and automation. Free quote in under 2 minutes.',
  },
};

// Offer schema for the quote page
const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://princeton-ai.com/quote',
  name: 'Get a Free Project Quote',
  description: 'Interactive quote calculator for AI, software, and automation projects',
  url: 'https://princeton-ai.com/quote',
  mainEntity: {
    '@type': 'Service',
    name: 'Project Quote Calculator',
    provider: {
      '@type': 'Organization',
      name: 'Princeton AI Partners',
      url: 'https://princeton-ai.com',
    },
    description: 'Get instant pricing estimates for custom AI agents, websites, automation, and software development projects',
    offers: [
      {
        '@type': 'Offer',
        name: 'Web Development',
        description: 'Custom websites and web applications',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 3000,
          maxPrice: 25000,
        },
      },
      {
        '@type': 'Offer',
        name: 'AI Agents',
        description: 'Custom AI agents and RAG systems',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 10000,
          maxPrice: 30000,
        },
      },
      {
        '@type': 'Offer',
        name: 'AI Phone Systems',
        description: 'AI-powered phone agents and voice systems',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 5000,
          maxPrice: 15000,
        },
      },
      {
        '@type': 'Offer',
        name: 'Process Automation',
        description: 'Business process automation and integrations',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 5000,
          maxPrice: 20000,
        },
      },
      {
        '@type': 'Offer',
        name: 'Custom Software',
        description: 'Bespoke software applications',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: 50000,
          maxPrice: 250000,
        },
      },
    ],
  },
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
      name: 'Get a Quote',
      item: 'https://princeton-ai.com/quote',
    },
  ],
};

export default function QuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-surface-primary dark:bg-dark-bg-primary">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <QuoteCalculator />
        </div>
      </main>
    </>
  );
}
