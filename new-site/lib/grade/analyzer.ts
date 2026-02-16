/**
 * Website Analyzer
 * Core analysis engine for grading websites
 */

import { JSDOM } from 'jsdom';
import {
  WebsiteAnalysis,
  CategoryScore,
  Finding,
  CategoryKey,
  scoreToGrade,
} from './types';

// Generate unique ID
function generateId(): string {
  return `grade_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Extract domain from URL
function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return url;
  }
}

// Normalize URL
function normalizeUrl(url: string): string {
  let normalized = url.trim();
  if (!normalized.startsWith('http://') && !normalized.startsWith('https://')) {
    normalized = `https://${normalized}`;
  }
  return normalized;
}

// Fetch website HTML with timeout
async function fetchWebsite(url: string): Promise<{ html: string; headers: Headers; loadTime: number }> {
  const startTime = Date.now();

  // Create abort controller for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
      redirect: 'follow',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Failed to fetch website: ${response.status}`);
    }

    const html = await response.text();
    const loadTime = Date.now() - startTime;

    // Check if we got a meaningful response (not a captcha/block page)
    if (html.length < 500) {
      throw new Error('Website returned minimal content - it may be blocking automated requests');
    }

    return { html, headers: response.headers, loadTime };
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timed out - the website took too long to respond');
      }
      throw error;
    }
    throw new Error('Failed to fetch website');
  }
}

// Analyze SEO
function analyzeSeo(doc: Document, url: string): CategoryScore {
  const findings: Finding[] = [];
  let score = 100;

  // Check title tag
  const title = doc.querySelector('title');
  if (!title || !title.textContent?.trim()) {
    findings.push({
      type: 'error',
      title: 'Missing title tag',
      description: 'Your page is missing a title tag, which is critical for SEO.',
      impact: 'high',
    });
    score -= 15;
  } else if (title.textContent.length > 60) {
    findings.push({
      type: 'warning',
      title: 'Title tag too long',
      description: `Your title is ${title.textContent.length} characters. Keep it under 60 for best results.`,
      impact: 'medium',
    });
    score -= 5;
  } else {
    findings.push({
      type: 'success',
      title: 'Title tag present',
      description: `Good title: "${title.textContent.slice(0, 50)}${title.textContent.length > 50 ? '...' : ''}"`,
      impact: 'high',
    });
  }

  // Check meta description
  const metaDesc = doc.querySelector('meta[name="description"]');
  if (!metaDesc || !metaDesc.getAttribute('content')?.trim()) {
    findings.push({
      type: 'error',
      title: 'Missing meta description',
      description: 'Add a meta description to improve click-through rates from search results.',
      impact: 'high',
    });
    score -= 15;
  } else {
    const descLength = metaDesc.getAttribute('content')?.length || 0;
    if (descLength > 160) {
      findings.push({
        type: 'warning',
        title: 'Meta description too long',
        description: `Your description is ${descLength} characters. Keep it under 160.`,
        impact: 'medium',
      });
      score -= 5;
    } else {
      findings.push({
        type: 'success',
        title: 'Meta description present',
        description: 'Your meta description is properly configured.',
        impact: 'high',
      });
    }
  }

  // Check H1
  const h1s = doc.querySelectorAll('h1');
  if (h1s.length === 0) {
    findings.push({
      type: 'error',
      title: 'Missing H1 tag',
      description: 'Every page should have exactly one H1 tag.',
      impact: 'high',
    });
    score -= 10;
  } else if (h1s.length > 1) {
    findings.push({
      type: 'warning',
      title: 'Multiple H1 tags',
      description: `Found ${h1s.length} H1 tags. Best practice is to have exactly one.`,
      impact: 'medium',
    });
    score -= 5;
  } else {
    findings.push({
      type: 'success',
      title: 'H1 tag properly configured',
      description: 'Your page has exactly one H1 tag.',
      impact: 'high',
    });
  }

  // Check Open Graph
  const ogTitle = doc.querySelector('meta[property="og:title"]');
  const ogDesc = doc.querySelector('meta[property="og:description"]');
  const ogImage = doc.querySelector('meta[property="og:image"]');

  if (!ogTitle || !ogDesc || !ogImage) {
    const missing = [];
    if (!ogTitle) missing.push('og:title');
    if (!ogDesc) missing.push('og:description');
    if (!ogImage) missing.push('og:image');
    findings.push({
      type: 'warning',
      title: 'Incomplete Open Graph tags',
      description: `Missing: ${missing.join(', ')}. These help your content look better when shared.`,
      impact: 'medium',
    });
    score -= 5;
  } else {
    findings.push({
      type: 'success',
      title: 'Open Graph tags configured',
      description: 'Your social sharing metadata is properly set up.',
      impact: 'medium',
    });
  }

  // Check canonical
  const canonical = doc.querySelector('link[rel="canonical"]');
  if (!canonical) {
    findings.push({
      type: 'warning',
      title: 'Missing canonical URL',
      description: 'Add a canonical URL to prevent duplicate content issues.',
      impact: 'medium',
    });
    score -= 5;
  } else {
    findings.push({
      type: 'success',
      title: 'Canonical URL set',
      description: 'Your canonical URL is properly configured.',
      impact: 'medium',
    });
  }

  // Check structured data
  const jsonLd = doc.querySelectorAll('script[type="application/ld+json"]');
  if (jsonLd.length === 0) {
    findings.push({
      type: 'warning',
      title: 'No structured data',
      description: 'Add JSON-LD structured data to help search engines understand your content.',
      impact: 'medium',
    });
    score -= 5;
  } else {
    findings.push({
      type: 'success',
      title: 'Structured data found',
      description: `Found ${jsonLd.length} JSON-LD schema(s) on your page.`,
      impact: 'medium',
    });
  }

  return {
    score: Math.max(0, score),
    grade: scoreToGrade(Math.max(0, score)),
    findings,
    recommendations: findings
      .filter(f => f.type !== 'success')
      .map(f => f.description),
    weight: 0.2,
  };
}

// Analyze Performance
function analyzePerformance(html: string, loadTime: number): CategoryScore {
  const findings: Finding[] = [];
  let score = 100;

  // Check load time
  if (loadTime < 1000) {
    findings.push({
      type: 'success',
      title: 'Excellent load time',
      description: `Your page loaded in ${loadTime}ms - very fast!`,
      impact: 'high',
    });
  } else if (loadTime < 2500) {
    findings.push({
      type: 'success',
      title: 'Good load time',
      description: `Your page loaded in ${(loadTime / 1000).toFixed(1)}s - within acceptable range.`,
      impact: 'high',
    });
  } else if (loadTime < 4000) {
    findings.push({
      type: 'warning',
      title: 'Slow load time',
      description: `Your page took ${(loadTime / 1000).toFixed(1)}s to load. Aim for under 2.5s.`,
      impact: 'high',
    });
    score -= 15;
  } else {
    findings.push({
      type: 'error',
      title: 'Very slow load time',
      description: `Your page took ${(loadTime / 1000).toFixed(1)}s to load. This will hurt user experience and SEO.`,
      impact: 'high',
    });
    score -= 25;
  }

  // Check HTML size
  const htmlSize = new Blob([html]).size;
  const htmlSizeKb = htmlSize / 1024;

  if (htmlSizeKb < 100) {
    findings.push({
      type: 'success',
      title: 'Efficient HTML size',
      description: `Your HTML is ${htmlSizeKb.toFixed(1)}KB - nice and lean.`,
      impact: 'medium',
    });
  } else if (htmlSizeKb < 200) {
    findings.push({
      type: 'warning',
      title: 'Large HTML size',
      description: `Your HTML is ${htmlSizeKb.toFixed(1)}KB. Consider reducing inline styles/scripts.`,
      impact: 'medium',
    });
    score -= 10;
  } else {
    findings.push({
      type: 'error',
      title: 'Very large HTML',
      description: `Your HTML is ${htmlSizeKb.toFixed(1)}KB - this is quite large and may slow down rendering.`,
      impact: 'medium',
    });
    score -= 20;
  }

  // Check for render-blocking indicators
  const inlineStyleMatches = html.match(/<style/gi) || [];
  if (inlineStyleMatches.length > 3) {
    findings.push({
      type: 'warning',
      title: 'Multiple inline style blocks',
      description: `Found ${inlineStyleMatches.length} inline style blocks. Consider consolidating CSS.`,
      impact: 'low',
    });
    score -= 5;
  }

  // Check for unoptimized images (basic heuristic)
  const imgMatches = html.match(/<img[^>]+>/gi) || [];
  const lazyImages = html.match(/loading=["']lazy["']/gi) || [];

  if (imgMatches.length > 5 && lazyImages.length < imgMatches.length / 2) {
    findings.push({
      type: 'warning',
      title: 'Images may not be lazy loaded',
      description: `Found ${imgMatches.length} images but only ${lazyImages.length} use lazy loading.`,
      impact: 'medium',
    });
    score -= 10;
  } else if (imgMatches.length > 0) {
    findings.push({
      type: 'success',
      title: 'Image optimization detected',
      description: 'Your images appear to use lazy loading.',
      impact: 'medium',
    });
  }

  return {
    score: Math.max(0, score),
    grade: scoreToGrade(Math.max(0, score)),
    findings,
    recommendations: findings
      .filter(f => f.type !== 'success')
      .map(f => f.description),
    weight: 0.2,
  };
}

// Analyze Mobile
function analyzeMobile(doc: Document): CategoryScore {
  const findings: Finding[] = [];
  let score = 100;

  // Check viewport meta
  const viewport = doc.querySelector('meta[name="viewport"]');
  if (!viewport) {
    findings.push({
      type: 'error',
      title: 'Missing viewport meta tag',
      description: 'Add a viewport meta tag to ensure proper mobile rendering.',
      impact: 'high',
    });
    score -= 25;
  } else {
    const content = viewport.getAttribute('content') || '';
    if (content.includes('width=device-width')) {
      findings.push({
        type: 'success',
        title: 'Viewport configured correctly',
        description: 'Your viewport meta tag is properly set up for mobile devices.',
        impact: 'high',
      });
    } else {
      findings.push({
        type: 'warning',
        title: 'Viewport may need adjustment',
        description: 'Ensure viewport includes "width=device-width" for best results.',
        impact: 'high',
      });
      score -= 10;
    }
  }

  // Check for responsive indicators
  const mediaQueries = doc.querySelectorAll('link[media]');
  const hasMediaQueries = mediaQueries.length > 0;

  // Check for responsive classes (common frameworks)
  const html = doc.documentElement.outerHTML;
  const hasResponsiveClasses = /(?:sm:|md:|lg:|xl:|col-|row-)/.test(html);

  if (hasResponsiveClasses) {
    findings.push({
      type: 'success',
      title: 'Responsive design detected',
      description: 'Your site appears to use responsive CSS classes.',
      impact: 'high',
    });
  } else if (hasMediaQueries) {
    findings.push({
      type: 'success',
      title: 'Media queries detected',
      description: 'Your site uses media queries for responsive design.',
      impact: 'high',
    });
  } else {
    findings.push({
      type: 'warning',
      title: 'Limited responsive indicators',
      description: 'Could not detect responsive design patterns. Verify mobile layout.',
      impact: 'high',
    });
    score -= 15;
  }

  // Check for touch-friendly elements
  const buttons = doc.querySelectorAll('button, [role="button"], .btn');
  const links = doc.querySelectorAll('a');

  if (buttons.length > 0 || links.length > 5) {
    findings.push({
      type: 'success',
      title: 'Interactive elements present',
      description: `Found ${buttons.length} buttons and ${links.length} links.`,
      impact: 'medium',
    });
  }

  // Check for mobile-specific meta
  const appleMobileWebApp = doc.querySelector('meta[name="apple-mobile-web-app-capable"]');
  const themeColor = doc.querySelector('meta[name="theme-color"]');

  if (themeColor) {
    findings.push({
      type: 'success',
      title: 'Theme color configured',
      description: 'Your site has a theme color for mobile browsers.',
      impact: 'low',
    });
  }

  if (appleMobileWebApp) {
    findings.push({
      type: 'success',
      title: 'iOS web app support',
      description: 'Your site supports iOS web app mode.',
      impact: 'low',
    });
  }

  return {
    score: Math.max(0, score),
    grade: scoreToGrade(Math.max(0, score)),
    findings,
    recommendations: findings
      .filter(f => f.type !== 'success')
      .map(f => f.description),
    weight: 0.15,
  };
}

// Analyze Security
function analyzeSecurity(url: string, headers: Headers): CategoryScore {
  const findings: Finding[] = [];
  let score = 100;

  // Check HTTPS
  if (url.startsWith('https://')) {
    findings.push({
      type: 'success',
      title: 'HTTPS enabled',
      description: 'Your site uses HTTPS encryption.',
      impact: 'high',
    });
  } else {
    findings.push({
      type: 'error',
      title: 'Not using HTTPS',
      description: 'Your site should use HTTPS for security and SEO benefits.',
      impact: 'high',
    });
    score -= 30;
  }

  // Check security headers
  const securityHeaders = {
    'x-frame-options': 'X-Frame-Options',
    'x-content-type-options': 'X-Content-Type-Options',
    'x-xss-protection': 'X-XSS-Protection',
    'strict-transport-security': 'HSTS',
    'content-security-policy': 'Content-Security-Policy',
  };

  let presentHeaders = 0;
  const missingHeaders: string[] = [];

  for (const [header, name] of Object.entries(securityHeaders)) {
    if (headers.get(header)) {
      presentHeaders++;
    } else {
      missingHeaders.push(name);
    }
  }

  if (presentHeaders === Object.keys(securityHeaders).length) {
    findings.push({
      type: 'success',
      title: 'All security headers present',
      description: 'Your site has all recommended security headers.',
      impact: 'high',
    });
  } else if (presentHeaders >= 3) {
    findings.push({
      type: 'warning',
      title: 'Some security headers missing',
      description: `Missing: ${missingHeaders.join(', ')}`,
      impact: 'medium',
    });
    score -= 10;
  } else {
    findings.push({
      type: 'error',
      title: 'Security headers needed',
      description: `Add these headers: ${missingHeaders.join(', ')}`,
      impact: 'high',
    });
    score -= 20;
  }

  // Check for HSTS specifically
  const hsts = headers.get('strict-transport-security');
  if (hsts) {
    findings.push({
      type: 'success',
      title: 'HSTS enabled',
      description: 'HTTP Strict Transport Security is configured.',
      impact: 'medium',
    });
  }

  return {
    score: Math.max(0, score),
    grade: scoreToGrade(Math.max(0, score)),
    findings,
    recommendations: findings
      .filter(f => f.type !== 'success')
      .map(f => f.description),
    weight: 0.15,
  };
}

// Analyze Accessibility
function analyzeAccessibility(doc: Document): CategoryScore {
  const findings: Finding[] = [];
  let score = 100;

  // Check for alt text on images
  const images = doc.querySelectorAll('img');
  const imagesWithAlt = Array.from(images).filter(
    img => img.getAttribute('alt') !== null
  );

  if (images.length === 0) {
    findings.push({
      type: 'success',
      title: 'No images to check',
      description: 'No images found on the page.',
      impact: 'low',
    });
  } else if (imagesWithAlt.length === images.length) {
    findings.push({
      type: 'success',
      title: 'All images have alt text',
      description: `All ${images.length} images have alt attributes.`,
      impact: 'high',
    });
  } else {
    const missing = images.length - imagesWithAlt.length;
    findings.push({
      type: 'error',
      title: 'Images missing alt text',
      description: `${missing} of ${images.length} images are missing alt attributes.`,
      impact: 'high',
    });
    score -= Math.min(25, missing * 5);
  }

  // Check for ARIA landmarks
  const landmarks = doc.querySelectorAll(
    '[role="main"], [role="navigation"], [role="banner"], [role="contentinfo"], main, nav, header, footer'
  );

  if (landmarks.length >= 3) {
    findings.push({
      type: 'success',
      title: 'ARIA landmarks present',
      description: `Found ${landmarks.length} landmark regions for screen readers.`,
      impact: 'medium',
    });
  } else if (landmarks.length > 0) {
    findings.push({
      type: 'warning',
      title: 'Limited ARIA landmarks',
      description: 'Add more landmark regions (main, nav, header, footer) for better accessibility.',
      impact: 'medium',
    });
    score -= 10;
  } else {
    findings.push({
      type: 'error',
      title: 'No ARIA landmarks found',
      description: 'Add landmark regions to help screen reader users navigate.',
      impact: 'medium',
    });
    score -= 15;
  }

  // Check for skip link
  const skipLink = doc.querySelector('a[href="#main"], a[href="#content"], .skip-link');
  if (skipLink) {
    findings.push({
      type: 'success',
      title: 'Skip link present',
      description: 'Users can skip to main content.',
      impact: 'medium',
    });
  } else {
    findings.push({
      type: 'warning',
      title: 'No skip link detected',
      description: 'Add a "skip to main content" link for keyboard users.',
      impact: 'medium',
    });
    score -= 5;
  }

  // Check for form labels
  const inputs = doc.querySelectorAll('input:not([type="hidden"]):not([type="submit"]):not([type="button"])');
  const inputsWithLabels = Array.from(inputs).filter(input => {
    const id = input.getAttribute('id');
    const ariaLabel = input.getAttribute('aria-label');
    const ariaLabelledby = input.getAttribute('aria-labelledby');
    const hasLabel = id && doc.querySelector(`label[for="${id}"]`);
    return hasLabel || ariaLabel || ariaLabelledby;
  });

  if (inputs.length > 0) {
    if (inputsWithLabels.length === inputs.length) {
      findings.push({
        type: 'success',
        title: 'All form inputs labeled',
        description: 'Form inputs have proper labels for accessibility.',
        impact: 'high',
      });
    } else {
      const missing = inputs.length - inputsWithLabels.length;
      findings.push({
        type: 'warning',
        title: 'Form inputs missing labels',
        description: `${missing} form inputs need labels or aria-label attributes.`,
        impact: 'high',
      });
      score -= Math.min(15, missing * 5);
    }
  }

  // Check heading hierarchy
  const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const headingLevels = Array.from(headings).map(h => parseInt(h.tagName[1]));

  let hasSkippedLevel = false;
  for (let i = 1; i < headingLevels.length; i++) {
    if (headingLevels[i] - headingLevels[i - 1] > 1) {
      hasSkippedLevel = true;
      break;
    }
  }

  if (headings.length > 0 && !hasSkippedLevel) {
    findings.push({
      type: 'success',
      title: 'Proper heading hierarchy',
      description: 'Headings follow a logical order.',
      impact: 'medium',
    });
  } else if (hasSkippedLevel) {
    findings.push({
      type: 'warning',
      title: 'Heading levels skipped',
      description: 'Headings should not skip levels (e.g., h1 to h3).',
      impact: 'medium',
    });
    score -= 10;
  }

  return {
    score: Math.max(0, score),
    grade: scoreToGrade(Math.max(0, score)),
    findings,
    recommendations: findings
      .filter(f => f.type !== 'success')
      .map(f => f.description),
    weight: 0.15,
  };
}

// Analyze UI/UX
function analyzeUiux(doc: Document): CategoryScore {
  const findings: Finding[] = [];
  let score = 100;

  // Check for clear CTA
  const ctaElements = doc.querySelectorAll(
    'a.btn, a.button, button.btn, button.button, [class*="cta"], [class*="primary"]'
  );

  if (ctaElements.length > 0) {
    findings.push({
      type: 'success',
      title: 'Call-to-action elements found',
      description: `Found ${ctaElements.length} CTA elements on the page.`,
      impact: 'high',
    });
  } else {
    // Check for any buttons/links that might be CTAs
    const buttons = doc.querySelectorAll('button, a[href]');
    if (buttons.length > 0) {
      findings.push({
        type: 'warning',
        title: 'CTA styling could be improved',
        description: 'Consider adding more prominent call-to-action buttons.',
        impact: 'medium',
      });
      score -= 10;
    } else {
      findings.push({
        type: 'error',
        title: 'No clear call-to-action',
        description: 'Add prominent CTA buttons to guide users.',
        impact: 'high',
      });
      score -= 20;
    }
  }

  // Check for navigation
  const nav = doc.querySelector('nav, [role="navigation"], header');
  if (nav) {
    findings.push({
      type: 'success',
      title: 'Navigation present',
      description: 'Your page has a navigation structure.',
      impact: 'high',
    });
  } else {
    findings.push({
      type: 'warning',
      title: 'No navigation detected',
      description: 'Add clear navigation to help users explore your site.',
      impact: 'high',
    });
    score -= 15;
  }

  // Check for modern design indicators
  const html = doc.documentElement.outerHTML;
  const hasModernFramework = /(?:tailwind|bootstrap|mui|chakra|styled-)/i.test(html);
  const hasAnimations = /(?:transition|animation|transform)/i.test(html);
  const hasFlexGrid = /(?:flex|grid)/i.test(html);

  if (hasModernFramework) {
    findings.push({
      type: 'success',
      title: 'Modern CSS framework detected',
      description: 'Your site uses modern styling approaches.',
      impact: 'medium',
    });
  }

  if (hasFlexGrid) {
    findings.push({
      type: 'success',
      title: 'Modern layout techniques',
      description: 'Uses flexbox/grid for layouts.',
      impact: 'medium',
    });
  }

  if (hasAnimations) {
    findings.push({
      type: 'success',
      title: 'Animations detected',
      description: 'Your site includes CSS transitions/animations.',
      impact: 'low',
    });
  }

  // Check for footer
  const footer = doc.querySelector('footer, [role="contentinfo"]');
  if (footer) {
    findings.push({
      type: 'success',
      title: 'Footer present',
      description: 'Your page has a proper footer section.',
      impact: 'medium',
    });
  } else {
    findings.push({
      type: 'warning',
      title: 'No footer detected',
      description: 'Consider adding a footer with contact info and links.',
      impact: 'low',
    });
    score -= 5;
  }

  // Check for social/trust indicators
  const socialLinks = doc.querySelectorAll(
    'a[href*="twitter"], a[href*="facebook"], a[href*="linkedin"], a[href*="instagram"]'
  );

  if (socialLinks.length > 0) {
    findings.push({
      type: 'success',
      title: 'Social media links present',
      description: `Found ${socialLinks.length} social media links.`,
      impact: 'low',
    });
  }

  return {
    score: Math.max(0, score),
    grade: scoreToGrade(Math.max(0, score)),
    findings,
    recommendations: findings
      .filter(f => f.type !== 'success')
      .map(f => f.description),
    weight: 0.15,
  };
}

// Calculate overall score
function calculateOverallScore(categories: Record<CategoryKey, CategoryScore>): number {
  let totalWeight = 0;
  let weightedSum = 0;

  for (const category of Object.values(categories)) {
    weightedSum += category.score * category.weight;
    totalWeight += category.weight;
  }

  return Math.round(weightedSum / totalWeight);
}

// Main analysis function
export async function analyzeWebsite(inputUrl: string): Promise<WebsiteAnalysis> {
  const url = normalizeUrl(inputUrl);

  // Fetch the website
  const { html, headers, loadTime } = await fetchWebsite(url);

  // Parse HTML
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  // Run all analyses
  const categories: Record<CategoryKey, CategoryScore> = {
    seo: analyzeSeo(doc, url),
    performance: analyzePerformance(html, loadTime),
    mobile: analyzeMobile(doc),
    security: analyzeSecurity(url, headers),
    accessibility: analyzeAccessibility(doc),
    uiux: analyzeUiux(doc),
  };

  // Calculate overall score
  const overallScore = calculateOverallScore(categories);

  return {
    id: generateId(),
    url,
    domain: extractDomain(url),
    analyzedAt: new Date().toISOString(),
    overallScore,
    letterGrade: scoreToGrade(overallScore),
    categories,
    loadTime,
  };
}
