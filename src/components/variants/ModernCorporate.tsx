'use client'

import { useState } from 'react'
import ProfilePhoto from '../ProfilePhoto'

type CorporateStyle = 'executive' | 'dashboard' | 'portfolio' | 'agency' | 'magazine'
type ColorScheme = 'blue' | 'purple' | 'green' | 'orange' | 'dark'

const corporateStyles = {
  executive: 'Executive Suite',
  dashboard: 'Business Dashboard', 
  portfolio: 'Portfolio Showcase',
  agency: 'Modern Agency',
  magazine: 'Professional Magazine'
}

const colorSchemes = {
  blue: {
    name: 'Corporate Blue',
    bg: 'from-blue-50 via-slate-50 to-indigo-50 dark:from-blue-950 dark:via-slate-950 dark:to-indigo-950',
    primary: 'from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500',
    secondary: 'from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400',
    accent: 'text-blue-600 dark:text-blue-400',
    card: 'bg-white/90 dark:bg-slate-800/90 border-blue-200/30 dark:border-blue-700/30',
    highlight: 'bg-blue-100/50 dark:bg-blue-900/30'
  },
  purple: {
    name: 'Executive Purple',
    bg: 'from-purple-50 via-slate-50 to-violet-50 dark:from-purple-950 dark:via-slate-950 dark:to-violet-950',
    primary: 'from-purple-600 to-violet-600 dark:from-purple-500 dark:to-violet-500',
    secondary: 'from-purple-500 to-violet-500 dark:from-purple-400 dark:to-violet-400',
    accent: 'text-purple-600 dark:text-purple-400',
    card: 'bg-white/90 dark:bg-slate-800/90 border-purple-200/30 dark:border-purple-700/30',
    highlight: 'bg-purple-100/50 dark:bg-purple-900/30'
  },
  green: {
    name: 'Growth Green',
    bg: 'from-emerald-50 via-slate-50 to-teal-50 dark:from-emerald-950 dark:via-slate-950 dark:to-teal-950',
    primary: 'from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500',
    secondary: 'from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400',
    accent: 'text-emerald-600 dark:text-emerald-400',
    card: 'bg-white/90 dark:bg-slate-800/90 border-emerald-200/30 dark:border-emerald-700/30',
    highlight: 'bg-emerald-100/50 dark:bg-emerald-900/30'
  },
  orange: {
    name: 'Innovation Orange',
    bg: 'from-orange-50 via-slate-50 to-amber-50 dark:from-orange-950 dark:via-slate-950 dark:to-amber-950',
    primary: 'from-orange-600 to-amber-600 dark:from-orange-500 dark:to-amber-500',
    secondary: 'from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-400',
    accent: 'text-orange-600 dark:text-orange-400',
    card: 'bg-white/90 dark:bg-slate-800/90 border-orange-200/30 dark:border-orange-700/30',
    highlight: 'bg-orange-100/50 dark:bg-orange-900/30'
  },
  dark: {
    name: 'Executive Dark',
    bg: 'from-gray-50 via-slate-50 to-zinc-50 dark:from-gray-950 dark:via-slate-950 dark:to-zinc-950',
    primary: 'from-gray-700 to-slate-700 dark:from-gray-600 dark:to-slate-600',
    secondary: 'from-gray-600 to-slate-600 dark:from-gray-500 dark:to-slate-500',
    accent: 'text-gray-700 dark:text-gray-400',
    card: 'bg-white/95 dark:bg-slate-800/95 border-gray-200/30 dark:border-slate-700/30',
    highlight: 'bg-gray-100/50 dark:bg-gray-900/30'
  }
}

