import { auth } from '@src/auth'

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/v11/context
 */
export async function createContext() {
  const session = await auth()

  return {
    session
  }
}

export type Context = Awaited<ReturnType<typeof createContext>>
