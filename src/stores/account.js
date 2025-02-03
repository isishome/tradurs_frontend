import { defineStore } from 'pinia'
import { instance } from '@/axios'

export const useAccountStore = defineStore('account', {
  state: () => ({
    signed: null,
    info: {},
    noAds: false
  }),
  actions: {
    async checkSign(forced) {
      if (this.signed === null || forced) {
        try {
          const response = await instance.get('/account/signed')
          this.info = response.data
          this.signed = typeof response.data.id !== 'undefined'
        } catch {}
      }
    }
  }
})
