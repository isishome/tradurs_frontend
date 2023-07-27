import { defineStore } from 'pinia'
import { instance } from '@/axios'

export const useDiablo4Store = defineStore('diablo4', {
  state: () => ({
    items: [],
  }),
  actions: {
    getItems() {
      return new Promise(async (resolve) => {
        const response = await instance.post('/d4/item', {
          page: 1,
          rows: 20,
          fixedFilter: {
            hardcore: null,
            ladder: null,
            onlyCurrency: null
          }
        })
        this.items = response.data
        resolve()
      })
    }
  }
})