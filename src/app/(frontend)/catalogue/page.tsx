import type { Metadata } from 'next'
import { getProducts, getProductCategories } from '@/lib/data'
import { ProductCatalog } from '@/components/ProductCatalog'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Catalogue complet — World Agrobusiness Global',
    description: 'Découvrez tous nos équipements agro-pastoraux disponibles.',
  }
}

export default async function CatalogPage() {
  const [products, categories] = await Promise.all([getProducts(), getProductCategories()])

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Catalogue</p>
        <h1>Tous nos équipements</h1>
        <p className="lead">Explorez notre gamme complète d\'équipements agro-pastoraux.</p>
      </section>

      <section className="content-wrap">
        <div className="catalogue-page-header">
          <h2>Catalogue complet</h2>
          <div className="catalogue-filters">
            <span>Filtrer par :</span>
            <a href="/catalogue" className="filter-link active">
              Tous
            </a>
            {categories.map((category) => (
              <a
                key={category.id}
                href={`/catalogue?category=${category.slug}`}
                className="filter-link"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>

        <ProductCatalog products={products} whatsapp="+237655170973" searchable />
      </section>
    </>
  )
}
