FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY astro.config.mjs astro.config.mjs
COPY tsconfig.json tsconfig.json
COPY src ./src
COPY public ./public

RUN npx astro build

# El sitio es 100% estático: no necesitamos Node en runtime.
FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx-security-headers.conf /etc/nginx/snippets/security-headers.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
