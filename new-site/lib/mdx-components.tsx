/**
 * MDX Components
 * Custom styled components for MDX content
 */

import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import Image from 'next/image';
import {
  BarChartComparison,
  LineChartTrend,
  SimpleBarChart,
} from '@/components/blog/charts';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-10 mb-6 text-white">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-10 mb-4 text-white">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-8 mb-3 text-white">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mt-6 mb-2 text-white">{children}</h4>
    ),

    // Paragraphs and text
    p: ({ children }) => (
      <p className="text-zinc-300 leading-relaxed mb-6">{children}</p>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-zinc-200">{children}</em>,

    // Lists
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-zinc-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-zinc-300">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,

    // Links
    a: ({ href, children }) => {
      const isExternal = href?.startsWith('http');
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:text-brand-secondary underline underline-offset-4 transition-colors"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href || '#'}
          className="text-brand-primary hover:text-brand-secondary underline underline-offset-4 transition-colors"
        >
          {children}
        </Link>
      );
    },

    // Code blocks
    pre: ({ children }) => (
      <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="bg-zinc-800 text-brand-primary px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-primary pl-4 italic text-zinc-400 mb-6">
        {children}
      </blockquote>
    ),

    // Horizontal rule
    hr: () => <hr className="border-zinc-800 my-10" />,

    // Images
    img: ({ src, alt }) => (
      <span className="block my-8">
        <Image
          src={src || ''}
          alt={alt || ''}
          width={800}
          height={450}
          className="rounded-lg"
        />
      </span>
    ),

    // Tables
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-zinc-800 bg-zinc-900 px-4 py-2 text-left font-semibold text-white">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-zinc-800 px-4 py-2 text-zinc-300">{children}</td>
    ),

    // Custom callout component
    Callout: ({
      type = 'info',
      children,
    }: {
      type?: 'info' | 'warning' | 'success';
      children: React.ReactNode;
    }) => {
      const styles = {
        info: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
        warning: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
        success: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      };
      return (
        <div className={`border rounded-lg p-4 mb-6 ${styles[type]}`}>
          {children}
        </div>
      );
    },

    // Chart components for data visualization
    BarChartComparison,
    LineChartTrend,
    SimpleBarChart,

    ...components,
  };
}
