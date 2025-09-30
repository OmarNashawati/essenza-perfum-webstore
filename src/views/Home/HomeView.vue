<script setup>
import { homeContent } from '@/assets/data/UI/HomeContent'
import { getProducts } from '@/services/productService'

import Hero from './Hero.vue'
import Categories from './Categories.vue'
import Brands from '@/components/Brands.vue'
import Carousel from '@/components/Carousel.vue'
</script>

<template>
  <Hero />

  <div class="container">
    <div class="main">
      <Categories />

      <Brands />

      <section class="banners-section">
        <div class="banner">
          <img src="../../assets/banners/banner_1.png" alt="" />
        </div>
        <div class="banner">
          <img src="../../assets/banners/banner_2.png" alt="" />
        </div>
        <div class="banner">
          <img src="../../assets/banners/banner_4.png" alt="" />
        </div>
      </section>

      <Carousel
        v-for="c in homeContent.carousels"
        :title="c.title"
        :products="getProducts()"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  padding: var(--space-8);
}

.banners-section {
  margin: var(--space-8) 0;
}
</style>
