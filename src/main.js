import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import smooth from "vue-smoothscroll";
import EventHandler from "./components/EventHandler";

Vue.config.productionTip = false
Vue.use(smooth)
Vue.use(VueRouter)

// route
const routes = [
  {path: '/event-handler', component: EventHandler, name: 'EventHandler'},
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
