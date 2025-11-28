export type IconName =
  // Service Icons (Tabler)
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
  // UI Icons (Tabler)
  | 'menu'
  | 'close'
  | 'home'
  | 'info'
  | 'mail'
  | 'sun'
  | 'moon'
  | 'chevronRight'
  | 'chevronDown'
  | 'arrowRight'
  | 'check'
  | 'calendar'
  | 'clock'
  | 'user'
  | 'users'
  | 'settings'
  | 'search'
  | 'plus'
  | 'minus'
  | 'edit'
  | 'trash'
  | 'download'
  | 'upload'
  | 'link'
  | 'externalLink'
  | 'copy'
  | 'refresh'
  | 'send'
  | 'heart'
  | 'star'
  | 'bell'
  | 'filter'
  | 'sort'
  | 'grid'
  | 'list'
  | 'eye'
  | 'eyeOff'
  | 'lock'
  | 'unlock'
  | 'shield'
  | 'warning'
  | 'alertCircle'
  | 'helpCircle'
  | 'checkCircle'
  | 'xCircle'
  // Social Icons (Simple Icons - brand logos)
  | 'github'
  | 'linkedin'
  // Brand
  | 'princetonLogo';

export interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}
