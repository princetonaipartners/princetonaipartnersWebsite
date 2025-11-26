'use client';

import { useRef, useState, useEffect, forwardRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ParticleBeam } from './particle-beam';

// Service brand colors
const serviceColors: Record<string, string> = {
  gmail: '#EA4335',
  slack: '#4A154B',
  salesforce: '#00A1E0',
  sheets: '#34A853',
  shopify: '#96BF48',
  stripe: '#635BFF',
  hubspot: '#FF7A59',
  notion: '#000000',
  clearbit: '#3764FF',
  ai: '#0A84FF',
  inventory: '#F59E0B',
  fulfillment: '#8B5CF6',
  email: '#10B981',
  twilio: '#F22F46',
};

// Service icons as SVG components
const ServiceIcons: Record<string, React.FC<{ className?: string }>> = {
  gmail: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  ),
  slack: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  ),
  salesforce: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M10.006 5.415a4.195 4.195 0 0 1 3.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.16 5.22c-.45 0-.87-.06-1.29-.165a3.9 3.9 0 0 1-3.45 2.1c-.6 0-1.17-.135-1.68-.375a4.796 4.796 0 0 1-4.38 2.835c-2.31 0-4.23-1.665-4.65-3.87a3.75 3.75 0 0 1-1.11.165C.99 16.995 0 15.54 0 13.875c0-1.275.6-2.415 1.53-3.135a4.05 4.05 0 0 1-.06-.645c0-2.31 1.875-4.17 4.17-4.17 1.2 0 2.295.51 3.06 1.32a4.14 4.14 0 0 1 1.306.17z" />
    </svg>
  ),
  sheets: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.385 2H4.615A2.615 2.615 0 0 0 2 4.615v14.77A2.615 2.615 0 0 0 4.615 22h14.77A2.615 2.615 0 0 0 22 19.385V4.615A2.615 2.615 0 0 0 19.385 2zM9 18H6v-3h3v3zm0-5H6v-3h3v3zm0-5H6V5h3v3zm9 10h-7v-3h7v3zm0-5h-7v-3h7v3zm0-5h-7V5h7v3z" />
    </svg>
  ),
  shopify: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.756c-.022-.142-.153-.236-.295-.236s-1.196-.089-1.196-.089-.803-.793-.937-.927a.363.363 0 0 0-.169-.091v19.667l-2.994.993zM12.476 4.433c-.208-.057-.437.018-.596.202-.159.183-1.737 2.168-1.737 2.168l-.263-1.391c-.044-.225-.18-.376-.366-.376-.089 0-2.751.081-2.751.081L5.827 3.734c-.122-.202-.301-.314-.493-.314-.193 0-.438.089-.645.341-.366.446-5.469 8.19-5.469 8.19s2.439 1.148 2.482 1.173c.044.025.149.051.238.025.089-.025.089-.077.089-.077s.803-2.383 1.673-4.539c.871-2.156 1.871-3.766 2.085-4.046.214-.28.214-.28.214-.28l.749 10.749s1.339.614 1.583.716c.244.101.401.076.445-.051.044-.127 1.204-8.442 1.248-8.745.044-.303.022-.493-.134-.543z" />
    </svg>
  ),
  stripe: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
    </svg>
  ),
  hubspot: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.193v.067c0 .87.506 1.62 1.237 1.978v2.846a6.086 6.086 0 0 0-2.793 1.275l-7.375-5.74a2.618 2.618 0 0 0 .078-.619 2.628 2.628 0 1 0-2.628 2.628c.423 0 .82-.102 1.173-.28l7.237 5.632a6.123 6.123 0 0 0-.604 2.666c0 .96.222 1.87.616 2.678l-2.4 2.4a2.04 2.04 0 0 0-.594-.089 2.044 2.044 0 1 0 2.044 2.044c0-.212-.033-.417-.088-.613l2.357-2.357a6.126 6.126 0 1 0 3.86-10.805zm-.96 9.216a3.09 3.09 0 0 1-3.092-3.092 3.09 3.09 0 0 1 3.092-3.092 3.09 3.09 0 0 1 3.092 3.092 3.09 3.09 0 0 1-3.092 3.092z" />
    </svg>
  ),
  notion: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.595c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.84-.046.933-.56.933-1.167V6.354c0-.606-.233-.933-.746-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.746 0-.933-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM1.936 1.035l13.31-1.075c1.635-.14 2.054-.046 3.08.7l4.25 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.046-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.84.374-1.54 1.449-1.632z" />
    </svg>
  ),
  clearbit: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L0 6v12l12 6 12-6V6L12 0zm0 2.16l9.6 4.8-9.6 4.8-9.6-4.8L12 2.16zM2.4 8.04l8.4 4.2v9.12l-8.4-4.2V8.04zm11.2 13.32V12.24l8.4-4.2v9.12l-8.4 4.2z" />
    </svg>
  ),
  ai: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5 2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z" />
    </svg>
  ),
  inventory: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 2h2v4h-2V4zm-4 0h2v4H9V4zM4 20V8h16v12H4zm2-2h4v-4H6v4zm6 0h4v-4h-4v4zm6 0h2v-4h-2v4z" />
    </svg>
  ),
  fulfillment: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  ),
  email: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
};

