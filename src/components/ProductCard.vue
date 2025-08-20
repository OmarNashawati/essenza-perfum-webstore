<script setup>
import { useRouter } from 'vue-router'
import PrimeButton from './PrimeButton.vue'
import { calculateDiscount } from '@/utiles/money'
import { useCartStore } from '@/stores/cartStore'

const router = useRouter()
const props = defineProps(['product'])
const cart = useCartStore()
</script>

<template>
  <div class="product-card">
    <div @click="router.push(`/products/${product.sku}`)">
      <div class="image">
        <img src="@/assets/empty-image.png" alt="" srcset="" />
      </div>

      <div class="body">
        <p class="name">{{ product.name }}</p>
        <div>
          <div class="price-container">
            <p class="price">
              ${{ calculateDiscount(product.price, product.discount) }}
            </p>
            <p v-if="product.discount > 0" class="original-price">
              ${{ product.price }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <PrimeButton @click="cart.addToCart(product, '1')">Add to Cart</PrimeButton>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  flex: 0 0 220px;
  width: 220px;
  background: var(--surface);
  border-radius: 0.4rem;
  overflow: hidden;
  cursor: pointer;

  .image {
    overflow: hidden;
    max-height: 200px;
  }

  &:hover img {
    scale: 1.1;
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
    padding: var(--space-2);

    // .name {
    // }

    .price-container {
      display: flex;
      flex-direction: row;
      gap: var(--space-1);

      .original-price {
        text-decoration: line-through;
        font-weight: 200;
        color: crimson;
      }

      .price {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: var(--space-1);
      }
    }
  }
}
</style>
