'use client'

import { useState } from 'react'
import { Input } from '@nextui-org/input'
import { Slider } from '@nextui-org/slider'
import { Snippet } from '@nextui-org/snippet'
import { HexColorPicker } from 'react-colorful'
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover'
import { Button } from '@nextui-org/button'
import { toast } from 'react-hot-toast'

const hexToRgba = (hex: string, alpha: number) => {
  const bigint = parseInt(hex.slice(1), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export default function GradientColor() {
  const [copied, setCopied] = useState(false)
  const [hexColor, setHexColor] = useState('#166f78')
  const [opacity, setOpacity] = useState<number>(50)
  const [gradient, setGradient] = useState(
    'radial-gradient(100% 50% at 50% 0%, rgba(22, 111, 120, 0.09) 0%, rgba(22, 111, 120, 0.03) 50%, rgba(22, 111, 120, 0) 100%)'
  )
  const handleHexColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value
    setHexColor(hex)
    updateGradient(hex, opacity)
  }

  const handleOpacityChange = (value: number | number[]) => {
    const opacityValue = Array.isArray(value) ? value[0] : value
    setOpacity(opacityValue)
    updateGradient(hexColor, opacityValue)
  }

  const updateGradient = (hex: string, opacityPercent: number) => {
    const opacityFactor = opacityPercent / 100
    const gradient = `radial-gradient(100% 50% at 50% 0%, ${hexToRgba(
      hex,
      0.3 * opacityFactor
    )} 0%, ${hexToRgba(hex, 0.1 * opacityFactor)} 50%, ${hexToRgba(
      hex,
      0
    )} 100%)`
    setGradient(gradient)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(gradient)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
    toast.success('Gradiente copiada!', {
      iconTheme: { primary: hexColor, secondary: '#fff' }
    })
  }
  return (
    <section className='min-h-screen' style={{ background: `${gradient}` }}>
      <div className='container mx-auto px-[20px] pt-10 space-y-3'>
        <p className='sm:text-3xl text-2xl font-semibold text-light-onSurface dark:text-dark-onSurface'>
          Generador de gradientes para backgrounds
        </p>
        <div className='space-y-1'>
          <p className='font-medium text-light-onSurface dark:text-dark-onSurface'>
            Selecciona o copia el color
          </p>
          <Input
            type='text'
            value={hexColor}
            onChange={handleHexColorChange}
            placeholder='#F9FAF4'
            classNames={{ base: 'max-w-56' }}
            className='input'
            endContent={
              <>
                <Popover placement='bottom'>
                  <PopoverTrigger>
                    <Button
                      size='sm'
                      style={{
                        backgroundColor: hexColor
                      }}
                      className='min-h-unit-1 min-w-unit-1 max-h-5 max-w-5 gap-unit-0'
                    ></Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <HexColorPicker
                      color={hexColor}
                      onChange={(newColor) => {
                        setHexColor(newColor)
                        updateGradient(newColor, opacity)
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </>
            }
          />
        </div>

        <Slider
          minValue={0}
          value={opacity}
          classNames={{
            base: '',
            label:
              'text-light-onSurface dark:text-dark-onSurface font-semibold',
            value: 'text-light-onSurface dark:text-dark-onSurface font-semibold'
          }}
          defaultValue={opacity}
          onChange={handleOpacityChange}
          maxValue={100}
          label='Opacidad (0-100)'
        />
        <div className='space-y-1'>
          <p className='font-medium text-light-onSurface dark:text-dark-onSurface'>
            Resultado
          </p>
          <Input
            as={'code'}
            isReadOnly
            onClick={handleCopy}
            endContent={
              copied ? (
                <>
                  <span className='text-sm lg:flex md:flex hidden print:hidden'>
                    Copiado
                  </span>{' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='currentColor'
                      d='M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z'
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span className='text-sm lg:flex md:flex hidden print:hidden mr-3'>
                    Copiar
                  </span>{' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    className='print:hidden'
                  >
                    <path
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 9V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C10.52 3 11.08 3 12.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v5.6c0 1.12 0 1.68-.218 2.108a2.002 2.002 0 0 1-.874.874C19.48 15 18.92 15 17.803 15H15M9 9H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 10.52 3 11.08 3 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.607c1.117 0 1.676 0 2.104-.218a2 2 0 0 0 .874-.874c.218-.428.218-.987.218-2.105V15M9 9h2.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V15'
                    />
                  </svg>
                </>
              )
            }
            value={gradient}
          />
        </div>
      </div>
    </section>
  )
}
