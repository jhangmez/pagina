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
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    asunto: '',
    detalle: '',
    captcha: null as string | null
  })

  const [cvForm, setCvForm] = useState({
    name: '',
    email: '',
    captcha: null as string | null
  })

  const resetContactForm = () => {
    setContactForm((prevState) => ({
      ...prevState,
      name: '',
      email: '',
      asunto: '',
      detalle: ''
    }))
  }

  const resetCvForm = () => {
    setCvForm((prevState) => ({
      ...prevState,
      name: '',
      email: ''
    }))
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCvForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitContact = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    try {
      submitCorreo(event, 'contact', !!contactForm.captcha, () =>
        setContactForm((prev) => ({ ...prev }))
      )
      resetContactForm()
    } catch (error) {
      console.error('Error al enviar el formulario de contacto:', error)
    }
  }

  const handleSubmitCv = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      submitCorreo(event, 'cv', !!cvForm.captcha, () =>
        setCvForm((prev) => ({ ...prev }))
      )
      resetCvForm()
    } catch (error) {
      console.error('Error al enviar el formulario de CV:', error)
    }
  }

  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10 space-y-4'>
        <ul className='bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4'>
          <h1 className='font-bold text-xl'>Contacto</h1>

          <li id='contacto'>
            <form onSubmit={handleSubmitContact}>
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
                      value={contactForm.name}
                      onChange={handleContactChange}
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
                      value={contactForm.email}
                      onChange={handleContactChange}
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
                    value={contactForm.asunto}
                    onChange={handleContactChange}
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
                    value={contactForm.detalle}
                    onChange={handleContactChange}
                    placeholder='Escribe el detalle del asunto.'
                  />
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={(value) =>
                      setContactForm((prev) => ({ ...prev, captcha: value }))
                    }
                  />
                </CardBody>
                <CardFooter>
                  <Button
                    type='submit'
                    className='font-semibold bg-light-primary text-light-onPrimary'
                    isDisabled={
                      !contactForm.email ||
                      !contactForm.name ||
                      !contactForm.captcha ||
                      !contactForm.asunto ||
                      !contactForm.detalle ||
                      !validateEmail(contactForm.email)
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
          <h1 className='font-bold text-xl'>Solicitud de CV</h1>
          <li id='cv'>
            <form onSubmit={handleSubmitCv}>
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
                      value={cvForm.name}
                      onChange={handleCvChange}
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
                      value={cvForm.email}
                      onChange={handleCvChange}
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
                    onChange={(value) =>
                      setCvForm((prev) => ({ ...prev, captcha: value }))
                    }
                  />
                </CardBody>
                <CardFooter>
                  <Button
                    type='submit'
                    className='font-semibold bg-light-primary text-light-onPrimary'
                    isDisabled={
                      !cvForm.email ||
                      !cvForm.name ||
                      !cvForm.captcha ||
                      !validateEmail(cvForm.email)
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
