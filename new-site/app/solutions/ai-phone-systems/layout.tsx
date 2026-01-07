import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Phone Systems | Princeton AI Partners',
  description:
    'AI-powered phone systems that handle calls 24/7. Appointment scheduling, customer support, and lead qualification with natural voice AI.',
  keywords: [
    'AI phone system',
    'voice AI',
    'automated call handling',
    'appointment scheduling AI',
    'lead qualification',
    'virtual receptionist',
    '24/7 phone support',
  ],
  openGraph: {
    title: 'AI Phone Systems | Princeton AI Partners',
    description: 'AI-powered phone systems that handle calls 24/7.',
    url: 'https://princeton-ai.com/solutions/ai-phone-systems',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Phone Systems',
  description:
    'AI-powered phone systems that handle calls 24/7 with natural voice AI for appointment scheduling, customer support, and lead qualification.',
  provider: {
    '@type': 'Organization',
    name: 'Princeton AI Partners',
    url: 'https://princeton-ai.com',
  },
  serviceType: 'Voice AI',
  areaServed: 'United States',
  priceRange: '$5,000 - $15,000',
};

export default function AIPhoneLayout({
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
