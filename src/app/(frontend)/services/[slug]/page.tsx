import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug, getSiteSettings } from '@/lib/data'

type ServicePageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  return service ? { title: `${service.name} — World Agrobusiness Global`, description: service.description } : {}
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const [service, settings] = await Promise.all([getServiceBySlug(slug), getSiteSettings()])
  if (!service) notFound()
  const number = service.whatsapp?.replace(/\D/g, '') || settings.whatsapp.replace(/\D/g, '')
  const message = encodeURIComponent(`Bonjour, je souhaite m'enquérir des informations concernant le service « ${service.name} ».`)
  return <>
    <section className="page-hero"><p className="eyebrow">Nos services</p><h1>{service.name}</h1><p className="lead">{service.description}</p><a className="button primary" href={`https://wa.me/${number}?text=${message}`}>Nous contacter sur WhatsApp</a></section>
    {service.gallery?.length ? <section className="service-detail-gallery" aria-label={`Images du service ${service.name}`}>
      {service.gallery.map((image, index) => <figure key={`${image.id ?? image.alt}-${index}`}><img src={image.imageBase64} alt={image.alt} /></figure>)}
    </section> : null}
  </>
}
