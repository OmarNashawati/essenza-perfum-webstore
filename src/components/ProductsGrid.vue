<script setup>
import ProductCard from './ProductCard.vue'
const props = defineProps(['productsList'])
</script>

<template>
  <div class="product-section-wrapper">
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
  flex: 1;
  padding: var(--space-4) 0;

  .products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-4);
    padding: var(--space-4) 0;

    @media (max-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
