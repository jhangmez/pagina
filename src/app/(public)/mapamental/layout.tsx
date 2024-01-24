export const metadata = {
  title: 'Mapa mental | jhangmez',
  description: 'Generador de mapas mentales',
  openGraph: {
    title: 'Mapa mental | jhangmez',
    description: 'Generador de mapas mentales',
    type: 'article',
    url: 'https://jhangmez.xyz/mapamental',
    images: [
      {
        url: 'https://jhangmez.vercel.app/api/og?title=Mapa mental'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generador de mapas mentales',
    description: 'Generador de mapas mentales',
    images: ['https://jhangmez.vercel.app/api/og?title=Mapa mental']
  }
}

export default function MapaLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
