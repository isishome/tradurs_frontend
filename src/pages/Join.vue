<script setup>
import { ref, inject, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { checkEmail, checkComplexity } from '@/common'
import { nanoid } from 'nanoid'

const axios = inject('axios')
const $q = useQuasar()
const route = useRoute()
const router = useRouter()
const { t } = useI18n({ useScope: 'global' })

const disable = ref(false)
const email = ref(route.query.email || null)
const tempPw = email.value ? nanoid() : null
const info = ref({
  email: email.value,
  pw: tempPw
})
const complexity = reactive({
  value: 0,
  color: 'grey'
})
const updateComplexity = (val) => {
  if (!val) return
  const color = ['grey-3', 'red-6', 'deep-orange-6', 'amber-6', 'lime-6', 'green-6']
  complexity.value = checkComplexity(val)
  complexity.color = color[complexity.value / 20]
}
const cpw = ref(tempPw)
updateComplexity(info.value.pw)

const join = () => {
  disable.value = true
  axios.post('/account/join', info.value)
    .then(() => {
      $q.notify({
        color: 'positive',
        message: t('join.success')
      })
      router.replace({ name: 'Sign' })
    })
    .catch(() => { })
    .then(() => {
      disable.value = false
    })
}
</script>
<template>
  <div class="absolute-center">
    <q-card flat :bordered="$q.screen.gt.xs" class="join" :class="$q.screen.gt.xs ? 'q-pa-lg' : 'q-pa-none'">
      <q-card-section class="text-center">
        <q-btn :disable="disable" class="no-hover" dense flat padding="0" :ripple="false" :to="{ name: 'Main' }">
          <div class="row justify-center q-gutter-x-xs items-center">
            <img src="images/tradurs_logo.svg" width="40" />
            <img src="images/tradurs_text.svg" height="30" />
          </div>
        </q-btn>
      </q-card-section>
      <q-card-section>
        <q-form autocomplete="on" class="column q-gutter-y-md" @submit="join">
          <q-input :disable="disable" outlined no-error-icon hide-bottom-space :readonly="email !== null"
            v-model="info.email" type="email" maxlength="320"
            :rules="[val => val && val.length > - 6 && checkEmail(val) || '']" :label="t('sign.email')" />
          <q-input :disable="disable" outlined no-error-icon hide-bottom-space v-model="info.pw" type="password"
            maxlength="16" :rules="[val => val && val.length >= 8 && complexity.value >= 60 || '']"
            :label="t('sign.password')" @update:model-value="updateComplexity">
            <template #append>
              <q-knob readonly v-model="complexity.value" size="20px" :thickness="0.4" :color="complexity.color"
                track-color="grey-3" class="text-primary q-ma-md" />
            </template>
          </q-input>
          <q-input :disable="disable" outlined no-error-icon hide-bottom-space v-model="cpw" type="password"
            maxlength="16" :rules="[val => val && info.pw === val || '']" :label="t('join.confirmPassword')" />
          <q-btn no-caps :loading="disable" outline :ripple="false" text-color="secondary"
            class="bg-primary shadow-1 text-weight-bold" :label="t('join.join')" padding="md" type="submit" />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>
<style scoped>
.join {
  max-width: 400px;
  width: 90vw;
}
</style>