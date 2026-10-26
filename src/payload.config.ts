import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { Products } from './collections/Products'
import { Pages } from './collections/Pages'
import { Users } from './collections/Users'
import { SiteSettings } from './globals/SiteSettings'

const secret = process.env.PAYLOAD_SECRET
if (!secret && process.env.NODE_ENV === 'production') {
  throw new Error('PAYLOAD_SECRET must be configured in production.')
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: process.cwd() },
  },
  collections: [Users, Pages, Products],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: secret ?? 'local-development-secret-replace-before-deploy',
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL ?? '' },
    push: process.env.NODE_ENV !== 'production',
    migrationDir: 'src/migrations',
  }),
  typescript: { outputFile: 'src/payload-types.ts' },
})
