import Header from '@components/Header'
import Footer from '@components/Footer'
import type { Metadata } from 'next'

const title = 'jhangmez | Skills'
const description = 'Pagina de jhangmez'

export const metadata: Metadata = {
  title,
  description
  // twitter: {
  //   card: 'summary_large_image',
  //   title,
  //   description
  // }
}
export default function Skills() {
  return (
    <main className='w-screen h-screen'>
      <div className='bg-light-surface dark:bg-dark-surface '>
        <Header />
      </div>
      Hola estas son mis skills :D
      <div className='bg-light-surface dark:bg-dark-surface'>
        <Footer />
      </div>
    </main>
  )
}
