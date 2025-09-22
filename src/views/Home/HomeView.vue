<script setup>
import { getPerfumes } from '@/services/productService'
import { homeContent } from '@/assets/data/UI/HomeContent'

import Hero from './Hero.vue'
import Categories from './Categories.vue'
import ProductSection from '@/components/ProductSection.vue'
</script>

<template>
  <Hero />

  <Categories />

  <ProductSection
    v-for="section in homeContent.sections"
    layout="row"
    :key="section.id"
    :id="section.id"
    :title="section.title"
    :products-list="getPerfumes({ tags: [section.products] })"
  />
</template>

<style scoped></style>
