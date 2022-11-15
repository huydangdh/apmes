<script setup lang="ts">
import { auth } from "../firebaseConfig";
import router from "../router";
import { useUserStore } from "../stores/UserStore";

const userStore = useUserStore();

async function doLogout() {
  let user = userStore.getUser;
  if (user) {
    auth.signOut().then(() => {
      router.push("/login");
    });
  } else {
    alert("Error");
  }
}
</script>

<template>
  Dashboard <br />
  User: {{ userStore.getUser }}

  <br />

  <button class="btn btn-danger" v-on:click="doLogout()" v-if="userStore.getUser">
    LOGOUT
  </button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
