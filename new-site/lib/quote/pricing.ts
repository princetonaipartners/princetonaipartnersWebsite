// Quote Calculator Pricing Logic

import type { QuoteState, PriceEstimate, FeatureId } from './types';
import {
  BASE_PRICES,
  TIMELINE_MULTIPLIERS,
  TIMELINE_DURATIONS,
  FEATURES,
} from './constants';

/**
 * Calculate the price estimate based on current quote state
 */
export function calculateEstimate(state: QuoteState): PriceEstimate | null {
  if (!state.projectType) {
    return null;
  }

  // 1. Get base price from project type + complexity
  const basePrice = BASE_PRICES[state.projectType][state.complexity];

  // 2. Calculate feature add-ons
  const featureTotal = state.features.reduce((sum, featureId) => {
    const feature = FEATURES.find((f) => f.id === featureId);
    return sum + (feature?.price || 0);
  }, 0);

  // 3. Calculate subtotal before timeline adjustment
  const subtotal = basePrice + featureTotal;

  // 4. Apply timeline multiplier
  const timelineMultiplier = TIMELINE_MULTIPLIERS[state.timeline];
  const adjusted = subtotal * timelineMultiplier;

  // 5. Calculate range (±15% for estimate variance)
  const low = Math.round(adjusted * 0.85);
  const high = Math.round(adjusted * 1.15);

  // 6. Get timeline duration
  const duration = TIMELINE_DURATIONS[state.timeline];

  return {
    low,
    high,
    breakdown: {
      base: basePrice,
      features: featureTotal,
      timelineAdjustment: Math.round(subtotal * (timelineMultiplier - 1)),
    },
    timeline: {
      minWeeks: duration.min,
      maxWeeks: duration.max,
    },
  };
}

/**
 * Format price as USD currency
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format price range
 */
export function formatPriceRange(low: number, high: number): string {
  return `${formatPrice(low)} - ${formatPrice(high)}`;
}

/**
 * Get feature names from IDs
 */
export function getFeatureNames(featureIds: FeatureId[]): string[] {
  return featureIds
    .map((id) => FEATURES.find((f) => f.id === id)?.name)
    .filter(Boolean) as string[];
}

/**
 * Generate a unique quote ID
 */
export function generateQuoteId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `QT-${timestamp}-${random}`;
}
