import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import { Link } from '@nextui-org/link'

export default function Educacion() {
  return (
    <>
      <div className='dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4'>
        <h1 className='font-bold text-2xl mb-4'>Educacion</h1>
        <ul>
          <li>
            <div className='flex flex-row space-x-4'>
              <Image
                as={NextImage}
                width={100}
                height={100}
                priority={true}
                src='/logo_unprg.webp'
                alt='Universidad Nacional Pedro Ruiz Gallo de Lambayeque, Perú.'
              />
              <div className='flex flex-col'>
                <Link
                  underline='hover'
                  isExternal
                  href='http://www.unprg.edu.pe/'
                  className='font-bold text-dark-onPrimary'
                >
                  Universidad Nacional Pedro Ruíz Gallo
                </Link>
                <p className='font-semibold'>
                  Estudiante, <span>Ingeniería de sistemas</span>
                </p>
                <p>2019 - 2024</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
