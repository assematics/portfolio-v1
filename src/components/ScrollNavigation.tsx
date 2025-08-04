'use client'

import { useEffect, useState, ReactNode } from 'react'

interface ScrollNavigationProps {
  children: ReactNode
  className?: string
  hideThreshold?: number
}

export default function ScrollNavigation({ 
  children, 
  className = '',
  hideThreshold = 100 
}: ScrollNavigationProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY) < hideThreshold) {
        ticking = false
        return
      }

      setIsVisible(scrollY < lastScrollY || scrollY < hideThreshold)
      setHasScrolled(scrollY > hideThreshold)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    const handleScroll = () => requestTick()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hideThreshold])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        hasScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      } ${className}`}
    >
      {children}
    </nav>
  )
}