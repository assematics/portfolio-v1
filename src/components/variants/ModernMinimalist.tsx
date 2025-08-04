'use client'

import { useState } from 'react'
import ProfilePhoto from '../ProfilePhoto'

type LayoutStyle = 'clean' | 'glass' | 'cards' | 'split' | 'grid'
type ColorScheme = 'blue' | 'purple' | 'green' | 'orange' | 'dark'

const layoutStyles = {
  clean: 'Clean Modern',
  glass: 'Glass Morphism', 
  cards: 'Floating Cards',
  split: 'Split Layout',
  grid: 'Modern Grid'
}

const colorSchemes = {
  blue: {
    name: 'Ocean Blue',
    bg: 'from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900',
    accent: 'from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400',
    button: 'from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 hover:from-blue-700 hover:to-indigo-700',
    card: 'bg-white/80 dark:bg-slate-800/80 border-blue-200/30 dark:border-blue-700/30',
    text: 'text-blue-600 dark:text-blue-400'
  },
  purple: {
    name: 'Royal Purple',
    bg: 'from-purple-50 via-indigo-50 to-violet-50 dark:from-purple-950 dark:via-indigo-950 dark:to-violet-950',
    accent: 'from-purple-500 to-violet-500 dark:from-purple-400 dark:to-violet-400',
    button: 'from-purple-600 to-violet-600 dark:from-purple-500 dark:to-violet-500 hover:from-purple-700 hover:to-violet-700',
    card: 'bg-white/80 dark:bg-slate-800/80 border-purple-200/30 dark:border-purple-700/30',
    text: 'text-purple-600 dark:text-purple-400'
  },
  green: {
    name: 'Nature Green',
    bg: 'from-emerald-50 via-teal-50 to-green-50 dark:from-emerald-950 dark:via-teal-950 dark:to-green-950',
    accent: 'from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400',
    button: 'from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 hover:from-emerald-700 hover:to-teal-700',
    card: 'bg-white/80 dark:bg-slate-800/80 border-emerald-200/30 dark:border-emerald-700/30',
    text: 'text-emerald-600 dark:text-emerald-400'
  },
  orange: {
    name: 'Sunset Orange',
    bg: 'from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950 dark:via-amber-950 dark:to-yellow-950',
    accent: 'from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-400',
    button: 'from-orange-600 to-amber-600 dark:from-orange-500 dark:to-amber-500 hover:from-orange-700 hover:to-amber-700',
    card: 'bg-white/80 dark:bg-slate-800/80 border-orange-200/30 dark:border-orange-700/30',
    text: 'text-orange-600 dark:text-orange-400'
  },
  dark: {
    name: 'Modern Dark',
    bg: 'from-gray-50 via-slate-50 to-zinc-50 dark:from-gray-950 dark:via-slate-950 dark:to-zinc-950',
    accent: 'from-gray-600 to-slate-600 dark:from-gray-400 dark:to-slate-400',
    button: 'from-gray-700 to-slate-700 dark:from-gray-600 dark:to-slate-600 hover:from-gray-800 hover:to-slate-800',
    card: 'bg-white/90 dark:bg-slate-800/90 border-gray-200/30 dark:border-slate-700/30',
    text: 'text-gray-600 dark:text-gray-400'
  }
}

