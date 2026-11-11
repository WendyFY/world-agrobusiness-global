import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CartProvider } from '@/contexts/CartContext'
import { CartDrawer } from '@/components/CartDrawer'
import { getPages, getSiteSettings } from '@/lib/data'
import './site.css'
import './cart.css'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'World Agrobusiness Global SARL',
  description: 'Équipements agro-pastoraux, irrigation et accompagnement de projets à Yaoundé.',
}

export default async function FrontendLayout({ children }: { children: ReactNode }) {
  const [pages, settings] = await Promise.all([getPages(), getSiteSettings()])
  const navigation = pages.filter((page) => page.showInNavigation && page.slug !== 'accueil')
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Header pages={navigation} settings={settings} />
          <main>{children}</main>
          <Footer pages={navigation} settings={settings} />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
