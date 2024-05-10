import ProyectosList from '@components/Proyectos'

export default function Proyectos() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10'>
        <ProyectosList />
      </div>
    </section>
  )
}
