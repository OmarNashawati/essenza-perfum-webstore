<script setup>
import PrimeButton from '@/components/PrimeButton.vue'
import NotFound from './NotFound.vue'
import Carousel from '@/components/Carousel.vue'

import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { calculateDiscount } from '@/utiles/money'
import { useCartStore } from '@/stores/cartStore'
import { getProduct, getProducts } from '@/services/productService'

const cart = useCartStore()
const route = useRoute()

const product = ref(null)
const variant = ref(null)

const quantity = ref('1')
const currentImage = ref(null)

onMounted(() => {
  product.value = getProduct(route.params.id)
  if (product.value) {
    variant.value = product.value.variants[0]
    currentImage.value = variant.value.images[0]
  }
})

watch(route, () => {
  product.value = getProduct(route.params.id)
  if (product.value) {
    variant.value = product.value.variants[0]
    currentImage.value = variant.value.images[0]
  }
})

const productsImages = import.meta.glob('../assets/products/*.jpg', {
  eager: true,
})

const getProductImage = (img) => {
  return productsImages[`../assets/products/${img.image}`]?.default
}
</script>

<template>
  <div class="container">
    <section v-if="product" class="product-wrapper">
      <div class="gallery">
        <div class="sub-images">
          <img
            @click="currentImage = image"
            v-for="image in variant.images"
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
        <p class="brand">{{ product.brand }}</p>

        <div>
          <p class="name">{{ product.title }}</p>
          <p class="concentration">{{ product.concentration }}</p>
        </div>

        <p :class="variant.available ? 'in-stock' : 'sold-out'">
          <i v-if="variant.available" class="pi pi-check"></i>
          {{ variant.available ? 'In Stock' : 'Sold out ' }}
        </p>

        <p class="description">{{ product.description }}</p>

        <div class="rating">
          <div>
            <i class="rating-value">{{ product.rating }}</i>
            <span class="pi pi-star-fill" style="color: var(--accent)"></span>
          </div>
          <i class="rating-count">({{ product.ratingCount }}) reviews</i>
        </div>

        <div class="price-container">
          <p class="price">
            ${{ calculateDiscount(variant.price, variant.discount) }}
          </p>
          <p v-if="variant.discount" class="original">${{ variant.price }}</p>
        </div>

        <div class="add-to-card">
          <PrimeButton
            @click="cart.addToCart(product.id, variant.sku, quantity)"
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
          <p>{{ product.releasYear }}</p>

          <p>Sex</p>
          <p>{{ variant.sex }}</p>

          <p>Concentration</p>
          <p>{{ variant.concentration }}</p>
        </div>
      </div>
    </section>

    <NotFound v-else />

    <div v-if="product" class="related-products">
      <Carousel :title="`Similer Products `" :products="getProducts()" />
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

.rating {
  display: flex;
  width: 100%;
  gap: var(--space-4);
  .rating-value {
    margin-right: var(--space-1);
  }
  .rating-count {
    color: var(--text-soft);
  }
}
</style>
