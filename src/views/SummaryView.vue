<script setup>
import PrimeButton from '@/components/PrimeButton.vue'
import { useCartStore } from '@/stores/cartStore'

const cart = useCartStore()
</script>

<template>
  <section class="cart-section">
    <div class="summary" v-if="cart.cart.items.length > 0">
      <div class="cart-summary">
        <div
          class="item"
          v-for="cartItem in cart.cart.items"
          :key="cartItem.sku"
        >
          <div class="image">
            <img src="@/assets/empty-image.png" alt="" />
          </div>
          <div class="details">
            <h3>{{ cartItem.name }}</h3>
            <div class="price-container">
              <p class="price">${{ cartItem.price_with_discount }}</p>
              <p v-if="cartItem.discount" class="original-price">
                ${{ cartItem.original_price }}
              </p>
            </div>
            <button
              @click="cart.removeFromCart(cartItem)"
              class="delete-button"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <div class="payment-summary">
        <h3>Payment Summary</h3>
        <div class="info">
          <p>Items</p>
          <p>{{ cart.cart.items.length }}</p>

          <p>Totla</p>
          <p>${{ cart.cart.total }}</p>

          <p>discounted</p>
          <p>${{ cart.cart.discount_total }}</p>

          <p>Saved</p>
          <p>${{ cart.cart.total - cart.cart.discount_total }}</p>
        </div>
        <PrimeButton>Check out</PrimeButton>
      </div>
    </div>

    <div v-else class="empty-view">
      <i class="pi pi-shopping-bag icon"></i>
      <p class="message">Cart is empty</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cart-section {
  padding: var(--space-8);
  min-height: 500px;
}

.summary {
  display: flex;
  flex-direction: row;

  .cart-summary {
    flex: 1 1 auto;

    .item {
      display: flex;
      gap: var(--space-4);
      .image {
        width: 120px;
      }

      .details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: var(--space-2) 0;

        .delete-button {
          color: var(--danger);
          border: 1px solid var(--danger);
          border-radius: 0.5rem;
          max-width: 120px;
        }

        .delete-button:hover {
          color: var(--white);
          background-color: var(--danger);
        }

        .price-container {
          display: flex;
          flex-direction: row;
          gap: var(--space-1);

          .original-price {
            text-decoration: line-through;
            font-weight: 200;
            color: crimson;
          }

          .price {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: var(--space-1);
          }
        }
      }
    }
  }

  .payment-summary {
    width: 250px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    background-color: var(--surface);
    padding: var(--space-4);
    border-radius: 0.5rem;

    .info {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

.empty-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .icon {
    flex: 0;
    background: var(--surface);
    font-size: 4rem;
    padding: var(--space-8);
    border-radius: 100%;
  }

  .message {
    text-align: center;
    margin-top: var(--space-4);
  }
}
</style>
