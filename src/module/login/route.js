export default [{
  name: 'login',
  path: '/login',
  component: () => import('../ContentTemplate'),
  redirect: { name: 'loginIndex' },
  children: [{
    name: 'loginIndex',
    path: '',
    component: () => import('./component/Login')
  }, {
    name: 'registry',
    path: '/registry',
    component: () => import('./component/Registry')
  }, {
    name: 'resetPwd',
    path: 'resetPwd',
    component: () => import('./component/ResetPassword')
  }]
}]
