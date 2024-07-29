import { Suspense } from 'react'
import Loading from '../loading'
import Header from '@components/Header'
import Footer from '@components/Footer'

const shortTitle = 'Portafolio'
const description = 'Bienvenidos a mi portafolio'
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
export default function PublicLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main
      className='min-h-screen bg-light-surface dark:bg-dark-surface bg-[radial-gradient(100%_50%_at_50%_0%,rgba(137,179,146,0.086)_0,rgba(137,179,146,0.02)_50%,rgba(137,179,146,0)_100%)]
  dark:bg-[radial-gradient(100%_50%_at_50%_0%,rgba(93,135,96,0.108)_0,rgba(93,135,96,0.04)_50%,rgba(93,135,96,0)_100%)]'
    >
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
    </main>
  )
}
