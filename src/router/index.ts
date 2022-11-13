import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Login from "../pages/Login.vue";
import Signup from "../pages/Signup.vue";
import { useUserStore } from "../stores/UserStore";

import { User, UserCredential } from "firebase/auth";
import { getCurrentUser } from "../firebaseConfig";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/reg",
    name: "reg",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
/*
function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
 if(useUserStore().checkAuthentication())
  isAuthenticated = true;
 else
  isAuthenticated= false;
if(isAuthenticated) {
  if(to.name == 'Login') next('/')
  else next(); // allow to enter route
 } else{
  next('/login'); // go to '/login';
 }
}*/
router.beforeEach(async (to, from) => {
  const isAuthenticated = await getCurrentUser();
  console.log(isAuthenticated);
  //if (!isAuthenticated && to.name === 'reg') return {name : 'reg'}
  if (isAuthenticated && to.name === "login") return { name: "dashboard" };

  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== "login"
  ) {
    // redirect the user to the login page
    return { name: "login" };
  }
});

export default router;
