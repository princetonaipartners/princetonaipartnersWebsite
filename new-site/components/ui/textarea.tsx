import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[120px] w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 text-base',
          'transition-all duration-200',
          'placeholder:text-text-tertiary',
          'focus-visible:outline-none focus-visible:border-brand-primary focus-visible:ring-4 focus-visible:ring-brand-light',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'resize-y',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
