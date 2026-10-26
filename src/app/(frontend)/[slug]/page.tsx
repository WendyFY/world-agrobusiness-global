import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ContentRenderer } from '@/components/ContentRenderer'
import { getPageBySlug, getSiteSettings } from '@/lib/data'

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(slug)
  return page ? { title: `${page.title} — World Agrobusiness Global`, description: page.metaDescription ?? undefined } : {}
}

export default async function CMSPage({ params }: PageProps) {
  const { slug } = await params
  const [page, settings] = await Promise.all([getPageBySlug(slug), getSiteSettings()])
  if (!page) notFound()
  return <ContentRenderer blocks={page.blocks} settings={settings} />
}
