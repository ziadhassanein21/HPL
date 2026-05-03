'use client';

import { createContext, useContext, useState, useEffect, useCallback, memo } from 'react';

const ThemeContext = createContext(undefined);

function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'dark';
    return document.documentElement.dataset.theme || localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const setThemeValue = useCallback((newTheme) => {
    const root = document.documentElement;
    root.dataset.theme = newTheme;
    root.style.colorScheme = newTheme;
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setThemeValue(nextTheme);
  }, [theme, setThemeValue]);

  const value = {
    theme,
    mounted,
    toggleTheme,
    setTheme: setThemeValue,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default memo(ThemeProvider);
