import { NextRequest, NextResponse } from 'next/server';
import { generateQuoteId } from '@/lib/quote/pricing';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Generate unique quote ID
    const quoteId = generateQuoteId();

    // Validate required fields
    if (!data.contact?.email || !data.contact?.firstName || !data.contact?.lastName) {
      return NextResponse.json(
        { success: false, error: 'Missing required contact information' },
        { status: 400 }
      );
    }

    if (!data.projectType) {
      return NextResponse.json(
        { success: false, error: 'Project type is required' },
        { status: 400 }
      );
    }

    // Log the quote submission (in production, save to database)
    console.log('Quote Submission:', {
      quoteId,
      projectType: data.projectType,
      complexity: data.complexity,
      features: data.features,
      timeline: data.timeline,
      contact: {
        name: `${data.contact.firstName} ${data.contact.lastName}`,
        email: data.contact.email,
        company: data.contact.company,
        phone: data.contact.phone,
      },
      estimate: data.estimate,
      submittedAt: data.submittedAt,
    });

    // TODO: Send email to user with quote
    // TODO: Send notification email to team
    // TODO: Save to database/CRM

    // For now, just return success
    return NextResponse.json({
      success: true,
      quoteId,
      message: 'Quote submitted successfully',
    });
  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process quote submission' },
      { status: 500 }
    );
  }
}
