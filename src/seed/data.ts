import type { ContentBlock } from '@/lib/types'
import type { Page } from '@/payload-types'

export type ProductSeed = {
  name: string
  slug: string
  category: 'motoculteur' | 'motopompe'
  description?: string
  price?: number
  priceLabel?: string
  specifications: { label: string; value: string }[]
  images: { file: string; alt: string }[]
  featuredOnHome: boolean
  sortOrder: number
}

export type PageSeed = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>

export const productSeeds: ProductSeed[] = [
  {
    name: 'Motoculteur chenille diesel 8 chevaux', slug: 'motoculteur-chenille-diesel-8cv', category: 'motoculteur',
    description: 'Un équipement polyvalent pour les travaux de préparation et de culture du sol.', specifications: [],
    images: [{ file: 'motoculteur-chenille-diesel-8cv.jfif', alt: 'Motoculteur chenille diesel 8 chevaux' }], featuredOnHome: true, sortOrder: 1,
  },
  {
    name: 'Motoculteur diesel 14 chevaux', slug: 'motoculteur-diesel-14cv', category: 'motoculteur',
    price: 1800000, priceLabel: 'À partir de', specifications: [],
    images: [
      { file: 'motoculteur-diesel-14cv-principal.jfif', alt: 'Motoculteur diesel 14 chevaux' },
      { file: 'motoculteur-diesel-14cv.jfif', alt: 'Motoculteur diesel 14 chevaux devant le magasin World Agrobusiness' },
    ], featuredOnHome: true, sortOrder: 2,
  },
  {
    name: 'Motoculteur essence', slug: 'motoculteur-essence', category: 'motoculteur',
    description: 'Avec fraise rotative et sillonneuse bineuse, pour un travail du sol précis et efficace.', specifications: [],
    images: [
      { file: 'motoculteur-essence.jfif', alt: 'Motoculteur essence avec fraise rotative et sillonneuse bineuse' },
      { file: 'motoculteur-essence-2.jfif', alt: 'Motoculteur essence avec accessoires de culture' },
    ], featuredOnHome: true, sortOrder: 3,
  },
  {
    name: 'Motopompe centrifugeuse diesel 17 chevaux', slug: 'motopompe-centrifugeuse-diesel-17cv', category: 'motopompe',
    price: 1200000, specifications: [{ label: 'Sortie', value: '80 mm' }, { label: 'Démarrage', value: 'à batterie' }],
    images: [
      { file: 'motopompe-centrifugeuse-17cv.jfif', alt: 'Motopompe centrifugeuse diesel 17 chevaux' },
      { file: 'motopompe-centrifugeuse-17cv-2.jfif', alt: 'Caractéristiques de la motopompe centrifugeuse diesel 17 chevaux' },
    ], featuredOnHome: true, sortOrder: 4,
  },
]

