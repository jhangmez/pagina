export const metadata = {
  title: 'Mapa conceptual | jhangmez',
  description: 'Generador de mapas conceptuales',
  openGraph: {
    title: 'Mapa conceptual | jhangmez',
    description: 'Generador de mapas conceptuales',
    type: 'article',
    url: 'https://jhangmez.xyz/mapamental',
    images: [
      {
        url: 'https://jhangmez.vercel.app/api/og?title=Mapa conceptual'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generador de mapas conceptuales',
    description: 'Generador de mapas conceptuales',
    images: ['https://jhangmez.vercel.app/api/og?title=Mapa conceptual']
  }
}

export default function MapaLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
