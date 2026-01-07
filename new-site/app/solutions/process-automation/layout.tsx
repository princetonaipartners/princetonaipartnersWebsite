import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Automation | Princeton AI Partners',
  description:
    'Automate repetitive tasks and streamline workflows. Integration with existing tools, custom automations, and efficiency improvements.',
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
    description: 'Automate repetitive tasks and streamline workflows.',
    url: 'https://princeton-ai.com/solutions/process-automation',
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
      {children}
    </>
  );
}
