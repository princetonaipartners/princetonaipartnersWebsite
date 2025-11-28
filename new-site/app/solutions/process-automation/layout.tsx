import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Automation | Princeton AI Partners',
  description: 'Automate repetitive tasks and streamline workflows. Integration with existing tools, custom automations, and efficiency improvements.',
  openGraph: {
    title: 'Process Automation | Princeton AI Partners',
    description: 'Automate repetitive tasks and streamline workflows.',
  },
};

export default function ProcessAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
