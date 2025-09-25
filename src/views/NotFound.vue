<template>
  <div class="not-found-wrap">
    <h1>404 Page Not Found</h1>

    <router-link class="back-link" :to="{ name: 'home' }">
      <span class="pi pi-arrow-left"></span>
      Back To Home
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.not-found-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-4);
  padding: 0 var(--space-8);
  h1 {
    font-size: 3rem;
  }

  .back-link {
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: var(--space-2);
    width: fit-content;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
    color: var(--text);
    &:hover {
      border-bottom: 1px solid var(--text);
      cursor: pointer;
    }
  }
}
</style>
