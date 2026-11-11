import Link from 'next/link'
import { ContentRenderer } from '@/components/ContentRenderer'
import { getPageBySlug, getSiteSettings, getPromotionalProducts } from '@/lib/data'
import { ProductCatalog } from '@/components/ProductCatalog'

export default async function HomePage() {
  const [page, settings, promotionalProducts] = await Promise.all([
    getPageBySlug('accueil'),
    getSiteSettings(),
    getPromotionalProducts(4),
  ])
  if (!page) return <section className="page-hero">
    <p className="eyebrow">World Agrobusiness Global SARL</p>
    <h1>Faire grandir vos projets, durablement.</h1>
    <p className="lead">Nous accompagnons vos projets agro-pastoraux avec des équipements adaptés, des solutions d’irrigation et un savoir-faire de terrain.</p>
    <div className="hero-actions">
      <Link className="button primary" href="/produits">Découvrir nos produits</Link>
      <Link className="button" href="/services">Découvrir nos services</Link>
    </div>
  </section>
  return <>
    <ContentRenderer blocks={page.blocks} settings={settings} />
    {promotionalProducts.length > 0 && (
      <section className="products-wrap">
        <div className="catalogue-heading">
          <div>
            <p className="eyebrow">Offres spéciales</p>
            <h2>Produits en promotion</h2>
          </div>
          <Link className="button product-catalogue-link" href="/promotions">
            Voir toutes les promotions <span>→</span>
          </Link>
        </div>
        <ProductCatalog products={promotionalProducts} whatsapp={settings.whatsapp} searchable={false} />
      </section>
    )}
  </>
}
