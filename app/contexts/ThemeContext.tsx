import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface ThemeContextType {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    const savedTheme = localStorage.getItem("theme");
    return savedTheme !== "light";
  });

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#030712" : "#ffffff";
  }, [isDark]);

  useEffect(() => {
    const handleThemeChange = (event: CustomEvent) => {
      setIsDark(event.detail.isDark);
    };

    window.addEventListener("themeChange", handleThemeChange as EventListener);
    return () => window.removeEventListener("themeChange", handleThemeChange as EventListener);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
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
