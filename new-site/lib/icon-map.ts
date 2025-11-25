// Ionicons 5 - Tech-forward, modern style
import {
  IoServerOutline,
  IoCallOutline,
  IoSparklesOutline,
  IoFlashOutline,
  IoGlobeOutline,
  IoGitBranchOutline,
  IoLayersOutline,
  IoMenuOutline,
  IoCloseOutline,
  IoChatbubbleEllipsesOutline,
  IoCodeSlashOutline,
  IoPhonePortraitOutline,
  IoHomeOutline,
  IoInformationCircleOutline,
  IoMailOutline,
  IoSunnyOutline,
  IoMoonOutline,
  IoChevronForwardOutline,
  IoChevronDownOutline,
} from 'react-icons/io5';

// Simple Icons for brand/social media
import {
  SiGithub,
  SiLinkedin,
} from 'react-icons/si';

import { IconType } from 'react-icons';
import { IconName } from './icon-types';

export const iconMap: Record<IconName, IconType> = {
  // Service Icons (Ionicons 5 - tech-forward aesthetic)
  database: IoServerOutline,
  phone: IoCallOutline,
  sparkles: IoSparklesOutline,
  zap: IoFlashOutline,
  globe: IoGlobeOutline,
  gitBranch: IoGitBranchOutline,
  layout: IoLayersOutline,
  bot: IoChatbubbleEllipsesOutline,
  code: IoCodeSlashOutline,
  mobile: IoPhonePortraitOutline,

  // UI Icons
  menu: IoMenuOutline,
  close: IoCloseOutline,
  home: IoHomeOutline,
  info: IoInformationCircleOutline,
  mail: IoMailOutline,
  sun: IoSunnyOutline,
  moon: IoMoonOutline,
  chevronRight: IoChevronForwardOutline,
  chevronDown: IoChevronDownOutline,

  // Social/Brand Icons (Simple Icons - official brand logos)
  github: SiGithub,
  linkedin: SiLinkedin,
};
