export const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import('@/pages/PageNotFound.vue')
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import('@/pages/Join.vue'),
    children: [
      {
        path: 'policy/terms',
        name: 'Policy-Terms',
        component: () => import('@/pages/policy/Terms.vue')
      },
      {
        path: 'policy/privacy',
        name: 'Policy-Privacy',
        component: () => import('@/pages/policy/Privacy.vue')
      },
      {
        path: 'policy/cookies',
        name: 'Policy-Cookies',
        component: () => import('@/pages/policy/Cookies.vue')
      }
    ]
  },
  {
    path: '/join/:email',
    name: 'Join-Email',
    component: () => import('@/pages/Join.vue'),
    props: true
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () => import('@/pages/Sign.vue')
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: () => import('@/pages/Forgot.vue')
  },
  {
    path: '/verify',
    name: 'Verify',
    component: () => import('@/pages/Verify.vue')
  },
  {
    path: '/',
    component: () => import('@/pages/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Main',
        component: () => import('@/pages/Main.vue')
      },
      {
        path: '/info',
        name: 'Info',
        component: () => import('@/pages/Info.vue'),
        meta: {
          isAuth: true
        }
      },
    ]
  }
]