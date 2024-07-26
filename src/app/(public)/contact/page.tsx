'use client'
import Trabajando from '@components/Trabajando/variant1'
import { useState } from 'react'
import { Button } from '@nextui-org/react'
import { Input } from '@nextui-org/input'
import { Textarea } from '@nextui-org/react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Link } from '@nextui-org/link'
import { submitCorreo, validateEmail } from '@utils/emailUtils'

export default function Contacto() {
  const [contactCaptcha, setContactCaptcha] = useState<string | null>(null)
  const [cvCaptcha, setCvCaptcha] = useState<string | null>(null)
  const [email1, setEmail1] = useState('')
  const [name, setName] = useState('')
  const [asunto, setAsunto] = useState('')
  const [detalle, setDetalle] = useState('')

  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10 space-y-4'>
        <Trabajando />
        <ul className='bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4'>
          <h1 className='font-bold text-xl '>Contacto</h1>

          <li id='contacto'>
            <form
              onSubmit={(event) =>
                submitCorreo(
                  event,
                  'contact',
                  !!contactCaptcha && contactCaptcha !== '',
                  () => setContactCaptcha(null)
                )
              }
            >
              <Card className='bg-transparent shadow-none'>
                <CardBody className='gap-4'>
                  <div className='space-y-3 flex flex-col md:space-y-0 md:flex-row md:space-x-6'>
                    <Input
                      isRequired
                      classNames={{
                        input: '',
                        mainWrapper: 'bg-light-primary w-full',
                        description:
                          'text-light-primary dark:text-dark-primary select-none'
                      }}
                      placeholder='Escribe tu nombre'
                      name='name'
                      label='Nombre'
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                      type='email'
                      label='Email'
                      name='email'
                      isRequired
                      classNames={{
                        input: '',
                        mainWrapper: 'bg-light-primary  w-full',
                        description:
                          'text-light-primary dark:text-dark-primary select-none'
                      }}
                      placeholder='Escribe tu correo'
                      onChange={(e) => setEmail1(e.target.value)}
                      description={
                        <p className='text-light-onSurfaceContainer dark:text-light-onSecondaryContainer'>
                          Al enviar aceptas el{' '}
                          <Link
                            href='/terms#correo'
                            isExternal
                            className='underline text-[12px] font-light text-light-onSurfaceContainer dark:text-light-onSecondaryContainer'
                          >
                            tratamiento de tu correo
                          </Link>
                          .
                        </p>
                      }
                    />
                  </div>
                  <Input
                    isRequired
                    classNames={{
                      input: '',
                      mainWrapper: 'bg-light-primary',
                      description:
                        'text-light-primary dark:text-dark-primary select-none'
                    }}
                    placeholder='Escribe el asunto'
                    onChange={(e) => setAsunto(e.target.value)}
                    name='asunto'
                    label='Asunto'
                  />
                  <Textarea
                    isRequired
                    classNames={{
                      input: 'resize-y min-h-[60px]',
                      mainWrapper: 'bg-light-primary',
                      description:
                        'text-light-primary dark:text-dark-primary select-none'
                    }}
                    label='Detalle'
                    name='detalle'
                    onChange={(e) => setDetalle(e.target.value)}
                    placeholder='Escribe el detalle del asunto.'
                  />
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={setContactCaptcha}
                  />
                </CardBody>
                <CardFooter>
                  <Button
                    type='submit'
                    className='font-semibold bg-light-primary text-light-onPrimary'
                    isDisabled={
                      !email1 ||
                      !name ||
                      !contactCaptcha ||
                      !asunto ||
                      !detalle ||
                      !validateEmail(email1)
                    }
                  >
                    Enviar
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </li>
        </ul>
        <ul className='bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4'>
          <h1 className='font-bold text-xl '>Solicitud de CV</h1>
          <li id='cv'>
            <form
              onSubmit={(event) =>
                submitCorreo(event, 'cv', !!cvCaptcha && cvCaptcha !== '', () =>
                  setCvCaptcha(null)
                )
              }
            >
              <Card className='bg-transparent shadow-none'>
                <CardBody className='gap-4'>
                  <div className='space-y-3 flex flex-col md:space-y-0 md:flex-row md:space-x-6'>
                    <Input
                      isRequired
                      classNames={{
                        input: '',
                        mainWrapper: 'bg-light-primary w-full',
                        description:
                          'text-light-primary dark:text-dark-primary select-none'
                      }}
                      placeholder='Escribe tu nombre'
                      name='name'
                      label='Nombre'
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                      type='email'
                      label='Email'
                      name='email'
                      isRequired
                      classNames={{
                        input: '',
                        mainWrapper: 'bg-light-primary w-full',
                        description:
                          'text-light-primary dark:text-dark-primary select-none'
                      }}
                      placeholder='Escribe tu correo'
                      onChange={(e) => setEmail1(e.target.value)}
                      description={
                        <p className='text-light-onSurfaceContainer dark:text-light-onSecondaryContainer'>
                          Al enviar aceptas el{' '}
                          <Link
                            href='/terms#correo'
                            isExternal
                            className='underline text-[12px] font-light text-light-onSurfaceContainer dark:text-light-onSecondaryContainer'
                          >
                            tratamiento de tu correo
                          </Link>
                          .
                        </p>
                      }
                    />
                  </div>

                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={setCvCaptcha}
                  />
                </CardBody>
                <CardFooter>
                  <Button
                    type='submit'
                    className='font-semibold bg-light-primary text-light-onPrimary'
                    isDisabled={
                      !email1 || !name || !cvCaptcha || !validateEmail(email1)
                    }
                  >
                    Enviar
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </li>
        </ul>
      </div>
    </section>
  )
}
