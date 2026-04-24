import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vanurmedia.com'
  
  // List of all internal pages
  const routes = [
    '',
    '/about',
    '/services',
    '/work',
    '/contact',
    '/crm-development-company-india',
    '/ai-business-automation-india',
    '/saas-development-company-india',
    '/website-development-company-india',
    '/seo-services-india',
    '/graphic-design-services-india',
    '/blog',
  ]
 
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as any,
    priority: route === '' ? 1 : 0.8,
  }))
}
