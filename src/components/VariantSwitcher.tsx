'use client'

import { useState } from 'react'
import ModernMinimalist from './variants/ModernMinimalist'
import ModernTerminal from './variants/ModernTerminal'
import ModernCorporate from './variants/ModernCorporate'
import InspiredStyles from './variants/InspiredStyles'
import ThemeToggle from './ThemeToggle'
import { MobileMenu, CollapsibleMenu } from './MobileMenuSystem'

type Variant = 'minimalist' | 'terminal' | 'corporate' | 'inspired'

export default function VariantSwitcher() {
  const [currentVariant, setCurrentVariant] = useState<Variant>('inspired')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const variants = [
    { key: 'inspired', label: '🎨 Inspired Designs', description: '5 screenshot-inspired styles!' },
    { key: 'minimalist', label: 'Modern Minimalist', description: '25 sleek designs!' },
    { key: 'terminal', label: 'Modern Terminal', description: '25 tech interfaces!' },
    { key: 'corporate', label: 'Modern Corporate', description: '25 business styles!' }
  ] as const

  const renderVariant = () => {
    switch (currentVariant) {
      case 'inspired':
        return <InspiredStyles />
      case 'minimalist':
        return <ModernMinimalist />
      case 'terminal':
        return <ModernTerminal />
      case 'corporate':
        return <ModernCorporate />
      default:
        return <InspiredStyles />
    }
  }

  return (
    <div className="relative">
      {/* Mobile-Friendly Menu System */}
      <div className="md:hidden">
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-slate-200">Theme:</span>
            <ThemeToggle />
          </div>

          <CollapsibleMenu title="Portfolio Collections" icon="🎨" defaultOpen={true}>
            <div className="space-y-2">
              {variants.map((variant) => (
                <button
                  key={variant.key}
                  onClick={() => {
                    setCurrentVariant(variant.key as Variant)
                    setIsMobileMenuOpen(false) // Close mobile menu after selection
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-300 ${
                    currentVariant === variant.key
                      ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md scale-105'
                      : 'bg-gray-100/80 dark:bg-slate-700/80 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600 hover:scale-102'
                  }`}
                >
                  <div className="font-medium">{variant.label}</div>
                  <div className="text-xs opacity-75">{variant.description}</div>
                </button>
              ))}
            </div>
          </CollapsibleMenu>

          <div className="mt-6 p-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-lg border border-blue-200/30 dark:border-slate-600/30">
            <div className="text-xs text-gray-600 dark:text-slate-400 space-y-1">
              <div>🚀 <strong>115+ total designs</strong> + your photo!</div>
              <div>👁️ <strong>Easy-on-eyes</strong> palettes!</div>
              <div>🎨 <strong>Catppuccin</strong> + smooth transitions!</div>
              <div>📱 <strong>Mobile-optimized</strong> experience!</div>
            </div>
          </div>
        </MobileMenu>
      </div>

      {/* Desktop Menu (Hidden on Mobile) */}
      <div className="hidden md:block fixed top-4 right-4 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-lg p-4 shadow-lg">
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
            🚀 115+ total designs + your photo!<br/>
            👁️ Easy-on-the-eyes palettes!<br/>
            🎨 Catppuccin + smooth transitions!
          </div>
        </div>
      </div>

      {/* Render Current Variant */}
      {renderVariant()}
    </div>
  )
}