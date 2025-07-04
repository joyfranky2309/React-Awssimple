# ────── 1️⃣  BUILD STAGE ───────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

# copy only package manifests first, so dependencies are cached
COPY package*.json ./
RUN npm ci

# now copy the rest of the project and build
COPY . .
RUN npm run build

# Install serve globally in builder stage
RUN npm install -g serve

# ────── 2️⃣  RUN STAGE  (static file server) ───────────────────
FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /usr/local/bin/serve /usr/local/bin/serve
COPY --from=builder /usr/local/lib/node_modules/serve /usr/local/lib/node_modules/serve

ENV NODE_ENV=production
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
