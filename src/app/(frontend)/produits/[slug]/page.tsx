import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductCatalog } from '@/components/ProductCatalog'
import { getProductCategoryBySlug, getProductsByCategory, getSiteSettings } from '@/lib/data'

type CategoryPageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await getProductCategoryBySlug(slug)
  return category ? { title: `${category.name} — World Agrobusiness Global`, description: category.description ?? undefined } : {}
}

export default async function CategoryProductsPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = await getProductCategoryBySlug(slug)
  if (!category) notFound()
  const [products, settings] = await Promise.all([getProductsByCategory(category.id), getSiteSettings()])
  return <>
    <section className="page-hero">{category.imageBase64 ? <figure className="page-image"><img src={category.imageBase64} alt={category.imageAlt ?? category.name} /></figure> : null}<p className="eyebrow">Catégorie de produits</p><h1>{category.name}</h1>{category.description ? <p className="lead">{category.description}</p> : null}</section>
    <section className="products-wrap"><div className="catalogue-heading"><div><p className="eyebrow">Catalogue</p><h2>Produits de la catégorie</h2></div></div><ProductCatalog products={products} whatsapp={settings.whatsapp} searchable /></section>
  </>
}
