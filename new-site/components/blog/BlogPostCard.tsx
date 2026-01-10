'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight } from 'lucide-react';
import type { BlogPost } from '@/lib/types/blog';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '@/lib/types/blog';
import { cn } from '@/lib/utils';

interface BlogPostCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogPostCard({ post, index = 0 }: BlogPostCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="group relative h-full overflow-hidden rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-brand-primary/50 transition-all duration-300"
      >
        {/* Hover glow */}
        <div className="absolute -inset-px bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />

        <div className="relative p-6 h-full flex flex-col">
          {/* Top section */}
          <div className="flex items-center justify-between mb-4">
            <span
              className={cn(
                'px-2.5 py-1 text-xs font-medium rounded-full border',
                CATEGORY_COLORS[post.category]
              )}
            >
              {CATEGORY_LABELS[post.category]}
            </span>
            <motion.div
              className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1, rotate: 45 }}
            >
              <ArrowUpRight className="w-4 h-4 text-brand-primary" />
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors duration-300 mb-3 line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white text-xs font-bold">
                {post.author.name.charAt(0)}
              </div>
              <span className="text-zinc-500 text-sm">{post.author.name}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-500">
              <span>{formattedDate}</span>
              <span className="text-zinc-700">|</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
