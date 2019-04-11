export default [{
  name: 'cases',
  path: '/cases',
  redirect: { name: 'casesIndex' },
  component: () => import('../ContentTemplate'),
  children: [{
    name: 'casesIndex',
    path: '',
    component: () => import('./component/Index')
  }, {
    name: 'case',
    path: ':id',
    props: true,
    component: () => import('./component/CaseInfo')
  }]
}]
