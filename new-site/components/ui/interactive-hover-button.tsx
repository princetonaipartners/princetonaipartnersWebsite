import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-32 cursor-pointer overflow-hidden rounded-full border-2 border-brand-primary dark:border-dark-brand-primary bg-white dark:bg-dark-bg-primary p-2 text-center font-semibold transition-colors",
        className,
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-brand-primary dark:text-dark-brand-primary transform-gpu">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 transform-gpu">
        <span>{text}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
      {/* Background circle - uses scale transform instead of width/height for performance */}
      <div
        className="absolute inset-0 rounded-full bg-brand-primary dark:bg-dark-brand-primary transform-gpu scale-0 group-hover:scale-150 transition-transform duration-300 ease-out origin-center"
      />
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
