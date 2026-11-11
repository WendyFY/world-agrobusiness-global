export interface CartItem {
  productId: string
  name: string
  category: string
  price: number | null
  priceLabel: string | null
  quantity: number
  image: string
  imageAlt: string
}

export interface CartState {
  items: CartItem[]
  totalItems: number
  totalAmount: number
}

export interface CartContextType {
  cart: CartState
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  generateWhatsAppMessage: (whatsappNumber: string) => string
}
