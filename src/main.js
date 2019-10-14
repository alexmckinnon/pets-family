import Vue from 'vue';
import * as firebase from "firebase/app";
import App from './App.vue';
import store from './store';

import firebaseConfig from '../config/firebase.js';
import router from './router'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
