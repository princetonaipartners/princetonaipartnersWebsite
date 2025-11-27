'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Brain, Database, Zap, MessageSquare, Search, Shield, Cpu, Network, Workflow, Lightbulb, Target, GitBranch, Layers, Lock, Sparkles, Bot, Cog, RefreshCw, FileText, type LucideIcon } from 'lucide-react';

// ==========================================
// TYPES & INTERFACES
// ==========================================

export interface Position3D {
  x: number;
  y: number;
  z: number;
}

export interface SphericalPosition {
  theta: number;
  phi: number;
  radius: number;
}

export interface WorldPosition extends Position3D {
  scale: number;
  zIndex: number;
  isVisible: boolean;
  fadeOpacity: number;
  originalIndex: number;
}

export interface AiConcept {
  id: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  details: string[];
  color: string;
}

export interface AiConceptsSphereProps {
  containerSize?: number;
  sphereRadius?: number;
  dragSensitivity?: number;
  momentumDecay?: number;
  maxRotationSpeed?: number;
  baseNodeScale?: number;
  perspective?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  className?: string;
}

interface RotationState {
  x: number;
  y: number;
  z: number;
}

interface VelocityState {
  x: number;
  y: number;
}

interface MousePosition {
  x: number;
  y: number;
}

// ==========================================
// AI CONCEPTS DATA
// ==========================================

