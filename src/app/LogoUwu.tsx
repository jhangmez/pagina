'use client'

import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
export const LogoUwu = () => (
  <Image
    as={NextImage}
    width={28}
    height={28}
    removeWrapper
    priority={true}
    src='/icons/jhangmez_uwu.webp'
    alt='Imagen de jhangmez alternativa para uwu'
    className='lg:w-7 lg:h-7 md:w-7 md:h-7 w-6 h-6'
  />
)
