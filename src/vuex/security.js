import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

const loginHttpInstance = axios.create()
export default {
  namespaced: true,
  state: {
    savedRoute: {},
    currentUser: {}
  },
  mutations: {
    savedRoute (state, payload) {
      state.savedRoute = payload
    },
    currentUser (state, payload) {
      state.currentUser = payload
    }
  },
  actions: {

    logout ({ commit }) {
      return Vue.http.get(`${CONTEXT_PATH}d/logout`)
    },

    login ({ commit }, data) {
      return loginHttpInstance.post(`${CONTEXT_PATH}d/login`, data, {
        transformRequest: [(data, headers) => {
          return qs.stringify(data)
        }]
      }).then(rsp => {
        return rsp
      }).catch(e => {
        console.error(e)
      })
    },
    loadCurrentUser ({ commit }) {
      return Vue.http.get(`${CONTEXT_PATH}d/users/current`)
        .then(({ data }) => {
          commit('currentUser', data)
          return data
        })
    }
  }
}
