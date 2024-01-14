'use client'

import React from 'react'
import Experiencia from '@components/Experiencia'
import Perfil from '@components/Perfil'
import Proyectos from '@components/Proyectos'
import Educacion from '@components/Educacion'
import Idiomas from '@components/Idiomas'
import Objetivos from '@components/Objetivos'
import Skills from '@components/Skills'
import InfiniteVertical from '@components/InfiniteVertical'

export default function Home() {
  return (
    <main className='min-h-screen bg-light-surface dark:bg-dark-surface space-y-10'>
      <section className='flex flex-col justify-center items-center min-h-screen -mt-12 space-y-10'>
        <Perfil />
        <InfiniteVertical />
      </section>
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
    </main>
  )
}
