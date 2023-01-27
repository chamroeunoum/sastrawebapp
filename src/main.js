import { createApp } from "vue";
import { createPinia } from "pinia";

import NaiveUI from 'naive-ui'

import store from './store'

import App from "./App.vue";
import router from "./router";
import './assets/css/index.css'

const app = createApp(App);

app.use(store);
app.use(NaiveUI);
app.use(createPinia());
app.use(router);

app.mount("#app");
