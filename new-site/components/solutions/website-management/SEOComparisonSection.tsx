import React from 'react';
import { Search, Brain, Tag, MessageSquare, MapPin, TrendingUp, Globe, Sparkles } from 'lucide-react';

/**
 * SEOComparisonSection - Server component comparing Traditional vs AI SEO
 *
 * Shows the differences between traditional search engine optimization
 * and modern AI-powered SEO strategies
 */
export function SEOComparisonSection(): React.ReactElement {
  const traditionalFeatures = [
    {
      icon: Tag,
      title: 'Keyword Optimization',
      description: 'Target specific keywords and phrases that users search for',
    },
    {
      icon: Search,
      title: 'Meta Tags & Descriptions',
      description: 'Craft compelling titles and meta descriptions for search results',
    },
    {
      icon: Globe,
      title: 'Backlink Building',
      description: 'Earn high-quality links from authoritative websites',
    },
    {
      icon: MapPin,
      title: 'Schema Markup',
      description: 'Structured data to help search engines understand your content',
    },
  ];

  const aiSEOFeatures = [
    {
      icon: Brain,
      title: 'Semantic Search Optimization',
      description: 'Optimize for intent and context, not just keywords',
    },
    {
      icon: MessageSquare,
      title: 'Entity Optimization',
      description: 'Help AI understand your brand, products, and services as entities',
    },
    {
      icon: Sparkles,
      title: 'Voice & Conversational Search',
      description: 'Rank for natural language questions asked to AI assistants',
    },
    {
      icon: TrendingUp,
      title: 'Featured Snippets & Rich Results',
      description: 'Get recommended by ChatGPT, Claude, and Perplexity AI',
    },
  ];

  return (
    <section className="py-24 bg-neutral-50 dark:bg-dark-bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-semibold text-brand-primary dark:text-dark-brand-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Traditional + AI SEO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
            The Future of SEO is{' '}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              AI-Powered
            </span>
          </h2>
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            Traditional SEO gets you on Google. AI SEO gets you recommended by ChatGPT, Claude, and Perplexity.
            We do both—so you dominate everywhere your customers search.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional SEO */}
          <div className="rounded-3xl bg-white dark:bg-dark-bg-secondary p-8 border border-neutral-200 dark:border-dark-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-full bg-neutral-100 dark:bg-neutral-800 p-3">
                <Search className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                Traditional SEO
              </h3>
            </div>

            <p className="text-text-secondary dark:text-dark-text-secondary mb-6">
              The foundation. Optimized for Google, Bing, and traditional search engines.
            </p>

            <div className="space-y-6">
              {traditionalFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="rounded-xl bg-neutral-100 dark:bg-neutral-800 p-2.5">
                      <feature.icon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-neutral-50 dark:bg-neutral-900 p-4">
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary text-center">
                <strong className="text-text-primary dark:text-dark-text-primary">Result:</strong> Rank on page 1 of Google
              </p>
            </div>
          </div>

          {/* AI SEO */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 border-2 border-brand-primary shadow-xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-sm font-semibold">
              Your Competitive Edge
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-full bg-brand-primary/20 p-3">
                <Brain className="h-6 w-6 text-brand-primary dark:text-dark-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                AI SEO
              </h3>
            </div>

            <p className="text-text-secondary dark:text-dark-text-secondary mb-6">
              The future. Optimized for ChatGPT, Claude, Perplexity, and other AI assistants.
            </p>

            <div className="space-y-6">
              {aiSEOFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="rounded-xl bg-brand-primary/20 p-2.5">
                      <feature.icon className="h-5 w-5 text-brand-primary dark:text-dark-brand-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 p-4">
              <p className="text-sm text-text-primary dark:text-dark-text-primary text-center">
                <strong>Result:</strong> Get recommended by AI when users ask for solutions like yours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-6 py-3 text-white font-semibold shadow-lg">
            <Sparkles className="h-5 w-5" />
            <span>We implement both strategies on every website</span>
          </div>
        </div>

        {/* Example Section */}
        <div className="mt-16 rounded-3xl bg-white dark:bg-dark-bg-secondary p-8 md:p-12 border border-neutral-200 dark:border-dark-border">
          <h3 className="text-2xl font-bold mb-6 text-text-primary dark:text-dark-text-primary text-center">
            Real-World Example
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-sm font-medium mb-4">
                <Search className="h-4 w-4" />
                Traditional Search
              </div>
              <div className="rounded-xl bg-neutral-50 dark:bg-neutral-900 p-4 mb-3">
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-1">User searches:</p>
                <p className="font-mono text-text-primary dark:text-dark-text-primary">
                  &quot;dentist near me&quot;
                </p>
              </div>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                <strong className="text-text-primary dark:text-dark-text-primary">Result:</strong> Your dental practice appears in local map pack and organic results
              </p>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-3 py-1 text-sm font-medium text-brand-primary dark:text-dark-brand-primary mb-4">
                <Brain className="h-4 w-4" />
                AI Assistant Search
              </div>
              <div className="rounded-xl bg-brand-light dark:bg-brand-dark/20 p-4 mb-3">
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-1">User asks ChatGPT:</p>
                <p className="font-mono text-text-primary dark:text-dark-text-primary">
                  &quot;I need a dentist in [city] that takes my insurance and offers evening appointments&quot;
                </p>
              </div>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                <strong className="text-text-primary dark:text-dark-text-primary">Result:</strong> ChatGPT recommends your practice because we optimized your entity data and services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
