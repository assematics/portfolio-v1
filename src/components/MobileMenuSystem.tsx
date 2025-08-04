'use client'

import { useState, ReactNode } from 'react'
// Using fallback icons instead of heroicons to avoid dependency
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
)

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
  </svg>
)

interface CollapsibleMenuProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
  icon?: string
}

export function CollapsibleMenu({ title, children, defaultOpen = false, icon }: CollapsibleMenuProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-600 rounded-lg transition-all duration-300 hover:bg-white/20 dark:hover:bg-slate-700/50"
      >
        <div className="flex items-center space-x-2">
          {icon && <span className="text-lg">{icon}</span>}
          <span className="font-medium text-sm text-gray-700 dark:text-slate-200">{title}</span>
        </div>
        {isOpen ? (
          <ChevronUpIcon className="w-4 h-4 text-gray-500 dark:text-slate-400" />
        ) : (
          <ChevronDownIcon className="w-4 h-4 text-gray-500 dark:text-slate-400" />
        )}
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="pt-2">
          {children}
        </div>
      </div>
    </div>
  )
}

interface MobileMenuProps {
  children: ReactNode
  isOpen: boolean
  onToggle: () => void
}

export function MobileMenu({ children, isOpen, onToggle }: MobileMenuProps) {
  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={onToggle}
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
        aria-label="Toggle menu"
      >
        <div className="w-5 h-5 flex flex-col justify-center items-center">
          <span className={`w-full h-0.5 bg-gray-700 dark:bg-slate-200 transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-0.5' : ''
          }`}></span>
          <span className={`w-full h-0.5 bg-gray-700 dark:bg-slate-200 transition-all duration-300 mt-1 ${
            isOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-full h-0.5 bg-gray-700 dark:bg-slate-200 transition-all duration-300 mt-1 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onToggle}
        />
      )}

      {/* Mobile Menu Panel */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-l border-gray-200 dark:border-slate-700 shadow-2xl z-40 transition-transform duration-300 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 h-full overflow-y-auto">
          <div className="mb-6 pt-12">
            <h2 className="text-lg font-bold text-gray-800 dark:text-slate-100">Portfolio Settings</h2>
            <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">Customize your experience</p>
          </div>
          
          {children}
        </div>
      </div>

      {/* Desktop Menu (Hidden on Mobile) */}
      <div className="hidden md:block fixed top-20 left-4 z-40 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-lg p-4 shadow-lg max-w-xs">
        {children}
      </div>
    </>
  )
}

// Install heroicons if needed
export const HeroIconsFallback = {
  ChevronDown: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  ),
  ChevronUp: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  )
}