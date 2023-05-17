import { defineStore } from 'pinia'
import { instance } from '@/axios'

export const useAccountStore = defineStore('account', {
  state: () => ({
    signed: null,
    info: {}
  }),
  actions: {
    async checkSign() {
      if (this.signed === null) {
        const response = await instance.get('/account/signed')
        this.info = response.data
        this.signed = typeof (response.data.id) !== 'undefined'
      }
    }
  }
})