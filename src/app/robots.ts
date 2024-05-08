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
        '/mapaconceptual',
        '/cv',
        '/generate/'
      ],
      disallow: ['/api/', '/icons/', '/public/', '/pdf/', '/static/']
    },
    sitemap: 'https://jhangmez.xyz/sitemap.xml'
  }
}
