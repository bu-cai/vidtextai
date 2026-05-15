import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vidtextai.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/tools/transcript`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/summary`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/notes`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/shorts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