export default function ModernMinimalist() {
  const [currentLayout, setCurrentLayout] = useState<LayoutStyle>('clean')
  const [currentColor, setCurrentColor] = useState<ColorScheme>('blue')
  
  const currentScheme = colorSchemes[currentColor]

  const renderLayout = () => {
    switch (currentLayout) {
      case 'clean':
        return <CleanLayout scheme={currentScheme} />
      case 'glass':
        return <GlassLayout scheme={currentScheme} />
      case 'cards':
        return <CardsLayout scheme={currentScheme} />
      case 'split':
        return <SplitLayout scheme={currentScheme} />
      case 'grid':
        return <GridLayout scheme={currentScheme} />
      default:
        return <CleanLayout scheme={currentScheme} />
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Enhanced Control Panel */}
      <div className="fixed top-20 left-4 z-40 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-lg p-4 shadow-lg max-w-xs">
        <div className="text-sm font-semibold text-gray-700 dark:text-slate-200 mb-3">Modern Minimalist</div>
        
        {/* Layout Selector */}
        <div className="mb-4">
          <div className="text-xs font-medium text-gray-600 dark:text-slate-300 mb-2">Layout Style:</div>
          <div className="grid grid-cols-1 gap-1">
            {Object.entries(layoutStyles).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCurrentLayout(key as LayoutStyle)}
                className={`text-left px-2 py-1 rounded text-xs transition-colors ${
                  currentLayout === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selector */}
        <div>
          <div className="text-xs font-medium text-gray-600 dark:text-slate-300 mb-2">Color Theme:</div>
          <div className="grid grid-cols-1 gap-1">
            {Object.entries(colorSchemes).map(([key, scheme]) => (
              <button
                key={key}
                onClick={() => setCurrentColor(key as ColorScheme)}
                className={`text-left px-2 py-1 rounded text-xs transition-colors ${
                  currentColor === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                }`}
              >
                {scheme.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-slate-600">
          <div className="text-xs text-gray-500 dark:text-slate-400">
            🎨 25 modern combinations!
          </div>
        </div>
      </div>

      {renderLayout()}
    </div>
  )
}

// Clean Modern Layout
function CleanLayout({ scheme }: { scheme: any }) {
  return (
    <main className={`min-h-screen bg-gradient-to-br ${scheme.bg} transition-all duration-1000`}>
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-12 smooth-fade-in">
            <ProfilePhoto size="xl" className="mx-auto" />
          </div>
          
          <h1 className="text-7xl font-light text-slate-800 dark:text-slate-100 mb-4 smooth-slide-top delay-300">
            Assem Sobhy
          </h1>
          <div className={`w-32 h-px bg-gradient-to-r ${scheme.accent} mx-auto mb-8 smooth-zoom-in delay-500`}></div>
          <p className="text-2xl text-slate-600 dark:text-slate-300 mb-16 font-light smooth-slide-bottom delay-700">
            Developer & Security Engineer
          </p>
          
          <div className="space-y-12 smooth-fade-in delay-900">
            <div className="flex justify-center space-x-20 text-slate-500 dark:text-slate-400">
              <span className={`hover:${scheme.text} cursor-pointer transition-colors text-lg font-medium`}>Web Development</span>
              <span className={`hover:${scheme.text} cursor-pointer transition-colors text-lg font-medium`}>Linux Admin</span>
              <span className={`hover:${scheme.text} cursor-pointer transition-colors text-lg font-medium`}>Cybersecurity</span>
            </div>
            
            <button className={`px-12 py-4 bg-gradient-to-r ${scheme.button} text-white rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

// Glass Morphism Layout
function GlassLayout({ scheme }: { scheme: any }) {
  return (
    <main className={`min-h-screen bg-gradient-to-br ${scheme.bg} transition-all duration-1000`}>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Glass Header */}
          <div className={`${scheme.card} backdrop-blur-xl rounded-3xl p-12 shadow-2xl mb-12 border transform hover:scale-105 transition-all duration-500 smooth-zoom-in`}>
            <div className="flex items-center justify-center mb-8">
              <ProfilePhoto size="xl" />
            </div>
            <div className="text-center">
              <h1 className="text-6xl font-light text-slate-800 dark:text-slate-100 mb-6">Assem Sobhy</h1>
              <div className={`w-24 h-px bg-gradient-to-r ${scheme.accent} mx-auto mb-6`}></div>
              <p className="text-2xl text-slate-600 dark:text-slate-300">Developer & Security Engineer</p>
            </div>
          </div>

          {/* Glass Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`${scheme.card} backdrop-blur-xl rounded-2xl p-8 shadow-xl border transform hover:-translate-y-6 hover:rotate-2 transition-all duration-500 smooth-slide-left delay-300`}>
              <div className={`w-16 h-16 bg-gradient-to-br ${scheme.accent} rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-125 hover:rotate-12 transition-all duration-300`}>
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className={`text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 ${scheme.text}`}>Web Development</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Modern applications with React, Next.js, and cutting-edge technologies</p>
            </div>

            <div className={`${scheme.card} backdrop-blur-xl rounded-2xl p-8 shadow-xl border transform hover:-translate-y-6 hover:-rotate-2 transition-all duration-500 smooth-slide-bottom delay-500`}>
              <div className={`w-16 h-16 bg-gradient-to-br ${scheme.accent} rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-125 hover:-rotate-12 transition-all duration-300`}>
                <span className="text-white text-2xl">🖥️</span>
              </div>
              <h3 className={`text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 ${scheme.text}`}>Linux Administration</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Server management, automation, and infrastructure optimization</p>
            </div>

            <div className={`${scheme.card} backdrop-blur-xl rounded-2xl p-8 shadow-xl border transform hover:-translate-y-6 hover:rotate-2 transition-all duration-500 smooth-slide-right delay-700`}>
              <div className={`w-16 h-16 bg-gradient-to-br ${scheme.accent} rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-125 hover:rotate-12 transition-all duration-300`}>
                <span className="text-white text-2xl">🔐</span>
              </div>
              <h3 className={`text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 ${scheme.text}`}>Cybersecurity</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Security auditing, penetration testing, and vulnerability assessment</p>
            </div>
          </div>

          {/* Glass Action Card */}
          <div className={`${scheme.card} backdrop-blur-xl rounded-3xl p-8 shadow-2xl text-center border transform hover:scale-105 transition-all duration-500 smooth-fade-in delay-900`}>
            <button className={`px-10 py-4 bg-gradient-to-r ${scheme.button} text-white rounded-xl font-medium hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1`}>
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

// Floating Cards Layout
function CardsLayout({ scheme }: { scheme: any }) {
  return (
    <main className={`min-h-screen bg-gradient-to-br ${scheme.bg} transition-all duration-1000 overflow-hidden`}>
      <div className="container mx-auto px-4 py-20 relative">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-20 left-10 w-40 h-40 bg-gradient-to-br ${scheme.accent} opacity-10 rounded-full blur-3xl animate-pulse`}></div>
          <div className={`absolute top-60 right-20 w-32 h-32 bg-gradient-to-br ${scheme.accent} opacity-10 rounded-full blur-2xl animate-pulse delay-1000`}></div>
          <div className={`absolute bottom-40 left-1/3 w-48 h-48 bg-gradient-to-br ${scheme.accent} opacity-10 rounded-full blur-3xl animate-pulse delay-2000`}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Floating Profile Card */}
          <div className={`${scheme.card} backdrop-blur-xl rounded-3xl p-12 shadow-2xl mb-16 border transform hover:scale-105 hover:rotate-1 transition-all duration-500 smooth-zoom-in`}>
            <div className="flex items-center justify-center mb-8">
              <ProfilePhoto size="xl" />
            </div>
            <div className="text-center">
              <h1 className="text-6xl font-bold text-slate-800 dark:text-slate-100 mb-6">Assem Sobhy</h1>
              <div className={`w-20 h-px bg-gradient-to-r ${scheme.accent} mx-auto mb-6`}></div>
              <p className="text-2xl text-slate-600 dark:text-slate-300">Developer & Security Engineer</p>
            </div>
          </div>

          {/* Floating Skills Cards */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className={`${scheme.card} backdrop-blur-xl rounded-3xl p-10 shadow-2xl border transform hover:-translate-y-8 hover:rotate-3 transition-all duration-700 smooth-slide-left delay-300`}>
              <div className={`w-20 h-20 bg-gradient-to-br ${scheme.accent} rounded-3xl flex items-center justify-center mx-auto mb-8 transform hover:scale-125 hover:rotate-12 transition-all duration-300`}>
                <span className="text-white text-3xl">⚡</span>
              </div>
              <h3 className={`text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 ${scheme.text}`}>Web Development</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">Building scalable, modern web applications with cutting-edge technologies and best practices</p>
            </div>

            <div className={`${scheme.card} backdrop-blur-xl rounded-3xl p-10 shadow-2xl border transform hover:-translate-y-8 hover:-rotate-3 transition-all duration-700 smooth-slide-bottom delay-500`}>
              <div className={`w-20 h-20 bg-gradient-to-br ${scheme.accent} rounded-3xl flex items-center justify-center mx-auto mb-8 transform hover:scale-125 hover:-rotate-12 transition-all duration-300`}>
                <span className="text-white text-3xl">🖥️</span>
              </div>
              <h3 className={`text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 ${scheme.text}`}>Linux Administration</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">Expert server management, automation, and infrastructure optimization for enterprise environments</p>
            </div>

            <div className={`${scheme.card} backdrop-blur-xl rounded-3xl p-10 shadow-2xl border transform hover:-translate-y-8 hover:rotate-3 transition-all duration-700 smooth-slide-right delay-700`}>
              <div className={`w-20 h-20 bg-gradient-to-br ${scheme.accent} rounded-3xl flex items-center justify-center mx-auto mb-8 transform hover:scale-125 hover:rotate-12 transition-all duration-300`}>
                <span className="text-white text-3xl">🔐</span>
              </div>
              <h3 className={`text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 ${scheme.text}`}>Cybersecurity</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">Comprehensive security auditing, penetration testing, and vulnerability assessment services</p>
            </div>
          </div>

          {/* Floating Action Card */}
          <div className={`${scheme.card} backdrop-blur-xl rounded-3xl p-12 shadow-2xl text-center border transform hover:scale-105 hover:-rotate-1 transition-all duration-500 smooth-fade-in delay-900`}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">Ready to collaborate?</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg">Let's build something amazing together</p>
            </div>
            <button className={`px-12 py-5 bg-gradient-to-r ${scheme.button} text-white rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2`}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

// Split Layout
function SplitLayout({ scheme }: { scheme: any }) {
  return (
    <main className="min-h-screen flex transition-all duration-1000">
      {/* Left Side - Profile & Info */}
      <div className={`flex-1 bg-gradient-to-br ${scheme.bg} flex items-center justify-center relative overflow-hidden smooth-slide-left`}>
        <div className="absolute inset-0 opacity-20">
          <div className={`absolute top-20 left-20 w-32 h-32 bg-gradient-to-br ${scheme.accent} rounded-full blur-2xl animate-pulse`}></div>
          <div className={`absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br ${scheme.accent} rounded-full blur-3xl animate-pulse delay-1000`}></div>
        </div>
        
        <div className="text-center px-8 relative z-10">
          <ProfilePhoto size="xl" className="mx-auto mb-12" />
          <h1 className="text-7xl font-light text-slate-800 dark:text-slate-100 mb-8">Assem</h1>
          <h2 className="text-4xl font-light text-slate-800 dark:text-slate-100 mb-8">Sobhy</h2>
          <div className={`w-20 h-px bg-gradient-to-r ${scheme.accent} mx-auto mb-12`}></div>
          <p className="text-2xl text-slate-600 dark:text-slate-300 mb-16">Developer</p>
          <div className="space-y-6 text-slate-500 dark:text-slate-400 text-lg">
            <p className={`hover:${scheme.text} cursor-pointer transition-colors transform hover:scale-105`}>Web Development</p>
            <p className={`hover:${scheme.text} cursor-pointer transition-colors transform hover:scale-105`}>Linux Administration</p>
          </div>
        </div>
      </div>

      {/* Right Side - Services */}
      <div className="flex-1 bg-slate-900 dark:bg-black flex items-center justify-center relative overflow-hidden smooth-slide-right">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 left-20 w-28 h-28 bg-white rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-32 right-32 w-36 h-36 bg-white rounded-full blur-3xl animate-pulse delay-1500"></div>
        </div>
        
        <div className="text-center px-8 relative z-10">
          <h2 className="text-5xl font-light text-white mb-12">Security Engineer</h2>
          <div className={`w-20 h-px bg-gradient-to-r ${scheme.accent} mx-auto mb-12`}></div>
          <p className="text-xl text-slate-300 mb-16">Protecting digital assets</p>
          <div className="space-y-6 text-slate-400 text-lg">
            <p className="hover:text-white cursor-pointer transition-colors transform hover:scale-105">Cybersecurity</p>
            <p className="hover:text-white cursor-pointer transition-colors transform hover:scale-105">Penetration Testing</p>
          </div>
          <button className={`mt-12 px-8 py-4 bg-gradient-to-r ${scheme.button} text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
            Contact Me
          </button>
        </div>
      </div>
    </main>
  )
}

// Modern Grid Layout
function GridLayout({ scheme }: { scheme: any }) {
  return (
    <main className={`min-h-screen bg-gradient-to-br ${scheme.bg} p-8 transition-all duration-1000`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 grid-rows-8 gap-6 h-screen">
          {/* Header with Profile */}
          <div className={`col-span-12 row-span-2 ${scheme.card} backdrop-blur-xl rounded-3xl p-8 shadow-xl border flex items-center justify-between smooth-fade-in`}>
            <div className="flex items-center">
              <ProfilePhoto size="lg" className="mr-8" />
              <div>
                <h1 className="text-5xl font-light text-slate-800 dark:text-slate-100">Assem Sobhy</h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 mt-2">Developer & Security Engineer</p>
              </div>
            </div>
            <button className={`px-8 py-4 bg-gradient-to-r ${scheme.button} text-white rounded-xl hover:scale-105 transition-transform text-lg font-medium`}>
              Contact
            </button>
          </div>

          {/* Skills Grid */}
          <div className={`col-span-4 row-span-3 bg-gradient-to-br ${scheme.accent} rounded-3xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300 smooth-slide-left delay-300`}>
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                <p className="text-white/90">Modern, scalable applications</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold">5+</span>
                <p className="text-white/90 text-sm">Years</p>
              </div>
            </div>
          </div>

          <div className={`col-span-4 row-span-3 bg-gradient-to-br ${scheme.accent} rounded-3xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300 smooth-slide-bottom delay-500`}>
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-6">🖥️</div>
                <h3 className="text-2xl font-bold mb-4">Linux Admin</h3>
                <p className="text-white/90">Infrastructure & automation</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold">50+</span>
                <p className="text-white/90 text-sm">Servers</p>
              </div>
            </div>
          </div>

          <div className={`col-span-4 row-span-3 bg-gradient-to-br ${scheme.accent} rounded-3xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300 smooth-slide-right delay-700`}>
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-6">🔐</div>
                <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
                <p className="text-white/90">Security & protection</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold">100%</span>
                <p className="text-white/90 text-sm">Secure</p>
              </div>
            </div>
          </div>

          {/* About */}
          <div className={`col-span-8 row-span-3 ${scheme.card} backdrop-blur-xl rounded-3xl p-8 shadow-xl border smooth-zoom-in delay-900`}>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">About Me</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8">
              Passionate developer with expertise in web development, Linux administration, and cybersecurity. 
              I create secure, scalable solutions that protect and empower businesses in the digital age.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className={`px-4 py-2 ${scheme.card} ${scheme.text} rounded-full text-sm font-medium border`}>React.js</span>
              <span className={`px-4 py-2 ${scheme.card} ${scheme.text} rounded-full text-sm font-medium border`}>Next.js</span>
              <span className={`px-4 py-2 ${scheme.card} ${scheme.text} rounded-full text-sm font-medium border`}>TypeScript</span>
              <span className={`px-4 py-2 ${scheme.card} ${scheme.text} rounded-full text-sm font-medium border`}>Linux</span>
            </div>
          </div>

          {/* Contact */}
          <div className={`col-span-4 row-span-3 bg-gradient-to-br ${scheme.accent} rounded-3xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300 smooth-fade-in delay-1000`}>
            <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
            <div className="space-y-4 mb-8 text-white/90">
              <div>📧 contact@assem.me</div>
              <div>🌍 Remote Available</div>
              <div>💼 Ready to Start</div>
            </div>
            <div className="space-y-3">
              <button className="w-full py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">Portfolio</button>
              <button className="w-full py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">Resume</button>
              <button className="w-full py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}