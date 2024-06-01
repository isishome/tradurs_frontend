import { defineStore } from 'pinia'

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
  }
})