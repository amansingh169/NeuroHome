import { createContext, useState, useEffect } from "react";
import { Sun, SunDim, SunMoon, Moon, Zap, Flame } from "lucide-react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const availableThemes = [
    { name: "light", icon: <Sun className="w-4 h-4" /> },
    { name: "ash", icon: <SunDim className="w-4 h-4" /> },
    { name: "dark", icon: <SunMoon className="w-4 h-4" /> },
    { name: "onyx", icon: <Moon className="w-4 h-4" /> },
    { name: "neon", icon: <Zap className="w-4 h-4" /> },
    { name: "fire", icon: <Flame className="w-4 h-4" /> },
  ];

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const defaultTheme = availableThemes.includes(savedTheme) ? savedTheme : "dark";
    setTheme(defaultTheme);
    document.documentElement.setAttribute("data-theme", defaultTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};
