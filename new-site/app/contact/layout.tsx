import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Free Consultation',
  description:
    'Get in touch with Princeton AI Partners. Schedule a free consultation for custom AI agents, software development, automation, or website projects. Response within 24 hours.',
  keywords: [
    // Commercial intent
    'hire AI developers',
    'contact software developers',
    'AI development consultation',
    'custom software consultation',
    'website development inquiry',
    // Action keywords
    'schedule consultation',
    'free consultation',
    'get in touch',
    'contact us',
    // Location
    'AI developers Princeton NJ',
    'software developers New Jersey',
  ],
  alternates: {
    canonical: 'https://princeton-ai.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Free Consultation | Princeton AI Partners',
    description: 'Schedule a free consultation for custom AI agents, software development, or automation projects. Response within 24 hours.',
    url: 'https://princeton-ai.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Free Consultation | Princeton AI Partners',
    description: 'Schedule a free consultation for AI, software, or automation projects.',
  },
};

// ContactPage schema
const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://princeton-ai.com/contact',
  name: 'Contact Princeton AI Partners',
  description: 'Get in touch for custom AI development, software development, and automation projects',
  url: 'https://princeton-ai.com/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'Princeton AI Partners',
    url: 'https://princeton-ai.com',
    email: 'support@princetonaipartners.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Princeton',
      addressRegion: 'NJ',
      postalCode: '08540',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'support@princetonaipartners.com',
      availableLanguage: 'English',
      areaServed: 'US',
    },
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
      name: 'Contact',
      item: 'https://princeton-ai.com/contact',
    },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
