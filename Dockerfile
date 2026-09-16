# Stage 1: Dependencies
FROM node:22-alpine AS deps
WORKDIR /app

# Enable pnpm (pinned to match the CI workflow)
RUN corepack enable pnpm && corepack prepare pnpm@10 --activate

# Copy package files
# pnpm-workspace.yaml carries ignoredBuiltDependencies; without it pnpm fails
# with ERR_PNPM_IGNORED_BUILDS for sharp and esbuild.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Stage 2: Build
FROM node:22-alpine AS builder
WORKDIR /app

# Enable pnpm (pinned to match the CI workflow)
RUN corepack enable pnpm && corepack prepare pnpm@10 --activate

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN pnpm build

# Stage 3: Production
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Copy standalone build output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set hostname
ENV HOSTNAME="0.0.0.0"

# Start the server
CMD ["node", "server.js"]
