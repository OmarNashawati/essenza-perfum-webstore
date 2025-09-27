<script setup>
import PaymentSummary from '@/components/PaymentSummary.vue'
import PrimeButton from '@/components/PrimeButton.vue'
import { useRouter } from 'vue-router'
import { getDeliveryMethods } from '@/services/deliveryMethodsService'
import { deliveryMethods } from '@/assets/data/mockDeliveryMethods'
import { getPaymentMethods } from '@/services/paymentMethodsService'

import { ref } from 'vue'
import PaymentForm from '@/components/PaymentForm.vue'

const router = useRouter()

const payStage = ref(false)

const deliveryDetails = ref({
  customerTitle: 'Mr',
  deliveryMethod: 'Standard Delivery',
})

const saveAndCountinue = () => {
  const {
    firstName,
    lastName,
    customerTitle,
    phoneNumber,
    street,
    address,
    city,
    state,
    zipCode,
    deliveryMethod,
  } = deliveryDetails.value
  if (
    firstName &&
    lastName &&
    customerTitle &&
    phoneNumber &&
    street &&
    address &&
    city &&
    state &&
    zipCode &&
    deliveryMethod
  ) {
    payStage.value = true
  } else {
    alert('all field have to be fiiled')
  }
}
</script>

<template>
  <section class="checkout-section container">
    <!-- <div v-if="!payStage" class="forms">
      <form class="shipping-form">
        <h1>Delivery details & method <span>(* Required)</span></h1>

        <div class="form-row">
          <label for="">
            <select v-model="deliveryDetails.customerTitle">
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
            </select>
          </label>

          <input
            v-model="deliveryDetails.firstName"
            type="text"
            placeholder="First Name*"
            name=""
            id=""
          />
          <input
            v-model="deliveryDetails.lastName"
            type="text"
            placeholder="Last Name*"
            name=""
            id=""
          />
        </div>

        <input
          v-model="deliveryDetails.phoneNumber"
          type="tel"
          placeholder="Phone Number*"
          name=""
          id=""
        />

        <input
          v-model="deliveryDetails.street"
          type="text"
          placeholder="Street Address*"
          name=""
          id=""
        />

        <input
          v-model="deliveryDetails.address"
          type="text"
          placeholder="Apt/ Suite/ Floor (Optional)"
          name=""
          id=""
        />

        <div class="form-row">
          <input
            v-model="deliveryDetails.city"
            type="text"
            placeholder="* City"
            name=""
            id=""
          />
          <input
            v-model="deliveryDetails.state"
            type="text"
            placeholder="* State"
            name=""
            id=""
          />
          <input
            v-model="deliveryDetails.zipCode"
            type="Number"
            maxlength="5"
            placeholder="* Zip Code"
            name=""
            id=""
          />
        </div>

        <label for="">
          <input
            v-model="deliveryDetails.useBillinAddress"
            type="checkbox"
            checked
          />
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
                v-model="deliveryDetails.deliveryMethod"
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
    </div> -->

    <div v-if="true" class="pay-stage">
      <div class="review-wrap">
        <h1>Delivery details & method</h1>
        <div>
          <p>{{ deliveryDetails.firstName }} {{ deliveryDetails.lastName }}</p>
          <p>{{ deliveryDetails.phoneNumber }}</p>
          <br />
          <p>{{ deliveryDetails.street }} {{ deliveryDetails.address }}</p>
          <p>{{ deliveryDetails.city }}</p>
          <p>{{ deliveryDetails.state }}</p>
          <br />
          <p>{{ deliveryDetails.deliveryMethod }}</p>
        </div>
      </div>

      <div class="payment-wrap">
        <h1>Review & Pay</h1>
        <div>
          <PaymentForm />
        </div>
      </div>
    </div>

    <PaymentSummary>
      <PrimeButton @click="saveAndCountinue()">CONTINUE TO PAY</PrimeButton>
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

  .pay-stage {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-8);

    .review-wrap,
    .payment-wrap {
      border: 1px solid var(--border-gold);
      padding: var(--space-4);
      border-radius: 0.5rem;
    }
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
