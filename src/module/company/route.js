export default [{
  name: 'companies',
  path: '/companies',
  redirect: { name: 'companiesIndex' },
  component: () => import('../ContentTemplate'),
  children: [{
    name: 'companiesIndex',
    path: '',
    component: () => import('./component/Index')
  }, {
    name: 'company',
    path: ':id',
    props: true,
    component: () => import('./component/CompanyInfo')
  }]
}]
