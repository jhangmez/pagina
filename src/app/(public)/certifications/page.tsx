'use client'

import Trabajando from '@components/Trabajando'
import Data from '@components/Carrousel/certificados/data.json'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import { useState } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@nextui-org/modal'
import { Card } from '@nextui-org/card'
import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'

export default function Certificaciones() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [selectedCardData, setSelectedCardData] =
    useState<Certification | null>(null)
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10'>
        <h2 className='font-bold text-2xl text-light-onSurface dark:text-dark-onSurface'>
          Certificaciones
        </h2>
        <ul className='container flex flex-wrap justify-center pt-10 gap-8'>
          {Data.map((dato, index) => (
            <li className='cursor-pointer hover:opacity-hover pressed:scale-[0.97] select-none transition-transform-colors-opacity motion-reduce:transition-none'>
              <Card
                key={index}
                shadow='none'
                className={`w-[${dato.ancho}px] h-[${dato.altura}px] p-2 bg-transparent`}
              >
                <Image
                  as={NextImage}
                  removeWrapper
                  onClick={() => {
                    setSelectedCardData(dato)
                    onOpen()
                  }}
                  alt='Imagen de los certificados'
                  classNames={{
                    img: `contain`
                  }}
                  height={dato.altura}
                  width={dato.ancho}
                  src={dato.url}
                  fallbackSrc='/api/img?width=385&height=500&title=Cargando&description=null&bg=C1C9BE&color=727970'
                />
              </Card>
            </li>
          ))}
        </ul>
        <Modal
          isDismissable={true}
          size='5xl'
          isOpen={isOpen}
          backdrop='blur'
          placement='center'
          classNames={{ base: 'bg-light-onBackground/90' }}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1 text-2xl text-dark-primary'>
                  {selectedCardData?.nombre || 'Título no disponible'}
                </ModalHeader>
                <ModalBody className='flex flex-col md:flex-row lg:flex-row '>
                  {selectedCardData?.altura &&
                    selectedCardData.ancho &&
                    selectedCardData.url && (
                      <div className='flex justify-center w-full'>
                        <Image
                          as={NextImage}
                          alt='Imagen de los partners'
                          removeWrapper
                          height={selectedCardData.altura}
                          width={selectedCardData.ancho}
                          src={selectedCardData.url}
                          fallbackSrc='/api/img?width=385&height=297&title=Cargando&description=null&bg=C1C9BE&color=727970'
                        />
                      </div>
                    )}

                  <div className=' lg:w-2/3 md:w-2/3 w-auto'>
                    <Link
                      isExternal
                      showAnchorIcon
                      href={selectedCardData?.url_empresa || '#'}
                      className='font-semibold text-xl text-light-surface dark:text-dark-onSurface underline'
                    >
                      {selectedCardData?.empresa || 'No empresa'}
                    </Link>

                    <ul className='pb-1'>
                      <li>
                        <p className='text-light-surface dark:text-dark-onSurface font-medium'>
                          Expedición:{' '}
                          {selectedCardData?.fecha_expedicion || 'Fecha'}
                        </p>
                      </li>
                      {selectedCardData?.fecha_caducidad && (
                        <li>
                          <p className='text-light-surface dark:text-dark-onSurface font-medium'>
                            Caducidad:{' '}
                            {selectedCardData?.fecha_caducidad || 'No caduca'}
                          </p>
                        </li>
                      )}
                    </ul>
                    <p className='text-light-surface dark:text-dark-onSurface text-sm'>
                      ID de la credencial :{' '}
                      {selectedCardData?.id_credencial || 'No caduca'}
                    </p>
                    <p className='text-light-surface dark:text-dark-onSurface py-3'>
                      {selectedCardData?.descripcion || 'No caduca'}
                    </p>

                    <Link
                      isExternal
                      showAnchorIcon
                      href={selectedCardData?.url_credencial || '#'}
                      className='font-semibold text-lg text-light-surface dark:text-dark-onSurface underline pt-3'
                    >
                      Mostrar credencial
                    </Link>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    onPress={onClose}
                    className='font-semibold text-dark-error bg-dark-onError/50 dark:bg-dark-onError/80'
                  >
                    Cerrar
                  </Button>
                  {/* <Button
                      isDisabled={false}
                      // type='submit'
                      onPress={onClose}
                      className='font-semibold bg-light-primary text-light-onPrimary'
                    >
                      Solicitar
                    </Button> */}
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  )
}
