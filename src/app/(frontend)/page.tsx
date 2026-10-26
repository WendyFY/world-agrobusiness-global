import { notFound } from 'next/navigation'
import { ContentRenderer } from '@/components/ContentRenderer'
import { getPageBySlug, getSiteSettings } from '@/lib/data'

export default async function HomePage() {
  const [page, settings] = await Promise.all([getPageBySlug('accueil'), getSiteSettings()])
  if (!page) notFound()
  return <ContentRenderer blocks={page.blocks} settings={settings} />
}
