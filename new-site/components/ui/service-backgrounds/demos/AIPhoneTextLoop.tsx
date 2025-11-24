"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Calendar, Check } from "lucide-react";

interface Message {
  id: number;
  sender: "patient" | "ai";
  text: string;
  icon?: typeof Brain | typeof Calendar | typeof Check;
  iconLabel?: string;
}

const conversationMessages: Message[] = [
  {
    id: 1,
    sender: "patient",
    text: "I have a toothache and need to see the dentist",
  },
  {
    id: 2,
    sender: "ai",
    text: "Let me help you get an appointment. How urgent is the pain?",
    icon: Brain,
    iconLabel: "Understanding",
  },
  {
    id: 3,
    sender: "patient",
    text: "Pretty bad, started yesterday",
  },
  {
    id: 4,
    sender: "ai",
    text: "I can fit you in tomorrow at 2pm or Thursday at 10am",
    icon: Calendar,
    iconLabel: "Checking calendar",
  },
  {
    id: 5,
    sender: "patient",
    text: "Tomorrow at 2pm please",
  },
  {
    id: 6,
    sender: "ai",
    text: "Perfect! Booking you for tomorrow at 2pm with Dr. Smith",
  },
  {
    id: 7,
    sender: "patient",
    text: "Michael Chen",
  },
  {
    id: 8,
    sender: "ai",
    text: "All set, Michael! We'll send a confirmation text. See you soon!",
    icon: Check,
    iconLabel: "Confirmed",
  },
];

export function AIPhoneTextLoop() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % (conversationMessages.length - 2));
    }, 5000); // Change visible messages every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Get 3 consecutive messages to display
  const visibleMessages = [
    conversationMessages[currentIndex],
    conversationMessages[currentIndex + 1],
    conversationMessages[currentIndex + 2],
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="w-full max-w-3xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-slate-600 dark:text-slate-400">
            Dr. Smith's Dental Office
          </h3>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-slate-400 dark:via-slate-600 to-transparent" />
        </div>

        {/* Scrolling Conversation Window */}
        <div className="space-y-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-4"
            >
              {visibleMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-4 ${
                    message.sender === "ai" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "patient" && (
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          P
                        </span>
                      </div>
                    </div>
                  )}

                  <div className={`flex-1 max-w-[75%] ${message.sender === "ai" ? "text-right" : ""}`}>
                    <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                      {message.sender === "patient" ? "Patient" : "AI Receptionist"}
                    </p>
                    <div
                      className={`inline-block px-4 py-3 rounded-2xl ${
                        message.sender === "ai"
                          ? "bg-gradient-to-br from-brand-primary to-brand-secondary dark:from-dark-brand-primary dark:to-brand-secondary text-white rounded-br-sm"
                          : "bg-slate-100 dark:bg-slate-800 text-text-primary dark:text-dark-text-primary rounded-bl-sm"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      {message.icon && message.iconLabel && (
                        <div className="flex items-center gap-2 mt-2 text-xs opacity-90">
                          <message.icon className="w-3.5 h-3.5" />
                          <span className="font-medium">{message.iconLabel}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {message.sender === "ai" && (
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary dark:from-dark-brand-primary dark:to-brand-secondary flex items-center justify-center">
                        <span className="text-sm font-bold text-white">AI</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Badges */}
        <div className="flex justify-center gap-3 flex-wrap">
          {["24/7 Available", "Instant Response", "Smart Booking"].map((badge) => (
            <span
              key={badge}
              className="px-4 py-1.5 text-xs font-semibold bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300 shadow-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
