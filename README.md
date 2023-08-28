# Fullstack Nuxt

Nitro+h3ベースの高速なAPIサーバを内包したNuxtテンプレート
 
# Stacks

* Prisma
* tRPC Nuxt
* tRPC
* Nuxt

# Installation

```bash
sudo docker compose up db -d
cp .env.example .env
cd nuxt
pnpm i --frozen-lockfile
pnpm run prisma:push
pnpm run prisma:seed
pnpm run dev
```
