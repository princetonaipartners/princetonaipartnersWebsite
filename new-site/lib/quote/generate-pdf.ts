'use client';

import { pdf } from '@react-pdf/renderer';
import { QuotePDF } from './pdf-template';
import type { QuoteState, PriceEstimate } from './types';

export async function generateQuotePDF(
  state: QuoteState,
  estimate: PriceEstimate,
  quoteId: string
): Promise<Blob> {
  const document = QuotePDF({ state, estimate, quoteId });
  const blob = await pdf(document).toBlob();
  return blob;
}

export async function downloadQuotePDF(
  state: QuoteState,
  estimate: PriceEstimate,
  quoteId: string
): Promise<void> {
  const blob = await generateQuotePDF(state, estimate, quoteId);

  // Create download link
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Princeton-AI-Quote-${quoteId}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
