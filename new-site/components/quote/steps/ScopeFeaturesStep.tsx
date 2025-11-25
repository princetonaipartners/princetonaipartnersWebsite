'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { Complexity, FeatureId } from '@/lib/quote/types';
import { COMPLEXITY_OPTIONS, FEATURES } from '@/lib/quote/constants';
import { formatPrice } from '@/lib/quote/pricing';

interface ScopeFeaturesStepProps {
  complexity: Complexity;
  features: FeatureId[];
  onComplexityChange: (complexity: Complexity) => void;
  onFeatureToggle: (featureId: FeatureId) => void;
  onNext: () => void;
  onBack: () => void;
}

export function ScopeFeaturesStep({
  complexity,
  features,
  onComplexityChange,
  onFeatureToggle,
  onNext,
  onBack,
}: ScopeFeaturesStepProps) {
  const coreFeatures = FEATURES.filter((f) => f.category === 'core');
  const aiFeatures = FEATURES.filter((f) => f.category === 'ai');
  const scaleFeatures = FEATURES.filter((f) => f.category === 'scale');

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
          Tell us more about your project
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary">
          Select complexity level and any additional features you need
        </p>
      </div>

      {/* Complexity Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
          Project Complexity
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COMPLEXITY_OPTIONS.map((option) => (
            <button
              key={option.id}
              onClick={() => onComplexityChange(option.id)}
              className={cn(
                'p-4 rounded-xl border-2 text-left transition-all duration-300',
                complexity === option.id
                  ? 'border-brand-primary bg-brand-light/50 dark:bg-brand-primary/10'
                  : 'border-neutral-200 dark:border-dark-border hover:border-brand-primary/50 bg-white dark:bg-dark-bg-card'
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-text-primary dark:text-dark-text-primary">
                  {option.name}
                </span>
                {complexity === option.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </motion.div>
                )}
              </div>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                {option.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Feature Add-ons */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
          Feature Add-ons
          <span className="text-sm font-normal text-text-tertiary ml-2">
            (optional)
          </span>
        </h3>

        {/* Core Features */}
        <FeatureGroup
          title="Core Features"
          features={coreFeatures}
          selectedFeatures={features}
          onToggle={onFeatureToggle}
        />

        {/* AI Features */}
        <FeatureGroup
          title="AI Capabilities"
          features={aiFeatures}
          selectedFeatures={features}
          onToggle={onFeatureToggle}
        />

        {/* Scale Features */}
        <FeatureGroup
          title="Scale & Enterprise"
          features={scaleFeatures}
          selectedFeatures={features}
          onToggle={onFeatureToggle}
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext}>Continue</Button>
      </div>
    </div>
  );
}

interface FeatureGroupProps {
  title: string;
  features: typeof FEATURES;
  selectedFeatures: FeatureId[];
  onToggle: (featureId: FeatureId) => void;
}

function FeatureGroup({
  title,
  features,
  selectedFeatures,
  onToggle,
}: FeatureGroupProps) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-medium text-text-tertiary dark:text-dark-text-tertiary uppercase tracking-wide">
        {title}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((feature) => {
          const isSelected = selectedFeatures.includes(feature.id);

          return (
            <button
              key={feature.id}
              onClick={() => onToggle(feature.id)}
              className={cn(
                'flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all duration-300',
                isSelected
                  ? 'border-brand-primary bg-brand-light/30 dark:bg-brand-primary/10'
                  : 'border-neutral-200 dark:border-dark-border hover:border-brand-primary/50 bg-white dark:bg-dark-bg-card'
              )}
            >
              <div
                className={cn(
                  'w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors duration-300',
                  isSelected
                    ? 'border-brand-primary bg-brand-primary'
                    : 'border-neutral-300 dark:border-dark-border'
                )}
              >
                {isSelected && <Check className="w-3 h-3 text-white" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-text-primary dark:text-dark-text-primary">
                    {feature.name}
                  </span>
                  <span className="text-sm font-medium text-brand-primary whitespace-nowrap">
                    +{formatPrice(feature.price)}
                  </span>
                </div>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary mt-0.5">
                  {feature.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
