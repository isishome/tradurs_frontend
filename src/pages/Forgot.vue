<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { checkEmail } from '@/common'

const axios = inject('axios')
const router = useRouter()
const $q = useQuasar()

const disable = ref(false)
const email = ref(null)

const forgot = () => {
  disable.value = true
  axios.get('/account/forgot', {
    params: {
      email: email.value
    }
  })
    .then(() => {
      $q.notify({
        color: 'positive',
        message: '확인 이메일 발송 완료'
      })
      router.push({ name: 'Sign' })
    })
    .catch(() => { })
    .then(() => {
      disable.value = false
    })
}
</script>
<template>
  <div class="absolute-center">
    <q-card flat :bordered="$q.screen.gt.xs" class="forgot" :class="$q.screen.gt.xs ? 'q-pa-lg' : 'q-pa-none'">
      <q-card-section class="text-center">
        <q-btn :disable="disable" class="no-hover" dense flat padding="0" :ripple="false" :to="{ name: 'Main' }">
          <div class="row justify-center q-gutter-x-xs items-center">
            <img src="images/logo.svg" width="40" />
            <img src="images/logo.webp" height="30" />
          </div>
        </q-btn>
      </q-card-section>
      <q-card-section>
        <q-form class="column q-gutter-y-md" @submit="forgot">
          <q-input :disable="disable" outlined no-error-icon hide-bottom-space v-model="email" type="email"
            maxlength="320" :rules="[val => val && val.length >= 6 && checkEmail(val) || '']" label="이메일" />
          <q-btn :loading="disable" outline :ripple="false" text-color="secondary"
            class="bg-primary shadow-1 text-weight-bold" label="확인 메일 보내기" type="submit" padding="md" />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>
<style scoped>
.forgot {
  max-width: 400px;
  width: 90vw;
}
</style>