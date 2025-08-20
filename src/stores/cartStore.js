import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { calculateDiscount } from '@/utiles/money'

export const useCartStore = defineStore('cart', () => {
  const cart = reactive({ items: [] })

  const addToCart = (item, quantity) => {
    const { sku, price, discount } = item

    cart.items.push({
      sku,
      discount,
      original_price: price,
      price_with_discount: calculateDiscount(price, discount),
      quantity,
    })

    console.log(cart.items)
  }

  const removeFromCart = (item) => {
    const itemToRemove = cart.findIndex((cartItem) => cartItem.sku === item.sku)
    if (itemToRemove > 0) {
      cart.splice(itemToRemove, 1)
    }
  }
  return { cart, addToCart, removeFromCart }
})
