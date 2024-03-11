<script
  setup
  lang="ts"
>
import UsersList from './components/UsersList.vue';
import ConnectionIssues from './components/ConnectionIssues.vue';
import SpinningLoader from './components/SpinningLoader.vue';

import { ref, onMounted } from 'vue';

import { User } from './interfaces/users';

const users = ref<User[]>([]);
const isLoading = ref(false);
const isTimeoutError = ref(false);

const API_URL = 'http://localhost:3000/api/data/users?timeout=10000';
const TIMEOUT = 5000;

const fetchUsers = async () => {
  try {
    const controller = new AbortController()

    const timeoutId = setTimeout(() => {
      controller.abort();
      isTimeoutError.value = true;
      isLoading.value = false;
    }, TIMEOUT);

    isTimeoutError.value = false;
    isLoading.value = true;

    const res = await fetch(API_URL, { signal: controller.signal });

    const { users } = await res.json();

    return users;
  } catch (err) {
    console.error('error fetching users', err);;
    return []
  } finally {
    controller = null
    clearTimeout(timeoutId);
    isLoading.value = false;
  }
};

const handleRetryFetch = () => {
  users.value = fetchUsers();
};

onMounted(() => {
  users.value = fetchUsers()
});

</script>

<template>
  <div class="flex flex-row items-center justify-between py-4">
    <h1 class="text-2xl font-bold">Users</h1>
    <div>
      <SpinningLoader v-show="isLoading" />
    </div>
    <div>
      <ConnectionIssues
        v-show="isTimeoutError"
        @retry="handleRetryFetch"
      />
    </div>
  </div>
  <UsersList :users="users" />
</template>

<style scoped></style>
