/**
 * Blog Post Type Definitions
 */

export type BlogCategory =
  | 'ai-automation'
  | 'web-development'
  | 'business-strategy'
  | 'case-study';

export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author: BlogAuthor;
  category: BlogCategory;
  tags: string[];
  readingTime: string;
  featured: boolean;
  coverImage?: string;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  'ai-automation': 'AI & Automation',
  'web-development': 'Web Development',
  'business-strategy': 'Business Strategy',
  'case-study': 'Case Study',
};

export const CATEGORY_COLORS: Record<BlogCategory, string> = {
  'ai-automation': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'web-development': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'business-strategy': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  'case-study': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};
