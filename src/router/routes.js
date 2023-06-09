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
    props: true,
    children: [
      {
        path: ':email',
        name: 'Join-Email',
        component: () => import('@/pages/Join.vue')
      }
    ]
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