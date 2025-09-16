"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  // Initialize theme safely (SSR won't crash)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && window.__theme) {
      return window.__theme; // 👈 preload from inline script
    }
    return "light"; // fallback during SSR
  });

  useEffect(() => {
    // Sync theme with <html> class and localStorage
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("workstream-theme", theme);
    window.__theme = theme; // keep global in sync
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
