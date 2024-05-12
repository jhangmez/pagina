import ExperienciaList from '@components/Experiencia'
import FreelanceList from '@components/Freelance'

export default function Experiencia() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10 space-y-4'>
        <ExperienciaList />
        <FreelanceList />
      </div>
    </section>
  )
}
