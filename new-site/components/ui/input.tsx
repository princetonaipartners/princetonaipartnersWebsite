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
          'flex h-12 w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 text-base',
          'transition-all duration-200',
          'placeholder:text-text-tertiary',
          'focus-visible:outline-none focus-visible:border-brand-primary focus-visible:ring-4 focus-visible:ring-brand-light',
          'disabled:cursor-not-allowed disabled:opacity-50',
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
