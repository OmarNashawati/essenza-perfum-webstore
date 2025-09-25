<script setup>
import Filter from '@/components/Filter.vue'
import ProductsGrid from '@/components/ProductsGrid.vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/productstore'
import { onMounted, watch } from 'vue'

const route = useRoute()
const store = useProductsStore()

const applyFilter = () => {
  if (route.query.category) {
    store.setFilter({ categories: [route.query.category] })
  }
}

onMounted(() => {
  applyFilter()
})

watch(route, () => applyFilter())
</script>

<template>
  <div class="products-view-warpper container">
    <div class="filter-warp">
      <Filter />
    </div>

    <div class="mian-wrap">
      <div class="header">
        <h2 class="section-title">Products</h2>
        <div>
          Sort by
          <select v-model="store.filter.sort" name="sort-options" id="">
            <option value="" disabled>Select an option</option>
            <option value="newest">Newest to Latest</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="AtoZ">A-Z</option>
            <option value="ZtoA">Z-A</option>
          </select>
        </div>
      </div>

      <ProductsGrid
        title="Products"
        :products-list="store.filteredProducts"
        layout="grid"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products-view-warpper {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-8);
}

.filter-warp {
  @media (max-width: 765px) {
    display: none;
  }
}

.main-wrap {
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
