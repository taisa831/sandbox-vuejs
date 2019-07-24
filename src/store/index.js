import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import {mutations} from './mutations'
import {actions} from './actions'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    message: '初期メッセージ'
  },
  getters,
  mutations,
  actions
})