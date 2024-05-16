import { Divider } from '@nextui-org/react'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import { Link } from '@nextui-org/link'
import data from './data.json'

export default function Experiencia() {
  return (
    <div className='bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4'>
      <h1 className='font-bold text-2xl mb-4'>Experiencia profesional</h1>
      <ul>
        {data.experiencias.map((experiencia, index) => (
          <li key={index}>
            <div className='flex flex-row px-4 space-x-4'>
              <div className='flex flex-col items-center'>
                <Image
                  as={NextImage}
                  isBlurred
                  width={80}
                  height={80}
                  priority={true}
                  className='w-full h-full select-none'
                  src={experiencia.imagen}
                  alt={experiencia.empresa}
                />
                <div
                  className={`flex flex-col items-center h-full ${
                    index === data.experiencias.length - 1 && 'hidden'
                  }`}
                >
                  <Divider orientation='vertical' className='min-h-[40px]' />
                </div>
              </div>
              <div className='flex flex-col w-full self-center space-y-4 pb-5'>
                <div className='flex flex-col'>
                  <Link
                    underline='hover'
                    isExternal
                    showAnchorIcon
                    className='w-fit'
                    href={experiencia.enlace}
                  >
                    <p className='font-bold text-dark-onPrimary'>
                      {experiencia.empresa}
                    </p>
                  </Link>
                  <span className='font-sm font-medium'>
                    {experiencia.duracion}
                  </span>
                  <span className='font-sm font-medium'>
                    {experiencia.ubicacion}
                  </span>
                </div>
                <ul className='flex flex-col space-y-5'>
                  {experiencia.roles.map((role, index) => (
                    <li key={index}>
                      <p className='font-bold  text-dark-onSecondary'>
                        {role.titulo}
                      </p>
                      <p className='font-medium'>{role.periodo}</p>
                      <p>{role.ubicacion}</p>
                      <p className='mt-2 font-medium'>{role.descripcion}</p>
                      <p className='mt-2 font-medium'>
                        <span className='font-semibold text-dark-onPrimary'>
                          Aptitudes:
                        </span>
                        {role.aptitudes}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
