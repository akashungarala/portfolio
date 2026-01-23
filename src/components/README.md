# Components

Reusable UI components organized by category.

## Structure

- `layout/` - Layout components (Header, Footer, MobileMenu, PageContainer)
- `sections/` - Page section components (Hero, About, Experience, etc.)
- `ui/` - Base UI components (Button, Card, Badge, etc.) - uses shadcn/ui
- `mdx/` - MDX-specific components (Mermaid, CodeBlock, Callout)
- `motion/` - Animation wrapper components (FadeIn, SlideIn, etc.)

## Naming Conventions

- PascalCase for component files (e.g., `Header.tsx`)
- Component name should match file name
- Co-locate tests in `__tests__/components/`
