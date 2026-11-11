import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: { singular: 'Projet', plural: 'Projets' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'published', 'sortOrder', 'updatedAt'],
    group: 'Contenu du site',
  },
  access: {
    create: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
    read: ({ req: { user } }) => user ? true : { published: { equals: true } },
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Titre du projet' },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { 
      name: 'category', 
      type: 'relationship', 
      relationTo: 'project-categories',
      required: true,
      label: 'Catégorie',
    },
    { name: 'description', type: 'textarea', label: 'Description courte' },
    { name: 'content', type: 'textarea', label: 'Contenu détaillé' },
    { 
      name: 'gallery', 
      type: 'array', 
      labels: { singular: 'Image', plural: 'Images' },
      fields: [
        { 
          name: 'image', 
          type: 'upload', 
          relationTo: 'media', 
          required: true,
        },
        { name: 'alt', type: 'text', required: true },
      ],
    },
    { name: 'location', type: 'text', label: 'Lieu du projet' },
    { name: 'client', type: 'text', label: 'Client' },
    { name: 'completionDate', type: 'date', label: 'Date de fin', admin: { dateDisplay: 'date' } },
    { name: 'published', type: 'checkbox', defaultValue: true, required: true },
    { name: 'sortOrder', type: 'number', defaultValue: 0, required: true },
  ],
}
