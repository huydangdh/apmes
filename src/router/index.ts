import { createWebHistory, createRouter } from "vue-router";
import Dashboard from '../pages/Dashboard.vue'
import Login from '../pages/Login.vue'

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

export default router;