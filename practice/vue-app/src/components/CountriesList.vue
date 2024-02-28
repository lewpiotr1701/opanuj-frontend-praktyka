<script setup lang="ts">
import { defineProps } from 'vue';

// Define the props
const { countriesList } = defineProps({
  countriesList: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="countries-list">
    <div
      v-for="country in countriesList"
      :key="country?.name?.common"
      class="country-item"
    >
      <h3>{{ country?.name?.common }}</h3>
      <img
        :src="country?.flags?.svg"
        alt="Flag"
        class="country-flag"
      />
    </div>
  </div>
</template>

<style scoped>
.countries-list {
  display: flex;
  flex-wrap: wrap;
}

.country-item {
  margin: 10px;
}

.country-flag {
  width: 100px;
  height: 60px;
}
</style>
