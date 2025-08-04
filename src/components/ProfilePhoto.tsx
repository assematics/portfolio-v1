'use client'

interface ProfilePhotoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export default function ProfilePhoto({ size = 'md', className = '' }: ProfilePhotoProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24', 
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  }

    return (
    <div className={`relative ${sizeClasses[size]} ${className} group cursor-pointer`}>
      {/* Color version (visible on hover) */}
      <img
        src="/profile.jpg"
        alt="Assem Sobhy - Developer & Security Engineer"
        className={`${sizeClasses[size]} rounded-full object-cover shadow-lg transition-all duration-1000 ease-out opacity-0 group-hover:opacity-100 absolute inset-0 z-10 group-hover:scale-105 group-hover:shadow-2xl`}
      />

      {/* Black and white version (default) */}
      <img
        src="/profile.jpg"
        alt="Assem Sobhy - Developer & Security Engineer"
        className={`${sizeClasses[size]} rounded-full object-cover shadow-lg transition-all duration-1000 ease-out filter grayscale group-hover:scale-102 group-hover:shadow-sm`}
      />

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-60 transition-all duration-1000 ease-out blur-lg scale-110"></div>
    </div>
  )
}