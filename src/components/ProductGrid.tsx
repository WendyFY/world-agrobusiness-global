import type { Product } from '@/lib/types'
import { getProducts } from '@/lib/data'
import { ProductCatalog } from './ProductCatalog'

type ProductGridProps = { featuredOnly?: boolean; whatsapp: string }

export async function ProductGrid({ featuredOnly = false, whatsapp }: ProductGridProps) {
  const products = await getProducts(featuredOnly)
  return <ProductCatalog products={products} whatsapp={whatsapp} searchable={!featuredOnly} />
}
