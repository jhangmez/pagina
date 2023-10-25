'use client'

import Image from 'next/image'
import React from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export default function Home() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <main className='bg-light-surface dark:bg-dark-surface w-screen h-screen '>
      <nav className='bg-light-surface dark:bg-dark-surface relative flex flex-wrap items-center justify-between '>
        <div className='container lg:mx-auto flex flex-wrap items-center justify-between mx-4'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              href='/'
              className='w-[230px] h-14 justify-start items-center gap-[5px] inline-flex'
            >
              <Icon
                icon='material-symbols:sentiment-excited-outline'
                width='28'
                height='28'
                className='text-black dark:text-white '
              />
              <div>
                <span className='text-black dark:text-white text-2xl font-bold leading-[44px]'>
                  jhan
                </span>
                <span className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
                  gmez
                </span>
              </div>
            </Link>
            <div className='lg:hidden flex flex-row items-center gap-2.5'>
              <button
                className='text-light-onSurface dark:text-dark-onSurface cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                type='button'
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <Icon icon='material-symbols:menu' />
              </button>
            </div>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id='navbar'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='nav-item'>
                <Link href='/skills'>
                  <button className='w-[fit] h-10 rounded-[100px] flex-col justify-center items-center gap-2 inline-flex text-light-primary dark:text-dark-primary hover:text-light-primary hover:bg-light-primary hover:bg-opacity-8 focus:bg-opacity-12 active:bg-opacity-16 disabled:text-light-onSurface'>
                    <div className='self-stretch grow shrink basis-0 px-3 py-2.5 justify-center items-center gap-2 inline-flex'>
                      <div className='text-center text-sm font-medium leading-tight tracking-tight'>
                        Skills
                      </div>
                    </div>
                  </button>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/skills'>
                  <button className='w-[fit] h-10 rounded-[100px] flex-col justify-center items-center gap-2 inline-flex text-light-primary dark:text-dark-primary hover:text-light-primary hover:bg-light-primary hover:bg-opacity-8 focus:bg-opacity-12 active:bg-opacity-16 disabled:text-light-onSurface'>
                    <div className='self-stretch grow shrink basis-0 px-3 py-2.5 justify-center items-center gap-2 inline-flex'>
                      <div className='text-center text-sm font-medium leading-tight tracking-tight'>
                        Experiencia
                      </div>
                    </div>
                  </button>
                </Link>
              </li>
              <li className='nav-item'>
                <div className='w-[fit] h-10 rounded-[100px] flex-col justify-center items-center gap-2 inline-flex'>
                  <div className='self-stretch grow shrink basis-0 px-3 py-2.5 justify-center items-center gap-2 inline-flex'>
                    <div className="text-center text-light-primary dark:text-dark-primary text-sm font-medium font-['Plus Jakarta Sans'] leading-tight tracking-tight">
                      Skills
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Link
        href='/'
        className='justify-start items-center gap-[5px] inline-flex fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      >
        <Icon
          icon='material-symbols:sentiment-sad-outline'
          width='28'
          height='28'
          className='text-black dark:text-white '
        />
        <div>
          <span className='text-black dark:text-white text-2xl font-bold leading-[44px]'>
            Página{' '}
          </span>
          <span className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
            en construcción
          </span>
        </div>
      </Link>
    </main>
  )
}
