import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: { singular: 'Produit', plural: 'Produits' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'price', 'featuredOnHome', 'updatedAt'],
    group: 'Catalogue',
  },
  access: {
    create: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
    read: ({ req: { user } }) => user ? true : { published: { equals: true } },
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: 'name', type: 'text', required: true, localized: false },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Motoculteur', value: 'motoculteur' },
        { label: 'Motopompe', value: 'motopompe' },
        { label: 'Irrigation', value: 'irrigation' },
        { label: 'Autre équipement', value: 'autre' },
      ],
    },
    { name: 'description', type: 'textarea' },
    { name: 'price', type: 'number', min: 0 },
    { name: 'priceLabel', type: 'text', admin: { description: 'Ex. À partir de. Le montant reste en FCFA.' } },
    {
      name: 'specifications',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },
      ],
    },
    {
      name: 'gallery',
      type: 'array',
      labels: { singular: 'Image', plural: 'Images' },
      fields: [
        { name: 'imageBase64', type: 'textarea', maxLength: 4_200_000, required: true, admin: { components: { Field: '@/components/Base64ImageField#Base64ImageField' } } },
        { name: 'alt', type: 'text', required: true },
      ],
    },
    { name: 'featuredOnHome', type: 'checkbox', defaultValue: false },
    { name: 'sortOrder', type: 'number', defaultValue: 0, required: true },
    { name: 'published', type: 'checkbox', defaultValue: true, required: true },
  ],
}
