import Experiencia from '@components/Experiencia'
import Perfil from '@components/Perfil'
import Proyectos from '@components/Proyectos'
import Educacion from '@components/Educacion'
import Idiomas from '@components/Idiomas'
import CarrouselCertifications from '@components/Carrousel/certificados'
import Skills from '@components/Skills'
import CTASection from '@components/CTASection'
import Tools from '@components/ToolsSection'
import Freelance from '@components/Freelance'

export default function Home() {
  return (
    <section
      className='space-y-4 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(137,179,146,0.086)_0,rgba(137,179,146,0.02)_50%,rgba(137,179,146,0)_100%)]
  dark:bg-[radial-gradient(100%_50%_at_50%_0%,rgba(93,135,96,0.108)_0,rgba(93,135,96,0.04)_50%,rgba(93,135,96,0)_100%)]'
    >
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
      <div className='container mx-auto px-[20px]'>
        <CTASection />
      </div>
      <div className='container mx-auto px-[20px]'>
        <Tools />
      </div>
      <div className='container mx-auto px-[20px] flex lg:flex-row md:flex-row flex-col  gap-4'>
        <Educacion />
        <Idiomas />
      </div>
      {/* <div className='container mx-auto px-[20px]'>
        <Skills />
      </div> */}
      <div className='container mx-auto px-[20px]'>
        <CarrouselCertifications />
      </div>
    </section>
  )
}
