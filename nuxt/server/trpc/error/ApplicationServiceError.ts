import { TRPC_ERROR_CODE_KEY } from "@trpc/server/rpc"

export type ApplicationServiceErrorCode = TRPC_ERROR_CODE_KEY

export class ApplicationServiceError extends Error {
  constructor(message: string, public code: ApplicationServiceErrorCode) {
    super(message)
  }
}
