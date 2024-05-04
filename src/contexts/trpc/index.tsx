import type { AppRouter } from '@server/routers'
import { httpBatchLink, loggerLink } from '@trpc/client'
import { trpc } from '@src/utils/trpc'
import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'
import { ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function getBaseUrl() {
  if (typeof window !== 'undefined')
    // browser should use relative path
    return ''
  if (process.env.VERCEL_URL)
    // reference for vercel.com
    return `https://${process.env.VERCEL_URL}`
  if (process.env.RENDER_INTERNAL_HOSTNAME)
    // reference for render.com
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`
  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export const TrpcProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error)
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`
          // You can pass any HTTP headers you wish here
          // async headers() {
          //   return {
          //       authorization: getAuthCookie(),
          //   }
          // }
        })
      ]
    })
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}

/**
 * Inference helper for inputs
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>
/**
 * Inference helper for outputs
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>
