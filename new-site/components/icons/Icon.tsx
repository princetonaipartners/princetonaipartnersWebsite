import { iconMap } from '@/lib/icon-map';
import { IconProps } from '@/lib/icon-types';
import { PrincetonLogo } from './PrincetonLogo';

export function Icon({
  name,
  size = 24,
  className = '',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}: IconProps) {
  // Handle Princeton Logo separately (it's an image, not an icon component)
  if (name === 'princetonLogo') {
    return (
      <PrincetonLogo
        size={size}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
      />
    );
  }

  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in icon map`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      className={className}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      {...props}
    />
  );
}

Icon.displayName = 'Icon';
