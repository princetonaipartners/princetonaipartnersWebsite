import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Services | Website for Your Business',
  description:
    'Get a professional website for your business. Modern web applications built with Next.js, React, and TypeScript. Fast, responsive, SEO-optimized sites that convert visitors into customers.',
  keywords: [
    // Commercial intent
    'website for my business',
    'business website development',
    'hire web developer',
    'professional website design',
    'custom website for small business',
    'ecommerce website development',
    // Service keywords
    'web development services',
    'Next.js development',
    'React applications',
    'custom web apps',
    'SEO optimization',
    'responsive design',
    // Location
    'web developer Princeton NJ',
    'website design New Jersey',
  ],
  alternates: {
    canonical: 'https://princeton-ai.com/solutions/web-development',
  },
  openGraph: {
    title: 'Web Development Services | Website for Your Business',
    description: 'Get a professional website for your business. Fast, responsive, SEO-optimized sites that convert.',
    url: 'https://princeton-ai.com/solutions/web-development',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services | Princeton AI Partners',
    description: 'Professional websites for your business. Fast, responsive, SEO-optimized.',
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
