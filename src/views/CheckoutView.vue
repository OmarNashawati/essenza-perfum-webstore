<script setup>
import { useRouter } from 'vue-router'
import PaymentSummary from '@/components/PaymentSummary.vue'
import PrimeButton from '@/components/PrimeButton.vue'
import PaymentForm from '@/components/PaymentForm.vue'

const router = useRouter()
</script>

<template>
  <section class="checkout-section container">
    <div class="forms">
      <form class="shipping-form">
        <h1>Delivery Address</h1>
        <div class="form-row">
          <input type="text" placeholder="* First Name" name="" id="" />
          <input type="text" placeholder="* Last Name" name="" id="" />
        </div>
        <input type="text" placeholder="* Street Address" name="" id="" />
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
          <input type="checkbox" />
          Use as billing address
        </label>
      </form>

      <PaymentForm />
    </div>

    <PaymentSummary>
      <PrimeButton>Complete Order</PrimeButton>
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
</style>
