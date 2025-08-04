'use client'

import { useState } from 'react'
import ModernMinimalist from './variants/ModernMinimalist'
import ModernTerminal from './variants/ModernTerminal'
import ModernCorporate from './variants/ModernCorporate'
import InspiredStyles from './variants/InspiredStyles'
import { UnifiedMenu, MenuSection, OptionButton } from './UnifiedMenuSystem'

type Variant = 'minimalist' | 'terminal' | 'corporate' | 'inspired'

export default function VariantSwitcher() {
  const [currentVariant, setCurrentVariant] = useState<Variant>('inspired')

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
      {/* Unified Menu System */}
      <UnifiedMenu>
        <MenuSection title="Portfolio Collections" icon="🎨" defaultExpanded={true}>
          <div className="space-y-3">
            {variants.map((variant) => (
              <OptionButton
                key={variant.key}
                isSelected={currentVariant === variant.key}
                onClick={() => setCurrentVariant(variant.key as Variant)}
                description={variant.description}
              >
                {variant.label}
              </OptionButton>
            ))}
          </div>
        </MenuSection>

        <MenuSection title="Quick Preview" icon="👁️">
          <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-slate-400 mb-2">Currently viewing:</div>
            <div className="font-bold text-gray-800 dark:text-slate-200">
              {variants.find(v => v.key === currentVariant)?.label}
            </div>
            <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">
              {variants.find(v => v.key === currentVariant)?.description}
            </div>
          </div>
        </MenuSection>

        <MenuSection title="About This Portfolio" icon="ℹ️">
          <div className="space-y-3 text-sm text-gray-600 dark:text-slate-400">
            <div className="flex items-center justify-between">
              <span>Total Designs:</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">115+</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Interactive Features:</span>
              <span className="font-bold text-green-600 dark:text-green-400">✓</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Mobile Optimized:</span>
              <span className="font-bold text-green-600 dark:text-green-400">✓</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Easy on Eyes:</span>
              <span className="font-bold text-green-600 dark:text-green-400">✓</span>
            </div>
          </div>
        </MenuSection>
      </UnifiedMenu>

      {/* Render Current Variant */}
      {renderVariant()}
    </div>
  )
}