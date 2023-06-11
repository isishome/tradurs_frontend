import axios from 'axios'
import { router } from '@/router'
import { Notify, Cookies, Quasar } from 'quasar'
import { useAccountStore } from '@/stores/account'

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_ORIGIN,
  timeout: 10000,
  withCredentials: true
})

instance.defaults.headers.common['Accept-Language'] = Cookies.has('tradurs.lang') ? Cookies.get('tradurs.lang') : Quasar.lang.getLocale() || 'ko-KR'

instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  const status = error.response.status
  if (status === 401) {
    const accountStore = useAccountStore()
    accountStore.signed = false
    accountStore.info = {}
    router.push({ name: 'Sign' })
    return Promise.reject()
  }
  else {
    Notify.create({
      color: 'negative',
      message: error.response.data
    })
    return Promise.reject()
  }
})