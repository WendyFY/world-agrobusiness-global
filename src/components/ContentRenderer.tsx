import Link from 'next/link'
import type { ContentBlock, SiteSettings } from '@/lib/types'
import { ProductGrid } from './ProductGrid'

type ContentRendererProps = { blocks: ContentBlock[]; settings: SiteSettings }

export function ContentRenderer({ blocks, settings }: ContentRendererProps) {
  return <>
    {blocks.map((block, index) => {
      const key = block.id ?? `${block.blockType}-${index}`
      if (block.blockType === 'hero') {
        return <section className="page-hero" key={key}>
          {block.eyebrow ? <p className="eyebrow">{block.eyebrow}</p> : null}
          <h1>{block.heading}</h1>
          {block.lead ? <p className="lead">{block.lead}</p> : null}
          {block.imageBase64 ? <figure className="page-image"><img src={block.imageBase64} alt={block.imageAlt ?? ''} /></figure> : null}
        </section>
      }
      if (block.blockType === 'textSection') {
        return <section className="section-copy" key={key}>
          {block.eyebrow ? <p className="eyebrow">{block.eyebrow}</p> : null}
          <h2>{block.heading}</h2>
          {block.paragraphs?.map((paragraph, paragraphIndex) => <p key={paragraph.id ?? paragraphIndex}>{paragraph.text}</p>)}
          {block.quote ? <blockquote>{block.quote}</blockquote> : null}
        </section>
      }
      if (block.blockType === 'cards' || block.blockType === 'values') {
        const intro = block.blockType === 'cards' ? block.intro : null
        return <section className="section-cards" key={key}>
          {block.eyebrow ? <p className="eyebrow">{block.eyebrow}</p> : null}
          <h2>{block.heading}</h2>
          {intro ? <p>{intro}</p> : null}
          <div className="section-cards-grid">{block.items?.map((item, itemIndex) => <article className="section-card" key={item.id ?? itemIndex}>
            <h3>{item.title}</h3>{item.description ? <p>{item.description}</p> : null}
            {item.href && item.label ? <Link href={item.href}>{item.label} <span>→</span></Link> : null}
          </article>)}</div>
        </section>
      }
      if (block.blockType === 'productHighlights') {
        return <section className="products-wrap" key={key}>
          <div className="catalogue-heading"><div>{block.eyebrow ? <p className="eyebrow">{block.eyebrow}</p> : null}<h2>{block.heading}</h2></div>
            <Link className="button product-catalogue-link" href="/produits">Voir tout le catalogue <span>→</span></Link>
          </div>
          {block.intro ? <p>{block.intro}</p> : null}<ProductGrid featuredOnly whatsapp={settings.whatsapp} />
        </section>
      }
      if (block.blockType === 'contactCallout') {
        return <section className="cms-cta" key={key}>
          {block.eyebrow ? <p className="eyebrow">{block.eyebrow}</p> : null}<h2>{block.heading}</h2>
          {block.description ? <p>{block.description}</p> : null}
          <a className="button primary" href={`https://wa.me/${settings.whatsapp.replace(/\D/g, '')}`}>WhatsApp : {settings.whatsapp}</a>
        </section>
      }
      if (block.blockType === 'image' && block.imageBase64) {
        return <figure className="page-image" key={key}><img src={block.imageBase64} alt={block.alt ?? ''} />{block.caption ? <figcaption>{block.caption}</figcaption> : null}</figure>
      }
      if (block.blockType === 'video' && block.sourceUrl) {
        return <figure className="page-image" key={key}><video controls muted loop playsInline aria-label={block.label ?? 'Vidéo de présentation'}><source src={block.sourceUrl} type="video/mp4" /></video></figure>
      }
      if (block.blockType === 'map' && settings.mapEmbedUrl) {
        return <figure className="page-image" key={key}><iframe title={block.heading ?? 'Localisation de World Agrobusiness Global'} src={settings.mapEmbedUrl} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></figure>
      }
      return null
    })}
  </>
}
