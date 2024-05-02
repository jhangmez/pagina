import { Divider } from '@nextui-org/react'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import { Link } from '@nextui-org/link'
import data from './data.json'
import { skillsMap } from '@utils/skillList'

export default function Proyectos() {
  return (
    <>
      <div className='bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4'>
        <h1 className='font-bold text-2xl mb-4'>Proyectos personales</h1>
        <ul>
          {data.proyectos.map((proyectos, index) => (
            <li key={index}>
              <div
                className={`flex sm:flex-row flex-col px-4 lg:space-x-4 space-x-2 md:space-x-0 `}
              >
                <div className='flex flex-col items-center'>
                  <Image
                    as={NextImage}
                    isBlurred
                    width={400}
                    height={200}
                    priority={true}
                    src={proyectos.imagen}
                    alt={proyectos.empresa}
                  />
                  <div
                    className={`flex flex-col items-center h-full ${
                      index === data.proyectos.length - 1 &&
                      ' lg:hidden md:hidden'
                    }`}
                  >
                    <Divider orientation='vertical' />
                  </div>
                </div>
                <div className='flex flex-col w-full self-start space-y-4 md:space-x-4 pb-5'>
                  <div className='flex justify-between md:ml-4'>
                    <Link
                      underline='hover'
                      isExternal
                      href={proyectos.enlace}
                      className='w-fit'
                      showAnchorIcon
                    >
                      <p className='hover:underline font-bold text-dark-onPrimary'>
                        {proyectos.empresa} {'  '} ({proyectos.enlace})
                      </p>
                    </Link>
                  </div>
                  <ul className='flex flex-col space-y-5'>
                    <p className='font-bold'>
                      {proyectos.status ? (
                        <span className='text-light-primary'>🟢 Live</span>
                      ) : (
                        <span className='text-light-error'>🔴 Offline</span>
                      )}
                    </p>
                    {proyectos.roles.map((role, index) => (
                      <li key={index}>
                        <p className='font-medium'>{role.descripcion}</p>
                        <div className='mt-2 flex justify-start'>
                          <span className='font-semibold text-dark-onPrimary mr-2'>
                            Stack:
                          </span>
                          <section className='px-2 flex flex-wrap gap-1'>
                            {role.stack.map((num) => {
                              const Component = skillsMap[num]
                              return <Component key={num} />
                            })}
                          </section>
                        </div>
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
