<script setup lang="ts">
import { defineProps } from 'vue';


const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1 class="text-2xl">{{ title }}</h1>
</template>