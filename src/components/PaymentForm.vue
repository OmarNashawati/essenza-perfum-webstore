<script setup>
import paymentMethods from '@/assets/data/paymentMethods'
import { computed } from 'vue'
import { ref } from 'vue'

const selectedMethod = ref(paymentMethods[0].id)

const activeFields = computed(() =>
  paymentMethods.find((pm) => pm.id === selectedMethod.value)
)
</script>

<template>
  <form class="payment-form">
    <h1>Payment</h1>
    <div>
      <h3>Select Payment method</h3>
      <div class="radio-buts-wrapper">
        <label v-for="method in paymentMethods">
          <input type="radio" :value="method.id" v-model="selectedMethod" />
          {{ method.name }}
        </label>
      </div>
    </div>

    <div class="form-row">
      <label v-for="field in activeFields.fields" :for="field.id">
        {{ field.label }} {{ field.required ? '*' : '' }}
        <input
          :id="field.id"
          :name="field.id"
          :placeholder="field.label"
          :type="field.type"
          :required="field.required"
          value=""
        />
      </label>
    </div>
    <div></div>
  </form>
</template>

<style lang="scss" scoped>
.payment-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  .radio-buts-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .form-row {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    label {
      color: var(--text-soft);
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }
  }
}
</style>
