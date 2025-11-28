import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bespoke Software | Princeton AI Partners',
  description: 'Custom software solutions tailored to your business. Full-stack development, integrations, and enterprise applications.',
  openGraph: {
    title: 'Bespoke Software | Princeton AI Partners',
    description: 'Custom software solutions tailored to your business.',
  },
};

export default function BespokeSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
