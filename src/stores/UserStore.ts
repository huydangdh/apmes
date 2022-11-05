import { defineStore } from 'pinia'

export const useUserStore = defineStore('app_user', {
  state: () => {
    return { isAuthenticated: false }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    doLogin() {
      this.isAuthenticated = true
    },
    doLogout() {
      this.isAuthenticated = false
    },
    checkAuthentication(): boolean {
      var is_ok = localStorage.getItem('user_isAuthenticated');
      if (is_ok == 'ok') {
        return this.isAuthenticated = true;

      } else return this.isAuthenticated = false;

    }
  },
})