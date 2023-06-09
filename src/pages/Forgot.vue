<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import { checkEmail } from '@/common'

const axios = inject('axios')
const router = useRouter()
const $q = useQuasar()
const { t } = useI18n({ useScope: 'global' })

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
        message: t('forgot.success')
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
            <img src="images/tradurs_logo.svg" width="40" />
            <img src="images/tradurs_text.svg" height="30" />
          </div>
        </q-btn>
      </q-card-section>
      <q-card-section>
        <q-form class="column q-gutter-y-md" @submit="forgot">
          <q-input :disable="disable" outlined no-error-icon hide-bottom-space v-model="email" type="email"
            maxlength="320" :rules="[val => val && val.length >= 6 && checkEmail(val) || '']" :label="t('sign.email')" />
          <q-btn no-caps :loading="disable" outline :ripple="false" text-color="secondary"
            class="bg-primary shadow-1 text-weight-bold" :label="t('forgot.send')" type="submit" padding="md" />
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