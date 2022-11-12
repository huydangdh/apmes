import { defineStore } from "pinia";

import { User, UserCredential } from "firebase/auth";

interface UserState {
  isAuthenticated: boolean;
  user: UserCredential | undefined;
}

export const useUserStore = defineStore<"app_user", UserState, {}, {}>(
  "app_user",
  {
    state: () => {
      return { isAuthenticated: false, user: undefined };
    },
    // could also be defined as
    // state: () => ({ count: )
    actions: {
      doLogin() {
        this.isAuthenticated = true;
      },
      doLogout() {
        this.isAuthenticated = false;
      },
      checkAuthentication() {
        var isok = localStorage.getItem("user_isAuthenticated");
        if (isok == "ok") {
          this.isAuthenticated = true;
        } else this.isAuthenticated = false;

        return this.isAuthenticated;
      },
    },
  }
);
