"use client"

import React, { createContext, useState, useEffect, PropsWithChildren, useCallback } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const updateTheme = useCallback((darkMode: boolean) => {
    setIsDarkMode(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    const darkModePreference = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (hasMounted) {
      if (darkModePreference === 'dark' || (!darkModePreference && systemPrefersLight)) {
        updateTheme(false);
      } else {
        updateTheme(true);
      }

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        updateTheme(e.matches);
      };

      mediaQuery.addEventListener('change', handleSystemThemeChange);
      return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    } else {
      setHasMounted(true);
    }
  }, [hasMounted, updateTheme]);

  const toggleDarkMode = () => {
    updateTheme(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

