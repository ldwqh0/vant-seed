import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import security from './security'

Vue.use(Vuex) // use必须在创建store实例之前调用

export default new Store({
  state: {
    title: '应用',
    user: {},
    error: {
      count: 0,
      message: ''
    },
    loadingCount: 0
  },
  mutations: {
    updateTitle (state, { title }) {
      if (title) {
        state.title = title
      }
    },
    switchTheme (state, theme) {
      state.theme = theme
    },
    addError (state, payload) {
      let count = 1 + state.error.count
      let message = payload
      state.error = {
        count,
        message
      }
    },
    loading (state) {
      state.loadingCount++
      console.debug('after loading the loading count is ', state.loadingCount)
    },
    loadingComplete (state) {
      state.loadingCount--
      console.debug('after complete the loading count is ', state.loadingCount)
    }
  },
  actions: {},
  modules: {
    security
  }
})
