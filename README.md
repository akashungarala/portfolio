# Akash Ungarala - Portfolio

A modern, performant portfolio website built with Next.js 16, showcasing my work as a Senior Software Engineer specializing in distributed systems and backend development.

**Live Site:** [akashungarala.com](https://akashungarala.com)

## Features

- **Modern Tech Stack:** Built with Next.js 16 (App Router), React 19, and TypeScript
- **Dark/Light Mode:** System preference detection with manual toggle
- **Smooth Scrolling:** Lenis physics-based smooth scroll
- **Animations:** Framer Motion for elegant page transitions and effects
- **Contact Form:** Integrated email functionality using Resend API
- **SEO Optimized:** Complete meta tags, Open Graph, sitemap, and robots.txt
- **Fully Tested:** Comprehensive test coverage with Vitest and React Testing Library
- **Docker Ready:** Multi-stage Docker builds for production deployment
- **CI/CD:** Automated testing, linting, and semantic versioning with GitHub Actions

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion 12 + Lenis smooth scroll
- **Email:** Resend API
- **Linting/Formatting:** Biome 2.3
- **Testing:** Vitest 4 + React Testing Library
- **Deployment:** Docker + Vercel
- **CI/CD:** GitHub Actions + Semantic Release

## Getting Started

### Prerequisites

- Node.js 22 or higher
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/akashungarala/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Copy environment variables (optional - see Configuration section)
cp .env.example .env.local
```

### Development

```bash
# Run development server (http://localhost:3000)
pnpm dev

# Run tests in watch mode
pnpm test

# Run linting
pnpm lint

# Type checking
pnpm typecheck
```

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Configuration

### Environment Variables

The portfolio works without any environment variables for basic functionality. However, the contact form requires the Resend API key.

Copy `.env.example` to `.env.local` and configure:

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | No | Base URL for SEO (default: https://akashungarala.com) |
| `RESEND_API_KEY` | For contact form | API key from [resend.com](https://resend.com) |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID |

### Content Management

All portfolio content is centralized in `src/content/profile.yaml`. Edit this file to update:

- Personal information and contact details
- Hero section content
- About section and core values
- Work experience and education
- Projects (work and personal)
- Skills and expertise
- Social media links

## Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/contact/        # Contact form API endpoint
│   │   ├── contact/            # Contact page
│   │   ├── privacy/            # Privacy policy
│   │   ├── projects/           # Projects listing and detail pages
│   │   ├── layout.tsx          # Root layout with providers
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Hero, About, Experience, FeaturedProjects, Contact
│   │   ├── motion/             # FadeIn, StaggerChildren animations
│   │   ├── providers/          # ThemeProvider, SmoothScrollProvider
│   │   └── ui/                 # Base UI components
│   ├── content/
│   │   └── profile.yaml        # Single source of truth for all content
│   ├── lib/
│   │   ├── get-content.ts      # YAML content loader
│   │   ├── types.ts            # TypeScript interfaces
│   │   └── utils.ts            # Utility functions
│   └── types/                  # Additional type definitions
├── __tests__/                  # Test files
│   ├── components/             # Component tests
│   ├── pages/                  # Page tests
│   ├── lib/                    # Utility tests
│   └── fixtures/               # Mock data
├── public/                     # Static assets
├── .github/workflows/          # CI/CD configuration
├── Dockerfile                  # Docker configuration
├── docker-compose.yml          # Docker Compose setup
└── package.json
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server on port 3000 |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm test` | Run tests in watch mode |
| `pnpm test:run` | Run tests once |
| `pnpm test:coverage` | Generate test coverage report |
| `pnpm lint` | Check code quality with Biome |
| `pnpm lint:fix` | Auto-fix linting issues |
| `pnpm format` | Format code with Biome |
| `pnpm typecheck` | Run TypeScript type checking |

## Docker Deployment

Build and run with Docker:

```bash
# Build Docker image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio

# Or use Docker Compose
docker-compose up
```

The Docker image uses multi-stage builds for optimal size and security, running as a non-root user.

## Testing

Tests are written with Vitest and React Testing Library:

```bash
# Run all tests
pnpm test:run

# Watch mode
pnpm test

# Coverage report
pnpm test:coverage
```

Test coverage includes:
- Component rendering and behavior
- Page integration tests
- Utility function tests
- Accessibility checks

## CI/CD

The project uses GitHub Actions for continuous integration:

- **Code Quality:** Biome linting and TypeScript type checking
- **Testing:** Automated test execution on every push
- **Build Verification:** Production build validation
- **Semantic Release:** Automated versioning and changelog generation

## Contributing

This is a personal portfolio project, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

MIT License - feel free to use this portfolio as inspiration for your own!

## Contact

- **Email:** [akash.ungarala@gmail.com](mailto:akash.ungarala@gmail.com)
- **LinkedIn:** [linkedin.com/in/akashungarala](https://linkedin.com/in/akashungarala)
- **GitHub:** [github.com/akashungarala](https://github.com/akashungarala)

---

Built with Next.js, TypeScript, and Tailwind CSS
