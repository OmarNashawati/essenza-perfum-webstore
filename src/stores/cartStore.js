import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { calculateDiscount } from '@/utiles/money'

export const useCartStore = defineStore('cart', () => {
  const cart = reactive({
    items: [],
    total: 0,
    discount_total: 0,
  })

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
  }

  function recalculateCartTotal() {
    cart.total = cart.items.reduce(
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

  const removeFromCart = (item) => {
    const itemToRemove = cart.items.findIndex(
      (cartItem) => cartItem.sku === item.sku
    )

    if (itemToRemove >= 0) {
      cart.items.splice(itemToRemove, 1)
    }
  }
  return { cart, addToCart, removeFromCart, recalculateCartTotal }
})
