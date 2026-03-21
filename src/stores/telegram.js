import { defineStore } from 'pinia'
import { instance } from '@/axios'

export const useTelegramStore = defineStore('telegram', () => {
  const getStatus = async () => {
    const result = await instance.get('/telegram/status')
    return result.data
  }

  const issueToken = async () => {
    try {
      const result = await instance.post('/telegram/issue')
      window.open(result.data.botLink, 'tradurs_notify_bot', { toolbar: false })
    } catch {
      //
    }
  }

  return { getStatus, issueToken }
})
