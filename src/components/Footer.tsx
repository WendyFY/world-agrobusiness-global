import Link from 'next/link'
import type { SitePage, SiteSettings } from '@/lib/types'

type FooterProps = { pages: SitePage[]; settings: SiteSettings }

export function Footer({ pages, settings }: FooterProps) {
  const whatsapp = `https://wa.me/${settings.whatsapp.replace(/\D/g, '')}`
  return (
    <footer>
      <div className="footer-main">
        <div>
          <div className="footer-brand">
            {settings.logoBase64 ? <img src={settings.logoBase64} alt="" /> : null}
            <span>WORLD AGROBUSINESS<br />GLOBAL SARL</span>
          </div>
          <p className="footer-intro">{settings.tagline}</p>
        </div>
        <div>
          <p className="footer-title">Navigation</p>
          <div className="footer-links">{pages.map((page) => <Link key={page.id} href={`/${page.slug}`}>{page.title}</Link>)}<Link href="/produits">Produits</Link></div>
        </div>
        <div className="footer-contact">
          <p className="footer-title">Nous joindre</p>
          <a href={whatsapp}>WhatsApp : {settings.whatsapp}</a>
          <a href={`tel:${settings.phone.replace(/\s/g, '')}`}>Appel : {settings.phone}</a>
          <a href={`mailto:${settings.email}`}>{settings.email}</a>
          <address>{settings.address}</address>
        </div>
      </div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} {settings.companyName}</p><span className="footer-tag">Cultiver l’avenir</span></div>
    </footer>
  )
}