const homeBlocks: ContentBlock[] = [
  { blockType: 'hero', eyebrow: 'Agro • élevage • irrigation', heading: 'Faire grandir vos projets, durablement.', lead: 'WORLD AGROBUSINESS GLOBAL SARL accompagne les professionnels et porteurs de projets avec des équipements agro-pastoraux adaptés et un savoir-faire de terrain.' },
  { blockType: 'textSection', eyebrow: 'Notre engagement', heading: 'Des solutions concrètes, pensées pour le terrain.', paragraphs: [
    { text: 'Nous accompagnons les professionnels et porteurs de projets avec des équipements agro-pastoraux adaptés et un savoir-faire de terrain.' },
    { text: 'Expertise terrain · Solutions sur mesure · Accompagnement complet.' },
  ] },
  { blockType: 'cards', eyebrow: 'Nos services', heading: 'Une offre complète pour votre exploitation.', intro: 'Commerce général, import-export et prestations spécialisées pour le développement de vos activités agro-pastorales.', items: [
    { title: 'Équipements agro-pastoraux', description: 'Vente d’équipements sélectionnés pour répondre aux besoins des exploitations modernes.', label: 'Voir les produits', href: '/produits' },
    { title: 'Irrigation', description: 'Étude, fourniture et installation de systèmes performants pour une eau mieux maîtrisée.', label: 'Voir les systèmes', href: '/irrigation' },
    { title: 'Étude & structuration', description: 'Étude de projet, mise en place et structuration pour donner une base solide à vos ambitions.', label: 'Parler de votre projet', href: '/contact' },
    { title: 'Import-export', description: 'Commerce général et import-export pour faciliter l’accès aux bons équipements.', label: 'Nous contacter', href: '/contact' },
  ] },
  { blockType: 'productHighlights', eyebrow: 'Nos produits', heading: 'Des équipements conçus pour le terrain.', intro: 'Une sélection de matériel agro-pastoral robuste et adapté aux besoins des exploitations.' },
  { blockType: 'cards', eyebrow: 'Irrigation intelligente', heading: 'Chaque culture mérite son système.', intro: 'Nous vous conseillons dans le choix et assurons l’installation de solutions adaptées à votre terrain, vos cultures et vos objectifs.', items: [
    { title: 'Laser spray' }, { title: 'Goutte à goutte' }, { title: 'Aspersion' }, { title: 'Systèmes avec goutteurs' },
  ] },
  { blockType: 'contactCallout', eyebrow: 'Parlons de votre projet', heading: 'Votre prochain projet commence ici.', description: 'Contactez notre équipe pour une demande d’équipement, une étude ou un accompagnement personnalisé.' },
]

