import Vue from 'vue';
import App from './App.vue';
import store from './store';
import {VueMasonryPlugin} from 'vue-masonry';
import router from './router';

import '@/assets/css/tailwind.css';
import 'hint.css'; // hint.css tooltip library


import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faUser, faPaw, faCat, faDog, faCrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faHeart, faUser, faPaw, faCat, faDog, faCrow);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueMasonryPlugin)

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
