<script setup>
import { inject, ref, reactive, computed, nextTick } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import { checkComplexity } from '@/common'

const axios = inject('axios')
const $q = useQuasar()
const { t } = useI18n({ useScope: 'global' })

const screen = computed(() => $q.screen)

const form = ref(null)
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
const change = () => {
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
        form.value.resetValidation()
      })
    })
    .catch(() => { })
}
</script>
<template>
  <Title sub style="margin-top:0">{{ t('info.user') }}</Title>
  <q-card flat>
    <q-card-section class="text-weight-bold text-h5">
      {{ t('info.changePassword') }}
    </q-card-section>
    <q-card-section :class="screen.gt.sm ? 'q-px-xl' : 'q-px-sm'">
      <q-form ref="form" class="column q-gutter-y-md" @submit="change">
        <q-input no-error-icon hide-bottom-space outlined type="password" v-model="info.op"
          :label="t('info.currentPassword')" maxlength="16" :rules="[val => val && val.length >= 8 || '']"
          class="text-h5" />
        <q-input no-error-icon hide-bottom-space outlined type="password" v-model="info.np" :label="t('info.newPassword')"
          maxlength="16" :rules="[val => val && val.length >= 8 && complexity.value >= 60 || '']"
          @update:model-value="updateComplexity" class="text-h5">
          <template #append>
            <q-knob readonly v-model="complexity.value" size="24px" :thickness="0.4" :color="complexity.color"
              track-color="grey-3" class="text-primary q-ma-md" />
          </template>
        </q-input>
        <q-input no-error-icon hide-bottom-space outlined type="password" v-model="cp"
          :label="t('info.confirmNewPassword')" maxlength="16" :rules="[val => val && val === info.np || '']"
          class="text-h5" />
        <q-btn outline :ripple="false" text-color="secondary" class="bg-primary shadow-1 text-weight-bold"
          :label="t('info.change')" padding="lg" type="submit" />
      </q-form>
    </q-card-section>
  </q-card>
</template>
<style scoped></style>