export default function ModernCorporate() {
  const [currentStyle, setCurrentStyle] = useState<CorporateStyle>('executive')
  const [currentColor, setCurrentColor] = useState<ColorScheme>('blue')
  
  const currentScheme = colorSchemes[currentColor]

  const renderStyle = () => {
    switch (currentStyle) {
      case 'executive':
        return <ExecutiveLayout scheme={currentScheme} />
      case 'dashboard':
        return <DashboardLayout scheme={currentScheme} />
      case 'portfolio':
        return <PortfolioLayout scheme={currentScheme} />
      case 'agency':
        return <AgencyLayout scheme={currentScheme} />
      case 'magazine':
        return <MagazineLayout scheme={currentScheme} />
      default:
        return <ExecutiveLayout scheme={currentScheme} />
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Enhanced Control Panel */}
      <div className="fixed top-20 left-4 z-40 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-lg p-4 shadow-lg max-w-xs">
        <div className="text-sm font-semibold text-gray-700 dark:text-slate-200 mb-3">Modern Corporate</div>
        
        {/* Style Selector */}
        <div className="mb-4">
          <div className="text-xs font-medium text-gray-600 dark:text-slate-300 mb-2">Business Style:</div>
          <div className="grid grid-cols-1 gap-1">
            {Object.entries(corporateStyles).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCurrentStyle(key as CorporateStyle)}
                className={`text-left px-2 py-1 rounded text-xs transition-colors ${
                  currentStyle === key
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
          <div className="text-xs font-medium text-gray-600 dark:text-slate-300 mb-2">Brand Colors:</div>
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
            💼 25 professional combinations!
          </div>
        </div>
      </div>

      {renderStyle()}
    </div>
  )
}

// Executive Suite Layout
function ExecutiveLayout({ scheme }: { scheme: any }) {
  return (
    <main className={`min-h-screen bg-gradient-to-br ${scheme.bg} py-20 transition-all duration-1000`}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Executive Header */}
          <div className="text-center mb-20 smooth-fade-in">
            <ProfilePhoto size="xl" className="mx-auto mb-12" />
            <h1 className="text-6xl font-light text-slate-800 dark:text-slate-100 mb-6">Assem Sobhy</h1>
            <div className={`w-32 h-px bg-gradient-to-r ${scheme.secondary} mx-auto mb-8`}></div>
            <p className="text-2xl text-slate-600 dark:text-slate-300 font-light">Developer & Security Engineer</p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
              Delivering enterprise-grade solutions with uncompromising security and performance standards
            </p>
          </div>

          {/* Executive Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Main Profile Card */}
            <div className="lg:col-span-2">
              <div className={`${scheme.card} backdrop-blur-xl rounded-3xl p-12 shadow-2xl border hover:shadow-3xl transition-all duration-500 smooth-slide-left delay-300`}>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Executive Summary</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  Seasoned technology leader with 5+ years of experience architecting secure, scalable solutions for enterprise environments. 
                  Proven track record in web development, Linux infrastructure, and cybersecurity implementation.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className={`text-lg font-semibold ${scheme.accent} mb-4`}>Core Competencies</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li>• Enterprise Web Applications</li>
                      <li>• Cloud Infrastructure Management</li>
                      <li>• Security Architecture & Auditing</li>
                      <li>• DevOps & Automation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${scheme.accent} mb-4`}>Leadership Experience</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li>• Technical Team Leadership</li>
                      <li>• Project Management</li>
                      <li>• Strategic Planning</li>
                      <li>• Stakeholder Communication</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className={`px-4 py-2 ${scheme.highlight} ${scheme.accent} rounded-full text-sm font-medium`}>React/Next.js</span>
                  <span className={`px-4 py-2 ${scheme.highlight} ${scheme.accent} rounded-full text-sm font-medium`}>TypeScript</span>
                  <span className={`px-4 py-2 ${scheme.highlight} ${scheme.accent} rounded-full text-sm font-medium`}>Linux/DevOps</span>
                  <span className={`px-4 py-2 ${scheme.highlight} ${scheme.accent} rounded-full text-sm font-medium`}>Cybersecurity</span>
                </div>
              </div>
            </div>

            {/* Executive Actions */}
            <div className="space-y-8">
              <div className={`${scheme.card} backdrop-blur-xl rounded-2xl p-8 shadow-xl border hover:shadow-2xl transition-all duration-500 smooth-slide-right delay-500`}>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-6">Executive Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <span className={`w-10 h-10 ${scheme.highlight} rounded-xl flex items-center justify-center mr-4`}>📧</span>
                    <div>
                      <div className="font-medium">Direct Email</div>
                      <div className="text-sm">contact@assem.me</div>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <span className={`w-10 h-10 ${scheme.highlight} rounded-xl flex items-center justify-center mr-4`}>🌍</span>
                    <div>
                      <div className="font-medium">Availability</div>
                      <div className="text-sm">Remote & On-site</div>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <span className={`w-10 h-10 ${scheme.highlight} rounded-xl flex items-center justify-center mr-4`}>⚡</span>
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-sm">Within 24 hours</div>
                    </div>
                  </div>
                </div>
                <button className={`w-full mt-8 px-6 py-4 bg-gradient-to-r ${scheme.primary} text-white rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105`}>
                  Schedule Consultation
                </button>
              </div>

              <div className={`${scheme.card} backdrop-blur-xl rounded-2xl p-8 shadow-xl border hover:shadow-2xl transition-all duration-500 smooth-fade-in delay-700`}>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-6">Key Metrics</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className={`text-4xl font-bold ${scheme.accent} mb-1`}>5+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-4xl font-bold ${scheme.accent} mb-1`}>50+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-4xl font-bold ${scheme.accent} mb-1`}>100%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`${scheme.card} backdrop-blur-xl rounded-2xl p-8 shadow-xl border hover:shadow-2xl transition-all duration-500 group smooth-slide-bottom delay-900`}>
              <div className={`w-16 h-16 bg-gradient-to-r ${scheme.secondary} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className={`text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center ${scheme.accent}`}>Web Development</h3>
              <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                Enterprise-grade applications built with modern frameworks and best practices for scalability and performance.
              </p>
            </div>

            <div className={`${scheme.card} backdrop-blur-xl rounded-2xl p-8 shadow-xl border hover:shadow-2xl transition-all duration-500 group smooth-slide-bottom delay-1100`}>
              <div className={`w-16 h-16 bg-gradient-to-r ${scheme.secondary} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <span className="text-white text-2xl">🖥️</span>
              </div>
              <h3 className={`text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center ${scheme.accent}`}>Infrastructure</h3>
              <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                Linux system administration, cloud infrastructure management, and automated deployment pipelines.
              </p>
            </div>

            <div className={`${scheme.card} backdrop-blur-xl rounded-2xl p-8 shadow-xl border hover:shadow-2xl transition-all duration-500 group smooth-slide-bottom delay-1300`}>
              <div className={`w-16 h-16 bg-gradient-to-r ${scheme.secondary} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <span className="text-white text-2xl">🔐</span>
              </div>
              <h3 className={`text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center ${scheme.accent}`}>Security</h3>
              <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                Comprehensive security auditing, penetration testing, and implementation of industry-standard security protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Business Dashboard Layout
function DashboardLayout({ scheme }: { scheme: any }) {
  return (
    <main className={`min-h-screen bg-gradient-to-br ${scheme.bg} p-8 transition-all duration-1000`}>
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className={`${scheme.card} backdrop-blur-xl rounded-2xl p-8 mb-8 shadow-xl border smooth-fade-in`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ProfilePhoto size="lg" className="mr-8" />
              <div>
                <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Assem Sobhy</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">Developer & Security Engineer</p>
                <p className="text-sm text-slate-500 dark:text-slate-500">Enterprise Solutions Architect</p>
              </div>
            </div>
            <div className="text-center">
              <div className={`text-sm text-slate-500 dark:text-slate-400 mb-1`}>Status</div>
              <div className={`${scheme.accent} font-semibold text-lg`}>Available</div>
              <div className={`w-3 h-3 bg-gradient-to-r ${scheme.secondary} rounded-full mx-auto mt-2 animate-pulse`}></div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* KPI Cards */}
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className={`${scheme.card} backdrop-blur-xl rounded-xl p-6 shadow-lg border smooth-slide-top delay-300`}>
              <div className={`text-4xl font-bold ${scheme.accent} mb-2`}>5+</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">Years Experience</div>
            </div>
            <div className={`${scheme.card} backdrop-blur-xl rounded-xl p-6 shadow-lg border smooth-slide-top delay-500`}>
              <div className={`text-4xl font-bold ${scheme.accent} mb-2`}>50+</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">Projects Delivered</div>
            </div>
            <div className={`${scheme.card} backdrop-blur-xl rounded-xl p-6 shadow-lg border smooth-slide-top delay-700`}>
              <div className={`text-4xl font-bold ${scheme.accent} mb-2`}>24/7</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">System Uptime</div>
            </div>
            <div className={`${scheme.card} backdrop-blur-xl rounded-xl p-6 shadow-lg border smooth-slide-top delay-900`}>
              <div className={`text-4xl font-bold ${scheme.accent} mb-2`}>100%</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">Security Score</div>
            </div>
          </div>

          {/* Skills Analytics */}
          <div className="col-span-12 lg:col-span-8">
            <div className={`${scheme.card} backdrop-blur-xl rounded-2xl p-8 shadow-xl border smooth-slide-left delay-1000`}>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8">Technical Proficiency</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-medium text-slate-700 dark:text-slate-300">Web Development</span>
                    <span className={`${scheme.accent} font-bold`}>95%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className={`bg-gradient-to-r ${scheme.secondary} h-3 rounded-full transition-all duration-1000`} style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-medium text-slate-700 dark:text-slate-300">Linux Administration</span>
                    <span className={`${scheme.accent} font-bold`}>90%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className={`bg-gradient-to-r ${scheme.secondary} h-3 rounded-full transition-all duration-1000`} style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-medium text-slate-700 dark:text-slate-300">Cybersecurity</span>
                    <span className={`${scheme.accent} font-bold`}>95%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className={`bg-gradient-to-r ${scheme.secondary} h-3 rounded-full transition-all duration-1000`} style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="col-span-12 lg:col-span-4">
            <div className={`${scheme.card} backdrop-blur-xl rounded-2xl p-8 shadow-xl border smooth-slide-right delay-1200`}>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button className={`w-full p-4 bg-gradient-to-r ${scheme.primary} text-white rounded-xl hover:shadow-lg transition-all font-medium`}>
                  View Portfolio
                </button>
                <button className="w-full p-4 bg-slate-600 dark:bg-slate-700 text-white rounded-xl hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors font-medium">
                  Download Resume
                </button>
                <button className="w-full p-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-medium">
                  Schedule Meeting
                </button>
              </div>
            </div>
          </div>

          {/* Recent Projects */}
          <div className="col-span-12 lg:col-span-8">
            <div className={`${scheme.card} backdrop-blur-xl rounded-2xl p-8 shadow-xl border smooth-zoom-in delay-1400`}>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Recent Projects</h3>
              <div className="space-y-4">
                <div className={`flex items-center p-4 ${scheme.highlight} rounded-xl hover:scale-105 transition-transform cursor-pointer`}>
                  <div className={`w-3 h-3 bg-gradient-to-r ${scheme.secondary} rounded-full mr-4`}></div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800 dark:text-slate-200">Enterprise E-commerce Platform</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Next.js, TypeScript • Completed</div>
                  </div>
                  <div className={`${scheme.accent} font-bold`}>✓</div>
                </div>
                <div className={`flex items-center p-4 ${scheme.highlight} rounded-xl hover:scale-105 transition-transform cursor-pointer`}>
                  <div className={`w-3 h-3 bg-gradient-to-r ${scheme.secondary} rounded-full mr-4 animate-pulse`}></div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800 dark:text-slate-200">Security Audit Dashboard</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Python, React • In Progress</div>
                  </div>
                  <div className={`${scheme.accent} font-bold`}>75%</div>
                </div>
                <div className={`flex items-center p-4 ${scheme.highlight} rounded-xl hover:scale-105 transition-transform cursor-pointer`}>
                  <div className={`w-3 h-3 bg-gradient-to-r ${scheme.secondary} rounded-full mr-4 opacity-50`}></div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800 dark:text-slate-200">Cloud Infrastructure Migration</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">AWS, Docker • Planning</div>
                  </div>
                  <div className={`${scheme.accent} font-bold`}>Plan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Dashboard */}
          <div className="col-span-12 lg:col-span-4">
            <div className={`${scheme.card} backdrop-blur-xl rounded-2xl p-8 shadow-xl border smooth-slide-bottom delay-1600`}>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6">Contact Information</h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <div className="flex items-center">
                  <span className="mr-4 text-xl">📧</span>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm">contact@assem.me</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-4 text-xl">🌍</span>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm">Remote & On-site</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-4 text-xl">⏰</span>
                  <div>
                    <div className="font-medium">Timezone</div>
                    <div className="text-sm">GMT+2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Portfolio Showcase (keeping other layouts similar but simplified for space)
function PortfolioLayout({ scheme }: { scheme: any }) {
  return (
    <main className={`min-h-screen bg-gradient-to-br ${scheme.bg} transition-all duration-1000`}>
      <div className="border-b border-slate-200 dark:border-slate-700 p-8 smooth-slide-top">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <ProfilePhoto size="lg" className="mr-8" />
            <div>
              <h1 className="text-4xl font-light text-slate-800 dark:text-slate-100">Assem Sobhy</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">Developer & Security Engineer</p>
            </div>
          </div>
          <button className={`px-8 py-3 bg-gradient-to-r ${scheme.primary} text-white rounded-xl hover:scale-105 transition-transform font-medium`}>
            Contact
          </button>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-12 gap-6">
          <div className={`col-span-8 row-span-2 bg-gradient-to-br ${scheme.primary} rounded-2xl p-10 text-white smooth-zoom-in delay-300`}>
            <h2 className="text-3xl font-bold mb-6">Web Development Excellence</h2>
            <p className="text-xl mb-8 opacity-90">Building modern, scalable applications with cutting-edge technologies.</p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/20 rounded-full">React</span>
              <span className="px-4 py-2 bg-white/20 rounded-full">Next.js</span>
              <span className="px-4 py-2 bg-white/20 rounded-full">TypeScript</span>
            </div>
          </div>
          
          <div className={`col-span-4 ${scheme.card} backdrop-blur-xl rounded-2xl p-6 border text-center smooth-slide-right delay-500`}>
            <div className={`text-4xl font-bold ${scheme.accent} mb-2`}>5+</div>
            <div className="text-slate-600 dark:text-slate-400">Years Experience</div>
          </div>
          
          <div className={`col-span-4 ${scheme.card} backdrop-blur-xl rounded-2xl p-6 border text-center smooth-slide-right delay-700`}>
            <div className={`text-4xl font-bold ${scheme.accent} mb-2`}>50+</div>
            <div className="text-slate-600 dark:text-slate-400">Projects</div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Modern Agency (simplified)
function AgencyLayout({ scheme }: { scheme: any }) {
  return (
    <main className={`min-h-screen bg-gradient-to-br ${scheme.bg} transition-all duration-1000`}>
      <div className={`relative overflow-hidden bg-gradient-to-r ${scheme.primary} text-white`}>
        <div className="max-w-6xl mx-auto px-8 py-24 text-center smooth-fade-in">
          <ProfilePhoto size="xl" className="mx-auto mb-12" />
          <h1 className="text-6xl font-bold mb-6">Assem Sobhy</h1>
          <p className="text-2xl mb-12 opacity-90">Developer & Security Engineer</p>
          <button className="px-12 py-4 bg-white text-slate-800 rounded-xl font-semibold text-lg hover:scale-105 transition-transform">
            Start Your Project
          </button>
        </div>
      </div>
    </main>
  )
}

// Professional Magazine (simplified)
function MagazineLayout({ scheme }: { scheme: any }) {
  return (
    <main className={`min-h-screen bg-gradient-to-br ${scheme.bg} transition-all duration-1000`}>
      <div className="border-b-2 border-slate-800 dark:border-slate-200 p-8 smooth-slide-top">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">DEVELOPER PROFILE</h1>
            <p className="text-slate-600 dark:text-slate-400 uppercase tracking-wide text-sm">Professional Edition</p>
          </div>
          <div className="flex items-center">
            <ProfilePhoto size="lg" className="mr-6" />
            <div className="text-right">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">ASSEM SOBHY</div>
              <div className="text-slate-600 dark:text-slate-400">Security Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}