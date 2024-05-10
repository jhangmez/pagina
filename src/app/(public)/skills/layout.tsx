const shortTitle = 'Skills'
const description = 'Habilidades desarrolladas'
const jhangmez = ' | jhangmez'
const title = `${shortTitle}${jhangmez}`
const url = 'https://jhangmez.vercel.app'
const imageUrl = `${url}/api/og?title=${shortTitle}&description=${description}`

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

export default function SkillsLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
