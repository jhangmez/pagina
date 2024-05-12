import Trabajando from '@components/Trabajando'

export default function Me() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10'>
        {/* <h2 className='font-bold text-2xl text-light-onSurface dark:text-dark-onSurface'>
          Esta es mi generador de cv
        </h2> */}
        <Trabajando />
      </div>
    </section>
  )
}