const AI_CONCEPTS: AiConcept[] = [
  {
    id: 'react-pattern',
    icon: Brain,
    title: 'ReAct Pattern',
    shortTitle: 'ReAct',
    description: 'Reasoning + Acting together for intelligent task completion',
    details: [
      'Combines reasoning traces with action execution',
      'Thinks step-by-step before taking action',
      'Self-corrects based on observations',
      'Enables complex multi-step problem solving'
    ],
    color: '#0A84FF'
  },
  {
    id: 'rag',
    icon: Database,
    title: 'RAG - Retrieval Augmented Generation',
    shortTitle: 'RAG',
    description: 'Access your data in real-time for accurate, contextual responses',
    details: [
      'Converts documents into searchable embeddings',
      'Semantic search finds relevant information',
      'Injects context into AI responses',
      'Always up-to-date with your latest data'
    ],
    color: '#22D3EE'
  },
  {
    id: 'memory',
    icon: Layers,
    title: 'Memory Systems',
    shortTitle: 'Memory',
    description: 'Short-term and long-term memory for contextual understanding',
    details: [
      'Short-term: Current conversation context',
      'Long-term: Vector database storage',
      'Remembers past interactions',
      'Learns user preferences over time'
    ],
    color: '#A855F7'
  },
  {
    id: 'tools',
    icon: Cog,
    title: 'Tool Use',
    shortTitle: 'Tools',
    description: 'Execute actions using integrated tools and APIs',
    details: [
      'Web search and browsing',
      'Code execution and analysis',
      'Database queries',
      'Custom API integrations'
    ],
    color: '#F97316'
  },
  {
    id: 'chain-of-thought',
    icon: GitBranch,
    title: 'Chain of Thought',
    shortTitle: 'CoT',
    description: 'Step-by-step reasoning for complex problems',
    details: [
      'Breaks problems into smaller steps',
      'Shows reasoning process transparently',
      'Improves accuracy on complex tasks',
      'Enables self-verification'
    ],
    color: '#10B981'
  },
  {
    id: 'embeddings',
    icon: Network,
    title: 'Vector Embeddings',
    shortTitle: 'Vectors',
    description: 'Mathematical representations of meaning for semantic search',
    details: [
      'Converts text to numerical vectors',
      'Captures semantic meaning',
      'Enables similarity matching',
      'Powers intelligent retrieval'
    ],
    color: '#EC4899'
  },
  {
    id: 'context-window',
    icon: MessageSquare,
    title: 'Context Window',
    shortTitle: 'Context',
    description: 'The information the AI can see and use at once',
    details: [
      'Defines conversation capacity',
      'Includes system prompts and history',
      'Managed for optimal performance',
      'Prioritizes relevant information'
    ],
    color: '#6366F1'
  },
  {
    id: 'autonomous',
    icon: Bot,
    title: 'Autonomous Execution',
    shortTitle: 'Autonomy',
    description: 'Complete complex tasks without constant supervision',
    details: [
      'Plans and executes multi-step workflows',
      'Handles errors and edge cases',
      'Reports progress and results',
      'Asks for clarification when needed'
    ],
    color: '#0A84FF'
  },
  {
    id: 'integrations',
    icon: Zap,
    title: 'System Integrations',
    shortTitle: 'APIs',
    description: 'Connect to your existing tools and systems',
    details: [
      'CRMs: Salesforce, HubSpot',
      'Communication: Slack, Email',
      'Databases: PostgreSQL, MongoDB',
      'Custom REST and GraphQL APIs'
    ],
    color: '#FBBF24'
  },
  {
    id: 'guardrails',
    icon: Shield,
    title: 'Safety Guardrails',
    shortTitle: 'Safety',
    description: 'Built-in protections for reliable, safe operation',
    details: [
      'Input validation and sanitization',
      'Output filtering and moderation',
      'Rate limiting and abuse prevention',
      'Audit trails for compliance'
    ],
    color: '#EF4444'
  },
  {
    id: 'prompting',
    icon: Lightbulb,
    title: 'Prompt Engineering',
    shortTitle: 'Prompts',
    description: 'Crafted instructions that guide AI behavior',
    details: [
      'System prompts define personality',
      'Few-shot examples improve accuracy',
      'Structured output formatting',
      'Dynamic prompt generation'
    ],
    color: '#84CC16'
  },
  {
    id: 'orchestration',
    icon: Workflow,
    title: 'Agent Orchestration',
    shortTitle: 'Orchestration',
    description: 'Coordinate multiple AI agents for complex workflows',
    details: [
      'Specialized agents for different tasks',
      'Parallel and sequential execution',
      'State management across agents',
      'Error handling and recovery'
    ],
    color: '#14B8A6'
  },
  {
    id: 'fine-tuning',
    icon: Target,
    title: 'Fine-Tuning',
    shortTitle: 'Training',
    description: 'Customize AI models for your specific needs',
    details: [
      'Train on your industry data',
      'Learn your terminology',
      'Match your communication style',
      'Improve domain-specific accuracy'
    ],
    color: '#F472B6'
  },
  {
    id: 'knowledge-base',
    icon: FileText,
    title: 'Knowledge Base',
    shortTitle: 'Knowledge',
    description: 'Your documents become AI-searchable intelligence',
    details: [
      'Process PDFs, docs, spreadsheets',
      'Automatic chunking and indexing',
      'Real-time synchronization',
      'Version control and updates'
    ],
    color: '#8B5CF6'
  },
  {
    id: 'reasoning',
    icon: Cpu,
    title: 'Multi-Step Reasoning',
    shortTitle: 'Reasoning',
    description: 'Break down complex problems into manageable steps',
    details: [
      'Decomposes complex queries',
      'Plans execution strategy',
      'Validates intermediate results',
      'Synthesizes final answer'
    ],
    color: '#0EA5E9'
  },
  {
    id: 'learning',
    icon: RefreshCw,
    title: 'Continuous Learning',
    shortTitle: 'Learning',
    description: 'Improve over time through feedback and interaction',
    details: [
      'Learns from corrections',
      'Adapts to preferences',
      'Knowledge base updates',
      'Performance optimization'
    ],
    color: '#22C55E'
  },
  {
    id: 'search',
    icon: Search,
    title: 'Intelligent Search',
    shortTitle: 'Search',
    description: 'Find exactly what you need across all your data',
    details: [
      'Semantic understanding of queries',
      'Cross-document search',
      'Relevance ranking',
      'Contextual filtering'
    ],
    color: '#F59E0B'
  },
  {
    id: 'security',
    icon: Lock,
    title: 'Enterprise Security',
    shortTitle: 'Security',
    description: 'Your data stays yours with enterprise-grade protection',
    details: [
      'End-to-end encryption',
      'SOC2 and HIPAA compliance',
      'Role-based access control',
      'On-premise deployment options'
    ],
    color: '#64748B'
  },
];

// ==========================================
// MATH UTILITIES
// ==========================================

const SPHERE_MATH = {
  degreesToRadians: (degrees: number): number => degrees * (Math.PI / 180),
  radiansToDegrees: (radians: number): number => radians * (180 / Math.PI),
  normalizeAngle: (angle: number): number => {
    while (angle > 180) angle -= 360;
    while (angle < -180) angle += 360;
    return angle;
  }
};

// ==========================================
// MAIN COMPONENT
// ==========================================

