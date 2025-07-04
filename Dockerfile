# ────── 1️⃣  BUILD STAGE ───────────────────────────────────────
FROM node:20-alpine AS builder          # light‑weight Node image
WORKDIR /app

# copy only package manifests first, so dependencies are cached
COPY package*.json ./
RUN npm ci                               # reproducible install

# now copy the rest of the project and build
COPY . .
RUN npm run build                        # → /app/build

# ────── 2️⃣  RUN STAGE  (static file server) ───────────────────
FROM node:20-alpine

# small, zero‑config web server for React bundles
RUN npm install -g serve

WORKDIR /app
COPY --from=builder /app/build ./build

ENV NODE_ENV=production
EXPOSE 3000                              # we’ll map this on docker run
CMD ["serve", "-s", "build", "-l", "3000"]
