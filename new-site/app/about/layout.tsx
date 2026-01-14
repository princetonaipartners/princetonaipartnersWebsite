import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Princeton AI Partners',
  description:
    'Your Automated CTO with Live Support. Princeton AI Partners builds custom AI agents, automation systems, and software that transform how businesses operate. Based in Princeton, NJ.',
  keywords: [
    'about Princeton AI Partners',
    'AI development team',
    'custom software agency',
    'Princeton NJ tech company',
    'CTO as a service',
    'software development partner',
    'AI automation agency',
    'custom AI solutions',
    'business automation experts',
  ],
  openGraph: {
    title: 'About Us | Princeton AI Partners',
    description:
      'Your Automated CTO with Live Support. We build custom AI systems, automation, and software that transform how businesses operate.',
    url: 'https://princeton-ai.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Princeton AI Partners',
    description:
      'Your Automated CTO with Live Support. Custom AI agents, automation, and software.',
  },
  alternates: {
    canonical: 'https://princeton-ai.com/about',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Princeton AI Partners',
  description:
    'Custom AI development agency specializing in AI agents, automation systems, web applications, and bespoke software solutions.',
  url: 'https://princeton-ai.com',
  logo: 'https://princeton-ai.com/logos/logo-header.png',
  foundingDate: '2024',
  founders: [
    {
      '@type': 'Person',
      name: 'Parth Thakker',
      jobTitle: 'Founder & CEO',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Princeton',
    addressRegion: 'NJ',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  sameAs: ['https://github.com/princetonaipartners'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'support@princetonaipartners.com',
    availableLanguage: 'English',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'AI Agents',
    'RAG Systems',
    'Process Automation',
    'Web Development',
    'Custom Software Development',
    'Voice AI',
    'Chatbots',
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Princeton AI Partners',
  description:
    'Custom AI and software development agency based in Princeton, NJ. We build AI agents, automation systems, and web applications for businesses.',
  url: 'https://princeton-ai.com',
  telephone: '',
  email: 'hello@princeton-ai.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Princeton',
    addressRegion: 'NJ',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.3573',
    longitude: '-74.6672',
  },
  priceRange: '$$$',
  openingHours: 'Mo-Fr 09:00-18:00',
  serviceArea: {
    '@type': 'Country',
    name: 'United States',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
