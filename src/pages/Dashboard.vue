<script setup lang="ts">
import { ref } from 'vue'
import router from '../router';
import { useUserStore } from '../stores/UserStore'

defineProps<{ msg: string }>()

const userStore = useUserStore()

function doLogoutTest() {
  userStore.doLogout();
  localStorage.removeItem('user_isAuthenticated');
  router.push("/login");
}

</script>

<template>
  <h1>{{ msg }}</h1>
  Dashboard <br>
  My state is: {{userStore.isAuthenticated.toString()}}

  <br/>
  
  <button v-on:click="doLogoutTest()" v-if="userStore.isAuthenticated" class="button">doLogoutTest</button>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
