import React from 'react'
import Experiencia from '@components/Experiencia'
import Perfil from '@components/Perfil'
import Proyectos from '@components/Proyectos'
import Educacion from '@components/Educacion'
import Idiomas from '@components/Idiomas'
import Objetivos from '@components/Objetivos'
import Skills from '@components/Skills'
import InfiniteVertical from '@components/InfiniteVertical'

export const metadata = {
  title: 'Portafolio | jhangmez',
  description: 'Bienvenidos a mi portafolio',
  openGraph: {
    title: 'Portafolio | jhangmez',
    description: 'Bienvenidos a mi portafolio',
    type: 'article',
    url: 'https://jhangmez.xyz/',
    images: [
      {
        url: 'https://jhangmez.vercel.app/api/og?title=Portafolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portafolio',
    description: 'Bienvenidos a mi portafolio',
    images: ['https://jhangmez.vercel.app/api/og?title=Portafolio']
  }
}

export default function Home() {
  return (
    <section className='space-y-4'>
      <div className='flex flex-col justify-center items-center min-h-screen -mt-10 space-y-10'>
        <Perfil />
        <InfiniteVertical />
      </div>
      <div className='container mx-auto px-[20px]'>
        <Experiencia />
      </div>
      <div className='container mx-auto px-[20px]'>
        <Proyectos />
      </div>
      <div className='container mx-auto px-[20px] space-y-10 flex flex-col md:space-y-0 md:flex-row md:space-x-6'>
        <Educacion />
        <Idiomas />
      </div>
      <div className='container mx-auto px-[20px] space-y-10 flex flex-col md:space-y-0 md:flex-row md:space-x-6'>
        <Objetivos />
        <Skills />
      </div>
    </section>
  )
}
