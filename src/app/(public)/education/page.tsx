import EducacionList from '@components/Educacion'
import IdiomasList from '@components/Idiomas'

export default function Educacion() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10 space-y-10'>
        <EducacionList />
        <IdiomasList />
      </div>
    </section>
  )
}
