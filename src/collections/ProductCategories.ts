import type { CollectionConfig } from 'payload'

export const ProductCategories: CollectionConfig = {
  slug: 'product-categories',
  labels: { singular: 'Catégorie de produit', plural: 'Catégories de produits' },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'slug', 'sortOrder', 'updatedAt'], group: 'Catalogue' },
  access: {
    create: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'description', type: 'textarea' },
    { name: 'imageBase64', type: 'textarea', maxLength: 4_200_000, admin: { components: { Field: '@/components/Base64ImageField#Base64ImageField' } } },
    { name: 'imageAlt', type: 'text' },
    { name: 'sortOrder', type: 'number', defaultValue: 0, required: true },
    { name: 'published', type: 'checkbox', defaultValue: true, required: true },
  ],
}
