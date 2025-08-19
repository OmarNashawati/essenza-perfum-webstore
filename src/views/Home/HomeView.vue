<script setup>
import { getPerfumes } from '@/services/productService'

import Hero from './Hero.vue'
import Categories from './Categories.vue'
import ProductSection from '@/components/ProductSection.vue'

import { homeContent } from '@/assets/data/HomeContent'
</script>

<template>
  <Hero />

  <Categories />

  <ProductSection
    v-for="section in homeContent.sections"
    :key="section.id"
    :title="section.title"
    :products-list="getPerfumes({ tags: [section.products] })"
  />
</template>

<style scoped></style>
