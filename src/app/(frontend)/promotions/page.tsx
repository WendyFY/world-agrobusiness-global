import type { Metadata } from 'next'
import { getPromotionalProducts, getProductCategories } from '@/lib/data'
import { ProductCatalog } from '@/components/ProductCatalog'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Promotions — World Agrobusiness Global',
    description: 'Découvrez nos équipements agro-pastoraux en promotion.',
  }
}

export default async function PromotionsPage() {
  const [products, categories] = await Promise.all([
    getPromotionalProducts(100),
    getProductCategories(),
  ])

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Promotions</p>
        <h1>Offres spéciales</h1>
        <p className="lead">Profitez de nos réductions sur une sélection d'équipements agro-pastoraux.</p>
      </section>

      <section className="content-wrap">
        <div className="promotions-page-header">
          <h2>Produits en promotion</h2>
          <div className="promotions-filters">
            <span>Filtrer par catégorie :</span>
            <a href="/promotions" className="filter-link active">
              Toutes
            </a>
            {categories.map((category) => (
              <a
                key={category.id}
                href={`/promotions?category=${category.slug}`}
                className="filter-link"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>

        {products.length === 0 ? (
          <p className="promotions-empty">Aucune promotion en cours pour le moment.</p>
        ) : (
          <ProductCatalog products={products} whatsapp="+237655170973" searchable />
        )}
      </section>
    </>
  )
}
