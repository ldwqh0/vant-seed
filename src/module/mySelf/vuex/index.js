export default {
  namespaced: true,
  state: {
    name: 'nameState',
    age: 12
  },
  getters: {
    info ({ name, age }) {
      return `我的名字是${name}我的年龄是${age}`
    }
  },
  mutations: {
    name (state, payload) {
      state.name = payload
    }
  },
  actions: {
    action1 ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('name', 'good')
        }, 2000)
      })
    }
  }
}
