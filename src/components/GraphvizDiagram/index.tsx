'use client'

import React, { useEffect, useState, useRef } from 'react'
import { graphviz } from 'd3-graphviz'
import { saveAs } from 'file-saver'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown'
import { Button } from '@nextui-org/button'

interface GraphvizDiagramProps {
  dot: string
}

const GraphvizDiagram: React.FC<GraphvizDiagramProps> = ({ dot }) => {
  const graphvizRef = useRef<HTMLDivElement | null>(null)
  const [initialSvg, setInitialSvg] = useState<string | null>(null)

  useEffect(() => {
    if (graphvizRef.current) {
      try {
        graphviz(graphvizRef.current)
          .zoom(false)
          .renderDot(dot)
          .on('end', () => {
            const svgElement = graphvizRef.current?.querySelector('svg')
            if (svgElement) {
              svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
              // Guardar el SVG inicial en el estado
              const serializer = new XMLSerializer()
              setInitialSvg(serializer.serializeToString(svgElement))
            }
          })
      } catch (error) {
        console.error('An error occurred while rendering the graph:', error)
      }
    }
    // Agregar esta línea para restablecer la posición del canvas cada vez que se actualice el diagrama
    return () => setInitialSvg(null)
  }, [dot])

  const handleDownloadSVG = () => {
    if (initialSvg) {
      const blob = new Blob([initialSvg], {
        type: 'image/svg+xml;charset=utf-8'
      })
      saveAs(blob, 'jhangmez-diagram.svg')
    }
  }

  const handleDownloadPNG = async () => {
    if (initialSvg) {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx?.drawImage(img, 0, 0, img.width, img.height)
        canvas.toBlob((blob) => {
          if (blob !== null) {
            saveAs(blob, 'jhangmez-diagram.png')
          } else {
            console.error('Error creating Blob')
          }
        })
      }
      img.src = 'data:image/svg+xml,' + encodeURIComponent(initialSvg)
    }
  }

  return (
    <section className='bg-light-surfaceVariant overflow-x-auto rounded-xl'>
      <div ref={graphvizRef} />

      <Dropdown>
        <DropdownTrigger>
          <Button
            startContent={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 1024 1024'
              >
                <path
                  fill='currentColor'
                  d='M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z'
                />
              </svg>
            }
            className='bg-light-primary dark:bg-dark-primary text-light-onPrimary dark:text-dark-onPrimary font-semibold'
          >
            Descargar imagen como
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label='Acciones'>
          <DropdownItem
            key='svg'
            onPress={handleDownloadSVG}
            className='select-none'
          >
            SVG
          </DropdownItem>
          <DropdownItem
            key='png'
            onPress={handleDownloadPNG}
            className='select-none'
          >
            PNG
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </section>
  )
}

export default GraphvizDiagram
