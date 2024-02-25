<script setup lang="ts">
import InputNumber from './components/InputNumber.vue'
import ActionButton from './components/ActionButton.vue'

import { add, subtract, multiply, divide } from './utils/calculate'

import { ref } from 'vue'

const firstNumber = ref<number>(0)
const secondNumber = ref<number>(0)
const result = ref<number | string>(0)

const calculate = (operation: (a: number, b: number) => number) => {
  try {
    result.value = operation(firstNumber.value, secondNumber.value)
  } catch (error: unknown) {
    result.value = error.message
  }
}
</script>

<template>
  <div>
    <div className="grid grid-cols-2 gap-x-4">
      <InputNumber v-model="firstNumber" />
      <InputNumber v-model="secondNumber" />
    </div>
    <div className="grid grid-cols-4 gap-x-4 my-4">
      <ActionButton
        label="+"
        @click="calculate(add)"
      />
      <ActionButton
        label="-"
        @click="calculate(subtract)"
      />
      <ActionButton
        label="*"
        @click="calculate(multiply)"
      />
      <ActionButton
        label="/"
        @click="calculate(divide)"
      />
    </div>
    <div>Result: {{ result }}</div>
  </div>
</template>

<style scoped></style>
