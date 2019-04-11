import routes from './route'
import vuex from './vuex'

export default {
  install (Vue, { store, router }) {
    router.addRoutes(routes)
    store.registerModule('company', vuex)
  }
}
