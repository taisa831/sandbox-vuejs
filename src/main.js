import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'

import smooth from "vue-smoothscroll";
import EventHandler from "./components/EventHandler";
import Product from "./components/Product";
import BigApplication from "./components/BigApplication"
import ChapterVuex from "./components/ChapterVuex";
import Task from "./components/Task";

Vue.config.devtools = true
Vue.config.productionTip = false
Vue.use(smooth)
Vue.use(VueRouter)

let windowPlugin = {
  install : function(Vue) {
    let store = new Vue({
      data: { scrollY: 0}
    })
    let timer = null
    window.addEventListener('scroll', function(){
      if (timer === null) {
        timer = setTimeout(function(){
          store.scrollY = window.scrollY
          clearTimeout(timer)
          timer = null
        }, 200)
      }
    })
    Vue.prototype.$window = store.$data
  }
}
Vue.use(windowPlugin)

// route
const routes = [
  {path: '/vuejs/neko/3', component: EventHandler, name: 'EventHandler'},
  {path: '/vuejs/neko/7', component: BigApplication, name: 'BigApplication'},
  {path: '/vuejs/neko/8', component: ChapterVuex, name: 'ChapterVuex'},
  {path: '/vuejs/product', component: Product, name: 'Product'},
  {path: '/vuejs/tasks', component: Task, name: 'Task'}
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  linkActiveClass: 'active'
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

// new Vue(Vue.util.extend({router, store}, App)).$mount('#app');