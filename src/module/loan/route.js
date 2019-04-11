export default [{
  name: 'loan',
  path: '/loan',
  component: () => import('../ContentTemplate'),
  redirect: { name: 'loanIndex' },
  children: [{
    name: 'loanIndex',
    path: '',
    component: () => import('./component/Loan')
  }]
}]
