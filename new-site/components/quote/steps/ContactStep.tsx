'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Building2, FileText, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { QuoteState } from '@/lib/quote/types';

interface ContactStepProps {
  contact: QuoteState['contact'];
  onUpdate: (updates: Partial<QuoteState['contact']>) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
}

export function ContactStep({
  contact,
  onUpdate,
  onSubmit,
  onBack,
  isSubmitting,
}: ContactStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!contact.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!contact.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!contact.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit();
    }
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
          Where should we send your quote?
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary">
          We&apos;ll send you a detailed quote and project brief
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-dark-bg-card rounded-2xl border border-neutral-200 dark:border-dark-border p-6 md:p-8 space-y-6"
      >
        {/* Name fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
              First Name <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="John"
              value={contact.firstName}
              onChange={(e) => onUpdate({ firstName: e.target.value })}
              className={errors.firstName ? 'border-red-500' : ''}
            />
            {errors.firstName && (
              <p className="text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
              Last Name <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="Smith"
              value={contact.lastName}
              onChange={(e) => onUpdate({ lastName: e.target.value })}
              className={errors.lastName ? 'border-red-500' : ''}
            />
            {errors.lastName && (
              <p className="text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            placeholder="john@company.com"
            value={contact.email}
            onChange={(e) => onUpdate({ email: e.target.value })}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Company (optional) */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            Company <span className="text-text-tertiary">(optional)</span>
          </label>
          <Input
            placeholder="Acme Inc."
            value={contact.company || ''}
            onChange={(e) => onUpdate({ company: e.target.value })}
          />
        </div>

        {/* Phone (optional) */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Phone <span className="text-text-tertiary">(optional)</span>
          </label>
          <Input
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={contact.phone || ''}
            onChange={(e) => onUpdate({ phone: e.target.value })}
          />
        </div>

        {/* Project description (optional) */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
            Project Description <span className="text-text-tertiary">(optional)</span>
          </label>
          <Textarea
            placeholder="Tell us a bit about your project..."
            rows={3}
            value={contact.description || ''}
            onChange={(e) => onUpdate({ description: e.target.value })}
          />
        </div>

        {/* Preferences */}
        <div className="space-y-3 pt-2">
          <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
            I would like to:
          </label>
          <div className="space-y-2">
            <label
              className={cn(
                'flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all duration-300',
                contact.wantsPdf
                  ? 'border-brand-primary bg-brand-light/30 dark:bg-brand-primary/10'
                  : 'border-neutral-200 dark:border-dark-border hover:border-brand-primary/50'
              )}
            >
              <input
                type="checkbox"
                checked={contact.wantsPdf}
                onChange={(e) => onUpdate({ wantsPdf: e.target.checked })}
                className="sr-only"
              />
              <div
                className={cn(
                  'w-5 h-5 rounded-md border-2 flex items-center justify-center',
                  contact.wantsPdf
                    ? 'border-brand-primary bg-brand-primary'
                    : 'border-neutral-300 dark:border-dark-border'
                )}
              >
                {contact.wantsPdf && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 12 12">
                    <path
                      fill="currentColor"
                      d="M10.28 2.28a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L4.25 7.2l4.97-4.92a.75.75 0 0 1 1.06 0Z"
                    />
                  </svg>
                )}
              </div>
              <FileText className="w-5 h-5 text-brand-primary" />
              <span className="text-text-primary dark:text-dark-text-primary">
                Receive PDF quote via email
              </span>
            </label>

            <label
              className={cn(
                'flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all duration-300',
                contact.wantsCall
                  ? 'border-brand-primary bg-brand-light/30 dark:bg-brand-primary/10'
                  : 'border-neutral-200 dark:border-dark-border hover:border-brand-primary/50'
              )}
            >
              <input
                type="checkbox"
                checked={contact.wantsCall}
                onChange={(e) => onUpdate({ wantsCall: e.target.checked })}
                className="sr-only"
              />
              <div
                className={cn(
                  'w-5 h-5 rounded-md border-2 flex items-center justify-center',
                  contact.wantsCall
                    ? 'border-brand-primary bg-brand-primary'
                    : 'border-neutral-300 dark:border-dark-border'
                )}
              >
                {contact.wantsCall && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 12 12">
                    <path
                      fill="currentColor"
                      d="M10.28 2.28a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L4.25 7.2l4.97-4.92a.75.75 0 0 1 1.06 0Z"
                    />
                  </svg>
                )}
              </div>
              <Calendar className="w-5 h-5 text-brand-primary" />
              <span className="text-text-primary dark:text-dark-text-primary">
                Schedule a discovery call
              </span>
            </label>
          </div>
        </div>
      </motion.div>

      {/* Trust badges */}
      <div className="flex items-center justify-center gap-6 text-sm text-text-tertiary dark:text-dark-text-tertiary">
        <span>256-bit SSL</span>
        <span>No spam, ever</span>
        <span>Free quote</span>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack} disabled={isSubmitting}>
          Back
        </Button>
        <Button onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Get My Quote'}
        </Button>
      </div>
    </div>
  );
}
