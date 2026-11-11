import type { CollectionConfig } from 'payload'

export const Blog: CollectionConfig = {
  slug: 'blog',
  labels: { singular: 'Article de blog', plural: 'Articles de blog' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'published', 'publishedAt', 'updatedAt'],
    group: 'Contenu du site',
  },
  access: {
    create: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
    read: ({ req: { user } }) => user ? true : { published: { equals: true } },
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { 
      name: 'category', 
      type: 'relationship', 
      relationTo: 'blog-categories',
      required: true,
      admin: {
        description: 'Catégorie de l\'article',
      },
    },
    { name: 'excerpt', type: 'textarea', admin: { description: 'Résumé court de l\'article (affiché dans la liste)' } },
    { name: 'content', type: 'textarea', required: true, admin: { description: 'Contenu complet de l\'article' } },
    { 
      name: 'featuredImage', 
      type: 'upload', 
      relationTo: 'media',
      admin: {
        description: 'Image de mise en avant de l\'article',
      },
    },
    { name: 'author', type: 'text', admin: { description: 'Nom de l\'auteur' } },
    { name: 'published', type: 'checkbox', defaultValue: false, required: true },
    { name: 'publishedAt', type: 'date', admin: { dateDisplay: 'dateTime' } },
    { name: 'metaDescription', type: 'text', admin: { description: 'Description pour le SEO' } },
  ],
}
