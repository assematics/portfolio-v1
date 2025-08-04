'use client'

import { useState, lazy, Suspense } from 'react'
import SimpleDropdown from './SimpleDropdown'

// Lazy load components for better performance
const ModernMinimalist = lazy(() => import('./variants/ModernMinimalist'))
const ModernTerminal = lazy(() => import('./variants/ModernTerminal'))
const ModernCorporate = lazy(() => import('./variants/ModernCorporate'))
const InspiredStyles = lazy(() => import('./variants/InspiredStyles'))

type Variant = 'minimalist' | 'terminal' | 'corporate' | 'inspired'

export default function VariantSwitcher() {
  const [currentVariant, setCurrentVariant] = useState<Variant>('inspired')

  const variants = [
    { value: 'inspired', label: 'Inspired' },
    { value: 'minimalist', label: 'Minimalist' },
    { value: 'terminal', label: 'Terminal' },
    { value: 'corporate', label: 'Corporate' }
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
      {/* Simple Dropdown */}
      <SimpleDropdown
        value={currentVariant}
        onChange={(value) => setCurrentVariant(value as Variant)}
        options={variants}
      />

      {/* Render Current Variant with Loading */}
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <div className="text-gray-600 dark:text-gray-300">Loading design...</div>
          </div>
        </div>
      }>
        {renderVariant()}
      </Suspense>
    </div>
  )
}