import { Suspense } from 'react'
import Loading from '../loading'
import Header from '@components/Header'
import Footer from '@components/Footer'

const shortTitle = 'Portafolio de @jhangmez'
const description =
  'Bienvenidos a mi portafolio, en el cual presento mis desarrollos y logros académicos, personales y profesionales'
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
export default function PublicLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
    </main>
  )
}
