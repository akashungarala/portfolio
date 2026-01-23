# Data

Static JSON data files for portfolio content.

## Schema

### personal.json
Personal information: name, title, tagline, social links.

### experience.json
Work history array with company, role, dates, and achievements.

### education.json
Education entries with institution, degree, and dates.

### projects.json
Projects array with title, description, tech stack, and links.

### skills.json
Tech stack organized by category.

## Updating Content

1. Edit the relevant JSON file
2. Ensure schema matches TypeScript types in `src/types/`
3. Run `pnpm typecheck` to verify
