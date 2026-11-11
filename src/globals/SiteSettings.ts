import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Paramètres du site',
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: 'companyName', type: 'text', required: true },
    { name: 'tagline', type: 'text' },
    { name: 'whatsapp', type: 'text', required: true },
    { name: 'phone', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'address', type: 'textarea', required: true },
    { name: 'mapEmbedUrl', type: 'text' },
    { 
      name: 'logo', 
      type: 'upload', 
      relationTo: 'media',
      admin: {
        description: 'Logo de l\'entreprise',
      },
    },
  ],
}
