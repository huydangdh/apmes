<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/UserStore'

defineProps<{ msg: string }>()

const count = ref(0)
const userStore = useUserStore()
</script>

<template>
  <h1>{{ msg }}</h1>
  Dashboard <br>
  My state is: {{userStore.isLogin.toStrin()}}
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
