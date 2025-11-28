import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 text-base text-zinc-900',
          'transition-all duration-200',
          'placeholder:text-zinc-400',
          'focus-visible:outline-none focus-visible:border-brand-primary focus-visible:ring-4 focus-visible:ring-brand-primary/20',
          'disabled:cursor-not-allowed disabled:opacity-50',
          // Dark mode
          'dark:bg-zinc-900 dark:border-zinc-600 dark:text-white',
          'dark:placeholder:text-zinc-500',
          'dark:focus-visible:border-brand-primary dark:focus-visible:ring-brand-primary/30',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
