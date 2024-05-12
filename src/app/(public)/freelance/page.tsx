import FreelanceList from '@components/Freelance'

export default function Freelance() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10'>
        <FreelanceList />
      </div>
    </section>
  )
}
