import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Bots | Princeton AI Partners',
  description:
    'Chatbots, Discord bots, Slack integrations, and custom automation bots. Built for your specific platform and use case.',
  keywords: [
    'Telegram bot development',
    'WhatsApp bot',
    'Discord bot',
    'Slack bot',
    'custom chatbot',
    'messaging automation',
    'bot development',
  ],
  openGraph: {
    title: 'Custom Bots | Princeton AI Partners',
    description: 'Chatbots, Discord bots, Slack integrations, and custom automation bots.',
    url: 'https://princeton-ai.com/solutions/custom-bots',
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
