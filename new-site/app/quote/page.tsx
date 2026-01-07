import type { Metadata } from 'next';
import { QuoteCalculator } from '@/components/quote/QuoteCalculator';

export const metadata: Metadata = {
  title: 'Get a Quote | Princeton AI Partners',
  description:
    'Get an instant project estimate for your custom software, AI system, or automation project. Free quote in under 2 minutes.',
  openGraph: {
    title: 'Get a Quote | Princeton AI Partners',
    description:
      'Get an instant project estimate for your custom software, AI system, or automation project.',
  },
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-surface-primary dark:bg-dark-bg-primary">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <QuoteCalculator />
      </div>
    </main>
  );
}
