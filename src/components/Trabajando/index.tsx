'use client'

import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import Header from '@components/Header'
import Footer from '@components/Footer'
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
                d='M12 11.5q1.625 0 2.8 1.1t1.4 2.725q.05.3.275.488T17 16t.537-.2t.188-.5q-.25-2.25-1.863-3.775T12 10t-3.863 1.525T6.275 15.3q-.05.3.188.5T7 16t.525-.187t.275-.488Q8.025 13.7 9.2 12.6t2.8-1.1m-1.45-3.975q.225-.2.213-.513T10.5 6.5t-.55-.175t-.55.225q-.4.35-.838.588t-.937.412q-.3.125-.488.375T7 8.5t.3.5t.525.075q.75-.25 1.45-.638t1.275-.912m2.9 0q.575.525 1.25.9t1.425.625q.3.1.563-.062T17 8.5t-.15-.575t-.5-.375q-.475-.175-.913-.425T14.6 6.55q-.25-.2-.55-.225t-.55.175t-.262.513t.212.512M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20'
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
