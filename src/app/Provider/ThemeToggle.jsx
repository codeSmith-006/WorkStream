"use client";
import { Sun, Moon } from "lucide-react";

import { useTheme } from "./ThemeProvider";
import Button from "../Components/(home_page)/UI/Button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // 🚫 Don't render until mounted
  }

  return (
    <Button
      suppressHydrationWarning
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-md border-2 border-transparent hover:border-border transition-all duration-300"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Sun
        className={`h-4 w-4 rotate-0 scale-100 transition-all duration-300 ${
          theme === "dark" ? "rotate-90 scale-0" : ""
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 ${
          theme === "dark" ? "rotate-0 scale-100" : ""
        }`}
      />
    </Button>
  );
}
