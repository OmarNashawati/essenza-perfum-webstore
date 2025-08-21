<script setup></script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  background: var(--accent);
  color: var(--on-accent);
  width: 100%;
  border-radius: 0.3rem;
  padding: var(--space-3);

  &:hover {
    background: var(--on-accent-hover);
  }
}
</style>
