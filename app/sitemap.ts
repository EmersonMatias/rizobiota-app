import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bymycell.com/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: 'https://bymycell.com/quem-somos',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },
    {
      url: 'https://bymycell.com/servicos',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },
    {
      url: 'https://bymycell.com/contato',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },
    {
      url: 'https://bymycell.com/servicos/pesquisadores',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },
    {
      url: 'https://bymycell.com/servicos/agro',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    }
  ]
}
