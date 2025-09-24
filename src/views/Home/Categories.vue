<script setup>
import { getCategories } from '@/services/categoriesService'
</script>

<template>
  <div class="categories-wrapper">
    <h2 class="section-title">Categories</h2>

    <div class="categories-grid">
      <div
        v-for="category in getCategories()"
        :key="category.id"
        class="category-item"
      >
        <div class="category-img">
          <img src="@/assets/empty-image.png" alt="" />
        </div>
        <div class="category-name">{{ category.name }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.categories-wrapper {
  padding: var(--space-8) 0;

  .categories-grid {
    display: flex;
    gap: var(--space-4);
    align-items: center;
    overflow-x: auto;

    .category-item {
      flex: 0 0 150px;
      width: 150px;
      cursor: pointer;

      .category-img {
        border-radius: 0.5rem;
        overflow: hidden;
        max-height: 150px;

        &:hover img {
          scale: 1.1;
        }
      }

      .category-name {
        margin-top: var(--space-2);
        text-align: center;
        font-weight: 700;
      }
    }
  }
}
</style>
