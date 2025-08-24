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
  <div @click="router.push(`/products/${product.sku}`)" class="product-card">
    <div class="image">
      <img src="@/assets/empty-image.png" alt="" srcset="" />
    </div>

    <div class="body">
      <p class="name">{{ product.name }}</p>
      <div>
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

        <PrimeButton @click.stop="cart.addToCart(product, '1')">
          Add to Cart
        </PrimeButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  flex: 0 0 280px;
  background: var(--surface);
  border-radius: 0.4rem;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 4px 2px rgba($color: #000000, $alpha: 0.1);

  @media (max-width: 576px) {
  }
  .image {
    overflow: hidden;
    max-height: auto;
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

    .name {
      font-size: 1rem;
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
        font-weight: 600;
        margin-bottom: var(--space-1);
      }
    }
  }
}
</style>
