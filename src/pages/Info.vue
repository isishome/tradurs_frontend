<script setup>
import { inject, ref, reactive, computed, nextTick } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import { useAccountStore } from '@/stores/account'
import { checkComplexity } from '@/common'

const axios = inject('axios')
const $q = useQuasar()
const { t } = useI18n({ useScope: 'global' })

const screen = computed(() => $q.screen)
const store = useAccountStore()

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
const battlenet = reactive({ battleTag: store.info.battleTag })
const changeBattleTag = () => {
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
          :label="t('info.change')" padding="sm" type="submit" />
      </q-form>
    </q-card-section>
    <q-separator inset class="q-my-md" />
    <q-card-section class="text-weight-bold text-h6 q-pa-sm">
      {{ t('info.changeBattleTag') }}
    </q-card-section>
    <q-card-section :class="screen.gt.sm ? 'q-px-xl' : 'q-px-sm'">
      <q-form ref="form2" class="column q-gutter-y-md" no-error-focus @submit="changeBattleTag">
        <q-input dense no-error-icon hide-bottom-space outlined v-model="battlenet.battleTag" :label="t('info.battleTag')"
          maxlength="24"
          :rules="[val => val && (/^([ㄱ-ㅎㅏ-ㅣ가-힣]{1}[ㄱ-ㅎㅏ-ㅣ가-힣0-9]{1,7}#[0-9]{4,}|[a-zA-Z]{1}[a-zA-Z0-9]{2,11}#[0-9]{4,})$/g).test(val) || '']"
          class="text-subtitle1" />
        <q-btn outline :ripple="false" text-color="secondary" class="bg-primary shadow-1 text-weight-bold"
          :label="t('info.change')" padding="sm" type="submit" />
      </q-form>
    </q-card-section>
  </q-card>
</template>
<style scoped></style>