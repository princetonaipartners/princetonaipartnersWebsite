import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Chatbots | AI Bot Development for Business',
  description:
    'Custom chatbots for your business. Telegram bots, WhatsApp bots, Discord bots, Slack integrations, and AI-powered automation bots built for your specific needs.',
  keywords: [
    // Commercial intent
    'chatbot for my business',
    'custom chatbot development',
    'AI chatbot for website',
    'customer service chatbot',
    'lead generation chatbot',
    // Service keywords
    'Telegram bot development',
    'WhatsApp bot',
    'Discord bot',
    'Slack bot integration',
    'AI chatbot',
    'messaging automation',
    // Location
    'chatbot developer Princeton NJ',
    'bot development New Jersey',
  ],
  alternates: {
    canonical: 'https://princeton-ai.com/solutions/custom-bots',
  },
  openGraph: {
    title: 'Custom Chatbots | AI Bot Development for Business',
    description: 'Custom chatbots for your business. Telegram, WhatsApp, Discord, and Slack bots.',
    url: 'https://princeton-ai.com/solutions/custom-bots',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Chatbots | Princeton AI Partners',
    description: 'AI-powered chatbots for customer service, lead generation, and automation.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Bot Development',
  description:
    'Custom chatbots for Telegram, WhatsApp, Discord, Slack, and other platforms. Built for your specific use case.',
  provider: {
    '@type': 'Organization',
    name: 'Princeton AI Partners',
    url: 'https://princeton-ai.com',
  },
  serviceType: 'Chatbot Development',
  areaServed: 'United States',
  priceRange: '$2,000 - $10,000',
};

export default function CustomBotsLayout({
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
