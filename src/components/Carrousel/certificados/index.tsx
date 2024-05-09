'use client'

import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import Data from './data.json'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@nextui-org/modal'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Button } from '@nextui-org/button'
const options: EmblaOptionsType = { align: 'start', loop: true }
export default function CarrouselCertifications() {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <section className='mx-auto max-w-full overflow-x-auto'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='touch-pan-y flex'>
          {Data.map((dato, index) => (
            <div onClick={onOpen} className='pl-1 mr-8' key={index}>
              <div className='flex items-center justify-center'>
                <Card className={`w-[385px] h-auto ml-5 select-none`}>
                  <Image
                    as={NextImage}
                    removeWrapper
                    alt='Imagen de los partners'
                    radius='none'
                    classNames={{
                      img: `w-full h-fit object-cover object-bottom transition-all ease-in-out `
                    }}
                    height={dato.altura}
                    width={dato.ancho}
                    src={dato.url}
                    fallbackSrc={`/api/img?width=${dato.ancho}&height=${dato.altura}&title=Cargando&description=null&bg=C1C9BE&color=727970`}
                  />
                  <Modal
                    size='5xl'
                    isDismissable={true}
                    isOpen={isOpen}
                    backdrop='opaque'
                    onOpenChange={onOpenChange}
                  >
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className='flex flex-col gap-1'>
                            {dato.nombre}
                          </ModalHeader>
                          <ModalBody>
                            <Image
                              as={NextImage}
                              removeWrapper
                              alt='Imagen de los partners'
                              radius='none'
                              classNames={{
                                img: `w-full h-fit object-cover object-bottom transition-all ease-in-out `
                              }}
                              height={dato.altura}
                              width={dato.ancho}
                              src={dato.url}
                              fallbackSrc={`/api/img?width=${dato.ancho}&height=${dato.altura}&title=Cargando&description=null&bg=C1C9BE&color=727970`}
                            />
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color='danger'
                              variant='light'
                              onPress={onClose}
                            >
                              Close
                            </Button>
                            <Button color='primary' onPress={onClose}>
                              Action
                            </Button>
                          </ModalFooter>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
