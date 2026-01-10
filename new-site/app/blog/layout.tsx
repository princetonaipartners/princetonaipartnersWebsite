import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Princeton AI Partners',
  description:
    'Expert insights on AI automation, web development, and digital transformation. Learn how to leverage technology to grow your business.',
  keywords: [
    'AI blog',
    'automation insights',
    'web development tips',
    'digital transformation',
    'AI agents',
    'business automation',
    'tech strategy',
  ],
  openGraph: {
    title: 'Blog | Princeton AI Partners',
    description:
      'Expert insights on AI automation, web development, and digital transformation.',
    url: 'https://princeton-ai.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Princeton AI Partners',
    description: 'Expert insights on AI automation and web development.',
  },
  alternates: {
    canonical: 'https://princeton-ai.com/blog',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Princeton AI Partners Blog',
  description:
    'Expert insights on AI automation, web development, and digital transformation strategies.',
  url: 'https://princeton-ai.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Princeton AI Partners',
    url: 'https://princeton-ai.com',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {children}
    </>
  );
}
