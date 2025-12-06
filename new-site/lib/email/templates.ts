import type { QuoteState, PriceEstimate } from '@/lib/quote/types';
import { getProjectTypeById, getIndustryById, getComplexityById, getTimelineById } from '@/lib/quote/constants';
import { formatPrice, getFeatureNames } from '@/lib/quote/pricing';

export interface QuoteEmailData {
  state: QuoteState;
  estimate: PriceEstimate;
  quoteId: string;
  submittedAt: string;
}

export function generateUserQuoteEmail(data: QuoteEmailData): string {
  const { state, estimate, quoteId, submittedAt } = data;
  const projectType = getProjectTypeById(state.projectType!);
  const industry = getIndustryById(state.industry!);
  const complexity = getComplexityById(state.complexity);
  const timeline = getTimelineById(state.timeline);
  const featureNames = getFeatureNames(state.features);

  const priceRange = `${formatPrice(estimate.low)} - ${formatPrice(estimate.high)}`;
  const timelineRange = `${estimate.timeline.minWeeks}-${estimate.timeline.maxWeeks} weeks`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Quote from Princeton AI Partners</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 40px 40px 30px; text-align: center;">
              <h1 style="margin: 0 0 10px; color: #ffffff; font-size: 28px; font-weight: 700;">Your Quote is Ready!</h1>
              <p style="margin: 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">Thank you for your interest in Princeton AI Partners</p>
            </td>
          </tr>

          <!-- Price Card -->
          <tr>
            <td style="padding: 30px 40px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 30px; text-align: center;">
                    <p style="margin: 0 0 8px; color: rgba(255, 255, 255, 0.8); font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Estimated Investment</p>
                    <p style="margin: 0 0 12px; color: #ffffff; font-size: 36px; font-weight: 700;">${priceRange}</p>
                    <p style="margin: 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">${timelineRange} delivery</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quote ID -->
          <tr>
            <td style="padding: 0 40px 20px;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">Quote ID: <span style="color: #2563eb; font-family: monospace;">${quoteId}</span></p>
            </td>
          </tr>

          <!-- Project Summary -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <h2 style="margin: 0 0 20px; color: #1f2937; font-size: 20px; font-weight: 600;">Project Summary</h2>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 8px;">
                <tr>
                  <td style="padding: 20px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 40%;">Industry</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${industry?.name || 'Not specified'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Project Type</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${projectType?.name || 'Not specified'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Complexity</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${complexity?.name || 'Professional'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Timeline</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${timeline?.name || 'Standard'}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${featureNames.length > 0 ? `
          <!-- Features -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <h2 style="margin: 0 0 20px; color: #1f2937; font-size: 20px; font-weight: 600;">Features Included</h2>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                ${featureNames.map(name => `
                <tr>
                  <td style="padding: 6px 0; color: #4b5563; font-size: 14px;">
                    <span style="color: #10b981; margin-right: 8px;">&#10003;</span>${name}
                  </td>
                </tr>
                `).join('')}
              </table>
            </td>
          </tr>
          ` : ''}

          <!-- Price Breakdown -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <h2 style="margin: 0 0 20px; color: #1f2937; font-size: 20px; font-weight: 600;">Price Breakdown</h2>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 8px;">
                <tr>
                  <td style="padding: 20px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Base Price</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500; text-align: right;">${formatPrice(estimate.breakdown.basePrice)}</td>
                      </tr>
                      ${estimate.breakdown.complexityAdjustment !== 0 ? `
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Complexity Adjustment</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500; text-align: right;">+${formatPrice(estimate.breakdown.complexityAdjustment)}</td>
                      </tr>
                      ` : ''}
                      ${estimate.breakdown.featuresTotal > 0 ? `
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Feature Add-ons</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500; text-align: right;">+${formatPrice(estimate.breakdown.featuresTotal)}</td>
                      </tr>
                      ` : ''}
                      ${estimate.breakdown.industryAdjustment !== 0 ? `
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Industry Adjustment</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500; text-align: right;">+${formatPrice(estimate.breakdown.industryAdjustment)}</td>
                      </tr>
                      ` : ''}
                      ${estimate.breakdown.timelineAdjustment !== 0 ? `
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Timeline Adjustment</td>
                        <td style="padding: 8px 0; color: ${estimate.breakdown.timelineAdjustment < 0 ? '#10b981' : '#1f2937'}; font-size: 14px; font-weight: 500; text-align: right;">${estimate.breakdown.timelineAdjustment < 0 ? '' : '+'}${formatPrice(estimate.breakdown.timelineAdjustment)}</td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td colspan="2" style="padding: 16px 0 8px;">
                          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 0;">
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 16px; font-weight: 600;">Estimated Total</td>
                        <td style="padding: 8px 0; color: #2563eb; font-size: 16px; font-weight: 700; text-align: right;">${priceRange}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA Buttons -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding-right: 10px; width: 50%;">
                    <a href="https://calendly.com/princeton-ai" style="display: block; background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: #ffffff; text-decoration: none; padding: 14px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; text-align: center;">Schedule a Call</a>
                  </td>
                  <td style="padding-left: 10px; width: 50%;">
                    <a href="https://princeton-ai.com" style="display: block; background-color: #f3f4f6; color: #1f2937; text-decoration: none; padding: 14px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; text-align: center;">Visit Our Website</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 10px; color: #6b7280; font-size: 14px;">Questions? Reply to this email or contact us at</p>
              <a href="mailto:hello@princeton-ai.com" style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: 500;">hello@princeton-ai.com</a>
              <p style="margin: 20px 0 0; color: #9ca3af; font-size: 12px;">This estimate is valid for 30 days. Final pricing may vary based on detailed requirements.</p>
              <p style="margin: 10px 0 0; color: #9ca3af; font-size: 12px;">&copy; ${new Date().getFullYear()} Princeton AI Partners. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function generateTeamNotificationEmail(data: QuoteEmailData): string {
  const { state, estimate, quoteId, submittedAt } = data;
  const projectType = getProjectTypeById(state.projectType!);
  const industry = getIndustryById(state.industry!);
  const complexity = getComplexityById(state.complexity);
  const timeline = getTimelineById(state.timeline);
  const featureNames = getFeatureNames(state.features);

  const priceRange = `${formatPrice(estimate.low)} - ${formatPrice(estimate.high)}`;
  const timelineRange = `${estimate.timeline.minWeeks}-${estimate.timeline.maxWeeks} weeks`;

  const techStackSummary = Object.entries(state.techStack)
    .filter(([key, value]) => value && value !== 'no-preference' && key !== 'existingInfrastructure')
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ') || 'No preferences specified';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quote Request - Princeton AI Partners</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0 0 5px; color: #ffffff; font-size: 24px; font-weight: 700;">New Quote Request!</h1>
              <p style="margin: 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">Quote ID: ${quoteId}</p>
            </td>
          </tr>

          <!-- Quick Stats -->
          <tr>
            <td style="padding: 30px 40px 20px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="width: 33%; text-align: center; padding: 15px; background-color: #f0fdf4; border-radius: 8px;">
                    <p style="margin: 0 0 5px; color: #059669; font-size: 20px; font-weight: 700;">${priceRange}</p>
                    <p style="margin: 0; color: #6b7280; font-size: 12px;">Estimate</p>
                  </td>
                  <td style="width: 10px;"></td>
                  <td style="width: 33%; text-align: center; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
                    <p style="margin: 0 0 5px; color: #2563eb; font-size: 20px; font-weight: 700;">${timelineRange}</p>
                    <p style="margin: 0; color: #6b7280; font-size: 12px;">Timeline</p>
                  </td>
                  <td style="width: 10px;"></td>
                  <td style="width: 33%; text-align: center; padding: 15px; background-color: #fef3c7; border-radius: 8px;">
                    <p style="margin: 0 0 5px; color: #d97706; font-size: 20px; font-weight: 700;">${state.contact.budget || 'N/A'}</p>
                    <p style="margin: 0; color: #6b7280; font-size: 12px;">Budget</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Info -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <h2 style="margin: 0 0 15px; color: #1f2937; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Contact Information</h2>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 30%;">Name</td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${state.contact.firstName} ${state.contact.lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td>
                  <td style="padding: 8px 0;"><a href="mailto:${state.contact.email}" style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: 500;">${state.contact.email}</a></td>
                </tr>
                ${state.contact.phone ? `
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Phone</td>
                  <td style="padding: 8px 0;"><a href="tel:${state.contact.phone}" style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: 500;">${state.contact.phone}</a></td>
                </tr>
                ` : ''}
                ${state.contact.company ? `
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Company</td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${state.contact.company}</td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>

          <!-- Project Details -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <h2 style="margin: 0 0 15px; color: #1f2937; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Project Details</h2>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 30%;">Industry</td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${industry?.name}${state.industryOther ? ` (${state.industryOther})` : ''}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Project Type</td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${projectType?.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Complexity</td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${complexity?.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Timeline</td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${timeline?.name}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Features -->
          ${featureNames.length > 0 ? `
          <tr>
            <td style="padding: 0 40px 30px;">
              <h2 style="margin: 0 0 15px; color: #1f2937; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Selected Features (${featureNames.length})</h2>
              <p style="margin: 0; color: #4b5563; font-size: 14px; line-height: 1.6;">${featureNames.join(', ')}</p>
            </td>
          </tr>
          ` : ''}

          <!-- Tech Stack -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <h2 style="margin: 0 0 15px; color: #1f2937; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Tech Stack Preferences</h2>
              <p style="margin: 0 0 10px; color: #4b5563; font-size: 14px;">${techStackSummary}</p>
              ${state.techStack.existingInfrastructure ? `
              <p style="margin: 10px 0 0; padding: 12px; background-color: #f9fafb; border-radius: 6px; color: #4b5563; font-size: 14px;">
                <strong>Existing Infrastructure:</strong> ${state.techStack.existingInfrastructure}
              </p>
              ` : ''}
            </td>
          </tr>

          <!-- Project Description -->
          ${state.contact.description ? `
          <tr>
            <td style="padding: 0 40px 30px;">
              <h2 style="margin: 0 0 15px; color: #1f2937; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Project Description</h2>
              <p style="margin: 0; padding: 15px; background-color: #f9fafb; border-radius: 8px; color: #4b5563; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${state.contact.description}</p>
            </td>
          </tr>
          ` : ''}

          <!-- Preferences -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <h2 style="margin: 0 0 15px; color: #1f2937; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Delivery Preferences</h2>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding: 5px 15px 5px 0;">
                    <span style="display: inline-block; padding: 6px 12px; background-color: ${state.contact.wantsPdf ? '#dcfce7' : '#f3f4f6'}; color: ${state.contact.wantsPdf ? '#166534' : '#6b7280'}; border-radius: 20px; font-size: 13px; font-weight: 500;">
                      ${state.contact.wantsPdf ? '&#10003;' : '&#10005;'} PDF Quote
                    </span>
                  </td>
                  <td style="padding: 5px 0;">
                    <span style="display: inline-block; padding: 6px 12px; background-color: ${state.contact.wantsCall ? '#dcfce7' : '#f3f4f6'}; color: ${state.contact.wantsCall ? '#166534' : '#6b7280'}; border-radius: 20px; font-size: 13px; font-weight: 500;">
                      ${state.contact.wantsCall ? '&#10003;' : '&#10005;'} Discovery Call
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">Submitted at ${new Date(submittedAt).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
