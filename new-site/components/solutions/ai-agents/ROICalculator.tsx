'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';
import { FadeInSection } from '@/components/animations/FadeInSection';

export function ROICalculator() {
  const [tickets, setTickets] = useState(500);
  const [avgTime, setAvgTime] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(25);

  // Calculations
  const monthlyHours = (tickets * avgTime) / 60;
  const monthlyCost = monthlyHours * hourlyRate;
  const yearlyHours = monthlyHours * 12;
  const yearlyCost = monthlyCost * 12;

  // With RAG (90% reduction)
  const ragHours = monthlyHours * 0.1;
  const ragCost = ragHours * hourlyRate;
  const ragYearlyCost = ragCost * 12;

  const hourlySavings = monthlyHours - ragHours;
  const monthlySavings = monthlyCost - ragCost;
  const yearlySavings = yearlyCost - ragYearlyCost;

  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-dark-bg-primary dark:via-dark-brand-primary/5 dark:to-dark-bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              See how much time and money a RAG agent can save your business
            </p>
          </div>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <FadeInSection delay={0.2}>
            <div className="bg-white dark:bg-dark-bg-primary rounded-2xl p-8 border border-neutral-200 dark:border-dark-border">
              <h3 className="text-2xl font-bold mb-6 text-text-primary dark:text-dark-text-primary">
                Your Current Metrics
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-2">
                    Support Tickets/Month
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="100"
                    value={tickets}
                    onChange={(e) => setTickets(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                  />
                  <div className="text-3xl font-bold text-brand-primary dark:text-dark-brand-primary mt-2">
                    {tickets.toLocaleString()}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-2">
                    Average Handle Time (minutes)
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="5"
                    value={avgTime}
                    onChange={(e) => setAvgTime(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                  />
                  <div className="text-3xl font-bold text-brand-primary dark:text-dark-brand-primary mt-2">
                    {avgTime} min
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-2">
                    Hourly Rate ($)
                  </label>
                  <input
                    type="range"
                    min="15"
                    max="100"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                  />
                  <div className="text-3xl font-bold text-brand-primary dark:text-dark-brand-primary mt-2">
                    ${hourlyRate}/hr
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Results */}
          <FadeInSection delay={0.3}>
            <div className="space-y-6">
              {/* Time Saved */}
              <motion.div
                key={hourlySavings}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                    Time Saved
                  </span>
                </div>
                <div className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-1">
                  {Math.round(hourlySavings)} hrs/mo
                </div>
                <div className="text-sm text-blue-700 dark:text-blue-300">
                  {Math.round(yearlyHours)} hrs/year
                </div>
              </motion.div>

              {/* Money Saved */}
              <motion.div
                key={monthlySavings}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20 rounded-2xl p-6 border border-green-200 dark:border-green-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm font-semibold text-green-900 dark:text-green-100">
                    Money Saved
                  </span>
                </div>
                <div className="text-4xl font-bold text-green-900 dark:text-green-100 mb-1">
                  ${Math.round(monthlySavings).toLocaleString()}/mo
                </div>
                <div className="text-sm text-green-700 dark:text-green-300">
                  ${Math.round(yearlySavings).toLocaleString()}/year
                </div>
              </motion.div>

              {/* 3-Year ROI */}
              <motion.div
                key={yearlySavings * 3}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-800/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-sm font-semibold text-purple-900 dark:text-purple-100">
                    3-Year Savings
                  </span>
                </div>
                <div className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-1">
                  ${Math.round(yearlySavings * 3).toLocaleString()}
                </div>
                <div className="text-sm text-purple-700 dark:text-purple-300">
                  That's {Math.round(yearlyHours * 3 / 2080)} full-time employees
                </div>
              </motion.div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-6 text-white">
                <h4 className="font-bold mb-2">Ready to save this much?</h4>
                <p className="text-sm opacity-90 mb-4">
                  Most RAG agents pay for themselves in the first month
                </p>
                <a
                  href="/contact"
                  className="block w-full text-center py-3 rounded-xl bg-white text-brand-primary font-semibold hover:scale-105 transition-transform"
                >
                  Get Started →
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
