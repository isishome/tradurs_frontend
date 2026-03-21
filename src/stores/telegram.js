import { defineStore } from "pinia"
import { instance } from "@/axios"

export const useTelegramStore = defineStore("telegram", () => {
  const issueToken = async () => {
    try {
      const result = await instance.post("/telegram/issue")
      location.href = result.data.botLink
    } catch {
      //
    }
  }

  const sendMessage = async (message) => {
    try {
      await instance.post("/telegram/send", {
        message
      })
    } catch {
      //
    }
  }

  return { issueToken, sendMessage }
})