// Node status types
type NodeStatus = 'idle' | 'processing' | 'complete';

// Workflow node data
interface WorkflowNodeData {
  id: string;
  service: string;
  label: string;
  action: string;
}

// Workflow scenario
interface WorkflowScenario {
  id: string;
  name: string;
  description: string;
  nodes: WorkflowNodeData[];
}

// Workflow scenarios
const scenarios: WorkflowScenario[] = [
  {
    id: 'lead-enrichment',
    name: 'Lead Enrichment Pipeline',
    description: 'Automatically enrich and route new leads to your CRM',
    nodes: [
      { id: 'gmail', service: 'gmail', label: 'Gmail', action: 'New Email' },
      { id: 'ai', service: 'ai', label: 'AI Extract', action: 'Parse Contact' },
      { id: 'clearbit', service: 'clearbit', label: 'Clearbit', action: 'Enrich Data' },
      { id: 'salesforce', service: 'salesforce', label: 'Salesforce', action: 'Create Lead' },
      { id: 'slack', service: 'slack', label: 'Slack', action: 'Notify Team' },
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Order Flow',
    description: 'Streamline order processing from checkout to delivery',
    nodes: [
      { id: 'shopify', service: 'shopify', label: 'Shopify', action: 'New Order' },
      { id: 'inventory', service: 'inventory', label: 'Inventory', action: 'Check Stock' },
      { id: 'fulfillment', service: 'fulfillment', label: 'Fulfillment', action: 'Ship Order' },
      { id: 'email', service: 'email', label: 'Email', action: 'Send Confirm' },
      { id: 'sheets', service: 'sheets', label: 'Sheets', action: 'Log Data' },
    ],
  },
  {
    id: 'onboarding',
    name: 'Customer Onboarding',
    description: 'Automate new customer welcome and setup process',
    nodes: [
      { id: 'stripe', service: 'stripe', label: 'Stripe', action: 'Payment Success' },
      { id: 'hubspot', service: 'hubspot', label: 'HubSpot', action: 'Create Contact' },
      { id: 'email', service: 'email', label: 'Email Seq', action: 'Welcome Series' },
      { id: 'slack', service: 'slack', label: 'Slack', action: 'Alert Sales' },
      { id: 'notion', service: 'notion', label: 'Notion', action: 'Create Doc' },
    ],
  },
];

// Individual workflow node component
interface WorkflowNodeProps {
  node: WorkflowNodeData;
  status: NodeStatus;
  index: number;
  isVisible: boolean;
}

const WorkflowNode = forwardRef<HTMLDivElement, WorkflowNodeProps>(
  ({ node, status, index, isVisible }, ref) => {
    const color = serviceColors[node.service] || '#0A84FF';
    const Icon = ServiceIcons[node.service];

    const statusStyles = {
      idle: 'border-zinc-700 bg-zinc-900/80',
      processing: 'border-brand-primary bg-zinc-900/90 shadow-lg shadow-brand-primary/20',
      complete: `bg-zinc-900/90 shadow-lg`,
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={
          isVisible
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.8, y: 20 }
        }
        transition={{ delay: index * 0.15, duration: 0.4, ease: 'easeOut' }}
        className="flex flex-col items-center gap-2"
      >
        <motion.div
          className={cn(
            'relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 transition-all duration-300',
            statusStyles[status]
          )}
          style={{
            borderColor: status === 'complete' ? color : status === 'processing' ? '#0A84FF' : undefined,
            boxShadow: status === 'complete' ? `0 0 20px ${color}40` : undefined,
          }}
          animate={
            status === 'processing'
              ? { scale: [1, 1.05, 1] }
              : {}
          }
          transition={{ duration: 1, repeat: status === 'processing' ? Infinity : 0 }}
        >
          {/* Status indicator */}
          <div
            className={cn(
              'absolute -top-1 -right-1 w-3 h-3 rounded-full transition-colors duration-300',
              status === 'idle' && 'bg-zinc-600',
              status === 'processing' && 'bg-brand-primary animate-pulse',
              status === 'complete' && 'bg-emerald-400'
            )}
          />

          {/* Icon */}
          {Icon && (
            <Icon
              className={cn(
                'w-7 h-7 md:w-8 md:h-8 transition-colors duration-300',
                status === 'idle' && 'text-zinc-500',
                status === 'processing' && 'text-brand-primary',
                status === 'complete' && 'text-white'
              )}
            />
          )}
        </motion.div>

        {/* Label */}
        <span className="text-xs md:text-sm font-mono text-zinc-400">
          {node.label}
        </span>

        {/* Action */}
        <span
          className={cn(
            'text-[10px] md:text-xs font-mono px-2 py-0.5 rounded-full transition-colors duration-300',
            status === 'idle' && 'text-zinc-600 bg-zinc-800/50',
            status === 'processing' && 'text-brand-primary bg-brand-primary/10',
            status === 'complete' && 'text-emerald-400 bg-emerald-400/10'
          )}
        >
          {node.action}
        </span>
      </motion.div>
    );
  }
);

