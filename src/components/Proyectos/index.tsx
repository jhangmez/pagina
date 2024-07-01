import { Chip, Divider } from '@nextui-org/react'
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
                    className='select-none'
                    src={proyectos.imagen}
                    fallbackSrc='/api/img?width=400&height=200&title=Cargando&description=null&bg=C1C9BE&color=727970'
                    alt={proyectos.empresa}
                  />
                  <div
                    className={`flex flex-col items-center h-full ${
                      index === data.proyectos.length - 1 &&
                      ' lg:hidden md:hidden'
                    }`}
                  >
                    <Divider orientation='vertical' className='min-h-[40px]' />
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
                    <li className='flex gap-2 items-center'>
                      <p className='font-bold'>
                        {proyectos.status ? (
                          <span className='text-light-primary'>🟢 Live</span>
                        ) : (
                          <span className='text-light-error'>🔴 Offline</span>
                        )}
                      </p>

                      {proyectos.inWorking ? (
                        <Chip
                          className='bg-light-onPrimaryContainer text-light-primaryContainer'
                          classNames={{
                            content: 'font-medium'
                          }}
                          startContent={
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='1em'
                              height='1em'
                              viewBox='0 0 32 32'
                            >
                              <path
                                fill='currentColor'
                                d='m31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9zM1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23zm11.42 9.484L17.64 6l1.932.517L14.352 26z'
                              />
                            </svg>
                          }
                        >
                          En desarrollo
                        </Chip>
                      ) : (
                        <Chip
                          className='bg-light-onBackground text-light-background select-none'
                          classNames={{
                            content: 'font-medium'
                          }}
                          startContent={
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='1em'
                              height='1em'
                              viewBox='0 0 32 32'
                            >
                              <path
                                fill='currentColor'
                                d='m17.713 13.471l1.863-6.953L17.645 6l-1.565 5.838zm6.494 6.494l1.414 1.414L31 16l-7-7l-1.414 1.414L28.172 16zM30 28.586L3.414 2L2 3.414l5.793 5.793L1 16l7 7l1.414-1.414L3.828 16l5.379-5.379l5.677 5.677l-2.461 9.184l1.932.518l2.162-8.069L28.586 30z'
                              />
                            </svg>
                          }
                        >
                          Concluido
                        </Chip>
                      )}
                    </li>

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
