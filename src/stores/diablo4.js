import { defineStore } from 'pinia'
import { instance } from '@/axios'

export const useDiablo4Store = defineStore('diablo4', {
  state: () => ({
    items: [],
  }),
  actions: {
    async getItems() {
      const response = await instance.post('/d4/item', {
        page: 1,
        rows: 40
      })
      this.items = response.data
    }
  }
})