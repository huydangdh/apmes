import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { auth } from "./firebaseConfig";

//

const pinia = createPinia();
let app;

const unsubscribe = auth.onAuthStateChanged((user) => {
  unsubscribe()
  if(!app){
    app = createApp(App)
    app.use(pinia)
    app.use(router)
    app.mount('#app')
  }
})
