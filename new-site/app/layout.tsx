import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import 'animate.css';
import { MinimalHeader } from '@/components/layout/MinimalHeader';
import { Footer } from '@/components/layout/Footer';
import { FloatingDock } from '@/components/navigation';
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
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <MinimalHeader />
          <main className="min-h-screen pt-16 pb-24">{children}</main>
          <Footer />
          <FloatingDock />
        </ThemeProvider>
      </body>
    </html>
  );
}
