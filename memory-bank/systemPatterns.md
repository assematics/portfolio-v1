# System Patterns & Architecture

## Architecture Overview
**Modern Static Site Generation** with dynamic capabilities

### Core Architecture Decisions
- **Next.js App Router**: File-based routing, React Server Components
- **TypeScript**: Type safety throughout the application  
- **Tailwind CSS**: Utility-first styling for consistency and performance
- **Component-Based**: Modular, reusable React components
- **Static Generation**: Pre-built pages for performance, dynamic where needed

## Key Technical Patterns

### 1. Performance Optimization
- **Static Site Generation (SSG)** for blog posts and project pages
- **Image Optimization** using Next.js Image component
- **Code Splitting** automatic with App Router
- **Critical CSS** inlined, non-critical deferred
- **Font Optimization** with next/font

### 2. Content Management
- **MDX Integration** for blog posts with React components
- **Frontmatter**: Metadata extraction for posts and projects
- **Dynamic Imports**: Lazy loading for heavy components
- **Asset Management**: Optimized images and media handling

### 3. User Experience
- **Progressive Enhancement**: Works without JavaScript, enhanced with it
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: WCAG 2.1 AA compliance
- **Dark/Light Mode**: System preference detection + manual toggle

### 4. Developer Experience
- **TypeScript**: Strong typing for maintainability
- **ESLint + Prettier**: Code quality and consistency
- **Component Library**: Reusable UI components with shadcn/ui
- **Hot Reload**: Fast development iteration

## Security Patterns
- **Form Validation**: Client + server-side validation
- **Rate Limiting**: Contact form abuse prevention
- **Content Security Policy**: XSS protection
- **Environment Variables**: Sensitive data protection
- **HTTPS Only**: Secure communication

## Deployment Patterns
- **Git-based Deployment**: Automatic deploys from main branch
- **Preview Deployments**: Branch-based previews for testing
- **Edge Functions**: Contact form processing at edge
- **CDN Distribution**: Global content delivery
- **Domain Management**: Cloudflare DNS with Vercel hosting