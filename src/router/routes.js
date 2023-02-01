import NotFound from '@/pages/NotFound.vue'
import Join from '@/pages/Join.vue'
import Sign from '@/pages/Sign.vue'
import Forgot from '@/pages/Forgot.vue'
import Verify from '@/pages/Verify.vue'
import Info from '@/pages/Info.vue'
import Layout from '@/pages/Layout.vue'
import Main from '@/pages/Main.vue'

export const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/join',
    name: 'Join',
    component: Join,
    props: true,
    children: [
      {
        path: ':email',
        name: 'Join-Email',
        component: Join
      }
    ]
  },
  {
    path: '/sign',
    name: 'Sign',
    component: Sign
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot
  },
  {
    path: '/verify',
    name: 'Verify',
    component: Verify
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Main',
        component: Main
      },
      {
        path: '/info',
        name: 'Info',
        component: Info,
        meta: {
          isAuth: true
        }
      },
    ]
  }
]