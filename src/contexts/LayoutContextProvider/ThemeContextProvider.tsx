"use client"

import  React, { createContext, useState, useEffect, PropsWithChildren } from 'react';


interface ThemeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}


export const ThemeContext = React.createContext<ThemeContextType>({
    isDarkMode: false,
    toggleDarkMode: () => {}
});

export const ThemeProvider = ({ children } : PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem('theme');
    if (
      darkModePreference === 'dark' ||
      (!darkModePreference && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
