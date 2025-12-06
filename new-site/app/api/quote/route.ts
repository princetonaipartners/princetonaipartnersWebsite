import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateUserQuoteEmail, generateTeamNotificationEmail, type QuoteEmailData } from '@/lib/email/templates';
import type { QuoteState, PriceEstimate } from '@/lib/quote/types';

// Lazy initialization to avoid build-time errors when API key is not set
let resendClient: Resend | null = null;
function getResend(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null;
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

interface QuoteSubmission {
  quoteId: string;
  industry: QuoteState['industry'];
  industryOther?: string;
  projectType: QuoteState['projectType'];
  complexity: QuoteState['complexity'];
  features: QuoteState['features'];
  techStack: QuoteState['techStack'];
  timeline: QuoteState['timeline'];
  contact: QuoteState['contact'];
  estimate: PriceEstimate;
  submittedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: QuoteSubmission = await request.json();

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

    if (!data.industry) {
      return NextResponse.json(
        { success: false, error: 'Industry is required' },
        { status: 400 }
      );
    }

    // Prepare email data
    const emailData: QuoteEmailData = {
      state: {
        currentStep: 7,
        industry: data.industry,
        industryOther: data.industryOther,
        projectType: data.projectType,
        complexity: data.complexity,
        features: data.features,
        techStack: data.techStack,
        timeline: data.timeline,
        contact: data.contact,
      },
      estimate: data.estimate,
      quoteId: data.quoteId,
      submittedAt: data.submittedAt,
    };

    // Log the quote submission
    const contactName = data.contact.firstName + ' ' + data.contact.lastName;
    console.log('Quote Submission:', {
      quoteId: data.quoteId,
      industry: data.industry,
      industryOther: data.industryOther,
      projectType: data.projectType,
      complexity: data.complexity,
      features: data.features,
      techStack: data.techStack,
      timeline: data.timeline,
      contact: {
        name: contactName,
        email: data.contact.email,
        company: data.contact.company,
        phone: data.contact.phone,
        budget: data.contact.budget,
      },
      estimate: data.estimate,
      submittedAt: data.submittedAt,
    });

    // Send emails only if Resend API key is configured
    const resend = getResend();
    if (resend) {
      const emailPromises: Promise<unknown>[] = [];

      // Send email to user with quote
      const userSubject = 'Your Quote from Princeton AI Partners - ' + data.quoteId;
      emailPromises.push(
        resend.emails.send({
          from: process.env.EMAIL_FROM || 'Princeton AI Partners <quotes@princeton-ai.com>',
          to: data.contact.email,
          subject: userSubject,
          html: generateUserQuoteEmail(emailData),
          replyTo: process.env.EMAIL_REPLY_TO || 'hello@princeton-ai.com',
        })
      );

      // Send notification email to team
      const teamEmail = process.env.TEAM_NOTIFICATION_EMAIL;
      if (teamEmail) {
        const teamSubject = 'New Quote Request: ' + contactName + ' - ' + data.quoteId;
        emailPromises.push(
          resend.emails.send({
            from: process.env.EMAIL_FROM || 'Princeton AI Partners <quotes@princeton-ai.com>',
            to: teamEmail,
            subject: teamSubject,
            html: generateTeamNotificationEmail(emailData),
            replyTo: data.contact.email,
          })
        );
      }

      // Send all emails concurrently
      try {
        const results = await Promise.allSettled(emailPromises);

        // Log any email failures but do not fail the request
        results.forEach((result, idx) => {
          if (result.status === 'rejected') {
            console.error('Email ' + (idx + 1) + ' failed:', result.reason);
          }
        });

        // Check if user email was sent successfully
        if (results[0].status === 'rejected') {
          console.error('Failed to send user email:', results[0].reason);
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
      }
    } else {
      console.log('RESEND_API_KEY not configured - skipping email sending');
    }

    return NextResponse.json({
      success: true,
      quoteId: data.quoteId,
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
