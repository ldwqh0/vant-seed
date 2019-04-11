export default {
  namespaced: true,
  state: {
    banners: [],
    navigations: []
  },
  mutations: {
    banners (state, payload) {
      state.banners = payload
    },
    navigations (state, payload) {
      state.navigations = payload
    }
  },
  actions: {
    loadBanners ({ commit }) {
      commit('banners', [{
        img: 'https://up.enterdesk.com/edpic/34/4d/32/344d32f7bc073a402e4630509b783701.jpg',
        type: 'case',
        params: { id: '1' }
      }, {
        img: 'https://up.enterdesk.com/edpic/9b/aa/75/9baa754bc67f9443d94171be35f17db3.jpg',
        type: 'company',
        params: { id: '1' }
      }])
    },
    loadNavigations ({ commit }) {
      commit('navigations', [{
        img: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
        type: 'loan',
        title: '十秒申贷',
        params: {}
      }, {
        img: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
        type: 'cases',
        title: '装修案例',
        params: {}
      }, {
        img: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
        type: 'companies',
        title: '装修公司',
        params: {}
      }, {
        img: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
        type: null,
        title: '装修商城',
        params: {}
      }])
    }
  }
}
