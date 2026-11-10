import type { ContentBlock } from "@/lib/types";
import type { Page } from "@/payload-types";

export type ProductSeed = {
  name: string;
  slug: string;
  category: "motoculteur" | "motopompe";
  description?: string;
  price?: number;
  priceLabel?: string;
  specifications: { label: string; value: string }[];
  images: { file: string; alt: string }[];
  featuredOnHome: boolean;
  sortOrder: number;
};

export type ProductCategorySeed = {
  name: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  sortOrder: number;
};

export type ServiceSeed = {
  name: string;
  slug: string;
  description: string;
  images: { file: string; alt: string }[];
  sortOrder: number;
};

export const productCategorySeeds: ProductCategorySeed[] = [
  {
    name: "Motoculteurs",
    slug: "motoculteur",
    description:
      "Des équipements robustes pour préparer et travailler efficacement le sol.",
    image: "motoculteur-diesel-14cv-principal.jfif",
    imageAlt: "Motoculteur diesel pour les travaux agricoles",
    sortOrder: 1,
  },
  {
    name: "Motopompes",
    slug: "motopompe",
    description:
      "Des solutions de pompage adaptées à l’irrigation et aux besoins de votre exploitation.",
    image: "motopompe-centrifugeuse-17cv.jfif",
    imageAlt: "Motopompe centrifugeuse diesel",
    sortOrder: 2,
  },
  {
    name: "Irrigation",
    slug: "irrigation",
    description:
      "Des équipements et systèmes pour mieux maîtriser l’eau sur votre exploitation.",
    image: "irrigation-drip.png",
    imageAlt: "Système d’irrigation goutte à goutte",
    sortOrder: 3,
  },
  {
    name: "Autres équipements",
    slug: "autre",
    description:
      "Découvrez les autres équipements agro-pastoraux proposés par notre équipe.",
    image: "agriculture-hero.png",
    imageAlt: "Équipements et activités agricoles",
    sortOrder: 4,
  },
];

export const serviceSeeds: ServiceSeed[] = [
  {
    name: "Étude et structuration de projets agricoles",
    slug: "etude-projet-agricole",
    description:
      "Nous vous accompagnons dans l’analyse de votre projet, l’identification des besoins et la définition des étapes concrètes de réalisation. Notre équipe vous aide à structurer une activité adaptée à votre terrain, vos objectifs et vos moyens.",
    images: [
      {
        file: "agriculture-hero.png",
        alt: "Exploitation agricole accompagnée par World Agrobusiness Global",
      },
    ],
    sortOrder: 1,
  },
  {
    name: "Installation de systèmes d’irrigation",
    slug: "installation-irrigation",
    description:
      "Nous étudions vos cultures et votre terrain afin de proposer, fournir et installer un système d’irrigation approprié. Goutte à goutte, aspersion ou autres solutions : nous vous conseillons à chaque étape.",
    images: [
      {
        file: "irrigation-drip.png",
        alt: "Système d’irrigation goutte à goutte",
      },
    ],
    sortOrder: 2,
  },
  {
    name: "Commerce général et import-export",
    slug: "commerce-import-export",
    description:
      "Nous facilitons l’accès aux équipements et fournitures utiles à vos activités agro-pastorales grâce à notre service de commerce général et d’import-export.",
    images: [
      {
        file: "motoculteur-diesel-14cv.jfif",
        alt: "Équipement agricole proposé à la vente",
      },
    ],
    sortOrder: 3,
  },
];

export type PageSeed = Omit<Page, "id" | "createdAt" | "updatedAt">;

