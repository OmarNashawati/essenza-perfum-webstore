<script setup>
import { useProductsStore } from '@/stores/productstore'
import { getCategories } from '@/services/categoriesService'
import { getBrands } from '@/services/brandsService'

const store = useProductsStore()

const applyFilter = () => {
  store.setFilter(store.filter)
}
</script>

<template>
  <section class="filter-section">
    <div class="inner">
      <div class="filter-head">
        <h2>Filter</h2>
        <p @click="store.clearFilter">Clear</p>
      </div>
      <div class="filters">
        <div class="filter">
          <div class="search-input">
            <i class="pi pi-search icon"></i>
            <input
              @input="applyFilter"
              v-model="store.filter.search"
              class="search-input"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div class="filter">
          <h3>Filter by Price</h3>
          <label for="">
            {{ store.minPrice }}
            <input
              @input="applyFilter"
              type="range"
              :min="store.minPrice"
              :max="store.maxPrice"
              v-model="store.filter.maxPrice"
            />
            {{ store.filter.maxPrice }}
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
              v-model="store.filter.categories"
              @change="applyFilter"
            />
            {{ category.name }}
          </label>
        </div>

        <div class="filter">
          <h3>Filter by Brand</h3>
          <label v-for="brand in getBrands()" :key="brand" :for="brand">
            <input
              :id="brand"
              type="checkbox"
              :value="brand"
              v-model="store.filter.brands"
              @change="applyFilter"
            />
            {{ brand }}
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.filter-section {
  width: 250px;

  .inner {
    border-right: 1px solid var(--border-gold);
    padding: var(--space-4);
    height: fit-content;

    .filter-head {
      display: flex;
      justify-content: space-between;
      gap: var(--space-4);
      padding: var(--space-4) 0;

      h2 {
        font-weight: 600;
      }
      p {
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }

    .filters {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);

      .filter {
        display: flex;
        flex-direction: column;
      }
    }
    .search-input {
      display: flex;
      align-items: center;
      border-radius: 0.5rem;
      background: var(--bg);
      padding: var(--space-2);
    }
  }
}
</style>
