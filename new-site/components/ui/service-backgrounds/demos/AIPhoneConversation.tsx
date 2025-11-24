"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Brain, Calendar, Check } from "lucide-react";

interface Message {
  id: number;
  sender: "patient" | "ai";
  text: string;
  icon?: "brain" | "calendar" | "check";
  delay: number;
}

const conversationScript: Message[] = [
  {
    id: 1,
    sender: "patient",
    text: "Hi, I have a toothache and need to see the dentist",
    delay: 0,
  },
  {
    id: 2,
    sender: "ai",
    text: "I'm sorry to hear that! Let me help you get an appointment. How urgent is the pain?",
    icon: "brain",
    delay: 1500,
  },
  {
    id: 3,
    sender: "patient",
    text: "Pretty bad, started yesterday",
    delay: 3000,
  },
  {
    id: 4,
    sender: "ai",
    text: "I can fit you in tomorrow at 2pm or Thursday at 10am. Which works better?",
    icon: "calendar",
    delay: 4200,
  },
  {
    id: 5,
    sender: "patient",
    text: "Tomorrow at 2pm please",
    delay: 6500,
  },
  {
    id: 6,
    sender: "ai",
    text: "Perfect! Booking you for tomorrow at 2pm with Dr. Smith. What's your name?",
    delay: 7800,
  },
  {
    id: 7,
    sender: "patient",
    text: "Michael Chen",
    delay: 9500,
  },
  {
    id: 8,
    sender: "ai",
    text: "All set, Michael! Tomorrow at 2pm. We'll send a confirmation text. See you soon!",
    icon: "check",
    delay: 10800,
  },
];

export function AIPhoneConversation() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [typingIndex, setTypingIndex] = useState<number | null>(null);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    conversationScript.forEach((message, index) => {
      // Show typing indicator slightly before message
      if (message.sender === "ai" && message.delay > 0) {
        const typingTimer = setTimeout(() => {
          setTypingIndex(message.id);
        }, message.delay - 500);
        timers.push(typingTimer);
      }

      // Show actual message
      const messageTimer = setTimeout(() => {
        setTypingIndex(null);
        setVisibleMessages((prev) => [...prev, message.id]);
      }, message.delay);
      timers.push(messageTimer);
    });

    // Reset after conversation completes
    const resetTimer = setTimeout(() => {
      setVisibleMessages([]);
      setTypingIndex(null);
    }, 14000);
    timers.push(resetTimer);

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  const getIcon = (iconType?: "brain" | "calendar" | "check") => {
    switch (iconType) {
      case "brain":
        return <Brain className="w-3 h-3" />;
      case "calendar":
        return <Calendar className="w-3 h-3" />;
      case "check":
        return <Check className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      {/* Phone Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md h-[500px] bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border-8 border-slate-800 dark:border-slate-700 overflow-hidden"
      >
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 dark:bg-slate-700 rounded-b-3xl z-20" />

        {/* Phone Header */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-dark-brand-primary dark:to-brand-secondary p-4 pt-8 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Dr. Smith's Dental</h3>
              <p className="text-xs text-white/80">AI Assistant</p>
            </div>
            <div className="ml-auto flex gap-1">
              <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
              <div className="w-1 h-1 rounded-full bg-white animate-pulse delay-75" />
              <div className="w-1 h-1 rounded-full bg-white animate-pulse delay-150" />
            </div>
          </div>
        </div>

        {/* Conversation Area */}
        <div className="absolute top-24 bottom-0 left-0 right-0 overflow-y-auto p-4 space-y-3">
          <AnimatePresence>
            {conversationScript.map((message) => {
              if (!visibleMessages.includes(message.id)) return null;

              return (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === "ai" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                      message.sender === "ai"
                        ? "bg-gradient-to-br from-brand-primary to-brand-secondary dark:from-dark-brand-primary dark:to-brand-secondary text-white rounded-br-sm"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    {message.icon && (
                      <div className="mt-2 flex items-center gap-1.5 text-xs opacity-80">
                        {getIcon(message.icon)}
                        <span>
                          {message.icon === "brain" && "Understanding..."}
                          {message.icon === "calendar" && "Checking calendar..."}
                          {message.icon === "check" && "Confirmed!"}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Typing Indicator */}
            {typingIndex !== null && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex justify-end"
              >
                <div className="max-w-[75%] rounded-2xl rounded-br-sm px-4 py-3 bg-gradient-to-br from-brand-primary/80 to-brand-secondary/80 dark:from-dark-brand-primary/80 dark:to-brand-secondary/80">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
