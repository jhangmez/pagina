'use client'

import { Button } from '@nextui-org/react'
import { useUwuMode } from '@contexts/uwu'
import ContactModal from '@components/ContactModal'
import { ModalType } from '@typescustom/modalTypes'
import { useState } from 'react'

export default function Contactame() {
  const { isUwuMode } = useUwuMode()
  const [isOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState<ModalType>('')

  const onOpen = (type: ModalType) => {
    setModalType(type)
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <section className='flex lg:flex-row flex-col py-10  py-48 justify-between items-center gap-4 lg:pr-20'>
      <h1 className='text-light-onSurface dark:text-light-onPrimary font-bold lg:text-6xl md:text-6xl text-5xl lg:pb-0 md:pb-10 pb-10'>
        ¿Necesitas apoyo en tu equipo?
      </h1>
      <Button
        variant='flat'
        size='lg'
        className={`${
          isUwuMode
            ? 'bg-light-tertiary dark:bg-dark-tertiary text-light-onTertiary dark:text-dark-onTertiary'
            : 'bg-light-secondary dark:bg-dark-secondary text-light-onSecondary dark:text-dark-onSecondary'
        } font-semibold text-xl `}
        onPress={() => onOpen('contact')}
      >
        Contáctame
      </Button>
      <ContactModal isOpen={isOpen} onClose={onClose} modalType={modalType} />
    </section>
  )
}
