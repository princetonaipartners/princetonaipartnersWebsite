import { IconType } from 'react-icons';

export type IconName =
  // Service Icons
  | 'database'
  | 'phone'
  | 'sparkles'
  | 'zap'
  | 'globe'
  | 'gitBranch'
  | 'layout'
  | 'bot'
  | 'code'
  | 'mobile'
  // UI Icons
  | 'menu'
  | 'close'
  // Social Icons
  | 'github'
  | 'linkedin';

export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}
