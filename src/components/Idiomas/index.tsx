import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import { Link } from '@nextui-org/link'

export default function Idiomas() {
  return (
    <>
      <div className='dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4'>
        <h1 className='font-bold text-2xl mb-4'>Idiomas</h1>
        <ul>
          <li>
            <div className='flex flex-row space-x-4'>
              <Image
                as={NextImage}
                width={100}
                height={100}
                priority={true}
                src='/logo_icpna.webp'
                alt='Icpna Chiclayo'
              />
              <div className='flex flex-col'>
                <h1 className='font-bold text-dark-onTertiary uppercase'>
                  Inglés
                </h1>
                <Link
                  underline='hover'
                  isExternal
                  href='https://www.icpnachi.edu.pe'
                  className='font-bold text-dark-onPrimary'
                >
                  ICPNA
                </Link>
                <p className='font-semibold'>A2 Student</p>
                <p>sept. 2023 - sept. 2024</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
