import payload from 'payload'
import type { Testimonial } from '@/payload-types'

export async function getTestimonials(): Promise<Testimonial[]> {
  const result = await payload.find({
    collection: 'testimonials',
    where: { published: { equals: true } },
    sort: 'sortOrder',
    depth: 1,
  })
  return result.docs
}

export async function getFeaturedTestimonials(limit: number = 3): Promise<Testimonial[]> {
  const result = await payload.find({
    collection: 'testimonials',
    where: { published: { equals: true } },
    sort: 'sortOrder',
    limit,
    depth: 1,
  })
  return result.docs
}
