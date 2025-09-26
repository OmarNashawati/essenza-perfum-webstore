<script setup>
import Navbar from './components/Navbar.vue'
import FooterComponent from './components/Footer.vue'

import { RouterView } from 'vue-router'
import { useCartStore } from './stores/cartStore'
import Notification from './components/Notification.vue'

const cart = useCartStore()

cart.$subscribe((mutation, state) => {
  cart.recalculateCartTotal()
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
