export default [{
  name: 'home',
  path: '/',
  component: () => import('../NavTemplate'),
  redirect: { name: 'index' },
  children: [{
    name: 'index',
    path: '',
    component: () => import('./component/Index')
  }]
}]
