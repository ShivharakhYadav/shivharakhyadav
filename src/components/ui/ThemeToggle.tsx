'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

// browser bar colours, the --bg of each theme
const barColor: Record<Theme, string> = { light: '#FBF6EE', dark: '#1B2124' };

/** The theme on screen: the visitor's pick (data-theme, set before paint in layout.tsx) or else their system setting. */
function currentTheme(): Theme {
  const picked = document.documentElement.dataset.theme;
  if (picked === 'light' || picked === 'dark') return picked;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function setBarColor(theme: Theme) {
  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((m) => m.setAttribute('content', barColor[theme]));
}

/**
 * Sun/moon button in the navbar. The icon is picked by CSS (.when-light /
 * .when-dark in globals.css), so it's right on the first paint; the label
 * and pressed state follow once mounted.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const sync = () => {
      const t = currentTheme();
      setTheme(t);
      setBarColor(t);
    };
    sync();
    // follow system changes while the visitor hasn't picked a theme
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const toggle = () => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    // switch every colour at once instead of letting transitions fade them one by one
    root.classList.add('theme-switching');
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
    setTheme(next);
    setBarColor(next);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => root.classList.remove('theme-switching')),
    );
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
      }
      title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted transition hover:bg-linen hover:text-ink"
    >
      {/* moon on light (go dark), sun on dark (go light) */}
      <svg
        viewBox="0 0 24 24"
        className="when-light h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="when-dark h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
