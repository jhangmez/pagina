import React, { useState } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@nextui-org/modal'
import { Input } from '@nextui-org/input'
import { Textarea } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { Link } from '@nextui-org/link'
import ReCAPTCHA from 'react-google-recaptcha'
import { submitCorreo, validateEmail } from '@utils/emailUtils'
import { ModalType } from '@typescustom/modalTypes'

type ContactModalProps = {
  isOpen: boolean
  onClose: () => void
  modalType: ModalType
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  modalType
}) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [asunto, setAsunto] = useState('')
  const [detalle, setDetalle] = useState('')
  const [captcha, setCaptcha] = useState<string | null>()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    submitCorreo(event, modalType, !!captcha && captcha !== '', () =>
      setCaptcha('')
    )
    onClose()
  }

  return (
    <Modal
      className='bg-light-background dark:bg-dark-background'
      classNames={{
        base: 'lg:min-h-screen md:min-h-screen lg:w-auto lg:rounded-none md:rounded-none rounded-b-none mx-0 sm:mx-0',
        wrapper: 'flex justify-end',
        backdrop: 'bg-light-surface/50 dark:bg-dark-surface/50',
        header: 'text-light-onBackground dark:text-dark-onBackground font-bold',
        body: 'text-light-onBackground dark:text-dark-onBackground'
      }}
      isOpen={isOpen}
      onOpenChange={onClose}
    >
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit}>
            <ModalHeader className='flex flex-col gap-1'>
              {modalType === 'contact' && <>Contacto</>}
              {modalType === 'cv' && <>Solicitud de Currículum</>}
            </ModalHeader>
            <ModalBody>
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
                onChange={(e) => setEmail(e.target.value)}
                description={
                  <p>
                    Al enviar aceptas el{' '}
                    <Link
                      href='/terms#correo'
                      isExternal
                      className='underline text-[12px] font-light text-light-primary dark:text-dark-primary'
                    >
                      tratamiento de tu correo
                    </Link>
                    .
                  </p>
                }
              />
              {modalType === 'contact' && (
                <>
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
                </>
              )}
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={setCaptcha}
              />
              <p className='text-tiny text-light-primary dark:text-dark-primary leading-5'>
                * El correo y archivo adjunto están verificados <br /> y no
                contienen virus.
              </p>
              <p className='text-tiny text-light-primary dark:text-dark-primary w-fit'>
                * Es posible que llegue a la carpeta de SPAM.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                onPress={onClose}
                className='font-semibold text-dark-error bg-dark-onError/50 dark:bg-dark-onError/80'
              >
                Cancelar
              </Button>
              <Button
                isDisabled={
                  !email ||
                  !name ||
                  !captcha ||
                  !validateEmail(email) ||
                  (modalType === 'contact' && (!asunto || !detalle))
                }
                type='submit'
                className='font-semibold bg-light-primary text-light-onPrimary'
              >
                Solicitar
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ContactModal
