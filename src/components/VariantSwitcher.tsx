'use client'

import { useState, lazy, Suspense } from 'react'
import SimpleMenuButton from './SimpleMenuButton'

// Lazy load components for better performance
const ModernMinimalist = lazy(() => import('./variants/ModernMinimalist'))
const ModernTerminal = lazy(() => import('./variants/ModernTerminal'))
const ModernCorporate = lazy(() => import('./variants/ModernCorporate'))
const InspiredStyles = lazy(() => import('./variants/InspiredStyles'))

type Variant = 'minimalist' | 'terminal' | 'corporate' | 'inspired'

export default function VariantSwitcher() {
  const [currentVariant, setCurrentVariant] = useState<Variant>('inspired')

  const variants: Variant[] = ['inspired', 'minimalist', 'terminal', 'corporate']

  const cycleVariant = () => {
    const currentIndex = variants.indexOf(currentVariant)
    const nextIndex = (currentIndex + 1) % variants.length
    setCurrentVariant(variants[nextIndex])
  }

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
      {/* Simple Menu Button */}
      <SimpleMenuButton onClick={cycleVariant} />

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