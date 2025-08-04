'use client'

import { useState } from 'react'
import ProfilePhoto from '../ProfilePhoto'
import InteractiveGrid from '../InteractiveGrid'
import ScrollNavigation from '../ScrollNavigation'

type StyleVariant = 'brooklin' | 'developer' | 'artistic' | 'traditional' | 'business'
type ColorScheme = 'default' | 'blue' | 'purple' | 'green' | 'red'

const styleVariants = {
  brooklin: 'Clean Minimalist',
  developer: 'Developer Focus',
  artistic: 'Artistic Creative', 
  traditional: 'Traditional Portfolio',
  business: 'Professional Business'
}

const colorSchemes = {
  default: 'Original',
  blue: 'Ocean Blue',
  purple: 'Royal Purple', 
  green: 'Forest Green',
  red: 'Fire Red'
}

export default function InspiredStyles() {
  const [currentStyle, setCurrentStyle] = useState<StyleVariant>('brooklin')
  const [currentColor, setCurrentColor] = useState<ColorScheme>('default')

  const renderStyle = () => {
    switch (currentStyle) {
      case 'brooklin':
        return <BrooklinStyle colorScheme={currentColor} />
      case 'developer':
        return <DeveloperStyle colorScheme={currentColor} />
      case 'artistic':
        return <ArtisticStyle colorScheme={currentColor} />
      case 'traditional':
        return <TraditionalStyle colorScheme={currentColor} />
      case 'business':
        return <BusinessStyle colorScheme={currentColor} />
      default:
        return <BrooklinStyle colorScheme={currentColor} />
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Style Switcher */}
      <div className="fixed top-20 left-4 z-40 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-lg p-4 shadow-lg max-w-xs">
        <div className="text-sm font-semibold text-gray-700 dark:text-slate-200 mb-3">Inspired Styles</div>
        
        <div className="space-y-2 mb-4">
          {Object.entries(styleVariants).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setCurrentStyle(key as StyleVariant)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                currentStyle === key
                  ? 'bg-blue-600 dark:bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600'
              }`}
            >
              <div className="font-medium">{label}</div>
            </button>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-slate-600 pt-3 mb-4">
          <div className="text-sm font-semibold text-gray-700 dark:text-slate-200 mb-2">Color Scheme</div>
          <div className="grid grid-cols-2 gap-1">
            {Object.entries(colorSchemes).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCurrentColor(key as ColorScheme)}
                className={`px-2 py-1 rounded text-xs transition-colors ${
                  currentColor === key
                    ? 'bg-blue-600 dark:bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-gray-200 dark:border-slate-600">
          <div className="text-xs text-gray-500 dark:text-slate-400">
            🎨 5 styles × 5 colors = 25 variants!<br/>
            🎯 Interactive grid + scroll nav!
          </div>
        </div>
      </div>

      {renderStyle()}
    </div>
  )
}

// Color scheme helper
function getColorClasses(scheme: ColorScheme) {
  switch (scheme) {
    case 'blue':
      return {
        text: 'text-blue-400',
        textDark: 'text-blue-500',
        textLight: 'text-blue-300',
        bg: 'bg-blue-500',
        bgHover: 'hover:bg-blue-400',
        hoverText: 'hover:text-blue-400',
        gradient: 'bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900',
        gridColor: '#60a5fa'
      }
    case 'purple':
      return {
        text: 'text-purple-400',
        textDark: 'text-purple-500',
        textLight: 'text-purple-300',
        bg: 'bg-purple-500',
        bgHover: 'hover:bg-purple-400',
        hoverText: 'hover:text-purple-400',
        gradient: 'bg-gradient-to-br from-purple-900 via-slate-900 to-violet-900',
        gridColor: '#a78bfa'
      }
    case 'green':
      return {
        text: 'text-green-400',
        textDark: 'text-green-500',
        textLight: 'text-green-300',
        bg: 'bg-green-500',
        bgHover: 'hover:bg-green-400',
        hoverText: 'hover:text-green-400',
        gradient: 'bg-gradient-to-br from-green-900 via-slate-900 to-emerald-900',
        gridColor: '#4ade80'
      }
    case 'red':
      return {
        text: 'text-red-400',
        textDark: 'text-red-500', 
        textLight: 'text-red-300',
        bg: 'bg-red-500',
        bgHover: 'hover:bg-red-400',
        hoverText: 'hover:text-red-400',
        gradient: 'bg-gradient-to-br from-red-900 via-slate-900 to-rose-900',
        gridColor: '#f87171'
      }
    default:
      return {
        text: 'text-emerald-400',
        textDark: 'text-emerald-500',
        textLight: 'text-emerald-300',
        bg: 'bg-emerald-500',
        bgHover: 'hover:bg-emerald-400',
        hoverText: 'hover:text-emerald-400',
        gradient: 'bg-gradient-to-br from-gray-900 via-slate-900 to-black',
        gridColor: '#10b981'
      }
  }
}

// 1. Brooklin Inspired - Clean Minimalist
function BrooklinStyle({ colorScheme }: { colorScheme: ColorScheme }) {
  const colors = getColorClasses(colorScheme)
  return (
    <main className={`min-h-screen ${colors.gradient} text-white relative overflow-hidden`}>
      <InteractiveGrid color={colors.gridColor} opacity={0.4} nodeCount={40} />
      {/* Subtle Background Curves */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-20 left-0 w-96 h-96" viewBox="0 0 400 400">
          <path d="M0,200 Q200,50 400,200 L400,400 L0,400 Z" fill="currentColor"/>
        </svg>
        <svg className="absolute bottom-0 right-0 w-96 h-96" viewBox="0 0 400 400">
          <path d="M400,200 Q200,350 0,200 L0,0 L400,0 Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Navigation */}
      <ScrollNavigation>
        <div className="flex justify-between items-center p-8">
          <div className={`${colors.text} font-bold text-xl`}>HOME</div>
          <div className="flex space-x-8 text-sm">
            <span className={`${colors.hoverText} cursor-pointer transition-colors`}>WORK</span>
            <span className={`${colors.hoverText} cursor-pointer transition-colors`}>ABOUT</span>
            <span className={`${colors.hoverText} cursor-pointer transition-colors`}>SERVICE</span>
            <span className={`${colors.hoverText} cursor-pointer transition-colors`}>BLOGS</span>
            <span className={`${colors.hoverText} cursor-pointer transition-colors`}>CONTACTS</span>
          </div>
        </div>
      </ScrollNavigation>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-8">
        <div className="text-center max-w-4xl">
          <ProfilePhoto size="xl" className="mx-auto mb-12 smooth-fade-in" />
          
          <h1 className="text-7xl md:text-8xl font-light mb-8 smooth-slide-top delay-300">
            Hi, I'm <span className="font-normal">Assem!</span>
          </h1>
          
          <div className="mb-12">
            <p className="text-2xl md:text-3xl smooth-slide-bottom delay-500">
              a <span className={`${colors.text} font-medium`}>Developer & Security Engineer</span>
            </p>
            <p className="text-xl md:text-2xl mt-4 smooth-slide-bottom delay-700">
              With <span className={colors.text}>5+</span> years<br/>
              experience working with
            </p>
            <p className={`text-xl md:text-2xl ${colors.text} font-medium mt-2 smooth-slide-bottom delay-900`}>
              Modern Technologies
            </p>
          </div>

          <button className={`px-8 py-4 ${colors.bg} text-white font-semibold rounded-full ${colors.bgHover} transition-colors transform hover:scale-105 smooth-zoom-in delay-1100`}>
            View My Work
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 border-t border-gray-700 py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="smooth-fade-in delay-300">
              <div className={`text-3xl font-bold ${colors.text} mb-2`}>50+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="smooth-fade-in delay-500">
              <div className={`text-3xl font-bold ${colors.text} mb-2`}>5+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="smooth-fade-in delay-700">
              <div className={`text-3xl font-bold ${colors.text} mb-2`}>24/7</div>
              <div className="text-gray-400 text-sm">System Uptime</div>
            </div>
            <div className="smooth-fade-in delay-900">
              <div className={`text-3xl font-bold ${colors.text} mb-2`}>100%</div>
              <div className="text-gray-400 text-sm">Security Score</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// 2. Developer Inspired - James.dev Style
function DeveloperStyle({ colorScheme }: { colorScheme: ColorScheme }) {
  const colors = getColorClasses(colorScheme)
  return (
    <main className={`min-h-screen ${colors.gradient} text-white font-mono relative overflow-hidden`}>
      <InteractiveGrid color={colors.gridColor} opacity={0.3} nodeCount={60} />
      {/* Header */}
      <ScrollNavigation>
        <div className="flex justify-between items-center p-6 border-b border-slate-700/50">
          <div className="flex items-center space-x-2">
            <span className={`${colors.text} text-xl`}>&lt;/&gt;</span>
            <span className={`${colors.text} font-bold`}>Assem.dev</span>
          </div>
          <div className="flex space-x-6 text-sm">
            <span className={colors.text}>About me</span>
            <span className={`text-gray-400 ${colors.hoverText} transition-colors cursor-pointer`}>Resume</span>
            <span className={`text-gray-400 ${colors.hoverText} transition-colors cursor-pointer`}>Services</span>
            <span className={`text-gray-400 ${colors.hoverText} transition-colors cursor-pointer`}>Portfolio</span>
            <span className={`text-gray-400 ${colors.hoverText} transition-colors cursor-pointer`}>Blog</span>
            <span className={`text-gray-400 ${colors.hoverText} transition-colors cursor-pointer`}>Contact</span>
          </div>
          <div className="text-yellow-400 text-2xl">☀️</div>
        </div>
      </ScrollNavigation>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[85vh] px-8">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile */}
          <div className="text-center md:text-left smooth-slide-left">
            <div className="mb-8 flex justify-center md:justify-start">
              <div className="relative">
                <ProfilePhoto size="xl" className="rounded-none" />
                <div className={`absolute -bottom-4 -right-4 w-16 h-16 ${colors.bg} flex items-center justify-center transform rotate-12`}>
                  <span className="text-white text-2xl font-bold">&lt;/&gt;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="smooth-slide-right">
            <div className="mb-8">
              <span className="text-pink-400">&lt;span&gt;</span>
              <span className="text-gray-300">Hey, I'm Assem</span>
              <span className="text-pink-400">&lt;/span&gt;</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Senior <span className={colors.text}>&#123;Full Stack&#125;</span><br/>
              Web &amp; App developer<span className={colors.text}>_</span>
            </h1>

            <div className="mb-8 text-gray-400">
              <span className="text-pink-400">&lt;p&gt;</span>
              With expertise in cutting-edge technologies such as
              <span className="text-white"> React, Next.js, Node.js, and Python</span>... I deliver web
              solutions that are both innovative and robust.
              <span className="text-pink-400">&lt;/p&gt;</span>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex space-x-4 mb-8">
              <div className="w-12 h-12 bg-slate-800/80 rounded flex items-center justify-center">
                <span className={`${colors.text} font-bold`}>N</span>
              </div>
              <div className="w-12 h-12 bg-slate-800/80 rounded flex items-center justify-center">
                <span className="text-yellow-400">🔥</span>
              </div>
              <div className="w-12 h-12 bg-slate-800/80 rounded flex items-center justify-center">
                <span className={colors.text}>💎</span>
              </div>
              <div className="w-12 h-12 bg-slate-800/80 rounded flex items-center justify-center">
                <span className={`${colors.text} font-bold`}>JS</span>
              </div>
              <div className="w-12 h-12 bg-slate-800/80 rounded flex items-center justify-center">
                <span className={colors.text}>~</span>
              </div>
              <span className="flex items-center text-gray-500">...and more</span>
            </div>

            <button className={`flex items-center space-x-2 px-6 py-3 border border-gray-600 rounded ${colors.hoverText} hover:bg-slate-800/50 transition-colors`}>
              <span>📄</span>
              <span>Download my CV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 border-t border-slate-700/50 py-8">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="smooth-fade-in delay-300">
            <div className={`text-3xl font-bold ${colors.text} mb-2`}>5+</div>
            <div className="text-gray-400 text-sm">Year Experience</div>
          </div>
          <div className="smooth-fade-in delay-500">
            <div className={`text-3xl font-bold ${colors.text} mb-2`}>50+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="smooth-fade-in delay-700">
            <div className={`text-3xl font-bold ${colors.text} mb-2`}>100+</div>
            <div className="text-gray-400 text-sm">Satisfied Clients</div>
          </div>
          <div className="smooth-fade-in delay-900">
            <div className={`text-3xl font-bold ${colors.text} mb-2`}>10+</div>
            <div className="text-gray-400 text-sm">Awards Winner</div>
          </div>
        </div>
      </div>
    </main>
  )
}

// 3. Artistic Inspired - Laravel D Style
function ArtisticStyle({ colorScheme }: { colorScheme: ColorScheme }) {
  const colors = getColorClasses(colorScheme)
  return (
    <main className={`min-h-screen ${colors.gradient} text-white relative overflow-hidden`}>
      <InteractiveGrid color={colors.gridColor} opacity={0.2} nodeCount={80} />
      {/* Geometric Network Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          {/* Network Pattern */}
          <defs>
            <pattern id="network" patternUnits="userSpaceOnUse" width="100" height="100">
              <circle cx="50" cy="50" r="2" fill="currentColor"/>
              <line x1="50" y1="50" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)"/>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-8">
        <div className="text-pink-400 text-2xl">∇</div>
        <div className="flex space-x-8">
          <span className="text-pink-400">Home</span>
          <span className="hover:text-pink-400 transition-colors cursor-pointer">About</span>
          <span className="hover:text-pink-400 transition-colors cursor-pointer">Service</span>
          <span className="hover:text-pink-400 transition-colors cursor-pointer">Portfolio</span>
          <span className="hover:text-pink-400 transition-colors cursor-pointer">Contact</span>
        </div>
        <button className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-colors">
          Hire Me Now
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <ProfilePhoto size="xl" className="mx-auto mb-12 smooth-fade-in" />
          
          <div className="mb-8 smooth-slide-top delay-300">
            <h2 className="text-2xl mb-4">I Am</h2>
            <h1 className="text-8xl font-script italic text-pink-400 mb-8 smooth-zoom-in delay-500" style={{fontFamily: 'cursive'}}>
              Assem Sobhy
            </h1>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-12 smooth-fade-in delay-700">
            <div className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-pink-400 transition-colors cursor-pointer">
              <span>f</span>
            </div>
            <div className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-pink-400 transition-colors cursor-pointer">
              <span>in</span>
            </div>
            <div className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-pink-400 transition-colors cursor-pointer">
              <span>ig</span>
            </div>
            <div className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-pink-400 transition-colors cursor-pointer">
              <span>@</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="smooth-fade-in delay-900">
            <div className="w-6 h-10 border border-gray-600 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 p-8">
        <div className="text-center">
          <p className="text-xl">Developer & Security Engineer</p>
          <p className="text-gray-400">Crafting secure digital experiences</p>
        </div>
      </div>
    </main>
  )
}

// 4. Traditional Portfolio Style
function TraditionalStyle({ colorScheme }: { colorScheme: ColorScheme }) {
  const colors = getColorClasses(colorScheme)
  return (
    <main className={`min-h-screen ${colors.gradient} text-white`}>
      {/* Navigation */}
      <nav className="flex justify-between items-center p-8">
        <div className="text-2xl font-bold text-purple-300">PORTFOLIO</div>
        <div className="flex space-x-8">
          <span className="hover:text-purple-300 transition-colors cursor-pointer">Home</span>
          <span className="hover:text-purple-300 transition-colors cursor-pointer">About</span>
          <span className="hover:text-purple-300 transition-colors cursor-pointer">Service</span>
          <span className="hover:text-purple-300 transition-colors cursor-pointer">Portfolio</span>
          <span className="hover:text-purple-300 transition-colors cursor-pointer">Resume</span>
          <span className="hover:text-purple-300 transition-colors cursor-pointer">Blog</span>
          <span className="hover:text-purple-300 transition-colors cursor-pointer">Contact</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-purple-800/50 to-pink-800/50">
        <div className="text-center px-8">
          <h2 className="text-2xl mb-4 smooth-fade-in">I Am Web Designer</h2>
          <h1 className="text-6xl font-bold mb-8 smooth-slide-top delay-300">Assem Sobhy</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 smooth-slide-bottom delay-500">
            In a professional context it often happens that private clients order a publication to be made.
          </p>
          <button className="px-8 py-4 bg-purple-600 rounded-lg hover:bg-purple-500 transition-colors smooth-zoom-in delay-700">
            Hire Me
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="smooth-slide-left">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-1 rounded-2xl inline-block">
              <div className="bg-gray-900 p-2 rounded-2xl">
                <ProfilePhoto size="xl" className="rounded-xl" />
              </div>
            </div>
          </div>
          
          <div className="smooth-slide-right">
            <h2 className="text-3xl font-bold mb-6">
              Hello, I Am <span className="text-purple-300">Assem Sobhy</span>
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              A passionate developer and security engineer with expertise in creating robust, 
              scalable applications. I specialize in web development, Linux administration, 
              and cybersecurity, bringing innovative solutions to complex challenges.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-purple-300 font-semibold">Name:</div>
                <div>Assem Sobhy</div>
              </div>
              <div>
                <div className="text-purple-300 font-semibold">Experience:</div>
                <div>5+ Years</div>
              </div>
              <div>
                <div className="text-purple-300 font-semibold">Address:</div>
                <div>Remote Available</div>
              </div>
              <div>
                <div className="text-purple-300 font-semibold">Phone Number:</div>
                <div>Available on Request</div>
              </div>
            </div>

            <button className="px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-500 transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

// 5. Professional Business Style
function BusinessStyle({ colorScheme }: { colorScheme: ColorScheme }) {
  const colors = getColorClasses(colorScheme)
  return (
    <main className={`min-h-screen ${colors.gradient} text-white relative overflow-hidden`}>
      <InteractiveGrid color={colors.gridColor} opacity={0.3} nodeCount={50} />
      {/* Network Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full">
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="1"/>
              <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Network nodes and connections */}
          {Array.from({length: 50}, (_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            return (
              <circle key={i} cx={`${x}%`} cy={`${y}%`} r="2" fill="url(#nodeGradient)"/>
            );
          })}
          {Array.from({length: 30}, (_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            return (
              <line key={i} x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`} 
                    stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3"/>
            );
          })}
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-8">
        <div className="text-2xl font-bold">
          <span className="text-white">CWT</span>
          <span className="text-red-500">.</span>
        </div>
        <div className="flex space-x-8">
          <span className="hover:text-red-400 transition-colors cursor-pointer">Home</span>
          <span className="hover:text-red-400 transition-colors cursor-pointer">About Us</span>
          <span className="hover:text-red-400 transition-colors cursor-pointer">Page</span>
          <span className="hover:text-red-400 transition-colors cursor-pointer">Services</span>
          <span className="hover:text-red-400 transition-colors cursor-pointer">Portfolio</span>
          <span className="hover:text-red-400 transition-colors cursor-pointer">Blog</span>
          <span className="hover:text-red-400 transition-colors cursor-pointer">Contact Us</span>
        </div>
        <div className="text-2xl">☰</div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-8">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="smooth-slide-left">
            <h2 className="text-xl mb-4">Hello, I Am Assem Sobhy</h2>
            <h1 className="text-5xl font-light mb-8 leading-tight">
              A professional web developer &<br/>
              <span className="text-red-400 font-normal">security engineer</span>
            </h1>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Specialized in creating secure, scalable web applications with expertise in 
              modern technologies and cybersecurity best practices.
            </p>
            <button className="px-8 py-4 bg-red-500 hover:bg-red-400 transition-colors rounded">
              Hire Me Now
            </button>
          </div>

          {/* Right Side - Profile */}
          <div className="text-center smooth-slide-right">
            <ProfilePhoto size="xl" className="mx-auto mb-8" />
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="smooth-fade-in delay-300">
            <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="smooth-fade-in delay-500">
            <div className="text-3xl font-bold text-red-400 mb-2">5+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="smooth-fade-in delay-700">
            <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
            <div className="text-gray-400 text-sm">Security Score</div>
          </div>
          <div className="smooth-fade-in delay-900">
            <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </main>
  )
}