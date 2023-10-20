import { defineStore } from 'pinia'
import { instance } from '@/axios'

export const useDiablo4Store = defineStore('diablo4', {
  state: () => ({
    gems: [],
    elixirs: [],
    summonings: [],
    items: [],
  }),
  actions: {
    getBase() {
      return new Promise(async (resolve) => {
        const response = await instance.get('/d4/item/base')

        this.gems = response.data.gems
        this.elixirs = response.data.elixirs
        this.summonings = response.data.summonings

        resolve()
      })
    },
    getItems() {
      return new Promise(async (resolve) => {
        const response = await instance.post('/d4/item', {
          page: 1,
          rows: 20,
          fixedFilter: {
            hardcore: null,
            ladder: null
          },
          filter: {
            status: '000'
          }
        })
        this.items = response.data
        resolve()
      })
    }
  }
})