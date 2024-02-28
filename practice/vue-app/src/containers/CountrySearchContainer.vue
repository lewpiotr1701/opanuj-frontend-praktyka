<script setup lang="ts">
import SearchTitle from '../components/SearchTitle.vue';
import SearchField from '../components/SearchField.vue';
import OptionField from '../components/OptionField.vue';
import CountriesList from '../components/CountriesList.vue';

import { ref, watch } from 'vue';
import { debounce } from '../utils/debounce.ts';

import { fetchAllCountries, fetchCountriesByParam } from '../services/countriesApi.ts'

import { optionList } from '../constants/countries.ts'
import { TFilterOptions } from '../interfaces/countries';

const searchValue = ref('');
const filterOption = ref<TFilterOptions>('all');
const countries = ref([]);


watch(searchValue, debounce(async (newVal: string) => {
  try {
    if (filterOption.value === 'all') {
      countries.value = await fetchAllCountries()
      return
    }
    if (newVal.trim()) {
      countries.value = await fetchCountriesByParam(filterOption.value, newVal.trim())
    }
  } catch (err: any) {
    countries.value = []
    console.error(err.message)
  }
}, 300))
</script>

<template>
  <div class="pt-24" />
  <SearchTitle title="Search for a country" />
  <div class="pt-8" />
  <form class="space-x-4 flex items-end justify-center">
    <SearchField v-model="searchValue" />
    <OptionField
      v-model="filterOption"
      :optionsList="optionList"
    />
  </form>
  <div class="pt-8" />
  <CountriesList :countriesList="countries" />
  <div class="pt-16" />
</template>