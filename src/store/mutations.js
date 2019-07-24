import Vue from 'vue'

export const mutations = {
  increments(state, count) {
    Vue.set(state, 'count', count++)
  },
  mutationType(state, payload) {
    Vue.set(state, 'message', payload)
  },
  setMessage(state, payload) {
    Vue.set(state, 'message', payload)
  }
}