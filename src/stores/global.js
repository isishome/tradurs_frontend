import { defineStore } from 'pinia'
import { instance } from '@/axios'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    localeOptions: [
      { value: 'en', label: 'English' },
      { value: 'ko', label: '한국어' }
    ],
    timeLimit:0,
    topAccessTimeStamp: Date.now(),
    bottomAccessTimeStamp: Date.now(),
    rightAccessTimeStamp: Date.now()
  }),
  actions: {
    checkHealth() {
      return new Promise((resolve, reject) => {
        instance.get('/d4/system/health')
          .then(() => {
            resolve()
          })
          .catch(() => {
            reject()
          })
      })
    }
  }
})