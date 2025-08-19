<script setup>
import { useThemeStore } from '@/stores/themeStore'
const store = useThemeStore()
</script>

<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.svg" alt="Essenza Logo" />
    </div>
    <div class="buttons">
      <button class="but-icon cart-button">
        <i class="pi pi-shopping-bag"></i>
        <i class="cart-items-counter">0</i>
      </button>
      <button @click="store.toggleTheme()" class="but-icon">
        <i
          class="pi"
          :class="store.activeTheme === 'dark' ? 'pi-sun' : 'pi-moon'"
        ></i>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2) var(--space-8);
  border-bottom: 1px solid var(--border-gold);

  .logo {
    height: 3.5rem;
  }

  .buttons {
    display: flex;
    gap: var(--space-2);
  }

  .cart-button {
    position: relative;

    .cart-items-counter {
      position: absolute;
      top: 50%;
      left: 10px;

      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--accent);
      color: var(--on-accent);
      font-size: 0.8rem;
      border-radius: 100%;
      height: 20px;
      width: 20px;
    }
  }
}
</style>
