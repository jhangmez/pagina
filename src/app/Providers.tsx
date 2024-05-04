// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { UwuModeProvider } from '@contexts/uwu'
import { TrpcProvider } from '@contexts/trpc'

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
      <UwuModeProvider>
        <TrpcProvider>{children}</TrpcProvider>
      </UwuModeProvider>
    </NextUIProvider>
  )
}
