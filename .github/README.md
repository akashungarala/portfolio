# GitHub Configuration

## Workflows

### ci.yml
Runs on every PR:
- Lint (Biome)
- Type check (tsc)
- Unit tests (Vitest)
- Build (Next.js)

### release.yml
Runs on merge to main:
- Semantic versioning
- Changelog generation
- Docker build
- Push to GCR (on release tags only)
- Deploy to Vercel

### preview.yml
Runs on PR:
- Deploy preview to Vercel
- Comment with preview URL

## Required Secrets

- `VERCEL_TOKEN` - Vercel API token
- `VERCEL_ORG_ID` - Vercel organization ID
- `VERCEL_PROJECT_ID` - Vercel project ID
- `GCP_PROJECT_ID` - Google Cloud project ID
- `GCP_SA_KEY` - GCP service account JSON (base64)
