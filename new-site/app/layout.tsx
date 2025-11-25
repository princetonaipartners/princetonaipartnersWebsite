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
  title: 'Princeton AI Partners - Custom AI Systems & Software Development',
  description: 'We build custom AI agents, phone systems, web scrapers, and software in weeks. RAG agents, automation, and bespoke products from scratch.',
  keywords: ['custom AI', 'RAG agents', 'AI phone agents', 'web scraping', 'custom software development', 'process automation'],
  icons: {
    icon: '/logos/favicon-base.png',
    apple: '/logos/favicon-base.png',
  },
  openGraph: {
    title: 'Princeton AI Partners - Custom AI Systems & Software Development',
    description: 'We build custom AI agents, phone systems, web scrapers, and software in weeks. RAG agents, automation, and bespoke products from scratch.',
    images: ['/logos/logo-full.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Princeton AI Partners - Custom AI Systems & Software Development',
    description: 'We build custom AI agents, phone systems, web scrapers, and software in weeks.',
    images: ['/logos/logo-full.png'],
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
          enableSystem
          enableColorScheme
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
