'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { FadeInSection } from '@/components/animations/FadeInSection';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  tier: 'basic' | 'advanced' | 'ai';
  points: number;
}

const checklistItems: ChecklistItem[] = [
  // Basic SEO
  { id: 'meta-tags', title: 'Meta Tags & Descriptions', description: 'Title tags, meta descriptions, and header tags optimized for search engines', tier: 'basic', points: 5 },
  { id: 'sitemap', title: 'XML Sitemap', description: 'Comprehensive sitemap submitted to search engines', tier: 'basic', points: 3 },
  { id: 'robots', title: 'Robots.txt', description: 'Proper robots.txt configuration for crawler access', tier: 'basic', points: 2 },
  { id: 'mobile', title: 'Mobile Optimization', description: 'Fully responsive design that works on all devices', tier: 'basic', points: 5 },
  { id: 'speed', title: 'Page Speed', description: 'Fast load times (< 2s) with optimized images and code', tier: 'basic', points: 5 },

  // Advanced SEO
  { id: 'schema', title: 'Schema Markup', description: 'Structured data using Schema.org vocabulary', tier: 'advanced', points: 8 },
  { id: 'opengraph', title: 'Open Graph Tags', description: 'Rich previews for social media sharing', tier: 'advanced', points: 4 },
  { id: 'canonical', title: 'Canonical URLs', description: 'Prevent duplicate content issues', tier: 'advanced', points: 3 },
  { id: 'internal-linking', title: 'Strategic Internal Linking', description: 'Proper site structure and navigation hierarchy', tier: 'advanced', points: 5 },
  { id: 'alt-text', title: 'Image Alt Text', description: 'Descriptive alt text for all images', tier: 'advanced', points: 3 },

  // AI SEO
  { id: 'ai-structure', title: 'AI-Readable Structure', description: 'Content organized for LLM comprehension and extraction', tier: 'ai', points: 10 },
  { id: 'context-rich', title: 'Context-Rich Content', description: 'Natural language content that answers questions directly', tier: 'ai', points: 8 },
  { id: 'entity-data', title: 'Entity Relationships', description: 'Clear business entity data (location, hours, services)', tier: 'ai', points: 7 },
  { id: 'llm-api', title: 'LLM-Friendly APIs', description: 'Structured data endpoints AI can query', tier: 'ai', points: 9 },
  { id: 'conversational', title: 'Conversational Query Optimization', description: 'Content optimized for "near me", "best", "how to" queries', tier: 'ai', points: 8 },
];

export function SEOChecklist() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const totalPoints = checklistItems.reduce((sum, item) => sum + item.points, 0);
  const earnedPoints = checklistItems
    .filter(item => checkedItems.has(item.id))
    .reduce((sum, item) => sum + item.points, 0);

  const percentage = Math.round((earnedPoints / totalPoints) * 100);

  const basicItems = checklistItems.filter(item => item.tier === 'basic');
  const advancedItems = checklistItems.filter(item => item.tier === 'advanced');
  const aiItems = checklistItems.filter(item => item.tier === 'ai');

  const basicChecked = basicItems.filter(item => checkedItems.has(item.id)).length;
  const advancedChecked = advancedItems.filter(item => checkedItems.has(item.id)).length;
  const aiChecked = aiItems.filter(item => checkedItems.has(item.id)).length;

  return (
    <section className="py-24 bg-white dark:bg-dark-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              Complete SEO Checklist
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              Check off what you have. See what you're missing. Every Princeton AI website includes all of this.
            </p>
          </div>
        </FadeInSection>

        {/* Score Display */}
        <FadeInSection delay={0.2}>
          <div className="max-w-md mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-2">
                  {percentage}%
                </div>
                <div className="text-text-secondary dark:text-dark-text-secondary">
                  {earnedPoints} / {totalPoints} points
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-4 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <div className="font-semibold text-text-primary dark:text-dark-text-primary">
                    {basicChecked}/{basicItems.length}
                  </div>
                  <div className="text-text-tertiary dark:text-dark-text-tertiary">Basic</div>
                </div>
                <div>
                  <div className="font-semibold text-text-primary dark:text-dark-text-primary">
                    {advancedChecked}/{advancedItems.length}
                  </div>
                  <div className="text-text-tertiary dark:text-dark-text-tertiary">Advanced</div>
                </div>
                <div>
                  <div className="font-semibold text-text-primary dark:text-dark-text-primary">
                    {aiChecked}/{aiItems.length}
                  </div>
                  <div className="text-text-tertiary dark:text-dark-text-tertiary">AI SEO</div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Checklist */}
        <FadeInSection delay={0.3}>
          <div className="space-y-8">
            {/* Basic SEO */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                  Basic SEO
                </h3>
                <span className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
                  ({basicChecked}/{basicItems.length})
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {basicItems.map(item => (
                  <ChecklistItemComponent
                    key={item.id}
                    item={item}
                    isChecked={checkedItems.has(item.id)}
                    onToggle={() => toggleItem(item.id)}
                    isHovered={hoveredItem === item.id}
                    onHover={() => setHoveredItem(item.id)}
                    onLeave={() => setHoveredItem(null)}
                  />
                ))}
              </div>
            </div>

            {/* Advanced SEO */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <span className="text-lg font-bold text-purple-600 dark:text-purple-400">2</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                  Advanced SEO
                </h3>
                <span className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
                  ({advancedChecked}/{advancedItems.length})
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {advancedItems.map(item => (
                  <ChecklistItemComponent
                    key={item.id}
                    item={item}
                    isChecked={checkedItems.has(item.id)}
                    onToggle={() => toggleItem(item.id)}
                    isHovered={hoveredItem === item.id}
                    onHover={() => setHoveredItem(item.id)}
                    onLeave={() => setHoveredItem(null)}
                  />
                ))}
              </div>
            </div>

            {/* AI SEO */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                  <span className="text-lg font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                  AI SEO
                </h3>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 text-brand-primary dark:text-dark-brand-primary text-xs font-semibold">
                  NEW
                </span>
                <span className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
                  ({aiChecked}/{aiItems.length})
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {aiItems.map(item => (
                  <ChecklistItemComponent
                    key={item.id}
                    item={item}
                    isChecked={checkedItems.has(item.id)}
                    onToggle={() => toggleItem(item.id)}
                    isHovered={hoveredItem === item.id}
                    onHover={() => setHoveredItem(item.id)}
                    onLeave={() => setHoveredItem(null)}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

function ChecklistItemComponent({
  item,
  isChecked,
  onToggle,
  isHovered,
  onHover,
  onLeave,
}: {
  item: ChecklistItem;
  isChecked: boolean;
  onToggle: () => void;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <button
        onClick={onToggle}
        className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
          isChecked
            ? 'bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 border-brand-primary dark:border-dark-brand-primary'
            : 'bg-white dark:bg-dark-bg-primary border-neutral-200 dark:border-dark-border hover:border-neutral-300'
        }`}
      >
        <div className="flex items-start gap-3">
          <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all ${
            isChecked
              ? 'bg-gradient-to-r from-brand-primary to-brand-secondary border-transparent'
              : 'border-neutral-300 dark:border-neutral-600'
          }`}>
            <AnimatePresence>
              {isChecked && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-text-primary dark:text-dark-text-primary">
                {item.title}
              </h4>
              <span className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
                +{item.points}pts
              </span>
            </div>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
              {item.description}
            </p>
          </div>

          <Info className="w-4 h-4 text-text-tertiary flex-shrink-0" />
        </div>
      </button>
    </div>
  );
}
