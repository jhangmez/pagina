'use client'

import React from 'react'
import Link from 'next/link'
import Textbutton from '@Buttons/Text'
import Iconbutton from '@Buttons/Icon'
import { Icon } from '@iconify/react'

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <nav className='relative flex flex-wrap items-center justify-between '>
      <div className='container mx-auto flex flex-wrap items-center justify-between px-[20px]'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <Link
            href='/'
            className='w-[230px] h-14 justify-start items-center gap-[5px] inline-flex'
          >
            <Icon
              icon='material-symbols:sentiment-excited-outline'
              width='28'
              height='28'
              className='text-light-onSurface dark:text-dark-onSurface'
            />
            <div>
              <span className='text-light-onSurface dark:text-dark-onSurface text-2xl font-bold leading-[44px]'>
                jhan
              </span>
              <span className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
                gmez
              </span>
            </div>
          </Link>
          <div className='lg:hidden flex flex-row items-center gap-2.5'>
            <div onClick={() => setNavbarOpen(!navbarOpen)}>
              <Iconbutton icon='material-symbols:menu' />
            </div>
          </div>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
          id='navbar'
        >
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto gap-2 mb-2'>
            <li className='nav-item'>
              <Link href='/skills'>
                <Textbutton label='Skills' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/experiencia'>
                <Textbutton label='Experiencia' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
