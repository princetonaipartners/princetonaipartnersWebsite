'use client';

import { motion } from 'framer-motion';
import { CircleDot, SkipForward } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import type { TechStackPreferences, FrontendFramework, BackendTech, AIProvider, DatabasePreference, HostingPreference } from '@/lib/quote/types';
import {
  FRONTEND_OPTIONS,
  BACKEND_OPTIONS,
  AI_PROVIDER_OPTIONS,
  DATABASE_OPTIONS,
  HOSTING_OPTIONS,
} from '@/lib/quote/constants';
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiDotnet,
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiVercel,
  SiGooglecloud,
  SiLinux,
} from '@icons-pack/react-simple-icons';

interface TechStackStepProps {
  techStack: TechStackPreferences;
  onUpdate: (updates: Partial<TechStackPreferences>) => void;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

// Icon mapping for tech stack options
const techIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: SiReact,
  nextdotjs: SiNextdotjs,
  vuedotjs: SiVuedotjs,
  angular: SiAngular,
  svelte: SiSvelte,
  nodedotjs: SiNodedotjs,
  python: SiPython,
  go: SiGo,
  dotnet: SiDotnet,
  openai: SiOpenai,
  anthropic: SiAnthropic,
  googlegemini: SiGooglegemini,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  mysql: SiMysql,
  supabase: SiSupabase,
  firebase: SiFirebase,
  vercel: SiVercel,
  googlecloud: SiGooglecloud,
  linux: SiLinux,
};

export function TechStackStep({
  techStack,
  onUpdate,
  onNext,
  onBack,
  onSkip,
}: TechStackStepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
          Any tech preferences?
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary">
          Optional - helps us align with your existing stack or preferences
        </p>
      </div>

      <div className="space-y-6">
        {/* Frontend */}
        <TechSection
          title="Frontend Framework"
          options={FRONTEND_OPTIONS}
          selected={techStack.frontend}
          onSelect={(id) => onUpdate({ frontend: id as FrontendFramework })}
        />

        {/* Backend */}
        <TechSection
          title="Backend Technology"
          options={BACKEND_OPTIONS}
          selected={techStack.backend}
          onSelect={(id) => onUpdate({ backend: id as BackendTech })}
        />

        {/* AI Provider */}
        <TechSection
          title="AI Provider"
          options={AI_PROVIDER_OPTIONS}
          selected={techStack.ai}
          onSelect={(id) => onUpdate({ ai: id as AIProvider })}
        />

        {/* Database */}
        <TechSection
          title="Database"
          options={DATABASE_OPTIONS}
          selected={techStack.database}
          onSelect={(id) => onUpdate({ database: id as DatabasePreference })}
        />

        {/* Hosting */}
        <TechSection
          title="Hosting Platform"
          options={HOSTING_OPTIONS}
          selected={techStack.hosting}
          onSelect={(id) => onUpdate({ hosting: id as HostingPreference })}
        />

        {/* Existing Infrastructure */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-text-tertiary dark:text-dark-text-tertiary uppercase tracking-wide">
            Existing Infrastructure (optional)
          </h4>
          <Textarea
            placeholder="Tell us about any existing systems we should integrate with..."
            value={techStack.existingInfrastructure || ''}
            onChange={(e) => onUpdate({ existingInfrastructure: e.target.value })}
            rows={2}
            className="max-w-2xl"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <div className="flex gap-3">
          <Button variant="ghost" onClick={onSkip} className="text-text-tertiary">
            <SkipForward className="w-4 h-4 mr-2" />
            Skip this step
          </Button>
          <Button onClick={onNext}>Continue</Button>
        </div>
      </div>
    </div>
  );
}

interface TechSectionProps {
  title: string;
  options: Array<{ id: string; name: string; icon: string }>;
  selected: string | null;
  onSelect: (id: string) => void;
}

function TechSection({ title, options, selected, onSelect }: TechSectionProps) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-medium text-text-tertiary dark:text-dark-text-tertiary uppercase tracking-wide">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected === option.id;
          const IconComponent = techIconMap[option.icon];

          return (
            <motion.button
              key={option.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(option.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all duration-200',
                isSelected
                  ? 'border-brand-primary bg-brand-light/50 dark:bg-brand-primary/10'
                  : 'border-neutral-200 dark:border-dark-border hover:border-brand-primary/50 bg-white dark:bg-dark-bg-card'
              )}
            >
              {IconComponent ? (
                <IconComponent className="w-4 h-4" />
              ) : (
                <CircleDot className="w-4 h-4 text-text-tertiary" />
              )}
              <span
                className={cn(
                  'text-sm font-medium',
                  isSelected
                    ? 'text-brand-primary'
                    : 'text-text-primary dark:text-dark-text-primary'
                )}
              >
                {option.name}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
