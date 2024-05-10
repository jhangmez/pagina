'use client'

import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import Data from './data.json'
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
import { Button } from '@nextui-org/button'
import Slider from 'react-slick'
import { Link } from '@nextui-org/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function CarrouselCertifications() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [selectedCardData, setSelectedCardData] =
    useState<Certification | null>(null)

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <>
      <div className='slider-container bg-light-surfaceContainer dark:bg-light-secondaryContainer border rounded-xl shadow-md p-4 w-full'>
        <h1 className='font-bold text-2xl mb-4'>Certificaciones</h1>
        <Slider {...settings} autoplay dots={false} arrows={false}>
          {Data.map((dato, index) => (
            <Card
              key={index}
              shadow='none'
              className={`w-[${dato.ancho}px] h-[${dato.altura}px] p-2 select-none bg-transparent cursor-pointer hover:opacity-hover pressed:scale-[0.97] select-none transition-transform-colors-opacity motion-reduce:transition-none`}
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
          ))}
        </Slider>
        <Link
          href='/certifications'
          className='font-semibold lg:text-lg md:text-lg text-light-onSurface hover:underline active:underline flex items-center justify-end py-2'
        >
          Mostrar completo
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 1024 1024'
          >
            <path
              fill='currentColor'
              d='M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z'
            />
          </svg>
        </Link>
      </div>
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
    </>
  )
}
