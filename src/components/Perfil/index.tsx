'use client'

import { useState } from 'react'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Listbox, ListboxItem } from '@nextui-org/listbox'
import { Image } from '@nextui-org/image'
import { GithubJhan, LinkedinJhan, URLCV, HugginFaceJhan } from '@routes'
import NextImage from 'next/image'
import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/react'
import data from './data.json'
import { toast } from 'react-hot-toast'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@nextui-org/modal'
import { Input } from '@nextui-org/input'
import InfiniteVertical from '@components/InfiniteVertical'

export default function PerfilPrueba() {
  const showCV = true

  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState('')
  const email = 'jhangmez.pe@gmail.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
    toast.success('Correo copiado!')
  }

  const onOpen = (type: string) => {
    setModalType(type)
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  const submitCorreo = (
    event: React.FormEvent<HTMLFormElement>,
    emailType: string
  ) => {
    event.preventDefault() // Prevent the default form submission

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const name = formData.get('name')

    if (!email || !name || !emailType || !validateEmail(email.toString())) {
      // Handle invalid email
      toast.error('Por favor, introduce valores correctos.')
      return
    }

    // Utiliza toast.promise para manejar la promesa de la petición
    toast.promise(
      fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email.toString(),
          name: name.toString(),
          emailType: emailType
        })
      }),
      {
        loading: 'Enviando correo...',
        success: 'Correo enviado exitosamente!',
        error: (
          <b>
            Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.
          </b>
        )
      }
    )
  }

  // Función auxiliar para validar el correo electrónico
  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  return (
    <div className='min-h-screen space-y-20 pt-24 p-[20px]'>
      <ul className='flex lg:flex-row flex-col -mt-10 gap-10 justify-center'>
        <li className='flex justify-center items-center lg:max-w-[530px]'>
          <div className='max-w-[530px] w-full'>
            <Card className='bg-light-surfaceContainer dark:bg-dark-surfaceContainer'>
              <CardBody className='px-2 rounded-xl justify-center items-center flex lg:py-8 md:py-8 py-2 overflow-hidden'>
                <Image
                  as={NextImage}
                  isBlurred
                  priority={true}
                  src='/jhan_image.webp'
                  alt='Jhangmez Picture'
                  className='rounded-xl select-none'
                  width={300}
                  height={300}
                />
              </CardBody>
              <CardFooter>
                <Listbox
                  aria-hidden='true'
                  aria-label='Listbox'
                  itemClasses={{
                    base: 'p-2 select-none',
                    title: 'text-lg font-medium',
                    wrapper: ''
                  }}
                >
                  <ListboxItem
                    key='LinkedIn'
                    href={LinkedinJhan}
                    target='_blank'
                    as={Link}
                    aria-label='Linkedin'
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
                    target='_blank'
                    as={Link}
                    aria-label='Github'
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
                    key='HugginFace'
                    href={HugginFaceJhan}
                    target='_blank'
                    as={Link}
                    aria-label='HugginFace'
                    startContent={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 32 32'
                      >
                        <g fill='currentColor'>
                          <path d='M3 15.999c0-3.67 1.106-6.91 3.235-9.221C8.35 4.48 11.568 3 15.999 3c4.43 0 7.648 1.48 9.764 3.778c2.129 2.311 3.235 5.55 3.235 9.22c0 .421-.015.836-.044 1.244c.33.179.602.447.787.772c.418.05.796.23 1.094.497c.109-.82.163-1.66.163-2.512c0-4.061-1.227-7.821-3.764-10.576C24.684 2.654 20.903 1 16 1C11.095 1 7.313 2.654 4.763 5.423C2.226 8.178 1 11.938 1 15.999c0 .853.054 1.693.163 2.513a1.993 1.993 0 0 1 1.096-.498a2.01 2.01 0 0 1 .784-.77A17.619 17.619 0 0 1 3 15.998m9.668 12.688a4.77 4.77 0 0 1-1.861 1.597c1.557.466 3.29.715 5.192.715c1.902 0 3.635-.25 5.194-.716a4.77 4.77 0 0 1-1.861-1.596a17.07 17.07 0 0 1-3.333.312c-1.198 0-2.308-.108-3.331-.312' />
                          <path d='M7.888 13.338a2 2 0 0 0-.775 2.325a2 2 0 1 1 .775-2.325m17 2.325a2 2 0 0 0-.776-2.325a2 2 0 1 1 .776 2.325M9.349 9.413c-.21.228-.32.53-.367.778a1 1 0 0 1-1.964-.382c.089-.456.31-1.153.858-1.749C8.453 7.431 9.316 7 10.5 7c1.195 0 2.062.452 2.636 1.082c.544.597.77 1.292.85 1.747a1 1 0 0 1-1.971.342a1.546 1.546 0 0 0-.358-.742C11.47 9.222 11.142 9 10.5 9c-.653 0-.972.217-1.151.413m11.001 0c-.21.228-.32.53-.368.778a1 1 0 0 1-1.963-.382c.088-.456.31-1.153.857-1.749C19.453 7.431 20.316 7 21.5 7c1.196 0 2.062.452 2.636 1.082c.544.597.77 1.292.85 1.747a1 1 0 0 1-1.971.342a1.545 1.545 0 0 0-.358-.742C22.47 9.222 22.142 9 21.5 9c-.653 0-.971.217-1.15.413M8.4 14.2a1 1 0 0 1 1.4.2c.298.397 1.992 2.1 6.2 2.1s5.902-1.703 6.2-2.1a1 1 0 1 1 1.6 1.2c-.702.936-3.008 2.9-7.8 2.9s-7.098-1.964-7.8-2.9a1 1 0 0 1 .2-1.4m20.59 4.94a1 1 0 0 0-1.649-.892L23.58 21.54l-.079-.04c0-.413.038-.788.072-1.125c.09-.888.153-1.513-.572-1.875c-1.338-.669-1.952 1.564-2.363 3.743c-.094.496-.32.955-.572 1.392c-1.33 2.303-.066 4.614.935 5.365c1.789 1.342 3.5 1 5 0c.908-.605 2.635-1.82 3.927-2.737a1.116 1.116 0 0 0-1.146-1.904l-.126.064l1.985-1.655a1 1 0 0 0-.782-1.758l.293-.25a1 1 0 0 0-1.16-1.62m-25.982 0a1 1 0 0 1 1.649-.892l3.763 3.292l.079-.04c0-.413-.038-.788-.072-1.125c-.09-.888-.153-1.513.572-1.875c1.338-.669 1.952 1.564 2.363 3.743c.094.496.32.955.572 1.392c1.33 2.303.066 4.614-.935 5.365c-1.79 1.342-3.5 1-5 0c-.908-.605-2.635-1.82-3.927-2.737A1.116 1.116 0 0 1 3.22 24.36l.126.064l-1.985-1.655a1 1 0 0 1 .781-1.758l-.292-.25a1 1 0 0 1 1.16-1.62' />
                        </g>
                      </svg>
                    }
                    className='text-light-onSurface dark:text-dark-onSurface'
                  >
                    HugginFace
                  </ListboxItem>
                  <ListboxItem
                    key='mail'
                    aria-label='Mail'
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
                          <span className='text-sm lg:flex md:flex hidden'>
                            Copiado
                          </span>{' '}
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
                          <span className='text-sm lg:flex md:flex hidden'>
                            Copiar
                          </span>{' '}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                          >
                            <path
                              fill='none'
                              stroke='currentColor'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
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
          </div>
        </li>
        <li className='space-y-5 flex flex-col justify-center'>
          <h1 className='text-light-onSurface dark:text-dark-onSurface text-3xl lg:text-5xl font-bold flex-nowrap'>
            Hola, soy{' '}
            <span className='text-light-primary dark:text-dark-primary whitespace-nowrap'>
              Jhan Gómez{' '}
              <span className='hidden lg:inline md:inline'> P. </span>
            </span>
          </h1>
          <h2 className='text-2xl md:text-3x1 lg:text-4x1 font-semibold text-light-onSurface dark:text-dark-onSurface'>
            Estudiante de Ingeniería de Sistemas y Desarrollador software.
          </h2>

          <div className='flex flex-row gap-5'>
            <Button
              as={Link}
              variant='flat'
              className='bg-light-secondary dark:bg-dark-secondary text-light-onSecondary dark:text-dark-onSecondary font-semibold'
              onPress={() => onOpen('contact')}
              startContent={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z'
                  />
                </svg>
              }
            >
              Contacto
            </Button>
            {showCV && (
              <Button
                // as={Link}
                // isExternal
                onPress={() => onOpen('cv')}
                variant='flat'
                className='bg-light-secondary dark:bg-dark-secondary text-light-onSecondary dark:text-dark-onSecondary font-semibold'
                // href={URLCV}
                startContent={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='currentColor'
                      d='m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z'
                    />
                  </svg>
                }
              >
                Descargar CV
              </Button>
            )}
            <Modal
              motionProps={{}}
              className='bg-light-background dark:bg-dark-background'
              classNames={{
                base: 'lg:min-h-screen md:min-h-screen lg:w-auto lg:rounded-none md:rounded-none rounded-b-none mx-0 sm:mx-0',
                wrapper: 'flex justify-end',
                backdrop: 'bg-light-surface/50 dark:bg-dark-surface/50',
                header:
                  'text-light-onBackground dark:text-dark-onBackground font-bold',
                body: 'text-light-onBackground dark:text-dark-onBackground'
              }}
              isOpen={isOpen}
              onOpenChange={onClose}
            >
              <ModalContent>
                {(onClose) => (
                  <form onSubmit={(event) => submitCorreo(event, modalType)}>
                    <ModalHeader className='flex flex-col gap-1'>
                      {modalType === 'contact' && <>Contacto</>}
                      {modalType === 'cv' && <>CV</>}
                    </ModalHeader>
                    <ModalBody>
                      {/* <p className='font-bold text-white'>{modalType}</p> */}
                      <Input
                        isRequired
                        classNames={{
                          input: '',
                          mainWrapper: 'bg-light-primary',
                          description:
                            'text-light-primary dark:text-dark-primary select-none'
                        }}
                        placeholder='Escribe tu nombre'
                        name='name'
                        label='Nombre'
                      />
                      <Input
                        type='email'
                        label='Email'
                        name='email'
                        isRequired
                        classNames={{
                          input: '',
                          mainWrapper: 'bg-light-primary',
                          description:
                            'text-light-primary dark:text-dark-primary select-none'
                        }}
                        placeholder='Escribe tu correo'
                        description={
                          <p>
                            Al enviar aceptas el{' '}
                            <Link
                              href='/terms'
                              isExternal
                              className='underline text-[12px] font-light text-light-primary dark:text-dark-primary'
                            >
                              tratamiento de tu correo
                            </Link>
                            .
                          </p>
                        }
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        onPress={onClose}
                        className='font-semibold text-dark-error bg-dark-onError/50 dark:bg-dark-onError/80'
                      >
                        Cancelar
                      </Button>
                      <Button
                        type='submit'
                        onPress={onClose}
                        className='font-semibold text-dark-primary bg-dark-onPrimary'
                      >
                        Solicitar
                      </Button>
                    </ModalFooter>
                  </form>
                )}
              </ModalContent>
            </Modal>
          </div>
        </li>
      </ul>
      <InfiniteVertical />
    </div>
  )
}
