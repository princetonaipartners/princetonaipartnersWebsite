// Site-wide constants

export const SITE_CONFIG = {
  name: 'Princeton AI Partners',
  description: 'We build custom AI agents, phone systems, web scrapers, and software in weeks.',
  url: 'https://princeton-ai.com',
  links: {
    github: 'https://github.com/princetonaipartners',
  },
};

export const NAV_LINKS = [
  {
    title: 'Solutions',
    href: '/solutions',
    dropdown: [
      { title: 'Web Development & SEO', href: '/solutions/web-development', icon: 'Layout' },
      { title: 'AI Agents (RAG)', href: '/solutions/ai-agents', icon: 'Database' },
      { title: 'AI Phone Systems', href: '/solutions/ai-phone-systems', icon: 'Phone' },
      { title: 'Process Automation', href: '/solutions/process-automation', icon: 'Zap' },
      { title: 'Custom Bots', href: '/solutions/custom-bots', icon: 'MessageSquare' },
      { title: 'Bespoke Software', href: '/solutions/bespoke-software', icon: 'Sparkles' },
      { title: 'Web Scraping', href: '/solutions/web-scraping', icon: 'Globe' },
    ],
  },
  { title: 'Who We Serve', href: '/clients' },
  { title: 'About Us', href: '/about' },
  { title: 'Contact', href: '/contact' },
];
