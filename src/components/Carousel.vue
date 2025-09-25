<script setup>
import ProductCard from './ProductCard.vue'
import { useTemplateRef } from 'vue'

const props = defineProps(['title', 'products'])
const carousel = useTemplateRef('carousel')

function scroll(direction) {
  const scrollValue = 400

  if (direction === 'left') {
    carousel.value.scrollLeft -= scrollValue
  }

  if (direction === 'right') {
    carousel.value.scrollLeft += scrollValue
  }
}
</script>

<template>
  <div class="carousel" v-if="products.length">
    <h2 class="title">{{ title }}</h2>
    <div class="items-countainer" ref="carousel">
      <div class="product" v-for="product in products" :key="product.sku">
        <ProductCard :product="product" />
      </div>
    </div>

    <div class="scroll-btn scroll-start" @click="scroll('left')">
      <i class="pi pi-arrow-left"></i>
    </div>

    <div class="scroll-btn scroll-end" @click="scroll('right')">
      <i class="pi pi-arrow-right"></i>
    </div>
  </div>
</template>

<style lang="scss">
.carousel {
  position: relative;
  margin-bottom: var(--space-8);

  .title {
    font-size: 2rem;
    padding: 0 var(--space-4);
    margin-bottom: var(--space-4);
  }

  .items-countainer {
    overflow-x: auto;
    width: 100%;
    display: flex;
    scroll-behavior: smooth;
    gap: var(--space-4);
    padding: var(--space-4) 0;

    .product {
      flex: 1 0 200px;
      max-width: 200px;
    }
  }

  .scroll-btn {
    position: absolute;
    top: 40%;
    background: rgba(0, 0, 0, 0.4);
    width: 50px;
    height: 50px;
    color: var(--on-accent) !important;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    display: none;
    cursor: pointer;
    z-index: 100;
    border-radius: 50%;

    &.scroll-start {
      left: 0;
    }
    &.scroll-end {
      right: 0;
    }
  }

  &:hover .scroll-btn {
    display: flex;
  }
}
</style>
