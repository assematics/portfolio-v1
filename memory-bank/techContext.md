# Technical Context

## Core Technology Stack

### Frontend Framework
- **Next.js 13+** (App Router)
  - React 18+ with Server Components
  - Built-in optimizations (images, fonts, bundles)
  - File-based routing system
  - API routes for backend functionality

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

### Component Library
- **shadcn/ui**
  - Copy-paste component library
  - Built on Radix UI primitives
  - Fully customizable with Tailwind
  - TypeScript support

### Animation & Interaction
- **Framer Motion**
  - Declarative animations
  - Scroll-triggered animations
  - Page transitions
  - Performance optimized

### Content Management
- **MDX**
  - Markdown with React components
  - Frontmatter metadata support
  - Syntax highlighting for code blocks
  - Dynamic component imports

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

### Build & Deployment
- **Vercel** (Primary hosting platform)
  - Zero-config deployment
  - Automatic HTTPS
  - Edge functions
  - Analytics integration

- **Netlify** (Backup option)
  - Git-based deployment
  - Form handling
  - Edge functions
  - Branch previews

### Domain & DNS
- **Cloudflare** - Domain management and DNS
- **Custom domain**: assem.me
- **SSL/TLS**: Automatic certificate management

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