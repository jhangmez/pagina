'use client'

import React, { useEffect, useRef } from 'react'
import { graphviz } from 'd3-graphviz'
import { saveAs } from 'file-saver'
import { Button } from '@nextui-org/button'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown'

interface GraphvizDiagramProps {
  dot: string
}

const GraphvizDiagram: React.FC<GraphvizDiagramProps> = ({ dot }) => {
  const graphvizRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (graphvizRef.current) {
      try {
        graphviz(graphvizRef.current)
          .renderDot(dot)
          .on('end', () => {
            // Esta función se llama cuando se completa el renderizado
            const svgElement = graphvizRef.current?.querySelector('svg')
            if (svgElement) {
              svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
            }
          })
      } catch (error) {
        console.error('An error occurred while rendering the graph:', error)
      }
    }
  }, [dot])

  const createUrlFromSvg = async (svgElement: SVGElement) => {
    const svgData = new XMLSerializer().serializeToString(svgElement)
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    const DOMURL = window.URL || window.webkitURL || window
    return DOMURL.createObjectURL(svgBlob)
  }

  const downloadAsPng = async (url: string, width: number, height: number) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    const img = new Image()
    img.onload = () => {
      canvas.width = width
      canvas.height = height
      ctx?.drawImage(img, 0, 0)

      canvas.toBlob((blob) => {
        saveAs(blob!, 'graphviz-diagram.png')
      }, 'image/png')
    }
    img.src = url
  }

  const handleDownloadSVG = async () => {
    const svgElement = graphvizRef.current?.querySelector('svg')
    if (svgElement) {
      const url = await createUrlFromSvg(svgElement)
      saveAs(url, 'graphviz-diagram.svg')
    }
  }

  const handleDownloadPNG = async () => {
    const svgElement = graphvizRef.current?.querySelector('svg')
    if (svgElement) {
      const url = await createUrlFromSvg(svgElement)
      const img = new Image()
      img.onload = () => {
        downloadAsPng(url, img.width, img.height)
      }
      img.src = url
    }
  }

  return (
    <section className='bg-light-surfaceVariant'>
      <div ref={graphvizRef} />

      <Dropdown>
        <DropdownTrigger>
          <Button className='bg-light-primary dark:bg-dark-primary text-light-onPrimary dark:text-dark-onPrimary font-semibold'>
            Descargar imagen como
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label='Acciones'>
          <DropdownItem key='svg' onClick={handleDownloadSVG}>
            SVG
          </DropdownItem>
          <DropdownItem key='png' onClick={handleDownloadPNG}>
            PNG
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </section>
  )
}

export default GraphvizDiagram
