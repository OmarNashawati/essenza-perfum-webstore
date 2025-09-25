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
        <p>Subtotal</p>
        <i>${{ cart.cart.total }}</i>

        <p>Savings & Discounts</p>
        <i class="--green-text"
          >- ${{ formatMoney(cart.cart.total - cart.cart.discount_total) }}</i
        >

        <p>sheping</p>
        <i>$ {{ cart.deliveryCoast() }}</i>

        <p class="total">Total <span>(Inc. 15% VAT)</span></p>
        <i class="total">${{ formatMoney(cart.cart.discount_total) }}</i>
      </div>
      <slot>
        <!-- Button Slot -->
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.payment-summary {
  width: 350px;
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
    // background-color: var(--gold-50);
    padding: var(--space-4);
    gap: var(--space-4);
  }

  .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: var(--space-2);
    i {
      text-align: end;
    }

    .total {
      font-size: 1.2rem;
      font-weight: 600;
      span {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
