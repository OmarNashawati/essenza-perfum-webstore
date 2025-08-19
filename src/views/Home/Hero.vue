<script setup>
import { homeContent } from '@/assets/data/HomeContent'
import PrimeButton from '@/components/PrimeButton.vue'
</script>

<template>
  <section class="hero-section">
    <div>
      <h1 class="title">{{ homeContent.hero.title }}</h1>
      <p class="sub-title">{{ homeContent.hero.subtitle }}</p>
    </div>
    <PrimeButton>{{ homeContent.hero.cta.text }}</PrimeButton>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  min-height: 500px;
  text-align: center;
  gap: var(--space-8);

  .sub-title {
    font-size: 1rem;
    color: var(--text-soft);
  }
}
</style>