export const pageSeeds: PageSeed[] = [
  {
    title: 'Accueil', slug: 'accueil', metaDescription: 'Équipements agro-pastoraux, irrigation et accompagnement de projets.', showInNavigation: false, sortOrder: 0, blocks: homeBlocks,
  },
  {
    title: 'À propos', slug: 'a-propos', metaDescription: 'Découvrez World Agrobusiness Global SARL et son accompagnement des projets agricoles.', showInNavigation: true, sortOrder: 1, blocks: [
      { blockType: 'hero', eyebrow: 'À propos de nous', heading: 'Un partenaire engagé pour l’agriculture de demain.', lead: 'WORLD AGROBUSINESS GLOBAL SARL met son expertise au service des producteurs, entreprises et porteurs de projets agro-pastoraux.' },
      { blockType: 'textSection', eyebrow: 'Notre vocation', heading: 'Rendre les projets agricoles plus solides et plus performants.', paragraphs: [
        { text: 'Basée à Yaoundé, notre entreprise intervient dans la vente d’équipements agro-pastoraux, l’import-export et l’accompagnement de projets. Nous privilégions des solutions adaptées aux réalités du terrain et aux besoins de chaque client.' },
        { text: 'De l’idée initiale jusqu’à l’installation, notre équipe aide à structurer chaque étape afin de créer des exploitations durables et productives.' },
      ], quote: '« Accompagner chaque projet avec des solutions concrètes, fiables et pensées pour le terrain. »' },
      { blockType: 'values', eyebrow: 'Ce qui nous guide', heading: 'Notre manière de travailler.', items: [
        { title: 'Proximité', description: 'Une écoute attentive pour comprendre votre contexte et vos objectifs.' },
        { title: 'Fiabilité', description: 'Des équipements et des conseils choisis pour leur pertinence.' },
        { title: 'Impact', description: 'Des solutions qui soutiennent une agriculture plus productive et durable.' },
      ] },
    ],
  },
  {
    title: 'Services', slug: 'services', metaDescription: 'Équipements, irrigation, étude et structuration de projets agricoles.', showInNavigation: true, sortOrder: 2, blocks: [
      { blockType: 'hero', eyebrow: 'Nos services', heading: 'Des solutions utiles à chaque étape de votre projet.', lead: 'Notre savoir-faire réunit équipements, conseil et accompagnement pour soutenir vos activités agro-pastorales.' },
      { blockType: 'video', sourceUrl: '/assets/services-agriculture.mp4', label: 'Vidéo de présentation des services agricoles' },
      { blockType: 'cards', heading: 'Nos services', items: [
        { title: 'Équipements agro-pastoraux', description: 'Vente d’équipements adaptés aux besoins des exploitations agricoles et d’élevage.', label: 'Voir nos produits', href: '/produits' },
        { title: 'Irrigation', description: 'Étude, fourniture et installation de solutions d’irrigation adaptées à votre terrain et à vos cultures.', label: 'Découvrir l’irrigation', href: '/irrigation' },
        { title: 'Étude de projet', description: 'Analyse de votre projet pour identifier les besoins, les priorités et les solutions adaptées.', label: 'Échanger sur WhatsApp', href: '/contact' },
        { title: 'Structuration & accompagnement', description: 'Mise en place et structuration de projet avec un accompagnement personnalisé.', label: 'Échanger sur WhatsApp', href: '/contact' },
        { title: 'Commerce & import-export', description: 'Commerce général et import-export pour faciliter l’accès à des équipements pertinents.', label: 'Échanger sur WhatsApp', href: '/contact' },
      ] },
    ],
  },
  {
    title: 'Irrigation', slug: 'irrigation', metaDescription: 'Solutions d’irrigation adaptées aux cultures et aux exploitations.', showInNavigation: true, sortOrder: 3, blocks: [
      { blockType: 'hero', eyebrow: 'Solutions d’irrigation', heading: 'Une eau maîtrisée pour des cultures qui prospèrent.', lead: 'Nous étudions, fournissons et installons des systèmes d’irrigation adaptés à vos cultures, votre terrain et vos objectifs.' },
      { blockType: 'image', imageBase64: '', alt: 'Système d’irrigation goutte à goutte dans un champ' },
      { blockType: 'cards', heading: 'Nos systèmes', items: [
        { title: 'Laser spray', description: 'Une solution de pulvérisation pensée pour une irrigation homogène selon votre exploitation.' },
        { title: 'Goutte à goutte', description: 'Un apport d’eau précis au pied des plantes afin d’optimiser la consommation et les rendements.' },
        { title: 'Aspersion', description: 'Un système polyvalent pour arroser de manière régulière de plus grandes surfaces.' },
        { title: 'Systèmes avec goutteurs', description: 'Une installation ciblée et configurable selon les particularités de vos cultures.' },
      ] },
      { blockType: 'contactCallout', eyebrow: 'Un besoin précis ?', heading: 'Parlons de votre installation.' },
    ],
  },
  {
    title: 'Contact', slug: 'contact', metaDescription: 'Contactez World Agrobusiness Global SARL à Yaoundé.', showInNavigation: true, sortOrder: 4, blocks: [
      { blockType: 'hero', eyebrow: 'Nous contacter', heading: 'Une question ou un projet à nous confier ?', lead: 'Notre équipe est disponible pour vous répondre et vous orienter vers la solution appropriée.' },
      { blockType: 'map', heading: 'Localisation de World Agrobusiness Global' },
      { blockType: 'textSection', eyebrow: 'Notre adresse', heading: 'Retrouvez-nous à Yaoundé.', paragraphs: [
        { text: 'Biyem-Assi Biscuiterie, face Vatican Express Voyage, Yaoundé, Cameroun.' },
        { text: 'Horaires : contactez-nous par appel ou WhatsApp pour convenir d’un rendez-vous.' },
      ] },
      { blockType: 'contactCallout', eyebrow: 'Contact direct', heading: 'Échangeons rapidement.', description: 'WhatsApp, appel ou e-mail : notre équipe vous répond.' },
    ],
  },
  {
    title: 'Produits', slug: 'produits', metaDescription: 'Catalogue de produits et équipements agro-pastoraux.', showInNavigation: false, sortOrder: 5, blocks: [
      { blockType: 'hero', eyebrow: 'Nos produits', heading: 'Des équipements prêts à travailler avec vous.', lead: 'Découvrez notre sélection d’équipements agro-pastoraux. Contactez-nous par WhatsApp pour connaître la disponibilité et passer commande.' },
    ],
  },
]
