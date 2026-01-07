import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Princeton AI Partners. Schedule a consultation for custom AI agents, software development, or automation projects.',
  openGraph: {
    title: 'Contact Us | Princeton AI Partners',
    description: 'Get in touch for custom AI and software development.',
    url: 'https://princeton-ai.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
