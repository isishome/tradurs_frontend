import axios from 'axios'
import { router } from '@/router'
import { Notify } from 'quasar'
import { useAccountStore } from '@/stores/account'

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_ORIGIN,
  timeout: 10000,
  withCredentials: true
})

instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  const status = error.response && error.response.status ? error.response.status : null
  const message = error.response && error.response.data || error.message
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
      message
    })
    return Promise.reject()
  }
})