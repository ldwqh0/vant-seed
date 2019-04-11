export default [{
  name: 'appointment',
  path: '/appointment',
  redirect: { name: 'appointmentIndex' },
  component: () => import('../ContentTemplate'),
  children: [{
    name: 'appointmentIndex',
    path: '',
    component: () => import('./component/Index')
  }]
}]
