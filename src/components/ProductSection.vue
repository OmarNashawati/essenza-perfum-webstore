<script setup>
import ProductCard from './ProductCard.vue'
const props = defineProps(['id', 'title', 'productsList', 'layout'])

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
    <h2 class="section-title">{{ title }}</h2>

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
  padding: var(--space-8);

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
