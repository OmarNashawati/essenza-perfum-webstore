<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterComponent from './components/Footer.vue'

import { useCartStore } from './stores/cartStore'
import { useProductsStore } from './stores/productstore'
import Notification from './components/Notification.vue'

const cart = useCartStore()
const products = useProductsStore()

cart.$subscribe((mutation, state) => {
  cart.recalculateCartTotal()
})

products.$subscribe((mutation, state) => {
  console.log(products.filter)
})
</script>

<template>
  <main>
    <Navbar />
    <RouterView />
    <FooterComponent />
    <Notification />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
