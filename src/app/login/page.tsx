'use client'

import Form from '@components/(all)/Form'
import { Link } from '@nextui-org/link'
import { VercelHarkaysoft } from '@routes'
import localFont from 'next/font/local'
import { Logo } from '@logo'
import { LogoUwu } from '@src/app/LogoUwu'
import { useUwuMode } from '@contexts/uwu'
const harkayFont = localFont({ src: '../../../public/Poppins-SemiBold.ttf' })
export default function Login() {
  const { isUwuMode } = useUwuMode()
  return (
    <main className='flex flex-col md:flex-row-reverse md:h-screen bg-light-surface dark:bg-dark-surface h-screen'>
      <section className='flex items-start w-full px-4 mx-auto md:px-0 md:items-center md:w-1/3'>
        <div className=' relative md:-left-2 bg-light-surface dark:bg-dark-surface py-5'>
          <Link
            href='/'
            className='gap-1 text-light-onSurface dark:text-dark-onSurface'
          >
            {isUwuMode ? <LogoUwu /> : <Logo />}
            <div>
              <span className='text-light-onSurface dark:text-dark-onSurface text-2xl font-bold leading-[44px]'>
                jhan
              </span>
              <span
                className={`${
                  isUwuMode
                    ? 'text-light-tertiary dark:text-dark-tertiary'
                    : 'text-light-primary dark:text-dark-primary'
                } text-2xl font-bold leading-[44px]`}
              >
                gmez
              </span>
            </div>
          </Link>
          <div className='md:flex items-start'>
            <section className='w-fit h-8 justify-start items-center gap-[5px] inline-flex'>
              <span className='self-center whitespace-nowrapont-semibold font-semibold dark:text-white'>
                with{' '}
              </span>
              <Link
                href={VercelHarkaysoft}
                className={`${harkayFont.className} hover:underline text-light-shadow dark:text-dark-shadow`}
                showAnchorIcon
                isExternal
              >
                <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
                  Harkay
                  <span className='text-2xl text-[0.8em] font-normal'>
                    {' '}
                    S O F T
                  </span>
                </span>
              </Link>
            </section>
          </div>
        </div>
      </section>
      <section className='justify-center px-4 md:px-0 md:flex md:w-2/3 md:border-r'>
        <div className='w-full max-w-sm py-4 mx-auto my-auto min-w-min md:py-9 md:w-7/12'>
          <h2 className='text-xl font-semibold md:text-2xl text-light-onSurface dark:text-dark-onSurface'>
            Ingresar
          </h2>
          <p className='text-sm text-light-onSurface dark:text-dark-onSurface pb-2'>
            Usa tu nombre de usuario y contraseña para ingresar.
          </p>

          <Form type='login' />
        </div>
      </section>
    </main>
  )
}
