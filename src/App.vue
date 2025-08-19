<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterComponent from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <FooterComponent />
</template>

<style lang="scss" scoped></style>
