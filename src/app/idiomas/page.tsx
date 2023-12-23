import type { Metadata } from 'next'
import IdiomasList from '@components/Idiomas'

const title = 'jhangmez | Idiomas'
const description = 'Idiomas de jhangmez'

export const metadata: Metadata = {
  title,
  description
}
export default function Idiomas() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10'>
        <IdiomasList />
      </div>
    </section>
  )
}
