import { getPageBySlug, getSiteSettings } from '@/lib/data'
import { ContentRenderer } from '@/components/ContentRenderer'
import { ProductGrid } from '@/components/ProductGrid'

export default async function ProductsPage() {
  const [page, settings] = await Promise.all([getPageBySlug('produits'), getSiteSettings()])
  return <>
    {page ? <ContentRenderer blocks={page.blocks} settings={settings} /> : <section className="page-hero"><p className="eyebrow">Nos produits</p><h1>Équipements agro-pastoraux</h1><p className="lead">Découvrez notre catalogue.</p></section>}
    <section className="products-wrap"><div className="catalogue-heading"><div><p className="eyebrow">Catalogue</p><h2>Équipements disponibles</h2></div><p>Des solutions robustes pour préparer, cultiver et irriguer.</p></div><ProductGrid whatsapp={settings.whatsapp} /></section>
  </>
}
