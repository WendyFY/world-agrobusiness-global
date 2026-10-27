import type { Metadata } from 'next'
import { getPageBySlug, getSiteSettings } from '@/lib/data'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('contact')
  return {
    title: `${page?.title ?? 'Contact'} — World Agrobusiness Global`,
    description: page?.metaDescription ?? 'Contactez World Agrobusiness Global SARL à Yaoundé.',
  }
}

export default async function ContactPage() {
  const [page, settings] = await Promise.all([getPageBySlug('contact'), getSiteSettings()])
  const hero = page?.blocks.find((block) => block.blockType === 'hero')
  const text = page?.blocks.find((block) => block.blockType === 'textSection')
  const addressParagraphs = text?.blockType === 'textSection' ? text.paragraphs ?? [] : []
  const whatsappNumber = settings.whatsapp.replace(/\D/g, '')
  const phoneNumber = settings.phone.replace(/[^\d+]/g, '')

  return <>
    <section className="page-hero">
      <p className="eyebrow">{hero?.blockType === 'hero' ? hero.eyebrow : 'Nous contacter'}</p>
      <h1>{hero?.blockType === 'hero' ? hero.heading : 'Une question ou un projet à nous confier ?'}</h1>
      <p className="lead">{hero?.blockType === 'hero' && hero.lead ? hero.lead : 'Notre équipe est disponible pour vous répondre et vous orienter vers la solution appropriée.'}</p>
    </section>

    <section className="content-wrap contact-page">
      <div className="contact-card">
        <p className="eyebrow">Contact direct</p>
        <h2>Échangeons rapidement.</h2>
        <a href={`https://wa.me/${whatsappNumber}`}>
          WhatsApp<br />{settings.whatsapp}
        </a>
        <a href={`tel:${phoneNumber}`}>
          Appel<br />{settings.phone}
        </a>
        <a href={`mailto:${settings.email}`}>
          E-mail<br />{settings.email}
        </a>
      </div>

      <div>
        <p className="eyebrow">Notre adresse</p>
        <h2 className="contact-address-heading">Retrouvez-nous à Yaoundé.</h2>
        <div className="location">
          <strong>{settings.address.split('\n')[0]}</strong>
          <p>{settings.address.split('\n').slice(1).join('\n') || 'Yaoundé, Cameroun'}</p>
        </div>
        <div className="location">
          <strong>Horaires</strong>
          <p>{addressParagraphs[1]?.text ?? 'Contactez-nous par appel ou WhatsApp pour convenir d’un rendez-vous.'}</p>
        </div>
      </div>
    </section>

    {settings.mapEmbedUrl ? <figure className="contact-map"><iframe title="Localisation de World Agrobusiness Global" src={settings.mapEmbedUrl} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></figure> : null}
  </>
}
