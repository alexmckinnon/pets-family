import Vue from 'vue'
import Router from 'vue-router'
import Pets from './views/Pets.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Pets,
      meta: { title: process.env.VUE_APP_TITLE }
    },
    {
      path: '/pets',
      name: 'pets',
      component: Pets,
      meta: { title: process.env.VUE_APP_TITLE }
    },
    {
      path: '*',
      name: 'fallback',
      component: Pets,
      meta: { title: process.env.VUE_APP_TITLE }
    },
  ]
})
