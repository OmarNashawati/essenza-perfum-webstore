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
    <Categories />

    <Brands />

    <ProductSection
      v-for="section in homeContent.sections"
      layout="row"
      :key="section.id"
      :id="section.id"
      :title="section.title"
      :products-list="getPerfumes({ tags: [section.products] })"
    />
  </div>
</template>

<style scoped></style>
