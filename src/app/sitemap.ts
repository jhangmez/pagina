import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jhangmez.xyz',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: 'https://jhangmez.xyz/education',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: 'https://jhangmez.xyz/experience',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: 'https://jhangmez.xyz/languages',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3
    },
    {
      url: 'https://jhangmez.xyz/mapaconceptual',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: 'https://jhangmez.xyz/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://jhangmez.xyz/skills',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6
    }
  ]
}
