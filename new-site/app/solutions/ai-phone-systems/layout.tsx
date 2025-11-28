import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Phone Systems | Princeton AI Partners',
  description: 'AI-powered phone systems that handle calls 24/7. Appointment scheduling, customer support, and lead qualification with natural voice AI.',
  openGraph: {
    title: 'AI Phone Systems | Princeton AI Partners',
    description: 'AI-powered phone systems that handle calls 24/7.',
  },
};

export default function AIPhoneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
