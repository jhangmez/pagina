import Experiencia from '@components/Experiencia'
import Perfil from '@components/Perfil'
import Proyectos from '@components/Proyectos'
import Educacion from '@components/Educacion'
import Idiomas from '@components/Idiomas'
import Objetivos from '@components/Objetivos'
import Skills from '@components/Skills'

const shortTitle = 'Portafolio'
const description = 'Bienvenidos a mi portafolio'
const jhangmez = ' | jhangmez'
const title = `${shortTitle}${jhangmez}`
const imageUrl = `https://jhangmez.vercel.app/api/og?title=${shortTitle}&description=${description}`

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    url: 'https://jhangmez.xyz/',
    images: [{ url: imageUrl }]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl]
  }
}

export default function Home() {
  return (
    <section className='space-y-4'>
      <Perfil />
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
        {/* <Objetivos /> */}
        <Skills />
      </div>
    </section>
  )
}
