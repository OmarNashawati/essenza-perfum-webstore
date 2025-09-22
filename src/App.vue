<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterComponent from './components/Footer.vue'

import { useCartStore } from './stores/cartStore'
import { useProductsStore } from './stores/productstore'

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
  <Navbar />
  <main>
    <RouterView />
  </main>
  <FooterComponent />
</template>

<style lang="scss" scoped></style>
