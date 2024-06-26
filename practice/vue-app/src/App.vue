<script
  setup
  lang="ts"
>
import UsersList from './components/UsersList.vue';
import ConnectionIssues from './components/ConnectionIssues.vue';
import SpinningLoader from './components/SpinningLoader.vue';

import { ref, onMounted } from 'vue';
import { fetchWithTimeout } from './utils/clientHTTP';
import { User } from './interfaces/users';

const API_URL = 'http://localhost:3000/api/data/users?timeout=10000';
const TIMEOUT = 5000;
const isLoading = ref(false);
const isTimeoutError = ref(false);
const users = ref<User[]>([]);

const fetchUsers = async () => {
  try {
    isTimeoutError.value = false;
    isLoading.value = true;

    const res = await fetchWithTimeout(API_URL, TIMEOUT);

    const { users } = await res.json();

    return users;
  } catch (err) {
    console.error('Error:', err);
    users.value = [];
    isTimeoutError.value = true;
  } finally {
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
./utils/clientHTTP