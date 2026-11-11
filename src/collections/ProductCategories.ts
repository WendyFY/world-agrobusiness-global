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
    { 
      name: 'image', 
      type: 'upload', 
      relationTo: 'media',
      admin: {
        description: 'Image de la catégorie',
      },
    },
    { name: 'sortOrder', type: 'number', defaultValue: 0, required: true },
    { name: 'published', type: 'checkbox', defaultValue: true, required: true },
  ],
}
