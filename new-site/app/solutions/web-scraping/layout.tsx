import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Scraping | Princeton AI Partners',
  description:
    'Enterprise-grade web scraping and data extraction. Competitive intelligence, lead generation, and automated data collection.',
  keywords: [
    'web scraping',
    'data extraction',
    'automated scraping',
    'competitive intelligence',
    'lead generation scraping',
    'data collection',
    'web crawler',
  ],
  openGraph: {
    title: 'Web Scraping | Princeton AI Partners',
    description: 'Enterprise-grade web scraping and data extraction.',
    url: 'https://princeton-ai.com/solutions/web-scraping',
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
      {children}
    </>
  );
}
