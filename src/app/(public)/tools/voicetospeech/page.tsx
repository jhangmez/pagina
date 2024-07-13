'use client'

import { Button } from '@nextui-org/react'
import { useVoiceToText } from 'react-speakup'

export default function Educacion() {
  const { startListening, stopListening, transcript } = useVoiceToText()

  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10 space-y-10'>
        <div className='flex gap-2'>
          <Button
            onClick={startListening}
            className='bg-light-primaryContainer text-light-onPrimaryContainer dark:bg-dark-primaryContainer dark:text-dark-onPrimaryContainer'
          >
            Grabar
          </Button>
          <Button
            onClick={stopListening}
            className='bg-light-secondaryContainer text-light-onSecondaryContainer dark:bg-dark-secondaryContainer dark:text-dark-onSecondaryContainer'
          >
            Detener
          </Button>
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
      </div>
    </section>
  )
}