WorkflowNode.displayName = 'WorkflowNode';

// Main WorkflowBuilder component
interface WorkflowBuilderProps {
  className?: string;
}

export function WorkflowBuilder({ className }: WorkflowBuilderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [nodeStatuses, setNodeStatuses] = useState<NodeStatus[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [nodesVisible, setNodesVisible] = useState(false);

  // Initialize
  useEffect(() => {
    setMounted(true);
    setNodesVisible(true);
    setNodeStatuses(scenarios[0].nodes.map(() => 'idle'));
  }, []);

  // Animation sequence
  const runAnimation = useCallback(() => {
    const scenario = scenarios[currentScenario];
    const nodeCount = scenario.nodes.length;

    setIsAnimating(true);
    setNodeStatuses(scenario.nodes.map(() => 'idle'));

    // Process each node in sequence
    scenario.nodes.forEach((_, index) => {
      // Start processing
      setTimeout(() => {
        setNodeStatuses((prev) => {
          const next = [...prev];
          next[index] = 'processing';
          return next;
        });
      }, index * 800);

      // Complete processing
      setTimeout(() => {
        setNodeStatuses((prev) => {
          const next = [...prev];
          next[index] = 'complete';
          return next;
        });
      }, index * 800 + 600);
    });

    // Hold for 3 seconds then transition
    setTimeout(() => {
      setIsAnimating(false);
      setNodesVisible(false);

      // Transition to next scenario
      setTimeout(() => {
        const nextScenario = (currentScenario + 1) % scenarios.length;
        setCurrentScenario(nextScenario);
        setNodeStatuses(scenarios[nextScenario].nodes.map(() => 'idle'));

        setTimeout(() => {
          setNodesVisible(true);
        }, 100);
      }, 300);
    }, nodeCount * 800 + 3000);
  }, [currentScenario]);

  // Auto-cycle scenarios
  useEffect(() => {
    if (!mounted) return;

    const timer = setTimeout(() => {
      runAnimation();
    }, 1000);

    return () => clearTimeout(timer);
  }, [mounted, currentScenario, runAnimation]);

  const scenario = scenarios[currentScenario];

  return (
    <div className={cn('relative', className)}>
      {/* Scenario indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {scenarios.map((s, i) => (
          <button
            key={s.id}
            onClick={() => {
              if (!isAnimating) {
                setNodesVisible(false);
                setTimeout(() => {
                  setCurrentScenario(i);
                  setNodeStatuses(scenarios[i].nodes.map(() => 'idle'));
                  setTimeout(() => setNodesVisible(true), 100);
                }, 300);
              }
            }}
            className={cn(
              'w-2.5 h-2.5 rounded-full transition-all duration-300',
              i === currentScenario
                ? 'bg-brand-primary w-8'
                : 'bg-zinc-700 hover:bg-zinc-600'
            )}
          />
        ))}
      </div>

      {/* Scenario title */}
      <AnimatePresence mode="wait">
        <motion.div
          key={scenario.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="text-center mb-8"
        >
          <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
            {scenario.name}
          </h3>
          <p className="text-sm text-zinc-500">{scenario.description}</p>
        </motion.div>
      </AnimatePresence>

      {/* Workflow visualization */}
      <div
        ref={containerRef}
        className="relative h-48 md:h-56 w-full max-w-4xl mx-auto"
      >
        {/* Particle beams */}
        {mounted &&
          nodesVisible &&
          scenario.nodes.slice(0, -1).map((_, index) => {
            const fromRef = nodeRefs.current[index];
            const toRef = nodeRefs.current[index + 1];
            const status = nodeStatuses[index];

            if (!fromRef || !toRef) return null;

            return (
              <ParticleBeam
                key={`${scenario.id}-beam-${index}`}
                containerRef={containerRef as React.RefObject<HTMLElement>}
                fromRef={{ current: fromRef } as React.RefObject<HTMLElement>}
                toRef={{ current: toRef } as React.RefObject<HTMLElement>}
                curvature={0}
                duration={status === 'processing' || status === 'complete' ? 1.5 : 3}
                particleCount={status === 'complete' ? 3 : status === 'processing' ? 2 : 1}
                particleSize={status === 'complete' ? 3 : 2}
                pathOpacity={status === 'idle' ? 0.2 : 0.4}
                gradientStartColor={
                  status === 'complete'
                    ? serviceColors[scenario.nodes[index].service] || '#0A84FF'
                    : '#0A84FF'
                }
                gradientStopColor={
                  status === 'complete'
                    ? serviceColors[scenario.nodes[index + 1].service] || '#0060CE'
                    : '#0060CE'
                }
              />
            );
          })}

        {/* Nodes */}
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8">
          {scenario.nodes.map((node, index) => (
            <WorkflowNode
              key={`${scenario.id}-${node.id}`}
              ref={(el) => {
                nodeRefs.current[index] = el;
              }}
              node={node}
              status={nodeStatuses[index] || 'idle'}
              index={index}
              isVisible={nodesVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkflowBuilder;
