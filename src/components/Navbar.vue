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
        <div class="inner">
          <div class="language-country-options">
            <div class="current-language">
              <a href=""><span class="pi pi-language"></span> EN</a>
              <div class="dropdown">
                <p>Languge</p>
                <div class="inner">
                  <i class="option" href="">English</i>
                </div>
              </div>
            </div>
            <div class="current-country">
              <a href=""> <span class="pi pi-globe"></span> USA</a>
              <div class="dropdown">
                <p>Countrys</p>
                <div class="inner">
                  <i class="option" href="">USA</i>
                </div>
              </div>
            </div>
          </div>

          <div class="center-text">
            <p>Free delivery on all orders above 299$</p>
          </div>

          <div class="login-links">
            <a href="">Track Order</a>
            |
            <a href="">Contact Us</a>
            |
            <div>
              <router-link :to="{ name: 'login' }">Login</router-link>
              /
              <router-link
                :to="{ name: 'login', query: { action: 'register' } }"
                >Register</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="midd-bar">
        <div @click="router.push('/')" class="logo">
          <img src="@/assets/logo.svg" alt="Essenza Logo" />
        </div>

        <div class="search-bar">
          <i class="pi pi-search icon"></i>
          <input type="text" placeholder="Search beauty, brands and more.." />
        </div>

        <div class="buttons">
          <button class="search-button">
            <i class="pi pi-search"></i>
          </button>
          <button @click="router.push('/cart')" class="cart-button">
            <i class="pi pi-shopping-bag"></i>
            <span class="cart-items-counter">{{ cart.items.length }}</span>
          </button>
          <button @click="store.toggleTheme()">
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
                query: {
                  category: category.name,
                },
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

    .inner {
      display: flex;
      align-items: center;
      color: var(--on-secondary);
      padding: var(--space-2) var(--space-4);

      a {
        color: inherit;
        font-weight: 600;
        &:hover {
          color: var(--accent);
        }
      }

      .center-text {
        flex: 1;
        text-align: center;
        font-size: 0.9rem;
      }

      .language-country-options {
        display: flex;
        gap: var(--space-4);

        .current-language {
          position: relative;
          &:hover .dropdown {
            display: flex;
          }
        }

        .current-country {
          position: relative;
          &:hover .dropdown {
            display: flex;
          }
        }

        .dropdown {
          position: absolute;
          background: rgba(0, 0, 0, 0.8);
          padding: var(--space-4);
          border-radius: 0.4rem;
          top: 100%;
          display: none;
          flex-direction: column;
          align-items: start;

          .inner {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-4);

            .option {
              min-width: 120px;
              color: inherit;
              font-weight: 600;
              text-align: start;
              &:hover {
                color: var(--accent);
                cursor: pointer;
              }
            }
          }
        }

        @media (max-width: 768px) {
          display: none;
        }
      }

      .login-links {
        display: flex;
        gap: var(--space-2);
        @media (max-width: 768px) {
          display: none;
        }
      }
    }
  }

  .midd-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-8);
    padding: var(--space-2) var(--space-4);
    .logo {
      height: 3.5rem;
      cursor: pointer;
    }

    .search-bar {
      flex: 1;
      max-width: 700px;
      border-radius: 0.5rem;
      border: 1px solid var(--border-gold);
      display: flex;
      align-items: center;

      @media (max-width: 768px) {
        display: none;
      }

      .icon {
        padding: var(--space-3);
      }

      input {
        background: none;
        padding-left: 0;
        border: none;
      }
    }

    .buttons {
      display: flex;
      gap: var(--space-2);

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem;
        color: var(--text);
      }

      .search-button {
        display: none;
        @media (max-width: 768px) {
          display: initial;
        }
      }

      .cart-button {
        position: relative;

        .cart-items-counter {
          position: absolute;
          bottom: 0;
          left: 0;

          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: var(--accent);
          color: var(--on-accent);
          font-size: 0.9rem;
          border-radius: 50%;
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
