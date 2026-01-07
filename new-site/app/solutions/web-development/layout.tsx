import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development | Princeton AI Partners',
  description:
    'Modern web applications built with Next.js, React, and TypeScript. Fast, responsive, and optimized for conversion.',
  keywords: [
    'web development',
    'Next.js development',
    'React applications',
    'TypeScript',
    'SEO optimization',
    'responsive design',
    'custom web apps',
  ],
  openGraph: {
    title: 'Web Development | Princeton AI Partners',
    description: 'Modern web applications built with Next.js, React, and TypeScript.',
    url: 'https://princeton-ai.com/solutions/web-development',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Development',
  description:
    'Modern web applications built with Next.js, React, and TypeScript. Fast, responsive, and SEO optimized.',
  provider: {
    '@type': 'Organization',
    name: 'Princeton AI Partners',
    url: 'https://princeton-ai.com',
  },
  serviceType: 'Web Development',
  areaServed: 'United States',
  priceRange: '$3,000 - $25,000',
};

export default function WebDevelopmentLayout({
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
