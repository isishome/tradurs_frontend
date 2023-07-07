<script setup>
import { inject, ref, reactive, computed, nextTick } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import { useAccountStore } from '@/stores/account'
import { useRouter } from 'vue-router'
import { checkComplexity, checkBattleTag, checkEmail } from '@/common'

const axios = inject('axios')
const $q = useQuasar()
const { t } = useI18n({ useScope: 'global' })

const screen = computed(() => $q.screen)
const store = useAccountStore()
const router = useRouter()

const form1 = ref(null)
const info = ref({
  op: null,
  np: null
})
const cp = ref(null)
const complexity = reactive({
  value: 0,
  color: 'grey'
})
const updateComplexity = (val) => {
  const color = ['grey-3', 'red-6', 'deep-orange-6', 'amber-6', 'lime-6', 'green-6']
  complexity.value = checkComplexity(val)
  complexity.color = color[complexity.value / 20]
}

const changePassword = () => {
  axios.post('/account/change', info.value)
    .then(() => {
      $q.notify({
        color: 'positive',
        message: t('info.success')
      })
      info.value.op = null
      info.value.np = null
      cp.value = null
      complexity.value = 0
      complexity.color = 'grey'
      nextTick(() => {
        form1.value.resetValidation()
      })
    })
    .catch(() => { })
}

const form2 = ref(null)
const battlenet = reactive({
  battleTag: store.info.battleTag,
  modifiable: store.info.modifiable,
  loading: false
})
const changeBattleTag = () => {
  battlenet.loading = true
  axios.post('battlenet/tag/update', battlenet)
    .then(() => {
      $q.notify({
        color: 'positive',
        message: t('info.successBattleTag')
      })
      nextTick(() => {
        form2.value.resetValidation()
      })
    })
    .catch(() => { })
    .then(() => {
      store.checkSign(true)
        .then(() => {
          battlenet.battleTag = store.info.battleTag
          battlenet.modifiable = store.info.modifiable
        })
        .catch(() => { })
        .then(() => {
          battlenet.loading = false
        })
    })
}

const form3 = ref(null)
const withdrawal = reactive({
  email: null,
  loading: false
})
const confirmWithdrawal = () => {
  withdrawal.loading = true
  axios.post('account/withdrawal', withdrawal)
    .then(() => {
      $q.notify({
        color: 'positive',
        message: t('info.successWithdrawal')
      })

      store.signed = false
      store.info = {}
      router.push({ name: 'Main' })
    })
    .catch(() => { })
    .then(() => {
      withdrawal.loading = false
    })
}
const proceedWithdrawal = () => {
  $q.dialog({
    title: t('info.withdrawal'),
    class: 'withdrawal',
    message: t('info.confirmWithdrawal'),
    cancel: {
      unelevated: true,
      color: 'grey',
      label: t('btn.cancel')
    },
    ok: {
      unelevated: true,
      color: 'negative',
      class: 'text-weight-bold',
      label: t('info.withdrawalBtn')
    },
    persistent: true
  }).onOk(() => {
    confirmWithdrawal()
  })
}
</script>
<template>
  <div class="text-h5 text-weight-bold">{{ t('info.user') }}</div>
  <q-separator class="q-my-sm" />
  <q-card flat>
    <q-card-section class="text-weight-bold text-h6 q-pa-sm">
      {{ t('info.changePassword') }}
    </q-card-section>
    <q-card-section :class="screen.gt.sm ? 'q-px-xl' : 'q-px-sm'">
      <q-form ref="form1" class="column q-gutter-y-md" no-error-focus @submit="changePassword">
        <q-input dense no-error-icon hide-bottom-space outlined type="password" v-model="info.op"
          :label="t('info.currentPassword')" maxlength="16" :rules="[val => val && val.length >= 8 || '']"
          class="text-h6" />
        <q-input dense no-error-icon hide-bottom-space outlined type="password" v-model="info.np"
          :label="t('info.newPassword')" maxlength="16"
          :rules="[val => val && val.length >= 8 && complexity.value >= 60 || '']" @update:model-value="updateComplexity"
          class="text-h6">
          <template #append>
            <q-knob readonly v-model="complexity.value" size="24px" :thickness="0.4" :color="complexity.color"
              track-color="grey-3" class="text-primary q-ma-md" />
          </template>
        </q-input>
        <q-input dense no-error-icon hide-bottom-space outlined type="password" v-model="cp"
          :label="t('info.confirmNewPassword')" maxlength="16" :rules="[val => val && val === info.np || '']"
          class="text-h6" />
        <q-btn outline :ripple="false" text-color="secondary" class="bg-primary shadow-1 text-weight-bold"
          :label="t('btn.change')" padding="sm" type="submit" />
      </q-form>
    </q-card-section>
    <q-separator inset class="q-my-md" />
    <q-card-section class="q-pa-sm">
      <div class="row items-center q-gutter-x-md">
        <div class="text-weight-bold text-h6">{{ t('info.changeBattleTag') }}</div>
        <div class="text-caption text-negative">{{ t('info.alertBattleTag') }}</div>
      </div>
    </q-card-section>
    <q-card-section :class="screen.gt.sm ? 'q-px-xl' : 'q-px-sm'">
      <q-form ref="form2" class="column q-gutter-y-md" no-error-focus @submit="changeBattleTag">
        <q-input dense no-error-icon hide-bottom-space outlined :disable="!battlenet.modifiable || battlenet.loading"
          v-model="battlenet.battleTag" :label="t('info.battleTag')" maxlength="24"
          :rules="[val => val && checkBattleTag(val) || '']" class="text-subtitle1" />
        <q-btn outline :disable="!battlenet.modifiable" :loading="battlenet.loading" :ripple="false"
          text-color="secondary" class="bg-primary shadow-1 text-weight-bold" :label="t('btn.change')" padding="sm"
          type="submit" />
      </q-form>
    </q-card-section>
    <q-separator inset class="q-my-md" />
    <q-card-section class="q-pa-sm">
      <div class="row items-center q-gutter-x-md">
        <div class="text-weight-bold text-h6">{{ t('info.withdrawal') }}</div>
        <div class="text-caption text-negative">{{ t('info.alertWithdrawal') }}</div>
      </div>
    </q-card-section>
    <q-card-section :class="screen.gt.sm ? 'q-px-xl' : 'q-px-sm'">
      <q-form ref="form3" class="column q-gutter-y-md" no-error-focus @submit="proceedWithdrawal">
        <q-input :disable="withdrawal.loading" outlined no-error-icon hide-bottom-space v-model="withdrawal.email"
          type="email" maxlength="320" :rules="[val => val && checkEmail(val) || '']" :label="t('sign.email')" />
        <q-btn outline :disable="!(withdrawal.email && checkEmail(withdrawal.email))" :loading="withdrawal.loading"
          :ripple="false" text-color="secondary" class="bg-primary shadow-1 text-weight-bold" :label="t('btn.withdrawal')"
          padding="sm" type="submit" />
      </q-form>
    </q-card-section>
  </q-card>
</template>
<style scoped></style>