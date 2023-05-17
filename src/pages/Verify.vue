<script setup>
import { inject, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

const axios = inject('axios')
const route = useRoute()
const router = useRouter()
const $q = useQuasar()

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
          message: mode === 'verify' && response.data === true ? '이메일 인증이 완료되었습니다.' : mode === 'verify' && response.data === false ? '인증 코드가 만료되어 새 인증 메일이 발송되었습니다.' : '이메일로 새 비밀번호가 발송되었습니다.'
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