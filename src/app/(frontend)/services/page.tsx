import Link from 'next/link'
import { getServices, getSiteSettings } from '@/lib/data'

export const metadata = { title: 'Nos services — World Agrobusiness Global' }

export default async function ServicesPage() {
  const [services, settings] = await Promise.all([getServices(), getSiteSettings()])
  const number = settings.whatsapp.replace(/\D/g, '')
  return <>
    <section className="page-hero"><p className="eyebrow">Nos services</p><h1>Des solutions pour vos projets agricoles</h1><p className="lead">Découvrez notre accompagnement et contactez-nous pour en savoir plus sur le service qui vous intéresse.</p></section>
    <section className="products-wrap"><div className="service-grid">
      {services.map((service) => {
        const image = service.gallery?.[0]
        const message = encodeURIComponent(`Bonjour, je souhaite m'enquérir des informations concernant le service « ${service.name} ».`)
        const serviceNumber = service.whatsapp?.replace(/\D/g, '') || number
        return <article className="service-card" key={service.id}>
          <Link className="service-card-image" href={`/services/${service.slug}`}>{image ? <img src={image.imageBase64} alt={image.alt} /> : <div />}</Link>
          <div className="service-card-body"><h2><Link href={`/services/${service.slug}`}>{service.name}</Link></h2><p>{service.description.length > 170 ? `${service.description.slice(0, 167).trimEnd()}…` : service.description}</p><div><Link className="service-detail-link" href={`/services/${service.slug}`}>En savoir plus →</Link><a className="product-link" href={`https://wa.me/${serviceNumber}?text=${message}`}>Contacter sur WhatsApp</a></div></div>
        </article>
      })}
    </div>{services.length === 0 ? <p>Nos services seront bientôt présentés ici.</p> : null}</section>
  </>
}
