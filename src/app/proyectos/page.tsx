import type { Metadata } from 'next'
import ProyectosList from '@components/Proyectos'

const title = 'jhangmez | Proyectos'
const description = 'Proyectos de jhangmez'

export const metadata: Metadata = {
  title,
  description
}

export default function Proyectos() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10'>
        <ProyectosList />
      </div>
    </section>
  )
}
