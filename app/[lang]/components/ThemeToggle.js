'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle({ dict }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'dark';
    return document.documentElement.dataset.theme || localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={mounted ? (theme === 'dark' ? dict.nav.themeToLight : dict.nav.themeToDark) : dict.nav.themeToLight}
    >
      <span aria-hidden="true">{mounted ? (theme === 'dark' ? '☀' : '☾') : '☀'}</span>
      <span>{mounted ? (theme === 'dark' ? dict.nav.themeLight : dict.nav.themeDark) : dict.nav.themeLight}</span>
    </button>
  );
}
