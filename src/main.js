import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import smooth from "vue-smoothscroll";
import EventHandler from "./pages/EventHandler";
import Product from "./pages/Product";

Vue.config.devtools = true
Vue.config.productionTip = false
Vue.use(smooth)
Vue.use(VueRouter)

// route
const routes = [
  {path: '/vuejs/neko/3', component: EventHandler, name: 'EventHandler'},
  {path: '/vuejs/product', component: Product, name: 'Product'}
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  linkActiveClass: 'active'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// new Vue(Vue.util.extend({router, store}, App)).$mount('#app');