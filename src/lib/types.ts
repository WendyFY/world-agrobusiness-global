import type { Page, Product as PayloadProduct, SiteSetting } from '../payload-types'

export type Product = PayloadProduct
export type SitePage = Page
export type SiteSettings = SiteSetting
export type ContentBlock = Page['blocks'][number]
