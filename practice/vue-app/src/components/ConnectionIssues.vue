<script
  setup
  lang="ts"
>
import { defineEmits } from 'vue';

defineEmits(['retry']);

</script>

<template>
  <div className="flex flex-row items-center">
    <p className="mr-2">
      Sorry, there seems to be connectivity issues...
    </p>
    <button
      className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
      @click="$emit('retry')"
    >
      Try again
    </button>
  </div>
</template>