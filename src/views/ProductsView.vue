<script setup>
import ProductSection from '@/components/ProductSection.vue'

import { getCategories } from '@/services/categoriesService'
import { useProductsStore } from '@/stores/productstore'

const productStore = useProductsStore()
const minPrice = productStore.minPrice
const maxPrice = productStore.maxPrice
const brands = productStore.brands()
</script>

<template>
  <div class="products-view-warpper">
    <section class="filter-section">
      <h2>Filter</h2>
      <div class="filters">
        <div class="filter">
          <div class="search-input">
            <i class="pi pi-search icon"></i>
            <input class="search-input" type="text" placeholder="Search" />
          </div>
        </div>
        <div class="filter">
          <h3>Filter by Price</h3>
          <label for="">
            {{ minPrice }}
            <input
              type="range"
              :min="minPrice"
              :max="maxPrice"
              v-model="productStore.filter.maxPrice"
            />
            {{ productStore.filter.maxPrice }}
          </label>
        </div>
        <div class="filter">
          <h3>Filter by category</h3>
          <label
            v-for="category in getCategories()"
            :key="category.id"
            :for="category.id"
          >
            <input
              :id="category.id"
              type="checkbox"
              :value="category.name"
              v-model="productStore.filter.categories"
            />
            {{ category.name }}
          </label>
        </div>
        <div class="filter">
          <h3>Filter by Brand</h3>
          <label v-for="brand in brands" :key="brand" :for="brand">
            <input
              :id="brand"
              type="checkbox"
              :value="brand"
              v-model="productStore.filter.brands"
            />
            {{ brand }}
          </label>
        </div>
      </div>
    </section>

    <ProductSection
      title="Products"
      :products-list="productStore.filteredProducts"
      layout="grid"
    />
  </div>
</template>

<style lang="scss" scoped>
.products-view-warpper {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-8);
}

.filter-section {
  background: var(--surface);
  min-width: 250px;
  border-radius: 0.5rem;
  padding: var(--space-4);

  .filters {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);

    .filter {
      display: flex;
      flex-direction: column;
    }
  }
}

.search-input {
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background: var(--bg);
  padding: var(--space-2);
}
</style>
