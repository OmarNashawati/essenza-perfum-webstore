<script setup>
import { getPerfum } from '@/services/productService'
import { useRoute } from 'vue-router'
import { calculateDiscount } from '@/utiles/money'
import PrimeButton from '@/components/PrimeButton.vue'
import { useCartStore } from '@/stores/cartStore'
import { ref } from 'vue'
const cart = useCartStore()
const route = useRoute()

let perfum = getPerfum(route.params.id)
let quantity = ref('1')
</script>

<template>
  <section class="product-wrapper">
    <div class="gallery">
      <div class="main-img">
        <img src="@/assets/empty-image.png" alt="" />
      </div>
      <div class="sub-images">
        <img
          v-for="image in perfum.images"
          src="@/assets/empty-image.png"
          alt=""
        />
      </div>
    </div>

    <div class="product-info">
      <h2>{{ perfum.name }}</h2>
      <div class="price-container">
        <p class="price">
          ${{ calculateDiscount(perfum.price, perfum.discount) }}
        </p>
        <p class="original">${{ perfum.price }}</p>
      </div>
      <p :class="perfum.availability ? 'in-stock' : 'sold-out'">
        <i v-if="perfum.availability" class="pi pi-check"></i>
        {{ perfum.availability ? 'In Stock' : 'Sold out ' }}
      </p>
      <p>{{ perfum.description }}</p>

      <div class="info-table">
        <p>Release Year</p>
        <p>{{ perfum.release_year }}</p>

        <p>Rating</p>
        <p>{{ perfum.rating }}</p>

        <p>Sex</p>
        <p>{{ perfum.sex }}</p>

        <p>Concentration</p>
        <p>{{ perfum.concentration }}</p>

        <p>tags</p>
        <div class="tags">
          <p class="tag" v-for="tag in perfum.tags">{{ tag }}</p>
        </div>
      </div>

      <div class="add-to-card">
        <PrimeButton @click="cart.addToCart(perfum, quantity)"
          >Add To Cart</PrimeButton
        >

        <div class="quantity">
          <label>Quantity</label>
          <select v-model="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.product-wrapper {
  display: flex;
  flex-direction: row;
  gap: var(--space-8);
  padding: var(--space-8);

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  .gallery {
    width: 50%;
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
      width: 100%;
      flex-direction: column;
    }

    .main-img {
      width: 100%;
      @media (max-width: 1024px) {
      }
      img {
        width: 100%;
        object-fit: fill;
      }
    }

    .sub-images {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-1);
    }
  }

  .product-info {
    display: flex;
    flex-direction: column;

    .price-container {
      display: flex;
      gap: var(--space-2);

      .price {
        font-size: 1.3rem;
        font-weight: 600;
      }
      .original {
        font-weight: 300;
        text-decoration: line-through;
        color: crimson;
      }
    }

    .in-stock {
      color: var(--success);
    }

    .sold-out {
      color: var(--danger);
    }

    .info-table {
      // border-top: 1px solid var(--border);
      margin-top: var(--space-8);
      display: grid;
      gap: var(--space-2);
      grid-template-columns: repeat(2, 1fr);

      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-1);
      }

      .tag {
        padding: var(--space-1) var(--space-3);
        font-size: 12px;
        background: var(--surface);
        color: var(--on-surface);
        border-radius: 1rem;
      }
    }

    .add-to-card {
      margin-top: var(--space-8);

      .quantity {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        margin-top: var(--space-4);
        label {
        }

        select {
          background-color: var(--surface);
          padding: var(--space-2) var(--space-4);
          border-radius: 0.2rem;
        }
      }
    }
  }
}
</style>
