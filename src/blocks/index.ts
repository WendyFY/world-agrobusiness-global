import type { Block } from 'payload'

const itemFields = [
  { name: 'title', type: 'text' as const, required: true },
  { name: 'description', type: 'textarea' as const },
  { name: 'label', type: 'text' as const },
  { name: 'href', type: 'text' as const },
]

export const ContentBlocks: Block[] = [
  {
    slug: 'hero',
    labels: { singular: 'Bannière', plural: 'Bannières' },
    fields: [
      { name: 'eyebrow', type: 'text', required: true },
      { name: 'heading', type: 'text', required: true },
      { name: 'lead', type: 'textarea' },
      { 
        name: 'image', 
        type: 'upload', 
        relationTo: 'media',
        admin: {
          description: 'Image de la bannière',
        },
      },
      { name: 'alt', type: 'text' },
    ],
  },
  {
    slug: 'textSection',
    labels: { singular: 'Texte', plural: 'Sections de texte' },
    fields: [
      { name: 'eyebrow', type: 'text' },
      { name: 'heading', type: 'text', required: true },
      { name: 'paragraphs', type: 'array', fields: [{ name: 'text', type: 'textarea', required: true }] },
      { name: 'quote', type: 'textarea' },
    ],
  },
  {
    slug: 'cards',
    labels: { singular: 'Cartes', plural: 'Cartes' },
    fields: [
      { name: 'eyebrow', type: 'text' },
      { name: 'heading', type: 'text', required: true },
      { name: 'intro', type: 'textarea' },
      { name: 'items', type: 'array', fields: itemFields },
    ],
  },
  {
    slug: 'values',
    labels: { singular: 'Valeurs', plural: 'Valeurs' },
    fields: [
      { name: 'eyebrow', type: 'text' },
      { name: 'heading', type: 'text', required: true },
      { name: 'items', type: 'array', fields: itemFields },
    ],
  },
  {
    slug: 'productHighlights',
    labels: { singular: 'Produits à la une', plural: 'Produits à la une' },
    fields: [
      { name: 'eyebrow', type: 'text' },
      { name: 'heading', type: 'text', required: true },
      { name: 'intro', type: 'textarea' },
    ],
  },
  {
    slug: 'contactCallout',
    labels: { singular: 'Appel au contact', plural: 'Appels au contact' },
    fields: [
      { name: 'eyebrow', type: 'text' },
      { name: 'heading', type: 'text', required: true },
      { name: 'description', type: 'textarea' },
    ],
  },
  {
    slug: 'image',
    labels: { singular: 'Image', plural: 'Images' },
    fields: [
      { 
        name: 'image', 
        type: 'upload', 
        relationTo: 'media', 
        required: true,
        admin: {
          description: 'Image à afficher',
        },
      },
      { name: 'alt', type: 'text', required: true },
      { name: 'caption', type: 'text' },
    ],
  },
  {
    slug: 'video',
    labels: { singular: 'Vidéo', plural: 'Vidéos' },
    fields: [
      { name: 'sourceUrl', type: 'text', required: true },
      { name: 'label', type: 'text' },
    ],
  },
  {
    slug: 'map',
    labels: { singular: 'Carte', plural: 'Cartes' },
    fields: [{ name: 'heading', type: 'text' }],
  },
]
