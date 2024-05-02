import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import { Link } from '@nextui-org/link'
import data from './data.json'

export default function Educacion() {
  return (
    <>
      <div className='bg-light-surfaceContainer bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4 w-full'>
        <h1 className='font-bold text-2xl mb-4'>Educación</h1>
        <ul>
          {data.educacion.map((educacion, index) => (
            <li key={index}>
              <div className='flex flex-row space-x-4'>
                <Image
                  as={NextImage}
                  width={100}
                  isBlurred
                  height={100}
                  className='select-none'
                  priority={true}
                  src={educacion.logo}
                  alt={educacion.institucion}
                />
                <div className='flex flex-col'>
                  <Link
                    underline='hover'
                    isExternal
                    showAnchorIcon
                    href={educacion.url}
                    className='font-bold text-dark-onPrimary'
                  >
                    {educacion.institucion}
                  </Link>
                  <p className='font-semibold'>{educacion.estudio}</p>
                  <p>{educacion.periodo}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
