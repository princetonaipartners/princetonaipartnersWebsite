import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function ShiningButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("group cursor-pointer rounded-xl border-4 border-brand-primary border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100", className)}>
      <div className="relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-4 font-bold text-white">
        {children}
        <div
          className={cn(
            "absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/20 transition-all duration-700 group-hover:left-[calc(100%+1rem)]",
          )}
        />
      </div>
    </div>
  );
}