export const productSeeds: ProductSeed[] = [
  {
    name: "Motoculteur chenille diesel 8 chevaux",
    slug: "motoculteur-chenille-diesel-8cv",
    category: "motoculteur",
    description:
      "Un équipement polyvalent pour les travaux de préparation et de culture du sol.",
    specifications: [],
    images: [
      {
        file: "motoculteur-chenille-diesel-8cv.jfif",
        alt: "Motoculteur chenille diesel 8 chevaux",
      },
    ],
    featuredOnHome: true,
    sortOrder: 1,
  },
  {
    name: "Motoculteur diesel 14 chevaux",
    slug: "motoculteur-diesel-14cv",
    category: "motoculteur",
    price: 1800000,
    priceLabel: "À partir de",
    specifications: [],
    images: [
      {
        file: "motoculteur-diesel-14cv-principal.jfif",
        alt: "Motoculteur diesel 14 chevaux",
      },
      {
        file: "motoculteur-diesel-14cv.jfif",
        alt: "Motoculteur diesel 14 chevaux devant le magasin World Agrobusiness",
      },
    ],
    featuredOnHome: true,
    sortOrder: 2,
  },
  {
    name: "Motoculteur essence",
    slug: "motoculteur-essence",
    category: "motoculteur",
    description:
      "Avec fraise rotative et sillonneuse bineuse, pour un travail du sol précis et efficace.",
    specifications: [],
    images: [
      {
        file: "motoculteur-essence.jfif",
        alt: "Motoculteur essence avec fraise rotative et sillonneuse bineuse",
      },
      {
        file: "motoculteur-essence-2.jfif",
        alt: "Motoculteur essence avec accessoires de culture",
      },
    ],
    featuredOnHome: true,
    sortOrder: 3,
  },
  {
    name: "Motopompe centrifugeuse diesel 17 chevaux",
    slug: "motopompe-centrifugeuse-diesel-17cv",
    category: "motopompe",
    price: 1200000,
    specifications: [
      { label: "Sortie", value: "80 mm" },
      { label: "Démarrage", value: "à batterie" },
    ],
    images: [
      {
        file: "motopompe-centrifugeuse-17cv.jfif",
        alt: "Motopompe centrifugeuse diesel 17 chevaux",
      },
      {
        file: "motopompe-centrifugeuse-17cv-2.jfif",
        alt: "Caractéristiques de la motopompe centrifugeuse diesel 17 chevaux",
      },
    ],
    featuredOnHome: true,
    sortOrder: 4,
  },
];

const homeBlocks: ContentBlock[] = [
  {
    blockType: "hero",
    eyebrow: "Agro • élevage • irrigation",
    heading: "Faire grandir vos projets, durablement.",
    lead: "WORLD AGROBUSINESS GLOBAL SARL accompagne les professionnels et porteurs de projets avec des équipements agro-pastoraux adaptés et un savoir-faire de terrain.",
  },
  {
    blockType: "textSection",
    eyebrow: "Notre engagement",
    heading: "Des solutions concrètes, pensées pour le terrain.",
    paragraphs: [
      {
        text: "Nous accompagnons les professionnels et porteurs de projets avec des équipements agro-pastoraux adaptés et un savoir-faire de terrain.",
      },
      {
        text: "Expertise terrain · Solutions sur mesure · Accompagnement complet.",
      },
    ],
  },
  {
    blockType: "cards",
    eyebrow: "Nos services",
    heading: "Une offre complète pour votre exploitation.",
    intro:
      "Commerce général, import-export et prestations spécialisées pour le développement de vos activités agro-pastorales.",
    items: [
      {
        title: "Équipements agro-pastoraux",
        description:
          "Vente d’équipements sélectionnés pour répondre aux besoins des exploitations modernes.",
        label: "Voir les produits",
        href: "/produits",
      },
      {
        title: "Irrigation",
        description:
          "Étude, fourniture et installation de systèmes performants pour une eau mieux maîtrisée.",
        label: "Voir les systèmes",
        href: "/irrigation",
      },
      {
        title: "Étude & structuration",
        description:
          "Étude de projet, mise en place et structuration pour donner une base solide à vos ambitions.",
        label: "Parler de votre projet",
        href: "/contact",
      },
      {
        title: "Import-export",
        description:
          "Commerce général et import-export pour faciliter l’accès aux bons équipements.",
        label: "Nous contacter",
        href: "/contact",
      },
    ],
  },
  {
    blockType: "productHighlights",
    eyebrow: "Nos produits",
    heading: "Des équipements conçus pour le terrain.",
    intro:
      "Une sélection de matériel agro-pastoral robuste et adapté aux besoins des exploitations.",
  },
  {
    blockType: "cards",
    eyebrow: "Irrigation intelligente",
    heading: "Chaque culture mérite son système.",
    intro:
      "Nous vous conseillons dans le choix et assurons l’installation de solutions adaptées à votre terrain, vos cultures et vos objectifs.",
    items: [
      { title: "Laser spray" },
      { title: "Goutte à goutte" },
      { title: "Aspersion" },
      { title: "Systèmes avec goutteurs" },
    ],
  },
  {
    blockType: "contactCallout",
    eyebrow: "Parlons de votre projet",
    heading: "Votre prochain projet commence ici.",
    description:
      "Contactez notre équipe pour une demande d’équipement, une étude ou un accompagnement personnalisé.",
  },
];

