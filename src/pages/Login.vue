<script setup lang="ts">
import { ref } from 'vue'
import router from '../router';
import { useUserStore } from '../stores/UserStore'

defineProps<{ msg: string }>()

const count = ref(0)
const userStore = useUserStore()


function doLoginTest() {
  userStore.doLogin();  
  localStorage.setItem('user_isAuthenticated','ok');
  router.push("/");
}



</script>

<template>
  <h1>{{ msg }}</h1>
  Login - &
  <br/>
  <button v-on:click="doLoginTest()" v-if="!userStore.isAuthenticated">doLoginTest</button>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
