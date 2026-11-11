'use client'

import { useEffect, useMemo, useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { Plus } from 'lucide-react'
import type { Product } from '@/lib/types'

type ProductCatalogProps = { products: Product[]; whatsapp: string; searchable: boolean }

export function ProductCatalog({ products, whatsapp, searchable }: ProductCatalogProps) {
  const { addToCart } = useCart()
  const [query, setQuery] = useState('')
  const [lightbox, setLightbox] = useState<{ image: string; alt: string } | null>(null)
  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('fr')
    if (!normalized) return products
    return products.filter((product) => [
      product.name,
      typeof product.category === 'number' ? '' : product.category.name,
      product.description ?? '',
      ...((product.specifications ?? []).flatMap((spec) => [spec.label, spec.value])),
    ].join(' ').toLocaleLowerCase('fr').includes(normalized))
  }, [products, query])
  const whatsappNumber = whatsapp.replace(/\D/g, '')

  useEffect(() => {
    if (!lightbox) return
    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setLightbox(null)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [lightbox])

  return <>
    {searchable ? <div className="product-search">
      <label htmlFor="product-search">Rechercher un équipement</label>
      <input id="product-search" type="search" value={query} onChange={(event) => setQuery(event.currentTarget.value)} placeholder="Ex. motoculteur, diesel, motopompe…" autoComplete="off" />
      <p className="product-search-feedback" aria-live="polite">{query ? `${filtered.length} équipement${filtered.length === 1 ? '' : 's'} trouvé${filtered.length === 1 ? '' : 's'}.` : ''}</p>
    </div> : null}
    <div className="product-grid">
      {filtered.map((product) => {
        const firstImage = product.gallery?.[0]
        const firstImageUrl = typeof firstImage?.image === 'object' && firstImage.image !== null ? firstImage.image.url : null
        const categoryName = typeof product.category === 'number' ? 'Équipement' : product.category.name
        const price = typeof product.price === 'number' ? `${product.price.toLocaleString('fr-FR')} FCFA` : null
        const message = encodeURIComponent(`Bonjour, je souhaite avoir des informations sur ${product.name}.`)
        
        const handleAddToCart = () => {
          if (!firstImageUrl) return
          addToCart({
            productId: product.id,
            name: product.name,
            category: categoryName,
            price: product.price ?? null,
            priceLabel: product.priceLabel ?? null,
            image: firstImageUrl,
            imageAlt: firstImage?.alt ?? '',
          })
        }
        
        return <article className="product-card" key={product.id}>
          {firstImageUrl ? <button className="product-image" type="button" onClick={() => setLightbox({ image: firstImageUrl, alt: firstImage?.alt ?? '' })}><img src={firstImageUrl} alt={firstImage?.alt ?? ''} /></button> : <div className="product-image product-image-empty" />}
          <div className="product-body">
            <p className="product-type">{categoryName}</p>
            <h3>{product.name}</h3>
            {product.description ? <p>{product.description}</p> : null}
            {product.specifications?.length ? <ul>{product.specifications.map((spec, index) => <li key={`${spec.label}-${index}`}>{spec.label} : {spec.value}</li>)}</ul> : null}
            {price ? <p className="price">{product.priceLabel ? `${product.priceLabel} ` : ''}<strong>{price}</strong></p> : null}
            {product.gallery && product.gallery.length > 1 ? <div className="product-gallery-thumbs">{product.gallery.slice(1).map((image, index) => {
              const imageUrl = typeof image.image === 'object' && image.image !== null ? image.image.url : null
              if (!imageUrl) return null
              return <button className="product-thumb" type="button" key={`${image.alt}-${index}`} onClick={() => setLightbox({ image: imageUrl, alt: image.alt })}><img src={imageUrl} alt={image.alt} loading="lazy" /></button>
            })}</div> : null}
            <div className="product-actions">
              <button className="button secondary add-to-cart" onClick={handleAddToCart} aria-label={`Ajouter ${product.name} au panier`}>
                <Plus size={16} />
                Ajouter au panier
              </button>
              <a className="product-link" href={`https://wa.me/${whatsappNumber}?text=${message}`}>Demander la disponibilité <span>→</span></a>
            </div>
          </div>
        </article>
      })}
    </div>
    {filtered.length === 0 ? <p>Aucun équipement ne correspond à cette recherche.</p> : null}
    {lightbox ? <div className="image-lightbox" role="presentation" onClick={() => setLightbox(null)}><img src={lightbox.image} alt={lightbox.alt} /><button className="lightbox-close" type="button" aria-label="Fermer l’image" onClick={() => setLightbox(null)}>×</button></div> : null}
  </>
}