export function AiConceptsSphere({
  containerSize = 500,
  sphereRadius = 180,
  dragSensitivity = 0.5,
  momentumDecay = 0.95,
  maxRotationSpeed = 5,
  baseNodeScale = 0.11,
  perspective = 1000,
  autoRotate = true,
  autoRotateSpeed = 0.2,
  className = ''
}: AiConceptsSphereProps) {

  const [isMounted, setIsMounted] = useState(false);
  const [rotation, setRotation] = useState<RotationState>({ x: 15, y: 15, z: 0 });
  const [velocity, setVelocity] = useState<VelocityState>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<AiConcept | null>(null);
  const [nodePositions, setNodePositions] = useState<SphericalPosition[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef<MousePosition>({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);

  const actualSphereRadius = sphereRadius || containerSize * 0.4;
  const baseNodeSize = containerSize * baseNodeScale;

  // ==========================================
  // POSITION GENERATION
  // ==========================================

  const generateSpherePositions = useCallback((): SphericalPosition[] => {
    const positions: SphericalPosition[] = [];
    const nodeCount = AI_CONCEPTS.length;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = 2 * Math.PI / goldenRatio;

    for (let i = 0; i < nodeCount; i++) {
      const t = i / nodeCount;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * i;

      let phi = inclination * (180 / Math.PI);
      let theta = (azimuth * (180 / Math.PI)) % 360;

      const poleBonus = Math.pow(Math.abs(phi - 90) / 90, 0.6) * 35;
      if (phi < 90) {
        phi = Math.max(5, phi - poleBonus);
      } else {
        phi = Math.min(175, phi + poleBonus);
      }

      phi = 15 + (phi / 180) * 150;

      const randomOffset = (Math.random() - 0.5) * 20;
      theta = (theta + randomOffset) % 360;
      phi = Math.max(0, Math.min(180, phi + (Math.random() - 0.5) * 10));

      positions.push({ theta, phi, radius: actualSphereRadius });
    }

    return positions;
  }, [actualSphereRadius]);

  // ==========================================
  // WORLD POSITION CALCULATION
  // ==========================================

  const calculateWorldPositions = useCallback((): WorldPosition[] => {
    const positions = nodePositions.map((pos, index) => {
      const thetaRad = SPHERE_MATH.degreesToRadians(pos.theta);
      const phiRad = SPHERE_MATH.degreesToRadians(pos.phi);
      const rotXRad = SPHERE_MATH.degreesToRadians(rotation.x);
      const rotYRad = SPHERE_MATH.degreesToRadians(rotation.y);

      let x = pos.radius * Math.sin(phiRad) * Math.cos(thetaRad);
      let y = pos.radius * Math.cos(phiRad);
      let z = pos.radius * Math.sin(phiRad) * Math.sin(thetaRad);

      const x1 = x * Math.cos(rotYRad) + z * Math.sin(rotYRad);
      const z1 = -x * Math.sin(rotYRad) + z * Math.cos(rotYRad);
      x = x1;
      z = z1;

      const y2 = y * Math.cos(rotXRad) - z * Math.sin(rotXRad);
      const z2 = y * Math.sin(rotXRad) + z * Math.cos(rotXRad);
      y = y2;
      z = z2;

      const fadeZoneStart = -10;
      const fadeZoneEnd = -30;
      const isVisible = z > fadeZoneEnd;

      let fadeOpacity = 1;
      if (z <= fadeZoneStart) {
        fadeOpacity = Math.max(0, (z - fadeZoneEnd) / (fadeZoneStart - fadeZoneEnd));
      }

      const isPoleNode = pos.phi < 30 || pos.phi > 150;
      const distanceFromCenter = Math.sqrt(x * x + y * y);
      const maxDistance = actualSphereRadius;
      const distanceRatio = Math.min(distanceFromCenter / maxDistance, 1);

      const distancePenalty = isPoleNode ? 0.4 : 0.7;
      const centerScale = Math.max(0.3, 1 - distanceRatio * distancePenalty);

      const depthScale = (z + actualSphereRadius) / (2 * actualSphereRadius);
      const scale = centerScale * Math.max(0.5, 0.8 + depthScale * 0.3);

      return {
        x, y, z,
        scale,
        zIndex: Math.round(1000 + z),
        isVisible,
        fadeOpacity,
        originalIndex: index
      };
    });

    // Collision detection
    const adjustedPositions = [...positions];
    for (let i = 0; i < adjustedPositions.length; i++) {
      const pos = adjustedPositions[i];
      if (!pos.isVisible) continue;

      let adjustedScale = pos.scale;
      const nodeSize = baseNodeSize * adjustedScale;

      for (let j = 0; j < adjustedPositions.length; j++) {
        if (i === j) continue;
        const other = adjustedPositions[j];
        if (!other.isVisible) continue;

        const otherSize = baseNodeSize * other.scale;
        const dx = pos.x - other.x;
        const dy = pos.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = (nodeSize + otherSize) / 2 + 15;

        if (distance < minDistance && distance > 0) {
          const overlap = minDistance - distance;
          const reductionFactor = Math.max(0.4, 1 - (overlap / minDistance) * 0.6);
          adjustedScale = Math.min(adjustedScale, adjustedScale * reductionFactor);
        }
      }

      adjustedPositions[i] = { ...pos, scale: Math.max(0.25, adjustedScale) };
    }

    return adjustedPositions;
  }, [nodePositions, rotation, actualSphereRadius, baseNodeSize]);

  const clampRotationSpeed = useCallback((speed: number): number => {
    return Math.max(-maxRotationSpeed, Math.min(maxRotationSpeed, speed));
  }, [maxRotationSpeed]);

  // ==========================================
  // PHYSICS & MOMENTUM
  // ==========================================

  const updateMomentum = useCallback(() => {
    if (isDragging) return;

    setVelocity(prev => {
      const newVelocity = {
        x: prev.x * momentumDecay,
        y: prev.y * momentumDecay
      };

      if (!autoRotate && Math.abs(newVelocity.x) < 0.01 && Math.abs(newVelocity.y) < 0.01) {
        return { x: 0, y: 0 };
      }

      return newVelocity;
    });

    setRotation(prev => {
      let newY = prev.y;
      if (autoRotate) newY += autoRotateSpeed;
      newY += clampRotationSpeed(velocity.y);

      return {
        x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(velocity.x)),
        y: SPHERE_MATH.normalizeAngle(newY),
        z: prev.z
      };
    });
  }, [isDragging, momentumDecay, velocity, clampRotationSpeed, autoRotate, autoRotateSpeed]);

  // ==========================================
  // EVENT HANDLERS
  // ==========================================

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setVelocity({ x: 0, y: 0 });
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;

    const rotationDelta = {
      x: -deltaY * dragSensitivity,
      y: deltaX * dragSensitivity
    };

    setRotation(prev => ({
      x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(rotationDelta.x)),
      y: SPHERE_MATH.normalizeAngle(prev.y + clampRotationSpeed(rotationDelta.y)),
      z: prev.z
    }));

    setVelocity({
      x: clampRotationSpeed(rotationDelta.x),
      y: clampRotationSpeed(rotationDelta.y)
    });

    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }, [isDragging, dragSensitivity, clampRotationSpeed]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setVelocity({ x: 0, y: 0 });
    lastMousePos.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - lastMousePos.current.x;
    const deltaY = touch.clientY - lastMousePos.current.y;

    const rotationDelta = {
      x: -deltaY * dragSensitivity,
      y: deltaX * dragSensitivity
    };

    setRotation(prev => ({
      x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(rotationDelta.x)),
      y: SPHERE_MATH.normalizeAngle(prev.y + clampRotationSpeed(rotationDelta.y)),
      z: prev.z
    }));

    setVelocity({
      x: clampRotationSpeed(rotationDelta.x),
      y: clampRotationSpeed(rotationDelta.y)
    });

    lastMousePos.current = { x: touch.clientX, y: touch.clientY };
  }, [isDragging, dragSensitivity, clampRotationSpeed]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // ==========================================
  // EFFECTS
  // ==========================================

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setNodePositions(generateSpherePositions());
  }, [generateSpherePositions]);

  useEffect(() => {
    const animate = () => {
      updateMomentum();
      animationFrame.current = requestAnimationFrame(animate);
    };

    if (isMounted) {
      animationFrame.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [isMounted, updateMomentum]);

  useEffect(() => {
    if (!isMounted) return;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMounted, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  // ==========================================
  // RENDER
  // ==========================================

  const worldPositions = calculateWorldPositions();

  const renderConceptNode = useCallback((concept: AiConcept, index: number) => {
    const position = worldPositions[index];
    if (!position || !position.isVisible) return null;

    const nodeSize = baseNodeSize * position.scale;
    const isHovered = hoveredIndex === index;
    const finalScale = isHovered ? 1.3 : 1;
    const IconComponent = concept.icon;

    return (
      <div
        key={concept.id}
        className="absolute cursor-pointer select-none transition-all duration-200 ease-out group"
        style={{
          width: `${nodeSize}px`,
          height: `${nodeSize}px`,
          left: `${containerSize / 2 + position.x}px`,
          top: `${containerSize / 2 + position.y}px`,
          opacity: position.fadeOpacity,
          transform: `translate(-50%, -50%) scale(${finalScale})`,
          zIndex: position.zIndex
        }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedConcept(concept);
        }}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-full blur-md opacity-50 transition-opacity duration-300 group-hover:opacity-80"
          style={{ backgroundColor: concept.color }}
        />

        {/* Node circle */}
        <div
          className="relative w-full h-full rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:border-white/50"
          style={{
            background: `linear-gradient(135deg, ${concept.color}40 0%, ${concept.color}20 100%)`,
            borderColor: `${concept.color}60`,
            boxShadow: `0 0 20px ${concept.color}40, inset 0 0 20px ${concept.color}20`
          }}
        >
          <IconComponent
            className="transition-transform duration-300 group-hover:scale-110"
            style={{
              color: concept.color,
              width: nodeSize * 0.45,
              height: nodeSize * 0.45
            }}
          />
        </div>

        {/* Hover label */}
        {isHovered && (
          <div
            className="absolute left-1/2 -translate-x-1/2 -bottom-8 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap z-50"
            style={{
              backgroundColor: concept.color,
              color: 'white',
              boxShadow: `0 4px 12px ${concept.color}60`
            }}
          >
            {concept.shortTitle}
          </div>
        )}
      </div>
    );
  }, [worldPositions, baseNodeSize, containerSize, hoveredIndex]);

  const renderModal = () => {
    if (!selectedConcept) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={() => setSelectedConcept(null)}
      >
        <div
          className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          style={{
            animation: 'scaleIn 0.3s ease-out'
          }}
        >
          {/* Header */}
          <div
            className="relative p-6 pb-4"
            style={{
              background: `linear-gradient(135deg, ${selectedConcept.color}30 0%, transparent 100%)`
            }}
          >
            <button
              onClick={() => setSelectedConcept(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-zinc-800/80 rounded-full text-zinc-400 flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-all cursor-pointer"
            >
              <X size={16} />
            </button>

            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
              style={{
                background: `linear-gradient(135deg, ${selectedConcept.color}40 0%, ${selectedConcept.color}20 100%)`,
                boxShadow: `0 0 30px ${selectedConcept.color}40`
              }}
            >
              <selectedConcept.icon
                style={{ color: selectedConcept.color }}
                size={32}
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {selectedConcept.title}
            </h3>
            <p className="text-zinc-400 text-sm">
              {selectedConcept.description}
            </p>
          </div>

          {/* Details */}
          <div className="p-6 pt-2">
            <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
              Key Features
            </h4>
            <ul className="space-y-2">
              {selectedConcept.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                  <Sparkles
                    size={14}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: selectedConcept.color }}
                  />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  if (!isMounted) {
    return (
      <div
        className="bg-zinc-900/50 rounded-full animate-pulse flex items-center justify-center"
        style={{ width: containerSize, height: containerSize }}
      >
        <div className="text-zinc-500">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div
        ref={containerRef}
        className={`relative select-none cursor-grab active:cursor-grabbing ${className}`}
        style={{
          width: containerSize,
          height: containerSize,
          perspective: `${perspective}px`
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Center glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: actualSphereRadius * 0.8,
            height: actualSphereRadius * 0.8,
            background: 'radial-gradient(circle, rgba(10,132,255,0.15) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />

        {/* Nodes */}
        <div className="relative w-full h-full" style={{ zIndex: 10 }}>
          {AI_CONCEPTS.map((concept, index) => renderConceptNode(concept, index))}
        </div>

        {/* Instructions */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
          <p className="text-xs text-zinc-500">
            Drag to rotate • Click to learn more
          </p>
        </div>
      </div>

      {renderModal()}
    </>
  );
}

export default AiConceptsSphere;
