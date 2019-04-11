import store from '@/vuex'
import axios from 'axios'
import { router } from '@/config'

const instance = axios.create()

instance.interceptors.request.use(config => {
  store.commit('loading')
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  store.commit('loadingComplete')
  return response
}, error => {
  store.commit('loadingComplete')
  let { response: { status } } = error
  if (status === 401) {
    // 如果检测到用户未登录，保存当前地址到存贮中
    store.commit('security/savedRoute', router.history.current)
    router.replace({ name: 'login' })
  }
  return Promise.reject(error)
})

// instance.interceptors.response.use(response => {
//   return response
// }, error => {
//
// })
export default instance
