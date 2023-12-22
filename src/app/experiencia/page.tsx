import type { Metadata } from 'next'
import ExperienciaList from '@components/Experiencia'
import Head from 'next/head'

const title = 'jhangmez | Experiencia'
const description = 'Experiencia de jhangmez'

export const metadata: Metadata = {
  title,
  description
}

export default function Experiencia() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <Head>
        <title>Experiencia</title>
      </Head>
      <div className='container mx-auto px-[20px]'>
        <ExperienciaList />
      </div>
    </section>
  )
}
