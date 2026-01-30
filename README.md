# Akash Ungarala - Portfolio

Personal portfolio website showcasing my work as a Senior Software Engineer specializing in distributed systems and backend development.

**Live Site:** [akashungarala.com](https://akashungarala.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Linting:** Biome
- **Testing:** Vitest + React Testing Library

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build
```

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── layout/       # Header, Footer
│   ├── sections/     # Page sections (Hero, About, etc.)
│   ├── motion/       # Animation components
│   └── ui/           # Base UI components
├── content/          # YAML content configuration
│   └── profile.yaml  # All portfolio content
└── lib/              # Utilities and types
```

## Content Management

All portfolio content is managed through `src/content/profile.yaml`:
- Personal information
- Work experience
- Education
- Projects
- Skills and expertise

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm test` | Run tests in watch mode |
| `pnpm test:run` | Run tests once |
| `pnpm lint` | Run Biome linting |
| `pnpm lint:fix` | Fix linting issues |

## License

MIT
