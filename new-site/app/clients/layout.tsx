import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve | AI Solutions by Industry | Princeton AI Partners',
  description:
    'AI and automation solutions for restaurants, healthcare, retail, real estate, professional services, logistics, education, and home services. Industry-specific expertise.',
  keywords: [
    'AI for restaurants',
    'healthcare automation',
    'retail AI solutions',
    'real estate automation',
    'professional services AI',
    'logistics automation',
    'education technology',
    'home services automation',
    'industry-specific AI',
    'business automation by industry',
    'AI solutions NJ',
  ],
  openGraph: {
    title: 'Industries We Serve | Princeton AI Partners',
    description:
      'AI and automation solutions tailored for your industry. Restaurants, healthcare, retail, real estate, and more.',
    url: 'https://princeton-ai.com/clients',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | Princeton AI Partners',
    description:
      'AI and automation solutions tailored for your industry.',
  },
  alternates: {
    canonical: 'https://princeton-ai.com/clients',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Industry-Specific AI Solutions',
  description:
    'Custom AI and automation solutions tailored for specific industries including restaurants, healthcare, retail, real estate, and professional services.',
  provider: {
    '@type': 'Organization',
    name: 'Princeton AI Partners',
    url: 'https://princeton-ai.com',
  },
  serviceType: 'AI Development and Automation',
  areaServed: 'United States',
};

const industriesListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Industries Served by Princeton AI Partners',
  description: 'List of industries we provide AI and automation solutions for',
  numberOfItems: 8,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Restaurants & Hospitality',
      description:
        'AI phone systems, process automation, and web development for restaurants and hospitality businesses.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Retail & E-commerce',
      description:
        'Custom bots, web scraping, and AI agents for retail and e-commerce businesses.',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Healthcare & Medical',
      description:
        'AI phone systems, process automation, and bespoke software for healthcare providers.',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Real Estate',
      description:
        'AI agents, custom bots, and web development for real estate professionals.',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Professional Services',
      description:
        'AI agents, process automation, and bespoke software for law firms, accounting, and consultants.',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Logistics & Operations',
      description:
        'Process automation, bespoke software, and web scraping for logistics companies.',
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'Education & Training',
      description:
        'Bespoke software, AI agents, and web development for educational institutions.',
    },
    {
      '@type': 'ListItem',
      position: 8,
      name: 'Home Services',
      description:
        'AI phone systems, process automation, and custom bots for home service businesses.',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What industries do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with businesses across all industries including restaurants, healthcare, retail, real estate, professional services, logistics, education, and home services. Our AI and automation solutions are customized for each industry\'s specific needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have experience in my industry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have delivered solutions across diverse industries. Even if your specific industry isn\'t listed, our team can quickly understand your business processes and build tailored AI solutions. Contact us to discuss your specific needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you customize solutions for different industries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We start with a discovery phase to understand your industry\'s unique challenges, regulations, and workflows. Then we design and build solutions that integrate with your existing tools and address your specific pain points.',
      },
    },
  ],
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
      name: 'Industries We Serve',
      item: 'https://princeton-ai.com/clients',
    },
  ],
};

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
