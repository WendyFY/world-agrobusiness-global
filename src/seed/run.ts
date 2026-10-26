import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { getPayload } from 'payload'
import config from '@payload-config'
import { pageSeeds, productSeeds } from './data'

const assetDirectory = path.resolve(process.cwd(), 'assets')

async function imageAsDataURL(filename: string): Promise<string> {
  const imagePath = path.join(assetDirectory, filename)
  const imageBytes = await readFile(imagePath)
  const extension = path.extname(filename).toLowerCase()
  const mimeType = extension === '.png' ? 'image/png' : extension === '.webp' ? 'image/webp' : 'image/jpeg'
  return `data:${mimeType};base64,${imageBytes.toString('base64')}`
}

async function upsertPage(payload: Awaited<ReturnType<typeof getPayload>>, seed: (typeof pageSeeds)[number]): Promise<void> {
  const heroImages: Record<string, string> = {
    accueil: 'agriculture-hero.png',
    'a-propos': 'agriculture-hero.png',
  }
  const blocks = await Promise.all(seed.blocks.map(async (block) => {
    if (block.blockType === 'hero' && heroImages[seed.slug]) {
      return { ...block, imageBase64: await imageAsDataURL(heroImages[seed.slug]) }
    }
    if (block.blockType === 'image' && seed.slug === 'irrigation') {
      return { ...block, imageBase64: await imageAsDataURL('irrigation-drip.png') }
    }
    return block
  }))
  const data = { ...seed, blocks }
  const found = await payload.find({ collection: 'pages', where: { slug: { equals: seed.slug } }, limit: 1 })
  if (found.docs[0]) {
    await payload.update({ collection: 'pages', id: found.docs[0].id, data })
  } else {
    await payload.create({ collection: 'pages', data })
  }
}

async function upsertProduct(payload: Awaited<ReturnType<typeof getPayload>>, seed: (typeof productSeeds)[number]): Promise<void> {
  const gallery = await Promise.all(seed.images.map(async (image) => ({ imageBase64: await imageAsDataURL(image.file), alt: image.alt })))
  const data = {
    name: seed.name,
    slug: seed.slug,
    category: seed.category,
    description: seed.description,
    price: seed.price,
    priceLabel: seed.priceLabel,
    specifications: seed.specifications,
    gallery,
    featuredOnHome: seed.featuredOnHome,
    sortOrder: seed.sortOrder,
    published: true,
  }
  const found = await payload.find({ collection: 'products', where: { slug: { equals: seed.slug } }, limit: 1 })
  if (found.docs[0]) {
    await payload.update({ collection: 'products', id: found.docs[0].id, data })
  } else {
    await payload.create({ collection: 'products', data })
  }
}

async function main(): Promise<void> {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required to seed the database.')
  const payload = await getPayload({ config })
  try {
    for (const seed of productSeeds) await upsertProduct(payload, seed)
    for (const seed of pageSeeds) await upsertPage(payload, seed)
    await payload.updateGlobal({ slug: 'site-settings', data: {
      companyName: 'World Agrobusiness Global SARL',
      tagline: 'Votre partenaire en équipements agro-pastoraux, irrigation et accompagnement de projets.',
      whatsapp: '+237 655 17 09 73',
      phone: '+237 653 03 35 59',
      email: 'worldagrobusiness8@gmail.com',
      address: 'Yaoundé, Biyem-Assi Biscuiterie\nFace Vatican Express Voyage',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.879067039607!2d11.481679274988082!3d3.83612554854571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfe67c17ff73%3A0xfa5edb199d8a2ca0!2sWORLD%20AGROBUSINESS%20GLOBAL!5e0!3m2!1sfr!2scm!4v1792802707115!5m2!1sfr!2scm',
      logoBase64: await imageAsDataURL('logo.jpeg'),
      logoAlt: 'Logo World Agrobusiness Global SARL',
    } })
    console.info(`Seed terminé : ${pageSeeds.length} pages, ${productSeeds.length} produits et paramètres du site.`)
  } finally {
    await payload.destroy()
  }
}

main().then(
  () => process.exit(0),
  (error: unknown) => {
    console.error('Échec du seed :')
    console.dir(error, { depth: 6 })
    process.exit(1)
  },
)
