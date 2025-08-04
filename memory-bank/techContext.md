# Technical Context

## Core Technology Stack

### Frontend Framework
- **Next.js 14.0.4** (App Router) ✅ IMPLEMENTED
  - React 18+ with Server Components
  - Built-in optimizations (images, fonts, bundles)
  - File-based routing system
  - **LIVE DEPLOYMENT**: https://assem-me.vercel.app/

### Language & Type Safety  
- **TypeScript 5.0+**
  - Strict mode enabled
  - Type-safe props and API responses
  - Enhanced IDE support and error catching

### Styling & UI
- **Tailwind CSS 3.4+**
  - Utility-first CSS framework
  - Built-in responsive design
  - Dark mode support
  - Custom design system configuration

### Custom Component System ✅ IMPLEMENTED
- **UnifiedMenuSystem**: Collapsible menu with Portfolio Studio branding
- **ProfilePhoto**: Smooth 1000ms transitions with grayscale-to-color effect
- **InteractiveGrid**: Mouse-following particles with physics simulation
- **ScrollNavigation**: Animated navigation that responds to scroll
- **EnhancedCard**: Glass morphism effects with backdrop blur
- **StatsCounter**: Animated counters with hover effects

### Animation & Interaction ✅ COMPLETE
- **Custom CSS Animations**: 60fps optimized transitions
  - smooth-slide-top/bottom/left/right
  - smooth-fade-in with delays
  - smooth-zoom-in effects
  - animate-float-up/down/left/right
- **Interactive Canvas**: Real-time mouse tracking with particle system
- **Smooth Transitions**: 1000ms ease-out animations for professional feel

### Portfolio System ✅ COMPLETE
- **115+ Design Combinations**:
  - 5 Screenshot-Inspired Styles (Brooklin, Developer, Artistic, Traditional, Business)
  - 75 Modern combinations (Minimalist, Terminal, Corporate × 25 each)
  - 8 Color schemes including Catppuccin and easy-on-eyes palettes
- **Mobile-First Interface**: Unified menu system with touch-friendly design
- **Real-time Customization**: Live preview and instant style switching

## Development Environment

### Operating System
- **Linux (Fedora 42)** - Primary development environment
- **Node.js 18+** - Runtime environment
- **npm/yarn** - Package management

### Development Tools
- **VS Code/Cursor** - Primary editor
- **ESLint** - Code linting
- **Prettier** - Code formatting  
- **TypeScript** - Type checking
- **Tailwind IntelliSense** - CSS autocomplete

### Build & Deployment ✅ LIVE
- **Vercel** (Primary hosting platform) - **ACTIVE**
  - **Live URL**: https://assem-me.vercel.app/
  - Zero-config deployment with GitHub integration
  - Automatic HTTPS and SSL
  - **Auto-deployment**: Every GitHub push triggers deployment
  - Custom shorter URL configured

- **GitHub Integration** ✅ COMPLETE
  - **Repository**: https://github.com/assematics/portfolio-v1.git
  - Automated CI/CD pipeline
  - Version control with commit history
  - **Authentication**: Personal Access Token configured

### Domain & DNS ✅ CONFIGURED
- **Cloudflare** - Domain management and DNS
- **Custom domain**: assem.me (available for future connection)
- **Current URL**: https://assem-me.vercel.app/ (shorter URL active)
- **Favicon**: Working circular profile photo favicon

## Performance Targets
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Green ratings
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement**: Graceful degradation for older browsers