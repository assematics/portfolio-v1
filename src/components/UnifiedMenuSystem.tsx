'use client'

import { useState, ReactNode } from 'react'
import ThemeToggle from './ThemeToggle'

interface UnifiedMenuProps {
  children: ReactNode
}

export function UnifiedMenu({ children }: UnifiedMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Unified Menu Button - Positioned near navigation */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-6 right-6 sm:top-8 sm:right-8 z-[60] p-2 sm:p-3 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group text-sm"
          aria-label="Open portfolio settings"
        >
          <div className="flex items-center space-x-2">
            <div className="text-xl">🎨</div>
            <div className="text-sm font-medium text-gray-700 dark:text-slate-200">STYLES</div>
          </div>
        </button>
      )}

      {/* Full-Screen Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm">
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 w-full sm:w-96 h-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-l border-gray-200 dark:border-slate-700 shadow-2xl overflow-y-auto">
            {/* Header with Close Button */}
            <div className="sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-slate-100 flex items-center space-x-2">
                    <span>🎨</span>
                    <span>Styles</span>
                  </h2>
                </div>
                
                <div className="flex items-center space-x-3">
                  <ThemeToggle />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors group"
                    aria-label="Close menu"
                  >
                    <div className="w-5 h-5 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-0.5 bg-gray-600 dark:bg-slate-300 transform rotate-45 transition-all group-hover:scale-110"></div>
                        <div className="w-4 h-0.5 bg-gray-600 dark:bg-slate-300 transform -rotate-45 transition-all group-hover:scale-110"></div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Menu Content */}
            <div className="p-6">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

interface MenuSectionProps {
  title: string
  icon: string
  children: ReactNode
  defaultExpanded?: boolean
}

export function MenuSection({ title, icon, children, defaultExpanded = false }: MenuSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className="rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors rounded-lg"
      >
        <div className="flex items-center space-x-2">
          <span className="text-lg">{icon}</span>
          <span className="font-medium text-gray-800 dark:text-slate-200">{title}</span>
        </div>
        
        <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
          <svg className="w-4 h-4 text-gray-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {isExpanded && (
        <div className="p-3">
          {children}
        </div>
      )}
    </div>
  )
}

interface OptionButtonProps {
  children: ReactNode
  isSelected: boolean
  onClick: () => void
  description?: string
}

export function OptionButton({ children, isSelected, onClick, description }: OptionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
        isSelected
          ? 'bg-blue-500 text-white'
          : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600'
      }`}
    >
      <div className="font-medium">{children}</div>
      {description && (
        <div className={`text-xs mt-1 ${isSelected ? 'text-blue-100' : 'text-gray-500 dark:text-slate-400'}`}>
          {description}
        </div>
      )}
    </button>
  )
}