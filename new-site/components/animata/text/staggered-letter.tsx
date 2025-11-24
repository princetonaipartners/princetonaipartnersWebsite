"use client";

import { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggeredLetterProps extends HTMLAttributes<HTMLDivElement> {
  applyMask?: boolean;
  text?: string;
  delay?: number;
  direction?: "up" | "drop";
}

export default function StaggeredLetter({
  applyMask = false,
  text = "Animata",
  delay = 0.05,
  direction = "up",
  className,
  ...props
}: StaggeredLetterProps) {
  const common = "font-bold drop-shadow-lg";
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center",
        className,
      )}
      {...props}
    >
      {applyMask && <div className={cn(common, "absolute text-gray-400")}>{text}</div>}
      <div className="flex">
        {text.split("").map((letter, index) => (
          <motion.div
            className={common}
            initial={{ opacity: 0, y: direction === "up" ? 150 : -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * delay,
              duration: 0.5,
            }}
            key={`${letter}-${index}`}
          >
            {letter === " " ? <span>&nbsp;</span> : letter}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
