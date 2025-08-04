'use client'

import { useState } from 'react'
import ProfilePhoto from '../ProfilePhoto'
import InteractiveGrid from '../InteractiveGrid'
import ScrollNavigation from '../ScrollNavigation'
import { EnhancedCard, StatsCounter, FloatingElement, GradientText } from './DemoInspiredEnhancements'


type StyleVariant = 'brooklin' | 'developer' | 'artistic' | 'traditional' | 'business'
type ColorScheme = 'default' | 'blue' | 'purple' | 'green' | 'red' | 'catppuccin' | 'softLight' | 'warmDark'

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
  red: 'Fire Red',
  catppuccin: 'Catppuccin',
  softLight: 'Soft Light',
  warmDark: 'Warm Dark'
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
      {renderStyle()}
    </div>
  )
}

// Color scheme helper with easy-on-the-eyes palettes
function getColorClasses(scheme: ColorScheme) {
  switch (scheme) {
    case 'blue':
      return {
        text: 'text-sky-300',
        textDark: 'text-sky-400',
        textLight: 'text-sky-200',
        bg: 'bg-sky-500',
        bgHover: 'hover:bg-sky-400',
        hoverText: 'hover:text-sky-300',
        gradient: 'bg-gradient-to-br from-slate-900 via-blue-900/70 to-slate-800',
        gridColor: '#7dd3fc'
      }
    case 'purple':
      return {
        text: 'text-violet-300',
        textDark: 'text-violet-400',
        textLight: 'text-violet-200',
        bg: 'bg-violet-500',
        bgHover: 'hover:bg-violet-400',
        hoverText: 'hover:text-violet-300',
        gradient: 'bg-gradient-to-br from-slate-900 via-violet-900/70 to-slate-800',
        gridColor: '#c4b5fd'
      }
    case 'green':
      return {
        text: 'text-emerald-300',
        textDark: 'text-emerald-400',
        textLight: 'text-emerald-200',
        bg: 'bg-emerald-500',
        bgHover: 'hover:bg-emerald-400',
        hoverText: 'hover:text-emerald-300',
        gradient: 'bg-gradient-to-br from-slate-900 via-emerald-900/70 to-slate-800',
        gridColor: '#6ee7b7'
      }
    case 'red':
      return {
        text: 'text-rose-300',
        textDark: 'text-rose-400', 
        textLight: 'text-rose-200',
        bg: 'bg-rose-500',
        bgHover: 'hover:bg-rose-400',
        hoverText: 'hover:text-rose-300',
        gradient: 'bg-gradient-to-br from-slate-900 via-rose-900/70 to-slate-800',
        gridColor: '#fda4af'
      }
    case 'catppuccin':
      return {
        text: 'text-blue-200',
        textDark: 'text-blue-300',
        textLight: 'text-blue-100',
        bg: 'bg-blue-400',
        bgHover: 'hover:bg-blue-300',
        hoverText: 'hover:text-blue-200',
        gradient: 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800',
        gridColor: '#89b4fa'
      }
    case 'softLight':
      return {
        text: 'text-indigo-400',
        textDark: 'text-indigo-500',
        textLight: 'text-indigo-300',
        bg: 'bg-indigo-400',
        bgHover: 'hover:bg-indigo-300',
        hoverText: 'hover:text-indigo-400',
        gradient: 'bg-gradient-to-br from-gray-50 via-indigo-50 to-blue-50',
        gridColor: '#a5b4fc'
      }
    case 'warmDark':
      return {
        text: 'text-orange-300',
        textDark: 'text-orange-400',
        textLight: 'text-orange-200',
        bg: 'bg-orange-500',
        bgHover: 'hover:bg-orange-400',
        hoverText: 'hover:text-orange-300',
        gradient: 'bg-gradient-to-br from-neutral-900 via-stone-900 to-amber-900/30',
        gridColor: '#fdba74'
      }
    default:
      return {
        text: 'text-emerald-300',
        textDark: 'text-emerald-400',
        textLight: 'text-emerald-200',
        bg: 'bg-emerald-500',
        bgHover: 'hover:bg-emerald-400',
        hoverText: 'hover:text-emerald-300',
        gradient: 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800',
        gridColor: '#6ee7b7'
      }
  }
}

// Helper function for color descriptions
function getColorDescription(scheme: ColorScheme): string {
  switch (scheme) {
    case 'catppuccin':
      return 'Dark theme with soft blues'
    case 'softLight':
      return 'Light theme with gentle colors'
    case 'warmDark':
      return 'Cozy orange-based dark theme'
    case 'blue':
      return 'Sky-based ocean blues'
    case 'purple':
      return 'Royal violet gradients'
    case 'green':
      return 'Natural emerald tones'
    case 'red':
      return 'Warm rose accents'
    default:
      return 'Classic emerald professional'
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
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4 sm:px-8">
        <div className="text-center max-w-4xl">
          <ProfilePhoto size="lg" className="mx-auto mb-8 sm:mb-12 smooth-fade-in md:w-48 md:h-48" />
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-6 sm:mb-8 smooth-slide-top delay-300 leading-tight">
            Hi, I'm <GradientText className="font-normal">Assem!</GradientText>
          </h1>
          
          <div className="mb-8 sm:mb-12 space-y-3 sm:space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl smooth-slide-bottom delay-500">
              a <span className={`${colors.text} font-medium`}>Developer & Security Engineer</span>
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl smooth-slide-bottom delay-700">
              With <span className={colors.text}>5+</span> years<br className="hidden sm:block"/>
              <span className="sm:hidden"> </span>experience working with
            </p>
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl ${colors.text} font-medium smooth-slide-bottom delay-900`}>
              <GradientText gradient={`from-${colors.text.split('-')[1]}-300 to-${colors.text.split('-')[1]}-400`}>
                Modern Technologies
              </GradientText>
            </p>
          </div>

          <div className="smooth-zoom-in delay-1100">
            <button className={`
              relative group
              px-6 sm:px-8 py-3 sm:py-4 
              ${colors.bg} text-white font-semibold 
              rounded-full 
              ${colors.bgHover} 
              transition-all duration-300 ease-out
              transform hover:scale-105 hover:-translate-y-1
              shadow-lg hover:shadow-2xl
              overflow-hidden
              text-sm sm:text-base
            `}>
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section - Demo Inspired */}
      <div className="relative z-10 py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          {/* Floating decorative elements - hidden on mobile for better performance */}
          <FloatingElement direction="up" delay={0} className="hidden md:block absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl">
            <div />
          </FloatingElement>
          <FloatingElement direction="down" delay={2000} className="hidden md:block absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-xl">
            <div />
          </FloatingElement>
          
          <EnhancedCard className="backdrop-blur-md bg-white/5 border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <StatsCounter 
                value="50+" 
                label="Projects Completed"
                delay="delay-300"
                color={colors.text}
              />
              <StatsCounter 
                value="5+" 
                label="Years Experience"
                delay="delay-500"
                color={colors.text}
              />
              <StatsCounter 
                value="24/7" 
                label="System Uptime"
                delay="delay-700"
                color={colors.text}
              />
              <StatsCounter 
                value="100%" 
                label="Security Score"
                delay="delay-900"
                color={colors.text}
              />
            </div>
          </EnhancedCard>
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