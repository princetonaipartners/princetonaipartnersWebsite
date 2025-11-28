import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Scraping | Princeton AI Partners',
  description: 'Enterprise-grade web scraping and data extraction. Competitive intelligence, lead generation, and automated data collection.',
  openGraph: {
    title: 'Web Scraping | Princeton AI Partners',
    description: 'Enterprise-grade web scraping and data extraction.',
  },
};

export default function WebScrapingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
