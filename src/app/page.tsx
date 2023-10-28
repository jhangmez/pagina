'use client'

import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Experiencia from '@components/Experiencia'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const { ref: featureRef, inView: featureInView } = useInView({
    threshold: 0.5
  })
  const { ref: componente3Ref, inView: componente3InView } = useInView({
    threshold: 0.5
  })

  return (
    <main className='w-screen h-screen '>
      <div
        className={`${
          componente3InView
            ? 'bg-light-surface dark:bg-dark-surface sticky top-0'
            : 'bg-light-surface dark:bg-dark-surface'
        }`}
      >
        <Header />
      </div>

      <div className='bg-light-surface dark:bg-dark-surface'>
        <Experiencia />
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Experiencia />
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Experiencia />
      </div>
      <div
        className={`h-full flex items-center justify-center transition-colors duration-500 ease-in-out ${
          featureInView
            ? 'bg-light-secondaryContainer'
            : 'bg-dark-secondaryContainer'
        }`}
        ref={componente3Ref}
      >
        <Experiencia />
      </div>
      <div className='bg-light-surface dark:bg-dark-surface' ref={featureRef}>
        <Experiencia />
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Experiencia />
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Experiencia />
      </div>
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Footer />
      </div>
    </main>
  )
}
