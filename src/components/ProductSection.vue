<script setup>
import ProductCard from './ProductCard.vue'
const props = defineProps(['title', 'productsList'])
</script>

<template>
  <div class="product-section-wrapper">
    <h2 class="section-title">{{ title }}</h2>
    <div class="products-grid">
      <ProductCard
        v-for="product in productsList"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-section-wrapper {
  padding: var(--space-8);

  .products-grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
  }
}
</style>
