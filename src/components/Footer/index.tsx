'use client'

import { GithubJhan, LinkedinJhan, VercelHarkaysoft } from '@routes'
import { Icon } from '@iconify/react'
import localFont from 'next/font/local'
import Link from 'next/link'

const myFont = localFont({ src: './Poppins-SemiBold.ttf' })

export default function FooterWithSocialMediaIcons() {
  return (
    <footer>
      <div className='container mx-auto py-6 px-[20px]'>
        <hr className='my-6 border-gray-200 dark:border-gray-700 lg:my-8' />
        <div className='w-full relative md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
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
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2'>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase text-light-onSurface dark:text-dark-onSurface'>
                Social
              </h2>
              <ul className='font-medium text-gray-500 dark:text-gray-400'>
                <li className='mb-4'>
                  <Link
                    href={GithubJhan}
                    className='hover:underline'
                    target='_blank'
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href={LinkedinJhan}
                    className='hover:underline'
                    target='_blank'
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold uppercase text-light-onSurface dark:text-dark-onSurface'>
                Proyectos
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <Link
                    href={VercelHarkaysoft}
                    className='hover:underline'
                    target='_blank'
                  >
                    <span
                      className={`${myFont.className} self-center text-1xl whitespace-nowrap pb-3`}
                    >
                      Harkay
                      <span
                        className={`${myFont.className} text-2xl text-[0.8em]`}
                      >
                        {' '}
                        S O F T
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2023{'  '}
            <Link href='/' className='hover:underline'>
              <span className='text-black text-light-onSurface dark:text-dark-onSurface font-bold leading-[44px]'>
                jhan
                <span className='text-light-primary dark:text-dark-primary font-bold leading-[44px]'>
                  gmez
                </span>
              </span>
            </Link>
            . Todos los derechos reservados.
          </span>
          <div className='flex mt-4 space-x-5 sm:justify-center sm:mt-0'>
            <div className='text-light-onSurface dark:text-dark-onSurface hover:text-gray-900 dark:hover:text-white'>
              <Link href={GithubJhan} target='_blank'>
                <Icon icon='mdi:github' width='24' />
              </Link>
            </div>
            <div className='text-light-onSurface dark:text-dark-onSurface hover:text-gray-900 dark:hover:text-white'>
              <Link href={LinkedinJhan} target='_blank'>
                <Icon icon='mdi:linkedin' width='24' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
