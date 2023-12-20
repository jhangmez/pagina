'use client'

import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Experiencia from '@components/Experiencia'
import Perfil from '@components/Perfil'

import { useInView } from 'react-intersection-observer'

export default function Home() {
  return (
    <main className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <section className=' '>
        <Perfil />
      </section>
    </main>
  )
}
