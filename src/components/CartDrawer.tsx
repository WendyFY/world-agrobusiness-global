'use client'

import { useCart } from '@/contexts/CartContext'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'

export function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, clearCart, isOpen, setIsOpen, generateWhatsAppMessage } = useCart()

  const whatsappNumber = '+237655170973'
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${generateWhatsAppMessage(whatsappNumber)}`

  return (
    <>
      {/* Cart Button */}
      <button
        className="cart-button"
        onClick={() => setIsOpen(true)}
        aria-label={`Ouvrir le panier (${cart.totalItems} article${cart.totalItems > 1 ? 's' : ''})`}
      >
        <ShoppingBag size={24} />
        {cart.totalItems > 0 && (
          <span className="cart-badge">{cart.totalItems}</span>
        )}
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="cart-overlay" onClick={() => setIsOpen(false)} />
      )}

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'is-open' : ''}`}>
        <div className="cart-header">
          <h2>Mon panier</h2>
          <button
            className="cart-close"
            onClick={() => setIsOpen(false)}
            aria-label="Fermer le panier"
          >
            <X size={24} />
          </button>
        </div>

        <div className="cart-content">
          {cart.items.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag size={48} />
              <p>Votre panier est vide</p>
              <button className="button secondary" onClick={() => setIsOpen(false)}>
                Continuer mes achats
              </button>
            </div>
          ) : (
            <>
              <ul className="cart-items">
                {cart.items.map((item) => (
                  <li key={item.productId} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.imageAlt} />
                    </div>
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p className="cart-item-category">{item.category}</p>
                      <p className="cart-item-price">
                        {item.price
                          ? `${item.priceLabel || ''} ${item.price.toLocaleString('fr-FR')} FCFA`.trim()
                          : 'Prix sur demande'}
                      </p>
                      <div className="cart-item-quantity">
                        <button
                          className="quantity-button"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          aria-label="Diminuer la quantité"
                        >
                          <Minus size={16} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="quantity-button"
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          aria-label="Augmenter la quantité"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.productId)}
                      aria-label="Supprimer l'article"
                    >
                      <X size={18} />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="cart-footer">
                {cart.totalAmount > 0 && (
                  <div className="cart-total">
                    <span>Total estimé</span>
                    <strong>{cart.totalAmount.toLocaleString('fr-FR')} FCFA</strong>
                  </div>
                )}
                <a
                  className="button primary cart-whatsapp"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    setIsOpen(false)
                    clearCart()
                  }}
                >
                  Commander via WhatsApp
                </a>
                <button
                  className="button secondary cart-clear"
                  onClick={() => {
                    if (confirm('Voulez-vous vraiment vider votre panier ?')) {
                      clearCart()
                    }
                  }}
                >
                  Vider le panier
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
