export default [{
  name: 'wallet',
  path: '/wallet',
  component: () => import('../NavTemplate'),
  redirect: { name: 'walletIndex' },
  children: [{
    name: 'walletIndex',
    path: '',
    component: () => import('./component/Wallet')
  }, {
    name: 'loanInfo',
    path: 'loan',
    component: () => import('./component/LoanInfo')
  }]
}]
