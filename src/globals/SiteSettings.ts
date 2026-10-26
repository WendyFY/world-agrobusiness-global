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
    { name: 'logoBase64', type: 'textarea', maxLength: 4_200_000, admin: { components: { Field: '@/components/Base64ImageField#Base64ImageField' } } },
    { name: 'logoAlt', type: 'text' },
  ],
}
