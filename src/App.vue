<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { useUserStore } from "./stores/UserStore";

const userStore = useUserStore();
</script>

<template>
  <div id="nav">
    <router-link to="/" v-if="userStore.isAuthenticated">Home</router-link>
    <router-link to="/login" v-if="!userStore.isAuthenticated"
      >Login</router-link
    >
  </div>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
