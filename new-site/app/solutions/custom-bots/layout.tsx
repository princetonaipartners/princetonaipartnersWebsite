import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Bots | Princeton AI Partners',
  description: 'Chatbots, Discord bots, Slack integrations, and custom automation bots. Built for your specific platform and use case.',
  openGraph: {
    title: 'Custom Bots | Princeton AI Partners',
    description: 'Chatbots, Discord bots, Slack integrations, and custom automation bots.',
  },
};

export default function CustomBotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
