<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterComponent from './components/Footer.vue'

import { useCartStore } from './stores/cartStore'
const cart = useCartStore()
cart.$subscribe((mutation, state) => {
  cart.recalculateCartTotal()
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
