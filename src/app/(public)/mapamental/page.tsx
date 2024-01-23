'use client'

import { useState, useCallback } from 'react'
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

  const [graphviz, setGraphviz] = useState(generateGraphviz())

  return (
    <section className='min-h-screen'>
      <div className='container mx-auto px-[20px] pt-10'>
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
          onClick={() => setGraphviz(generateGraphviz())} // Update the state to trigger re-render
        >
          Crear diagrama
        </Button>
        <GraphvizDiagram dot={graphviz} />
      </div>
    </section>
  )
}
