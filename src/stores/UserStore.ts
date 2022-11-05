import { defineStore } from 'pinia'

export const useUserStore = defineStore('app_user', {
  state: () => {
    return { isLogin: false }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    doLogin() {
      this.isLogin = true
    },
    doLogout() {
      this.isLogin = false
    }
  },
})