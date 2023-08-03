import { defineStore } from 'pinia'
import { instance } from '@/axios'

export const useAccountStore = defineStore('account', {
  state: () => ({
    signed: null,
    info: {},
    noAds: false,
    adsDatetime: undefined
  }),
  actions: {
    async checkSign(forced) {
      if (this.signed === null || forced) {
        const response = await instance.get('/account/signed')
        this.info = response.data
        this.signed = typeof (response.data.id) !== 'undefined'
      }
    }
  }
})