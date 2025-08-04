'use client'

import { ReactNode } from 'react'

interface EnhancedCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function EnhancedCard({ children, className = '', glowColor = 'blue' }: EnhancedCardProps) {
  return (
    <div className={`
      relative group
      bg-white/5 backdrop-blur-sm 
      border border-white/10 
      rounded-xl 
      p-6 
      transition-all duration-500 ease-out
      hover:bg-white/10 
      hover:border-white/20 
      hover:shadow-2xl 
      hover:scale-[1.02]
      hover:-translate-y-1
      ${className}
    `}>
      {/* Glow effect inspired by demo sites */}
      <div className={`
        absolute -inset-0.5 
        bg-gradient-to-r from-${glowColor}-500/20 to-purple-500/20 
        rounded-xl 
        opacity-0 
        group-hover:opacity-100 
        transition-opacity duration-500 
        blur-sm
        -z-10
      `}></div>
      
      {children}
    </div>
  )
}

interface StatsCounterProps {
  value: string
  label: string
  delay?: string
  color?: string
}

export function StatsCounter({ value, label, delay = 'delay-0', color = 'text-emerald-300' }: StatsCounterProps) {
  return (
    <div className={`text-center smooth-fade-in ${delay} group`}>
      <div className={`
        text-4xl md:text-5xl font-bold mb-2 
        ${color}
        transition-all duration-300
        group-hover:scale-110
        group-hover:drop-shadow-lg
      `}>
        {value}
      </div>
      <div className="text-gray-400 text-sm font-medium tracking-wide">
        {label}
      </div>
    </div>
  )
}

interface FloatingElementProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}

export function FloatingElement({ 
  children, 
  direction = 'up', 
  delay = 0, 
  className = '' 
}: FloatingElementProps) {
  const directionClasses = {
    up: 'animate-float-up',
    down: 'animate-float-down', 
    left: 'animate-float-left',
    right: 'animate-float-right'
  }

  return (
    <div 
      className={`${directionClasses[direction]} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

interface GradientTextProps {
  children: ReactNode
  gradient?: string
  className?: string
}

export function GradientText({ 
  children, 
  gradient = 'from-blue-400 via-purple-400 to-pink-400',
  className = ''
}: GradientTextProps) {
  return (
    <span className={`
      bg-gradient-to-r ${gradient}
      bg-clip-text text-transparent
      font-bold
      ${className}
    `}>
      {children}
    </span>
  )
}

// Add floating animation classes to globals.css
export const FloatingAnimations = `
@keyframes float-up {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
}

@keyframes float-down {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(10px) rotate(-1deg); }
}

@keyframes float-left {
  0%, 100% { transform: translateX(0px) rotate(0deg); }
  50% { transform: translateX(-10px) rotate(1deg); }
}

@keyframes float-right {
  0%, 100% { transform: translateX(0px) rotate(0deg); }
  50% { transform: translateX(10px) rotate(-1deg); }
}

.animate-float-up {
  animation: float-up 6s ease-in-out infinite;
}

.animate-float-down {
  animation: float-down 8s ease-in-out infinite;
}

.animate-float-left {
  animation: float-left 7s ease-in-out infinite;
}

.animate-float-right {
  animation: float-right 9s ease-in-out infinite;
}
`