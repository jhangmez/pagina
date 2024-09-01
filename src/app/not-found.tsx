'use client'

import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useUwuMode } from '@contexts/uwu'

const shortTitle = 'Página no encontrada 🤔'
const description = 'No se ha encontrado esta página, intenta con otra.'
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

export default function NotFound() {
  const { isUwuMode } = useUwuMode()
  return (
    <main className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <Header />
      <section className=' flex justify-center items-center h-screen'>
        <ul className='space-y-2'>
          <li className='text-center space-y-2'>
            <h1
              className={`${
                isUwuMode
                  ? 'text-light-tertiary dark:text-dark-tertiary'
                  : 'text-light-primary dark:text-dark-primary'
              } lg:text-9xl text-7xl font-bold`}
            >
              Oops!
            </h1>
            <h2 className='font-semibold text-light-onSurface dark:text-dark-onSurface lg:text-5xl text-3xl'>
              No encontrado
            </h2>
          </li>
          <li className='w-full items-center flex justify-center pt-3'>
            <Button
              href={isUwuMode ? '/?uwu' : '/'}
              as={Link}
              className={`${
                isUwuMode
                  ? 'text-light-tertiary dark:text-dark-tertiary bg-light-tertiaryContainer dark:bg-dark-tertiaryContainer'
                  : 'text-light-primary dark:text-dark-primary bg-light-primaryContainer dark:bg-dark-primaryContainer'
              }  text-xl font-semibold p-4`}
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
