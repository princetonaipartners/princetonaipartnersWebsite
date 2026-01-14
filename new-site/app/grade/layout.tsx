import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Website Grader | Rate Your Website SEO, Speed & Security',
  description:
    'Get an instant, comprehensive analysis of your website. Check SEO, performance, mobile-friendliness, security, accessibility, and UI/UX. Free website audit tool by Princeton AI Partners.',
  keywords: [
    'website grader',
    'SEO checker',
    'website analysis',
    'site audit',
    'website score',
    'SEO audit tool',
    'website performance test',
    'mobile friendly test',
    'security check',
    'accessibility checker',
    'free website audit',
    'website rating',
  ],
  openGraph: {
    title: 'Free Website Grader | Rate Your Website',
    description:
      'Get an instant analysis of your website\'s SEO, performance, security, and more. Find out what\'s working and what needs improvement.',
    url: 'https://princeton-ai.com/grade',
    type: 'website',
    images: [
      {
        url: '/og/website-grader.png',
        width: 1200,
        height: 630,
        alt: 'Princeton AI Website Grader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Website Grader | Rate Your Website',
    description:
      'Get an instant analysis of your website\'s SEO, performance, security, and more.',
  },
  alternates: {
    canonical: 'https://princeton-ai.com/grade',
  },
};

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Princeton AI Website Grader',
  description:
    'Free website analysis tool that checks SEO, performance, security, accessibility, mobile-friendliness, and UI/UX.',
  url: 'https://princeton-ai.com/grade',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  provider: {
    '@type': 'Organization',
    name: 'Princeton AI Partners',
    url: 'https://princeton-ai.com',
  },
  featureList: [
    'SEO Analysis',
    'Performance Testing',
    'Mobile-Friendliness Check',
    'Security Audit',
    'Accessibility Review',
    'UI/UX Evaluation',
  ],
};

export default function GradeLayout({ children }: { children: React.ReactNode }) {
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
