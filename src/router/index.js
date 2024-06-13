import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import { useGlobalStore } from '../stores/global.js'
import { useAccountStore } from '@/stores/account.js'
import { instance } from '@/axios/index.js'

// Init Router
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to) {
    return new Promise(async (resolve) => {
      resolve({ top: 0, behavior: 'auto' })
    })
  }
})

// Before Each
router.beforeEach(async (to) => {
  const globalStore = useGlobalStore()
  const accountStore = useAccountStore()
  accountStore.noAds = to.meta.isNoAds || false

  instance.defaults.headers.common['Accept-Language'] = to.params.lang || 'ko-KR'

  if (!['PageNotFound', 'FailedToConnection'].includes(to.name)) {
    try {
      await globalStore.checkHealth()
    }
    catch {
      return { name: 'FailedToConnection' }
    }

    await accountStore.checkSign()

    if (accountStore.signed) {
      if (to.matched.some(m => ['Sign', 'Forgot', 'Join'].includes(m.name)))
        return { name: 'Main' }
    }
    else {
      const isAuth = to.meta.isAuth
      if (isAuth)
        return { name: 'Sign' }
    }
  }
})