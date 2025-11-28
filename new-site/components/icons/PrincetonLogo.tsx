'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PrincetonLogoProps {
  size?: number;
  className?: string;
  variant?: 'header' | 'footer-white' | 'footer-blue' | 'full';
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

const logoVariants = {
  header: '/logos/logo-header.png',
  'footer-white': '/logos/logo-footer-white.png',
  'footer-blue': '/logos/logo-footer-blue.png',
  full: '/logos/logo-full.png',
};

export function PrincetonLogo({
  size = 24,
  className,
  variant = 'header',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}: PrincetonLogoProps) {
  return (
    <Image
      src={logoVariants[variant]}
      alt={ariaLabel || 'Princeton AI'}
      width={size}
      height={size}
      className={cn('object-contain', className)}
      aria-hidden={ariaHidden}
    />
  );
}

PrincetonLogo.displayName = 'PrincetonLogo';
