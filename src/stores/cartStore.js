import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { calculateDiscount } from '@/utiles/money'

export const useCartStore = defineStore('cart', () => {
  const cart = reactive({ items: [], total: 0, discount_total: 0 })

  const addToCart = (item, quantity) => {
    const { name, sku, price, discount } = item

    cart.items.push({
      name,
      sku,
      discount,
      original_price: price,
      price_with_discount: calculateDiscount(price, discount),
      quantity,
    })
    calculateCartTotal()
  }

  function calculateCartTotal() {
    let total = 0
    let discouted = 0
    cart.items.forEach((cartItem) => {
      const { original_price, price_with_discount, quantity } = cartItem
      total += original_price * Number(quantity)
      discouted += price_with_discount * Number(quantity)
    })
    cart.discount_total = discouted
    cart.total = total
  }

  const removeFromCart = (item) => {
    const itemToRemove = cart.items.findIndex(
      (cartItem) => cartItem.sku === item.sku
    )

    if (itemToRemove >= 0) {
      cart.items.splice(itemToRemove, 1)
      calculateCartTotal()
    }

    calculateCartTotal()
  }
  return { cart, addToCart, removeFromCart }
})
