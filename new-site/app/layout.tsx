import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import 'animate.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/theme-provider';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://princeton-ai.com'),
  title: {
    default: 'Princeton AI Partners | Custom Software, AI Agents & Automation',
    template: '%s | Princeton AI Partners',
  },
  description: 'We build custom AI agents, phone systems, web scrapers, and software in weeks. RAG agents, automation, and bespoke products from scratch.',
  keywords: [
    // Commercial intent keywords
    'AI for my business',
    'AI solutions for small business',
    'website for my business',
    'automate my business',
    'custom software for my business',
    'business automation services',
    'hire AI developer',
    'hire software developer',

    // Industry-specific keywords
    'AI for restaurants',
    'AI for law firms',
    'AI for healthcare',
    'AI for real estate',
    'AI for e-commerce',
    'AI for financial services',
    'software for small business',
    'automation for startups',
    'chatbot for customer service',
    'website for law firm',
    'website for restaurant',

    // Problem-based keywords
    'reduce manual work',
    'save time with automation',
    'improve customer service',
    'never miss a call',
    'automate repetitive tasks',
    'streamline business operations',
    'increase efficiency',
    'reduce operational costs',
    'scale customer support',
    '24/7 customer service',

    // Question-based keywords
    'how to automate my business',
    'do I need AI for my business',
    'how much does custom software cost',
    'how to build an AI agent',
    'how to automate customer support',
    'what is RAG AI',
    'best AI for small business',
    'custom software vs off the shelf',

    // Service keywords
    'custom AI development',
    'RAG agents',
    'AI phone systems',
    'AI receptionist',
    'web scraping services',
    'custom software development',
    'process automation',
    'chatbot development',
    'web development services',
    'MVP development',

    // Location keywords
    'AI development Princeton NJ',
    'software development New Jersey',
    'web development Princeton',
    'AI agency New Jersey',
    'software company Princeton',
    'tech consulting New Jersey',

    // Brand
    'Princeton AI Partners',
    'Princeton AI',
  ],
  authors: [{ name: 'Princeton AI Partners' }],
  creator: 'Princeton AI Partners',
  icons: {
    icon: '/logos/favicon-base.png',
    apple: '/logos/favicon-base.png',
  },
  openGraph: {
    title: 'Princeton AI Partners | Custom Software, AI Agents & Automation',
    description: 'We build custom AI agents, phone systems, web scrapers, and software in weeks. RAG agents, automation, and bespoke products from scratch.',
    url: 'https://princeton-ai.com',
    siteName: 'Princeton AI Partners',
    images: ['/logos/logo-full.png'],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Princeton AI Partners | Custom Software, AI Agents & Automation',
    description: 'We build custom AI agents, phone systems, web scrapers, and software in weeks.',
    images: ['/logos/logo-full.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://princeton-ai.com/feed.xml',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head>
        {/* Prevent transition flash on page load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.classList.add('no-transitions');
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    document.documentElement.classList.remove('no-transitions');
                  }, 100);
                });
              })();
            `,
          }}
        />
        {/* JSON-LD Schema for SEO - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
              '@id': 'https://princeton-ai.com/#organization',
              name: 'Princeton AI Partners',
              alternateName: 'Princeton AI',
              url: 'https://princeton-ai.com',
              logo: 'https://princeton-ai.com/logos/logo-full.png',
              image: 'https://princeton-ai.com/logos/logo-full.png',
              description: 'We build custom AI agents, phone systems, web scrapers, and software for businesses. AI solutions that automate operations and drive growth.',
              slogan: 'Your Automated CTO with Live Support',
              foundingDate: '2024',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Princeton',
                addressLocality: 'Princeton',
                addressRegion: 'NJ',
                postalCode: '08540',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 40.3573,
                longitude: -74.6672,
              },
              areaServed: [
                {
                  '@type': 'Country',
                  name: 'United States',
                },
                {
                  '@type': 'State',
                  name: 'New Jersey',
                },
                {
                  '@type': 'City',
                  name: 'Princeton',
                },
              ],
              priceRange: '$$$',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  email: 'support@princetonaipartners.com',
                  contactType: 'sales',
                  availableLanguage: 'English',
                },
                {
                  '@type': 'ContactPoint',
                  email: 'support@princetonaipartners.com',
                  contactType: 'customer service',
                  availableLanguage: 'English',
                },
              ],
              sameAs: [
                'https://github.com/princetonaipartners',
              ],
              knowsAbout: [
                'Artificial Intelligence',
                'Machine Learning',
                'RAG Systems',
                'Business Automation',
                'Web Development',
                'Custom Software Development',
                'AI Phone Systems',
                'Chatbot Development',
                'Web Scraping',
                'Process Automation',
              ],
              makesOffer: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI Agents for Business',
                    description: 'Custom AI agents that automate customer support, answer questions, and handle business operations 24/7',
                  },
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    priceCurrency: 'USD',
                    minPrice: 10000,
                    maxPrice: 30000,
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI Phone Systems',
                    description: 'AI-powered phone systems and voice agents that handle calls like your best employee',
                  },
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    priceCurrency: 'USD',
                    minPrice: 5000,
                    maxPrice: 15000,
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Business Website Development',
                    description: 'Modern, fast websites that rank on Google and convert visitors into customers',
                  },
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    priceCurrency: 'USD',
                    minPrice: 3000,
                    maxPrice: 25000,
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Business Process Automation',
                    description: 'Eliminate repetitive tasks and connect your tools with intelligent automation',
                  },
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    priceCurrency: 'USD',
                    minPrice: 5000,
                    maxPrice: 20000,
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Custom Software Development',
                    description: 'Bespoke software applications built from scratch for your unique business needs',
                  },
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    priceCurrency: 'USD',
                    minPrice: 50000,
                    maxPrice: 250000,
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {/* Skip link for keyboard navigation */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-primary focus:text-white focus:rounded-lg focus:outline-none"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-h-screen pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
