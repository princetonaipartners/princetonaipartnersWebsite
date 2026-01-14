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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does it work with my existing phone system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes! Our AI integrates with any phone system—landlines, VoIP, mobile, or cloud-based. We handle the technical setup so you don't have to change anything.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does setup take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most businesses are up and running within a week. We'll work with you to customize the AI voice, train it on your business info, and test everything before going live.",
      },
    },
    {
      '@type': 'Question',
      name: 'What calendar systems do you integrate with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We integrate with Google Calendar, Microsoft Outlook, Apple Calendar, Calendly, Acuity, and most major scheduling platforms. Custom integrations are available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I review calls and transcripts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely. Every call is recorded and transcribed. You'll have access to a dashboard with call logs, transcripts, analytics, and insights.",
      },
    },
    {
      '@type': 'Question',
      name: "What if the AI can't handle a question?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The AI is trained to gracefully transfer calls it can't handle. You can set custom rules for when to transfer and to whom. It never leaves callers hanging.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I customize how the AI sounds and responds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! You choose the voice, tone, and personality. You control how it greets callers, what information it shares, and how it handles different scenarios.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns the call data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You do. All data belongs to your business. We never sell or share your information. You can export or delete your data at any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I want to cancel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No long-term contracts required. You can cancel anytime with 30 days notice. We'll help you transition smoothly and export all your data.",
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
      name: 'Solutions',
      item: 'https://princeton-ai.com/solutions',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'AI Phone Systems',
      item: 'https://princeton-ai.com/solutions/ai-phone-systems',
    },
  ],
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
