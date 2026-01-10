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
  keywords: ['custom AI', 'RAG agents', 'AI phone agents', 'web scraping', 'custom software development', 'process automation', 'Princeton AI'],
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
        {/* JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Princeton AI Partners',
              url: 'https://princeton-ai.com',
              logo: 'https://princeton-ai.com/logos/logo-full.png',
              description: 'Custom AI agents, phone systems, automation, and software development.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Princeton',
                addressRegion: 'NJ',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'hello@princeton-ai.com',
                contactType: 'sales',
              },
              sameAs: [
                'https://github.com/princetonaipartners',
              ],
              makesOffer: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI Agents',
                    description: 'Custom AI agents for business automation',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI Phone Systems',
                    description: 'AI-powered phone systems and voice agents',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Web Development',
                    description: 'Modern web applications with Next.js and React',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Custom Software',
                    description: 'Bespoke software development',
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
