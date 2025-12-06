// Quote Calculator Pricing Logic - Redesigned

import type { QuoteState, PriceEstimate, FeatureId } from './types';
import {
  PROJECT_TYPES,
  COMPLEXITY_OPTIONS,
  FEATURES,
  TIMELINE_OPTIONS,
  INDUSTRY_MULTIPLIERS,
  getProjectTypeById,
  getComplexityById,
  getTimelineById,
  getFeatureById,
} from './constants';

/**
 * Calculate the price estimate based on current quote state
 */
export function calculateEstimate(state: QuoteState): PriceEstimate | null {
  if (!state.projectType || !state.industry) {
    return null;
  }

  const projectConfig = getProjectTypeById(state.projectType);
  const complexityConfig = getComplexityById(state.complexity);
  const timelineConfig = getTimelineById(state.timeline);

  if (!projectConfig || !complexityConfig || !timelineConfig) {
    return null;
  }

  // 1. Calculate base price from range based on complexity position
  const { min, max } = projectConfig.priceRange;
  const rangeSpread = max - min;
  const basePrice = min + rangeSpread * complexityConfig.rangePosition;

  // 2. Apply complexity multiplier (enterprise gets 20% premium)
  const afterComplexity = basePrice * complexityConfig.multiplier;
  const complexityAdjustment = afterComplexity - basePrice;

  // 3. Calculate feature costs with project-type-specific multipliers
  const featuresTotal = state.features.reduce((sum, featureId) => {
    const feature = getFeatureById(featureId);
    if (!feature) return sum;
    const projectMult = feature.projectTypeMultipliers?.[state.projectType!] || 1.0;
    return sum + feature.basePrice * projectMult;
  }, 0);

  // 4. Calculate subtotal before industry/timeline adjustments
  const subtotal = afterComplexity + featuresTotal;

  // 5. Apply industry multiplier
  const industryMult = INDUSTRY_MULTIPLIERS[state.industry];
  const afterIndustry = subtotal * industryMult;
  const industryAdjustment = afterIndustry - subtotal;

  // 6. Apply timeline multiplier
  const timelineMult = timelineConfig.multiplier;
  const final = afterIndustry * timelineMult;
  const timelineAdjustment = final - afterIndustry;

  // 7. Generate range with appropriate variance
  const variancePercent = state.projectType === 'bespoke' ? 0.15 : 0.10;
  const low = Math.round(final * (1 - variancePercent));
  const high = Math.round(final * (1 + variancePercent));
  const midpoint = Math.round((low + high) / 2);

  // 8. Calculate timeline in weeks
  const { min: minWeeks, max: maxWeeks } = projectConfig.baseTimeline;
  const baselineWeeks = minWeeks + (maxWeeks - minWeeks) * complexityConfig.rangePosition;
  const adjustedMinWeeks = Math.ceil(baselineWeeks * timelineConfig.durationFactor);
  const adjustedMaxWeeks = Math.ceil(adjustedMinWeeks * 1.5);

  // 9. Determine confidence level
  const hasGoodInfo = state.features.length >= 2 && state.complexity !== 'starter';
  const confidence = hasGoodInfo ? 'refined' : 'estimated';

  return {
    low,
    high,
    midpoint,
    confidence,
    breakdown: {
      basePrice: Math.round(basePrice),
      complexityAdjustment: Math.round(complexityAdjustment),
      featuresTotal: Math.round(featuresTotal),
      industryAdjustment: Math.round(industryAdjustment),
      timelineAdjustment: Math.round(timelineAdjustment),
    },
    timeline: {
      minWeeks: adjustedMinWeeks,
      maxWeeks: adjustedMaxWeeks,
    },
  };
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPriceRange(low: number, high: number): string {
  return formatPrice(low) + ' - ' + formatPrice(high);
}

export function getFeatureNames(featureIds: FeatureId[]): string[] {
  return featureIds
    .map((id) => FEATURES.find((f) => f.id === id)?.name)
    .filter(Boolean) as string[];
}

export function generateQuoteId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return 'QT-' + timestamp + '-' + random;
}

export function getTimelineDescription(minWeeks: number, maxWeeks: number): string {
  if (minWeeks === maxWeeks) {
    return minWeeks + ' weeks';
  }
  return minWeeks + '-' + maxWeeks + ' weeks';
}

export function getQuickEstimate(
  projectType: string,
  complexity: string = 'professional'
): { low: number; high: number } | null {
  const config = PROJECT_TYPES.find((p) => p.id === projectType);
  if (!config) return null;

  const complexityConfig = COMPLEXITY_OPTIONS.find((c) => c.id === complexity);
  if (!complexityConfig) return null;

  const { min, max } = config.priceRange;
  const rangeSpread = max - min;
  const basePrice = min + rangeSpread * complexityConfig.rangePosition;
  const adjusted = basePrice * complexityConfig.multiplier;

  return {
    low: Math.round(adjusted * 0.9),
    high: Math.round(adjusted * 1.1),
  };
}
