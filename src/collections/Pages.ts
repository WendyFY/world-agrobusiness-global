import type { CollectionConfig } from 'payload'
import { ContentBlocks } from '../blocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Page', plural: 'Pages' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: 'Contenu du site',
  },
  access: {
    create: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'metaDescription', type: 'textarea' },
    { name: 'showInNavigation', type: 'checkbox', defaultValue: true },
    { name: 'sortOrder', type: 'number', defaultValue: 0 },
    { name: 'blocks', type: 'blocks', required: true, blocks: ContentBlocks },
  ],
}
