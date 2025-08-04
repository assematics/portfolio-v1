'use client'

import { useState, useEffect } from 'react'
import ProfilePhoto from '../ProfilePhoto'

type TerminalStyle = 'classic' | 'vscode' | 'neon' | 'matrix' | 'hackerman'
type ColorScheme = 'green' | 'blue' | 'purple' | 'orange' | 'red'

const terminalStyles = {
  classic: 'Classic Terminal',
  vscode: 'VS Code Style',
  neon: 'Neon Interface',
  matrix: 'Matrix Style',
  hackerman: 'Hacker Interface'
}

const colorSchemes = {
  green: {
    name: 'Classic Green',
    bg: 'bg-black',
    primary: 'text-green-400',
    secondary: 'text-green-300',
    accent1: 'text-green-500',
    accent2: 'text-emerald-400',
    gradient: 'from-green-400 to-emerald-400',
    border: 'border-green-500/30',
    containerBg: 'bg-green-500/5',
    prompt: 'text-green-300'
  },
  blue: {
    name: 'Cyber Blue',
    bg: 'bg-slate-950',
    primary: 'text-blue-400',
    secondary: 'text-blue-300',
    accent1: 'text-cyan-400',
    accent2: 'text-sky-400',
    gradient: 'from-blue-400 to-cyan-400',
    border: 'border-blue-500/30',
    containerBg: 'bg-blue-500/5',
    prompt: 'text-blue-300'
  },
  purple: {
    name: 'Cyberpunk Purple',
    bg: 'bg-purple-950',
    primary: 'text-purple-400',
    secondary: 'text-purple-300',
    accent1: 'text-violet-400',
    accent2: 'text-fuchsia-400',
    gradient: 'from-purple-400 to-fuchsia-400',
    border: 'border-purple-500/30',
    containerBg: 'bg-purple-500/5',
    prompt: 'text-purple-300'
  },
  orange: {
    name: 'Hacker Orange',
    bg: 'bg-orange-950',
    primary: 'text-orange-400',
    secondary: 'text-orange-300',
    accent1: 'text-yellow-400',
    accent2: 'text-amber-400',
    gradient: 'from-orange-400 to-amber-400',
    border: 'border-orange-500/30',
    containerBg: 'bg-orange-500/5',
    prompt: 'text-orange-300'
  },
  red: {
    name: 'Matrix Red',
    bg: 'bg-red-950',
    primary: 'text-red-400',
    secondary: 'text-red-300',
    accent1: 'text-pink-400',
    accent2: 'text-rose-400',
    gradient: 'from-red-400 to-pink-400',
    border: 'border-red-500/30',
    containerBg: 'bg-red-500/5',
    prompt: 'text-red-300'
  }
}

