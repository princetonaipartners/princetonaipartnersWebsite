'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { QuoteState, FeatureId, ProjectType, Complexity, Timeline } from '@/lib/quote/types';
import { createInitialQuoteState } from '@/lib/quote/types';
import { calculateEstimate } from '@/lib/quote/pricing';
import { QuoteProgress } from './QuoteProgress';
import { QuoteEstimate } from './QuoteEstimate';
import { ProjectTypeStep } from './steps/ProjectTypeStep';
import { ScopeFeaturesStep } from './steps/ScopeFeaturesStep';
import { TimelineStep } from './steps/TimelineStep';
import { ContactStep } from './steps/ContactStep';
import { QuoteResultStep } from './steps/QuoteResultStep';

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

export function QuoteCalculator() {
  const [state, setState] = useState<QuoteState>(createInitialQuoteState);
  const [direction, setDirection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const estimate = calculateEstimate(state);

  // Navigation
  const goToStep = useCallback((step: 1 | 2 | 3 | 4 | 5) => {
    setDirection(step > state.currentStep ? 1 : -1);
    setState((prev) => ({ ...prev, currentStep: step }));
  }, [state.currentStep]);

  const nextStep = useCallback(() => {
    if (state.currentStep < 5) {
      setDirection(1);
      setState((prev) => ({ ...prev, currentStep: (prev.currentStep + 1) as 1 | 2 | 3 | 4 | 5 }));
    }
  }, [state.currentStep]);

  const prevStep = useCallback(() => {
    if (state.currentStep > 1) {
      setDirection(-1);
      setState((prev) => ({ ...prev, currentStep: (prev.currentStep - 1) as 1 | 2 | 3 | 4 | 5 }));
    }
  }, [state.currentStep]);

  // State updaters
  const setProjectType = useCallback((projectType: ProjectType) => {
    setState((prev) => ({ ...prev, projectType }));
    // Auto-advance after selection with slight delay
    setTimeout(() => {
      setDirection(1);
      setState((prev) => ({ ...prev, currentStep: 2 }));
    }, 300);
  }, []);

  const setComplexity = useCallback((complexity: Complexity) => {
    setState((prev) => ({ ...prev, complexity }));
  }, []);

  const toggleFeature = useCallback((featureId: FeatureId) => {
    setState((prev) => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter((f) => f !== featureId)
        : [...prev.features, featureId],
    }));
  }, []);

  const setTimeline = useCallback((timeline: Timeline) => {
    setState((prev) => ({ ...prev, timeline }));
  }, []);

  const updateContact = useCallback((updates: Partial<QuoteState['contact']>) => {
    setState((prev) => ({
      ...prev,
      contact: { ...prev.contact, ...updates },
    }));
  }, []);

  // Form submission
  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...state,
          estimate,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        nextStep();
      } else {
        console.error('Quote submission failed');
      }
    } catch (error) {
      console.error('Quote submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [state, estimate, nextStep]);

  // Render current step
  const renderStep = () => {
    switch (state.currentStep) {
      case 1:
        return (
          <ProjectTypeStep
            selectedType={state.projectType}
            onSelect={setProjectType}
          />
        );
      case 2:
        return (
          <ScopeFeaturesStep
            complexity={state.complexity}
            features={state.features}
            onComplexityChange={setComplexity}
            onFeatureToggle={toggleFeature}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <TimelineStep
            timeline={state.timeline}
            onSelect={setTimeline}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <ContactStep
            contact={state.contact}
            onUpdate={updateContact}
            onSubmit={handleSubmit}
            onBack={prevStep}
            isSubmitting={isSubmitting}
          />
        );
      case 5:
        return (
          <QuoteResultStep
            state={state}
            estimate={estimate}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary dark:text-dark-text-primary mb-4"
        >
          Get Your Custom Quote
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-text-secondary dark:text-dark-text-secondary"
        >
          Answer a few questions to receive a personalized estimate + project brief
        </motion.p>
      </div>

      {/* Progress indicator */}
      <QuoteProgress
        currentStep={state.currentStep}
        onStepClick={goToStep}
      />

      {/* Step content */}
      <div className="mt-8 md:mt-12">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={state.currentStep}
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating estimate (visible on steps 2-4) */}
      {state.currentStep >= 2 && state.currentStep <= 4 && estimate && (
        <QuoteEstimate estimate={estimate} />
      )}
    </div>
  );
}
