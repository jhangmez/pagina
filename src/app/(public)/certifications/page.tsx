import Trabajando from '@components/Trabajando'
import CarrouselCertifications from '@components/Carrousel/certificados'

export default function Certificaciones() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10'>
        {/* <h2 className='font-bold text-2xl text-light-onSurface dark:text-dark-onSurface'>
          Esta es mi Certificaciones
        </h2> */}
        {/* <CarrouselCertifications /> */}
        <Trabajando />
      </div>
    </section>
  )
}
