import { NextRequest, NextResponse } from 'next/server';

interface PageSpeedAudit {
  score: number | null;
  numericValue?: number;
  title?: string;
  description?: string;
}

interface PageSpeedResult {
  lighthouseResult: {
    categories: {
      performance: { score: number };
      accessibility: { score: number };
      'best-practices': { score: number };
      seo: { score: number };
    };
    audits: {
      'largest-contentful-paint': PageSpeedAudit & { numericValue: number };
      'total-blocking-time': PageSpeedAudit & { numericValue: number };
      'cumulative-layout-shift': PageSpeedAudit & { numericValue: number };
      [key: string]: PageSpeedAudit;
    };
  };
}

interface DiagnosisIssue {
  category: string;
  severity: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
}

interface DiagnosisResult {
  url: string;
  scores: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  vitals: {
    lcp: number;
    fid: number;
    cls: number;
  };
  issues: DiagnosisIssue[];
  estimatedCost: {
    min: number;
    max: number;
    breakdown: { item: string; cost: string }[];
  };
}

/**
 * POST /api/diagnose-site
 *
 * Analyzes a website using Google PageSpeed Insights API
 * Returns Lighthouse scores, Core Web Vitals, and custom quote
 */
export async function POST(request: NextRequest): Promise<NextResponse<DiagnosisResult | { error: string }>> {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Validate URL format
    let targetUrl: URL;
    try {
      targetUrl = new URL(url);
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
    }

    // Call Google PageSpeed Insights API
    // API Key is optional for limited requests, but recommended for production
    const apiKey = process.env.PAGESPEED_API_KEY || '';
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl.toString())}&category=performance&category=accessibility&category=best-practices&category=seo${apiKey ? `&key=${apiKey}` : ''}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch PageSpeed data');
    }

    const data: PageSpeedResult = await response.json();

    // Extract scores (0-100)
    const scores = {
      performance: Math.round((data.lighthouseResult.categories.performance.score || 0) * 100),
      accessibility: Math.round((data.lighthouseResult.categories.accessibility.score || 0) * 100),
      bestPractices: Math.round((data.lighthouseResult.categories['best-practices'].score || 0) * 100),
      seo: Math.round((data.lighthouseResult.categories.seo.score || 0) * 100),
    };

    // Extract Core Web Vitals
    const vitals = {
      lcp: (data.lighthouseResult.audits['largest-contentful-paint']?.numericValue || 0) / 1000, // Convert to seconds
      fid: data.lighthouseResult.audits['total-blocking-time']?.numericValue || 0, // Use TBT as FID proxy
      cls: data.lighthouseResult.audits['cumulative-layout-shift']?.numericValue || 0,
    };

    // Analyze issues and generate recommendations
    const issues: DiagnosisIssue[] = [];

    // Performance issues
    if (scores.performance < 50) {
      issues.push({
        category: 'Performance',
        severity: 'critical',
        title: 'Poor Performance Score',
        description: 'Your site loads too slowly. We recommend image optimization, code minification, and CDN implementation.',
      });
    } else if (scores.performance < 90) {
      issues.push({
        category: 'Performance',
        severity: 'warning',
        title: 'Performance Could Be Improved',
        description: 'Your site is decent but could be faster. Consider lazy loading images and optimizing JavaScript.',
      });
    }

    // Accessibility issues
    if (scores.accessibility < 50) {
      issues.push({
        category: 'Accessibility',
        severity: 'critical',
        title: 'Major Accessibility Issues',
        description: 'Your site has significant accessibility problems. We need to add ARIA labels, improve color contrast, and ensure keyboard navigation.',
      });
    } else if (scores.accessibility < 95) {
      issues.push({
        category: 'Accessibility',
        severity: 'warning',
        title: 'Accessibility Improvements Needed',
        description: 'Your site is partially accessible but needs work on alt text, ARIA attributes, and form labels.',
      });
    }

    // SEO issues
    if (scores.seo < 50) {
      issues.push({
        category: 'SEO',
        severity: 'critical',
        title: 'Poor SEO Foundation',
        description: 'Your site is not optimized for search engines. We need to add meta tags, improve page structure, and implement schema markup.',
      });
    } else if (scores.seo < 95) {
      issues.push({
        category: 'SEO',
        severity: 'warning',
        title: 'SEO Can Be Enhanced',
        description: 'Your basic SEO is in place, but you\'re missing opportunities with schema markup, Open Graph tags, and AI SEO optimization.',
      });
    }

    // Best Practices issues
    if (scores.bestPractices < 90) {
      issues.push({
        category: 'Best Practices',
        severity: 'warning',
        title: 'Security and Best Practices',
        description: 'Your site should use HTTPS, avoid deprecated APIs, and follow modern web standards.',
      });
    }

    // Core Web Vitals issues
    if (vitals.lcp > 2.5) {
      issues.push({
        category: 'Core Web Vitals',
        severity: vitals.lcp > 4 ? 'critical' : 'warning',
        title: 'Slow Largest Contentful Paint (LCP)',
        description: 'Your main content takes too long to load. We can optimize images, reduce server response time, and implement caching.',
      });
    }

    if (vitals.cls > 0.1) {
      issues.push({
        category: 'Core Web Vitals',
        severity: vitals.cls > 0.25 ? 'critical' : 'warning',
        title: 'Layout Shift Issues (CLS)',
        description: 'Your page layout shifts unexpectedly. We need to add dimensions to images and reserve space for dynamic content.',
      });
    }

    // Generate cost estimate based on issues
    const costEstimate = generateCostEstimate(scores, issues);

    const result: DiagnosisResult = {
      url: targetUrl.toString(),
      scores,
      vitals,
      issues,
      estimatedCost: costEstimate,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error diagnosing site:', error);
    return NextResponse.json(
      { error: 'Failed to analyze website. Please try again.' },
      { status: 500 }
    );
  }
}

