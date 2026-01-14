import { NextRequest, NextResponse } from 'next/server';

// Use the same Formspree endpoint as contact form
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mblkbkkn';

interface LeadSubmission {
  email: string;
  company?: string;
  websiteUrl: string;
  score: number;
  grade: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadSubmission = await request.json();

    // Validate required fields
    if (!data.email?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    if (!data.websiteUrl?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Website URL is required' },
        { status: 400 }
      );
    }

    // Extract domain for subject line
    let domain = data.websiteUrl;
    try {
      domain = new URL(data.websiteUrl).hostname;
    } catch {
      // Use full URL if parsing fails
    }

    // Forward to Formspree
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `🎯 Website Grader Lead: ${domain} (Score: ${data.score}/100)`,
        email: data.email,
        company: data.company || 'Not provided',
        websiteUrl: data.websiteUrl,
        score: `${data.score}/100`,
        grade: data.grade,
        source: 'Website Grader Tool',
        submittedAt: new Date().toISOString(),
        message: `
New lead from Website Grader!

📧 Email: ${data.email}
🏢 Company: ${data.company || 'Not provided'}
🌐 Website: ${data.websiteUrl}
📊 Score: ${data.score}/100 (Grade: ${data.grade})

This person analyzed their website and requested a full report.
${data.score < 70 ? '⚠️ Low score - high potential for redesign services!' : ''}
        `.trim(),
      }),
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: 'Lead captured successfully',
      });
    } else {
      const errorData = await response.json();
      console.error('Formspree error:', errorData);
      return NextResponse.json(
        { success: false, error: 'Failed to submit. Please try again.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
