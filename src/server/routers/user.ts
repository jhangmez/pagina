import { router, publicProcedure, protectedProcedure } from '../trpc'
import type { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { prisma } from '@lib/prisma'
export const userRouter = router({
  saludo: publicProcedure.query(() => 'Hola usuario')
})
