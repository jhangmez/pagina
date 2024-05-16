import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Link } from '@nextui-org/link'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import Data from './data.json'
export default function Freelance() {
  return (
    <div className='bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4'>
      <h1 className='font-bold text-2xl mb-4'>Experiencia freelance</h1>
      <ul className='container flex flex-wrap justify-around gap-8 align-items-stretch'>
        {Data.map((dato, index) => (
          <li key={index}>
            <Card className='w-[250px] flex flex-col h-full'>
              <CardHeader className='p-0 rounded-none'>
                <Image
                  as={NextImage}
                  removeWrapper
                  alt='Imagen de los proyectos freelance'
                  classNames={{
                    img: 'rounded-none'
                  }}
                  height={500}
                  width={385}
                  src={dato.url_imagen}
                  fallbackSrc='/api/img?width=385&height=500&title=Cargando&description=null&bg=C1C9BE&color=727970'
                />
              </CardHeader>
              <CardBody className='flex-grow'>
                <p className='font-semibold pb-1'>{dato.contratista}</p>
                <ul className='mt-auto flex gap-1 flex-wrap'>
                  {dato.funciones.map((funcion, index) => (
                    <li
                      className='inline-flex items-center rounded-md border font-medium text-nowrap border-transparent bg-light-secondaryContainer hover:bg-light-secondaryContainer/60 transition-colors text-light-onSecondaryContainer px-1 py-0 select-none text-xs'
                      key={index}
                    >
                      {funcion}
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter className='p-0 px-3 pb-3'>
                <Link
                  isExternal
                  className='hover:underline active:underline font-medium'
                  href={dato.url}
                  showAnchorIcon
                >
                  Visitar
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
