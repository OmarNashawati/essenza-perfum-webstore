<script setup>
import { footerContact } from '@/assets/data/UI/FooterContent'
import { getTopBrands } from '@/services/brandsService'
import { getTopCategories } from '@/services/categoriesService'
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-content-wrap">
        <div class="col">
          <div class="logo">
            <img src="@/assets/logo.svg" alt="Essenza Logo" />
          </div>

          <div class="">
            <h3>Social Media</h3>
            <div class="social-links">
              <a
                class="social-link"
                style="font-size: 2rem !important"
                v-for="social in Object.entries(footerContact.social)"
                :class="`pi pi-${social[0]}`"
                :href="social[1]"
              ></a>
            </div>
          </div>

          <div class="">
            <h3>Contact</h3>
            <a href="">{{ footerContact.email }}</a>
            <a href="">{{ footerContact.phone }}</a>
            <a href="">{{ footerContact.address }}</a>
          </div>

          <div class="language-country-div">
            <h3><span class="pi pi-language"></span> Language preferences:</h3>
            <a href="">EN</a>
            <a href="">USA</a>
          </div>
        </div>

        <div class="col">
          <h3>Top Categories</h3>
          <router-link
            v-for="category in getTopCategories()"
            :to="{ name: 'products', query: { category: category.title } }"
          >
            {{ category.title }}
          </router-link>
        </div>

        <div class="col">
          <h3>Top Brands</h3>
          <router-link
            v-for="brand in getTopBrands()"
            :to="{ name: 'products', query: { brand: brand } }"
          >
            {{ brand }}
          </router-link>
        </div>

        <div class="col">
          <h3>Help & FAQs</h3>
          <a v-for="link in footerContact.links.support" :href="link.url">
            {{ link.name }}</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  border-top: 1px solid var(--border-gold);
  margin-top: auto;
}

.footer-content-wrap {
  display: flex;
  padding: var(--space-8) var(--space-8);
  gap: var(--space-4);

  @media (max-width: 756px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .col {
    flex: 1;
    display: flex;
    flex-direction: column;
    // align-items: center;
    gap: var(--space-4);

    h3 {
      color: var(--accent);
      font-weight: 600;
      font-size: 1.2rem;
    }
  }

  a {
    color: var(--text);
    &:hover {
      text-decoration: underline;
    }
  }

  .logo {
    height: 100px;

    @media (max-width: 756px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .social-links {
    display: flex;
    @media (max-width: 756px) {
      align-items: center;
      justify-content: center;
    }

    .social-link {
      display: flex;
      gap: var(--space-4);
      padding: var(--space-1);
      border-radius: 0.2rem;
      padding: var(--space-2);
    }
  }

  .language-country-div {
    display: none;
    gap: 10px;
    justify-content: center;
    align-items: center;

    @media (max-width: 756px) {
      display: flex;
    }

    a {
      border: 1px solid var(--border-gold);
      border-radius: 0.2rem;
      padding: var(--space-1);
      &:hover {
        background: var(--accent);
        color: var(--on-accent);
      }
    }
  }
}
</style>
