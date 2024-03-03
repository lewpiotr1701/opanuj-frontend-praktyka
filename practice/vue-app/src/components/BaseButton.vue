<template>
  <button :class="btnClass">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const { btnClass } = defineProps({
  btnClass: {
    type: String,
    required: false
  },
});
</script>

