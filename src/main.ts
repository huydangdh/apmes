import { createApp } from "vue";
import "./style.css";
import MainApp from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { auth } from "./firebaseConfig";

//

const pinia = createPinia();
let app: any;

auth.onAuthStateChanged((user) => {
  if(!app){
    app = createApp(MainApp)
            .use(pinia)
            .use(router)
            .mount('#app')
  }
})