export const pageSeeds: PageSeed[] = [
  {
    title: "Accueil",
    slug: "accueil",
    metaDescription:
      "Équipements agro-pastoraux, irrigation et accompagnement de projets.",
    showInNavigation: false,
    sortOrder: 0,
    blocks: homeBlocks,
  },
  {
    title: "À propos",
    slug: "a-propos",
    metaDescription:
      "Découvrez l’histoire, la mission et les solutions de WORLD AGROBUSINESS GLOBAL SARL, active depuis 2022 au Cameroun.",
    showInNavigation: true,
    sortOrder: 1,
    blocks: [
      {
        blockType: "hero",
        eyebrow: "Notre histoire · Depuis 2022",
        heading:
          "Des solutions concrètes pour celles et ceux qui font grandir leurs activités.",
        lead: "WORLD AGROBUSINESS GLOBAL SARL facilite l’accès aux équipements modernes et aux solutions techniques qui soutiennent l’agriculture, l’élevage et la transformation agroalimentaire.",
      },
      {
        blockType: "textSection",
        eyebrow: "Notre histoire",
        heading:
          "Une expertise diversifiée au service du développement agro-pastoral.",
        paragraphs: [
          {
            text: "Créée dans une dynamique d’innovation, d’entrepreneuriat et de développement économique, WORLD AGROBUSINESS GLOBAL SARL exerce depuis 2022 avec une ambition claire : faciliter l’accès aux équipements modernes et aux solutions techniques qui contribuent au développement des activités agricoles, de l’élevage et de la transformation agroalimentaire.",
          },
          {
            text: "Développée par WORLD BUSINESSES GLOBAL SARL, dont elle constitue une branche commerciale déclarée sous le nom WORLD AGROBUSINESS GLOBAL SARL, notre activité s’inscrit dans une vision de diversification commerciale, d’innovation et d’accompagnement des professionnels.",
          },
          {
            text: "Depuis le début de nos activités, nous nous engageons à répondre aux besoins des agriculteurs, des éleveurs, des entrepreneurs, des transformateurs agroalimentaires et des entreprises en leur proposant des équipements et des services adaptés aux réalités du terrain.",
          },
          {
            text: "Nous intervenons dans la vente d’équipements agricoles, de machines agroalimentaires, de matériels d’élevage et de solutions d’irrigation : motoculteurs, semoirs, motopompes, pompes, systèmes d’arrosage, machines de transformation agroalimentaire et divers équipements pour améliorer les conditions de travail et la productivité.",
          },
          {
            text: "Nous proposons également l’installation de systèmes d’irrigation et accompagnons les producteurs dans le choix de solutions adaptées à leurs cultures, à leurs superficies et aux caractéristiques de leurs exploitations. Nous aidons aussi entrepreneurs et entreprises à identifier les matériels et solutions techniques correspondant à leurs projets et ambitions.",
          },
          {
            text: "Notre offre associe vente d’équipements, import-export, installation de systèmes d’irrigation, location de matériels et prestations de services. La location concerne notamment les outils agricoles, les équipements de chantier, les matériels de mesure et de géolocalisation ainsi que certaines machines agroalimentaires. Elle s’adresse aux professionnels et aux particuliers, comme notre offre plus largement s’adresse aux agriculteurs, éleveurs, entrepreneurs, artisans, transformateurs, commerçants et entreprises.",
          },
          {
            text: "Depuis 2022, nous poursuivons notre développement avec la volonté de contribuer à la modernisation des activités agro-pastorales et à la valorisation du potentiel agricole et agroalimentaire. Nous souhaitons renforcer notre présence au Cameroun, développer des opportunités dans la sous-région et favoriser les échanges avec les marchés internationaux grâce à l’import-export.",
          },
          {
            text: "Nous construisons des relations durables avec nos clients et partenaires en privilégiant l’écoute, les conseils adaptés, la qualité des équipements et un accompagnement attentif. Nous voulons contribuer à une agriculture mieux équipée, à des activités d’élevage plus performantes et à une transformation agroalimentaire créatrice de valeur.",
          },
          {
            text: "Notre mission : faciliter l’accès aux équipements agro-pastoraux, aux solutions d’irrigation et aux services adaptés pour accompagner agriculteurs, éleveurs, entrepreneurs et entreprises dans le développement de leurs activités.",
          },
          {
            text: "Notre vision : devenir un partenaire de référence dans la vente et la location d’équipements agro-pastoraux, l’installation de systèmes d’irrigation, l’import-export et l’accompagnement des professionnels au Cameroun et sur les marchés africains.",
          },
        ],
        quote:
          "« Nous sommes un partenaire engagé aux côtés de celles et ceux qui entreprennent, produisent, transforment et innovent. »",
      },
      {
        blockType: "values",
        eyebrow: "Nos engagements",
        heading: "Des principes qui guident chacune de nos actions.",
        items: [
          {
            title: "Innovation",
            description:
              "Proposer des équipements et des solutions adaptés aux besoins du marché.",
          },
          {
            title: "Qualité",
            description:
              "Accorder une attention particulière au choix des équipements et à la satisfaction des clients.",
          },
          {
            title: "Accompagnement",
            description:
              "Aider les clients à identifier les solutions correspondant à leurs projets.",
          },
          {
            title: "Proximité",
            description:
              "Rester à l’écoute des réalités du terrain et des besoins des professionnels.",
          },
          {
            title: "Développement",
            description:
              "Contribuer à la modernisation de l’agriculture, de l’élevage et de la transformation agroalimentaire.",
          },
        ],
      },
    ],
  },
  {
    title: "Services",
    slug: "services",
    metaDescription:
      "Équipements, irrigation, étude et structuration de projets agricoles.",
    showInNavigation: false,
    sortOrder: 2,
    blocks: [
      {
        blockType: "hero",
        eyebrow: "Nos services",
        heading: "Des solutions utiles à chaque étape de votre projet.",
        lead: "Notre savoir-faire réunit équipements, conseil et accompagnement pour soutenir vos activités agro-pastorales.",
      },
      {
        blockType: "video",
        sourceUrl: "/assets/services-agriculture.mp4",
        label: "Vidéo de présentation des services agricoles",
      },
      {
        blockType: "cards",
        heading: "Nos services",
        items: [
          {
            title: "Équipements agro-pastoraux",
            description:
              "Vente d’équipements adaptés aux besoins des exploitations agricoles et d’élevage.",
            label: "Voir nos produits",
            href: "/produits",
          },
          {
            title: "Irrigation",
            description:
              "Étude, fourniture et installation de solutions d’irrigation adaptées à votre terrain et à vos cultures.",
            label: "Découvrir l’irrigation",
            href: "/irrigation",
          },
          {
            title: "Étude de projet",
            description:
              "Analyse de votre projet pour identifier les besoins, les priorités et les solutions adaptées.",
            label: "Échanger sur WhatsApp",
            href: "/contact",
          },
          {
            title: "Structuration & accompagnement",
            description:
              "Mise en place et structuration de projet avec un accompagnement personnalisé.",
            label: "Échanger sur WhatsApp",
            href: "/contact",
          },
          {
            title: "Commerce & import-export",
            description:
              "Commerce général et import-export pour faciliter l’accès à des équipements pertinents.",
            label: "Échanger sur WhatsApp",
            href: "/contact",
          },
        ],
      },
    ],
  },
  {
    title: "Irrigation",
    slug: "irrigation",
    metaDescription:
      "Solutions d’irrigation adaptées aux cultures et aux exploitations.",
    showInNavigation: true,
    sortOrder: 3,
    blocks: [
      {
        blockType: "hero",
        eyebrow: "Solutions d’irrigation",
        heading: "Une eau maîtrisée pour des cultures qui prospèrent.",
        lead: "Nous étudions, fournissons et installons des systèmes d’irrigation adaptés à vos cultures, votre terrain et vos objectifs.",
      },
      {
        blockType: "image",
        imageBase64: "",
        alt: "Système d’irrigation goutte à goutte dans un champ",
      },
      {
        blockType: "cards",
        heading: "Nos systèmes",
        items: [
          {
            title: "Laser spray",
            description:
              "Une solution de pulvérisation pensée pour une irrigation homogène selon votre exploitation.",
          },
          {
            title: "Goutte à goutte",
            description:
              "Un apport d’eau précis au pied des plantes afin d’optimiser la consommation et les rendements.",
          },
          {
            title: "Aspersion",
            description:
              "Un système polyvalent pour arroser de manière régulière de plus grandes surfaces.",
          },
          {
            title: "Systèmes avec goutteurs",
            description:
              "Une installation ciblée et configurable selon les particularités de vos cultures.",
          },
        ],
      },
      {
        blockType: "contactCallout",
        eyebrow: "Un besoin précis ?",
        heading: "Parlons de votre installation.",
      },
    ],
  },
  {
    title: "Contact",
    slug: "contact",
    metaDescription: "Contactez World Agrobusiness Global SARL à Yaoundé.",
    showInNavigation: true,
    sortOrder: 4,
    blocks: [
      {
        blockType: "hero",
        eyebrow: "Nous contacter",
        heading: "Une question ou un projet à nous confier ?",
        lead: "Notre équipe est disponible pour vous répondre et vous orienter vers la solution appropriée.",
      },
      {
        blockType: "map",
        heading: "Localisation de World Agrobusiness Global",
      },
      {
        blockType: "textSection",
        eyebrow: "Notre adresse",
        heading: "Retrouvez-nous à Yaoundé.",
        paragraphs: [
          {
            text: "Biyem-Assi Biscuiterie, face Vatican Express Voyage, Yaoundé, Cameroun.",
          },
          {
            text: "Horaires : contactez-nous par appel ou WhatsApp pour convenir d’un rendez-vous.",
          },
        ],
      },
      {
        blockType: "contactCallout",
        eyebrow: "Contact direct",
        heading: "Échangeons rapidement.",
        description: "WhatsApp, appel ou e-mail : notre équipe vous répond.",
      },
    ],
  },
  {
    title: "Produits",
    slug: "produits",
    metaDescription: "Catalogue de produits et équipements agro-pastoraux.",
    showInNavigation: false,
    sortOrder: 5,
    blocks: [
      {
        blockType: "hero",
        eyebrow: "Nos produits",
        heading: "Des équipements prêts à travailler avec vous.",
        lead: "Découvrez notre sélection d’équipements agro-pastoraux. Contactez-nous par WhatsApp pour connaître la disponibilité et passer commande.",
      },
    ],
  },
];
