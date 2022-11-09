import { defineStore } from 'pinia'
import firebase from 'firebase'
export const useUserStore = defineStore('app_user', {
  state: () => {
    return { isAuthenticated: false, user: UserCredential | null }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    doLogin() {
      this.isLogin = true
    },
    doLogout() {
      this.isLogin = false
    },
    checkAuthentication(){
      var isok = localStorage.getItem('user_isAuthenticated')
      if(isok == 'ok')
      {
        this.isAuthenticated = true
      } else this.isAuthenticated = false
      
      return this.isAuthenticated
    }
  },
})
