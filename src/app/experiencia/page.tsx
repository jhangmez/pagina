import type { Metadata } from 'next'
import ExperienciaList from '@components/Experiencia'

const title = 'jhangmez | Experiencia'
const description = 'Experiencia de jhangmez'

export const metadata: Metadata = {
  title,
  description
}

export default function Experiencia() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10'>
        <ExperienciaList />
      </div>
    </section>
  )
}