/**
 * Generate cost estimate based on scores and issues
 */
function generateCostEstimate(
  scores: { performance: number; accessibility: number; bestPractices: number; seo: number },
  issues: DiagnosisIssue[]
): { min: number; max: number; breakdown: { item: string; cost: string }[] } {
  const breakdown: { item: string; cost: string }[] = [];
  let minCost = 500; // Base audit fee
  let maxCost = 1000;

  // Performance optimization
  if (scores.performance < 90) {
    const perfCost = scores.performance < 50 ? [1500, 3000] : [800, 1500];
    minCost += perfCost[0];
    maxCost += perfCost[1];
    breakdown.push({
      item: 'Performance Optimization',
      cost: `$${perfCost[0].toLocaleString()} - $${perfCost[1].toLocaleString()}`,
    });
  }

  // SEO optimization
  if (scores.seo < 95) {
    const seoCost = scores.seo < 50 ? [2000, 4000] : [1200, 2500];
    minCost += seoCost[0];
    maxCost += seoCost[1];
    breakdown.push({
      item: 'SEO Optimization (Traditional + AI)',
      cost: `$${seoCost[0].toLocaleString()} - $${seoCost[1].toLocaleString()}`,
    });
  }

  // Accessibility fixes
  if (scores.accessibility < 95) {
    const a11yCost = scores.accessibility < 50 ? [1000, 2000] : [600, 1200];
    minCost += a11yCost[0];
    maxCost += a11yCost[1];
    breakdown.push({
      item: 'Accessibility Improvements',
      cost: `$${a11yCost[0].toLocaleString()} - $${a11yCost[1].toLocaleString()}`,
    });
  }

  // Best practices
  if (scores.bestPractices < 90) {
    minCost += 500;
    maxCost += 1000;
    breakdown.push({
      item: 'Security & Best Practices',
      cost: '$500 - $1,000',
    });
  }

  // Critical issues
  const criticalCount = issues.filter((i) => i.severity === 'critical').length;
  if (criticalCount > 0) {
    const criticalCost = criticalCount * 500;
    minCost += criticalCost;
    maxCost += criticalCost * 2;
  }

  // Add ongoing monitoring if multiple issues
  if (issues.length >= 3) {
    breakdown.push({
      item: 'Ongoing Monitoring & Support (optional)',
      cost: '$200 - $500/month',
    });
  }

  return {
    min: minCost,
    max: maxCost,
    breakdown,
  };
}
