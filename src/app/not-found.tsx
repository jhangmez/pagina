'use client'

import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import type { Metadata } from 'next'

const title = 'jhangmez | No encontrado 🤔'
const description = 'Pagina de jhangmez'

export const metadata: Metadata = {
  title,
  description
}

export default function NotFound() {
  return (
    <main className='w-screen h-screen'>
      <div className='bg-light-surface  dark:bg-dark-surface'>
        <div className='flex flex-col justify-center items-center  h-screen'>
          <p className='text-light-onSurface dark:text-dark-onSurface'>
            <h1 className='lg:text-6xl font-bold text-2xl'>Oops!</h1>
            <h2 className='lg:text-6xl font-bold text-2xl'>No encontrado</h2>
            <div className='flex flex-col gap-2 mt-3'>
              <div>
                <Button
                  href='/'
                  as={Link}
                  className='text-light-primary dark:text-dark-primary bg-light-onPrimary dark:bg-dark-onPrimary'
                  variant='flat'
                >
                  Retornar
                </Button>
              </div>
            </div>
          </p>
        </div>
      </div>
    </main>
  )
}
