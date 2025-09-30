<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import { calculateDiscount, formatMoney } from '@/utiles/money'
import PrimeButton from '@/components/PrimeButton.vue'
import PaymentSummary from '@/components/PaymentSummary.vue'
const router = useRouter()
const cart = useCartStore()

const productsImages = import.meta.glob('../assets/products/*.jpg', {
  eager: true,
})
const getProductImage = (img) => {
  return productsImages[`../assets/products/${img.image}`]?.default
}
</script>

<template>
  <section class="cart-section container">
    <div class="summary" v-if="cart.cart.items.length > 0">
      <div class="cart-summary">
        <div class="head">
          <h2>Cart Summary</h2>
          (
          <i>
            {{
              cart.cart.items.reduce(
                (acc, cartItem) => acc + Number(cartItem.quantity),
                0
              )
            }}
          </i>
          <p>Item</p>
          )
        </div>
        <div class="items">
          <div
            class="item"
            v-for="cartItem in cart.cart.items"
            :key="cartItem.variant.sku"
          >
            <div
              @click="
                router.push({ name: 'product', params: { id: cartItem.id } })
              "
              class="image"
            >
              <img :src="getProductImage(cartItem.variant.images[0])" alt="" />
            </div>
            <div class="details">
              <div class="upper-row">
                <div class="col-1">
                  <h3 class="brand">{{ cartItem.brand }}</h3>
                  <h3 class="name">{{ cartItem.title }}</h3>
                  <i v-if="cartItem.variant.discount" class="discount"
                    >%{{ cartItem.variant.discount }} OFF</i
                  >
                  <pre>{{ cartItem.variant.sku }}</pre>
                  <pre>{{ cartItem.id }}</pre>
                  <div class="price-container">
                    <p class="price">
                      ${{
                        calculateDiscount(
                          cartItem.variant.price,
                          cartItem.variant.discount
                        )
                      }}
                    </p>
                    <div v-if="cartItem.variant.discount">
                      <i class="original-price">
                        ${{ cartItem.variant.price }}
                      </i>
                    </div>
                  </div>
                </div>

                <div class="col-2">
                  ${{
                    formatMoney(
                      calculateDiscount(
                        cartItem.variant.price,
                        cartItem.variant.discount
                      ) * Number(cartItem.quantity)
                    )
                  }}
                </div>
              </div>

              <div class="bottom-row">
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

                <i @click="cart.removeFromCart(cartItem)" class="delete-button">
                  <span class="pi pi-trash"></span> Delete
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PaymentSummary>
        <PrimeButton @click="router.push('/checkout')">Check out</PrimeButton>
      </PaymentSummary>
    </div>

    <div v-else class="empty-cart">
      <p class="message">Your bag is empty.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cart-section {
  width: 100%;
  flex: 1;
  padding: var(--space-4);
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

    .head {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      margin-bottom: var(--space-4);

      h2 {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }

    .items {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      padding: 0 var(--space-4);

      .item {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        gap: var(--space-4);
        min-height: 150px;
        border-bottom: 1px solid var(--border);

        &:last-child {
          border-bottom: 1px solid transparent;
        }

        .image {
          flex: 1 0 auto;
          height: 150px;
          width: 150px;
          cursor: pointer;
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
              display: flex;
              flex-direction: column;
              gap: var(--space-1);
              h3 {
                font-size: 1rem;
                text-wrap: balance;
                overflow-wrap: break-word;
                white-space: pre-wrap;
              }

              .brand {
                font-size: 1.2rem;
                font-weight: 600;
              }

              .discount {
                background: crimson;
                color: var(--white);
                padding: 2px 6px;
                border-radius: 0.3rem;
                width: fit-content;
                font-size: 0.8rem;
              }

              .price-container {
                display: flex;
                flex-direction: row;
                gap: var(--space-2);

                .original-price {
                  text-decoration: line-through;
                  font-weight: 200;
                  color: crimson;
                }

                .price {
                  font-size: 1.2rem;
                  font-weight: 600;
                  margin-bottom: var(--space-1);
                }
              }
            }
          }

          .bottom-row {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .delete-button {
              color: var(--danger);
              border-radius: 0.5rem;
              font-size: 0.8rem;
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
  }
}

.empty-cart {
  .message {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 300;
    margin-top: var(--space-4);
  }
}
</style>
