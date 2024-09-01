import './globals.css'
import { Providers } from './Providers'
import { Analytics } from '@vercel/analytics/react'
import { Suspense } from 'react'
import Loading from './loading'
import localFont from 'next/font/local'
import { Toaster } from 'react-hot-toast'
const myFont = localFont({ src: '/PlusJakartaSans-VariableFont_wght.ttf' })
import { SpeedInsights } from '@vercel/speed-insights/next'

const shortTitle = 'Portafolio de Jhan Gómez P.'
const description = 'Esta página contiene el portafolio de @jhangmez'
const jhangmez = ' | jhangmez'
const title = `${shortTitle}${jhangmez}`
const imageUrl = `https://jhangmez.vercel.app/api/og2?title=${shortTitle}&description=${description}`

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
          <Toaster
            containerClassName='font-semibold text-light-primary dark:text-dark-primary'
            position='bottom-right'
            reverseOrder={false}
          />
          <noscript>Página realizada por Jhan Gómez P. @jhangmez</noscript>
          <Suspense fallback={<Loading />}>{children} </Suspense>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
