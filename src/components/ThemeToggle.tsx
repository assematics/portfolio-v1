'use client'

import { useTheme } from '@/lib/theme-context'

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-white/90 border border-gray-200 hover:bg-white transition-colors shadow-sm"
        aria-label="Toggle theme"
        disabled
      >
        <span className="text-xl">🌙</span>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-white/90 dark:bg-slate-800/90 border border-gray-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-sm"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <span className="text-xl">🌙</span>
      ) : (
        <span className="text-xl">☀️</span>
      )}
    </button>
  )
}