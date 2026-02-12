# GitHub Branch Protection Setup

This guide explains how to configure branch protection rules for the `main` branch to ensure code quality and prevent accidental changes.

## Recommended Settings

### 1. Navigate to Repository Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Branches**
3. Click **Add branch protection rule**
4. Enter `main` as the branch name pattern

### 2. Configure Protection Rules

#### **Require a pull request before merging**
- ✅ Enable this option
- **Required approvals:** 0 (for solo projects) or 1+ (for team projects)
- ✅ Dismiss stale pull request approvals when new commits are pushed
- ✅ Require review from Code Owners (optional, requires CODEOWNERS file)

#### **Require status checks to pass before merging**
- ✅ Enable this option
- ✅ Require branches to be up to date before merging
- **Required status checks:**
  - `lint` - Biome linting
  - `typecheck` - TypeScript type checking
  - `test` - Vitest test suite
  - `build` - Next.js production build

#### **Require conversation resolution before merging**
- ✅ Enable to ensure all PR comments are addressed

#### **Require signed commits**
- ⚠️ Optional but recommended for enhanced security
- Requires GPG key setup: [GitHub Docs](https://docs.github.com/en/authentication/managing-commit-signature-verification)

#### **Require linear history**
- ✅ Enable to prevent merge commits
- Enforces rebase or squash merging

#### **Require deployments to succeed before merging**
- ⚠️ Optional - useful if you have staging environments

#### **Lock branch**
- ❌ Do not enable (prevents all pushes, including from admins)

#### **Do not allow bypassing the above settings**
- ✅ Enable for maximum protection
- ⚠️ Disable if you need admin override capability

#### **Restrict who can push to matching branches**
- ⚠️ Optional - useful for organizations with multiple contributors

#### **Allow force pushes**
- ❌ Do not enable (prevents history rewriting)

#### **Allow deletions**
- ❌ Do not enable (prevents accidental branch deletion)

### 3. Save Changes

Click **Create** or **Save changes** to apply the protection rules.

## Alternative: Trunk-Based Development (Solo Projects)

For personal projects where you're the only contributor:

### Minimal Protection (Recommended)
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date
- Required checks: `lint`, `typecheck`, `test`, `build`
- ❌ Require pull request reviews (not needed for solo work)

### Direct Commits to Main (Not Recommended)
If you prefer committing directly to `main`:
- ✅ Ensure your pre-commit hooks run linting and tests
- ✅ Rely on CI/CD to catch issues
- ⚠️ Higher risk of breaking changes

## Pre-commit Hooks (Local Protection)

This repository uses Husky for pre-commit hooks:

```json
// .husky/pre-commit
pnpm lint
pnpm typecheck
pnpm test:run
```

### Setup Husky
```bash
# Install dependencies
pnpm install

# Husky will be automatically set up via the prepare script
# Test your hooks
git commit -m "test"
```

## CI/CD Integration

The repository uses GitHub Actions to enforce quality checks:

### `.github/workflows/ci.yml`
```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  quality-checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Lint
        run: pnpm lint

      - name: Type check
        run: pnpm typecheck

      - name: Test
        run: pnpm test:run

      - name: Build
        run: pnpm build
```

## Common Issues

### Status Checks Not Appearing

1. Ensure CI workflow has run at least once
2. Check that workflow job names match required checks
3. Verify GitHub Actions are enabled for the repository

### Can't Merge PR

1. Check all required status checks have passed
2. Ensure branch is up to date with main
3. Verify all conversations are resolved
4. Check if commits are signed (if required)

### Accidentally Locked Out

If you enabled "Do not allow bypassing" and can't merge:

1. Go to Settings → Branches
2. Click **Edit** on the protection rule
3. Temporarily disable the blocking setting
4. Merge your PR
5. Re-enable the protection

## Security Considerations

- **Signed commits:** Prevents impersonation
- **Required reviews:** Catches bugs and security issues
- **Status checks:** Automated quality assurance
- **Linear history:** Easier to audit and revert
- **No force pushes:** Preserves audit trail

## Recommended Workflow

1. Create a feature branch: `git checkout -b feature/new-feature`
2. Make changes and commit: `git commit -m "feat: add new feature"`
3. Push branch: `git push origin feature/new-feature`
4. Create a pull request on GitHub
5. Wait for CI checks to pass
6. (Optional) Request review
7. Squash and merge to main
8. Delete feature branch

## References

- [GitHub Branch Protection Rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [Status Checks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)
- [Husky Documentation](https://typicode.github.io/husky/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Last updated:** February 11, 2026
