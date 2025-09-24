<script setup>
import { getPerfumes } from '@/services/productService'
import { homeContent } from '@/assets/data/UI/HomeContent'

import Hero from './Hero.vue'
import Categories from './Categories.vue'
import ProductSection from '@/components/ProductSection.vue'
import Brands from '@/components/Brands.vue'
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

      <ProductSection
        v-for="section in homeContent.sections"
        layout="row"
        :key="section.id"
        :id="section.id"
        :title="section.title"
        :products-list="getPerfumes({ tags: [section.products] })"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
}

.banners-section {
  margin: var(--space-8) 0;
  .banner {
  }
}
</style>
