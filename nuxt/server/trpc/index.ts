import { initTRPC } from '@trpc/server'
import { PrismaClient } from '@prisma/client'
import { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc'

export const t = initTRPC.create()

export const middleware = t.middleware
export const router = t.router
export const publicProcedure = t.procedure

export const prisma = new PrismaClient()

export type ApplicationServiceErrorCode = TRPC_ERROR_CODE_KEY

export class ApplicationServiceError extends Error {
  constructor(message: string, public code: ApplicationServiceErrorCode) {
    super(message)
  }
}

export type ApplicationServiceResponse<T> = {
  data: T
  error: null
} | {
  data: null
  error: ApplicationServiceError
}