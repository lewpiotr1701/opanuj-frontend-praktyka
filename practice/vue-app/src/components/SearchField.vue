<script setup lang="ts">
import { defineModel } from 'vue';

const value = defineModel<string>({
  type: String,
  default: '',
});

</script>

<template>
  <label class="flex flex-col">
    Country name...
    <input
      type="text"
      v-model="value"
      placeholder="Search..."
      class="border h-10 mt-1 indent-2"
    >
  </label>
</template>