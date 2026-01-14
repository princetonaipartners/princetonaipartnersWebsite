'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight, Check, Building2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { GradeLevel } from '@/lib/grade/types';

interface LeadCaptureFormProps {
  websiteUrl: string;
  score: number;
  grade: GradeLevel;
}

export function LeadCaptureForm({ websiteUrl, score, grade }: LeadCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/grade/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          company: company || undefined,
          websiteUrl,
          score,
          grade,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setError(data.error || 'Failed to submit. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 bg-dark-bg-card/50 backdrop-blur-sm border border-dark-border/50 rounded-2xl text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-16 h-16 mx-auto mb-4 rounded-full bg-colorful-green/20 flex items-center justify-center"
        >
          <Check className="w-8 h-8 text-colorful-green" />
        </motion.div>
        <h3 className="text-xl font-semibold text-dark-text-primary mb-2">
          Check Your Inbox!
        </h3>
        <p className="text-dark-text-secondary">
          We've sent the full report to <span className="text-white">{email}</span>
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 md:p-8 bg-gradient-to-br from-dark-bg-card/80 to-dark-bg-card/50 backdrop-blur-sm border border-dark-border/50 rounded-2xl"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-xl bg-brand-primary/20">
          <Download className="w-6 h-6 text-brand-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-dark-text-primary">
            Get Your Full Report
          </h3>
          <p className="text-sm text-dark-text-secondary mt-1">
            Detailed PDF with actionable recommendations
          </p>
        </div>
      </div>

      {/* Benefits */}
      <ul className="space-y-2 mb-6">
        {[
          'Complete breakdown of all issues found',
          'Step-by-step fix instructions',
          'Priority ranking by impact',
          'Comparison to industry benchmarks',
        ].map((benefit, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-dark-text-secondary">
            <Check className="w-4 h-4 text-colorful-green flex-shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email input */}
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-text-tertiary" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className={cn(
              'w-full pl-12 pr-4 py-3.5',
              'bg-dark-bg-tertiary/50 border border-dark-border/50',
              'rounded-xl text-dark-text-primary',
              'placeholder:text-dark-text-tertiary',
              'focus:outline-none focus:border-brand-primary/50',
              'transition-colors'
            )}
          />
        </div>

        {/* Company input (optional) */}
        <div className="relative">
          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-text-tertiary" />
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company name (optional)"
            className={cn(
              'w-full pl-12 pr-4 py-3.5',
              'bg-dark-bg-tertiary/50 border border-dark-border/50',
              'rounded-xl text-dark-text-primary',
              'placeholder:text-dark-text-tertiary',
              'focus:outline-none focus:border-brand-primary/50',
              'transition-colors'
            )}
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: isLoading ? 1 : 1.02 }}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
          className={cn(
            'w-full flex items-center justify-center gap-2',
            'py-4 px-6',
            'bg-brand-primary hover:bg-brand-secondary',
            'text-white font-semibold',
            'rounded-xl',
            'transition-colors duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send My Report</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </motion.button>

        <p className="text-xs text-center text-dark-text-tertiary">
          No spam, ever. We'll only send your report.
        </p>
      </form>

      {/* Score-based CTA */}
      {score < 70 && (
        <div className="mt-6 pt-6 border-t border-dark-border/30">
          <p className="text-sm text-dark-text-secondary text-center">
            Your site scored <span className="text-colorful-orange font-semibold">{score}/100</span>.
            {' '}
            <a
              href="/quote"
              className="text-brand-primary hover:underline"
            >
              Let us help improve it →
            </a>
          </p>
        </div>
      )}
    </motion.div>
  );
}
