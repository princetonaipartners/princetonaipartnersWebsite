import { Icon } from './Icon';
import { IconName } from '@/lib/icon-types';

interface SocialIconProps {
  platform: Extract<IconName, 'github' | 'linkedin'>;
  url: string;
  className?: string;
}

export function SocialIcon({ platform, url, className = '' }: SocialIconProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-text-secondary hover:text-brand-primary transition-colors ${className}`}
      aria-label={`Visit our ${platform} page`}
    >
      <Icon name={platform} size={20} aria-hidden={true} />
    </a>
  );
}
