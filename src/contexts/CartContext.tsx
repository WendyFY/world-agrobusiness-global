'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { CartContextType, CartItem, CartState } from '@/lib/types/cart'

const CartContext = createContext<CartContextType | null>(null)

const CART_STORAGE_KEY = 'world-agrobusiness-cart'

function calculateCartTotals(items: CartItem[]): Pick<CartState, 'totalItems' | 'totalAmount'> {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = items.reduce((sum, item) => {
    if (item.price === null) return sum
    return sum + item.price * item.quantity
  }, 0)
  return { totalItems, totalAmount }
}

function loadCartFromStorage(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function saveCartToStorage(items: CartItem[]): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  } catch {
    // Ignore storage errors
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCartFromStorage)
  const [isOpen, setIsOpen] = useState(false)

  const cart: CartState = {
    items,
    ...calculateCartTotals(items),
  }

  useEffect(() => {
    saveCartToStorage(items)
  }, [items])

  const addToCart = useCallback((item: Omit<CartItem, 'quantity'>) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((i) => i.productId === item.productId)
      if (existingIndex >= 0) {
        const updated = [...prevItems]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        }
        return updated
      }
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.productId !== productId))
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    )
  }, [removeFromCart])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const generateWhatsAppMessage = useCallback((whatsappNumber: string): string => {
    if (items.length === 0) return ''

    const lines: string[] = [
      'Bonjour, je souhaite passer commande pour les équipements suivants :',
      '',
    ]

    items.forEach((item, index) => {
      const priceText = item.price
        ? `${item.priceLabel || ''} ${item.price.toLocaleString('fr-FR')} FCFA`.trim()
        : 'Prix sur demande'
      lines.push(
        `${index + 1}. ${item.name} (${item.category})`
      )
      lines.push(`   Quantité : ${item.quantity}`)
      lines.push(`   Prix : ${priceText}`)
      lines.push('')
    })

    const totalAmount = cart.totalAmount
    if (totalAmount > 0) {
      lines.push(`Total estimé : ${totalAmount.toLocaleString('fr-FR')} FCFA`)
    }

    lines.push('')
    lines.push('Merci de me confirmer la disponibilité et les modalités de livraison.')

    return encodeURIComponent(lines.join('\n'))
  }, [items, cart.totalAmount])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isOpen,
        setIsOpen,
        generateWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextType {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
