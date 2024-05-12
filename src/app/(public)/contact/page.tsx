'use client'
import Trabajando from '@components/Trabajando'
import { useState } from 'react'
import { Button } from '@nextui-org/react'
import { toast } from 'react-hot-toast'
import { Input } from '@nextui-org/input'
import { Textarea } from '@nextui-org/react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Link } from '@nextui-org/link'

export default function Contacto() {
  const [captcha, setCaptcha] = useState<string | null>()
  const [email1, setEmail1] = useState('')
  const [name, setName] = useState('')
  const [asunto, setAsunto] = useState('')
  const [detalle, setDetalle] = useState('')
  const submitCorreo = (
    event: React.FormEvent<HTMLFormElement>,
    emailType: string
  ) => {
    event.preventDefault() // Prevent the default form submission

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const name = formData.get('name')
    const detalle = formData.get('detalle')
    const asunto = formData.get('asunto')

    if (!email || !name || !emailType || !validateEmail(email.toString())) {
      toast.error('Por favor, introduce valores correctos.')
      return
    }

    if (emailType === 'contact' && (!detalle || !asunto)) {
      toast.error('Por favor, introduce valores completos.')
      return
    }
    if (!captcha) {
      toast.error('Por favor, completa el captcha.')
      return
    }

    // Utiliza toast.promise para manejar la promesa de la petición
    toast
      .promise(
        fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email.toString(),
            name: name.toString(),
            emailType: emailType,
            ...(emailType === 'contact' && {
              detalle: detalle ? detalle.toString() : '',
              asunto: asunto ? asunto.toString() : ''
            })
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
      .then(() => {
        setCaptcha('')
      })
  }

  // Función auxiliar para validar el correo electrónico
  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10 space-y-4'>
        <ul className='bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4'>
          <h1 className='font-bold text-xl '>Contacto</h1>

          <li id='contacto'>
            <form onSubmit={(event) => submitCorreo(event, 'contact')}>
              <Card className='bg-transparent shadow-none'>
                <CardBody className='gap-4'>
                  <div className='space-y-3 flex flex-col md:space-y-0 md:flex-row md:space-x-6'>
                    <div className='w-full'>
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
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='w-full'>
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
                    onChange={setCaptcha}
                  />
                </CardBody>
                <CardFooter>
                  <Button
                    type='submit'
                    className='font-semibold bg-light-primary text-light-onPrimary'
                    isDisabled={!email1 || !name || !captcha}
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
            <form onSubmit={(event) => submitCorreo(event, 'cv')}>
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
                    onChange={setCaptcha}
                  />
                </CardBody>
                <CardFooter>
                  <Button
                    type='submit'
                    className='font-semibold bg-light-primary text-light-onPrimary'
                    isDisabled={!email1 || !name || !captcha}
                  >
                    Enviar
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </li>
        </ul>
        <Trabajando />
      </div>
    </section>
  )
}
