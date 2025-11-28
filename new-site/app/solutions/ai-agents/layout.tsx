import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agents | Princeton AI Partners',
  description: 'Custom AI agents that automate complex business tasks. RAG systems, workflow automation, and intelligent assistants built for your specific needs.',
  openGraph: {
    title: 'AI Agents | Princeton AI Partners',
    description: 'Custom AI agents that automate complex business tasks.',
  },
};

export default function AIAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
