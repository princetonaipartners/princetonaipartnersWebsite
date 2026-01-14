import { getAllPosts, getFeaturedPosts } from '@/content/blog';
import { BlogHeader, BlogGrid, FeaturedBlogCard } from '@/components/blog';
import { BlogBackground } from './blog-background';

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const featuredPost = featuredPosts[0];
  const otherPosts = allPosts.filter((post) => post.slug !== featuredPost?.slug);

  return (
    <main className="relative min-h-screen bg-dark-bg-primary pt-20 overflow-hidden">
      {/* Shooting Stars Background */}
      <BlogBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <BlogHeader />

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <FeaturedBlogCard post={featuredPost} />
          </section>
        )}

        {/* All Posts Grid */}
        <section className="pb-24">
          <BlogGrid posts={otherPosts} title="Latest Articles" />
        </section>
      </div>
    </main>
  );
}
