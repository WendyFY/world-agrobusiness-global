import type { Metadata } from 'next'
import { getPageBySlug, getSiteSettings } from '@/lib/data'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('a-propos')
  return {
    title: `${page?.title ?? 'À propos'} — World Agrobusiness Global`,
    description: page?.metaDescription ?? 'Découvrez World Agrobusiness Global SARL et son accompagnement des projets agricoles.',
  }
}

export default async function AboutPage() {
  const [page, settings] = await Promise.all([getPageBySlug('a-propos'), getSiteSettings()])
  const hero = page?.blocks.find((block) => block.blockType === 'hero')
  const text = page?.blocks.find((block) => block.blockType === 'textSection')
  const values = page?.blocks.find((block) => block.blockType === 'values')
  const paragraphs = text?.blockType === 'textSection' ? text.paragraphs ?? [] : []
  const valueItems = values?.blockType === 'values' ? values.items ?? [] : []

  return <>
    <section className="page-hero">
      <p className="eyebrow">{hero?.blockType === 'hero' ? hero.eyebrow : 'À propos de nous'}</p>
      <h1>{hero?.blockType === 'hero' ? hero.heading : 'Un partenaire engagé pour l’agriculture de demain.'}</h1>
      <p className="lead">{hero?.blockType === 'hero' && hero.lead ? hero.lead : `${settings.companyName} met son expertise au service des producteurs, entreprises et porteurs de projets agro-pastoraux.`}</p>
    </section>

    <section className="content-wrap two-column">
      <div>
        <p className="eyebrow">{text?.blockType === 'textSection' && text.eyebrow ? text.eyebrow : 'Notre vocation'}</p>
        <h2>{text?.blockType === 'textSection' ? text.heading : 'Rendre les projets agricoles plus solides et plus performants.'}</h2>
        {paragraphs.length ? paragraphs.map((paragraph, index) => <p key={paragraph.id ?? index}>{paragraph.text}</p>) : <>
          <p>Basée à Yaoundé, notre entreprise intervient dans la vente d’équipements agro-pastoraux, l’import-export et l’accompagnement de projets. Nous privilégions des solutions adaptées aux réalités du terrain et aux besoins de chaque client.</p>
          <p>De l’idée initiale jusqu’à l’installation, notre équipe aide à structurer chaque étape afin de créer des exploitations durables et productives.</p>
        </>}
      </div>
      <aside className="quote-box">
        <p>{text?.blockType === 'textSection' && text.quote ? text.quote : '« Accompagner chaque projet avec des solutions concrètes, fiables et pensées pour le terrain. »'}</p>
        <span>{settings.companyName}</span>
      </aside>
    </section>

    <section className="values">
      <p className="eyebrow">{values?.blockType === 'values' && values.eyebrow ? values.eyebrow : 'Ce qui nous guide'}</p>
      <h2>{values?.blockType === 'values' ? values.heading : 'Notre manière de travailler.'}</h2>
      <div className="value-grid">
        {(valueItems.length ? valueItems : [
          { title: 'Proximité', description: 'Une écoute attentive pour comprendre votre contexte et vos objectifs.' },
          { title: 'Fiabilité', description: 'Des équipements et des conseils choisis pour leur pertinence.' },
          { title: 'Impact', description: 'Des solutions qui soutiennent une agriculture plus productive et durable.' },
        ]).map((item, index) => <article key={item.id ?? item.title}>
          <strong>{String(index + 1).padStart(2, '0')}</strong>
          <h3>{item.title}</h3>
          {item.description ? <p>{item.description}</p> : null}
        </article>)}
      </div>
    </section>
  </>
}
