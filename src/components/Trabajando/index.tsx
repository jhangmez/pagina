'use client'

import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import { useUwuMode } from '@contexts/uwu'
export default function Trabajando() {
  const { isUwuMode } = useUwuMode()
  return (
    <section className='flex justify-center items-center h-screen'>
      <ul className='space-y-2'>
        <li className='text-center space-y-2'>
          <h1
            className={`${
              isUwuMode
                ? 'text-light-tertiary dark:text-dark-tertiary'
                : 'text-light-primary dark:text-dark-primary'
            } lg:text-9xl text-7xl font-bold flex`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
              className='h-auto'
            >
              <path
                fill='currentColor'
                d='M12 13.5q-1.7 0-3.088.963T6.9 17h10.2q-.625-1.575-2.013-2.537T12 13.5M7.8 12l1.1-1.05L9.95 12L11 10.95L9.95 9.9L11 8.8L9.95 7.75L8.9 8.8L7.8 7.75L6.75 8.8L7.8 9.9l-1.05 1.05zm6.25 0l1.05-1.05L16.2 12l1.05-1.05L16.2 9.9l1.05-1.1l-1.05-1.05l-1.1 1.05l-1.05-1.05L13 8.8l1.05 1.1L13 10.95zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20'
              />
            </svg>
            Oops!
          </h1>
          <h2 className='font-semibold text-light-onSurface dark:text-dark-onSurface lg:text-5xl text-3xl'>
            Página en desarrollo
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
  )
}
