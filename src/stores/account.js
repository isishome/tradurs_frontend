import { defineStore } from "pinia"
import { instance } from "@/axios"
import { reactive, ref } from "vue"

export const useAccountStore = defineStore("account", () => {
  const signed = ref(null)
  const info = reactive({})
  const noAds = ref(false)

  const checkSign = async (forced) => {
    if (signed.value === null || forced) {
      try {
        const response = await instance.get("/account/signed")
        Object.assign(info, response.data)
        signed.value = typeof response.data.id !== "undefined"
      } catch {
        //
      }
    }
  }

  return { signed, info, noAds, checkSign }
})
