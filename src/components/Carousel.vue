<script setup>
import ProductCard from './ProductCard.vue'
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue'

const props = defineProps(['title', 'products'])
const carousel = useTemplateRef('carouselRef')
const scrollable = ref(null)

function scroll(direction) {
  const scrollValue = 400

  if (direction === 'left') {
    carousel.value.scrollLeft -= scrollValue
  }

  if (direction === 'right') {
    carousel.value.scrollLeft += scrollValue
  }
}

function checkOverflow() {
  if (!carousel.value) return
  scrollable.value = carousel.value.scrollWidth > carousel.value.clientWidth
}

onMounted(() => {
  checkOverflow()
  window.addEventListener('resize', checkOverflow)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkOverflow)
})
</script>

<template>
  <div v-if="products.length" class="carousel">
    <h2 class="title">{{ title }}</h2>

    <div class="items-countainer" ref="carouselRef">
      <div class="product" v-for="product in products" :key="product.sku">
        <ProductCard :product="product" />
      </div>
    </div>

    <div
      v-if="scrollable"
      class="scroll-btn scroll-start"
      @click="scroll('left')"
    >
      <i class="pi pi-arrow-left"></i>
    </div>

    <div
      v-if="scrollable"
      class="scroll-btn scroll-end"
      @click="scroll('right')"
    >
      <i class="pi pi-arrow-right"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  position: relative;
  margin-bottom: var(--space-8);

  .title {
    font-size: 2rem;
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
