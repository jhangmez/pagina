import { Divider } from '@nextui-org/react'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import { Link } from '@nextui-org/link'
import data from './data.json'
import { skillsMap } from '@utils/skillList'

export default function Proyectos() {
  return (
    <>
      <div className='dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4'>
        <h1 className='font-bold text-2xl mb-4'>Proyectos personales</h1>
        <ul>
          {data.proyectos.map((proyectos, index) => (
            <li key={index}>
              <div className='flex sm:flex-row flex-col p-4 lg:space-x-4'>
                <div className='flex flex-col items-center mb-4 '>
                  <Image
                    as={NextImage}
                    width={400}
                    height={200}
                    priority={true}
                    src={proyectos.imagen}
                    alt={proyectos.empresa}
                  />
                  <div className='flex flex-col items-center h-full'>
                    <Divider orientation='vertical' />
                  </div>
                </div>
                <div className='flex flex-col w-full self-start space-y-4 md:space-x-4'>
                  <div className='flex justify-between md:ml-4'>
                    <Link
                      underline='hover'
                      isExternal
                      href={proyectos.enlace}
                      className='flex flex-col w-fit '
                    >
                      <div className='flex items-center'>
                        <div className='flex w-full'>
                          <div className='flex items-center mr-1 hover:underline font-bold text-dark-onPrimary'>
                            {proyectos.empresa} {'  '} ({proyectos.enlace})
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <ul className='flex flex-col space-y-5'>
                    {proyectos.status ? '🟢 Live' : '🔴 Offline'}
                    {proyectos.roles.map((role, index) => (
                      <li key={index}>
                        <p>{role.descripcion}</p>
                        <div className='mt-2 flex justify-start'>
                          <span className='font-semibold text-dark-onPrimary mr-2'>
                            Stack:
                          </span>
                          <section className='space-x-3'>
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
