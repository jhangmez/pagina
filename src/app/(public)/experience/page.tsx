import type { Metadata } from 'next'
import ExperienciaList from '@components/Experiencia'

export const metadata = {
  title: 'Experiencia | jhangmez',
  description: 'Experiencia de Jhan gómez',
  openGraph: {
    title: 'Experiencia | jhangmez',
    description: 'Experiencia de Jhan gómez',
    type: 'article',
    url: 'https://jhangmez.xyz/',
    images: [
      {
        url: 'https://jhangmez.vercel.app/api/og?title=Experiencia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experiencia | jhangmez',
    description: 'Experiencia de Jhan gómez',
    images: ['https://jhangmez.vercel.app/api/og?title=Experiencia']
  }
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
