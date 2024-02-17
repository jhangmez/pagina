import './globals.css'
import { Providers } from './Providers'
import { Analytics } from '@vercel/analytics/react'
import { Suspense } from 'react'
import Loading from './loading'
import localFont from 'next/font/local'
const myFont = localFont({ src: '/PlusJakartaSans-VariableFont_wght.ttf' })

const shortTitle = 'Portafolio'
const description = 'Portafolio de Jhan Gómez'
const jhangmez = ' | jhangmez'
const title = `${shortTitle}${jhangmez}`
const imageUrl = `https://jhangmez.vercel.app/api/og?title=${shortTitle}&description=${description}`

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    url: 'https://jhangmez.xyz/',
    images: [{ url: imageUrl }]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body
        className={`${myFont.className} selection:bg-light-primary selection:text-light-onPrimary dark:selection:bg-dark-primary dark:selection:text-dark-onPrimary`}
      >
        <Providers>
          <noscript>Página realizada por Jhan Gómez P. @jhangmez</noscript>
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
