"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="w-10 h-10 rounded-full"
        disabled
      >
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-full hover:bg-brand-light dark:hover:bg-dark-bg-tertiary transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-dark-text-secondary hover:text-dark-brand-primary transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-text-secondary hover:text-brand-primary transition-colors" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
