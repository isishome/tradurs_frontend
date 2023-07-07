<script setup>
import { ref, inject, reactive, computed } from 'vue'
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

const termsPolicy = computed(() => t('join.termsPolicy').split('|'))
const thumbStyle = {
  right: '4px',
  backgroundColor: '#777777',
  width: '3px',
  transform: 'scaleY(0.96)',
  opacity: 0.5,
  zIndex: 3000
}
const dialogShow = computed(() => ['Policy-Terms', 'Policy-Privacy', 'Policy-Cookies'].includes(route.name))
const showDialog = (name) => {
  router.push({ name: `Policy-${name}` })
}

const dialogHide = () => {
  router.push({ name: 'Join' })
}

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
            <img src="/images/tradurs_logo.svg" width="40" />
            <img src="/images/tradurs_text.svg" height="30" />
          </div>
        </q-btn>
      </q-card-section>
      <q-card-section>
        <q-form autocomplete="on" class="column q-gutter-y-md" @submit="join">
          <q-input :disable="disable" outlined no-error-icon hide-bottom-space :readonly="email !== null"
            v-model="info.email" type="email" maxlength="320" :rules="[val => val && checkEmail(val) || '']"
            :label="t('sign.email')" />
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
          <div class="q-my-sm text-caption terms-policy">
            <template v-for="(word, index) in termsPolicy">
              <span :key="index" v-if="word.indexOf('#terms#') !== -1">
                <a href="" @click.prevent="showDialog('Terms')">{{ word.replace(/#[a-zA-Z-]*#/gi, '') }}</a>
              </span>
              <span :key="`pp${index}`" v-else-if="word.indexOf('#privacy-policy#') !== -1">
                <a href="" @click.prevent="showDialog('Privacy')">{{ word.replace(/#[a-zA-Z-]*#/gi, '') }}</a>
              </span>
              <span :key="`cp${index}`" v-else-if="word.indexOf('#cookies-policy#') !== -1">
                <a href="" @click.prevent="showDialog('Cookies')">{{ word.replace(/#[a-zA-Z-]*#/gi, '') }}</a>
              </span>
              <span :key="`else${index}`" v-else>
                {{ word }}
              </span>
            </template>
          </div>
          <q-btn no-caps :loading="disable" outline :ripple="false" text-color="secondary"
            class="bg-primary shadow-1 text-weight-bold" :label="t('join.join')" padding="md" type="submit" />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
  <q-dialog v-model="dialogShow" full-height persistent :maximized="$q.screen.lt.md" transition-show="none"
    transition-hide="none" :transition-duration="0" @hide="dialogHide">
    <q-card :class="['column no-scroll no-padding', $q.screen.lt.md ? '' : 'policy-width']">
      <q-card-section class="q-pa-sm gt-sm text-right">
        <div>
          <q-btn flat round v-close-popup size="sm" :to="{ name: 'Join' }">
            <img src="@/assets/icons/close.svg" width="24" />
          </q-btn>
        </div>
      </q-card-section>
      <q-separator class="gt-sm" />
      <q-card-section class="col full-width no-padding">
        <q-scroll-area :thumb-style="thumbStyle" class="fit">
          <router-view />
        </q-scroll-area>
      </q-card-section>
      <q-separator class="lt-md" />
      <q-card-section class="lt-md text-right q-pa-sm">
        <div>
          <q-btn flat round v-close-popup size="sm" :to="{ name: 'Join' }">
            <img src="@/assets/icons/close.svg" width="24" />
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<style scoped>
.join {
  max-width: 400px;
  width: 90vw;
}

.terms-policy a {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
  word-break: keep-all;
}

.policy-width {
  width: 50vw !important;
  max-width: none !important;
  min-width: 1024px;
}
</style>