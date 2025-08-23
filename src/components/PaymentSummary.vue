<script setup>
import { useCartStore } from '@/stores/cartStore'
import { formatMoney } from '@/utiles/money'

const cart = useCartStore()
</script>

<template>
  <div class="payment-summary">
    <h2 class="title">Payment Summary</h2>
    <div class="body">
      <div class="info">
        <p>Items</p>
        <i>
          {{
            cart.cart.items.reduce(
              (acc, cartItem) => acc + Number(cartItem.quantity),
              0
            )
          }}
        </i>

        <p>Totla</p>
        <i>${{ cart.cart.total }}</i>

        <p>discounted</p>
        <i>${{ formatMoney(cart.cart.discount_total) }}</i>

        <p>Saved</p>
        <i>${{ formatMoney(cart.cart.total - cart.cart.discount_total) }}</i>
      </div>
      <slot>
        <!-- Button Slot -->
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.payment-summary {
  width: 250px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  @media (max-width: 1024px) {
    width: 100%;
  }

  .body {
    display: flex;
    border-radius: 0.5rem;
    flex-direction: column;
    background-color: var(--surface);
    padding: var(--space-4);
    gap: var(--space-4);
  }

  .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    i {
      text-align: end;
    }
  }
}
</style>
