import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development | Princeton AI Partners',
  description: 'Modern web applications built with Next.js, React, and TypeScript. Fast, responsive, and optimized for conversion.',
  openGraph: {
    title: 'Web Development | Princeton AI Partners',
    description: 'Modern web applications built with Next.js, React, and TypeScript.',
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
