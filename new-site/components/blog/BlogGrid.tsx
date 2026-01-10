'use client';

import { motion } from 'framer-motion';
import type { BlogPost } from '@/lib/types/blog';
import { BlogPostCard } from './BlogPostCard';

interface BlogGridProps {
  posts: BlogPost[];
  title?: string;
}

export function BlogGrid({ posts, title }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-zinc-500">No posts found.</p>
      </div>
    );
  }

  return (
    <section>
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-white mb-8"
        >
          {title}
        </motion.h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <BlogPostCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}
