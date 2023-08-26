import { initTRPC } from '@trpc/server'
import { PrismaClient } from '@prisma/client'

export const t = initTRPC.create()

export const middleware = t.middleware
export const router = t.router
export const publicProcedure = t.procedure

export const prisma = new PrismaClient()
