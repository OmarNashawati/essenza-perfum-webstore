<script setup>
import { getPerfum, getPerfumes } from '@/services/productService'
import { useRoute } from 'vue-router'
import { calculateDiscount } from '@/utiles/money'
import PrimeButton from '@/components/PrimeButton.vue'
import { useCartStore } from '@/stores/cartStore'
import { ref } from 'vue'
import NotFound from './NotFound.vue'
import Carousel from '@/components/Carousel.vue'

const cart = useCartStore()
const route = useRoute()

const perfum = getPerfum(route.params.id)
const quantity = ref('1')
const currentImage = ref(null)

const productsImages = import.meta.glob('../assets/products/*.jpg', {
  eager: true,
})
const getProductImage = (img) => {
  return productsImages[`../assets/products/${img}`]?.default
}

if (perfum) {
  currentImage.value = perfum.images[0]
}
</script>

<template>
  <div class="container">
    <section v-if="perfum" class="product-wrapper">
      <div class="gallery">
        <div class="sub-images">
          <img
            @click="currentImage = image"
            v-for="image in perfum.images"
            :src="getProductImage(image)"
            :class="{ 'current-image': currentImage === image }"
            alt=""
          />
        </div>
        <div class="main-img">
          <img :src="getProductImage(currentImage)" alt="" />
        </div>
      </div>

      <div class="product-info">
        <p class="brand">{{ perfum.brand }}</p>

        <div>
          <p class="name">{{ perfum.name }}</p>
          <p class="concentration">{{ perfum.concentration }}</p>
        </div>

        <p :class="perfum.availability ? 'in-stock' : 'sold-out'">
          <i v-if="perfum.availability" class="pi pi-check"></i>
          {{ perfum.availability ? 'In Stock' : 'Sold out ' }}
        </p>

        <p class="description">{{ perfum.description }}</p>

        <div class="price-container">
          <p class="price">
            ${{ calculateDiscount(perfum.price, perfum.discount) }}
          </p>
          <p v-if="perfum.discount" class="original">${{ perfum.price }}</p>
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

        <div class="info-table">
          <p>Release Year</p>
          <p>{{ perfum.release_year }}</p>

          <p>Rating</p>
          <p>{{ perfum.rating }} | ({{ perfum.rating_count }})</p>

          <p>Sex</p>
          <p>{{ perfum.sex }}</p>

          <p>Concentration</p>
          <p>{{ perfum.concentration }}</p>

          <p>tags</p>
          <div class="tags">
            <p class="tag" v-for="tag in perfum.tags">{{ tag }}</p>
          </div>
        </div>
      </div>
    </section>

    <NotFound v-else />

    <div class="related-products">
      <Carousel
        :title="`Semiler Products ${perfum.tags[0]}`"
        :products="getPerfumes({ tags: perfum.tags[0] })"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-wrapper {
  display: flex;
  flex-direction: row;
  gap: var(--space-8);
  padding: var(--space-8);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  .gallery {
    display: flex;
    flex-direction: row;
    gap: var(--space-2);

    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
    }

    .main-img {
      width: 100%;
      max-width: 1000px;
      img {
        width: 100%;
        object-fit: fill;
      }
    }

    .sub-images {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      overflow: auto;
      width: auto;

      @media (max-width: 768px) {
        flex-direction: row;
        order: 2;
        width: 100%;
      }

      img {
        width: 100px;
        height: 100px;
        opacity: 0.5;
        border: 1px solid transparent;
        cursor: pointer;
      }
      .current-image {
        border: 1px solid var(--accent);
        opacity: 1;
      }
    }
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    max-width: 400px;

    .brand {
      font-weight: 700;
      font-size: 2rem;
      text-transform: uppercase;
    }

    .name {
      font-weight: 300;
      font-size: 2rem;
    }

    .concentration {
      color: var(--text-soft);
      font-size: 1.3rem;
    }

    .price-container {
      display: flex;
      gap: var(--space-2);
      margin: var(--space-8) 0;

      .price {
        font-size: 2.5rem;
        font-weight: 600;
      }
      .original {
        font-weight: 300;
        text-decoration: line-through;
        color: crimson;
      }
    }

    .description {
      font-size: 1.2rem;
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
      .quantity {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        margin-top: var(--space-4);

        select {
          background-color: var(--surface);
          padding: var(--space-2) var(--space-4);
          border-radius: 0.2rem;
        }
      }
    }
  }
}

.related-products {
  padding: 0 var(--space-8);
}
</style>
