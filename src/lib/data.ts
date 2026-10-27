import type { Where } from 'payload'
import { getCMS } from './payload'
import type { Product, ProductCategory, Service, SitePage, SiteSettings } from './types'

const defaultMapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.879067039607!2d11.481679274988082!3d3.83612554854571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfe67c17ff73%3A0xfa5edb199d8a2ca0!2sWORLD%20AGROBUSINESS%20GLOBAL!5e0!3m2!1sfr!2scm!4v1792802707115!5m2!1sfr!2scm'

const defaultSiteSettings: SiteSettings = {
  id: 0,
  companyName: 'World Agrobusiness Global SARL',
  tagline: 'Votre partenaire en équipements agro-pastoraux, irrigation et accompagnement de projets.',
  whatsapp: '+237 655 17 09 73',
  phone: '+237 653 03 35 59',
  email: 'worldagrobusiness8@gmail.com',
  address: 'Yaoundé, Biyem-Assi Biscuiterie\nFace Vatican Express Voyage',
  mapEmbedUrl: defaultMapEmbedUrl,
}

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
  const result = await payload.find({ collection: 'products', where, sort: 'sortOrder', limit: 100, depth: 1 })
  return result.docs
}

export async function getProductCategories(): Promise<ProductCategory[]> {
  const payload = await getCMS()
  const result = await payload.find({ collection: 'product-categories', where: { published: { equals: true } }, sort: 'sortOrder', limit: 100, depth: 0 })
  return result.docs
}

export async function getProductCategoryBySlug(slug: string): Promise<ProductCategory | null> {
  const payload = await getCMS()
  const result = await payload.find({ collection: 'product-categories', where: { and: [{ slug: { equals: slug } }, { published: { equals: true } }] }, limit: 1, depth: 0 })
  return result.docs[0] ?? null
}

export async function getProductsByCategory(categoryId: number): Promise<Product[]> {
  const payload = await getCMS()
  const result = await payload.find({ collection: 'products', where: { and: [{ published: { equals: true } }, { category: { equals: categoryId } }] }, sort: 'sortOrder', limit: 100, depth: 1 })
  return result.docs
}

export async function getServices(): Promise<Service[]> {
  const payload = await getCMS()
  const result = await payload.find({ collection: 'services', where: { published: { equals: true } }, sort: 'sortOrder', limit: 100, depth: 0 })
  return result.docs
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const payload = await getCMS()
  const result = await payload.find({ collection: 'services', where: { and: [{ slug: { equals: slug } }, { published: { equals: true } }] }, limit: 1, depth: 0 })
  return result.docs[0] ?? null
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const payload = await getCMS()
  const settings = await payload.findGlobal({ slug: 'site-settings' })
  return {
    ...defaultSiteSettings,
    ...settings,
    companyName: settings.companyName || defaultSiteSettings.companyName,
    tagline: settings.tagline || defaultSiteSettings.tagline,
    whatsapp: settings.whatsapp || defaultSiteSettings.whatsapp,
    phone: settings.phone || defaultSiteSettings.phone,
    email: settings.email || defaultSiteSettings.email,
    address: settings.address || defaultSiteSettings.address,
    mapEmbedUrl: settings.mapEmbedUrl || defaultSiteSettings.mapEmbedUrl,
  }
}
