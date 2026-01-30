# GitHub Configuration

## Workflows

### ci.yml
Runs on every PR and push to main:
- Lint (Biome)
- Type check (tsc)
- Unit tests (Vitest)
- Build (Next.js)

### release.yml
Runs on merge to main:
- Semantic versioning
- Changelog generation
