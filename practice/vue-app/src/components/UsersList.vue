<script
  setup
  lang="ts"
>
import { User } from './interfaces/users';

const props = defineProps<{
  users: User[];
}>();
</script>

<template>
  <ul class="space-y-2">
    <li
      v-for="user in props.users"
      :key="user.id"
      class="bg-white p-4 rounded-md border border-gray-100"
    >
      {{ user.name }}
    </li>
  </ul>
</template>
