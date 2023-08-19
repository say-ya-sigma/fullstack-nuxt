import { hello } from './hello'
import { user } from './user'
import { router } from '.'

export const appRouter = router({ hello, user })

export type AppRouter = typeof appRouter
