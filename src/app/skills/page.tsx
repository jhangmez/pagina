import type { Metadata } from 'next'

const title = 'jhangmez | Skills'
const description = 'Skills de jhangmez'

export const metadata: Metadata = {
  title,
  description
}
export default function Skills() {
  return (
    <section className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <div className='container mx-auto px-[20px]'>
        <p className='text-light-onSurface dark:text-dark-onSurface font-semibold text-2xl mb-5'>
          Hola estas son mis skills :D
        </p>
      </div>
    </section>
  )
}
