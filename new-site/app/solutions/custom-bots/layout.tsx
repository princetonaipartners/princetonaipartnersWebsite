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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which platform should I choose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your audience. Telegram is great for tech-savvy users and crypto communities. WhatsApp is ideal for local businesses and customer support. Discord works best for communities and gaming. Slack is perfect for internal team workflows. We can help you decide during our discovery call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can one bot work on multiple platforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes! We can build a unified bot that works across multiple platforms with a single codebase. Your customers get a consistent experience whether they're on Telegram, WhatsApp, Discord, or Slack.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We integrate with Stripe, which supports payments in 135+ currencies. For Telegram, we also support their native payment system. The bot can process one-time payments, subscriptions, and even tip jars.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about message limits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each platform has different rate limits. We architect your bot to stay well within these limits while maximizing throughput. For high-volume use cases, we implement queuing and smart batching.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does development take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most bots launch within 2-3 weeks. Simple bots (FAQ, notifications) can be ready in 1 week. Complex bots with AI, payments, and multiple integrations may take 4-6 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you integrate with my existing systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely. If your system has an API, we can connect to it. We've integrated with CRMs, ERPs, custom databases, and hundreds of SaaS tools. We can also build custom APIs if needed.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide ongoing support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All plans include a warranty period for bug fixes. We also offer ongoing maintenance packages that include monitoring, updates, and feature additions. Many clients choose our CTO Suite for comprehensive support.',
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
      name: 'Custom Bots',
      item: 'https://princeton-ai.com/solutions/custom-bots',
    },
  ],
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
