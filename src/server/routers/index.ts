import { publicProcedure, router } from '../trpc'
import { userRouter } from '../routers/user'
import { z } from 'zod'

export const appRouter = router({
  greeting: publicProcedure.query(() => 'Hola tRPC v10!'),
  user: userRouter,
  hello: publicProcedure
    // using zod schema to validate and infer input values
    .input(
      z
        .object({
          text: z.string().nullish()
        })
        .nullish()
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input?.text ?? 'world'}`
      }
    })
})
// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter
