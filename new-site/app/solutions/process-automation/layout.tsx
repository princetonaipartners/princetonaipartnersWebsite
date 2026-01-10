import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Automation | Princeton AI Partners',
  description:
    'Automate repetitive tasks and streamline workflows. Save 20+ hours per week with custom integrations and intelligent workflow automation.',
  keywords: [
    'process automation',
    'workflow automation',
    'n8n automation',
    'Zapier alternative',
    'business process automation',
    'task automation',
    'integration automation',
  ],
  openGraph: {
    title: 'Process Automation | Princeton AI Partners',
    description: 'Automate repetitive tasks and streamline workflows. Save 20+ hours per week.',
    url: 'https://princeton-ai.com/solutions/process-automation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Automation | Princeton AI Partners',
    description: 'Automate repetitive tasks and streamline workflows.',
  },
  alternates: {
    canonical: 'https://princeton-ai.com/solutions/process-automation',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Process Automation',
  description:
    'Automate repetitive tasks and streamline workflows with custom integrations and automation solutions.',
  provider: {
    '@type': 'Organization',
    name: 'Princeton AI Partners',
    url: 'https://princeton-ai.com',
  },
  serviceType: 'Business Automation',
  areaServed: 'United States',
  priceRange: '$5,000 - $20,000',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why not just use Zapier or Make myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DIY tools are great for simple tasks, but they have limitations with complex logic, error handling, and AI integration. We build enterprise-grade automations that handle edge cases, retry failures automatically, and include proper monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle errors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build robust error handling into every automation: automatic retries with exponential backoff, detailed error logging, instant alerts via Slack/email, and fallback workflows.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the typical timeline?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most projects take 2-4 weeks from discovery to launch. Simple automations can be faster (1-2 weeks), while complex multi-system integrations may take 4-6 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer ongoing support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer support packages starting at $500/month that include monitoring, maintenance, updates, and priority support.',
      },
    },
  ],
};

export default function ProcessAutomationLayout({
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
      {children}
    </>
  );
}
