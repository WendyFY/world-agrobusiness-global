import payload from 'payload'
import type { Blog as BlogPost, BlogCategory } from '@/payload-types'

export async function getBlogPosts(): Promise<BlogPost[]> {
  const result = await payload.find({
    collection: 'blog',
    where: { published: { equals: true } },
    sort: '-publishedAt',
    depth: 2,
  })
  return result.docs
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const result = await payload.find({
    collection: 'blog',
    where: { slug: { equals: slug }, published: { equals: true } },
    depth: 2,
  })
  return result.docs[0] ?? null
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  const result = await payload.find({
    collection: 'blog-categories',
    sort: 'sortOrder',
  })
  return result.docs
}

export async function getBlogPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  const result = await payload.find({
    collection: 'blog',
    where: {
      published: { equals: true },
      category: { equals: categorySlug },
    },
    sort: '-publishedAt',
    depth: 2,
  })
  return result.docs
}
