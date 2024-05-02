import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: [
        'Applebot',
        'Bingbot',
        'Googlebot',
        'YandexBot',
        '*',
        'DuckDuckBot',
        'Baiduspider',
        'Slurp',
        'facebot'
      ],
      allow: [
        '/',
        '/education',
        '/experience',
        '/skills',
        '/projects',
        '/mapaconceptual'
      ],
      disallow: ['/api/', '/cv/', '/icons/', '/public/']
    },
    sitemap: 'https://jhangmez.xyz/sitemap.xml'
  }
}
