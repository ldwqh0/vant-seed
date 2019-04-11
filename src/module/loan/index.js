import routes from './route'
import vuex from './vuex'

export default {
  install (Vue, { router, store }) {
    router.addRoutes(routes)
    store.registerModule('loan', vuex)
  }
}
