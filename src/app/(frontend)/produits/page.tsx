import Link from 'next/link'
import { getProductCategories } from '@/lib/data'

export const metadata = { title: 'Catégories de produits — World Agrobusiness Global' }

export default async function ProductsPage() {
  const categories = await getProductCategories()
  return <>
    <section className="page-hero"><p className="eyebrow">Nos produits</p><h1>Choisissez une catégorie</h1><p className="lead">Parcourez nos équipements agro-pastoraux par catégorie.</p></section>
    <section className="products-wrap"><div className="product-category-grid">
      {categories.map((category) => <Link className="product-category-card" href={`/produits/${category.slug}`} key={category.id}>
        {category.imageBase64 ? <img src={category.imageBase64} alt={category.imageAlt ?? category.name} /> : <div className="product-category-image-empty" />}
        <div><h2>{category.name}</h2>{category.description ? <p>{category.description}</p> : null}<span>Voir les produits →</span></div>
      </Link>)}
    </div>{categories.length === 0 ? <p>Les catégories de produits seront bientôt disponibles.</p> : null}</section>
  </>
}
