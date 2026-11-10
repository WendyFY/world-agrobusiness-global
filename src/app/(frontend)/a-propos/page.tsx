import type { Metadata } from 'next'
import { getSiteSettings } from '@/lib/data'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'À propos — World Agrobusiness Global',
    description: 'Découvrez l’histoire, la mission et les solutions de WORLD AGROBUSINESS GLOBAL SARL, active depuis 2022 au Cameroun.',
  }
}

const commitments = [
  { title: 'Innovation', description: 'Proposer des équipements et des solutions adaptés aux besoins du marché.' },
  { title: 'Qualité', description: 'Accorder une attention particulière au choix des équipements et à la satisfaction des clients.' },
  { title: 'Accompagnement', description: 'Aider nos clients à identifier les solutions qui correspondent à leurs projets.' },
  { title: 'Proximité', description: 'Rester à l’écoute des réalités du terrain et des besoins des professionnels.' },
  { title: 'Développement', description: 'Contribuer à la modernisation de l’agriculture, de l’élevage et de la transformation agroalimentaire.' },
]

export default async function AboutPage() {
  const settings = await getSiteSettings()

  return <div className="about-page">
    <section className="about-hero">
      <div className="about-hero-copy">
        <p className="eyebrow">Notre histoire · Depuis 2022</p>
        <h1>Des solutions concrètes pour celles et ceux qui <em>font grandir</em> leurs activités.</h1>
        <p className="about-hero-lead">WORLD AGROBUSINESS GLOBAL SARL facilite l’accès aux équipements modernes et aux solutions techniques qui soutiennent l’agriculture, l’élevage et la transformation agroalimentaire.</p>
        <a className="button primary" href={`https://wa.me/${settings.whatsapp.replace(/\D/g, '')}`}>Parlons de votre projet <span>→</span></a>
      </div>
      <div className="about-hero-note"><span>Notre ambition</span><p>Équiper les projets d’aujourd’hui. Accompagner le développement de demain.</p><strong>2022 <i>—</i> aujourd’hui</strong></div>
    </section>

    <section className="about-origin">
      <div className="about-section-label"><span>01</span><p>Une histoire de développement</p></div>
      <div className="about-origin-copy">
        <h2>Née d’une volonté d’innover et d’entreprendre.</h2>
        <p>Créée dans une dynamique d’innovation, d’entrepreneuriat et de développement économique, <strong>WORLD AGROBUSINESS GLOBAL SARL exerce depuis 2022</strong> avec une ambition claire : faciliter l’accès aux équipements modernes et aux solutions techniques qui contribuent au développement des activités agricoles, de l’élevage et de la transformation agroalimentaire.</p>
        <p>Développée par <strong>WORLD BUSINESSES GLOBAL SARL</strong>, dont elle constitue une branche commerciale déclarée sous le nom WORLD AGROBUSINESS GLOBAL SARL, notre activité s’inscrit dans une vision de diversification commerciale, d’innovation et d’accompagnement des professionnels.</p>
        <p>Depuis le début de nos activités, nous nous engageons à répondre aux besoins des agriculteurs, des éleveurs, des entrepreneurs, des transformateurs agroalimentaires et des entreprises, en leur proposant des équipements et des services adaptés aux réalités du terrain.</p>
      </div>
    </section>

    <section className="about-expertise">
      <div className="about-expertise-heading"><div className="about-section-label"><span>02</span><p>Nos domaines d’intervention</p></div><h2>Une expertise diversifiée au service du développement agro-pastoral.</h2></div>
      <div className="about-expertise-body">
        <p>WORLD AGROBUSINESS GLOBAL SARL intervient dans la vente d’équipements agricoles, de machines agroalimentaires, de matériels d’élevage et de solutions d’irrigation. Notre catalogue comprend notamment des motoculteurs, des semoirs, des motopompes, des pompes, des systèmes d’arrosage, des machines de transformation agroalimentaire et divers équipements destinés à améliorer les conditions de travail et la productivité.</p>
        <p>Conscients de l’importance de l’eau dans la réussite des activités agricoles, nous proposons également des services d’installation de systèmes d’irrigation. Notre objectif est d’accompagner les producteurs dans le choix de solutions adaptées à leurs cultures, à leurs superficies et aux caractéristiques de leurs exploitations.</p>
        <p>Au-delà de la commercialisation des équipements, nous accompagnons les entrepreneurs et les entreprises dans l’identification de matériels et de solutions techniques correspondant à leurs projets, à leurs besoins opérationnels et à leurs ambitions de développement.</p>
      </div>
      <div className="about-service-tags"><span>Équipements agricoles</span><span>Élevage</span><span>Irrigation</span><span>Transformation agroalimentaire</span></div>
    </section>

    <section className="about-offer">
      <div className="about-section-label"><span>03</span><p>Une offre adaptée</p></div>
      <div className="about-offer-content">
        <div><h2>La vente, la location et les prestations de services.</h2><p>Parce que chaque activité présente des besoins spécifiques, WORLD AGROBUSINESS GLOBAL SARL développe une offre qui associe la vente d’équipements, l’import-export, l’installation de systèmes d’irrigation, la location de matériels et diverses prestations de services.</p></div>
        <div><p>Notre service de location concerne notamment les outils agricoles, les équipements de chantier, les matériels de mesure et de géolocalisation ainsi que certaines machines agroalimentaires. Cette offre permet aux professionnels et aux particuliers d’accéder aux équipements nécessaires à leurs travaux selon leurs besoins.</p><p>Cette diversification traduit notre volonté de proposer des solutions pratiques à différents profils de clients : agriculteurs, éleveurs, entrepreneurs, artisans, transformateurs, commerçants et entreprises.</p></div>
      </div>
      <div className="about-rental-list"><span>Vente & import-export</span><span>Installation d’irrigation</span><span>Location de matériels</span><span>Prestations de services</span></div>
    </section>

    <section className="about-future">
      <div className="about-future-heading"><div className="about-section-label"><span>04</span><p>La suite de l’histoire</p></div><h2>Une vision tournée vers l’avenir.</h2></div>
      <div className="about-future-content">
        <p>Depuis 2022, WORLD AGROBUSINESS GLOBAL SARL poursuit son développement avec la volonté de contribuer à la modernisation des activités agro-pastorales et à la valorisation du potentiel agricole et agroalimentaire.</p>
        <p>Notre ambition est de renforcer notre présence au Cameroun, de développer des opportunités commerciales dans la sous-région et de favoriser les échanges avec les marchés internationaux grâce à nos activités d’import-export.</p>
        <p>Nous souhaitons construire des relations durables avec nos clients et partenaires en privilégiant l’écoute, les conseils adaptés, la qualité des équipements proposés et un accompagnement attentif dans la réalisation de leurs projets.</p>
        <p>À travers WORLD AGROBUSINESS GLOBAL SARL, nous voulons contribuer à une agriculture mieux équipée, à des activités d’élevage plus performantes et à une transformation agroalimentaire créatrice de valeur.</p>
      </div>
    </section>

    <section className="about-purpose">
      <article><span className="about-purpose-icon">↗</span><p className="eyebrow">Notre mission</p><h2>Faciliter l’accès aux bonnes solutions.</h2><p>Faciliter l’accès aux équipements agro-pastoraux, aux solutions d’irrigation et aux services adaptés afin d’accompagner les agriculteurs, les éleveurs, les entrepreneurs et les entreprises dans le développement de leurs activités.</p></article>
      <article><span className="about-purpose-icon">◎</span><p className="eyebrow">Notre vision</p><h2>Être un partenaire de référence.</h2><p>Devenir un partenaire de référence dans la vente et la location d’équipements agro-pastoraux, l’installation de systèmes d’irrigation, l’import-export et l’accompagnement des professionnels au Cameroun et sur les marchés africains.</p></article>
    </section>

    <section className="about-values">
      <div className="about-values-heading"><div className="about-section-label"><span>05</span><p>Nos engagements</p></div><h2>Des principes qui guident chacune de nos actions.</h2></div>
      <div className="about-values-grid">{commitments.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
    </section>

    <section className="about-closing">
      <p className="eyebrow">À vos côtés, du projet à l’action</p>
      <h2>Bien plus qu’un fournisseur d’équipements.</h2>
      <p>Nous sommes un partenaire engagé aux côtés de celles et ceux qui entreprennent, produisent, transforment et innovent.</p>
      <p>De la fourniture d’équipements agricoles à l’installation de systèmes d’irrigation, en passant par la location de matériels et l’accompagnement des entrepreneurs et des entreprises, nous recherchons des solutions concrètes pour soutenir la réussite de vos projets.</p>
      <a className="button primary" href={`https://wa.me/${settings.whatsapp.replace(/\D/g, '')}`}>Échangeons sur votre projet <span>→</span></a>
      <span className="about-signature">WORLD AGROBUSINESS GLOBAL SARL <i>·</i> Équipements agricoles, irrigation et agroalimentaire au Cameroun</span>
    </section>
  </div>
}
