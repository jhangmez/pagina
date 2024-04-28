import { Divider } from '@nextui-org/react'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import { Link } from '@nextui-org/link'
import data from './data.json'

export default function Experiencia() {
  return (
    <>
      <div className='bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4'>
        <h1 className='font-bold text-2xl mb-4'>Experiencia</h1>
        <ul>
          {data.experiencias.map((experiencia, index) => (
            <li key={index}>
              <div className='flex flex-row p-4 space-x-4'>
                <div className='flex flex-col items-center'>
                  <Image
                    as={NextImage}
                    isBlurred
                    width={80}
                    height={80}
                    priority={true}
                    src={experiencia.imagen}
                    alt={experiencia.empresa}
                  />
                  <div className='flex flex-col items-center h-full'>
                    <Divider orientation='vertical' />
                  </div>
                </div>
                <div className='flex flex-col w-full self-center space-y-4'>
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
                    <span className='font-sm font-normal'>
                      {experiencia.duracion}
                    </span>
                    <span className='font-sm font-normal'>
                      {experiencia.ubicacion}
                    </span>
                  </div>
                  <ul className='flex flex-col space-y-5'>
                    {experiencia.roles.map((role, index) => (
                      <li key={index}>
                        <p className='font-bold  text-dark-onSecondary'>
                          {role.titulo}
                        </p>
                        <p>{role.periodo}</p>
                        <p>{role.ubicacion}</p>
                        <p className='mt-2'>{role.descripcion}</p>
                        <p className='mt-2'>
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
    </>
  )
}
