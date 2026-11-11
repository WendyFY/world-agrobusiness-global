import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: { singular: 'Témoignage', plural: 'Témoignages' },
  admin: {
    useAsTitle: 'authorName',
    defaultColumns: ['authorName', 'company', 'published', 'sortOrder', 'updatedAt'],
    group: 'Contenu du site',
  },
  access: {
    create: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
    read: ({ req: { user } }) => user ? true : { published: { equals: true } },
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: 'authorName', type: 'text', required: true, label: 'Nom de l\'auteur' },
    { name: 'company', type: 'text', label: 'Entreprise / Organisation' },
    { name: 'role', type: 'text', label: 'Rôle / Fonction' },
    { name: 'content', type: 'textarea', required: true, label: 'Témoignage' },
    { name: 'rating', type: 'number', min: 1, max: 5, defaultValue: 5, label: 'Note (1-5)' },
    { 
      name: 'avatar', 
      type: 'upload', 
      relationTo: 'media',
      label: 'Photo de l\'auteur',
    },
    { name: 'published', type: 'checkbox', defaultValue: true, required: true },
    { name: 'sortOrder', type: 'number', defaultValue: 0, required: true },
  ],
}
