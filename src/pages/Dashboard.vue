<script setup lang="ts">
import { ref } from "vue";
import { auth } from "../firebaseConfig";
import router from "../router";
import { useUserStore } from "../stores/UserStore";

defineProps<{ msg: string }>();

const userStore = useUserStore();

async function doLogout() {
  let user = userStore.getUser;
  if (user) {
    await auth.signOut();
    router.push("/login");
  } else {
    alert("Error");
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  Dashboard <br />
  User: {{ userStore.getUser }}

  <br />

  <button
    class="btn btn-danger"
    v-on:click="doLogout()"
    v-if="userStore.getUser"
  >
    LOGOUT
  </button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
