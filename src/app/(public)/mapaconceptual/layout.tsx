const title = 'Mapa conceptual | jhangmez'
const description = 'Generador de mapas conceptuales'
const imageUrl = `https://jhangmez.vercel.app/api/og?title=Mapa conceptual&description=${description}`

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    url: 'https://jhangmez.xyz/mapamental',
    images: [{ url: imageUrl }]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl]
  }
}

export default function MapaLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
