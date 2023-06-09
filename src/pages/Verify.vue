<script setup>
import { inject, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const axios = inject('axios')
const route = useRoute()
const router = useRouter()
const $q = useQuasar()
const { t } = useI18n({ useScope: 'global' })

const code = route.query.code || null
const mode = route.query.mode || 'verify'

onMounted(() => {
  if (code === null)
    router.replace({ name: 'Sign' })
  else {
    axios.get(`/account/${mode}`, {
      params: {
        code: code
      }
    })
      .then((response) => {
        $q.notify({
          color: 'positive',
          message: mode === 'verify' && response.data === true ? t('verify.success') : mode === 'verify' && response.data === false ? t('verify.expired') : t('verify.new')
        })
      })
      .catch(() => { })
      .then(() => {
        router.replace({ name: 'Sign' })
      })
  }
})
</script>
<template></template>