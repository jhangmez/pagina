'use client'

import { useState, useCallback } from 'react'
import { Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import GraphvizDiagram from '@components/GraphvizDiagram'
import { FormData } from './types'

const INITIAL_DATA: FormData = {
  ingles: '',
  espanol: '',
  subtitle1: '',
  text1: '',
  subtitle2: '',
  text2: '',
  subtitle3: '',
  text3: '',
  subtitle4: '',
  text4: '',
  subtitle5: '',
  text5: '',
  subtitle6: '',
  text6: '',
  subtitle7: '',
  text7: '',
  subtitle8: '',
  text8: '',
  subtitle9: '',
  text9: ''
}

export default function MapaConceptual() {
  const [dataINITIAL, setDataINITIAL] = useState(INITIAL_DATA)
  const [activePair, setActivePair] = useState(1)

  const updateFields = useCallback((fields: Partial<FormData>) => {
    setDataINITIAL((prev) => {
      return { ...prev, ...fields }
    })
  }, [])

  function insertNewlines(text: String, wordsPerLine: number = 5) {
    let words = text.split(' ')
    let lines = []
    for (let i = 0; i < words.length; i += wordsPerLine) {
      lines.push(words.slice(i, i + wordsPerLine).join(' '))
    }
    return lines.join('\n')
  }

  const generateGraphviz = () => {
    return `digraph {
      graph [pad="0,0", splines=ortho]
      node [style=filled]
      A [label=<
      <br/>
      <b>${dataINITIAL.espanol}</b>
      <br/>
      ${
        dataINITIAL.ingles &&
        `
      <br/>
      ${dataINITIAL.ingles}
      <br/>`
      }
      >
      ,shape=box ,fillcolor="#f0ffff" pos="0,1!"]

      B [label=<<b>${
        dataINITIAL.subtitle1
      }</b>>, shape=box, style="rounded,filled", fillcolor="#ffcf98" pos="-8,-1!"]
      b[label="${insertNewlines(
        dataINITIAL.text1
      )}",fillcolor="#ffd08b", shape=box, style="rounded,filled", pos="-8,-2.5!"]
      ${
        dataINITIAL.subtitle2 &&
        `C [label=<<b>${
          dataINITIAL.subtitle2
        }</b>>, shape=box, style="rounded,filled",fillcolor="#98ff98" pos="-8,-4.5!"]
      c [label="${insertNewlines(
        dataINITIAL.text2
      )}",shape=box, style="rounded,filled",fillcolor="#8bff8b" pos="-8,-6!"]`
      }
      ${
        dataINITIAL.subtitle3 &&
        `D [label=<<b>${
          dataINITIAL.subtitle3
        }</b>>, shape=box, style="rounded,filled",fillcolor="#e5ccc9" pos="-4,-1!"]
        d [label="${insertNewlines(
          dataINITIAL.text3
        )}",shape=box, style="rounded,filled",fillcolor="#e9c9c5" pos="-4,-2!"]`
      }
      ${
        dataINITIAL.subtitle4 &&
        `E [label=<<b>${
          dataINITIAL.subtitle4
        }</b>>, shape=box, style="rounded,filled",fillcolor="#ff98de" pos="-4,-4.5!"]
        e [label="${insertNewlines(
          dataINITIAL.text4
        )}",shape=box, style="rounded,filled",fillcolor="#ff8be3" pos="-4,-6!"]`
      }

      ${
        dataINITIAL.subtitle5 &&
        `F [label=<<b>${
          dataINITIAL.subtitle5
        }</b>>, shape=box, style="rounded,filled",fillcolor="#fff8dc" pos="0,-1!"]
        f [label="${insertNewlines(
          dataINITIAL.text5
        )}",shape=box, style="rounded,filled",fillcolor="#fffbd8" pos="0,-2.5!"]`
      }
      ${
        dataINITIAL.subtitle6 &&
        `G [label=<<b>${
          dataINITIAL.subtitle6
        }</b>>, shape=box, style="rounded,filled",fillcolor="#f0fff0" pos="4,-4.5!"]
        g [label="${insertNewlines(
          dataINITIAL.text6
        )}",shape=box, style="rounded,filled",fillcolor="#eeffee" pos="4,-6!"]`
      }
      ${
        dataINITIAL.subtitle7 &&
        `H [label=<<b>${
          dataINITIAL.subtitle7
        }</b>>, shape=box, style="rounded,filled",fillcolor="#fff0f5" pos="4,-1!"]
      h [label="${insertNewlines(
        dataINITIAL.text7
      )}",shape=box, style="rounded,filled",fillcolor="#ffeef4" pos="4,-2.5!"]`
      }
      ${
        dataINITIAL.subtitle8 &&
        `I [label=<<b>${
          dataINITIAL.subtitle8
        }</b>>, shape=box, style="rounded,filled",fillcolor="#faf0e6" pos="8,-4.5!"]
      i [label="${insertNewlines(
        dataINITIAL.text8
      )}",shape=box, style="rounded,filled",fillcolor="#fdf0e3" pos="8,-6!"]`
      }
      ${
        dataINITIAL.subtitle9 &&
        `J [label=<<b>${
          dataINITIAL.subtitle9
        }</b>>,shape=box, style="rounded,filled",fillcolor="#fdcfca" pos="8,-1!"]
      j [label="${insertNewlines(
        dataINITIAL.text9
      )}",shape=box, style="rounded,filled",fillcolor="#ffcac4" pos="8,-2.5!"]`
      }

      A -> B
      ${dataINITIAL.subtitle2 && 'A -> C'}
      ${dataINITIAL.subtitle3 && 'A -> D'}
      ${dataINITIAL.subtitle4 && 'A -> E'}
      ${dataINITIAL.subtitle5 && 'A -> F'}
      ${dataINITIAL.subtitle6 && 'A -> G'}
      ${dataINITIAL.subtitle7 && 'A -> H'}
      ${dataINITIAL.subtitle8 && 'A -> I'}
      ${dataINITIAL.subtitle9 && 'A -> J'}

      B -> b
      ${dataINITIAL.subtitle2 && 'C -> c'}
      ${dataINITIAL.subtitle3 && 'D -> d'}
      ${dataINITIAL.subtitle4 && 'E -> e'}
      ${dataINITIAL.subtitle5 && 'F -> f'}
      ${dataINITIAL.subtitle6 && 'G -> g'}
      ${dataINITIAL.subtitle7 && 'H -> h'}
      ${dataINITIAL.subtitle8 && 'I -> i'}
      ${dataINITIAL.subtitle9 && 'J -> j'}
    }`
  }

  const [graphviz, setGraphviz] = useState<string | null>(null)

  const increasePair = () => {
    if (activePair < 9) {
      setActivePair(activePair + 1)
    }
  }

  const decreasePair = () => {
    if (activePair > 1) {
      setActivePair(activePair - 1)
    }
  }

  return (
    <section className='min-h-screen'>
      <div className='container mx-auto px-[20px] pt-5 space-y-3'>
        <p className='sm:text-3xl text-2xl font-semibold text-light-onSurface dark:text-dark-onSurface'>
          Generador de mapa conceptual
        </p>
        <p className='font-medium text-light-onSurface dark:text-dark-onSurface'>
          Agregar celdas
        </p>
        <div className='flex flex-wrap gap-2'>
          <Button
            className='bg-light-secondary text-light-onSecondary dark:bg-dark-secondary dark:text-dark-onSecondary font-semibold'
            onPress={decreasePair}
            isDisabled={activePair === 1}
          >
            Disminuir
          </Button>

          <Button
            className='bg-light-secondary text-light-onSecondary dark:bg-dark-secondary dark:text-dark-onSecondary font-semibold'
            onPress={increasePair}
            isDisabled={activePair === 9}
          >
            Agregar
          </Button>
        </div>
        <section className='flex flex-wrap gap-5'>
          <Textarea
            label='Título en español'
            disableAnimation
            isRequired
            disableAutosize
            value={dataINITIAL.espanol}
            onChange={(e) => updateFields({ espanol: e.target.value })}
            classNames={{
              base: 'max-w-full sm:max-w-xs',
              input: 'resize-y min-h-32'
            }}
            placeholder='Escribe el titulo en español'
          />
          <Textarea
            label='Título en inglés'
            disableAnimation
            disableAutosize
            value={dataINITIAL.ingles}
            onChange={(e) => updateFields({ ingles: e.target.value })}
            classNames={{
              base: 'max-w-full sm:max-w-xs',
              input: 'resize-y min-h-32'
            }}
            placeholder='Escribe el titulo en ingles'
          />
          <Textarea
            label='Subtitulo 1'
            disableAnimation
            isRequired
            disableAutosize
            value={dataINITIAL.subtitle1}
            onChange={(e) => updateFields({ subtitle1: e.target.value })}
            classNames={{
              base: 'max-w-full sm:max-w-xs',
              input: 'resize-y min-h-32'
            }}
            placeholder='Escribe el subtitulo 1'
          />
          <Textarea
            label='Texto 1'
            disableAnimation
            isRequired
            disableAutosize
            value={dataINITIAL.text1}
            onChange={(e) => updateFields({ text1: e.target.value })}
            classNames={{
              base: 'max-w-full sm:max-w-xs',
              input: 'resize-y min-h-32'
            }}
            placeholder='Escribe el texto 1'
          />
          {activePair >= 2 && (
            <>
              <Textarea
                label='Subtitulo 2'
                disableAnimation
                disableAutosize
                value={dataINITIAL.subtitle2}
                onChange={(e) => updateFields({ subtitle2: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el subtitulo 2'
              />
              <Textarea
                label='Texto 2'
                disableAnimation
                disableAutosize
                value={dataINITIAL.text2}
                onChange={(e) => updateFields({ text2: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el texto 2'
              />
            </>
          )}
          {activePair >= 3 && (
            <>
              <Textarea
                label='Subtitulo 3'
                disableAnimation
                disableAutosize
                value={dataINITIAL.subtitle3}
                onChange={(e) => updateFields({ subtitle3: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el subtitulo 3'
              />
              <Textarea
                label='Texto 3'
                disableAnimation
                disableAutosize
                value={dataINITIAL.text3}
                onChange={(e) => updateFields({ text3: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el texto 3'
              />
            </>
          )}
          {activePair >= 4 && (
            <>
              <Textarea
                label='Subtitulo 4'
                disableAnimation
                disableAutosize
                value={dataINITIAL.subtitle4}
                onChange={(e) => updateFields({ subtitle4: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el subtitulo 4'
              />
              <Textarea
                label='Texto 4'
                disableAnimation
                disableAutosize
                value={dataINITIAL.text4}
                onChange={(e) => updateFields({ text4: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el texto 4'
              />
            </>
          )}
          {activePair >= 5 && (
            <>
              <Textarea
                label='Subtitulo 5'
                disableAnimation
                disableAutosize
                value={dataINITIAL.subtitle5}
                onChange={(e) => updateFields({ subtitle5: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el subtitulo 5'
              />
              <Textarea
                label='Texto 5'
                disableAnimation
                disableAutosize
                value={dataINITIAL.text5}
                onChange={(e) => updateFields({ text5: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el texto 5'
              />
            </>
          )}
          {activePair >= 6 && (
            <>
              <Textarea
                label='Subtitulo 6'
                disableAnimation
                disableAutosize
                value={dataINITIAL.subtitle6}
                onChange={(e) => updateFields({ subtitle6: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el subtitulo 6'
              />
              <Textarea
                label='Texto 6'
                disableAnimation
                disableAutosize
                value={dataINITIAL.text6}
                onChange={(e) => updateFields({ text6: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el texto 6'
              />
            </>
          )}
          {activePair >= 7 && (
            <>
              <Textarea
                label='Subtitulo 7'
                disableAnimation
                disableAutosize
                value={dataINITIAL.subtitle7}
                onChange={(e) => updateFields({ subtitle7: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el subtitulo 7'
              />
              <Textarea
                label='Texto 7'
                disableAnimation
                disableAutosize
                value={dataINITIAL.text7}
                onChange={(e) => updateFields({ text7: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el texto 7'
              />
            </>
          )}
          {activePair >= 8 && (
            <>
              <Textarea
                label='Subtitulo 8'
                disableAnimation
                disableAutosize
                value={dataINITIAL.subtitle8}
                onChange={(e) => updateFields({ subtitle8: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el subtitulo 8'
              />
              <Textarea
                label='Texto 8'
                disableAnimation
                disableAutosize
                value={dataINITIAL.text8}
                onChange={(e) => updateFields({ text8: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el texto 8'
              />
            </>
          )}
          {activePair >= 9 && (
            <>
              <Textarea
                label='Subtitulo 9'
                disableAnimation
                disableAutosize
                value={dataINITIAL.subtitle9}
                onChange={(e) => updateFields({ subtitle9: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el subtitulo 9'
              />
              <Textarea
                label='Texto 9'
                disableAnimation
                disableAutosize
                value={dataINITIAL.text9}
                onChange={(e) => updateFields({ text9: e.target.value })}
                classNames={{
                  base: 'max-w-full sm:max-w-xs',
                  input: 'resize-y min-h-32'
                }}
                placeholder='Escribe el texto 9'
              />
            </>
          )}
        </section>
        <Button
          className='bg-light-primary text-light-onPrimary dark:bg-dark-primary dark:text-dark-onPrimary font-semibold'
          isDisabled={
            !dataINITIAL.espanol || !dataINITIAL.subtitle1 || !dataINITIAL.text1
          }
          onPress={() => {
            setGraphviz(generateGraphviz()) // Update the state to trigger re-render
          }}
        >
          Crear diagrama
        </Button>
        {graphviz ? (
          <GraphvizDiagram dot={graphviz} />
        ) : (
          <section className='border-transparent rounded-xl bg-light-surfaceVariant dark:bg-dark-surfaceVariant h-96 max-w-full'>
            <div className='flex flex-col h-full items-center justify-center select-none opacity-60'>
              <p className='text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
                Aquí se renderizará tu gráfico
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
          </section>
        )}
      </div>
    </section>
  )
}
