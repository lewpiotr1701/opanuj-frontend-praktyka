<script setup lang="ts">
import { defineProps } from 'vue';
import { defineModel } from 'vue';

const { optionsList } = defineProps({
  optionsList: {
    type: Array as () => { value: string, label: string }[],
    required: true,
  },
});

const value = defineModel<string>({
  type: String,
  default: '',
});

</script>

<template>
  <label class="flex flex-col">
    Search by...
    <select
      v-model="value"
      class="border h-10 mt-1"
    >
      <option
        v-for="option in optionsList"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </label>
</template>



