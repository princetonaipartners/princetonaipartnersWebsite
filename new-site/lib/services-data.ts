import { IconName } from './icon-types';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  href: string;
  gradient: string; // Tailwind gradient classes
  position: {
    // Position in the floating layout (percentage based)
    top: string;
    left: string;
  };
  delay: number; // Animation delay
}

export const PRINCETON_AI_SERVICES: Service[] = [
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'AI systems that understand your business data',
    icon: 'database',
    href: '/services/ai-agents',
    gradient: 'from-blue-500 to-cyan-500',
    position: { top: '15%', left: '10%' },
    delay: 0,
  },
  {
    id: 'ai-phone-systems',
    title: 'AI Phone Systems',
    description: '24/7 intelligent call handling',
    icon: 'phone',
    href: '/services/ai-phone-systems',
    gradient: 'from-blue-600 to-blue-400',
    position: { top: '25%', left: '75%' },
    delay: 0.1,
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    description: 'End-to-end workflow automation',
    icon: 'zap',
    href: '/services/automation',
    gradient: 'from-cyan-500 to-blue-500',
    position: { top: '55%', left: '85%' },
    delay: 0.2,
  },
  {
    id: 'custom-ai-products',
    title: 'Custom AI Products',
    description: 'Bespoke AI solutions from scratch',
    icon: 'sparkles',
    href: '/services/custom-products',
    gradient: 'from-blue-500 to-indigo-500',
    position: { top: '70%', left: '15%' },
    delay: 0.3,
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'Connect AI to your existing tools',
    icon: 'gitBranch',
    href: '/services/integration',
    gradient: 'from-blue-400 to-cyan-400',
    position: { top: '45%', left: '8%' },
    delay: 0.15,
  },
  {
    id: 'web-scraping',
    title: 'Web Scraping',
    description: 'Extract data at scale with precision',
    icon: 'globe',
    href: '/services/web-scraping',
    gradient: 'from-cyan-600 to-blue-600',
    position: { top: '60%', left: '70%' },
    delay: 0.25,
  },
  {
    id: 'ai-bots',
    title: 'AI Bots',
    description: 'Custom chatbots & intelligent assistants',
    icon: 'bot',
    href: '/services/ai-bots',
    gradient: 'from-blue-500 to-blue-600',
    position: { top: '80%', left: '45%' },
    delay: 0.35,
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    description: 'Full-stack development & solutions',
    icon: 'code',
    href: '/services/custom-software',
    gradient: 'from-indigo-500 to-blue-500',
    position: { top: '35%', left: '80%' },
    delay: 0.4,
  },
];
