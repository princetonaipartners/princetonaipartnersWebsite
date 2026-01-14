import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Phone Systems | AI Receptionist for Your Business',
  description:
    'Never miss a call again. AI-powered phone systems that answer calls 24/7, schedule appointments, qualify leads, and handle customer inquiries like your best employee.',
  keywords: [
    // Commercial intent
    'AI receptionist for my business',
    'AI phone answering service',
    'automated phone system for business',
    'AI call handling',
    'never miss a call',
    '24/7 phone answering',
    // Service keywords
    'AI phone system',
    'voice AI',
    'virtual receptionist',
    'appointment scheduling AI',
    'lead qualification',
    'AI customer service phone',
    // Location
    'AI phone system Princeton NJ',
    'virtual receptionist New Jersey',
  ],
  alternates: {
    canonical: 'https://princeton-ai.com/solutions/ai-phone-systems',
  },
  openGraph: {
    title: 'AI Phone Systems | AI Receptionist for Your Business',
    description: 'Never miss a call. AI phone systems that handle calls 24/7 like your best employee.',
    url: 'https://princeton-ai.com/solutions/ai-phone-systems',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Phone Systems | Princeton AI Partners',
    description: 'AI-powered phone systems that answer calls 24/7, schedule appointments, and qualify leads.',
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
