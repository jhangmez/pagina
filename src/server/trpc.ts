import { initTRPC, TRPCError } from '@trpc/server'
import { Context } from './context'

const t = initTRPC.context<Context>().create()

export const router = t.router

/**
 * Unprotected procedure
 */
export const publicProcedure = t.procedure

/**
 * Protected procedure
 */
export const protectedProcedure = t.procedure.use(function isAuthed(opts) {
  if (!opts.ctx.session?.user?.email) {
    throw new TRPCError({
      code: 'UNAUTHORIZED'
    })
  }
  return opts.next({
    ctx: {
      // Infers the `session` as non-nullable
      session: opts.ctx.session
    }
  })
})
