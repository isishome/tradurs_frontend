export const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import('@/pages/PageNotFound.vue')
  },
  {
    path: '/:lang([^/]{2})?',
    component: () => import('@/pages/Root.vue'),
    props: true,
    children: [
      {
        path: '',
        component: () => import('@/pages/Layout.vue'),
        children: [
          {
            path: '',
            name: 'Main',
            component: () => import('@/pages/Main.vue')
          },
          {
            path: 'info',
            name: 'Info',
            component: () => import('@/pages/Info.vue'),
            meta: {
              isAuth: true,
              isNoAds: true
            }
          },
        ]
      },
      {
        path: 'join',
        name: 'Join',
        component: () => import('@/pages/Join.vue'),
        meta: {
          isNoAds: true
        },
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
        path: 'join/:email',
        name: 'Join-Email',
        component: () => import('@/pages/Join.vue'),
        props: true,
        meta: {
          isNoAds: true
        }
      },
      {
        path: 'sign',
        name: 'Sign',
        component: () => import('@/pages/Sign.vue'),
        meta: {
          isNoAds: true
        }
      },
      {
        path: 'forgot',
        name: 'Forgot',
        component: () => import('@/pages/Forgot.vue'),
        meta: {
          isNoAds: true
        }
      },
      {
        path: 'verify',
        name: 'Verify',
        component: () => import('@/pages/Verify.vue'),
        meta: {
          isNoAds: true
        }
      }
    ]
  }
]