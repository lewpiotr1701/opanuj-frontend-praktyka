<script
  setup
  lang="ts"
>
import { ref, onMounted } from 'vue';
import { DefaultApi, Character } from './api';

const api = new DefaultApi();

const characters = ref<Character[]>([]);

onMounted(async () => {
  const { results } = await api.getCharacters();
  characters.value = results;
});

</script>

<template>
  <div class="bg-gray-100 h-100 p-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="font-bold text-xl mb-4">Rick and Morty - Characters List</h1>
      <div class="flex flex-wrap justify-around">
        <div
          v-for="character in characters"
          class="flex flex-col items-center m-4 bg-white rounded-md p-4 shadow-md"
          style="width: 200px;"
        >
          <img
            :src="character.image"
            class="w-24 h-24 rounded-full"
          />
          <p>{{ character.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
