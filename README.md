This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Install Prisma
npm i @prisma/client@latest
 - initialize prisma and choose a database provider ---> npx prisma init --datasource-provider sqlite
 - for sqlite use "file:./dev.db" as a key for DATABASE_URL 
 - then migrate npx prisma migrate dev --name exampleName
 - create a db.ts file inside a utils folder and paste :
----------------------------------------------------------------------------
 import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ['query'],
    })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
-------------------------------------------------------------------------------
