<script setup>
import { useNotificationStore } from '@/stores/notification'
import { storeToRefs } from 'pinia'
const store = useNotificationStore()
const { notifications } = storeToRefs(store)
</script>
<template>
  <div class="notifications">
    <transition-group name="fade" tag="div">
      <div
        v-for="n in notifications"
        :key="n.id"
        class="notification-card"
        :class="n.type"
      >
        <i class="pi pi-check"></i>
        <p>{{ n.message }}</p>
      </div>
    </transition-group>
  </div>
</template>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.notifications {
  position: fixed;
  top: var(--space-8);
  right: var(--space-4);
  z-index: 100;

  .notification-card {
    display: flex;
    gap: var(--space-2);
    margin: var(--space-2) 0;
    min-width: 200px;
    padding: var(--space-4) var(--space-4);
    border-radius: var(--space-2);

    i {
      color: var(--white);
    }

    p {
      font-weight: 700;
      color: var(--white);
    }

    &.success {
      background: var(--success);
      border-left: 2px solid green;
    }
    &.error {
      background: var(--danger);
      border-left: 2px solid red;
    }
    &.warn {
      background: var(--warning);
      border-left: 2px solid yellow;
    }
  }
}
</style>
