'use client'

import Link from 'next/link'
import type { SitePage, SiteSettings } from '@/lib/types'
import { useState } from 'react'

type HeaderProps = { pages: SitePage[]; settings: SiteSettings }

const routeFor = (slug: string): string => slug === 'accueil' ? '/' : `/${slug}`

export function Header({ pages, settings }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className={`site-header${menuOpen ? ' open' : ''}`}>
      <Link className="brand" href="/" aria-label="Accueil World Agrobusiness Global">
        {settings.logoBase64 ? <img src={settings.logoBase64} alt={settings.logoAlt ?? settings.companyName} /> : null}
        <span>WORLD <small>AGROBUSINESS GLOBAL SARL</small></span>
      </Link>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((isOpen) => !isOpen)}>{menuOpen ? '×' : '☰'}</button>
      <nav className={menuOpen ? 'open' : ''} aria-label="Navigation principale" onClick={() => setMenuOpen(false)}>
        {pages.map((page) => <Link key={page.id} href={routeFor(page.slug)}>{page.title}</Link>)}
        <Link className="nav-cta" href={`https://wa.me/${settings.whatsapp.replace(/\D/g, '')}`}>WhatsApp</Link>
      </nav>
    </header>
  )
}
