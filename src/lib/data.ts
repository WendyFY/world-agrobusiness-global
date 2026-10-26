import type { Where } from 'payload'
import { getCMS } from './payload'
import type { Product, SitePage, SiteSettings } from './types'

export async function getPageBySlug(slug: string): Promise<SitePage | null> {
  const payload = await getCMS()
  const result = await payload.find({ collection: 'pages', where: { slug: { equals: slug } }, limit: 1, depth: 0 })
  return result.docs[0] ?? null
}

export async function getPages(): Promise<SitePage[]> {
  const payload = await getCMS()
  const result = await payload.find({ collection: 'pages', sort: 'sortOrder', limit: 100, depth: 0 })
  return result.docs
}

export async function getProducts(featuredOnly = false): Promise<Product[]> {
  const payload = await getCMS()
  const where: Where = featuredOnly
    ? { and: [{ published: { equals: true } }, { featuredOnHome: { equals: true } }] }
    : { published: { equals: true } }
  const result = await payload.find({ collection: 'products', where, sort: 'sortOrder', limit: 100, depth: 0 })
  return result.docs
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const payload = await getCMS()
  return await payload.findGlobal({ slug: 'site-settings' })
}
