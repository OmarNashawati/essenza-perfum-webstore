<script setup>
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/stores/themeStore'
import { useCartStore } from '@/stores/cartStore'
import { getCategories } from '@/services/categoriesService'

const categories = getCategories()
const router = useRouter()
const store = useThemeStore()
const cart = useCartStore().cart
</script>

<template>
  <header>
    <div class="top-bar">
      <div class="container">
        <p>Free delivery on all orders above 299$</p>
      </div>
    </div>

    <div class="container">
      <div class="midd-bar">
        <div @click="router.push('/')" class="logo">
          <img src="@/assets/logo.svg" alt="Essenza Logo" />
        </div>
        <div class="buttons">
          <button @click="router.push('/cart')" class="button-icon cart-button">
            <i class="pi pi-shopping-bag"></i>
            <span class="cart-items-counter">{{ cart.items.length }}</span>
          </button>
          <button @click="store.toggleTheme()" class="button-icon">
            <i
              class="pi"
              :class="store.activeTheme === 'dark' ? 'pi-sun' : 'pi-moon'"
            ></i>
          </button>
        </div>
      </div>
    </div>

    <div class="bottom-bar">
      <div class="container">
        <div class="categories-wrap">
          <p
            v-for="category in categories"
            @click="
              router.push({
                name: 'products',
                params: { category: category.slug },
              })
            "
          >
            {{ category.name }}
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  .top-bar {
    background-color: var(--secondary);

    p {
      color: var(--on-secondary);
      text-align: center;
      font-size: 0.9rem;
      padding: var(--space-2) var(--space-4);
    }
  }

  .midd-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-2) var(--space-4);
    .logo {
      height: 3.5rem;
      cursor: pointer;
    }

    .buttons {
      display: flex;
      gap: var(--space-2);

      .cart-button {
        position: relative;

        .cart-items-counter {
          position: absolute;
          top: 50%;
          left: var(--space-2);

          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: var(--accent);
          color: var(--on-accent);
          font-size: 0.9rem;
          border-radius: 100%;
          height: 20px;
          width: 20px;
        }
      }
    }
  }

  .bottom-bar {
    border-bottom: 1px solid var(--border-gold);
    border-top: 1px solid var(--border-gold);

    .categories-wrap {
      display: flex;
      justify-content: center;
      overflow-x: scroll;
      padding: 0 var(--space-4);
      p {
        white-space: nowrap;
        padding: var(--space-2) var(--space-4);
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
