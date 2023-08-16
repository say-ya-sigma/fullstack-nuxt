import { hello } from './hello'
import { router } from '.'

export const appRouter = router({ hello })

export type AppRouter = typeof appRouter
