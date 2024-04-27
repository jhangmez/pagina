'use client'

import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
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

export default function NotFound() {
  return (
    <main className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <Header />
      <section className=' flex justify-center items-center h-screen'>
        <ul className='space-y-2'>
          <li className='text-center space-y-2'>
            <h1 className='font-bold text-light-primary dark:text-dark-primary lg:text-9xl text-7xl'>
              Oops!
            </h1>
            <h2 className='font-semibold text-light-onSurface dark:text-dark-onSurface lg:text-5xl text-3xl'>
              No encontrado
            </h2>
          </li>
          <li className='w-full items-center flex justify-center'>
            <Button
              href='/'
              as={Link}
              className='text-light-primary dark:text-dark-primary bg-light-onPrimary dark:bg-dark-onPrimary'
              variant='flat'
            >
              Retornar
            </Button>
          </li>
        </ul>
      </section>
      <Footer />
    </main>
  )
}
