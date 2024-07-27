import { Chip, Divider } from '@nextui-org/react'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import { Link } from '@nextui-org/link'
import Data from './data.json'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'

export default function Tools() {
  return (
    <div className='bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4'>
      <h1 className='font-bold text-2xl mb-4'>Herramientas</h1>
      <ul className='container flex flex-wrap justify-around gap-8 align-items-stretch'>
        {Data.herramientas.map((dato, index) => (
          <li key={index}>
            <Card className='lg:h-full md:h-full lg:max-h-[250px] md:max-h-[250px] lg:max-w-[600px] lg:max-w-[600px] flex lg:flex-row md:flex-row flex-col lg:w-full md:w-full w-[250px] max-h-[550px]'>
              <CardHeader
                className='p-0 rounded-none w-fit'
                style={{ backgroundColor: `#${dato.bg}` }}
              >
                <Image
                  as={NextImage}
                  removeWrapper
                  alt='Imagen de los proyectos freelance'
                  classNames={{
                    img: 'rounded-none'
                  }}
                  height={200}
                  width={260}
                  src={dato.imagen}
                  fallbackSrc='/api/img?width=260&height=200&title=Cargando&description=null&bg=C1C9BE&color=727970'
                />
              </CardHeader>
              <CardBody
                as={'ul'}
                className='flex flex-col justify-between px-5'
              >
                <li>
                  <h2 className=' font-bold text-dark-onPrimary'>
                    {dato.nombre}
                  </h2>
                  <p className='pt-2 font-medium'>{dato.descripción}</p>
                </li>
                <li className='pt-2'>
                  <div className='py-2 flex items-center gap-2'>
                    <p className='font-bold'>
                      {dato.status ? (
                        <span className='text-light-primary'>
                          <span className='text-green-500 text-xl animate-pulse'>
                            &nbsp;•&nbsp;
                          </span>{' '}
                          Live
                        </span>
                      ) : (
                        <span className='text-light-error'>
                          <span className='text-red-500 text-xl '>
                            &nbsp;•&nbsp;
                          </span>{' '}
                          Offline
                        </span>
                      )}
                    </p>
                    {dato.inWorking ? (
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
                  </div>
                  <Link
                    isExternal
                    className='hover:underline active:underline font-medium'
                    href={dato.enlace}
                    showAnchorIcon
                  >
                    Visitar
                  </Link>
                </li>
              </CardBody>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
