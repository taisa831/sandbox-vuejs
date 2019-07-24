export const actions = {
  increments({commit}, count) {
    commit('increments', count)
  },
  actionType({commit}, payload) {
    commit('mutationType', payload)
  },
  doUpdate({commit}, message) {
    commit('setMessage', message)
  },
}