import IdiomasList from '@components/Idiomas'

export default function Idiomas() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10'>
        <IdiomasList />
      </div>
    </section>
  )
}
