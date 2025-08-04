'use client'

import { useState } from 'react'
import ModernMinimalist from './variants/ModernMinimalist'
import ModernTerminal from './variants/ModernTerminal'
import ModernCorporate from './variants/ModernCorporate'
import ThemeToggle from './ThemeToggle'

type Variant = 'minimalist' | 'terminal' | 'corporate'

export default function VariantSwitcher() {
  const [currentVariant, setCurrentVariant] = useState<Variant>('minimalist')

  const variants = [
    { key: 'minimalist', label: 'Modern Minimalist', description: '25 sleek designs!' },
    { key: 'terminal', label: 'Modern Terminal', description: '25 tech interfaces!' },
    { key: 'corporate', label: 'Modern Corporate', description: '25 business styles!' }
  ] as const

  const renderVariant = () => {
    switch (currentVariant) {
      case 'minimalist':
        return <ModernMinimalist />
      case 'terminal':
        return <ModernTerminal />
      case 'corporate':
        return <ModernCorporate />
      default:
        return <ModernMinimalist />
    }
  }

  return (
    <div className="relative">
      {/* Floating Variant Switcher */}
      <div className="fixed top-4 right-4 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-lg p-4 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium text-gray-700 dark:text-slate-200">Design Style:</div>
          <ThemeToggle />
        </div>
        <div className="space-y-2">
          {variants.map((variant) => (
            <button
              key={variant.key}
              onClick={() => setCurrentVariant(variant.key as Variant)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                currentVariant === variant.key
                  ? 'bg-blue-600 dark:bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600'
              }`}
            >
              <div className="font-medium">{variant.label}</div>
              <div className="text-xs opacity-75">{variant.description}</div>
            </button>
          ))}
        </div>
        
                       <div className="mt-4 pt-3 border-t border-gray-200 dark:border-slate-600">
                 <div className="text-xs text-gray-500 dark:text-slate-400">
                   🚀 75 modern combinations + photo!
                 </div>
               </div>
      </div>

      {/* Render Current Variant */}
      {renderVariant()}
    </div>
  )
}