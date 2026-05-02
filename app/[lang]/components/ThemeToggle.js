'use client';

import { memo } from 'react';
import { useTheme } from './providers/ThemeProvider';

function ThemeToggle({ dict }) {
  const { theme, mounted, toggleTheme } = useTheme();

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

export default memo(ThemeToggle);
