import { createWebHistory, createRouter } from "vue-router";
import Dashboard from '../pages/Dashboard.vue'
import Login from '../pages/Login.vue'
import { useUserStore } from "../stores/UserStore";


const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async(to, from)=>{
  const isAuthenticated = useUserStore().checkAuthentication();
  
  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
})

export default router;