import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Scraping & Data Extraction | Princeton AI Partners',
  description:
    'Enterprise-grade web scraping at scale. Extract data from any website—e-commerce, real estate, job boards. 99% success rate, 1M+ pages per day.',
  keywords: [
    'web scraping',
    'data extraction',
    'automated scraping',
    'competitive intelligence',
    'lead generation scraping',
    'data collection',
    'web crawler',
    'price monitoring',
  ],
  openGraph: {
    title: 'Web Scraping & Data Extraction | Princeton AI Partners',
    description: 'Enterprise-grade web scraping at scale. 99% success rate, 1M+ pages per day.',
    url: 'https://princeton-ai.com/solutions/web-scraping',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Scraping & Data Extraction | Princeton AI Partners',
    description: 'Enterprise-grade web scraping at scale.',
  },
  alternates: {
    canonical: 'https://princeton-ai.com/solutions/web-scraping',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Scraping Services',
  description:
    'Enterprise-grade web scraping and data extraction for competitive intelligence, lead generation, and automated data collection.',
  provider: {
    '@type': 'Organization',
    name: 'Princeton AI Partners',
    url: 'https://princeton-ai.com',
  },
  serviceType: 'Data Extraction',
  areaServed: 'United States',
  priceRange: '$3,000 - $15,000',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is web scraping legal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, scraping publicly available data is generally legal. The 2022 hiQ Labs v. LinkedIn ruling affirmed that scraping public data doesn't violate the CFAA. We always respect robots.txt, terms of service, and avoid private/login-protected data.",
      },
    },
    {
      '@type': 'Question',
      name: 'What websites can you scrape?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Almost any website with public data. We've scraped everything from simple static sites to complex JavaScript SPAs, sites behind rate limiting, and geo-restricted content.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle CAPTCHAs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use a combination of residential proxies, browser fingerprint rotation, and intelligent request patterns to minimize CAPTCHAs. When they do appear, we have automated solving systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can you deliver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For one-time scrapes: typically 1-2 weeks from kickoff to delivery. For recurring scrapes: data can flow within 24-48 hours of initial setup.',
      },
    },
  ],
};

export default function WebScrapingLayout({
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
      {children}
    </>
  );
}
