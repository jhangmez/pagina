'use client'

import { useState } from 'react'
import { Button } from '@nextui-org/react'
import { useVoiceToText } from 'react-speakup'

export default function SpeechtoText() {
  const { startListening, stopListening, transcript } = useVoiceToText({
    lang: 'en-US'
  })
  const [isRecording, setIsRecording] = useState(false)

  // Función para manejar el inicio de la grabación
  const handleStartListening = () => {
    startListening()
    setIsRecording(true) // Activa el estado de grabación
  }

  // Función para manejar el fin de la grabación
  const handleStopListening = () => {
    stopListening()
    setIsRecording(false) // Desactiva el estado de grabación
  }
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10 space-y-10'>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <Button
              onClick={handleStartListening}
              isDisabled={isRecording}
              className='bg-light-primaryContainer text-light-onPrimaryContainer dark:bg-dark-primaryContainer dark:text-dark-onPrimaryContainer'
            >
              Grabar
            </Button>
            <Button
              onClick={handleStopListening}
              isDisabled={!isRecording}
              className='bg-light-secondaryContainer text-light-onSecondaryContainer dark:bg-dark-secondaryContainer dark:text-dark-onSecondaryContainer'
            >
              Detener
            </Button>
          </div>
          <p className='bg-light-primaryContainer dark:bg-dark-onSurfaceVariant text-sm w-fit py-1 px-2 font-medium rounded-xl flex flex-row items-center gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1em'
              height='1em'
              viewBox='0 0 24 24'
            >
              <g fill='none'>
                <path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
                <path
                  fill='currentColor'
                  d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-9a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1'
                />
              </g>
            </svg>
            Debe dar acceso al micrófono
          </p>
        </div>
        <section className='border-transparent rounded-xl bg-light-surfaceVariant dark:bg-dark-surfaceVariant h-96 max-w-full p-5 overflow-auto	'>
          {!transcript ? (
            <div className='flex flex-col h-full items-center justify-center select-none opacity-60'>
              <p className='text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
                Aquí se renderizará tu contenido
              </p>
              <div className='w-fit justify-start items-center gap-1 inline-flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 24 24'
                  className='text-light-onSurface dark:text-dark-onSurface'
                >
                  <path
                    fill='currentColor'
                    d='M8 12v2q0 1.65 1.175 2.825T12 18q1.65 0 2.825-1.175T16 14v-2zm4 4.5q-1.05 0-1.775-.725T9.5 14v-.5h5v.5q0 1.05-.725 1.775T12 16.5M8.5 7q-.95 0-1.687.688T5.775 9.575l1.45.35q.15-.65.5-1.037T8.5 8.5q.425 0 .775.388t.5 1.037l1.45-.35q-.3-1.2-1.037-1.887T8.5 7m7 0q-.95 0-1.687.688t-1.038 1.887l1.45.35q.15-.65.5-1.037T15.5 8.5q.425 0 .775.388t.5 1.037l1.45-.35q-.3-1.2-1.037-1.887T15.5 7M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20'
                  />
                </svg>
                <div>
                  <span className='text-light-onSurface dark:text-dark-onSurface text-2xl font-bold leading-[44px]'>
                    jhan
                  </span>
                  <span className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
                    gmez
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <span className='text-light-primary dark:text-dark-primary text-xl font-medium'>
              {transcript}
            </span>
          )}
        </section>
        <section className='flex gap-1 flex-col bg-light-primaryContainer dark:bg-dark-onSurfaceVariant text-sm w-fit p-2  font-medium rounded-xl'>
          <h1 className='font-semibold'>Sugerencias</h1>
          <p className='text-sm py-1 px-2 font-medium'>
            • Algunos navegadores no son compatibles, como Opera.
          </p>
          <p className='text-sm py-1 px-2 font-medium'>
            • Esta herramienta trabaja localmente en tu dispositivo, ninguna
            grabación es guardada.
          </p>
        </section>
      </div>
    </section>
  )
}
