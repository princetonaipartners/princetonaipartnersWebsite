import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Software Development | Software for Your Business',
  description:
    'Custom software built specifically for your business. Full-stack development, enterprise applications, SaaS products, and system integrations from scratch.',
  keywords: [
    // Commercial intent
    'custom software for my business',
    'hire software developers',
    'build custom software',
    'software development company',
    'enterprise software development',
    // Service keywords
    'custom software development',
    'bespoke software',
    'full-stack development',
    'SaaS development',
    'enterprise applications',
    'custom business software',
    'software integrations',
    // Location
    'software development Princeton NJ',
    'custom software New Jersey',
  ],
  alternates: {
    canonical: 'https://princeton-ai.com/solutions/bespoke-software',
  },
  openGraph: {
    title: 'Custom Software Development | Software for Your Business',
    description: 'Custom software built specifically for your business. Enterprise applications and SaaS products.',
    url: 'https://princeton-ai.com/solutions/bespoke-software',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development | Princeton AI Partners',
    description: 'Custom software built specifically for your business needs.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bespoke Software Development',
  description:
    'Custom software solutions tailored to your business needs. Full-stack development, integrations, and enterprise applications.',
  provider: {
    '@type': 'Organization',
    name: 'Princeton AI Partners',
    url: 'https://princeton-ai.com',
  },
  serviceType: 'Custom Software Development',
  areaServed: 'United States',
  priceRange: '$50,000 - $250,000+',
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
      name: 'Bespoke Software',
      item: 'https://princeton-ai.com/solutions/bespoke-software',
    },
  ],
};

export default function BespokeSoftwareLayout({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
