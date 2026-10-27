import Link from 'next/link'
import { ContentRenderer } from '@/components/ContentRenderer'
import { getPageBySlug, getSiteSettings } from '@/lib/data'

export default async function HomePage() {
  const [page, settings] = await Promise.all([getPageBySlug('accueil'), getSiteSettings()])
  if (!page) return <section className="page-hero">
    <p className="eyebrow">World Agrobusiness Global SARL</p>
    <h1>Faire grandir vos projets, durablement.</h1>
    <p className="lead">Nous accompagnons vos projets agro-pastoraux avec des équipements adaptés, des solutions d’irrigation et un savoir-faire de terrain.</p>
    <div className="hero-actions">
      <Link className="button primary" href="/produits">Découvrir nos produits</Link>
      <Link className="button" href="/services">Découvrir nos services</Link>
    </div>
  </section>
  return <ContentRenderer blocks={page.blocks} settings={settings} />
}
