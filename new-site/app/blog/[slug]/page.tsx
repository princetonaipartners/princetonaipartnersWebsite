import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import { getAllSlugs, getPostBySlug, getAllPosts } from '@/content/blog';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '@/lib/types/blog';
import { cn } from '@/lib/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '@/lib/mdx-components';
import { BlogPostCard } from '@/components/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Princeton AI Partners',
    };
  }

  return {
    title: `${post.title} | Princeton AI Partners Blog`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      url: `https://princeton-ai.com/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://princeton-ai.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Get related posts (same category, excluding current)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // JSON-LD schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Princeton AI Partners',
      url: 'https://princeton-ai.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://princeton-ai.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://princeton-ai.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://princeton-ai.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://princeton-ai.com/blog/${post.slug}`,
      },
    ],
  };

  const components = useMDXComponents({});

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-dark-bg pt-20">
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-brand-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            {/* Category */}
            <div className="mb-4">
              <span
                className={cn(
                  'px-3 py-1 text-sm font-medium rounded-full border',
                  CATEGORY_COLORS[post.category]
                )}
              >
                {CATEGORY_LABELS[post.category]}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-zinc-500 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-lg">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-zinc-500 text-sm">{post.author.role}</p>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-zinc-800">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-zinc-500" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-zinc-800 text-zinc-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 pb-24">
            <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <BlogPostCard key={relatedPost.slug} post={relatedPost} index={index} />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
