import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import { Link } from '@nextui-org/link'
import data from './data.json'

export default function Idiomas() {
  return (
    <div className='bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4 w-full'>
      <h1 className='font-bold text-2xl mb-4'>Idiomas</h1>
      <ul>
        {data.idiomas.map((idioma, index) => (
          <li key={index}>
            <div className='flex flex-row space-x-4'>
              <Image
                as={NextImage}
                width={100}
                isBlurred
                height={100}
                className='select-none'
                priority={true}
                src={idioma.logo}
                alt={idioma.institucion}
              />
              <div className='flex flex-col'>
                <h1 className='font-bold text-dark-onTertiary uppercase'>
                  {idioma.nombre}
                </h1>
                <Link
                  underline='hover'
                  isExternal
                  showAnchorIcon
                  href={idioma.url}
                  className='font-bold text-dark-onPrimary'
                >
                  {idioma.institucion}
                </Link>
                <p className='font-semibold'>{idioma.nivel}</p>
                <p className='font-medium'>{idioma.periodo}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
