<script setup>
import PrimeButton from '@/components/PrimeButton.vue'
import { useCartStore } from '@/stores/cartStore'
import { formatMoney } from '@/utiles/money'

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
            <div class="upper-row">
              <div class="col-1">
                <h3>{{ cartItem.name }}</h3>
                <div class="price-container">
                  <p class="price">${{ cartItem.price_with_discount }}</p>
                  <p v-if="cartItem.discount" class="original-price">
                    ${{ cartItem.original_price }}
                  </p>
                </div>
              </div>

              <div class="col-2">
                ${{
                  formatMoney(
                    cartItem.price_with_discount * Number(cartItem.quantity)
                  )
                }}
              </div>
            </div>

            <div class="actions-row">
              <i @click="cart.removeFromCart(cartItem)" class="delete-button">
                Delete
              </i>

              <div class="quantity">
                <i
                  @click="cartItem.quantity = Number(cartItem.quantity) + 1"
                  class="pi pi-plus"
                ></i>
                <p>{{ cartItem.quantity }}</p>
                <i
                  @click="
                    Number(cartItem.quantity) > 1
                      ? (cartItem.quantity = Number(cartItem.quantity) - 1)
                      : 1
                  "
                  class="pi pi-minus"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="payment-summary">
        <h3>Payment Summary</h3>
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
  gap: var(--space-4);

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .cart-summary {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    gap: var(--space-4);

    .item {
      display: flex;
      flex-direction: row;
      overflow: hidden;
      gap: var(--space-4);
      border-radius: 0.5rem;
      background-color: var(--surface);
      height: 150px;

      .image {
        flex: 1 0 auto;
        height: 100%;
      }

      .details {
        flex: 1 1 auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: var(--space-4) 0;
        padding-right: var(--space-4);

        .upper-row {
          display: flex;

          .col-1 {
            flex: 1 1 auto;
            h3 {
              font-size: 1rem;
              text-wrap: balance;
              overflow-wrap: break-word;
              white-space: pre-wrap;
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
                font-size: 1rem;
                font-weight: 600;
                margin-bottom: var(--space-1);
              }
            }
          }

          .col-2 {
          }
        }

        .actions-row {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .delete-button {
            color: var(--danger);
            border-radius: 0.5rem;
            font-size: 0.7rem;
            cursor: pointer;
          }

          .quantity {
            display: flex;
            align-items: center;
            gap: var(--space-2);

            i {
              font-size: 0.5rem;
              cursor: pointer;
              padding: var(--space-1);
              border-radius: 0.2rem;

              &:hover {
                background-color: var(--surface-alt);
              }
            }
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

    @media (max-width: 1024px) {
      width: 100%;
    }

    .info {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      i {
        text-align: end;
      }
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
