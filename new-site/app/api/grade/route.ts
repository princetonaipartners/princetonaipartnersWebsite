/**
 * Website Grader API Route
 * POST /api/grade - Analyze a website and return scores
 */

import { NextRequest, NextResponse } from 'next/server';
import { analyzeWebsite } from '@/lib/grade/analyzer';
import type { AnalysisRequest, AnalysisResponse } from '@/lib/grade/types';

// Validate URL
function isValidUrl(url: string): boolean {
  try {
    const normalized = url.startsWith('http') ? url : `https://${url}`;
    new URL(normalized);
    return true;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest): Promise<NextResponse<AnalysisResponse>> {
  try {
    const body = await request.json() as AnalysisRequest;
    const { url } = body;

    // Validate URL
    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { success: false, error: 'URL is required' },
        { status: 400 }
      );
    }

    if (!isValidUrl(url)) {
      return NextResponse.json(
        { success: false, error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    // Run analysis
    const analysis = await analyzeWebsite(url);

    return NextResponse.json({
      success: true,
      data: analysis,
    });
  } catch (error) {
    console.error('Analysis error:', error);

    const message =
      error instanceof Error ? error.message : 'Failed to analyze website';

    // Check for common errors
    if (message.includes('Failed to fetch')) {
      return NextResponse.json(
        {
          success: false,
          error: 'Could not reach the website. Please check the URL and try again.',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
