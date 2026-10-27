import type { Page, Product as PayloadProduct, ProductCategory as PayloadProductCategory, Service as PayloadService, SiteSetting } from '../payload-types'

export type Product = PayloadProduct
export type ProductCategory = PayloadProductCategory
export type Service = PayloadService
export type SitePage = Page
export type SiteSettings = SiteSetting
export type ContentBlock = Page['blocks'][number]
