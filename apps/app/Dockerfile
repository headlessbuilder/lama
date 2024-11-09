FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN pnpm install -g turbo
FROM base AS deps
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN pnpm install -g turbo
COPY . . 
RUN turbo prune @llm.report/app --docker
FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=deps /app/out/json/ .
RUN pnpm install --frozen-lockfile
ENV NEXT_TELEMETRY_DISABLED 1
COPY --from=deps /app/out/full/ .
RUN pnpm turbo build --filter=@llm.report/app...
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/apps/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/app/.next/static ./apps/web/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/app/public ./apps/web/public
USER nextjs
EXPOSE 3000
CMD ["node", "apps/app/server.js"]
