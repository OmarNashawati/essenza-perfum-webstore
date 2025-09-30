import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { calculateDiscount } from '@/utiles/money'
import { getProduct } from '@/services/productService'
import { useNotificationStore } from '@/stores/notification'

export const useCartStore = defineStore('cart', () => {
  const { addNotification } = useNotificationStore()
  const cart = reactive({
    items: [],
    // total: 0,
    discount_total: 0,
    subtotal: 0,
  })

  const addToCart = (id, sku, quantity) => {
    const product = getProduct(id)
    const variant = product.variants.find((v) => v.sku === sku)

    if (variant.available) {
      const inCard = cart.items.find((p) => p.id === id)?.variant.sku

      if (inCard) {
        cart.items.find((p) => p.id === id).quantity =
          Number(cart.items.find((p) => p.id === id).quantity) +
          Number(quantity)
      } else {
        cart.items.push({
          ...product,
          variant,
          quantity,
        })
      }

      addNotification(`${product.title} Added to Cart!`)
    } else addNotification(`This Product Not Available`, 'error')
  }

  function recalculateCartTotal() {
    cart.subtotal = cart.items.reduce(
      (acc, cartItem) =>
        acc + cartItem.variant.price * Number(cartItem.quantity),
      0
    )

    cart.discount_total = cart.items.reduce(
      (acc, cartItem) =>
        acc +
        calculateDiscount(cartItem.variant.price, cartItem.variant.discount) *
          Number(cartItem.quantity),
      0
    )
  }

  const deliveryCoast = () => {
    if (cart.subtotal >= 250) {
      return 'Free'
    }
    return '35'
  }

  const removeFromCart = (item) => {
    const itemToRemove = cart.items.findIndex(
      (cartItem) => cartItem.variant.sku === item.variant.sku
    )

    if (itemToRemove >= 0) {
      cart.items.splice(itemToRemove, 1)
    }
  }
  return {
    cart,
    addToCart,
    removeFromCart,
    recalculateCartTotal,
    deliveryCoast,
  }
})
