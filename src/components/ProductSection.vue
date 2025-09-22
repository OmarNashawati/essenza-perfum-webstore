<script setup>
import { useProductsStore } from '@/stores/productstore'
import ProductCard from './ProductCard.vue'
const props = defineProps(['id', 'title', 'productsList', 'layout'])
const productStore = useProductsStore()

function scroll(direction) {
  const container = document.querySelector(`#${props.id}-grid`)

  if (direction === 'left') {
    container.scrollLeft -= 300
  }

  if (direction === 'right') {
    container.scrollLeft += 300
  }
}
</script>

<template>
  <div class="product-section-wrapper">
    <div class="header">
      <h2 class="section-title">{{ title }}</h2>
      <div v-if="layout === 'grid'">
        Sort by
        <select v-model="productStore.filter.sort" name="sort-options" id="">
          <option value="" disabled>Select an option</option>
          <option value="newest">Newest to Latest</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="AtoZ">A-Z</option>
          <option value="ZtoA">Z-A</option>
        </select>
      </div>
    </div>

    <div class="carousel">
      <div
        v-if="layout === 'row'"
        class="scroll-btn scroll-start"
        @click="scroll('left')"
      >
        <i class="pi pi-arrow-left"></i>
      </div>

      <div :id="`${id}-grid`" class="products-grid" :class="layout">
        <ProductCard
          v-for="product in productsList"
          :key="product.sku"
          :product="product"
        />
      </div>

      <div
        v-if="layout === 'row'"
        class="scroll-btn scroll-end"
        @click="scroll('right')"
      >
        <i class="pi pi-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-section-wrapper {
  padding: var(--space-4);
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .carousel {
    position: relative;

    .products-grid {
      display: flex;
      gap: var(--space-4);
      scroll-behavior: smooth;

      &.grid {
        flex-wrap: wrap;
      }

      &.row {
        overflow-x: auto;
        flex-wrap: nowrap;
      }
    }

    .scroll-btn {
      position: absolute;
      top: 40%;
      background: var(--gold-900);
      width: 40px;
      height: 100px;
      color: black !important;
      font-size: 1rem;
      align-items: center;
      justify-content: center;
      display: none;
      cursor: pointer;
      z-index: 100;

      &.scroll-start {
        left: 0;
        border-radius: 0 0.5rem 0.5rem 0;

        // &:hover {
        //   justify-content: start;
        // }
      }
      &.scroll-end {
        right: 0;
        border-radius: 0.5rem 0 0 0.5rem;
        // &:hover {
        //   justify-content: end;
        // }
      }
    }

    &:hover .scroll-btn {
      display: flex;
    }
  }
}
</style>
