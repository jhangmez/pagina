'use Client'

import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Listbox, ListboxItem } from '@nextui-org/listbox'
import { Image } from '@nextui-org/image'
import { GithubJhan, LinkedinJhan } from '@routes'
import { Snippet } from '@nextui-org/snippet'
import NextImage from 'next/image'
import Link from 'next/link'
import { Button } from '@nextui-org/react'

export default function PerfilPrueba() {
  const [copied, setCopied] = useState(false)
  const email = 'jhangmez.pe@gmail.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000) // Reset after 2 seconds
  }
  return (
    <section className='container mx-auto lg:px-16'>
      <div className='flex h-full flex-col justify-center px-3 lg:px-0'>
        <div className='flex flex-col lg:flex-row justify-between items-center inline-flex py-10 gap-5'>
          <Card className='lg:w-4/12 w-11/12 bg-light-surfaceContainer dark:bg-dark-surfaceContainer'>
            <CardBody className='px-2 rounded-xl justify-center items-center flex'>
              <Image
                as={NextImage}
                isBlurred
                src='https://media.licdn.com/dms/image/D4E03AQHqh7Y4agbE7g/profile-displayphoto-shrink_800_800/0/1679802304766?e=1703721600&v=beta&t=OUnXeS6zL5SbszflBOsF0DQ6UeabJn2_a_wgRh3buY8'
                alt='Jhangmez Picture'
                className='self-stretch grow shrink basis-0 rounded-xl'
                width={300}
                height={300}
              />
            </CardBody>
            <CardFooter>
              <Listbox>
                <ListboxItem
                  key='LinkedIn'
                  href={LinkedinJhan}
                  as={Link}
                  startContent={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'
                      />
                    </svg>
                  }
                  className='text-light-onSurface dark:text-dark-onSurface'
                >
                  LinkedIn
                </ListboxItem>
                <ListboxItem
                  key='Github'
                  href={GithubJhan}
                  as={Link}
                  startContent={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2'
                      />
                    </svg>
                  }
                  className='text-light-onSurface dark:text-dark-onSurface'
                >
                  Github
                </ListboxItem>
                <ListboxItem
                  key='mail'
                  onPress={handleCopy}
                  startContent={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        d='M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z'
                      />
                    </svg>
                  }
                  endContent={
                    copied ? (
                      <>
                        <span className='text-sm'>Copiado</span>{' '}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='currentColor'
                            d='M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z'
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        <span className='text-sm'>Copiar</span>{' '}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='none'
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M9 9V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C10.52 3 11.08 3 12.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v5.6c0 1.12 0 1.68-.218 2.108a2.002 2.002 0 0 1-.874.874C19.48 15 18.92 15 17.803 15H15M9 9H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 10.52 3 11.08 3 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.607c1.117 0 1.676 0 2.104-.218a2 2 0 0 0 .874-.874c.218-.428.218-.987.218-2.105V15M9 9h2.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V15'
                          />
                        </svg>
                      </>
                    )
                  }
                  className='text-light-onSurface dark:text-dark-onSurface'
                >
                  {email}
                </ListboxItem>
              </Listbox>
            </CardFooter>
          </Card>
          <div className='lg:w-7/12 grid flex-col text-light-onSurface dark:text-dark-onSurface gap-5'>
            <div className='text-4xl lg:text-5xl font-bold flex-nowrap'>
              Hola, soy{' '}
              <span className='text-light-primary dark:text-dark-primary whitespace-nowrap'>
                Jhan Gómez{' '}
                <span className='hidden lg:inline md:inline'> P. </span>
              </span>
            </div>
            <h2 className='text-2xl lg:text-3x1 font-semibold'>
              Estudiante de Ingeniería de Sistemas y Desarrollador.
            </h2>

            <div className='container flex h-full flex-row gap-5'>
              <Button
                as={Link}
                variant='flat'
                className='bg-light-secondary dark:bg-dark-secondary text-light-onSecondary dark:text-dark-onSecondary font-semibold'
                href='mailto:jhangmez.pe@gmail.com'
              >
                Contacto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
