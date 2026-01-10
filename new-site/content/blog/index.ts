/**
 * Blog Content Utilities
 * Handles fetching and processing blog posts
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogPost, BlogPostWithContent, BlogCategory } from '@/lib/types/blog';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.mdx'));

  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const slug = filename.replace('.mdx', '');
    const stats = readingTime(content);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
      author: data.author,
      category: data.category as BlogCategory,
      tags: data.tags || [],
      readingTime: stats.text,
      featured: data.featured || false,
      coverImage: data.coverImage,
    } as BlogPost;
  });

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Get a single post by slug with full content
 */
export function getPostBySlug(slug: string): BlogPostWithContent | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    publishedAt: data.publishedAt,
    updatedAt: data.updatedAt,
    author: data.author,
    category: data.category as BlogCategory,
    tags: data.tags || [],
    readingTime: stats.text,
    featured: data.featured || false,
    coverImage: data.coverImage,
    content,
  };
}

/**
 * Get posts filtered by category
 */
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

/**
 * Get all slugs for static generation
 */
export function getAllSlugs(): string[] {
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.mdx'));
  return files.map((file) => file.replace('.mdx', ''));
}
