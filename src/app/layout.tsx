import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './Providers'
import { Analytics } from '@vercel/analytics/react'
import { Suspense } from 'react'
import Loading from './loading'
import localFont from 'next/font/local'
const myFont = localFont({ src: '/PlusJakartaSans-VariableFont_wght.ttf' })

const title = 'jhangmez | Página'
const description = 'Pagina de jhangmez'

export const metadata: Metadata = {
  title,
  description
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${myFont.className} selection:bg-light-primary selection:text-light-onPrimary dark:selection:bg-dark-primary dark:selection:text-dark-onPrimary`}
      >
        <Providers>
          <noscript>Página realizada por Jhan Gómez P.</noscript>
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
