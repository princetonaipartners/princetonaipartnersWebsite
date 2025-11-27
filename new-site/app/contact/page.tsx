'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Send, Check, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FadeInSection } from '@/components/animations/FadeInSection';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mblkbkkn', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormState('success');
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setErrorMessage('There was a problem submitting your form. Please try again.');
        }
        setFormState('error');
      }
    } catch {
      setErrorMessage('There was a problem submitting your form. Please try again.');
      setFormState('error');
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg-primary">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s Build Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-400">
                Great
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Tell us about your business and goals. We&apos;ll get back to you within 24 hours to schedule your free consultation.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-32 px-6">
        <div className="max-w-2xl mx-auto">
          <FadeInSection delay={0.2}>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10">
              {formState === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">Thank You!</h2>
                  <p className="text-zinc-400">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={cn(
                        'w-full px-4 py-3 rounded-lg',
                        'bg-zinc-800/50 border border-zinc-700',
                        'text-white placeholder-zinc-500',
                        'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent',
                        'transition-all duration-200'
                      )}
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={cn(
                        'w-full px-4 py-3 rounded-lg',
                        'bg-zinc-800/50 border border-zinc-700',
                        'text-white placeholder-zinc-500',
                        'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent',
                        'transition-all duration-200'
                      )}
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={cn(
                        'w-full px-4 py-3 rounded-lg resize-none',
                        'bg-zinc-800/50 border border-zinc-700',
                        'text-white placeholder-zinc-500',
                        'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent',
                        'transition-all duration-200'
                      )}
                      placeholder="Tell us about your business, your goals, and a good callback number..."
                    />
                  </div>

                  {/* Error Message */}
                  {formState === 'error' && errorMessage && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-red-400 text-sm">{errorMessage}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className={cn(
                      'w-full flex items-center justify-center gap-2',
                      'px-6 py-4 rounded-lg',
                      'bg-gradient-to-r from-brand-primary to-brand-secondary',
                      'text-white font-semibold text-lg',
                      'hover:opacity-90 transition-opacity',
                      'disabled:opacity-50 disabled:cursor-not-allowed'
                    )}
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Schedule Your Free Consultation
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeInSection>

          {/* Contact Info */}
          <FadeInSection delay={0.4}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-5 h-5 text-brand-primary" />
                </div>
                <p className="text-sm text-zinc-400">Email</p>
                <a href="mailto:hello@princeton-ai.com" className="text-white hover:text-brand-primary transition-colors">
                  hello@princeton-ai.com
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-5 h-5 text-brand-primary" />
                </div>
                <p className="text-sm text-zinc-400">Phone</p>
                <a href="tel:+16095551234" className="text-white hover:text-brand-primary transition-colors">
                  (609) 555-1234
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <p className="text-sm text-zinc-400">Location</p>
                <p className="text-white">Princeton, NJ</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
