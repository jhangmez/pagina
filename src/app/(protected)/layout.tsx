import { Suspense } from 'react'
import Loading from '../loading'
import { auth } from '@src/auth'

const shortTitle = 'Protected Branch'
const description = 'Rama protegida'
const jhangmez = ' | jhangmez'
const title = `${shortTitle}${jhangmez}`
const imageUrl = `https://jhangmez.vercel.app/api/og?title=${shortTitle}&description=${description}`

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    url: 'https://jhangmez.xyz/',
    images: [{ url: imageUrl }]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl]
  }
}
export default async function ProtectedLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session) return <div>Not authenticated</div>

  return (
    <main className='min-h-screen bg-light-surface dark:bg-dark-surface'>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </main>
  )
}
