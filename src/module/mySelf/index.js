import storeModule from './vuex'
import routes from './route.js'

export default {
  install (Vue, { store, router }) {
    router.addRoutes(routes)
    store.registerModule('my', storeModule)
  }
}
