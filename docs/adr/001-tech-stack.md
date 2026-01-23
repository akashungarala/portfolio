# ADR 001: Technology Stack Selection

## Status
Accepted

## Context
Building a personal portfolio for a Senior Backend Engineer that needs to:
- Showcase distributed systems expertise
- Demonstrate modern development practices
- Be fast, accessible, and SEO-optimized
- Support future features (GitHub integration, blog, contact form)

## Decision

### Frontend Framework: Next.js 15 (App Router)
- Server Components for optimal performance
- Built-in ISR for data freshness
- Excellent SEO support
- Industry standard for React applications

### Styling: Tailwind CSS + shadcn/ui
- Utility-first approach for rapid development
- shadcn/ui provides accessible, customizable components
- No runtime CSS-in-JS overhead

### Linting/Formatting: Biome
- Faster than ESLint + Prettier
- Unified tooling (lint + format)
- Modern alternative showing we stay current

### Testing: Vitest + React Testing Library
- Faster than Jest
- Better TypeScript support
- Compatible with Vite ecosystem

### CI/CD: GitHub Actions + Vercel
- GitHub Actions for full pipeline control
- Vercel for optimal Next.js deployment
- Docker builds to demonstrate DevOps skills

## Consequences

### Positive
- Modern, performant stack
- Demonstrates current best practices
- Excellent developer experience
- Good documentation and community support

### Negative
- Tailwind CSS learning curve for CSS purists
- Biome is newer, less ecosystem support than ESLint

## References
- [Next.js Documentation](https://nextjs.org/docs)
- [Biome Documentation](https://biomejs.dev)
- [shadcn/ui](https://ui.shadcn.com)
