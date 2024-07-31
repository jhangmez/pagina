import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Portafolio Jhangmez',
    short_name: 'Portafolio',
    description: 'Portafolio de jhangmez',
    start_url: '/',
    display: 'standalone',
    background_color: '#FCFDF7',
    theme_color: '#1A6C30',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '128x128',
        type: 'image/x-icon'
      }
    ]
  }
}
