import { defineStore } from "pinia";

import { User, UserCredential } from "firebase/auth";

interface UserState {
  isAuthenticated: boolean;
  user: User | undefined;
}

interface UserStoreAction {
  doLogin(): void,
  doLogout(): void,
  setUser(user: User): void,
}

type UserStoreGetter = {
  getUser(): User | undefined,
}

export const useUserStore = defineStore<"app_user", UserState, UserStoreGetter, UserStoreAction>(
  "app_user",
  {
    state: () => {
      return { isAuthenticated: false, user: undefined };
    },
    // could also be defined as
    // state: () => ({ count: )
    getters:{
      getUser():User | undefined {
        if(this.user) return this.user;
        else return undefined;
      }
    },
    actions: {
      doLogin() {
        this.isAuthenticated = true;
      },
      doLogout() {
        this.isAuthenticated = false;
      },
      setUser(user: User){
        this.user = user
      }
    },
  }
);
