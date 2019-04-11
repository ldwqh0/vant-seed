export default [{
  name: 'my',
  path: '/my',
  redirect: '/my/index',
  component: () => import('../NavTemplate'),
  children: [{
    name: 'myIndex',
    path: '',
    component: () => import('./component/MyIndex')
  }]
}, {
  path: '/my',
  component: () => import('../ContentTemplate'),
  children: [{
    name: 'myInfo',
    path: 'info',
    component: () => import('./component/Info')
  }, {
    name: 'myFavorites',
    path: 'favorites',
    component: () => import('./component/Favorites')
  }, {
    name: 'myNotices',
    path: 'notices',
    component: () => import('./component/Notices')
  }, {
    name: 'mySuggestion',
    path: 'suggestion',
    component: () => import('./component/Suggestion')
  }, {
    name: 'myProgress',
    path: 'progress',
    component: () => import('./component/Progress')
  }, {
    name: 'settings',
    path: 'settings',
    component: () => import('./component/Settings')
  }]
}]
