<script setup>
import { useRouter } from 'vue-router'
import PaymentSummary from '@/components/PaymentSummary.vue'
import PrimeButton from '@/components/PrimeButton.vue'
import { getDeliveryMethods } from '@/services/deliveryMethodsService'

const router = useRouter()
</script>

<template>
  <section class="checkout-section container">
    <div class="forms">
      <form class="shipping-form">
        <h1>Delivery details & method <span>(* Required)</span></h1>

        <div class="form-row">
          <label for="">
            Title *
            <select>
              <option value="">Mr</option>
              <option value="">Mrs</option>
              <option value="">Ms</option>
            </select>
          </label>
          <input type="text" placeholder="First Name*" name="" id="" />
          <input type="text" placeholder="Last Name*" name="" id="" />
        </div>

        <input type="tel" placeholder="Phone Number*" name="" id="" />

        <input type="text" placeholder="Street Address*" name="" id="" />

        <input
          type="text"
          placeholder="Apt/ Suite/ Floor (Optional)"
          name=""
          id=""
        />

        <div class="form-row">
          <input type="text" placeholder="* City" name="" id="" />
          <input type="text" placeholder="* State" name="" id="" />
          <input type="text" placeholder="* Zip Code" name="" id="" />
        </div>

        <label for="">
          <input type="checkbox" checked />
          Use as billing address
        </label>
      </form>

      <h1>Select Your Delivery Method</h1>
      <div class="delivery-methods">
        <div class="delivery-method-item" v-for="m in getDeliveryMethods()">
          <div class="head">
            <label :for="m.id">
              <input
                type="radio"
                :id="m.id"
                name="deliveryMethod"
                :value="m.name"
              />
              {{ m.name }}
            </label>

            <p class="price">{{ m.price > 0 ? `$${m.price}` : 'FREE' }}</p>
          </div>
          <div class="body">
            <p>{{ m.description }}</p>
            <p>{{ m.estimatedDays }}</p>
          </div>
        </div>
      </div>
    </div>

    <PaymentSummary>
      <PrimeButton>CONTINUE TO PAY</PrimeButton>
    </PaymentSummary>
  </section>
</template>

<style lang="scss" scoped>
.checkout-section {
  padding: var(--space-8);
  display: flex;
  gap: var(--space-8);

  @media (max-width: 768px) {
    flex-direction: column;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .forms {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
  }
}

.shipping-form {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  // max-width: 768px;

  .form-row {
    display: flex;
    flex-direction: row;
    gap: var(--space-4);

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
}

.delivery-methods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);

  .delivery-method-item {
    display: flex;
    flex-direction: column;

    .head {
      display: flex;
      justify-content: space-between;
      background: var(--gray-50);
      border: 1px solid var(--gray-100);
      padding: var(--space-4);
      border-radius: 0.5rem 0.5rem 0 0;

      .price {
        font-weight: 600;
      }
    }

    .body {
      border: 1px solid var(--gray-100);
      border-radius: 0 0 0.5rem 0.5rem;
      padding: var(--space-4);
      flex: 1;
    }
  }
}
</style>
