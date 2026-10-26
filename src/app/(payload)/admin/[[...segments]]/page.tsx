import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { notFound } from 'next/navigation'
import { importMap } from '../importMap.js'

type AdminPageProps = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<Record<string, string | string[]>>
}

export const generateMetadata = ({ params, searchParams }: AdminPageProps) =>
  generatePageMetadata({ config, params, searchParams })

export default function AdminPage({ params, searchParams }: AdminPageProps) {
  if (process.env.PAYLOAD_SECRET === undefined) notFound()
  return RootPage({ config, importMap, params, searchParams })
}
