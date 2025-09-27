<script setup>
import { useRouter } from 'vue-router'
import { getBrands } from '@/services/brandsService'

const router = useRouter()
</script>

<template>
  <div class="brands-carousel">
    <div
      @click="router.push({ name: 'products', query: { brand: brand } })"
      v-for="brand in getBrands()"
      :key="brand"
      class="brand-itme"
    >
      {{ brand }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.brands-carousel {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: var(--space-2);

  .brand-itme {
    border-radius: 0.3rem;
    border: 1px solid var(--border-gold);
    white-space: nowrap;
    padding: var(--space-2);
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--accent);
      color: var(--on-accent);
      letter-spacing: 2px;
    }
  }
}
</style>
