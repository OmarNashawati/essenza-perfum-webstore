<script setup>
import { getPerfumes } from '@/services/productService'
import ProductSection from '@/components/ProductSection.vue'
</script>

<template>
  <ProductSection
    title="Products"
    :products-list="getPerfumes()"
    layout="grid"
  />
</template>

<style scoped></style>
