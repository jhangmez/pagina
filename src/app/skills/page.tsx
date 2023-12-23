import type { Metadata } from 'next'

const title = 'jhangmez | Skills'
const description = 'Skills de jhangmez'
import SkillsList from '@components/Skills'

export const metadata: Metadata = {
  title,
  description
}
export default function Skills() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px] pt-10'>
        <SkillsList />
      </div>
    </section>
  )
}
