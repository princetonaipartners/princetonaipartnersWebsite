import React from "react";
import { cn } from "@/lib/utils";

interface PlayStoreButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function PlayStoreButton({ className, ...props }: PlayStoreButtonProps) {
  return (
    <button
      className={cn(
        "flex items-center gap-2 px-5 py-3 bg-black text-white rounded-xl transition-all duration-200 hover:bg-gray-900 hover:scale-105 active:scale-95",
        className
      )}
      {...props}
    >
      {/* Google Play Logo */}
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M3 3.41v17.18c0 .42.32.76.71.97l9.68-9.68L3.71 2.2c-.39.2-.71.55-.71.97v.24z" fill="#00D7FE"/>
        <path d="M16.22 9.72l-2.83-2.83L3.71 16.57c.09.05.2.08.3.08.17 0 .34-.04.48-.13l11.73-6.8z" fill="#00C650"/>
        <path d="M16.22 14.28l-2.83 2.83 9.68-9.68c.26-.25.26-.66 0-.91l-6.85 7.76z" fill="#FFD900"/>
        <path d="M13.39 12l2.83-2.28L4.49 3.05c-.14-.09-.3-.13-.48-.13-.11 0-.21.03-.3.08L13.39 12z" fill="#FF5436"/>
      </svg>

      {/* Text */}
      <div className="flex flex-col items-start leading-tight">
        <span className="text-[10px] font-normal">GET IT ON</span>
        <span className="text-lg font-semibold -mt-0.5">Google Play</span>
      </div>
    </button>
  );
}
