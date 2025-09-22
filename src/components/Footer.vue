<script setup>
import { footerContact } from '@/assets/data/UI/FooterContent'
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-content-wrap">
        <div class="logo">
          <img src="@/assets/logo.svg" alt="Essenza Logo" />
        </div>

        <div class="footer-col">
          <h2>Support</h2>
          <a v-for="link in footerContact.links.support" :href="link.url">{{
            link.name
          }}</a>
        </div>

        <div class="footer-col">
          <h2>Contact</h2>
          <a href="">{{ footerContact.email }}</a>
          <a href="">{{ footerContact.phone }}</a>
          <a href="">{{ footerContact.address }}</a>
        </div>

        <div class="footer-col social-links">
          <a
            v-for="social in Object.entries(footerContact.social)"
            :class="`pi pi-${social[0]}`"
            :href="social[1]"
          ></a>
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
  justify-content: space-between;
  padding: var(--space-8) var(--space-8);
  gap: var(--space-4);

  @media (max-width: 756px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo {
    height: 100px;
  }

  .footer-col {
    display: flex;
    flex-direction: column;
    max-width: 25%;
    gap: var(--space-1);
    @media (max-width: 756px) {
      max-width: 100%;
    }
  }

  .social-links {
    gap: var(--space-4);
    font-size: 1.5rem;
    @media (max-width: 756px) {
      flex-direction: row;
    }
  }
}
</style>
