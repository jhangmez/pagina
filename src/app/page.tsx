'use client'

import React from 'react'
import Experiencia from '@components/Experiencia'
import Perfil from '@components/Perfil'
import Proyectos from '@components/Proyectos'
import InfiniteVertical from '@components/InfiniteVertical'
import Head from 'next/head'

export default function Home() {
  return (
    <main className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <Head>
        <title>Home</title>
      </Head>
      <section className='flex flex-col justify-center items-center min-h-screen -mt-12 space-y-10'>
        <Perfil />
        <InfiniteVertical />
      </section>
      <div className='container mx-auto px-[20px] pt-10'>
        <Experiencia />
      </div>
    </main>
  )
}
