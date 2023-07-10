import { defineStore } from 'pinia'
import { instance } from '@/axios'
import { sleep } from '@/common'

export const useDiablo4Store = defineStore('diablo4', {
  state: () => ({
    items: [],
  }),
  actions: {
    getItems() {
      return new Promise(async (resolve) => {
        const response = await instance.post('/d4/item', {
          page: 1,
          rows: 40
        })
        await sleep(1000)
        this.items = response.data
        resolve()
      })
    }
  }
})