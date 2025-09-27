import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { calculateDiscount } from '@/utiles/money'
import { useNotificationStore } from '@/stores/notification'

export const useCartStore = defineStore('cart', () => {
  const { addNotification } = useNotificationStore()
  const cart = reactive({
    items: [],
    // total: 0,
    discount_total: 0,
    subtotal: 0,
  })

  const addToCart = (item, quantity) => {
    const { name, brand, images, sku, price, discount } = item

    if (item.availability) {
      cart.items.push({
        name,
        brand,
        image: images[0],
        sku,
        discount,
        original_price: price,
        price_with_discount: calculateDiscount(price, discount),
        quantity,
      })

      addNotification(`${name} Added to Cart!`)
    } else addNotification(`This Product Not Available`, 'error')
  }

  function recalculateCartTotal() {
    cart.subtotal = cart.items.reduce(
      (acc, cartItem) =>
        acc + cartItem.original_price * Number(cartItem.quantity),
      0
    )

    cart.discount_total = cart.items.reduce(
      (acc, cartItem) =>
        acc + cartItem.price_with_discount * Number(cartItem.quantity),
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
      (cartItem) => cartItem.sku === item.sku
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
