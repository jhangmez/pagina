'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import GraphvizDiagram from '@components/GraphvizDiagram'
import { FormData } from './types'

const INITIAL_DATA: FormData = {
  ingles: '',
  espanol: ''
}

export default function MapaMental() {
  const [dataINITIAL, setDataINITIAL] = useState(INITIAL_DATA)

  const updateFields = useCallback((fields: Partial<FormData>) => {
    setDataINITIAL((prev) => {
      return { ...prev, ...fields }
    })
  }, [])

  const generateGraphviz = () => {
    return `digraph {
      graph [pad="0,0", splines=ortho]
      node [style=filled]
      A [label=<
      <br/>
      <b>${dataINITIAL.ingles}</b>
      <br/><br/>
      ${dataINITIAL.espanol}
      <br/><br/>> 
      ,shape=box ,fillcolor="#f0ffff" pos="0,1!"]
    
      B [label=<<b>Descripción del artículo</b>>, shape=box, style="rounded,filled", fillcolor="#ffcf98" pos="-8,-1!"]
      b[label="Diagnóstico sobre el Nivel de\nMadurez de Alineación Estratégica de\nlas Tecnologías de la Información\ny el Negocio de una\nEntidad del Sector Salud de\nVillavicencio mediante el Modelo SAM\nde Luftman",fillcolor="#ffd08b", shape=box, style="rounded,filled", pos="-8,-2.5!"]
    
      C [label=<<b>Problema de investigación</b>>, shape=box, style="rounded,filled",fillcolor="#98ff98" pos="-8,-4.5!"]
      c [label="Evaluar la alineación estratégica TI-Negocio\nen una entidad de salud\nde Villavicencio. Utiliza el modelo\nSAM de Luftman para analizar\nprocesos, estructura y normativas, proponiendo\nmejoras.",shape=box, style="rounded,filled",fillcolor="#8bff8b" pos="-8,-6!"]
    
      D [label=<<b>Tipo de Investigación</b>>, shape=box, style="rounded,filled",fillcolor="#e5ccc9" pos="-4,-1!"]
      d [label="Estudio de caso",shape=box, style="rounded,filled",fillcolor="#e9c9c5" pos="-4,-2!"]
    
      E [label=<<b>Metodología</b>>, shape=box, style="rounded,filled",fillcolor="#ff98de" pos="-4,-4.5!"]
      e [label="Emplea el Modelo SAM de\nLuftman para evaluar la Alineación\nEstratégica TI-Negocio en entidad de\nsalud en Villavicencio. Utiliza cuestionarios\ny entrevistas para analizar madurez\ny propone mejoras.",shape=box, style="rounded,filled",fillcolor="#ff8be3" pos="-4,-6!"]
    
      F [label=<<b>Conclusión</b>>, shape=box, style="rounded,filled",fillcolor="#fff8dc" pos="0,-1!"]
      f [label="Se basan en el análisis\nde los resultados obtenidos a\ntravés de la aplicación del\ninstrumento SAM de Luftman en\nuna Entidad de Salud de\nVillavicencio.",shape=box, style="rounded,filled",fillcolor="#fffbd8" pos="0,-2.5!"]
      
      G [label=<<b>Aportes</b>>, shape=box, style="rounded,filled",fillcolor="#f0fff0" pos="4,-4.5!"]
      g [label="El documento presenta el Modelo\nSAM de Luftman, una herramienta\npara evaluar la alineación estratégica\nentre Tecnologías de la Información\ny el negocio en organizaciones.\n",shape=box, style="rounded,filled",fillcolor="#eeffee" pos="4,-6!"]
    
      H [label=<<b>Autores</b>>, shape=box, style="rounded,filled",fillcolor="#fff0f5" pos="4,-1!"]
      h [label="Gloria Patricia Restrepo\nEspinel",shape=box, style="rounded,filled",fillcolor="#ffeef4" pos="4,-2.5!"]
    
      I [label=<<b>Año de publicación</b>>, shape=box, style="rounded,filled",fillcolor="#faf0e6" pos="8,-4.5!"]
      i [label="2020",shape=box, style="rounded,filled",fillcolor="#fdf0e3" pos="8,-6!"]
    
      J [label=<<b>Universidad</b>>,shape=box, style="rounded,filled",fillcolor="#fdcfca" pos="8,-1!"]
      j [label="Universidad Nacional de Colombia",shape=box, style="rounded,filled",fillcolor="#ffcac4" pos="8,-2.5!"]
      
      A -> B
      A -> C
      A -> D
      A -> E
      A -> F
      A -> G
      A -> H
      A -> I
      A -> J
    
      B -> b
      C -> c
      D -> d
      E -> e
      F -> f
      G -> g
      H -> h
      I -> i
      J -> j
    }`
  }

  const [graphviz, setGraphviz] = useState<string | null>(null)

  return (
    <section className='min-h-screen'>
      <div className='container mx-auto px-[20px] pt-5 space-y-3'>
        <p className='sm:text-3xl text-2xl font-semibold text-light-onSurface dark:text-dark-onSurface'>
          Generador de mapa mental
        </p>
        <section className='flex flex-wrap gap-5'>
          <Textarea
            label='Título en inglés'
            disableAnimation
            isRequired
            disableAutosize
            value={dataINITIAL.ingles}
            onChange={(e) => updateFields({ ingles: e.target.value })}
            classNames={{
              base: 'max-w-xs',
              input: 'resize-y min-h-32'
            }}
            placeholder='Escribe el titulo en ingles'
          />
          <Textarea
            label='Título en español'
            disableAnimation
            isRequired
            disableAutosize
            value={dataINITIAL.espanol}
            onChange={(e) => updateFields({ espanol: e.target.value })}
            classNames={{
              base: 'max-w-xs',
              input: 'resize-y min-h-32'
            }}
            placeholder='Escribe el titulo en español'
          />
        </section>
        <Button
          className='bg-light-primary text-light-onPrimary dark:bg-dark-primary dark:text-dark-onPrimary'
          isDisabled={!dataINITIAL.espanol || !dataINITIAL.ingles}
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
