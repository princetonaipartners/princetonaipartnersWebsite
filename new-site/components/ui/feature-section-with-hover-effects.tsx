'use client';

import { cn } from '@/lib/utils';
import {
  IconSearch,
  IconRobot,
  IconChartBar,
  IconFileText,
  IconHeadset,
  IconBrain,
  IconPlug,
  IconRefresh,
} from '@tabler/icons-react';

const features = [
  {
    title: 'Research & Discovery',
    description: 'Search, retrieve, and synthesize information from multiple sources automatically.',
    icon: <IconSearch />,
  },
  {
    title: 'Task Automation',
    description: 'Execute repetitive tasks automatically, freeing your team for higher-value work.',
    icon: <IconRobot />,
  },
  {
    title: 'Data Analysis',
    description: 'Process complex datasets and extract actionable insights in real-time.',
    icon: <IconChartBar />,
  },
  {
    title: 'Content Creation',
    description: 'Generate reports, emails, documentation, and other content on demand.',
    icon: <IconFileText />,
  },
  {
    title: 'Customer Support',
    description: '24/7 intelligent responses that resolve issues without human intervention.',
    icon: <IconHeadset />,
  },
  {
    title: 'Decision Making',
    description: 'Make intelligent choices based on rules, context, and learned patterns.',
    icon: <IconBrain />,
  },
  {
    title: 'System Integration',
    description: 'Connect your existing tools and systems together seamlessly.',
    icon: <IconPlug />,
  },
  {
    title: 'Continuous Learning',
    description: 'Improve with every interaction, getting smarter and more accurate over time.',
    icon: <IconRefresh />,
  },
];

export function FeaturesSectionWithHoverEffects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

function Feature({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature border-zinc-800',
        (index === 0 || index === 4) && 'lg:border-l border-zinc-800',
        index < 4 && 'lg:border-b border-zinc-800'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-zinc-800/50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-zinc-800/50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-zinc-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-zinc-700 group-hover/feature:bg-brand-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-zinc-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-zinc-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}

export default FeaturesSectionWithHoverEffects;