export default function ModernTerminal() {
  const [currentStyle, setCurrentStyle] = useState<TerminalStyle>('classic')
  const [currentColor, setCurrentColor] = useState<ColorScheme>('green')
  
  const currentScheme = colorSchemes[currentColor]

  const renderStyle = () => {
    switch (currentStyle) {
      case 'classic':
        return <ClassicTerminal scheme={currentScheme} />
      case 'vscode':
        return <VSCodeTerminal scheme={currentScheme} />
      case 'neon':
        return <NeonTerminal scheme={currentScheme} />
      case 'matrix':
        return <MatrixTerminal scheme={currentScheme} />
      case 'hackerman':
        return <HackerTerminal scheme={currentScheme} />
      default:
        return <ClassicTerminal scheme={currentScheme} />
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Enhanced Control Panel */}
      <div className="fixed top-20 left-4 z-40 bg-black/95 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 shadow-lg max-w-xs">
        <div className="text-sm font-semibold text-green-400 mb-3">Modern Terminal</div>
        
        {/* Style Selector */}
        <div className="mb-4">
          <div className="text-xs font-medium text-green-300 mb-2">Terminal Style:</div>
          <div className="grid grid-cols-1 gap-1">
            {Object.entries(terminalStyles).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCurrentStyle(key as TerminalStyle)}
                className={`text-left px-2 py-1 rounded text-xs transition-colors ${
                  currentStyle === key
                    ? 'bg-green-600 text-black'
                    : 'bg-black/50 text-green-400 hover:bg-green-500/20'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selector */}
        <div>
          <div className="text-xs font-medium text-green-300 mb-2">Color Theme:</div>
          <div className="grid grid-cols-1 gap-1">
            {Object.entries(colorSchemes).map(([key, scheme]) => (
              <button
                key={key}
                onClick={() => setCurrentColor(key as ColorScheme)}
                className={`text-left px-2 py-1 rounded text-xs transition-colors ${
                  currentColor === key
                    ? 'bg-green-600 text-black'
                    : 'bg-black/50 text-green-400 hover:bg-green-500/20'
                }`}
              >
                {scheme.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-green-500/30">
          <div className="text-xs text-green-400">
            💻 25 modern terminal styles!
          </div>
        </div>
      </div>

      {renderStyle()}
    </div>
  )
}

// Classic Terminal
function ClassicTerminal({ scheme }: { scheme: any }) {
  const [currentText, setCurrentText] = useState('')
  const fullText = 'Assem Sobhy'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setCurrentText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className={`min-h-screen ${scheme.bg} ${scheme.primary} font-mono p-8 transition-all duration-1000`}>
      <div className="max-w-5xl mx-auto">
        {/* Terminal Header with Profile */}
        <div className={`border ${scheme.border} rounded-xl p-6 mb-8 smooth-fade-in ${scheme.containerBg} backdrop-blur-sm`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className={`ml-4 ${scheme.prompt} text-lg`}>Terminal - assem@portfolio</span>
            </div>
            <ProfilePhoto size="sm" />
          </div>
          
          <div className="space-y-2">
            <div className="flex">
              <span className={scheme.secondary}>assem@portfolio:~$</span>
              <span className="ml-2">whoami</span>
            </div>
            <div className={`${scheme.primary} smooth-slide-right delay-300 text-2xl font-bold`}>
              {currentText}
              {currentText.length < fullText.length && <span className="animate-pulse">|</span>}
            </div>
            <div className={`${scheme.accent1} smooth-slide-right delay-500`}>
              Developer & Security Engineer
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className={`border ${scheme.border} ${scheme.containerBg} rounded-xl p-6 smooth-slide-left delay-700 hover:scale-105 transition-transform duration-300`}>
            <div className={scheme.secondary}>assem@portfolio:~$ cat skills.txt</div>
            <div className="ml-4 mt-4 space-y-2">
              <div className={`flex items-center ${scheme.primary}`}>
                <span className={`w-3 h-3 bg-gradient-to-r ${scheme.gradient} rounded-full mr-4`}></span>
                Web Development: ████████████ 95%
              </div>
              <div className={`flex items-center ${scheme.accent1}`}>
                <span className={`w-3 h-3 bg-gradient-to-r ${scheme.gradient} rounded-full mr-4`}></span>
                Linux Administration: ██████████ 90%
              </div>
              <div className={`flex items-center ${scheme.accent2}`}>
                <span className={`w-3 h-3 bg-gradient-to-r ${scheme.gradient} rounded-full mr-4`}></span>
                Cybersecurity: ████████████ 95%
              </div>
            </div>
          </div>

          <div className={`border ${scheme.border} ${scheme.containerBg} rounded-xl p-6 smooth-slide-right delay-900 hover:scale-105 transition-transform duration-300`}>
            <div className={scheme.secondary}>assem@portfolio:~$ ls -la projects/</div>
            <div className={`ml-4 mt-4 ${scheme.primary} space-y-1`}>
              <div className="hover:scale-105 transition-transform cursor-pointer">drwxr-xr-x 5 assem assem 4096 React-Applications/</div>
              <div className="hover:scale-105 transition-transform cursor-pointer">drwxr-xr-x 3 assem assem 4096 Security-Tools/</div>
              <div className="hover:scale-105 transition-transform cursor-pointer">drwxr-xr-x 4 assem assem 4096 Linux-Scripts/</div>
              <div className="hover:scale-105 transition-transform cursor-pointer">-rw-r--r-- 1 assem assem 1024 portfolio.md</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className={`border ${scheme.border} ${scheme.containerBg} rounded-xl p-6 smooth-fade-in delay-1100 hover:scale-105 transition-transform duration-300`}>
          <div className={scheme.secondary}>assem@portfolio:~$ echo "Contact Information"</div>
          <div className={`ml-4 mt-4 ${scheme.primary} space-y-2`}>
            <div>📧 Email: contact@assem.me</div>
            <div>🌍 Location: Remote/On-site Available</div>
            <div>💼 Status: Available for opportunities</div>
            <div>⚡ Response Time: 24 hours</div>
          </div>
        </div>

        <div className="flex items-center mt-8 smooth-zoom-in delay-1300">
          <span className={scheme.secondary}>assem@portfolio:~$</span>
          <span className={`ml-2 ${scheme.primary}`}>./connect.sh</span>
          <span className="ml-2 animate-pulse">_</span>
        </div>
      </div>
    </main>
  )
}

// VS Code Style Terminal
function VSCodeTerminal({ scheme }: { scheme: any }) {
  return (
    <main className={`min-h-screen ${scheme.bg} ${scheme.primary} font-mono transition-all duration-1000`}>
      <div className="max-w-6xl mx-auto p-8">
        {/* VS Code Interface */}
        <div className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
          {/* VS Code Header */}
          <div className="bg-slate-700 px-6 py-3 flex items-center justify-between smooth-slide-top">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-300">assem-portfolio.ts</span>
              <ProfilePhoto size="sm" />
            </div>
            <div className="text-gray-400 text-sm">Node.js Terminal</div>
          </div>

          {/* VS Code Content */}
          <div className="p-8 space-y-6">
            <div className="smooth-fade-in delay-300">
              <span className={scheme.accent1}>const</span>
              <span className={scheme.primary}> developer = </span>
              <span className="text-yellow-400">{`"Assem Sobhy"`}</span>
            </div>

            <div className="smooth-fade-in delay-500">
              <span className={scheme.accent1}>const</span>
              <span className={scheme.primary}> profile = </span>
              <span className={scheme.accent2}>&#123;</span>
            </div>
            
            <div className={`ml-6 space-y-2 ${scheme.primary} smooth-slide-right delay-700`}>
              <div>
                <span className={scheme.accent1}>name</span>: 
                <span className="text-yellow-400"> "Assem Sobhy"</span>,
              </div>
              <div>
                <span className={scheme.accent1}>role</span>: 
                <span className="text-yellow-400"> "Developer & Security Engineer"</span>,
              </div>
              <div>
                <span className={scheme.accent1}>skills</span>: [
              </div>
              <div className="ml-4 space-y-1">
                <div><span className="text-yellow-400">"Web Development"</span>,</div>
                <div><span className="text-yellow-400">"Linux Administration"</span>,</div>
                <div><span className="text-yellow-400">"Cybersecurity"</span></div>
              </div>
              <div>],</div>
              <div>
                <span className={scheme.accent1}>experience</span>: 
                <span className={scheme.accent2}> "5+ years"</span>,
              </div>
              <div>
                <span className={scheme.accent1}>availability</span>: 
                <span className="text-green-400"> true</span>
              </div>
            </div>

            <div className="smooth-fade-in delay-900">
              <span className={scheme.accent2}>&#125;</span>
            </div>

            <div className="smooth-fade-in delay-1100">
              <span className={scheme.primary}>console.log</span>
              <span className="text-gray-300">(</span>
              <span className="text-yellow-400">`Contact: contact@assem.me`</span>
              <span className="text-gray-300">)</span>
            </div>

            <div className={`border-t ${scheme.border} pt-6 mt-8 smooth-zoom-in delay-1300`}>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className={`text-3xl ${scheme.accent1} font-bold mb-2`}>5+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl ${scheme.accent2} font-bold mb-2`}>50+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl ${scheme.primary} font-bold mb-2`}>24/7</div>
                  <div className="text-gray-400 text-sm">Availability</div>
                </div>
              </div>
            </div>

            <div className="flex items-center mt-8 smooth-fade-in delay-1500">
              <span className={scheme.accent1}>&gt; </span>
              <span className="animate-pulse ml-2">_</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Neon Interface
function NeonTerminal({ scheme }: { scheme: any }) {
  return (
    <main className={`min-h-screen ${scheme.bg} ${scheme.primary} font-mono relative overflow-hidden transition-all duration-1000`}>
      {/* Neon Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(${scheme.primary.replace('text-', 'rgba(')} 1px, transparent 1px),
            linear-gradient(90deg, ${scheme.primary.replace('text-', 'rgba(')} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Neon Header */}
          <div className="text-center mb-12 smooth-fade-in">
            <div className="flex items-center justify-center mb-8">
              <ProfilePhoto size="xl" className="neon-glow" />
            </div>
            <div className={`text-6xl font-bold mb-6 ${scheme.primary} neon-text`}>
              ASSEM SOBHY
            </div>
            <div className={`text-2xl ${scheme.accent1} neon-text`}>
              &gt; DEVELOPER &amp; SECURITY ENGINEER &lt;
            </div>
            <div className={`${scheme.primary} mt-8 animate-pulse`}>
              [████████████████████████████████████████] LOADED
            </div>
          </div>

          {/* Neon Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`border-2 ${scheme.border} ${scheme.containerBg} p-8 rounded-lg neon-box smooth-slide-left delay-300`}>
              <div className={`${scheme.accent1} text-xl mb-4 neon-text`}>&gt; WEB_DEV.EXE</div>
              <div className={`${scheme.primary} space-y-2`}>
                <div>├─ React.js</div>
                <div>├─ Next.js</div>
                <div>├─ TypeScript</div>
                <div>└─ [OPTIMIZED]</div>
              </div>
            </div>

            <div className={`border-2 ${scheme.border} ${scheme.containerBg} p-8 rounded-lg neon-box smooth-slide-bottom delay-500`}>
              <div className={`${scheme.accent1} text-xl mb-4 neon-text`}>&gt; LINUX_SYS.EXE</div>
              <div className={`${scheme.primary} space-y-2`}>
                <div>├─ Server_Management</div>
                <div>├─ Automation</div>
                <div>├─ Infrastructure</div>
                <div>└─ [ONLINE]</div>
              </div>
            </div>

            <div className={`border-2 ${scheme.border} ${scheme.containerBg} p-8 rounded-lg neon-box smooth-slide-right delay-700`}>
              <div className={`${scheme.accent1} text-xl mb-4 neon-text`}>&gt; SECURITY.EXE</div>
              <div className={`${scheme.primary} space-y-2`}>
                <div>├─ Penetration_Testing</div>
                <div>├─ Vulnerability_Scan</div>
                <div>├─ Security_Audit</div>
                <div>└─ [SECURE]</div>
              </div>
            </div>
          </div>

          {/* Neon Footer */}
          <div className="text-center smooth-zoom-in delay-900">
            <div className={`${scheme.accent1} mb-6 neon-text text-xl`}>
              &gt; INITIATE_CONNECTION? [Y/N]
            </div>
            <button className={`px-8 py-4 border-2 ${scheme.border} ${scheme.primary} bg-transparent neon-button hover:${scheme.containerBg} transition-all duration-300 font-mono text-lg`}>
              [Y] CONNECT_NOW
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
        }
        .neon-box {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.1);
        }
        .neon-button:hover {
          box-shadow: 0 0 30px currentColor;
        }
        .neon-glow {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </main>
  )
}

// Matrix Terminal (keeping this modern)
function MatrixTerminal({ scheme }: { scheme: any }) {
  return (
    <main className={`min-h-screen ${scheme.bg} ${scheme.primary} font-mono overflow-hidden relative transition-all duration-1000`}>
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className="absolute text-xs animate-pulse" style={{ 
            left: `${i * 7}%`, 
            animationDelay: `${i * 200}ms`,
            top: `${Math.random() * 100}%`
          }}>
            {Array.from({ length: 25 }, (_, j) => (
              <div key={j} className="mb-1">
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Matrix Header */}
          <div className="text-center mb-12 smooth-fade-in">
            <div className="flex items-center justify-center mb-8">
              <ProfilePhoto size="xl" />
            </div>
            <div className={`text-5xl font-bold mb-6 ${scheme.secondary} glitch`}>
              ASSEM.SOBHY.EXE
            </div>
            <div className={`text-xl ${scheme.accent1} mb-8`}>
              &gt; NEURAL_INTERFACE_LOADED...
            </div>
            <div className={`${scheme.primary} animate-pulse`}>
              [████████████████████████████████████████] 100%
            </div>
          </div>

          {/* Matrix Interface */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`border ${scheme.border} ${scheme.containerBg} p-6 backdrop-blur hover:border-opacity-100 transition-all duration-300 smooth-slide-left delay-300`}>
              <div className={`${scheme.secondary} text-lg mb-4`}>&gt; WEB_DEVELOPMENT.dll</div>
              <div className={`${scheme.primary} text-sm space-y-1`}>
                <div>├── React.js [LOADED]</div>
                <div>├── Next.js [ACTIVE]</div>
                <div>├── TypeScript [RUNNING]</div>
                <div>└── [STATUS: OPERATIONAL]</div>
              </div>
            </div>

            <div className={`border ${scheme.border} ${scheme.containerBg} p-6 backdrop-blur hover:border-opacity-100 transition-all duration-300 smooth-slide-bottom delay-500`}>
              <div className={`${scheme.secondary} text-lg mb-4`}>&gt; LINUX_ADMIN.sys</div>
              <div className={`${scheme.primary} text-sm space-y-1`}>
                <div>├── System_Control [ONLINE]</div>
                <div>├── Automation [ENABLED]</div>
                <div>├── Monitoring [ACTIVE]</div>
                <div>└── [STATUS: SECURE]</div>
              </div>
            </div>

            <div className={`border ${scheme.border} ${scheme.containerBg} p-6 backdrop-blur hover:border-opacity-100 transition-all duration-300 smooth-slide-right delay-700`}>
              <div className={`${scheme.secondary} text-lg mb-4`}>&gt; CYBERSEC.exe</div>
              <div className={`${scheme.primary} text-sm space-y-1`}>
                <div>├── Firewall [PROTECTED]</div>
                <div>├── Scanner [MONITORING]</div>
                <div>├── Audit [COMPLETE]</div>
                <div>└── [STATUS: MAXIMUM]</div>
              </div>
            </div>
          </div>

          {/* Matrix Connection */}
          <div className="text-center smooth-zoom-in delay-900">
            <div className={`${scheme.secondary} mb-6 text-lg`}>
              &gt; ESTABLISH_NEURAL_LINK? [Y/N]
            </div>
            <button className={`px-8 py-4 border ${scheme.border} ${scheme.primary} hover:${scheme.containerBg} transition-all duration-300 font-mono`}>
              [Y] JACK_IN_NOW
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glitch {
          animation: glitch 2s infinite;
        }
        @keyframes glitch {
          0%, 90%, 100% { transform: translate(0); }
          10% { transform: translate(-2px, 2px); }
          20% { transform: translate(2px, -2px); }
          30% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          50% { transform: translate(-2px, 2px); }
          60% { transform: translate(2px, -2px); }
          70% { transform: translate(-2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
      `}</style>
    </main>
  )
}

