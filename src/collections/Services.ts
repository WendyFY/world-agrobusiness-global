import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: { singular: 'Service', plural: 'Services' },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'slug', 'published', 'updatedAt'], group: 'Contenu du site' },
  access: {
    create: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
    read: ({ req: { user } }) => user ? true : { published: { equals: true } },
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'gallery', type: 'array', labels: { singular: 'Image', plural: 'Images' }, fields: [
      { 
        name: 'image', 
        type: 'upload', 
        relationTo: 'media', 
        required: true,
        admin: {
          description: 'Image du service',
        },
      },
      { name: 'alt', type: 'text', required: true },
    ] },
    { name: 'whatsapp', type: 'text', admin: { description: 'Laisser vide pour utiliser le numéro WhatsApp des paramètres du site.' } },
    { name: 'sortOrder', type: 'number', defaultValue: 0, required: true },
    { name: 'published', type: 'checkbox', defaultValue: true, required: true },
  ],
}
