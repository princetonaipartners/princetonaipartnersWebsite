'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Building2, FileText, Calendar, Shield, Sparkles, CheckCircle2, User, Loader2, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { QuoteState, BudgetRange } from '@/lib/quote/types';
import { BUDGET_OPTIONS } from '@/lib/quote/constants';

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
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
          Almost there!
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary">
          Where should we send your personalized quote?
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={cn(
          "relative rounded-2xl overflow-hidden",
          "before:absolute before:inset-0 before:rounded-2xl before:p-[1px]",
          "before:bg-gradient-to-b before:from-zinc-200 before:via-zinc-100 before:to-zinc-200",
          "dark:before:from-zinc-700 dark:before:via-zinc-800 dark:before:to-zinc-700"
        )}
      >
        <div className="relative bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              <User className="w-4 h-4" />
              Contact Information
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
                  First Name <span className="text-brand-primary">*</span>
                </label>
                <Input
                  placeholder="John"
                  value={contact.firstName}
                  onChange={(e) => onUpdate({ firstName: e.target.value })}
                  className={errors.firstName ? 'border-red-500 dark:border-red-500' : ''}
                />
                {errors.firstName && (
                  <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-500">
                    {errors.firstName}
                  </motion.p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
                  Last Name <span className="text-brand-primary">*</span>
                </label>
                <Input
                  placeholder="Smith"
                  value={contact.lastName}
                  onChange={(e) => onUpdate({ lastName: e.target.value })}
                  className={errors.lastName ? 'border-red-500 dark:border-red-500' : ''}
                />
                {errors.lastName && (
                  <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-500">
                    {errors.lastName}
                  </motion.p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-primary" />
                Email <span className="text-brand-primary">*</span>
              </label>
              <Input
                type="email"
                placeholder="john@company.com"
                value={contact.email}
                onChange={(e) => onUpdate({ email: e.target.value })}
                className={errors.email ? 'border-red-500 dark:border-red-500' : ''}
              />
              {errors.email && (
                <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-500">
                  {errors.email}
                </motion.p>
              )}
            </div>

            <div className="border-t border-zinc-200 dark:border-zinc-800" />

            <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              Additional Details
              <span className="text-xs font-normal normal-case">(optional)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary">Company</label>
                <Input
                  placeholder="Acme Inc."
                  value={contact.company || ''}
                  onChange={(e) => onUpdate({ company: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary flex items-center gap-2">
                  <Phone className="w-4 h-4 text-zinc-400" />
                  Phone
                </label>
                <Input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={contact.phone || ''}
                  onChange={(e) => onUpdate({ phone: e.target.value })}
                />
              </div>
            </div>

            {/* Budget Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-zinc-400" />
                Budget Range
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {BUDGET_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => onUpdate({ budget: option.id })}
                    className={cn(
                      'px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all',
                      contact.budget === option.id
                        ? 'border-brand-primary bg-brand-light/50 dark:bg-brand-primary/10 text-brand-primary'
                        : 'border-zinc-200 dark:border-zinc-700 hover:border-brand-primary/50 text-text-secondary'
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary">Project Description</label>
              <Textarea
                placeholder="Tell us a bit about your project goals and requirements..."
                rows={3}
                value={contact.description || ''}
                onChange={(e) => onUpdate({ description: e.target.value })}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Preferences */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
        <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider px-1">
          Delivery Preferences
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onUpdate({ wantsPdf: !contact.wantsPdf })}
            className={cn(
              'relative flex flex-col items-start gap-3 p-5 rounded-xl border-2 text-left transition-all duration-300',
              contact.wantsPdf
                ? 'border-brand-primary bg-brand-primary/5 dark:bg-brand-primary/10'
                : 'border-zinc-200 dark:border-zinc-700 hover:border-brand-primary/50 bg-white dark:bg-zinc-800'
            )}
          >
            <div className="flex items-center justify-between w-full">
              <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center transition-colors', contact.wantsPdf ? 'bg-brand-primary text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500')}>
                <FileText className="w-5 h-5" />
              </div>
              <div className={cn('w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all', contact.wantsPdf ? 'border-brand-primary bg-brand-primary' : 'border-zinc-300 dark:border-zinc-600')}>
                {contact.wantsPdf && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
            </div>
            <div>
              <div className="font-semibold text-text-primary dark:text-dark-text-primary">PDF Quote</div>
              <div className="text-sm text-text-secondary dark:text-dark-text-secondary">Get a detailed PDF sent to your email</div>
            </div>
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onUpdate({ wantsCall: !contact.wantsCall })}
            className={cn(
              'relative flex flex-col items-start gap-3 p-5 rounded-xl border-2 text-left transition-all duration-300',
              contact.wantsCall
                ? 'border-brand-primary bg-brand-primary/5 dark:bg-brand-primary/10'
                : 'border-zinc-200 dark:border-zinc-700 hover:border-brand-primary/50 bg-white dark:bg-zinc-800'
            )}
          >
            <div className="flex items-center justify-between w-full">
              <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center transition-colors', contact.wantsCall ? 'bg-brand-primary text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500')}>
                <Calendar className="w-5 h-5" />
              </div>
              <div className={cn('w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all', contact.wantsCall ? 'border-brand-primary bg-brand-primary' : 'border-zinc-300 dark:border-zinc-600')}>
                {contact.wantsCall && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
            </div>
            <div>
              <div className="font-semibold text-text-primary dark:text-dark-text-primary">Discovery Call</div>
              <div className="text-sm text-text-secondary dark:text-dark-text-secondary">Schedule a call to discuss your project</div>
            </div>
          </motion.button>
        </div>
      </motion.div>

      {/* Trust Badges */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-6">
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <Shield className="w-4 h-4 text-green-500" />
          <span>256-bit SSL Encrypted</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          <span>No spam, ever</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <Sparkles className="w-4 h-4 text-brand-primary" />
          <span>100% Free quote</span>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack} disabled={isSubmitting} className="px-6">Back</Button>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={cn(
            "px-8 bg-gradient-to-r from-brand-primary to-blue-600 hover:from-brand-primary/90 hover:to-blue-600/90",
            "shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/30",
            "transition-all duration-300"
          )}
        >
          {isSubmitting ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" />Submitting...</>) : ('Get My Quote')}
        </Button>
      </motion.div>
    </div>
  );
}