// Hacker Interface (modern)
function HackerTerminal({ scheme }: { scheme: any }) {
  return (
    <main className={`min-h-screen ${scheme.bg} ${scheme.primary} font-mono p-6 overflow-hidden relative transition-all duration-1000`}>
      {/* Binary Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="text-xs leading-none overflow-hidden">
          {Array.from({ length: 60 }, (_, i) => (
            <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 50}ms` }}>
              {Array.from({ length: 100 }, () => 
                Math.random() > 0.5 ? '1' : '0'
              ).join('')}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Hacker Header */}
        <div className="text-center mb-12 smooth-fade-in">
          <div className="flex items-center justify-center mb-8">
            <ProfilePhoto size="xl" />
          </div>
          <div className={`text-4xl font-bold ${scheme.accent1} mb-4 glitch-text`}>
            [INFILTRATING_MAINFRAME...]
          </div>
          <div className={`${scheme.primary} text-lg mb-8`}>
            IDENTITY: ASSEM_SOBHY | CLEARANCE: MAXIMUM
          </div>
          <div className={`${scheme.secondary} text-sm`}>
            STATUS: ONLINE | ENCRYPTED: AES-256 | PROXY: ACTIVE
          </div>
        </div>

        {/* Hacker Grid */}
        <div className="max-w-6xl mx-auto space-y-8">
          {/* System Status */}
          <div className={`border ${scheme.border} ${scheme.containerBg} p-6 rounded smooth-slide-top delay-300`}>
            <div className={`${scheme.secondary} mb-4 text-lg`}>[SYSTEM_STATUS]</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <div className={scheme.primary}>FIREWALL:</div>
                <div className={scheme.accent1}>IMPENETRABLE</div>
              </div>
              <div>
                <div className={scheme.primary}>ENCRYPTION:</div>
                <div className={scheme.accent1}>QUANTUM-GRADE</div>
              </div>
              <div>
                <div className={scheme.primary}>DETECTION:</div>
                <div className={scheme.accent1}>STEALTH_MODE</div>
              </div>
              <div>
                <div className={scheme.primary}>ACCESS:</div>
                <div className={scheme.accent1}>AUTHORIZED</div>
              </div>
            </div>
          </div>

          {/* Skill Matrix */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className={`border ${scheme.border} ${scheme.containerBg} p-6 rounded hover:border-opacity-100 transition-all duration-300 smooth-slide-left delay-500`}>
              <div className={`${scheme.secondary} mb-4 text-lg`}>[WEB_EXPLOITATION]</div>
              <div className="space-y-2 text-sm">
                <div className={scheme.primary}>→ React.js Framework_Mastery</div>
                <div className={scheme.primary}>→ Next.js Performance_Injection</div>
                <div className={scheme.primary}>→ TypeScript Security_Layer</div>
                <div className={`${scheme.accent1} animate-pulse text-xs`}>WEAPONIZED: ████████████ 95%</div>
              </div>
            </div>

            <div className={`border ${scheme.border} ${scheme.containerBg} p-6 rounded hover:border-opacity-100 transition-all duration-300 smooth-slide-bottom delay-700`}>
              <div className={`${scheme.secondary} mb-4 text-lg`}>[SYSTEM_INFILTRATION]</div>
              <div className="space-y-2 text-sm">
                <div className={scheme.primary}>→ Linux Root_Access_Protocol</div>
                <div className={scheme.primary}>→ Server Network_Manipulation</div>
                <div className={scheme.primary}>→ Infrastructure_Automation</div>
                <div className={`${scheme.accent1} animate-pulse text-xs`}>COMPROMISED: ██████████ 90%</div>
              </div>
            </div>

            <div className={`border ${scheme.border} ${scheme.containerBg} p-6 rounded hover:border-opacity-100 transition-all duration-300 smooth-slide-right delay-900`}>
              <div className={`${scheme.secondary} mb-4 text-lg`}>[CYBER_WARFARE]</div>
              <div className="space-y-2 text-sm">
                <div className={scheme.primary}>→ Penetration Testing_Protocol</div>
                <div className={scheme.primary}>→ Vulnerability Scanner_Suite</div>
                <div className={scheme.primary}>→ Security Audit_Engine</div>
                <div className={`${scheme.accent1} animate-pulse text-xs`}>ARMED: ████████████ 95%</div>
              </div>
            </div>
          </div>

          {/* Mission Briefing */}
          <div className={`border ${scheme.border} ${scheme.containerBg} p-8 rounded smooth-zoom-in delay-1100`}>
            <div className={`${scheme.secondary} mb-6 text-xl`}>[MISSION_BRIEFING]</div>
            <div className={`${scheme.primary} space-y-3 text-lg leading-relaxed`}>
              <div><strong>OBJECTIVE:</strong> Secure digital infrastructure and neutralize cyber threats</div>
              <div><strong>SPECIALIZATION:</strong> Full-stack development with military-grade security protocols</div>
              <div><strong>DEPLOYMENT:</strong> Ready for immediate engagement</div>
              <div><strong>CONTACT_PROTOCOL:</strong> contact@assem.me | SECURED_CHANNEL_AVAILABLE</div>
            </div>
          </div>

          {/* Command Interface */}
          <div className="smooth-fade-in delay-1300">
            <div className="flex items-center text-lg">
              <span className={scheme.secondary}>root@hacker-terminal:~#</span>
              <span className={`ml-3 ${scheme.primary}`}>execute_contact_protocol.sh</span>
              <span className="ml-3 animate-pulse">|</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glitch-text {
          animation: glitch-hack 1.5s infinite;
        }
        @keyframes glitch-hack {
          0%, 90%, 100% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); color: #00ff00; }
          40% { transform: translate(1px, -1px); color: #ff0000; }
          60% { transform: translate(-1px, 1px); color: #0000ff; }
          80% { transform: translate(1px, -1px); color: #ff0000; }
        }
      `}</style>
    </main>
  )
}