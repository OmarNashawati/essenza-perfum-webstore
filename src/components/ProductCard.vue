<script setup>
import { useRouter } from 'vue-router'
import { calculateDiscount } from '@/utiles/money'

const router = useRouter()
const props = defineProps(['product'])

const productsImages = import.meta.glob('../assets/products/*.jpg', {
  eager: true,
})
const getProductImage = (img) => {
  return productsImages[`../assets/products/${img}`]?.default
}
</script>

<template>
  <div
    @click="router.push({ name: 'product', params: { id: product.sku } })"
    class="product-card"
  >
    <div class="image">
      <img :src="getProductImage(product.images[0])" alt="" srcset="" />
      <div v-if="product.discount > 0" class="discount">
        {{ product.discount }}% OFF
      </div>
    </div>

    <div class="body">
      <div class="rating">
        <div>
          <i class="rating-value">{{ product.rating }}</i>
          <span class="pi pi-star-fill" style="color: var(--accent)"></span>
        </div>
        <i class="rating-count">({{ product.rating_count }})</i>
      </div>

      <div>
        <p class="brand">{{ product.brand }}</p>
        <p class="name">{{ product.name }}</p>
        <p class="type">{{ product.tags[0] }}</p>
      </div>

      <div>
        <div class="price-container">
          <p class="price" :class="{ red: product.discount > 0 }">
            ${{ calculateDiscount(product.price, product.discount) }}
          </p>
          <p v-if="product.discount > 0" class="original-price">
            ${{ product.price }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  width: 100%;
  border-radius: 0.4rem;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);

  .image {
    overflow: hidden;
    max-height: auto;
    position: relative;

    .discount {
      position: absolute;
      top: var(--space-2);
      right: var(--space-2);
      background: rgba(0, 0, 0, 0.1);
      padding: var(--space-2) var(--space-4);
      border-radius: 25px;
      font-size: 0.8rem;
      font-weight: 800;
      color: var(--danger);
    }
  }

  &:hover img {
    scale: 1.1;
  }

  .body {
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: space-between;
    height: 150px;
    padding: var(--space-4);
    // text-align: center;

    .brand {
      font-weight: 800;
      font-size: 1rem;
      text-transform: uppercase;
    }

    .name {
      font-size: 0.9rem;
    }

    .type {
      margin-top: var(--space-2);
      font-size: 1rem;
      color: var(--text-soft);
    }

    .price-container {
      display: flex;
      flex-direction: row;
      gap: var(--space-1);

      .original-price {
        text-decoration: line-through;
        font-weight: 200;
        color: var(--text-soft);
      }

      .price {
        font-size: 1.3rem;
        font-weight: 700;
        margin-bottom: var(--space-1);

        &.red {
          color: var(--danger);
        }
      }
    }
  }

  .rating {
    font-size: small;
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: var(--space-2);
    .rating-value {
      margin-right: var(--space-1);
    }
    .rating-count {
      color: var(--text-soft);
      font-size: small;
    }
  }
}
</style>
