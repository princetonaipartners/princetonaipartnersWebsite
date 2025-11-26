'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  Phone,
  Clock,
  Calendar,
  Globe,
  Zap,
  ArrowRight,
  Check,
  X,
  ChevronDown,
  Mic,
  Bot,
  AlertCircle,
  Moon,
  Stethoscope,
  UtensilsCrossed,
  Scissors,
  Wrench,
  Scale,
  Store,
  Sparkles,
  BarChart3,
  Users,
  MessageSquare,
  PhoneCall,
  Brain,
  Headphones,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { FadeInSection } from '@/components/animations/FadeInSection';
import { MagneticBackground } from '@/components/ui/magnetic-background';

// ============================================
// SCENARIO DATA
// ============================================
const scenarios = [
  {
    id: 'appointment',
    label: 'Appointment',
    icon: Calendar,
    color: 'from-blue-500 to-cyan-400',
    messages: [
      { type: 'caller', text: "Hi, I'd like to book an appointment for next week." },
      { type: 'ai', text: "Of course! I can help with that. Let me check our availability..." },
      { type: 'ai', text: "I found 3 openings: Tuesday at 2pm, Wednesday at 10am, or Friday at 4pm." },
      { type: 'caller', text: "Tuesday at 2pm works great." },
      { type: 'ai', text: "Perfect! I've booked you for Tuesday at 2pm. You'll receive a confirmation text shortly." },
    ],
  },
  {
    id: 'faq',
    label: 'FAQ',
    icon: MessageSquare,
    color: 'from-purple-500 to-pink-400',
    messages: [
      { type: 'caller', text: "What are your business hours?" },
      { type: 'ai', text: "We're open Monday through Friday, 9am to 6pm, and Saturday 10am to 4pm." },
      { type: 'caller', text: "Do you accept walk-ins?" },
      { type: 'ai', text: "Yes! Walk-ins are welcome, though appointments are recommended during busy hours." },
    ],
  },
  {
    id: 'emergency',
    label: 'Emergency',
    icon: AlertCircle,
    color: 'from-red-500 to-orange-400',
    messages: [
      { type: 'caller', text: "This is urgent - I need to speak to someone right away!" },
      { type: 'ai', text: "I understand this is urgent. Let me connect you to our on-call staff immediately." },
      { type: 'ai', text: "Transferring you now. Please hold for just a moment..." },
      { type: 'system', text: "Connecting to on-call staff..." },
    ],
  },
  {
    id: 'afterhours',
    label: 'After Hours',
    icon: Moon,
    color: 'from-indigo-500 to-violet-400',
    messages: [
      { type: 'caller', text: "Hi, is anyone available?" },
      { type: 'ai', text: "Thanks for calling! Our office is currently closed. We're open again Monday at 9am." },
      { type: 'caller', text: "Can I still book an appointment?" },
      { type: 'ai', text: "I can schedule that for you. What day and time work best?" },
    ],
  },
];

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function AIPhoneSystemsPage() {
  return (
    <div className="min-h-screen relative">
      {/* Magnetic Particles Background */}
      <MagneticBackground />

      {/* Page Content */}
      <HeroSection />
      <PhoneSimulatorSection />
      <HowItWorksSection />
      <ComparisonSection />
      <UseCasesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

// ============================================
// HERO SECTION - Voice Intelligence Visualization
// ============================================
function HeroSection() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-cycle scenarios
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveScenario((prev) => (prev + 1) % scenarios.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleScenarioClick = (index: number) => {
    setActiveScenario(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 20 seconds
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <FadeInSection>
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/10">
                <Phone className="w-4 h-4 text-brand-primary" />
                <span className="text-sm text-brand-primary font-medium">
                  AI Voice Technology
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
                Never Miss a Call.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-400">
                  Never Miss an Opportunity.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
                Our AI phone receptionist answers every call 24/7, schedules appointments,
                answers FAQs, and routes urgent calls—so you can focus on serving customers.
              </p>

              {/* Trust Points */}
              <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  24/7 Availability
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  Instant Booking
                </span>
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  Multi-language
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link href="#demo">
                  <motion.div
                    data-magnetic
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-semibold text-lg cursor-pointer hover:shadow-brand-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>See It In Action</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
                <Link href="/quote">
                  <motion.div
                    className="inline-flex items-center gap-3 px-8 py-4 border border-zinc-700 text-white rounded-full font-semibold text-lg cursor-pointer hover:bg-zinc-800/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Get Started</span>
                  </motion.div>
                </Link>
              </div>
            </div>
          </FadeInSection>

          {/* Right: Voice Intelligence Visualization */}
          <FadeInSection delay={0.2}>
            <VoiceVisualization
              activeScenario={activeScenario}
              onScenarioClick={handleScenarioClick}
            />
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

// ============================================
// VOICE VISUALIZATION COMPONENT
// ============================================
interface VoiceVisualizationProps {
  activeScenario: number;
  onScenarioClick: (index: number) => void;
}

function VoiceVisualization({ activeScenario, onScenarioClick }: VoiceVisualizationProps) {
  const scenario = scenarios[activeScenario];
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  // Reset and animate messages when scenario changes
  useEffect(() => {
    setVisibleMessages([]);
    setProcessingProgress(0);
    setIsProcessing(true);

    // Show processing bar
    const progressInterval = setInterval(() => {
      setProcessingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsProcessing(false);
          return 100;
        }
        return prev + 4;
      });
    }, 50);

    // Stagger message reveals
    scenario.messages.forEach((_, index) => {
      setTimeout(() => {
        setVisibleMessages((prev) => [...prev, index]);
      }, 1500 + index * 1200);
    });

    return () => clearInterval(progressInterval);
  }, [activeScenario, scenario.messages]);

  return (
    <div className="relative">
      {/* Main Visualization Container */}
      <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-zinc-800 p-6 overflow-hidden">
        {/* Ambient glow */}
        <div className={cn(
          "absolute inset-0 opacity-20 blur-3xl transition-all duration-1000",
          `bg-gradient-to-br ${scenario.color}`
        )} />

        {/* Waveform */}
        <div className="relative mb-6">
          <AnimatedWaveform isActive={isProcessing} color={scenario.color} />
        </div>

        {/* Processing Indicator */}
        <AnimatePresence mode="wait">
          {isProcessing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <Brain className="w-4 h-4 text-brand-primary animate-pulse" />
                <span className="text-sm text-zinc-400">Processing Intent...</span>
              </div>
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className={cn("h-full rounded-full bg-gradient-to-r", scenario.color)}
                  style={{ width: `${processingProgress}%` }}
                  transition={{ duration: 0.1 }}
                />
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer-slide" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Conversation Messages */}
        <div className="relative space-y-4 min-h-[200px]">
          <AnimatePresence mode="popLayout">
            {scenario.messages.map((message, index) => (
              visibleMessages.includes(index) && (
                <motion.div
                  key={`${activeScenario}-${index}`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                  className={cn(
                    "flex gap-3",
                    message.type === 'caller' ? 'justify-start' : 'justify-end'
                  )}
                >
                  {message.type === 'caller' && (
                    <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center flex-shrink-0">
                      <Mic className="w-4 h-4 text-zinc-300" />
                    </div>
                  )}
                  <div className={cn(
                    "max-w-[80%] px-4 py-3 rounded-2xl",
                    message.type === 'caller'
                      ? 'bg-zinc-800 text-zinc-200 rounded-tl-sm'
                      : message.type === 'system'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-gradient-to-r from-brand-primary/20 to-cyan-500/20 text-cyan-100 border border-brand-primary/30 rounded-tr-sm'
                  )}>
                    <TypewriterText text={message.text} delay={index * 200} />
                  </div>
                  {(message.type === 'ai' || message.type === 'system') && (
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                      message.type === 'system'
                        ? 'bg-amber-500/20'
                        : 'bg-gradient-to-r from-brand-primary to-cyan-500'
                    )}>
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Scenario Tabs */}
        <div className="relative mt-6 pt-6 border-t border-zinc-800">
          <div className="flex gap-2">
            {scenarios.map((s, index) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => onScenarioClick(index)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                    activeScenario === index
                      ? `bg-gradient-to-r ${s.color} text-white shadow-lg`
                      : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-300'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating particles around the visualization */}
      <FloatingDataPoints />
    </div>
  );
}

// ============================================
// ANIMATED WAVEFORM
// ============================================
function AnimatedWaveform({ isActive, color }: { isActive: boolean; color: string }) {
  const bars = 32;

  return (
    <div className="flex items-center justify-center gap-[2px] h-16">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className={cn("w-1 rounded-full bg-gradient-to-t", color)}
          animate={{
            height: isActive
              ? [8, Math.random() * 48 + 16, 8]
              : 8,
            opacity: isActive ? [0.4, 1, 0.4] : 0.3,
          }}
          transition={{
            duration: 0.5 + Math.random() * 0.3,
            repeat: isActive ? Infinity : 0,
            repeatType: 'reverse',
            delay: i * 0.02,
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// TYPEWRITER TEXT
// ============================================
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);

    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, 20);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      {!isComplete && (
        <span className="inline-block w-0.5 h-4 bg-current ml-0.5 animate-blink" />
      )}
    </span>
  );
}

// ============================================
// FLOATING DATA POINTS - Static positions to avoid hydration mismatch
// ============================================
const staticPoints = [
  { id: 0, x: 10, y: 15, size: 3, delay: 0 },
  { id: 1, x: 85, y: 25, size: 4, delay: 0.5 },
  { id: 2, x: 20, y: 70, size: 2.5, delay: 1 },
  { id: 3, x: 90, y: 60, size: 3.5, delay: 1.5 },
  { id: 4, x: 5, y: 45, size: 2, delay: 0.3 },
  { id: 5, x: 95, y: 80, size: 4, delay: 0.8 },
  { id: 6, x: 15, y: 90, size: 3, delay: 1.2 },
  { id: 7, x: 75, y: 10, size: 2.5, delay: 0.6 },
];

function FloatingDataPoints() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {staticPoints.map((point) => (
        <motion.div
          key={point.id}
          className="absolute rounded-full bg-brand-primary/40"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: point.size,
            height: point.size,
          }}
          animate={{
            y: [-20, 20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + point.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: point.delay,
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// CALL CENTER DASHBOARD SECTION
// ============================================

// AI Actions for each scenario
const scenarioActions: Record<string, { action: string; status: 'pending' | 'active' | 'done'; icon: 'search' | 'calendar' | 'transfer' | 'check' }[]> = {
  appointment: [
    { action: 'Identifying intent', status: 'done', icon: 'search' },
    { action: 'Checking availability', status: 'done', icon: 'calendar' },
    { action: 'Booking appointment', status: 'active', icon: 'calendar' },
    { action: 'Sending confirmation', status: 'pending', icon: 'check' },
  ],
  faq: [
    { action: 'Identifying intent', status: 'done', icon: 'search' },
    { action: 'Searching knowledge base', status: 'done', icon: 'search' },
    { action: 'Generating response', status: 'active', icon: 'check' },
  ],
  emergency: [
    { action: 'Detecting urgency', status: 'done', icon: 'search' },
    { action: 'Escalating priority', status: 'done', icon: 'transfer' },
    { action: 'Connecting to staff', status: 'active', icon: 'transfer' },
  ],
  afterhours: [
    { action: 'Checking business hours', status: 'done', icon: 'search' },
    { action: 'Loading after-hours script', status: 'done', icon: 'check' },
    { action: 'Offering booking option', status: 'active', icon: 'calendar' },
  ],
};

function PhoneSimulatorSection() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);
  const [callDuration, setCallDuration] = useState(0);
  const [sentiment, setSentiment] = useState(75);
  const [activeActionIndex, setActiveActionIndex] = useState(0);

  const scenario = scenarios[activeScenario];
  const actions = scenarioActions[scenario.id] || [];

  // Call duration timer
  useEffect(() => {
    setCallDuration(0);
    const interval = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [activeScenario]);

  // Message sequence animation
  useEffect(() => {
    setCurrentMessageIndex(-1);
    setActiveActionIndex(0);
    setSentiment(scenario.id === 'emergency' ? 45 : 75);

    const timeouts: NodeJS.Timeout[] = [];

    scenario.messages.forEach((message, index) => {
      const showMessage = setTimeout(() => {
        setCurrentMessageIndex(index);
        // Update sentiment based on conversation progress
        if (scenario.id === 'emergency') {
          setSentiment(45 + index * 12);
        } else {
          setSentiment(Math.min(95, 75 + index * 5));
        }
        // Progress AI actions
        setActiveActionIndex(Math.min(index, actions.length - 1));
      }, 1500 + index * 2200);
      timeouts.push(showMessage);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [activeScenario, scenario.messages, scenario.id, actions.length]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Watch how our AI handles calls in real-time
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          {/* Dashboard Container */}
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm overflow-hidden">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/50">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="h-4 w-px bg-zinc-700" />
                <span className="text-sm font-medium text-zinc-400">AI Call Center Dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium text-emerald-400">LIVE</span>
                </div>
              </div>
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Left Panel - Conversation */}
              <div className="lg:col-span-2 border-r border-zinc-800">
                {/* Call Info Bar */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-zinc-800/50 bg-zinc-900/30">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      `bg-gradient-to-br ${scenario.color}`
                    )}>
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">+1 (555) 123-4567</div>
                      <div className="text-xs text-zinc-500">{scenario.label} Call</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="text-zinc-400">
                      <span className="text-zinc-600">Duration: </span>
                      <span className="font-mono text-white">{formatDuration(callDuration)}</span>
                    </div>
                  </div>
                </div>

                {/* Conversation Area */}
                <div className="h-[380px] overflow-y-auto p-6 space-y-4">
                  <AnimatePresence mode="popLayout">
                    {scenario.messages.slice(0, currentMessageIndex + 1).map((message, index) => (
                      <motion.div
                        key={`${activeScenario}-${index}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                          "flex gap-3",
                          message.type === 'caller' ? 'justify-start' : 'justify-end'
                        )}
                      >
                        {message.type === 'caller' && (
                          <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                            <Users className="w-4 h-4 text-zinc-400" />
                          </div>
                        )}
                        <div className={cn(
                          "max-w-[75%] px-4 py-3 rounded-2xl",
                          message.type === 'caller'
                            ? 'bg-zinc-800/80 text-zinc-200 rounded-tl-md'
                            : message.type === 'system'
                            ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                            : 'bg-brand-primary text-white rounded-tr-md'
                        )}>
                          <p className="text-sm leading-relaxed">
                            {index === currentMessageIndex ? (
                              <TypewriterText text={message.text} delay={0} />
                            ) : (
                              message.text
                            )}
                          </p>
                          <div className="mt-1 text-xs opacity-60">
                            {formatDuration(Math.floor((index + 1) * 2.2))}
                          </div>
                        </div>
                        {(message.type === 'ai' || message.type === 'system') && (
                          <div className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                            "bg-gradient-to-br from-brand-primary to-cyan-500"
                          )}>
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing indicator */}
                  {currentMessageIndex >= 0 && currentMessageIndex < scenario.messages.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-end gap-3"
                    >
                      <div className="bg-brand-primary/20 px-4 py-3 rounded-2xl rounded-tr-md">
                        <div className="flex gap-1.5">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-brand-primary rounded-full"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.15,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-cyan-500 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Scenario Tabs */}
                <div className="px-6 py-4 border-t border-zinc-800/50 bg-zinc-900/30">
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {scenarios.map((s, index) => {
                      const Icon = s.icon;
                      const isActive = activeScenario === index;
                      return (
                        <button
                          key={s.id}
                          onClick={() => setActiveScenario(index)}
                          className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                            isActive
                              ? `bg-gradient-to-r ${s.color} text-white`
                              : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-zinc-300'
                          )}
                        >
                          <Icon className="w-4 h-4" />
                          {s.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Panel - Metrics & AI Actions */}
              <div className="bg-zinc-900/30">
                {/* Metrics */}
                <div className="p-6 border-b border-zinc-800/50">
                  <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                    Call Metrics
                  </h3>
                  <div className="space-y-4">
                    {/* Sentiment */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-zinc-400">Sentiment</span>
                        <span className={cn(
                          "text-sm font-semibold",
                          sentiment >= 70 ? 'text-emerald-400' : sentiment >= 50 ? 'text-amber-400' : 'text-red-400'
                        )}>
                          {sentiment >= 70 ? 'Positive' : sentiment >= 50 ? 'Neutral' : 'Concerned'}
                        </span>
                      </div>
                      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          className={cn(
                            "h-full rounded-full",
                            sentiment >= 70 ? 'bg-emerald-500' : sentiment >= 50 ? 'bg-amber-500' : 'bg-red-500'
                          )}
                          initial={{ width: 0 }}
                          animate={{ width: `${sentiment}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Intent Confidence */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-zinc-400">Intent Match</span>
                        <span className="text-sm font-semibold text-brand-primary">98%</span>
                      </div>
                      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full w-[98%] bg-brand-primary rounded-full" />
                      </div>
                    </div>

                    {/* Response Time */}
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-zinc-400">Avg Response</span>
                      <span className="text-sm font-mono text-white">0.3s</span>
                    </div>
                  </div>
                </div>

                {/* AI Actions */}
                <div className="p-6">
                  <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                    AI Actions
                  </h3>
                  <div className="space-y-3">
                    {actions.map((action, index) => {
                      const isDone = index < activeActionIndex;
                      const isActive = index === activeActionIndex;

                      return (
                        <motion.div
                          key={action.action}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={cn(
                            "flex items-center gap-3 p-3 rounded-lg transition-all",
                            isActive ? 'bg-brand-primary/10 border border-brand-primary/20' : 'bg-zinc-800/30'
                          )}
                        >
                          <div className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center",
                            isDone ? 'bg-emerald-500/20' : isActive ? 'bg-brand-primary/20' : 'bg-zinc-800'
                          )}>
                            {isDone ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : isActive ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              >
                                <Brain className="w-4 h-4 text-brand-primary" />
                              </motion.div>
                            ) : (
                              <Clock className="w-4 h-4 text-zinc-600" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={cn(
                              "text-sm truncate",
                              isDone ? 'text-zinc-500' : isActive ? 'text-white' : 'text-zinc-600'
                            )}>
                              {action.action}
                            </p>
                          </div>
                          {isActive && (
                            <div className="flex gap-0.5">
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  className="w-1 h-1 bg-brand-primary rounded-full"
                                  animate={{ opacity: [0.3, 1, 0.3] }}
                                  transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                  }}
                                />
                              ))}
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-zinc-800/30 text-center">
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-xs text-zinc-500">Availability</div>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-800/30 text-center">
                      <div className="text-2xl font-bold text-emerald-400">∞</div>
                      <div className="text-xs text-zinc-500">Concurrent</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// COMBINED: HOW IT WORKS + CAPABILITIES (Tabbed)
// ============================================
const stepsWithFeatures = [
  {
    number: 1,
    icon: Mic,
    title: 'Design Your Voice',
    description: 'Create a custom AI persona that matches your brand',
    color: 'from-purple-500 to-pink-500',
    features: [
      { icon: Mic, title: 'Custom Voice', description: 'Choose from natural-sounding voices or clone your own' },
      { icon: MessageSquare, title: 'Brand Tone', description: 'Professional, friendly, or casual - match your brand' },
      { icon: Globe, title: 'Multi-Language', description: 'Speak to customers in 20+ languages automatically' },
    ],
  },
  {
    number: 2,
    icon: Brain,
    title: 'Train Your Agent',
    description: 'Feed it your business knowledge and watch it learn',
    color: 'from-blue-500 to-cyan-500',
    features: [
      { icon: Brain, title: 'Knowledge Base', description: 'Upload FAQs, docs, and policies - AI learns instantly' },
      { icon: MessageSquare, title: 'Smart Responses', description: 'Handles complex questions with context awareness' },
      { icon: Zap, title: 'Quick Setup', description: 'From zero to answering calls in under a week' },
    ],
  },
  {
    number: 3,
    icon: PhoneCall,
    title: 'Smart Call Handling',
    description: 'Intelligent routing, booking, and escalation',
    color: 'from-emerald-500 to-teal-500',
    features: [
      { icon: Clock, title: '24/7 Coverage', description: 'Never miss a call, day or night, holidays included' },
      { icon: Calendar, title: 'Instant Booking', description: 'Syncs with Google, Outlook, Calendly in real-time' },
      { icon: Zap, title: 'Smart Transfer', description: 'Routes urgent calls to the right person instantly' },
    ],
  },
  {
    number: 4,
    icon: BarChart3,
    title: 'Always Improving',
    description: 'Analytics and insights that drive results',
    color: 'from-orange-500 to-amber-500',
    features: [
      { icon: BarChart3, title: 'Analytics Dashboard', description: 'Call volume, sentiment, and booking rates at a glance' },
      { icon: MessageSquare, title: 'Call Transcripts', description: 'Every conversation recorded and searchable' },
      { icon: Brain, title: 'Continuous Learning', description: 'Gets smarter with every conversation automatically' },
    ],
  },
];

function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const step = stepsWithFeatures[activeStep];
  const StepIcon = step.icon;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Four steps to transform your phone system
            </p>
          </div>
        </FadeInSection>

        {/* Step Tabs */}
        <FadeInSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {stepsWithFeatures.map((s, index) => {
              const Icon = s.icon;
              const isActive = activeStep === index;
              return (
                <button
                  key={s.number}
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    "group relative flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition-all duration-300",
                    isActive
                      ? 'bg-zinc-800 text-white'
                      : 'bg-zinc-900/50 text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-300'
                  )}
                >
                  {/* Step number */}
                  <span className={cn(
                    "w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300",
                    isActive
                      ? `bg-gradient-to-r ${s.color} text-white`
                      : 'bg-zinc-700 text-zinc-400'
                  )}>
                    {s.number}
                  </span>
                  <span className="hidden sm:inline">{s.title}</span>
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className={cn(
                        "absolute inset-0 rounded-xl border-2 -z-10",
                        `border-transparent bg-gradient-to-r ${s.color} opacity-20`
                      )}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </FadeInSection>

        {/* Content Area */}
        <FadeInSection delay={0.2}>
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
            {/* Background glow */}
            <motion.div
              className={cn(
                "absolute inset-0 opacity-10 blur-3xl transition-all duration-500 -z-10",
                `bg-gradient-to-br ${step.color}`
              )}
              key={activeStep}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
            />

            {/* Header */}
            <div className="flex items-center gap-4 p-6 border-b border-zinc-800/50">
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center",
                `bg-gradient-to-br ${step.color}`
              )}>
                <StepIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {step.features.map((feature, index) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-5 rounded-xl bg-zinc-800/30 border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-300"
                      >
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300",
                          "bg-zinc-700/50 group-hover:bg-gradient-to-br",
                          `group-hover:${step.color}`
                        )}>
                          <FeatureIcon className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
                        </div>
                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-sm text-zinc-400">{feature.description}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress indicator */}
            <div className="px-6 pb-6">
              <div className="flex gap-2">
                {stepsWithFeatures.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      index === activeStep
                        ? 'flex-1 bg-gradient-to-r ' + stepsWithFeatures[index].color
                        : 'w-8 bg-zinc-700 hover:bg-zinc-600'
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// COMPARISON SECTION
// ============================================
const comparisonData = [
  { feature: 'Availability', traditional: '8hrs/day', ai: '24/7', highlight: true },
  { feature: 'Answer Time', traditional: '30+ seconds', ai: 'Instant', highlight: true },
  { feature: 'Book Appointments', traditional: 'Manual', ai: 'Automatic', highlight: false },
  { feature: 'Handle Multiple Calls', traditional: '1 at a time', ai: 'Unlimited', highlight: true },
  { feature: 'After Hours', traditional: 'Voicemail', ai: 'Full Service', highlight: true },
  { feature: 'Consistency', traditional: 'Varies', ai: 'Always Perfect', highlight: false },
  { feature: 'Customizable', traditional: 'Limited', ai: 'Fully', highlight: false },
];

function ComparisonSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI vs Traditional
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              See why businesses are switching to AI-powered phone systems
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-zinc-900/80">
              <div className="p-4 text-zinc-400 font-medium border-b border-zinc-800">
                Feature
              </div>
              <div className="p-4 text-center text-zinc-400 font-medium border-b border-zinc-800">
                Traditional
              </div>
              <div className="p-4 text-center font-medium border-b border-zinc-800 bg-gradient-to-r from-brand-primary/20 to-cyan-500/20">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-400">
                  AI Phone System
                </span>
              </div>
            </div>

            {/* Table Body */}
            {comparisonData.map((row, index) => (
              <motion.div
                key={row.feature}
                className="grid grid-cols-3 border-b border-zinc-800 last:border-b-0 hover:bg-zinc-800/30 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="p-4 text-zinc-300 flex items-center gap-2">
                  {row.highlight && (
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  )}
                  {row.feature}
                </div>
                <div className="p-4 text-center text-zinc-500">
                  {row.traditional}
                </div>
                <div className="p-4 text-center bg-gradient-to-r from-brand-primary/5 to-cyan-500/5">
                  <span className="inline-flex items-center gap-2 text-emerald-400 font-medium">
                    <Check className="w-4 h-4" />
                    {row.ai}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ============================================
// USE CASES SECTION
// ============================================
const useCases = [
  {
    icon: Stethoscope,
    title: 'Medical & Dental',
    description: 'Schedule appointments, handle prescription refill requests, and triage urgent calls.',
    example: '"I need to schedule a follow-up appointment with Dr. Smith..."',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants',
    description: 'Take reservations, answer menu questions, and handle takeout orders.',
    example: '"I\'d like to make a reservation for 4 people at 7pm..."',
  },
  {
    icon: Scissors,
    title: 'Salons & Spas',
    description: 'Book services, manage waitlists, and answer pricing questions.',
    example: '"Do you have any openings for a haircut this afternoon?"',
  },
  {
    icon: Wrench,
    title: 'Home Services',
    description: 'Schedule service calls, provide quotes, and dispatch technicians.',
    example: '"My AC stopped working and I need someone to come take a look..."',
  },
  {
    icon: Scale,
    title: 'Law Firms',
    description: 'Screen potential clients, schedule consultations, and route urgent matters.',
    example: '"I need to speak with an attorney about a personal injury case..."',
  },
  {
    icon: Store,
    title: 'Retail',
    description: 'Check inventory, answer store hours, and handle customer inquiries.',
    example: '"Do you have the new iPhone in stock? What colors do you have?"',
  },
];

function UseCasesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for Your Industry
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Trusted by businesses across every sector
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const isHovered = hoveredIndex === index;

            return (
              <FadeInSection key={useCase.title} delay={index * 0.05}>
                <motion.div
                  className="relative group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 cursor-pointer overflow-hidden"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Gradient border glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(10, 132, 255, 0.15), rgba(0, 212, 255, 0.15))',
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-cyan-500 transition-all duration-300">
                      <Icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-zinc-400 mb-4">
                      {useCase.description}
                    </p>

                    {/* Example conversation on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-zinc-800">
                            <div className="text-sm text-zinc-500 italic">
                              {useCase.example}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================
// FAQ SECTION
// ============================================
const faqs = [
  {
    question: 'Does it work with my existing phone system?',
    answer: 'Yes! Our AI integrates with any phone system—landlines, VoIP, mobile, or cloud-based. We handle the technical setup so you don\'t have to change anything.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Most businesses are up and running within a week. We\'ll work with you to customize the AI voice, train it on your business info, and test everything before going live.',
  },
  {
    question: 'What calendar systems do you integrate with?',
    answer: 'We integrate with Google Calendar, Microsoft Outlook, Apple Calendar, Calendly, Acuity, and most major scheduling platforms. Custom integrations are available.',
  },
  {
    question: 'Can I review calls and transcripts?',
    answer: 'Absolutely. Every call is recorded and transcribed. You\'ll have access to a dashboard with call logs, transcripts, analytics, and insights.',
  },
  {
    question: 'What if the AI can\'t handle a question?',
    answer: 'The AI is trained to gracefully transfer calls it can\'t handle. You can set custom rules for when to transfer and to whom. It never leaves callers hanging.',
  },
  {
    question: 'Can I customize how the AI sounds and responds?',
    answer: 'Yes! You choose the voice, tone, and personality. You control how it greets callers, what information it shares, and how it handles different scenarios.',
  },
  {
    question: 'Who owns the call data?',
    answer: 'You do. All data belongs to your business. We never sell or share your information. You can export or delete your data at any time.',
  },
  {
    question: 'What if I want to cancel?',
    answer: 'No long-term contracts required. You can cancel anytime with 30 days notice. We\'ll help you transition smoothly and export all your data.',
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zinc-400">
              Everything you need to know about AI phone systems
            </p>
          </div>
        </FadeInSection>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FadeInSection key={index} delay={index * 0.03}>
              <motion.div
                className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/50"
                initial={false}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-800/30 transition-colors"
                >
                  <span className="text-lg font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-zinc-400" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 text-zinc-400 border-t border-zinc-800 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// CTA SECTION
// ============================================
function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Phone System?
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses using AI to handle calls smarter, faster, and around the clock.
          </p>

          <Link href="/quote">
            <motion.div
              data-magnetic
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full font-semibold text-xl cursor-pointer hover:shadow-brand-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get a Free Demo</span>
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </Link>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-zinc-500">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              Setup in under a week
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              Cancel anytime
            </span>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
