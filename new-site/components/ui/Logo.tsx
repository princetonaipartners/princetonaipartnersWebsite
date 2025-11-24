import Image from 'next/image';
import { cn } from '@/lib/utils';

export type LogoVariant = 'header' | 'footer-white' | 'footer-blue' | 'full' | 'icon';
export type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  priority?: boolean;
}

const LOGO_PATHS: Record<LogoVariant, string> = {
  header: '/logos/logo-header.png',
  'footer-white': '/logos/logo-footer-white.png',
  'footer-blue': '/logos/logo-footer-blue.png',
  full: '/logos/logo-full.png',
  icon: '/logos/logo-header.png',
};

const SIZE_MAP: Record<LogoSize, { width: number; height: number }> = {
  sm: { width: 24, height: 24 },
  md: { width: 32, height: 32 },
  lg: { width: 40, height: 40 },
  xl: { width: 56, height: 56 },
};

/**
 * Reusable Logo component for consistent branding across the site
 *
 * @param variant - The logo variant to display (header, footer-white, footer-blue, full, icon)
 * @param size - The size of the logo (sm, md, lg, xl)
 * @param className - Additional CSS classes
 * @param priority - Whether to prioritize loading (use for above-the-fold logos)
 */
export function Logo({
  variant = 'header',
  size = 'lg',
  className,
  priority = false,
}: LogoProps) {
  const dimensions = SIZE_MAP[size];
  const logoPath = LOGO_PATHS[variant];

  return (
    <Image
      src={logoPath}
      alt="Princeton AI Partners"
      width={dimensions.width}
      height={dimensions.height}
      className={cn('transition-transform hover:scale-105', className)}
      priority={priority}
    />
  );
}
