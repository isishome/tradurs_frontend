<script setup>
import { ref, computed, inject, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import { useAccountStore } from '@/stores/account'
import { checkEmail, checkComplexity } from '@/common'

const backend = import.meta.env.VITE_APP_BACKEND_ORIGIN
const prod = import.meta.env.PROD

const axios = inject('axios')
const route = useRoute()
const router = useRouter()
const $q = useQuasar()
const { t } = useI18n({ useScope: 'global' })
const accountStore = useAccountStore()

const disable = ref(false)
const redirect = ref(route.query.redirect)
const redirectQuery = computed(() =>
  redirect.value ? `?redirect=${redirect.value}` : ''
)
const status = ref(route.query.status)
const rememberEmail = $q.cookies.has('T_R_E') ? $q.cookies.get('T_R_E') : null
const info = ref({
  email: import.meta.env.PROD
    ? rememberEmail
    : [
        'serasomething@gmail.com',
        'zeroday702@gmail.com',
        'fourshome@naver.com'
      ][Math.floor(Math.random() * 3)],
  pw: import.meta.env.PROD ? null : ''
})
const remember = ref(rememberEmail !== null)

const updateRememberEmail = (email) => {
  if (remember.value)
    $q.cookies.set('T_R_E', email, { path: '/', secure: prod, expires: 365 })
}

const updateRemember = (val) => {
  if (val)
    $q.cookies.set('T_R_E', info.value.email === null ? '' : info.value.email, {
      path: '/',
      secure: prod,
      expires: 365
    })
  else $q.cookies.remove('T_R_E')
}

const signIn = () => {
  disable.value = true
  axios
    .post('/account/signin', info.value)
    .then(() => {
      if (redirect.value)
        document.location.href = decodeURIComponent(redirect.value)
      else {
        accountStore.signed = null
        router.replace({ name: 'Main', params: { lang: route.params.lang } })
      }
    })
    .catch(() => {
      disable.value = false
    })
}

const social = (provider) => {
  disable.value = true
  location.href = `${backend}/account/oauth/${provider}${redirectQuery.value}`
}

const onDisable = () => {
  disable.value = false
}

onMounted(() => {
  if (status.value === 'failed') {
    $q.notify({
      color: 'negative',
      message: t('sign.failedToSocial')
    })
  } else if (status.value === 'unconfirmed') {
    $q.notify({
      color: 'warning',
      textColor: 'secondary',
      message: t('sign.needVerifyEmail')
    })
  } else if (status.value === 'blocked') {
    $q.notify({
      color: 'negative',
      message: t('sign.blockedAccount')
    })
  }

  window.addEventListener('beforeunload', onDisable)
})

onUnmounted(() => {
  window.removeEventListener('beforeunload', onDisable)
})
</script>
<template>
  <div class="absolute-center">
    <q-card
      flat
      :bordered="$q.screen.gt.xs"
      v-if="status !== 'complete'"
      class="sign"
      :class="$q.screen.gt.xs ? 'q-pa-lg' : 'q-pa-none'"
    >
      <q-card-section class="text-center">
        <q-btn
          :disable="disable"
          class="no-hover"
          dense
          flat
          padding="0"
          :ripple="false"
          :to="{ name: 'Main', params: { lang: route.params.lang } }"
        >
          <div
            class="row justify-center q-gutter-x-xs items-center"
            style="height: 30px"
          >
            <img src="/images/tradurs_logo.svg" width="40" />
            <img src="/images/tradurs_text.svg" height="30" />
          </div>
        </q-btn>
      </q-card-section>
      <q-card-section>
        <q-form autocomplete="on" class="column q-gutter-y-md" @submit="signIn">
          <q-input
            :disable="disable"
            outlined
            no-error-icon
            hide-bottom-space
            v-model="info.email"
            type="email"
            maxlength="320"
            :rules="[(val) => (val && checkEmail(val)) || '']"
            @update:model-value="updateRememberEmail"
            :label="t('sign.email')"
          />
          <q-input
            :disable="disable"
            outlined
            no-error-icon
            hide-bottom-space
            v-model="info.pw"
            type="password"
            maxlength="16"
            :rules="[
              (val) =>
                (val && val.length >= 8 && checkComplexity(val) >= 60) || ''
            ]"
            :label="t('sign.password')"
          />
          <div class="row justify-between q-gutter-x-sm items-start advanced">
            <q-checkbox
              :disable="disable"
              dense
              size="sm"
              flat
              v-model="remember"
              color="secondary"
              text-color="primary"
              @update:model-value="updateRemember"
            >
              <div style="font-size: 10px">
                {{ t('sign.remember') }}
              </div>
            </q-checkbox>
            <q-btn
              :disable="disable"
              dense
              padding="0"
              flat
              class="no-hover"
              :ripple="false"
              type="a"
              style="font-size: 10px"
              :to="{ name: 'Forgot', params: { lang: route.params.lang } }"
            >
              <div class="text-lowercase">
                {{ t('sign.forgot') }}
              </div>
            </q-btn>
          </div>
          <q-btn
            no-caps
            :loading="disable"
            outline
            :ripple="false"
            text-color="secondary"
            class="bg-primary shadow-1 text-weight-bold"
            :label="t('sign.signIn')"
            padding="md"
            type="submit"
          />
        </q-form>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="row justify-between items-center">
          <q-btn dense unelevated :disable="disable" padding="0" type="a">
            <img
              src="@/assets/google.svg"
              width="46"
              @click.prevent="social('google')"
            />
          </q-btn>
          <!-- <q-btn dense unelevated disable class="shadow-1" style="background-color:#1877F2" padding="8px" type="a"
            :href="`${backend}/account/oauth/facebook${redirectQuery}`">
            <img src="@/assets/facebook.png" width="24" />
          </q-btn> -->
          <q-btn
            dense
            unelevated
            :disable="disable"
            class="shadow-1"
            style="background-color: #1877f2"
            padding="8px"
            type="a"
            @click.prevent="social('battlenet')"
          >
            <img src="@/assets/battlenet.svg" class="invert" width="24" />
          </q-btn>
          <q-btn
            dense
            unelevated
            :disable="disable"
            class="shadow-1"
            padding="0"
            type="a"
            @click.prevent="social('naver')"
          >
            <img src="@/assets/naver.png" width="40" />
          </q-btn>
          <q-btn
            dense
            unelevated
            :disable="disable"
            class="shadow-1"
            style="background-color: #fee500"
            padding="10px"
            type="a"
            @click.prevent="social('kakao')"
          >
            <img src="@/assets/kakao_symbol.png" width="20" />
          </q-btn>
        </div>
      </q-card-section>
      <q-card-section class="advanced text-right">
        <q-btn
          no-caps
          dense
          padding="0"
          flat
          class="no-hover"
          :ripple="false"
          type="a"
          :to="{ name: 'Join', params: { lang: route.params.lang } }"
        >
          <div class="text-caption">{{ t('sign.new') }}</div>
        </q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>
<style scoped>
.sign {
  max-width: 400px;
  width: 90vw;
}

.advanced:deep(.q-btn__content div:hover) {
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
