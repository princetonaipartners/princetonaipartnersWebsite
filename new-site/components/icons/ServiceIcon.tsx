import { Icon } from './Icon';
import { IconName } from '@/lib/icon-types';

interface ServiceIconProps {
  icon: IconName;
  className?: string;
}

export function ServiceIcon({ icon, className = '' }: ServiceIconProps) {
  return <Icon name={icon} size={28} className={className} aria-hidden="true" />;
}
