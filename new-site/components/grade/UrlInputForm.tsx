'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UrlInputFormProps {
  onAnalyze: (url: string) => void;
  isLoading?: boolean;
}

export function UrlInputForm({ onAnalyze, isLoading = false }: UrlInputFormProps) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!url.trim()) {
      setError('Please enter a website URL');
      return;
    }

    // Basic URL validation
    let normalizedUrl = url.trim();
    if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
      normalizedUrl = `https://${normalizedUrl}`;
    }

    try {
      new URL(normalizedUrl);
      onAnalyze(normalizedUrl);
    } catch {
      setError('Please enter a valid URL');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        {/* Input container with glow effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            'relative flex items-center',
            'bg-dark-bg-card/80 backdrop-blur-sm',
            'border border-dark-border/50',
            'rounded-2xl overflow-hidden',
            'focus-within:border-brand-primary/50',
            'focus-within:shadow-brand',
            'transition-all duration-300'
          )}
        >
          {/* Icon */}
          <div className="pl-5">
            <Globe className="w-5 h-5 text-dark-text-tertiary" />
          </div>

          {/* Input */}
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your website URL (e.g., example.com)"
            disabled={isLoading}
            className={cn(
              'flex-1 py-5 px-4',
              'bg-transparent text-dark-text-primary',
              'placeholder:text-dark-text-tertiary',
              'focus:outline-none',
              'text-base md:text-lg',
              'disabled:opacity-50'
            )}
          />

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            className={cn(
              'flex items-center gap-2',
              'mr-2 px-6 py-3',
              'bg-brand-primary hover:bg-brand-secondary',
              'text-white font-semibold',
              'rounded-xl',
              'transition-colors duration-200',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="hidden sm:inline">Analyzing...</span>
              </>
            ) : (
              <>
                <span>Analyze</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Error message */}
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-8 left-0 text-sm text-red-400"
          >
            {error}
          </motion.p>
        )}
      </div>

      {/* Helper text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mt-6 text-sm text-dark-text-secondary"
      >
        Free website analysis • No signup required • Results in seconds
      </motion.p>
    </form>
  );
}
