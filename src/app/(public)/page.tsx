import Experiencia from '@components/Experiencia'
import Perfil from '@components/Perfil'
import Proyectos from '@components/Proyectos'
import Educacion from '@components/Educacion'
import Idiomas from '@components/Idiomas'
import CarrouselCertifications from '@components/Carrousel/certificados'
import Skills from '@components/Skills'
import Freelance from '@components/Freelance'

export default function Home() {
  return (
    <section className='space-y-4'>
      <Perfil />
      <div className='container mx-auto px-[20px]'>
        <Experiencia />
      </div>
      <div className='container mx-auto px-[20px]'>
        <Freelance />
      </div>
      <div className='container mx-auto px-[20px]'>
        <Proyectos />
      </div>
      <div className='container mx-auto px-[20px] flex lg:flex-row md:flex-row flex-col  gap-4'>
        <Educacion />
        <Idiomas />
      </div>
      <div className='container mx-auto px-[20px]'>
        <Skills />
      </div>
      <div className='container mx-auto px-[20px]'>
        <CarrouselCertifications />
      </div>
    </section>
  )
}
