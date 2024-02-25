<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <input
    type="number"
    className="rounded-md shadow-md p-4"
    v-model="model"
  />
</template>

<style scoped></style>
