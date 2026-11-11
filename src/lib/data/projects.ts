import payload from 'payload'
import type { Project, ProjectCategory } from '@/payload-types'

export async function getProjects(): Promise<Project[]> {
  const result = await payload.find({
    collection: 'projects',
    where: { published: { equals: true } },
    sort: 'sortOrder',
    depth: 2,
  })
  return result.docs
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const result = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug }, published: { equals: true } },
    depth: 2,
  })
  return result.docs[0] ?? null
}

export async function getProjectCategories(): Promise<ProjectCategory[]> {
  const result = await payload.find({
    collection: 'project-categories',
    sort: 'sortOrder',
  })
  return result.docs
}

export async function getProjectsByCategory(categorySlug: string): Promise<Project[]> {
  const result = await payload.find({
    collection: 'projects',
    where: {
      published: { equals: true },
      category: { equals: categorySlug },
    },
    sort: 'sortOrder',
    depth: 2,
  })
  return result.docs
}
