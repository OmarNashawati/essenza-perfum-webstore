<script setup>
import { useRouter } from 'vue-router'
import { homeContent } from '@/assets/data/UI/HomeContent'
import PrimeButton from '@/components/PrimeButton.vue'

const router = useRouter()
</script>

<template>
  <section class="hero-section">
    <div class="hero-contant">
      <h1 class="title">{{ homeContent.hero.title }}</h1>
      <p class="sub-title">{{ homeContent.hero.subtitle }}</p>
      <PrimeButton class="hero-btn" @click="router.push('/products')">{{
        homeContent.hero.cta.text
      }}</PrimeButton>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: url('../../assets/hero/hero.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .hero-contant {
    max-width: 70%;
    padding: var(--space-8);

    @media (max-width: 1024px) {
      padding: var(--space-4);
      max-width: 100%;
    }

    .title {
      font-size: clamp(2.3rem, 5vw, 8rem);
      font-weight: 600;

      color: var(--white);
    }

    .sub-title {
      font-size: clamp(1rem, 2vw, 4rem);
      color: var(--white);
    }

    .hero-btn {
      margin-top: var(--space-10);
      max-width: clamp(4rem, 10vw, 20rem);
    }
  }
}
</style>
