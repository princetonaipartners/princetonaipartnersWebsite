'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import type { BlogPost } from '@/lib/types/blog';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '@/lib/types/blog';
import { cn } from '@/lib/utils';

interface FeaturedBlogCardProps {
  post: BlogPost;
}

export function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-brand-primary/50 transition-all duration-300"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-transparent to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Glow effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

        <div className="relative p-8 md:p-10 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* Content */}
            <div className="flex-1 space-y-4">
              {/* Badge */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 text-xs font-semibold bg-brand-primary/20 text-brand-primary rounded-full border border-brand-primary/30">
                  Featured
                </span>
                <span
                  className={cn(
                    'px-3 py-1 text-xs font-medium rounded-full border',
                    CATEGORY_COLORS[post.category]
                  )}
                >
                  {CATEGORY_LABELS[post.category]}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-brand-primary transition-colors duration-300 leading-tight">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-6 text-sm text-zinc-500 pt-2">
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
              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium">{post.author.name}</p>
                  <p className="text-zinc-500 text-sm">{post.author.role}</p>
                </div>
              </div>
            </div>

            {/* Read more indicator */}
            <div className="flex lg:flex-col items-center gap-3 lg:self-center">
              <span className="text-zinc-500 text-sm hidden lg:block">Read</span>
              <motion.div
                className="w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <ArrowRight className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
