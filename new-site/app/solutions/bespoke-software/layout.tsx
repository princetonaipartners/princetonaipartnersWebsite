import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bespoke Software | Princeton AI Partners',
  description:
    'Custom software solutions tailored to your business. Full-stack development, integrations, and enterprise applications.',
  keywords: [
    'custom software development',
    'bespoke software',
    'enterprise applications',
    'full-stack development',
    'software integrations',
    'SaaS development',
    'custom business software',
  ],
  openGraph: {
    title: 'Bespoke Software | Princeton AI Partners',
    description: 'Custom software solutions tailored to your business.',
    url: 'https://princeton-ai.com/solutions/bespoke-software',
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
      {children}
    </>
  );
}
