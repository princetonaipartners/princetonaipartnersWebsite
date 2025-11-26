'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';

interface CodeWindowProps {
  code: string;
  language?: string;
  filename?: string;
  typingSpeed?: number;
  className?: string;
  showBuildProgress?: boolean;
}

/**
 * CodeWindow - Mac-style code editor with typing animation
 * Creates a realistic IDE experience with syntax highlighting
 */
export function CodeWindow({
  code,
  language = 'typescript',
  filename = 'config.ts',
  typingSpeed = 30,
  className,
  showBuildProgress = true,
}: CodeWindowProps) {
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [buildState, setBuildState] = useState<'idle' | 'building' | 'success'>('idle');
  const [buildProgress, setBuildProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Typing animation
  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < code.length) {
        setDisplayedCode(code.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);

        // Start build animation after typing completes
        if (showBuildProgress) {
          setTimeout(() => setBuildState('building'), 500);
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [code, typingSpeed, isTyping, showBuildProgress]);

  // Build progress animation
  useEffect(() => {
    if (buildState !== 'building') return;

    const interval = setInterval(() => {
      setBuildProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setBuildState('success');
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [buildState]);

  // Basic syntax highlighting
  const highlightCode = (text: string) => {
    return text
      // Keywords
      .replace(
        /\b(const|let|var|function|return|export|import|from|interface|type|async|await|new|class|extends|implements)\b/g,
        '<span class="text-brand-primary">$1</span>'
      )
      // Types
      .replace(
        /\b(string|number|boolean|void|null|undefined|any|Promise|Record|Array)\b/g,
        '<span class="text-brand-primary">$1</span>'
      )
      // Strings
      .replace(
        /(["'`])(?:(?=(\\?))\2.)*?\1/g,
        '<span class="text-brand-secondary">$&</span>'
      )
      // Comments
      .replace(
        /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
        '<span class="text-zinc-500">$1</span>'
      )
      // Numbers
      .replace(
        /\b(\d+)\b/g,
        '<span class="text-accent-orange">$1</span>'
      )
      // Function calls
      .replace(
        /(\w+)(?=\()/g,
        '<span class="text-accent-pink">$1</span>'
      );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm shadow-2xl',
        className
      )}
    >
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800">
        {/* Traffic lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        {/* Filename */}
        <span className="text-xs font-mono text-zinc-500">{filename}</span>

        {/* Language badge */}
        <span className="text-xs font-mono text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded">
          {language}
        </span>
      </div>

      {/* Code Area */}
      <div className="p-4 font-mono text-sm leading-relaxed min-h-[300px] overflow-auto">
        {/* Line numbers + code */}
        <div className="flex">
          {/* Line numbers */}
          <div className="pr-4 text-right text-zinc-600 select-none border-r border-zinc-800 mr-4">
            {displayedCode.split('\n').map((_, i) => (
              <div key={i} className="leading-6">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code content */}
          <pre className="flex-1 text-zinc-300">
            <code
              dangerouslySetInnerHTML={{
                __html: highlightCode(displayedCode),
              }}
            />
            {/* Typing cursor */}
            {isTyping && (
              <span className="inline-block w-2 h-5 bg-brand-primary ml-0.5 animate-blink" />
            )}
          </pre>
        </div>
      </div>

      {/* Build Progress Bar */}
      <AnimatePresence>
        {buildState !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-zinc-800 bg-zinc-900/90 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              {buildState === 'building' ? (
                <>
                  <Loader2 className="w-4 h-4 text-brand-primary animate-spin" />
                  <span className="text-xs font-mono text-zinc-400">
                    Compiling...
                  </span>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-4 h-4 rounded-full bg-brand-primary flex items-center justify-center"
                  >
                    <Check className="w-3 h-3 text-zinc-900" />
                  </motion.div>
                  <span className="text-xs font-mono text-brand-primary">
                    Build successful
                  </span>
                </>
              )}

              <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden ml-2">
                <motion.div
                  className={cn(
                    'h-full rounded-full',
                    buildState === 'success'
                      ? 'bg-brand-primary'
                      : 'bg-gradient-to-r from-brand-primary to-brand-secondary'
                  )}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(buildProgress, 100)}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <span className="text-xs font-mono text-zinc-500 w-12 text-right">
                {Math.min(Math.round(buildProgress), 100)}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Example code snippets for use
export const EXAMPLE_CODE = {
  enterpriseConfig: `interface EnterpriseConfig {
  // Core system architecture
  database: {
    provider: 'postgres' | 'mongodb';
    replicas: number;
    encryption: boolean;
  };

  // AI integration layer
  ai: {
    model: string;
    temperature: number;
    maxTokens: number;
  };

  // Authentication & security
  auth: {
    providers: string[];
    mfa: boolean;
    sso: boolean;
  };
}

export async function initializeSystem(
  config: EnterpriseConfig
): Promise<void> {
  await connectDatabase(config.database);
  await initializeAI(config.ai);
  await setupAuth(config.auth);

  console.log('System initialized');
}`,

  apiEndpoint: `// High-performance API endpoint
export async function POST(req: Request) {
  const { prompt, context } = await req.json();

  const response = await ai.generate({
    model: 'gpt-4-turbo',
    messages: [
      { role: 'system', content: context },
      { role: 'user', content: prompt }
    ],
    stream: true
  });

  return new StreamingResponse(response);
}`,
};
