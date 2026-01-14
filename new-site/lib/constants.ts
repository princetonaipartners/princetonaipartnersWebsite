// Site-wide constants

import type { IconName } from './icon-types';

export const SITE_CONFIG = {
  name: 'Princeton AI Partners',
  description: 'We build custom AI agents, phone systems, web scrapers, and software in weeks.',
  url: 'https://princeton-ai.com',
  links: {},
};

interface NavDropdownItem {
  title: string;
  href: string;
  icon: IconName;
}

interface NavLink {
  title: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

export const NAV_LINKS: NavLink[] = [
  {
    title: 'Solutions',
    href: '/solutions',
    dropdown: [
      { title: 'Web Development & SEO', href: '/solutions/web-development', icon: 'layout' },
      { title: 'AI Agents (RAG)', href: '/solutions/ai-agents', icon: 'database' },
      { title: 'AI Phone Systems', href: '/solutions/ai-phone-systems', icon: 'phone' },
      { title: 'Process Automation', href: '/solutions/process-automation', icon: 'zap' },
      { title: 'Custom Bots', href: '/solutions/custom-bots', icon: 'bot' },
      { title: 'Bespoke Software', href: '/solutions/bespoke-software', icon: 'sparkles' },
      { title: 'Web Scraping', href: '/solutions/web-scraping', icon: 'globe' },
    ],
  },
  { title: 'Who We Serve', href: '/clients' },
  { title: 'Blog', href: '/blog' },
  { title: 'About Us', href: '/about' },
  { title: 'Contact', href: '/contact' },
];
