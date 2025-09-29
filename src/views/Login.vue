<script setup>
import PrimeButton from '@/components/PrimeButton.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div v-if="!route.query.action" class="login-wrap">
    <h1>Login</h1>
    <div class="inputs">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <PrimeButton>Login</PrimeButton>
    </div>
    <router-link :to="{ name: 'login', query: { action: 'register' } }"
      >Create an account
    </router-link>
  </div>

  <div v-if="route.query.action === 'register'" class="register-wrap">
    <h1>Register</h1>
    <div class="inputs">
      <input type="name" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <PrimeButton>Register</PrimeButton>
    </div>
    <router-link :to="{ name: 'login' }">I alredy have an account </router-link>
  </div>
</template>

<style lang="scss" scoped>
.register-wrap,
.login-wrap {
  width: 500px;
  margin: 0 auto;
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
}
</style>
