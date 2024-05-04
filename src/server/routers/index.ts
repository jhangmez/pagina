import { publicProcedure, router } from '../trpc'
import { userRouter } from '../routers/user'

export const appRouter = router({
  greeting: publicProcedure.query(() => 'Hola tRPC v10!'),
  user: userRouter
})
// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter
