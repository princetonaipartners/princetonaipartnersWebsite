import { iconMap } from '@/lib/icon-map';
import { IconProps } from '@/lib/icon-types';

export function Icon({
  name,
  size = 24,
  className = '',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}: IconProps) {
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
